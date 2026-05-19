#!/usr/bin/env python3
"""Render public whitepaper HTML through the R8 PDF A4 Print Profile.

The script reads the existing public HTML web-reading artifact, injects
PDF-only layout controls into a temporary HTML file, and exports a new public
PDF. The public HTML artifact is not modified; it remains governed by the HTML
Web Reading Profile.
"""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
import time
from dataclasses import dataclass
from html import escape, unescape
from pathlib import Path

try:
    from PyPDF2 import PdfReader, PdfWriter
except Exception:  # pragma: no cover
    PdfReader = None
    PdfWriter = None


REPO = Path(__file__).resolve().parents[3]
TMP_ROOT = Path("/tmp/whitepaper-r8-a4-render")
TABLE_RE = re.compile(r"<table(?P<attrs>[^>]*)>(?P<body>[\s\S]*?)</table>", re.IGNORECASE)
TR_RE = re.compile(r"<tr[^>]*>([\s\S]*?)</tr>", re.IGNORECASE)
TH_RE = re.compile(r"<th[^>]*>([\s\S]*?)</th>", re.IGNORECASE)
TD_RE = re.compile(r"<td[^>]*>([\s\S]*?)</td>", re.IGNORECASE)
TAG_RE = re.compile(r"<[^>]+>")


@dataclass(frozen=True)
class WhitepaperConfig:
    key: str
    title: str
    subject: str
    keywords: str
    html_path: Path
    pdf_path: Path
    tmp_name: str
    h1_pt: int
    subtitle_pt: int


CONFIGS = {
    "gaic": WhitepaperConfig(
        key="gaic",
        title="Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance",
        subject="Technical governance analysis of AI Agent Lifecycle Governance, Missing Regulatory Objects, RCCS-T, RCCS-M, ALCS, and agentic lifecycle conformance.",
        keywords="Global AI Compliance White Paper 2026; GACWP-2026-v0.3.2-FRC-R3; AI Agent Lifecycle Governance; Agentic Lifecycle Governance; Missing Regulatory Objects; MRO; RCCS-T; RCCS-M; ALCS; MPLP; Multi-Agent Lifecycle Protocol; Deterministic Delivery; AI Agent Compliance; Multi-Agent Systems; Enterprise AI Governance; Evidence Chain; Accepted Outcome; Authority Boundary",
        html_path=REPO / "public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html",
        pdf_path=REPO / "public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf",
        tmp_name="gaic-r8-a4.html",
        h1_pt=39,
        subtitle_pt=14,
    ),
    "aiaawp": WhitepaperConfig(
        key="aiaawp",
        title="Agentic AI Auditability & Assurance White Paper 2026",
        subject="A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance",
        keywords="Agentic AI Auditability; AI Agent Auditability; Audit Evidence Chain; Agentic Audit Object; AARM; MRO; Agentic Lifecycle Governance; Enterprise AI Governance; Lifecycle Evidence",
        html_path=REPO / "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
        pdf_path=REPO / "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf",
        tmp_name="aiaawp-r8-a4.html",
        h1_pt=33,
        subtitle_pt=13,
    ),
}


