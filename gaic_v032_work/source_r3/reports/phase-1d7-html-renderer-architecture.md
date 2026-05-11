# Phase 1D-7 HTML Renderer Architecture

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** HTML-first publication renderer replacing the rejected Word-style visual path
**Status:** ARCHITECTURE DEFINED

## Pipeline

1. Read the active `source_r3` Markdown files used by the full white paper.
2. Sanitize publication-facing residue without altering the source files.
3. Parse Markdown into a structured intermediate for headings, paragraphs, lists, tables, figures, callouts, and code blocks.
4. Apply semantic HTML components:
   - cover;
   - important notice;
   - document control;
   - executive summary and TOC;
   - chapters;
   - callouts;
   - figure cards;
   - tables and split wide tables;
   - appendices;
   - source notes.
5. Render one full HTML publication with embedded CSS.
6. Export PDF from HTML using browser print.
7. Export DOCX from the same HTML as an editable derivative.
8. Render PDF pages to PNG for visual QA.
9. Write generation log and QA reports.

## Content Truth

The renderer uses active `source_r3` Markdown as the sole content truth. It does not use the Phase 1D-6 DOCX/PDF, the old 93-page public paper, the 539-page mechanical assembly, or the Genspark sample as content input.

## Visual Truth

HTML and PDF are the visual source of truth. DOCX is generated only as an editable derivative and may have lower fidelity because Word/LibreOffice conversion can alter line breaks, spacing, and table wrapping.

## Semantic Components

| Component | Renderer Behavior |
|---|---|
| Cover | Generated from document metadata and GAIC thesis language |
| Important notice | Generated boundary component near the front of the document |
| Headings | Converted to stable anchors and styled by level |
| Figures | Formal `Figure F-*` blocks become figure cards with flow lanes and interpretation text |
| Tables | Markdown tables become styled HTML tables; dense wide tables are split into preserved column groups |
| Callouts | Boundary, thesis, validation, and evidence statements receive controlled visual treatment |
| Appendices | Appendix files receive compact mode while preserving source order |
| Footer | Trace tag, copyright, and non-legal note are applied through print CSS |

## QA Gates

The Phase 1D-7 renderer must report:

- HTML/PDF/DOCX generation status;
- page count;
- rendered page count;
- content preservation against active source;
- Chapters 1-18 retention;
- Appendices A-K retention;
- F-01 through F-11 retention;
- active table ID retention;
- source marker and figure placeholder absence;
- forbidden positive claim count;
- Appendix G no-score/no-ranking status;
- DOCX derivative limitations.

Publication-candidate readiness is not declared while citation pinning/access blockers remain.
