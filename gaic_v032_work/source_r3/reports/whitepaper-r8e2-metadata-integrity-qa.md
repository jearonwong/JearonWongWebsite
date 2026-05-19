# WHITEPAPER-R8E-2 Metadata / Manifest / Checksum QA

**Date:** 2026-05-19

## Metadata

| PDF | Metadata Result |
| --- | --- |
| GAIC | Title, subject, keywords, author, creator, producer, page count, and A4 page size verified with `pdfinfo` |
| AIAAWP | Title, subject, keywords, author, creator, producer, page count, and A4 page size verified with `pdfinfo` |

## Checksums

| Surface | Result |
| --- | --- |
| GAIC checksums | PASS |
| AIAAWP checksums | PASS |
| GAIC public manifest hash in checksum file | PASS |
| AIAAWP manifest hash in checksum file and hub | PASS |

## Updated Hashes

| Surface | Current Hash |
| --- | --- |
| GAIC public PDF | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` |
| AIAAWP public PDF | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` |
| GAIC public PDF manifest | `2bf0b50df4b1344e0ae625d83f78276fe626e4a9e5efe18770afde050020e677` |
| AIAAWP manifest | `a658e875a94b5c47b6ed693826f92aef62634d72bd68be3bac93cf350c58544b` |

## Stale Hash Review

- Old R8E-1 public PDF hashes remain only as historical previous values in R8E-2 manifest/report context or in older R8E-1 reports.
- No old R8E-1 PDF hash remains where the current public hash is expected.
- GAIC sealed candidate historical hash remains historical only.
- No DOCX public artifact reference remains.

## Result

Metadata and integrity QA passed. Production reverification remains required after deployment.
