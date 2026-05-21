# WP3-R14 Build and Validation

## Commands Run

| Command | Result | Notes |
| --- | --- | --- |
| `npm run typecheck` | PASS | Astro check completed with 0 errors and the same 2 existing hints in `src/layouts/BaseLayout.astro`. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Astro build completed successfully and produced 94 static pages. |
| `git diff --check` | PASS | No whitespace or patch-format errors reported. |
| JSON parse checks | N/A | No JSON files changed in R14. |

## Validation Summary

| Validation | Result | Note |
| --- | --- | --- |
| No public AIIRWP artifact regenerated | PASS | R14 created planning Markdown only. |
| No public CTAs restored | PASS | No tracked `src/` or `public/` files changed. |
| AIIRWP remains under editorial review publicly | PASS | Source and built route retain editorial-review copy and `noindex`. |
| No public DOCX introduced | PASS | No DOCX created. |
| GAIC unaffected | PASS | No GAIC artifact files changed. |
| AIAAWP unaffected | PASS | No AIAAWP artifact files changed. |
| No unrelated public/social staged | PASS | Pre-existing untracked `public/social/*` files remain outside R14 scope. |
| No artifact output generated in R14 | PASS | R14 planning directory contains Markdown plans only; no HTML, PDF, DOCX, JSON manifest, or checksum output. |

## Result

PASS - build and validation succeeded for WP3-R14 artifact generation planning.
