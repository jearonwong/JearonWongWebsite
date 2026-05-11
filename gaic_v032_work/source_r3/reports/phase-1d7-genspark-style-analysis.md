# Phase 1D-7 Genspark Style Analysis

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** User-provided Genspark HTML/PDF/DOCX style notes used as layout reference only
**Status:** STYLE REFERENCE ANALYZED / CONTENT NOT ADOPTED

## Reference Boundary

The Genspark sample is treated as an executive capsule and visual reference, not as a content source. Its text, chapter order, compression choices, and legal/source boundaries are not imported into the GAIC publication pipeline. The active `source_r3` Markdown remains the sole content truth.

## HTML Structure Lessons

The useful pattern is HTML-first publication structure:

| Structure | Lesson for GAIC |
|---|---|
| Cover page | Establish title, author, trace tag, version, and thesis before the body text |
| Metadata / document control block | Make publication status, evidence boundary, validation boundary, and scoring boundary visible |
| Callout boxes | Use bounded callouts for non-legal notice, thesis, evidence discipline, and source limitations |
| Table of contents | Preserve Part I-V organization with anchored navigation |
| Section blocks | Use continuous reading flow with clear heading rhythm |
| Tables | Style headers, row spacing, and dense cells explicitly instead of relying on Word defaults |
| Footer | Keep trace tag and non-legal boundary visible without crowding the page |

## CSS Lessons

The sample succeeds because layout is controlled by CSS rather than left to Markdown or DOCX defaults. Useful controls include:

- readable body width around the 880-980 px range on screen;
- explicit page padding and print margins;
- separate heading and body font stacks;
- predictable h1/h2/h3 scale;
- table header fill, cell padding, border color, and compact appendix density;
- callout borders and label styles;
- cover and metadata hierarchy;
- print rules for page size, page breaks, figure cards, callouts, and tables.

## Adopted

- HTML-first source assembly and semantic components.
- Explicit CSS typography, spacing, table styling, callouts, cover, metadata, TOC, and appendix treatment.
- PDF exported from HTML as the visual source of truth.
- DOCX treated as an editable derivative, not as the visual authority.

## Not Adopted

- Genspark source text or summaries.
- Executive-capsule compression.
- Incomplete chapter coverage.
- Chinese-only summaries unless an intentional bilingual edition is commissioned.
- Generic navy/gold palette where it conflicts with JearonWong VI.
- DOCX as the visual source of truth.

## Phase 1D-7 Design Decision

The GAIC publication pipeline moves from Word-style generated report output to an HTML/CSS-controlled renderer. The renderer must preserve the full R3 source content, apply JearonWong VI, and export PDF from HTML as the primary visual artifact.
