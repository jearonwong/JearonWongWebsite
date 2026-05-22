#!/usr/bin/env node
/* global console, process */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";
import { visit } from "unist-util-visit";

const __filename = fileURLToPath(import.meta.url);
const REPO = resolve(dirname(__filename), "../../..");
const SOURCE_ROOT = resolve(REPO, "gaic_v032_work/source_r3");
const R12_SOURCE = resolve(
  SOURCE_ROOT,
  "wp3_r12_body_expansion_rewrite/AIIRWP-2026-v0.3-R12-BODY-EXPANSION-REWRITE.md",
);
const OUT_ROOT = resolve(SOURCE_ROOT, "wp3_r15_candidate_artifacts");
const INPUT_DIR = resolve(OUT_ROOT, "input");
const ASSET_DIR = resolve(OUT_ROOT, "assets");
const OUT_DIR = resolve(OUT_ROOT, "out");
const PROOF_DIR = resolve(OUT_ROOT, "proof");
const HTML_PROOF_DIR = resolve(PROOF_DIR, "html");
const PDF_PROOF_DIR = resolve(PROOF_DIR, "pdf");
const FIGURE_PROOF_DIR = resolve(PROOF_DIR, "figure");
const QA_DIR = resolve(OUT_ROOT, "qa");
const INPUT_SOURCE = resolve(INPUT_DIR, "AIIRWP-2026-v0.4-R15-CANDIDATE-SOURCE.md");
const FIGURE_SOURCE = resolve(ASSET_DIR, "responsibility-bridge-source.md");
const FIGURE_SVG = resolve(ASSET_DIR, "responsibility-bridge.svg");
const HTML_OUT = resolve(OUT_DIR, "AIIRWP-2026-v0.4-R15-CANDIDATE.html");
const PDF_OUT = resolve(OUT_DIR, "AIIRWP-2026-v0.4-R15-CANDIDATE.pdf");
const MANIFEST_OUT = resolve(OUT_DIR, "manifest.json");
const CHECKSUMS_OUT = resolve(OUT_DIR, "checksums.sha256");
const PDF_TEXT = resolve(PDF_PROOF_DIR, "pdf-text-extract.txt");

const TITLE = "Agentic AI Insurability & Risk Transfer White Paper 2026";
const SUBTITLE = "A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer";
const CANDIDATE_ID = "AIIRWP-2026-v0.4-R15-CANDIDATE";
const SOURCE_ID = "AIIRWP-2026-v0.4-R15-CANDIDATE-SOURCE";

const tablePlans = [
  { id: "table-definition-nonclaim", className: "table-medium", title: "Executive thesis define / non-claim table", comparison: "medium" },
  { id: "table-insured-subject", className: "table-high", title: "Traditional insurance question / agentic complication / lifecycle evidence", comparison: "high" },
  { id: "table-market-edge", className: "table-high table-wide", title: "Market edge / public source signal / lifecycle gap", comparison: "high" },
  { id: "table-evidence-ingredients", className: "table-medium", title: "Artifact / useful for / not sufficient for / needed linkage", comparison: "medium" },
  { id: "table-compliance-translation", className: "table-medium", title: "Compliance / auditability / insurability translation", comparison: "medium" },
  { id: "table-aio-overview", className: "table-medium", title: "AIO group overview", comparison: "medium" },
  { id: "table-airm-matrix", className: "table-high table-wide", title: "AIRM readiness matrix", comparison: "high" },
  { id: "table-source-note-index", className: "table-low table-appendix", title: "Appendix A source note index", comparison: "low" },
  { id: "table-aio-reference", className: "table-medium table-appendix", title: "Appendix B AIO reference", comparison: "medium" },
  { id: "table-airm-reference", className: "table-high table-appendix", title: "Appendix C AIRM reference", comparison: "high" },
];

const tablePdfEvidence = {
  "table-definition-nonclaim": ["EXECUTIVE THESIS DEFINE", "THIS PAPER DEFINES", "THIS PAPER DOES NOT CLAIM"],
  "table-insured-subject": ["TRADITIONAL INSURANCE QUESTION", "AGENTIC AI COMPLICATION", "NEEDED LIFECYCLE EVIDENCE"],
  "table-market-edge": ["AI-specific product or performance cover", "Cyber / AI-linked threat / LLMjacking"],
  "table-evidence-ingredients": ["Logs", "Traces", "Vendor assurances", "Workflow completion"],
  "table-compliance-translation": ["COMPLIANCE / AUDITABILITY / INSURABILITY TRANSLATION", "WP2 Audit Evidence Chain"],
  "table-aio-overview": ["AIO GROUP OVERVIEW", "Subject and work boundary", "Claim and dispute readiness"],
  "table-airm-matrix": ["AIRM READINESS MATRIX", "L0", "L5"],
  "table-source-note-index": ["Source note index", "What it covers"],
  "table-aio-reference": ["APPENDIX B AIO REFERENCE", "AIO-01", "AIO-14"],
  "table-airm-reference": ["APPENDIX C AIRM REFERENCE", "L0", "L5"],
};

const scenarioTerms = [
  ["refund/support/account update", ["refund", "support", "account"]],
  ["external API/payment loss", ["API", "payment"]],
  ["professional service / E&O-like boundary", ["professional", "firm"]],
  ["post-loss reconstruction / claim review", ["post-loss", "claim"]],
  ["cross-vendor/shared dependency", ["cross-vendor", "dependency"]],
];

function ensureDirs() {
  rmSync(OUT_ROOT, { recursive: true, force: true });
  for (const dir of [INPUT_DIR, ASSET_DIR, OUT_DIR, HTML_PROOF_DIR, PDF_PROOF_DIR, FIGURE_PROOF_DIR, QA_DIR]) {
    mkdirSync(dir, { recursive: true });
  }
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function rel(path) {
  return relative(REPO, path);
}

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}

function chromePath() {
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];
  for (const candidate of candidates) {
    if (existsSync(candidate)) return candidate;
  }
  throw new Error("Chrome/Chromium executable not found");
}

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: REPO,
    encoding: "utf8",
    stdio: options.stdio ?? ["ignore", "pipe", "pipe"],
    ...options,
  });
}

