# WHITEPAPER-R8E-0 Metadata / SEO / GEO / JSON-LD Consistency Plan

**Date:** 2026-05-19

## Goal

Future PDF visual repair must not break the HTML Web Reading Profile, citation metadata, JSON-LD, artifact integrity, semantic wiring, or public discoverability surfaces.

R8E-0 does not change any metadata, route, manifest, checksum, PDF, or HTML artifact.

## Surfaces to Preserve

| Surface | Preservation rule |
| --- | --- |
| Public HTML artifacts | Must remain responsive, crawlable, anchor-friendly, and not A4-bound. |
| PDF metadata | Title, author, subject, keywords, and producer/creator discipline must remain correct. |
| Hub routes | Artifact cards and visible checksum rows must reflect current hashes after any future PDF regeneration. |
| JSON-LD | Encoding URLs and hashes must match public artifacts when used. |
| Citation metadata | Technical report identifiers, author, title, and date must remain stable unless owner approves source changes. |
| Manifests | Must parse as JSON and list only public formats. |
| Checksums | Must validate without warnings and exclude public DOCX. |
| Evidence Registry | Must continue linking GAIC and AIAAWP public HTML/PDF only. |
| Entity graph | Must parse and preserve GAIC/AIAAWP relationships. |
| `llms.txt` | Must preserve HTML/PDF-only distribution and route summaries. |
| Sitemap | Must include intended public hub and HTML artifact pages. |
| Robots | Must not block intended public whitepaper assets. |

## Exact Surfaces to Update If Future PDF Hash Changes

GAIC:

- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf`
- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/global-ai-compliance-white-paper-2026/public-pdf-metadata-reseal-manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md` if it displays the public PDF hash
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- JSON-LD encoding hash in the hub if present
- SOURCE MASTER, known issues, reconstruction notes
- future production reverification reports

AIAAWP:

- `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`
- JSON-LD encoding hash in the hub if present
- SOURCE MASTER, known issues, reconstruction notes
- future production reverification reports

Shared checks after future implementation:

- no `.docx` under `public/research`
- no `.docx` under `dist/research`
- no DOCX links in hubs, Evidence Registry, `llms.txt`, manifests, checksums, or JSON-LD encodings
- no stale prior PDF hash where current public hash is expected
- no SEO/GEO outcome, indexing, or answer-engine recognition claim

## SEO / GEO Boundary

Future layout repair may preserve or improve technical readiness, but must not claim ranking, indexing, answer-engine pickup, SEO/GEO uplift, or external adoption.

## Result

Future R8E-1 must treat visual repair and artifact integrity as one controlled release operation. HTML remains the web-reading profile; PDF remains the print profile; DOCX remains offboarded from public distribution.
