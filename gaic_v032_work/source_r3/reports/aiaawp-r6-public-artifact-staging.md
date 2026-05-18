# AIAAWP-R6 Public Artifact Staging

**Task:** AIAAWP-R6 Publication Staging
**Status:** PASS

## Public Artifact Directory

`public/research/agentic-ai-auditability-assurance-white-paper-2026/`

## Source Artifacts

Internal source package:

`gaic_v032_work/source_r3/wp2_r4_publication_candidate/out/`

| Source artifact | Internal R5 hash |
|---|---|
| `Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.html` | `74d0256280dcf9f6805594520a52536f3a1821af39afa267c743c013bee2a5a4` |
| `Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.pdf` | `df9ea5759e2e499ee1e2e9e682484956dbf9c567d81052b5afe4ef96727c2e17` |
| `Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.docx` | `d7495424872f5013d754bc4974ddddaf6dbe907fc3303970f65c78701d6b0590` |

## Public Artifacts

| Public artifact | SHA256 |
|---|---|
| `agentic-ai-auditability-assurance-white-paper-2026.html` | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` |
| `agentic-ai-auditability-assurance-white-paper-2026.pdf` | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` |
| `agentic-ai-auditability-assurance-white-paper-2026.docx` | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` |
| `manifest.json` | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` |

## Public-Copy Normalization

The public artifacts are derived from the R5 internal final candidate package, but public hashes differ from internal hashes because R6 performed public-copy-only staging normalization:

- HTML metadata/status was normalized from internal/noindex candidate language to public research candidate / deployment verification pending.
- PDF was regenerated from the normalized public HTML copy after stale internal-only status text was detected in text extraction, then metadata was normalized with AIAAWP public title, author, subject, and keywords.
- DOCX core properties were normalized and one visible status line was changed from internal candidate wording to public research candidate wording.
- `manifest.json` and `checksums.sha256` were created for the public artifact directory.

The internal R5 candidate package remains unchanged.

## Filename and Public Naming Result

PASS. Public filenames and route names are clean, canonical, and do not expose internal WP2 naming.

## Artifact Role Model

- HTML: responsive web-reading visual authority
- PDF: fixed-layout visual authority
- DOCX: editable derivative

## GAIC Integrity

PASS. No GAIC public/sealed artifact was changed.
