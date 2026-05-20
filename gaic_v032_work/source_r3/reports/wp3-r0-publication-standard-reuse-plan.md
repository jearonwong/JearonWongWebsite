# WP3-R0 Publication Standard Reuse Plan

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Status:** Internal architecture baseline for owner review. WP3 is not drafted, not published, and not staged.

## Inspected Publication Standards

This plan is based on internal inspection of the existing GAIC and AIAAWP publication system:

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-preflight.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-build-and-validation.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-final-qa.md`
- `gaic_v032_work/source_r3/reports/aiaawp-r6b2-final-qa.md`
- `gaic_v032_work/source_r3/reports/aiaawp-r6b2-production-metadata-jsonld-qa.md`
- `gaic_v032_work/source_r3/reports/aiaawp-r6b2-production-artifact-integrity-qa.md`
- `gaic_v032_work/source_r3/reports/aiaawp-r6b2-production-boundary-claims-qa.md`
- `gaic_v032_work/source_r3/design/gaic-whitepaper-vi-system.md`
- `gaic_v032_work/source_r3/design/gaic-html-publication-style.md`
- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- `gaic_v032_work/source_r3/scripts/generate_r3_phase1d13f_html_publication.py`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-aiaawp-r4d-publication-candidate.py`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-wp2-r4-candidate-html.mjs`
- `public/research/global-ai-compliance-white-paper-2026/manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256`

## Reuse Principle

WP3 must reuse the same whitepaper publication system as GAIC and AIAAWP. The system is a shared canonical publication standard with profile-specific rendering:

- HTML = crawlable, responsive, web-reading authority.
- PDF = A4 publication authority.
- DOCX = internal editable derivative only unless the owner explicitly authorizes public release.
- Manifest and checksums = artifact integrity layer.
- JSON-LD, citation metadata, entity graph, `llms.txt`, and sitemap = semantic discovery and authority mapping layer.

WP3 may define a new insurability interpretation layer, but it may not define a new independent publication system.

## Scripts, Styles, and Patterns to Reuse

Future WP3 publication-candidate work must reuse or consciously adapt these existing components:

| Area | Reuse requirement |
| --- | --- |
| Visual language | GAIC/AIAAWP restrained research-whitepaper family, cover grammar, typography hierarchy, table discipline, status/boundary block style. |
| HTML | Responsive web-reading profile from the GAIC/AIAAWP HTML publication style; crawlable text; citation metadata; JSON-LD; internal links; no A4 fixed-page constraints. |
| PDF | R8 A4 print profile and layout gates, including full-page cover, controlled TOC, page proofing, table semantic gate, adaptive table layout gate, metadata, and full PDF visual QA. |
| DOCX | Internal editable derivative; source/content parity; no public distribution unless owner explicitly approves. |
| Metadata | Stable public title/subtitle, author, language, version/status, citation metadata, canonical URL only during explicit publication staging, and no internal task ID as public identity. |
| JSON-LD | WebPage plus TechArticle/Report style, Person/author relation, citation fields, artifact encodings, series relationship, boundary-safe status. |
| Manifest/checksum | Public artifact manifest with HTML/PDF roles, checksum file, public distribution note, status, final-seal boundary, and updated timestamps only in authorized publication waves. |
| Evidence Registry | Public artifact inclusion only after publication staging authorization, with citation kit and boundary status. |
| Entity graph | Add WP3 only during authorized publication staging; connect it to GAIC, AIAAWP, concepts, evidence, and author entities without claiming final seal. |
| Sitemap and `llms.txt` | Add only after public route/artifact staging authorization; status and boundary must be explicit. |

## Drift That Must Not Occur

Hard blockers for future WP3 waves:

- New unrelated PDF generator or publication shell.
- Generic SaaS-style landing page design.
- Public route before owner authorization.
- Public PDF/HTML/DOCX artifact before publication staging authorization.
- Public DOCX by default.
- Internal `WP3` numbering as the public-facing title.
- Different metadata model from GAIC/AIAAWP.
- Missing JSON-LD/citation metadata.
- Missing manifest/checksum discipline.
- Missing boundary language for insurance advice, underwriting standard, pricing, coverage opinion, claims approval, legal liability, certification, MPLP, and Validation Lab.
- Any claim that WP3 is published, final, sealed, insurer accepted, or certification-grade before owner approval.

## Checks Required Before Future WP3 Publication Candidate

Before any WP3 publication-candidate artifact generation, a later wave must re-check:

1. GAIC source master status and current publication standard.
2. AIAAWP public route/artifact status and metadata.
3. Whitepaper Series Publication SOP profile gates.
4. GAIC/AIAAWP generator compatibility.
5. Visual style and table layout profile decisions.
6. Metadata, JSON-LD, citation metadata, manifest, checksum, and PDF metadata plans.
7. Full-site semantic mapping plan.
8. Boundary QA for legal, insurance, underwriting, claims, certification, MPLP, and Validation Lab language.
9. No public route, public artifact, or public DOCX exposure before authorization.

## Later Sitewide Mapping Plan

Future WP3 publication staging, if authorized, must map WP3 into:

- Homepage Research Series as `03 / Insurability & Risk Transfer`.
- Research index and research route.
- Evidence Registry and citation kit.
- Concepts Map for insurability, claim evidence, coverage boundary, responsibility mapping, and lifecycle evidence concepts.
- Definitions for public-facing terms only after source-grounded definitions are frozen.
- Governance pages where WP3 terms affect risk governance or lifecycle controls.
- Playbooks where WP3 evidence requirements become implementation tasks.
- About / Entity Authority and the public entity graph.
- MPLP project page only as an optional protocol path, not an insurance requirement.
- `llms.txt` and sitemap only during authorized staging.

## R0 Boundary

This R0 plan does not generate artifacts, create routes, modify public files, or claim publication. It freezes publication reuse requirements for the WP3 planning track only.
