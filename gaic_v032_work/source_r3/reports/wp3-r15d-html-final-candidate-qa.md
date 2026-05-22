# WP3-R15D HTML Final Candidate QA

## Scope

R15D inspected the repaired R15C internal HTML candidate. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Evidence

- HTML: `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.html`
- Proof directory: `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/proof/html/`
- Metrics: `html-viewport-metrics.json`

## Checks

| Check | Result | Notes |
| --- | --- | --- |
| Opens locally | PASS | Fresh rendered inspection completed through local browser automation fallback. |
| Title/subtitle | PASS | Correct public identity renders. |
| Internal candidate status | PASS | Status remains visible and internal-only. |
| Chapters 0-10 | PASS | 11 chapter headings present. |
| Appendices A-D | PASS | 4 appendices present. |
| 12 source-note families | PASS | 12 source-note rows present; metrics count includes source-note heading/anchor context. |
| Chapter 4 figure | PASS | Rendered as `figure#responsibility-bridge-figure`. |
| Raw Mermaid | PASS | No raw Mermaid visible. |
| Raw source/synthesis markers | PASS | No raw `[SRC: ...]` or `[SYNTHESIS: ...]` markers found. |
| Internal QA/source hygiene leakage | PASS | No old source-pack or wave-history body leakage accepted. |
| Source markers and notes | PASS_WITH_NOTES | Readable; mobile source-note table uses contained horizontal scrolling. |
| AIO/AIRM | PASS | Sections and appendix references readable. |
| Tables | PASS_WITH_NOTES | Matrix tables remain semantic; narrow mobile proof shows left side of scrollable tables, not body overflow. |
| Boundary notes | PASS | Visible in cover/status and Appendix D. |
| Public canonical / JSON-LD | PASS | None in internal HTML. |
| Public release/final/seal claim | PASS | Negative/internal-only boundary only. |
| DOCX reference | PASS | None. |
| Body-level overflow | PASS | 375, 390, 768, and 1440 widths report no body-level overflow. |
| Console errors | PASS | No console events recorded in `html-viewport-metrics.json`. |
| R15C anchored screenshot concern | PASS_WITH_NOTES | Fresh R15D screenshots are usable; narrow table captures remain intentionally clipped to viewport due contained table scrolling. |

## Proof Files

- `html-375-top.png`
- `html-375-figure.png`
- `html-375-table-sample.png`
- `html-390-source-note-sample.png`
- `html-768-top.png`
- `html-1440-top.png`
- `html-1440-source-notes.png`
- `html-viewport-metrics.json`

## Decision

`PASS_WITH_NOTES`
