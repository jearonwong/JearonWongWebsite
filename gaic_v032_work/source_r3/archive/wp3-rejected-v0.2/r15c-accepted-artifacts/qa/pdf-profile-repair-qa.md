# PDF Profile Repair QA

## Result

PASS.

## Page Count

| Item | Count |
| --- | ---: |
| Old R15 PDF page count | 20 |
| New R15C PDF page count | 27 |

## Density Decision

The R15C PDF is no longer compressed to the R15 20-page profile. The higher natural page count reflects the repair goal: readability, appendix comfort, and table legibility are prioritized over compactness.

## PDF Info

```text
Title:           Agentic AI Insurability & Risk Transfer White Paper 2026 - Internal Repaired Candidate
Subject:         A Lifecycle Evidence Guide for Underwriting, Claims, and Enterprise Risk Transfer
Keywords:        AIIRWP; Agentic AI Insurability; Risk Transfer; Lifecycle Evidence; Internal Candidate; R15C Artifact Repair
Author:          Jearon Wong
Creator:         WP3 R15C internal artifact repair renderer
Producer:        Headless Chrome internal A4 PDF profile; PyMuPDF cover-background and metadata pass
CreationDate:    Fri May 22 20:00:35 2026 CST
ModDate:         Fri May 22 20:00:35 2026 CST
Custom Metadata: no
Metadata Stream: no
Tagged:          yes
UserProperties:  no
Suspects:        no
Form:            none
JavaScript:      no
Pages:           27
Encrypted:       no
Page size:       594.96 x 841.92 pts (A4)
Page rot:        0
File size:       892252 bytes
Optimized:       no
PDF version:     1.4
```

## Representative Proof

| Proof | Page | File |
| --- | ---: | --- |
| cover-after | 1 | proof/pdf/pdf-cover-after.png |
| toc | 2 | proof/pdf/pdf-toc.png |
| chapter-0 | 4 | proof/pdf/pdf-chapter-0.png |
| chapter-1 | 6 | proof/pdf/pdf-chapter-1.png |
| chapter-4-figure | 10 | proof/pdf/pdf-chapter-4-figure.png |
| chapter-5-table | 13 | proof/pdf/pdf-chapter-5-table.png |
| chapter-8-aio | 18 | proof/pdf/pdf-chapter-8-aio.png |
| chapter-9-airm | 20 | proof/pdf/pdf-chapter-9-airm.png |
| appendix-a-source-notes | 23 | proof/pdf/pdf-appendix-a-source-notes.png |
| appendix-b-aio | 25 | proof/pdf/pdf-appendix-b-aio.png |
| appendix-c-airm | 26 | proof/pdf/pdf-appendix-c-airm.png |
| appendix-d-boundary | 27 | proof/pdf/pdf-appendix-d-boundary.png |
| final-page | 27 | proof/pdf/pdf-final-page.png |

## Checks

| Check | Result |
| --- | --- |
| A4 page size | PASS |
| Text extraction works | PASS |
| Source notes present | PASS |
| Tables present | PASS |
| No raw Mermaid | PASS |
| No Chrome default URL/date footer/header | PASS |
