# WP2-R4 Generation Plan

**R4 Decision:** Candidate artifact generation deferred to a later wave.
**R4B Execution:** Candidate artifact generation completed with a WP2-specific internal generator.
**Reason:** Existing generation scripts under `gaic_v032_work/source_r3/scripts/` are tailored to GAIC WP1 source structure, renderer assumptions, and sealed/public artifact workflows. R4B therefore created a separate WP2-specific generator instead of modifying GAIC WP1 scripts or sealed/public artifact workflows.

## R4B Generation Path

- Generator: `generation/generate-wp2-r4-candidate-html.mjs`
- Input: `WP2-2026-R4-PUBLICATION-CANDIDATE.md`, `sources/wp2-r4-source-register.md`, and `sources/wp2-r4-citation-map.md`
- Output directory: `out/`
- HTML: standalone internal candidate HTML with noindex/no-follow metadata and internal-only status banner
- PDF: generated from candidate HTML through LibreOffice, then metadata-normalized with `pdf-lib`
- DOCX: generated through LibreOffice HTML -> ODT -> DOCX bridge with a DOCX-specific landscape conversion stylesheet for wide review tables
- Manifest/checksum update: handled by the generator

## Required Next Steps for R4B or R5

1. R5 should perform final candidate QA on the generated internal HTML/PDF/DOCX.
2. R5 should decide final citation format: source IDs, endnotes, footnotes, or appendix source register.
3. R5 should decide whether Appendices A-F remain in the main artifact or move partly to a companion surface.
4. R5 should complete final author review before any final candidate seal.
5. R6 site publication remains blocked until explicit authorization.

## Open Decisions

- Whether Appendices A-F remain in the main PDF or move partly to a web companion.
- Whether R4 source IDs should remain visible in public artifacts or be converted to endnotes.
- Whether a figure set is needed for Audit Evidence Chain, MRO mapping, and AARM before final candidate QA.
- Whether the DOCX landscape layout should remain the review derivative or be redesigned before a final candidate seal.

## Boundary

This plan does not create public routes, public pages, public metadata, public artifacts, sealed artifacts, final publication, legal compliance proof, audit standards, certification, assurance opinions, regulator approval, procurement guidance, vendor rankings, or endorsement claims.
