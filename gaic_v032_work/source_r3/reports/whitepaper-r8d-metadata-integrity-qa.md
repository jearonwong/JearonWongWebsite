# WHITEPAPER-R8D Metadata / Manifest / Checksum QA

**Date:** 2026-05-19

## PDF Metadata

| Artifact | Title | Author | Page size | Pages | Result |
| --- | --- | --- | --- | ---: | --- |
| GAIC public PDF | `Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance` | `Jearon Wong` | A4 | 489 | PASS |
| AIAAWP public PDF | `Agentic AI Auditability & Assurance White Paper 2026` | `Jearon Wong` | A4 | 116 | PASS |

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
| No stale R8C public PDF hash remains where current public hash is expected | PASS |
| No DOCX public artifact reference remains | PASS |
| GAIC sealed candidate historical hash remains explicit historical state only | PASS |

## Current Public Hashes

| Artifact | Hash |
| --- | --- |
| GAIC PDF | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` |
| AIAAWP PDF | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` |
| GAIC HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` |
| AIAAWP HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` |

## Result

PASS. Metadata, manifests, checksums, and public hub hash displays are reconciled.
