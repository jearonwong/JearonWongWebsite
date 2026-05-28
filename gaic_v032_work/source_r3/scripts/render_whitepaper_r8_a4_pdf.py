#!/usr/bin/env python3
"""Render public whitepaper HTML through the R8 PDF A4 Print Profile.

The script reads the existing public HTML web-reading artifact, injects
PDF-only layout controls into a temporary HTML file, and exports a new public
PDF. The public HTML artifact is not modified; it remains governed by the HTML
Web Reading Profile.
"""

from __future__ import annotations

import argparse
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
READINESS_BLOCK_RE = re.compile(
    r'(?P<h3><h3 id="table-9-auditability-readiness-levels">[\s\S]*?</h3>)\s*'
    r'<div class="semantic-row-card-set table-block">(?P<body>[\s\S]*?)(?=<p><strong>Table note:)',
    re.IGNORECASE,
)
ARTICLE_RE = re.compile(r'<article class="semantic-row-card">(?P<body>[\s\S]*?)</article>', re.IGNORECASE)
H4_RE = re.compile(r"<h4>([\s\S]*?)</h4>", re.IGNORECASE)
DL_PAIR_RE = re.compile(r"<div><dt>([\s\S]*?)</dt><dd>([\s\S]*?)</dd></div>", re.IGNORECASE)
SCORE_OVERVIEW_BLOCK_RE = re.compile(
    r'<h2>RCCS-T / RCCS-M / ALCS Score Overview</h2>\s*'
    r'<div class="score-overview-table table-block table-scorecard">(?P<body>[\s\S]*?)</div>\s*'
    r'(?=<figure class="chart-card" id="chart-rccs-alcs-score-bars">)',
    re.IGNORECASE,
)
HEATMAP_BLOCK_RE = re.compile(
    r'<h2>Dimension-Level Coverage Patterns</h2>\s*'
    r'<div class="heatmap-card" id="system-dimension-heatmap">(?P<body>[\s\S]*?)</div>\s*'
    r'(?=<h2>System-by-System Analytical Profiles</h2>)',
    re.IGNORECASE,
)
APPENDIX_D_MRO_MAPPING_RE = re.compile(
    r'(?P<h2><h2 id="d-2-expanded-cross-system-mro-mapping">[\s\S]*?</h2>)\s*'
    r'(?P<note><p><strong>Note:</strong>[\s\S]*?</p>)\s*'
    r'(?P<table><div class="table-block table-system-profile table-compact">[\s\S]*?</div>)\s*'
    r'(?P<next><hr class="section-rule">\s*<h2 id="d-3-pattern-level-interpretation">)',
    re.IGNORECASE,
)
T1101_BLOCK_RE = re.compile(
    r'(?P<h2><h2 id="11-3-comparative-field-positioning-matrix">[\s\S]*?</h2>)\s*'
    r'(?P<intro><p>The following table provides high-level positioning[\s\S]*?</p>)\s*'
    r'(?P<table><div class="table-block table-system-profile table-compact">[\s\S]*?</div>)',
    re.IGNORECASE,
)


@dataclass(frozen=True)
class WhitepaperConfig:
    key: str
    title: str
    short_title: str
    document_id: str
    subject: str
    keywords: str
    html_path: Path
    pdf_path: Path
    tmp_name: str
    h1_pt: int
    subtitle_pt: int


@dataclass(frozen=True)
class TableMetrics:
    profile: str
    comparison_importance: str
    density: str
    column_count: int
    row_count: int
    max_header_len: int
    max_cell_len: int
    total_text_len: int
    long_header_risk: str
    long_cell_risk: str


@dataclass(frozen=True)
class TableDecision:
    rendering: str
    reason: str
    metrics: TableMetrics


