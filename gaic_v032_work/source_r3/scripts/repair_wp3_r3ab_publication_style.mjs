#!/usr/bin/env node
/* global URL, process, console, setInterval, clearInterval */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync, spawn } from "node:child_process";
import { pathToFileURL } from "node:url";

const repoRoot = path.resolve(new URL("../../..", import.meta.url).pathname);
const publicDir = path.join(
  repoRoot,
  "public/research/agentic-ai-insurability-risk-transfer-white-paper-2026",
);
const htmlPath = path.join(publicDir, "agentic-ai-insurability-risk-transfer-white-paper-2026.html");
const pdfPath = path.join(publicDir, "agentic-ai-insurability-risk-transfer-white-paper-2026.pdf");
const manifestPath = path.join(publicDir, "manifest.json");
const checksumPath = path.join(publicDir, "checksums.sha256");

const title = "Agentic AI Insurability & Risk Transfer White Paper 2026";
const subtitle = "A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer";
const documentId = "AIIRWP-2026-v1.0-PUBLIC-RESEARCH-CANDIDATE";
const version = "v1.0 Public Research Candidate";
const generatedAt = new Date().toISOString();
const boundaryLine =
  "Public research candidate. Not final, not sealed, not release-ready, not a public release announcement, not legal advice, not insurance advice, not a coverage opinion, not underwriting guidance, not certification, not proof of insurability, not insurer endorsement, not regulator-approved, not a score, and not a standard. No public DOCX is authorized.";

function sha256(filePath) {
  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function extractArticle(source) {
  const match = source.match(/<article(?:\s+[^>]*)?>([\s\S]*?)<\/article>/);
  if (!match) {
    throw new Error("Expected WP3 public HTML to contain a single article element.");
  }
  return match[1]
    .replace(/<h1 id="agentic-ai-insurability--risk-transfer-white-paper-2026">[\s\S]*?<\/h1>\s*/u, "")
    .replace(/<h2 id="a-lifecycle-evidence-guide-for-underwriting-claims-and-enterprise-risk-transfer">[\s\S]*?<\/h2>\s*/u, "");
}

function normalizeBody(body) {
  return body
    .replaceAll('class="table-scroll"', 'class="table-block table-scroll"')
    .replaceAll("<blockquote>", '<blockquote class="professional-notice">')
    .replace(/<h4(?![^>]*\bclass=)\s+/g, '<h4 class="table-caption" ')
    .replace(/<div class="boundary-note">([\s\S]*?)<\/div>\s*$/u, '<section class="important-notice closing-boundary" aria-label="Publication boundary">$1</section>');
}

function buildToc(body) {
  const headings = [...body.matchAll(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)].map((match) => ({
    level: Number(match[1]),
    id: match[2],
    text: match[3].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x26;/g, "&"),
  }));
  const groups = [
    ["Front Matter", headings.filter((h) => h.level === 3).slice(0, 5)],
    ["Parts I-III", headings.filter((h) => /^part-(i|ii|iii)\b/u.test(h.id) || /^chapter-(?:[1-9]|1[0-4])\b/u.test(h.id)).slice(0, 18)],
    ["Parts IV-VI", headings.filter((h) => /^part-(iv|v|vi)\b/u.test(h.id) || /^chapter-(?:1[5-9]|2[0-8])\b/u.test(h.id)).slice(0, 18)],
    ["Appendices", headings.filter((h) => /^appendix-/u.test(h.id)).slice(0, 12)],
  ];
  return `<section class="generated-toc" aria-label="Publication contents">
  <div class="toc-note">HTML anchors are active in the public research candidate. PDF rendering uses the same professional artifact shell with browser header/footer disabled.</div>
  <div class="toc-grid">
    ${groups
      .map(
        ([label, items]) => `<div><h3>${label}</h3><ol>${items
          .map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a></li>`)
          .join("")}</ol></div>`,
      )
      .join("")}
  </div>
