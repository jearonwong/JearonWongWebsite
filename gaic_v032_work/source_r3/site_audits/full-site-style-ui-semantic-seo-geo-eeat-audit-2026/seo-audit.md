# SEO Audit

## Build Metadata Scan

- Static pages: 95.
- JSON-LD blocks in `dist`: 504.
- JSON-LD parse failures: 0.
- Internal hrefs scanned in `dist`: 6671.
- Broken internal links: 0.
- Sitemap includes the three public whitepaper HTML artifact URLs through custom pages.
- Robots blocks stale AIIRWP v0.1/v0.2 HTML/PDF paths.

## P1 Findings

1. **Third whitepaper HTML artifact lacks canonical and JSON-LD**
   - Route: `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`
   - Built artifact scan: canonical `NO`, JSON-LD count `0`.
   - Comparison: first whitepaper HTML artifact has canonical and 5 JSON-LD blocks; second has canonical and 1 JSON-LD block.
   - Recommendation: add canonical and TechArticle/CreativeWork JSON-LD parity in a later artifact metadata repair wave without changing paper prose.

2. **Duplicate governance titles**
   - `/governance/` and `/governance/ai-agent-governance/` both use `AI Agent Governance and Lifecycle Responsibility | Jearon Wong - Protocol Architect for the Agent Era`.
   - Recommendation: distinguish the governance index as a registry/index route and the detail page as the canonical topic page.

3. **Historical first-whitepaper artifact labels**
   - `src/pages/evidence.astro` still labels a linked first-whitepaper historical file as `Publication candidate manifest`.
   - This is factually historical, not a release blocker, but may confuse public readers after official publication.
   - Recommendation: relabel in a later wave as `Historical publication-candidate manifest` and explain current manifest separately.

## P2 Findings

- GAIC HTML artifact has 34 H1 elements. Long artifact history may explain this, but one-H1 hierarchy would be cleaner.
- Meta descriptions with very short or long length:
  - `/concepts/lifecycle-evidence/`: 83 characters.
  - `/concepts/agentic-delivery/`: 90 characters.
  - `/concepts/map/`: 412 characters.
  - `/evidence/`: 287 characters.
- `/concepts/ai-agent-lifecycle/` and `/lifecycle/` have overlapping titles/descriptions by intent. Differentiate route purpose if future SEO consolidation prioritizes one.
- Whitepaper artifact descriptions are short compared with publication pages. This is not fatal, but could be improved for search snippets.

## Passes

- Canonicals exist on all primary site pages.
- Noindex bridge pages are intentionally filtered from sitemap.
- OG/Twitter metadata exists through `BaseLayout` for route pages.
- Research index and whitepaper publication routes are indexable.
- PDF files are linked from public pages and `llms.txt`.
