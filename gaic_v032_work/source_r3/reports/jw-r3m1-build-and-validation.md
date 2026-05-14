# JW-R3M-1 Build and Validation

## Commands Run

| Command | Result |
|---|---|
| `npm run typecheck` | PASS, 0 errors; existing BaseLayout preload hints reported |
| `npm run lint` | PASS |
| `npm run build` | PASS, 90 pages built |
| `git diff --check` | PASS |
| Entity graph JSON parse | PASS |
| Built HTML JSON-LD parse | PASS for `/about/`, `/projects/mplp/`, `/concepts/map/`, `/evidence/` |

## Artifact Integrity

| Artifact | Expected / observed SHA256 | Result |
|---|---:|---|
| Public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Non-Mutation Checks

- No sealed white paper artifact changed.
- No public PDF metadata re-seal changed.
- No responsive public HTML artifact changed.
- No GAIC score or methodology changed.
- No score/methodology source rewrite performed.
- Existing untracked social/poster assets were not staged as part of this task.

## Status

**PASS.** Build, lint, typecheck, schema parsing, sitemap inclusion, and artifact integrity checks passed.
