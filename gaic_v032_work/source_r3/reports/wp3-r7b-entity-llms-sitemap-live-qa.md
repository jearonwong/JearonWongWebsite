# WP3-R7B Entity Graph / llms / Sitemap / Robots Live QA

## Entity Graph

- `/entity/jearonwong-mplp-gaic-entity-graph.json` returned 200 and parsed as JSON.
- Entity graph version: `2026-05-r7-aiirwp-public-staging`.
- AIIRWP present: PASS.
- AIO/AIRM present: PASS.
- No DOCX path: PASS.
- Boundary language remains non-certifying and non-insurance-advice: PASS.

## `llms.txt`

- `/llms.txt` returned 200.
- AIIRWP route present: PASS.
- AIIRWP HTML/PDF/manifest/checksum links present: PASS.
- AIO/AIRM links present: PASS.
- No DOCX link: PASS.
- Boundary-safe description present: PASS.

## Sitemap / Robots

- `/sitemap-index.xml` returned 200 and references `sitemap-0.xml`.
- `/sitemap-0.xml` returned 200.
- Sitemap includes AIIRWP route: PASS.
- Sitemap includes AIIRWP HTML artifact: PASS.
- Sitemap excludes DOCX: PASS.
- `/robots.txt` returned 200.
- Robots does not block AIIRWP route: PASS.
