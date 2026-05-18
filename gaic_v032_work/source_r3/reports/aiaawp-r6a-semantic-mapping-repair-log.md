# AIAAWP-R6A Semantic Mapping Repair Log

**Status:** PASS

| File changed | Surface | Old state | New state | Reason | Boundary impact |
| --- | --- | --- | --- | --- | --- |
| `reports/whitepaper-series-publication-sop-v1.md` | SOP | Publication standard reuse gate existed, but semantic mapping gate did not | Added Whitepaper Semantic Mapping Completion Gate and final seal hard block | Prevent artifact-only publication path | Reduces overclaim risk |
| `src/data/definitions.ts` | Definitions | AIAAWP terms were not exposed in the definitions index | Added index-level terms and links for Agentic AI Auditability, Agentic Audit Object, Audit Evidence Chain, AARM, and lifecycle-responsibility-linked agent work | Prevent public term drift and hidden concept definitions | Adds explicit non-audit-standard boundaries |
| `src/pages/definitions.astro` | Definitions | Definitions page did not link AIAAWP as source | Added AIAAWP usage link and significantLink JSON-LD | Connect public terms to source | Low |
| `src/data/governanceMappings.ts` | Governance | Common governance links did not include AIAAWP | Added AIAAWP to common governance link set and selected keywords | Connect governance pages to auditability source | Low |
| `src/pages/governance/index.astro` | Governance | Governance index did not identify AIAAWP auditability layer | Added AIAAWP link, keywords, and boundary-safe explanatory copy | Complete semantic entry mapping | Explicitly avoids legal/audit standard claim |
| `src/data/site.ts` | Playbooks / site terms | Common playbook links and primary terms omitted AIAAWP terms | Added AIAAWP, Agentic AI Auditability, Audit Evidence Chain, Agentic Audit Object, and AARM references | Map practitioner surfaces to auditability source | Low |
| `src/pages/playbooks/index.astro` | Playbooks | Index did not expose AIAAWP source | Added AIAAWP source action and explanatory copy | Avoid guide drift; connect playbooks to source | States no published implementation guide claim |
| `src/pages/mapping/extended-ecosystem/index.astro` | Ecosystem Mapping | Ecosystem mapping did not show AIAAWP as auditability analysis layer | Added AIAAWP link and non-ranking explanation | Complete semantic crosslink | Explicit no ranking/procurement/endorsement |
| `src/pages/about.astro` | About / Entity Authority | Author surface listed GAIC but not AIAAWP | Added AIAAWP as known authored research candidate and evidence route | Complete author/entity surface | Low |
| `src/pages/projects/[slug].astro` | Project/MPLP | MPLP project linked GAIC but not AIAAWP | Added AIAAWP relation as optional protocol path evidence | Clarify MPLP boundary in auditability paper | Explicitly not required/certification/industry standard |
| `src/pages/concepts/agentic-lifecycle-governance/index.astro` | Concept Core | Concept core linked GAIC but not AIAAWP companion | Added AIAAWP action, internal links, keywords, and JSON-LD mention | Complete concept core bridge | Low |
| `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` | AIAAWP hub | Hub linked several context surfaces but not all semantic entry points | Added Definitions, Playbooks, and Ecosystem Mapping context links | Complete round-trip mapping | Low |
| `public/entity/jearonwong-mplp-gaic-entity-graph.json` | Entity Graph | Missing explicit AIAAWP formalizes Audit Evidence Chain edge; one relation name was not in SOP safe list | Added `formalizes` edge to Audit Evidence Chain; normalized `formalizes` and `maps_to` | Align machine-readable graph with SOP | Low |

## Deferred Items

No P0 semantic mapping repair remains. No thin concept pages were created; AIAAWP-introduced terms are exposed at the Definitions index and deep-linked to the white paper instead.
