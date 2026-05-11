# Phase 1D-6 Table QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Scope:** Active source table IDs, generated Markdown, generated PDF text, DOCX table records, high-risk split tables
**Status:** PASS

## Table ID Coverage

| Check | Result |
|---|---:|
| Active table IDs | 170 |
| Generated Markdown table IDs | 170 |
| PDF text table IDs | 170 |
| Missing table IDs in generated Markdown | 0 |
| Missing table IDs in PDF text | 0 |
| Duplicate active caption IDs detected | 0 |
| DOCX table records generated | 186 |
| Split wide/high-risk tables | 68 |

The generated PDF text contains all 170 active table IDs. DOCX table record count is higher because some source tables without ID-bearing captions are still rendered as tables.

## High-Risk Table Review

High-risk table contact sheet: `gaic_v032_work/source_r3/out/phase_1d6/full_whitepaper/phase_1d6_high_risk_tables_1_contact_sheet.png`.

Wide/high-risk tables are split into continuous portrait column groups. Captions and continuation labels are visible. No clipping alert was detected in the rendered page image scan.

## Decision

Table QA passes for the Phase 1D-6 QA draft.
