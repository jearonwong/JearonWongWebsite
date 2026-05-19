# WHITEPAPER-R8D New Comparative Table Visual QA

**Date:** 2026-05-19

## GAIC PDF

| Check | Result |
| --- | --- |
| PDF hash | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` |
| Page count | 489 |
| Page size | A4, `594.96 x 841.92 pts` |
| Metadata | PASS |
| Cover and TOC | PASS |
| Table T-11-01 comparison semantics | PASS |
| Vertical single-character columns | PASS, not observed |
| Catastrophic clipping | PASS, not observed |
| Text extraction | PASS |

Proof images:

- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-001.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-002.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-003.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-004.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-005.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-152.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-153.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-154.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-389.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-390.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/gaic/page-489.png`

Visual finding: GAIC Table T-11-01 now appears as two matrix panels on the same page where possible. `System / Category` repeats as the key column in both panels. Systems can be scanned across rows, and RCCS-T, RCCS-M, ALCS, and lifecycle-gap comparison remains visible.

## AIAAWP PDF

| Check | Result |
| --- | --- |
| PDF hash | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` |
| Page count | 116 |
| Page size | A4, `594.96 x 841.92 pts` |
| Metadata | PASS |
| Table 9 readiness-level comparison | PASS |
| Representative dense table pages | PASS |
| Vertical single-character columns | PASS, not observed |
| Catastrophic clipping | PASS, not observed |
| Text extraction | PASS |

Proof images:

- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-020.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-021.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-022.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-023.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-029.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-030.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-031.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-057.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-058.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-059.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-087.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-088.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-089.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8d-new-comparative-table-renders/aiaawp/page-090.png`

Visual finding: AIAAWP Table 9 now preserves L0-L5 readiness comparison through split rubric matrices with the `Level` key repeated. Other representative row-card pages remain appropriate for inventory and mapping content.

## Result

PASS. The R8D PDF Table Semantic Gate passes for GAIC and AIAAWP representative P0/P1 table checks.
