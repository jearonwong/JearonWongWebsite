# AIAAWP-R5A Build And Validation

**Status:** PASS

## Build Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS: 0 errors; existing `BaseLayout.astro` hints only |
| `npm run lint` | PASS |
| `npm run build` | PASS: 90 pages built |
| `git diff --check` | PASS |

## Scope Validation

| Check | Result |
|---|---|
| No AIAAWP artifacts changed | PASS |
| No GAIC artifacts changed | PASS |
| No public page created | PASS |
| No public route added | PASS |
| No artifacts copied to `public/` | PASS |
| No score/methodology changed | PASS |
| `public/social/*` untracked files remain unstaged | PASS |
| Only SOP/reports/governance files changed | PASS |

## GAIC Artifact Hash Validation

| Artifact | Expected hash | Result |
|---|---|---|
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Public responsive GAIC HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Notes

R5A did not regenerate, modify, move, or publish AIAAWP artifacts. The wave only adds the Whitepaper Series Publication SOP and minimal governance/QA records.
