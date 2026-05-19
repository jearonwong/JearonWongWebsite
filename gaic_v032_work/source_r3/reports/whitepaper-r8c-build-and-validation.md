# WHITEPAPER-R8C Build and Validation

**Date:** 2026-05-19

## Commands

| Command | Result |
| --- | --- |
| `npm run typecheck` | PASS, 0 errors; 2 existing Astro hints in `src/layouts/BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS, 91 pages built |
| `git diff --check` | PASS |

## Artifact Validation

| Check | Result |
| --- | --- |
| GAIC public PDF hash | `bf7f241642719a9ab0214fc6110d0e7018b532b055a3be2bd2f1e12fff1330c8` |
| AIAAWP public PDF hash | `cc13249074a7cdd79c0a071f29ccfe1ba89dce2103dc61fb09dded7b0304caca` |
| GAIC public HTML hash | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML hash | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |
| GAIC sealed candidate PDF hash | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| GAIC public checksums | PASS |
| AIAAWP public checksums | PASS |
| Manifest JSON parse | PASS |
| Built `dist` public PDFs match public hashes | PASS |

## Distribution Validation

| Check | Result |
| --- | --- |
| No `.docx` under `public/research` | PASS |
| No `.docx` under `dist/research` | PASS |
| No DOCX references in public/dist research/evidence/llms/entity/page surfaces | PASS |
| No unrelated `public/social/*` staged | PASS |
| HTML Web Reading Profile not changed | PASS |
| Production reverification required after push | YES |

## Result

PASS. R8C build and local validation passed.
