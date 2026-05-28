# WP3-V1-R3AF Build And Validation

## Result

PASS.

## Command Validation

- `npm run typecheck`: PASS. Existing Astro inline `onload` / `rel` hints remain non-blocking.
- `npm run lint`: PASS.
- `npm run build`: PASS. Build generated 95 pages.
- `git diff --check`: PASS.
- YAML parse: PASS for `whitepaper-series-registry.yaml`.
- JSON parse for entity graph: PASS.
- JSON parse for public manifest: PASS.
- Checksum validation: PASS for WP3 public HTML, PDF, and manifest.

## Artifact Validation

- Public HTML exists: PASS.
- Public PDF exists: PASS.
- Public manifest exists: PASS.
- Public checksum file exists: PASS.
- Manifest paths match current public artifact names: PASS.
- PDF metadata/page check: PASS, 138 pages, A4, R8 Creator/Producer metadata.
- HTML preservation check: PASS for source refs through `[62]`, table IDs including `T-02-01` and `T-27-01`, Appendix A-H, and Appendix I deferred note.
- No public DOCX in WP3 public artifact directory: PASS.
- No public source Markdown in WP3 public artifact directory: PASS.

## Route And Surface Validation

- Public route data links: PASS for Read HTML, Download PDF, View Manifest, and Verify Checksums.
- Research index link consistency: PASS.
- Sitemap/customPages check: PASS. WP3 route and HTML artifact are included in generated sitemap surfaces; `astro.config.mjs` preserves the WP3 HTML custom page.
- Robots stale-path check: PASS. Rejected v0.1/v0.2 WP3 HTML/PDF paths remain disallowed.
- `llms.txt` WP3 entry check: PASS.
- Entity graph WP3 entry check: PASS.
- JSON-LD parse/check from built route surfaces: PASS.

## Boundary Validation

- Rejected v0.2 regression scan: PASS. v0.2 appears only as rejected, withdrawn, archived, or not-current-source-truth context.
- Forbidden-claim scan: PASS with contextual boundary hits only. Hits are explicit denials such as not certification, not insurance advice, not coverage-ready, not underwriting-ready, not claim-ready, not final/sealed/release-ready, or owner-held announcement language.
- Boundary wording scan: PASS. Repository governance seal language remains bounded and separated from certification, legal, insurance, underwriting, coverage, regulator, insurer, score, standard, and readiness claims.
- No certification/insurer acceptance/coverage-ready positive-claim scan: PASS.
- No social/public announcement execution scan: PASS.
- Final seal record existence scan: PASS. `final-seal-record.md` records `FINAL_SEAL_COMPLETE`.

## Warnings

- Pre-existing untracked files remain under `public/social/*`. They were not created by R3AF and must not be staged.
