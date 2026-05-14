# GAIC-R3L Build and Validation

**Date:** 2026-05-14

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

## Notes

- `npm run typecheck` completed with 0 errors. Existing Astro hints in `BaseLayout.astro` were reported and are not introduced by R3L.
- `npm run lint` completed without errors.
- `npm run build` generated 89 pages and created `sitemap-index.xml`.
- `git diff --check` completed without whitespace errors.

## Artifact Integrity

| Artifact | Expected | Actual | Result |
|---|---|---|---|
| Public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Scope Validation

| Check | Result |
|---|---|
| No public semantic content engineering introduced | PASS |
| No sealed artifacts changed | PASS |
| Public PDF hash unchanged | PASS |
| Public responsive HTML hash unchanged | PASS |
| Sealed candidate PDF hash unchanged | PASS |
| No white paper source changed | PASS |
| No scores/methodology changed | PASS |
| No achieved external outcomes claimed | PASS |

## Changed File Scope

R3L changed reports, launch handoff files, and governance logs only. It did not edit public semantic pages, public artifacts, white paper source, score files, or methodology files.

## Result

PASS. R3L build, lint, typecheck, artifact integrity, and diff validation passed.
