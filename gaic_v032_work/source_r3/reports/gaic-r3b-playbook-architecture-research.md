# GAIC-R3B Playbook Architecture Research

Task ID: GAIC-R3B-APPLIED-PLAYBOOK-MESH

## Repo Truth

- Repository: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Required baseline: `3386bbdd6e512d613e2edb1a525019f6ec40ece5`
- Local HEAD before R3B edits: `3386bbdd6e512d613e2edb1a525019f6ec40ece5`
- `git pull --ff-only`: already up to date
- Worktree before R3B edits: clean

## Existing Architecture

- `/playbooks/` existed as `src/pages/playbooks.astro`.
- The existing playbooks page was a static methods appendix driven by `playbookModules` in `src/data/site.ts`.
- No dynamic playbook detail route existed before R3B.
- Concepts use a dynamic registry route at `src/pages/concepts/[slug].astro` with data from `src/data/site.ts`.
- R3A entity pages already exist through the dynamic concept registry.
- The Agentic Lifecycle Governance Concept Core exists at `src/pages/concepts/agentic-lifecycle-governance/index.astro`.
- The GAIC white paper hub exists at `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`.
- `public/llms.txt` is the AI-readable index.
- Sitemap generation is handled by `@astrojs/sitemap` during `npm run build`.

## Implementation Decision

R3B reused the existing Astro + registry pattern:

- Added a typed `appliedPlaybooks` registry to `src/data/site.ts`.
- Added `getAppliedPlaybookBySlug()` for route lookup.
- Replaced `src/pages/playbooks.astro` with `src/pages/playbooks/index.astro` so the route remains `/playbooks/` while allowing nested dynamic routes.
- Added `src/pages/playbooks/[slug].astro` to generate the eight required playbook pages.

This avoids duplicating one-off page primitives and keeps metadata, JSON-LD, content structure, and internal links consistent.

## Pages Created Or Updated

- Updated: `/playbooks/`
- Created: `/playbooks/ai-agent-rollback-verification/`
- Created: `/playbooks/ai-coding-agent-auditability/`
- Created: `/playbooks/human-role-to-mas-responsibility/`
- Created: `/playbooks/openai-agent-governance/`
- Created: `/playbooks/anthropic-agent-governance/`
- Created: `/playbooks/deepseek-agent-governance/`
- Created: `/playbooks/kimi-agent-governance/`
- Created: `/playbooks/harness-engineering-for-ai-agents/`

## Link Strategy

- Each playbook links to the Agentic Lifecycle Governance Concept Core.
- Each playbook links to the GAIC white paper hub.
- Each playbook links to MRO, RCCS-M, ALCS, and at least two relevant R3A entity pages.
- Concept Core links to the playbooks index and selected applied pages.
- The GAIC white paper hub links to the playbooks index.
- R3A GAIC entity pages now link to the playbook mesh.
- `llms.txt` lists the playbook index and all R3B playbooks.

## Boundary

No sealed white paper artifact, public copied artifact, white paper source content, score, methodology, publication candidate manifest, or sealed report was edited during the architecture work.
