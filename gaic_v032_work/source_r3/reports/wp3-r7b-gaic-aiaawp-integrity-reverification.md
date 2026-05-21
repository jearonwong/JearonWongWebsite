# WP3-R7B GAIC / AIAAWP Integrity Reverification

GAIC and AIAAWP production artifacts were downloaded and compared against the current repo/source truth hashes. Old pre-R8 hashes were not used.

## GAIC

| Artifact | Expected Source | Expected SHA-256 | Production SHA-256 | Result |
| --- | --- | --- | --- | --- |
| GAIC HTML | current `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | PASS |
| GAIC PDF | current `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | `e2525ad333ee110ee59ab2819717b4918ae844ef21d682a380d7384041fb9124` | PASS |
| GAIC manifest | current `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | `ceafde3a4afcd5ed58891723b850a2059fb62ef90aac566ba31e47c531797cca` | `ceafde3a4afcd5ed58891723b850a2059fb62ef90aac566ba31e47c531797cca` | PASS |

## AIAAWP

| Artifact | Expected Source | Expected SHA-256 | Production SHA-256 | Result |
| --- | --- | --- | --- | --- |
| AIAAWP HTML | current `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | PASS |
| AIAAWP PDF | current `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | `62c9f8ed05d67a0187a9e51385b80b86e0af4411e783ae9523d8d9e412ca8d0e` | PASS |
| AIAAWP manifest | current `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` | `945ff67e88c283baf23f998726676db353f302e5416eff3814ae4d2c2f18834d` | `945ff67e88c283baf23f998726676db353f302e5416eff3814ae4d2c2f18834d` | PASS |

No GAIC or AIAAWP standalone artifact file was changed by R7B.
