# WHITEPAPER-R8E-0 Visual Hierarchy and Typography Audit

**Date:** 2026-05-19

## Review Principle

Visual hierarchy must express what matters first. A table can be technically readable and still fail publication quality if the primary result is not the visual anchor.

## Cross-Document Rules

| Element | Proposed visual rule | Global or table-specific |
| --- | --- | --- |
| Table title | Clear, heavier than body, close to table, kept with table | Global baseline |
| Intro / layout note | Short, secondary, not dominant | Global baseline |
| System / project name | Bold or semibold; never smaller than dense note text | Table-specific for score/comparison tables |
| Primary score | Largest numeric element in score table cell | Table-specific |
| Score range | Smaller, muted, directly below primary score | Table-specific |
| Confidence / evidence note | Secondary column or compact badge; not equal to score | Table-specific |
| Interpretation text | Smaller, readable, but never visually dominant over score columns | Table-specific |
| Posture label | Badge or compact label with consistent color semantics | Table-specific |
| Header row | Strong enough to scan; avoid oversized header that steals space | Global baseline |
| Cell padding | Tight for dense matrices, generous for normal tables | Table-specific by density |
| Color | Functional, restrained, accessible contrast | Global baseline plus table-specific heatmaps |

## GAIC Issues

| Location | Current visual problem | Why it affects comprehension | Proposed rule | Implementation route | Priority |
| --- | --- | --- | --- | --- | --- |
| RCCS-T / RCCS-M / ALCS Score Overview | Primary score, range, confidence, and explanation compete. Notes can visually dominate the actual result. | Enterprise readers need score pattern first, then uncertainty and evidence boundary. | Use score-first cell hierarchy: bold score, muted range, compact confidence badge, secondary evidence note. | Table-specific scorecard/landscape component | P0/P1 |
| Same score overview | System names are too close in weight to dense body text. | System scanning becomes slower; comparison loses force. | System names semibold, slightly larger, stable first column width. | Table-specific column class | P1 |
| Same score overview | Equal or near-equal columns do not match content density. | Long interpretation column crowds and score columns waste/compete. | Content-aware widths: system 16-18%, system type 12-14%, score columns 7-8% each, confidence 13-15%, interpretation remainder. | Table-specific renderer rules | P1 |
| Dimension-level heatmap | Badges are useful, but title/legend/context are weak and separated. | Reader sees grid before understanding semantics and boundary. | Heatmap page requires title, legend, boundary note, and grid on same page. | Landscape heatmap component | P1 |
| T-11-01 | Current split matrix is readable, but dense prose still reduces instant comparison. | Comparison is preserved but not highly polished. | Keep split matrix, increase key-column prominence, standardize continuation labels. | Split-matrix table class | P1/P2 |
| Chapter 12 profile tables | Long product names and posture labels risk narrow-column collapse. | Vertical or over-wrapped names break professional appearance. | System name column must have minimum width and no vertical fragmentation. | Content-aware width + no single-character wrapping gate | P0 if reproduced |

## AIAAWP Issues

| Location | Current visual problem | Why it affects comprehension | Proposed rule | Implementation route | Priority |
| --- | --- | --- | --- | --- | --- |
| Table 9 Auditability Readiness Levels | Overall acceptable; panel labels and headers can be more editorially refined. | Rubric comparison is important and should feel intentional. | Keep portrait split matrix; make level key visibly stable across panels. | Split-rubric table class | P1 |
| Table 1 Traditional AI Audit vs Agentic AI Auditability | If row-card is used too strongly, direct contrast weakens. | The reader should compare "traditional" vs "agentic" quickly. | Prefer two-column or two-panel comparison; row-card only for details. | Table-specific comparison class | P1 |
| Table 2 Logs vs Audit Evidence Chains | Row-card supports readability but can feel long and repetitive. | Reviewer may lose cross-row pattern. | Add compact summary comparison or stronger card titles; keep detailed cards if needed. | Row-card plus summary table | P1/P2 |
| Object/evidence catalogues | Card titles sometimes compete with field labels. | The object being described should dominate; fields should be secondary. | Card title hierarchy above field labels; continuation labels for multi-page card sets. | Global card component | P2 |
| Source/citation registry | Dense source rows need restrained typography. | Citation utility matters more than decoration. | Compact source registry style; avoid landscape unless clipping is proven. | Registry table/card class | P2 |

## Typography Decision

Global CSS should handle only:

- base body font
- base table font
- base caption style
- base header row style
- standard color tokens
- spacing rhythm

Table-specific design must handle:

- score hierarchy
- heatmap badges
- split matrix key columns
- evidence registry cards
- landscape page modules
- compact scorecard cells
- content-aware column widths

## Result

R8E-0 rejects a universal table style. Future implementation must build small table components by semantic role and information priority.
