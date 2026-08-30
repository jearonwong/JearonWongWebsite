# Article Publication Governance Baseline

**Scope:** Future public articles, essays, whitepaper-derived media posts, diagrams, OG/social assets, and `/essays/` navigation on the JearonWong site.

**Status:** Mandatory for article publication work.

## 1. Publication Authority

An article is not publishable until the source, route, assets, machine-readable surfaces, and live browser behavior are all aligned.

For whitepaper-derived articles, the article must identify the source whitepaper and preserve its conceptual boundaries. Research commentary must not be described as an adopted standard, certification, assurance result, compliance proof, regulator-approved method, insurer-approved method, or Big Four-endorsed methodology.

## 2. Site Style Baseline

Use the Research Ledger B visual system. The earlier Architectural Registry tokens and layout are legacy references and must not be reintroduced on production routes.

| Surface | Required Pattern |
|---|---|
| Hero | Dark research banner, shared B-direction hero tokens, restrained registry annotation |
| Body | Light reading ledger, ruled records, clear section hierarchy |
| Metadata | `KEY : VALUE`, JetBrains Mono, uppercase |
| Title typography | Shared `--type-registry-hero-title-*` tokens |
| Accent | `--color-action` only for links, selected state, focus, and other functional interaction |
| Structure | Neutral `--color-rule*` and `--color-meta` tokens for borders, labels, and record hierarchy |
| Layout | No card-in-card drift, unrelated gradients, rounded marketing panels, or competing navigation |

The site-wide shell now follows the **Research Ledger** contract:

- A dark research banner carries one top navigation and the current page orientation.
- The light body presents research, essays, projects, and evidence as ruled ledger records with a sticky section index.
- Mobile collapses the banner to one column and turns the section index into a horizontal reading rail; navigation uses the same registry in a compact drawer.
- Shared ledger tokens, typography, spacing, and accent behavior are controlled by `src/styles/global.css`, `src/styles/prototypes.css`, and `src/components/SiteHeader.astro`.
- Run `npm run audit:visual` after any sitewide UI, navigation, hero, or publication-renderer change.

Any article-specific visual module that behaves like a title block must reuse the shared title token rather than defining a one-off display weight.

## 3. Article Writing Baseline

Public essays should be:

- Category-defining
- Evidence-conscious
- Precise about scope
- Restrained in claims
- Close to the user's approved reference structure when a reference is provided

An essay may preserve a historical design phase, an author hypothesis, or an engineering conclusion that predates the current MPLP repository state. The publication workflow must not rewrite that material solely to mirror the latest project status. When a current status claim is intentionally made, it must be labeled and sourced separately from the author's conceptual or field argument.

Avoid:

- Generic AI thought-leadership language
- Uncited industry claims
- Promotional brand framing
- Attacking audit firms or regulators when a structural gap framing is more accurate
- Diluting the user's original argument through broad paraphrase

## 4. Asset Baseline

| Asset Type | Rule |
|---|---|
| In-article diagrams | SVG only by default |
| OG/social image | PNG `1200x630` plus editable source when available |
| Cover image | Social-only unless explicitly requested in the article body |
| Figure typography | Outfit/Inter display, Inter body, JetBrains Mono labels |
| Figure geometry | No overlap, no line穿模, no misdirected arrows |
| Figure metadata | SVG `<title>` and `<desc>` plus article `alt` and caption must agree |

Figures must be visually inspected after rendering in the article page, not only by reading the SVG source.

## 5. Route And Surface Baseline

Every new article must satisfy:

| Surface | Required Check |
|---|---|
| Content file | `src/content/essays/<slug>.md` passes collection schema |
| Canonical route | `/essays/<slug>/` returns 200 |
| Index route | `/essays/` displays a visible article entry |
| Click path | User can click from `/essays/` into the canonical route |
| Legacy route | Old slug exists/noindexed if replacing a published slug |
| OG/Twitter | Correct image, title, description, canonical URL |
| RSS | Generated through content collection |
| Sitemap | Generated through build |
| `llms.txt` | Updated for flagship or governance-significant articles; every absolute URL uses Markdown link syntax (`[label](https://...)`) so crawlers and answer engines can parse the public route graph |
| Audit doc | Required for significant publication waves |

If `/essays/` displays section headings but empty logs, the publication is blocked.

