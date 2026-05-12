# GAIC-R3C Sitewide SEO/GEO Audit

**Task ID:** GAIC-R3C-SITEWIDE-SEO-GEO-TECHNICAL-HARDENING  
**Date:** 2026-05-13  
**Scope:** Sitewide metadata, JSON-LD, identity graph, canonical structure, sitemap, robots, and AI-readable entity consistency after GAIC R3B.

## Repo Truth

- Remote: `origin https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Baseline HEAD before R3C edits: `e7405f755f3a3e27c55442b5a39b5b194bf98fcd`
- Origin HEAD before R3C edits: `e7405f755f3a3e27c55442b5a39b5b194bf98fcd`
- `git pull --ff-only`: already up to date
- Initial worktree before R3C implementation: clean

## Architecture Audited

- Base metadata layout: `src/layouts/BaseLayout.astro`
- Site registry and content records: `src/data/site.ts`
- New schema utility layer: `src/data/schema.ts`
- Homepage: `src/pages/index.astro`
- About identity page: `src/pages/about.astro`
- Concepts index and dynamic concept pages: `src/pages/concepts/index.astro`, `src/pages/concepts/[slug].astro`
- Research index and GAIC hub: `src/pages/research/index.astro`, `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- Essays index and essay detail pages: `src/pages/essays/index.astro`, `src/pages/essays/[slug].astro`
- Projects index and project detail pages: `src/pages/projects.astro`, `src/pages/projects/[slug].astro`
- Lifecycle, definitions, delivery standard, AI agent governance, playbooks, sitemap, robots, and `public/llms.txt`

## Surface Classification

| Surface | Metadata | JSON-LD | Canonical | Entity links | R3C action |
|---|---|---|---|---|---|
| BaseLayout | Complete after R3C | Complete after R3C | Complete | Complete | Centralized WebSite and Person schema through reusable helpers. |
| Homepage | Complete after R3C | Complete after R3C | Complete | Complete | Added stronger description, keywords, WebPage/ProfilePage/Breadcrumb graph. |
| About | Complete after R3C | Complete after R3C | Complete | Complete | Added AboutPage/ProfilePage/Breadcrumb and identity links. |
| Concepts index | Complete after R3C | Complete after R3C | Complete | Complete | Added CollectionPage, DefinedTermSet, Breadcrumb, keywords. |
| Dynamic concept pages | Complete from R3A | Complete from R3A | Complete | Complete | Preserved DefinedTerm/TechArticle/GAIC citation pattern. |
| Research index | Complete after R3C | Complete after R3C | Complete | Complete | Added CollectionPage, ItemList, Breadcrumb. |
| GAIC hub | Complete from R1/R3A/R3B | Complete | Complete | Complete | Preserved white paper structured data and internal links. |
| Essays index | Complete after R3C | Complete after R3C | Complete | Complete | Added CollectionPage, ItemList, Breadcrumb, keywords. |
| Essay detail pages | Complete after R3C | Complete after R3C | Complete | Complete | Added WebPage, Article, Breadcrumb, CreativeWorkSeries, keyword graph. |
| Projects index | Complete after R3C | Complete after R3C | Complete | Complete | Added CollectionPage, ItemList, Breadcrumb, keywords. |
| Project detail pages | Complete after R3C | Complete after R3C | Complete | Complete | Added WebPage, CreativeWork, Breadcrumb, related links, code repository where present. |
| Lifecycle | Complete after R3C | Complete after R3C | Complete | Complete | Added Breadcrumb and keyword entity metadata. |
| Playbooks | Complete from R3B | Complete | Complete | Complete | Preserved CollectionPage/TechArticle/Breadcrumb layer. |
| `llms.txt` | Complete after R3C | N/A | N/A | Complete | Added concise entity map connecting person, GAIC, ALG, MRO, RCCS-M, ALCS, MPLP, and playbooks. |
| Sitemap/robots | Complete | N/A | Complete | Complete | Build generated sitemap includes major routes; robots points to sitemap index. |

## Recommended Action

R3C technical hardening is complete. Remaining visibility work is external and belongs to R3D: search visibility monitoring, answer-engine checks, external authority signals, backlink/reference strategy, and indexing observation.
