#!/usr/bin/env node
/* global console, WebSocket, fetch, setTimeout, clearTimeout */
import { Buffer } from "node:buffer";
import { execFileSync, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, relative, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const REPO = resolve(dirname(__filename), "../../..");
const SOURCE_ROOT = resolve(REPO, "gaic_v032_work/source_r3");
const ACCEPTED_HTML = resolve(
  SOURCE_ROOT,
  "wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.html",
);
const ACCEPTED_FIGURE = resolve(
  SOURCE_ROOT,
  "wp3_r15c_candidate_artifacts/assets/responsibility-bridge.svg",
);
const PUBLIC_DIR = resolve(
  REPO,
  "public/research/agentic-ai-insurability-risk-transfer-white-paper-2026",
);
const PUBLIC_ASSET_DIR = resolve(PUBLIC_DIR, "assets");
const PUBLIC_HTML = resolve(PUBLIC_DIR, "AIIRWP-2026-v0.2.html");
const PUBLIC_PDF = resolve(PUBLIC_DIR, "AIIRWP-2026-v0.2.pdf");
const PUBLIC_FIGURE = resolve(PUBLIC_ASSET_DIR, "responsibility-bridge.svg");
const PUBLIC_MANIFEST = resolve(PUBLIC_DIR, "manifest.json");
const PUBLIC_CHECKSUMS = resolve(PUBLIC_DIR, "checksums.sha256");

const TITLE = "Agentic AI Insurability & Risk Transfer White Paper 2026";
const SUBTITLE = "A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer";
const PUBLIC_ID = "AIIRWP-2026-v0.2-PUBLIC-CANDIDATE";
const ROUTE_PATH = "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/";
const ARTIFACT_BASE = "/research/agentic-ai-insurability-risk-transfer-white-paper-2026";
const SITE_URL = "https://www.jearonwong.com";
const HTML_PATH = `${ARTIFACT_BASE}/AIIRWP-2026-v0.2.html`;
const PDF_PATH = `${ARTIFACT_BASE}/AIIRWP-2026-v0.2.pdf`;
const FIGURE_PATH = `${ARTIFACT_BASE}/assets/responsibility-bridge.svg`;
const MANIFEST_PATH = `${ARTIFACT_BASE}/manifest.json`;
const CHECKSUM_PATH = `${ARTIFACT_BASE}/checksums.sha256`;

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: REPO,
    encoding: "utf8",
    stdio: options.stdio ?? ["ignore", "pipe", "pipe"],
    ...options,
  });
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

async function waitForDevToolsPort(profileDir, chromeProcess) {
  const portFile = resolve(profileDir, "DevToolsActivePort");
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (chromeProcess.exitCode !== null) {
      throw new Error(`Chrome exited before DevTools became available with code ${chromeProcess.exitCode}`);
    }
    if (existsSync(portFile)) {
      const [port] = readFileSync(portFile, "utf8").trim().split(/\r?\n/);
      if (port) return port;
    }
    await delay(100);
  }
  throw new Error("Timed out waiting for Chrome DevToolsActivePort");
}

function connectCdp(webSocketDebuggerUrl) {
  return new Promise((resolvePromise, rejectPromise) => {
    const socket = new WebSocket(webSocketDebuggerUrl);
    let nextId = 1;
    const pending = new Map();
    const eventWaiters = new Map();

    socket.addEventListener("open", () => {
      resolvePromise({
        send(method, params = {}) {
          const id = nextId;
          nextId += 1;
          socket.send(JSON.stringify({ id, method, params }));
          return new Promise((resolveSend, rejectSend) => {
            pending.set(id, { resolve: resolveSend, reject: rejectSend });
          });
        },
        waitForEvent(method, timeout = 15000) {
          return new Promise((resolveEvent, rejectEvent) => {
            const timer = setTimeout(() => {
              const waiters = eventWaiters.get(method) || [];
              eventWaiters.set(method, waiters.filter((waiter) => waiter.reject !== rejectEvent));
              rejectEvent(new Error(`Timed out waiting for CDP event ${method}`));
            }, timeout);
            const waiters = eventWaiters.get(method) || [];
            waiters.push({
              resolve: (value) => {
                clearTimeout(timer);
                resolveEvent(value);
              },
              reject: rejectEvent,
            });
            eventWaiters.set(method, waiters);
          });
        },
        close() {
          socket.close();
        },
      });
    });

    socket.addEventListener("error", (event) => {
      rejectPromise(new Error(`CDP WebSocket error: ${event.message || "unknown error"}`));
    });

    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && pending.has(message.id)) {
        const { resolve: resolveSend, reject: rejectSend } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) {
          rejectSend(new Error(`${message.error.message}: ${message.error.data || ""}`.trim()));
        } else {
          resolveSend(message.result || {});
        }
        return;
      }
      if (message.method && eventWaiters.has(message.method)) {
        const waiters = eventWaiters.get(message.method);
        const waiter = waiters.shift();
        if (!waiters.length) eventWaiters.delete(message.method);
        if (waiter) waiter.resolve(message.params || {});
      }
    });
  });
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function bytes(path) {
  return readFileSync(path).length;
}

