# GAIC-R3K-0C Post PDF Metadata Validation

## Metadata Tool

Applied metadata with Python `fitz` / PyMuPDF using incremental PDF save:

- no source regeneration
- no layout regeneration
- no PDF-to-PDF visual recomposition
- no sealed candidate mutation

## Metadata After Patch

| Field | Value |
|---|---|
| Title | `Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance` |
| Author | `Jearon Wong` |
| Subject | `Technical governance analysis of AI Agent Lifecycle Governance, Missing Regulatory Objects, RCCS-T, RCCS-M, ALCS, and agentic lifecycle conformance.` |
| Keywords | `Global AI Compliance White Paper 2026; GACWP-2026-v0.3.2-FRC-R3; AI Agent Lifecycle Governance; Agentic Lifecycle Governance; Missing Regulatory Objects; MRO; RCCS-T; RCCS-M; ALCS; MPLP; Multi-Agent Lifecycle Protocol; Deterministic Delivery; AI Agent Compliance; Multi-Agent Systems; Enterprise AI Governance; Evidence Chain; Accepted Outcome; Authority Boundary` |
| Creator | Preserved |
| Producer | Preserved |
| CreationDate | Preserved |
| ModDate | Preserved |
| Tagged PDF | Preserved |
| Page count | 425 |
| PDF version | 1.4 |

## Hashes

| Artifact | SHA256 |
|---|---|
| Old public PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |
| New public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` |
| Sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` |

## Visual Parity

Rendered the same sampled pages after mutation with `pdftoppm -png -r 120`:

- 1
- 2
- 3
- 50
- 120
- 200
- 300
- 425

Comparison method:

- Byte-identical PNG comparison between baseline and post render files.

Result:

| Page | Result |
|---:|---|
| 1 | MATCH |
| 2 | MATCH |
| 3 | MATCH |
| 50 | MATCH |
| 120 | MATCH |
| 200 | MATCH |
| 300 | MATCH |
| 425 | MATCH |

## Validation Result

PASS. Metadata fields are present, page count is unchanged, and sampled visual render output is byte-identical before/after.

