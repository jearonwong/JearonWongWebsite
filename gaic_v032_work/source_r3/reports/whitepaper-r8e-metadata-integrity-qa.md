# WHITEPAPER-R8E Metadata / Manifest / Checksum QA

**Date:** 2026-05-19

## PDF Metadata

| Artifact | Title | Author | Page profile | Pages | Result |
| --- | --- | --- | --- | ---: | --- |
| GAIC public PDF | `Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance` | `Jearon Wong` | 473 portrait A4 + 2 landscape A4 | 475 | PASS |
| AIAAWP public PDF | `Agentic AI Auditability & Assurance White Paper 2026` | `Jearon Wong` | 113 portrait A4 | 113 | PASS |

## Integrity

| Check | Result |
| --- | --- |
| GAIC public checksum validates | PASS |
| AIAAWP public checksum validates | PASS |
| GAIC public PDF repair manifest parses as JSON | PASS |
| AIAAWP public manifest parses as JSON | PASS |
| GAIC hub PDF hash updated | PASS |
| AIAAWP hub PDF hash updated | PASS |
| AIAAWP manifest hash updated in checksum and hub | PASS |
| JSON-LD encoding hash values sourced from updated hub hash rows | PASS |
| No stale R8D public PDF hash remains where current public hash is expected | PASS |
| No DOCX public artifact reference remains | PASS |
| GAIC sealed candidate historical hash remains explicit historical state only | PASS |

## Current Public Hashes

| Artifact | Hash |
| --- | --- |
| GAIC PDF | `ce06d40fc4cd66e42e4f1144a4a2238753d9ead66313ae2bd04692786301d396` |
| AIAAWP PDF | `a034219994b245bcfbc359e97155557501d4baf814bbe6fe7a39d900f2d6f45c` |
| GAIC HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |

## Result

PASS. Metadata, manifests, checksums, and public hub hash displays are reconciled.
