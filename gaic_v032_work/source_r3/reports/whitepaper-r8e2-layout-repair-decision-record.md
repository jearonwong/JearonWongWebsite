# WHITEPAPER-R8E-2 Layout Repair Decision Record

**Date:** 2026-05-19

## Decisions

| Area | Decision | Reason |
| --- | --- | --- |
| MRO / system mapping tables | Use landscape split matrix with repeated `MRO ID` and explicit content-aware widths. | Prevents vertical text while preserving side-by-side comparison. |
| Long vendor/framework names | Wrap horizontally; do not allow single-character vertical columns. | Owner-observed OpenAI Agents SDK defect is P0. |
| System-by-system analytical profiles | Use full-width sequential profile blocks in PDF. | This is high-value market/compliance research content; two-column compression weakens interpretation. |
| Score overview / scoring tables | Preserve score-first hierarchy: system name bold, primary scores dominant, ranges secondary, confidence readable, notes secondary. | Primary evaluation result must visually dominate secondary uncertainty text. |
| Landscape modules | Title, description, legend, and boundary note travel with the table/heatmap. | Avoids detached explanatory context. |
| Headers/footers | Add restrained PDF page headers and consistent footers across GAIC and AIAAWP; cover remains clean. | Creates stable PDF publication identity without crowding body content. |
| HTML/PDF separation | Keep public HTML unchanged and responsive; apply page-system changes only to temporary PDF-mode HTML. | PDF consistency must not force HTML into A4 behavior. |
| DOCX | Keep public DOCX offboarded. | Owner decision from R8B remains active. |

## Owner-Observed Defect Decisions

- GAIC Appendix D OpenAI Agents SDK vertical text: repaired by explicit landscape split matrix.
- GAIC system analytical profiles: repaired by PDF-only full-width sequential profile layout.
- Header/footer inconsistency: repaired by `@top-left`, `@top-right`, and consistent bottom margin boxes for portrait and landscape page families.

## Non-Goals

- No GAIC RCCS-T/RCCS-M/ALCS score changes.
- No GAIC methodology or MRO definition changes.
- No AIAAWP AARM/MRO content changes.
- No public HTML mutation.
- No production reverification or Final Seal claim.
