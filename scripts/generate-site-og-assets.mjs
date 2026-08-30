/* global Buffer, console, process */
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";
import { loadEssays } from "./site-publication-utils.mjs";

const outputDirectory = path.resolve("public/social");

// Keep the social cards on the same neutral B palette as the site shell.
// Blue is intentionally absent: these are static share images, not controls.
const colors = {
  registry: "#15191e",
  registryGrid: "#ffffff",
  registryText: "#f4f7fb",
  registryMuted: "#96a0aa",
  paper: "#f7f8fa",
  paperText: "#20252b",
  paperMeta: "#66707a",
  ruleDark: "#ffffff",
  ruleLight: "#111418",
};

const siteRecords = [
  {
    file: "og-start-here",
    role: "ORIENTATION HUB",
    title: ["Start here"],
    accessibleTitle: "Start here: Jearon Wong's research ledger",
    summary: ["A short orientation to the field, protocol, proof, and evidence paths."],
    route: "/start-here/",
    index: "01 / ORIENTATION",
  },
  {
    file: "jearonwong-og",
    role: "PUBLIC HEADQUARTERS",
    title: ["Jearon Wong"],
    accessibleTitle: "Jearon Wong home",
    summary: ["Execution is not Delivery.", "Research, essays, projects, and evidence in one reading order."],
    route: "/",
    index: "02 / SITE",
  },
  {
    file: "og-about",
    role: "IDENTITY",
    title: ["Jearon Wong"],
    accessibleTitle: "About Jearon Wong",
    summary: ["Protocol Architect for the Agent Era."],
    route: "/about/",
    index: "03 / IDENTITY",
  },
  {
    file: "og-ai-agent-governance",
    role: "GOVERNANCE ARCHITECTURE",
    title: ["AI Agent", "Governance"],
    accessibleTitle: "AI Agent Governance",
    summary: ["Lifecycle accountability for AI agents, multi-agent systems,", "and accountable work."],
    route: "/ai-agent-governance/",
    index: "04 / GOVERNANCE",
  },
  {
    file: "og-concepts",
    role: "REFERENCE LAYER",
    title: ["Concepts"],
    accessibleTitle: "Concepts reference layer",
    summary: ["The vocabulary behind Agentic Delivery."],
    route: "/concepts/",
    index: "05 / REFERENCE",
  },
  {
    file: "og-essays",
    role: "PUBLIC ARGUMENTS",
    title: ["Essays"],
    accessibleTitle: "Essays by Jearon Wong",
    summary: ["Arguments for accountable agent work."],
    route: "/essays/",
    index: "06 / ESSAYS",
  },
  {
    file: "og-lifecycle",
    role: "FIELD DEFINITION",
    title: ["The AI Agent", "Lifecycle"],
    accessibleTitle: "The AI Agent Lifecycle",
    summary: ["Execution is not Delivery."],
    route: "/lifecycle/",
    index: "07 / LIFECYCLE",
  },
  {
    file: "og-projects",
    role: "PROJECT LEDGER",
    title: ["Projects"],
    accessibleTitle: "Jearon Wong projects",
    summary: ["Protocol Path and Proof Path."],
    route: "/projects/",
    index: "08 / PROJECTS",
  },
];

const normalizeText = (value) => String(value ?? "").replace(/\s+/g, " ").trim();
const wrapText = (value, maxCharacters, maxLines = 3) => {
  const text = normalizeText(value);
  if (!text) return [];
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    if (word.length > maxCharacters && !line) {
      for (let offset = 0; offset < word.length; offset += maxCharacters) lines.push(word.slice(offset, offset + maxCharacters));
      continue;
    }
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxCharacters) line = candidate;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  if (lines.length <= maxLines) return lines;
  const clipped = lines.slice(0, maxLines);
  clipped[maxLines - 1] = `${clipped[maxLines - 1].replace(/[.,:;!?-]?$/, "")}...`;
  return clipped;
};

