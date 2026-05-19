# WHITEPAPER-R8E-3 Metadata Repair Log

| File changed | Old value | New value | Reason | Surface |
|---|---|---|---|---|
| `src/pages/index.astro` | GAIC-only release module; `425-page` copy | Research-series module exposing GAIC `485-page PDF` and AIAAWP `118-page PDF` | Homepage must reflect two-whitepaper series and current PDF facts | Public |
| `src/pages/index.astro` | Homepage JSON-LD `hasPart` listed GAIC but not AIAAWP | Added AIAAWP TechArticle route | Homepage entity graph should expose both major whitepapers | Public |
| `src/pages/research/index.astro` | GAIC `425 pages` | GAIC `485 pages` | Current public PDF page count after R8E-2 | Public |
| `src/pages/research/index.astro` | AIAAWP `141 pages` | AIAAWP `118 pages` | Current public PDF page count after R8E-2 | Public |
| `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | Hero page count `425` | Hero page count `485` | Owner-observed stale page count defect | Public |
| `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | Primary manifest pointed to historical seal manifest | Primary manifest points to public PDF metadata manifest; seal manifest labeled historical | Avoid mixing sealed-candidate metadata with current public distribution metadata | Public |
| `public/research/global-ai-compliance-white-paper-2026/publication-candidate-manifest.json` | Top-level `page_count: 425` | Top-level `page_count: 485`; added `sealed_candidate_page_count: 425` | Current public metadata truth while preserving historical seal context | Public data |
| `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json` | `commit: PENDING` | `commit: c34c6be153de8e7dc949b25d933ab17dec5a9cc3` | Close R8E-2 manifest metadata residue | Public data |
| `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` | no explicit page count | `page_count: 118` | Encode current AIAAWP public PDF page count consistently | Public data |
| `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` | old manifest hash | `8511f5705995967bbbbd75090691853ba5322067d76f605f7f7338d2d605ad55` | Manifest changed after page-count addition | Public |
| GAIC/AIAAWP checksum files | old manifest checksum rows | recalculated manifest checksum rows | Keep checksum validation passing | Public integrity |

## Integrity Impact

No PDF or standalone public HTML artifact was regenerated. The changed hashes are metadata/checksum file hashes caused by route and manifest corrections only.
