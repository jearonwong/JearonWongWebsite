# Phase 1D-11 HTML Content Preservation QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** Active source_r3 Markdown versus generated HTML/PDF text
**Status:** PASS / PUBLICATION-CANDIDATE REVIEW READY

## Counts

| Metric | Count |
|---|---:|
| Active source word count | 55715 |
| Generated HTML text word count | 116533 |
| Extracted PDF text word count | 120799 |
| Chapter H1 count | 18/18 |
| Appendix H1 count | 11/11 |
| Active table IDs | 170 |
| Generated HTML table IDs | 175 |
| Generated PDF text table IDs | 175 |
| Missing table IDs in HTML | 0 |
| Missing table IDs in PDF text | 0 |
| Required figures F-01 through F-11 | 11/11 |
| Safe charts rendered | 6 |
| References / Sources section | Present |
| Problem overview section | Present |

## Architecture Regression Checks

| Risk | Result |
|---|---|
| Genspark content imported | Not detected |
| 93-page summary model used | Not detected |
| Old DOCX/PDF used as input | No |
| Internal reports included as publication body | Not detected |

## Decision

The refined HTML renderer preserves the full active source structure for Chapters 1-18, Appendices A-K, active table IDs, and F-01 through F-11 while adding publication-facing overview, safe charts, and a References / Sources section. Generated HTML/PDF word counts are not expected to match one-for-one because the renderer splits wide tables into repeated column groups and adds publication components; table ID, figure ID, chapter, appendix, and source-file retention are the primary content-preservation controls.
