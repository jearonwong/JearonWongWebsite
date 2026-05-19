# WHITEPAPER-R8D Comparative Table Rendering Strategy

**Date:** 2026-05-19

## Decision

Use profile-aware PDF-only table rendering. The public HTML Web Reading Profile remains unchanged. The renderer transforms only temporary PDF-mode HTML before Headless Chrome generates the PDF.

## Strategy By Table Type

| Profile | R8D PDF strategy |
| --- | --- |
| Comparative Matrix | Preserve table/grid. Use split matrices with repeated key columns when a single grid is too wide for A4 portrait. |
| Score / Rubric Matrix | Preserve matrix/grid or split into panels with repeated level/key column. |
| Lifecycle Mapping Table | Preserve table where comparison matters; use row-card when each stage/object is self-contained. |
| Registry / Inventory Table | Row-card acceptable when width is unsafe. |
| Evidence Request Table | Row-card or checklist layout acceptable. |
| Appendix Long Table | Split table, row-card, or compact registry format acceptable if extractable and readable. |

## GAIC T-11-01 Decision

Chosen option: Option B, split matrix with repeated key column.

The GAIC Comparative Field Positioning Matrix now renders as two consecutive matrix panels:

1. `System / Category` + `Primary Strength` + `RCCS-T Posture`
2. `System / Category` + `RCCS-M Posture` + `ALCS Posture` + `Main Lifecycle Gap to Examine`

This preserves all source rows and columns, keeps the system/category key visible in both panels, avoids vertical single-character columns, and restores side-by-side comparison across systems.

## AIAAWP Decision

AIAAWP Table 9: Auditability Readiness Levels is a score/rubric matrix. The HTML source is row-card based, but the PDF now receives a PDF-only split matrix:

1. `Level` + `Definition` + `Observable Traits` + `Minimum Evidence`
2. `Level` + `What It Does Not Prove` + `Source / Synthesis Note`

Other AIAAWP row-card layouts remain appropriate where they represent object inventories, evidence requests, or long descriptive mappings.

## Files Affected

- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- GAIC public PDF
- AIAAWP public PDF
- Public checksums, manifests, hub hash references, and QA reports

## Validation Plan

- Render representative P0/P1 pages to PNG.
- Verify T-11-01 is matrix-like, not row-card-only.
- Verify AIAAWP Table 9 preserves L0-L5 comparability.
- Verify PDF text extraction contains repaired table content.
- Verify public HTML hashes remain unchanged.
- Verify DOCX public offboarding remains intact.
