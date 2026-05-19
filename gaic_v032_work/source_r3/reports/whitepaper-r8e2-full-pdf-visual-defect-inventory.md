# WHITEPAPER-R8E-2 Full PDF Visual Defect Inventory

**Date:** 2026-05-19
**Method:** Rendered current public PDFs to temporary full-page image sets, extracted text with `pdftotext -layout`, inspected owner-observed pages, and committed only representative defect/proof images.

## Full Sweep Inputs

| PDF | Current pages rendered to temp | Internal proof pages rendered to temp |
| --- | ---: | ---: |
| GAIC | 484 | 485 |
| AIAAWP | 114 | 118 |

Temporary full-page renders were created under `/tmp/r8e2-current-*` and `/tmp/r8e2-proof-*` and were not committed. Representative defect images were saved under `gaic_v032_work/source_r3/reports/whitepaper-r8e2-defect-renders/`.

## Defect Inventory

| Whitepaper | Page / Range | Section / Table | Defect Type | Severity | Evidence | Likely Cause | Proposed Repair | Required Before Reverification |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAIC | 307-312 | Appendix D, Table T-D-01 Expanded Cross-System MRO Mapping | Vertical single-character text; collapsed OpenAI column; narrow/collapsed columns | P0 | `whitepaper-r8e2-defect-renders/gaic-current-mro-vertical-307.png` through `gaic-current-mro-vertical-312.png` | Third split matrix remained in portrait/fixed-width table flow; long system names and repeated status cells collapsed | Render Appendix D MRO matrix as landscape split panels with repeated `MRO ID`, explicit column widths, and horizontal wrapping | YES |
| GAIC | 202-205 | Evaluation Results, System-by-System Analytical Profiles | Over-compressed two-column narrative; weak market/compliance interpretation | P1 | `whitepaper-r8e2-defect-renders/gaic-current-system-profiles-202.png` through `gaic-current-system-profiles-205.png` | PDF inherited web two-column card grid for high-value system analysis | Force PDF-only full-width sequential profile blocks; one system per block/page where needed | YES |
| GAIC | 198-201 | Score overview / heatmap modules | Score/range hierarchy and comparison page family required recheck | P1 | Rechecked in internal/final proof renders | Dense score and heatmap content needs publication-level hierarchy and context | Preserve score-first hierarchy and keep title/legend/boundary with table/heatmap | YES |
| GAIC / AIAAWP | Body pages | Header/footer system | Page headers insufficient or missing in R8E-1; footer consistency required | P1 | Rechecked in final proof renders | R8E-1 footer-only treatment did not create stable page family identity | Add restrained body/landscape headers and consistent footers across both PDFs | YES |
| GAIC / AIAAWP | All table-heavy pages | Full visual QA coverage | R8E-1 QA was sample-based and missed page 307-312 defect | P0 process defect | Full temporary page render counts above | Sample-only QA gate was insufficient | Add SOP Full PDF Publication Visual QA Gate and run text/image proof sweeps | YES |

## Mandatory User-Observed Checks

- GAIC page 309/310-style MRO mapping vertical text: reproduced and classified P0.
- GAIC page 202-style system-by-system analytical profiles: reproduced and classified P1.
- GAIC score overview: checked and retained score-first hierarchy.
- Landscape modules: checked for title, description, legend, boundary, and table cohesion.

## Result

All P0/P1 defects listed above were targeted for repair before public PDF replacement.
