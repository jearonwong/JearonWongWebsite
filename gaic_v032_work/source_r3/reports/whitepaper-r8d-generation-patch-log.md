# WHITEPAPER-R8D Generation Patch Log

**Date:** 2026-05-19

## File Changed

- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`

## Old R8C Behavior

R8C used a broad wide-table transform. Unsafe wide tables were converted into PDF-only row cards. This fixed vertical single-character table text, but it weakened high-comparison matrices such as GAIC Table T-11-01.

## New R8D Behavior

R8D adds profile-aware table rendering:

- `table_profile(...)` classifies wide tables by nearby heading/context, headers, and table text.
- `should_preserve_matrix(...)` preserves comparative and score/rubric profiles in table form.
- Non-comparative wide tables can still use the PDF-only row-card fallback.
- `.table-system-profile` CSS controls the split matrix widths for GAIC comparative system/profile tables.
- `transform_readiness_levels_for_pdf(...)` converts AIAAWP Table 9 from row-card HTML into a PDF-only split rubric matrix.
- `transform_tables_for_pdf(...)` replaces the R8C blanket wide-table conversion.

## Table Profile Effects

| Profile | R8D renderer behavior |
| --- | --- |
| Comparative Matrix | Preserve table or split matrix, no row-card default |
| Score / Rubric Matrix | Preserve table or split rubric matrix |
| Lifecycle Mapping Table | Preserve when comparison is central; row-card where self-contained |
| Registry / Inventory Table | Row-card allowed |
| Evidence Request Table | Row-card allowed |
| Appendix Long Table | Row-card or compact registry allowed |

## Impact

| Area | Impact |
| --- | --- |
| Public HTML | No mutation; hashes unchanged |
| GAIC PDF | Regenerated; Table T-11-01 now split matrix with repeated key column |
| AIAAWP PDF | Regenerated through same renderer; Table 9 now split rubric matrix |
| Content semantics | No prose, score, methodology, or boundary change |
| DOCX public distribution | No reintroduction |
