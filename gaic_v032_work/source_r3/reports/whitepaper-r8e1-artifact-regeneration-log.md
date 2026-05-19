# WHITEPAPER-R8E-1 Artifact Regeneration Log

**Date:** 2026-05-19

## Public PDF Replacement Gate

Public PDFs were replaced only after `whitepaper-r8e1-internal-proof-qa.md` recorded a PASS for internal proof generation and visual/text QA.

## Artifact Hashes

| Artifact | Old SHA256 | New SHA256 | Changed |
| --- | --- | --- | --- |
| GAIC public PDF | `ce06d40fc4cd66e42e4f1144a4a2238753d9ead66313ae2bd04692786301d396` | `4ec048822d60b1b6bd935ce27f0b5cb2c3e96b1c69dd72489edf9142f101cc2d` | YES |
| AIAAWP public PDF | `a034219994b245bcfbc359e97155557501d4baf814bbe6fe7a39d900f2d6f45c` | `43f6be26a098747eed44daa06268c164678f7a35c47b3671a53fea27aef36996` | YES |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | NO |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | NO |
| GAIC public PDF repair manifest | previous recorded hash `9d7bdcf80395b1ae2cfbc0da6855c8f705ff9b4cecba112219dacff194d5105e` | `906f3ae47dd13a68d383d605f8f54f2abedabf65d92698e4cd5c076c993ecd29` | YES |
| AIAAWP public manifest | previous recorded hash `b738aed6db61864fd95b811201a744171527eae350e3cd83f8214b54b0c9bca0` | `5ad8393e9bc812df8aa528ad8758e87e1168183a5c12761c76d7ce483e0b0060` | YES |

## Files Regenerated or Updated

- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf`
- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256`
- `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`

## Integrity Surface Updates

| Surface | Result |
| --- | --- |
| Public checksums | Updated and `shasum -a 256 -c` passed for both whitepapers |
| Public manifests | Updated and JSON parse passed |
| Hub hash displays | Updated for GAIC PDF, AIAAWP PDF, and AIAAWP manifest |
| JSON-LD hash references | Hub JSON-LD uses `shaRows`; updated values propagate there |
| GAIC responsive note | Updated to R8E-1 PDF hash/page count |
| Public DOCX absent | YES |

## Production Reverification

Production reverification is required after commit and deployment. This report does not claim production live verification.
