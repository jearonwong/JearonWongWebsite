# GAIC R2 Concept Architecture Research

**Task:** GAIC-R2-AGENTIC-LIFECYCLE-GOVERNANCE-CONCEPT-CORE
**Date:** May 12, 2026
**Status:** PASS

## Repo Truth

| Check | Result |
|---|---|
| Repository | `https://github.com/jearonwong/jearonwongwebsite.git` |
| Branch | `main` |
| Baseline HEAD | `76bbabea36eec9ba8b8bcbe15475bb1e1e47b825` |
| Origin HEAD | `76bbabea36eec9ba8b8bcbe15475bb1e1e47b825` |
| `git pull --ff-only` | Already up to date |
| Worktree before R2 | Clean |

## Existing Concept Architecture

| Area | Existing asset | R2 decision |
|---|---|---|
| Concepts index | `src/pages/concepts/index.astro` | Reuse and add a primary concept-card link to the Concept Core. |
| Generic concept pages | `src/pages/concepts/[slug].astro` backed by `src/data/site.ts` concept records | Do not force the Concept Core into the generic definition template; R2 needs a more explanatory concept-entry surface. |
| Layout and metadata | `src/layouts/BaseLayout.astro` | Reuse canonical, robots, OG/Twitter, keywords, and JSON-LD support added in R1. |
| Header/nav | `src/components/SiteHeader.astro`, `src/data/site.ts` | Reuse current navigation. No new top-level nav item. |
| Visual system | `src/styles/global.css` registry tokens | Reuse Monolith Charcoal, Machine White, Registry Blue, Evidence Cyan, sharp panels, and evidence-first registry language. |
| Research hub | `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | Add a restrained link from the white paper hub to the Concept Core. |
| AI-readable map | `public/llms.txt` | Add a concise Agentic Lifecycle Governance definition and route. |

## Route Existence

`/concepts/agentic-lifecycle-governance/` did not exist before R2.

## Page Role Distinction

The Concept Core differs from the white paper hub because it is a short concept-entry layer, not a download/citation surface for the 425-page publication candidate.

The Concept Core differs from MPLP project/protocol pages because it is category-first: compliance unit, Missing Regulatory Objects, RCCS-M/ALCS, then MPLP as one protocol path. It is not an MPLP sales page and does not claim MPLP is required, exclusive, certified, market-validated, or an industry standard.

## Non-Goals

- No sealed artifact modification.
- No white paper regeneration.
- No score/methodology change.
- No platform score table.
- No Concept Core PDF unless safe without new heavy tooling.
- No WP2/WP3 content.
