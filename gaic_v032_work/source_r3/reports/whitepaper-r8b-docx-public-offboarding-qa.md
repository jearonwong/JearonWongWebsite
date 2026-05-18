# WHITEPAPER-R8B DOCX Public Offboarding QA

**Date:** 2026-05-18
**Baseline:** `07b17408a336593dc7ac030e1ce6dbbf5ca3a008`
**Scope:** Remove GAIC and AIAAWP DOCX files and references from the public website distribution surface.

## Repo Truth

- Remote: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Baseline HEAD / origin HEAD before edits: `07b17408a336593dc7ac030e1ce6dbbf5ca3a008`
- `git pull --ff-only`: already up to date.
- Existing unrelated untracked files: `public/social/*` assets remain unstaged and outside scope.

## Public Surface Changes

- Removed `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.docx`.
- Removed `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.docx`.
- Removed the public GAIC `generation-log.json` because it exposed old editable-derivative generation paths.
- Removed DOCX artifact cards, citation rows, public artifact lists, JSON-LD encodings, `llms.txt` entries, and Evidence Registry entries.
- Updated public manifests/checksums to expose HTML and PDF only plus required integrity metadata.
- Updated the Whitepaper Series Publication SOP so DOCX is internal/private by default unless public distribution is explicitly approved.

## Hashes

| Artifact | SHA256 |
|---|---|
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| GAIC public PDF | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |
| AIAAWP public PDF | `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7` |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |

## QA Results

| Check | Result |
|---|---|
| `rg -n "docx\|DOCX" public/research src/pages public/llms.txt public/entity -g '!**/*.pdf'` | PASS: no matches |
| `find public/research -name '*.docx' -print` | PASS: no files |
| `rg -n "docx\|DOCX" dist/research dist/evidence dist/llms.txt dist/entity -g '!**/*.pdf'` | PASS: no matches |
| `find dist/research -name '*.docx' -print` | PASS: no files |
| GAIC public checksums validation | PASS |
| AIAAWP public checksums validation | PASS |
| Public manifest JSON parse | PASS |
| `npm run typecheck` | PASS: 0 errors, 2 existing hints in `BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS |
| `git diff --check` | PASS after whitespace cleanup |

## Boundary

- No Final Seal claim.
- No production reverification claim.
- No certification, audit standard, legal compliance proof, assurance opinion, regulator approval, endorsement, procurement recommendation, vendor ranking, indexing, answer-engine recognition, SEO/GEO uplift, or external adoption claim.
- No GAIC scores, methodology, RCCS-T/RCCS-M/ALCS values, or AIAAWP argument semantics changed.

## Status

**WHITEPAPER-R8B DOCX PUBLIC OFFBOARDING COMPLETE / PRODUCTION REVERIFICATION REQUIRED**
