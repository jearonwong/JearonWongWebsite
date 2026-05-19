# WHITEPAPER-R8E Generation Patch Log

**Date:** 2026-05-19

## File Changed

- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`

## Old R8D Behavior

R8D preserved comparative and score/rubric matrices and limited row-card fallback to lower-comparison tables. It did not yet make an explicit density/portrait/landscape decision per table.

## New R8E Behavior

R8E adds adaptive table decision objects:

- `TableMetrics` records profile, comparison importance, density, column count, row count, long-header risk, long-cell risk, and text density.
- `TableDecision` records the selected rendering and reason.
- `adaptive_table_decision(...)` chooses portrait inline table, portrait split matrix, dedicated landscape A4 table, or row-card.
- Dedicated landscape A4 support is implemented with a named print page and `pdf-landscape-table-page`.
- Landscape table descendant typography is normalized so nested score/badge spans cannot expand the dense grid.

## Rendering Results

| Rendering | Tables |
| --- | --- |
| Portrait inline table | Small/medium GAIC and AIAAWP tables that remain readable in normal flow |
| Portrait split matrix | GAIC T-11-01 and AIAAWP Table 9 |
| Dedicated landscape A4 table | GAIC score overview and dimension-level coverage patterns |
| Row-card / registry card | Low-comparison registry, appendix long, evidence, and descriptive mappings where readability/completeness matter more than comparison |

## Impact

| Area | Impact |
| --- | --- |
| Public HTML | No mutation; hashes unchanged |
| GAIC PDF | Regenerated; two selected landscape pages |
| AIAAWP PDF | Regenerated; no landscape pages selected |
| Content semantics | No prose, score, methodology, or boundary change |
| DOCX public distribution | No reintroduction |
