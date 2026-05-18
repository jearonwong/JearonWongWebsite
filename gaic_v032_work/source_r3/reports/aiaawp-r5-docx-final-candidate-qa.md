# AIAAWP-R5 DOCX Final Candidate QA

**Status:** PASS AS EDITABLE DERIVATIVE
**DOCX:** `wp2_r4_publication_candidate/out/Agentic-AI-Auditability-Assurance-White-Paper-2026-v0.1-R4-Candidate.docx`

## Openability And Metadata

| Check | Result |
|---|---|
| Opens with `python-docx` | PASS |
| ZIP/openability | PASS |
| Paragraph count | 1004 |
| Table count | 257 |
| Title metadata | Agentic AI Auditability & Assurance White Paper 2026 |
| Author metadata | Jearon Wong |
| Subject metadata | A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance |
| Keywords metadata | AIAAWP keyword set present |

## Text Extraction

`python-docx` extraction confirms:

- title/subtitle/document ID
- chapters 0-16
- appendices A-F
- MRO-01 through MRO-16
- AARM L0-L5
- source/citation section
- boundary language
- no WP2 public identity
- no final/sealed/public/live claim

## LibreOffice Render Check

`soffice` rendered the DOCX to a temporary derivative PDF under `/tmp/aiaawp-r5-docx-render/`.

| Check | Result |
|---|---|
| Rendered PDF created | PASS |
| Rendered page count | 66 |
| Rendered metadata title/author/subject | PASS |
| Sample pages rendered | 1, 2, 10, 25, 45, 66 |

The DOCX remains an editable derivative, not the visual authority. HTML/PDF remain the visual source of truth, matching the GAIC main white paper standard.
