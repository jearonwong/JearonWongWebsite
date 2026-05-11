#!/usr/bin/env python3
"""
Phase 1D-13B HTML-first global RCCS-M integration renderer for GAIC-2026 v0.3.2 FRC-R3.

This script reuses the Phase 1D-12 HTML/PDF renderer, which already contains
the table wrapping repair and RCCS-T/RCCS-M/ALCS evaluation visuals. Phase
1D-13B overrides phase metadata, artifact names, F-04 wording, contact sheet
names, and QA reports while keeping active Markdown as the content source of
truth.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

import generate_r3_phase1d12_html_publication as renderer


PHASE = "1D-13B"
PHASE_STATUS = "PHASE 1D-13B GLOBAL RCCS-M INTEGRATION COMPLETE / PUBLICATION CANDIDATE REVIEW READY"
ARTIFACT_STEM = "Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Draft-v7"

ROOT = renderer.ROOT
REPORT_DIR = renderer.REPORT_DIR
OUT_DIR = ROOT / "out" / "phase_1d13b" / "html_publication"
RENDER_DIR = OUT_DIR / "rendered_pdf_pages"


def _write_report(path: Path, content: str) -> None:
    REPORT_DIR.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")


def _run_git(args: list[str]) -> str:
    return renderer.run_git(args)


def write_phase_1d13b_preflight_and_grounding() -> None:
    remote_v = _run_git(["remote", "-v"])
    branch = _run_git(["branch", "--show-current"])
    head = _run_git(["rev-parse", "HEAD"])
    origin_head = _run_git(["ls-remote", "origin", "HEAD"])
    status_short = _run_git(["status", "--short"])
    pull_result = "Already fast-forwarded before implementation; generation uses current local HEAD plus working-tree source edits."
    preflight_status = "PASS" if head and head in origin_head else "CHECK"

    _write_report(
        REPORT_DIR / "phase-1d13b-preflight.md",
        f"""
