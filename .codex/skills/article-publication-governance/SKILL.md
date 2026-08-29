# Article Publication Governance Skill

Use this skill whenever work touches a public essay, article route, whitepaper-derived media article, in-article figure, OG/social asset, `/essays/` navigation, `llms.txt`, RSS-facing content, or publication audit record.

## Trigger Conditions

Invoke this skill for:

- Writing or rewriting a public article.
- Publishing a new essay to `src/content/essays/`.
- Modifying article style, diagrams, captions, OG images, or social cards.
- Fixing `/essays/` navigation, article routes, canonical metadata, legacy slugs, or content collection behavior.
- Auditing whether an article is ready for personal-site or LinkedIn publication.

## Non-Negotiable Baseline

Read these before editing:

1. `AGENTS.md`
2. `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`
3. Existing renderer files for the target surface, normally `src/pages/essays/[slug].astro` and `src/pages/essays/index.astro`
4. The source whitepaper or source article being adapted

## Workflow

### 1. Classify The Publication

Record the publication class before writing:

- Research commentary
- Personal essay
- Protocol/governance position essay
- Whitepaper summary
- Implementation guide

For research commentary, explicitly preserve:

- Source whitepaper ID and version
- Not a standard
- Not certification
- Not assurance opinion
- Not legal compliance proof
- Not regulator approval
- Not Big Four or professional-body endorsement

### 2. Preserve Site Voice And Structure

Match the existing JearonWong essay voice: category-defining, precise, unsentimental, evidence-conscious.

If adapting from a reference article, preserve its structure and rhetorical moves unless the user approves a new structure.

Do not create landing-page marketing copy when the user asked for an article.

### 3. Build Content As A Collection Item

Use `src/content/essays/<slug>.md` with complete frontmatter:

- `title`
- `titleLines` when the hero needs deliberate line breaks
- `subtitle`
- `description`
- `shareTitle`, `shareSubtitle`, `shareDescription`
- `shareImage`, `shareImageAlt`
- `publishDate`
- `cluster`
- `projectProof`
- `series` and `seriesOrder` when applicable
- `status`
- `tags`
- `summary` and/or `summaryLines`
- `ogImage`
- `images`
- `legacySlugs` when replacing an existing route
- `relatedIdeas`
- `relatedProjects`

### 4. Govern Visual Assets

Use SVG for in-article diagrams. Use PNG for OG/social distribution.

Every in-article diagram must satisfy:

- Same dark registry background family as the article/site when used as a dark visual.
- Outfit/Inter for display headings, Inter for body, JetBrains Mono for registry labels.
- No one-off heavy display weight that diverges from the page hero title rhythm.
- No overlapping text, no connector lines through nodes, no broken arrow targets.
- Accurate `<title>`, `<desc>`, `alt`, and caption.

Article emphasis blocks that visually act as diagrams must use shared site typography tokens. Do not hand-tune their weights independently.

### 5. Integrate Publication Surfaces

Before publication, update:

- `/essays/` section placement in `src/pages/essays/index.astro`
- `public/llms.txt` for flagship or governance-significant essays
- Related idea/project links
- Legacy slug route behavior when replacing a URL
- Audit record under `docs/audits/` for significant publication work

RSS and sitemap are generated, but must be verified through build output.

### 6. Avoid Cache-Induced False Passes

Do not run destructive cache cleanup during a live dev-server validation unless you restart the server afterward.

Use:

```sh
npm run build
```

Use this only intentionally:

```sh
npm run build:clean
```

After `build:clean` or `clean:astro`, restart the dev server and revalidate `/essays/` and the article route.

### 7. Required Verification Gates

Run:

```sh
npm run typecheck
npm run build
git diff --check
```

Verify:

- `/essays/` has rendered article entries.
- The new article appears in the intended section.
- Clicking the article entry navigates to the canonical route.
- Canonical route returns 200.
- Legacy route behavior is correct when applicable.
- OG image exists and is `1200x630`.
- The article has no horizontal overflow on desktop and mobile.
- Every figure renders at expected natural dimensions and has no visual defects.
- Browser console has no relevant app errors.

Use the Browser plugin first. If Browser attachment fails, record the failure and use Chrome/CDP or Computer Use fallback.

### 8. Publication Audit Record

For significant publication waves, create or update a file in `docs/audits/`.

The audit must include:

- Publication verdict
- Publication class and boundary language
- Governance baseline followed
- Route and navigation checks
- Asset manifest
- Boundary language checks
- Build/typecheck/browser evidence
- Screenshot or visual evidence paths when applicable
- Known residual risk

Do not mark `PASS` if the browser/click-path validation was not performed. Use `PASS_AFTER_CORRECTION`, `BLOCKED`, or `PASS_WITH_BROWSER_FALLBACK` as appropriate.

## Stop Conditions

Stop and report a blocker if:

- The article route is 404.
- `/essays/` renders empty logs.
- The article appears visually outside the site identity.
- A figure has text overlap, line穿模, or wrong arrow targets.
- Boundary language implies certification, assurance, legal compliance, regulator approval, or endorsement without evidence.
- The working tree contains unrelated asset churn that cannot be separated from the publication wave.
