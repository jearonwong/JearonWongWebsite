# WP3-R16B Build and Validation

Status: PASS.

R16B is production reverification only. It is not author release execution, public announcement, external adoption proof, indexing proof, SEO/GEO outcome proof, answer-engine recognition, or Final Seal. No DOCX is introduced.

Validation commands/results:

- Production URL checks: PASS.
- Live AIIRWP checksum/hash validation: PASS.
- Live manifest JSON parse: PASS.
- Live entity graph JSON parse: PASS.
- Live route JSON-LD parse: PASS, 7 blocks.
- Live no-DOCX production check: PASS; explicit v0.2 DOCX URL returns 404.
- Public AIIRWP checksum validation: PASS.
- Public manifest JSON parse: PASS.
- Public entity graph JSON parse: PASS.
- `npm run typecheck`: PASS with two pre-existing Astro inline `onload` hints in `src/layouts/BaseLayout.astro`.
- `npm run lint`: PASS.
- `npm run build`: PASS, 94 pages built.
- `git diff --check`: PASS.

Production validation:

- AIIRWP production route is live.
- AIIRWP live HTML/PDF/SVG/manifest/checksum artifacts match staged hashes.
- Public manifest/checksums are live and valid.
- `llms.txt` is live and includes AIIRWP route plus direct v0.2 HTML/PDF/manifest/checksum links after R16B minimal repair.
- Sitemap and robots are live and correct for current v0.2 artifacts.
- GAIC/AIAAWP production artifacts are unaffected and hash-match repo truth.
- Pre-existing unrelated `public/social/*` files remain untracked and are not staged.

Notes:

- R16B included a minimal verified production blocker repair to `public/llms.txt` before final acceptance.
- The repair did not change AIIRWP route content, HTML artifact, PDF artifact, manifest, checksum file, SVG, GAIC artifacts, or AIAAWP artifacts.
