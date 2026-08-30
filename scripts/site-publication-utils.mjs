/* global process */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const root = process.cwd();
export const essaysDirectory = path.join(root, "src", "content", "essays");
export const controlRecordPath = path.join(root, "governance", "site-publication-control-record.json");
export const generatedDirectory = path.join(root, "public", "generated");
export const publicationManifestPath = path.join(generatedDirectory, "publication-manifest.json");
export const publicationImpactPath = path.join(generatedDirectory, "publication-impact.json");
export const entityGraphPath = path.join(root, "public", "entity", "jearonwong-mplp-gaic-entity-graph.json");
export const llmsPath = path.join(root, "public", "llms.txt");
export const llmsStartMarker = "<!-- BEGIN GENERATED PUBLICATION REGISTRY -->";
export const llmsEndMarker = "<!-- END GENERATED PUBLICATION REGISTRY -->";

const scalarKeys = new Set([
  "title", "description", "publishDate", "updatedAt", "status", "cluster", "projectProof",
  "publicationClass", "editorialTrack", "track", "canonicalRoute", "canonicalParent",
  "primaryAudience", "distinctReaderQuestion", "indexability", "maxClickDepth", "featured", "flagship", "series", "seriesOrder",
  "subtitle", "shareTitle", "shareImageTitle", "shareSubtitle", "shareDescription", "shareImage", "shareImageAlt", "ogImage", "ogImageAlt",
  "summary", "evidenceLevel", "readingTimeMinutes"
]);
const listKeys = new Set(["nextSteps", "secondaryAudiences", "sourceRefs", "tags", "relatedIdeas", "relatedProjects", "titleLines"]);

function parseScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if ((trimmed.startsWith("\"") && trimmed.endsWith("\"")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1).replaceAll("\\\"", "\"").replaceAll("''", "'");
  }
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try { return JSON.parse(trimmed.replaceAll("'", '"')); } catch { return trimmed; }
  }
  return trimmed;
}

function parseBlockScalar(lines, startIndex, indicator) {
  const blockLines = [];
  let endIndex = startIndex;

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const rawLine = lines[index].replace(/\s+$/, "");
    if (rawLine.trim() && !/^\s/.test(rawLine)) break;
    blockLines.push(rawLine);
    endIndex = index;
  }

  const indentation = blockLines
    .filter((line) => line.trim())
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0);
  const minimumIndent = indentation.length > 0 ? Math.min(...indentation) : 0;
  const normalized = blockLines.map((line) => line.trim() ? line.slice(minimumIndent) : "");
  const style = indicator[0];
  const chomping = indicator.slice(1);

  let value;
  if (style === ">") {
    value = normalized.reduce((result, line, index) => {
      if (index === normalized.length - 1) return `${result}${line}`;
      const nextLine = normalized[index + 1];
      return `${result}${line}${line === "" || nextLine === "" ? "\n" : " "}`;
    }, "");
  } else {
    value = normalized.join("\n");
  }

  if (chomping === "-") value = value.replace(/\n+$/, "");
  else if (!value.endsWith("\n")) value += "\n";

  return { value, endIndex };
}

export function parseEssayFrontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) throw new Error("essay is missing YAML frontmatter");
  const data = {};
  let currentListKey = null;
  const lines = match[1].split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.replace(/\s+$/, "");
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentListKey) {
      data[currentListKey].push(parseScalar(listItem[1]));
      continue;
    }
    const keyValue = line.match(/^([A-Za-z][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (!keyValue) continue;
    const [, key, value] = keyValue;
    if (!scalarKeys.has(key) && !listKeys.has(key)) {
      currentListKey = null;
      continue;
    }
    if (!value.trim() && listKeys.has(key)) {
      data[key] = [];
      currentListKey = key;
      continue;
    }
    if (scalarKeys.has(key) && /^[>|][+-]?$/.test(value.trim())) {
      const block = parseBlockScalar(lines, index, value.trim());
      data[key] = block.value;
      index = block.endIndex;
      currentListKey = null;
      continue;
    }
    data[key] = parseScalar(value);
    currentListKey = null;
  }
  return data;
}

export function loadEssays() {
  return fs.readdirSync(essaysDirectory)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const sourcePath = path.join(essaysDirectory, file);
      const data = parseEssayFrontmatter(fs.readFileSync(sourcePath, "utf8"));
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        source: path.relative(root, sourcePath).split(path.sep).join("/"),
        data,
        bodyHash: crypto.createHash("sha256").update(fs.readFileSync(sourcePath)).digest("hex")
      };
    });
}

