#!/usr/bin/env node
/* global URL, process, console */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

const packageDir = path.resolve(new URL("..", import.meta.url).pathname);
const sourcePath = path.join(packageDir, "AIAAWP-2026-v0.1-R4-CANDIDATE.md");
const sourceRegisterPath = path.join(packageDir, "sources", "wp2-r4-source-register.md");
const citationMapPath = path.join(packageDir, "sources", "wp2-r4-citation-map.md");
const outDir = path.join(packageDir, "out");
const artifactBaseName = "Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate";
const htmlPath = path.join(outDir, `${artifactBaseName}.html`);
const docxHtmlPath = path.join(outDir, `${artifactBaseName}-docx-source.html`);
const pdfPath = path.join(outDir, `${artifactBaseName}.pdf`);
const docxPath = path.join(outDir, `${artifactBaseName}.docx`);
const manifestPath = path.join(packageDir, "manifest.json");
const checksumPath = path.join(packageDir, "checksums.sha256");

const title = "Agentic AI Auditability & Assurance White Paper 2026";
const subtitle = "A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance";
const documentId = "AIAAWP-2026-v0.1-R4-CANDIDATE";
const version = "v0.1-publication-candidate";
const generatedAt = new Date().toISOString();

function sha256(filePath) {
  return createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  const codePlaceholders = [];
  let escaped = escapeHtml(value);
  escaped = escaped.replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE_${codePlaceholders.length}@@`;
    codePlaceholders.push(`<code>${code}</code>`);
    return token;
  });
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  codePlaceholders.forEach((html, index) => {
    escaped = escaped.replace(`@@CODE_${index}@@`, html);
  });
  return escaped;
}

function loadMarked() {
  try {
    return require("marked").marked;
  } catch {
    return null;
  }
}

function fallbackMarkdownToHtml(markdown) {
  const blocks = markdown.split(/\n{2,}/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      const heading = /^(#{1,6})\s+(.+)$/m.exec(trimmed);
      if (heading && heading.index === 0 && trimmed.split("\n").length === 1) {
        const level = heading[1].length;
        return `<h${level}>${inlineMarkdown(heading[2])}</h${level}>`;
      }
      if (/^\|.+\|\n\|[-:\s|]+\|/.test(trimmed)) {
        const rows = trimmed.split("\n").filter(Boolean);
        return `<div class="table-scroll"><table>${rows
          .filter((_, index) => index !== 1)
          .map((row, index) => {
            const cells = row
              .slice(1, -1)
              .split("|")
              .map((cell) => `<${index === 0 ? "th" : "td"}>${inlineMarkdown(cell.trim())}</${index === 0 ? "th" : "td"}>`)
              .join("");
            return `<tr>${cells}</tr>`;
          })
          .join("")}</table></div>`;
      }
      if (/^- /.test(trimmed)) {
        return `<ul>${trimmed
          .split("\n")
          .map((line) => `<li>${inlineMarkdown(line.replace(/^- /, ""))}</li>`)
          .join("")}</ul>`;
      }
      return `<p>${inlineMarkdown(trimmed).replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
}

function convertMarkdown(markdown) {
  const marked = loadMarked();
  if (!marked) return fallbackMarkdownToHtml(markdown);
  marked.setOptions({
    gfm: true,
    breaks: false,
    headerIds: true,
    mangle: false,
  });
  return marked.parse(markdown);
}

function wrapTables(html) {
  return html.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, "</table></div>");
}

