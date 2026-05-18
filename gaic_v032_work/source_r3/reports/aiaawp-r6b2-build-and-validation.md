# AIAAWP-R6B2 Build and Local Validation

**Date:** 2026-05-18
**Scope:** Local validation for R6B2 reports and governance-only changes.

## Commands

The following commands are required for this wave:

- `npm run typecheck` — PASS. Astro check returned 0 errors, 0 warnings, and 2 existing hints in `src/layouts/BaseLayout.astro` about inline `onload`/`rel` parsing.
- `npm run lint` — PASS.
- `npm run build` — PASS. Astro built 91 pages and generated `sitemap-index.xml`.
- `git diff --check` — PASS.

## Validation Checklist

| Check | Result |
| --- | --- |
| Reports/governance-only source changes | PASS |
| No AIAAWP public artifacts changed | PASS |
| No GAIC public artifacts changed | PASS |
| No GAIC scores/methodology changed | PASS |
| Unrelated `public/social/*` files remain unstaged | PASS |
| Local build passes | PASS |
| Local sitemap includes AIAAWP route and HTML artifact | PASS |
| Built AIAAWP route JSON-LD parses | PASS |
| Entity graph JSON parses | PASS |
| `llms.txt` contains AIAAWP route and artifacts | PASS |

## GAIC Artifact Hash Targets

| Artifact | Expected SHA256 | Result |
| --- | --- | --- |
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Git Scope Validation

- Modified tracked files are governance and report files only.
- New files are R6B2 reports and the representative `aiaawp-r6b2-live-screens/` screenshot set.
- No `public/research/agentic-ai-auditability-assurance-white-paper-2026/` artifact changed.
- No GAIC artifact changed.
- Unrelated untracked `public/social/*` files remain outside the R6B2 change set.

**Build / Local Validation Result:** PASS.
