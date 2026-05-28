# Manifest Checksum Repair Report

Affected artifact set:

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

Changes:

- HTML artifact hash changed after metadata-only head repair.
- PDF artifact hash remained unchanged.
- Manifest was updated with the new HTML hash, byte count, and metadata parity status.
- Checksum file was regenerated.
- `src/data/whitepaperPublications.ts` was updated with the new HTML, manifest, and checksum hashes.

Current hashes:

- HTML: `e99607ca2d53b9cc5d841bd216d56771d2b6d2ab7882666002e16e512404937d`
- PDF: `db4866c7421928e65d4563bb25787d9b322d708c59937216da9d04b60991d178`
- Manifest: `54fd96475f652c2805059fbe6fb7fef4dfaa6a7106bcc571f3681df911565cd7`
- Checksums file: `61d4867213410657d2028d45bb076efc33d1d3020d2ea2be0889453a8db7bf2d`

Validation:

`sha256sum -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256` passed.
