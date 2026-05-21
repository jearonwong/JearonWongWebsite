# WP3-R13 Table / Figure Acceptance QA

## Decision

`ACCEPT_WITH_RENDERING_NOTES`

## Main-Body Count

R12 contains 8 main-body table/figure blocks. Tables do not dominate the body and remain within the R12 limit of 10.

| Chapter | Item | Acceptance | R14 / artifact-stage note |
| --- | --- | --- | --- |
| 0 | Definition/non-claim comparison table | ACCEPT | Render as a restrained executive comparison table. |
| 2 | Insured subject table | ACCEPT | Keep in main body as a useful anchor. |
| 4 | Responsibility bridge Mermaid placeholder | ACCEPT_WITH_RENDERING_NOTE | Must become a rendered figure before final HTML/PDF candidate artifacts. Raw Mermaid is not acceptable in final artifacts. |
| 5 | Market-edge table | ACCEPT_WITH_LAYOUT_NOTE | Keep in main body, but plan PDF width and responsive HTML behavior carefully. |
| 6 | Evidence ingredients table | ACCEPT | Keep compact and readable. |
| 7 | Compliance/auditability/insurability mapping table | ACCEPT | Keep if it remains concise in layout; do not let it become a mapping dump. |
| 8 | AIO grouped overview table | ACCEPT | Keep as overview only; do not turn into full inventory in body. |
| 9 | AIRM matrix | ACCEPT_WITH_STYLE_NOTE | Style as readiness vocabulary, not certification or scoring. |

## Findings

- Tables support reader understanding and do not replace necessary prose.
- Chapter 5 and Chapter 9 have the highest future layout risk.
- Chapter 4 raw Mermaid is acceptable in the source body only as a placeholder.
- No table should move to appendix before R14 planning.

## Required R14 Action

R14 must include rendered-figure conversion planning for the Chapter 4 responsibility bridge and semantic layout planning for the Chapter 5 market table and Chapter 9 AIRM matrix.
