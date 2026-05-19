# WHITEPAPER-R8C Metadata / Manifest / Checksum QA

**Date:** 2026-05-19

## PDF Metadata

| Artifact | Title | Author | Page size | Result |
| --- | --- | --- | --- | --- |
| GAIC public PDF | Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance | Jearon Wong | A4 | PASS |
| AIAAWP public PDF | Agentic AI Auditability & Assurance White Paper 2026 | Jearon Wong | A4 | PASS |

## Public Hashes

| Artifact | SHA256 |
| --- | --- |
| GAIC public PDF | `bf7f241642719a9ab0214fc6110d0e7018b532b055a3be2bd2f1e12fff1330c8` |
| AIAAWP public PDF | `cc13249074a7cdd79c0a071f29ccfe1ba89dce2103dc61fb09dded7b0304caca` |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |
| AIAAWP public manifest | `b84dd40331dc8d80cc557d34caa4141be7e911dcf5eac844a1a77fdec27120cc` |
| GAIC public PDF repair manifest | `2b48bd0d8b35e0a86a4b7647b38300f53d4aaa680c759718fdffa68dfe827624` |

## Validation

| Check | Result |
| --- | --- |
| GAIC `checksums.sha256` validates | PASS |
| AIAAWP `checksums.sha256` validates | PASS |
| AIAAWP manifest JSON parses | PASS |
| GAIC PDF repair manifest JSON parses | PASS |
| Hub hash displays updated | PASS |
| No DOCX public artifact reference remains | PASS |
| GAIC sealed candidate hash remains historical and unchanged | PASS |

Old R8/R8B PDF hashes remain only in historical QA reports and as the explicit previous-public-PDF hash in the GAIC repair manifest.

## Result

PASS. Current public integrity records reconcile with the regenerated PDFs.
