# WHITEPAPER-R8 Metadata / Integrity QA

**Date:** 2026-05-18
**Scope:** Metadata, manifest, checksum, and public artifact integrity after R8 PDF repair.

## PDF Metadata

| PDF | Title | Author | Page size | Pages | Result |
| --- | --- | --- | --- | ---: | --- |
| GAIC | Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance | Jearon Wong | A4 | 488 | PASS |
| AIAAWP | Agentic AI Auditability & Assurance White Paper 2026 | Jearon Wong | A4 | 114 | PASS |

## Hashes

| Artifact | SHA256 | Result |
| --- | --- | --- |
| GAIC public PDF | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` | PASS |
| AIAAWP public PDF | `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7` | PASS |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Integrity Records

| File | Result |
| --- | --- |
| GAIC `checksums.sha256` includes current public PDF hash | PASS |
| GAIC public PDF repair manifest records current hash/page count | PASS |
| GAIC responsive HTML note records current public A4 PDF hash | PASS |
| AIAAWP manifest/checksum match current public PDF hash | PASS |
| JSON-LD artifact URLs remain valid | PASS |
| Citation PDF URLs remain valid | PASS |

## Result

Metadata and public artifact integrity records are aligned locally. Production reverification is required after deployment because public PDF bytes changed.

**Metadata / Integrity QA Result:** PASS.
