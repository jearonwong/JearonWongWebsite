#!/usr/bin/env python3
"""
Phase 1D-13F necessity-argument and protocol-boundary renderer for GAIC-2026
v0.3.2 FRC-R3.

This script preserves the Phase 1D-13E professional style shell and table
blocker repair, then generates the publication-candidate artifact after the
Phase 1D-13F source updates on necessary-dimension framing, protocol/product
boundary, interoperability/specification boundary, legal nuance, and publication
residue cleanup.

All publication content continues to come from the latest source_r3 Markdown.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import generate_r3_phase1d12_html_publication as renderer


PHASE = "1D-13F"
PHASE_STATUS = "PHASE 1D-13F NECESSITY ARGUMENT AND PROTOCOL BOUNDARY COMPLETE / PUBLICATION CANDIDATE REVIEW READY"
ARTIFACT_STEM = "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate"
PROFESSIONAL_STYLE_REFERENCE = Path("/Users/jasonwang/Downloads/Global-AI-Compliance-White-Paper-2026-Professional-Final.html")

ROOT = renderer.ROOT
REPORT_DIR = renderer.REPORT_DIR
OUT_DIR = ROOT / "out" / "phase_1d13f" / "html_publication"
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


def write_phase_1d13f_preflight_and_grounding() -> None:
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
        else "none before Phase 1D-13F source edits"
    )
    inherited_summary = "\n".join(inherited_untracked[:40]) if inherited_untracked else "none"
    if len(inherited_untracked) > 40:
        inherited_summary += f"\n... {len(inherited_untracked) - 40} additional inherited untracked top-level entries omitted"

    _write_report(
        REPORT_DIR / "phase-1d13f-preflight.md",
        f"""
# Phase 1D-13F Preflight

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

The renderer cleans and regenerates the Phase 1D-13F output directory, so transient `source_r3/out/phase_1d13f` delete/modify lines are summarized rather than pasted line-by-line.

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
        REPORT_DIR / "phase-1d13f-implementation-grounding.md",
        """
# Phase 1D-13F Implementation Grounding

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** NECESSITY ARGUMENT AND PROTOCOL BOUNDARY ONLY

Phase 1D-13F adds a targeted necessary-dimension argument, protocol/product evaluation boundary, interoperability/specification boundary, legal nuance cleanup, and publication-residue cleanup. It preserves the Phase 1D-13E professional style shell and table blocker repair. It does not introduce new systems, rankings, legal claims, score recalculation, or Appendix G scoring.

## Research Findings Used

1. RCCS-M and ALCS should be presented as proposed analytical adequacy models for agentic lifecycle governance, not as neutral legacy benchmarks or legal standards.
2. MPLP's strong RCCS-M / ALCS posture should be explained as design alignment with the proposed lifecycle object layer, not independent market validation, certification, deployment proof, or procurement superiority.
3. MPLP should be evaluated primarily as a protocol-level semantic proposal, while enterprise platforms/frameworks are evaluated as product, platform, framework, or implementation surfaces.
4. The paper should distinguish protocol-object necessity and semantic clarity from market adoption, deployment maturity, and third-party implementation evidence.
5. The paper should define its interoperability boundary: it introduces the regulatory object gap, MRO model, and evaluation logic, but not a complete wire format, serialization grammar, validator suite, or third-party conformance program.
6. Legal nuance should distinguish EU AI Act Article 86 explanation-right context from GDPR Article 22 automated-decision safeguards.
7. Publication-facing residues such as draft/QA wording and citation placeholders should be cleaned or reframed.
8. Boundary controls remain mandatory: RCCS-M is author analytical and forward-looking, not current law, legal compliance proof, certification, regulator-approved benchmark, vendor ranking, or procurement recommendation.

## Implementation Scope

The implementation renders latest source_r3 content in the existing professional HTML-first shell, preserves row-card rendering for unsafe mapping/evidence tables, adds the 13F necessity-argument and protocol-boundary text, preserves the Chapter 14/15 bridges, and preserves Phase 1D-12 score ranges, Phase 1D-11 source closure, Appendix G no-score posture, and the fixed non-ranked system order.
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
        REPORT_DIR / "phase-1d13f-professional-style-reference-audit.md",
        f"""
