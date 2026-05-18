# AIAAWP-R7 Build and Validation

**Date:** 2026-05-18
**Scope:** Local validation for R7 launch/evidence planning files and governance updates.

## Commands

The following commands are required for this wave:

- `npm run typecheck` — PASS. Astro check returned 0 errors, 0 warnings, and 2 existing hints in `src/layouts/BaseLayout.astro` about inline `onload`/`rel` parsing.
- `npm run lint` — PASS.
- `npm run build` — PASS. Astro built 91 pages and generated `sitemap-index.xml`.
- `git diff --check` — PASS.

## Validation Checklist

| Check | Result |
| --- | --- |
| No public artifacts changed | PASS |
| No public route changed | PASS |
| No GAIC artifacts changed | PASS |
| No GAIC scores/methodology changed | PASS |
| No unrelated `public/social/*` files staged | PASS |
| Launch files created under `gaic_v032_work/source_r3/launch/aiaawp-r7/` | PASS |
| Governance files updated | PASS |
| Local build passes | PASS |

## GAIC Artifact Hash Targets

| Artifact | Expected SHA256 | Result |
| --- | --- | --- |
| Public GAIC PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Responsive GAIC public HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed GAIC candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Git Scope Validation

- Modified tracked files are governance documents only.
- New files are R7 launch/evidence files and R7 reports only.
- No `public/research/agentic-ai-auditability-assurance-white-paper-2026/` artifact changed.
- No `src/pages/`, `src/content/`, `public/entity/`, `public/llms.txt`, sitemap config, PDF, DOCX, or public HTML file changed.
- Unrelated untracked `public/social/*` files remain outside the R7 change set.

**Build / Validation Result:** PASS.
