# WHITEPAPER-R8E-3 Page Count and Artifact Metadata Audit

## PDF Page Count Extraction

| Whitepaper | Expected | Extracted | Result |
|---|---:|---:|---|
| GAIC public PDF | 485 | 485 | PASS |
| AIAAWP public PDF | 118 | 118 | PASS |

## Public Surface Audit

| Surface | Current value before repair | Expected value | Patch required | Public-facing |
|---|---|---|---|---|
| `src/pages/index.astro` GAIC homepage release module | `A 425-page public research candidate...` and no AIAAWP homepage exposure | Research-series module with GAIC `485-page PDF` and AIAAWP `118-page PDF` | YES | YES |
| `src/pages/research/index.astro` GAIC card | `425 pages` | `485 pages` | YES | YES |
| `src/pages/research/index.astro` AIAAWP card | `141 pages` | `118 pages` | YES | YES |
| `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` hero metadata | Page count `425` | Page count `485` | YES | YES |
| `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` manifest link | Historical seal manifest shown as primary manifest | Current public PDF metadata manifest primary; historical seal manifest explicitly historical | YES | YES |
| `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` manifest hash display | old manifest SHA after adding page count | current manifest SHA | YES | YES |
| GAIC public checksum file | stale manifest checksums after metadata repair | current manifest checksums | YES | YES |
| AIAAWP public checksum file | stale manifest checksum after adding page count | current manifest checksum | YES | YES |
| `public/research/global-ai-compliance-white-paper-2026/publication-candidate-manifest.json` | top-level `page_count: 425` could read as current public distribution | top-level `page_count: 485` with `sealed_candidate_page_count: 425` historical | YES | YES |
| `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json` | `commit: PENDING` | R8E-2 commit `c34c6be153de8e7dc949b25d933ab17dec5a9cc3` | YES | YES |
| `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` | no explicit page count | `page_count: 118` | YES | YES |
| `public/llms.txt` | Both whitepapers present; no stale page count | No change | NO | YES |
| entity graph JSON | Both whitepapers present; no stale page count | No change | NO | YES |
| Evidence Registry | HTML/PDF/checksum/manifest links present; no stale page count | No change | NO | YES |

## Historical Values

The historical GAIC publication-candidate seal report still records `425` pages for the May 12 sealed candidate artifact. That value remains valid only as historical sealed-candidate context and is not used as current public PDF page-count truth.

## Result

R8E-3 found current public-facing metadata drift on the homepage, research index, GAIC hub hero metadata, and manifest/checksum surfaces. PDF facts themselves are correct, so PDF regeneration is not required.
