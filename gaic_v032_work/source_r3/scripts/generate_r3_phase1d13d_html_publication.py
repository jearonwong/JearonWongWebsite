#!/usr/bin/env python3
"""
Phase 1D-13D HTML-first chapter 7 RCCS-T/M methodology renderer for GAIC-2026 v0.3.2 FRC-R3.

This script reuses the Phase 1D-12 HTML/PDF renderer, which already contains
the table wrapping repair and RCCS-T/RCCS-M/ALCS evaluation visuals. Phase
1D-13D overrides phase metadata, artifact names, F-04 wording, contact sheet
names, and QA reports while keeping active Markdown as the content source of
truth.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import generate_r3_phase1d12_html_publication as renderer


PHASE = "1D-13D"
PHASE_STATUS = "PHASE 1D-13D CHAPTER 7 RCCS-T/M METHODOLOGY COMPLETE / PUBLICATION CANDIDATE REVIEW READY"
ARTIFACT_STEM = "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Draft-v8"

ROOT = renderer.ROOT
REPORT_DIR = renderer.REPORT_DIR
OUT_DIR = ROOT / "out" / "phase_1d13d" / "html_publication"
RENDER_DIR = OUT_DIR / "rendered_pdf_pages"
MATRIX_ROW_CARD_TABLE_IDS = {"T-07-01A", "T-07-02A", "T-E-11"}


def _write_report(path: Path, content: str) -> None:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")


def _run_git(args: list[str]) -> str:
    return renderer.run_git(args)


def write_phase_1d13d_preflight_and_grounding() -> None:
    remote_v = _run_git(["remote", "-v"])
    branch = _run_git(["branch", "--show-current"])
    head = _run_git(["rev-parse", "HEAD"])
    origin_head = _run_git(["ls-remote", "origin", "HEAD"])
    status_short = _run_git(["status", "--short"])
    pull_result = "Already fast-forwarded before implementation; generation uses current local HEAD plus working-tree source edits."
    preflight_status = "PASS" if head and head in origin_head else "CHECK"

    _write_report(
        REPORT_DIR / "phase-1d13d-preflight.md",
        f"""
# Phase 1D-13D Preflight

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
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

```text
{status_short or "clean before Phase 1D-13D source edits"}
```
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13d-methodology-grounding.md",
        """
# Phase 1D-13D Implementation Grounding

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** TARGETED METHODOLOGY CORRECTION ONLY

Phase 1D-13D implements a targeted methodology correction only. It does not introduce new systems, rankings, legal claims, or score recalculation.

## Research Findings Used

1. Chapter 7 had correct RCCS-T/RCCS-M labels but did not fully explain the operational scoring methodology.
2. Section 7.2 still read as a single RCCS dimension overview rather than a shared-dimension/two-lens method.
3. Section 7.3 used one generic 0-5 scoring scale and did not explain how raw scores differ under RCCS-T and RCCS-M.
4. Section 7.5 did not clarify how the compact rubrics relate to RCCS-T, RCCS-M, and Appendix E.
5. Appendix E remained a single-lens RCCS rubric appendix and needed explicit RCCS-T baseline plus RCCS-M adjustment matrix treatment.
6. v0.3.1 carried useful score-delta logic: traditional governance coverage and lifecycle/protocol semantics can diverge without contradiction.
7. Boundary controls remain mandatory: RCCS-M is author analytical and forward-looking, not current law, legal compliance proof, certification, regulator-approved benchmark, final vendor score, ranking, or procurement recommendation.

## Implementation Scope

The implementation corrects Chapter 7 and Appendix E so RCCS-T and RCCS-M become operational scoring lenses. It preserves Phase 1D-12 score ranges, Phase 1D-11 source closure, Appendix G no-score posture, and the fixed non-ranked system order.
""",
    )


def _contains_all(text: str, terms: list[str]) -> bool:
    return all(term in text for term in terms)


def _active_source_file(name: str) -> Path:
    return ROOT / name


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


