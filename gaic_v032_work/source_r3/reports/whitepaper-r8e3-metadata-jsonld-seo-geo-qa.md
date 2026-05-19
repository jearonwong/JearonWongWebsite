# WHITEPAPER-R8E-3 Metadata / JSON-LD / SEO-GEO QA

## Parse Checks

| Surface | Check | Result |
|---|---|---|
| GAIC public candidate manifest | JSON parse | PASS |
| GAIC public PDF metadata manifest | JSON parse | PASS |
| AIAAWP manifest | JSON parse | PASS |
| Entity graph JSON | JSON parse | PASS |
| Build-generated route JSON-LD | `npm run build` completed | PASS |

## Metadata Checks

| Check | Result |
|---|---|
| Homepage metadata remains valid | PASS |
| Homepage JSON-LD includes both GAIC and AIAAWP research routes | PASS |
| GAIC hub JSON-LD keeps current PDF hash `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | PASS |
| AIAAWP hub JSON-LD keeps current PDF hash `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | PASS |
| GAIC public PDF page count exposed as `485` in current public surfaces | PASS |
| AIAAWP public PDF page count exposed as `118` where shown/encoded | PASS |
| Evidence Registry remains parseable/buildable | PASS |
| Entity graph JSON remains parseable | PASS |
| `llms.txt` includes both whitepapers and no public DOCX | PASS |
| Sitemap build includes both research routes | PASS |
| No SEO/GEO uplift, indexing, or answer-engine recognition claim introduced | PASS |

## Notes

The historical GAIC seal report still records `425` pages for the May 12 sealed candidate. R8E-3 keeps that context historical and uses `485` for current public PDF surfaces.