CONFIGS = {
    "gaic": WhitepaperConfig(
        key="gaic",
        title="Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance",
        short_title="GAIC White Paper 2026",
        document_id="GACWP-2026-v0.3.2-FRC-R3",
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
        short_title="AIAAWP 2026",
        document_id="AIAAWP-2026-v0.1",
        subject="A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance",
        keywords="Agentic AI Auditability; AI Agent Auditability; Audit Evidence Chain; Agentic Audit Object; AARM; MRO; Agentic Lifecycle Governance; Enterprise AI Governance; Lifecycle Evidence",
        html_path=REPO / "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html",
        pdf_path=REPO / "public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf",
        tmp_name="aiaawp-r8-a4.html",
        h1_pt=33,
        subtitle_pt=13,
    ),
    "aiirwp": WhitepaperConfig(
        key="aiirwp",
        title="Agentic AI Insurability & Risk Transfer White Paper 2026",
        short_title="AIIRWP 2026",
        document_id="AIIRWP-2026-v1.0",
        subject="A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer",
        keywords="Agentic AI Insurability; AI Risk Transfer; Claim Evidence Chain; Lifecycle Evidence; Agentic Lifecycle Governance; Insured Legal Subject; Agentic Risk Object; Underwriting Reviewability",
        html_path=REPO / "public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html",
        pdf_path=REPO / "public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf",
        tmp_name="aiirwp-r8-a4.html",
        h1_pt=31,
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
    header_left = config.short_title
    header_right = "Public PDF edition"
    footer_left = f"{config.short_title} | {config.document_id}"
    footer_center = "jearonwong.com"
    footer_right = 'Page " counter(page) " | Copyright © 2026 Jearon Wong. All rights reserved.'
    return f"""
<style id="r8-pdf-a4-print-profile">
nav.web-edition-nav,
body.r8-gaic-pdf-profile .web-edition-nav,
body.r8-aiaawp-pdf-profile .web-edition-nav {{
  display: none !important;
}}
@media print {{
  @page {{
    size: A4;
    margin: 18mm 14mm 19mm;
    @top-left {{
      content: "{header_left}";
      font-size: 6.3pt;
      color: #6b7c86;
    }}
    @top-right {{
      content: "{header_right}";
      font-size: 6.3pt;
      color: #6b7c86;
    }}
    @bottom-left {{
      content: "{footer_left}";
      font-size: 6.5pt;
      color: #6b7c86;
    }}
    @bottom-center {{
      content: "{footer_center}";
      font-size: 6.5pt;
      color: #6b7c86;
    }}
    @bottom-right {{
      content: "{footer_right}";
      font-size: 6.5pt;
      color: #6b7c86;
    }}
  }}
  @page :first {{
    size: A4;
    margin: 0;
    @top-left {{ content: ""; }}
    @top-right {{ content: ""; }}
    @bottom-left {{ content: ""; }}
    @bottom-center {{ content: ""; }}
    @bottom-right {{ content: ""; }}
  }}
  @page r8-landscape {{
    size: A4 landscape;
    margin: 15mm 11mm 17mm;
    @top-left {{
      content: "{header_left}";
      font-size: 6pt;
      color: #6b7c86;
    }}
    @top-right {{
      content: "{header_right}";
      font-size: 6pt;
      color: #6b7c86;
    }}
    @bottom-left {{
      content: "{footer_left}";
      font-size: 6.2pt;
      color: #6b7c86;
    }}
    @bottom-center {{
      content: "{footer_center}";
      font-size: 6.2pt;
      color: #6b7c86;
    }}
    @bottom-right {{
      content: "{footer_right}";
      font-size: 6.2pt;
      color: #6b7c86;
    }}
  }}
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
    break-after: avoid-page !important;
    page-break-after: avoid !important;
  }}
  h1 {{
    break-after: avoid-page !important;
    page-break-after: avoid !important;
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
  .table-system-profile table,
  .table-matrix table,
  .table-rubric table {{
    table-layout: fixed !important;
  }}
  .table-system-profile th,
  .table-system-profile td {{
    font-size: 6.45pt !important;
    line-height: 1.16 !important;
    padding: 2.1pt !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
    hyphens: auto !important;
  }}
  .table-system-profile table:nth-of-type(1) th:nth-child(1),
  .table-system-profile table:nth-of-type(1) td:nth-child(1) {{
    width: 20% !important;
  }}
  .table-system-profile table:nth-of-type(1) th:nth-child(2),
  .table-system-profile table:nth-of-type(1) td:nth-child(2) {{
    width: 34% !important;
  }}
  .table-system-profile table:nth-of-type(1) th:nth-child(3),
  .table-system-profile table:nth-of-type(1) td:nth-child(3) {{
    width: 46% !important;
  }}
  .table-system-profile table:nth-of-type(2) th:nth-child(1),
  .table-system-profile table:nth-of-type(2) td:nth-child(1) {{
    width: 20% !important;
  }}
  .table-system-profile table:nth-of-type(2) th:nth-child(2),
  .table-system-profile table:nth-of-type(2) td:nth-child(2),
  .table-system-profile table:nth-of-type(2) th:nth-child(3),
  .table-system-profile table:nth-of-type(2) td:nth-child(3) {{
    width: 22% !important;
  }}
  .table-system-profile table:nth-of-type(2) th:nth-child(4),
  .table-system-profile table:nth-of-type(2) td:nth-child(4) {{
    width: 36% !important;
  }}
  .table-system-profile .layout-note,
  .table-system-profile .continuation-label {{
    font-size: 7.5pt !important;
    line-height: 1.25 !important;
  }}
  .pdf-landscape-table-page {{
    page: r8-landscape !important;
    break-before: page !important;
    break-after: page !important;
    break-inside: avoid !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }}
  .pdf-scorecard-landscape-page,
  .pdf-heatmap-landscape-page {{
    page: r8-landscape !important;
    break-before: page !important;
    break-after: page !important;
    break-inside: avoid !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }}
  .pdf-table-intro-keep {{
    break-before: page !important;
    break-inside: auto !important;
  }}
  .pdf-table-intro-keep h2 {{
    margin-top: 0 !important;
  }}
  .pdf-table-intro-keep > p:first-of-type {{
    break-after: avoid-page !important;
    page-break-after: avoid !important;
  }}
  .pdf-landscape-title {{
    margin: 0 0 1.8mm !important;
    font-size: 12pt !important;
    line-height: 1.12 !important;
    color: #102a35 !important;
  }}
  .pdf-landscape-intro {{
    margin: 0 0 2.4mm !important;
    max-width: 250mm !important;
    font-size: 7.4pt !important;
    line-height: 1.28 !important;
    color: #536a75 !important;
  }}
  .pdf-boundary-strip {{
    margin: 0 0 2.4mm !important;
    padding: 1.7mm 2.2mm !important;
    border-left: 2pt solid #0ea5b7 !important;
    background: #edfafa !important;
    color: #24424d !important;
    font-size: 6.7pt !important;
    line-height: 1.25 !important;
  }}
  .pdf-scorecard-table {{
    table-layout: fixed !important;
    width: 100% !important;
  }}
  .pdf-scorecard-table th,
  .pdf-scorecard-table td {{
    font-size: 5.9pt !important;
    line-height: 1.12 !important;
    padding: 1.7pt !important;
    vertical-align: top !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
    hyphens: auto !important;
  }}
  .pdf-scorecard-table th:nth-child(1),
  .pdf-scorecard-table td:nth-child(1) {{
    width: 17% !important;
  }}
  .pdf-scorecard-table th:nth-child(2),
  .pdf-scorecard-table td:nth-child(2) {{
    width: 11% !important;
  }}
  .pdf-scorecard-table th:nth-child(3),
  .pdf-scorecard-table td:nth-child(3),
  .pdf-scorecard-table th:nth-child(4),
  .pdf-scorecard-table td:nth-child(4),
  .pdf-scorecard-table th:nth-child(5),
  .pdf-scorecard-table td:nth-child(5) {{
    width: 7.2% !important;
  }}
  .pdf-scorecard-table th:nth-child(6),
  .pdf-scorecard-table td:nth-child(6) {{
    width: 13.6% !important;
  }}
  .pdf-scorecard-table th:nth-child(7),
  .pdf-scorecard-table td:nth-child(7) {{
    width: 37% !important;
  }}
  .pdf-scorecard-table td:nth-child(1) {{
    font-weight: 800 !important;
    color: #102a35 !important;
  }}
  .pdf-scorecard-table td:nth-child(2) {{
    font-size: 5.55pt !important;
    color: #415a65 !important;
  }}
  .pdf-scorecard-table td:nth-child(3) strong,
  .pdf-scorecard-table td:nth-child(4) strong,
  .pdf-scorecard-table td:nth-child(5) strong {{
    display: block !important;
    margin: 0 0 0.6mm !important;
    font-size: 8.4pt !important;
    line-height: 1 !important;
    font-weight: 800 !important;
    color: #0b2530 !important;
  }}
  .pdf-scorecard-table td:nth-child(6) {{
    color: #29415f !important;
    font-weight: 700 !important;
  }}
  .pdf-scorecard-table td:nth-child(7) {{
    font-size: 5.5pt !important;
    line-height: 1.12 !important;
    color: #1d3038 !important;
  }}
  .pdf-scorecard-table td:nth-child(7) .score-range {{
    display: block !important;
    margin-top: 0.8mm !important;
    color: #6b7c86 !important;
    font-size: 5.25pt !important;
    line-height: 1.1 !important;
  }}
  .score-system-name {{
    font-weight: 800 !important;
    color: #102a35 !important;
  }}
  .score-type {{
    color: #415a65 !important;
  }}
  .score-primary {{
    display: block !important;
    margin: 0 0 0.6mm !important;
    font-size: 8.4pt !important;
    line-height: 1 !important;
    font-weight: 800 !important;
    color: #0b2530 !important;
  }}
  .score-range {{
    display: block !important;
    font-size: 5.6pt !important;
    line-height: 1.1 !important;
    color: #6a7d87 !important;
  }}
  .score-confidence {{
    display: inline-block !important;
    padding: 0.7mm 1mm !important;
    border-radius: 1.4mm !important;
    background: #eef4ff !important;
    color: #29415f !important;
    font-weight: 700 !important;
    font-size: 5.7pt !important;
    line-height: 1.12 !important;
  }}
  .score-interpretation {{
    font-size: 5.8pt !important;
    line-height: 1.14 !important;
    color: #1d3038 !important;
  }}
  .score-evidence-note {{
    display: block !important;
    margin-top: 0.8mm !important;
    color: #6b7c86 !important;
    font-size: 5.35pt !important;
    line-height: 1.12 !important;
  }}
  .pdf-heatmap-landscape-page .heatmap-title {{
    margin: 0 0 1.4mm !important;
    font-size: 12pt !important;
    line-height: 1.12 !important;
  }}
  .pdf-heatmap-landscape-page .heatmap-note {{
    margin: 0 0 2mm !important;
    font-size: 7pt !important;
    line-height: 1.25 !important;
    color: #536a75 !important;
  }}
  .pdf-heatmap-landscape-page .heatmap-table {{
    table-layout: fixed !important;
    width: 100% !important;
  }}
  .pdf-heatmap-landscape-page .heatmap-table th,
  .pdf-heatmap-landscape-page .heatmap-table td {{
    font-size: 6.3pt !important;
    line-height: 1.15 !important;
    padding: 2.1pt !important;
    text-align: center !important;
  }}
  .pdf-heatmap-landscape-page .heatmap-table th:first-child,
  .pdf-heatmap-landscape-page .heatmap-table td:first-child {{
    width: 25% !important;
    text-align: left !important;
    font-weight: 800 !important;
  }}
  .pdf-heatmap-landscape-page .heat {{
    display: inline-block !important;
    min-width: 20mm !important;
    padding: 1mm 1.6mm !important;
    border-radius: 1.5mm !important;
    font-weight: 800 !important;
    font-size: 5.9pt !important;
  }}
  .pdf-landscape-table-page table {{
    table-layout: fixed !important;
    width: 100% !important;
  }}
  .pdf-landscape-table-page th,
  .pdf-landscape-table-page td {{
    font-size: 5.8pt !important;
    line-height: 1.12 !important;
    padding: 1.8pt !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
    hyphens: auto !important;
  }}
  .pdf-landscape-table-page th *,
  .pdf-landscape-table-page td * {{
    font-size: inherit !important;
    line-height: inherit !important;
    letter-spacing: 0 !important;
  }}
  .pdf-landscape-table-page .layout-note {{
    margin: 0 0 2.5mm !important;
    font-size: 7.2pt !important;
    line-height: 1.25 !important;
    color: #5b6d78 !important;
  }}
  .pdf-mro-landscape-module {{
    page: r8-landscape !important;
    break-before: page !important;
    break-after: page !important;
    break-inside: auto !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }}
  .pdf-mro-landscape-module .table-system-profile {{
    margin: 0 !important;
  }}
  .pdf-mro-landscape-module .continuation-label {{
    margin: 2.5mm 0 1.2mm !important;
    padding: 0 !important;
    font-size: 6.8pt !important;
    font-weight: 800 !important;
    color: #3d5360 !important;
  }}
  .pdf-mro-landscape-module table {{
    table-layout: fixed !important;
    width: 100% !important;
    break-inside: auto !important;
    margin: 0 0 2.2mm !important;
  }}
  .pdf-mro-landscape-module th,
  .pdf-mro-landscape-module td {{
    font-size: 5.55pt !important;
    line-height: 1.1 !important;
    padding: 1.45pt 1.6pt !important;
    vertical-align: top !important;
    overflow-wrap: normal !important;
    word-break: normal !important;
    hyphens: none !important;
  }}
  .pdf-mro-landscape-module th {{
    font-size: 5.7pt !important;
    line-height: 1.08 !important;
    font-weight: 800 !important;
    color: #102a35 !important;
  }}
  .pdf-mro-landscape-module th *,
  .pdf-mro-landscape-module td * {{
    font-size: inherit !important;
    line-height: inherit !important;
    letter-spacing: 0 !important;
    overflow-wrap: normal !important;
    word-break: normal !important;
    hyphens: none !important;
  }}
  .pdf-mro-landscape-module table:nth-of-type(1) th:nth-child(1),
  .pdf-mro-landscape-module table:nth-of-type(1) td:nth-child(1),
  .pdf-mro-landscape-module table:nth-of-type(2) th:nth-child(1),
  .pdf-mro-landscape-module table:nth-of-type(2) td:nth-child(1),
  .pdf-mro-landscape-module table:nth-of-type(3) th:nth-child(1),
  .pdf-mro-landscape-module table:nth-of-type(3) td:nth-child(1) {{
    width: 12% !important;
  }}
  .pdf-mro-landscape-module table:nth-of-type(1) th:nth-child(2),
  .pdf-mro-landscape-module table:nth-of-type(1) td:nth-child(2) {{
    width: 34% !important;
  }}
  .pdf-mro-landscape-module table:nth-of-type(1) th:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(1) td:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(1) th:nth-child(4),
  .pdf-mro-landscape-module table:nth-of-type(1) td:nth-child(4) {{
    width: 27% !important;
  }}
  .pdf-mro-landscape-module table:nth-of-type(2) th:nth-child(2),
  .pdf-mro-landscape-module table:nth-of-type(2) td:nth-child(2),
  .pdf-mro-landscape-module table:nth-of-type(2) th:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(2) td:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(2) th:nth-child(4),
  .pdf-mro-landscape-module table:nth-of-type(2) td:nth-child(4),
  .pdf-mro-landscape-module table:nth-of-type(3) th:nth-child(2),
  .pdf-mro-landscape-module table:nth-of-type(3) td:nth-child(2),
  .pdf-mro-landscape-module table:nth-of-type(3) th:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(3) td:nth-child(3),
  .pdf-mro-landscape-module table:nth-of-type(3) th:nth-child(4),
  .pdf-mro-landscape-module table:nth-of-type(3) td:nth-child(4) {{
    width: 29.333% !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-grid {{
    display: block !important;
    grid-template-columns: none !important;
    gap: 0 !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card {{
    display: block !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin: 0 0 7mm !important;
    padding: 6mm !important;
    border: 0.7pt solid #cbd6df !important;
    border-left: 3pt solid #0ea5b7 !important;
    border-radius: 2mm !important;
    background: #ffffff !important;
    break-inside: avoid-page !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card + .evaluation-profile-card {{
    break-before: page !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card .profile-kicker {{
    margin: 0 0 1.2mm !important;
    font-size: 6.4pt !important;
    line-height: 1.1 !important;
    font-weight: 800 !important;
    letter-spacing: 0.04em !important;
    text-transform: uppercase !important;
    color: #536a75 !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card h3 {{
    margin: 0 0 3mm !important;
    font-size: 16pt !important;
    line-height: 1.1 !important;
    color: #102a35 !important;
  }}
  .r8-gaic-pdf-profile .profile-postures {{
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1.45fr !important;
    gap: 2.4mm !important;
    margin: 0 0 3.5mm !important;
  }}
  .r8-gaic-pdf-profile .profile-postures span {{
    display: block !important;
    min-width: 0 !important;
    padding: 2.4mm !important;
    border: 0.5pt solid #d6e1e8 !important;
    border-radius: 1.6mm !important;
    background: #f7fbfc !important;
    color: #0b2530 !important;
    font-size: 16pt !important;
    line-height: 1 !important;
    font-weight: 800 !important;
  }}
  .r8-gaic-pdf-profile .profile-postures span:last-child {{
    font-size: 8pt !important;
    line-height: 1.18 !important;
    color: #29415f !important;
    font-weight: 700 !important;
    background: #eef4ff !important;
  }}
  .r8-gaic-pdf-profile .profile-postures strong {{
    display: block !important;
    margin: 0 0 1.1mm !important;
    font-size: 6.2pt !important;
    line-height: 1.05 !important;
    font-weight: 800 !important;
    color: #536a75 !important;
  }}
  .r8-gaic-pdf-profile .profile-postures em {{
    display: block !important;
    margin-top: 1mm !important;
    font-size: 6.2pt !important;
    line-height: 1.1 !important;
    font-style: normal !important;
    font-weight: 600 !important;
    color: #6b7c86 !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card p {{
    margin: 0 0 2mm !important;
    font-size: 8.3pt !important;
    line-height: 1.32 !important;
    color: #1d3038 !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card p strong {{
    color: #102a35 !important;
  }}
  .r8-gaic-pdf-profile .evaluation-profile-card .profile-boundary {{
    margin-top: 3mm !important;
    padding-top: 2mm !important;
    border-top: 0.5pt solid #dbe5ea !important;
    color: #536a75 !important;
    font-size: 7.6pt !important;
  }}
  .pdf-score-rubric-matrix table {{
    table-layout: fixed !important;
  }}
  .pdf-score-rubric-matrix th,
  .pdf-score-rubric-matrix td {{
    font-size: 6.8pt !important;
    line-height: 1.18 !important;
    padding: 2.3pt !important;
    overflow-wrap: break-word !important;
    word-break: normal !important;
  }}
  .pdf-score-rubric-matrix table:nth-of-type(1) th:nth-child(1),
  .pdf-score-rubric-matrix table:nth-of-type(1) td:nth-child(1),
  .pdf-score-rubric-matrix table:nth-of-type(2) th:nth-child(1),
  .pdf-score-rubric-matrix table:nth-of-type(2) td:nth-child(1) {{
    width: 17% !important;
  }}
  .pdf-score-rubric-matrix table:nth-of-type(1) th:nth-child(2),
  .pdf-score-rubric-matrix table:nth-of-type(1) td:nth-child(2) {{
    width: 31% !important;
  }}
  .pdf-score-rubric-matrix table:nth-of-type(1) th:nth-child(3),
  .pdf-score-rubric-matrix table:nth-of-type(1) td:nth-child(3),
  .pdf-score-rubric-matrix table:nth-of-type(1) th:nth-child(4),
  .pdf-score-rubric-matrix table:nth-of-type(1) td:nth-child(4) {{
    width: 26% !important;
  }}
  .pdf-score-rubric-matrix table:nth-of-type(2) th:nth-child(2),
  .pdf-score-rubric-matrix table:nth-of-type(2) td:nth-child(2) {{
    width: 38% !important;
  }}
  .pdf-score-rubric-matrix table:nth-of-type(2) th:nth-child(3),
  .pdf-score-rubric-matrix table:nth-of-type(2) td:nth-child(3) {{
    width: 45% !important;
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


def risk_level(value: int, medium: int, high: int) -> str:
    if value >= high:
        return "high"
    if value >= medium:
        return "medium"
    return "low"


def table_profile(context_html: str, headers: list[str], table_html: str) -> str:
    context_text = plain_text(context_html).lower()
    header_text = " ".join(headers).lower()
    table_text = plain_text(table_html[:1200]).lower()
    profile_text = f"{context_text} {header_text} {table_text}"

    if (
        "table-system-profile" in context_html
        or "comparative field positioning matrix" in profile_text
        or "comparative" in profile_text
        or "positioning matrix" in profile_text
        or "posture" in header_text
        or ("rccs-m" in header_text and "alcs" in header_text)
    ):
        return "comparative_matrix"
    if (
        "table-rubric" in context_html
        or "rubric" in profile_text
        or "score" in profile_text
        or "scoring" in profile_text
        or "readiness levels" in profile_text
    ):
        return "score_rubric_matrix"
    if (
        "mro-to-audit-evidence" in profile_text
        or "lifecycle stage" in profile_text
        or "lifecycle mapping" in profile_text
        or "responsibility matrix" in profile_text
    ):
        return "lifecycle_mapping"
    if (
        "evidence request" in profile_text
        or "evidence checklist" in profile_text
        or "checklist" in profile_text
    ):
        return "evidence_request"
    if (
        "registry" in profile_text
        or "inventory" in profile_text
        or "source register" in profile_text
        or "citation" in profile_text
        or "appendix" in context_text
    ):
        return "registry_inventory"
    return "narrative_support"


def comparison_importance(profile: str, context_html: str, headers: list[str], table_html: str) -> str:
    profile_text = f"{plain_text(context_html[-1600:])} {' '.join(headers)} {plain_text(table_html[:1200])}".lower()
    if profile in {"comparative_matrix", "score_rubric_matrix"}:
        return "high"
    if profile == "lifecycle_mapping":
        return "medium"
    if "matrix" in profile_text or "crosswalk" in profile_text or "comparison" in profile_text:
        return "medium"
    return "low"


def table_metrics(context_html: str, headers: list[str], rows: list[list[str]], table_html: str) -> TableMetrics:
    cell_texts = [plain_text(cell) for row in rows for cell in row]
    profile = table_profile(context_html, headers, table_html)
    max_header_len = max((len(header) for header in headers), default=0)
    max_cell_len = max((len(cell) for cell in cell_texts), default=0)
    total_text_len = sum(len(cell) for cell in cell_texts) + sum(len(header) for header in headers)
    column_count = len(headers)
    row_count = len(rows)
    density_score = 0
    if column_count >= 7:
        density_score += 2
    elif column_count >= 5:
        density_score += 1
    if row_count >= 12:
        density_score += 1
    if max_header_len >= 32:
        density_score += 1
    if max_cell_len >= 220:
        density_score += 2
    elif max_cell_len >= 140:
        density_score += 1
    if total_text_len >= 5200:
        density_score += 2
    elif total_text_len >= 2600:
        density_score += 1
    density = "high" if density_score >= 4 else "medium" if density_score >= 2 else "low"
    return TableMetrics(
        profile=profile,
        comparison_importance=comparison_importance(profile, context_html, headers, table_html),
        density=density,
        column_count=column_count,
        row_count=row_count,
        max_header_len=max_header_len,
        max_cell_len=max_cell_len,
        total_text_len=total_text_len,
        long_header_risk=risk_level(max_header_len, 24, 36),
        long_cell_risk=risk_level(max_cell_len, 140, 240),
    )


def adaptive_table_decision(context_html: str, headers: list[str], rows: list[list[str]], table_html: str) -> TableDecision:
    metrics = table_metrics(context_html, headers, rows, table_html)

    if metrics.column_count <= 2 and metrics.long_cell_risk != "high":
        return TableDecision("portrait_inline_table", "small or medium two-column table remains readable in portrait flow", metrics)

    if "table-system-profile" in context_html and metrics.column_count <= 4:
        return TableDecision("portrait_split_matrix", "source already splits this matrix with repeated key/context columns", metrics)

    if metrics.comparison_importance == "high":
        if metrics.column_count >= 7 or (
            metrics.density == "high" and metrics.column_count >= 6 and metrics.long_cell_risk != "high"
        ):
            return TableDecision(
                "dedicated_landscape_a4_table",
                "dense high-comparison table benefits materially from landscape side-by-side scanning",
                metrics,
            )
        return TableDecision("portrait_inline_table", "comparison table remains readable in portrait or existing split-matrix form", metrics)

    if metrics.comparison_importance == "medium":
        if metrics.column_count <= 5 and metrics.density != "high":
            return TableDecision("portrait_inline_table", "medium-comparison table is readable in normal portrait report flow", metrics)
        if metrics.column_count >= 6 and metrics.long_cell_risk != "high":
            return TableDecision(
                "dedicated_landscape_a4_table",
                "medium-comparison high-column table benefits from landscape without row-card loss",
                metrics,
            )
        return TableDecision(
            "row_card_registry",
            "dense lifecycle/descriptive mapping is safer as cards because comparison is not the primary mode",
            metrics,
        )

    if metrics.column_count <= 4 and metrics.density == "low":
        return TableDecision("portrait_inline_table", "low-density table remains readable in portrait flow", metrics)

    if metrics.profile in {"registry_inventory", "evidence_request", "narrative_support", "lifecycle_mapping"}:
        return TableDecision(
            "row_card_registry",
            "low-comparison registry, evidence, appendix, or descriptive table prioritizes readable completeness",
            metrics,
        )

    return TableDecision("portrait_inline_table", "default adaptive choice keeps readable tables in portrait flow", metrics)


def render_table_cards(headers: list[str], rows: list[list[str]]) -> str:
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


def render_landscape_table(table_html: str, decision: TableDecision) -> str:
    metrics = decision.metrics
    note = (
        "Adaptive PDF table layout: dense comparison table rendered on a dedicated landscape A4 page "
        "to preserve side-by-side scanning without forcing other tables into landscape."
    )
    return (
        '<div class="pdf-landscape-table-page table-block" '
        f'data-table-profile="{escape(metrics.profile)}" '
        f'data-adaptive-rendering="{escape(decision.rendering)}">\n'
        f'<div class="layout-note">{escape(note)}</div>\n'
        f"{table_html}\n"
        "</div>"
    )


def add_class_to_first_table(fragment: str, class_name: str) -> str:
    def replace(match: re.Match[str]) -> str:
        attrs = match.group("attrs")
        class_match = re.search(r'class=(["\'])(?P<class>.*?)\1', attrs, re.IGNORECASE)
        if class_match:
            existing = class_match.group("class")
            if class_name in existing.split():
                return match.group(0)
            quote = class_match.group(1)
            updated = attrs[: class_match.start()] + f'class={quote}{existing} {class_name}{quote}' + attrs[class_match.end() :]
            return f"<table{updated}>"
        return f'<table{attrs} class="{class_name}">'

    return re.sub(r"<table(?P<attrs>[^>]*)>", replace, fragment, count=1, flags=re.IGNORECASE)


def transform_score_overview_for_pdf(html: str) -> str:
    """Render the GAIC score overview as a score-first landscape matrix."""

    def replace_block(match: re.Match[str]) -> str:
        body = add_class_to_first_table(match.group("body"), "pdf-scorecard-table")
        return f"""
<section class="pdf-scorecard-landscape-page table-block" data-table-profile="score_rubric_matrix" data-adaptive-rendering="scorecard_landscape">
<h2 class="pdf-landscape-title">RCCS-T / RCCS-M / ALCS Score Overview</h2>
<p class="pdf-landscape-intro">Compact scorecard matrix for side-by-side comparison. Primary scores are visually dominant; ranges and evidence notes remain secondary uncertainty and source-boundary context.</p>
<div class="pdf-boundary-strip">Fixed source order; provisional analytical framing; non-ranking. Scores are analytical profiles, not vendor rankings, legal compliance proof, certifications, regulatory approval signals, or procurement recommendations.</div>
<div class="score-overview-table table-block table-scorecard pdf-scorecard-module">
{body}
</div>
</section>
"""

    return SCORE_OVERVIEW_BLOCK_RE.sub(replace_block, html)


def transform_heatmap_for_pdf(html: str) -> str:
    """Keep the dimension heatmap and its context together on landscape PDF pages."""

    def replace_block(match: re.Match[str]) -> str:
        body = match.group("body")
        return f"""
<section class="pdf-heatmap-landscape-page table-block" data-table-profile="heatmap" data-adaptive-rendering="heatmap_landscape">
<h2 class="pdf-landscape-title">Dimension-Level Coverage Patterns</h2>
<p class="pdf-landscape-intro">Landscape heatmap module keeps the explanatory context and system-by-dimension posture table together, preserving scanability without applying landscape to ordinary portrait tables.</p>
<div class="pdf-boundary-strip">Qualitative, source-qualified posture labels. Fixed source order; no leaderboard, certification, legal compliance proof, regulatory approval signal, or procurement recommendation is implied.</div>
<div class="heatmap-card" id="system-dimension-heatmap">
{body}
</div>
</section>
"""

    return HEATMAP_BLOCK_RE.sub(replace_block, html)


def transform_appendix_d_mro_mapping_for_pdf(html: str) -> str:
    """Keep Appendix D's cross-system MRO matrix readable in landscape groups.

    R8E-1 left the third split matrix in portrait flow, which let Chromium
    compress long vendor headers into single-character vertical text. This
    transform keeps the title, note, legend, and all three source split tables
    together on landscape pages with explicit repeated MRO ID columns.
    """

    def replace_block(match: re.Match[str]) -> str:
        return f"""
<section class="pdf-mro-landscape-module" data-table-profile="comparative_matrix" data-adaptive-rendering="landscape_split_matrix">
{match.group("h2")}
<p class="pdf-landscape-intro">Expanded Cross-System MRO Mapping is a high-comparison appendix matrix. It is rendered as landscape split panels with the MRO ID repeated so long system names wrap horizontally rather than collapsing into vertical single-character columns.</p>
<div class="pdf-boundary-strip">All cell values remain provisional analytical mappings in fixed source order. This matrix is not a vendor ranking, procurement recommendation, certification, regulatory approval signal, or legal compliance proof.</div>
{match.group("note")}
{match.group("table")}
</section>
{match.group("next")}
"""

    return APPENDIX_D_MRO_MAPPING_RE.sub(replace_block, html)


def transform_t1101_for_pdf(html: str) -> str:
    """Keep the T-11-01 heading and explanatory paragraph attached to the matrix."""

    def replace_block(match: re.Match[str]) -> str:
        return f"""
<section class="pdf-table-intro-keep" data-table-profile="comparative_matrix" data-adaptive-rendering="portrait_split_matrix">
{match.group("h2")}
{match.group("intro")}
{match.group("table")}
</section>
"""

    return T1101_BLOCK_RE.sub(replace_block, html)


def transform_tables_for_pdf(html: str) -> str:
    """Apply adaptive, profile-aware PDF table rendering in temporary HTML.

    This keeps the public HTML artifact unchanged while preventing Chrome's
    print engine from compressing wide tables into unreadable vertical text.
    The decision is table-specific: readable portrait tables stay portrait,
    dense comparison tables may receive a dedicated landscape page, split
    matrices are preserved, and row cards are reserved for low-comparison
    registry, inventory, evidence, appendix, and descriptive tables.
    """

    def replace_table(match: re.Match[str]) -> str:
        table_html = match.group(0)
        if "pdf-scorecard-table" in table_html or "heatmap-table" in table_html:
            return table_html
        body = match.group("body")
        header_fragments = TH_RE.findall(body)
        headers = [plain_text(header) for header in header_fragments]
        row_fragments = TR_RE.findall(body)
        rows: list[list[str]] = []
        for row_fragment in row_fragments:
            cells = TD_RE.findall(row_fragment)
            if cells and len(cells) >= 2:
                rows.append(cells)
        if not headers or not rows:
            return table_html
        context_html = html[max(0, match.start() - 2400) : match.start()]
        if (
            context_html.rfind('class="pdf-scorecard-landscape-page') > context_html.rfind("</section>")
            or context_html.rfind('class="pdf-heatmap-landscape-page') > context_html.rfind("</section>")
        ):
            return table_html
        decision = adaptive_table_decision(context_html, headers, rows, table_html)
        if decision.rendering in {"portrait_inline_table", "portrait_split_matrix"}:
            return table_html
        if decision.rendering == "dedicated_landscape_a4_table":
            return render_landscape_table(table_html, decision)
        if not should_transform_table(headers, rows, table_html):
            return table_html
        return render_table_cards(headers, rows)

    return TABLE_RE.sub(replace_table, html)


def transform_readiness_levels_for_pdf(html: str) -> str:
    """Render AARM readiness levels as a split rubric matrix in PDF mode."""

    def replace_block(match: re.Match[str]) -> str:
        cards = []
        for article in ARTICLE_RE.findall(match.group("body")):
            heading_match = H4_RE.search(article)
            if not heading_match:
                continue
            fields = {plain_text(label).lower(): value for label, value in DL_PAIR_RE.findall(article)}
            cards.append(
                {
                    "level": plain_text(heading_match.group(1)),
                    "definition": fields.get("definition", ""),
                    "observable": fields.get("observable traits", ""),
                    "evidence": fields.get("minimum evidence", ""),
                    "not_prove": fields.get("what it does not prove", ""),
                    "source": fields.get("source / synthesis note", ""),
                }
            )
        if not cards:
            return match.group(0)

        def row(card: dict[str, str], keys: list[str]) -> str:
            cells = [f"<td>{card[key]}</td>" for key in keys]
            return "<tr>" + "".join(cells) + "</tr>"

        panel_one_rows = "\n".join(row(card, ["level", "definition", "observable", "evidence"]) for card in cards)
        panel_two_rows = "\n".join(row(card, ["level", "not_prove", "source"]) for card in cards)
        return f"""{match.group("h3")}
<div class="table-block table-matrix table-compact pdf-score-rubric-matrix">
<div class="table-caption">Table 9: Auditability Readiness Levels</div>
<div class="layout-note">Readiness-level rubric rendered as split matrices in PDF mode; the level key is repeated to preserve level-to-level comparison.</div>
<div class="continuation-label">Panel 1 of 2</div>
<table>
<thead><tr>
<th>Level</th>
<th>Definition</th>
<th>Observable Traits</th>
<th>Minimum Evidence</th>
</tr></thead>
<tbody>
{panel_one_rows}
</tbody></table>
<div class="continuation-label">Panel 2 of 2</div>
<table>
<thead><tr>
<th>Level</th>
<th>What It Does Not Prove</th>
<th>Source / Synthesis Note</th>
</tr></thead>
<tbody>
{panel_two_rows}
</tbody></table>
</div>
"""

    return READINESS_BLOCK_RE.sub(replace_block, html)


def prepare_html(config: WhitepaperConfig) -> Path:
    TMP_ROOT.mkdir(parents=True, exist_ok=True)
    html = config.html_path.read_text(encoding="utf-8", errors="ignore")
    html = re.sub(r"<nav class=\"web-edition-nav\"[\s\S]*?</nav>\s*", "", html, count=1)
    html = transform_readiness_levels_for_pdf(html)
    html = transform_t1101_for_pdf(html)
    html = transform_score_overview_for_pdf(html)
    html = transform_heatmap_for_pdf(html)
    html = transform_appendix_d_mro_mapping_for_pdf(html)
    html = transform_tables_for_pdf(html)
    html = html.replace("<body>", f'<body class="r8-{config.key}-pdf-profile">', 1)
    html = html.replace("</head>", f"{pdf_css(config)}\n</head>", 1)
    out = TMP_ROOT / config.tmp_name
    out.write_text(html, encoding="utf-8")
    return out


def render_pdf(config: WhitepaperConfig, output_pdf: Path | None = None) -> Path:
    tmp_html = prepare_html(config)
    pdf_path = output_pdf or config.pdf_path
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    if pdf_path.exists():
        pdf_path.unlink()
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
        f"--print-to-pdf={pdf_path}",
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
        if pdf_path.exists():
            size = pdf_path.stat().st_size
            stable_ticks = stable_ticks + 1 if size > 0 and size == last_size else 0
            last_size = size
            if stable_ticks >= 3 and pdf_page_count(pdf_path) > 0:
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
    if not pdf_path.exists() or pdf_page_count(pdf_path) <= 0:
        raise RuntimeError(f"Chrome PDF render failed\nSTDOUT:\n{stdout}\nSTDERR:\n{stderr}")
    patch_metadata(config, pdf_path)
    return pdf_path


def patch_metadata(config: WhitepaperConfig, pdf_path: Path) -> None:
    if PdfReader is None or PdfWriter is None:
        return
    reader = PdfReader(str(pdf_path))
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": config.title,
            "/Author": "Jearon Wong",
            "/Subject": config.subject,
            "/Keywords": config.keywords,
            "/Producer": "Headless Chrome whitepaper A4 PDF Print Profile; PyPDF2 metadata pass",
            "/Creator": "Whitepaper A4 PDF Print Profile renderer",
        }
    )
    tmp = pdf_path.with_suffix(".pdf.tmp")
    with tmp.open("wb") as handle:
        writer.write(handle)
    tmp.replace(pdf_path)


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Render public whitepaper PDFs from public HTML through the R8 A4 profile.")
    parser.add_argument("keys", nargs="*", help="Whitepaper keys to render: gaic, aiaawp, aiirwp. Defaults to GAIC and AIAAWP.")
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Optional internal proof output directory. When omitted, public PDF paths are replaced.",
    )
    args = parser.parse_args(argv[1:])
    keys = args.keys or ["gaic", "aiaawp"]
    rendered = {}
    for key in keys:
        if key not in CONFIGS:
            raise SystemExit(f"Unknown whitepaper key: {key}")
        config = CONFIGS[key]
        output_pdf = args.output_dir / config.pdf_path.name if args.output_dir else None
        pdf_path = render_pdf(config, output_pdf=output_pdf)
        rendered[key] = {
            "pdf": str(pdf_path.relative_to(REPO) if pdf_path.is_relative_to(REPO) else pdf_path),
            "pages": pdf_page_count(pdf_path),
            "bytes": pdf_path.stat().st_size,
        }
    print(json.dumps(rendered, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
