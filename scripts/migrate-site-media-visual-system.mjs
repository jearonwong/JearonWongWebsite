/* global Buffer, console, process */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const checkOnly = process.argv.includes("--check");
const mediaRoots = [path.join(root, "public", "social"), path.join(root, "public", "figures"), path.join(root, "public", "essays"), path.join(root, "public")];
const legacyPalette = [
  [/#[0-9a-f]{6}/gi, (value) => ({
    "#22d3ee": "#d7dee7",
    "#3b82f6": "#8a96a3",
    "#60a5fa": "#b8c2ce",
    "#2563eb": "#8a96a3",
    "#2f7dff": "#c4ccd5",
    "#dbeafe": "#e7ebef",
    "#eff6ff": "#f3f5f7",
    "#faf9f6": "#f7f8fa",
    "#f6ede8": "#f1f3f5",
    "#e2f0eb": "#edf1f4",
    "#eeedfb": "#f0f2f5",
    "#fdf2e1": "#f3f4f6",
    "#35d6ff": "#b8c2ce",
    "#8ddfff": "#b8c2ce",
    "#38bdf8": "#b8c2ce",
    "#7dd3fc": "#b8c2ce"
  }[value.toLowerCase()] ?? value)]
];
const legacyRgb = [
  [/rgba?\(\s*34\s*(?:,|\s)\s*211\s*(?:,|\s)\s*238([^)]*)\)/gi, "rgba(215,222,231$1)"],
  [/rgba?\(\s*59\s*(?:,|\s)\s*130\s*(?:,|\s)\s*246([^)]*)\)/gi, "rgba(138,150,163$1)"],
  [/rgba?\(\s*96\s*(?:,|\s)\s*165\s*(?:,|\s)\s*250([^)]*)\)/gi, "rgba(184,194,204$1)"],
  [/rgba?\(\s*37\s*(?:,|\s)\s*99\s*(?:,|\s)\s*235([^)]*)\)/gi, "rgba(138,150,163$1)"]
];

const humanize = (file) => path.basename(file, ".svg")
  .replace(/[-_]+/g, " ")
  .replace(/\b\w/g, (letter) => letter.toUpperCase());

function collectSvgFiles(directory, seen = new Set()) {
  if (!fs.existsSync(directory) || seen.has(directory)) return [];
  seen.add(directory);
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectSvgFiles(file, seen));
    else if (entry.isFile() && entry.name.endsWith(".svg")) files.push(file);
  }
  return files;
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

function categoryFor(file) {
  const rel = relative(file);
  if (rel === "public/icon.svg" || rel === "public/social-card.svg") return "brand-mark";
  if (rel.startsWith("public/social/")) {
    if (/^(?:jearonwong-og|og-[^/]+|[^/]+-og)\.svg$/i.test(path.basename(rel))) return "social-og";
    if (/(poster|thread-card|spotify|newsletter-cover)/i.test(rel)) return "publication-artwork";
    return "social-card";
  }
  if (rel.startsWith("public/figures/") || rel.startsWith("public/essays/")) return "article-figure";
  return "public-media";
}

