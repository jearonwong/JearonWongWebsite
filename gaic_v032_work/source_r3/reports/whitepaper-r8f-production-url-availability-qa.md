# WHITEPAPER-R8F Production URL Availability QA

Date: 2026-05-20

## Summary

Production URL availability was checked with `curl -L` for the required core site, GAIC, and AIAAWP surfaces.

Live production passed for all primary HTML/PDF/checksum artifacts and core semantic routes except two bounded site wiring gaps found before this commit:

- `https://www.jearonwong.com/ecosystem-mapping/` returned `404`; the canonical live route is `https://www.jearonwong.com/mapping/extended-ecosystem/`.
- `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/manifest.json` returned `404`; GAIC had historical/current PDF manifests but no current generic manifest URL.

Both issues were repaired in this wave:

- Added a noindex compatibility route at `src/pages/ecosystem-mapping/index.astro` with canonical target `/mapping/extended-ecosystem/`.
- Added `public/research/global-ai-compliance-white-paper-2026/manifest.json` and linked it from hub, Evidence Registry, `llms.txt`, and checksums.

## Production Statuses Checked

| Surface | Result |
| --- | --- |
| `/` | 200 |
| `/research/` | 200 |
| `/evidence/` | 200 |
| `/concepts/map/` | 200 |
| `/definitions/` | 200 |
| `/governance/` | 200 |
| `/playbooks/` | 200 |
| `/ecosystem-mapping/` | 404 before repair; local compatibility route added |
| `/mapping/extended-ecosystem/` | 200 |
| `/about/` | 200 |
| `/projects/mplp/` | 200 |
| `/llms.txt` | 200 |
| `/entity/jearonwong-mplp-gaic-entity-graph.json` | 200 |
| `/sitemap-index.xml` | 200 |
| `/sitemap-0.xml` | 200 |
| `/robots.txt` | 200 |
| GAIC hub | 200 |
| GAIC HTML | 200 |
| GAIC PDF | 200 |
| GAIC `manifest.json` | 404 before repair; current manifest added |
| GAIC `checksums.sha256` | 200 |
| AIAAWP hub | 200 |
| AIAAWP HTML | 200 |
| AIAAWP PDF | 200 |
| AIAAWP `manifest.json` | 200 |
| AIAAWP `checksums.sha256` | 200 |

## Result

PASS with bounded repairs. Artifact availability was correct. The two route/manifest gaps were repaired in source and validated through local build output for deployment.
