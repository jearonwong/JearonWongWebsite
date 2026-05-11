# Phase 1D-7 HTML Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** Active source_r3 Markdown versus generated HTML/PDF text
**Status:** PASS FOR HTML QA DRAFT

## Counts

| Metric | Count |
|---|---:|
| Active source word count | 55711 |
| Generated HTML text word count | 104690 |
| Extracted PDF text word count | 105860 |
| Chapter H1 count | 18/18 |
| Appendix H1 count | 11/11 |
| Active table IDs | 170 |
| Generated HTML table IDs | 175 |
| Generated PDF text table IDs | 175 |
| Missing table IDs in HTML | 0 |
| Missing table IDs in PDF text | 0 |
| Required figures F-01 through F-11 | 11/11 |

## Architecture Regression Checks

| Risk | Result |
|---|---|
| Genspark content imported | Not detected |
| 93-page summary model used | Not detected |
| Old DOCX/PDF used as input | No |
| Internal reports included as publication body | Not detected |

## Decision

The HTML renderer preserves the full active source structure for Chapters 1-18, Appendices A-K, active table IDs, and F-01 through F-11. Generated HTML/PDF word counts are not expected to match one-for-one because the HTML renderer splits wide tables into repeated column groups and adds cover/notice components; table ID, figure ID, chapter, appendix, and source-file retention are the primary content-preservation controls.
