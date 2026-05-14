# GAIC-R3L White Paper Artifact Integrity and Discoverability

**Date:** 2026-05-14

## Artifact Hash Verification

| Artifact | Expected SHA256 | Actual SHA256 | Result |
|---|---|---|---|
| Public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | PASS |
| Public responsive HTML | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | PASS |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | PASS |

## Checksum File

`public/research/global-ai-compliance-white-paper-2026/checksums.sha256` includes the current public responsive HTML and public PDF hashes. The public PDF metadata re-seal manifest records the public distribution PDF metadata re-seal and preserves the sealed candidate PDF hash as historical sealed candidate evidence.

## White Paper Identity and Discoverability Checks

| Check | Result |
|---|---|
| Citation and Artifact Identity block present on hub | PASS |
| Document ID / Trace Tag visible: `GACWP-2026-v0.3.2-FRC-R3` | PASS |
| Scholar-compatible citation metadata present on hub | PASS |
| Scholar-compatible citation metadata present on responsive HTML | PASS |
| TechArticle JSON-LD includes identifier and author on hub | PASS |
| TechArticle JSON-LD includes identifier and author on responsive HTML | PASS |
| Responsive HTML contains `#mro-01` through `#mro-16` | PASS |
| Responsive HTML contains `#rccs-t` | PASS |
| Responsive HTML contains `#rccs-m` | PASS |
| Responsive HTML contains `#alcs` | PASS |
| Public PDF available on production | PASS |
| Public responsive HTML available on production | PASS |
| Public DOCX derivative available on production | PASS |
| `checksums.sha256` available on production | PASS |
| `public-pdf-metadata-reseal-manifest.json` available on production | PASS |

## Result

PASS. White paper artifact identity, public artifact accessibility, source-trace anchors, citation metadata, and artifact hashes are ready for owner launch execution. No artifact was modified by R3L.

