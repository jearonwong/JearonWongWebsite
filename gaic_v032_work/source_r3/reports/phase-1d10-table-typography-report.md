# Phase 1D-10 Table Typography Report

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / QA REQUIRED

## CSS Changes

- Normal body table cells increased to approximately 8.7 pt print equivalent.
- Normal table headers increased to approximately 8.5 pt.
- Table captions set near 10 pt and bold.
- Split/high-risk tables use compact mode but no longer apply the smallest density globally.
- Appendix compact tables may use approximately 7.35 pt only where dense technical appendix layout requires it.
- `table-layout: fixed` and semantic column splitting remain for very wide tables.

## Counts

| Metric | Count |
|---|---:|
| Table records rendered | 186 |
| Split wide/high-risk tables | 113 |
| Missing active table IDs in PDF text | 0 |

## Decision

Normal body tables now align more closely with body typography. Dense appendix tables remain compact but are visually distinguished as technical appendix material.
