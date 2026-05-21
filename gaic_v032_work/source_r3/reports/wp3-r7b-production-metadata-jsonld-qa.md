# WP3-R7B Production Metadata and JSON-LD QA

Production route checked: `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`.

## Metadata

| Field | Result |
| --- | --- |
| Title | `Agentic AI Insurability & Risk Transfer White Paper 2026 | Jearon Wong — Protocol Architect for the Agent Era` |
| Description | Public staging candidate description for agentic AI insurability, risk-transfer evidence, AIO, AIRM, and boundary-safe lifecycle evidence. |
| Canonical | `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` |
| Robots | `index, follow` |
| OG title/description/image | Present, production URLs, no DOCX |
| Twitter title/description/image | Present, production URLs, no DOCX |
| Citation title/author/date | Present |
| Citation PDF URL | Production PDF URL present |
| Citation HTML URL | Production HTML URL present |
| Keywords/concepts | Present; includes AIIRWP, AIO, AIRM, lifecycle evidence, GAIC, AIAAWP |

## JSON-LD

Extracted and parsed seven JSON-LD blocks.

| Required Type | Result |
| --- | --- |
| `WebSite` | PASS |
| `Person` | PASS |
| `WebPage` | PASS |
| `TechArticle` | PASS |
| `Report` | PASS |
| `BreadcrumbList` | PASS |
| `ItemList` | PASS |
| `DefinedTermSet` | PASS |

## Boundary Checks

- Production canonical and artifact URLs are production URLs.
- JSON-LD artifact URLs point to public HTML/PDF/manifest/checksums; no DOCX is encoded.
- AIIRWP relation to GAIC and AIAAWP is encoded as lifecycle governance / auditability sibling context, not certification or insurer acceptance.
- AIO/AIRM are represented as analytical/synthesis terms.
- No certification, endorsement, insurer acceptance, coverage guarantee, underwriting standard, legal proof, or claims approval claim is encoded.
