# GAIC-R3D-3 Artifact Checksum Report

**Task ID:** GAIC-R3D-3-RESPONSIVE-WHITEPAPER-HTML-WEB-EDITION
**Date:** 2026-05-13
**Status:** PASS

## Artifact Model

R3D-3 distinguishes three artifact roles:

- Sealed publication candidate: preserved under `gaic_v032_work/source_r3/out/publication_candidate/`.
- PDF/DOCX formal citation artifacts: public copies remain hash-identical to sealed artifacts.
- Responsive public HTML web-reading edition: public HTML copy changed for mobile readability and carries a new checksum.

## Sealed Candidate Hashes

| Artifact | SHA256 | Status |
|---|---:|---|
| Sealed HTML candidate | `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af` | Unchanged |
| Sealed PDF candidate | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | Unchanged |
| Sealed DOCX candidate | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` | Unchanged |
| Sealed generation log | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` | Unchanged |

## Public Artifact Hashes After R3D-3

| Artifact | SHA256 | Status |
|---|---:|---|
| Public responsive HTML web edition | `e36a7a209e499c47c422620dce32035f4945c9cffb9b6a549180310c9bcfd42c` | Updated |
| Public PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | Unchanged |
| Public DOCX | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` | Unchanged |
| Public generation log | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` | Unchanged |

## Files Updated

- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` now records the responsive public HTML checksum.
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` displays `HTML web edition` with the new checksum.
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md` records the sealed/public artifact distinction.

## Manifest Handling

The sealed publication candidate manifest was not modified. The public manifest remains the sealed-candidate record; R3D-3 adds a separate web-edition note so the old sealed HTML hash is not misrepresented as the modified public HTML hash.
