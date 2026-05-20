# WP3-R6B PDF Final Candidate QA

Scope: deep PDF QA for the internal candidate artifact only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

PDF artifact:

- `gaic_v032_work/source_r3/wp3_r6_candidate_artifacts/out/AIIRWP-2026-v0.1-R6-CANDIDATE.pdf`

Proof output:

- `gaic_v032_work/source_r3/wp3_r6b_final_candidate_qa/proof/pdf/`

## PDF Metadata

| Check | Result |
| --- | --- |
| Page count | 59 |
| Page size | A4, `594.96 x 841.92 pts` |
| Title | `Agentic AI Insurability & Risk Transfer White Paper 2026` |
| Author | `Jearon Wong` |
| Subject | `A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer` |
| Producer | `Chrome DevTools printToPDF without default header/footer; PyPDF2 metadata pass` |

## Representative Page Proofs

| Proof | Page | What it checks | Result |
| --- | ---: | --- | --- |
| `pdf-cover-p1.png` | 1 | Cover A4 rendering, candidate status, boundary notice | PASS |
| `pdf-toc-p2.png` | 2 | TOC readability and no awkward split | PASS |
| `pdf-chapter-00-p10.png` | 10 | Chapter 0 start and insurance basics table | PASS |
| `pdf-chapter-01-p12.png` | 12 | Chapter 1 subject map table | PASS |
| `pdf-chapter-04-market-p18.png` | 18 | Market focus table and caveats | PASS |
| `pdf-chapter-08-aio-p24.png` | 24 | AIO catalog table | PASS |
| `pdf-chapter-15-airm-p32.png` | 32 | AIRM matrix and non-certification boundary | PASS |
| `pdf-appendix-d-mapping-p37.png` | 37 | AIO-to-MRO mapping matrix | PASS |
| `pdf-appendix-f-airm-matrix-p39.png` | 39 | Appendix F AIRM readiness matrix after repair | PASS |
| `pdf-source-citation-p41.png` | 41 | Source/citation section opening | PASS |
| `pdf-final-page-p59.png` | 59 | Final R6/R6B citation task page | PASS |

## Layout Checks

| Check | Result | Notes |
| --- | --- | --- |
| Page count matches manifest | PASS | Manifest records 59 pages. |
| Metadata correct | PASS | Title, author, subject, keywords, creator, and producer set. |
| Cover is A4-optimized | PASS | Cover renders as a single A4 page. |
| Cover split | PASS | No cover split observed. |
| TOC readable | PASS | Two-column TOC is readable. |
| Major chapter starts acceptable | PASS | Representative chapter starts are clean. |
| Header/footer discipline | PASS | R6B regenerated PDF via CDP without Chrome default file URL/date/footer. Document running header/footer remains restrained. |
| Header/footer clipping | PASS | Footer text shortened; no visible clipping in proof pages. |
| Page numbers / identity | PASS | Internal candidate identity and copyright footer are restrained. |
| Catastrophic clipping | PASS | None observed in rendered proof pages. |
| Vertical single-character table text | PASS | None observed. |
| Table font readability | PASS | Representative tables remain readable at A4 proof scale. |
| Boundary notes visible | PASS | Boundary notes remain visible near sensitive sections. |
| Source/citation pages readable | PASS | Source section proof page and text extraction pass. |
| Final page renders correctly | PASS | Final page has no clipping or release claim. |

## R6B PDF Repairs

- Repaired Appendix F AIRM readiness matrix from card rendering into a matrix and regenerated PDF.
- Regenerated PDF through Chrome DevTools `Page.printToPDF` with `displayHeaderFooter: false` to remove Chrome default local file URL/date/page footer.
- Shortened the fixed print footer copyright string to avoid right-edge clipping.
- Reapplied PDF metadata through PyPDF2.

PDF QA result: PASS.
