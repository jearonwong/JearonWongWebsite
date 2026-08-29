/* global process, console */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const essaysDir = path.join(root, "src", "content", "essays");
const legacySlugs = [
  "when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai",
  "the-audit-object-for-agentic-ai-has-changed"
];
const whitePaperHtml = [
  "research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
  "research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
  "research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html"
];
const canonicalEssaySlugs = new Set();
const astroConfig = path.join(root, "astro.config.mjs");

const failures = [];
const reviews = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const read = (file) => fs.readFileSync(file, "utf8");
const exists = (file) => fs.existsSync(file);
const pngDimensions = (file) => {
  const buffer = fs.readFileSync(file);
  if (buffer.length < 24 || buffer.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
};
const sha256 = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
const normalizeRelativePath = (value) => String(value).replaceAll("\\", "/").replace(/^\/+/, "");
const schemaDatePattern = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:?\d{2})?)?$/;

function collectJsonLd(html, relative) {
  const entries = [];
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(match[1]);
      entries.push(...(Array.isArray(parsed) ? parsed : [parsed]));
    } catch (error) {
      fail(`JSON-LD is not valid JSON: ${relative} (${error.message})`);
    }
  }
  return entries;
}

function inspectSchemaDates(entries, relative) {
  for (const entry of entries) {
    if (!entry || typeof entry !== "object") continue;
    for (const key of ["datePublished", "dateModified"]) {
      if (!(key in entry)) continue;
      const value = entry[key];
      if (typeof value !== "string" || !schemaDatePattern.test(value) || Number.isNaN(Date.parse(value))) {
        fail(`JSON-LD ${key} must be a complete ISO 8601 date or datetime: ${relative} (${String(value)})`);
      }
    }
    if (typeof entry.datePublished === "string" && typeof entry.dateModified === "string"
      && schemaDatePattern.test(entry.datePublished) && schemaDatePattern.test(entry.dateModified)
      && Date.parse(entry.dateModified) < Date.parse(entry.datePublished)) {
      fail(`JSON-LD dateModified predates datePublished: ${relative}`);
    }
  }
}

function inspectImageRights(entries, relative) {
  const imageObjects = [];
  const visit = (value) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    const types = Array.isArray(value["@type"]) ? value["@type"] : [value["@type"]];
    if (types.includes("ImageObject")) imageObjects.push(value);
    Object.values(value).forEach(visit);
  };
  entries.forEach(visit);
  for (const imageObject of imageObjects) {
    if (typeof imageObject.license !== "string" || !imageObject.license.startsWith("https://www.jearonwong.com/terms/")) {
      fail(`ImageObject license must point to the site image-rights terms: ${relative}`);
    }
    if (typeof imageObject.acquireLicensePage !== "string" || !imageObject.acquireLicensePage.startsWith("https://www.jearonwong.com/contact/")) {
      fail(`ImageObject acquireLicensePage must point to the site licensing contact: ${relative}`);
    }
  }
}