## 5A. Information Architecture Baseline

Publication must register the article in the site's information architecture before the draft is treated as publishable. The source and URL contract is fixed:

| Content | Source | Canonical route |
|---|---|---|
| Essay | `src/content/essays/<slug>.md` | `/essays/<slug>/` |
| White paper | `src/data/whitepaperPublications.ts` and `public/research/` | `/research/<slug>/` |
| Concept | `src/data/site.ts` | `/concepts/<slug>/` |
| Project | `src/data/site.ts` | `/projects/<slug>/` |

Essay frontmatter must declare `contentRole`, `publicationClass`, `editorialTrack`, `canonicalRoute`, `canonicalParent`, `primaryAudience`, `nextSteps` (at least two), and `maxClickDepth`. `track` may remain for compatibility, but must equal `editorialTrack` when both exist. Editorial classes are metadata; they must not create `/essays/<track>/` URL trees.

The governed route thresholds are:

- primary hubs are reachable from `/` in one click;
- essay, research, project, and concept canonical records are reachable in at most three clicks;
- public research artifacts may be four clicks deep only when reachable from their research hub;
- every published canonical record has at least two distinct inbound route contexts;
- no published canonical route may be orphaned or footer-only;
- an article's two declared next steps must render on its canonical page;
- desktop and mobile navigation must use the same navigation registry.

The internal registries in `src/data/siteGovernance.ts` are the source of truth for route roles, canonical parents, navigation groups, and reader journeys. The built HTML graph is the source for reachability and click-depth checks. Sitemap, RSS, `llms.txt`, and entity JSON are not navigation evidence.

Run the combined gate with:

```sh
npm run audit:all
```

## 6. Cache And Dev Server Baseline

Default build must not delete Astro content caches.

Allowed:

```sh
npm run build
```

Explicit maintenance only:

```sh
npm run clean:astro
npm run build:clean
```

After explicit cache cleanup, restart the dev server before visual validation:

```sh
npm run dev -- --host 127.0.0.1 --port 4323
```

Then recheck `/essays/` and the article route. A build pass does not prove the live dev server route is healthy.

## 7. Mandatory Verification Checklist

Run:

```sh
npm run typecheck
npm run build
git diff --check
```

Check live routes:

```sh
curl -s -o /tmp/article.html -w "%{http_code}\n" http://127.0.0.1:4323/essays/<slug>/
curl -s http://127.0.0.1:4323/essays/ | rg "<article|<slug>|Article Title"
```

Check assets:

```sh
sips -g pixelWidth -g pixelHeight public/social/<og-image>.png
```

Required browser checks:

- Page identity
- Not blank
- No framework error overlay
- Console health
- Desktop screenshot
- Mobile screenshot
- Article figure visual pass
- `/essays/` to article click path

Browser plugin is preferred. If unavailable or failed, record the fallback and use local Chrome/CDP or Computer Use.

## 8. Audit Verdict Vocabulary

Use explicit verdicts:

| Verdict | Meaning |
|---|---|
| `PASS` | All gates passed without correction |
| `PASS_AFTER_CORRECTION` | Issues were found and fixed in the same wave |
| `PASS_WITH_BROWSER_FALLBACK` | Browser plugin failed, but equivalent local browser evidence was captured |
| `BLOCKED` | Required route, asset, style, or boundary gate failed |
| `NOT_PUBLISHABLE` | Claims, source grounding, or boundary language is unsafe |

## 9. Minimum Final Report

A publication close-out must include:

- Files changed
- Route checked
- Click path result
- OG result
- Build/typecheck result
- Browser validation method
- Any residual risk

Do not claim "ready" unless the current live route was verified after the last relevant code or cache change.

## 10. Workflow Operating Model

Article work runs as seven bounded workflows (`W0` through `W6`). Each workflow has one owner, a declared source of truth, a concrete output, and a stop condition. A later workflow may report a defect, but it must not silently repair a missing decision from an earlier workflow.

### Skill And Specification Binding

Every workflow must declare the Skill files it uses and the specifications that constrain its decisions. The minimum entry order for an article mutation is:

1. `AGENTS.md`
2. `dialogue-execution-harness-governance/SKILL.md`
3. `repo-truth-first-audit/SKILL.md`
4. `cross-repo-boundary-guard/SKILL.md`
5. `site-semantic-brand-governance/SKILL.md`
6. `site-publication-surface-governance/SKILL.md`
7. `article-publication-governance/SKILL.md`
8. This baseline: `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`

