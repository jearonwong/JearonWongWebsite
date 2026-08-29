# Repository Operating Rules for Codex

This repository is part of the Coregentis MPLP / Cognitive OS / SoloCrew / Validation Lab project family. Codex work here must preserve project boundaries and produce verifiable engineering evidence.

JearonWong.com is also a public personal site and research publishing system. Treat every article, figure, route, OG asset, and machine-readable surface as part of a governed publication artifact.

## Repository Layer

JearonWong.com owns articles, essays, white papers, brand narrative, publication pages, metadata, and social distribution assets. Public writing may be sharper thought leadership and claim conceptual positioning. Named critique is allowed only when fact-backed and not a personal attack. Essays, white papers, visible copy, metadata, and social metadata must preserve the boundary between opinion, protocol, evidence, and product, and must not drift into unsupported certification, legal-compliance, regulator-approval, vendor-ranking, official-standard, or endorsement claims.

## Repo Truth First

Before implementation, inspect repository truth:

- `git branch --show-current`
- `git status --short`
- `git rev-parse HEAD`
- `git rev-parse --verify origin/main || true`
- `git log --oneline -5`

Reuse existing assets before creating new files. Prefer updating an existing rule, skill, script, audit, or governance record over creating a duplicate document.

## Dialogue And Execution Harness

For every non-trivial conversation, Codex must first route the dialogue before routing the repository task. Use `.agents/skills/dialogue-execution-harness-governance/SKILL.md` when the request involves strategy, architecture judgment, product/protocol/public OSS boundaries, Codex prompt generation, Codex result review, correction, high-risk release/projection/migration/copyright work, or dynamic governance selection.

The default dialogue method is:

1. Classify the current conversation stage.
2. Give independent assistant judgment instead of only restating the user.
3. Use dialectical reasoning for important decisions and converge to a decision.
4. Provide a Codex prompt or action plan only when the task is ready for execution.

For repo work, this dialogue harness is layer 1. Layer 2 is the task-specific governance baseline selected from `.agents/skills/*/SKILL.md`, including repo truth, cross-repo boundary guard, site semantic/brand governance, publication surface governance, article publication governance, release gate discipline, schema intake discipline, and docs minimalism as applicable.

Do not treat a prompt, chat instruction, green gate, merged PR, clean worktree, or evidence artifact as authorization for a different mutation category. Release, registry, version, tag, seal, merge, projection, migration, copyright, public legal/compliance claim, and external publication actions require their own owner authorization when the relevant governance baseline says so.

## Required Entry Points For Article Publication

Before any non-trivial site, article, whitepaper, visual, or publishing change:

1. Read this file.
2. Read `.agents/skills/dialogue-execution-harness-governance/SKILL.md` when the task needs strategic judgment, governance routing, prompt generation, result review, correction, or high-risk boundary classification.
3. Read `.agents/skills/site-semantic-brand-governance/SKILL.md` when the task changes homepage positioning, site identity, core terms, page anchors, metadata, navigation, `llms.txt`, or cross-page visual identity.
4. Read `.agents/skills/site-publication-surface-governance/SKILL.md` when the task involves publishing, revising, routing, auditing, or distributing essays, white papers, research artifacts, OG/social assets, RSS/sitemap-facing content, or publication audit records.
5. Read `.agents/skills/article-publication-governance/SKILL.md` when the task involves publishing, revising, auditing, or routing an essay/article.
6. Read `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md` before declaring a publication ready.
7. Inspect the current route, content collection, SOT data file, and relevant page renderer before editing.

Do not rely only on prior chat context. Repo truth wins.

## Semantic And Brand Governance

The site has an internal semantic and brand governance center at `src/data/siteGovernance.ts`. This file is not a public content surface. It tells Codex how to discover linked pages, metadata, machine-readable files, and assets before changing site identity, homepage positioning, core definitions, page roles, or publication surfaces.

Before changing any sitewide theme, personal positioning, homepage thesis, core concept wording, navigation label, page anchor, visible metadata, JSON-LD, OG/Twitter copy, `public/llms.txt`, or entity graph wording, Codex must:

1. Classify the mutation using `src/data/siteGovernance.ts`.
2. Report the semantic impact surface and derived-SOT impact surface before editing.
3. Identify the primary source of truth.
4. Use `semanticDerivedSotRegistry` to discover reverse dependencies, including special concept pages, concepts map, evidence page, `llms.txt`, and entity graph JSON.
5. Update linked surfaces from the SOT instead of inventing parallel wording.
6. Verify that stale wording does not remain in visible copy, metadata, machine-readable surfaces, or public asset copy.

