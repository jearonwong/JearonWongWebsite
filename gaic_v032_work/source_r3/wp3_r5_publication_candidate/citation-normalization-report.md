# AIIRWP R5 Citation Normalization Report

**Status:** Internal citation/source-note normalization report.
**Boundary:** This report prepares source normalization only. It does not create final public footnotes, public source notes, or public artifact citations.

## Source Marker Style

Candidate source uses the R3/R4 marker model:

- external claims: `[SRC: ID]`
- internal framework claims: `[INT: ID]`
- author synthesis: `[SYNTHESIS: Jearon Wong]`

## Marker Validation

| Source marker | Candidate count | Inventory status |
| --- | --- | --- |
| AI-01 | 3 | valid |
| AI-08 | 1 | missing |
| CLAIM-01 | 27 | valid |
| CLAIM-02 | 16 | valid |
| CLAIM-03 | 13 | valid |
| CYB-01 | 2 | valid |
| CYB-02 | 11 | valid |
| CYB-03 | 8 | valid |
| CYB-04 | 7 | valid |
| INS-01 | 12 | valid |
| INS-04 | 10 | valid |
| INS-05 | 10 | valid |
| INS-06 | 9 | valid |
| INS-07 | 7 | valid |
| INS-08 | 11 | valid |
| INS-09 | 3 | valid |
| INS-10 | 3 | valid |
| INT-01 | 26 | valid |
| INT-02 | 3 | valid |
| INT-03 | 4 | valid |
| INT-04 | 17 | valid |
| INT-05 | 33 | valid |
| INT-06 | 19 | valid |
| INT-07 | 6 | valid |
| MKT-01 | 10 | valid |
| MKT-02 | 6 | valid |
| MKT-03 | 8 | valid |
| MKT-04 | 1 | valid |
| MKT-05 | 9 | valid |
| MKT-06 | 2 | valid |
| MKT-07 | 5 | valid |
| MKT-08 | 12 | valid |
| TECH-01 | 11 | valid |
| TECH-02 | 4 | valid |
| TECH-03 | 2 | valid |
| TECH-04 | 9 | valid |
| TECH-05 | 3 | valid |

Missing marker result: BLOCKER - missing markers: AI-08

## R2A Citation Hygiene Checks

| Check | Result | Notes |
| --- | --- | --- |
| Old A2A URL marker remains | PASS | Candidate source uses `[SRC: TECH-03]`; final source notes must use current A2A docs, not old `google-a2a.github.io`. |
| LangGraph references split correctly | PASS for R5 plan | Candidate source uses `[SRC: TECH-04]`; final source notes must keep durable execution and persistence URLs split. |
| Old Coalition source used for critical claims | PASS | Candidate body does not use `[SRC: CYB-05]`. |
| QBE/WTW/Allianz/OpenAI caveated | PASS | Access-caveated sources are framed as signals or technical context, not sole support. |
| Insurer/broker/product sources as market signals | PASS | Market framing remains fragmented and conditional. |
| Technical framework docs used only for capabilities | PASS | Candidate preserves necessary-but-insufficient framing. |
| AIO/AIRM synthesis preserved | PASS | Candidate uses synthesis markers and boundary language. |
| Fake citations or unsupported quotes | PASS | No fabricated quotations introduced in R5. |

## R6/R6B Citation Tasks

- Decide whether source IDs remain visible, become endnotes, or appear in a source-note appendix.
- Recheck all URLs before artifact generation.
- Add access caveat notes for blocked/rate-limited/partial sources.
- Preserve the R2A source accuracy gate when formatting final citations.
