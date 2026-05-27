# Wide Table Generation Readiness Plan

## Purpose

Plan future generation readiness for wide tables.

## Required Wide-Table Risk List

- `T-02-01`
- `T-09-01`
- `T-14-01`
- `T-18-01`
- `T-21-01`
- `T-27-01`

## Required Pre-Generation Decisions

| Decision | Future planning requirement |
|---|---|
| HTML treatment | Choose horizontal scroll, table card pattern, split table, or condensed view before generation. |
| PDF treatment | Choose split, condensed, landscape-style, or appendix-summary strategy before generation. |
| Appendix treatment | Decide when appendix summaries supplement full tables without replacing required body table IDs. |
| Table ID preservation | Preserve body table IDs and avoid creating duplicate or conflicting IDs. |
| Visual QA | Define screenshots/page samples and table-readability checks before generation. |

## Blocking Decision

Wide-table planning should be a gate in the future generation wave. It does not block R3T generation planning, but unresolved wide-table treatment should block actual artifact candidate generation until a specific treatment and QA plan are accepted.

## R3T Boundary

No layout implementation occurs in R3T. No HTML/CSS/PDF/table rendering work is performed.
