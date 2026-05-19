# WHITEPAPER-R8E-2 DOCX Public Offboarding Regression QA

**Date:** 2026-05-19

## Checks

| Check | Result |
| --- | --- |
| No `.docx` under `public/research` | PASS |
| No `.docx` under `dist/research` | PASS |
| No DOCX links in GAIC/AIAAWP hubs | PASS |
| No DOCX in Evidence Registry surfaces checked | PASS |
| No DOCX in `llms.txt` surfaces checked | PASS |
| No DOCX in manifests/checksums | PASS |
| No DOCX in public JSON-LD artifact encoding | PASS |

## Commands

- `find public/research dist/research -name '*.docx' -print`
- `rg -n "\\.docx|docx" public/research src/pages/research public/llms.txt src/pages/evidence.astro public/entity`

Both checks returned no public DOCX artifacts or references.
