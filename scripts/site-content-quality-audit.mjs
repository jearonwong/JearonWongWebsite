/* global process, console, URL */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const taxonomyFile = path.join(root, "src", "data", "taxonomy.ts");
const llmsFile = path.join(root, "public", "llms.txt");
const entityGraphFile = path.join(root, "public", "entity", "jearonwong-mplp-gaic-entity-graph.json");

const failures = [];
const reviews = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const info = (message) => console.log(`[INFO] ${message}`);
const review = (message) => reviews.push(message);
const fail = (message) => failures.push(message);
const exists = (file) => fs.existsSync(file);
const read = (file) => fs.readFileSync(file, "utf8");

const detailFamilies = [
  { id: "governance", prefix: "/governance/", marker: "MAPPING_RECORD" },
  { id: "playbooks", prefix: "/playbooks/", marker: "PLAYBOOK_RECORD" },
  { id: "ecosystem", prefix: "/mapping/extended-ecosystem/", marker: "SOURCE_QUALIFIED" }
];

// Comparative or companion pages can be intentionally adjacent without being
// duplicate publications. Keep the relationship explicit so the audit does
// not hide a threshold violation behind a broad allow-list.
const intentionalAdjacentPairs = new Map([
  [
    [
      "/playbooks/harness-engineering-for-ai-agents/",
      "/playbooks/prompt-engineering-vs-harness-engineering/"
    ].sort().join("|") ,
    "definition page paired with an explicit prompt-versus-harness comparison"
  ]
]);

function walk(directory, callback) {
  if (!exists(directory)) return;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file, callback);
    else callback(file);
  }
}

function routeForFile(file) {
  const relative = path.relative(dist, path.dirname(file)).replaceAll(path.sep, "/");
  return relative ? `/${relative}/` : "/";
}

