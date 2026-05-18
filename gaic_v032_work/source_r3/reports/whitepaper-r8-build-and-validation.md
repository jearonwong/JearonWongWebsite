# WHITEPAPER-R8 Build and Validation

**Date:** 2026-05-18
**Scope:** Build, checksum, script, and artifact validation for R8.

## Commands

| Command | Result | Notes |
| --- | --- | --- |
| `npm run typecheck` | PASS | Astro check returned 0 errors and 2 existing hints in `src/layouts/BaseLayout.astro` |
| `npm run lint` | PASS | ESLint completed without errors |
| `npm run build` | PASS | Astro built 91 pages and generated sitemap output |
| `git diff --check` | PASS | No whitespace errors |
| `python3 -m py_compile gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py` | PASS | Renderer syntax valid |
| `python3 -m json.tool` on public manifests | PASS | GAIC and AIAAWP public manifests parse |
| `shasum -a 256 -c` on GAIC public checksums | PASS | HTML/PDF/DOCX/log/manifest/seal report OK |
| `shasum -a 256 -c` on AIAAWP public checksums | PASS | HTML/PDF/DOCX/manifest OK |

## Artifact Integrity

| Artifact | SHA256 | Result |
| --- | --- | --- |
| GAIC public PDF | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` | PASS |
| AIAAWP public PDF | `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7` | PASS |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Scope Validation

| Check | Result |
| --- | --- |
| Public PDFs intentionally changed and documented | PASS |
| Public HTML artifacts not forced into A4 pagination | PASS |
| DOCX derivatives unchanged | PASS |
| No GAIC score/methodology changes | PASS |
| No GAIC sealed candidate artifact change | PASS |
| Public manifests/checksums updated | PASS |
| Pre-existing untracked `public/social/*` files remain unstaged | PASS |
| Production reverification required after push | PASS |

**Build / Validation Result:** PASS.
