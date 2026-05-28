#!/usr/bin/env node
/* global URL, console */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";

const repoRoot = path.resolve(new URL("../../..", import.meta.url).pathname);
const publicDir = path.join(
  repoRoot,
  "public/research/agentic-ai-insurability-risk-transfer-white-paper-2026",
);
const wp2HtmlPath = path.join(
  repoRoot,
  "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
);
const r8RendererPath = path.join(repoRoot, "gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py");
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
  "Public research candidate. Repository governance seal complete with public terminology amendment; public announcement held. Not a final public release, not release-ready, not a public release announcement, not legal advice, not insurance advice, not a coverage opinion, not underwriting guidance, not certification, not proof of insurability, not insurer endorsement, not regulator-approved, not a score, and not a standard. No public DOCX is authorized.";

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
  const articleMatch = source.match(/<article(?:\s+[^>]*)?>([\s\S]*?)<\/article>/);
  const sectionizedMatch = source.match(/<nav class="generated-toc"[\s\S]*?<\/nav>\s*([\s\S]*?)\s*<footer class="html-footer">/);
  const body = articleMatch?.[1] ?? sectionizedMatch?.[1];
  if (!body) {
    throw new Error("Expected WP3 public HTML to contain either the legacy article body or R3AC sectionized body.");
  }
  return body
    .replace(/<\/?section(?:\s+[^>]*)?>/g, "")
    .replace(/<h1 id="agentic-ai-insurability--risk-transfer-white-paper-2026">[\s\S]*?<\/h1>\s*/u, "")
    .replace(/<h2 id="a-lifecycle-evidence-guide-for-underwriting-claims-and-enterprise-risk-transfer">[\s\S]*?<\/h2>\s*/u, "");
}

function normalizeBody(body) {
  return repairPublicTerminology(body)
    .replaceAll('class="table-scroll"', 'class="table-block table-scroll"')
    .replaceAll("<blockquote>", '<blockquote class="professional-notice">')
    .replace(/<h4(?![^>]*\bclass=)\s+/g, '<h4 class="table-caption" ')
    .replace(/<div class="boundary-note">([\s\S]*?)<\/div>\s*$/u, '<section class="important-notice closing-boundary" aria-label="Publication boundary">$1</section>');
}

