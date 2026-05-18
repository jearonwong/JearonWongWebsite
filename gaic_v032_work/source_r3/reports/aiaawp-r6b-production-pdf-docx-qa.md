# AIAAWP-R6B Production PDF / DOCX QA

**Status:** PASS
**Downloaded artifacts:** `/tmp/aiaawp-r6b-live/artifacts/`

## Production PDF

- HTTP status: 200
- SHA256: `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d`
- Hash match: PASS
- `pdfinfo`: PASS
- Page count: 141
- Page size: A4
- Title: `Agentic AI Auditability & Assurance White Paper 2026`
- Author: `Jearon Wong`
- Subject: `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance`
- Keywords: `Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, Agentic Audit Object, AARM, MRO, Agentic Lifecycle Governance, Enterprise AI Governance`
- Text extraction: PASS; `pdftotext` extracted 220599 bytes.

Extracted PDF text contains:

- Title and document ID.
- Chapters 0 through 16.
- Appendices A through F.
- AARM L0 through L5.
- MRO-01 through MRO-16.
- Boundary language.

Extracted PDF text does not expose WP2 as public document identity. References to final, sealed, certification, assurance, legal compliance proof, regulator approval, and similar phrases appear as explicit negative boundary statements rather than positive claims.

## Production DOCX

- HTTP status: 200
- SHA256: `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37`
- Hash match: PASS
- `unzip -t`: PASS
- `python-docx` openability: PASS
- Paragraph count: 1004
- Table count: 257
- Extracted text length: 175220 characters
- Title: `Agentic AI Auditability & Assurance White Paper 2026`
- Author: `Jearon Wong`
- Subject: `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance`
- Keywords: present.

Extracted DOCX text contains:

- Title and document ID.
- Chapters 0 through 16, represented by numbered chapter headings.
- Appendices A through F.
- AARM L0 through L5.
- MRO-01 through MRO-16.
- Boundary language.

Extracted DOCX text does not expose WP2 as public document identity. DOCX remains an editable derivative, not the visual authority.

## Result

Production PDF and DOCX downloads are live, hash-matched, parseable, and content-complete for R6B live verification.
