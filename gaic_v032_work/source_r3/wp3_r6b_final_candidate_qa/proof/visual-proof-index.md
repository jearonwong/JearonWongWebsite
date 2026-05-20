# WP3-R6B Visual Proof Index

Scope: internal final candidate artifact QA proof only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

## HTML Proofs

| Proof file | Viewport / target | What it proves | Result |
| --- | --- | --- | --- |
| `html/html-mobile-375-top.png` | 375 mobile top | Cover, title, candidate status, boundary note | PASS |
| `html/html-mobile-375-table-sample.png` | 375 mobile Chapter 0 table | Table scroll behavior without body overflow | PASS |
| `html/html-mobile-390-aio-sample.png` | 390 mobile Chapter 8 AIO table | AIO section and matrix readability | PASS |
| `html/html-tablet-768-top.png` | 768 tablet top | Tablet cover layout | PASS |
| `html/html-desktop-1440-top.png` | 1440 desktop top | Desktop cover layout | PASS |
| `html/html-desktop-1440-source-section.png` | 1440 desktop source section | Source/citation section readability | PASS |
| `html/html-contact-sheet.png` | Contact sheet | Combined HTML proof review | PASS |
| `html/html-cdp-checks.json` | CDP metrics | Overflow, marker counts, section anchors, console issues | PASS |

## PDF Proofs

| Proof file | Page / target | What it proves | Result |
| --- | --- | --- | --- |
| `pdf/pdf-cover-p1.png` | Page 1 cover | A4 cover, candidate status, boundary notice | PASS |
| `pdf/pdf-toc-p2.png` | Page 2 TOC | TOC readability | PASS |
| `pdf/pdf-chapter-00-p10.png` | Page 10 | Chapter 0 and insurance basics table | PASS |
| `pdf/pdf-chapter-01-p12.png` | Page 12 | Chapter 1 subject map table | PASS |
| `pdf/pdf-chapter-04-market-p18.png` | Page 18 | Market map and market-signal caveats | PASS |
| `pdf/pdf-chapter-08-aio-p24.png` | Page 24 | AIO catalog matrix | PASS |
| `pdf/pdf-chapter-15-airm-p32.png` | Page 32 | AIRM matrix and non-certification boundary | PASS |
| `pdf/pdf-appendix-d-mapping-p37.png` | Page 37 | AIO-to-MRO mapping matrix | PASS |
| `pdf/pdf-appendix-f-airm-matrix-p39.png` | Page 39 | Appendix F repaired AIRM matrix | PASS |
| `pdf/pdf-source-citation-p41.png` | Page 41 | Source/citation section opening | PASS |
| `pdf/pdf-final-page-p59.png` | Page 59 | Final page rendering and no release/final claim | PASS |
| `pdf/pdf-contact-sheet.png` | Contact sheet | Combined PDF proof review | PASS |
| `pdf/pdf-text-extract.txt` | Text extraction | Text extractability and source/boundary scan input | PASS |

## Notes

- R6B repaired Appendix F so the high-comparison AIRM matrix is no longer rendered as registry cards.
- R6B regenerated the PDF without Chrome default local file URL/date/page header/footer.
- R6B shortened the fixed print footer to avoid right-edge clipping.
- R6B removed the literal legacy A2A URL string from rendered source/citation hygiene text.

Visual proof result: PASS.
