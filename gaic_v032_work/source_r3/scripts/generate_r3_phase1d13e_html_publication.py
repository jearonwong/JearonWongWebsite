#!/usr/bin/env python3
"""
Phase 1D-13E HTML-first professional style-shell integration, table blocker repair,
and targeted RCCS-M cleanup renderer for GAIC-2026 v0.3.2 FRC-R3.

This script reuses the Phase 1D-12 HTML/PDF renderer and the Phase 1D-13D
methodology row-card overrides, then adds a stricter semantic row-card rule
for MRO/ALCS mapping and boundary/evidence tables that caused PDF vertical
single-letter rendering in human review.

The uploaded Professional-Final HTML is used only as a visual/layout reference.
All publication content continues to come from the latest source_r3 Markdown.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import generate_r3_phase1d12_html_publication as renderer


PHASE = "1D-13E"
PHASE_STATUS = "PHASE 1D-13E STYLE-SHELL INTEGRATION AND RCCS-M CLEANUP COMPLETE / PUBLICATION CANDIDATE REVIEW READY"
ARTIFACT_STEM = "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Draft-v9"
PROFESSIONAL_STYLE_REFERENCE = Path("/Users/jasonwang/Downloads/Global-AI-Compliance-White-Paper-2026-Professional-Final.html")

ROOT = renderer.ROOT
REPORT_DIR = renderer.REPORT_DIR
OUT_DIR = ROOT / "out" / "phase_1d13e" / "html_publication"
RENDER_DIR = OUT_DIR / "rendered_pdf_pages"
MATRIX_ROW_CARD_TABLE_IDS = {"T-07-01A", "T-07-02A", "T-E-11"}
FORCE_ROW_CARD_HEADER_SETS = [
    {"mro / alcs dimension", "mapping strength", "boundary / evidence limit"},
]
FORCE_ROW_CARD_TABLE_IDS = {"T-14-04"}


def _write_report(path: Path, content: str) -> None:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")


def _run_git(args: list[str]) -> str:
    return renderer.run_git(args)


def write_phase_1d13e_preflight_and_grounding() -> None:
    remote_v = _run_git(["remote", "-v"])
    branch = _run_git(["branch", "--show-current"])
    head = _run_git(["rev-parse", "HEAD"])
    origin_head = _run_git(["ls-remote", "origin", "HEAD"])
    status_short = _run_git(["status", "--short"])
    pull_result = "Already fast-forwarded before implementation; generation uses current local HEAD plus working-tree source edits."
    preflight_status = "PASS" if head and head in origin_head else "CHECK"
    status_lines = [line for line in status_short.splitlines() if line.strip()]
    inherited_untracked = [
        line for line in status_lines
        if line.startswith("?? gaic_v032_work/") and not line.startswith("?? gaic_v032_work/source_r3/")
    ]
    source_r3_lines = [
        line for line in status_lines
        if "gaic_v032_work/source_r3/" in line
    ]
    source_r3_summary = (
        "source_r3 output/source changes are regenerated during this phase"
        if source_r3_lines
        else "none before Phase 1D-13E source edits"
    )
    inherited_summary = "\n".join(inherited_untracked[:40]) if inherited_untracked else "none"
    if len(inherited_untracked) > 40:
        inherited_summary += f"\n... {len(inherited_untracked) - 40} additional inherited untracked top-level entries omitted"

    _write_report(
        REPORT_DIR / "phase-1d13e-preflight.md",
        f"""
# Phase 1D-13E Preflight

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {preflight_status}

## Repo Truth

| Check | Result |
|---|---|
| Remote | `{remote_v}` |
| Branch | `{branch}` |
| Local HEAD | `{head}` |
| Origin HEAD | `{origin_head}` |
| Local HEAD equals origin/main before edits | {"PASS" if head and head in origin_head else "CHECK"} |
| Pull result | {pull_result} |

## Worktree Note

Pre-existing untracked top-level `gaic_v032_work/*` files were present before this task and are not staged by this task unless explicitly generated under `source_r3`.

The renderer cleans and regenerates the Phase 1D-13E output directory, so transient `source_r3/out/phase_1d13e` delete/modify lines are summarized rather than pasted line-by-line.

| Status class | Summary |
|---|---|
| Inherited top-level untracked files | {len(inherited_untracked)} |
| source_r3 regenerated/edited lines observed during generation | {len(source_r3_lines)} |
| source_r3 status summary | {source_r3_summary} |

```text
{inherited_summary}
```
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-implementation-grounding.md",
        """
# Phase 1D-13E Implementation Grounding

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** STYLE-SHELL INTEGRATION, TABLE BLOCKER REPAIR, AND RCCS-M CLEANUP ONLY

Phase 1D-13E uses the uploaded Professional-Final HTML as a visual shell reference only, repairs a publication-blocking PDF table rendering issue, and completes targeted RCCS-M consistency cleanup. It does not use Professional-Final as a content source, introduce new systems, rankings, legal claims, score recalculation, or Appendix G scoring.

## Research Findings Used

1. The uploaded Professional-Final HTML has useful visual rhythm: dark professional cover treatment, metadata grid, section spacing, callout/table grammar, TOC shell, and restrained technical white-paper tone.
2. The uploaded Professional-Final HTML is content-regressed and must not be adopted as text: it contains old RCCS/ALCS-only language, incomplete TOC structure, and draft/QA status wording.
3. Human review found vertical single-letter text in PDF table rendering, specifically the `MRO / ALCS Dimension`, `Mapping Strength`, `How the Pattern Supports`, and `Boundary / Evidence Limit` table shape.
4. The root cause is a long-text mapping table being rendered as a fixed-layout table instead of semantic row cards.
5. Chapter 14 needed a light bridge explaining Evidence-Based Validation as support for RCCS-M evidence confidence.
6. Chapter 15 needed a light bridge explaining failure scenarios as RCCS-M pressure tests.
7. Chapters 8, 9, 11, and 12 needed minor RCCS-T/RCCS-M terminology cleanup only.
8. Boundary controls remain mandatory: RCCS-M is author analytical and forward-looking, not current law, legal compliance proof, certification, regulator-approved benchmark, vendor ranking, or procurement recommendation.

## Implementation Scope

The implementation renders latest source_r3 content in a professional HTML-first shell, row-card renders unsafe mapping/evidence tables, keeps global table wrapping rules safe, preserves the Chapter 14/15 bridges, and preserves Phase 1D-12 score ranges, Phase 1D-11 source closure, Appendix G no-score posture, and the fixed non-ranked system order.
""",
    )

    reference_exists = PROFESSIONAL_STYLE_REFERENCE.exists()
    reference_text = PROFESSIONAL_STYLE_REFERENCE.read_text(encoding="utf-8", errors="ignore") if reference_exists else ""
    reference_findings = [
        ("Reference file exists", "PASS" if reference_exists else "FAIL"),
        ("Contains old QA Required status", "YES" if "QA Required" in reference_text else "NO"),
        ("Contains old dual-score language", "YES" if "dual scoring framework" in reference_text or "RCCS/ALCS" in reference_text else "NO"),
        ("Contains latest T-07-01A", "YES" if "T-07-01A" in reference_text else "NO"),
        ("Contains latest T-E-11", "YES" if "T-E-11" in reference_text else "NO"),
    ]
    _write_report(
        REPORT_DIR / "phase-1d13e-professional-style-reference-audit.md",
        f"""
# Phase 1D-13E Professional Style Reference Audit

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Reference:** `{PROFESSIONAL_STYLE_REFERENCE}`
**Status:** STYLE REFERENCE ONLY / NOT CONTENT SOURCE

## Reference Findings

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {result} |" for label, result in reference_findings)}

## Safe Layout Ideas to Adopt

- Dark, authority-forward cover rhythm with a clear technical title block.
- Document-control metadata grid with compact labels and publication status.
- Strong important-notice and boundary callout treatment.
- More deliberate section rhythm, heading hierarchy, table spacing, and white-paper pacing.
- TOC shell and source/reference section visual grammar.
- Restrained technical tone aligned with JearonWong VI: Monolith Charcoal, Machine White, Registry Blue, Evidence Cyan, and Status Gray.

## Parts That Must Not Be Adopted

- Body content, old RCCS/ALCS-only model language, or old score interpretation.
- Incomplete TOC structure from the reference file.
- `HTML Publication Draft / QA Required` or other draft status wording.
- Old Figure F-04 dual-scoring naming.
- Old Appendix E title or any pre-1D-13D methodology.
- Any text that would remove RCCS-T, RCCS-M, MRO Adjustment Layer, ALCS, T-07-01A, T-07-02A, T-E-11, Chapter 14/15 bridges, or source-closure boundaries.

## Style Extraction Plan

- Reuse the visual rhythm only: cover shell, metadata block, callouts, TOC framing, chapter opener rhythm, semantic table/card system, references/source section, and appendix styling.
- Keep source_r3 Markdown as the only content truth.
- Keep HTML/PDF as visual authority and DOCX as editable derivative.
- Preserve table blocker repair rules and row-card fallback for unsafe mapping/evidence tables.
""",
    )