function inspectArtifactIntegrity(manifestPath, builtHtmlPath) {
  const relativeManifest = path.relative(root, manifestPath).split(path.sep).join("/");
  const checksumPath = path.join(path.dirname(manifestPath), "checksums.sha256");
  if (!exists(checksumPath)) {
    fail(`white paper checksum file missing: ${relativeManifest}`);
    return { artifactCount: 0 };
  }

  let manifestData;
  try {
    manifestData = JSON.parse(read(manifestPath));
  } catch (error) {
    fail(`white paper manifest is not valid JSON: ${relativeManifest} (${error.message})`);
    return { artifactCount: 0 };
  }

  const checksums = new Map();
  const checksumLines = read(checksumPath).split(/\r?\n/).filter(Boolean);
  for (const line of checksumLines) {
    const match = line.match(/^([0-9a-f]{64})\s+(.+)$/i);
    if (!match) {
      fail(`white paper checksum line is malformed: ${relativeManifest}`);
      continue;
    }
    const checksumKey = normalizeRelativePath(match[2].trim());
    if (checksums.has(checksumKey)) fail(`white paper checksum path is duplicated: ${checksumKey}`);
    checksums.set(checksumKey, match[1].toLowerCase());
  }

  let artifactCount = 0;
  const manifestArtifacts = Array.isArray(manifestData.artifacts) ? manifestData.artifacts : [];
  if (manifestArtifacts.length === 0) fail(`white paper manifest has no artifacts: ${relativeManifest}`);
  for (const artifact of manifestArtifacts) {
    artifactCount += 1;
    const publicRelative = normalizeRelativePath(artifact.path);
    if (!publicRelative || publicRelative.startsWith("../")) {
      fail(`white paper artifact path is unsafe: ${relativeManifest}`);
      continue;
    }
    const repositoryRelative = `public/${publicRelative}`;
    const artifactFile = path.join(root, repositoryRelative);
    if (!exists(artifactFile)) {
      fail(`white paper artifact file missing: ${publicRelative}`);
      continue;
    }
    const actualHash = sha256(artifactFile);
    const actualBytes = fs.statSync(artifactFile).size;
    if (artifact.sha256 && artifact.sha256.toLowerCase() !== actualHash) {
      fail(`white paper manifest hash mismatch: ${publicRelative}`);
    }
    if (Number.isInteger(artifact.bytes) && artifact.bytes !== actualBytes) {
      fail(`white paper manifest byte count mismatch: ${publicRelative} (${artifact.bytes} recorded, ${actualBytes} actual)`);
    }
    const recordedHash = checksums.get(repositoryRelative);
    if (!recordedHash) fail(`white paper checksum entry missing: ${repositoryRelative}`);
    else if (recordedHash !== actualHash) fail(`white paper checksum hash mismatch: ${repositoryRelative}`);

    const builtPath = path.join(dist, publicRelative);
    if (!exists(builtPath)) fail(`built white paper artifact missing: ${publicRelative}`);
    else if (sha256(builtPath) !== actualHash) fail(`built white paper artifact differs from public artifact: ${publicRelative}`);
    if (artifact.role === "HTML" && builtHtmlPath && exists(builtHtmlPath) && sha256(builtHtmlPath) !== actualHash) {
      fail(`built white paper HTML differs from manifest artifact: ${publicRelative}`);
    }
  }

  for (const [checksumKey, recordedHash] of checksums) {
    if (!checksumKey || checksumKey.startsWith("../")) {
      fail(`white paper checksum path is unsafe: ${relativeManifest}`);
      continue;
    }
    const checksumTarget = path.join(root, checksumKey);
    if (!exists(checksumTarget)) {
      fail(`white paper checksum points to a missing file: ${checksumKey}`);
    } else if (sha256(checksumTarget) !== recordedHash) {
      fail(`white paper checksum does not match its target file: ${checksumKey}`);
    }
  }

  const actualManifestHash = sha256(manifestPath);
  const recordedManifestHash = checksums.get(relativeManifest);
  if (!recordedManifestHash) fail(`white paper checksum entry missing: ${relativeManifest}`);
  else if (recordedManifestHash !== actualManifestHash) fail(`white paper manifest checksum hash mismatch: ${relativeManifest}`);

  const declaredHtmlHash = manifestData.checksums && typeof manifestData.checksums === "object"
    ? manifestData.checksums.public_html
    : null;
  const htmlArtifact = manifestArtifacts.find((artifact) => artifact.role === "HTML");
  if (declaredHtmlHash && htmlArtifact && declaredHtmlHash.toLowerCase() !== htmlArtifact.sha256.toLowerCase()) {
    fail(`white paper manifest checksums.public_html does not match HTML artifact: ${relativeManifest}`);
  }
  return { artifactCount };
}

const stripNonContent = (html) => html
  .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
  .replace(/<script\b[\s\S]*?<\/script>/gi, " ");

