# WHITEPAPER-R8F Sitewide Consistency Repair Log

Date: 2026-05-20

## Repairs Applied

| File | Issue | Repair | Boundary Impact |
| --- | --- | --- | --- |
| `public/research/global-ai-compliance-white-paper-2026/manifest.json` | Required GAIC current manifest URL returned 404 in production | Added current GAIC public manifest with R8F artifact facts, page count 485, HTML/PDF-only distribution, final seal blocked | Metadata only; no artifact regeneration |
| `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` | GAIC checksum surface did not include current generic manifest | Added current manifest hash | Integrity surface update only |
| `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | GAIC hub pointed generic manifest semantics at PDF metadata manifest | Added current manifest card and retained PDF metadata/historical manifests | Clarifies artifact identity |
| `src/pages/evidence.astro` | Evidence Registry lacked GAIC current manifest entry | Added GAIC current manifest to integrity and technical artifact lists | Source wiring only |
| `public/llms.txt` | GAIC manifest link and AIAAWP deployment status were stale after R8F checks | Added current GAIC manifest, kept historical manifests, and updated AIAAWP R8F status with final seal blocked | AI-readable map alignment |
| `public/entity/jearonwong-mplp-gaic-entity-graph.json` | Entity graph did not fully reflect AIAAWP author/series/sitewide state after R8F | Updated version, author description, Evidence Registry scope, AIAAWP status, and boundaries | Entity graph wiring only |
| `src/data/schema.ts` | Sitewide JSON-LD terms did not include AIAAWP concept set in the shared term list | Added AIAAWP, Agentic AI Auditability, Agentic Audit Object, Audit Evidence Chain, AARM, and MRO-to-Audit-Evidence Mapping; added AIAAWP to Person `subjectOf` | Schema consistency only |
| `src/pages/research/index.astro` | AIAAWP research card lacked direct PDF CTA | Added PDF CTA | Public navigation only |
| `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` | Manifest still described deployment verification as pending | Updated to R8F production/sitewide reverified status while keeping not final/not sealed boundaries | Metadata only |
| `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` | AIAAWP manifest hash changed after status metadata update | Updated manifest checksum | Integrity surface update only |
| `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` | Hub displayed deployment-pending language | Updated status/next phase and manifest hash while preserving candidate/final-seal-blocked boundary | Public status wording only |
| `src/pages/ecosystem-mapping/index.astro` | Required `/ecosystem-mapping/` URL returned 404 while canonical mapping route was `/mapping/extended-ecosystem/` | Added noindex compatibility alias linking to canonical route | Route compatibility only |
| `astro.config.mjs` | Compatibility alias should not be indexed as a duplicate canonical surface | Excluded `/ecosystem-mapping/` from generated sitemap | Sitemap hygiene only |

## Not Performed

- No PDF regeneration.
- No standalone whitepaper HTML artifact mutation.
- No GAIC score, methodology, or MRO definition changes.
- No AIAAWP core content changes.
- No public DOCX reintroduction.
- No WP3 route or publication claim.

## Result

PASS. All repairs were bounded link, metadata, schema, entity, manifest, or route wiring changes.
