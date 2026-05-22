# WP3-R15B HTML Final Candidate QA

## Decision

PASS_WITH_NOTES.

The internal candidate HTML opens locally, carries the accepted R12 body, uses the intended internal-candidate boundary language, renders the Chapter 4 figure as a figure rather than raw Mermaid, and shows no body-level horizontal overflow at the required viewport widths. Minor notes remain for R15C/R15B recheck because dense tables rely on contained horizontal table behavior on narrow mobile viewports.

## Evidence

| Check | Result |
| --- | --- |
| HTML file opens locally | PASS |
| Title/subtitle render correctly | PASS |
| Internal candidate status visible | PASS |
| Chapters 0-10 present | PASS |
| Appendices A-D present | PASS |
| 12 source-note families present | PASS |
| Chapter 4 responsibility bridge rendered as figure | PASS |
| No raw Mermaid visible | PASS |
| No raw `[SRC: ...]` or `[SYNTHESIS: ...]` visible | PASS |
| No internal QA/source hygiene/wave history leakage in rendered body | PASS |
| Source markers readable | PASS |
| Source notes readable | PASS |
| AIO/AIRM sections readable | PASS |
| Tables readable | PASS_WITH_NOTES |
| Boundary notes visible | PASS |
| No public canonical | PASS |
| No public JSON-LD | PASS |
| No public release/final/seal claim | PASS |
| No DOCX reference in HTML | PASS |
| No body-level horizontal overflow at 375, 390, 768, 1440 | PASS |
| Console errors in viewport proof run | PASS, 0 observed |

## Responsive Proof

Screenshots were captured under `gaic_v032_work/source_r3/wp3_r15b_final_candidate_qa/proof/html/`:

- `html-375-top.png`
- `html-375-figure.png`
- `html-375-table-sample.png`
- `html-390-source-note-sample.png`
- `html-768-top.png`
- `html-1440-top.png`
- `html-1440-source-notes.png`
- `html-viewport-metrics.json`

The viewport metrics record `overflow: false` and `consoleErrors: 0` for all sampled widths. The mobile table proof shows high-comparison tables stay inside the page rather than causing body overflow, but they remain dense and should be rechecked after R15C PDF/layout repair.

## Notes for R15C/R15B Recheck

- Preserve the internal HTML shell and boundary language.
- Keep the high-comparison tables matrix-like.
- Improve or clearly preserve mobile table affordance so table comparison remains understandable without changing high-comparison tables into row-card-only layouts.