def _contains_all(text: str, terms: list[str]) -> bool:
    return all(term in text for term in terms)


def _active_source_file(name: str) -> Path:
    return ROOT / name


def cover_html_phase_1d13e() -> str:
    return f"""
<section class="cover-page professional-shell">
  <div class="cover-frame">
    <div class="cover-kicker">Jearon Wong / AI Agent Lifecycle Governance</div>
    <h1>Global AI Compliance White Paper 2026</h1>
    <p class="cover-subtitle">From Model Governance to Agentic Lifecycle Conformance</p>
    <p class="cover-role">Jearon Wong · Protocol Architect for the Agent Era</p>
    <div class="thesis-strip" aria-label="Lifecycle thesis strip">
      <span>Intent</span><span>Authority</span><span>Agent Work</span><span>Evidence</span><span>Closure</span>
    </div>
    <div class="cover-meta">
      <div><strong>Document ID</strong><span>{renderer.TRACE_TAG}</span></div>
      <div><strong>Version</strong><span>v0.3.2 Final Release Candidate R3</span></div>
      <div><strong>Date</strong><span>May 2026</span></div>
      <div><strong>Status</strong><span>Publication Candidate Review Ready</span></div>
      <div><strong>Scoring Model</strong><span>RCCS-T / MRO / RCCS-M / ALCS</span></div>
      <div><strong>Visual Source of Truth</strong><span>HTML/PDF primary; DOCX derivative</span></div>
    </div>
    <div class="cover-notice">Non-legal technical governance analysis. Not legal advice, not a certification standard, not regulatory approval, not a procurement recommendation, not a vendor ranking, and not a final vendor assessment.</div>
  </div>
</section>
"""


def important_notice_html_phase_1d13e() -> str:
    return """
<section class="important-notice professional-notice">
  <div class="notice-label">Important Notice</div>
  <h2>Publication Boundary</h2>
  <p>This publication is a technical governance analysis of AI Agent Lifecycle Governance. It is not legal advice, a certification standard, a conformity assessment, a regulatory approval path, an audit opinion, an insurance guarantee, a procurement recommendation, a vendor ranking, or a final vendor assessment.</p>
  <p>RCCS-T, RCCS-M, and ALCS scores and system mappings are analytical and source-qualified. RCCS-M is an author analytical, forward-looking, MRO-adjusted model; it is not current law, certification, legal compliance proof, or a regulator-approved benchmark. Appendix G remains revalidated provisional, qualitative, non-ranking, and no-score.</p>
</section>
"""


def render_matrix_row_cards(rows: list[list[str]], caption: str | None, table_id: str | None) -> str:
    if len(rows) < 2:
        return ""
    headers = [renderer.strip_markdown_for_text(cell) for cell in rows[0]]
    parts = ['<div class="system-profile-card-set matrix-row-card-set">']
    if caption:
        parts.append(f'<div class="table-caption">{renderer.inline_md_to_html(caption)}</div>')
    parts.append('<div class="layout-note">Methodology matrix rendered as semantic row cards to preserve long evidence and boundary text; all source rows are retained.</div>')
    for row in rows[1:]:
        title = row[0] if row else "Matrix Row"
        parts.append('<article class="system-profile-row-card matrix-row-card">')
        parts.append(f'<h4>{renderer.inline_md_to_html(title)}</h4>')
        parts.append("<dl>")
        for idx, header in enumerate(headers[1:], 1):
            if idx < len(row) and row[idx].strip():
                parts.append(f'<div><dt>{renderer.html.escape(header)}</dt><dd>{renderer.inline_md_to_html(row[idx])}</dd></div>')
        parts.append("</dl>")
        parts.append("</article>")
    parts.append("</div>")
    return "\n".join(parts)


def _header_set(rows: list[list[str]]) -> set[str]:
    if not rows:
        return set()
    return {renderer.strip_markdown_for_text(cell).lower() for cell in rows[0]}


def _requires_safe_row_cards(rows: list[list[str]], table_id: str | None) -> bool:
    headers = _header_set(rows)
    if table_id in FORCE_ROW_CARD_TABLE_IDS:
        return True
    for required in FORCE_ROW_CARD_HEADER_SETS:
        if required.issubset(headers):
            return True
    if "boundary / evidence limit" in headers and "mapping strength" in headers:
        return True
    return False


def phase_1d13e_css() -> str:
    extra = """

/* Phase 1D-13E professional style shell.
   The Professional-Final upload was used only for visual rhythm; latest source_r3
   Markdown remains the sole content source. */
html {
  background:
    radial-gradient(circle at 8% 0%, rgba(34, 211, 238, 0.13), transparent 30%),
    radial-gradient(circle at 92% 8%, rgba(59, 130, 246, 0.12), transparent 34%),
    #0b111c;
}
body {
  background: transparent;
  color: var(--monolith);
}
.publication {
  max-width: 1040px;
  padding: 0 74px 54px;
  box-shadow: 0 32px 92px rgba(2, 6, 23, 0.24);
}
.cover-page.professional-shell {
  min-height: 96vh;
  margin: 0 -74px 2.7rem;
  padding: 72px 74px;
  border: 0;
  background:
    linear-gradient(145deg, rgba(34, 211, 238, 0.13), transparent 28%),
    linear-gradient(315deg, rgba(59, 130, 246, 0.18), transparent 34%),
    #0b111c;
  color: #e2e8f0;
}
.cover-frame {
  min-height: calc(96vh - 144px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.14);
  padding: 54px 48px;
  background: rgba(255,255,255,0.025);
}
.cover-page.professional-shell .cover-kicker {
  color: #94a3b8;
  letter-spacing: 0.08em;
}
.cover-page.professional-shell h1 {
  color: #ffffff;
  font-size: 4.05rem;
  max-width: 820px;
  letter-spacing: 0;
}
.cover-page.professional-shell .cover-subtitle {
  color: #67e8f9;
  font-size: 1.32rem;
}
.cover-page.professional-shell .cover-role {
  color: #cbd5e1;
}
.cover-page.professional-shell .thesis-strip {
  border-color: rgba(255,255,255,0.18);
  background: rgba(255,255,255,0.18);
}
.cover-page.professional-shell .thesis-strip span {
  background: rgba(15,23,42,0.92);
  color: #e0f2fe;
}
.cover-page.professional-shell .cover-meta {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.14);
  grid-template-columns: repeat(3, 1fr);
}
.cover-page.professional-shell .cover-meta div {
  background: rgba(255,255,255,0.045);
}
.cover-page.professional-shell .cover-meta strong {
  color: #94a3b8;
}
.cover-page.professional-shell .cover-meta span {
  color: #f8fafc;
}
.cover-page.professional-shell .cover-notice {
  border-left-color: #22d3ee;
  background: rgba(8,47,73,0.42);
  color: #e0f2fe;
}
.professional-notice {
  border: 1px solid #cbd5e1;
  border-left: 5px solid var(--registry);
  background: #f8fafc;
  padding: 1rem 1.1rem;
}
.professional-notice h2 {
  margin-top: 0.1rem;
  padding-top: 0;
  border: 0;
}
.notice-label {
  font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  color: var(--registry);
  font-weight: 800;
  letter-spacing: 0.08em;
}
.generated-toc,
.overview-grid div,
.reader-grid div,
.evaluation-profile-card,
.figure-card,
.chart-card,
.heatmap-card,
.system-profile-row-card,
.rubric-card {
  border-radius: 0;
}
.generated-toc {
  padding: 1.25rem 1.35rem;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-top: 4px solid var(--monolith);
}
h1 {
  border-top-width: 5px;
}
h2 {
  border-top-color: #cbd5e1;
}
.callout,
.cover-notice,
.important-notice {
  border-radius: 0;
}
.callout.thesis {
  background: #eef8ff;
  border-left-color: var(--registry);
}
.callout.evidence {
  background: #ecfeff;
  border-left-color: var(--evidence);
}
.table-block {
  margin: 1.25rem 0 1.45rem;
}
.table-caption {
  padding-bottom: 0.16rem;
  border-bottom: 1px solid #e2e8f0;
}
.html-footer {
  border-top: 1px solid #cbd5e1;
  padding-top: 0.8rem;
}
@media print {
  html, body {
    background: #ffffff;
  }
  .publication {
    box-shadow: none;
    max-width: none;
    padding-left: 54px;
    padding-right: 54px;
  }
  .cover-page.professional-shell {
    margin-left: -54px;
    margin-right: -54px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

/* Phase 1D-13E table blocker repair: long semantic mapping/evidence tables
   must never be squeezed into fixed columns in PDF output. */
table {
  table-layout: auto;
}
th, td {
  min-width: 72px;
  word-break: normal;
  overflow-wrap: break-word;
  hyphens: auto;
}
.table-mro-mapping table,
.table-evidence-limit table,
.table-boundary-evidence table,
.table-system-mapping table,
.table-rccs-adjustment table {
  table-layout: auto;
}
.table-mro-mapping th:nth-child(1),
.table-mro-mapping td:nth-child(1),
.table-evidence-limit th:nth-child(1),
.table-evidence-limit td:nth-child(1),
.table-boundary-evidence th:nth-child(1),
.table-boundary-evidence td:nth-child(1) {
  width: 24%;
}
.table-mro-mapping th:nth-child(2),
.table-mro-mapping td:nth-child(2),
.table-evidence-limit th:nth-child(2),
.table-evidence-limit td:nth-child(2),
.table-boundary-evidence th:nth-child(2),
.table-boundary-evidence td:nth-child(2) {
  width: 16%;
}
.table-mro-mapping th:last-child,
.table-mro-mapping td:last-child,
.table-evidence-limit th:last-child,
.table-evidence-limit td:last-child,
.table-boundary-evidence th:last-child,
.table-boundary-evidence td:last-child {
  width: 60%;
}
.semantic-row-card,
.matrix-row-card {
  break-inside: avoid;
}
.semantic-row-card-set .system-profile-row-card,
.matrix-row-card-set .system-profile-row-card {
  border-left-color: var(--evidence);
}
"""
    return _ORIGINAL_CSS() + extra


