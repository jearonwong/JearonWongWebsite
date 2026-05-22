# WP3-R15D PDF Final Candidate QA

## Scope

R15D inspected the repaired R15C internal PDF candidate. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Evidence

- PDF: `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.pdf`
- PDF info: `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/proof/pdf/pdfinfo.txt`
- Text extract: `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/proof/pdf/pdf-text-extract.txt`
- Proof images: `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/proof/pdf/`

## Checks

| Check | Result | Notes |
| --- | --- | --- |
| PDF opens / extracts | PASS | `pdfinfo` and `pdftotext -layout` succeeded. |
| Page count | PASS | 27 pages. |
| A4 page size | PASS | `594.96 x 841.92 pts (A4)`. |
| Metadata | PASS | Title, subject, author, creator, producer, and internal candidate keywords are present. |
| Cover page | PASS_WITH_NOTES | White-band blocker resolved; minor seam is visible but non-blocking. |
| TOC | PASS | Readable and visually consistent. |
| Chapters 0 and 1 | PASS | Proof pages readable. |
| Chapter 4 figure | PASS | Figure text, caption, and boundary framing are readable. |
| Chapter 5 market table | PASS | Matrix table readable; no vertical single-character text or clipping. |
| Chapter 8 AIO | PASS | Readable. |
| Chapter 9 AIRM | PASS | Readable and boundary language preserved. |
| Appendix A source notes | PASS | 12 source-note families readable and not over-compressed. |
| Appendix B AIO reference | PASS | Table readable. |
| Appendix C AIRM reference | PASS | Table readable. |
| Appendix D boundary language | PASS | Readable; forbidden phrases appear as avoid-list examples. |
| Final page | PASS | Acceptable candidate-stage finish. |
| Header/footer/page identity | PASS | Restrained and consistent. |
| Chrome default header/footer | PASS | No default URL/date/header/footer observed. |
| Tables | PASS | No clipped tables or vertical single-character table text observed. |
| Fonts/density | PASS_WITH_NOTES | Compact but readable; materially improved from R15 20-page profile. |
| Source notes | PASS | No over-compressed source-note blocker remains. |
| Raw Mermaid/source markers | PASS | None found in PDF text extract. |
| Internal QA/source hygiene leakage | PASS | None accepted in rendered PDF. |
| Public release/final/seal claim | PASS | Negative/internal-only boundary only. |
| DOCX reference | PASS | None. |

## Proof Files

- `pdf-cover.png`
- `pdf-toc.png`
- `pdf-chapter-0.png`
- `pdf-chapter-1.png`
- `pdf-chapter-4-figure.png`
- `pdf-chapter-5-table.png`
- `pdf-chapter-8-aio.png`
- `pdf-chapter-9-airm.png`
- `pdf-appendix-a-source-notes.png`
- `pdf-appendix-b-aio-reference.png`
- `pdf-appendix-c-airm-reference.png`
- `pdf-appendix-d-boundary.png`
- `pdf-final-page.png`
- `pdf-text-extract.txt`
- `pdfinfo.txt`

## Decision

`PASS_WITH_NOTES`
