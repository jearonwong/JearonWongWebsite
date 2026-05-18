# Whitepaper Series Publication SOP v1

**Status:** Active internal SOP
**Applies to:** Agentic Lifecycle Governance Industry Series
**Created by:** AIAAWP-R5A Whitepaper Series Publication SOP Patch

## 1. Purpose

All Agentic Lifecycle Governance Industry Series assets must inherit the GAIC main white paper publication standard before artifact generation.

This SOP exists to prevent:

- visual style drift
- mobile/readability drift
- metadata/SEO/GEO drift
- manifest/checksum drift
- public naming drift
- duplicate generator drift
- token/time waste from generating then reworking artifacts

## 2. Scope

This SOP applies to:

- Global AI Compliance White Paper 2026
- Agentic AI Auditability & Assurance White Paper 2026 / AIAAWP
- Agentic AI Insurability White Paper 2026
- CIO/CTO Guide to Audit-Ready AI Agent Systems
- Chief Compliance Officer Guide to Agentic Lifecycle Governance
- Enterprise Risk Guide to Insurable AI Agent Systems
- future documents in the Agentic Lifecycle Governance Industry Series

## 3. Artifact Role Model

Future series artifacts must preserve the GAIC artifact role model:

- HTML = responsive web-reading visual authority
- PDF = fixed-layout visual authority
- DOCX = editable derivative
- Markdown/source = source working text
- manifest/checksum = artifact integrity layer

Hard rule: DOCX must not be treated as the visual authority unless explicitly approved.

## 4. Mandatory Pre-Generation Gate

Before any HTML/PDF/DOCX generation for future series assets, Codex must prove it has inspected and reused the GAIC standard.

Required proof:

- GAIC publication shell inspected
- GAIC responsive/mobile/WAP rules inspected
- GAIC PDF generation approach inspected
- GAIC DOCX derivative strategy inspected
- GAIC metadata/citation/JSON-LD rules inspected
- GAIC manifest/checksum rules inspected
- GAIC boundary language pattern inspected
- GAIC public naming / trace tag pattern inspected

Codex must produce a short `Publication Standard Reuse Proof` section before generation. The proof must name the GAIC files or reports inspected and state how the future asset will inherit or explicitly adapt the standard.

## 5. Required Reuse Areas

Every future whitepaper/guide artifact generation must reuse or explicitly adapt the areas below.

### UI / Visual

- GAIC cover/title block style
- status/boundary block style
- TOC rhythm
- chapter heading hierarchy
- appendix/source section style
- table/row-card treatment

### Responsive HTML

- GAIC R3D-3 responsive web-reading rules
- mobile-width handling
- overflow-x controls
- scroll-contained tables
- readable line length
- no body-level horizontal overflow

### PDF

- generated from publication-quality HTML or approved publication shell
- not from broken/raw Markdown conversion
- metadata must be set
- tables must be readable
- sampled page proof required

### DOCX

- editable derivative
- metadata must be set
- heading/table styles must be usable
- not visual authority
- derivative status must be explicit

### Metadata / SEO / GEO

- title/description pattern
- citation metadata plan
- JSON-LD / TechArticle / Report plan
- trace tag / document ID
- noindex/internal candidate behavior before publication
- public canonical/sitemap/llms/entity graph only during explicit publication staging
- no SEO/GEO outcome claims

### Integrity

- manifest
- checksums
- source register
- citation map
- artifact hashes
- public vs internal distinction
- sealed vs candidate distinction

### Boundary

- no certification
- no audit standard
- no legal compliance proof
- no regulator approval
- no Big Four endorsement
- no procurement/vendor ranking
- no MPLP required / industry standard claim
- no public/final/sealed/live claim before explicit release

## 6. Hard Fail Conditions

Future artifact generation must fail if:

- a new generator is created without GAIC reuse proof
- HTML lacks GAIC responsive/mobile/WAP rules
- PDF is generated from non-publication-quality source
- DOCX is treated as visual authority
- metadata/JSON-LD diverges from GAIC pattern without explanation
- manifest/checksum pattern is absent
- artifact QA only checks file existence/hash
- public-facing identity exposes internal numbering such as WP2/WP3
- a public artifact is copied to `public/` before publication staging authorization
- SEO/GEO indexing outcome is claimed without evidence

## 7. Required QA Before Artifact PASS

Artifact QA must include:

- visual style parity with GAIC
- HTML responsive/mobile QA
- PDF page proof / page pinning
- DOCX editable derivative QA
- cross-format content parity
- metadata/SEO/GEO plan parity
- manifest/checksum verification
- boundary final sweep
- public naming check
- no public-route/public-copy check

File existence and checksum alone are not enough.

## 8. Whitepaper Semantic Mapping Completion Gate

The Whitepaper Semantic Mapping Completion Gate must run after publication staging and before:

- production live verification status is accepted as release-complete
- author release decision
- final seal
- post-release distribution campaign

Every whitepaper, guide, or report in the Agentic Lifecycle Governance Industry Series must be mapped into the site's semantic asset system before seal-readiness is claimed.