</section>`;
}

function buildHtml(body) {
  const toc = buildToc(body);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
  <meta name="aiirwp-artifact-status" content="public-research-candidate">
  <meta name="author" content="Jearon Wong">
  <meta name="description" content="${escapeHtml(subtitle)}">
  <title>${escapeHtml(title)} - ${documentId}</title>
  <style>
:root {
  --monolith: #111111;
  --slate: #1a1a1a;
  --machine: #f1f5f9;
  --registry: #3b82f6;
  --evidence: #22d3ee;
  --status: #64748b;
  --grid: #d8dee8;
  --amber: #b7791f;
  --fault: #991b1b;
  --paper: #ffffff;
  --ink: #172033;
  --muted: #5b6678;
  --soft: #f4f7fb;
}
* { box-sizing: border-box; }
html { font-size: 16px; color: var(--ink); background: var(--paper); }
body {
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.64;
}
a { color: #1d5fd0; text-underline-offset: 2px; }
.web-edition-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  padding: 12px max(18px, calc((100vw - 1180px) / 2));
  background: rgba(17, 17, 17, 0.94);
  color: var(--machine);
  border-bottom: 1px solid rgba(255,255,255,.12);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
}
.web-edition-nav a { color: var(--machine); text-decoration: none; }
.publication { background: #fff; }
.cover-page.professional-shell {
  min-height: 92vh;
  display: grid;
  align-items: center;
  padding: clamp(42px, 7vw, 86px) max(24px, calc((100vw - 1180px) / 2));
  background:
    linear-gradient(135deg, rgba(17,17,17,.96), rgba(17,17,17,.90)),
    radial-gradient(circle at 78% 18%, rgba(34,211,238,.18), transparent 36%),
    var(--monolith);
  color: var(--machine);
}
.cover-frame {
  max-width: 1120px;
  border: 1px solid rgba(241,245,249,.2);
  padding: clamp(26px, 5vw, 54px);
  background: rgba(26,26,26,.72);
  box-shadow: 0 28px 90px rgba(0,0,0,.32);
}
.cover-kicker,
.notice-label,
.toc-note,
.table-caption {
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.cover-kicker { color: var(--evidence); font-size: .78rem; margin-bottom: 22px; }
.cover-page h1 {
  max-width: 14ch;
  margin: 0;
  color: #fff;
  font-size: clamp(3rem, 7vw, 6.4rem);
  line-height: .94;
  letter-spacing: 0;
}
.cover-subtitle {
  max-width: 820px;
  margin: 24px 0 0;
  color: rgba(241,245,249,.82);
  font-size: clamp(1.15rem, 2.1vw, 1.6rem);
  line-height: 1.45;
}
.cover-role { color: rgba(241,245,249,.68); font-size: 1rem; margin: 14px 0 0; }
.thesis-strip {
  display: grid;
  gap: 8px;
  max-width: 900px;
  margin: 28px 0;
  padding-left: 18px;
  border-left: 4px solid var(--evidence);
  color: rgba(241,245,249,.82);
}
.thesis-strip strong { color: #fff; }
.cover-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 30px;
}
.cover-meta div {
  border: 1px solid rgba(241,245,249,.18);
  background: rgba(255,255,255,.06);
  padding: 14px;
}
.cover-meta span {
  display: block;
  color: var(--evidence);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: .7rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  margin-bottom: 7px;
}
.cover-meta strong { display: block; color: #fff; line-height: 1.45; overflow-wrap: anywhere; }
.cover-notice {
  margin-top: 28px;
  padding: 16px;
  border-left: 4px solid var(--amber);
  background: rgba(183,121,31,.12);
  color: rgba(241,245,249,.82);
  line-height: 1.58;
}
.important-notice,
.generated-toc,
.whitepaper-body,
.html-footer {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}
.important-notice {
  margin-top: 44px;
  margin-bottom: 34px;
  padding: 22px;
  border: 1px solid #ead9b0;
  border-left: 5px solid var(--amber);
  background: #fff8e8;
}
.important-notice h2 { margin: 0 0 10px; font-size: 1.35rem; }
.important-notice p { margin: 0; max-width: 92ch; color: #4d3b17; }
.notice-label { color: #8a5a0a; font-size: .72rem; margin-bottom: 8px; }
.generated-toc { padding: 28px 0 42px; }
.toc-note { color: var(--status); font-size: .75rem; margin-bottom: 14px; }
.toc-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}
.toc-grid div {
  border: 1px solid var(--grid);
  background: #fbfcfe;
  padding: 14px;
}
.toc-grid h3 { margin: 0 0 8px; color: var(--monolith); font-size: .95rem; }
.toc-grid ol { margin: 0; padding-left: 1.2rem; }
.toc-grid li { margin: 0 0 7px; font-size: .88rem; line-height: 1.35; }
.whitepaper-body { padding: 24px 0 74px; }
.whitepaper-body h2 {
  margin: 72px 0 18px;
  padding-top: 22px;
  border-top: 1px solid var(--grid);
  color: var(--monolith);
  font-size: clamp(1.9rem, 3.5vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: 0;
}
.whitepaper-body h3 {
  margin: 38px 0 14px;
  color: #1f3344;
  font-size: 1.34rem;
  line-height: 1.2;
}
.whitepaper-body h4.table-caption {
  margin: 28px 0 10px;
  color: #29465b;
  font-size: .82rem;
}
.whitepaper-body p,
.whitepaper-body li {
  max-width: 86ch;
  color: #243244;
  font-size: 1rem;
  line-height: 1.74;
}
.whitepaper-body p { margin: 0 0 18px; }
.whitepaper-body ul,
.whitepaper-body ol { padding-left: 1.35rem; }
.professional-notice {
  max-width: 92ch;
  margin: 24px 0;
  border-left: 4px solid var(--registry);
  background: #f5f8ff;
  color: #243244;
  padding: 12px 18px;
}
code {
  background: #f1f5f9;
  border: 1px solid #dbe3ef;
  border-radius: 4px;
  padding: 1px 4px;
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: .9em;
}
.table-block {
  max-width: 100%;
  overflow-x: auto;
  margin: 22px 0 32px;
  border: 1px solid var(--grid);
  background: #fff;
}
.table-block table {
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
  font-size: .9rem;
}
.table-block th,
.table-block td {
  border-right: 1px solid #e5ebf3;
  border-bottom: 1px solid #e5ebf3;
  padding: 10px 12px;
  text-align: left;
  vertical-align: top;
  line-height: 1.45;
}
.table-block th {
  background: #f3f7fb;
  color: #172033;
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: .72rem;
  letter-spacing: .04em;
  text-transform: uppercase;
}
.table-block tr:last-child td { border-bottom: 0; }
.table-block th:last-child,
.table-block td:last-child { border-right: 0; }
.closing-boundary { margin-bottom: 72px; }
.html-footer {
  padding: 26px 0 46px;
  border-top: 1px solid var(--grid);
  color: var(--status);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: .75rem;
}
@media (max-width: 860px) {
  .cover-meta,
  .toc-grid { grid-template-columns: 1fr; }
  .cover-page.professional-shell { min-height: auto; }
  .cover-frame { padding: 22px; }
  .web-edition-nav { position: static; display: grid; gap: 8px; }
}
@page { size: A4; margin: 17mm 14mm 19mm; }
@media print {
  html, body { background: #fff; }
  body { font-size: 10.2pt; }
  .web-edition-nav { display: none; }
  .cover-page.professional-shell {
    min-height: 264mm;
    padding: 0;
    background: var(--monolith);
    break-after: page;
    page-break-after: always;
  }
  .cover-frame {
    min-height: 240mm;
    margin: 0;
    border-color: rgba(241,245,249,.28);
    box-shadow: none;
  }
  .cover-page h1 { font-size: 42pt; max-width: 13ch; }
  .cover-subtitle { font-size: 15pt; }
  .cover-meta { gap: 8px; }
  .cover-meta div { padding: 10px; }
  .important-notice,
  .generated-toc,
  .whitepaper-body,
  .html-footer {
    width: 100%;
  }
  .generated-toc { break-after: page; page-break-after: always; padding: 0; }
  .toc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .toc-grid div { padding: 9px; }
  .toc-grid li { font-size: 7.4pt; }
  .whitepaper-body { padding: 0; }
  .whitepaper-body h2 {
    break-before: page;
    page-break-before: always;
    margin: 0 0 14pt;
    padding-top: 0;
    font-size: 20pt;
  }
  .whitepaper-body h2:first-child { break-before: auto; page-break-before: auto; }
  .whitepaper-body h3 { font-size: 12.5pt; margin: 18pt 0 7pt; }
  .whitepaper-body h4.table-caption { font-size: 8.5pt; margin: 14pt 0 5pt; }
  .whitepaper-body p,
  .whitepaper-body li {
    max-width: none;
    font-size: 9.4pt;
    line-height: 1.46;
  }
  .table-block {
    overflow: visible;
    break-inside: auto;
    page-break-inside: auto;
    border-radius: 0;
    margin: 12pt 0 15pt;
  }
  .table-block table {
    min-width: 0;
    table-layout: fixed;
    font-size: 6.9pt;
  }
  .table-block th,
  .table-block td {
    padding: 4.2pt;
    line-height: 1.2;
    overflow-wrap: anywhere;
    word-break: normal;
  }
  .professional-notice,
  .important-notice {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
  </style>
</head>
<body>
  <nav class="web-edition-nav" aria-label="Artifact navigation">
    <a href="/research/agentic-ai-insurability-risk-transfer-white-paper-2026/">WP3 publication hub</a>
    <a href="/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json">Manifest</a>
    <a href="/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256">Checksums</a>
    <span>${documentId}</span>
  </nav>
  <main class="publication">
    <section class="cover-page professional-shell">
      <div class="cover-frame">
        <div class="cover-kicker">Jearon Wong / Agentic Lifecycle Governance Industry Series / WP3</div>
        <h1>${escapeHtml(title)}</h1>
        <p class="cover-subtitle">${escapeHtml(subtitle)}</p>
        <p class="cover-role">Jearon Wong - Protocol Architect for the Agent Era</p>
        <div class="thesis-strip">
          <strong>A lifecycle evidence guide for risk-transfer analysis, claim reconstruction, and underwriting-facing reviewability.</strong>
          <span>HTML and PDF are public research-candidate artifacts. Manifest and checksum records are provided for integrity verification.</span>
        </div>
        <div class="cover-meta">
          <div><span>Document ID</span><strong>${documentId}</strong></div>
          <div><span>Version</span><strong>${version}</strong></div>
          <div><span>Status</span><strong>Public Research Candidate; not final, not sealed, not release-ready.</strong></div>
          <div><span>Artifact Role</span><strong>HTML/PDF visual authority; manifest/checksum integrity layer; no public DOCX.</strong></div>
        </div>
        <div class="cover-notice">${boundaryLine}</div>
      </div>
    </section>
    <section class="important-notice" aria-label="Publication boundary">
      <div class="notice-label">Publication Boundary</div>
      <h2>Public Research Candidate Status</h2>
      <p>${boundaryLine} The prior AIIRWP v0.2 candidate remains rejected and withdrawn; it is historical traceability context only and is not current source truth or citation source.</p>
    </section>
    ${toc}
    <article class="whitepaper-body">${body}</article>
    <footer class="html-footer">${documentId} - public research candidate artifact. Generated ${generatedAt}. Final Seal and public announcement require separate authorization.</footer>
  </main>
</body>
</html>
`;
}

