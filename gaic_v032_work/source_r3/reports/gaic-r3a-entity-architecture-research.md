# GAIC-R3A Entity Architecture Research

**Task ID:** GAIC-R3A-CORE-ENTITY-MESH  
**Date:** May 12, 2026  
**Baseline:** `73a660c149a4bf5798e8abfe4a23bf8580ecef7e`

## Repo Truth

- Remote: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Local HEAD before R3A edits: `73a660c149a4bf5798e8abfe4a23bf8580ecef7e`
- Origin HEAD before R3A edits: `73a660c149a4bf5798e8abfe4a23bf8580ecef7e`
- Worktree before R3A edits: clean

## Existing Architecture

The site already has a concept architecture based on:

- `src/data/site.ts` as the concept data registry.
- `src/pages/concepts/[slug].astro` as the dynamic DefinedTerm page template.
- `src/pages/concepts/index.astro` as the concept map.
- `src/pages/concepts/agentic-lifecycle-governance/index.astro` as the standalone Concept Core route.
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` as the white paper hub.
- `public/llms.txt` as the AI-readable site map.

## Existing Entity Pages

- `/concepts/lifecycle-evidence/` already existed and is the Evidence Chain page.
- `/concepts/confirmation-boundary/` already existed and is related to Authority Boundary but is not the same concept.
- `/concepts/agentic-lifecycle-governance/` already existed as the Concept Core and was preserved as a standalone route.

## New Entity Pages Required

The following entities did not have equivalent existing concept routes and were added to the existing dynamic concept registry:

- `/concepts/missing-regulatory-objects/`
- `/concepts/rccs-m/`
- `/concepts/alcs/`
- `/concepts/lifecycle-responsibility-objects/`
- `/concepts/accepted-outcome/`
- `/concepts/authority-boundary/`

## Updated Existing Entity Page

- `/concepts/lifecycle-evidence/` was updated to explicitly connect Evidence Chain to GAIC, MRO, RCCS-M, ALCS, Accepted Outcome, and Authority Boundary.

## No Duplicate Route Decision

No `/concepts/evidence-chain/` duplicate route was created because `/concepts/lifecycle-evidence/` already exists as the Evidence Chain entity page and is linked as the canonical Evidence Chain route across the site.

## Link Graph Plan

- Concept Core links to MRO, RCCS-M, ALCS, Lifecycle Responsibility Objects, Accepted Outcome, Authority Boundary, Evidence Chain, and the white paper hub.
- White paper hub links to Concept Core, MRO, RCCS-M, and ALCS.
- Each GAIC entity page links to the Concept Core, the white paper hub, and related entity pages.
- Concepts index now includes a dedicated Global AI Compliance Entity Mesh section.
- `llms.txt` lists the core entity pages with concise definitions.

## Reused Assets

R3A reuses the existing Astro page architecture, base layout, concept index design, JSON-LD pattern, social image, and sitemap generation. No new design system or duplicate frontend primitives were created.