The selected Skill files are execution instructions, not public article content. Resolve them from `.agents/skills/<skill-name>/SKILL.md`; the mirrored `.codex/skills/<skill-name>/SKILL.md` path is compatibility-only and must remain equivalent. A workflow stops when a required Skill is missing, unread, or conflicts with the current owner instruction. The controlling specifications are the repository `AGENTS.md`, the declared source of truth, the site semantic registry, this publication baseline, and any source whitepaper or project record named by the article.

| Workflow | Purpose | Required skills and specifications | Required output | Stop condition |
|---|---|---|---|---|
| `W0 IA + GOVERNANCE INTAKE` | Choose the publication class, editorial track, canonical parent, route, audience, required navigation surfaces, and next actions before writing. | `dialogue-execution-harness-governance`, `repo-truth-first-audit`, `cross-repo-boundary-guard`, `site-semantic-brand-governance`; `AGENTS.md`, `src/data/siteGovernance.ts`, Information Architecture Baseline. | IA control record, route map, navigation impact, journey target, max-depth and orphan policy. | Missing canonical route, source authority, parent, audience, or owner decision. |
| `W1 POSITIONING + INPUT` | Fix the article's reader, category, thesis, source material, claim class, and intended next action. | `dialogue-execution-harness-governance`, `repo-truth-first-audit`, `cross-repo-boundary-guard`; `AGENTS.md`, `src/data/siteGovernance.ts`, site SOT order. | Content brief, source-of-truth pointer, claim ledger, boundary notes. | No agreed thesis, source, claim boundary, or repository role. |
| `W2 WRITING + VOICE` | Turn the brief into a first-person or declared-author narrative grounded in actual engineering work. Separate observed facts, interpretation, and proposal. Remove template phrasing, repeated disclaimers, and unsupported market claims. | `article-publication-governance`, `docs-minimalism-governance`; Article Writing Baseline, source whitepaper/project record when applicable, approved author voice. | Canonical draft, voice pass, updated claim ledger. | A paragraph cannot be traced to evidence, an approved argument, or a clearly marked proposal. |
| `W3 VISUAL SYSTEM` | Choose the visual role before drawing: argument map, lifecycle, comparison, evidence graph, or timeline. Reuse the Research Ledger B geometry, tokens, fonts, and functional accent rules. | `site-semantic-brand-governance`, `site-publication-surface-governance`, `article-publication-governance`; Site Style Baseline and Asset Baseline. | In-article SVG, `<title>`/`<desc>`, alt text, caption, and rendered screenshot. | The figure needs a new visual language, contains overlap, or puts core reasoning in an unstyled code block. |
| `W4 PUBLICATION SURFACES` | Route the article through the canonical page, index entry, related ideas/projects, OG/Twitter asset, RSS, sitemap, and any required `llms.txt` or entity-graph updates. | `site-publication-surface-governance`, `site-semantic-brand-governance`, `article-publication-governance`; Route and Surface Baseline and the semantic derived-SOT registry. | Surface inventory, route map, asset manifest, derived-surface review. | Any required surface is missing, stale, or would require wording not present in the upstream source of truth. |
| `W5 SEO + GEO` | Make the article legible to search engines and answer engines without turning it into keyword copy. Keep titles, descriptions, headings, JSON-LD, internal links, machine-readable summaries, names, versions, and boundaries consistent. | `site-semantic-brand-governance`, `site-publication-surface-governance`, `article-publication-governance`; SEO/GEO rules in this baseline, `src/data/siteGovernance.ts`, `public/llms.txt`, RSS and sitemap contracts. | SEO/GEO checklist and machine-readable consistency check. | Metadata introduces a stronger claim than the article or implies guaranteed indexing, citation, certification, or endorsement. |
| `W6 IA + VERIFY + CLOSEOUT` | Verify classification, navigation exposure, route reachability, click depth, orphan status, publication surfaces, and live behavior as a user, crawler, and maintainer would encounter it. | `release-gate-and-seal-discipline`, `site-publication-surface-governance`, `article-publication-governance`; `audit:all`, Information Architecture Baseline, Mandatory Verification Checklist, Audit Verdict Vocabulary, and Minimum Final Report. | IA evidence, publication evidence bundle, verdict, final git status, and remaining-risk note. | IA, typecheck, build, route, click path, asset, responsive, figure, or console checks fail. |

