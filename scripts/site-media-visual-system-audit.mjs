/* global console, process */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { loadEssays } from "./site-publication-utils.mjs";

const root = process.cwd();
const checkOnly = process.argv.includes("--check");
const manifestPath = path.join(root, "public", "generated", "media-manifest.json");
const failures = [];
const warnings = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);
const exists = (file) => fs.existsSync(file);
const relative = (file) => path.relative(root, file).split(path.sep).join("/");

function collectFiles(directory, predicate, files = []) {
  if (!exists(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) collectFiles(file, predicate, files);
    else if (predicate(file)) files.push(file);
  }
  return files;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function dimensions(file, format) {
  if (format === "png") {
    const data = fs.readFileSync(file);
    if (data.length < 24 || data.subarray(1, 4).toString("ascii") !== "PNG") return null;
    return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  }
  const source = fs.readFileSync(file, "utf8");
  const viewBox = source.match(/\bviewBox\s*=\s*["']\s*[-+\d.e]+\s+[-+\d.e]+\s+([-+\d.e]+)\s+([-+\d.e]+)\s*["']/i);
  const width = source.match(/\bwidth\s*=\s*["']\s*([-+\d.e]+)(?:px)?\s*["']/i);
  const height = source.match(/\bheight\s*=\s*["']\s*([-+\d.e]+)(?:px)?\s*["']/i);
  if (viewBox) return { width: Number(viewBox[1]), height: Number(viewBox[2]) };
  if (width && height) return { width: Number(width[1]), height: Number(height[1]) };
  return null;
}

function categoryFor(rel) {
  if (rel === "public/icon.svg" || rel === "public/social-card.svg") return "brand-mark";
  if (/^public\/(?:android|maskable|apple-touch|favicon)/i.test(rel)) return "system-icon";
  if (rel.startsWith("public/social/")) {
    if (/^(?:jearonwong-og|og-[^/]+|[^/]+-og)\.(?:svg|png)$/i.test(path.basename(rel))) return "social-og";
    if (/(poster|thread-card|spotify|newsletter-cover)/i.test(rel)) return "publication-artwork";
    return "social-card";
  }
  if (rel.startsWith("public/figures/") || rel.startsWith("public/essays/")) return "article-figure";
  if (rel.startsWith("public/images/")) return "author-portrait";
  return "public-media";
}

function readSourceReferences() {
  const references = new Map();
  const sourceFiles = collectFiles(path.join(root, "src"), (file) => /\.(?:astro|md|mdx|ts|tsx|js|mjs|css)$/.test(file));
  for (const file of sourceFiles) {
    const source = fs.readFileSync(file, "utf8");
    for (const match of source.matchAll(/\/(?:social|figures|essays|images)\/[A-Za-z0-9._~!$&'()*+,;=:@%/-]+\.(?:svg|png|jpe?g|webp)/gi)) {
      const assetPath = match[0];
      if (!references.has(assetPath)) references.set(assetPath, new Set());
      references.get(assetPath).add(relative(file));
    }
  }
  return references;
}

const essays = loadEssays().filter(({ data }) => data.status === "published");
const essayOgFiles = new Set(essays.map(({ data }) => data.shareImage).filter(Boolean).map((value) => `public/${value.replace(/^\//, "")}`));
const siteOgFiles = new Set([
  "public/social/og-start-here.svg", "public/social/og-start-here.png",
  "public/social/jearonwong-og.svg", "public/social/jearonwong-og.png",
  "public/social/og-about.svg", "public/social/og-about.png",
  "public/social/og-ai-agent-governance.svg", "public/social/og-ai-agent-governance.png",
  "public/social/og-concepts.svg", "public/social/og-concepts.png",
  "public/social/og-essays.svg", "public/social/og-essays.png",
  "public/social/og-lifecycle.svg", "public/social/og-lifecycle.png",
  "public/social/og-projects.svg", "public/social/og-projects.png"
]);
const references = readSourceReferences();
const mediaFiles = collectFiles(path.join(root, "public"), (file) => /\.(?:svg|png)$/.test(file))
  .filter((file) => !relative(file).startsWith("public/research/"))
  .sort();
const byPath = new Map(mediaFiles.map((file) => [relative(file), file]));

for (const [assetPath, usedBy] of references) {
  const absolute = path.join(root, "public", assetPath.replace(/^\/+/, ""));
  if (!exists(absolute)) fail(`referenced media is missing: ${assetPath} (${[...usedBy].join(", ")})`);
}

const records = [];
for (const file of mediaFiles) {
  const rel = relative(file);
  const format = path.extname(file).slice(1).toLowerCase();
  const category = categoryFor(rel);
  const source = format === "svg" ? fs.readFileSync(file, "utf8") : "";
  const size = dimensions(file, format);
  const siblingSvg = format === "png" ? byPath.get(rel.replace(/\.png$/i, ".svg")) : null;
  const siblingPng = format === "svg" ? byPath.get(rel.replace(/\.svg$/i, ".png")) : null;
  const manualReview = ["article-figure", "publication-artwork", "social-card"].includes(category);
  const directReferences = references.get(`/${rel.replace(/^public\//, "")}`) ?? references.get(`/${rel}`) ?? new Set();
  const pairedReferences = format === "svg"
    ? (references.get(`/${rel.replace(/^public\//, "").replace(/\.svg$/i, ".png")}`) ?? new Set())
    : new Set();
  const usedBy = [...new Set([...directReferences, ...pairedReferences])].sort();
  const issues = [];

  if (!size || !Number.isFinite(size.width) || !Number.isFinite(size.height)) issues.push("invalid dimensions");
  if (format === "svg") {
    if (!/<title\b[^>]*>[^<]+<\/title>/i.test(source)) issues.push("missing title");
    if (!/<desc\b[^>]*>[^<]+<\/desc>/i.test(source)) issues.push("missing desc");
    if (!/data-visual-system="research-ledger-b"/i.test(source)) issues.push("missing Research Ledger marker");
    if (!/data-media-category="[^"]+"/i.test(source)) issues.push("missing media category");
    if (/DM Sans|DM Mono|Arial Black|Inter Display|Georgia|Times New Roman|font-family:[^;}]*\bArial\b/i.test(source)) issues.push("legacy font family");
    if (/#(?:22d3ee|3b82f6|60a5fa|2563eb|2f7dff|dbeafe|eff6ff|35d6ff|8ddfff|38bdf8|7dd3fc)\b|rgba?\(\s*(?:34\s*(?:,|\s)\s*211\s*(?:,|\s)\s*238|59\s*(?:,|\s)\s*130\s*(?:,|\s)\s*246|96\s*(?:,|\s)\s*165\s*(?:,|\s)\s*250|37\s*(?:,|\s)\s*99\s*(?:,|\s)\s*235)/i.test(source)) issues.push("legacy palette value");
    if (category === "article-figure") {
      if (!/data-visual-revision="article-figure-b"/i.test(source)) issues.push("missing article figure B revision marker");
      if (!/data-palette="neutral-structure-functional-blue-semantic-exceptions"/i.test(source)) issues.push("article figure palette contract is missing");
      if (/#(?:111111|191919|0d282c)\b|rgba\(17,17,17|rgba\(15,23,42,0\.72\)/i.test(source)) issues.push("legacy dark article canvas");
      if (/\b(?:title-hot|panel-hot|panel-blue|panel-cyan|node-hot|node-blue|node-cyan|row-blue|row-cyan|card-blue|card-cyan|line-hot|label-hot|text-hot)\b/i.test(source)) issues.push("legacy article figure selector");
    }
    if (siblingPng) {
      const pngSize = dimensions(siblingPng, "png");
      if (!pngSize || !size || pngSize.width !== size.width || pngSize.height !== size.height) issues.push("SVG/PNG dimension mismatch");
    }
  }
  if (category === "social-og") {
    if (!size || size.width !== 1200 || size.height !== 630) issues.push("social OG must be 1200x630");
    if (!source && !siblingSvg) issues.push("social OG PNG is missing its SVG source");
    if (format === "svg" && !/data-route="\/[^"]*"/i.test(source)) issues.push("generated OG is missing canonical route metadata");
  }
  if (issues.length > 0) {
    for (const issue of issues) fail(`${rel}: ${issue}`);
  }
  if (usedBy.length === 0 && ["social-card", "public-media"].includes(category)) {
    warn(`${rel} is not referenced by a source page; keep it only if it is an intentional distribution asset`);
  }
  records.push({
    path: `/${rel.replace(/^public\//, "")}`,
    format,
    category,
    dimensions: size,
    sha256: sha256(file),
    visualSystem: format === "svg" ? (source.match(/data-visual-system="([^"]+)"/i)?.[1] ?? null) : null,
    paletteMode: format === "svg" ? (source.match(/data-palette="([^"]+)"/i)?.[1] ?? (manualReview ? "manual-review" : null)) : "raster-derived",
    manualReview,
    usedBy,
    sourcePair: format === "svg" ? (siblingPng ? `/${relative(siblingPng).replace(/^public\//, "")}` : null) : (siblingSvg ? `/${relative(siblingSvg).replace(/^public\//, "")}` : null)
  });
}

for (const expected of [...siteOgFiles, ...essayOgFiles]) {
  const absolute = path.join(root, expected);
  if (!exists(absolute)) fail(`published OG source is missing: ${expected}`);
}

const manifest = {
  schemaVersion: 1,
  generatedBy: "scripts/site-media-visual-system-audit.mjs",
  sourceOfTruth: ["src/styles/global.css", "src/styles/prototypes.css", "src/content/essays/", "public/social/", "public/figures/"],
  visualSystem: "research-ledger-b",
  policy: {
    structuralPalette: "neutral",
    functionalBlue: "UI links, selection, focus and active states only",
    semanticExceptions: "Authored diagrams and publication artwork require independent review",
    fonts: ["Outfit", "Inter", "JetBrains Mono"]
  },
  records
};
const serialized = `${JSON.stringify(manifest, null, 2)}\n`;
if (checkOnly) {
  if (!exists(manifestPath)) fail("public/generated/media-manifest.json is missing; run npm run assets:media");
  else if (fs.readFileSync(manifestPath, "utf8") !== serialized) fail("public/generated/media-manifest.json is stale; run npm run assets:media");
} else {
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, serialized, "utf8");
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
} else {
  pass(`public media visual system checked (${records.length} SVG/PNG assets)`);
}
for (const warning of warnings) console.log(`[WARN] ${warning}`);
