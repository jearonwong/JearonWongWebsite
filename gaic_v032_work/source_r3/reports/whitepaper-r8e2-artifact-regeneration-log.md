# WHITEPAPER-R8E-2 Artifact Regeneration Log

**Date:** 2026-05-19

## Public PDF Regeneration

| Artifact | Old SHA256 | New SHA256 | Changed |
| --- | --- | --- | --- |
| GAIC public PDF | `4ec048822d60b1b6bd935ce27f0b5cb2c3e96b1c69dd72489edf9142f101cc2d` | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | YES |
| AIAAWP public PDF | `43f6be26a098747eed44daa06268c164678f7a35c47b3671a53fea27aef36996` | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | YES |

## HTML / DOCX

| Check | Result |
| --- | --- |
| GAIC public HTML hash changed | NO: `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML hash changed | NO: `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |
| Public DOCX absent | YES |

## Integrity Surfaces Updated

- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`

## Result

Public PDFs were replaced only after internal proof QA passed. Production reverification is required after deployment.