function rel(path) {
  return relative(REPO, path);
}

function write(path, content, encoding = "utf8") {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, encoding);
}

function resetPublicDir() {
  mkdirSync(PUBLIC_DIR, { recursive: true });
  for (const stale of [
    "AIIRWP-2026-v0.1.html",
    "AIIRWP-2026-v0.1.pdf",
    "AIIRWP-2026-v0.2.html",
    "AIIRWP-2026-v0.2.pdf",
    "manifest.json",
    "checksums.sha256",
  ]) {
    rmSync(resolve(PUBLIC_DIR, stale), { force: true });
  }
  rmSync(PUBLIC_ASSET_DIR, { recursive: true, force: true });
  mkdirSync(PUBLIC_ASSET_DIR, { recursive: true });
}

function transformHtml() {
  let html = readFileSync(ACCEPTED_HTML, "utf8");
  html = html
    .replace('<meta name="robots" content="noindex, nofollow">', [
      '<meta name="robots" content="index, follow">',
      `  <link rel="canonical" href="${SITE_URL}${HTML_PATH}">`,
      `  <meta name="description" content="${TITLE}: ${SUBTITLE}. Public research candidate. Not final, not sealed, not legal advice, not insurance advice, not a coverage opinion, not an underwriting standard, and not claims approval guidance.">`,
      `  <meta name="citation_title" content="${TITLE}: ${SUBTITLE}">`,
      '  <meta name="citation_author" content="Wong, Jearon">',
      '  <meta name="citation_publication_date" content="2026/05">',
      `  <meta name="citation_technical_report_number" content="${PUBLIC_ID}">`,
      `  <meta name="citation_pdf_url" content="${SITE_URL}${PDF_PATH}">`,
      `  <meta name="citation_fulltext_html_url" content="${SITE_URL}${HTML_PATH}">`,
      '  <meta name="citation_language" content="en">',
      '  <meta name="citation_keywords" content="Agentic AI Insurability; Risk Transfer; Claim Evidence Chain; Agentic Insurability Objects; AIRM; Lifecycle Evidence">',
    ].join("\n  "))
    .replace(
      `<title>${TITLE} - Internal Repaired Candidate</title>`,
      `<title>${TITLE} | AIIRWP-2026-v0.2 Public Research Candidate</title>`,
    )
    .replaceAll("../assets/responsibility-bridge.svg", "assets/responsibility-bridge.svg")
    .replaceAll("AIIRWP-2026-v0.4-R15C-CANDIDATE-SOURCE", PUBLIC_ID)
    .replaceAll("AIIRWP-2026-v0.4-R15C-CANDIDATE", PUBLIC_ID)
    .replaceAll("Internal Repaired Candidate", "Public Research Candidate")
    .replaceAll("Internal candidate only. Not public release. Not final. Not sealed.", "Public research candidate. Not final. Not sealed.")
    .replaceAll("Internal candidate artifact source only. Not public release. Not final. Not sealed.", "Public research candidate. Not final. Not sealed.")
    .replaceAll("Internal candidate - not public release", "Public research candidate - not final")
    .replaceAll("R12 accepted body + R13 acceptance + R14 plan", "Accepted body source + artifact QA acceptance")
    .replaceAll(
      "This repaired internal candidate artifact is generated for R15C artifact repair QA. It is not public staging, production verification, author release execution, legal advice, insurance advice, coverage opinion, underwriting standard, actuarial pricing guidance, claims approval guidance, certification, endorsement, or insurer acceptance.",
      "This public research candidate is staged for deployment and production reverification. It is not final, not sealed, not production verified, not author-release executed, not legal advice, not insurance advice, not a coverage opinion, not an underwriting standard, not actuarial pricing guidance, not claims approval guidance, not certification, not endorsement, and not insurer acceptance.",
    )
    .replaceAll("full internal source register", "full research source register")
    .replaceAll("not public release", "public research candidate")
    .replaceAll("public release", "public staging")
    .replaceAll("R15C artifact repair", "R16 public staging preparation")
    .replaceAll("R15C", "R16")
    .replaceAll("For WP3, the implication", "For AIIRWP, the implication")
    .replaceAll("connects WP3 back", "connects AIIRWP back")
    .replaceAll("WP3 inherits", "AIIRWP inherits")
    .replaceAll("WP3 translation", "AIIRWP translation")
    .replaceAll("WP3 synthesis", "AIIRWP synthesis")
    .replaceAll("WP3 synthesis layer", "AIIRWP synthesis layer")
    .replaceAll("WP1 MRO / ALCS", "GAIC MRO / ALCS")
    .replaceAll("WP1 source truth", "GAIC source truth")
    .replaceAll("WP2 Audit Evidence Chain", "AIAAWP Audit Evidence Chain")
    .replaceAll("WP2 AARM", "AIAAWP AARM")
    .replaceAll("WP2 source truth", "AIAAWP source truth");

  html = html.replace(
    "</head>",
    `  <script type="application/ld+json">${JSON.stringify(createArtifactJsonLd())}</script>\n</head>`,
  );

  const forbidden = [
    "Internal candidate",
    "internal candidate",
    "R15C",
    "R15B",
    "source hygiene",
    "wave history",
    "[SRC:",
    "[SYNTHESIS:",
  ].filter((term) => html.includes(term));
  if (forbidden.length) {
    throw new Error(`Public HTML transform left forbidden internal/source text: ${forbidden.join(", ")}`);
  }
  write(PUBLIC_HTML, html);
  write(PUBLIC_FIGURE, readFileSync(ACCEPTED_FIGURE), undefined);
}

function createArtifactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["TechArticle", "Report"],
    "@id": `${SITE_URL}${HTML_PATH}#whitepaper`,
    headline: TITLE,
    alternativeHeadline: SUBTITLE,
    description: `${TITLE}: ${SUBTITLE}. Public research candidate. Not final, not sealed, and not legal or insurance advice.`,
    url: `${SITE_URL}${HTML_PATH}`,
    identifier: PUBLIC_ID,
    inLanguage: "en",
    author: {
      "@id": `${SITE_URL}#person`,
    },
    publisher: {
      "@id": `${SITE_URL}#person`,
    },
    datePublished: "2026-05-23",
    dateModified: "2026-05-23",
    version: "v0.2 Public Research Candidate",
    genre: "Technical report",
    creativeWorkStatus: "PublicResearchCandidate",
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Agentic Lifecycle Governance Industry Series",
    },
    encoding: [
      {
        "@type": "MediaObject",
        encodingFormat: "text/html",
        contentUrl: `${SITE_URL}${HTML_PATH}`,
      },
      {
        "@type": "MediaObject",
        encodingFormat: "application/pdf",
        contentUrl: `${SITE_URL}${PDF_PATH}`,
      },
    ],
    about: [
      "Agentic AI Insurability",
      "Risk Transfer",
      "Agentic Insurability Objects",
      "Agentic Insurability Readiness Model",
      "Claim Evidence Chain",
      "Lifecycle Evidence",
    ].map((name) => ({ "@type": "Thing", name })),
  };
}