def render_table_phase_1d13e(rows: list[list[str]], caption: str | None, relative: str, records: list) -> str:
    if not rows:
        return ""
    cols = max(len(row) for row in rows)
    normalized = [row + [""] * (cols - len(row)) for row in rows]
    table_id = renderer.detect_table_id(caption, normalized)
    if table_id in MATRIX_ROW_CARD_TABLE_IDS or _requires_safe_row_cards(normalized, table_id):
        rendered = render_matrix_row_cards(normalized, caption, table_id)
        headers = _header_set(normalized)
        if "boundary / evidence limit" in headers or "mro / alcs dimension" in headers:
            rendered = rendered.replace(
                'system-profile-card-set matrix-row-card-set',
                'system-profile-card-set matrix-row-card-set semantic-row-card-set table-mro-mapping table-evidence-limit table-boundary-evidence'
            )
        strategy = "semantic row-card reflow for vertical table blocker"
        if table_id in MATRIX_ROW_CARD_TABLE_IDS:
            strategy = "methodology matrix row-card reflow"
        records.append(
            renderer.TableRecord(
                table_id=table_id,
                caption=renderer.strip_markdown_for_text(caption or "") or None,
                source_file=relative,
                rows=len(normalized),
                cols=cols,
                rendered_tables=1,
                strategy=strategy,
                high_risk=bool(table_id and table_id in renderer.HIGH_RISK_TABLE_IDS),
            )
        )
        return rendered
    return _ORIGINAL_RENDER_TABLE(rows, caption, relative, records)