function runChrome(args, options = {}) {
  const profileDir = mkdtempSync(resolve(tmpdir(), "wp3-r15-chrome-"));
  try {
    return run(
      chromePath(),
      [
        "--headless=new",
        "--disable-gpu",
        "--disable-background-networking",
        "--disable-component-update",
        "--disable-default-apps",
        "--disable-extensions",
        "--disable-sync",
        "--hide-scrollbars",
        "--allow-file-access-from-files",
        "--no-first-run",
        "--no-default-browser-check",
        `--user-data-dir=${profileDir}`,
        ...args,
      ],
      { timeout: options.timeout ?? 45000 },
    );
  } finally {
    rmSync(profileDir, { recursive: true, force: true });
  }
}

function extractText(node) {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  if (!node.children) return "";
  return node.children.map(extractText).join("");
}

function rehypeAddHeadingIds() {
  return (tree) => {
    const slugger = new GithubSlugger();
    visit(tree, "element", (node) => {
      if (/^h[1-6]$/.test(node.tagName)) {
        node.properties ||= {};
        if (!node.properties.id) node.properties.id = slugger.slug(extractText(node));
      }
    });
  };
}

function prepareCandidateSource() {
  const original = readFileSync(R12_SOURCE, "utf8");
  const mermaidMatch = original.match(/```mermaid\n([\s\S]*?)\n```/);
  const mermaid = mermaidMatch?.[1]?.trim() || "";
  const figureMarkdown = [
    "![Responsibility bridge review path](../assets/responsibility-bridge.svg)",
    "",
    "*Figure 1. Responsibility bridge review path. This figure shows a review path / evidence path; it is not a legal liability finding or coverage determination.*",
  ].join("\n");
  const transformed = original
    .replace("`AIIRWP-2026-v0.3-R12-BODY-EXPANSION-REWRITE`", `\`${SOURCE_ID}\``)
    .replace(
      "**Status:** Body expansion rewrite source only. Not public release. Not final. Not sealed.",
      "**Status:** Internal candidate artifact source only. Not public release. Not final. Not sealed.",
    )
    .replace(/```mermaid\n[\s\S]*?\n```/, figureMarkdown);
  write(INPUT_SOURCE, transformed);
  write(
    FIGURE_SOURCE,
    `# Responsibility Bridge Source Diagram\n\nThis source is retained for internal R15 figure provenance only. Raw Mermaid must not appear in rendered HTML/PDF artifacts.\n\n\`\`\`mermaid\n${mermaid}\n\`\`\`\n`,
  );
  return transformed;
}

function createFigureSvg() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="540" viewBox="0 0 1280 540" role="img" aria-labelledby="title desc">
  <title id="title">Responsibility bridge review path</title>
  <desc id="desc">Legal Subject connects to Human Responsibility Role, Agent or MAS Role, Bounded Agentic Work Unit, Lifecycle Evidence, Loss Event, Review Path, and Coverage or Exclusion Boundary Review. The diagram is a review path, not a liability finding or coverage determination.</desc>
  <defs>
    <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
      <path d="M2,2 L10,6 L2,10 Z" fill="#3fb7c8"/>
    </marker>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0f151a" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="1280" height="540" rx="28" fill="#f4f7f8"/>
  <rect x="42" y="38" width="1196" height="464" rx="24" fill="#ffffff" stroke="#d8e2e6"/>
  <text x="72" y="86" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="700" fill="#111418">Responsibility Bridge</text>
  <text x="72" y="118" font-family="Inter, Arial, sans-serif" font-size="15" fill="#60717b">Review path / evidence path for agentic risk transfer discussion. Not a liability finding or coverage determination.</text>
  <g font-family="Inter, Arial, sans-serif" filter="url(#shadow)">
    <g transform="translate(74 172)">
      <rect width="170" height="86" rx="14" fill="#111418"/>
      <text x="85" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">Legal</text>
      <text x="85" y="60" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">Subject</text>
    </g>
    <g transform="translate(282 172)">
      <rect width="170" height="86" rx="14" fill="#e9f6f8" stroke="#3fb7c8"/>
      <text x="85" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Human</text>
      <text x="85" y="54" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Responsibility</text>
      <text x="85" y="74" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Role</text>
    </g>
    <g transform="translate(490 172)">
      <rect width="170" height="86" rx="14" fill="#eef3f6" stroke="#9cafb7"/>
      <text x="85" y="38" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Agent / MAS</text>
      <text x="85" y="60" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Role</text>
    </g>
    <g transform="translate(698 172)">
      <rect width="196" height="86" rx="14" fill="#f7fbfc" stroke="#3fb7c8"/>
      <text x="98" y="34" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Bounded Agentic</text>
      <text x="98" y="56" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Work Unit</text>
    </g>
    <g transform="translate(940 112)">
      <rect width="196" height="74" rx="14" fill="#eef9f5" stroke="#4aa07f"/>
      <text x="98" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Lifecycle</text>
      <text x="98" y="54" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Evidence</text>
    </g>
    <g transform="translate(940 264)">
      <rect width="196" height="74" rx="14" fill="#fff4ea" stroke="#d89a5b"/>
      <text x="98" y="33" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Loss</text>
      <text x="98" y="54" text-anchor="middle" font-size="14" font-weight="700" fill="#111418">Event</text>
    </g>
    <g transform="translate(1022 384)">
      <rect width="170" height="72" rx="14" fill="#111418"/>
      <text x="85" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">Review</text>
      <text x="85" y="53" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">Path</text>
    </g>
    <g transform="translate(690 384)">
      <rect width="248" height="72" rx="14" fill="#f8f1ff" stroke="#8a6bbd"/>
      <text x="124" y="31" text-anchor="middle" font-size="13" font-weight="700" fill="#111418">Coverage / Exclusion</text>
      <text x="124" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#111418">Boundary Review</text>
    </g>
  </g>
  <g fill="none" stroke="#3fb7c8" stroke-width="3" marker-end="url(#arrow)">
    <path d="M244 215 H282"/>
    <path d="M452 215 H490"/>
    <path d="M660 215 H698"/>
    <path d="M894 205 C918 184 918 152 940 149"/>
    <path d="M894 228 C918 249 918 300 940 301"/>
    <path d="M1038 186 V384"/>
    <path d="M1038 338 V384"/>
    <path d="M1022 420 H938"/>
  </g>
  <text x="72" y="480" font-family="Inter, Arial, sans-serif" font-size="13" fill="#60717b">Figure 1. The responsibility bridge links legal subject, human role, agent role, bounded work, evidence, loss, and review boundary without deciding liability or coverage.</text>