function chromePath() {
  const candidates = [
    process.env.CHROME,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("No Chrome/Chromium executable found for PDF export.");
}

function pdfPageCount(filePath) {
  const output = execFileSync("pdfinfo", [filePath], { encoding: "utf8" });
  const match = output.match(/^Pages:\s+(\d+)/m);
  if (!match) throw new Error("Unable to read PDF page count.");
  return Number(match[1]);
}

function htmlToPdf() {
  fs.rmSync(pdfPath, { force: true });
  const profile = path.join(publicDir, ".r3ab-chrome-profile");
  fs.rmSync(profile, { recursive: true, force: true });
  fs.mkdirSync(profile, { recursive: true });
  const child = spawn(chromePath(), [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--no-pdf-header-footer",
    "--disable-extensions",
    "--no-first-run",
    "--no-default-browser-check",
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${pdfPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: ["ignore", "ignore", "pipe"] });

  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });

  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    let lastSize = -1;
    let stableTicks = 0;
    const timer = setInterval(() => {
      if (Date.now() - startedAt > 420000) {
        clearInterval(timer);
        child.kill("SIGKILL");
        fs.rmSync(profile, { recursive: true, force: true });
        reject(new Error(`Chrome PDF export timed out: ${stderr}`));
        return;
      }
      if (!fs.existsSync(pdfPath)) return;
      const size = fs.statSync(pdfPath).size;
      stableTicks = size > 0 && size === lastSize ? stableTicks + 1 : 0;
      lastSize = size;
      if (stableTicks < 2) return;
      try {
        const pages = pdfPageCount(pdfPath);
        if (pages > 0) {
          clearInterval(timer);
          child.kill("SIGTERM");
          fs.rmSync(profile, { recursive: true, force: true });
          resolve(pages);
        }
      } catch {
        // Wait until Chrome has finished enough for pdfinfo to parse the file.
      }
    }, 1500);

    child.on("exit", (code) => {
      if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 0) {
        try {
          const pages = pdfPageCount(pdfPath);
          clearInterval(timer);
          fs.rmSync(profile, { recursive: true, force: true });
          resolve(pages);
          return;
        } catch (error) {
          clearInterval(timer);
          fs.rmSync(profile, { recursive: true, force: true });
          reject(error);
          return;
        }
      }
      if (code !== 0) {
        clearInterval(timer);
        fs.rmSync(profile, { recursive: true, force: true });
        reject(new Error(`Chrome PDF export failed with code ${code}: ${stderr}`));
      }
    });
  });
}

