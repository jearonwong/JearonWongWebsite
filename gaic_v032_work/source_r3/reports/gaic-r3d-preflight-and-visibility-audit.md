# GAIC-R3D Preflight and Visibility Audit

**Task ID:** GAIC-R3D-SEARCH-VISIBILITY-ANSWER-ENGINE-AUTHORITY-LAYER  
**Date:** 2026-05-13

## Repo Truth

- Remote: `origin https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Required baseline HEAD: `735932e6c1800450acc606e01e5371db30b8ad2e`
- Local HEAD before R3D edits: `735932e6c1800450acc606e01e5371db30b8ad2e`
- Origin HEAD before R3D edits: `735932e6c1800450acc606e01e5371db30b8ad2e`
- `git pull --ff-only`: already up to date before R3D implementation
- Initial worktree: clean

## Surfaces Audited

- Homepage: `src/pages/index.astro`
- Research index and GAIC hub: `src/pages/research/index.astro`, `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- Concepts index and Concept Core: `src/pages/concepts/index.astro`, `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- R3A entity pages: dynamic concepts from `src/data/site.ts`
- R3B playbooks: `src/pages/playbooks/index.astro`, `src/pages/playbooks/[slug].astro`
- R3C schema layer: `src/layouts/BaseLayout.astro`, `src/data/schema.ts`
- Sitemap and robots: Astro sitemap integration, `public/robots.txt`
- AI-readable index: `public/llms.txt`
- Navigation/header/footer: `src/components/SiteHeader.astro`, `src/components/SiteFooter.astro`

## Visibility Findings

| Surface | Finding | R3D action |
|---|---|---|
| Homepage GAIC exposure | Partial before R3D. Homepage schema referenced GAIC, but the visible page did not have a strong white paper release panel directly below the hero. | Add a restrained Research Release / Evidence Release panel below the homepage hero. |
| Visible Entity Mesh / Concepts Map | Missing before R3D. Concepts index had entity sections, but no dedicated visible graph route. | Create `/concepts/map/` with accessible HTML/CSS entity mesh and text equivalent. |
| Sitemap/robots | Build-verified by R3C. | Rerun build-level checks and create deploy/live verification checklist. |
| Live verification | Current local environment has network access, but R3D-specific live verification cannot be final until the new commit is pushed and deployed. | Mark `DEPLOY VERIFICATION REQUIRED` for public URLs after deployment. |
| Internal links | Concept Core, GAIC hub, Concepts index, playbooks, and `llms.txt` already had strong entity links, but no Concepts Map link. | Add restrained links to the Concepts Map from relevant surfaces. |

## Boundary

R3D does not modify sealed white paper artifacts, regenerate white paper files, change white paper content, recalculate scores, create rankings, claim external backlinks, or claim search/answer-engine ranking improvement.