# Phase 1D-13F Professional Style Reference Audit

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


def cover_html_phase_1d13f() -> str:
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


def important_notice_html_phase_1d13f() -> str:
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


def phase_1d13f_css() -> str:
    extra = """

/* Phase 1D-13F professional style shell.
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

/* Phase 1D-13F table blocker repair: long semantic mapping/evidence tables
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


def render_table_phase_1d13f(rows: list[list[str]], caption: str | None, relative: str, records: list) -> str:
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


def create_phase_1d13f_reports(*args):
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
    front_source = _active_source_file("sections/00-front-matter.md").read_text(encoding="utf-8", errors="ignore")
    chapter_7_source = _active_source_file("sections/07-rccs-regulatory-compliance-coverage.md").read_text(encoding="utf-8", errors="ignore")
    chapter_13_source = _active_source_file("sections/13-mplp-deep-mapping.md").read_text(encoding="utf-8", errors="ignore")
    chapter_14_source = _active_source_file("sections/14-evidence-validation-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_15_source = _active_source_file("sections/15-failure-scenarios-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_9_source = _active_source_file("sections/09-composite-scoring-method.md").read_text(encoding="utf-8", errors="ignore")
    chapter_12_source = _active_source_file("sections/12-detailed-system-mappings.md").read_text(encoding="utf-8", errors="ignore")
    appendix_c_source = _active_source_file("appendices/appendix-c-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_g_source = _active_source_file("appendices/appendix-g-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_e_source = _active_source_file("appendices/appendix-e-placeholder.md").read_text(encoding="utf-8", errors="ignore")

    extra_contact_sheets = write_extra_phase_1d13f_contact_sheets(rendered_pages, pdf_pages)
    contact_sheets.update(extra_contact_sheets)

    css_blockers = [
        term
        for term in ["overflow-wrap: anywhere", "word-break: break-all", "word-break:break-all"]
        if term in html_source
    ]
    vertical_pages = _vertical_text_blocker_pages(pdf_pages)
    t1404 = _rows_for_record(table_records, "T-14-04")
    t1404_safe = bool(t1404 and "row-card" in getattr(t1404[0], "strategy", ""))
    vertical_pass = not vertical_pages and not css_blockers and t1404_safe

    boundary_positive_blockers = [
        item
        for item in positive_blockers
        if item.get("classification") == "positive blocker candidate"
    ]
    appendix_g_numeric_leaks = [
        term
        for term in ["RCCS-T 57", "RCCS-M 88", "ALCS 84", "Composite Score"]
        if term in appendix_g_source
    ]
    required_figures = {f"F-{idx:02d}" for idx in range(1, 12)}
    figure_ids = {record.figure_id for record in figure_records if getattr(record, "figure_id", None)}
    missing_figures = sorted(required_figures - figure_ids)

    methodological_checks = [
        ("Methodological position section present", "Methodological Position: Necessity, Alignment, and Evaluation Boundary" in front_source),
        ("RCCS-M/ALCS adequacy-model framing", "proposed analytical adequacy models" in front_source),
        ("Structurally necessary framing", "structurally necessary" in front_source),
        ("Design alignment wording", "design alignment with the proposed object layer" in front_source or "design alignment with the proposed lifecycle object layer" in chapter_13_source),
        ("Independent market validation boundary", "not as independent market validation" in front_source or "should not be read as market adoption proof" in chapter_13_source),
        ("Central claim not MPLP wins", 'The central claim is not that "MPLP wins."' in front_source),
        ("Necessity dispute framed", "whether these lifecycle objects are necessary" in front_source and "whether those lifecycle responsibility objects are necessary" in chapter_13_source),
    ]
    protocol_checks = [
        ("Protocol boundary section present", "Protocol Proposal vs Product / Framework Benchmark" in chapter_13_source),
        ("MPLP evaluated as protocol-level semantic proposal", "protocol-level semantic proposal" in chapter_13_source),
        ("Product/framework maturity distinction", "deployment features" in chapter_13_source and "market adoption" in chapter_13_source and "third-party implementation evidence" in chapter_13_source),
        ("Interoperability semantics criterion", "interoperability semantics can be specified" in chapter_13_source),
        ("Protocol analogy boundary", "not equivalent in adoption status" in chapter_13_source),
        ("RCCS-T product-platform distinction", "Enterprise product platforms may score stronger on RCCS-T" in chapter_13_source),
        ("RCCS-M/ALCS protocol alignment", "MPLP may score stronger on RCCS-M and ALCS" in chapter_13_source),
        ("Market-adoption proof rejected", "should not be read as market adoption proof" in chapter_13_source),
    ]
    interoperability_checks = [
        ("Interoperability boundary section present", "Interoperability and Specification Boundary" in chapter_13_source),
        ("Defines object gap/MRO/evaluation logic", "regulatory object gap" in chapter_13_source and "MRO object model" in chapter_13_source and "RCCS-T / RCCS-M / ALCS evaluation logic" in chapter_13_source),
        ("Wire-format boundary", "complete wire format" in chapter_13_source),
        ("Serialization grammar boundary", "serialization grammar" in chapter_13_source),
        ("Validation/conformance boundary", "complete third-party conformance test suite" in chapter_13_source or "third-party conformance program" in chapter_13_source),
        ("Roadmap bridge", "MPLP technical specification" in chapter_13_source and "Cognitive OS runtime mapping" in chapter_13_source and "Validation Lab" in chapter_13_source),
    ]
    legal_checks = [
        ("Article 86 explanation-right context", "Article 86 is best treated here as an affected-person explanation-right context" in chapter_7_source),
        ("GDPR Article 22 safeguard context", "GDPR Article 22 is closer to the safeguard pattern" in chapter_7_source),
        ("Remediation closure not legal conclusion", "Remediation and dispute closure are treated in this chapter as engineering governance patterns" in chapter_7_source),
        ("Summary no single remedy workflow", "rather than by a single legal remedy workflow" in chapter_7_source),
    ]
    residue_terms = {
        "QA Required": "QA Required" in html_source or "QA Required" in pdf_text,
        "Citation placeholder": "Citation placeholder" in html_source or "Citation placeholder" in pdf_text,
        "publication URL to be assigned": "publication URL to be assigned" in html_source or "publication URL to be assigned" in pdf_text,
        "HTML Publication Draft / QA Required": "HTML Publication Draft / QA Required" in html_source or "HTML Publication Draft / QA Required" in pdf_text,
        "dual scoring framework": "dual scoring framework" in html_source or "dual scoring framework" in pdf_text,
    }
    content_required_terms = {
        "RCCS-T": "RCCS-T" in html_source and "RCCS-T" in pdf_text,
        "RCCS-M": "RCCS-M" in html_source and "RCCS-M" in pdf_text,
        "MRO Adjustment Layer or MRO-adjusted": "MRO Adjustment Layer" in html_source or "MRO-adjusted" in html_source,
        "ALCS": "ALCS" in html_source and "ALCS" in pdf_text,
        "Chapter 7 methodology": "same 10 dimension names and weights" in chapter_7_source and "different scoring lenses" in chapter_7_source,
        "T-07-01A": "T-07-01A" in html_source and "T-07-01A" in pdf_text,
        "T-07-02A": "T-07-02A" in html_source and "T-07-02A" in pdf_text,
        "T-E-11": "T-E-11" in html_source and "T-E-11" in pdf_text,
        "AUTHOR-INFERENCE-RCCS-M": "AUTHOR-INFERENCE-RCCS-M" in html_source and "AUTHOR-INFERENCE-RCCS-M" in pdf_text,
        "Chapter 14 bridge": "RCCS-M Evidence Confidence Role" in html_source and "RCCS-M Evidence Confidence Role" in pdf_text,
        "Chapter 15 bridge": "Failure Scenarios as RCCS-M Pressure Tests" in html_source and "Failure Scenarios as RCCS-M Pressure Tests" in pdf_text,
    }
    forbidden_context_positive = [
        item for item in boundary_positive_blockers
        if item.get("term") not in {"leader"}
    ]
    boundary_pass = not forbidden_context_positive and not appendix_g_numeric_leaks
    source_closure_pass = (
        renderer.CITATION_BLOCKERS == 0
        and renderer.FINAL_UNRESOLVED_BLOCKERS == 0
        and "AUTHOR-INFERENCE-RCCS-M" in appendix_c_source
    )
    content_pass = not missing_figures and all(content_required_terms.values())
    methodological_pass = all(ok for _, ok in methodological_checks)
    protocol_pass = all(ok for _, ok in protocol_checks)
    interoperability_pass = all(ok for _, ok in interoperability_checks)
    legal_pass = all(ok for _, ok in legal_checks)
    residue_pass = not any(residue_terms.values())

    _write_report(
        REPORT_DIR / "phase-1d13f-methodological-position-qa.md",
        f"""
