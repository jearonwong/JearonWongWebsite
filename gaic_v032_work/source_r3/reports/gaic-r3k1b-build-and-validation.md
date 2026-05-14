# GAIC-R3K-1B Build and Validation

**Date:** 2026-05-14

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS |

## Build Result

- Astro static build completed successfully.
- 89 pages built.
- Sitemap generation completed.

## P1 Trace Verification

- Built output contains exactly 46 `WHITE_PAPER_SOURCE_TRACE` sections.
- Count matches R3K-0 P1 page count.
- P0 routes checked during QA did not receive P1 source-trace panels.
- Built P1 page JSON-LD parsed without errors in spot/full P1 scan.

## Scope Verification

- Only P1 source-anchor rendering templates, the route-keyed source-trace data layer, governance reports, and required governance status files were changed.
- No P2 broad repair was performed.
- No all-75-page expansion was performed.
- No public semantic routes were added or deleted.
- `llms.txt` and Concepts Map were audited and left unchanged because no misleading P1 canonical elevation was found.

## Artifact Integrity

| Artifact | SHA256 | Result |
|---|---:|---|
| Public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | unchanged |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | unchanged |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | unchanged |

## Boundary Verification

- No legal advice, legal compliance proof, certification, regulator approval, vendor ranking, procurement recommendation, vendor endorsement, Google Scholar indexing, AI crawler pickup, answer-engine citation, primary semantic source achievement, deterministic LLM output guarantee, MPLP requirement, MPLP exclusivity, or MPLP industry-standard claim was introduced.

## Result

**PASS** — R3K-1B build and validation passed.
