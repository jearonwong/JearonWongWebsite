# WP3-V1-R3AG Build And Validation

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
- JSON-LD parse from built WP3 route and research index: PASS.
- Checksum validation: PASS for WP3 public HTML, PDF, and manifest.

## Artifact Validation

- Public HTML regenerated: PASS.
- Public PDF regenerated: PASS.
- Public manifest regenerated: PASS.
- Public checksum file regenerated: PASS.
- PDF page count: PASS, 138 pages.
- PDF page size: PASS, A4.
- PDF metadata: PASS, public-facing A4 print profile Creator/Producer.
- HTML/PDF rendering parity: PASS, professional-shell HTML and shared A4 PDF profile retained.
- No public DOCX in WP3 artifact directory: PASS.
- No public source Markdown in WP3 artifact directory: PASS.

## Terminology Validation

- WP3 public HTML internal shorthand scan: PASS.
- WP3 public PDF extracted-text internal shorthand scan: PASS.
- WP3 public manifest internal shorthand scan: PASS.
- WP3 public route data public-copy scan: PASS; source-code IDs remain internal implementation identifiers.
- R3AE announcement draft scan: PASS after X short post repair.

## Route And Surface Validation

- Public route link/hash checks: PASS.
- Research index link checks: PASS.
- Sitemap/customPages check: PASS.
- Robots stale-path check: PASS.
- `llms.txt` WP3 entry check: PASS.
- Entity graph WP3 entry check: PASS.
- Rejected v0.2 regression scan: PASS. v0.2 remains rejected, withdrawn, archived, or not-current-source-truth context.

## Boundary Validation

- Forbidden-claim scan: PASS with contextual boundary hits only.
- Boundary wording scan: PASS.
- No certification/insurer acceptance/coverage-ready positive-claim scan: PASS.
- No social/public announcement execution scan: PASS.
- No public/social staging scan: PASS.
- Post-seal amendment record existence scan: PASS.

## Warnings

- Pre-existing untracked files remain under `public/social/*`. They were not created by R3AG and must not be staged.
- Broad repository scans still find pre-existing prior-paper artifact-history terminology in WP1/WP2 public maintenance records. They are outside the WP3 R3AG amended artifact set and are recorded as a future cross-series terminology hardening opportunity.
