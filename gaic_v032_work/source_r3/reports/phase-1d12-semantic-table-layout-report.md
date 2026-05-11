# Phase 1D-12 Semantic Table Layout Report

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / PUBLICATION-CANDIDATE REVIEW READY

## Layout Rules Active

- Rubric tables: score column compact; evidence text receives card/full-width treatment where long.
- System profile tables: rendered as profile cards where long evidence/boundary text would be compressed.
- Source register and governance tables: eligible long rows render as semantic row cards.
- Score overview table: explicit colgroup-like CSS gives wider evidence-boundary column and compact score columns.

## Counts

| Metric | Count |
|---|---:|
| Tables converted to rubric cards | 50 |
| Tables converted to system profile cards | 30 |
| Tables converted to semantic row cards | 25 |
| Tables using semantic column split | 8 |
| Dense/high-risk table records | 54 |

## T-08-13 Before/After Note

T-08-13 remains sourced as a rubric table, but publication rendering uses `rubric card reflow`. This avoids equal-width column imbalance by treating score as a compact badge and evidence text as the primary readable content.

## Remaining Risk

Human visual review should still inspect wide appendix tables after final citation closure, but no automated missing-table or clipping blocker is reported in this phase.