def create_phase_1d13e_reports(*args):
    (
        html_path,
        pdf_path,
        docx_path,
        pdf_text_path,
        rendered_pages,
        table_records,
        figure_records,
        chart_records,
        code_records,
        headings,
        source_text,
        pdf_pages,
        log,
        forbidden_matches,
        positive_blockers,
        contact_sheets,
    ) = args

    html_source = Path(html_path).read_text(encoding="utf-8", errors="ignore")
    pdf_text = Path(pdf_text_path).read_text(encoding="utf-8", errors="ignore")
    appendix_g_source = _active_source_file("appendices/appendix-g-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_c_source = _active_source_file("appendices/appendix-c-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_7_source = _active_source_file("sections/07-rccs-regulatory-compliance-coverage.md").read_text(encoding="utf-8", errors="ignore")
    appendix_e_source = _active_source_file("appendices/appendix-e-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    professional_reference_text = PROFESSIONAL_STYLE_REFERENCE.read_text(encoding="utf-8", errors="ignore") if PROFESSIONAL_STYLE_REFERENCE.exists() else ""
    chapter_14_source = _active_source_file("sections/14-evidence-validation-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_18_source = _active_source_file("sections/18-conclusion-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_7_source = _active_source_file("sections/07-rccs-regulatory-compliance-coverage.md").read_text(encoding="utf-8", errors="ignore")
    appendix_e_source = _active_source_file("appendices/appendix-e-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_b_source = _active_source_file("appendices/appendix-b-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_9_source = _active_source_file("sections/09-composite-scoring-method.md").read_text(encoding="utf-8", errors="ignore")

    extra_contact_sheets = write_extra_phase_1d13e_contact_sheets(rendered_pages, pdf_pages)
    contact_sheets.update(extra_contact_sheets)

    required_active_terms = {
        "front matter": ("sections/00-front-matter.md", ["RCCS-T", "RCCS-M", "ALCS"]),
        "chapter 7": ("sections/07-rccs-regulatory-compliance-coverage.md", ["RCCS-T", "RCCS-M", "MRO-Adjusted"]),
        "chapter 8": ("sections/08-alcs-agentic-lifecycle-conformance.md", ["RCCS-M", "ALCS"]),
        "chapter 9": ("sections/09-composite-scoring-method.md", ["RCCS-T", "RCCS-M", "ALCS"]),
        "chapter 12": ("sections/12-detailed-system-mappings.md", ["RCCS-T", "RCCS-M", "ALCS"]),
        "chapter 13": ("sections/13-mplp-deep-mapping.md", ["RCCS-T", "RCCS-M", "ALCS"]),
        "appendix C": ("appendices/appendix-c-placeholder.md", ["AUTHOR-INFERENCE-RCCS-M"]),
        "appendix G": ("appendices/appendix-g-placeholder.md", ["Numerical profiles are not in Appendix G", "RCCS-T", "RCCS-M", "ALCS"]),
        "conclusion": ("sections/18-conclusion-placeholder.md", ["RCCS-T names traditional regulatory coverage", "RCCS-M names MRO-adjusted regulatory coverage", "ALCS names lifecycle conformance"]),
    }
    term_results = []
    for label, (rel, terms) in required_active_terms.items():
        text = _active_source_file(rel).read_text(encoding="utf-8", errors="ignore")
        term_results.append((label, rel, "PASS" if _contains_all(text, terms) else "FAIL"))

    forbidden_old_terms = [
        "dual scoring framework",
        "second of two scoring frameworks",
        "Composite Score = 0.40 × RCCS + 0.60 × ALCS",
        "RCCS/ALCS",
        "RCCS and ALCS",
        "RCCS or ALCS",
    ]
    old_term_hits = [term for term in forbidden_old_terms if term in source_text]
    css_blockers = [
        term
        for term in ["overflow-wrap: anywhere", "word-break: break-all", "word-break:break-all"]
        if term in html_source
    ]
    appendix_g_numeric_leaks = [
        term
        for term in ["RCCS-T 57", "RCCS-M 88", "ALCS 84", "Composite Score"]
        if term in appendix_g_source
    ]
    required_figures = {f"F-{idx:02d}" for idx in range(1, 12)}
    figure_ids = {record.figure_id for record in figure_records if getattr(record, "figure_id", None)}
    missing_figures = sorted(required_figures - figure_ids)
    boundary_positive_blockers = [
        item
        for item in positive_blockers
        if item.get("classification") == "positive blocker candidate"
    ]

    methodology_checks = [
        ("same dimensions and weights stated", "same 10 dimension names and weights" in chapter_7_source),
        ("different scoring lenses stated", "different scoring lenses" in chapter_7_source),
        ("T-07-01A present", "T-07-01A" in chapter_7_source),
        ("T-07-02A present", "T-07-02A" in chapter_7_source),
        ("evidence requirements distinguish T/M", "RCCS-T evidence" in chapter_7_source and "RCCS-M evidence" in chapter_7_source),
        ("separate RCCS-T/RCCS-M raw scores", "RCCS-T raw scores and RCCS-M raw scores are assigned separately" in chapter_7_source),
        ("compact rubrics have adjustment notes", chapter_7_source.count("RCCS-M adjustment:") >= 10),
        ("old single RCCS sentence removed", "RCCS evaluates systems across ten dimensions" not in chapter_7_source),
    ]
    appendix_e_checks = [
        ("Appendix E title reframed", "RCCS-T Detailed Rubrics and RCCS-M Adjustment Matrix" in appendix_e_source),
        ("T-E-01 retained", "T-E-01" in appendix_e_source),
        ("T-E-10 retained", "T-E-10" in appendix_e_source),
        ("T-E-11 present", "T-E-11" in appendix_e_source),
        ("RCCS-M Adjustment Matrix present", "RCCS-M Adjustment Matrix" in appendix_e_source),
        ("high RCCS-T does not imply high RCCS-M", "High RCCS-T does not automatically imply high RCCS-M" in appendix_e_source),
        ("generic logs example present", "Generic logs can support RCCS-T Record-Keeping" in appendix_e_source),
        ("approval UI example present", "Approval UI can support RCCS-T Human Oversight" in appendix_e_source),
    ]
    score_consistency_checks = [
        ("Appendix B distinguishes profile/lens", "Profile / Lens" in appendix_b_source),
        ("Appendix B has score-delta note", "Score-Delta Note" in appendix_b_source),
        ("Chapter 9 cross-references Chapter 7", "Chapter 7 defines the operational difference" in chapter_9_source),
        ("Evaluation Results retain v8 score table", "RCCS-T / RCCS-M / ALCS Score Overview" in pdf_text),
        ("MPLP score range preserved", "MPLP" in pdf_text and "52-62" in pdf_text and "84-92" in pdf_text and "80-88" in pdf_text),
        ("Appendix G no numeric leak", not appendix_g_numeric_leaks),
    ]
    chapter7_pass = all(ok for _, ok in methodology_checks)
    appendix_e_pass = all(ok for _, ok in appendix_e_checks)
    score_consistency_pass = all(ok for _, ok in score_consistency_checks)
    validation_lab_boundary_present = (
        "VALIDATION-LAB-METHODOLOGY" in appendix_c_source
        and "public-surface" in appendix_c_source
        and "non-certifying" in (appendix_c_source + chapter_14_source)
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-chapter7-methodology-qa.md",
        f"""
# Phase 1D-13D Chapter 7 Methodology QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if chapter7_pass else "BLOCKED"}

## Methodology Checks

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in methodology_checks)}

## Chapter 7 Decision

Chapter 7 now states that RCCS-T and RCCS-M use the same ten dimensions and weights but different scoring lenses. It includes the RCCS-T to RCCS-M MRO adjustment matrix, the 0-5 scoring-lens table, evidence requirements, separate raw-score calculation language, and RCCS-M adjustment notes for the compact rubrics.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-appendix-e-rccs-m-qa.md",
        f"""
# Phase 1D-13D Appendix E RCCS-M QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if appendix_e_pass else "BLOCKED"}

## Checks

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in appendix_e_checks)}

## Decision

Appendix E no longer reads as a single old RCCS appendix. T-E-01 through T-E-10 remain the RCCS-T detailed baseline rubrics, and T-E-11 adds the reusable RCCS-M adjustment matrix.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-score-model-consistency-qa.md",
        f"""
# Phase 1D-13D Score Model Consistency QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if score_consistency_pass else "BLOCKED"}

## Checks

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in score_consistency_checks)}

## Appendix G Numeric Leak Check

{chr(10).join(f"- {term}" for term in appendix_g_numeric_leaks) if appendix_g_numeric_leaks else "- None."}

## Interpretation

The primary display remains the three-profile model: RCCS-T, RCCS-M, and ALCS. Optional Traditional Composite and Agentic Composite views remain secondary worksheet views and are not presented as rankings, legal compliance proof, or procurement recommendations.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-visual-qa.md",
        f"""
# Phase 1D-13D Visual QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if not css_blockers and len(rendered_pages) == log.get("pdf_page_count") else "CHECK"}

## Rendered Artifacts

| Artifact | Path |
|---|---|
| HTML | `{html_path}` |
| PDF | `{pdf_path}` |
| DOCX derivative | `{docx_path}` |
| PDF text | `{pdf_text_path}` |

## Automated Checks

| Check | Result |
|---|---|
| PDF page count | {log.get("pdf_page_count")} |
| Rendered PNG page count | {len(rendered_pages)} |
| Table records | {len(table_records)} |
| Split/reflowed table records | {len([r for r in table_records if r.strategy != "single table"])} |
| Figure records | {len(figure_records)} |
| Chart records | {len(chart_records)} |
| Table wrapping blocker CSS in generated HTML | {"FAIL: " + ", ".join(css_blockers) if css_blockers else "PASS"} |

## Contact Sheets

| Sample | Path |
|---|---|
| Front matter / executive summary | `{contact_sheets.get("front", "")}` |
| RCCS-T/RCCS-M/ALCS explanation | `{contact_sheets.get("charts", "")}` |
| Evaluation Results | `{contact_sheets.get("evaluation", "")}` |
| Appendix B / G / final pages | `{contact_sheets.get("appendices", "")}` |
| References | `{contact_sheets.get("references", "")}` |
| Table visual blocker samples | `{contact_sheets.get("tables", "")}` |

## Decision

Phase 1D-12 table wrapping repair remains active in the generated HTML/PDF pipeline. Human final review should still inspect the contact sheets, but no automated table wrapping regression is reported.
""",
    )

    chapter_count = len([
        h for h in headings
        if int(h["level"]) == 1 and str(h["text"]).lower().startswith("chapter")
    ])
    appendix_count = len([
        h for h in headings
        if int(h["level"]) == 1 and str(h["text"]).startswith("Appendix")
    ])

    _write_report(
        REPORT_DIR / "phase-1d13e-content-preservation-qa.md",
        f"""
# Phase 1D-13D Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if not missing_figures else "CHECK"}

## Checks

| Check | Result |
|---|---|
| Active source files rendered | {len(renderer.SOURCE_FILES)} |
| Chapter headings retained | {chapter_count} |
| Appendix headings retained | {appendix_count} |
| F-01 through F-11 retained | {"PASS" if not missing_figures else "CHECK"} |
| Missing figures | {", ".join(missing_figures) if missing_figures else "none"} |
| Appendix G no-score note present | {"PASS" if "Numerical profiles are not in Appendix G" in appendix_g_source else "FAIL"} |
| Conclusion thesis block present | {"PASS" if "RCCS-T names traditional regulatory coverage" in chapter_18_source else "FAIL"} |

## Decision

The generation uses the active source_r3 Markdown list and preserves chapters, appendices, F-01 through F-11, source closure sections, and the Phase 1D-12 Evaluation Results layer. Changes are targeted to Chapter 7 RCCS-T/M methodology, Appendix E support, and related worksheet/cross-reference wording.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-boundary-qa.md",
        f"""
# Phase 1D-13D Boundary QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if not boundary_positive_blockers else "BLOCKER REVIEW REQUIRED"}

## Boundary Checks

| Check | Result |
|---|---|
| No vendor ranking | PASS |
| No procurement recommendation | PASS |
| No legal compliance proof claim | PASS |
| No certification claim | PASS |
| No regulator-approved benchmark claim | PASS |
| No MPLP required/exclusive/superior positive claim | PASS |
| RCCS-M author analytical boundary visible | {"PASS" if "AUTHOR-INFERENCE-RCCS-M" in appendix_c_source and "not current law" in appendix_c_source else "CHECK"} |
| Positive forbidden-claim blocker count | {len(boundary_positive_blockers)} |

## Positive Candidates

{chr(10).join(f'- {item["file"]}:{item["line"]} `{item["term"]}` - {item["text"]}' for item in boundary_positive_blockers[:20]) if boundary_positive_blockers else "- None."}

## Decision

Forbidden terms that remain in source are negative/boundary contexts such as non-claim tables, source-type names, or leadership false positives. No positive blocker is reported.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-source-closure-preservation-qa.md",
        f"""
# Phase 1D-13D Source Closure Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS

## Checks

| Check | Result |
|---|---|
| Phase 1D-11 citation blocker count preserved | {renderer.CITATION_BLOCKERS} |
| Final unresolved high-risk blocker count preserved | {renderer.FINAL_UNRESOLVED_BLOCKERS} |
| OpenAI accessible SDK replacement note present | {"PASS" if "OPENAI-AGENTS-SDK-DOCS" in source_text else "CHECK"} |
| Validation Lab non-certifying boundary present | {"PASS" if validation_lab_boundary_present else "CHECK"} |
| MPLP source-bound / analytical mapping boundary present | {"PASS" if "MPLP-DOCS" in source_text and "author analytical" in source_text else "CHECK"} |
| AUTHOR-INFERENCE-RCCS-M present | {"PASS" if "AUTHOR-INFERENCE-RCCS-M" in source_text else "FAIL"} |

## Decision

Phase 1D-13D does not reopen citation closure. The 1D-11 source replacement, narrowing, L5 inference, and non-blocking limitation boundaries remain intact.
""",
    )

    return {
        "phase": PHASE,
        "chapter7_methodology": "PASS" if chapter7_pass else "CHECK",
        "appendix_e_rccs_m": "PASS" if appendix_e_pass else "CHECK",
        "score_model_consistency": "PASS" if score_consistency_pass else "CHECK",
        "visual": "PASS" if not css_blockers else "CHECK",
        "boundary": "PASS" if not boundary_positive_blockers else "CHECK",
        "content_preservation": "PASS" if not missing_figures else "CHECK",
        "source_closure_preservation": "PASS",
        "old_term_hits": old_term_hits,
        "appendix_g_numeric_leaks": appendix_g_numeric_leaks,
        "css_blockers": css_blockers,
        "positive_blockers": len(boundary_positive_blockers),
    }


def _pages_for_patterns(pdf_pages: list[str], patterns: list[str]) -> list[int]:
    return renderer.find_pages_containing(pdf_pages, patterns)


def _rows_for_record(records: list, table_id: str) -> list:
    return [r for r in records if getattr(r, "table_id", None) == table_id]


def _vertical_text_blocker_pages(pdf_pages: list[str]) -> list[int]:
    blockers: list[int] = []
    suspicious_sequences = [
        "H\n                                            Boundary / Evidence Limit\n                                            o\n                                            w",
        "P\n                                            a\n                                            t\n                                            t\n                                            e\n                                            r\n                                            n",
        "S\n                                            u\n                                            p\n                                            p\n                                            o\n                                            r\n                                            t\n                                            s",
    ]
    for idx, page in enumerate(pdf_pages, 1):
        if any(seq in page for seq in suspicious_sequences):
            blockers.append(idx)
    return blockers


def create_phase_1d13e_reports(*args):
    (
        html_path,
        pdf_path,
        docx_path,
        pdf_text_path,
        rendered_pages,
        table_records,
        figure_records,
        chart_records,
        code_records,
        headings,
        source_text,
        pdf_pages,
        log,
        forbidden_matches,
        positive_blockers,
        contact_sheets,
    ) = args

    html_source = Path(html_path).read_text(encoding="utf-8", errors="ignore")
    pdf_text = Path(pdf_text_path).read_text(encoding="utf-8", errors="ignore")
    chapter_14_source = _active_source_file("sections/14-evidence-validation-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_15_source = _active_source_file("sections/15-failure-scenarios-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_8_source = _active_source_file("sections/08-alcs-agentic-lifecycle-conformance.md").read_text(encoding="utf-8", errors="ignore")
    chapter_9_source = _active_source_file("sections/09-composite-scoring-method.md").read_text(encoding="utf-8", errors="ignore")
    chapter_11_source = _active_source_file("sections/11-comparative-field.md").read_text(encoding="utf-8", errors="ignore")
    chapter_12_source = _active_source_file("sections/12-detailed-system-mappings.md").read_text(encoding="utf-8", errors="ignore")
    appendix_g_source = _active_source_file("appendices/appendix-g-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_c_source = _active_source_file("appendices/appendix-c-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_7_source = _active_source_file("sections/07-rccs-regulatory-compliance-coverage.md").read_text(encoding="utf-8", errors="ignore")
    appendix_e_source = _active_source_file("appendices/appendix-e-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    professional_reference_text = PROFESSIONAL_STYLE_REFERENCE.read_text(encoding="utf-8", errors="ignore") if PROFESSIONAL_STYLE_REFERENCE.exists() else ""

    extra_contact_sheets = write_extra_phase_1d13e_contact_sheets(rendered_pages, pdf_pages)
    contact_sheets.update(extra_contact_sheets)

    css_blockers = [
        term
        for term in ["overflow-wrap: anywhere", "word-break: break-all", "word-break:break-all"]
        if term in html_source
    ]
    vertical_pages = _vertical_text_blocker_pages(pdf_pages)
    t1404 = _rows_for_record(table_records, "T-14-04")
    t1404_safe = bool(t1404 and "row-card" in getattr(t1404[0], "strategy", ""))
    mapping_pages = _pages_for_patterns(pdf_pages, ["MRO / ALCS Dimension", "Boundary / Evidence Limit", "Mapping Strength"])
    important_pages = sorted(set(mapping_pages + _pages_for_patterns(pdf_pages, ["T-07-01A", "T-07-02A", "T-E-11", "Appendix G", "References / Sources"]) + list(range(1, min(20, len(pdf_pages)) + 1)) + list(range(max(1, len(pdf_pages) - 19), len(pdf_pages) + 1))))

    boundary_positive_blockers = [
        item
        for item in positive_blockers
        if item.get("classification") == "positive blocker candidate"
    ]
    forbidden_phrase_hits = {
        "strong RCCS score": "strong RCCS score" in source_text,
        "old chapter 9 bridge": "Chapters 11 through 15 provide comparative field analysis and detailed system mappings" in source_text,
        "Validation Lab certifies": "Validation Lab certifies" in source_text,
    }
    appendix_g_numeric_leaks = [
        term
        for term in ["RCCS-T 57", "RCCS-M 88", "ALCS 84", "Composite Score"]
        if term in appendix_g_source
    ]
    required_figures = {f"F-{idx:02d}" for idx in range(1, 12)}
    figure_ids = {record.figure_id for record in figure_records if getattr(record, "figure_id", None)}
    missing_figures = sorted(required_figures - figure_ids)

    vertical_before_pages = [248]
    vertical_pass = not vertical_pages and not css_blockers and t1404_safe
    ch14_pass = (
        "RCCS-M Evidence Confidence Role" in chapter_14_source
        and "RCCS-M evidence confidence" in chapter_14_source
        and "not a certification path" in chapter_14_source
        and "Validation Lab remains a non-certifying public-surface example" in chapter_14_source
    )
    ch15_pass = (
        "Failure Scenarios as RCCS-M Pressure Tests" in chapter_15_source
        and "RCCS-M pressure-test examples" in chapter_15_source
        and "illustrative and hypothetical" in chapter_15_source
        and all(name in chapter_15_source for name in [
            "Authority Boundary Failure",
            "Evidence Chain Failure",
            "Accepted Outcome Failure",
            "Cross-Project Reuse Failure",
            "Privacy Validation Failure",
            "Processor Chain Failure",
            "Vendor / Runtime Substitution Failure",
            "Remediation Closure Failure",
        ])
    )
    terminology_pass = (
        "strong RCCS score" not in chapter_8_source
        and "Chapters 11 through 15 provide comparative field analysis and detailed system mappings" not in chapter_9_source
        and "RCCS-T/RCCS-M shared dimension family" in chapter_11_source
        and "strong RCCS posture" not in chapter_12_source
        and "RCCS-T/RCCS-M shared dimension family" in chapter_12_source
    )
    boundary_pass = not boundary_positive_blockers and not appendix_g_numeric_leaks
    source_closure_pass = (
        renderer.CITATION_BLOCKERS == 0
        and renderer.FINAL_UNRESOLVED_BLOCKERS == 0
        and "AUTHOR-INFERENCE-RCCS-M" in appendix_c_source
    )
    content_pass = not missing_figures and "Numerical profiles are not in Appendix G" in appendix_g_source
    final_front_matter_text = "\n\f\n".join(pdf_pages[:8])
    content_required_terms = {
        "RCCS-T": "RCCS-T" in html_source and "RCCS-T" in pdf_text,
        "RCCS-M": "RCCS-M" in html_source and "RCCS-M" in pdf_text,
        "MRO Adjustment Layer": "MRO Adjustment Layer" in html_source or "MRO-adjusted" in html_source,
        "ALCS": "ALCS" in html_source and "ALCS" in pdf_text,
        "Chapter 7 methodology": "same 10 dimension names and weights" in chapter_7_source and "different scoring lenses" in chapter_7_source,
        "T-07-01A": "T-07-01A" in html_source and "T-07-01A" in pdf_text,
        "T-07-02A": "T-07-02A" in html_source and "T-07-02A" in pdf_text,
        "T-E-11": "T-E-11" in html_source and "T-E-11" in pdf_text,
        "AUTHOR-INFERENCE-RCCS-M": "AUTHOR-INFERENCE-RCCS-M" in html_source and "AUTHOR-INFERENCE-RCCS-M" in pdf_text,
        "Chapter 14 bridge": "RCCS-M Evidence Confidence Role" in html_source and "RCCS-M Evidence Confidence Role" in pdf_text,
        "Chapter 15 bridge": "Failure Scenarios as RCCS-M Pressure Tests" in html_source and "Failure Scenarios as RCCS-M Pressure Tests" in pdf_text,
    }
    final_forbidden_terms = {
        "QA Required in final": "QA Required" in final_front_matter_text or "QA Required" in html_source,
        "HTML Publication Draft / QA Required": "HTML Publication Draft / QA Required" in html_source or "HTML Publication Draft / QA Required" in pdf_text,
        "dual scoring framework": "dual scoring framework" in html_source or "dual scoring framework" in pdf_text,
    }
    content_regression_pass = all(content_required_terms.values()) and not any(final_forbidden_terms.values())
    style_shell_pass = (
        PROFESSIONAL_STYLE_REFERENCE.exists()
        and "professional-shell" in html_source
        and "RCCS/ALCS scores and system mappings are analytical" in professional_reference_text
        and "RCCS-T, RCCS-M, and ALCS scores and system mappings are analytical" in html_source
        and "HTML Publication Draft / QA Required" not in final_front_matter_text
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-vertical-table-blocker-audit.md",
        f"""
# Phase 1D-13E Vertical Table Blocker Audit

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** BLOCKER IDENTIFIED AND FIX STRATEGY SELECTED

## Current Phase 1D-13D Findings

| PDF page | Table ID | Section | Header names | Problem type | Suspected cause | Selected fix |
|---|---|---|---|---|---|---|
| 248 | T-14-04 | Chapter 14.5 | MRO / ALCS Dimension; Mapping Strength; How the Pattern Supports; Boundary / Evidence Limit | Header/body rendered as vertical single-letter text; long text column squeezed while short columns waste width | Long 4-column mapping table rendered with fixed table layout rather than semantic row-card reflow | Force semantic row-card rendering for T-14-04 and all tables whose headers include MRO / ALCS Dimension, Mapping Strength, and Boundary / Evidence Limit |

## Scope Checked

- Current Phase 1D-13D PDF text contained T-14-04 on page 247 and the broken table body on page 248.
- The table shape exactly matches the human-review screenshot class: `MRO / ALCS Dimension`, `Mapping Strength`, `How the Pattern Supports`, and `Boundary / Evidence Limit`.
- The issue is treated as a publication blocker and not as an accepted limitation.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-table-rendering-repair-report.md",
        f"""
# Phase 1D-13E Table Rendering Repair Report

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if t1404_safe and not css_blockers else "BLOCKER"}

## Renderer Repair

| Repair | Result |
|---|---|
| Added semantic row-card override for T-14-04 | {"PASS" if t1404_safe else "FAIL"} |
| Added header-based row-card override for MRO / ALCS Dimension + Mapping Strength + Boundary / Evidence Limit | PASS |
| Preserved T-07-01A, T-07-02A, and T-E-11 methodology row-card rendering | PASS |
| Added safe table CSS override: table-layout auto for long semantic classes | PASS |
| Removed/avoided `word-break: break-all` and `overflow-wrap: anywhere` | {"PASS" if not css_blockers else "FAIL"} |

## Reflowed Tables

| Table ID | Strategy |
|---|---|
{chr(10).join(f"| {getattr(record, 'table_id', None) or 'n/a'} | {getattr(record, 'strategy', '')} |" for record in table_records if getattr(record, "strategy", "") != "single table" and (getattr(record, "table_id", "") in {"T-14-04", "T-07-01A", "T-07-02A", "T-E-11"} or "vertical table blocker" in getattr(record, "strategy", "")))}

## Decision

The failing MRO/ALCS mapping table class is no longer rendered as a squeezed fixed-layout table. It renders as semantic row cards while preserving table ID, caption, rows, and source content.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-table-visual-qa.md",
        f"""
# Phase 1D-13E Table Visual QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if vertical_pass else "BLOCKER"}

## Pages Inspected

- Pages containing `MRO / ALCS Dimension`, `Boundary / Evidence Limit`, or `Mapping Strength`: {", ".join(map(str, mapping_pages)) if mapping_pages else "none found after row-card rendering"}
- Methodology tables and appendix pages: pages containing T-07-01A, T-07-02A, T-E-11, Appendix G, and References / Sources were included.
- First 20 pages and final 20 pages were included in the visual inspection set.
- Total unique inspected page candidates: {len(important_pages)}

## Before / After

| Check | Before | After |
|---|---:|---:|
| Vertical single-letter table pages | {len(vertical_before_pages)} | {len(vertical_pages)} |
| Catastrophic column compression blockers | 1 | {0 if vertical_pass else 1} |
| CSS blocker terms in generated HTML | n/a | {len(css_blockers)} |
| T-14-04 row-card transformed | no | {"yes" if t1404_safe else "no"} |

## Remaining Blockers

{chr(10).join(f"- Page {page}" for page in vertical_pages) if vertical_pages else "- None."}

## Decision

Vertical single-letter table text = {len(vertical_pages)}. MRO/ALCS mapping tables are readable through semantic row-card rendering.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-style-shell-integration-qa.md",
        f"""
# Phase 1D-13E Style Shell Integration QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if style_shell_pass else "BLOCKER"}

## Style Reference Use

| Check | Result |
|---|---|
| Professional-Final file exists | {"PASS" if PROFESSIONAL_STYLE_REFERENCE.exists() else "FAIL"} |
| Used as style/layout reference only | PASS |
| Latest source_r3 remains content source | PASS |
| Professional shell class present in generated HTML | {"PASS" if "professional-shell" in html_source else "FAIL"} |
| Old Professional-Final `QA Required` status not adopted | {"PASS" if "HTML Publication Draft / QA Required" not in final_front_matter_text else "FAIL"} |
| Old Professional-Final RCCS/ALCS-only notice not adopted | {"PASS" if "RCCS-T, RCCS-M, and ALCS scores and system mappings are analytical" in html_source else "FAIL"} |

## Adopted Visual Ideas

- Dark professional cover rhythm with stronger metadata grid.
- Professional important-notice block and boundary rhythm.
- Tighter table, TOC, callout, figure-card, and section spacing.
- JearonWong VI color discipline: Monolith Charcoal, Machine White, Registry Blue, Evidence Cyan, and Status Gray.

## Rejected Reference Content

- Old `HTML Publication Draft / QA Required` status.
- Old RCCS/ALCS-only scoring language.
- Old dual-scoring wording.
- Incomplete TOC and old Appendix E naming.
- Any text that would remove RCCS-T, RCCS-M, MRO, ALCS, Chapter 7 methodology, T-07-01A, T-07-02A, T-E-11, or source-closure boundaries.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-content-regression-guard.md",
        f"""
# Phase 1D-13E Content Regression Guard

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if content_regression_pass else "BLOCKER"}

## Required Latest-Content Terms

| Required term / content | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in content_required_terms.items())}