function repairPublicTerminology(body) {
  const phraseReplacements = [
    ["relationship-to-wp1-and-wp2", "relationship-to-the-compliance-and-auditability-white-papers"],
    ["chapter-9-from-wp1-mros-to-insurability-objects", "chapter-9-from-lifecycle-governance-objects-to-insurability-objects"],
    ["chapter-10-from-wp2-audit-evidence-chain-to-claim-reconstruction", "chapter-10-from-audit-evidence-chain-to-claim-reconstruction"],
    ["Relationship to WP1 and WP2", "Relationship to the Compliance and Auditability White Papers"],
    ["Chapter 9: From WP1 MROs to Insurability Objects", "Chapter 9: From Lifecycle Governance Objects to Insurability Objects"],
    ["Chapter 10: From WP2 Audit Evidence Chain to Claim Reconstruction", "Chapter 10: From Audit Evidence Chain to Claim Reconstruction"],
    ["WP1/WP2 mappings", "compliance and auditability white paper mappings"],
    ["WP1/WP2 vocabulary", "compliance and auditability vocabulary"],
    ["WP1/WP2 foundations", "Compliance and auditability foundations"],
    ["WP1/WP2 are analytical foundations", "The compliance and auditability white papers are analytical foundations"],
    ["WP1 and WP2 are internal foundations", "The compliance and auditability white papers are analytical foundations"],
    ["WP1 and WP2 provide analytical foundations", "The compliance and auditability white papers provide analytical foundations"],
    ["WP1 and WP2 will later help", "the compliance and auditability white papers will later help"],
    ["WP1 and WP2 into WP3", "compliance and auditability concepts into risk-transfer analysis"],
    ["WP1 and WP2 into insurability reasoning", "compliance and auditability concepts into insurability reasoning"],
    ["WP1 and WP2 sources", "sources from the compliance and auditability white papers"],
    ["WP1 and WP2 provide analytical vocabulary", "the compliance and auditability white papers provide analytical vocabulary"],
    ["WP1, the Global AI Compliance White Paper", "The Global AI Compliance White Paper 2026"],
    ["WP2, the Agentic AI Auditability &#x26; Assurance White Paper", "The Agentic AI Auditability &#x26; Assurance White Paper 2026"],
    ["WP2, the Agentic AI Auditability &amp; Assurance White Paper", "The Agentic AI Auditability &amp; Assurance White Paper 2026"],
    ["What it contributes to WP3", "What it contributes to this paper"],
    ["WP3 proposed risk object", "Proposed risk object in this paper"],
    ["For WP3, the implication", "For this paper, the implication"],
    ["where WP3 lives", "where this paper focuses"],
    ["the hinge of WP3", "the hinge of this paper"],
    ["any WP3 vocabulary", "this paper's vocabulary"],
    ["In WP3, those ideas", "In this paper, those ideas"],
    ["WP3 uses that discipline", "This paper uses that discipline"],
    ["WP3 uses both", "This paper uses both"],
    ["WP3 because", "this paper because"],
    ["the WP3 object", "the risk object proposed here"],
    ["The WP2-to-WP3 translation has several layers.", "The translation from auditability evidence to risk-transfer analysis has several layers."],
    ["R1 source research", "source research"],
    ["no source in R1", "no cited source"],
    ["R1 silent-exposure research", "source research on silent exposure"],
    ["R1 already records", "the source research already records"],
    ["R3B's Insurable Agentic Risk Object and R3C's insurance line ambiguity", "the earlier insurable agentic risk object and insurance line ambiguity analysis"],
    ["R3D substitution conformance logic", "the substitution conformance logic"],
    ["R3J revised body", "revised body"],
    ["the R3J revised body", "the revised body"],
    ["R3M appendix draft", "appendix draft"],
    ["implemented in R3M", "implemented in this appendix draft"],
    ["WP4 implementation", "future implementation"],
    ["WP1 privacy MROs and WP2 selective-disclosure concepts", "privacy lifecycle concepts from the compliance white paper and selective-disclosure concepts from the auditability and assurance white paper"],
    ["WP1's responsibility object and authority boundary concepts", "The compliance white paper's responsibility object and authority boundary concepts"],
    ["WP2's audit evidence chain", "the auditability and assurance white paper's audit evidence chain"],
    ["WP2's auditability concepts", "The auditability and assurance white paper's concepts"],
    ["WP2's audit evidence vocabulary", "The auditability and assurance white paper's evidence vocabulary"],
    ["WP1 supplies", "The compliance white paper supplies"],
    ["WP2 supplies", "The auditability and assurance white paper supplies"],
    ["WP1 contributes", "The compliance white paper contributes"],
    ["WP2 contributes", "The auditability and assurance white paper contributes"],
    ["WP1 gives", "The compliance white paper gives"],
    ["WP2 gives", "The auditability and assurance white paper gives"],
    ["WP1 helps", "The compliance white paper helps"],
    ["WP2 helps", "The auditability and assurance white paper helps"],
    ["WP1 provides", "The compliance white paper provides"],
    ["WP2 provides", "The auditability and assurance white paper provides"],
    ["WP1's", "the compliance white paper's"],
    ["WP2's", "the auditability and assurance white paper's"],
  ];
  let repaired = body;
  for (const [from, to] of phraseReplacements) {
    repaired = repaired.replaceAll(from, to);
  }
  return repaired
    .replace(/\bWP1\b/g, "the compliance white paper")
    .replace(/\bWP2\b/g, "the auditability and assurance white paper")
    .replace(/\bWP3\b/g, "this paper");
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
  return `<nav class="generated-toc" aria-label="Publication table of contents">
  <h2>Publication Contents</h2>
  <p class="toc-note">HTML anchors are active in the public research candidate. PDF rendering uses the shared whitepaper A4 print profile used by the accepted compliance and auditability white paper artifacts.</p>
  <div class="toc-grid">
    ${groups
      .map(
        ([label, items]) => `<div><h3>${label}</h3><ol>${items
          .map((item) => `<li><a href="#${escapeHtml(item.id)}">${escapeHtml(item.text)}</a></li>`)
          .join("")}</ol></div>`,
      )
      .join("")}
  </div>
</nav>`;
}

function canonicalArtifactStyle() {
  const wp2 = fs.readFileSync(wp2HtmlPath, "utf8");
  const match = wp2.match(/<style>([\s\S]*?)<\/style>/);
  if (!match) {
    throw new Error("Expected WP2 canonical HTML artifact to contain an inline style block.");
  }
  return match[1]
    .replaceAll("deployment/live verification remains pending", "post-restoration QA remains pending")
    .replaceAll("deployment verification remains pending", "post-restoration QA remains pending")
    .replaceAll("No final/sealed/live claim", "No final/sealed/release-ready claim");
}

