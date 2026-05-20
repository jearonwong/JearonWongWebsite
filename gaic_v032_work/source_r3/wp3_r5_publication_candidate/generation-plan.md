# AIIRWP R5 Generation Plan

**Status:** Future artifact generation plan only.
**Boundary:** R5 does not generate HTML, PDF, DOCX, public artifacts, public routes, public manifest, or public checksums.

## Future Output Paths

Internal R6 candidate artifact generation may use:

- `gaic_v032_work/source_r3/wp3_r5_publication_candidate/out/Agentic-AI-Insurability-Risk-Transfer-White-Paper-2026-v0.1-R6-Candidate.html`
- `gaic_v032_work/source_r3/wp3_r5_publication_candidate/out/Agentic-AI-Insurability-Risk-Transfer-White-Paper-2026-v0.1-R6-Candidate.pdf`
- optional internal editable derivative only: `gaic_v032_work/source_r3/wp3_r5_publication_candidate/out/Agentic-AI-Insurability-Risk-Transfer-White-Paper-2026-v0.1-R6-Candidate.docx`

No file should be copied into `public/` until a separate public staging wave is authorized.

## Required Reuse

- HTML must reuse the GAIC/AIAAWP responsive web-reading shell.
- PDF must reuse the GAIC/AIAAWP A4 print profile and R8 wide-table, semantic-table, and adaptive-table gates.
- DOCX remains internal editable derivative only unless owner explicitly authorizes public distribution.
- Metadata, citation metadata, JSON-LD planning, manifest/checksum discipline, and boundary copy must follow GAIC/AIAAWP patterns.

## Table Layout Requirements

- High-comparison tables must remain matrix-like; do not default them to row cards.
- Dense tables may require portrait split matrix, dedicated landscape A4 pages, or landscape split matrix.
- Registry/evidence request/source tables may use row-card treatment if comparison is low.
- AIO and AIRM tables require boundary notes near first appearance.
- Chapter 0-5 must remain readable in both HTML and PDF.

## Expected QA Steps

1. Generate internal HTML from candidate source only after R6 authorization.
2. Run mobile/tablet/desktop HTML checks.
3. Generate PDF through the A4 print profile.
4. Render proof pages for cover, TOC, Chapters 0-5, AIO catalog, AIRM matrix, source/citation pages, appendices, all landscape pages, and all table-heavy pages.
5. Verify no vertical single-character table text.
6. Verify text extraction includes table content.
7. Verify metadata and source-note rendering.
8. Update internal manifest/checksums for generated internal artifacts only.
9. Run boundary QA before any public staging proposal.

## Manifest / Checksum Update Rules

- Internal R6 manifest may include internal HTML/PDF/DOCX artifacts only.
- Public manifest/checksums must not be created until public staging is authorized.
- Checksums must be regenerated after every artifact regeneration.
- Public DOCX must remain excluded by default.
