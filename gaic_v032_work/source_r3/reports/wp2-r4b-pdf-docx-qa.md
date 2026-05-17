# WP2-R4B PDF / DOCX QA

**Task ID:** WP2-R4B-CANDIDATE-ARTIFACT-GENERATION
**Date:** May 17, 2026
**Status:** PASS

## PDF QA

| Check | Result | Notes |
|---|---|---|
| PDF exists | PASS | Internal candidate output only. |
| Page count | PASS | 105 A4 pages. |
| Title metadata | PASS | `Agentic AI Auditability & Assurance White Paper 2026` |
| Author metadata | PASS | `Jearon Wong` |
| Subject metadata | PASS | `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance` |
| Keywords metadata | PASS | Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, AARM, MRO, Agentic Lifecycle Governance |
| Title page present | PASS | Verified through `pdftotext`. |
| Trace tag present | PASS | `WP2-2026-R4-PUBLICATION-CANDIDATE` present. |
| Chapters present | PASS | `0. Executive Summary` and `16. Conclusion` present. |
| Appendices present | PASS | `Appendix F` present. |
| Source/citation sections present | PASS | `Package Source Register` and `Package Citation Map` present. |
| Internal candidate status visible | PASS | Present in extracted text. |
| No public/final/sealed claim | PASS | Boundary language denies public/final/sealed/live status. |

## DOCX QA

| Check | Result | Notes |
|---|---|---|
| DOCX exists | PASS | Internal candidate output only. |
| File size nonzero | PASS | 84,134 bytes. |
| Basic unzip/openability | PASS | `unzip -t` reported no errors. |
| Document text extract | PASS | Key title, trace, chapter, appendix, source, and citation text extracted. |
| Word table structures | PASS | 232 `<w:tbl>` tags detected in `word/document.xml`. |
| Title/status present | PASS | Present in extracted DOCX text. |
| Chapters/appendices present | PASS | Chapters 0-16 and Appendices A-F sampled through text extraction. |
| No public/final/sealed claim | PASS | Boundary language denies public/final/sealed/live status. |
| Render QA | PASS | Documents workflow rendered DOCX to 74 A4 landscape pages for visual sampling. |

## DOCX Render Sampling

Representative rendered pages were sampled from the temporary render output:

- Page 1: title page and internal candidate status.
- Page 30: wide evidence partitioning table; layout stayed inside the landscape page width.
- Page 70: source register table.
- Page 73: citation map table.

Temporary render images were not committed because they are QA intermediates, not deliverable artifacts.

## Conversion Notes

- Direct LibreOffice HTML-to-DOCX export did not provide a direct export filter.
- The generator uses a safer LibreOffice HTML -> ODT -> DOCX bridge.
- A DOCX-specific landscape conversion stylesheet is applied so wide tables remain reviewable.

## Result

PASS - PDF and DOCX artifacts are generated, readable, internally labeled, and suitable for final candidate QA.