function patchPdfMetadata() {
  const script = `
from PyPDF2 import PdfReader, PdfWriter
from pathlib import Path
src = Path(${JSON.stringify(pdfPath)})
tmp = src.with_suffix(".pdf.tmp")
reader = PdfReader(str(src))
writer = PdfWriter()
for page in reader.pages:
    writer.add_page(page)
writer.add_metadata({
    "/Title": ${JSON.stringify(title)},
    "/Author": "Jearon Wong",
    "/Subject": ${JSON.stringify(subtitle)},
    "/Keywords": "Agentic AI Insurability, AI Risk Transfer, Claim Evidence Chain, Lifecycle Evidence, Agentic Lifecycle Governance",
    "/Producer": "Headless Chrome no-pdf-header-footer; PyPDF2 metadata pass"
})
with tmp.open("wb") as fh:
    writer.write(fh)
tmp.replace(src)
`;
  execFileSync("/usr/bin/python3", ["-c", script], { stdio: "pipe" });
}

function updateManifest(pageCount) {
  const htmlHash = sha256(htmlPath);
  const pdfHash = sha256(pdfPath);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  manifest.wave_id = "WP3-V1-R3AB-WHITEPAPER-PUBLICATION-STYLE-SYSTEM-REPAIR";
  manifest.generated_at = generatedAt;
  manifest.source_basis =
    "R3Y-accepted internal artifact candidate package; R3AB style-system repair applies the GAIC/WP2 professional whitepaper artifact shell and VI v0.4 publication standard to the WP3 public HTML/PDF artifacts.";
  manifest.artifact_style_standard =
    "Unified whitepaper publication standard: Black Box / Evidence Ledger route pages, professional-shell HTML artifacts, A4 PDF visual authority, manifest/checksum integrity layer, no public DOCX.";
  manifest.public_status = "public-research-candidate";
  manifest.route_status = "public-route-active";
  manifest.no_docx_status = "public DOCX unauthorized";
  manifest.boundary_status = [
    "not legal advice",
    "not insurance advice",
    "not coverage opinion",
    "not underwriting guidance",
    "not certification",
    "not final",
    "not sealed",
    "not release-ready",
  ];
  manifest.artifacts = [
    {
      role: "HTML",
      path: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html",
      media_type: "text/html",
      sha256: htmlHash,
      bytes: fs.statSync(htmlPath).size,
    },
    {
      role: "PDF",
      path: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf",
      media_type: "application/pdf",
      sha256: pdfHash,
      bytes: fs.statSync(pdfPath).size,
      page_count: pageCount,
    },
  ];
  manifest.checksums = {
    public_html: htmlHash,
    public_pdf: pdfHash,
    public_manifest: "recorded in checksums.sha256 after manifest serialization; self-referential hash is externalized",
  };
  manifest.public_distribution_note =
    "Public distribution exposes HTML, PDF, manifest, and checksum only. No public DOCX or source Markdown is authorized.";
  manifest.next_phase =
    "R3AC public route post-restoration QA; final seal and public announcement require separate authorization.";
  manifest.publication_system_alignment =
    "R3AB style-system repair complete: WP3 HTML/PDF now use the unified professional whitepaper artifact shell aligned with GAIC/WP2 visual grammar.";
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const finalManifestHash = sha256(manifestPath);
  fs.writeFileSync(
    checksumPath,
    [
      `${htmlHash}  public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`,
      `${pdfHash}  public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`,
      `${finalManifestHash}  public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`,
      "",
    ].join("\n"),
  );
  return { htmlHash, pdfHash, manifestHash: finalManifestHash, pageCount };
}

const previous = fs.readFileSync(htmlPath, "utf8");
const body = normalizeBody(extractArticle(previous));
fs.writeFileSync(htmlPath, buildHtml(body));
await htmlToPdf();
patchPdfMetadata();
const finalPageCount = pdfPageCount(pdfPath);
const result = updateManifest(finalPageCount);
console.log(JSON.stringify(result, null, 2));
