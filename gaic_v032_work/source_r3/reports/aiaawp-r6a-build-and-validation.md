# AIAAWP-R6A Build and Validation

**Status:** PASS

## Commands Run

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`

## Results

- Typecheck: PASS. Astro reported 0 errors and 0 warnings, with 2 existing hints in `src/layouts/BaseLayout.astro`.
- Lint: PASS.
- Build: PASS. Astro built 91 pages and generated sitemap output.
- `git diff --check`: PASS.

## Validation

- Public AIAAWP route builds.
- Public artifact links remain unchanged.
- Built JSON-LD parses on AIAAWP, Definitions, Governance, Playbooks, Ecosystem Mapping, About, and Concept Core pages.
- Entity graph JSON parses.
- `llms.txt` contains AIAAWP route and artifacts.
- Sitemap includes AIAAWP route and AIAAWP HTML artifact.
- No GAIC artifacts changed.
- No GAIC scores or methodology changed.
- No unrelated `public/social/*` files staged.
- No public-facing WP2 identity introduced.
- No final/sealed/production-live verification claim introduced by R6A.

## GAIC Artifact Hash Validation

| Artifact | Expected SHA256 | Observed SHA256 | Result |
| --- | --- | --- | --- |
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Result

Build and validation passed.