async function applyPdfMetadata(filePath) {
  let PDFDocument;
  try {
    ({ PDFDocument } = require("pdf-lib"));
  } catch {
    return applyPdfMetadataWithPython(filePath);
  }
  const pdfDoc = await PDFDocument.load(fs.readFileSync(filePath));
  pdfDoc.setTitle(title);
  pdfDoc.setAuthor("Jearon Wong");
  pdfDoc.setSubject(subtitle);
  pdfDoc.setKeywords([
    "Agentic AI Auditability",
    "AI Agent Auditability",
    "Audit Evidence Chain",
    "AARM",
    "MRO",
    "Agentic Lifecycle Governance",
  ]);
  pdfDoc.setProducer("LibreOffice 26.2.3.2; pdf-lib metadata pass");
  fs.writeFileSync(filePath, await pdfDoc.save());
  return { applied: true };
}

function applyPdfMetadataWithPython(filePath) {
  const scriptPath = path.join(outDir, "patch-pdf-metadata.py");
  const script = `
from PyPDF2 import PdfReader, PdfWriter
from pathlib import Path
src = Path(${JSON.stringify(filePath)})
tmp = src.with_suffix(src.suffix + ".tmp")
reader = PdfReader(str(src))
writer = PdfWriter()
for page in reader.pages:
    writer.add_page(page)
writer.add_metadata({
    "/Title": ${JSON.stringify(title)},
    "/Author": "Jearon Wong",
    "/Subject": ${JSON.stringify(subtitle)},
    "/Keywords": "Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, AARM, MRO, Agentic Lifecycle Governance",
    "/Producer": "LibreOffice; PyPDF2 metadata pass"
})
with tmp.open("wb") as fh:
    writer.write(fh)
tmp.replace(src)
`;
  try {
    fs.writeFileSync(scriptPath, script);
    execFileSync("/usr/bin/python3", [scriptPath], { stdio: "pipe" });
    return { applied: true, fallback: "PyPDF2" };
  } catch (error) {
    return { applied: false, reason: String(error.stderr || error.message || error) };
  } finally {
    fs.rmSync(scriptPath, { force: true });
  }
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function patchDocxCoreMetadata(filePath) {
  if (!fs.existsSync(filePath)) return { applied: false, reason: "DOCX not found" };
  const tempDir = path.join(outDir, "docx-core-metadata-work");
  fs.rmSync(tempDir, { recursive: true, force: true });
  fs.mkdirSync(tempDir, { recursive: true });
  try {
    execFileSync("/usr/bin/unzip", ["-q", filePath, "-d", tempDir], { stdio: "pipe" });
    const corePath = path.join(tempDir, "docProps", "core.xml");
    if (!fs.existsSync(corePath)) {
      return { applied: false, reason: "docProps/core.xml not found" };
    }
    const metadata = {
      title,
      subject: subtitle,
      creator: "Jearon Wong",
      description: `${subtitle}. Internal candidate artifact; not public, not final, not sealed.`,
      keywords: "Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, AARM, MRO, Agentic Lifecycle Governance",
    };
    let xml = fs.readFileSync(corePath, "utf8");
    const setTag = (tagName, value) => {
      const escaped = escapeXml(value);
      const pattern = new RegExp(`<${tagName}[^>]*>[\\s\\S]*?<\\/${tagName}>`);
      if (pattern.test(xml)) {
        xml = xml.replace(pattern, `<${tagName}>${escaped}</${tagName}>`);
        return;
      }
      xml = xml.replace("</cp:coreProperties>", `<${tagName}>${escaped}</${tagName}></cp:coreProperties>`);
    };
    setTag("dc:title", metadata.title);
    setTag("dc:subject", metadata.subject);
    setTag("dc:creator", metadata.creator);
    setTag("dc:description", metadata.description);
    setTag("cp:keywords", metadata.keywords);
    fs.writeFileSync(corePath, xml);
    const originalCwd = process.cwd();
    process.chdir(tempDir);
    fs.rmSync(filePath, { force: true });
    execFileSync("/usr/bin/zip", ["-qr", filePath, "."], { stdio: "pipe" });
    process.chdir(originalCwd);
    return { applied: true };
  } catch (error) {
    return { applied: false, reason: String(error.stderr || error.message || error) };
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function buildHtml(markdown) {
  const body = wrapTables(convertMarkdown(markdown));
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <meta name="aiaawp-artifact-status" content="internal-candidate-only">
  <meta name="author" content="Jearon Wong">
  <meta name="description" content="${escapeHtml(subtitle)}">
  <title>${title} | ${documentId}</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #172033;
      --muted: #5b6678;
      --line: #d8dde8;
      --soft: #f4f7fb;
      --accent: #0f6e7c;
      --accent-2: #7a4e13;
      --warn: #fff7e6;
      --max: 1120px;
    }
    * { box-sizing: border-box; }
    html { font-size: 16px; }
    body {
      margin: 0;
      color: var(--ink);
      background: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      line-height: 1.62;
    }
    .candidate-banner {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #102332;
      color: #fff;
      border-bottom: 4px solid var(--accent);
      padding: 0.75rem max(1rem, calc((100vw - var(--max)) / 2));
      font-size: 0.9rem;
      letter-spacing: 0;
    }
    .candidate-banner strong { color: #b7f2ff; }
    main {
      max-width: var(--max);
      margin: 0 auto;
      padding: 3rem 1.25rem 5rem;
    }
    .title-page {
      border-bottom: 1px solid var(--line);
      padding-bottom: 2rem;
      margin-bottom: 2rem;
    }
    .kicker {
      color: var(--accent);
      font-size: 0.86rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2;
      letter-spacing: 0;
      color: #101928;
      scroll-margin-top: 5rem;
    }
    h1 {
      font-size: clamp(2.1rem, 4vw, 4rem);
      max-width: 15ch;
      margin: 0.8rem 0 0.9rem;
    }
    .subtitle {
      font-size: clamp(1.15rem, 2vw, 1.55rem);
      color: var(--muted);
      max-width: 58rem;
      margin: 0;
    }
    h2 {
      font-size: clamp(1.65rem, 2.6vw, 2.45rem);
      margin: 3rem 0 1rem;
      border-top: 1px solid var(--line);
      padding-top: 1.5rem;
    }
    h3 { font-size: 1.35rem; margin: 2rem 0 0.7rem; }
    h4 { font-size: 1.08rem; margin: 1.5rem 0 0.5rem; color: #25344a; }
    p, li { font-size: 1rem; }
    p { margin: 0.8rem 0; }
    a { color: var(--accent); }
    code {
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 4px;
      padding: 0.08rem 0.25rem;
      font-size: 0.92em;
      overflow-wrap: anywhere;
    }
    pre {
      background: #101928;
      color: #f8fbff;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      white-space: pre-wrap;
    }
    hr {
      border: 0;
      border-top: 1px solid var(--line);
      margin: 2.25rem 0;
    }
    blockquote {
      margin: 1.2rem 0;
      padding: 0.2rem 1rem;
      border-left: 4px solid var(--accent);
      color: #2d3a4f;
      background: var(--soft);
    }
    .status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 0.75rem;
      margin-top: 1.5rem;
    }
    .status-grid div {
      border: 1px solid var(--line);
      background: var(--soft);
      border-radius: 6px;
      padding: 0.8rem;
    }
    .status-grid span {
      display: block;
      color: var(--muted);
      font-size: 0.78rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.05em;
      margin-bottom: 0.2rem;
    }
    .boundary-box {
      background: var(--warn);
      border: 1px solid #f0d69b;
      border-radius: 6px;
      padding: 1rem;
      margin: 1.5rem 0;
    }
    .table-scroll {
      overflow-x: auto;
      max-width: 100%;
      margin: 1rem 0 1.5rem;
      border: 1px solid var(--line);
      border-radius: 6px;
      background: #fff;
    }
    table {
      width: 100%;
      min-width: 720px;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    th, td {
      border-bottom: 1px solid var(--line);
      border-right: 1px solid var(--line);
      padding: 0.62rem 0.7rem;
      vertical-align: top;
      overflow-wrap: anywhere;
    }
    th {
      text-align: left;
      background: #eaf3f6;
      color: #102332;
      font-weight: 700;
    }
    tr:last-child td { border-bottom: 0; }
    th:last-child, td:last-child { border-right: 0; }
    @media (max-width: 720px) {
      html { font-size: 15px; }
      main { padding: 2rem 1rem 4rem; }
      .candidate-banner { position: static; }
      table { min-width: 620px; }
    }
    @media print {
      .candidate-banner { position: static; }
      body { font-size: 11pt; }
      main { max-width: none; padding: 0.35in; }
      h2 { break-before: page; }
      .title-page { min-height: 7in; }
      .table-scroll { overflow: visible; border: 1px solid var(--line); }
      table { min-width: 0; font-size: 8.5pt; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <div class="candidate-banner"><strong>Internal candidate artifact.</strong> Not public, not final, not sealed, not live, not certification, not audit standard, not assurance opinion.</div>
  <main>
    <section class="title-page">
      <div class="kicker">Internal Candidate Artifact</div>
      <h1>${title}</h1>
      <p class="subtitle">${subtitle}</p>
      <div class="status-grid">
        <div><span>Document ID:</span> ${documentId}</div>
        <div><span>Version:</span> ${version}</div>
        <div><span>Author:</span> Jearon Wong</div>
        <div><span>Generated:</span> ${generatedAt}</div>
      </div>
      <div class="boundary-box">
        This internal artifact is generated under the internal R4 candidate package for content and naming review only. It is not a public release, final seal, live deployment, audit standard, certification, legal compliance proof, assurance opinion, regulator approval, procurement recommendation, vendor ranking, Big Four endorsement, audit body endorsement, MPLP requirement, or external outcome claim.
      </div>
    </section>
    ${body}
  </main>
</body>
</html>
`;
}

function normalizeCandidateBody(markdown) {
  const marker = "## Relationship to the Agentic Lifecycle Governance Industry Series";
  const markerIndex = markdown.indexOf(marker);
  if (markerIndex === -1) return markdown;
  return markdown.slice(markerIndex);
}

function buildDocxConversionHtml(html) {
  const docxStyle = `
  <style id="docx-landscape-override">
    @page { size: A4 landscape; margin: 0.38in; }
    main { max-width: none !important; padding: 0.2in !important; }
    .title-page { min-height: 0 !important; }
    table { width: 100% !important; min-width: 0 !important; table-layout: fixed !important; font-size: 7.2pt !important; }
    th, td {
      padding: 0.18rem 0.22rem !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      line-height: 1.18 !important;
    }
    h1 { font-size: 34pt !important; max-width: none !important; }
    h2 { font-size: 20pt !important; }
    h3 { font-size: 14pt !important; }
    p, li { font-size: 10pt !important; line-height: 1.35 !important; }
  </style>
`;
  return html.replace("</head>", `${docxStyle}</head>`);
}

function runSofficeConversions() {
  const soffice = process.env.SOFFICE || "/opt/homebrew/bin/soffice";
  const result = { pdf: { generated: false, error: null }, docx: { generated: false, error: null } };
  const profileDir = path.join(outDir, "lo-profile");
  fs.mkdirSync(profileDir, { recursive: true });
  const common = [
    `-env:UserInstallation=file://${profileDir}`,
    "--headless",
    "--convert-to",
  ];

  try {
    execFileSync(soffice, [...common, "pdf", "--outdir", outDir, htmlPath], { stdio: "pipe" });
    const produced = htmlPath.replace(/\.html$/i, ".pdf");
    if (fs.existsSync(produced)) {
      if (produced !== pdfPath) fs.renameSync(produced, pdfPath);
      result.pdf.generated = true;
    } else {
      result.pdf.error = "LibreOffice conversion completed but expected PDF was not found.";
    }
  } catch (error) {
    result.pdf.error = String(error.stderr || error.message || error);
  }

  try {
    execFileSync(soffice, [...common, "docx", "--outdir", outDir, docxHtmlPath], { stdio: "pipe" });
    const produced = docxHtmlPath.replace(/\.html$/i, ".docx");
    if (fs.existsSync(produced)) {
      if (produced !== docxPath) fs.renameSync(produced, docxPath);
      result.docx.generated = true;
    } else {
      result.docx.error = "LibreOffice conversion completed but expected DOCX was not found.";
    }
  } catch (error) {
    result.docx.error = String(error.stderr || error.message || error);
  }

  if (!result.docx.generated) {
    const odtPath = docxHtmlPath.replace(/\.html$/i, ".odt");
    const odtProfileDir = path.join(outDir, "lo-profile-odt");
    const docxProfileDir = path.join(outDir, "lo-profile-docx");
    try {
      fs.rmSync(odtPath, { force: true });
      fs.mkdirSync(odtProfileDir, { recursive: true });
      execFileSync(
        soffice,
        [`-env:UserInstallation=file://${odtProfileDir}`, "--headless", "--convert-to", "odt", "--outdir", outDir, docxHtmlPath],
        { stdio: "pipe" },
      );
      if (!fs.existsSync(odtPath)) {
        throw new Error("LibreOffice generated no intermediate ODT.");
      }
      fs.mkdirSync(docxProfileDir, { recursive: true });
      execFileSync(
        soffice,
        [`-env:UserInstallation=file://${docxProfileDir}`, "--headless", "--convert-to", "docx", "--outdir", outDir, odtPath],
        { stdio: "pipe" },
      );
      const produced = odtPath.replace(/\.odt$/i, ".docx");
      if (fs.existsSync(produced)) {
        if (produced !== docxPath) fs.renameSync(produced, docxPath);
        result.docx.generated = true;
        result.docx.fallback = "libreoffice-odt-bridge";
        result.docx.error = null;
      } else {
        throw new Error("LibreOffice ODT bridge completed but expected DOCX was not found.");
      }
    } catch (error) {
      result.docx.odtBridgeError = String(error.stderr || error.message || error);
    } finally {
      fs.rmSync(odtPath, { force: true });
      fs.rmSync(odtProfileDir, { recursive: true, force: true });
      fs.rmSync(docxProfileDir, { recursive: true, force: true });
    }
  }

  if (!result.docx.generated) {
    try {
      execFileSync("/usr/bin/textutil", ["-convert", "docx", "-output", docxPath, htmlPath], { stdio: "pipe" });
      if (fs.existsSync(docxPath)) {
        result.docx.generated = true;
        result.docx.fallback = "textutil";
        result.docx.error = null;
      }
    } catch (error) {
      result.docx.fallback = "textutil-failed";
      result.docx.error = `${result.docx.error || ""} textutil fallback: ${String(error.stderr || error.message || error)}`.trim();
    }
  }

  fs.rmSync(profileDir, { recursive: true, force: true });
  return result;
}

function listPackageFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("lo-profile")) continue;
      files.push(...listPackageFiles(full));
    } else if (entry.name !== "checksums.sha256") {
      files.push(full);
    }
  }
  return files.sort();
}

function updateManifest(conversionResult) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const artifactPaths = [htmlPath, pdfPath, docxPath].filter((filePath) => fs.existsSync(filePath));
  const artifactHashes = Object.fromEntries(
    artifactPaths.map((filePath) => [toPosix(path.relative(packageDir, filePath)), sha256(filePath)]),
  );
  manifest.artifact_generation_status =
    conversionResult.pdf.generated && conversionResult.docx.generated
      ? "html-pdf-docx-generated-internal-candidate-only"
      : "partial-internal-candidate-artifacts-generated";
  manifest.generated_artifact_paths = artifactPaths.map((filePath) => toPosix(path.relative(packageDir, filePath)));
  manifest.artifact_paths = manifest.generated_artifact_paths;
  manifest.generated_artifact_hashes = artifactHashes;
  manifest.files_included = [
    "README.md",
    "AIAAWP-2026-v0.1-R4-CANDIDATE.md",
    "manifest.json",
    "checksums.sha256",
    "metadata/wp2-r4-metadata-plan.md",
    "metadata/wp2-r4-jsonld-plan.json",
    "sources/wp2-r4-source-register.md",
    "sources/wp2-r4-citation-map.md",
    "qa/wp2-r4-integrity-notes.md",
    "generation/wp2-r4-generation-plan.md",
  ];
  manifest.source_baseline = [
    "R3 QA-reviewed internal draft",
    "R0/R1/R2/R3 internal reports",
    "GAIC v0.3.2-FRC-R3 source truth",
  ];
  manifest.generation_script_path = "generation/generate-wp2-r4-candidate-html.mjs";
  manifest.generation_timestamp = generatedAt;
  manifest.document_id = documentId;
  manifest.public_facing_document_id = documentId;
  manifest.public_facing_title = title;
  manifest.public_facing_subtitle = subtitle;
  manifest.artifact_status = "internal_candidate_only";
  manifest.not_public = true;
  manifest.not_final = true;
  manifest.not_sealed = true;
  manifest.not_live = true;
  manifest.no_public_route = true;
  manifest.conversion_results = conversionResult;
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

function updateChecksums() {
  const lines = [
    "# SHA256 checksums for AIAAWP R4 candidate package files",
    "# checksums.sha256 excludes itself and transient LibreOffice profile files.",
  ];
  for (const filePath of listPackageFiles(packageDir)) {
    lines.push(`${sha256(filePath)}  ${toPosix(path.relative(packageDir, filePath))}`);
  }
  fs.writeFileSync(checksumPath, `${lines.join("\n")}\n`);
}

fs.mkdirSync(outDir, { recursive: true });
for (const entry of fs.readdirSync(outDir, { withFileTypes: true })) {
  if (entry.isFile() && /^WP2-Agentic-AI-Auditability-Assurance-White-Paper-2026-v0\.1-R4-Candidate/.test(entry.name)) {
    fs.rmSync(path.join(outDir, entry.name), { force: true });
  }
}
const markdown = [
  normalizeCandidateBody(fs.readFileSync(sourcePath, "utf8")),
  "\n\n---\n\n# Package Source Register\n\n",
  fs.readFileSync(sourceRegisterPath, "utf8"),
  "\n\n---\n\n# Package Citation Map\n\n",
  fs.readFileSync(citationMapPath, "utf8"),
].join("");
const html = buildHtml(markdown);
fs.writeFileSync(htmlPath, html);
fs.writeFileSync(docxHtmlPath, buildDocxConversionHtml(html));
const conversionResult = runSofficeConversions();
fs.rmSync(docxHtmlPath, { force: true });
if (fs.existsSync(pdfPath)) {
  conversionResult.pdf.metadata = await applyPdfMetadata(pdfPath);
}
if (fs.existsSync(docxPath)) {
  conversionResult.docx.metadata = patchDocxCoreMetadata(docxPath);
}
updateManifest(conversionResult);
updateChecksums();

console.log(JSON.stringify({
  html: { generated: fs.existsSync(htmlPath), path: toPosix(path.relative(packageDir, htmlPath)), sha256: sha256(htmlPath) },
  pdf: fs.existsSync(pdfPath) ? { generated: true, path: toPosix(path.relative(packageDir, pdfPath)), sha256: sha256(pdfPath) } : conversionResult.pdf,
  docx: fs.existsSync(docxPath) ? { generated: true, path: toPosix(path.relative(packageDir, docxPath)), sha256: sha256(docxPath) } : conversionResult.docx,
}, null, 2));