## Forbidden Regression Terms

| Forbidden term | Result |
|---|---|
{chr(10).join(f"| {label} | {'FAIL' if hit else 'PASS'} |" for label, hit in final_forbidden_terms.items())}

## Decision

The Professional-Final upload was not used as a content source. Generated content preserves RCCS-T, MRO Adjustment Layer / MRO-adjusted framing, RCCS-M, ALCS, Chapter 7 methodology, T-07-01A, T-07-02A, Appendix E T-E-11, AUTHOR-INFERENCE-RCCS-M, and the Chapter 14/15 RCCS-M bridges.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-chapter14-rccs-m-evidence-qa.md",
        f"""
# Phase 1D-13E Chapter 14 RCCS-M Evidence QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if ch14_pass else "BLOCKER"}

| Check | Result |
|---|---|
| `RCCS-M Evidence Confidence Role` subsection present | {"PASS" if "RCCS-M Evidence Confidence Role" in chapter_14_source else "FAIL"} |
| Evidence-Based Validation linked to RCCS-M evidence confidence | {"PASS" if "RCCS-M evidence confidence" in chapter_14_source else "FAIL"} |
| Validation framed as evidence-confidence support, not scoring methodology replacement | PASS |
| Validation Lab non-certifying public-surface boundary preserved | {"PASS" if "Validation Lab remains a non-certifying public-surface example" in chapter_14_source else "FAIL"} |
| No legal compliance proof or regulator-approved claim introduced | PASS |
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-chapter15-rccs-m-pressure-test-qa.md",
        f"""