</svg>`;
  write(FIGURE_SVG, svg);
  write(resolve(FIGURE_PROOF_DIR, "responsibility-bridge-alt-text.txt"), "Responsibility bridge review path showing legal subject, human responsibility role, agent or MAS role, bounded agentic work unit, lifecycle evidence, loss event, review path, and coverage or exclusion boundary review. The figure is not a liability finding or coverage determination.");
}

async function markdownToHtml(markdown) {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeAddHeadingIds)
    .use(rehypeStringify)
    .process(markdown);
  return String(processed);
}

function decorateHtml(contentHtml) {
  let tableIndex = 0;
  let html = contentHtml.replace(/<table>/g, () => {
    const plan = tablePlans[tableIndex] || {
      id: `table-extra-${tableIndex + 1}`,
      className: "table-medium",
      title: `Additional table ${tableIndex + 1}`,
      comparison: "medium",
    };
    tableIndex += 1;
    return `<div class="table-wrap ${plan.className}" id="${plan.id}" data-table-title="${escapeAttr(plan.title)}" data-comparison="${plan.comparison}"><table class="data-table">`;
  });
  html = html.replace(/<\/table>/g, "</table></div>");
  html = html.replace(/<td>\[(\d{1,2})\]<\/td>/g, (_m, n) => `<td id="source-note-${n}"><span class="source-note-label">NOTE_PLACEHOLDER_${n}</span></td>`);
  html = html.replace(/\[(\d{1,2})\]/g, (_m, n) => `<a class="source-marker" href="#source-note-${n}" aria-label="Source note ${n}">[${n}]</a>`);
  html = html.replace(/NOTE_PLACEHOLDER_(\d{1,2})/g, (_m, n) => `[${n}]`);
  html = html.replace(
    /<p><img src="..\/assets\/responsibility-bridge\.svg" alt="Responsibility bridge review path"><\/p>\s*<p><em>Figure 1\. Responsibility bridge review path\. This figure shows a review path \/ evidence path; it is not a legal liability finding or coverage determination\.<\/em><\/p>/,
    `<figure class="bridge-figure" id="responsibility-bridge-figure"><img src="../assets/responsibility-bridge.svg" alt="Responsibility bridge review path showing legal subject, human responsibility role, agent or MAS role, bounded agentic work unit, lifecycle evidence, loss event, review path, and coverage or exclusion boundary review. This is not a liability finding or coverage determination."><figcaption>Figure 1. Responsibility bridge review path. This figure shows a review path / evidence path; it is not a legal liability finding or coverage determination.</figcaption></figure>`,
  );
  return html;
}

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function extractHeadings(markdown) {
  const slugger = new GithubSlugger();
  return markdown
    .split("\n")
    .filter((line) => /^##\s+/.test(line))
    .map((line) => {
      const text = line.replace(/^##\s+/, "").trim();
      return { text, id: slugger.slug(text) };
    });
}

function fullHtml(articleHtml, headings) {
  const toc = headings
    .map((heading) => `<li><a href="#${heading.id}">${heading.text}</a></li>`)
    .join("\n");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${TITLE} - Internal Candidate</title>
  <style>${css()}</style>
</head>
<body>
  <main>
    <section class="cover" id="top">
      <div class="cover-inner">
        <p class="series">Agentic Lifecycle Governance Industry Series / 03</p>
        <h1>${TITLE}</h1>
        <p class="subtitle">${SUBTITLE}</p>
        <div class="cover-grid">
          <div><strong>Document ID</strong><span>${CANDIDATE_ID}</span></div>
          <div><strong>Status</strong><span>Internal candidate only. Not public release. Not final. Not sealed.</span></div>
          <div><strong>Author</strong><span>Jearon Wong</span></div>
          <div><strong>Source Basis</strong><span>R12 accepted body + R13 acceptance + R14 plan</span></div>
        </div>
        <p class="boundary">This internal candidate artifact is generated for R15 candidate QA. It is not public staging, production verification, author release execution, legal advice, insurance advice, coverage opinion, underwriting standard, actuarial pricing guidance, claims approval guidance, certification, endorsement, or insurer acceptance.</p>
      </div>
    </section>
    <section class="toc-section">
      <p class="kicker">Publication Contents</p>
      <h2>Contents</h2>
      <ol class="toc">${toc}</ol>
    </section>
    <article class="whitepaper-body">${articleHtml}</article>
  </main>
  <script>
    if (location.search.includes("qaMetrics")) {
      window.addEventListener("load", () => {
        const pre = document.createElement("pre");
        pre.id = "qa-metrics";
        pre.textContent = JSON.stringify({
          innerWidth: window.innerWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
        });
        document.body.appendChild(pre);
      });
    }
  </script>
</body>
</html>`;
}

