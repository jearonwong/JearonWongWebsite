# WHITEPAPER-R8E-3 Preflight

**Task ID:** WHITEPAPER-R8E-3-PUBLICATION-SURFACE-METADATA-AND-HOMEPAGE-EXPOSURE-FIX
**Date:** 2026-05-19

## Repo Truth

| Check | Result |
|---|---|
| Remote | `origin https://github.com/jearonwong/jearonwongwebsite.git` |
| Branch | `main` |
| Current HEAD | `c34c6be153de8e7dc949b25d933ab17dec5a9cc3` |
| Origin HEAD | `c34c6be153de8e7dc949b25d933ab17dec5a9cc3` |
| Pull | Already up to date |
| Worktree before R8E-3 edits | Only known untracked `public/social/*` assets |

## Files Inspected

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- R8E-2 final QA, visual QA, regeneration log, and metadata integrity QA reports
- `src/pages/index.astro`
- `src/pages/research/index.astro`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`
- `src/pages/evidence.astro`
- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- GAIC and AIAAWP public manifests/checksums

## Artifact Facts

| Artifact | Current fact |
|---|---|
| GAIC public PDF page count | `485` via `pdfinfo` |
| GAIC public PDF SHA256 | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` |
| AIAAWP public PDF page count | `118` via `pdfinfo` |
| AIAAWP public PDF SHA256 | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` |
| GAIC public HTML SHA256 | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML SHA256 | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |

## Scope Confirmation

- Public formats remain HTML + PDF only.
- Public DOCX remains offboarded.
- R8E-3 fixes metadata/page-count/homepage exposure only.
- No PDF regeneration or PDF visual layout change is intended.
- Production reverification remains pending after this metadata/surface repair.
