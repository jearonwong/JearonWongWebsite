# AIAAWP-R6B Build and Local Validation

**Status:** PASS
**Scope:** Governance/report-only repository changes plus committed production screenshot evidence.

## Commands Run

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`

## Results

- Typecheck: PASS. Astro reported 0 errors and 0 warnings, with 2 existing hints in `src/layouts/BaseLayout.astro` for inline preload handler attributes.
- Lint: PASS.
- Build: PASS. Astro built 91 pages and generated sitemap output.
- `git diff --check`: PASS.

## Local Validation

- No public source/content/artifact changes were made in R6B.
- No AIAAWP public artifacts were modified.
- No GAIC public artifacts were modified.
- No GAIC scores or methodology were changed.
- Pre-existing untracked `public/social/*` files remain unstaged.
- R6B changes are limited to verification reports, governance logs, and representative live screenshots.

## GAIC Artifact Hash Validation

| Artifact | Expected SHA256 | Observed SHA256 | Result |
| --- | --- | --- | --- |
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Result

Build and local validation passed. GAIC artifact integrity remains unchanged.
