# WHITEPAPER-R8F Production Page Count QA

Date: 2026-05-20

## PDF Page Counts

`pdfinfo` was run against the downloaded production PDFs under `/tmp/whitepaper-r8f-live/`.

| PDF | Expected | Observed | Result |
| --- | ---: | ---: | --- |
| GAIC public PDF | 485 | 485 | PASS |
| AIAAWP public PDF | 118 | 118 | PASS |

## Public Surface Page Count Checks

- Production homepage shows GAIC as `485-page PDF`.
- Production homepage shows AIAAWP as `118-page PDF`.
- GAIC hub source and local build show current page count `485`.
- AIAAWP hub source and local build show current page count `118`.
- Research index includes both whitepapers and retains current page counts/status language.
- No current-public stale `425` was found in the repaired public metadata surfaces.
- No current-public stale `141` was found for AIAAWP.

## Result

PASS. Current production PDF page counts match expected R8E-2 artifact facts.