function stripMarkup(html) {
  return html
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, " ")
    .replace(/<header\b[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractClassElement(html, className) {
  const escapedClass = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const opener = new RegExp(`<([a-z][a-z0-9:-]*)\\b[^>]*class=["'][^"']*\\b${escapedClass}\\b[^"']*["'][^>]*>`, "i");
  const match = html.match(opener);
  if (!match || match.index === undefined) return "";
  const tag = match[1];
  const tagPattern = new RegExp(`<\\/?${tag}\\b[^>]*>`, "gi");
  tagPattern.lastIndex = match.index + match[0].length;
  let depth = 1;
  let cursor;
  while ((cursor = tagPattern.exec(html))) {
    if (cursor[0].startsWith(`</`)) depth -= 1;
    else if (!cursor[0].endsWith("/>") && !cursor[0].startsWith("<!--")) depth += 1;
    if (depth === 0) return html.slice(match.index, cursor.index + cursor[0].length);
  }
  return html.slice(match.index);
}

function editorialMarkup(html) {
  return (
    extractClassElement(html, "governance-article") ||
    extractClassElement(html, "playbook-article") ||
    extractClassElement(html, "ecosystem-article") ||
    html
  );
}

function removeClassElement(html, className) {
  const escapedClass = className.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // Source-trace is a single section in the governed detail renderers. The
  // scoped fallback keeps this audit robust when nested article wrappers make
  // the generic balanced-tag extractor stop at an inner sibling.
  const scopedPattern = new RegExp(`<([a-z][a-z0-9:-]*)\\b[^>]*class=["'][^"']*\\b${escapedClass}\\b[^"']*["'][^>]*>[\\s\\S]*?<\\/\\1>`, "i");
  const scoped = html.replace(scopedPattern, " ");
  if (scoped !== html) return scoped;
  const block = extractClassElement(html, className);
  return block ? html.replace(block, " ") : html;
}

function editorialCoreMarkup(html) {
  // Provenance blocks are intentionally shared across records. They should
  // not inflate duplicate-content or editorial-link similarity measurements.
  let core = removeClassElement(editorialMarkup(html), "gaic-source-trace");
  // Playbook records also carry shared governance scaffolding. Keep the
  // definition, question, scenario, inputs/outputs, checklist, failure, and
  // evidence sections in the comparison, while excluding source/boundary and
  // relationship shells that are deliberately repeated for navigation.
  for (const className of [
    "source-context-section",
    "vendor-boundary",
    "boundary-section",
    "relation-grid",
    "mro-list"
  ]) {
    core = removeClassElement(core, className);
  }
  return core;
}

function bodyMarkup(html) {
  return html
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<header\b[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, " ")
    .replace(/<nav\b[\s\S]*?<\/nav>/gi, " ")
    .replace(/<aside\b[\s\S]*?<\/aside>/gi, " ");
}

function termFrequency(html) {
  const counts = new Map();
  for (const word of stripMarkup(editorialCoreMarkup(html)).toLowerCase().match(/[a-z0-9][a-z0-9'/-]{2,}/g) ?? []) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
}

function cosineSimilarity(leftHtml, rightHtml, corpus = []) {
  const left = termFrequency(leftHtml);
  const right = termFrequency(rightHtml);
  const documents = [left, right, ...corpus.map((html) => termFrequency(html))];
  const documentFrequency = new Map();
  for (const document of documents) {
    for (const key of document.keys()) documentFrequency.set(key, (documentFrequency.get(key) ?? 0) + 1);
  }
  const keys = new Set([...left.keys(), ...right.keys()]);
  let dot = 0;
  let leftNorm = 0;
  let rightNorm = 0;
  for (const key of keys) {
    const inverseDocumentFrequency = Math.log((documents.length + 1) / ((documentFrequency.get(key) ?? 0) + 1)) + 1;
    const a = (left.get(key) ?? 0) * inverseDocumentFrequency;
    const b = (right.get(key) ?? 0) * inverseDocumentFrequency;
    dot += a * b;
    leftNorm += a * a;
    rightNorm += b * b;
  }
  return leftNorm && rightNorm ? dot / (Math.sqrt(leftNorm) * Math.sqrt(rightNorm)) : 0;
}

function meta(html, key, attributeName = "name") {
  const pattern = new RegExp(`<meta\\b[^>]*${attributeName}\\s*=\\s*["']${key.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}["'][^>]*content\\s*=\\s*["']([^"']*)["'][^>]*>`, "i");
  const reversePattern = new RegExp(`<meta\\b[^>]*content\\s*=\\s*["']([^"']*)["'][^>]*${attributeName}\\s*=\\s*["']${key.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}["'][^>]*>`, "i");
  return html.match(pattern)?.[1] ?? html.match(reversePattern)?.[1] ?? "";
}

function canonicalPath(html) {
  const tag = html.match(/<link\b[^>]*rel\s*=\s*["'][^"']*canonical[^"']*["'][^>]*>/i)?.[0] ?? "";
  const href = tag.match(/href\s*=\s*["']([^"']+)["']/i)?.[1] ?? "";
  try {
    return href ? new URL(href).pathname.replace(/\/$/, "") || "/" : "";
  } catch {
    return "";
  }
}

function normalizeRoute(raw) {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//")) return null;
  const clean = raw.split(/[?#]/, 1)[0];
  if (/\.(?:xml|json|png|svg|pdf|ico)$/i.test(clean)) return null;
  return clean.endsWith("/") ? clean : `${clean}/`;
}

function links(html) {
  return [...bodyMarkup(html).matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["']/gi)]
    .map((match) => normalizeRoute(match[1]))
    .filter(Boolean);
}

function editorialLinks(html) {
  return links(editorialCoreMarkup(html));
}

const sharedContextRoutes = new Set([
  "/research/global-ai-compliance-white-paper-2026/",
  "/concepts/agentic-lifecycle-governance/",
  "/concepts/missing-regulatory-objects/",
  "/concepts/rccs-m/",
  "/concepts/alcs/"
]);

function readTaxonomy() {
  if (!exists(taxonomyFile)) return { tags: new Set(), routes: new Map() };
  const source = read(taxonomyFile);
  const block = source.match(/export const controlledTaxonomy[\s\S]*?\n\} as const;/)?.[0] ?? "";
  const tags = new Set([...block.matchAll(/"([^"\n]+)"/g)].map((match) => match[1]));
  const routeBlock = source.match(/export const taxonomyRouteByTag[\s\S]*?\n\};/)?.[0] ?? "";
  const routes = new Map();
  for (const match of routeBlock.matchAll(/^\s*(?:"([^"]+)"|([A-Za-z][A-Za-z ]*)):\s*"([^"]+)"/gm)) {
    routes.set(match[1] ?? match[2], match[3]);
  }
  return { tags, routes };
}

function parseFrontmatter(source) {
  const block = source.match(/^---\n([\s\S]*?)\n---/m)?.[1] ?? "";
  const scalar = (key) => block.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.trim().replace(/^['"]|['"]$/g, "") ?? "";
  const list = (key) => {
    const match = block.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s+[^\\n]+\\n?)+)`, "m"));
    return match ? [...match[1].matchAll(/^\s+-\s+(.+)$/gm)].map((entry) => entry[1].trim().replace(/^['"]|['"]$/g, "")) : [];
  };
  return { status: scalar("status") || "published", tags: list("tags") };
}

if (!exists(dist)) {
  fail("dist/ is missing; run npm run build first");
} else {
  const routes = new Map();
  walk(dist, (file) => {
    if (path.basename(file) === "index.html") routes.set(routeForFile(file), read(file));
  });
  const indexable = new Map([...routes].filter(([, html]) => !/name=["']robots["'][^>]*content=["'][^"']*noindex|content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots/i.test(html)));

  for (const family of detailFamilies) {
    const records = [...indexable].filter(([route]) => route.startsWith(family.prefix) && route !== family.prefix);
    if (records.length === 0) {
      fail(`${family.id} has no indexable detail records`);
      continue;
    }
    const metadata = new Map();
    for (const [route, html] of records) {
      if (!html.includes(family.marker)) fail(`${family.id} detail missing content-role marker: ${route}`);
      const canonical = canonicalPath(html);
      if (!canonical || canonical !== route.replace(/\/$/, "")) fail(`${family.id} detail canonical mismatch: ${route} -> ${canonical || "missing"}`);
      const parent = family.prefix;
      if (!links(html).includes(parent)) fail(`${family.id} detail missing canonical parent link: ${route}`);
      const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
      const description = meta(html, "description");
      const ogTitle = meta(html, "og:title", "property");
      const twitterTitle = meta(html, "twitter:title");
      metadata.set(route, { title, description, ogTitle, twitterTitle });
      if (!/(?:source|official|authority)/i.test(stripMarkup(html))) fail(`${family.id} detail has no visible source/authority context: ${route}`);
      if (links(html).length < 3) review(`${family.id} detail has a very small context link set: ${route}`);
    }
    for (const field of ["title", "description", "ogTitle", "twitterTitle"]) {
      const seen = new Map();
      for (const [route, values] of metadata) {
        const value = values[field];
        if (!value) continue;
        if (seen.has(value)) fail(`${family.id} duplicate ${field}: ${seen.get(value)} and ${route}`);
        else seen.set(value, route);
      }
    }
    const corpus = records.map(([, html]) => html);
    for (let leftIndex = 0; leftIndex < records.length; leftIndex += 1) {
      for (let rightIndex = leftIndex + 1; rightIndex < records.length; rightIndex += 1) {
        const [leftRoute, leftHtml] = records[leftIndex];
        const [rightRoute, rightHtml] = records[rightIndex];
        const similarity = cosineSimilarity(leftHtml, rightHtml, corpus);
        if (similarity >= 0.84) fail(`${family.id} indexable detail content is near-duplicate (${similarity.toFixed(3)}): ${leftRoute} vs ${rightRoute}`);
        else if (similarity >= 0.65) {
          const adjacentReason = intentionalAdjacentPairs.get([leftRoute, rightRoute].sort().join("|"));
          if (adjacentReason) info(`${family.id} intentional adjacent pair accepted (${similarity.toFixed(3)}): ${leftRoute} vs ${rightRoute} — ${adjacentReason}`);
          else review(`${family.id} detail pair needs editorial review (${similarity.toFixed(3)}): ${leftRoute} vs ${rightRoute}`);
        }
      }
    }
    const linkSets = records.map(([route, html]) => new Set(editorialLinks(html).filter((link) =>
      link !== family.prefix &&
      link !== route &&
      !link.includes("#") &&
      !sharedContextRoutes.has(link)
    )));
    if (linkSets.length > 1) {
      const common = [...linkSets[0]].filter((link) => linkSets.every((set) => set.has(link)));
      const smallestLinkSet = Math.min(...linkSets.map((set) => set.size));
      if (smallestLinkSet > 0) {
        const ratio = common.length / smallestLinkSet;
        if (ratio > 0.9) fail(`${family.id} detail routes reuse more than 90% of their editorial context links (${ratio.toFixed(2)})`);
        else if (ratio > 0.75) review(`${family.id} detail routes reuse most editorial context links (${ratio.toFixed(2)})`);
      }
    }
    pass(`${family.id} content role, metadata, canonical, and similarity checks (${records.length} indexable records)`);
  }

  const noindexRoutes = [...routes].filter(([, html]) => /name=["']robots["'][^>]*content=["'][^"']*noindex|content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots/i.test(html)).map(([route]) => route);
  const sitemap = walkAndReadXml(path.join(dist));
  const llms = exists(llmsFile) ? read(llmsFile) : "";
  for (const route of noindexRoutes) {
    const absoluteRoute = new URL(route, "https://www.jearonwong.com").toString();
    if (sitemap.includes(absoluteRoute)) fail(`noindex route appears in sitemap: ${route}`);
    if (llms.includes(`https://www.jearonwong.com${route}`)) fail(`noindex route appears in llms.txt: ${route}`);
  }
  pass(`noindex exclusion checked (${noindexRoutes.length} routes)`);

  const taxonomy = readTaxonomy();
  const essayDir = path.join(root, "src", "content", "essays");
  let essayCount = 0;
  if (exists(essayDir)) {
    for (const file of fs.readdirSync(essayDir).filter((name) => name.endsWith(".md"))) {
      const data = parseFrontmatter(read(path.join(essayDir, file)));
      if (data.status !== "published") continue;
      essayCount += 1;
      for (const tag of data.tags) {
        if (!taxonomy.tags.has(tag)) fail(`essay tag outside controlled taxonomy: ${file} -> ${tag}`);
        const route = taxonomy.routes.get(tag);
        if (!route || !indexable.has(route)) fail(`essay tag route missing or noindex: ${file} -> ${tag}`);
      }
    }
  }
  pass(`taxonomy route coverage checked (${essayCount} published essays, ${taxonomy.tags.size} controlled tags)`);
  if (exists(entityGraphFile)) {
    try {
      const graph = JSON.parse(read(entityGraphFile));
      const ids = new Set();
      const byCanonical = new Map();
      for (const node of graph.nodes ?? []) {
        if (!node.id || ids.has(node.id)) fail(`entity graph node id is missing or duplicated: ${node.id ?? "<missing>"}`);
        ids.add(node.id);
        const list = byCanonical.get(node.canonical_url) ?? [];
        list.push(node);
        byCanonical.set(node.canonical_url, list);
      }
      for (const [canonical, nodes] of byCanonical) {
        if (nodes.length < 2) continue;
        for (const node of nodes) {
          if (!node.canonical_entity_id || !node.representation) {
            fail(`entity graph duplicate canonical URL needs canonical_entity_id and representation: ${canonical} -> ${node.id}`);
          }
        }
      }
      pass(`entity graph canonical identity disambiguation checked (${byCanonical.size} canonical URLs)`);
    } catch (error) {
      fail(`entity graph JSON is invalid: ${error instanceof Error ? error.message : String(error)}`);
    }
  } else {
    fail("entity graph JSON is missing");
  }
  info("White-paper HTML/PDF/checksum artifacts and authored SVG/PNG figures are excluded from mechanical similarity and palette mutation.");
}

function walkAndReadXml(directory) {
  let output = "";
  walk(directory, (file) => {
    if (/\.xml$/i.test(file)) output += read(file);
  });
  return output;
}

if (reviews.length > 0) {
  console.log("\nEditorial review queue:");
  for (const item of reviews) console.log(`- ${item}`);
}
if (failures.length > 0) {
  console.error("\nContent quality audit failed:");
  for (const item of failures) console.error(`- ${item}`);
  process.exitCode = 1;
} else {
  console.log("Content quality audit passed.");
}
