# Route Inventory Audit

Build output generated 95 static HTML pages. Internal link scan over `dist` found 6671 internal hrefs and 0 broken links.

## Inventory Summary

| Route family | Examples | Role | Public status | SEO/GEO purpose | Template family | Audit status |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage | `/` | Architectural headquarters | Index | Define identity, thesis, research foundation, proof path | Custom homepage | Aligned |
| About | `/about/` | Person/entity authority | Index | Anchor Jearon Wong entity and authorship | Base page + profile content | Aligned |
| Projects | `/projects/`, `/projects/mplp/`, `/projects/cognitive-os/`, `/projects/solocrew/`, `/projects/validation-lab/` | Proof path | Index | Connect MPLP, Cognitive OS, SoloCrew, Validation Lab | Project registry/detail | Aligned |
| Essays | `/essays/`, flagship essays | Argument layer | Index | Explain thesis and category positioning | Essay registry/detail | Aligned |
| Concepts | `/concepts/`, `/concepts/map/`, concept detail pages | Canonical definitions | Index | Answer definitions and entity relationships | Concept registry/detail/map | Partially aligned |
| Lifecycle/category | `/lifecycle/`, `/delivery-standard/`, `/ai-agent-governance/` | Category/category bridge | Index | Define AI Agent Lifecycle, Delivery Standard, governance | Custom concept pages | Aligned |
| Research | `/research/`, three whitepaper pages | Whitepaper publication ledger | Index | Discover official public research editions | Shared publication component | Aligned |
| Whitepaper HTML artifacts | Three `.html` artifacts under `/research/.../` | Artifact reading editions | Index | Citation and artifact discoverability | Static artifact shell | Partially aligned |
| GAIC system mappings | `/research/global-ai-compliance-white-paper-2026/systems/.../` | Source-qualified mapping | Index | Vendor/system search intents without ranking claims | System mapping pages | Aligned |
| Governance mappings | `/governance/.../` | Regulatory/enterprise mapping | Index | Source-qualified governance search intents | Governance mapping pages | Partially aligned |
| Playbooks | `/playbooks/.../` | Applied guide layer | Index | Operational search intents | Playbook registry/detail | Aligned but strategically held for future public-guide decisions |
| Extended ecosystem | `/mapping/extended-ecosystem/.../` | Non-scored ecosystem mapping | Index | Ecosystem lifecycle mapping | Mapping registry/detail | Aligned |
| Legacy/noindex bridge | `/ecosystem-mapping/`, `/theory-clusters/` | Bridge/legacy alias | Noindex, follow | Preserve navigation without index duplication | Bridge pages | Acceptable/stale |

## Route-Level Findings

- The core public route set is coherent: homepage, about, research, concepts, projects, essays, governance, playbooks, and mapping all build and index as expected.
- `/ecosystem-mapping/` is correctly `noindex, follow` and canonicalized to `/mapping/extended-ecosystem/`.
- `/theory-clusters/` is correctly `noindex, follow` and canonicalized to `/theories/`.
- `/governance/` and `/governance/ai-agent-governance/` share the same title. This is not a release blocker, but the index route and detail route should have distinct titles before a broad SEO push.
- `/concepts/ai-agent-lifecycle/` and `/lifecycle/` intentionally overlap. Their roles should remain distinct: concept definition vs category page.
- Public artifact routes are discoverable in the sitemap. The third whitepaper HTML artifact needs metadata parity with the first and second artifact pages.

## Public / Private / Noindex Classification

- Public indexable: all primary site routes and the three whitepaper HTML artifacts.
- Public noindex bridges: `/ecosystem-mapping/`, `/theory-clusters/`.
- Public artifacts not route-rendered as HTML: PDFs, manifests, checksums, entity graph, `llms.txt`.
- No private route was found under `src/pages`.

## Hidden / Orphan Notes

- Public artifact directories include historical first-whitepaper integrity records. They are linked from evidence and manifests, so they are not orphaned, but they carry older `publication candidate` language.
- `public/research/.DS_Store` exists and should be removed in a hygiene wave.