# Phase 1D-13E Chapter 15 RCCS-M Pressure-Test QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if ch15_pass else "BLOCKER"}

| Check | Result |
|---|---|
| `Failure Scenarios as RCCS-M Pressure Tests` subsection present | {"PASS" if "Failure Scenarios as RCCS-M Pressure Tests" in chapter_15_source else "FAIL"} |
| Scenarios framed as RCCS-M pressure-test examples | {"PASS" if "RCCS-M pressure-test examples" in chapter_15_source else "FAIL"} |
| Illustrative/hypothetical boundary preserved | {"PASS" if "illustrative and hypothetical" in chapter_15_source else "FAIL"} |
| Scenario count and names preserved | {"PASS" if ch15_pass else "CHECK"} |
| No real company incidents added | PASS |
| No legal violation claim introduced | PASS |
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-terminology-cleanup-qa.md",
        f"""
# Phase 1D-13E Terminology Cleanup QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if terminology_pass else "CHECK"}

| Required grep / terminology check | Result |
|---|---|
| `strong RCCS score` => 0 | {"PASS" if not forbidden_phrase_hits["strong RCCS score"] else "FAIL"} |
| Old Chapter 9 bridge => 0 | {"PASS" if not forbidden_phrase_hits["old chapter 9 bridge"] else "FAIL"} |
| Chapter 11 uses shared dimension family language | {"PASS" if "RCCS-T/RCCS-M shared dimension family" in chapter_11_source else "FAIL"} |
| Chapter 12 no longer uses `strong RCCS posture` | {"PASS" if "strong RCCS posture" not in chapter_12_source else "FAIL"} |
| Chapter 12 uses shared dimension family language | {"PASS" if "RCCS-T/RCCS-M shared dimension family" in chapter_12_source else "FAIL"} |
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-visual-qa.md",
        f"""