Required mapping surfaces:

1. Research Hub / Research Index
   - Asset has a canonical research route.
   - Artifact links exist.
   - Title, subtitle, document ID, and status are present.
   - Relationship to the series is stated.
2. Evidence Registry
   - Asset appears as an evidence/research asset.
   - Artifact roles are listed.
   - Manifest/checksum links are present.
   - Boundary status is included.
3. Concepts
   - Relevant concept pages link to the asset.
   - Asset links back to core concepts.
   - Thin concept pages are not created only for SEO.
   - Concept mapping is source-grounded.
4. Concepts Map / Entity Mesh
   - Asset appears in the entity relationship layer.
   - Edges use safe relations such as `authored`, `belongs_to`, `builds_on`, `defines`, `formalizes`, `maps_to`, `supports`, and `prepares_for`.
   - Unsupported adoption or endorsement edges are forbidden.
5. Definitions
   - If the asset introduces public terms, the definitions index must include or link them.
   - Terms must not drift from the white paper's wording.
   - Internal task names such as WP2/WP3 must not appear as public terms.
6. Governance
   - If the asset defines governance obligations, auditability, or operating-model concepts, governance index/detail pages must link to it.
   - Legal compliance proof claims remain forbidden.
7. Playbooks
   - If the asset supports implementation or practitioner workflows, relevant playbook surfaces must link to it or defer explicitly.
   - Do not imply that a future guide exists as a full published implementation guide.
8. Ecosystem Mapping
   - If the asset interprets vendors, frameworks, or protocols, ecosystem mapping must include it as analysis layer only.
   - Vendor endorsement, ranking, and procurement claims remain forbidden.
9. Entity Graph JSON
   - Machine-readable nodes/edges must represent the asset.
   - Relation types must be explicit and safe.
   - Fake external adoption or endorsement edges are forbidden.
10. `llms.txt`
   - Route and artifact links must be exposed.
   - Status and boundary must be clear.
   - SEO/GEO outcome claims remain forbidden.
11. Sitemap / Robots
   - Route and intended HTML artifact must be discoverable.
   - Robots must not accidentally block intended public assets.
   - Staging/live distinction must be respected.
12. Metadata / JSON-LD / Citation Metadata
   - WebPage, TechArticle or Report, BreadcrumbList, ItemList, DefinedTermSet, and Person author relationships must be used where appropriate.
   - Citation metadata and artifact URLs must align with the GAIC standard.
   - `about`, `mentions`, `isPartOf`, and citation fields must represent the asset safely.
   - Internal WP numbering must not be public identity.
13. Crosslinks
   - GAIC main white paper hub should link related series assets.
   - Companion assets should link back to GAIC.
   - About, Evidence, Concepts Map, Definitions, Governance, Playbooks, and Ecosystem Mapping should expose the asset when relevant.
   - Footer/global navigation changes are required only when the existing information architecture requires them.

Final Seal remains blocked unless all of the following are true:

- publication staging complete
- production live verification complete after semantic mapping completion
- semantic mapping gate complete
- metadata/JSON-LD/citation QA complete
- public artifact integrity verified
- boundary QA complete
- author release decision recorded
- final seal explicitly authorized

Hard fail conditions:

- A public artifact is absent from Evidence Registry.
- A public artifact is missing from entity graph JSON or `llms.txt`.
- A public asset defines concepts but Concepts / Definitions do not expose or link them.
- JSON-LD lacks relation to the series, author, or artifacts.
- Sitemap excludes intended public route or HTML artifact.
- Public route claims final/sealed before authorization.
- Internal WP numbering is public-facing.
- SEO/GEO outcome is claimed without evidence.
- External adoption or endorsement relation is fabricated.

## 9. Required Phase Order

Future series assets must follow this phase order:

1. Planning baseline
2. Source research
3. Source-grounded outline
4. Internal draft
5. Editorial/source/boundary QA
6. Publication-candidate source package
7. Publication Standard Reuse Gate
8. Artifact generation
9. Format/publication design pass
10. Final candidate QA
11. Publication staging
12. Whitepaper Semantic Mapping Completion Gate
13. Production live verification
14. Author release decision
15. Final seal, only if explicitly authorized
16. Post-release evidence capture

Hard rule: do not generate artifacts before step 7.

Hard rule: do not accept production live verification as release-complete or proceed to final seal until step 12 passes.

## 10. Public Naming Rule

Internal task shorthand is allowed only in:

- task IDs
- internal reports
- governance logs
- directory names if already established

Public-facing artifacts must use:

- actual title
- actual document ID
- actual trace tag
- no WP2/WP3-style internal numbering

## 11. Future Application

This SOP explicitly applies to:

- AIAAWP-R6 publication staging
- AIAAWP-R6A semantic mapping completion
- AIAAWP-R6B production live verification after R6A
- WP3 artifact generation
- Guide 1 artifact generation
- Guide 2 artifact generation
- Guide 3 artifact generation

Before those waves generate or stage artifacts, the wave must record a `Publication Standard Reuse Proof` and pass the SOP gate.
