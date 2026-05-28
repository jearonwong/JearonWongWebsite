# WP3-V1-R3AD Build And Validation

## Validation Summary

- `npm run typecheck`: PASS with existing `BaseLayout.astro` inline preload hints only.
- `npm run lint`: PASS.
- `npm run build`: PASS, 95 pages built.
- `git diff --check`: PASS.
- YAML parse for `whitepaper-series-registry.yaml`: PASS.
- JSON parse for entity graph and WP3 manifest: PASS.
- WP3 checksum validation: PASS.
- no-DOCX and no-public-source Markdown scan: PASS.
- public route link checks: PASS.
- research index link checks: PASS.
- WP3 artifact anchor checks from `src/data/whitepaperPublications.ts`: PASS after R3AD repair.
- JSON-LD parse/check: PASS, 7 JSON-LD scripts.
- HTML parity scan: PASS.
- PDF metadata/page-size/page-count scan: PASS, 138 A4 pages and R8 Creator/Producer metadata.
- robots stale-path check: PASS.
- sitemap custom-page check: PASS.
- `llms.txt` WP1/WP2/WP3 consistency check: PASS.
- entity graph WP1/WP2/WP3 consistency check: PASS.
- local browser smoke test: PASS.
- visual proof generation: PASS with non-blocking `pdftoppm` Type 3 glyph warning.

## Repair Validation

R3AD repaired stale WP3 key-concept artifact anchors and normalized manifest/checksum CTA labels. Rebuilt output confirms:

- `View Manifest` and `Verify Checksums` render on route and index.
- All WP3 key-concept artifact anchors in shared publication data resolve to IDs in the R3AC public HTML artifact.

## Artifact Integrity

`shasum -a 256 -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`: PASS.

No public artifact bytes were changed in R3AD.
