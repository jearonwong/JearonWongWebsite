# WP3-R15B PDF Final Candidate QA

## Decision

FAIL_REPAIR_REQUIRED.

The PDF opens, extracts text, is A4, and contains the required body, figure, tables, source notes, and appendices. However, the 20-page A4 rendering is too compressed for an external serious-whitepaper candidate. The cover also shows a large bottom white band, and representative PDF proof pages do not show mature publication-family page identity such as page numbering, footer/document ID rhythm, or a polished final-page treatment. This is an artifact/layout repair issue, not a rejection of the R12/R13 accepted body.

## Technical Checks

| Check | Result |
| --- | --- |
| PDF opens | PASS |
| `pdfinfo` page count | PASS, 20 pages |
| A4 page size | PASS, 594.96 x 841.92 pts |
| Metadata title | PASS, internal candidate title present |
| Metadata author/subject | PASS_WITH_NOTES, title present but author/subject profile is not mature enough for candidate acceptance |
| `pdftotext` extraction | PASS |
| Cover page acceptable | FAIL_REPAIR_REQUIRED |
| TOC readable | PASS |
| Chapter 0 readable | PASS |
| Chapter 1 readable | PASS |
| Chapter 4 figure readable | PASS_WITH_NOTES |
| Chapter 5 market table readable | PASS_WITH_NOTES |
| Chapter 8 AIO section readable | PASS_WITH_NOTES |
| Chapter 9 AIRM section readable | PASS_WITH_NOTES |
| Appendix A source notes readable | PASS_WITH_NOTES |
| Appendix B AIO reference readable | PASS_WITH_NOTES |
| Appendix C AIRM reference readable | PASS_WITH_NOTES |
| Appendix D boundary language readable | PASS |
| Final page acceptable | PASS_WITH_NOTES |
| Header/footer consistent and non-dominating | FAIL_REPAIR_REQUIRED |
| No Chrome default URL/date/header/footer | PASS |
| No vertical single-character table text | PASS |
| No clipped tables in sampled proof | PASS |
| No unreadably small fonts | PASS_WITH_NOTES |
| No over-compressed source notes | FAIL_REPAIR_REQUIRED |
| No raw Mermaid | PASS |
| No raw source markers | PASS |
| No internal QA/wave history/source hygiene leakage | PASS |
| No public release/final/seal claim | PASS |
| No DOCX reference | PASS |

## Proof Assets

Proof images were saved under `gaic_v032_work/source_r3/wp3_r15b_final_candidate_qa/proof/pdf/`:

- `pdf-cover.png`
- `pdf-toc.png`
- `pdf-chapter-0.png`
- `pdf-chapter-1.png`
- `pdf-chapter-4-figure.png`
- `pdf-chapter-5-table.png`
- `pdf-chapter-8-aio.png`
- `pdf-chapter-9-airm.png`
- `pdf-appendix-a-source-notes.png`
- `pdf-appendix-d-boundary.png`
- `pdf-final-page.png`
- `pdf-text-extract.txt`

`pdftoppm` emitted repeated Type 3 glyph bounding-box warnings while rendering proof pages. Images were generated successfully, but R15C should watch PDF font/profile choices during regeneration.

## Repair Requirement

R15C should regenerate the internal candidate PDF with a less compressed A4 profile, repaired cover fit, publication-family page identity, and more comfortable appendix/source-note spacing before any R16 public staging preparation.