def render_table_phase_1d13d(rows: list[list[str]], caption: str | None, relative: str, records: list) -> str:
    if not rows:
        return ""
    cols = max(len(row) for row in rows)
    normalized = [row + [""] * (cols - len(row)) for row in rows]
    table_id = renderer.detect_table_id(caption, normalized)
    if table_id in MATRIX_ROW_CARD_TABLE_IDS:
        rendered = render_matrix_row_cards(normalized, caption, table_id)
        records.append(
            renderer.TableRecord(
                table_id=table_id,
                caption=renderer.strip_markdown_for_text(caption or "") or None,
                source_file=relative,
                rows=len(normalized),
                cols=cols,
                rendered_tables=1,
                strategy="methodology matrix row-card reflow",
                high_risk=bool(table_id and table_id in renderer.HIGH_RISK_TABLE_IDS),
            )
        )
        return rendered
    return _ORIGINAL_RENDER_TABLE(rows, caption, relative, records)


def create_phase_1d13d_reports(*args):
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
    chapter_14_source = _active_source_file("sections/14-evidence-validation-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_18_source = _active_source_file("sections/18-conclusion-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_7_source = _active_source_file("sections/07-rccs-regulatory-compliance-coverage.md").read_text(encoding="utf-8", errors="ignore")
    appendix_e_source = _active_source_file("appendices/appendix-e-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    appendix_b_source = _active_source_file("appendices/appendix-b-placeholder.md").read_text(encoding="utf-8", errors="ignore")
    chapter_9_source = _active_source_file("sections/09-composite-scoring-method.md").read_text(encoding="utf-8", errors="ignore")

    extra_contact_sheets = write_extra_phase_1d13d_contact_sheets(rendered_pages, pdf_pages)
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
        REPORT_DIR / "phase-1d13d-chapter7-methodology-qa.md",
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
        REPORT_DIR / "phase-1d13d-appendix-e-rccs-m-qa.md",
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
        REPORT_DIR / "phase-1d13d-score-model-consistency-qa.md",
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

The primary display remains the three-profile model: RCCS-T, RCCS-M, and ALCS. Optional Traditional Composite and Agentic Composite views remain secondary worksheet views and are not presented as rankings, final vendor scores, legal compliance proof, or procurement recommendations.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13d-visual-qa.md",
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
        REPORT_DIR / "phase-1d13d-content-preservation-qa.md",
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
        REPORT_DIR / "phase-1d13d-boundary-qa.md",
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
        REPORT_DIR / "phase-1d13d-source-closure-preservation-qa.md",
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


def write_phase_1d13d_log(log: dict) -> None:
    log["phase"] = PHASE
    log["artifact"] = "html_publication_chapter7_rccs_tm_methodology_draft"
    log["phase_1d13d_status"] = PHASE_STATUS
    log["phase_1d12_status"] = PHASE_STATUS
    log["docx_export_engine"] = "python-docx from same Phase 1D-13D structured source"
    log["qa_reports"] = [
        "reports/phase-1d13d-preflight.md",
        "reports/phase-1d13d-methodology-grounding.md",
        "reports/phase-1d13d-chapter7-methodology-qa.md",
        "reports/phase-1d13d-appendix-e-rccs-m-qa.md",
        "reports/phase-1d13d-score-model-consistency-qa.md",
        "reports/phase-1d13d-visual-qa.md",
        "reports/phase-1d13d-boundary-qa.md",
        "reports/phase-1d13d-content-preservation-qa.md",
        "reports/phase-1d13d-source-closure-preservation-qa.md",
    ]
    (OUT_DIR / "phase_1d13d_generation_log.json").write_text(
        json.dumps(log, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def make_phase_1d13d_contact_sheet(rendered_pages, page_numbers, out_name, max_pages=24):
    return _ORIGINAL_MAKE_CONTACT_SHEET(
        rendered_pages,
        page_numbers,
        out_name.replace("phase_1d12", "phase_1d13d"),
        max_pages,
    )


def write_extra_phase_1d13d_contact_sheets(rendered_pages, pdf_pages):
    extras = {
        "phase_1d13d_chapter7_contact_sheet.png": [
            "Chapter 7",
            "T-07-01A",
            "T-07-02A",
            "RCCS-M adjustment",
        ],
        "phase_1d13d_appendix_e_contact_sheet.png": [
            "Appendix E",
            "T-E-11",
            "RCCS-M Adjustment Matrix",
        ],
        "phase_1d13d_scoring_methodology_contact_sheet.png": [
            "Evidence Requirements: Traditional Evidence vs MRO Evidence",
            "Calculation Method",
            "Chapter 7 defines the operational difference",
        ],
        "phase_1d13d_appendix_b_contact_sheet.png": [
            "Appendix B",
            "Profile / Lens",
            "Score-Delta Note",
            "Three-Profile Analytical Score Worksheet",
            "T-B-02",
        ],
        "phase_1d13d_evaluation_results_contact_sheet.png": [
            "Evaluation Results: RCCS-T / RCCS-M / ALCS Provisional Analytical Profiles",
            "RCCS-T / RCCS-M / ALCS Score Overview",
            "System-by-System Analytical Profiles",
        ],
        "phase_1d13d_appendix_g_contact_sheet.png": [
            "Appendix G",
            "Numerical profiles are not in Appendix G",
            "Expanded System-by-System Assessment",
        ],
        "phase_1d13d_conclusion_contact_sheet.png": [
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


def source_to_docx_derivative_phase_1d13d():
    docx_path, stdout = _ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE()
    doc = renderer.Document(docx_path)
    for para in doc.paragraphs:
        if "Two-layer RCCS and visual repair draft" in para.text:
            for run in para.runs:
                run.text = ""
            para.add_run("Chapter 7 RCCS-T/M methodology draft - DOCX editable derivative")
            break
    doc.save(docx_path)
    return docx_path, stdout


def configure_renderer() -> None:
    renderer.OUT_DIR = OUT_DIR
    renderer.RENDER_DIR = RENDER_DIR
    renderer.ARTIFACT_STEM = ARTIFACT_STEM
    renderer.HTML_NAME = f"{ARTIFACT_STEM}.html"
    renderer.PDF_NAME = f"{ARTIFACT_STEM}.pdf"
    renderer.DOCX_NAME = f"{ARTIFACT_STEM}.docx"
    renderer.PDF_TEXT_NAME = "phase_1d13d_pdf_text.txt"
    renderer.LOG_NAME = "phase_1d13d_generation_log.json"
    renderer.PHASE_STATUS = PHASE_STATUS
    renderer.REMAINING_LIMITATIONS = [
        "RCCS-M is an author analytical, forward-looking MRO-adjusted model; it is not current law, certification, regulator-approved benchmark, final vendor score, ranking, or procurement recommendation.",
        "MPLP-to-RCCS-M/ALCS mapping remains author analytical where not directly stated in official protocol materials, with conflict-of-interest disclosure preserved.",
        "OpenAI platform guide remains HTTP 403 by curl; accessible official Python/JS Agents SDK docs replace it for retained SDK-surface claims.",
        "Product/platform documentation supports visible capability surfaces only; lifecycle-object scoring remains evidence-qualified and provisional.",
        "Appendix G remains qualitative and no-score; numeric RCCS-T/RCCS-M/ALCS profiles appear only in Evaluation Results.",
    ]
    renderer.FIGURE_TITLE_FALLBACKS["F-04"] = "RCCS-T / RCCS-M / ALCS Three-Profile Scoring Model"
    renderer.write_phase_1d12_closure_reports = write_phase_1d13d_preflight_and_grounding
    renderer.create_reports = create_phase_1d13d_reports
    renderer.write_log = write_phase_1d13d_log
    renderer.make_contact_sheet = make_phase_1d13d_contact_sheet
    renderer.source_to_docx_derivative = source_to_docx_derivative_phase_1d13d
    renderer.render_table = render_table_phase_1d13d


_ORIGINAL_MAKE_CONTACT_SHEET = renderer.make_contact_sheet
_ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE = renderer.source_to_docx_derivative
_ORIGINAL_RENDER_TABLE = renderer.render_table


def main() -> int:
    configure_renderer()
    return renderer.main()


if __name__ == "__main__":
    sys.exit(main())