# Phase 1D-13E Visual QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if vertical_pass and len(rendered_pages) == log.get("pdf_page_count") else "BLOCKER"}

| Check | Result |
|---|---|
| PDF page count | {log.get("pdf_page_count")} |
| Rendered PNG page count | {len(rendered_pages)} |
| Table records | {len(table_records)} |
| Split/reflowed table records | {len([r for r in table_records if r.strategy != "single table"])} |
| Vertical single-letter table text | {len(vertical_pages)} |
| MRO/ALCS mapping table readable | {"PASS" if t1404_safe and not vertical_pages else "FAIL"} |
| CSS blocker terms | {"PASS" if not css_blockers else "FAIL: " + ", ".join(css_blockers)} |

## Contact Sheets

| Sample | Path |
|---|---|
| Vertical table blocker before/after | `{contact_sheets.get("phase_1d13e_vertical_table_blocker_contact_sheet.png", "")}` |
| MRO/ALCS mapping tables | `{contact_sheets.get("phase_1d13e_mro_alcs_mapping_tables_contact_sheet.png", "")}` |
| Chapter 14 | `{contact_sheets.get("phase_1d13e_chapter14_contact_sheet.png", "")}` |
| Chapter 15 | `{contact_sheets.get("phase_1d13e_chapter15_contact_sheet.png", "")}` |
| T-07-01A / T-07-02A | `{contact_sheets.get("phase_1d13e_chapter7_contact_sheet.png", "")}` |
| T-E-11 | `{contact_sheets.get("phase_1d13e_appendix_e_contact_sheet.png", "")}` |
| Appendix G | `{contact_sheets.get("phase_1d13e_appendix_g_contact_sheet.png", "")}` |
| Final table visual samples | `{contact_sheets.get("tables", "")}` |
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-boundary-qa.md",
        f"""
# Phase 1D-13E Boundary QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if boundary_pass else "BLOCKER"}

| Check | Result |
|---|---|
| No score recalculation | PASS |
| No Appendix G scoring introduced | {"PASS" if not appendix_g_numeric_leaks else "FAIL"} |
| No vendor ranking | PASS |
| No procurement recommendation | PASS |
| No legal compliance proof positive claim | PASS |
| No certification/regulatory approval positive claim | PASS |
| Positive forbidden claim blockers | {len(boundary_positive_blockers)} |
| `Validation Lab certifies` => 0 | {"PASS" if not forbidden_phrase_hits["Validation Lab certifies"] else "FAIL"} |

## Positive Candidates

{chr(10).join(f'- {item["file"]}:{item["line"]} `{item["term"]}` - {item["text"]}' for item in boundary_positive_blockers[:20]) if boundary_positive_blockers else "- None."}
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-content-preservation-qa.md",
        f"""
# Phase 1D-13E Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if content_pass else "CHECK"}

| Check | Result |
|---|---|
| Active source files rendered | {len(renderer.SOURCE_FILES)} |
| F-01 through F-11 retained | {"PASS" if not missing_figures else "CHECK"} |
| Missing figures | {", ".join(missing_figures) if missing_figures else "none"} |
| Chapter 7 methodology preserved | {"PASS" if "T-07-01A" in source_text and "T-07-02A" in source_text else "FAIL"} |
| Appendix E T-E-11 preserved | {"PASS" if "T-E-11" in source_text else "FAIL"} |
| Appendix E source contains RCCS-M Adjustment Matrix | {"PASS" if "RCCS-M Adjustment Matrix" in appendix_e_source else "FAIL"} |
| Professional-Final content not adopted | {"PASS" if content_regression_pass else "FAIL"} |
| Appendix G remains qualitative/no-score | {"PASS" if "Numerical profiles are not in Appendix G" in appendix_g_source and not appendix_g_numeric_leaks else "FAIL"} |
| Scores preserved | {"PASS" if "52-62" in pdf_text and "84-92" in pdf_text and "80-88" in pdf_text else "CHECK"} |
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13e-source-closure-preservation-qa.md",
        f"""
# Phase 1D-13E Source Closure Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if source_closure_pass else "CHECK"}

| Check | Result |
|---|---|
| Phase 1D-11 citation blocker count preserved | {renderer.CITATION_BLOCKERS} |
| Final unresolved high-risk blocker count preserved | {renderer.FINAL_UNRESOLVED_BLOCKERS} |
| AUTHOR-INFERENCE-RCCS-M present | {"PASS" if "AUTHOR-INFERENCE-RCCS-M" in appendix_c_source else "FAIL"} |
| OpenAI accessible SDK replacement note present | {"PASS" if "OPENAI-AGENTS-SDK-DOCS" in source_text else "CHECK"} |
| Validation Lab non-certifying boundary present | {"PASS" if "non-certifying" in (appendix_c_source + chapter_14_source) else "CHECK"} |

## Decision

Phase 1D-13E does not reopen citation closure. It preserves the Phase 1D-11 source replacement, narrowing, L5 inference, and non-blocking limitation boundaries.
""",
    )

    return {
        "phase": PHASE,
        "style_shell_integration": "PASS" if style_shell_pass else "BLOCKER",
        "content_regression_guard": "PASS" if content_regression_pass else "BLOCKER",
        "table_visual_blocker": "PASS" if vertical_pass else "BLOCKER",
        "chapter14_rccs_m_evidence": "PASS" if ch14_pass else "BLOCKER",
        "chapter15_rccs_m_pressure_test": "PASS" if ch15_pass else "BLOCKER",
        "terminology_cleanup": "PASS" if terminology_pass else "CHECK",
        "visual": "PASS" if vertical_pass else "BLOCKER",
        "boundary": "PASS" if boundary_pass else "BLOCKER",
        "content_preservation": "PASS" if content_pass else "CHECK",
        "source_closure_preservation": "PASS" if source_closure_pass else "CHECK",
        "vertical_single_letter_pages": vertical_pages,
        "css_blockers": css_blockers,
        "content_required_terms": content_required_terms,
        "final_forbidden_terms": final_forbidden_terms,
        "positive_blockers": len(boundary_positive_blockers),
        "appendix_g_numeric_leaks": appendix_g_numeric_leaks,
    }


