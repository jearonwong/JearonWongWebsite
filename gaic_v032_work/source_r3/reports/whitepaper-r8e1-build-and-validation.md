# WHITEPAPER-R8E-1 Build and Validation

**Date:** 2026-05-19

## Build Commands

| Command | Result | Notes |
| --- | --- | --- |
| `npm run typecheck` | PASS | 0 errors; existing Astro inline `onload` hints only |
| `npm run lint` | PASS | ESLint completed |
| `npm run build` | PASS | 91 static pages built |
| `git diff --check` | PASS | No whitespace errors |

## Artifact Validation

| Check | Result |
| --- | --- |
| Site builds | PASS |
| Public research routes build | PASS |
| Artifact links valid in generated routes | PASS by build and route hash update |
| Public checksums pass | PASS |
| Public manifests parse as JSON | PASS |
| No score/methodology changes | PASS; no source or public HTML content changed |
| No unrelated `public/social/*` staged | PASS; files remain untracked and out of scope |
| GAIC historical candidate PDF unchanged | PASS; `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| Public DOCX remains absent | PASS |
| Public PDFs intentionally changed and documented | PASS |
| HTML Web Reading Profile not damaged | PASS; public HTML hashes unchanged |
| Production live reverification required after push | PASS |

## Current Public Hashes

| Artifact | SHA256 |
| --- | --- |
| GAIC public PDF | `4ec048822d60b1b6bd935ce27f0b5cb2c3e96b1c69dd72489edf9142f101cc2d` |
| AIAAWP public PDF | `43f6be26a098747eed44daa06268c164678f7a35c47b3671a53fea27aef36996` |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |

## Result

**PASS.** Build and validation gates passed.
