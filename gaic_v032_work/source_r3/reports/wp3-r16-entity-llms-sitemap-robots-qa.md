# WP3-R16 Entity / llms / Sitemap / Robots QA

Status: PASS.

R16 updated public semantic machine-readable surfaces for public staging preparation only. No production verification, public release execution, Final Seal, indexing/SEO-GEO outcome, answer-engine recognition, external adoption, insurer acceptance, certification, legal advice, or insurance advice is claimed.

Entity graph:

- `public/entity/jearonwong-mplp-gaic-entity-graph.json` parses as JSON.
- AIIRWP is represented as a public research candidate.
- AIO/AIRM and claim evidence chain concepts map to the public AIIRWP candidate.
- Boundaries remain negative/non-claim.

llms:

- `public/llms.txt` includes AIIRWP public route and concept anchors.
- It records HTML/PDF-only public distribution and no public DOCX.
- It does not claim production verification, Final Seal, insurer acceptance, coverage-ready status, underwriting-ready status, certification, indexing, SEO/GEO uplift, or answer-engine recognition.

Sitemap:

- `astro.config.mjs` no longer filters the AIIRWP route.
- `dist/sitemap-0.xml` includes the AIIRWP route.
- `dist/sitemap-0.xml` includes `AIIRWP-2026-v0.2.html`.
- Sitemap excludes DOCX.

Robots:

- `public/robots.txt` no longer blocks current AIIRWP v0.2 HTML/PDF/manifest/checksum staging artifacts.
- It still blocks obsolete historical v0.1 AIIRWP HTML/PDF artifact paths.