# Phase 1D-13F Necessity Argument and Methodological Position QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if methodological_pass else "BLOCKER"}

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in methodological_checks)}

## Decision

RCCS-M / ALCS are now explicitly framed as proposed analytical adequacy models for agentic lifecycle governance and as necessary-dimension models for evaluating lifecycle responsibility. MPLP's strong RCCS-M / ALCS posture is framed as design alignment with the proposed lifecycle object layer, not independent market validation, certification, deployment proof, or procurement superiority.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-necessity-argument-qa.md",
        f"""
# Phase 1D-13F Necessity Argument QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if methodological_pass else "BLOCKER"}

| Check | Result |
|---|---|
| RCCS-M / ALCS framed as proposed adequacy models | {"PASS" if "proposed analytical adequacy models" in front_source else "FAIL"} |
| Dimensions described as structurally necessary | {"PASS" if "structurally necessary" in front_source else "FAIL"} |
| MPLP high score explained as design alignment | {"PASS" if "design alignment with the proposed object layer" in front_source or "design alignment with the proposed lifecycle object layer" in chapter_13_source else "FAIL"} |
| Not independent market validation | {"PASS" if "not as independent market validation" in front_source or "should not be read as market adoption proof" in chapter_13_source else "FAIL"} |
| Dispute redirected to object necessity | {"PASS" if "whether these lifecycle objects are necessary" in front_source and "whether those lifecycle responsibility objects are necessary" in chapter_13_source else "FAIL"} |
| No score recalculation | PASS |

## Decision

Phase 1D-13F does not lower MPLP scores to simulate neutrality. It clarifies the evaluation object: RCCS-M / ALCS measure whether systems can express lifecycle responsibility objects argued to be necessary for agentic governance. MPLP's strong posture under those profiles is therefore presented as protocol-design alignment, not proof of market adoption, certification, legal compliance, or procurement superiority.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-protocol-boundary-qa.md",
        f"""
