# SEO / GEO / JSON-LD Metadata Plan

## Metadata Plan

| Field | Planned Value |
|---|---|
| Page title | Agentic AI Insurability & Risk Transfer White Paper 2026 |
| Meta description | A public research candidate by Jearon Wong analyzing agentic AI insurability and risk transfer through lifecycle evidence, insured subject/risk object separation, underwriting reviewability, and claim reconstruction boundaries. |
| OG title | Agentic AI Insurability & Risk Transfer White Paper 2026 |
| OG description | Lifecycle evidence guide for underwriting, claims, and enterprise risk transfer; not legal advice, insurance advice, coverage opinion, underwriting guidance, certification, score, or standard. |
| OG image | Reuse `/social/jearonwong-og.png` unless a separately approved WP3 social image exists. |
| Twitter title | Agentic AI Insurability & Risk Transfer White Paper 2026 |
| Twitter description | Public research candidate route for AIIRWP v1.0; HTML/PDF plus manifest/checksum; no final/sealed/release-ready status. |
| Twitter image | Reuse OG image unless separately approved. |
| Canonical | `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` |
| Robots decision | Change route from `noindex={true}` to indexable only if R3AA explicitly executes route restoration. |
| JSON-LD type | `TechArticle` plus `Report` or `CreativeWork` with `WebPage`, `BreadcrumbList`, and `MediaObject` encodings for HTML/PDF. |
| Creative work status | `PublicationCandidate` or `PublicResearchCandidate`; not `Final`, `PublishedFinal`, `Sealed`, or `ReleaseReady`. |
| Citation metadata | Add `citation_title`, `citation_author`, `citation_publication_date`, `citation_technical_report_number`, `citation_pdf_url`, `citation_fulltext_html_url`, `citation_language`, and bounded `citation_keywords`. |

## Semantic Baseline Alignment

R3AA metadata should respect the JearonWong.com semantic baseline:

- Protocol Architect for the Agent Era.
- Agentic Delivery.
- AI Agent Lifecycle.
- MPLP / Multi-Agent Lifecycle Protocol, only as one lifecycle evidence/protocol path.
- Cognitive OS / SoloCrew / Validation Lab only if relevant and bounded.
- No generic SaaS/blog/portfolio framing.

## Entity Graph Impact

If R3AA executes, update `public/entity/jearonwong-mplp-gaic-entity-graph.json` to move AIIRWP from withdrawn/no-current-artifact language to public research candidate route-restored language, while preserving non-claim boundaries and avoiding final/sealed/release-ready claims.

## llms.txt Impact

If R3AA executes, update `public/llms.txt` to list AIIRWP public HTML/PDF/manifest/checksum URLs and replace withdrawn/no-current-artifact language with bounded public research candidate language.

## Sitemap Impact

If R3AA executes, update `astro.config.mjs` sitemap custom pages to include the public AIIRWP HTML artifact URL:

`https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`

The route page should become indexable only during execution, not in R3Z.

## Robots Impact

If R3AA executes, remove disallow rules for current public AIIRWP manifest/checksum if they are intended to be public. Preserve or add explicit disallow rules for stale v0.1/v0.2 artifact paths. Do not unblock stale v0.2.

## R3Z Execution Boundary

Metadata changes are not executed in R3Z.
