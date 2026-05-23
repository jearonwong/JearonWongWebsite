# WP3-V1-R0 Build and Validation

Decision: PASS.

## Commands Run

- `ruby -e 'require "yaml"; YAML.load_file("gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml")'`: PASS.
- Entity graph JSON parse: PASS.
- AIIRWP route JSON-LD parse from built HTML: PASS, 4 JSON-LD blocks parsed.
- AIIRWP route noindex check from built HTML: PASS.
- No-DOCX scan under `public/research` and `dist/research`: PASS, no files found.
- `npm run typecheck`: PASS, 0 errors and 0 warnings; the existing Astro inline `onload` hints in `src/layouts/BaseLayout.astro` remain hints only.
- `npm run lint`: PASS.
- `npm run build`: PASS, 94 pages built.
- `git diff --check`: PASS.

## Withdrawal Validation

- Public AIIRWP route no longer promotes v0.2: PASS.
- Public v0.2 artifacts removed from `public/`: PASS.
- Built AIIRWP directory contains only `index.html`: PASS.
- `llms.txt` no longer promotes v0.2 artifact links: PASS.
- Sitemap custom page promotion for AIIRWP v0.2 HTML removed: PASS.
- `robots.txt` blocks obsolete v0.1/v0.2 artifact paths if requested by crawlers: PASS.
- Entity graph represents AIIRWP as withdrawn and under v1.0 rewrite: PASS.

## Public Artifact Scan

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` contains no active AIIRWP HTML, PDF, manifest, checksum, or SVG artifact after R0.

`dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` contains only the noindex under-rewrite route after build.

## GAIC / AIAAWP

GAIC and AIAAWP public artifact directories remain present. Their public manifests parse and retain expected page-count facts:

- GAIC: `GACWP-2026-v0.3.2-FRC-R3`, 485 pages.
- AIAAWP: `AIAAWP-2026-v0.1-R4-CANDIDATE`, 118 pages.

## Guardrails

- No public DOCX introduced.
- No public AIIRWP v1.0 artifact generated.
- No full v1.0 body generated.
- No pre-existing unrelated `public/social/*` files staged by R0.

## Note

One exploratory asset-listing command used GNU `find -printf`, which is not supported by the local BSD `find`; it failed as a listing command only and was replaced by direct file and build checks. It did not affect validation results.
