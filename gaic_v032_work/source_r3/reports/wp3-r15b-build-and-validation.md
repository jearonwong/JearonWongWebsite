# WP3-R15B Build and Validation

## Result

PASS.

R15B validation passed. The artifact acceptance decision remains repair-required because of PDF layout/compression quality, not because of build, checksum, or boundary failure.

## Commands

| Command | Result |
| --- | --- |
| `shasum -a 256 -c checksums.sha256` in R15 output directory | PASS |
| Manifest JSON parse | PASS |
| R15/R15B DOCX artifact scan | PASS, no DOCX artifact found |
| `npm run typecheck` | PASS, 0 errors; Astro reported 2 existing hints in `src/layouts/BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS, 94 pages built |
| `git diff --check` | PASS |

## Public-Surface Validation

| Check | Result |
| --- | --- |
| No public AIIRWP route changed | PASS |
| No public AIIRWP artifact regenerated | PASS |
| No public CTAs restored | PASS |
| AIIRWP remains under editorial review publicly | PASS |
| No public DOCX introduced | PASS |
| GAIC remains unaffected | PASS |
| AIAAWP remains unaffected | PASS |
| No unrelated `public/social/*` staged | PASS |
| Internal R15B proof assets remain under `wp3_r15b_final_candidate_qa/` | PASS |

## Notes

- `git diff --name-only -- public src dist package.json package-lock.json astro.config.* tsconfig.json` returned no tracked public/source/build-surface changes.
- Existing historical AIIRWP public artifacts remain in `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`, but R15B did not modify or promote them.
- Pre-existing untracked `public/social/*` files remain unrelated to R15B.

