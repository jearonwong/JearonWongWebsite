# WHITEPAPER-R8B Build and Validation

**Date:** 2026-05-18

## Commands

| Command | Result |
|---|---|
| `git pull --ff-only` | PASS |
| `npm run typecheck` | PASS: 0 errors |
| `npm run lint` | PASS |
| `npm run build` | PASS: 91 pages built |
| `git diff --check` | PASS |
| Public GAIC checksum validation | PASS |
| Public AIAAWP checksum validation | PASS |

## Artifact Validation

- GAIC public PDF remains `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9`.
- AIAAWP public PDF remains `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7`.
- GAIC sealed candidate PDF remains `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`.
- Public website build output contains no `.docx` files under `dist/research`.
- Public website build output contains no `docx` / `DOCX` text under checked public research, evidence, `llms.txt`, or entity surfaces.

## Scope Control

- Public DOCX files were intentionally removed.
- Public checksums/manifests were intentionally updated.
- Public HTML hashes changed only because public DOCX references were removed from visible/structured public surfaces.
- No PDF artifact was regenerated in this wave.
- No GAIC sealed candidate artifact was modified.
- Unrelated `public/social/*` files remain unstaged.

## Next Required Step

Run production reverification after deployment. The live reverification should treat HTML and PDF as the only public white paper artifact formats.