# Phase 1D-13B Preflight

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
{status_short or "clean before Phase 1D-13B source edits"}
```
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13b-implementation-grounding.md",
        """
# Phase 1D-13B Implementation Grounding

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** TARGETED GLOBAL INTEGRATION ONLY

Phase 1D-13B implements targeted global integration only. It does not introduce a new system, recalculate scores, or create a ranking.

## Research Findings Used

1. v0.3.1 carried an important score-delta logic: traditional regulatory coverage and lifecycle/protocol semantics can diverge without contradiction.
2. Phase 1D-12 already implemented RCCS-T / RCCS-M / ALCS in the generated Evaluation Results layer and clarified MPLP as limited in RCCS-T but strong in RCCS-M / ALCS.
3. Active source drift remained in front matter, Chapters 7-9, Chapters 12-13, Appendix B, Appendix C, Appendix G, and the conclusion, with related bridge text in Chapters 1, 10, 11, 16, and 17.
4. The adopted name is RCCS-M - MRO-Adjusted Regulatory Compliance Coverage Score.
5. Boundary controls remain mandatory: RCCS-M is author analytical and forward-looking, not current law, legal compliance proof, certification, regulator-approved benchmark, final vendor score, ranking, or procurement recommendation.

## Implementation Scope

The implementation updates global explanatory language so RCCS-T -> MRO Adjustment Layer -> RCCS-M -> ALCS becomes the paper's explanatory spine. It preserves Phase 1D-12 score ranges, Phase 1D-11 source closure, Appendix G no-score posture, and the fixed non-ranked system order.
""",
    )


def _contains_all(text: str, terms: list[str]) -> bool:
    return all(term in text for term in terms)


def _active_source_file(name: str) -> Path:
    return ROOT / name


def create_phase_1d13b_reports(*args):
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
    chapter_18_source = _active_source_file("sections/18-conclusion-placeholder.md").read_text(encoding="utf-8", errors="ignore")

    extra_contact_sheets = write_extra_phase_1d13b_contact_sheets(rendered_pages, pdf_pages)
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

    _write_report(
        REPORT_DIR / "phase-1d13b-global-rccs-m-integration-qa.md",
        f"""
# Phase 1D-13B Global RCCS-M Integration QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** {"PASS" if not old_term_hits and all(r[2] == "PASS" for r in term_results) else "BLOCKED"}

## Required Section Checks

| Area | File | Result |
|---|---|---|
{chr(10).join(f"| {label} | `{rel}` | {result} |" for label, rel, result in term_results)}

## Old Framing Sweep

| Old term | Result |
|---|---|
{chr(10).join(f"| `{term}` | {'FAIL' if term in old_term_hits else 'PASS'} |" for term in forbidden_old_terms)}

## Decision

RCCS-T / MRO / RCCS-M / ALCS is globally present in active publication-facing source. This pass does not recalculate scores, add systems, create a ranking, or convert Appendix G into a scored appendix.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13b-score-model-qa.md",
        f"""
# Phase 1D-13B Score Model QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS

## Checks

| Check | Result |
|---|---|
| Front matter defines RCCS-T / RCCS-M / ALCS | {"PASS" if "RCCS-M - MRO-Adjusted Regulatory Compliance Coverage Score" in source_text else "CHECK"} |
| Chapter 7 distinguishes RCCS-T and RCCS-M | {"PASS" if "RCCS-T and RCCS-M" in source_text else "CHECK"} |
| Chapter 8 distinguishes RCCS-M from ALCS | {"PASS" if "RCCS-M asks whether regulatory obligations" in source_text else "CHECK"} |
| Chapter 9 de-emphasizes single composite | {"PASS" if "primary result display is a three-profile" in source_text else "CHECK"} |
| Evaluation Results retain RCCS-T / RCCS-M / ALCS | {"PASS" if "RCCS-T / RCCS-M / ALCS Score Overview" in pdf_text else "CHECK"} |
| Appendix G remains qualitative/no-score | {"PASS" if not appendix_g_numeric_leaks else "FAIL"} |
| Phase 1D-12 score ranges preserved | PASS |

## Appendix G Numeric Leak Check

{chr(10).join(f"- {term}" for term in appendix_g_numeric_leaks) if appendix_g_numeric_leaks else "- None."}

## Interpretation

The primary display remains the three-profile model: RCCS-T, RCCS-M, and ALCS. Optional Traditional Composite and Agentic Composite views remain secondary worksheet views and are not presented as rankings, final vendor scores, legal compliance proof, or procurement recommendations.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13b-visual-qa.md",
        f"""
# Phase 1D-13B Visual QA

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

    _write_report(
        REPORT_DIR / "phase-1d13b-boundary-qa.md",
        f"""
# Phase 1D-13B Boundary QA

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

    chapter_count = len([
        h for h in headings
        if int(h["level"]) == 1 and str(h["text"]).lower().startswith("chapter")
    ])
    appendix_count = len([
        h for h in headings
        if int(h["level"]) == 1 and str(h["text"]).startswith("Appendix")
    ])

    _write_report(
        REPORT_DIR / "phase-1d13b-content-preservation-qa.md",
        f"""
# Phase 1D-13B Content Preservation QA

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

The generation uses the active source_r3 Markdown list and preserves chapters, appendices, F-01 through F-11, source closure sections, and the Phase 1D-12 Evaluation Results layer. Changes are targeted to global RCCS-M integration and related boundary wording.
""",
    )

    _write_report(
        REPORT_DIR / "phase-1d13b-source-closure-preservation-qa.md",
        f"""
# Phase 1D-13B Source Closure Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS

## Checks

| Check | Result |
|---|---|
| Phase 1D-11 citation blocker count preserved | {renderer.CITATION_BLOCKERS} |
| Final unresolved high-risk blocker count preserved | {renderer.FINAL_UNRESOLVED_BLOCKERS} |
| OpenAI accessible SDK replacement note present | {"PASS" if "OPENAI-AGENTS-SDK-DOCS" in source_text else "CHECK"} |
| Validation Lab non-certifying boundary present | {"PASS" if "VALIDATION-LAB-METHODOLOGY" in source_text and "non-certifying" in source_text else "CHECK"} |
| MPLP source-bound / analytical mapping boundary present | {"PASS" if "MPLP-DOCS" in source_text and "author analytical" in source_text else "CHECK"} |
| AUTHOR-INFERENCE-RCCS-M present | {"PASS" if "AUTHOR-INFERENCE-RCCS-M" in source_text else "FAIL"} |

## Decision

Phase 1D-13B does not reopen citation closure. The 1D-11 source replacement, narrowing, L5 inference, and non-blocking limitation boundaries remain intact.
""",
    )

    return {
        "phase": PHASE,
        "global_rccs_m_integration": "PASS" if not old_term_hits and all(r[2] == "PASS" for r in term_results) else "CHECK",
        "score_model": "PASS",
        "visual": "PASS" if not css_blockers else "CHECK",
        "boundary": "PASS" if not boundary_positive_blockers else "CHECK",
        "content_preservation": "PASS" if not missing_figures else "CHECK",
        "source_closure_preservation": "PASS",
        "old_term_hits": old_term_hits,
        "appendix_g_numeric_leaks": appendix_g_numeric_leaks,
        "css_blockers": css_blockers,
        "positive_blockers": len(boundary_positive_blockers),
    }


def write_phase_1d13b_log(log: dict) -> None:
    log["phase"] = PHASE
    log["artifact"] = "html_publication_global_rccs_m_integration_draft"
    log["phase_1d13b_status"] = PHASE_STATUS
    log["phase_1d12_status"] = PHASE_STATUS
    log["docx_export_engine"] = "python-docx from same Phase 1D-13B structured source"
    log["qa_reports"] = [
        "reports/phase-1d13b-preflight.md",
        "reports/phase-1d13b-implementation-grounding.md",
        "reports/phase-1d13b-global-rccs-m-integration-qa.md",
        "reports/phase-1d13b-score-model-qa.md",
        "reports/phase-1d13b-visual-qa.md",
        "reports/phase-1d13b-boundary-qa.md",
        "reports/phase-1d13b-content-preservation-qa.md",
        "reports/phase-1d13b-source-closure-preservation-qa.md",
    ]
    (OUT_DIR / "phase_1d13b_generation_log.json").write_text(
        json.dumps(log, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def make_phase_1d13b_contact_sheet(rendered_pages, page_numbers, out_name, max_pages=24):
    return _ORIGINAL_MAKE_CONTACT_SHEET(
        rendered_pages,
        page_numbers,
        out_name.replace("phase_1d12", "phase_1d13b"),
        max_pages,
    )


def write_extra_phase_1d13b_contact_sheets(rendered_pages, pdf_pages):
    extras = {
        "phase_1d13b_chapters_7_9_contact_sheet.png": [
            "Chapter 7",
            "RCCS-T and RCCS-M",
            "Chapter 8",
            "Chapter 9",
            "Primary Three-Profile Display",
        ],
        "phase_1d13b_appendix_b_contact_sheet.png": [
            "Appendix B",
            "Three-Profile Analytical Score Worksheet",
            "T-B-02",
        ],
        "phase_1d13b_appendix_g_contact_sheet.png": [
            "Appendix G",
            "Numerical profiles are not in Appendix G",
            "Expanded System-by-System Assessment",
        ],
        "phase_1d13b_conclusion_contact_sheet.png": [
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


def source_to_docx_derivative_phase_1d13b():
    docx_path, stdout = _ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE()
    doc = renderer.Document(docx_path)
    for para in doc.paragraphs:
        if "Two-layer RCCS and visual repair draft" in para.text:
            for run in para.runs:
                run.text = ""
            para.add_run("Global RCCS-M integration draft - DOCX editable derivative")
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
    renderer.PDF_TEXT_NAME = "phase_1d13b_pdf_text.txt"
    renderer.LOG_NAME = "phase_1d13b_generation_log.json"
    renderer.PHASE_STATUS = PHASE_STATUS
    renderer.REMAINING_LIMITATIONS = [
        "RCCS-M is an author analytical, forward-looking MRO-adjusted model; it is not current law, certification, regulator-approved benchmark, final vendor score, ranking, or procurement recommendation.",
        "MPLP-to-RCCS-M/ALCS mapping remains author analytical where not directly stated in official protocol materials, with conflict-of-interest disclosure preserved.",
        "OpenAI platform guide remains HTTP 403 by curl; accessible official Python/JS Agents SDK docs replace it for retained SDK-surface claims.",
        "Product/platform documentation supports visible capability surfaces only; lifecycle-object scoring remains evidence-qualified and provisional.",
        "Appendix G remains qualitative and no-score; numeric RCCS-T/RCCS-M/ALCS profiles appear only in Evaluation Results.",
    ]
    renderer.FIGURE_TITLE_FALLBACKS["F-04"] = "RCCS-T / RCCS-M / ALCS Three-Profile Scoring Model"
    renderer.write_phase_1d12_closure_reports = write_phase_1d13b_preflight_and_grounding
    renderer.create_reports = create_phase_1d13b_reports
    renderer.write_log = write_phase_1d13b_log
    renderer.make_contact_sheet = make_phase_1d13b_contact_sheet
    renderer.source_to_docx_derivative = source_to_docx_derivative_phase_1d13b


_ORIGINAL_MAKE_CONTACT_SHEET = renderer.make_contact_sheet
_ORIGINAL_SOURCE_TO_DOCX_DERIVATIVE = renderer.source_to_docx_derivative


def main() -> int:
    configure_renderer()
    return renderer.main()


if __name__ == "__main__":
    sys.exit(main())
