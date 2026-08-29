---
name: site-publication-surface-governance
description: Use when publishing, revising, routing, auditing, or distributing essays, white papers, research artifacts, OG/social assets, llms.txt entries, RSS-facing content, sitemap-facing content, or publication audit records.
---

# Site Publication Surface Governance

Use this skill to ensure publishing work updates every required public and machine-readable surface without inventing unsupported wording.

## Trigger Conditions

Invoke this skill for:

- Publishing, renaming, rewriting, or rerouting an essay.
- Publishing, resealing, withdrawing, or revising a white paper/public research artifact.
- Adding or changing OG/social assets, in-article figures, captions, alt text, or share metadata.
- Updating `/essays/`, `/research/`, `public/llms.txt`, RSS-facing content, sitemap-facing content, or audit records.
- Adapting white paper content into an article, concept page, governance page, or social card.
- Repairing content-derived SOT drift across special concept pages, concepts map, evidence page, entity graph JSON, or crawler-facing summaries.

## Non-Negotiable Baseline

Read before editing:

1. `AGENTS.md`
2. `src/data/siteGovernance.ts`
3. `.agents/skills/site-semantic-brand-governance/SKILL.md`
4. `.agents/skills/article-publication-governance/SKILL.md` for essays/articles
5. `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`
6. Current renderer and source artifact for the target surface

## Required Publication Impact Report

Before editing, report:

```yaml
publication_impact:
  publication_class:
  source_authority:
  canonical_surface:
  required_public_surfaces:
  required_machine_surfaces:
  required_assets:
  linked_semantic_surfaces:
  derived_sot_rules:
  reverse_dependency_searches:
  audit_record_required:
  missing_sot:
  forbidden_shortcuts:
```

Publication classes:

- `essay`
- `research-commentary`
- `whitepaper-publication`
- `whitepaper-adaptation`
- `social-og-asset`
- `concept-definition-update`
- `publication-audit-only`

## Source Rules

- Essay metadata and route facts come from `src/content/essays/<slug>.md`.
- Essay index exposure is manual in `src/pages/essays/index.astro`; collection inclusion alone is not enough.
- White paper title, version, document ID, artifact status, citation, checksums, and boundary notes come from `src/data/whitepaperPublications.ts` and `public/research/*` artifacts.
- Concept definitions come from `src/data/definitions.ts` or the source white paper explicitly named in the page.
- Machine-readable public summaries come from `public/llms.txt`, but `llms.txt` must not introduce claims absent from source data.
- Entity graph wording comes from `src/data/site.ts`, `src/data/definitions.ts`, and `src/data/whitepaperPublications.ts`; it must not preserve withdrawn, rejected, or stale document-state wording after the source record changes.
- Special concept pages such as `src/pages/concepts/agentic-lifecycle-governance/index.astro` are derived SOT surfaces even when they are not generated from `concepts[]`.
- OG/social assets can sharpen presentation, but not create new semantic authority.

## Required Surface Checks

### Essays And Articles

Check:

- `src/content/essays/<slug>.md`
- `src/pages/essays/index.astro`
- `src/pages/essays/[slug].astro`
- legacy slug/noindex behavior when a slug changes
- `shareImage`, `shareImageAlt`, OG/Twitter metadata
- `public/llms.txt` for flagship or governance-significant work
- `public/entity/jearonwong-mplp-gaic-entity-graph.json` when the essay changes core entity language
- RSS and sitemap build output
- related ideas and related projects
- figure SVG source, rendered image, alt, caption, `<title>`, and `<desc>`
- `docs/audits/` record for significant waves

### White Papers And Research Artifacts

Check:

- `src/data/whitepaperPublications.ts`
- `/research/` index renderer
- white paper page route
- public HTML/PDF/manifest/checksum files
- citation identity
- artifact integrity language
- boundary notes
- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- `src/pages/evidence.astro`
- `src/pages/concepts/map/index.astro`
- special hardcoded concept pages such as `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- concept pages and definitions that summarize the paper
- article adaptations and social/OG copy when present
- `docs/audits/` record for significant waves

## Verification Gates

For publication-ready claims, run:

```sh
npm run typecheck
npm run build
git diff --check
```

Then verify live or built surfaces as appropriate:

- canonical route returns 200
- index route exposes the publication
- click path works when there is a visible listing
- OG image exists and has expected dimensions
- RSS and sitemap include the route when expected
- `llms.txt` contains only source-grounded wording
- entity graph JSON contains only current source-grounded document IDs, citation state, and boundary wording
- definition anchors and concept links resolve after derived SOT repairs
- desktop and mobile have no horizontal overflow for visual publication work

Use the Browser plugin first for live visual behavior. If it fails, record the failure and use Chrome/CDP or Computer Use fallback.

## Stop Conditions

Stop and report a blocker if:

- A publication route is 404.
- `/essays/` or `/research/` does not expose the intended publication.
- Required artifact files are missing or checksum/manifest references cannot be matched.
- The requested copy requires claims absent from the declared SOT.
- A publication SOT changes but derived concept, evidence, llms, or entity graph surfaces have not been checked.
- Boundary language implies certification, assurance opinion, legal compliance proof, regulator approval, vendor ranking, official standard, endorsement, or adoption proof without explicit source evidence and owner approval.
- Unrelated `public/social/*` asset churn cannot be separated from the current publication wave.
