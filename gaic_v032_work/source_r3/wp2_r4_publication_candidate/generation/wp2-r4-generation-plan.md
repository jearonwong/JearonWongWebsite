# WP2-R4 Generation Plan

**Decision:** Candidate artifact generation deferred to a later wave.  
**Reason:** Existing generation scripts under `gaic_v032_work/source_r3/scripts/` are tailored to GAIC WP1 source structure, renderer assumptions, and sealed/public artifact workflows. Reusing them directly for WP2 would require adaptation and artifact QA that is outside the safe scope of R4.

## Required Next Steps for R4B or R5

1. Create a WP2-specific renderer or adapt the GAIC HTML-first renderer in an isolated output directory.
2. Generate candidate HTML under `gaic_v032_work/source_r3/wp2_r4_publication_candidate/out/` only.
3. Generate PDF and DOCX derivatives only after HTML source is visually and structurally verified.
4. Include internal candidate-only labels in each generated artifact.
5. Produce artifact checksums and update `manifest.json` and `checksums.sha256`.
6. Run visual QA for cover, table of contents, chapters, tables, appendices, source register, and boundary language.
7. Run source ID, MRO numbering, and forbidden-claim sweeps on generated text.
8. Verify public GAIC artifacts remain unchanged.

## Open Decisions

- Whether Appendices A-F remain in the main PDF or move partly to a web companion.
- Whether R4 source IDs should remain visible in public artifacts or be converted to endnotes.
- Whether a figure set is needed for Audit Evidence Chain, MRO mapping, and AARM before final candidate QA.
- Whether DOCX should be generated as an editable derivative in the same wave as PDF.

## Boundary

This plan does not create public routes, public pages, public metadata, public artifacts, sealed artifacts, final publication, legal compliance proof, audit standards, certification, assurance opinions, regulator approval, procurement guidance, vendor rankings, or endorsement claims.
