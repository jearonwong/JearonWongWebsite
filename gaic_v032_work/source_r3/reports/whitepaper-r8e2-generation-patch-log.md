# WHITEPAPER-R8E-2 Generation Patch Log

**Date:** 2026-05-19

## Files Changed

- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`
- Public GAIC/AIAAWP PDFs and integrity surfaces after proof passed

## Old Behavior

- R8E-1 left GAIC Appendix D third split matrix in a layout that collapsed long OpenAI/CrewAI columns into vertical single-character text.
- GAIC system-by-system analytical profiles inherited a two-column web grid in the PDF.
- Body pages had footer treatment but not a consistent restrained header page family.
- Visual QA was representative but not backed by a full-page systematic sweep.

## New Behavior

- Appendix D MRO mapping is transformed into a dedicated landscape split-matrix module.
- Long vendor/framework names and status cells wrap horizontally with explicit column widths.
- GAIC system profiles render as full-width sequential profile blocks in PDF.
- Score overview, heatmap, and profile cards keep primary/secondary hierarchy.
- Portrait and landscape body pages now carry restrained running headers plus consistent footer/copyright.
- SOP now requires Full PDF Publication Visual QA before production reverification.

## Impact

| Surface | Impact |
| --- | --- |
| HTML | Public HTML files unchanged; hashes unchanged. |
| PDF | GAIC and AIAAWP public PDFs regenerated after internal proof passed. |
| Content | No prose, score, methodology, AARM, MRO, or source-claim semantic changes. |
| DOCX | Public DOCX remains absent/offboarded. |
| Integrity | Public checksums, manifests, hub hash displays, and JSON-LD hash references updated. |