function inspectStandaloneTables(html) {
  const content = stripNonContent(html);
  const tokens = /<\/?div\b[^>]*>|<table\b[^>]*>/gi;
  const stack = [];
  let tableCount = 0;
  let markedRegionCount = 0;
  let unmarkedTableCount = 0;
  let token;
  while ((token = tokens.exec(content))) {
    if (/^<\/div\b/i.test(token[0])) {
      stack.pop();
      continue;
    }
    if (/^<div\b/i.test(token[0])) {
      const attrs = token[0];
      const marked = /data-scroll-region=["']table["']/i.test(attrs)
        && /role=["']region["']/i.test(attrs)
        && /tabindex=["']0["']/i.test(attrs)
        && (/(?:aria-label|aria-labelledby)=["'][^"']+["']/i.test(attrs));
      if (marked) markedRegionCount += 1;
      stack.push({ marked });
      continue;
    }
    tableCount += 1;
    if (!stack.some((entry) => entry.marked)) unmarkedTableCount += 1;
  }
  return { tableCount, markedRegionCount, unmarkedTableCount };
}

function inspectHeadingOutline(html) {
  const content = stripNonContent(html);
  return [...content.matchAll(/<h([1-6])\b[^>]*>/gi)].map((match) => Number(match[1]));
}

if (!exists(dist)) {
  fail("dist/ is missing; run npm run build first");
} else {
  const builtHtmlFiles = [];
  const collectHtml = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) collectHtml(file);
      else if (entry.name.endsWith(".html")) builtHtmlFiles.push(file);
    }
  };
  collectHtml(dist);
  for (const file of builtHtmlFiles) {
    const relative = path.relative(dist, file).split(path.sep).join("/");
    const entries = collectJsonLd(read(file), relative);
    inspectSchemaDates(entries, relative);
    inspectImageRights(entries, relative);
  }
  pass(`all built JSON-LD date and image-rights contracts checked (${builtHtmlFiles.length} HTML files)`);

  const essayFiles = fs.readdirSync(essaysDir).filter((file) => file.endsWith(".md"));
  const astroConfigText = exists(astroConfig) ? read(astroConfig) : "";
  for (const file of essayFiles) {
    const source = read(path.join(essaysDir, file));
    const slug = file.replace(/\.md$/, "");
    const status = source.match(/^status:\s*([^\n]+)/m)?.[1]?.trim() ?? "published";
    const route = path.join(dist, "essays", slug, "index.html");
    if (status === "published" && !exists(route)) fail(`published essay route missing: ${slug}`);
    if (status === "draft" && exists(route)) fail(`draft essay leaked into build: ${slug}`);
    if (status === "published") canonicalEssaySlugs.add(slug);
    if (status === "published" && !/^track:\s*(lifecycle|foundation|protocol|research|general)\s*$/m.test(source)) fail(`published essay missing explicit track: ${slug}`);
    if (status === "published" && !/^updatedAt:\s*\d{4}-\d{2}-\d{2}\s*$/m.test(source)) fail(`published essay missing updatedAt: ${slug}`);
    if (status === "published") {
      const shareImage = source.match(/^shareImage:\s*([^\s]+)\s*$/m)?.[1];
      const shareFile = shareImage ? path.join(root, "public", shareImage.replace(/^\//, "")) : null;
      if (!shareFile || !exists(shareFile)) fail(`published essay share image missing: ${slug}`);
      else {
        const dimensions = pngDimensions(shareFile);
        if (!dimensions || dimensions.width !== 1200 || dimensions.height !== 630) fail(`published essay share image must be 1200x630: ${slug}`);
      }
    }
    const legacyBlock = source.match(/^legacySlugs:\s*\n((?:\s+-\s+[^\n]+\n?)*)/m)?.[1] ?? "";
    for (const legacySlug of Array.from(legacyBlock.matchAll(/^\s+-\s+([^\n]+)$/gm), (match) => match[1].trim())) {
      if (!astroConfigText.includes(`/essays/${legacySlug}/`)) fail(`legacy slug missing explicit redirect: ${legacySlug}`);
    }
    if (status === "published" && exists(route)) {
      const routeHtml = read(route);
      const h1Count = (routeHtml.match(/<h1\b/gi) ?? []).length;
      if (h1Count !== 1) fail(`essay must have one h1: ${slug} (${h1Count})`);
      if (!/dateModified/.test(routeHtml)) fail(`published essay missing dateModified JSON-LD: ${slug}`);
      const jsonLd = collectJsonLd(routeHtml, `essays/${slug}/index.html`);
      inspectSchemaDates(jsonLd, `essays/${slug}/index.html`);
      inspectImageRights(jsonLd, `essays/${slug}/index.html`);
    }
  }
  pass("essay publication status and h1 contracts checked");

  const sitemap = fs.readdirSync(dist)
    .filter((file) => file.startsWith("sitemap-") && file.endsWith(".xml"))
    .map((file) => read(path.join(dist, file)))
    .join("\n");
  const rssFile = path.join(dist, "rss.xml");
  const rss = exists(rssFile) ? read(rssFile) : "";

  const essaysIndex = path.join(dist, "essays", "index.html");
  const essaysIndexHtml = exists(essaysIndex) ? read(essaysIndex) : "";
  for (const slug of canonicalEssaySlugs) {
    if (!essaysIndexHtml.includes(`/essays/${slug}/`)) fail(`published essay missing from essays index: ${slug}`);
    if (!rss.includes(`/essays/${slug}/`)) fail(`published essay missing from RSS: ${slug}`);
    if (!sitemap.includes(`/essays/${slug}/`)) fail(`published essay missing from sitemap: ${slug}`);
  }
  pass("published essay index, RSS, and sitemap coverage checked");

  for (const slug of legacySlugs) {
    const legacyRoute = path.join(dist, "essays", slug, "index.html");
    if (!exists(legacyRoute)) {
      fail(`legacy redirect output missing: ${slug}`);
      continue;
    }
    const legacyHtml = read(legacyRoute);
    const target = "/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/";
    if (!legacyHtml.includes(target) || /<h1\b/i.test(legacyHtml)) fail(`legacy route is not a redirect-only surface: ${slug}`);
  }
  pass("legacy essay redirect strategy checked");

  for (const file of essayFiles) {
    const source = read(path.join(essaysDir, file));
    const slug = file.replace(/\.md$/, "");
    const status = source.match(/^status:\s*([^\n]+)/m)?.[1]?.trim() ?? "published";
    if (status === "draft") {
      if (sitemap.includes(`/essays/${slug}/`)) fail(`draft essay remains in sitemap: ${slug}`);
      if (rss.includes(`/essays/${slug}/`)) fail(`draft essay remains in RSS: ${slug}`);
    }
  }
  pass("draft essay absence from sitemap and RSS checked");
  for (const slug of legacySlugs) {
    if (sitemap.includes(`/essays/${slug}/`)) fail(`legacy essay remains in sitemap: ${slug}`);
  }
  pass("legacy essay routes are excluded from sitemap");

  for (const relative of whitePaperHtml) {
    const file = path.join(dist, relative);
    if (!exists(file)) {
      fail(`white paper HTML artifact missing from build: ${relative}`);
      continue;
    }
    const html = read(file);
    const whitePaperJsonLd = collectJsonLd(html, relative);
    inspectSchemaDates(whitePaperJsonLd, relative);
    const manifest = path.join(root, "public", relative.replace(/\/[^/]+\.html$/, "/manifest.json"));
    const manifestData = exists(manifest) ? JSON.parse(read(manifest)) : null;
    if (manifestData) {
      const integrity = inspectArtifactIntegrity(manifest, file);
      pass(`white paper artifact integrity checked (${relative}; ${integrity.artifactCount} manifest artifacts)`);
    }
    if (!/<link rel="canonical" href="[^"]+"/.test(html)) fail(`white paper missing canonical: ${relative}`);
    if (!/<meta property="og:url" content="[^"]+"/.test(html)) fail(`white paper missing og:url: ${relative}`);
    if (!/<meta property="og:image" content="[^"]+"/.test(html)) fail(`white paper missing og:image: ${relative}`);
    if (!/<meta name="twitter:image" content="[^"]+"/.test(html)) fail(`white paper missing twitter:image: ${relative}`);
    if (!/TechArticle/.test(html)) fail(`white paper missing TechArticle JSON-LD: ${relative}`);
    if (!/documentId|identifier/.test(html)) fail(`white paper missing document identity metadata: ${relative}`);
    if (!/<meta name="author" content="[^"]+"/.test(html)) fail(`white paper missing author metadata: ${relative}`);
    if (!/<meta name="citation_author" content="[^"]+"/.test(html)) fail(`white paper missing citation author metadata: ${relative}`);
    if (!/<meta name="citation_title" content="[^"]+"/.test(html)) fail(`white paper missing citation title metadata: ${relative}`);
    if (!/<meta name="citation_technical_report_number" content="[^"]+"/.test(html)) fail(`white paper missing version/document identity metadata: ${relative}`);
    if (!/<meta name="citation_series" content="[^"]+"/.test(html)) fail(`white paper missing series metadata: ${relative}`);
    if (!/<meta name="document_version" content="[^"]+"/.test(html)) fail(`white paper missing explicit version metadata: ${relative}`);
    if (!/<meta name="publication_status" content="public-research-edition"/.test(html)) fail(`white paper missing publication status metadata: ${relative}`);

    const tableAccessibility = inspectStandaloneTables(html);
    if (tableAccessibility.unmarkedTableCount > 0) {
      fail(`white paper tables must be inside a labelled keyboard-scroll region: ${relative} (${tableAccessibility.unmarkedTableCount} unmarked)`);
    }
    if (tableAccessibility.tableCount > 0 && tableAccessibility.markedRegionCount === 0) {
      fail(`white paper has tables but no labelled scroll regions: ${relative}`);
    }
    const headingLevels = inspectHeadingOutline(html);
    const h1Count = headingLevels.filter((level) => level === 1).length;
    if (h1Count === 0) fail(`white paper is missing a document h1: ${relative}`);
    if (h1Count > 1) fail(`white paper heading outline must contain one document h1: ${relative} (${h1Count})`);
    for (let index = 1; index < headingLevels.length; index += 1) {
      if (headingLevels[index] - headingLevels[index - 1] > 1) {
        fail(`white paper heading outline skips a level (${headingLevels[index - 1]} -> ${headingLevels[index]}): ${relative}`);
        break;
      }
    }
    pass(`white paper table accessibility and heading outline inspected (${relative}; ${tableAccessibility.tableCount} tables, ${tableAccessibility.markedRegionCount} scroll regions)`);
    if (manifestData) {
      const expected = {
        author: manifestData.author,
       title: manifestData.title,
        citationTitle: manifestData.subtitle ? manifestData.title + ": " + manifestData.subtitle : manifestData.title,
       report: manifestData.document_id,
        series: manifestData.series,
        status: manifestData.status === "public_research_edition" ? "public-research-edition" : manifestData.status
      };
      const markerFor = (name, value) => "<meta name=\"" + name + "\" content=\"" + String(value ?? "").replaceAll("&", "&amp;") + "\"";
      for (const [name, value] of Object.entries({
        author: expected.author,
        citation_title: expected.citationTitle,
        citation_technical_report_number: expected.report,
        citation_series: expected.series,
        publication_status: expected.status
      })) {
        if (value && !html.includes(markerFor(name, value))) fail("white paper " + name + " metadata does not match manifest: " + relative);
      }
      const version = String(expected.report ?? "").match(/v\d+(?:\.\d+)+/i)?.[0];
      if (version && !html.includes(markerFor("document_version", version))) fail("white paper document_version does not match manifest: " + relative);
    }
  }
  pass("white paper HTML social metadata checked");

  const figureDir = path.join(root, "public", "figures");
  if (exists(figureDir)) {
    for (const file of fs.readdirSync(figureDir).filter((entry) => entry.endsWith(".svg"))) {
      const svg = read(path.join(figureDir, file));
      if (!/<title[ >]/.test(svg) || !/<desc[ >]/.test(svg)) fail(`SVG figure missing title/desc: ${file}`);
    }
    pass("SVG semantic title and description contracts checked");
  }

  const llms = path.join(root, "public", "llms.txt");
  if (exists(llms)) {
    const llmsText = read(llms);
    for (const slug of canonicalEssaySlugs) {
      if (!llmsText.includes(`/essays/${slug}/`)) fail(`published essay missing from llms.txt: ${slug}`);
    }
    for (const slug of legacySlugs) {
      if (llmsText.includes(`/essays/${slug}/`)) fail(`legacy essay remains in llms.txt: ${slug}`);
    }
    pass("llms legacy route drift checked");
  }

  const evidencePage = path.join(dist, "evidence", "index.html");
  if (exists(evidencePage)) {
    const evidenceHtml = read(evidencePage);
    for (const route of ["/about/", "/projects/mplp/", "/projects/cognitive-os/", "/projects/solocrew/", "/projects/validation-lab/", "/research/"]) {
      if (!evidenceHtml.includes(route)) fail(`evidence registry missing canonical route: ${route}`);
    }
    pass("evidence registry canonical route coverage checked");
  }

  const entityGraph = path.join(root, "public", "entity", "jearonwong-mplp-gaic-entity-graph.json");
  if (exists(entityGraph)) {
    const entityText = read(entityGraph);
    for (const route of ["/about/", "/projects/mplp/", "/research/global-ai-compliance-white-paper-2026/", "/concepts/agentic-lifecycle-governance/"]) {
      if (!entityText.includes(route)) fail(`entity graph missing canonical route: ${route}`);
    }
    pass("entity graph canonical route coverage checked");
  }

  for (const route of ["lifecycle", "projects", "research", "concepts/agentic-lifecycle-governance"]) {
    const file = path.join(dist, route, "index.html");
    if (!exists(file) || !read(file).includes("SEMANTIC_RECORD")) fail(`semantic GEO record missing: /${route}/`);
  }
  pass("page-level semantic GEO record coverage checked");
}

if (failures.length > 0) {
  console.error("\nPublication audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
}
if (reviews.length > 0) {
  console.warn("\nPublication audit review items:");
  for (const item of reviews) console.warn(`- ${item}`);
}
if (failures.length === 0) console.log("Publication audit passed.");
else process.exitCode = 1;
