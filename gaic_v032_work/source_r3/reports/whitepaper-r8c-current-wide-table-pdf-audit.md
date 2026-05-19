# WHITEPAPER-R8C Current Wide-Table PDF Audit

**Date:** 2026-05-19
**Purpose:** Record the P0 GAIC PDF wide-table defect that invalidated the R8 PDF A4 Print Profile PASS.

## GAIC Finding

| Item | Result |
| --- | --- |
| Affected PDF | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` |
| Pre-repair hash | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` |
| Affected area | Comparative Field Positioning Matrix, especially RCCS-M / ALCS posture continuation columns |
| Defect | Wide-table continuation columns collapsed into unreadable vertical single-character header/cell text |
| Severity | P0 blocker |

The user-observed defect was reproduced in the GAIC public PDF. The key proof image is:

- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-145.png`

Additional current-state renders were captured for nearby pages:

- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-144.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-146.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-147.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-148.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-149.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-150.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-151.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-152.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/gaic/page-153.png`

## AIAAWP Check

Representative AIAAWP dense-table / row-card pages were inspected. No equivalent vertical single-character column defect was observed.

Current proof images:

- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/aiaawp/page-020.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/aiaawp/page-021.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/aiaawp/page-022.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/aiaawp/page-023.png`
- `gaic_v032_work/source_r3/reports/whitepaper-r8c-current-wide-table-renders/aiaawp/page-024.png`

## Root Cause

The R8 PDF CSS used `table-layout: fixed` with aggressive word breaking. In Chrome's PDF print renderer, wide table continuation columns were forced below a readable width, producing vertical single-letter headers and cell text.

## Required Repair

GAIC PDF cannot pass until the Comparative Field Positioning Matrix and equivalent wide-table patterns render as readable A4 content with no vertical single-character columns, no catastrophic clipping, and preserved text extraction.