export function loadControlRecord() {
  if (!fs.existsSync(controlRecordPath)) return { version: 1, waves: [] };
  const record = JSON.parse(fs.readFileSync(controlRecordPath, "utf8"));
  if (!record || record.version !== 1 || !Array.isArray(record.waves)) {
    throw new Error(`${path.relative(root, controlRecordPath)} must contain version: 1 and waves: []`);
  }
  const requiredApprovals = ["positioning", "navigation", "publication"];
  const seenSources = new Set();
  const seenRoutes = new Set();
  for (const wave of record.waves) {
    for (const key of ["waveId", "source", "canonicalRoute", "canonicalParent", "publicationClass", "editorialTrack", "primaryAudience", "distinctReaderQuestion", "sourceRefs", "indexability", "semanticMode", "navigationExposure"]) {
      if (!wave[key]) throw new Error(`${path.relative(root, controlRecordPath)} wave is missing ${key}`);
    }
    if (seenSources.has(wave.source)) throw new Error(`${path.relative(root, controlRecordPath)} contains duplicate source: ${wave.source}`);
    if (seenRoutes.has(wave.canonicalRoute)) throw new Error(`${path.relative(root, controlRecordPath)} contains duplicate route: ${wave.canonicalRoute}`);
    seenSources.add(wave.source);
    seenRoutes.add(wave.canonicalRoute);
    if (wave.canonicalParent !== "/essays/") throw new Error(`${path.relative(root, controlRecordPath)} wave ${wave.waveId} must use /essays/ as canonicalParent`);
    if (!Array.isArray(wave.sourceRefs) || wave.sourceRefs.length === 0) throw new Error(`${path.relative(root, controlRecordPath)} wave ${wave.waveId} requires sourceRefs`);
    if (wave.indexability !== "index") throw new Error(`${path.relative(root, controlRecordPath)} wave ${wave.waveId} must be indexable`);
    if (!wave.ownerApproval || requiredApprovals.some((key) => wave.ownerApproval[key] !== "approved")) {
      throw new Error(`${path.relative(root, controlRecordPath)} wave ${wave.waveId} requires approved positioning, navigation, and publication decisions`);
    }
    if (!Array.isArray(wave.requiredNextSteps) || wave.requiredNextSteps.length < 2) {
      throw new Error(`${path.relative(root, controlRecordPath)} wave ${wave.waveId} requires at least two next steps`);
    }
  }
  return record;
}

export function toRoute(essay) {
  return essay.data.canonicalRoute || `/essays/${essay.slug}/`;
}

export function resolveImpact(essay) {
  const sourceText = `${essay.data.title || ""} ${essay.data.description || ""} ${essay.data.tags || []}`;
  const coreSemantic = /MPLP|AI Agent Lifecycle|Agentic Delivery|Authority|Evidence|Outcome|Intent Drift/i.test(sourceText);
  return {
    synchronize: ["publication manifest", "llms.txt managed publication registry", "essay/site OG assets", "public/generated/media-manifest.json"],
    buildDerived: ["essay canonical route", "essays index placement", "RSS", "sitemap", "JSON-LD", "OG/Twitter metadata"],
    updateFromSot: coreSemantic ? ["llms.txt", "entity graph", "related concept/project surfaces"] : [],
    verifyOnly: ["authored article body", "article SVG figures", "white-paper artifacts"],
    ownerDecisionRequired: ["primary navigation promotion", "homepage flagship promotion", "new definition or stronger public claim"]
  };
}

export function buildPublicationRecord(essay, control) {
  const data = essay.data;
  const route = toRoute(essay);
  const configured = control.waves.find((wave) => wave.source === essay.source || wave.canonicalRoute === route);
  if (data.status === "published" && !configured) {
    throw new Error(`${essay.source} is published but has no publication control record`);
  }
  const record = {
    slug: essay.slug,
    title: data.title,
    description: data.description,
    route,
    canonicalParent: data.canonicalParent || "/essays/",
    publicationClass: data.publicationClass || "thought",
    editorialTrack: data.editorialTrack || data.track || "general",
    primaryAudience: data.primaryAudience || null,
    distinctReaderQuestion: data.distinctReaderQuestion,
    sourceRefs: Array.isArray(data.sourceRefs) ? data.sourceRefs : [],
    indexability: data.indexability || "index",
    nextSteps: Array.isArray(data.nextSteps) ? data.nextSteps : [],
    maxClickDepth: data.maxClickDepth || 3,
    publishDate: data.publishDate,
    status: data.status || "published",
    flagship: Boolean(data.flagship),
    featured: Boolean(data.featured),
    tags: Array.isArray(data.tags) ? data.tags : [],
    source: essay.source,
    bodySha256: essay.bodyHash,
    controlMode: configured ? "governed" : "legacy",
    control: configured ? {
      waveId: configured.waveId,
      semanticMode: configured.semanticMode || "conceptual",
      navigationExposure: configured.navigationExposure || "essays-index",
      ownerApproval: configured.ownerApproval || {}
    } : null,
    impact: resolveImpact(essay)
  };
  if (record.status === "published" && (!record.distinctReaderQuestion || record.sourceRefs.length === 0 || record.indexability !== "index" || record.nextSteps.length < 2)) {
    throw new Error(`${essay.source} must provide a reader question, source references, indexability, and two next steps`);
  }
  if (configured) {
    for (const key of ["canonicalRoute", "canonicalParent", "publicationClass", "editorialTrack", "primaryAudience", "distinctReaderQuestion", "indexability"]) {
      const expected = key === "canonicalRoute" ? route : record[key];
      if (configured[key] !== expected) throw new Error(`${essay.source} does not match control record ${key}`);
    }
    if (JSON.stringify(configured.requiredNextSteps) !== JSON.stringify(record.nextSteps)) {
      throw new Error(`${essay.source} nextSteps do not match its publication control record`);
    }
    if (JSON.stringify(configured.sourceRefs) !== JSON.stringify(record.sourceRefs)) {
      throw new Error(`${essay.source} sourceRefs do not match its publication control record`);
    }
  }
  if (record.status === "published" && (
    typeof record.description !== "string"
    || record.description.trim().length < 40
    || /^[>|][+-]?$/.test(record.description.trim())
  )) {
    throw new Error(`${essay.source} must provide a meaningful published description`);
  }
  return record;
}

