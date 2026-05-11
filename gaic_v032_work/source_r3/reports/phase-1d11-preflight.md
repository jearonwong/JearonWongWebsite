# Phase 1D-11 Preflight

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS

| Check | Result |
|---|---|
| git remote -v | `origin	https://github.com/jearonwong/jearonwongwebsite.git (fetch)
origin	https://github.com/jearonwong/jearonwongwebsite.git (push)` |
| Branch | `main` |
| Local HEAD | `fbcdbef97fdc0e55267fecda15b8af5600712cb3` |
| origin HEAD | `fbcdbef97fdc0e55267fecda15b8af5600712cb3	HEAD` |
| Local equals origin/main | PASS |
| Starting HEAD reviewed | PASS |

## Git Status Before Phase 1D-11 Edits

```text
M gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md
 M gaic_v032_work/source_r3/appendices/appendix-c-placeholder.md
 M gaic_v032_work/source_r3/appendices/appendix-d-placeholder.md
 M gaic_v032_work/source_r3/appendices/appendix-i-placeholder.md
 M gaic_v032_work/source_r3/appendices/appendix-j-placeholder.md
 M gaic_v032_work/source_r3/appendices/appendix-k-placeholder.md
 M gaic_v032_work/source_r3/design/gaic-html-publication-style.md
 M gaic_v032_work/source_r3/inventories/citation-inventory.md
 M gaic_v032_work/source_r3/inventories/citation-rendering-qa-checklist.md
 M gaic_v032_work/source_r3/inventories/claim-evidence-register.md
 M gaic_v032_work/source_r3/inventories/page-level-citation-map.md
 M gaic_v032_work/source_r3/inventories/source-coverage-matrix.md
 M gaic_v032_work/source_r3/reports/known-issues.md
 M gaic_v032_work/source_r3/reports/reconstruction-notes.md
 M gaic_v032_work/source_r3/sections/12-detailed-system-mappings.md
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
?? gaic_v032_work/source_r3/reports/phase-1d11-boundary-claim-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-chapter-hierarchy-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-chapter-result-hierarchy-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-chart-implementation-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-chart-visualization-plan.md
?? gaic_v032_work/source_r3/reports/phase-1d11-citation-boundary-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-citation-closure-ledger.md
?? gaic_v032_work/source_r3/reports/phase-1d11-citation-status-layer-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-codeblock-object-card-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-content-preservation-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-docx-derivative-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-evaluation-results-architecture.md
?? gaic_v032_work/source_r3/reports/phase-1d11-evaluation-results-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-final-citation-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-frontmatter-toc-overview-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-html-publication-generation-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-html-visual-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-l2-product-reference-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d11-mplp-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d11-openai-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d11-pagination-refinement-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-preflight.md
?? gaic_v032_work/source_r3/reports/phase-1d11-provisional-score-model.md
?? gaic_v032_work/source_r3/reports/phase-1d11-rccs-alcs-score-visualization-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-rccs-alcs-visual-results-plan.md
?? gaic_v032_work/source_r3/reports/phase-1d11-references-section-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-references-source-update.md
?? gaic_v032_work/source_r3/reports/phase-1d11-rubric-table-reflow-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-score-evidence-integrity-check.md
?? gaic_v032_work/source_r3/reports/phase-1d11-score-visuals-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-scoring-feasibility-audit.md
?? gaic_v032_work/source_r3/reports/phase-1d11-semantic-table-layout-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-semantic-table-type-system.md
?? gaic_v032_work/source_r3/reports/phase-1d11-source-citation-layer-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-system-table-reflow-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-table-layout-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-table-semantics-qa.md
?? gaic_v032_work/source_r3/reports/phase-1d11-table-typography-report.md
?? gaic_v032_work/source_r3/reports/phase-1d11-validation-lab-source-closure.md
?? gaic_v032_work/source_r3/reports/phase-1d11-visual-boundary-spot-qa.md
?? gaic_v032_work/source_r3/scripts/generate_r3_phase1d11_html_publication.py
?? gaic_v032_work/v031_converted.docx
?? gaic_v032_work/v031_extracted_pages.txt
?? gaic_v032_work/v031_outline.txt
```

Untracked historical files outside `gaic_v032_work/source_r3` are left untouched and unstaged.
