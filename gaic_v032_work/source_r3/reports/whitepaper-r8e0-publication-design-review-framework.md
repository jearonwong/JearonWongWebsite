# WHITEPAPER-R8E-0 Publication Design Review Framework

**Date:** 2026-05-19

## Purpose

This framework defines how GAIC and AIAAWP PDF publication quality must be reviewed before any future implementation. It treats the problem as publication design, information architecture, semantic pagination, and enterprise/audit-reader usability, not as a single CSS parameter issue.

No code or artifact repair is authorized by this framework. Owner review is required before implementation.

## 1. Semantic Pagination Before CSS

Page breaks must be decided by content meaning first.

Rules:

- Read each content block semantically before assigning page behavior.
- Keep introductory text with the table, figure, chart, or heatmap it introduces when possible.
- Avoid orphaned level-2 and level-3 headings at page bottoms.
- Start major level-1 chapters on clean new pages.
- Keep important subheadings with their first paragraph, table, or figure.
- Use "continued" labels only when continuation is intentional and preserves context.
- Avoid splitting a table caption, explanatory paragraph, and the actual table across disconnected page families.

Failure mode observed: a GAIC landscape table page is separated from the explanatory text on the previous portrait page, creating semantic discontinuity even though the table itself is technically readable.

## 2. Table Purpose Before Table Format

Every table must be classified before rendering.

Table roles:

- comparison matrix
- scoring / rubric matrix
- heatmap
- lifecycle mapping
- evidence registry
- source / citation registry
- appendix catalogue
- narrative support table

The renderer must not choose row-card, landscape, or portrait based on width alone. It must ask what the reader is trying to do: compare systems, read an exact value, understand a mapping, scan evidence, review methodology, or cite a source.

## 3. Content Density Before Orientation

Orientation is an editorial decision, not a default.

Decision inputs:

- column count
- longest header
- longest cell
- row count
- comparison importance
- side-by-side scanning need
- whether repeated key columns are needed
- whether the table should be a chart or heatmap instead
- whether a compact scorecard would communicate better than a raw table

Rules:

- Do not force landscape by default.
- Do not force portrait by default.
- Do not force row-card by default.
- Small and medium readable tables remain in portrait flow.
- Dense high-comparison tables may use landscape if it materially improves comparison.
- Low-comparison registry/evidence tables may use row-card if completeness and extractability matter more than side-by-side comparison.

## 4. Visual Hierarchy Before Styling

Tables must express information priority.

For score and posture tables:

- Primary score dominates score range.
- System or project name is visually prominent.
- Range text is secondary.
- Confidence and evidence notes are secondary.
- Explanatory notes must not overpower the evaluation result.
- Posture/status labels are scannable badges or compact labels.
- Header row weight and contrast identify table structure without making every cell compete.
- Font size is assigned by information priority, not one global table font.

Global CSS can define base typography, color, spacing, and table chrome. Table-specific layout must be driven by semantic role and content density.

## 5. Profile-Aware Rendering

HTML Web Reading Profile:

- responsive
- crawler-friendly
- anchor-friendly
- not A4-bound
- table overflow and mobile containment are web concerns
- metadata, JSON-LD, and citation tags remain machine-readable

PDF A4 Print Profile:

- publication-quality fixed layout
- controlled pagination
- table profile decisions recorded
- page proof required
- header/footer/copyright system required
- no vertical single-character table text
- no detached explanatory text/table pair

DOCX Editable Derivative Profile:

- internal/private by default
- not public distribution
- not the visual authority

## 6. Publication Identity and Legal Footer

Every PDF page family needs a consistent publication identity system.

Recommended elements:

- running short document title
- author / site identity
- document ID or version
- page number
- `jearonwong.com`
- copyright / rights statement
- restrained boundary marker where needed

Cover pages may omit normal running header/footer. Status pages and TOC may use a lighter identity treatment. Body and appendix pages should carry a consistent footer.

Copyright wording requires owner approval before final implementation if the exact rights statement is not already authorized.

## 7. No Implementation Until Reviewed

This framework is a planning gate. It must be reviewed and accepted before any R8E-1 code, CSS, renderer, or artifact change.

## Result

R8E-0 establishes the review lens. Future implementation must start from semantic page design and table purpose, then choose typography, orientation, split strategy, chart/heatmap treatment, and pagination.
