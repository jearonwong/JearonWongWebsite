# WHITEPAPER-R8E-0 Implementation Roadmap Proposal

**Date:** 2026-05-19

## Purpose

This roadmap proposes a safe R8E-1 implementation sequence. It does not authorize implementation. Owner review is required first.

## Phase 1 - Decision System and Internal Test Harness

Scope:

- Patch SOP or renderer decision documentation only after owner approval.
- Add table profile registry or explicit table override map.
- Produce internal-only test HTML/PDF output, not public artifacts.

Likely files:

- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- optional report documenting table override map

Risks:

- Repeating the R8E mistake by coding before design decisions are accepted.

QA:

- Dry-run output only.
- No public artifacts changed.

Proceed or wait:

- Wait for owner approval.

## Phase 2 - PDF Table Profiles

Scope:

- Implement portrait table profile.
- Implement content-aware column widths.
- Implement portrait split matrix profile.
- Implement landscape table profile with integrated intro/title/legend.
- Implement heatmap/scorecard profile only for accepted tables.
- Keep row-card only for accepted low-comparison tables.

Likely files:

- PDF renderer script
- PDF-only CSS inside renderer
- possibly table classification metadata in reports/scripts

Risks:

- Score visuals can look like rankings.
- Heatmaps can imply false precision.
- Row-cards can weaken comparison.

QA:

- Render proof images for every P0/P1 table.
- Text extraction must preserve content.
- Verify no vertical single-character text.

Proceed or wait:

- Proceed only after owner accepts table-by-table plan.

## Phase 3 - Semantic Pagination

Scope:

- Keep intro with table or repeat a concise intro on landscape pages.
- Force level-1 chapter starts.
- Control heading orphaning.
- Add continuation labels.
- Keep chart/legend/boundary notes with charts.

Likely files:

- PDF renderer script
- print CSS rules
- table/figure wrapper logic

Risks:

- Page count changes.
- Landscape page families can create unexpected blank pages.

QA:

- Full PDF page inventory.
- Proof images for chapter starts, table starts, continuation pages, appendices, final page.

Proceed or wait:

- Proceed after table profile phase proves stable.

## Phase 4 - Header / Footer / Copyright

Scope:

- Add running title, author/site identity, document ID/version, page number, URL, and rights/boundary marker.
- Define page family exceptions for cover/frontmatter/TOC/landscape pages.

Owner decisions required:

- Exact copyright wording.
- Whether "Protocol Architect for the Agent Era" appears.
- Whether boundary marker appears on every page.

Risks:

- Footer can crowd dense tables.
- Rights wording may be unauthorized if guessed.

QA:

- Proof cover, TOC, body, landscape, appendix, source, final pages.

Proceed or wait:

- Wait for owner wording decisions.

## Phase 5 - Regenerate PDFs and Update Integrity

Scope:

- Regenerate GAIC and AIAAWP public PDFs only after internal QA passes.
- Update checksums, manifests, hub hash displays, JSON-LD encoding hashes if present, and governance records.

Risks:

- Hash drift without manifest updates.
- Accidental DOCX reintroduction.

QA:

- SHA256 validation.
- JSON manifest parse.
- PDF metadata check.
- DOCX offboarding check.

Proceed or wait:

- Proceed only after visual QA gate.

## Phase 6 - Visual QA and Proof Images

Scope:

- Render cover, TOC, representative normal portrait tables, every P0/P1 table, every landscape page, appendices, and final pages.
- Create before/after notes.

Risks:

- Passing text extraction while visual hierarchy remains weak.

QA:

- Human-readable proof image review.
- Table-specific acceptance criteria.

Proceed or wait:

- Owner review before production reverification.

## Phase 7 - Production Reverification

Scope:

- Verify live public URLs, hashes, metadata, JSON-LD, semantic wiring, boundary claims, responsive HTML, PDF visual quality, and DOCX offboarding.

Risks:

- Deployment lag.
- CDN stale artifacts.

QA:

- Production download and hash validation.
- Live screenshots / proof images.

Proceed or wait:

- Proceed only after R8E-1 implementation is accepted and deployed.

## Final Gate

`WAIT_FOR_OWNER_REVIEW_BEFORE_IMPLEMENTATION`
