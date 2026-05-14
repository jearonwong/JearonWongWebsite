# GAIC-R3K-0C Hub Consistency Check

## Hub Fields Reviewed

File:

`src/pages/research/global-ai-compliance-white-paper-2026/index.astro`

Reviewed:

- PDF artifact link
- checksum display table
- JSON-LD `MediaObject` PDF hash
- Artifact Identity block
- artifact grid
- integrity note

## Updates Applied

| Area | Update |
|---|---|
| PDF checksum display | Updated to new public PDF hash `facc70c0ea0a52bb3bdeb0bb73be346cb34dc3cb5629c85de9ef993e3cdcf329` |
| JSON-LD MediaObject PDF hash | Updated through `shaRows[0]` |
| artifact grid | Added link to `public-pdf-metadata-reseal-manifest.json`; clarified publication-candidate manifest as historical seal metadata |
| Citation and Artifact Identity block | Added public PDF metadata re-seal manifest link |
| Integrity note | Clarified that public PDF is a metadata-hardened distribution re-seal; visible content/page count unchanged; sealed candidate PDF preserved |

## Not Changed

- White paper copy/prose.
- Score values.
- Methodology.
- PDF link path.
- Canonical URL.
- Citation string.
- Responsive public HTML file.

## Result

PASS. Hub displays the current public PDF checksum and clearly separates public distribution metadata re-seal from sealed candidate preservation without turning the hub into a changelog.