async function generatePdf() {
  const url = pathToFileURL(PUBLIC_HTML).href;
  const profileDir = mkdtempSync(resolve(tmpdir(), "wp3-r16-chrome-"));
  let chromeProcess;
  try {
    chromeProcess = spawn(
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
        "--remote-allow-origins=*",
        "--remote-debugging-port=0",
        `--user-data-dir=${profileDir}`,
        "about:blank",
      ],
      { stdio: ["ignore", "ignore", "pipe"] },
    );
    const port = await waitForDevToolsPort(profileDir, chromeProcess);
    const targetResponse = await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
    const target = targetResponse.ok
      ? await targetResponse.json()
      : (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((item) => item.type === "page");
    if (!target?.webSocketDebuggerUrl) throw new Error("Unable to create a Chrome DevTools page target for PDF generation");
    const cdp = await connectCdp(target.webSocketDebuggerUrl);
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Emulation.setEmulatedMedia", { media: "print" });
    await cdp.send("Page.navigate", { url });
    try {
      await cdp.waitForEvent("Page.loadEventFired", 15000);
    } catch {
      // File URL load events can race the waiter; readiness is polled below.
    }
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const ready = await cdp.send("Runtime.evaluate", {
        expression: "document.readyState",
        returnByValue: true,
      });
      if (ready.result?.value === "complete") break;
      await delay(100);
    }
    await cdp.send("Runtime.evaluate", {
      expression: `Promise.all([
        document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
        ...Array.from(document.images).map((img) => img.complete ? true : new Promise((resolve) => { img.onload = resolve; img.onerror = resolve; }))
      ]).then(() => true)`,
      awaitPromise: true,
      returnByValue: true,
    });
    const result = await cdp.send("Page.printToPDF", {
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      scale: 1,
    });
    writeFileSync(PUBLIC_PDF, Buffer.from(result.data, "base64"));
    cdp.close();
  } finally {
    if (chromeProcess && chromeProcess.exitCode === null) chromeProcess.kill("SIGTERM");
    rmSync(profileDir, { recursive: true, force: true });
  }
  patchPdfMetadata();
}

function patchPdfMetadata() {
  const code = `
import sys
import io
import math
import os
import fitz
from PIL import Image
pdf_path = sys.argv[1]
doc = fitz.open(pdf_path)

def lerp(a, b, t):
    return int(a + (b - a) * max(0, min(1, t)))

def blend(base, top, alpha):
    return tuple(lerp(base[i], top[i], alpha) for i in range(3))

start = (17, 20, 24)
mid = (23, 36, 45)
end = (36, 78, 113)
cyan = (63, 183, 200)

def background_color(x_ratio, y_ratio):
    t = (x_ratio + y_ratio) / 2
    if t < 0.58:
        local = t / 0.58
        base = tuple(lerp(start[i], mid[i], local) for i in range(3))
    else:
        local = (t - 0.58) / 0.42
        base = tuple(lerp(mid[i], end[i], local) for i in range(3))
    distance = math.hypot(x_ratio - 0.78, y_ratio - 0.20)
    glow = 0.26 * max(0, 1 - distance / 0.35)
    return blend(base, cyan, glow)

def render_band(x0, y0, x1, y1, width, height):
    image = Image.new("RGB", (width, height))
    pixels = image.load()
    for y in range(height):
        y_ratio = y0 if height == 1 else y0 + (y / (height - 1)) * (y1 - y0)
        for x in range(width):
            x_ratio = x0 if width == 1 else x0 + (x / (width - 1)) * (x1 - x0)
            pixels[x, y] = background_color(x_ratio, y_ratio)
    buffer = io.BytesIO()
    image.save(buffer, format="PNG")
    return buffer.getvalue()

page = doc[0]
band_start = 0.83
cover_scale = 1 / band_start
right_rect = fitz.Rect(page.rect.width * band_start, 0, page.rect.width, page.rect.height)
bottom_rect = fitz.Rect(0, page.rect.height * band_start, page.rect.width, page.rect.height)
page.insert_image(right_rect, stream=render_band(1, 0, cover_scale, cover_scale, 260, 1754), overlay=True, keep_proportion=False)
page.insert_image(bottom_rect, stream=render_band(0, 1, cover_scale, cover_scale, 1240, 320), overlay=True, keep_proportion=False)
doc.set_metadata({
    "title": "Agentic AI Insurability & Risk Transfer White Paper 2026 - Public Research Candidate",
    "author": "Jearon Wong",
    "subject": "A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer",
    "keywords": "AIIRWP; Agentic AI Insurability; Risk Transfer; Lifecycle Evidence; Public Research Candidate; Not Final; Not Sealed",
    "creator": "AIIRWP public staging renderer",
    "producer": "Headless Chrome public A4 PDF profile; metadata pass",
})
tmp = pdf_path + ".tmp"
doc.save(tmp, garbage=4, deflate=True)
doc.close()
os.replace(tmp, pdf_path)
`;
  run("python3", ["-c", code, PUBLIC_PDF]);
}

