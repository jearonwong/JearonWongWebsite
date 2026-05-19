# WHITEPAPER-R8C Preflight

**Task ID:** WHITEPAPER-R8C-GAIC-PDF-WIDE-TABLE-REPAIR-HTML-PDF-ONLY
**Date:** 2026-05-19
**Scope:** PDF wide-table layout repair only. Public distribution remains HTML + PDF. DOCX remains offboarded from public surfaces.

## Repo Truth

| Check | Result |
| --- | --- |
| Remote | `origin https://github.com/jearonwong/jearonwongwebsite.git` |
| Branch | `main` |
| Baseline HEAD | `37b63206196f9362f7f8a047034496db772621b6` |
| Origin HEAD | `37b63206196f9362f7f8a047034496db772621b6` |
| `git pull --ff-only` | PASS, already up to date |
| Required prior status | `WHITEPAPER-R8B DOCX PUBLIC OFFBOARDING COMPLETE / PRODUCTION REVERIFICATION REQUIRED` |

## Files Inspected

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`
- R8 and R8B QA reports
- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- GAIC public HTML/PDF/checksum/manifest surfaces
- AIAAWP public HTML/PDF/checksum/manifest surfaces
- GAIC and AIAAWP hub pages
- `public/llms.txt` and public entity references

## Initial Public Artifact State

| Artifact | Expected pre-R8C hash |
| --- | --- |
| GAIC public PDF | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` |
| AIAAWP public PDF | `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7` |

## Public Format Confirmation

- Public white paper formats are HTML and PDF only.
- No `.docx` files exist under `public/research`.
- No DOCX public links were found in `public/research`, `src/pages`, `public/llms.txt`, or `public/entity`.

## Scope Confirmation

- This wave repairs PDF A4 Print Profile wide-table behavior.
- This wave does not rewrite white paper semantics, GAIC scores, GAIC methodology, or AIAAWP argument content.
- This wave does not claim Final Seal or production live reverification.
- Pre-existing untracked `public/social/*` files are outside scope and must not be staged.
