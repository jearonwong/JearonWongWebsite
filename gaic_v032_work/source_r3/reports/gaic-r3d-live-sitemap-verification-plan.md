# GAIC-R3D Live Sitemap Verification Plan

**Task ID:** GAIC-R3D-SEARCH-VISIBILITY-ANSWER-ENGINE-AUTHORITY-LAYER  
**Date:** 2026-05-13

## Status

DEPLOY VERIFICATION REQUIRED.

R3C already performed build-level sitemap, robots, and canonical QA. R3D adds a new public route (`/concepts/map/`) and homepage content, so final public verification must happen after the R3D commit is deployed.

## Local Build Verification Scope

After local build, verify:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml`
- `dist/robots.txt` if copied to build output, otherwise `public/robots.txt`
- canonical URLs in built representative HTML files

## Required Routes in Build Sitemap

- `https://www.jearonwong.com/`
- `https://www.jearonwong.com/about/`
- `https://www.jearonwong.com/research/`
- `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/`
- `https://www.jearonwong.com/concepts/`
- `https://www.jearonwong.com/concepts/agentic-lifecycle-governance/`
- `https://www.jearonwong.com/concepts/missing-regulatory-objects/`
- `https://www.jearonwong.com/concepts/rccs-m/`
- `https://www.jearonwong.com/concepts/alcs/`
- `https://www.jearonwong.com/concepts/map/`
- `https://www.jearonwong.com/playbooks/`
- `https://www.jearonwong.com/playbooks/ai-agent-rollback-verification/`
- `https://www.jearonwong.com/playbooks/ai-coding-agent-auditability/`
- `https://www.jearonwong.com/playbooks/openai-agent-governance/`
- `https://www.jearonwong.com/playbooks/anthropic-agent-governance/`

## Deploy / Live Verification URLs

Check these after deployment:

- `https://www.jearonwong.com/sitemap-index.xml`
- `https://www.jearonwong.com/sitemap-0.xml`
- `https://www.jearonwong.com/sitemap.xml`
- `https://www.jearonwong.com/robots.txt`
- `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/`
- `https://www.jearonwong.com/concepts/agentic-lifecycle-governance/`
- `https://www.jearonwong.com/concepts/map/`
- `https://www.jearonwong.com/playbooks/`

## Live Verification Checklist

For each deployed URL:

- HTTP status is 200 for public pages and sitemap/robots files.
- Canonical URL is absolute and matches the intended route.
- Robots meta is `index, follow` for public content pages.
- Sitemap includes `/concepts/map/`.
- Robots points to `https://www.jearonwong.com/sitemap-index.xml`.
- No internal `gaic_v032_work`, `out/publication_candidate`, or old `phase_1d*` paths appear in public sitemaps.
- No duplicate `/concepts/evidence-chain/` route appears; `/concepts/lifecycle-evidence/` remains canonical.

## Boundary

This plan is a verification checklist. It does not claim indexing, ranking, AI Overview inclusion, or answer-engine citation.

