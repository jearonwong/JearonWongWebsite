# AIAAWP-R6B Production Artifact Integrity QA

**Status:** PASS
**Temporary artifact root:** `/tmp/aiaawp-r6b-live/artifacts/`

Production artifacts were downloaded from `https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/` and hashed locally.

| Artifact | Production SHA256 | Expected R6 SHA256 | Result |
| --- | --- | --- | --- |
| HTML | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` | `e1b248765f50aa1c4e5ffbef9276d8dcea155cafdb1262719a9d1badbe1c790e` | PASS |
| PDF | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` | PASS |
| DOCX | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` | PASS |
| Manifest | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` | `efd53a2a1975631e4b2540ca3b386ba93ca565f3f43bd439679bca09034812df` | PASS |
| Checksums file | `254871f1bd5fabef7b773aa6f4a9dee9de0b772fbcc580de1a5bc0da0d67afc1` | R6 checksums file hash recorded during live verification | PASS |

## Checksum Validation

`shasum -a 256 -c checksums.sha256` passed for:

- `agentic-ai-auditability-assurance-white-paper-2026.html`
- `agentic-ai-auditability-assurance-white-paper-2026.pdf`
- `agentic-ai-auditability-assurance-white-paper-2026.docx`
- `manifest.json`

The production downloads also passed direct comparison against the expected R6 SHA256 file.

## Content Integrity Checks

- No hosting/CDN artifact transformation was detected.
- No absolute local paths were detected in production artifact bodies.
- No public-facing WP2 document identity was detected.
- Document ID remains `AIAAWP-2026-v0.1-R4-CANDIDATE`.
- Public filenames are clean AIAAWP publication names and do not expose WP2.

## Result

Production artifact integrity matches the R6 staged repository artifacts.
