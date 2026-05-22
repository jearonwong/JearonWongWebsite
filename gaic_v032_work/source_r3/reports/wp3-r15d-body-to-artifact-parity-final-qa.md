# WP3-R15D Body-to-Artifact Parity Final QA

## Scope

R15D verified repaired R15C HTML/PDF against the R12 accepted body. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Methods

- HTML text/DOM extraction.
- PDF text extraction using `pdftotext -layout`.
- Source Markdown comparison against R15C candidate source and R12 accepted body.
- Manual spot checks against rendered proof pages.

## Results

| Item | Result | Notes |
| --- | --- | --- |
| Title | PASS | Preserved. |
| Subtitle | PASS | Preserved. |
| Document ID | PASS | R15C internal candidate ID used in artifact identity. |
| Status boundary | PASS | Internal candidate, not public release, not final, not sealed. |
| Chapters 0-10 | PASS | Present. |
| Appendices A-D | PASS | Present. |
| 12 source-note families | PASS | Present. |
| Source markers | PASS | Rendered as numbered markers, not raw tags. |
| Five scenario families | PASS | Preserved in text and rendered artifacts. |
| AIO groups | PASS | Preserved. |
| AIRM L0-L5 | PASS | Preserved. |
| Chapter 4 responsibility bridge | PASS | Rendered in HTML and PDF. |
| Raw Mermaid | PASS | None. |
| Raw source markers | PASS | None. |
| Internal QA leakage | PASS | None accepted in body. |
| Public release/final/seal claim | PASS | None; negative boundary only. |
| Legal/insurance/coverage/underwriting/claims overclaim | PASS | No overclaim accepted. |

## Word Count Cross-Check

- R12 accepted body source: 9,568 words.
- R15C candidate source: 9,553 words.
- R15C PDF text extract: 10,018 words, including PDF page identity/frontmatter extraction.

The small source-word delta is consistent with candidate ID/status rendering changes and does not indicate a substantive body rewrite.

## Decision

`PASS`