function normalizeFonts(svg) {
  return svg
    .replace(/DM Sans/gi, "Inter")
    .replace(/DM Mono/gi, "JetBrains Mono")
    .replace(/Arial Black/gi, "Outfit")
    .replace(/Inter Display/gi, "Outfit")
    .replace(/Georgia/gi, "Outfit")
    .replace(/Times New Roman/gi, "Outfit")
    .replace(/Arial(?=[",;\s])/gi, "Inter");
}

function normalizePalette(svg, category) {
  if (category === "social-og") return svg;
  let normalized = svg;
  for (const [pattern, replacement] of legacyPalette) normalized = normalized.replace(pattern, replacement);
  for (const [pattern, replacement] of legacyRgb) normalized = normalized.replace(pattern, replacement);
  return normalized;
}

// Article figures are publication surfaces, not UI cards. Their geometry and
// semantic exceptions stay authored, while the shared shell moves to the
// light reading ledger used by the current B system. This is intentionally
// limited to old dark-shell tokens so the pass remains idempotent and keeps
// warning/error colours meaningful.
function normalizeArticleFigure(svg) {
  const hasDarkCanvas = /#111111|#191919|#0d282c|rgba\(17,17,17|rgba\(255,255,255[),]/i.test(svg);
  if (!hasDarkCanvas) return svg;

  const replacements = [
    [/#111111/gi, "#f7f8fa"],
    [/#191919/gi, "#f3f5f7"],
    [/#0d282c/gi, "#eef1f4"],
    [/#f8fafc/gi, "#111827"],
    [/#f1f5f9/gi, "#111827"],
    [/#e2e8f0/gi, "#1f2937"],
    [/#d7dee7/gi, "#5b6673"],
    [/#cbd5e1/gi, "#334155"],
    [/#b8c2ce/gi, "#64748b"],
    [/#94a3b8/gi, "#64748b"],
    [/#8a96a3/gi, "#6b7785"]
  ];
  let normalized = svg;
  for (const [pattern, replacement] of replacements) normalized = normalized.replace(pattern, replacement);
  normalized = normalized
    .replace(/rgba\(255,255,255,([^)]+)\)/gi, "rgba(15,23,42,$1)")
    .replace(/rgba\(241,245,249,([^)]+)\)/gi, "rgba(15,23,42,$1)")
    .replace(/rgba\(215,222,231,([^)]+)\)/gi, "rgba(100,116,139,$1)")
    .replace(/rgba\(138,150,163,([^)]+)\)/gi, "rgba(100,116,139,$1)")
    .replace(/rgba\(17,17,17,[^)]+\)/gi, "rgba(15,23,42,0.06)")
    .replace(/stroke="#ffffff"/gi, "stroke=\"#dfe4ea\"")
    .replace(/stroke="#f1f5f9"/gi, "stroke=\"#dfe4ea\"");

  // Class names are part of the visual contract as well. Rename the old
  // blue/cyan/hot vocabulary so later reviews can catch a stale composition
  // even when its colour values happen to have been changed.
  const classRenames = [
    [/\btitle-hot\b/g, "title-emphasis"],
    [/\bpanel-hot\b/g, "panel-emphasis"],
    [/\bpanel-blue\b/g, "panel-secondary"],
    [/\bpanel-cyan\b/g, "panel-emphasis"],
    [/\bnode-hot\b/g, "node-emphasis"],
    [/\bnode-blue\b/g, "node-secondary"],
    [/\bnode-cyan\b/g, "node-emphasis"],
    [/\brow-blue\b/g, "row-secondary"],
    [/\brow-cyan\b/g, "row-emphasis"],
    [/\bcard-blue\b/g, "card-secondary"],
    [/\bcard-cyan\b/g, "card-emphasis"],
    [/\bline-hot\b/g, "line-emphasis"],
    [/\blabel-hot\b/g, "label-emphasis"],
    [/\btext-hot\b/g, "text-emphasis"]
  ];
  for (const [pattern, replacement] of classRenames) normalized = normalized.replace(pattern, replacement);
  return normalized;
}

function addSemantics(svg, category, file) {
  let normalized = svg;
  const title = /<title\b[^>]*>[\s\S]*?<\/title>/i.test(normalized)
    ? normalized
    : normalized.replace(/(<svg\b[^>]*>)/i, `$1\n  <title id="title">${humanize(file)}</title>`);
  const withDescription = /<desc\b[^>]*>[\s\S]*?<\/desc>/i.test(title)
    ? title
    : title.replace(/(<svg\b[^>]*>)/i, `$1\n  <desc id="desc">${humanize(file)} visual asset from the Jearon Wong Research Ledger.</desc>`);
  normalized = withDescription.replace(/<svg\b([^>]*)>/i, (_match, attrs) => {
    const nextAttrs = attrs
      .replace(/\sdata-visual-system="[^"]*"/gi, "")
      .replace(/\sdata-media-category="[^"]*"/gi, "")
      .replace(/\sdata-palette="[^"]*"/gi, "")
      .replace(/\sdata-visual-revision="[^"]*"/gi, "");
    const palette = category === "article-figure"
      ? "neutral-structure-functional-blue-semantic-exceptions"
      : "neutral-structure-semantic-exceptions";
    const revision = category === "article-figure" ? ' data-visual-revision="article-figure-b"' : "";
    return `<svg${nextAttrs} data-visual-system="research-ledger-b" data-media-category="${category}" data-palette="${palette}"${revision}>`;
  });
  if (!/aria-labelledby=/i.test(normalized)) normalized = normalized.replace(/<svg\b([^>]*)>/i, '<svg$1 aria-labelledby="title desc">');
  return normalized;
}

function normalizedSvg(source, file) {
  const category = categoryFor(file);
  const fontNormalized = normalizeFonts(source);
  const paletteNormalized = normalizePalette(fontNormalized, category);
  const articleNormalized = category === "article-figure" ? normalizeArticleFigure(paletteNormalized) : paletteNormalized;
  return addSemantics(articleNormalized, category, file);
}

// Publication artwork remains manual-review. Article figures use the governed
// light-ledger shell and are regenerated here so future publication cannot
// silently reintroduce the previous VI.
const manualReviewCategories = new Set(["publication-artwork"]);

function hasLegacyValue(source) {
  return /#(?:22d3ee|3b82f6|60a5fa|2563eb|2f7dff|dbeafe|eff6ff)\b|rgba?\(\s*(?:34\s*(?:,|\s)\s*211\s*(?:,|\s)\s*238|59\s*(?:,|\s)\s*130\s*(?:,|\s)\s*246|96\s*(?:,|\s)\s*165\s*(?:,|\s)\s*250|37\s*(?:,|\s)\s*99\s*(?:,|\s)\s*235)/i.test(source);
}

const files = [...new Set(mediaRoots.flatMap((directory) => collectSvgFiles(directory)))].sort();
let changed = 0;
let failures = 0;
for (const file of files) {
  const current = fs.readFileSync(file, "utf8");
  const category = categoryFor(file);
  // The OG generator owns every social-og byte, including attribute order and
  // source fingerprints. Publication artwork remains a manual review surface;
  // article figures are normalized by this workflow.
  const expected = category === "social-og" || manualReviewCategories.has(category)
    ? current
    : normalizedSvg(current, file);
  const rel = relative(file);
  if (checkOnly) {
    if (current !== expected || hasLegacyValue(current) || !current.includes('data-visual-system="research-ledger-b"')) {
      console.error(`[FAIL] ${rel} is outside the Research Ledger media contract; run npm run assets:media`);
      failures += 1;
      continue;
    }
  } else if (current !== expected) {
    fs.writeFileSync(file, expected.endsWith("\n") ? expected : `${expected}\n`, "utf8");
    changed += 1;
  }

  const png = file.replace(/\.svg$/i, ".png");
  if (fs.existsSync(png) && !checkOnly && current !== expected) {
    await sharp(Buffer.from(expected)).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(png);
  }
}

if (checkOnly && failures > 0) process.exitCode = 1;
console.log(`${checkOnly ? "Checked" : "Normalized"} ${files.length} SVG media asset(s); ${changed} changed.`);