function sectionizeBody(body) {
  const normalized = `<section class="front-section">${body}`
    .replace(/<h3 id="chapter-1-/u, '</section><section class="chapter"><h3 id="chapter-1-')
    .replace(/<h3 id="chapter-(?!1-)/g, '</section><section class="chapter"><h3 id="chapter-')
    .replace(/<h2 id="appendix-a---/u, '</section><section class="appendix"><h2 id="appendix-a---')
    .replace(/<h2 id="appendix-(?!a---)/g, '</section><section class="appendix"><h2 id="appendix-')
    .replace(/<h2 id="deferred-appendix-note">/u, '</section><section class="appendix"><h2 id="deferred-appendix-note">');
  return normalized.endsWith("</section>") ? normalized : `${normalized}</section>`;
}

function buildHtml(body) {
  const toc = buildToc(body);
  const artifactStyle = canonicalArtifactStyle();
  const structuredBody = sectionizeBody(body);
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
${artifactStyle}
  </style>
</head>
<body>
  <main class="publication">
    <section class="cover-page professional-shell">
      <div class="cover-frame">
        <div class="cover-kicker">Jearon Wong / Agentic Lifecycle Governance Industry Series</div>
        <h1>${escapeHtml(title)}</h1>
        <p class="cover-subtitle">${escapeHtml(subtitle)}</p>
        <p class="cover-role">Jearon Wong - Protocol Architect for the Agent Era</p>
        <div class="thesis-strip">
          <span>Legal Subject</span><span>Risk Object</span><span>Agent Work</span><span>Evidence</span><span>Claim Review</span>
        </div>
        <div class="cover-meta">
          <div><strong>Document ID</strong><span>${documentId}</span></div>
          <div><strong>Version</strong><span>${version}</span></div>
          <div><strong>Date</strong><span>May 2026</span></div>
          <div><strong>Status</strong><span>Public research candidate; repository governance seal complete with public terminology amendment; public announcement held</span></div>
          <div><strong>Series</strong><span>Agentic Lifecycle Governance Industry Series</span></div>
          <div><strong>Visual Source of Truth</strong><span>HTML/PDF primary; manifest/checksum integrity</span></div>
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
    ${structuredBody}
    <footer class="html-footer">${documentId} - public research candidate. Generated ${generatedAt}. Repository governance seal complete with public terminology amendment; public announcement held. No public DOCX.</footer>
  </main>
</body>
</html>
`;
}

function pdfPageCount(filePath) {
  const output = execFileSync("pdfinfo", [filePath], { encoding: "utf8" });
  const match = output.match(/^Pages:\s+(\d+)/m);
  if (!match) throw new Error("Unable to read PDF page count.");
  return Number(match[1]);
}

function htmlToPdf() {
  execFileSync("/usr/bin/python3", [r8RendererPath, "aiirwp"], { stdio: "inherit" });
  return pdfPageCount(pdfPath);
}

function updateManifest(pageCount) {
  const htmlHash = sha256(htmlPath);
  const pdfHash = sha256(pdfPath);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  manifest.wave_id = "AIIRWP-2026-v1.0-PUBLIC-TERMINOLOGY-AMENDMENT";
  manifest.generated_at = generatedAt;
  manifest.source_basis =
    "Current AIIRWP v1.0 public research-candidate artifact set with public terminology amendment applied to remove internal whitepaper shorthand from public-facing content.";
  manifest.artifact_style_standard =
    "Unified whitepaper publication standard: professional-shell HTML artifact grammar, shared whitepaper A4 PDF print profile, manifest/checksum integrity layer, no public DOCX.";
  manifest.canonical_rendering_baseline =
    "Accepted auditability and compliance white paper artifact presentation, using the shared whitepaper A4 PDF print profile lineage.";
  manifest.public_status = "public-research-candidate";
  manifest.seal_status = "FINAL_SEAL_COMPLETE_WITH_PUBLIC_TERMINOLOGY_AMENDMENT";
  manifest.public_announcement_status = "HELD";
  manifest.route_status = "public-route-active";
  manifest.no_docx_status = "public DOCX unauthorized";
  manifest.boundary_status = [
    "not legal advice",
    "not insurance advice",
    "not coverage opinion",
    "not underwriting guidance",
    "not certification",
    "not final public release",
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
    "Public announcement remains held pending explicit owner authorization.";
  manifest.publication_system_alignment =
    "Public terminology amendment complete: AIIRWP HTML/PDF keep the accepted whitepaper artifact style while removing internal whitepaper shorthand from public-facing content.";
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
htmlToPdf();
const finalPageCount = pdfPageCount(pdfPath);
const result = updateManifest(finalPageCount);
console.log(JSON.stringify(result, null, 2));
