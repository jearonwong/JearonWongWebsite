# WHITEPAPER-R8E-1 Metadata / Manifest / Checksum QA

**Date:** 2026-05-19

## Public Hashes

| Artifact | SHA256 |
| --- | --- |
| GAIC public PDF | `4ec048822d60b1b6bd935ce27f0b5cb2c3e96b1c69dd72489edf9142f101cc2d` |
| AIAAWP public PDF | `43f6be26a098747eed44daa06268c164678f7a35c47b3671a53fea27aef36996` |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |
| GAIC public PDF repair manifest | `906f3ae47dd13a68d383d605f8f54f2abedabf65d92698e4cd5c076c993ecd29` |
| AIAAWP manifest | `5ad8393e9bc812df8aa528ad8758e87e1168183a5c12761c76d7ce483e0b0060` |

## Checks

| Check | Result |
| --- | --- |
| GAIC PDF metadata correct | PASS |
| AIAAWP PDF metadata correct | PASS |
| Public checksum validates | PASS |
| Public manifests updated | PASS |
| Route artifact grid displays current PDF hashes | PASS |
| JSON-LD artifact references updated where hub uses `shaRows` | PASS |
| No stale old PDF hash remains where current hash expected | PASS; old hashes remain only in preflight/history/previous-public-hash context |
| No DOCX public artifact reference remains | PASS |
| Historical candidate hash remains only where explicitly historical | PASS; GAIC candidate PDF hash remains `3e4ed...` |
| Production reverification required | PASS |

## Result

**PASS.** Metadata and integrity surfaces reconcile with regenerated public PDFs.
