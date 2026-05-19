# WHITEPAPER-R8E Build and Validation

**Date:** 2026-05-19

## Commands

| Command | Result |
| --- | --- |
| `sha256sum -c public/research/global-ai-compliance-white-paper-2026/checksums.sha256` from repo root | PASS |
| `sha256sum -c checksums.sha256` in AIAAWP public artifact directory | PASS |
| `jq empty public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json` | PASS |
| `jq empty public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` | PASS |
| `find public/research -name '*.docx' -print` | PASS, no output |
| `npm run typecheck` | PASS, 0 errors; existing Astro inline-handler hints reported |
| `npm run lint` | PASS |
| `npm run build` | PASS, 91 pages built |
| `find dist/research -name '*.docx' -print` after build | PASS, no output |
| `git diff --check` | PASS |

## Artifact Validation

| Artifact | Expected hash | Observed hash | Result |
| --- | --- | --- | --- |
| GAIC public PDF | `ce06d40fc4cd66e42e4f1144a4a2238753d9ead66313ae2bd04692786301d396` | `ce06d40fc4cd66e42e4f1144a4a2238753d9ead66313ae2bd04692786301d396` | PASS |
| AIAAWP public PDF | `a034219994b245bcfbc359e97155557501d4baf814bbe6fe7a39d900f2d6f45c` | `a034219994b245bcfbc359e97155557501d4baf814bbe6fe7a39d900f2d6f45c` | PASS |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | PASS |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | PASS |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Build Scope Validation

| Check | Result |
| --- | --- |
| Site builds | PASS |
| Public routes build | PASS |
| Public checksums pass without warnings | PASS |
| GAIC public PDF intentionally changed and documented | PASS |
| AIAAWP public PDF intentionally changed through shared adaptive renderer and documented | PASS |
| Public DOCX remains absent from `public/research` and `dist/research` | PASS |
| No GAIC score/methodology source files changed | PASS |
| GAIC sealed candidate artifact unchanged | PASS |
| HTML Web Reading Profile not damaged | PASS |
| Unrelated `public/social/*` assets remain unstaged | PASS |
| Production live reverification required after push | PASS |

## Result

PASS. R8E build and local validation are complete. This report does not claim production live verification, Final Seal, certification, audit standard status, legal compliance proof, assurance opinion, regulator approval, endorsement, SEO/GEO uplift, indexing, answer-engine recognition, or external adoption.
