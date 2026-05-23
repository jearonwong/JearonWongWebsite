# WP3-R16 Build and Validation

Status: PASS.

R16 validation confirms public staging preparation. It does not claim production verification, public release execution, Final Seal, external adoption, indexing, SEO/GEO uplift, answer-engine recognition, insurer acceptance, coverage-ready status, underwriting-ready status, certification, legal advice, or insurance advice.

Commands:

- Public checksum validation: PASS.
- Public manifest JSON parse: PASS.
- Entity graph JSON parse: PASS.
- Route JSON-LD parse from built HTML: PASS, 7 blocks.
- `npm run typecheck`: PASS with two pre-existing Astro inline `onload` hints in `src/layouts/BaseLayout.astro`.
- `npm run lint`: PASS.
- `npm run build`: PASS, 94 pages built.
- `git diff --check`: PASS.
- no-DOCX scan under `public/research` and `dist/research`: PASS.

Build/output validation:

- AIIRWP route builds.
- AIIRWP public HTML/PDF artifacts exist.
- Public manifest/checksums validate.
- Sitemap includes AIIRWP route and v0.2 HTML artifact.
- `llms.txt` includes AIIRWP route and terms.
- Robots does not block current v0.2 staged candidate artifacts.
- GAIC/AIAAWP unaffected except intentional crosslink/series language updates.
- Pre-existing untracked `public/social/*` files remain untracked and are not part of R16 staging.