Changing only the local page requested by the user is insufficient when the SOT or impact rules show that other surfaces depend on the same semantic anchor.

If a needed wording does not exist in the SOT, stop and report the missing SOT. Do not patch the gap with fresh local phrasing unless the user explicitly authorizes a SOT change.

## Sitewide Source-Of-Truth Order

For semantic and brand work, use this order:

1. Current owner instruction.
2. `src/data/siteGovernance.ts` impact rules.
3. `src/data/siteGovernance.ts` `semanticDerivedSotRegistry`.
4. `src/data/site.ts` `siteSemanticBaseline`, `siteConfig`, `siteThesis`, and `pageRegistry`.
5. `src/data/definitions.ts`.
6. `src/data/whitepaperPublications.ts` for research and white paper artifacts.
7. `src/content/essays/*` frontmatter and body for essay-specific facts.
8. `public/llms.txt` and `public/entity/*.json` as machine-readable public summaries, not as sources for new claims.
9. Existing page renderers and shared components.

`public/llms.txt`, `public/entity/*.json`, OG/social copy, JSON-LD, page descriptions, and visible page summaries must not introduce claims that are absent from the upstream SOT.

## Codex Skill Discovery

- `.agents/skills/*/SKILL.md` is the repository-scoped Codex skill discovery path.
- `.codex/skills/*/SKILL.md` is retained as the project-internal ops source and compatibility copy.
- Keep mirrored skills same-named and content-equivalent; do not create divergent SOPs.

## Hard Boundaries

- Preserve protocol, runtime, product, validation, and publication boundaries.
- Normal task-authorized changes may modify files within the explicitly scoped repository layer, including low-risk code or docs that the current task asks for.
- Owner approval is required for high-risk or irreversible changes, including release mutation, registry mutation, public legal/compliance claims, package version changes, schema primitive intake, provider-send behavior, auth/payment/data-deletion flows, runtime authority changes, and merge/tag/seal actions.
- Forbidden without explicit owner approval:
  - `npm publish`
  - `npm deprecate`
  - npm dist-tag add/remove
  - PyPI upload
  - PyPI yank/delete
  - `git tag`
  - release seal creation
  - package version bump
  - schema object intake
  - external registry mutation
- Do not make public certification, regulator-approval, vendor-ranking, official-standard, or legal-compliance proof claims without owner approval.
- Do not over-block normal task-authorized development.

## MPLP Schema v2 Discipline

For MPLP `schemas/v2` work, use this order:

1. Invariant first.
2. Negative fixture second.
3. Object schema third.
4. Positive fixture fourth.
5. Validator and conformance gates last.

v1.0 module references to v2 objects must be pointer-only. Do not inline v2 object fields into v1 module schemas.

## Boundary Language

- No product, runtime, commercial, certification, legal-compliance, regulator-approval, or vendor-ranking language may leak into MPLP protocol core.
- No protocol authority may leak into product UI.
- Cognitive OS may bind to MPLP semantics but must not redefine MPLP protocol authority.
- Validation Lab may present deterministic evidence and adjudication but must not become a certification authority.
- SoloCrew UI must not expose internal protocol/runtime jargon as primary user-facing copy.

For research commentary:

- State the source whitepaper and version.
- Preserve the distinction between research synthesis, proposed conceptual model, and adopted professional standard.
- Do not imply audit-standard status, assurance opinion, certification, legal compliance proof, regulator approval, insurer acceptance, Big Four endorsement, or professional-body endorsement unless the source explicitly provides it.
- Big Four and regulator references are market context only unless independently evidenced as endorsement.

## Site Identity

The site uses the Research Ledger visual language:

- Dark research banners carry the top navigation and page orientation; light bodies carry the reading ledger.
- Ruled records, a sticky section rail, and restrained metadata replace card-heavy dashboard composition.
- Registry annotations use `KEY : VALUE` with `var(--font-mono)`.
- Core typography lives in `src/styles/global.css` and `src/styles/prototypes.css`: Outfit for display, Inter for body, and JetBrains Mono for labels.
- Page-level hero titles and ledger records must reuse the shared B-direction tokens; do not introduce page-specific hero scales, rounded cards, gradients, or competing navigation systems.

If an in-article emphasis block, diagram title, or SVG heading visually behaves like a title, it must use the same display family and compatible weight/line-height rhythm as the site hero title system. Visual similarity is not enough; the source must show the shared token or an explicitly documented equivalent.

## Article Voice

Public essays should be cold, sharp, factual, and category-defining. Avoid SEO-ish, promotional, or generic thought-leadership prose.

