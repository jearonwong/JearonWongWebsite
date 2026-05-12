# GAIC R1 Site Architecture Research

**Task:** GAIC-R1-PUBLIC-RELEASE-PAGE
**Date:** May 12, 2026
**Status:** PASS

## Repo Truth

| Check | Result |
|---|---|
| Repository | `https://github.com/jearonwong/jearonwongwebsite.git` |
| Branch | `main` |
| Baseline HEAD | `a9c5747efb36915470721c11855142f7c7fa9b25` |
| Origin HEAD | `a9c5747efb36915470721c11855142f7c7fa9b25` |
| `git pull --ff-only` | Already up to date |
| Worktree before R1 | Clean |

## Existing Architecture

| Area | Existing asset | R1 decision |
|---|---|---|
| Framework | Astro static site with `@astrojs/sitemap` | Reuse. Create static Astro routes for Research and the GAIC hub. |
| Layout | `src/layouts/BaseLayout.astro` | Reuse. It already supports canonical URL, robots, OG/Twitter metadata, and JSON-LD injection. |
| Header/nav | `src/components/SiteHeader.astro` and `src/data/site.ts` nav arrays | Reuse. Add a restrained `Research` navigation entry rather than a separate release microsite. |
| Page hero language | `RegistryPageHero.astro` | Reuse for Research index. Build custom hub opening only where white paper download/citation density requires it. |
| Visual system | `src/styles/global.css` registry tokens | Reuse: Monolith Charcoal, Machine White, Registry Blue, Evidence Cyan, mono annotations, sharp panels, evidence-first rhythm. |
| Content IA | Existing `/lifecycle/`, `/concepts/`, `/projects/`, `/essays/`, `/about/` | Link internally from the hub rather than creating Concept Core in R1. |
| Static assets | `public/` | Place public white paper assets under `public/research/global-ai-compliance-white-paper-2026/`. |
| Sitemap | Astro sitemap integration | Reuse. New static routes will be included automatically. |
| AI-readable index | `public/llms.txt` | Update with a concise public white paper entry and artifact links. |

## Routes To Add

- `/research/`
- `/research/global-ai-compliance-white-paper-2026/`

## Reuse Rationale

R1 is a release-surface task, not a redesign. The existing site already has the desired restrained authority, evidence-first register, schema support, sitemap generation, and concept/project graph. The implementation should therefore add the minimum new primitives needed for a white paper hub: artifact cards, checksum rows, citation block, boundary statement, and structured data.

## Non-Goals

- No sealed artifact modification.
- No white paper regeneration.
- No Concept Core.
- No companion white paper content.
- No subscription gate.
