# WHITEPAPER-R8E-3 DOCX Offboarding Regression QA

| Check | Result |
|---|---|
| No `.docx` under `public/research` | PASS |
| No `.docx` under `dist/research` | PASS |
| No DOCX links in GAIC hub | PASS |
| No DOCX links in AIAAWP hub | PASS |
| No DOCX links in homepage | PASS |
| No DOCX in Evidence Registry | PASS |
| No DOCX in `llms.txt` public whitepaper artifact references | PASS |
| No DOCX in public manifests/checksums | PASS |
| No DOCX in public JSON-LD artifact encodings | PASS |

## Commands

- `find public/research dist/research -name '*.docx' -print`
- `rg -n "\\.docx|DOCX" src public/llms.txt public/entity public/research --glob '!**/*.pdf' --glob '!**/*.png' --glob '!**/*.svg'`

## Result

Public DOCX remains offboarded. Public whitepaper artifact surfaces expose HTML and PDF only.