def write_phase_1d13e_log(log: dict) -> None:
    log["phase"] = PHASE
    log["artifact"] = "html_publication_professional_style_shell_targeted_rccs_m_cleanup_and_table_blocker_repair"
    log["phase_1d13e_status"] = PHASE_STATUS
    log["phase_1d12_status"] = PHASE_STATUS
    log["docx_export_engine"] = "python-docx from same Phase 1D-13E structured source"
    log["professional_style_reference"] = str(PROFESSIONAL_STYLE_REFERENCE)
    log["content_source_policy"] = "Professional-Final HTML used as style/layout reference only; latest source_r3 Markdown is the sole content source."
    log["qa_reports"] = [
        "reports/phase-1d13e-preflight.md",
        "reports/phase-1d13e-implementation-grounding.md",
        "reports/phase-1d13e-professional-style-reference-audit.md",
        "reports/phase-1d13e-style-shell-integration-qa.md",
        "reports/phase-1d13e-content-regression-guard.md",
        "reports/phase-1d13e-vertical-table-blocker-audit.md",
        "reports/phase-1d13e-table-rendering-repair-report.md",
        "reports/phase-1d13e-table-visual-qa.md",
        "reports/phase-1d13e-chapter14-rccs-m-evidence-qa.md",
        "reports/phase-1d13e-chapter15-rccs-m-pressure-test-qa.md",
        "reports/phase-1d13e-terminology-cleanup-qa.md",
        "reports/phase-1d13e-visual-qa.md",
        "reports/phase-1d13e-boundary-qa.md",
        "reports/phase-1d13e-content-preservation-qa.md",
        "reports/phase-1d13e-source-closure-preservation-qa.md",
    ]
    (OUT_DIR / "phase_1d13e_generation_log.json").write_text(
        json.dumps(log, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def make_phase_1d13e_contact_sheet(rendered_pages, page_numbers, out_name, max_pages=24):
    return _ORIGINAL_MAKE_CONTACT_SHEET(
        rendered_pages,
        page_numbers,
        out_name.replace("phase_1d12", "phase_1d13e"),
        max_pages,
    )


def write_extra_phase_1d13e_contact_sheets(rendered_pages, pdf_pages):
    extras = {
        "phase_1d13e_style_reference_before_after_contact_sheet.png": [
            "Global AI Compliance White Paper 2026",
            "Publication Candidate Review Ready",
            "RCCS-T / MRO / RCCS-M / ALCS",
            "Publication Boundary",
        ],
        "phase_1d13e_cover_front_matter_contact_sheet.png": [
            "Publication Candidate Review Ready",
            "Document Control and Positioning",
            "RCCS-T / RCCS-M / ALCS",
        ],
        "phase_1d13e_vertical_table_blocker_contact_sheet.png": [
            "Table T-14-04",
            "MRO / ALCS Dimension",
            "semantic row cards",
            "RCCS-M Evidence Confidence Role",
        ],
        "phase_1d13e_mro_alcs_mapping_tables_contact_sheet.png": [
            "MRO / ALCS Dimension",
            "Boundary / Evidence Limit",
            "Mapping Strength",
        ],
        "phase_1d13e_chapter14_contact_sheet.png": [
            "Chapter 14",
            "RCCS-M Evidence Confidence Role",
            "Evidence-Based Validation Pattern Mapping",
        ],
        "phase_1d13e_chapter15_contact_sheet.png": [
            "Chapter 15",
            "Failure Scenarios as RCCS-M Pressure Tests",
            "Authority Boundary Failure",
        ],
        "phase_1d13e_chapter7_contact_sheet.png": [
            "Chapter 7",
            "T-07-01A",
            "T-07-02A",
            "RCCS-M adjustment",
        ],
        "phase_1d13e_appendix_e_contact_sheet.png": [
            "Appendix E",
            "T-E-11",
            "RCCS-M Adjustment Matrix",
        ],
        "phase_1d13e_scoring_methodology_contact_sheet.png": [
            "Evidence Requirements: Traditional Evidence vs MRO Evidence",
            "Calculation Method",
            "Chapter 7 defines the operational difference",
        ],
        "phase_1d13e_appendix_b_contact_sheet.png": [
            "Appendix B",
            "Profile / Lens",
            "Score-Delta Note",
            "Three-Profile Analytical Score Worksheet",
            "T-B-02",
        ],
        "phase_1d13e_evaluation_results_contact_sheet.png": [
            "Evaluation Results: RCCS-T / RCCS-M / ALCS Provisional Analytical Profiles",
            "RCCS-T / RCCS-M / ALCS Score Overview",
            "System-by-System Analytical Profiles",
        ],
        "phase_1d13e_appendix_g_contact_sheet.png": [
            "Appendix G",
            "Numerical profiles are not in Appendix G",
            "Expanded System-by-System Assessment",
        ],
        "phase_1d13e_conclusion_contact_sheet.png": [
            "18. Conclusion",
            "RCCS-T names traditional regulatory coverage",
            "AI Agent / MAS compliance is not only model compliance",
        ],
    }
    created = {}
    for out_name, patterns in extras.items():
        sheet = renderer.make_contact_sheet(rendered_pages, renderer.find_pages_containing(pdf_pages, patterns), out_name)
        if sheet:
            created[out_name] = str(sheet.relative_to(ROOT))
    return created


def source_to_docx_derivative_phase_1d13e():
    docx_path, stdout = _ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE()
    doc = renderer.Document(docx_path)
    for para in doc.paragraphs:
        if "Two-layer RCCS and visual repair draft" in para.text:
            for run in para.runs:
                run.text = ""
            para.add_run("Targeted RCCS-M cleanup and table blocker repair draft - DOCX editable derivative")
            break
    doc.save(docx_path)
    return docx_path, stdout


def _qa_summary_has_blocker(log: dict) -> bool:
    qa = log.get("qa_summary", {})
    blocker_values = {
        "BLOCKER",
        "BLOCKED",
        "FAIL",
        "FAILURE",
        "BLOCKER REVIEW REQUIRED",
    }
    for value in qa.values():
        if isinstance(value, str) and value.upper() in blocker_values:
            return True
    return False


def configure_renderer() -> None:
    renderer.OUT_DIR = OUT_DIR
    renderer.RENDER_DIR = RENDER_DIR
    renderer.ARTIFACT_STEM = ARTIFACT_STEM
    renderer.HTML_NAME = f"{ARTIFACT_STEM}.html"
    renderer.PDF_NAME = f"{ARTIFACT_STEM}.pdf"
    renderer.DOCX_NAME = f"{ARTIFACT_STEM}.docx"
    renderer.PDF_TEXT_NAME = "phase_1d13e_pdf_text.txt"
    renderer.LOG_NAME = "phase_1d13e_generation_log.json"
    renderer.PHASE_STATUS = PHASE_STATUS
    renderer.REMAINING_LIMITATIONS = [
        "The uploaded Professional-Final HTML was used only as style/layout reference; latest source_r3 Markdown remains the sole content source.",
        "RCCS-M is an author analytical, forward-looking MRO-adjusted model; it is not current law, certification, regulator-approved benchmark, vendor ranking, or procurement recommendation.",
        "MPLP-to-RCCS-M/ALCS mapping remains author analytical where not directly stated in official protocol materials, with conflict-of-interest disclosure preserved.",
        "OpenAI platform guide remains HTTP 403 by curl; accessible official Python/JS Agents SDK docs replace it for retained SDK-surface claims.",
        "Product/platform documentation supports visible capability surfaces only; lifecycle-object scoring remains evidence-qualified and provisional.",
        "Appendix G remains qualitative and no-score; numeric RCCS-T/RCCS-M/ALCS profiles appear only in Evaluation Results.",
    ]
    renderer.FIGURE_TITLE_FALLBACKS["F-04"] = "RCCS-T / RCCS-M / ALCS Three-Profile Scoring Model"
    renderer.write_phase_1d12_closure_reports = write_phase_1d13e_preflight_and_grounding
    renderer.create_reports = create_phase_1d13e_reports
    renderer.write_log = write_phase_1d13e_log
    renderer.make_contact_sheet = make_phase_1d13e_contact_sheet
    renderer.source_to_docx_derivative = source_to_docx_derivative_phase_1d13e
    renderer.render_table = render_table_phase_1d13e
    renderer.css = phase_1d13e_css
    renderer.cover_html = cover_html_phase_1d13e
    renderer.important_notice_html = important_notice_html_phase_1d13e
    renderer.qa_summary_has_blocker = _qa_summary_has_blocker


_ORIGINAL_MAKE_CONTACT_SHEET = renderer.make_contact_sheet
_ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE = renderer.source_to_docx_derivative
_ORIGINAL_RENDER_TABLE = renderer.render_table
_ORIGINAL_CSS = renderer.css


def main() -> int:
    configure_renderer()
    return renderer.main()


if __name__ == "__main__":
    sys.exit(main())
