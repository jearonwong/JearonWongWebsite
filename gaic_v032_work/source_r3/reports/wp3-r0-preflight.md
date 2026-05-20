# WP3-R0 Preflight

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Date:** 2026-05-20  
**Repository:** `https://github.com/jearonwong/jearonwongwebsite.git`

## Repo Truth

| Check | Result |
| --- | --- |
| `git remote -v` | `origin https://github.com/jearonwong/jearonwongwebsite.git` for fetch and push |
| `git branch --show-current` | `main` |
| `git rev-parse HEAD` before pull | `5536c8f6117c55b4b933b813c8142c181482e7a2` |
| `git ls-remote origin HEAD` | `5536c8f6117c55b4b933b813c8142c181482e7a2 HEAD` |
| `git pull --ff-only` | Already up to date |
| HEAD after pull | `5536c8f6117c55b4b933b813c8142c181482e7a2` |

## Worktree Status Before R0 Edits

`git status --short` showed untracked `public/social/*` assets before this task. They were pre-existing and outside the WP3-R0 scope:

- `public/social/agentic-lifecycle-governance-poster-full.png`
- `public/social/agentic-lifecycle-governance-poster-full.svg`
- `public/social/agentic-lifecycle-governance-poster-medium.png`
- `public/social/agentic-lifecycle-governance-poster-medium.svg`
- `public/social/agentic-lifecycle-governance-poster-x.png`
- `public/social/agentic-lifecycle-governance-poster-x.svg`
- `public/social/agentic-lifecycle-governance-poster.png`
- `public/social/agentic-lifecycle-governance-poster.svg`
- `public/social/gaic-white-paper-2026-model-thread-card.png`
- `public/social/gaic-white-paper-2026-model-thread-card.svg`
- `public/social/gaic-white-paper-2026-mro-thread-card.png`
- `public/social/gaic-white-paper-2026-mro-thread-card.svg`
- `public/social/gaic-white-paper-2026-scorecard-thread-card.png`
- `public/social/gaic-white-paper-2026-scorecard-thread-card.svg`
- `public/social/gaic-white-paper-2026-thread-card.png`
- `public/social/gaic-white-paper-2026-thread-card.svg`
- `public/social/spotify-gaic-white-paper-2026-cover-v2.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v2.svg`
- `public/social/spotify-gaic-white-paper-2026-cover-v3-thumb.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v3.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v3.svg`
- `public/social/spotify-gaic-white-paper-2026-cover-v4-thumb.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v4.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v4.svg`
- `public/social/spotify-gaic-white-paper-2026-cover-v5.svg`
- `public/social/spotify-gaic-white-paper-2026-cover-v6-thumb.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v6.png`
- `public/social/spotify-gaic-white-paper-2026-cover-v6.svg`
- `public/social/spotify-gaic-white-paper-2026-cover.png`
- `public/social/spotify-gaic-white-paper-2026-cover.svg`

These files must not be staged as part of WP3-R0.

## Inspected Internal Files

Core source and governance:

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/reports/known-issues.md`
- `gaic_v032_work/source_r3/reports/reconstruction-notes.md`

R8F and publication QA:

- `gaic_v032_work/source_r3/reports/whitepaper-r8f-preflight.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-build-and-validation.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-final-qa.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-production-page-count-qa.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8f-production-url-availability-qa.md`

Whitepaper series publication standard:

- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`
- `gaic_v032_work/source_r3/design/gaic-whitepaper-vi-system.md`
- `gaic_v032_work/source_r3/design/gaic-html-publication-style.md`

GAIC publication source/artifact system:

- `gaic_v032_work/source_r3/scripts/generate_r3_phase1d13f_html_publication.py`
- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- `gaic_v032_work/source_r3/out/publication_candidate/publication-candidate-manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/manifest.json`
- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html`
- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf`

AIAAWP source/artifact system:

- `gaic_v032_work/source_r3/wp2_r2_draft/WP2-R2-SOURCE-DRAFT-MASTER.md`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/AIAAWP-2026-v0.1-R4-CANDIDATE.md`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-aiaawp-r4d-publication-candidate.py`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-wp2-r4-candidate-html.mjs`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/metadata/wp2-r4-metadata-plan.md`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/metadata/wp2-r4-jsonld-plan.json`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/manifest.json`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/checksums.sha256`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json`
- `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256`

Sitewide semantic mapping surfaces inspected:

- `src/pages/evidence.astro`
- `src/pages/concepts/map/index.astro`
- `src/pages/concepts/index.astro`
- `src/pages/definitions.astro`
- `src/pages/governance/index.astro`
- `src/pages/governance/[slug].astro`
- `src/pages/playbooks/index.astro`
- `src/pages/playbooks/[slug].astro`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro`
- `src/data/definitions.ts`
- `src/data/governanceMappings.ts`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- `public/llms.txt`
- `astro.config.mjs`
- built sitemap outputs in `dist/`

## Scope Confirmation

- WP3-R0 is planning-only.
- No public WP3 route is authorized in this wave.
- No public WP3 HTML, PDF, DOCX, manifest, checksum, image, or social asset is authorized in this wave.
- Existing GAIC and AIAAWP public assets must not change.
- Homepage, `llms.txt`, entity graph, sitemap, public research artifacts, and public DOCX status must not change in this wave.
- WP3 must not be claimed as drafted, published, final, sealed, insurer accepted, certified, or released.
- Publication standard reuse is mandatory.

## R0 Confirmation

This preflight confirms that WP3-R0 starts from latest `origin/main`, keeps existing untracked `public/social/*` outside scope, and proceeds only with internal planning reports plus bounded governance status updates.