The normal sequence is `W0 -> W1 -> W2 -> W3 + W4 -> W5 -> W6`. `W3` and `W4` can proceed in parallel only after `W2` has fixed the canonical title, thesis, and terminology. `W5` starts after the public surfaces are known; `W6` is the only workflow that can issue a publication verdict.

The executable publication entrypoint and its diagnostic controls are:

```sh
npm run publication:release   # single local write-and-verify entrypoint
npm run publication:release -- --check  # local no-write gate
npm run publication:release -- --ci     # CI gate; sync then require a clean generated surface
npm run publication:release -- --vercel # Vercel build-time gate; no repository writes
npm run publication:plan       # read-only impact plan
npm run publication:sync       # deterministic manifest and llms.txt projection
npm run publication:verify     # generated-surface drift check
npm run publication:closeout   # verification receipt written to dist/
```

`npm run publication:release` is the only supported repository entrypoint for preparing or validating a publication wave. It runs `publication:plan`, optionally runs `publication:sync`, then runs `publication:verify`, `audit:all`, the media gate, a static-preview route matrix, mandatory desktop/mobile browser checks, and `publication:closeout`. The underlying commands remain available for diagnostics and troubleshooting; they are not a separate publication path. CI calls the same entrypoint with `--ci` after installing Chromium, and `vercel.json` calls it with `--vercel` before Vercel can emit a deployment build.

`governance/site-publication-control-record.json` stores author-approved routing, semantic mode, navigation exposure, and publication decisions. `public/generated/publication-manifest.json` and the marked publication block in `public/llms.txt` are generated surfaces; manual edits fail `publication:verify`. The synchronizer does not rewrite article bodies, white-paper artifacts, authored figures, entity-graph authority decisions, or external publication state. W0-W2 writing and approval remain explicit human checkpoints; authored figures and external social distribution remain manual-review or owner-authorized surfaces. The Vercel build gate blocks a deployment build when repository checks fail, while the post-deploy verifier confirms the live URL and commit after deployment.

Every workflow uses the same control record. It can remain a working note or be attached to the publication audit; it is not a reason to create a new governance document for each article.

```yaml
workflow_id: W1_POSITIONING_INPUT
owner: author
publication_class: essay
source_of_truth: src/content/essays/<slug>.md
content_role: essay
editorial_track: lifecycle | foundation | protocol | research | general
canonical_route: /essays/<slug>/
canonical_parent: /essays/
primary_audience: Builder | Architect | Governance | Decision-maker
entry_routes: [/essays/, contextual hub]
required_next_steps: [route-a, route-b]
max_click_depth: 3
orphan_policy: blocked
required_skills: [dialogue-execution-harness-governance, repo-truth-first-audit]
specifications: [AGENTS.md, docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md]
allowed_surfaces: [article, figure, index, metadata, machine-readable summaries]
mutation: describe the single bounded change
required_evidence: [brief, claim-ledger, boundary-notes]
skill_evidence: [skill files read, repo-truth output, review notes]
stop_conditions: [missing-thesis, missing-source, unsupported-claim]
acceptance: named reviewer confirms the output and its boundary
reopen_condition: source, thesis, claim class, or canonical terminology changes
```

SEO and GEO are discoverability disciplines, not authority substitutes. A well-formed page can be easier for a crawler or answer engine to understand; it cannot guarantee indexing, ranking, quotation, or subscription. The same evidence and boundary rules apply to social cards, `llms.txt`, JSON-LD, and related pages.

The repository enforces the repeatable parts of this workflow through `npm run publication:release`. In addition to build, publication, and IA checks, the closeout now runs `audit:editorial`, which checks the controlled audience fields, the first four homepage Lifecycle reading entries and their link to the full essays ledger, the AI Agent Governance bridge/canonical hierarchy, flagship `llms.txt` summaries, and rendered title/description length. These checks preserve author-led historical arguments while preventing routing and machine-readable surface drift. The same single entrypoint runs in `.github/workflows/site-governance.yml` for pushes to `main` and pull requests, and in the Vercel build command; CI and Vercel are verification/build gates, not external publication or release authorization.