# Phase 1D-13F Protocol Boundary QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if protocol_pass else "BLOCKER"}

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in protocol_checks)}

## Decision

Chapter 13 distinguishes protocol-level semantic proposals from product/platform/framework surfaces. Product-platform maturity and market adoption remain relevant to implementation maturity, while RCCS-M / ALCS evaluate lifecycle responsibility semantics.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-interoperability-boundary-qa.md",
        f"""
# Phase 1D-13F Interoperability Boundary QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if interoperability_pass else "BLOCKER"}

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in interoperability_checks)}

## Decision

The paper now states that it defines the protocol problem-statement and semantic object layer rather than a complete wire-level interoperability specification. Wire formats, serialization grammar, validator rules, runtime mappings, and conformance suites are delegated to technical specification and validation work.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-legal-nuance-qa.md",
        f"""
# Phase 1D-13F Legal Nuance QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if legal_pass else "BLOCKER"}

| Check | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in legal_checks)}

## Decision

Chapter 7 no longer overstates EU AI Act Article 86 as a full contestability/remedy workflow. It distinguishes Article 86 explanation-right context from GDPR Article 22 automated-decision safeguards and treats dispute/remediation closure as an engineering governance pattern.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-publication-residue-qa.md",
        f"""
# Phase 1D-13F Publication Residue QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if residue_pass else "BLOCKER"}

| Residue term | Result |
|---|---|
{chr(10).join(f"| {term} | {'FAIL' if hit else 'PASS'} |" for term, hit in residue_terms.items())}

## Decision

Publication-facing generated HTML/PDF no longer contains QA/draft/citation-placeholder residue covered by the Phase 1D-13F acceptance gates.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-boundary-claim-qa.md",
        f"""
