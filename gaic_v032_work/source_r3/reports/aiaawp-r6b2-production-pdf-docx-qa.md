# AIAAWP-R6B2 Production PDF / DOCX QA

**Date:** 2026-05-18
**Production download directory:** `/tmp/aiaawp-r6b2-live/`

## PDF QA

| Check | Result |
| --- | --- |
| HTTP availability | 200 |
| SHA256 | `e72b6def99790965d14c6f9292360f6ec768abc1aefbdb51ad43c355af468e0d` |
| Hash matches staged R6 hash | PASS |
| `pdfinfo` works | PASS |
| PDF version | 1.4 |
| Page count | 141 |
| Title metadata | `Agentic AI Auditability & Assurance White Paper 2026` |
| Subject metadata | `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance` |
| Author metadata | `Jearon Wong` |
| Keywords metadata | Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, Agentic Audit Object, AARM, MRO, Agentic Lifecycle Governance, Enterprise AI Governance |
| `pdftotext` extraction | PASS |

PDF extracted text contains:

- Title
- Document ID `AIAAWP-2026-v0.1-R4-CANDIDATE`
- Chapter sections 0 through 16
- Appendices A through F
- AARM levels L0 through L5
- MRO-01 through MRO-16

## DOCX QA

| Check | Result |
| --- | --- |
| HTTP availability | 200 |
| SHA256 | `4868c30c19bb102fe399947fa9760307b34cf4148300ceef4cad908cffdaec37` |
| Hash matches staged R6 hash | PASS |
| `unzip -t` | PASS |
| `python-docx` opens | PASS |
| Title metadata | `Agentic AI Auditability & Assurance White Paper 2026` |
| Subject metadata | `A Lifecycle Evidence Guide for Audit, Assurance, and Enterprise AI Governance` |
| Author metadata | `Jearon Wong` |
| Keywords metadata | Agentic AI Auditability, AI Agent Auditability, Audit Evidence Chain, Agentic Audit Object, AARM, MRO, Agentic Lifecycle Governance, Enterprise AI Governance |
| Paragraph count | 1004 |
| Extracted text characters | 100624 |
| Editable derivative role | PASS |

DOCX extracted text contains:

- Title
- Document ID `AIAAWP-2026-v0.1-R4-CANDIDATE`
- Chapter sections 0 through 16
- Appendices A through F
- AARM levels L0 through L5
- MRO-01 through MRO-16

## Boundary Checks

- No public-facing `WP2` identity found.
- Forbidden terms that appear in extracted artifact text occur in negative/boundary contexts such as "not certification", "not legal advice", "not final/sealed/live", or examples of forbidden claims.
- No final, sealed, certification, legal compliance proof, audit standard, assurance opinion, regulator approval, endorsement, procurement, ranking, indexing, answer-engine, or SEO/GEO outcome claim is introduced by the production PDF or DOCX.

**PDF / DOCX QA:** PASS.
