# Article And TechArticle Schema Audit Report

Result: complete with no additional repair required.

Whitepaper pages:

- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`

These routes use `createWhitePaperJsonLd(paper)`, which emits WebPage, TechArticle/Report, breadcrumb, artifact ItemList, and DefinedTermSet records.

Essay pages:

- `src/pages/essays/[slug].astro`

Essay routes emit WebPage, Article, and breadcrumb JSON-LD. Build-output checks parsed JSON-LD for all current essay `index.html` pages.

Other technical content:

- Governance, playbook, mapping, concepts, and systems routes already use structured page or TechArticle-style records where the local template supports them.

No schema spam was added. No Article schema was added to the homepage.