const essayRecords = loadEssays()
  .filter(({ data }) => data.status === "published" && typeof data.shareImage === "string")
  .map(({ slug, data }) => {
    const imageFile = data.shareImage.replace(/^\/social\//, "").replace(/\.png$/i, "");
    const track = normalizeText(data.editorialTrack || data.track || "general").toUpperCase();
    const title = normalizeText(data.shareImageTitle || data.shareTitle || data.title);
    const summary = normalizeText(data.shareSubtitle || data.shareDescription || data.description);
    return {
      file: imageFile,
      role: `ESSAY / ${track}`,
      title: wrapText(title, 20, 3),
      accessibleTitle: data.shareImageAlt || data.title,
      summary: wrapText(summary, 72, 2),
      route: data.canonicalRoute || `/essays/${slug}/`,
      index: `ESSAY / ${track}`,
      assetKind: "essay-og"
    };
  });

const records = [
  ...siteRecords.map((record) => ({ ...record, assetKind: "site-og" })),
  ...essayRecords
].filter((record, index, all) => all.findIndex((candidate) => candidate.file === record.file) === index);

const sourceDigest = (svg) => createHash("sha256").update(`${svg}\n`, "utf8").digest("hex");

const renderSourceXmp = (digest) => `<?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
  <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:Description rdf:about="" xmlns:jw="https://www.jearonwong.com/ns/asset/1.0/" jw:source-sha256="${digest}"/>
  </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>`;

function readSourceDigest(metadata) {
  const xmp = metadata.xmpAsString ?? metadata.xmp?.toString("utf8") ?? "";
  return xmp.match(/jw:source-sha256="([a-f0-9]{64})"/)?.[1];
}

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

function renderSvg(record) {
  const titleSize = record.title.length >= 3 ? 53 : record.title.length === 2 ? 64 : 78;
  const titleLineHeight = record.title.length >= 3 ? 60 : record.title.length === 2 ? 70 : 82;
  const titleStart = record.title.length >= 3 ? 220 : record.title.length === 2 ? 240 : 290;
  const titleLines = (record.title.length > 0 ? record.title : ["Untitled publication"])
    .map(
      (line, index) =>
        `<text x="72" y="${titleStart + index * titleLineHeight}" class="display">${escapeXml(line)}</text>`,
    )
    .join("\n    ");
  const summaryLines = record.summary
    .map(
      (line, index) =>
        `<text x="72" y="${516 + index * 34}" class="summary">${escapeXml(line)}</text>`,
    )
    .join("\n    ");
  const routeLines = wrapText(record.route, 21, 2)
    .map((line, index) => `<text x="880" y="${372 + index * 22}" class="route">${escapeXml(line)}</text>`)
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc" data-visual-system="research-ledger-b" data-media-category="${escapeXml(record.assetKind)}" data-palette="neutral-structure-functional-blue" data-asset-kind="${escapeXml(record.assetKind)}" data-route="${escapeXml(record.route)}">
  <title id="title">${escapeXml(record.accessibleTitle ?? `${record.title.join(" ")} - Jearon Wong`)}</title>
  <desc id="desc">${escapeXml(record.summary.join(" "))}</desc>
  <defs>
    <pattern id="dark-grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="${colors.registryGrid}" stroke-opacity="0.035" stroke-width="1"/>
    </pattern>
    <style>
      .display { fill: ${colors.registryText}; font-family: Outfit, Inter, sans-serif; font-size: ${titleSize}px; font-weight: 760; letter-spacing: 0; word-spacing: 0.015em; }
      .mono { fill: ${colors.registryMuted}; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 15px; font-weight: 600; letter-spacing: 0; word-spacing: 0.018em; }
      .mono-bright { fill: ${colors.registryText}; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 15px; font-weight: 700; letter-spacing: 0; word-spacing: 0.018em; }
      .route { fill: ${colors.registryText}; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 12px; font-weight: 700; letter-spacing: 0; word-spacing: 0; }
      .summary { fill: ${colors.paperText}; font-family: Inter, sans-serif; font-size: 25px; font-weight: 520; letter-spacing: 0; word-spacing: 0.01em; }
      .paper-meta { fill: ${colors.paperMeta}; font-family: 'JetBrains Mono', Menlo, monospace; font-size: 13px; font-weight: 600; letter-spacing: 0; word-spacing: 0.02em; }
    </style>
  </defs>

  <rect width="1200" height="454" fill="${colors.registry}"/>
  <rect width="1200" height="454" fill="url(#dark-grid)"/>
  <rect y="454" width="1200" height="176" fill="${colors.paper}"/>

  <text x="72" y="56" class="mono-bright">JEARON WONG</text>
  <text x="202" y="56" class="mono">/ RESEARCH LEDGER</text>
  <line x1="72" y1="88" x2="1128" y2="88" stroke="${colors.ruleDark}" stroke-opacity="0.16"/>

  <text x="72" y="142" class="mono">PAGE_ROLE</text>
  <text x="171" y="142" class="mono">:</text>
  <text x="193" y="142" class="mono-bright">${escapeXml(record.role)}</text>
  ${titleLines}

  <line x1="844" y1="142" x2="844" y2="394" stroke="${colors.ruleDark}" stroke-opacity="0.18"/>
  <text x="880" y="176" class="mono">AUTHOR</text>
  <text x="880" y="204" class="mono-bright">JEARON WONG</text>
  <text x="880" y="260" class="mono">SYSTEM</text>
  <text x="880" y="288" class="mono-bright">RESEARCH LEDGER</text>
  <text x="880" y="344" class="mono">CANONICAL ROUTE</text>
  ${routeLines}

  <line x1="72" y1="454" x2="1128" y2="454" stroke="${colors.ruleLight}" stroke-opacity="0.22"/>
  ${summaryLines}
  <line x1="72" y1="596" x2="1128" y2="596" stroke="${colors.ruleLight}" stroke-opacity="0.16"/>
  <text x="72" y="619" class="paper-meta">PROTOCOL ARCHITECT FOR THE AGENT ERA</text>
  <text x="1128" y="619" text-anchor="end" class="paper-meta">${escapeXml(record.index)}</text>
</svg>`;
}

const argumentsList = process.argv.slice(2);
if (argumentsList.includes("--help")) {
  console.log("Usage: node scripts/generate-site-og-assets.mjs [--all] [--check] [asset ...]");
  console.log(`Assets: ${records.map(({ file }) => file).join(", ")}`);
  process.exit(0);
}

const checkOnly = argumentsList.includes("--check");
const unknownOptions = argumentsList.filter((argument) => argument.startsWith("-") && !["--all", "--check"].includes(argument));
if (unknownOptions.length > 0) {
  throw new Error(`Unknown option(s): ${unknownOptions.join(", ")}. Use --help for usage.`);
}

const requestedFiles = argumentsList.filter((argument) => !argument.startsWith("-"));
const unknownFiles = requestedFiles.filter((file) => !records.some((record) => record.file === file));
if (unknownFiles.length > 0) {
  throw new Error(`Unknown OG asset(s): ${unknownFiles.join(", ")}. Use one of: ${records.map(({ file }) => file).join(", ")}`);
}

const selectedRecords = requestedFiles.length > 0
  ? records.filter((record) => requestedFiles.includes(record.file))
  : records;

for (const record of selectedRecords) {
  const svg = renderSvg(record);
  const digest = sourceDigest(svg);
  const svgPath = path.join(outputDirectory, `${record.file}.svg`);
  const pngPath = path.join(outputDirectory, `${record.file}.png`);

  if (checkOnly) {
    let currentSvg;
    let currentPng;
    try {
      [currentSvg, currentPng] = await Promise.all([readFile(svgPath, "utf8"), readFile(pngPath)]);
    } catch {
      throw new Error(`${record.file} generated pair is missing; run npm run assets:og`);
    }
    if (currentSvg !== `${svg}\n`) throw new Error(`${record.file}.svg is stale; run npm run assets:og`);
    const metadata = await sharp(currentPng).metadata();
    if (metadata.width !== 1200 || metadata.height !== 630) {
      throw new Error(`${record.file}.png must be 1200x630, received ${metadata.width}x${metadata.height}`);
    }
    if (readSourceDigest(metadata) !== digest) {
      throw new Error(`${record.file}.png source fingerprint is stale; run npm run assets:og`);
    }
  } else {
    const expectedPng = await sharp(Buffer.from(svg))
      .withXmp(renderSourceXmp(digest))
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();
    await writeFile(svgPath, `${svg}\n`, "utf8");
    await writeFile(pngPath, expectedPng);
    const metadata = await sharp(expectedPng).metadata();
    if (metadata.width !== 1200 || metadata.height !== 630) {
      throw new Error(`${record.file}.png must be 1200x630, received ${metadata.width}x${metadata.height}`);
    }
  }
}

console.log(`${checkOnly ? "Checked" : "Generated"} ${selectedRecords.length} Research Ledger OG asset pair(s): ${selectedRecords.map(({ file }) => file).join(", ")}.`);
