# GAIC-R3K-0B White Paper Discoverability Audit

## Scope

Audited the Global AI Compliance White Paper 2026 hub, responsive public HTML full text, public PDF, DOCX derivative, manifest, generation log, seal report, checksums, robots, sitemap configuration, and `llms.txt`.

## Hub: `/research/global-ai-compliance-white-paper-2026/`

| Field | Result |
|---|---|
| Title | `Global AI Compliance White Paper 2026` |
| Meta description | Present |
| Canonical | Present: `/research/global-ai-compliance-white-paper-2026/` |
| Robots | Inherited `index, follow` |
| OG/Twitter | Present through `BaseLayout` |
| JSON-LD | `WebPage`, `TechArticle`, `BreadcrumbList`, `DefinedTermSet`, site `WebSite`, site `Person` |
| Visible trace tag | Present |
| Artifact links | PDF, HTML, DOCX, manifest/checksums present |
| Boundary language | Present |
| Gap before patch | No Scholar-compatible `citation_*` meta tags; citation text used `Lifecycle Responsibility` rather than the requested `Lifecycle Conformance` technical report citation; concept exposure layer existed but was not link-rich. |
| Patch result | Added Scholar-compatible citation metadata, technical report identifier, `inLanguage`, `genre`, JSON-LD mentions, visible Citation and Artifact Identity block, and link-rich Key Concepts Covered section. |

## Responsive HTML Full Text

| Field | Result |
|---|---|
| Title | Present with trace tag |
| Meta description | Present |
| Canonical | Present: full HTML URL |
| Robots | `index, follow` |
| OG/Twitter | Present |
| JSON-LD | `WebSite`, `Person`, `WebPage`, `TechArticle`, `BreadcrumbList` |
| Visible trace tag | Present before patch; strengthened with technical identity block |
| Gap before patch | No `citation_*` meta tags; TechArticle lacked `identifier`, `inLanguage`, `encoding`, richer `mentions`, and current technical report citation; no short direct anchors for MRO/RCCS/ALCS source navigation. |
| Patch result | Added citation metadata, strengthened TechArticle JSON-LD, added visible Citation and Artifact Identity panel, and added short anchor entry points for MRO-01 through MRO-16, RCCS-T, RCCS-M, ALCS, methodology, scoring results, systems mapping, evidence validation, failure scenarios, and boundary discipline. |

## PDF

Audited with `pdfinfo`.

| Field | Result |
|---|---|
| Title | `Global AI Compliance White Paper 2026 - GACWP-2026-v0.3.2-FRC-R3` |
| Author | Missing |
| Subject | Missing |
| Keywords | Missing |
| Producer | `Skia/PDF m148` |
| Creator | Headless Chrome user agent |
| Metadata stream | No |
| Mutation decision | Do not modify in R3K-0B; changing metadata would change hash and should be handled by a controlled re-seal decision. |

## DOCX

- Public DOCX derivative exists and remained unchanged.
- No DOCX metadata mutation was performed.

## Manifest / Log / Checksums

- Manifest, generation log, and seal report were audited.
- Public responsive HTML checksum changed intentionally due to metadata and anchor shell patch.
- Public PDF/DOCX/log/manifest/seal report hashes remain unchanged.
- Sealed candidate artifact hashes remain unchanged.

## Discoverability Result

R3K-0B improved the white paper as a machine-readable technical report source without repairing GAIC-derived route content, without mutating PDF/DOCX, and without changing sealed candidate artifacts, white paper source, scores, or methodology.

