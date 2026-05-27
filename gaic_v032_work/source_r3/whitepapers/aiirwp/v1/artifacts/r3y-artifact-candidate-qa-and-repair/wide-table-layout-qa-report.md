# Wide-Table Layout QA Report

## Required Wide-Table Risk List

- `T-02-01`
- `T-09-01`
- `T-14-01`
- `T-18-01`
- `T-21-01`
- `T-27-01`

## Markdown Handling

PASS. Markdown preserves table IDs and source table content. R3Y made no Markdown layout changes.

## HTML Handling

PASS_WITH_NOTES. HTML preserves all risk table IDs. All 37 generated HTML tables are wrapped in `table-scroll` containers with screen horizontal overflow handling. Print CSS uses fixed table layout and word wrapping. No large HTML repair was needed.

## PDF Handling

PASS_WITH_NOTES. Repaired PDF text extraction preserved all required risk table IDs. First detected PDF text pages:

| Table ID | Page |
|---|---:|
| `T-02-01` | 13 |
| `T-09-01` | 39 |
| `T-14-01` | 56 |
| `T-18-01` | 66 |
| `T-21-01` | 76 |
| `T-27-01` | 93 |

R3Y also rendered internal proof PNGs for these six detected PDF pages under `proof/pdf/`. The render step produced valid 992 x 1404 PNG files; `pdftoppm` emitted Type 3 glyph bounding-box warnings during rendering, but the output files were created and are retained for later visual review.

## Repair Decision

R3Y repaired the PDF default print header/footer defect. It did not implement a new table layout system because existing HTML/PDF handling was acceptable for an internal candidate and the prompt instructed against heavy new tooling.

## Deferred Risk

Before any public route restoration execution, R3Z or later waves should retain a visual QA gate for wide tables, especially page-break readability and table text overflow. This does not block public route restoration planning.