def chrome_path() -> str:
    candidates = [
        shutil.which("google-chrome"),
        shutil.which("chromium"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return str(candidate)
    raise RuntimeError("No Chrome or Chromium executable found")


def pdf_page_count(pdf_path: Path) -> int:
    result = subprocess.run(["pdfinfo", str(pdf_path)], capture_output=True, text=True, timeout=120)
    if result.returncode != 0:
        raise RuntimeError(result.stderr)
    for line in result.stdout.splitlines():
        if line.startswith("Pages:"):
            return int(line.split(":", 1)[1].strip())
    raise RuntimeError(f"Unable to read page count for {pdf_path}")


def pdf_css(config: WhitepaperConfig) -> str:
    return f"""
<style id="r8-pdf-a4-print-profile">
nav.web-edition-nav,
body.r8-gaic-pdf-profile .web-edition-nav,
body.r8-aiaawp-pdf-profile .web-edition-nav {{
  display: none !important;
}}
@media print {{
  @page {{ size: A4; margin: 15mm 14mm; }}
  @page :first {{ size: A4; margin: 0; }}
  html,
  body {{
    margin: 0 !important;
    padding: 0 !important;
    background: #ffffff !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }}
  body {{
    font-size: 9.8pt !important;
    line-height: 1.42 !important;
  }}
  .publication {{
    width: 100% !important;
    max-width: none !important;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none !important;
    background: #ffffff !important;
    overflow: visible !important;
  }}
  .web-edition-nav {{
    display: none !important;
  }}
  .cover-page,
  .cover-page.professional-shell {{
    box-sizing: border-box !important;
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 !important;
    padding: 18mm !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: stretch !important;
    break-after: page !important;
    page-break-after: always !important;
  }}
  .cover-frame {{
    box-sizing: border-box !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 0 !important;
    padding: 14mm 15mm !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }}
  .cover-kicker,
  .cover-page.professional-shell .cover-kicker {{
    font-size: 8pt !important;
    line-height: 1.25 !important;
    letter-spacing: 0.08em !important;
  }}
  .cover-page h1,
  .cover-page.professional-shell h1 {{
    margin: 7mm 0 5mm !important;
    max-width: 15.5ch !important;
    font-size: {config.h1_pt}pt !important;
    line-height: 0.98 !important;
    overflow-wrap: anywhere !important;
  }}
  .cover-subtitle,
  .cover-page.professional-shell .cover-subtitle {{
    max-width: 38em !important;
    font-size: {config.subtitle_pt}pt !important;
    line-height: 1.28 !important;
  }}
  .cover-role {{
    margin: 4mm 0 0 !important;
    font-size: 9.5pt !important;
  }}
  .thesis-strip,
  .cover-page.professional-shell .thesis-strip {{
    margin: 8mm 0 7mm !important;
    grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
  }}
  .thesis-strip span,
  .cover-page.professional-shell .thesis-strip span {{
    padding: 4mm 2.5mm !important;
    font-size: 8pt !important;
    line-height: 1.2 !important;
  }}
  .cover-meta,
  .cover-page.professional-shell .cover-meta {{
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }}
  .cover-meta div,
  .cover-page.professional-shell .cover-meta div {{
    padding: 4mm !important;
  }}
  .cover-meta strong,
  .cover-page.professional-shell .cover-meta strong {{
    font-size: 6.4pt !important;
    line-height: 1.2 !important;
  }}
  .cover-meta span,
  .cover-page.professional-shell .cover-meta span {{
    font-size: 8.2pt !important;
    line-height: 1.28 !important;
    overflow-wrap: anywhere !important;
  }}
  .cover-notice,
  .cover-page.professional-shell .cover-notice {{
    margin-top: 7mm !important;
    padding: 4mm 4.5mm !important;
    font-size: 8pt !important;
    line-height: 1.32 !important;
  }}
  .important-notice,
  .professional-notice {{
    break-before: page !important;
    break-inside: avoid !important;
  }}
  .generated-toc {{
    break-before: page !important;
    break-after: page !important;
    break-inside: auto !important;
    margin: 0 !important;
    padding: 7mm !important;
  }}
  .generated-toc h2 {{
    font-size: 16pt !important;
    margin: 0 0 4mm !important;
  }}
  .toc-note {{
    font-size: 8pt !important;
    margin-bottom: 4mm !important;
  }}
  .toc-grid {{
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 5mm 6mm !important;
  }}
  .toc-grid h3 {{
    font-size: 9pt !important;
    margin: 0 0 2mm !important;
  }}
  .toc-grid li {{
    font-size: 7.6pt !important;
    line-height: 1.26 !important;
    margin: 0 0 1.2mm !important;
  }}
  .front-extra,
  .chapter,
  .appendix,
  .source-section.chapter {{
    break-before: page !important;
  }}
  h2,
  h3,
  h4 {{
    break-after: avoid !important;
  }}
  p,
  li {{
    orphans: 2 !important;
    widows: 2 !important;
  }}
  .table-scroll {{
    overflow: visible !important;
  }}
  table {{
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    table-layout: auto !important;
  }}
  th,
  td {{
    font-size: 7.4pt !important;
    line-height: 1.25 !important;
    padding: 3pt !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
    hyphens: auto !important;
  }}
  .pdf-wide-table-card-set {{
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 4mm !important;
    margin: 4mm 0 6mm !important;
    break-inside: auto !important;
  }}
  .pdf-wide-table-row-card {{
    break-inside: avoid !important;
    border: 0.6pt solid #cbd6df !important;
    border-radius: 2mm !important;
    padding: 3mm !important;
    background: #ffffff !important;
  }}
  .pdf-wide-table-row-card h4 {{
    margin: 0 0 2.2mm !important;
    font-size: 9.2pt !important;
    line-height: 1.2 !important;
    color: #102a35 !important;
  }}
  .pdf-wide-table-row-card dl {{
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 1.8mm !important;
    margin: 0 !important;
  }}
  .pdf-wide-table-row-card dl div {{
    display: grid !important;
    grid-template-columns: 34mm minmax(0, 1fr) !important;
    gap: 3mm !important;
    align-items: start !important;
    padding-top: 1.5mm !important;
    border-top: 0.4pt solid #e3e9ee !important;
  }}
  .pdf-wide-table-row-card dt {{
    margin: 0 !important;
    font-size: 7pt !important;
    line-height: 1.25 !important;
    font-weight: 700 !important;
    color: #526670 !important;
  }}
  .pdf-wide-table-row-card dd {{
    margin: 0 !important;
    font-size: 8pt !important;
    line-height: 1.32 !important;
    color: #182c35 !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
  }}
  .table-block,
  .template-code {{
    break-inside: auto !important;
  }}
  .semantic-row-card,
  .rubric-card,
  .system-profile-row-card,
  .evaluation-profile-card,
  .figure-card,
  .chart-card,
  .callout,
  .object-card,
  .reference-item {{
    break-inside: avoid !important;
  }}
  a {{
    color: inherit !important;
    text-decoration: none !important;
  }}
  .html-footer {{
    display: none !important;
  }}
}}
</style>
"""


def plain_text(fragment: str) -> str:
    text = TAG_RE.sub(" ", fragment)
    text = re.sub(r"\s+", " ", unescape(text)).strip()
    return text


def should_transform_table(headers: list[str], rows: list[list[str]], table_html: str) -> bool:
    if len(headers) >= 4:
        return True
    if len(headers) >= 3 and sum(len(header) for header in headers) >= 58:
        return True
    if any(len(header) >= 26 for header in headers):
        return True
    return len(rows) >= 6 and len(table_html) >= 2400


def transform_wide_tables_for_pdf(html: str) -> str:
    """Convert wide source tables to PDF-only row cards in temporary HTML.

    This keeps the public HTML artifact unchanged while preventing Chrome's
    print engine from compressing wide tables into unreadable vertical text.
    """

    def replace_table(match: re.Match[str]) -> str:
        table_html = match.group(0)
        body = match.group("body")
        header_fragments = TH_RE.findall(body)
        headers = [plain_text(header) for header in header_fragments]
        row_fragments = TR_RE.findall(body)
        rows: list[list[str]] = []
        for row_fragment in row_fragments:
            cells = TD_RE.findall(row_fragment)
            if cells and len(cells) >= 2:
                rows.append(cells)
        if not headers or not rows or not should_transform_table(headers, rows, table_html):
            return table_html

        cards: list[str] = ['<div class="pdf-wide-table-card-set table-block">']
        for index, cells in enumerate(rows, start=1):
            title = plain_text(cells[0]) or f"Row {index}"
            cards.append('<article class="pdf-wide-table-row-card">')
            cards.append(f"<h4>{escape(title)}</h4>")
            cards.append("<dl>")
            for cell_index, cell in enumerate(cells):
                label = headers[cell_index] if cell_index < len(headers) else f"Field {cell_index + 1}"
                cards.append("<div>")
                cards.append(f"<dt>{escape(label)}</dt>")
                cards.append(f"<dd>{cell}</dd>")
                cards.append("</div>")
            cards.append("</dl>")
            cards.append("</article>")
        cards.append("</div>")
        return "\n".join(cards)

    return TABLE_RE.sub(replace_table, html)


def prepare_html(config: WhitepaperConfig) -> Path:
    TMP_ROOT.mkdir(parents=True, exist_ok=True)
    html = config.html_path.read_text(encoding="utf-8", errors="ignore")
    html = re.sub(r"<nav class=\"web-edition-nav\"[\s\S]*?</nav>\s*", "", html, count=1)
    html = transform_wide_tables_for_pdf(html)
    html = html.replace("<body>", f'<body class="r8-{config.key}-pdf-profile">', 1)
    html = html.replace("</head>", f"{pdf_css(config)}\n</head>", 1)
    out = TMP_ROOT / config.tmp_name
    out.write_text(html, encoding="utf-8")
    return out


def render_pdf(config: WhitepaperConfig) -> None:
    tmp_html = prepare_html(config)
    if config.pdf_path.exists():
        config.pdf_path.unlink()
    profile = TMP_ROOT / f"chrome-profile-{config.key}"
    shutil.rmtree(profile, ignore_errors=True)
    profile.mkdir(parents=True, exist_ok=True)
    cmd = [
        chrome_path(),
        "--headless=new",
        "--disable-gpu",
        "--disable-background-networking",
        "--no-pdf-header-footer",
        "--print-to-pdf-no-header",
        "--disable-extensions",
        "--no-first-run",
        "--no-default-browser-check",
        f"--user-data-dir={profile}",
        f"--print-to-pdf={config.pdf_path}",
        tmp_html.resolve().as_uri(),
    ]
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    deadline = time.time() + 900
    last_size = -1
    stable_ticks = 0
    stdout = ""
    stderr = ""
    while time.time() < deadline:
        if process.poll() is not None:
            stdout, stderr = process.communicate(timeout=60)
            break
        if config.pdf_path.exists():
            size = config.pdf_path.stat().st_size
            stable_ticks = stable_ticks + 1 if size > 0 and size == last_size else 0
            last_size = size
            if stable_ticks >= 3 and pdf_page_count(config.pdf_path) > 0:
                process.terminate()
                try:
                    stdout, stderr = process.communicate(timeout=15)
                except subprocess.TimeoutExpired:
                    process.kill()
                    stdout, stderr = process.communicate(timeout=30)
                break
        time.sleep(2)
    else:
        process.kill()
        stdout, stderr = process.communicate(timeout=60)
        raise RuntimeError(f"Chrome PDF render timed out\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}")

    shutil.rmtree(profile, ignore_errors=True)
    if not config.pdf_path.exists() or pdf_page_count(config.pdf_path) <= 0:
        raise RuntimeError(f"Chrome PDF render failed\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}")
    patch_metadata(config)


def patch_metadata(config: WhitepaperConfig) -> None:
    if PdfReader is None or PdfWriter is None:
        return
    reader = PdfReader(str(config.pdf_path))
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": config.title,
            "/Author": "Jearon Wong",
            "/Subject": config.subject,
            "/Keywords": config.keywords,
            "/Producer": "Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass",
            "/Creator": "Whitepaper R8 PDF A4 Print Profile renderer",
        }
    )
    tmp = config.pdf_path.with_suffix(".pdf.tmp")
    with tmp.open("wb") as handle:
        writer.write(handle)
    tmp.replace(config.pdf_path)


def main(argv: list[str]) -> int:
    keys = argv[1:] or ["gaic", "aiaawp"]
    rendered = {}
    for key in keys:
        if key not in CONFIGS:
            raise SystemExit(f"Unknown whitepaper key: {key}")
        config = CONFIGS[key]
        render_pdf(config)
        rendered[key] = {
            "pdf": str(config.pdf_path.relative_to(REPO)),
            "pages": pdf_page_count(config.pdf_path),
            "bytes": config.pdf_path.stat().st_size,
        }
    print(json.dumps(rendered, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