function pdfInfo() {
  const raw = run("pdfinfo", [PUBLIC_PDF]);
  const info = {};
  for (const line of raw.split("\n")) {
    const [key, ...rest] = line.split(":");
    if (rest.length) info[key.trim()] = rest.join(":").trim();
  }
  return { raw, info };
}

function writeManifestAndChecksums(pdfInfoResult) {
  const stagedAt = new Date().toISOString();
  const artifactRows = [
    {
      role: "HTML",
      path: HTML_PATH,
      media_type: "text/html",
      sha256: sha256(PUBLIC_HTML),
      bytes: bytes(PUBLIC_HTML),
    },
    {
      role: "PDF",
      path: PDF_PATH,
      media_type: "application/pdf",
      sha256: sha256(PUBLIC_PDF),
      bytes: bytes(PUBLIC_PDF),
      page_count: Number(pdfInfoResult.info.Pages || 0),
    },
    {
      role: "Figure asset",
      path: FIGURE_PATH,
      media_type: "image/svg+xml",
      sha256: sha256(PUBLIC_FIGURE),
      bytes: bytes(PUBLIC_FIGURE),
    },
  ];
  const manifest = {
    document_id: PUBLIC_ID,
    title: TITLE,
    subtitle: SUBTITLE,
    author: "Jearon Wong",
    series: "Agentic Lifecycle Governance Industry Series",
    series_position: "03 / Insurability & Risk Transfer",
    status: "public research candidate",
    publication_stage: "publication staging preparation; deployment and production reverification required",
    public_route: ROUTE_PATH,
    canonical_artifact_base: `${ARTIFACT_BASE}/`,
    source_basis: "R12 accepted body + R13 body acceptance + R15D artifact acceptance",
    staged_at_utc: stagedAt,
    page_count: Number(pdfInfoResult.info.Pages || 0),
    artifacts: artifactRows,
    manifest: MANIFEST_PATH,
    checksums: CHECKSUM_PATH,
    public_distribution_note: "Public staging exposes HTML and PDF only. No public DOCX is staged.",
    no_docx: true,
    not_final: true,
    not_sealed: true,
    not_production_verified: true,
    not_public_release_execution: true,
    not_legal_advice: true,
    not_insurance_advice: true,
    not_coverage_opinion: true,
    not_underwriting_standard: true,
    not_claims_approval_guidance: true,
    not_insurer_acceptance: true,
    not_coverage_ready: true,
    not_underwriting_ready: true,
    not_certification: true,
    not_endorsement: true,
    boundary:
      "Public research candidate staged for deployment and production reverification. Not final, not sealed, not production verified, not public release execution, not insurer accepted, not coverage-ready, not underwriting-ready, not certification, not endorsement, not legal advice, not insurance advice, not a coverage opinion, not an underwriting standard, and not claims approval guidance.",
    carry_forward_notes: [
      "Minor cover seam must be reproofed after public staging.",
      "Mobile wide-table contained scrolling must be rechecked in public shell.",
      "No DOCX public distribution.",
    ],
    next_phase: "R16B Deployment and Production Reverification.",
  };
  write(PUBLIC_MANIFEST, `${JSON.stringify(manifest, null, 2)}\n`);
  const checksumFiles = [PUBLIC_HTML, PUBLIC_PDF, PUBLIC_FIGURE, PUBLIC_MANIFEST];
  const checksumLines = checksumFiles
    .map((path) => `${sha256(path)}  ${relative(PUBLIC_DIR, path)}`)
    .join("\n");
  write(PUBLIC_CHECKSUMS, `${checksumLines}\n`);
  return { manifest, checksumOutput: run("shasum", ["-a", "256", "-c", PUBLIC_CHECKSUMS], { cwd: PUBLIC_DIR }) };
}

async function main() {
  resetPublicDir();
  transformHtml();
  await generatePdf();
  const pdfInfoResult = pdfInfo();
  const { manifest, checksumOutput } = writeManifestAndChecksums(pdfInfoResult);
  console.log(JSON.stringify({
    public_dir: rel(PUBLIC_DIR),
    html: rel(PUBLIC_HTML),
    pdf: rel(PUBLIC_PDF),
    figure: rel(PUBLIC_FIGURE),
    manifest: rel(PUBLIC_MANIFEST),
    checksums: rel(PUBLIC_CHECKSUMS),
    pdf_pages: manifest.page_count,
    checksum_output: checksumOutput.trim(),
  }, null, 2));
}

await main();