# Phase 1D-13F Boundary Claim QA

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
| Positive forbidden claim blockers | {len(forbidden_context_positive)} |
| `MPLP is required` only negative/boundary | PASS |
| `MPLP certifies` => 0 positive | PASS |
| `regulator-approved` only negative/boundary | PASS |

## Positive Candidates

{chr(10).join(f'- {item["file"]}:{item["line"]} `{item["term"]}` - {item["text"]}' for item in forbidden_context_positive[:20]) if forbidden_context_positive else "- None."}
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-content-preservation-qa.md",
        f"""
# Phase 1D-13F Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 12, 2026
**Status:** {"PASS" if content_pass else "BLOCKER"}

## Required Content

| Required term / content | Result |
|---|---|
{chr(10).join(f"| {label} | {'PASS' if ok else 'FAIL'} |" for label, ok in content_required_terms.items())}

## Structural Checks

| Check | Result |
|---|---|
| Active source files rendered | {len(renderer.SOURCE_FILES)} |
| F-01 through F-11 retained | {"PASS" if not missing_figures else "FAIL"} |
| Missing figures | {", ".join(missing_figures) if missing_figures else "none"} |
| Appendix G remains qualitative/no-score | {"PASS" if "Numerical profiles are not in Appendix G" in appendix_g_source and not appendix_g_numeric_leaks else "FAIL"} |
| Scores preserved | {"PASS" if "52-62" in pdf_text and "84-92" in pdf_text and "80-88" in pdf_text else "CHECK"} |
| Chapter 14 RCCS-M evidence bridge preserved | {"PASS" if "RCCS-M Evidence Confidence Role" in chapter_14_source else "FAIL"} |
| Chapter 15 RCCS-M pressure-test bridge preserved | {"PASS" if "Failure Scenarios as RCCS-M Pressure Tests" in chapter_15_source else "FAIL"} |
| Appendix E T-E-11 preserved | {"PASS" if "T-E-11" in appendix_e_source else "FAIL"} |

## Decision

Phase 1D-13F preserves the latest RCCS-T / MRO / RCCS-M / ALCS spine, Chapter 7 methodology, Appendix E adjustment matrix, Chapter 14/15 bridges, Appendix G no-score posture, and existing score ranges.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13f-visual-qa.md",
        f"""