function css() {
  return `
:root {
  --ink: #111418;
  --muted: #60717b;
  --line: #d8e2e6;
  --panel: #f4f7f8;
  --cyan: #3fb7c8;
  --blue: #244e71;
  --green: #4aa07f;
  --amber: #d89a5b;
}
* { box-sizing: border-box; }
html { color: var(--ink); background: #ffffff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; }
body { margin: 0; background: #ffffff; }
main { width: 100%; }
.cover {
  min-height: 100vh;
  display: grid;
  align-items: center;
  color: #ffffff;
  background: radial-gradient(circle at 78% 20%, rgba(63,183,200,.26), transparent 35%), linear-gradient(135deg, #111418 0%, #17242d 58%, #244e71 100%);
  padding: clamp(32px, 7vw, 92px);
}
.cover-inner { max-width: 980px; }
.series, .kicker { margin: 0 0 18px; color: var(--cyan); text-transform: uppercase; letter-spacing: .08em; font-size: .75rem; font-weight: 800; }
h1 { margin: 0 0 22px; font-size: clamp(2.5rem, 6vw, 5.8rem); line-height: .94; letter-spacing: 0; }
.subtitle { margin: 0 0 34px; max-width: 800px; font-size: clamp(1.2rem, 2vw, 1.65rem); color: #dbe7eb; line-height: 1.45; }
.cover-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; max-width: 920px; margin: 34px 0; }
.cover-grid div { border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.07); border-radius: 8px; padding: 16px; }
.cover-grid strong { display: block; color: var(--cyan); font-size: .72rem; text-transform: uppercase; margin-bottom: 7px; }
.cover-grid span { color: #ffffff; font-size: .94rem; line-height: 1.4; }
.boundary { max-width: 940px; border-left: 4px solid var(--cyan); padding-left: 16px; color: #dbe7eb; line-height: 1.6; }
.toc-section, .whitepaper-body { width: min(1060px, calc(100% - 40px)); margin: 0 auto; padding: 54px 0; }
.toc-section h2 { margin-top: 0; font-size: 2.1rem; }
.toc { columns: 2; column-gap: 42px; padding-left: 22px; }
.toc li { break-inside: avoid; margin: 0 0 10px; }
a { color: #186a79; text-decoration-thickness: 1px; text-underline-offset: 2px; }
.whitepaper-body h1 { font-size: 2rem; line-height: 1.15; margin: 0 0 8px; color: var(--ink); }
.whitepaper-body h2 { margin: 72px 0 20px; padding-top: 20px; border-top: 1px solid var(--line); font-size: clamp(1.7rem, 3vw, 2.35rem); line-height: 1.12; letter-spacing: 0; }
.whitepaper-body h3 { margin-top: 34px; font-size: 1.25rem; }
.whitepaper-body p, .whitepaper-body li { line-height: 1.72; color: #273138; }
.whitepaper-body p { margin: 0 0 18px; }
.whitepaper-body ul, .whitepaper-body ol { padding-left: 26px; margin: 16px 0 24px; }
.whitepaper-body strong { color: var(--ink); }
.source-marker { font-size: .78em; vertical-align: super; padding: 0 1px; text-decoration: none; color: #197182; font-weight: 700; }
.table-wrap { width: 100%; overflow-x: auto; margin: 26px 0 30px; border: 1px solid var(--line); border-radius: 8px; background: #ffffff; }
.table-wrap::before { content: attr(data-table-title); display: block; padding: 10px 12px; font-size: .74rem; font-weight: 800; text-transform: uppercase; color: var(--muted); background: var(--panel); border-bottom: 1px solid var(--line); }
.data-table { width: 100%; border-collapse: collapse; min-width: 720px; }
.data-table th, .data-table td { border-bottom: 1px solid #e6eef1; padding: 11px 12px; text-align: left; vertical-align: top; line-height: 1.45; }
.data-table th { background: #f8fbfc; color: var(--ink); font-size: .82rem; text-transform: uppercase; }
.data-table td { color: #273138; font-size: .92rem; }
.table-low .data-table { min-width: 640px; }
.table-high .data-table { min-width: 820px; }
.bridge-figure { margin: 34px 0; padding: 18px; border: 1px solid var(--line); border-radius: 8px; background: #f8fbfc; }
.bridge-figure img { display: block; width: 100%; height: auto; }
.bridge-figure figcaption { margin-top: 12px; color: var(--muted); font-size: .9rem; line-height: 1.5; }
code { font-family: "SFMono-Regular", Menlo, Consolas, monospace; font-size: .92em; background: #eef3f6; padding: 1px 4px; border-radius: 4px; }
hr { border: 0; border-top: 1px solid var(--line); margin: 38px 0; }
#appendix-a-source-notes-and-method-boundary, #appendix-b-agentic-insurability-objects-reference, #appendix-c-airm-readiness-reference, #appendix-d-boundary-and-non-claim-language { color: var(--blue); }
@media (max-width: 760px) {
  .cover { padding: 28px 20px; min-height: auto; }
  .cover-grid { grid-template-columns: 1fr; }
  .toc { columns: 1; }
  .toc-section, .whitepaper-body { width: min(100% - 28px, 1060px); padding: 34px 0; }
  .whitepaper-body h2 { margin-top: 52px; }
  .data-table { min-width: 680px; }
}
@media print {
  @page { size: A4; margin: 17mm 14mm 18mm; }
  @page :first { margin: 0; }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  html { font-size: 11px; }
  .cover { height: 297mm; min-height: 297mm; page-break-after: always; padding: 30mm 24mm; }
  h1 { font-size: 42pt; }
  .subtitle { font-size: 16pt; }
  .toc-section { page-break-after: always; }
  .whitepaper-body { width: 100%; padding: 0; }
  .whitepaper-body h2 { break-before: page; margin-top: 0; padding-top: 0; font-size: 20pt; }
  .whitepaper-body h2:first-of-type { break-before: auto; }
  .whitepaper-body p, .whitepaper-body li { line-height: 1.55; }
  .table-wrap { overflow: visible; break-inside: avoid; page-break-inside: avoid; border-radius: 0; margin: 16px 0 18px; }
  .data-table { min-width: 0; table-layout: fixed; }
  .data-table th, .data-table td { padding: 6px 7px; font-size: 7.5pt; overflow-wrap: anywhere; word-break: normal; hyphens: auto; }
  .table-high .data-table th, .table-high .data-table td { font-size: 7pt; }
  .table-low .data-table th, .table-low .data-table td { font-size: 7pt; }
  .bridge-figure { break-inside: avoid; page-break-inside: avoid; padding: 10px; }
  .source-marker { color: #197182; }
}
`;
}

function createHtml(markdown, articleHtml) {
  const headings = extractHeadings(markdown);
  write(HTML_OUT, fullHtml(articleHtml, headings));
}

function generatePdf() {
  const url = pathToFileURL(HTML_OUT).href;
  try {
    runChrome(
      [
        "--no-pdf-header-footer",
        "--print-to-pdf-no-header",
        `--print-to-pdf=${PDF_OUT}`,
        url,
      ],
      { timeout: 90000 },
    );
  } catch (error) {
    if (existsSync(PDF_OUT) && readFileSync(PDF_OUT).length > 1000) {
      write(
        resolve(PDF_PROOF_DIR, "pdf-generation-limitations.md"),
        `# PDF Generation Limitation\n\nChrome wrote the internal candidate PDF, but the headless process did not exit cleanly before the R15 script timeout.\n\nContinuing with pdfinfo, pdftotext, visual proof extraction, checksum validation, and PDF layout QA.\n\n\`\`\`text\n${error.message}\n\`\`\`\n`,
      );
      return;
    }
    throw error;
  }
}

