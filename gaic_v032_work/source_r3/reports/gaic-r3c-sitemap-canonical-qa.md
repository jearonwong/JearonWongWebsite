# GAIC-R3C Sitemap and Canonical QA

**Task ID:** GAIC-R3C-SITEWIDE-SEO-GEO-TECHNICAL-HARDENING  
**Date:** 2026-05-13

## Commands

- `npm run build`
- `rg -o '<loc>[^<]+' dist/sitemap-0.xml`
- canonical link inspection on built homepage, About, Concepts, Research, Essays, Projects, Playbook, and GAIC hub pages
- path exposure checks for `publication_candidate`, `phase_1d`, and duplicate `/concepts/evidence-chain/`

## Sitemap Result

`npm run build` generated `dist/sitemap-index.xml` and `dist/sitemap-0.xml`.

The sitemap includes:

- homepage
- About
- Research index
- GAIC white paper hub
- Concepts index
- Agentic Lifecycle Governance Concept Core
- GAIC core entity pages
- Evidence Chain canonical route: `/concepts/lifecycle-evidence/`
- Essays index and essay detail pages
- Projects index and project detail pages
- Lifecycle
- Playbooks index and all R3B playbooks

## Canonical Result

Built canonical checks passed for representative pages:

- `https://www.jearonwong.com/`
- `https://www.jearonwong.com/about/`
- `https://www.jearonwong.com/concepts/`
- `https://www.jearonwong.com/research/`
- `https://www.jearonwong.com/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/`
- `https://www.jearonwong.com/projects/mplp/`
- `https://www.jearonwong.com/playbooks/ai-agent-rollback-verification/`

## Robots Result

`public/robots.txt` allows crawling and points to:

`https://www.jearonwong.com/sitemap-index.xml`

## Exposure Checks

- No sitemap entries expose internal `gaic_v032_work` paths.
- No sitemap entries expose `out/publication_candidate/` paths.
- No sitemap entries expose old `phase_1d*` output directories.
- No duplicate `/concepts/evidence-chain/` route was created; `/concepts/lifecycle-evidence/` remains canonical.
- Public white paper artifacts remain exposed only through the intended public release path under `/research/global-ai-compliance-white-paper-2026/`.

## Decision

SITEMAP / CANONICAL / ROBOTS QA PASS.
