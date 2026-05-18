# AIAAWP-R6B2 Production Artifact Integrity QA

**Date:** 2026-05-18
**Production download directory:** `/tmp/aiaawp-r6b2-live/`

## Hash Verification

| Artifact | Production SHA256 | Expected R6 staged SHA256 | Result |
| --- | --- | --- | --- |
| HTML | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` | PASS |
| PDF | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` | PASS |
| DOCX | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` | PASS |
| Manifest | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` | PASS |
| Checksums file | `254871f1bd5fabef7b773aa6f4a9dee9de0b772fbcc580de1a5bc0da0d67afc1` | Informational public checksum file hash | PASS |

## Checksum File Validation

`shasum -a 256 -c checksums.sha256` in `/tmp/aiaawp-r6b2-live/` returned:

- `agentic-ai-auditability-assurance-white-paper-2026.html: OK`
- `agentic-ai-auditability-assurance-white-paper-2026.pdf: OK`
- `agentic-ai-auditability-assurance-white-paper-2026.docx: OK`
- `manifest.json: OK`

## Manifest Checks

- Document ID: `AIAAWP-2026-v0.1-R4-CANDIDATE`.
- Status: `public_research_candidate_staged`.
- Artifact count: 3.
- Artifact paths are production public paths under `/research/agentic-ai-auditability-assurance-white-paper-2026/`.
- Manifest marks `production_live_verified` as false because the artifact file itself was not rewritten during live verification.

## Boundary Checks

- No local absolute paths found in production HTML, manifest, or checksums.
- No public-facing `WP2` identity found in production HTML, manifest, or checksums.
- Public document identity remains `AIAAWP-2026-v0.1-R4-CANDIDATE`.

**Artifact Integrity QA:** PASS.
