# AIAAWP-R6A Semantic Mapping Audit

**Status:** PASS after R6A repair.

| Surface | Expected mapping | Current state | Result | Files inspected / patched | Boundary risk |
| --- | --- | --- | --- | --- | --- |
| Public AIAAWP hub route | Canonical route, title, subtitle, document ID, status, artifact grid, series relation | Present from R6; R6A added links to Definitions, Playbooks, and Ecosystem Mapping | PASS | `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` | Low |
| Public artifacts | HTML/PDF/DOCX/manifest/checksums under public research path | Present from R6; not modified | PASS | `public/research/agentic-ai-auditability-assurance-white-paper-2026/` | Low |
| Research index | AIAAWP appears as research asset | Present from R6 | PASS | `src/pages/research/index.astro` | Low |
| Evidence Registry | AIAAWP evidence asset with artifact roles and integrity links | Present from R6 | PASS | `src/pages/evidence.astro` | Low |
| Concepts Map | AIAAWP in entity mesh and auditability layer | Present from R6 | PASS | `src/pages/concepts/map/index.astro` | Low |
| Concepts / Concept Core | Core concept page links companion auditability source | R6A added AIAAWP companion links and JSON-LD mention | PASS | `src/pages/concepts/agentic-lifecycle-governance/index.astro` | Low |
| Definitions | AIAAWP-introduced terms exposed or linked | R6A added index-level definitions for Agentic AI Auditability, Agentic Audit Object, Audit Evidence Chain, AARM, and lifecycle-responsibility-linked agent work | PASS | `src/data/definitions.ts`, `src/pages/definitions.astro` | Low |
| Governance | Governance layer links to AIAAWP as auditability source | R6A added common governance link and index framing | PASS | `src/data/governanceMappings.ts`, `src/pages/governance/index.astro` | Low |
| Playbooks | Relevant practitioner surfaces link to AIAAWP without claiming guide publication | R6A added AIAAWP as auditability source and common playbook link | PASS | `src/data/site.ts`, `src/pages/playbooks/index.astro` | Low |
| Ecosystem Mapping | AIAAWP available as analysis layer only | R6A added AIAAWP auditability layer link and non-ranking wording | PASS | `src/pages/mapping/extended-ecosystem/index.astro` | Low |
| GAIC hub | GAIC hub links related companion asset | Present from R6 | PASS | `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | Low |
| About / Entity Authority | Author surface exposes AIAAWP authored asset | R6A added Known For, authored-defined, evidence, and JSON-LD related links | PASS | `src/pages/about.astro` | Low |
| Project/MPLP page | MPLP relation to AIAAWP is bounded as optional protocol path | R6A added AIAAWP relation and evidence link for MPLP project surface | PASS | `src/pages/projects/[slug].astro` | Low |
| Entity graph JSON | Complete nodes/edges with safe relations | R6A added audit-evidence-chain edge and normalized `formalizes` / `maps_to` relation names | PASS | `public/entity/jearonwong-mplp-gaic-entity-graph.json` | Low |
| `llms.txt` | AIAAWP route/artifacts/status/boundary exposed | Present from R6; still states deployment verification pending | PASS | `public/llms.txt` | Low |
| Sitemap | Route and HTML artifact discoverable | Present in sitemap custom page/build output | PASS | `astro.config.mjs`, `dist/sitemap-0.xml` | Low |
| Robots | Intended public assets not blocked | `public/robots.txt` allows crawling | PASS | `public/robots.txt` | Low |
| JSON-LD | Route and semantic surfaces parse and include AIAAWP relations | Built JSON-LD parse passed for AIAAWP, Definitions, Governance, Playbooks, Ecosystem Mapping, About, and Concept Core | PASS | built `dist/**/index.html` | Low |
| Citation metadata | AIAAWP citation metadata present | Present from R6 | PASS | AIAAWP route source | Low |
| OG/Twitter metadata | AIAAWP social metadata present | Present from R6; reused tracked site OG image | PASS | AIAAWP route source | Low |
| Manifest/checksums | Public integrity layer present | Present from R6; not modified | PASS | public artifact directory | Low |

## Conclusion

AIAAWP semantic mapping is complete enough for the pre-seal gate. R6B production verification must still be rerun or reaccepted after this R6A gate; final seal remains blocked until author release decision and explicit final-seal authorization.