When the user provides a reference article or says to preserve the original writing style, match the reference article's narrative structure, pacing, and visual rhetoric closely. Do not replace it with a broad rewrite.

## Visual And Asset Rules

In-article diagrams and tables default to SVG. PNG is reserved for OG/social distribution or explicit media-export needs.

Cover images are social-only by default. Do not embed a cover image inside the local article body unless the user explicitly asks for it.

Every figure must pass visual governance before publication:

- No text-line overlap.
- No connector-line crossing through labels, cards, or nodes.
- Arrows must point to the intended target.
- Figure title typography must match the site/essay visual system.
- Figure captions and alt text must match the actual diagram semantics.
- SVG source must use the site's font family convention: Outfit/Inter for display, Inter for body, JetBrains Mono for registry labels.

Do not stage or treat unrelated `public/social/*` files as part of the article asset set unless the user explicitly includes them in the current publication wave.

## Route And Publication Surfaces

An essay publication is incomplete unless all required surfaces are aligned:

- `src/content/essays/<slug>.md` frontmatter and body.
- `/essays/<slug>/` canonical route.
- `/essays/` visible navigation entry.
- Legacy routes and noindex behavior when a slug changes.
- OG/Twitter image and metadata.
- JSON-LD item list inclusion through the content collection.
- RSS inclusion through the collection.
- `public/llms.txt` when the article is a flagship or governance-significant essay.
- Audit record under `docs/audits/` for significant publication waves.

If `/essays/` renders empty entries or the article route returns 404, publication is blocked.

White paper and research publication work is incomplete unless all required surfaces are aligned:

- `src/data/whitepaperPublications.ts` record.
- `/research/` visible listing.
- White paper canonical route.
- Public HTML/PDF/manifest/checksum artifact references.
- Citation identity, document ID, version, publication status, and boundary notes.
- Related concepts, definitions, article adaptations, and project references when the paper changes their semantics.
- OG/social metadata and assets when used for public distribution.
- `public/llms.txt`.
- Audit record under `docs/audits/` for significant publication waves.

White paper publication copy must use the white paper record or the public artifact as SOT. Do not rewrite or summarize from memory when the artifact record already contains the needed title, version, boundary, citation, or checksum facts.

## Build And Cache Governance

Do not attach destructive Astro cache cleanup to the default `build` lifecycle. A long-running dev server can lose its content index if `node_modules/.astro` is deleted while it is running.

Use explicit cleanup only when needed:

```sh
npm run clean:astro
npm run build:clean
```

After any explicit content-cache cleanup, restart the dev server and revalidate the live routes.

## Standard Subagent Lanes

Use `.codex/agents/*.toml` reviewers only when the parent task explicitly requests them. Relevant lanes include `package_surface_auditor`, `release_governance_reviewer`, `protocol_schema_reviewer`, `product_boundary_reviewer`, `runtime_binding_reviewer`, and `publication_claim_reviewer`.

Default lane policy: use no subagent for trivial docs typos, one subagent for isolated repo-specific review, and multiple subagents for release, schema, runtime, publication, or cross-repo tasks. JearonWong.com defaults to `publication_claim_reviewer`, with `product_boundary_reviewer` as the secondary lane when the task touches product positioning, evidence claims, essays, white papers, or social metadata.

Subagents run review lanes only unless edits are explicitly authorized. They inherit sandbox and approval boundaries, must not publish, upload, tag, seal, bump versions, mutate registries, intake schema primitives, merge PRs, or change public claims, and must return P0/P1/P2 findings to the parent with files inspected and commands run.

## Required Verification

Before declaring publication ready, run the smallest complete verification set:

```sh
npm run typecheck
npm run build
git diff --check
```

Then verify live behavior:

- `/essays/` contains rendered entries, not empty registry logs.
- The new article appears in the intended section.
- Clicking the article entry reaches the canonical route.
- The canonical route returns HTTP 200.
- The OG image is present and `1200x630`.
- Desktop and mobile views have no horizontal overflow.
- Article figures render without overlap, clipping, or line-through-label defects.

Use the in-app Browser plugin first when available. If it fails, record the failure and use a local browser fallback such as Chrome/CDP or Computer Use. Do not claim visual pass from code inspection alone.

## Completion Discipline

Do not declare completion without reporting:

- files changed
- commands run
- pass/fail evidence
- final git status
- remaining risk

If a verification command is unavailable or inappropriate, state why instead of silently skipping it.

Never present a route, asset, figure, or governance state as ready unless it was verified in the current working tree.
