# GAIC-R3K-1A Metadata / JSON-LD Check

**Date:** 2026-05-14

## Changed Public Routes Checked

| Route | Title/meta role | Canonical URL | Robots | JSON-LD action | Result |
|---|---|---|---|---|---|
| `/ai-agent-governance/` | Field-level bridge | Self-canonical retained for compatibility | `index, follow` | Removed bridge-page `DefinedTerm`; kept `WebPage`/`BreadcrumbList`; added `isBasedOn` and `significantLink` to governance route/GAIC. | PASS |
| `/concepts/ai-agent-governance/` | Concept bridge | Self-canonical retained | `index, follow` | Existing concept schema retained; governance significant link added for the AI Agent Governance bridge. | PASS |
| `/governance/ai-agent-governance/` | Preferred governance mapping | Self-canonical retained | `index, follow` | Existing governance TechArticle retained; visible boundary/source text strengthened through data. | PASS |
| `/definitions/` | Reference/citation index | Self-canonical retained | `index, follow` | Added significant links to concepts index and concepts map; DefinedTermSet remains accurate as reference anchors. | PASS |
| `/theory-clusters/` | Legacy compatibility | Canonical `/theories/` retained | `noindex, follow` retained | Existing legacy WebPage/BreadcrumbList retained. | PASS |
| `/projects/mplp/` | Project/protocol path | Self-canonical retained | `index, follow` | CreativeWork boundary reflected with visible content and source links. | PASS |
| `/projects/validation-lab/` | Non-certifying evidence adjudication surface | Self-canonical retained | `index, follow` | CreativeWork boundary reflected with visible content and source links. | PASS |
| `/lifecycle/` | Category/field definition | Self-canonical retained | `index, follow` | WebPage retained; `about` includes Agentic Lifecycle Governance. | PASS |
| `/delivery-standard/` | Conceptual delivery discipline | Self-canonical retained | `index, follow` | WebPage/DefinedTerm retained; `about` includes Deterministic Delivery. | PASS |
| `/concepts/protocol-engineering/` | Broad protocol concept | Self-canonical retained | `index, follow` | Existing concept TechArticle retained; visible boundary/source links added and boundary reflected. | PASS |

## Noindex / Redirect Notes

- No new noindex directives were introduced.
- No redirects were introduced.
- Existing `/theory-clusters/` compatibility route remains noindexed and canonicalized to `/theories/`.

## Hidden Structured Data Check

The added JSON-LD changes reflect visible page content:

- `/ai-agent-governance/` visibly points to the governance route and GAIC source.
- `/definitions/` visibly points to `/concepts/` and `/concepts/map/`.
- Project and concept source/boundary panels are visible before corresponding JSON-LD boundary/source relations.

No hidden structured data was added that contradicts visible content.
