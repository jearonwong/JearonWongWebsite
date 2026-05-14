# GAIC-R3K-1C Build and Validation

**Date:** 2026-05-14

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

## Notes

- `npm run typecheck` completed with 0 errors. Existing Astro hints in `BaseLayout.astro` were reported and are not introduced by R3K-1C.
- `npm run build` generated 89 pages and `sitemap-index.xml`.

## Artifact Integrity

| Artifact | Expected | Actual | Result |
|---|---|---|---|
| Public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Scope Validation

| Check | Result |
|---|---|
| Only P2/minimal residual cleanup changes were made | PASS |
| No broad P0/P1 rework | PASS |
| No sealed artifacts changed | PASS |
| Public PDF hash unchanged from R3K-0C | PASS |
| Public responsive HTML artifact hash unchanged | PASS |
| White paper source unchanged | PASS |
| Scores/methodology unchanged | PASS |
| No broken routes introduced | PASS |
| Sitemap builds | PASS |

## Changed Files

- `src/pages/playbooks/[slug].astro`
- `src/content/essays/agent-orchestration-is-not-delivery.md`
- `src/pages/theories.astro`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md`
- R3K-1C reports and governance logs
