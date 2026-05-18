# WHITEPAPER-R8 Artifact Regeneration Log

**Date:** 2026-05-18
**Scope:** Public PDF regeneration and integrity updates.

## Regenerated Artifacts

| Artifact | Previous public hash | Current public hash | Page count | Status |
| --- | --- | --- | ---: | --- |
| GAIC public PDF | `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` | `8db768291af10dd390f8eeaa0a9bb8950f90026a31647b8bbfb8513d9fc094c9` | 488 | UPDATED |
| AIAAWP public PDF | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` | `547bb2c428cf7490fd8211b38c37c243eb1ca442e1047438d5f60bb1453e59b7` | 114 | VALIDATED CURRENT |

## Integrity Updates

- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` updated for the new GAIC public PDF hash.
- `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json` updated as the R8 A4 layout repair manifest.
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md` updated to record the current public A4 PDF hash.
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` updated for the current public A4 PDF hash and byte size.
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` updated for the current public A4 PDF hash and updated manifest hash.

## Unchanged Artifacts

- GAIC sealed candidate PDF remains `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`.
- GAIC public HTML remains `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce`.
- GAIC public DOCX remains `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa`.
- AIAAWP public HTML and DOCX remain unchanged; AIAAWP public PDF, manifest, and checksum records were updated and are internally consistent.

**Regeneration Result:** PASS. Production reverification is required after deployment.