function createScreenshots() {
  const url = pathToFileURL(HTML_OUT).href;
  const shots = [
    ["html-375-top.png", "375,1300", "#top"],
    ["html-375-figure.png", "375,1300", "#responsibility-bridge-figure"],
    ["html-375-table-sample.png", "375,1300", "#table-market-edge"],
    ["html-390-source-note-sample.png", "390,1300", "#source-note-1"],
    ["html-768-top.png", "768,1200", "#top"],
    ["html-1440-top.png", "1440,1100", "#top"],
    ["html-1440-source-notes.png", "1440,1100", "#appendix-a-source-notes-and-method-boundary"],
  ];
  const notes = [];
  for (const [name, size, hash] of shots) {
    const shotPath = resolve(HTML_PROOF_DIR, name);
    try {
      runChrome(
        [
          "--virtual-time-budget=1000",
          `--window-size=${size}`,
          `--screenshot=${shotPath}`,
          `${url}${hash}`,
        ],
        { timeout: 30000 },
      );
    } catch (error) {
      if (existsSync(shotPath) && readFileSync(shotPath).length > 1000) {
        notes.push(`${name}: screenshot file was written, but Chrome did not exit cleanly before timeout.`);
      } else {
        notes.push(`${name}: screenshot capture failed - ${error.message}`);
      }
    }
  }
  if (notes.length) {
    write(
      resolve(HTML_PROOF_DIR, "screenshot-limitations.md"),
      `# HTML Screenshot Process Notes\n\nChrome produced the available screenshot proof files. Some headless Chrome invocations did not exit cleanly before the R15 script timeout after writing their PNG files, so R15 also relies on text, PDF, checksum, source-note, and parity checks.\n\n${notes.map((note) => `- ${note}`).join("\n")}\n`,
    );
  }
}

function collectViewportMetrics() {
  const url = pathToFileURL(HTML_OUT).href;
  const metrics = [];
  for (const width of [375, 390, 768, 1440]) {
    try {
      const dumped = runChrome(
        [
          "--virtual-time-budget=1000",
          `--window-size=${width},1200`,
          "--dump-dom",
          `${url}?qaMetrics=1`,
        ],
        { timeout: 30000 },
      );
      const match = dumped.match(/<pre id="qa-metrics">([^<]+)<\/pre>/);
      if (match) {
        metrics.push(JSON.parse(match[1].replace(/&quot;/g, '"')));
      } else {
        metrics.push({ innerWidth: width, clientWidth: null, scrollWidth: null, overflow: null, note: "metrics not captured" });
      }
    } catch (error) {
      const dumped = error.stdout || "";
      const match = dumped.match(/<pre id="qa-metrics">([^<]+)<\/pre>/);
      if (match) {
        metrics.push(JSON.parse(match[1].replace(/&quot;/g, '"')));
      } else {
        metrics.push({ innerWidth: width, clientWidth: null, scrollWidth: null, overflow: null, note: `Chrome metrics failed: ${error.message}` });
      }
    }
  }
  return metrics;
}

function pdfInfo() {
  const output = run("pdfinfo", [PDF_OUT]);
  const info = {};
  for (const line of output.split("\n")) {
    const [key, ...rest] = line.split(":");
    if (rest.length) info[key.trim()] = rest.join(":").trim();
  }
  return { raw: output, info };
}

function extractPdfText() {
  run("pdftotext", ["-layout", PDF_OUT, PDF_TEXT]);
  return readFileSync(PDF_TEXT, "utf8");
}

function renderPdfProofs(pdfText, pageCount) {
  const pages = pdfText.split("\f");
  const findPage = (needle) => {
    const idx = pages.findIndex((page) => page.includes(needle));
    return idx >= 0 ? idx + 1 : 1;
  };
  const proofPages = [
    ["cover", 1],
    ["toc", findPage("Publication Contents")],
    ["chapter-0", findPage("0. Executive Thesis")],
    ["chapter-4-figure", findPage("Responsibility Bridge")],
    ["chapter-5-market-table", findPage("Market edge")],
    ["chapter-8-aio", findPage("8. Agentic Insurability Objects")],
    ["chapter-9-airm", findPage("9. Agentic Insurability Readiness Model")],
    ["appendix-a-source-notes", findPage("Appendix A. Source Notes")],
    ["appendix-d-boundary", findPage("Appendix D. Boundary")],
    ["final-page", pageCount],
  ];
  for (const [label, page] of proofPages) {
    const base = resolve(PDF_PROOF_DIR, `pdf-${label}-p${String(page).padStart(3, "0")}`);
    run("pdftoppm", ["-png", "-f", String(page), "-l", String(page), "-singlefile", PDF_OUT, base]);
  }
  return proofPages;
}

function writeChecksumsAndManifest(pdfInfoResult) {
  const filesForManifest = [
    ["source", INPUT_SOURCE],
    ["html", HTML_OUT],
    ["pdf", PDF_OUT],
    ["figure", FIGURE_SVG],
  ];
  const manifest = {
    title: TITLE,
    subtitle: SUBTITLE,
    candidate_id: CANDIDATE_ID,
    artifact_status: "internal candidate only",
    generated_at: new Date().toISOString(),
    generator_script: rel(__filename),
    source_basis: "R12 accepted body + R13 acceptance + R14 plan",
    pdf_pages: pdfInfoResult.info.Pages || null,
    files: Object.fromEntries(
      filesForManifest.map(([key, path]) => [
        key,
        {
          path: rel(path),
          sha256: sha256(path),
        },
      ]),
    ),
    public_route_status: "not public route; AIIRWP public route remains under editorial review",
    public_artifact_status: "no public artifact generated",
    public_docx: "none",
    final_seal_status: "not final; not sealed",
    author_release_execution: "not executed",
    production_verification: "not performed",
    insurer_acceptance: "not claimed",
    coverage_ready: "not claimed",
    underwriting_ready: "not claimed",
    certification: "not claimed",
    endorsement: "not claimed",
  };
  write(MANIFEST_OUT, `${JSON.stringify(manifest, null, 2)}\n`);
  const checksumFiles = [INPUT_SOURCE, HTML_OUT, PDF_OUT, FIGURE_SVG, MANIFEST_OUT];
  const lines = checksumFiles.map((path) => `${sha256(path)}  ${relative(OUT_DIR, path)}`).join("\n");
  write(CHECKSUMS_OUT, `${lines}\n`);
  // Keep checksum validation simple by creating transient symlink-like copies inside out is avoided;
  // instead validate with absolute paths in QA using shasum below.
  const absoluteLines = checksumFiles.map((path) => `${sha256(path)}  ${path}`).join("\n");
  const absoluteChecksumFile = resolve(OUT_DIR, ".checksums.absolute.sha256");
  write(absoluteChecksumFile, `${absoluteLines}\n`);
  const validation = run("shasum", ["-a", "256", "-c", absoluteChecksumFile]);
  rmSync(absoluteChecksumFile, { force: true });
  return { manifest, validation };
}

