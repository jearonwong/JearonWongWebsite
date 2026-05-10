# Phase 1D-4 Layout Continuity Rules

**Task ID:** GACWP-2026-P1D4-WHITE-PAPER-FORMAT-RESEARCH-AND-FULL-CONTENT-REFLOW  
**Phase:** 1D-4  
**Date:** May 10, 2026  
**Status:** COMPLETE - rules applied in Phase 1D-4 generator

## Core Rule

The white paper must read as a continuous technical argument, not as a collection of exported objects. Page breaks, section breaks, figures, and tables are layout tools; they must not interrupt the argument unless a major part divider justifies the break.

## Implementation Rules

1. Do not force every H1 to a new page.
2. Do not force every table to a new page.
3. Do not force every figure to a standalone page.
4. Keep each figure/table with its lead-in paragraph where feasible.
5. Follow figures/tables with interpretation text, boundary text, or the surrounding paragraph already present in source.
6. Apply keep-with-next to headings and captions, not to every table row.
7. Avoid large blank areas caused by orientation switching.
8. Prefer semantic split tables over landscape-island sections.
9. Use explicit section dividers only for the cover and major publication appendices when useful.
10. Preserve semantic continuity across page breaks.

## Table Rules

| Case | Rule |
|------|------|
| 1-4 columns | Keep portrait and continuous flow. |
| 5 columns | Keep portrait if content is short; otherwise split into core + detail. |
| 6+ columns | Split by column groups before considering landscape. |
| High-risk tables | Split semantically and record in table reflow report. |
| Ultra-dense rubrics | Keep in publication appendices but split into readable subtables. |
| Appendix G system assessments | Preserve full qualitative content; split only for readability. |

## Figure Rules

| Case | Rule |
|------|------|
| Source figure marker exists | Replace marker with DOCX-native publication panel. |
| Figure already has interpretation paragraph | Keep it immediately after the figure panel. |
| F-09 | Render as Enterprise Failure Scenario Chain; no reserved-gap language in publication output. |
| F-10/F-11 | Render as publication panels, not placeholder text. |
| Placeholder residue | Treat visible placeholder text in generated public PDF as blocker. |

## Specific Phase 1D-2 Defect Addressed

Pages like 14, 15, and 16 in the prior PDF contained avoidable blank space because figures and table blocks were isolated. In Phase 1D-4, those are treated as layout bugs. The generator therefore removes global H1 page-breaks and avoids per-table portrait/landscape section switching.

## QA Classifications

| Result | Meaning |
|--------|---------|
| PASS | Object is integrated, readable, and does not create large avoidable whitespace. |
| WARNING | Object is readable but may benefit from final art direction, manual copyfitting, or human proofing. |
| BLOCKER | Object causes placeholder residue, table clipping, unreadable text, large avoidable whitespace, or content loss. |
