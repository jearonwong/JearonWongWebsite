# Phase 1D-12 Preflight

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS

| Check | Result |
|---|---|
| git remote -v | `origin	https://github.com/jearonwong/jearonwongwebsite.git (fetch)
origin	https://github.com/jearonwong/jearonwongwebsite.git (push)` |
| Branch | `main` |
| Local HEAD | `733e05c3461daf297c4d112cf56d4825cf34e6dd` |
| origin HEAD | `733e05c3461daf297c4d112cf56d4825cf34e6dd	HEAD` |
| Local equals origin/main | PASS |
| Starting HEAD reviewed | CHECK |

## Git Status Before Phase 1D-12 Edits

```text
?? gaic_v032_work/clean_forbidden_phrases.py
?? gaic_v032_work/compact_docx.py
?? gaic_v032_work/convert_and_qa.py
?? gaic_v032_work/generate_docs.py
?? gaic_v032_work/lo_profile_final/
?? gaic_v032_work/lo_profile_final2/
?? gaic_v032_work/lo_profile_final3/
?? gaic_v032_work/lo_profile_final4/
?? gaic_v032_work/lo_profile_final5/
?? gaic_v032_work/output/
?? gaic_v032_work/output_r2/
?? gaic_v032_work/output_r3/
?? gaic_v032_work/patch_gaic_v032.py
?? gaic_v032_work/pdf_out/
?? gaic_v032_work/pydeps/
?? gaic_v032_work/rebuild_document.py
?? gaic_v032_work/reconstruct_complete_document.py
?? gaic_v032_work/remediate_document.py
?? gaic_v032_work/render_final/
?? gaic_v032_work/render_v031_converted/
?? gaic_v032_work/source_r3/reports/phase-1d12-boundary-claim-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-boundary-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-chapter-hierarchy-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-chapter-result-hierarchy-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-chart-implementation-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-chart-visualization-plan.md
?? gaic_v032_work/source_r3/reports/phase-1d12-citation-boundary-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-citation-closure-ledger.md
?? gaic_v032_work/source_r3/reports/phase-1d12-citation-status-layer-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-codeblock-object-card-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-content-preservation-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-docx-derivative-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-evaluation-results-architecture.md
?? gaic_v032_work/source_r3/reports/phase-1d12-evaluation-results-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-final-citation-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-final-visual-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-frontmatter-toc-overview-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-html-publication-generation-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-html-visual-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-l2-product-reference-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d12-mplp-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d12-openai-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d12-pagination-refinement-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-preflight.md
?? gaic_v032_work/source_r3/reports/phase-1d12-provisional-score-model.md
?? gaic_v032_work/source_r3/reports/phase-1d12-rccs-alcs-score-visualization-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-rccs-alcs-visual-results-plan.md
?? gaic_v032_work/source_r3/reports/phase-1d12-references-section-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-references-source-update.md
?? gaic_v032_work/source_r3/reports/phase-1d12-rubric-table-reflow-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-score-chart-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-score-evidence-integrity-check.md
?? gaic_v032_work/source_r3/reports/phase-1d12-score-visuals-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-scoring-feasibility-audit.md
?? gaic_v032_work/source_r3/reports/phase-1d12-semantic-table-layout-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-semantic-table-type-system.md
?? gaic_v032_work/source_r3/reports/phase-1d12-source-citation-layer-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-system-table-reflow-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-table-layout-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-table-semantics-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-table-typography-report.md
?? gaic_v032_work/source_r3/reports/phase-1d12-two-layer-rccs-model.md
?? gaic_v032_work/source_r3/reports/phase-1d12-two-layer-rccs-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d12-validation-lab-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d12-visual-blocker-audit.md
?? gaic_v032_work/source_r3/reports/phase-1d12-visual-boundary-spot-qa.md
?? gaic_v032_work/source_r3/scripts/generate_r3_phase1d12_html_publication.py
?? gaic_v032_work/v031_converted.docx
?? gaic_v032_work/v031_extracted_pages.txt
?? gaic_v032_work/v031_outline.txt
```

Untracked historical files outside `gaic_v032_work/source_r3` are left untouched and unstaged.
