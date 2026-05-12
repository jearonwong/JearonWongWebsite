# GAIC R1 Public Asset Integrity Report

**Task:** GAIC-R1-PUBLIC-RELEASE-PAGE
**Date:** May 12, 2026
**Status:** PASS

## Source and Public Asset Paths

Sealed source directory:

- `gaic_v032_work/source_r3/out/publication_candidate/`

Public release directory:

- `public/research/global-ai-compliance-white-paper-2026/`

## Public Assets

| Public asset | Source artifact | SHA256 | Result |
|---|---|---:|---|
| `global-ai-compliance-white-paper-2026.html` | sealed HTML publication candidate | `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af` | MATCH |
| `global-ai-compliance-white-paper-2026.pdf` | sealed PDF publication candidate | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | MATCH |
| `global-ai-compliance-white-paper-2026.docx` | sealed DOCX derivative | `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa` | MATCH |
| `generation-log.json` | sealed Phase 1D-13F generation log | `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e` | MATCH |
| `publication-candidate-manifest.json` | sealed manifest | `ee1d9f62b309efb48312f8ef8353fee10a3482ed76b201488e46e6e3b4323c30` | COPIED |
| `publication-candidate-seal-report.md` | seal report public copy | `285f2eca0bdd38c0d19e761ac581dbda8fca1869ec8f9931a3ad13257c04c528` | COPIED |
| `checksums.sha256` | R1 public checksum file | `bce80984cebdd62d044b2ab65cebea84b9e04744a0ff5867fdc54b2dd9d39eff` | CREATED |

## Integrity Notes

- The sealed originals under `gaic_v032_work/source_r3/out/publication_candidate/` were not modified.
- Public HTML/PDF/DOCX/log hashes match the sealed publication-candidate hashes exactly.
- The public generation log is exposed with a release-facing filename, `generation-log.json`, while preserving the sealed log hash.
- The public seal report copy was whitespace-normalized for repository hygiene; it is not one of the sealed immutable HTML/PDF/DOCX/log artifacts.
- `checksums.sha256` records the public paths and their hashes for release verification.

## Decision

GAIC-R1 public asset integrity is PASS.
