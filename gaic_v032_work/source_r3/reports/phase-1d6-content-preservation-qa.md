# Phase 1D-6 Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** Latest active source versus generated Markdown and generated PDF text
**Status:** PASS

## Counts

| Metric | Count |
|---|---:|
| Active source files assembled | 30 |
| Active source word count | 113369 |
| Generated Markdown word count | 113398 |
| Extracted PDF text word count | 108660 |
| Active table IDs | 170 |
| Generated Markdown table IDs | 170 |
| PDF text table IDs | 170 |
| Missing table IDs in generated Markdown | 0 |
| Missing table IDs in PDF text | 0 |
| Appendices A-K retained | 11/11 |
| Required figures F-01 through F-11 rendered | 11/11 |

Generated Markdown word count closely matches active source word count. PDF text word count is lower due to PDF extraction and table/line handling, not content removal. The generated artifact preserves front matter, active Chapters 1-18 source files, Appendices A-K, 170 active table IDs, F-01 through F-11 figure panels, and key non-legal/non-certifying/non-ranking boundaries.

## Architecture Regression Checks

| Risk | Result |
|---|---|
| Reversion to 93-page public paper model | Not detected; output is a 233-page full white paper |
| Reversion to old 539-page mechanical dump model | Not detected; output uses continuous full-content reflow with split wide tables |
| Internal reports included as publication body | Not detected |
| Old DOCX/PDF used as input | No |

## Decision

Content preservation QA passes for Phase 1D-6.
