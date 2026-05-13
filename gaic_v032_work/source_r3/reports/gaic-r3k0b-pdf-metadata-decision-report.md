# GAIC-R3K-0B PDF Metadata Decision Report

## PDF Metadata Audit

Tool: `pdfinfo`

| Field | Result |
|---|---|
| Title | `Global AI Compliance White Paper 2026 - GACWP-2026-v0.3.2-FRC-R3` |
| Author | Missing |
| Subject | Missing |
| Keywords | Missing |
| Producer | `Skia/PDF m148` |
| Creator | Headless Chrome user agent |
| CreationDate / ModDate | Present |
| Metadata stream | No |
| Tagged PDF | Yes |
| Pages | 425 |

## Decision

PDF metadata is partially acceptable because the title includes the report name and trace tag, but it is incomplete for author/subject/keywords.

## Hash Risk

Changing PDF metadata would change the PDF hash:

`3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`

Because this PDF matches the sealed candidate PDF hash, R3K-0B did not modify it.

## Recommended Path

Recommended path: **B. create a controlled public release re-seal wave to update PDF metadata and checksums** if the owner wants PDF-native metadata hardened.

Alternative acceptable path: leave sealed PDF unchanged and rely on HTML/citation metadata for discoverability.

## User Approval

Required before any PDF metadata mutation or re-seal.

## R3K-0B Status Impact

This creates a partial completion condition:

`GAIC-R3K-0B PARTIAL COMPLETE / PDF METADATA RE-SEAL DECISION PENDING`

