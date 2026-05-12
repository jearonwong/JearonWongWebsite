# GAIC-R3D Build and Visibility QA

**Task ID:** GAIC-R3D-SEARCH-VISIBILITY-ANSWER-ENGINE-AUTHORITY-LAYER  
**Date:** 2026-05-13

## Commands Run

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- sitemap route checks against `dist/sitemap-0.xml`
- Concepts Map built HTML metadata / JSON-LD inspection
- robots check
- sealed and public artifact SHA256 verification
- local rendered browser validation for homepage and `/concepts/map/`

## Build Result

- Typecheck: PASS
- Lint: PASS
- Build: PASS
- `git diff --check`: PASS
- Static pages built: 52
- Sitemap generated: PASS

## Visibility QA

- Homepage GAIC release panel builds: PASS
- Homepage panel visible after hero scroll in local browser: PASS
- Homepage panel CTAs present: PASS
- Homepage `Read the White Paper` CTA navigates to GAIC hub: PASS
- `/concepts/map/` builds: PASS
- Concepts Map visible route renders in local browser: PASS
- Concepts Map includes canonical semantic chain: PASS
- Concepts Map includes required nodes and relation groups: PASS
- Concepts Map contains text equivalent for accessibility: PASS
- Browser console warnings/errors during homepage and Concepts Map checks: PASS, none observed

## Sitemap QA

`dist/sitemap-0.xml` includes:

- `/`
- `/about/`
- `/research/`
- `/research/global-ai-compliance-white-paper-2026/`
- `/concepts/`
- `/concepts/agentic-lifecycle-governance/`
- `/concepts/missing-regulatory-objects/`
- `/concepts/rccs-m/`
- `/concepts/alcs/`
- `/concepts/map/`
- `/playbooks/`
- `/playbooks/ai-agent-rollback-verification/`
- `/playbooks/ai-coding-agent-auditability/`
- `/playbooks/openai-agent-governance/`
- `/playbooks/anthropic-agent-governance/`

## Concepts Map Metadata / JSON-LD QA

Built `/concepts/map/` HTML includes:

- Canonical: `https://www.jearonwong.com/concepts/map/`
- Robots: `index, follow`
- OG/Twitter metadata
- WebSite JSON-LD
- Person JSON-LD
- WebPage JSON-LD
- ItemList JSON-LD
- DefinedTermSet JSON-LD
- BreadcrumbList JSON-LD

## Robots / Exposure QA

- `public/robots.txt` allows crawling and points to `https://www.jearonwong.com/sitemap-index.xml`.
- No sitemap or built HTML exposure found for `publication_candidate`, old `phase_1d*` output directories, or duplicate `/concepts/evidence-chain/`.
- `/concepts/lifecycle-evidence/` remains the Evidence Chain canonical route.

## Sealed Artifact Integrity

Sealed originals under `gaic_v032_work/source_r3/out/publication_candidate/` match required SHA256 values:

- HTML: `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af`
- PDF: `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`
- DOCX: `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa`
- Log: `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e`

Public copies under `public/research/global-ai-compliance-white-paper-2026/` also match the same SHA256 values.

## Boundary QA

- No sealed artifacts changed.
- No white paper content changed.
- No scores or scoring methodology changed.
- No platform comparison scores, vendor rankings, procurement recommendations, legal compliance proof, certification, regulator-approval claims, fake backlinks, fake search results, or answer-engine ranking claims introduced.
- MPLP remains framed only as one protocol path.

## Decision

BUILD AND VISIBILITY QA PASS.

