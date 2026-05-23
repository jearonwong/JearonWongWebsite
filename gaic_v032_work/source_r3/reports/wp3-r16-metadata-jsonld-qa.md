# WP3-R16 Metadata and JSON-LD QA

Status: PASS.

R16 metadata/JSON-LD staging is public candidate metadata only. It does not encode production verification, public release execution, Final Seal, insurer acceptance, coverage-ready status, underwriting-ready status, certification, endorsement, legal proof, claims approval, public DOCX, legal advice, or insurance advice.

Route metadata verified:

- Title.
- Description.
- Canonical URL.
- Robots metadata.
- Open Graph title/description/image.
- Twitter metadata.
- Citation metadata.
- HTML/PDF artifact URLs.
- No DOCX metadata.

JSON-LD verified:

- `WebPage`
- `TechArticle`
- `Report`
- `BreadcrumbList`
- `ItemList`
- `DefinedTermSet`
- Person/author reference through site identity.

Parse result:

- Built route JSON-LD parse: PASS, 7 script blocks parsed from `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.html`.

