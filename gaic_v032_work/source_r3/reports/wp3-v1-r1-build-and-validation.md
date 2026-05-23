# WP3-V1-R1 Build and Validation

**Task:** WP3-V1-R1-SOURCE-RESEARCH  
**Date:** May 24, 2026  
**Status:** Passed.

## Commands Run

| Command | Result |
|---|---|
| `npm run typecheck` | Passed: 0 errors; existing Astro hints in `src/layouts/BaseLayout.astro` about inline `onload`/`rel` attributes |
| `npm run lint` | Passed |
| `npm run build` | Passed; 94 pages built |
| `git diff --check` | Passed |
| Registry textual YAML check | Passed; `wp3_aiirwp` remains withdrawn / v1.0 rewrite |
| Entity graph JSON parse | Passed |
| no-DOCX scan under `public/research` and `dist/research` | Passed; no `.docx` files found |
| active v0.2 promotion regression scan | Passed; results show withdrawn/noindex/no active artifact status, not active promotion |

## Public Route / Artifact Validation

- WP3 route remains noindex withdrawn / v1.0 rewrite status.
- No current WP3 public artifact exists.
- No current WP3 public PDF exists.
- No current WP3 manifest or checksum exists.
- No WP3 public artifact CTA was restored.
- `public/robots.txt` continues to disallow withdrawn AIIRWP v0.2 artifact paths.

## GAIC / AIAAWP Validation

- GAIC public artifacts were not changed by R1.
- AIAAWP public artifacts were not changed by R1.
- Build completed without GAIC/AIAAWP regression.

## Registry Validation

- `whitepaper-series-registry.yaml` still marks WP3 / AIIRWP as `withdrawn; v1.0 rewrite in progress`.
- `current-status.md` now records R1 source research completion and R2 outline readiness while preserving no current public artifact/PDF/manifest/checksum.

## Worktree Boundary

Pre-existing untracked `public/social/*` files remain out of scope and were not staged by validation.

## Final Validation Decision

PASS. R1 source research package and governance updates validate successfully.
