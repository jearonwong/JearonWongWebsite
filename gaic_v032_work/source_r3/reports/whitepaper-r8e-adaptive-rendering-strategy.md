# WHITEPAPER-R8E Adaptive Rendering Strategy

**Date:** 2026-05-19

## Final Strategy

R8E implements adaptive PDF table rendering in the PDF-only temporary HTML layer:

- Keep normal/small tables in portrait.
- Keep T-11-01 as portrait split matrix because it is already readable and comparison-preserving.
- Use dedicated landscape A4 only where density and comparison importance justify it.
- Keep row-card only for registry, evidence, appendix long, or descriptive low-comparison tables.
- Do not mutate public HTML.
- Do not reintroduce DOCX.

## P0/P1 Rendering Decisions

| Table | Target rendering | Portrait sufficient? | Landscape needed? | Row-card appropriate? | QA method |
| --- | --- | --- | --- | --- | --- |
| GAIC T-11-01 | Portrait split matrix | Yes | No | No | Render page 147 and verify repeated key column, no vertical text. |
| GAIC score overview | Dedicated landscape A4 table | No | Yes | No | Render page 193 and verify side-by-side score comparison. |
| GAIC dimension coverage patterns | Dedicated landscape A4 table | No | Yes | No | Render page 196 and verify high-column comparison remains scanable. |
| GAIC appendix/system profile cards | Row-card / registry card | N/A | No | Yes | Render page 379 and verify descriptive card use remains bounded. |
| AIAAWP Table 9 | Portrait split rubric matrix | Yes | No | No | Render page 56 and verify L0-L5 comparison. |
| AIAAWP Professional Use Matrix | Portrait inline table | Yes | No | No | Render page 65 and verify normal flow. |

## Expected Artifact Changes

- GAIC public PDF changes because adaptive landscape pages are introduced for two dense comparison tables.
- AIAAWP public PDF changes through deterministic regeneration and renderer CSS changes, though no AIAAWP landscape page is selected.
- Public HTML hashes remain unchanged.
- Public DOCX remains absent.

## Validation Plan

- Confirm GAIC landscape pages are limited to selected dense comparison tables.
- Confirm AIAAWP has zero landscape pages.
- Render representative portrait, split, landscape, row-card, cover, TOC, and final pages.
- Validate PDF text extraction, metadata, public checksums, manifests, and route hash displays.