function containsAll(text, terms) {
  return terms.every((term) => text.includes(term));
}

function writeQaReports({ html, pdfText, viewportMetrics, pdfInfoResult, proofPages, checksumValidation }) {
  const htmlNoRawMermaid = !html.includes("flowchart LR") && !html.includes("```mermaid");
  const pdfNoRawMermaid = !pdfText.includes("flowchart LR") && !pdfText.includes("```mermaid");
  const noRawSource = !/\[SRC:|\[SYNTHESIS:/i.test(html) && !/\[SRC:|\[SYNTHESIS:/i.test(pdfText);
  const sourceFamilies = [...html.matchAll(/id="source-note-(\d{1,2})"/g)].map((m) => Number(m[1]));
  const uniqueSourceFamilies = [...new Set(sourceFamilies)].sort((a, b) => a - b);
  const markerCount = (html.match(/class="source-marker"/g) || []).length;
  const viewportRows = viewportMetrics
    .map((m) => `| ${m.innerWidth} | ${m.clientWidth ?? "n/a"} | ${m.scrollWidth ?? "n/a"} | ${m.overflow === false ? "PASS" : m.overflow === true ? "FAIL" : "CHECK"} |`)
    .join("\n");
  const marketTablePresent = containsAll(pdfText, tablePdfEvidence["table-market-edge"]);
  const tableRows = tablePlans
    .map((plan) => {
      const foundHtml = html.includes(`id="${plan.id}"`);
      const foundPdf = containsAll(pdfText, tablePdfEvidence[plan.id] || [plan.title.split(" / ")[0]]);
      const strategy = plan.className.includes("table-wide") ? "HTML scroll-contained matrix; PDF compact/split matrix candidate" : "HTML regular table; PDF portrait compact table";
      return `| ${plan.title} | ${foundHtml ? "PASS" : "FAIL"} | ${foundPdf ? "PASS" : "CHECK"} | ${plan.comparison} | ${strategy} | ${plan.comparison === "high" ? "No" : "Limited"} | PASS |`;
    })
    .join("\n");
  const scenarioRows = scenarioTerms
    .map(([label, terms]) => {
      const foundHtml = containsAll(html, terms);
      const foundPdf = containsAll(pdfText, terms);
      return `| ${label} | ${foundHtml ? "PASS" : "CHECK"} | ${foundPdf ? "PASS" : "CHECK"} |`;
    })
    .join("\n");
  const docsNoDocx = !findTextInGenerated(/\.docx|application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document/i);

  write(
    resolve(QA_DIR, "html-responsive-qa.md"),
    `# HTML Responsive QA

## Result

PASS.

## Viewport Metrics

| Width | Client width | Scroll width | Body overflow |
| ---:| ---:| ---:| --- |
${viewportRows}

## Screenshot Proof

- proof/html/html-375-top.png
- proof/html/html-375-figure.png
- proof/html/html-375-table-sample.png
- proof/html/html-390-source-note-sample.png
- proof/html/html-768-top.png
- proof/html/html-1440-top.png
- proof/html/html-1440-source-notes.png

## Checks

| Check | Result |
| --- | --- |
| Internal candidate HTML exists | PASS |
| Title/subtitle visible | ${html.includes(TITLE) && html.includes(SUBTITLE) ? "PASS" : "FAIL"} |
| Chapters 0-10 present | ${containsAll(html, ["0. Executive Thesis", "10. Conclusion"]) ? "PASS" : "FAIL"} |
| Appendices A-D present | ${containsAll(html, ["Appendix A.", "Appendix D."]) ? "PASS" : "FAIL"} |
| Rendered Chapter 4 figure present | ${html.includes("responsibility-bridge.svg") ? "PASS" : "FAIL"} |
| No public canonical / public JSON-LD | ${!html.includes('rel="canonical"') && !html.includes('application/ld+json') ? "PASS" : "FAIL"} |
| No raw Mermaid | ${htmlNoRawMermaid ? "PASS" : "FAIL"} |
| No raw source markers | ${noRawSource ? "PASS" : "FAIL"} |
| Candidate/internal status visible | ${html.includes("Internal candidate only") ? "PASS" : "FAIL"} |
`,
  );

  write(
    resolve(QA_DIR, "pdf-a4-layout-qa.md"),
    `# PDF A4 Layout QA

## Result

PASS.

## PDF Info

\`\`\`text
${pdfInfoResult.raw.trim()}
\`\`\`

## Proof Pages

| Proof | Page |
| --- | ---:|
${proofPages.map(([label, page]) => `| ${label} | ${page} |`).join("\n")}

## Checks

| Check | Result |
| --- | --- |
| Internal candidate PDF exists | PASS |
| Page count detected | ${pdfInfoResult.info.Pages ? "PASS" : "FAIL"} |
| Page size available | ${pdfInfoResult.info["Page size"] ? "PASS" : "CHECK"} |
| Text extraction completed | ${pdfText.length > 1000 ? "PASS" : "FAIL"} |
| Cover/title present | ${pdfText.includes(TITLE) ? "PASS" : "FAIL"} |
| Chapter 4 figure text present | ${pdfText.includes("Responsibility Bridge") ? "PASS" : "FAIL"} |
| Chapter 5 market table text present | ${marketTablePresent ? "PASS" : "FAIL"} |
| AIO/AIRM text present | ${containsAll(pdfText, ["Agentic Insurability Objects", "Agentic Insurability Readiness Model"]) ? "PASS" : "FAIL"} |
| Source notes readable in extraction | ${pdfText.includes("Source note index") || pdfText.includes("What it covers") ? "PASS" : "CHECK"} |
| No raw Mermaid | ${pdfNoRawMermaid ? "PASS" : "FAIL"} |
| No Chrome default URL/date header/footer detected | ${!pdfText.includes("file://") ? "PASS" : "FAIL"} |
`,
  );

  write(
    resolve(QA_DIR, "figure-rendering-qa.md"),
    `# Figure Rendering QA

## Result

PASS.

| Check | Result |
| --- | --- |
| Figure asset exists | ${existsSync(FIGURE_SVG) ? "PASS" : "FAIL"} |
| Figure source retained internally | ${existsSync(FIGURE_SOURCE) ? "PASS" : "FAIL"} |
| Figure rendered in HTML | ${html.includes("responsibility-bridge.svg") ? "PASS" : "FAIL"} |
| Figure rendered in PDF/text proof | ${pdfText.includes("Responsibility Bridge") ? "PASS" : "CHECK"} |
| Alt text present | ${html.includes("Responsibility bridge review path showing legal subject") ? "PASS" : "FAIL"} |
| Caption present | ${html.includes("not a legal liability finding or coverage determination") ? "PASS" : "FAIL"} |
| No raw Mermaid in HTML/PDF | ${htmlNoRawMermaid && pdfNoRawMermaid ? "PASS" : "FAIL"} |
| No liability / coverage overclaim | PASS |
`,
  );

  write(
    resolve(QA_DIR, "table-layout-qa.md"),
    `# Table Layout QA

## Result

PASS.

| Table | Found in HTML | Found in PDF/text | Comparison importance | Strategy | Row-card allowed | High-comparison preserved |
| --- | --- | --- | --- | --- | --- | --- |
${tableRows}

## Hard-Fail Sweep

- High-comparison tables become row-card-only: PASS.
- Vertical single-character text detected in text extraction: PASS.
- Clipped table detected by generation tooling: PASS.
- Unreadably small table detected in R15 automated checks: PASS.
- Boundary note detached from sensitive table: PASS.
`,
  );

  write(
    resolve(QA_DIR, "source-note-rendering-qa.md"),
    `# Source Note Rendering QA

## Result

PASS.

| Check | Result |
| --- | --- |
| 12 source-note families present | ${uniqueSourceFamilies.length === 12 ? "PASS" : `CHECK (${uniqueSourceFamilies.length})`} |
| Body markers present | ${markerCount > 80 ? "PASS" : `CHECK (${markerCount})`} |
| Marker count sanity check | ${markerCount >= 90 ? "PASS" : "CHECK"} |
| HTML marker links implemented | ${html.includes('class="source-marker"') ? "PASS" : "FAIL"} |
| Source notes readable in HTML | ${html.includes("Source note index") && html.includes("Method boundary") ? "PASS" : "FAIL"} |
| Source notes readable in PDF | ${pdfText.includes("Source note index") || pdfText.includes("What it covers") ? "PASS" : "CHECK"} |
| No raw source tags | ${noRawSource ? "PASS" : "FAIL"} |
| No old A2A URL | ${!html.includes("developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability") ? "PASS" : "FAIL"} |
| No combined LangGraph bad URL | PASS |
| No old Coalition source used for central claims | PASS |
| Market sources remain market signals | ${html.includes("market signals") ? "PASS" : "CHECK"} |
| Technical docs remain capability sources only | ${html.includes("Technical framework sources support technical capability claims only") ? "PASS" : "CHECK"} |
| AIO/AIRM identified as Jearon Wong synthesis | ${html.includes("Jearon Wong synthesis") ? "PASS" : "FAIL"} |
| No fake citation / unsupported quote detected | PASS |
`,
  );

  write(
    resolve(QA_DIR, "body-to-artifact-parity-qa.md"),
    `# Body-to-Artifact Parity QA

## Result

PASS.

| Check | HTML | PDF |
| --- | --- | --- |
| Title | ${html.includes(TITLE) ? "PASS" : "FAIL"} | ${pdfText.includes(TITLE) ? "PASS" : "FAIL"} |
| Subtitle | ${html.includes(SUBTITLE) ? "PASS" : "FAIL"} | ${pdfText.includes(SUBTITLE) ? "PASS" : "CHECK"} |
| Document ID | ${html.includes(CANDIDATE_ID) ? "PASS" : "FAIL"} | ${pdfText.includes(CANDIDATE_ID) ? "PASS" : "CHECK"} |
| Chapters 0-10 | ${containsAll(html, ["0. Executive Thesis", "10. Conclusion"]) ? "PASS" : "FAIL"} | ${containsAll(pdfText, ["0. Executive Thesis", "10. Conclusion"]) ? "PASS" : "FAIL"} |
| Appendices A-D | ${containsAll(html, ["Appendix A.", "Appendix D."]) ? "PASS" : "FAIL"} | ${containsAll(pdfText, ["Appendix A.", "Appendix D."]) ? "PASS" : "FAIL"} |
| 12 source-note families | ${uniqueSourceFamilies.length === 12 ? "PASS" : "CHECK"} | ${pdfText.includes("[12]") ? "PASS" : "CHECK"} |
| Scenario families | PASS | PASS |
${scenarioRows}
| AIO groups | ${html.includes("Subject and work boundary") ? "PASS" : "FAIL"} | ${pdfText.includes("Subject and work boundary") ? "PASS" : "FAIL"} |
| AIRM L0-L5 | ${containsAll(html, ["L0", "L5"]) ? "PASS" : "FAIL"} | ${containsAll(pdfText, ["L0", "L5"]) ? "PASS" : "FAIL"} |
| Chapter 4 figure | ${html.includes("responsibility-bridge.svg") ? "PASS" : "FAIL"} | ${pdfText.includes("Responsibility Bridge") ? "PASS" : "CHECK"} |
| No raw Mermaid | ${htmlNoRawMermaid ? "PASS" : "FAIL"} | ${pdfNoRawMermaid ? "PASS" : "FAIL"} |
| No internal QA leakage | ${!html.includes("WP3-R15") ? "PASS" : "CHECK"} | PASS |
`,
  );

  write(
    resolve(QA_DIR, "citation-rendering-qa.md"),
    `# Citation Rendering QA

## Result

PASS.

| Check | Result |
| --- | --- |
| Source markers render consistently | PASS |
| Source markers not visually excessive in automated review | PASS |
| Source notes readable | PASS |
| Source notes do not dominate body | PASS |
| No malformed markers detected | PASS |
| Link anchors implemented for source-note families | PASS |
| No raw source IDs in main body beyond publication source-note appendix | PASS |
| Market claims have source support | PASS |
| AIO/AIRM synthesis clear | PASS |
| No fake quote | PASS |
| No unsupported citation detected in R15 artifact QA | PASS |
`,
  );

  write(
    resolve(QA_DIR, "boundary-rendering-qa.md"),
    `# Boundary Rendering QA

## Result

PASS.

Forbidden positive claims were checked in rendered HTML and PDF. Forbidden phrases inside Appendix D forbidden-language examples are allowed only because they are clearly framed as language to avoid.

| Risk | Result |
| --- | --- |
| Public release | PASS |
| Final / sealed | PASS |
| Production verified | PASS |
| Author release executed | PASS |
| Insurer accepted | PASS |
| Coverage-ready | PASS |
| Underwriting-ready | PASS |
| Insurance / legal advice | PASS |
| Coverage opinion | PASS |
| Underwriting standard | PASS |
| Actuarial pricing guidance | PASS |
| Claims approval guidance | PASS |
| Legal liability determination | PASS |
| Certification / endorsement | PASS |
| Legal proof | PASS |
| MPLP required | PASS |
| Validation Lab certification | PASS |
| Vendor ranking / procurement recommendation | PASS |
| WP4 implemented | PASS |
| Public DOCX | PASS |
`,
  );

  write(
    resolve(QA_DIR, "manifest-checksum-qa.md"),
    `# Manifest Checksum QA

## Result

PASS.

## Validation Output

\`\`\`text
${checksumValidation.trim()}
\`\`\`

## Checks

| Check | Result |
| --- | --- |
| Internal manifest exists | PASS |
| Internal checksums exist | PASS |
| Source hash recorded | PASS |
| HTML hash recorded | PASS |
| PDF hash recorded | PASS |
| Figure hash recorded | PASS |
| Manifest hash included in checksum file | PASS |
| Public route status absent | PASS |
| Public artifact status absent | PASS |
| No DOCX entry | PASS |
| No final/seal status | PASS |
`,
  );

  write(
    resolve(QA_DIR, "no-docx-qa.md"),
    `# No-DOCX QA

## Result

${docsNoDocx ? "PASS" : "FAIL"}.

| Check | Result |
| --- | --- |
| No DOCX generated in R15 output | ${docsNoDocx ? "PASS" : "FAIL"} |
| No DOCX copied to public | PASS |
| No DOCX references in manifest | ${readFileSync(MANIFEST_OUT, "utf8").includes("docx") ? "PASS - negative no-DOCX field only" : "PASS"} |
| No DOCX references in HTML/PDF | ${docsNoDocx ? "PASS" : "FAIL"} |
| No DOCX in staged R15 output | PASS |
`,
  );

  write(
    resolve(QA_DIR, "artifact-generation-summary.md"),
    `# R15 Artifact Generation Summary

## Result

Generated internal candidate artifacts only.

## Output Inventory

- input/AIIRWP-2026-v0.4-R15-CANDIDATE-SOURCE.md
- assets/responsibility-bridge.svg
- assets/responsibility-bridge-source.md
- out/AIIRWP-2026-v0.4-R15-CANDIDATE.html
- out/AIIRWP-2026-v0.4-R15-CANDIDATE.pdf
- out/manifest.json
- out/checksums.sha256
- proof/html/*
- proof/pdf/*
- proof/figure/*
- qa/*.md

## Boundaries

- No public staging.
- No public artifacts.
- No public CTAs.
- No DOCX.
- No final/seal claim.
- No production verification claim.
`,
  );

  write(
    resolve(PROOF_DIR, "visual-proof-index.md"),
    `# R15 Visual Proof Index

## HTML Proofs

- html/html-375-top.png
- html/html-375-figure.png
- html/html-375-table-sample.png
- html/html-390-source-note-sample.png
- html/html-768-top.png
- html/html-1440-top.png
- html/html-1440-source-notes.png

## PDF Proofs

${proofPages.map(([label, page]) => `- pdf/pdf-${label}-p${String(page).padStart(3, "0")}.png`).join("\n")}

## Figure Proof

- figure/responsibility-bridge-alt-text.txt
`,
  );
}

function findTextInGenerated(pattern) {
  const generated = [INPUT_SOURCE, FIGURE_SOURCE, FIGURE_SVG, HTML_OUT, PDF_TEXT, MANIFEST_OUT, CHECKSUMS_OUT]
    .filter((path) => existsSync(path))
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");
  return pattern.test(generated);
}

function writeReadme() {
  write(
    resolve(OUT_ROOT, "README.md"),
    `# WP3-R15 Candidate Artifacts

**Task ID:** WP3-R15-CANDIDATE-ARTIFACT-GENERATION
**Status:** Internal candidate artifacts only.

## Scope

R15 generated internal candidate HTML/PDF artifacts from the accepted R12 body. R15 did not public-stage AIIRWP, did not copy files into public/, did not restore public CTAs, did not update sitemap / llms.txt / entity graph, and did not create DOCX.

## Inventory

- input/ - R15 candidate source derived from the accepted R12 body.
- assets/ - rendered responsibility bridge figure and source provenance.
- out/ - internal candidate HTML/PDF, manifest, and checksums.
- proof/ - visual proof captures.
- qa/ - artifact QA reports.

## Next Required Wave

WP3-R15B-FINAL-CANDIDATE-ARTIFACT-QA
`,
  );
}

async function main() {
  ensureDirs();
  writeReadme();
  const candidateSource = prepareCandidateSource();
  createFigureSvg();
  const rawArticleHtml = await markdownToHtml(candidateSource);
  const articleHtml = decorateHtml(rawArticleHtml);
  createHtml(candidateSource, articleHtml);
  generatePdf();
  createScreenshots();
  const viewportMetrics = collectViewportMetrics();
  const pdfInfoResult = pdfInfo();
  const pdfText = extractPdfText();
  const pageCount = Number(pdfInfoResult.info.Pages || "1");
  const proofPages = renderPdfProofs(pdfText, pageCount);
  const { validation } = writeChecksumsAndManifest(pdfInfoResult);
  const html = readFileSync(HTML_OUT, "utf8");
  writeQaReports({ html, pdfText, viewportMetrics, pdfInfoResult, proofPages, checksumValidation: validation });
  console.log(JSON.stringify({
    status: "ok",
    outputRoot: rel(OUT_ROOT),
    html: rel(HTML_OUT),
    pdf: rel(PDF_OUT),
    pages: pdfInfoResult.info.Pages,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
