# WHITEPAPER-R8D Build and Validation

**Date:** 2026-05-19

## Commands

| Command | Result |
| --- | --- |
| `shasum -a 256 -c public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | PASS |
| `shasum -a 256 -c checksums.sha256` in AIAAWP public artifact directory | PASS |
| `jq .` on GAIC public PDF repair manifest | PASS |
| `jq .` on AIAAWP manifest | PASS |
| `pdftotext` on GAIC public PDF | PASS |
| `pdftotext` on AIAAWP public PDF | PASS |
| `find public/research -name '*.docx' -print` | PASS, no output |
| `find dist/research -name '*.docx' -print` after build | PASS, no output |
| `npm run typecheck` | PASS, 0 errors; existing Astro inline-handler hints reported |
| `npm run lint` | PASS |
| `npm run build` | PASS, 91 pages built |
| `git diff --check` | PASS |

## Artifact Validation

| Artifact | Expected hash | Observed hash | Result |
| --- | --- | --- | --- |
| GAIC public PDF | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` | PASS |
| AIAAWP public PDF | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` | PASS |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Build Scope Validation

| Check | Result |
| --- | --- |
| Site builds | PASS |
| Public routes build | PASS |
| Public checksums pass | PASS |
| Public DOCX remains absent | PASS |
| No GAIC score/methodology source files changed | PASS |
| GAIC sealed candidate artifact unchanged | PASS |
| Public PDFs changed intentionally and documented | PASS |
| HTML Web Reading Profile not damaged | PASS |
| Unrelated `public/social/*` assets remain unstaged | PASS |
| Production live reverification required after push | PASS |

## Result

PASS. R8D local validation is complete.