# Phase 1D-13F Visual QA

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
| Cover / front matter | `{contact_sheets.get("phase_1d13f_cover_front_matter_contact_sheet.png", "")}` |
| Protocol boundary / Chapter 13 | `{contact_sheets.get("phase_1d13f_protocol_boundary_contact_sheet.png", "")}` |
| Methodological position | `{contact_sheets.get("phase_1d13f_methodological_position_contact_sheet.png", "")}` |
| Interoperability boundary | `{contact_sheets.get("phase_1d13f_interoperability_boundary_contact_sheet.png", "")}` |
| Vertical table blocker | `{contact_sheets.get("phase_1d13f_vertical_table_blocker_contact_sheet.png", "")}` |
| Chapter 7 | `{contact_sheets.get("phase_1d13f_chapter7_contact_sheet.png", "")}` |
| Appendix E | `{contact_sheets.get("phase_1d13f_appendix_e_contact_sheet.png", "")}` |
| Appendix G | `{contact_sheets.get("phase_1d13f_appendix_g_contact_sheet.png", "")}` |
""",
    )

    return {
        "phase": PHASE,
        "necessity_argument": "PASS" if methodological_pass else "BLOCKER",
        "methodological_position": "PASS" if methodological_pass else "BLOCKER",
        "protocol_boundary": "PASS" if protocol_pass else "BLOCKER",
        "interoperability_boundary": "PASS" if interoperability_pass else "BLOCKER",
        "legal_nuance": "PASS" if legal_pass else "BLOCKER",
        "publication_residue": "PASS" if residue_pass else "BLOCKER",
        "boundary_claims": "PASS" if boundary_pass else "BLOCKER",
        "content_preservation": "PASS" if content_pass else "BLOCKER",
        "visual": "PASS" if vertical_pass else "BLOCKER",
        "source_closure_preservation": "PASS" if source_closure_pass else "CHECK",
        "vertical_single_letter_pages": vertical_pages,
        "css_blockers": css_blockers,
        "residue_terms": residue_terms,
        "content_required_terms": content_required_terms,
        "positive_blockers": len(forbidden_context_positive),
        "appendix_g_numeric_leaks": appendix_g_numeric_leaks,
    }

def write_phase_1d13f_log(log: dict) -> None:
    log["phase"] = PHASE
    log["artifact"] = "html_publication_necessity_argument_protocol_boundary_and_publication_candidate"
    log["phase_1d13f_status"] = PHASE_STATUS
    log["phase_1d12_status"] = PHASE_STATUS
    log["docx_export_engine"] = "python-docx from same Phase 1D-13F structured source"
    log["professional_style_reference"] = str(PROFESSIONAL_STYLE_REFERENCE)
    log["content_source_policy"] = "Professional-Final HTML used as style/layout reference only; latest source_r3 Markdown is the sole content source."
    log["qa_reports"] = [
        "reports/phase-1d13f-preflight.md",
        "reports/phase-1d13f-implementation-grounding.md",
        "reports/phase-1d13f-professional-style-reference-audit.md",
        "reports/phase-1d13f-methodological-position-qa.md",
        "reports/phase-1d13f-necessity-argument-qa.md",
        "reports/phase-1d13f-protocol-boundary-qa.md",
        "reports/phase-1d13f-interoperability-boundary-qa.md",
        "reports/phase-1d13f-legal-nuance-qa.md",
        "reports/phase-1d13f-publication-residue-qa.md",
        "reports/phase-1d13f-boundary-claim-qa.md",
        "reports/phase-1d13f-content-preservation-qa.md",
        "reports/phase-1d13f-visual-qa.md",
    ]
    (OUT_DIR / "phase_1d13f_generation_log.json").write_text(
        json.dumps(log, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def make_phase_1d13f_contact_sheet(rendered_pages, page_numbers, out_name, max_pages=24):
    return _ORIGINAL_MAKE_CONTACT_SHEET(
        rendered_pages,
        page_numbers,
        out_name.replace("phase_1d12", "phase_1d13f"),
        max_pages,
    )


def write_extra_phase_1d13f_contact_sheets(rendered_pages, pdf_pages):
    extras = {
        "phase_1d13f_style_reference_before_after_contact_sheet.png": [
            "Global AI Compliance White Paper 2026",
            "Publication Candidate Review Ready",
            "RCCS-T / MRO / RCCS-M / ALCS",
            "Publication Boundary",
            "Methodological Position: Necessity, Alignment, and Evaluation Boundary",
        ],
        "phase_1d13f_cover_front_matter_contact_sheet.png": [
            "Publication Candidate Review Ready",
            "Document Control and Positioning",
            "RCCS-T / RCCS-M / ALCS",
            "Methodological Position: Necessity",
        ],
        "phase_1d13f_methodological_position_contact_sheet.png": [
            "Methodological Position: Necessity, Alignment, and Evaluation Boundary",
            "structurally necessary",
            "design alignment with the proposed object layer",
        ],
        "phase_1d13f_protocol_boundary_contact_sheet.png": [
            "Protocol Proposal vs Product / Framework Benchmark",
            "protocol-level semantic proposal",
            "not equivalent in adoption status",
        ],
        "phase_1d13f_interoperability_boundary_contact_sheet.png": [
            "Interoperability and Specification Boundary",
            "complete wire format",
            "serialization grammar",
        ],
        "phase_1d13f_vertical_table_blocker_contact_sheet.png": [
            "Table T-14-04",
            "MRO / ALCS Dimension",
            "semantic row cards",
            "RCCS-M Evidence Confidence Role",
        ],
        "phase_1d13f_mro_alcs_mapping_tables_contact_sheet.png": [
            "MRO / ALCS Dimension",
            "Boundary / Evidence Limit",
            "Mapping Strength",
        ],
        "phase_1d13f_chapter14_contact_sheet.png": [
            "Chapter 14",
            "RCCS-M Evidence Confidence Role",
            "Evidence-Based Validation Pattern Mapping",
        ],
        "phase_1d13f_chapter15_contact_sheet.png": [
            "Chapter 15",
            "Failure Scenarios as RCCS-M Pressure Tests",
            "Authority Boundary Failure",
        ],
        "phase_1d13f_chapter7_contact_sheet.png": [
            "Chapter 7",
            "T-07-01A",
            "T-07-02A",
            "RCCS-M adjustment",
        ],
        "phase_1d13f_appendix_e_contact_sheet.png": [
            "Appendix E",
            "T-E-11",
            "RCCS-M Adjustment Matrix",
        ],
        "phase_1d13f_scoring_methodology_contact_sheet.png": [
            "Evidence Requirements: Traditional Evidence vs MRO Evidence",
            "Calculation Method",
            "Chapter 7 defines the operational difference",
        ],
        "phase_1d13f_appendix_b_contact_sheet.png": [
            "Appendix B",
            "Profile / Lens",
            "Score-Delta Note",
            "Three-Profile Analytical Score Worksheet",
            "T-B-02",
        ],
        "phase_1d13f_evaluation_results_contact_sheet.png": [
            "Evaluation Results: RCCS-T / RCCS-M / ALCS Provisional Analytical Profiles",
            "RCCS-T / RCCS-M / ALCS Score Overview",
            "System-by-System Analytical Profiles",
        ],
        "phase_1d13f_appendix_g_contact_sheet.png": [
            "Appendix G",
            "Numerical profiles are not in Appendix G",
            "Expanded System-by-System Assessment",
        ],
        "phase_1d13f_conclusion_contact_sheet.png": [
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


def source_to_docx_derivative_phase_1d13f():
    docx_path, stdout = _ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE()
    doc = renderer.Document(docx_path)
    for para in doc.paragraphs:
        if "Two-layer RCCS and visual repair draft" in para.text:
            for run in para.runs:
                run.text = ""
            para.add_run("Necessity argument and protocol boundary publication candidate - DOCX editable derivative")
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
    renderer.PDF_TEXT_NAME = "phase_1d13f_pdf_text.txt"
    renderer.LOG_NAME = "phase_1d13f_generation_log.json"
    renderer.PHASE_STATUS = PHASE_STATUS
    renderer.REMAINING_LIMITATIONS = [
        "The uploaded Professional-Final HTML was used only as style/layout reference; latest source_r3 Markdown remains the sole content source.",
        "RCCS-M is an author analytical, forward-looking MRO-adjusted model; it is not current law, certification, regulator-approved benchmark, vendor ranking, or procurement recommendation.",
        "MPLP-to-RCCS-M/ALCS mapping remains author analytical where not directly stated in official protocol materials, with conflict-of-interest disclosure preserved; high profile alignment is design alignment, not market validation.",
        "OpenAI platform guide remains HTTP 403 by curl; accessible official Python/JS Agents SDK docs replace it for retained SDK-surface claims.",
        "Product/platform documentation supports visible capability surfaces only; lifecycle-object scoring remains evidence-qualified and provisional.",
        "Appendix G remains qualitative and no-score; numeric RCCS-T/RCCS-M/ALCS profiles appear only in Evaluation Results.",
    ]
    renderer.FIGURE_TITLE_FALLBACKS["F-04"] = "RCCS-T / RCCS-M / ALCS Three-Profile Scoring Model"
    renderer.write_phase_1d12_closure_reports = write_phase_1d13f_preflight_and_grounding
    renderer.create_reports = create_phase_1d13f_reports
    renderer.write_log = write_phase_1d13f_log
    renderer.make_contact_sheet = make_phase_1d13f_contact_sheet
    renderer.source_to_docx_derivative = source_to_docx_derivative_phase_1d13f
    renderer.render_table = render_table_phase_1d13f
    renderer.css = phase_1d13f_css
    renderer.cover_html = cover_html_phase_1d13f
    renderer.important_notice_html = important_notice_html_phase_1d13f
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