export function buildManifest() {
  const control = loadControlRecord();
  const records = loadEssays()
    .filter((essay) => essay.data.status === "published")
    .map((essay) => buildPublicationRecord(essay, control))
    .sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate)) || a.slug.localeCompare(b.slug));
  return {
    schemaVersion: 1,
    generatedBy: "scripts/site-publication-sync.mjs",
    sourceOfTruth: ["src/content/essays/", "governance/site-publication-control-record.json"],
    records
  };
}

export function buildImpactManifest(manifest) {
  const records = manifest.records.map((record) => ({
    slug: record.slug,
    route: record.route,
    title: record.title,
    source: record.source,
    controlMode: record.controlMode,
    impact: record.impact
  }));
  return {
    schemaVersion: 1,
    generatedBy: "scripts/site-publication-sync.mjs",
    sourceOfTruth: ["src/content/essays/", "governance/site-publication-control-record.json", "src/data/siteGovernance.ts"],
    derivedSurfaces: {
      synchronize: ["public/generated/publication-manifest.json", "public/generated/publication-impact.json", "public/generated/media-manifest.json", "public/llms.txt managed publication registry", "public/entity/jearonwong-mplp-gaic-entity-graph.json publication registry", "public/social essay/page OG pairs"],
      buildAndVerify: ["/essays/ index", "canonical essay routes", "RSS", "sitemap", "JSON-LD", "OG/Twitter metadata", "related content links"],
      manualReview: ["authored article body", "article SVG figures", "white-paper HTML/PDF artwork", "external social previews"]
    },
    records
  };
}

export function buildEntityPublicationRegistry(manifest) {
  return manifest.records.map((record) => ({
    id: `essay-${record.slug}`,
    name: record.title,
    type: "Essay",
    canonical_url: `https://www.jearonwong.com${record.route}`,
    source_authority: "owned-canonical",
    publication_class: record.publicationClass,
    editorial_track: record.editorialTrack,
    primary_audience: record.primaryAudience,
    indexability: record.indexability,
    relation: "published-publication",
    boundary: "Authored publication record; does not claim certification, legal compliance proof, regulator approval, vendor endorsement, or external adoption."
  }));
}

export function renderLlmsBlock(manifest) {
  const lines = [llmsStartMarker, "## Published Publication Registry (generated)", "", "The following routes are derived from the published essay collection; publication control records are attached where present.", ""];
  for (const record of manifest.records) {
    const canonicalUrl = `https://www.jearonwong.com${record.route}`;
    lines.push(`- [${record.title}](${canonicalUrl})`);
    lines.push(`  Class: ${record.publicationClass}; Track: ${record.editorialTrack}; Audience: ${record.primaryAudience || "not specified"}.`);
    lines.push(`  Reader question: ${record.distinctReaderQuestion}`);
    lines.push(`  Next steps: ${record.nextSteps.join(", ")}.`);
  }
  lines.push("", llmsEndMarker);
  return lines.join("\n");
}

export function validateLlmsLinks(source) {
  const markdownLinkPattern = /\[[^\]\n]+\]\((https?:\/\/[^)\s]+)\)/g;
  const markdownLinks = [...source.matchAll(markdownLinkPattern)];
  const withoutMarkdownLinks = source.replace(markdownLinkPattern, "");
  const bareUrls = withoutMarkdownLinks.match(/https?:\/\/[^\s<>()]+/g) ?? [];
  const failures = [];
  if (!/^#\s+\S/m.test(source)) failures.push("must contain a level-one Markdown heading");
  if (markdownLinks.length === 0) failures.push("must contain at least one absolute Markdown link");
  if (bareUrls.length > 0) {
    failures.push(`contains ${bareUrls.length} bare URL(s); wrap every absolute URL in Markdown link syntax`);
  }
  return { linkCount: markdownLinks.length, bareUrls, failures };
}

export function replaceManagedLlmsBlock(source, block) {
  const range = new RegExp(`${llmsStartMarker}[\\s\\S]*?${llmsEndMarker}`, "m");
  return range.test(source) ? source.replace(range, block) : `${source.trimEnd()}\n\n${block}\n`;
}

export function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}
