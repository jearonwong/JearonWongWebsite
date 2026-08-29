---
name: site-semantic-brand-governance
description: Use when work changes homepage positioning, site theme, author identity, core concepts, page anchors, navigation semantics, definitions, llms.txt, metadata, or cross-page brand language.
---

# Site Semantic And Brand Governance

Use this skill before any change that may affect sitewide meaning, brand positioning, page roles, core definitions, or public semantic surfaces.

## Trigger Conditions

Invoke this skill for:

- Homepage positioning, title, support-line, or identity changes.
- Author role, site tagline, header, footer, About, or BaseLayout metadata changes.
- Changes to AI Agent Lifecycle, Agentic Delivery, MPLP, Cognitive OS, SoloCrew, Validation Lab, Evidence Chain, Confirmation Boundary, or other core terms.
- Changes to `src/data/site.ts`, `src/data/definitions.ts`, `src/data/siteGovernance.ts`, `public/llms.txt`, JSON-LD, OG/Twitter metadata, or navigation labels.
- UI/UX changes that alter the site's identity system, page roles, or cross-page visual language.
- Audits or repairs involving semantic derivation, content-derived SOT, reverse-dependency discovery, or special concept pages outside generated `concepts[]`.

## Non-Negotiable Baseline

Read before editing:

1. `AGENTS.md`
2. `src/data/siteGovernance.ts`
3. `src/data/site.ts`
4. `src/data/definitions.ts` when concepts or definitions are involved
5. `src/data/whitepaperPublications.ts` when concepts derive from research artifacts
6. Relevant page renderer and shared component files

## Source-Of-Truth Order

Use this order:

1. Owner instruction for the current task
2. `src/data/siteGovernance.ts` impact rules
3. `src/data/siteGovernance.ts` `semanticDerivedSotRegistry`
4. `src/data/site.ts` `siteSemanticBaseline`, `siteConfig`, `siteThesis`, `pageRegistry`
5. `src/data/definitions.ts`
6. `src/data/whitepaperPublications.ts` when research artifacts are involved
7. Existing article frontmatter/body
8. `public/llms.txt`

If a needed wording does not exist in the SOT, report the gap. Do not invent a new site-level claim inside a page just to complete local copy.

## Required Impact Report

Before editing, report:

```yaml
semantic_impact:
  requested_change:
  mutation_class:
  primary_sot:
  affected_surfaces:
  surfaces_to_update:
  surfaces_to_verify_only:
  derived_sot_rules:
  reverse_dependency_searches:
  missing_sot:
  forbidden_shortcuts:
```

Mutation classes:

- `brand-positioning-change`
- `core-concept-change`
- `visual-identity-change`
- `page-anchor-change`
- `metadata-machine-surface-change`
- `no-sitewide-impact`

## Workflow

### 1. Classify The Change

Map the task to one or more `semanticImpactRules` in `src/data/siteGovernance.ts`.

### 2. Discover Linked Surfaces

Use repo search, the impact rule, and `semanticDerivedSotRegistry` to find all dependent surfaces. Prefer `rg` over memory.

Common searches:

```sh
rg -n "Protocol Architect for the Agent Era|Execution is not Delivery|Agentic Delivery|AI Agent Lifecycle|MPLP|Evidence Chain|Confirmation Boundary" src public/llms.txt
rg -n "siteSemanticBaseline|siteConfig|siteThesis|pageRegistry|definitions|whitepaperPublications" src
rg -n "GACWP-2026|AIAAWP-2026|AIIRWP-2026|Public Research Edition|v0.2|Agentic Lifecycle Governance" src public
rg -n "relatedTerms|relatedConcepts|relatedIdeas|relatedProjects|href: \"#|href=\"#" src/data src/pages src/content
```

Always include special semantic surfaces that are not generated from `concepts[]`:

- `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- `src/pages/concepts/map/index.astro`
- `src/pages/evidence.astro`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`

### 3. Update From SOT

When changing linked surfaces, pull wording from the SOT. Local page copy may be compressed, but must preserve the same boundary and role.

### 4. Verify Semantic Consistency

For non-trivial semantic or brand changes, verify:

- No stale wording remains in visible copy.
- No stale wording remains in metadata, JSON-LD, OG/Twitter copy, or `llms.txt`.
- No stale wording remains in `public/entity/jearonwong-mplp-gaic-entity-graph.json`.
- Page role still matches `pageRegistry`.
- Concept wording still matches `definitions` or the declared source artifact.
- Definition internal anchors resolve to a definition entry, or intentionally link to a canonical concept route.
- Special concept pages and concept-map/entity-map pages have been checked in addition to generated `concepts[]` routes.
- Boundary language does not drift into certification, legal compliance proof, regulator approval, vendor ranking, official standard, endorsement, or adoption overclaim.

## Stop Conditions

Stop and report a blocker if:

- The requested change conflicts with `siteSemanticBaseline` or `definitions` and the user has not authorized the SOT change.
- The linked surface list cannot be separated from unrelated dirty worktree changes.
- The change requires new public claims that are not grounded in current SOT.
- A brand or core concept change is requested for only one page while other affected surfaces would become stale.
- The changed SOT has not been traced into derived surfaces from `semanticDerivedSotRegistry`.
