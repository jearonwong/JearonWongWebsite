# WP3-R7B Production PDF Visual QA

Production PDF downloaded from `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf` and inspected with `pdfinfo`, `pdftotext`, and `pdftoppm` page renders.

## PDF Facts

- Page count: `59`
- Page size: A4, `594.96 x 841.92 pts`
- Title: `Agentic AI Insurability & Risk Transfer White Paper 2026`
- Author: `Jearon Wong`
- Subject: `A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer`
- Producer: `Chrome headless print-to-pdf without default header/footer; PyPDF2 metadata pass`

## Rendered Page Proof

Rendered representative pages under `gaic_v032_work/source_r3/reports/wp3-r7b-live-screens/pdf/`:

| Proof | Page | Result |
| --- | ---: | --- |
| `cover.png` | 1 | PASS |
| `toc.png` | 2 | PASS |
| `chapter-00.png` | 10 | PASS |
| `chapter-01.png` | 12 | PASS |
| `chapter-04-market-table.png` | 18 | PASS |
| `chapter-08-aio-table.png` | 24 | PASS |
| `chapter-15-airm-matrix.png` | 32 | PASS |
| `appendix-f-airm-matrix.png` | 39 | PASS |
| `source-citation.png` | 41 | PASS |
| `final-page.png` | 59 | PASS |
| `pdf-proof-contact-sheet.png` | summary | PASS |

## Visual Findings

- Cover is not split.
- TOC is readable.
- No Chrome default local file URL/date/header/footer appears.
- Footer does not clip in representative pages.
- No vertical single-character table text observed.
- High-comparison tables remain matrix-like in representative proof pages.
- Appendix F remains a rubric/matrix treatment.
- Source/citation page is readable.
- Boundary notes are visible.
- No final/sealed/coverage-ready/underwriting-ready positive claim observed.
