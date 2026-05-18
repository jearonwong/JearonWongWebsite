# Whitepaper Series Publication SOP v2

**Status:** Active internal SOP
**Applies to:** Agentic Lifecycle Governance Industry Series
**Created by:** AIAAWP-R5A Whitepaper Series Publication SOP Patch
**R8 update:** Multi-format publication standard with profile-specific rendering gates.

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

## 3A. Shared Canonical Publication Standard

The whitepaper series uses one publication system, not separate HTML, PDF, and DOCX publication systems. All rendering profiles must inherit the same canonical publication standard:

- same source-grounded document identity
- same title, subtitle, author, document ID, trace tag, and status boundary
- same series relationship and related-asset mapping
- same citation metadata discipline
- same JSON-LD / SEO / GEO readiness discipline
- same entity graph, `llms.txt`, sitemap, manifest, and checksum discipline
- same source register / citation register provenance
- same legal, audit, assurance, certification, endorsement, procurement, ranking, indexing, answer-engine, and SEO/GEO outcome boundaries
- same GAIC visual family and publication authority tone

Hard rule: a format-specific artifact may adapt physical layout, but it must not drift from the canonical document identity, semantic mapping, metadata, source basis, artifact role model, or boundary language.

## 3B. Rendering Profiles

Each whitepaper or guide must declare and QA three rendering profiles when those artifacts exist.

### HTML Web Reading Profile

Purpose: responsive, crawlable, linkable, machine-readable, anchor-friendly web reading.

The HTML profile must preserve:

- responsive layout from mobile through desktop
- semantic headings and stable anchors
- crawlable text, metadata, citation tags, JSON-LD, and internal links
- table overflow controls for small screens
- readable long-form web typography
- publication visual family, cover/title grammar, status/boundary styling, citation/source-note style, and artifact identity

The HTML profile must not be forced into:

- A4 fixed page size
- print margins
- forced page breaks
- fixed-height PDF cover behavior
- PDF-only table pagination
- page-number header/footer logic

### PDF A4 Print Profile

Purpose: formal A4 publication artifact for download, citation, boardroom, audit, assurance, and enterprise circulation.

The PDF profile must provide:

- full-page A4 publication cover
- no accidental cover split
- status/boundary block that fits on the cover or moves to an intentionally designed following page
- controlled Publication Contents / TOC pagination
- intentional chapter and appendix starts
- readable wide-table and row-card treatment
- proper A4 margins after the cover
- PDF metadata
- render-proof QA screenshots

### DOCX Editable Derivative Profile

Purpose: editable review/distribution derivative, not visual authority.

The DOCX profile must provide:

- editable text and tables
- source/content parity with canonical source and HTML/PDF
- document metadata where practical
- clear derivative status
- no stronger visual-authority or final/sealed claim than the canonical status allows

DOCX may adapt layout for editability and may use simplified table treatment, but it must not introduce semantic drift, score/methodology drift, public identity drift, or boundary drift.

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

### Responsive HTML / HTML Web Reading Profile

- GAIC R3D-3 responsive web-reading rules
- mobile-width handling
- overflow-x controls
- scroll-contained tables
- readable line length
- no body-level horizontal overflow
- stable anchors and crawlable semantic sections
- no A4 fixed-page constraints in the public web-reading artifact

### PDF / A4 Print Profile

- generated from publication-quality HTML or approved publication shell
- not from broken/raw Markdown conversion
- metadata must be set
- tables must be readable
- sampled page proof required
- full-page A4 cover
- no accidental cover split
- controlled TOC pagination
- intentional chapter and appendix starts
- no huge unintended white margins around the cover

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

## 9. Whitepaper A4 PDF Layout Gate

The Whitepaper A4 PDF Layout Gate belongs to the PDF A4 Print Profile. It must run before:

- Final Candidate QA
- public staging
- production live verification
- final seal
- large-scale distribution

Required PDF layout rules:

1. PDF must be designed for A4, not merely accepted because a browser produced a PDF.
2. Cover must be a full-page A4 publication cover.
3. Cover content must not split across pages.
4. Boundary/status block must either fit on the cover or move to a deliberately designed second page.
5. TOC / Publication Contents must use controlled pagination.
6. Each major chapter must start cleanly.
7. Appendices must start cleanly.
8. Wide tables must be transformed into row-card, split-table, or otherwise print-safe layouts.
9. No catastrophic table cutoff is allowed.
10. No accidental blank pages are allowed.
11. No huge unintended white margins around the cover are allowed.
12. PDF metadata must be set.
13. Page proof/render QA is mandatory.
14. File existence/hash is not sufficient for PDF PASS.
15. PDF must be visually accepted before public distribution or final seal.

Hard fail if:

- cover is split across pages
- cover is rendered as a small inset panel with large white page margins
- TOC is broken unintentionally
- table pages are unreadable
- PDF is generated from non-publication-quality HTML/CSS
- no page-render proof exists

## 10. Profile-Specific QA Gate

Every release wave must report the relevant rendering profile status:

- HTML Web Reading Profile: PASS / PARTIAL / BLOCKED
- PDF A4 Print Profile: PASS / PARTIAL / BLOCKED
- DOCX Editable Derivative Profile: PASS / PARTIAL / BLOCKED

The shared canonical publication standard can pass while one rendering profile is blocked, but final seal and large-scale distribution remain blocked until all required profiles for the release have passed or have an explicitly approved deferral.

## 11. Required Phase Order

Future series assets must follow this phase order:

1. Planning baseline
2. Source research
3. Source-grounded outline
4. Internal draft
5. Editorial/source/boundary QA
6. Publication-candidate source package
7. Publication Standard Reuse Gate
8. Shared Canonical Publication Standard check
9. Rendering Profile declaration
10. Artifact generation
11. HTML Web Reading Profile QA
12. PDF A4 Print Profile QA
13. DOCX Editable Derivative Profile QA
14. Metadata / SEO / GEO / JSON-LD / citation QA
15. Artifact integrity QA
16. Final candidate QA
17. Publication staging
18. Whitepaper Semantic Mapping Completion Gate
19. Production live verification
20. Author release decision
21. Final seal, only if explicitly authorized
22. Post-release evidence capture

Hard rule: do not generate artifacts before step 7.

Hard rule: do not accept production live verification as release-complete or proceed to final seal until the semantic mapping gate and required rendering profile gates pass.

## 12. Public Naming Rule

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

## 13. Future Application

This SOP explicitly applies to:

- AIAAWP-R6 publication staging
- AIAAWP-R6A semantic mapping completion
- AIAAWP-R6B production live verification after R6A
- WP3 artifact generation
- Guide 1 artifact generation
- Guide 2 artifact generation
- Guide 3 artifact generation

Before those waves generate or stage artifacts, the wave must record a `Publication Standard Reuse Proof` and pass the SOP gate.
