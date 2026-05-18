# AIAAWP-R6 Public Artifact Integrity QA

**Task:** AIAAWP-R6 Publication Staging
**Status:** PASS

## Public Checksum Validation

Command:

`(cd public/research/agentic-ai-auditability-assurance-white-paper-2026 && shasum -a 256 -c checksums.sha256)`

Result:

| File | Result |
|---|---|
| `agentic-ai-auditability-assurance-white-paper-2026.html` | OK |
| `agentic-ai-auditability-assurance-white-paper-2026.pdf` | OK |
| `agentic-ai-auditability-assurance-white-paper-2026.docx` | OK |
| `manifest.json` | OK |

## Public Hashes

| Artifact | SHA256 |
|---|---|
| HTML | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` |
| PDF | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` |
| DOCX | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` |
| Manifest | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` |

## PDF Metadata

| Field | Result |
|---|---|
| Title | `Agentic AI Auditability & Assurance White Paper 2026` |
| Author | `Jearon Wong` |
| Subject | `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance` |
| Keywords | AIAAWP auditability / audit evidence chain / AARM / MRO terms |
| Pages | 141 |

The public PDF was regenerated from the normalized public HTML copy after stale internal-only status text was detected in PDF text extraction. A PyPDF2 metadata pass then set the public title, author, subject, and keywords. The resulting PDF text extraction no longer contains `Internal format candidate`, `not public`, `noindex`, or public-facing `WP2` document identity.

## Path and Identity Checks

PASS. Public manifest/checksum paths are relative or site-root public paths; no unstable absolute local paths were introduced.

PASS. Public artifact filenames use AIAAWP public identity and do not expose WP2 as the document name.

PASS. Public route artifact links match the public artifact directory.

Note: the public full-text artifacts preserve historical R4 source-register/citation-map language in source/citation sections. This is not used as public document identity and does not expose WP2 naming.
