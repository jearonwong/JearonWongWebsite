# WP2-R4B Build and Validation

**Task ID:** WP2-R4B-CANDIDATE-ARTIFACT-GENERATION
**Date:** May 17, 2026
**Status:** PASS

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS - 0 errors, 0 warnings, 2 existing Astro hints in `src/layouts/BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS - 90 static pages built |
| `git diff --check` | PASS |

## Scope Validation

| Check | Result | Notes |
|---|---|---|
| No public WP2 page created | PASS | No WP2 route/page added under `src/pages/`. |
| No public WP2 route added | PASS | No route files changed. |
| No public WP2 artifact copied to public | PASS | Generated artifacts remain under internal R4 package `out/`. |
| No existing GAIC public content changed | PASS | No tracked public GAIC content changed. |
| No GAIC white paper artifacts changed | PASS | GAIC artifact hashes match expected values. |
| No public PDF / responsive HTML changed | PASS | Public PDF and responsive HTML hashes match expected values. |
| No GAIC score/methodology changed | PASS | No score, methodology, RCCS-T, RCCS-M, or ALCS files changed. |
| No WP2 final/sealed/public/live claim | PASS | Artifact and reports state internal candidate only. |
| No external outcome claim | PASS | No adoption, indexing, answer-engine, or SEO/GEO result claim introduced. |
| `public/social/*` untracked files remain unstaged | PASS | Pre-existing untracked social assets remain outside R4B scope. |
| Generated candidate files remain internal | PASS | All generated WP2 artifacts are under `gaic_v032_work/source_r3/wp2_r4_publication_candidate/out/`. |

## Candidate Artifact Hashes

| Artifact | SHA256 |
|---|---:|
| Candidate HTML | `2ab730e41798739ab8d4256de40306ff46c60c49e2f8476f68726c7d8e139b1a` |
| Candidate PDF | `dd27c00c4b32476654ce26d37a41f96be62e96909228ad725e73931caa99da84` |
| Candidate DOCX | `673688e63769a3d2988da14efc6111236edcbe9f2a1238fd3fa483971ce86e9e` |

Package checksum verification passed for all package files listed in `wp2_r4_publication_candidate/checksums.sha256`.

## GAIC Artifact Hash Validation

| Artifact | Expected hash | Actual hash | Result |
|---|---|---|---|
| Public GAIC PDF: `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML: `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF: `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.pdf` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Final Result

PASS - WP2-R4B build, validation, scope, artifact, checksum, and GAIC artifact integrity checks passed.
