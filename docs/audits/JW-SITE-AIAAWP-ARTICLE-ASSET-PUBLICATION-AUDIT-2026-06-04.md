# JW-SITE-AIAAWP-ARTICLE-ASSET-PUBLICATION-AUDIT-2026-06-04

**Article:** From Static Logs to Dynamic Evidence Chains: The Auditability Era of Agentic AI
**Route:** `/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/`
**Legacy routes:** `/essays/when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai/`, `/essays/the-audit-object-for-agentic-ai-has-changed/`
**Date:** 2026-06-04
**Scope:** Article page, `/essays/` navigation, social/OG assets, in-article SVG figures, machine-readable publishing surfaces, and publication boundary language.

## Publication Verdict

```
VERDICT: PASS_AFTER_CORRECTION
PUBLICATION_CLASS: RESEARCH_COMMENTARY
SOURCE_WHITEPAPER: AIAAWP-2026-v0.1
NOT_A_STANDARD: TRUE
NOT_CERTIFICATION: TRUE
NOT_ASSURANCE_OPINION: TRUE
NOT_REGULATOR_APPROVAL: TRUE
NOT_BIG_FOUR_ENDORSEMENT: TRUE
```

The article is publishable as research commentary on AIAAWP-2026-v0.1. It must not be presented as an audit standard, assurance opinion, certification, legal compliance proof, regulator-approved method, or endorsement by any audit firm, professional body, standards body, regulator, insurer, or Big Four firm.

## Governance Baseline

| Baseline | Result |
|---|---|
| Repo-local agent governance | Established after correction: `AGENTS.md`, `Agent.md`, `.agents/skills/article-publication-governance/SKILL.md`, and `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`. |
| Site publishing baseline | Existing Astro content collection and essay renderer: `src/content/essays/`, `src/pages/essays/[slug].astro`, `src/pages/essays/index.astro`. |
| Visual baseline | Existing registry/logbook system: `RegistryPageHero`, `registry-annotation`, `registry-log`, `log-entry`, `zone-a` dark hero, `zone-b` light article body. |
| Prior site audit baseline | `docs/audits/JW-SITE-v0.4-FULL-SITE-AUDIT-REAL-01.md`: essays use registry log rhythm; per-essay OG is supported; visual browser evidence is required for publication claims. |
| Asset rule | In-article diagrams are SVG. PNG is used for social/OG distribution. |

## Corrections Applied

| Finding | Correction | Evidence |
|---|---|---|
| Figure 2 right-side label overlapped the vertical value line | Replaced the right vertical axis with a bottom-right horizontal evidential-value indicator | `/tmp/aiaawp-article-four-evidence-tiers.png`, `/tmp/jw-aiaawp-figure2-element.png` |
| Figure 3 connector lines crossed through nodes and center object | Removed crossing connectors and changed the diagram to a component map | `/tmp/aiaawp-article-agentic-audit-object.png`, `/tmp/jw-aiaawp-figure3-element.png` |
| Figure 3 metadata still implied hub-and-spoke connection | Updated SVG `<desc>` and article alt text to "component map" language | `public/figures/aiaawp-article-agentic-audit-object.svg`, essay frontmatter/body |
| Figure 4 right-side arrow pointed to the wrong visual target | Replaced the broken turn with a direct vertical arrow from Tool Action to Handoff | `/tmp/aiaawp-article-lifecycle-walkthrough.png`, `/tmp/jw-aiaawp-figure4-element.png` |
| Figure display heading typography was inconsistent across article visuals | Standardized article SVG display headings to the same Outfit/Inter family and 760 title weight rhythm; registry mono labels remain high-weight markers | `public/figures/aiaawp-article-*.svg` |
| Opening thesis and closing threshold blocks used different structures | Closing threshold now reuses `essay-concept-anchor essay-concept-anchor--thesis` | Article page desktop and mobile screenshots |
| `/essays/` had no visible entry for the new article | Added `Auditability / Assurance Research` section using the existing registry-log pattern | `/tmp/jw-aiaawp-index-auditability-section.png` |
| Machine-readable essay surface omitted the article | Added the article to `public/llms.txt` under `Flagship Essays` with boundary wording | `public/llms.txt` |
| Astro content cache cleanup was attached to the default build lifecycle and could invalidate a live dev server content index | Removed default `prebuild`; added explicit `clean:astro` and `build:clean` scripts so destructive cache cleanup is an intentional publication-maintenance action | `package.json`; live `/essays/` route revalidated after dev server restart |
| Article hero title and in-body thesis block used separate display weight and spacing rules | Added shared `--type-registry-hero-title-*` tokens and bound both the page hero and the thesis block statement to the same title system | `src/styles/global.css`, `src/components/RegistryPageHero.astro`, `src/pages/essays/[slug].astro` |
| Article publication constraints were not encoded as repo-level agent instructions | Added repo-level agent contract, publication skill, and mandatory baseline document | `AGENTS.md`, `Agent.md`, `.agents/skills/article-publication-governance/SKILL.md`, `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md` |
| Formal article title needed stronger category-defining language | Renamed the English-only title, canonical slug, share metadata, OG source, and OG PNG to "From Static Logs to Dynamic Evidence Chains: The Auditability Era of Agentic AI"; retained the old slug as a noindex legacy route | Essay frontmatter, `/essays/` index, `public/llms.txt`, OG assets |
| Article title hierarchy needed to make "The Auditability Era of Agentic AI" the main title while preserving "From Static Logs to Dynamic Evidence Chains:" as the smaller framing line | Added explicit `data-title-role` markers to `RegistryPageHero`, introduced shared framing-title tokens, verified desktop/mobile computed font sizes, and regenerated the OG image with the same hierarchy | `src/components/RegistryPageHero.astro`, `src/styles/global.css`, `public/social/og-static-logs-dynamic-evidence-chains.svg`, `/tmp/jw-aiaawp-title-hierarchy-check/article-title-desktop.png`, `/tmp/jw-aiaawp-title-hierarchy-check/article-title-mobile.png` |
| New "dynamic evidence chains" title needed explicit body grounding | Added an English paragraph defining dynamic evidence chains as lifecycle evidence through changing roles, authority, tool invocation, delegation, exceptions, acceptance, and dispute states | Essay body |
| Closing needed a sharper audit judgment before professional invitation | Added the judgment: "The next audit failure in agentic AI will not be caused by the absence of logs. It will be caused by mistaking logs for evidence." | Essay body |

## Route And Navigation

| Surface | Required State | Status |
|---|---|---|
| Article detail route | `/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/` renders | PASS |
| Legacy routes | `/essays/when-logs-are-no-longer-enough-rethinking-audit-for-agentic-ai/` and `/essays/the-audit-object-for-agentic-ai-has-changed/` are generated through `legacySlugs` and noindexed by the shared essay renderer | PASS |
| `/essays/` index | Article appears under `Auditability / Assurance Research` | PASS |
| Index click path | `/essays/` article link opens the canonical article route | PASS |
| Live dev server route state | `/essays/` contains rendered article entries after cache cleanup and restart | PASS_AFTER_RUNTIME_CORRECTION |
| ItemList JSON-LD | Article is included through `getCollection("essays")` on `/essays/` | PASS |
| RSS | Included automatically through `src/pages/rss.xml.ts` because it reads the essay collection | PASS |
| Sitemap | Included in generated `dist/sitemap-0.xml` through Astro sitemap output | PASS |
| `llms.txt` | Added explicit machine-readable article entry | PASS |

## Asset Manifest

### Social / OG

| Asset | Purpose | Required Format | Status |
|---|---|---|---|
| `/social/og-static-logs-dynamic-evidence-chains.png` | Open Graph and Twitter large image | PNG, 1200x630 | PASS |
| `/social/og-static-logs-dynamic-evidence-chains.svg` | Editable OG source | SVG source | PASS |

Verified with `sips -g pixelWidth -g pixelHeight public/social/og-static-logs-dynamic-evidence-chains.png`: `1200x630`.

Article meta verification:

```
og:image: https://www.jearonwong.com/social/og-static-logs-dynamic-evidence-chains.png
twitter:image: https://www.jearonwong.com/social/og-static-logs-dynamic-evidence-chains.png
canonical: https://www.jearonwong.com/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/
```

### In-Article Figures

| Figure | Asset | Format | Render Check |
|---|---|---|---|
| Figure 1 | `/figures/aiaawp-article-audit-object-gap.svg` | SVG | Loaded in article, `1600x640` |
| Figure 2 | `/figures/aiaawp-article-four-evidence-tiers.svg` | SVG | Loaded in article, `1600x620`; no right-label overlap |
| Figure 3 | `/figures/aiaawp-article-agentic-audit-object.svg` | SVG | Loaded in article, `1600x760`; no connector-line穿模 |
| Figure 4 | `/figures/aiaawp-article-lifecycle-walkthrough.svg` | SVG | Loaded in article, `1600x560`; Tool Action arrow points to Handoff |
| Figure 5 | `/figures/aiaawp-article-aarm-levels.svg` | SVG | Loaded in article, `1600x760`; typography aligned with Figure 4 |
| In-body thesis block | `essay-concept-anchor--thesis` | HTML/CSS | Uses the same `--type-registry-hero-title-*` typography tokens as `RegistryPageHero` |

## Boundary Language Checks

| Boundary | Required Language | Status |
|---|---|---|
| Article class | Research commentary / public research edition | PASS |
| AARM | Readiness vocabulary, not score/certification/assurance result | PASS |
| Big Four references | Market context only; no endorsement or partnership | PASS |
| Audit standard | Explicitly not an audit standard or assurance opinion | PASS |
| Legal/regulatory/professional advice | Explicitly excluded | PASS |
| Social/OG image | Used as distribution asset, not embedded as article cover | PASS |

## Verification Evidence

| Check | Method | Result |
|---|---|---|
| Typecheck | `npm run typecheck` | PASS; 0 errors, existing BaseLayout font preload hints only |
| Lint | `npm run lint` | PASS |
| Build | `npm run build`; explicit deep cache cleanup available through `npm run build:clean` | PASS; 100 pages built |
| Live route recovery | Restarted the long-running dev server after the previous cache cleanup invalidated `node_modules/.astro` during active development | PASS; `/essays/` entries and article route restored |
| Live click path | Chrome/CDP real mouse event from the visible `/essays/` article title | PASS; clicked target `<a>` and address reached `/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/` |
| OG dimensions | `sips` | PASS; PNG is 1200x630 |
| Built HTML meta | `rg` plus CDP DOM meta check | PASS |
| RSS/sitemap | `rg` against `dist/rss.xml` and `dist/sitemap-0.xml` | PASS; canonical article URL is present |
| Article route | Chrome/CDP navigation | PASS |
| `/essays/` route | Chrome/CDP DOM and screenshot | PASS |
| Title hierarchy | Chrome/CDP computed style | PASS; desktop framing line `35.28px` vs main title `59.2px`; mobile framing line `20.28px` vs main title `29.6px`; colon preserved in the framing line |
| OG title hierarchy | SVG source inspection, PNG regeneration, visual inspection, `sips` dimension check | PASS; framing line reads `From Static Logs to Dynamic Evidence Chains:` and main title reads `The Auditability Era of Agentic AI` |
| Post-build live route check | `curl` and Chrome/CDP against `127.0.0.1:4323` | PASS; `/essays/`, canonical article route, and both legacy routes return 200; `/essays/` has 9 log entries |
| Figure count | Chrome/CDP DOM | PASS; five `.article-figure img` nodes |
| Figure image load | Chrome/CDP after scrolling and lazy-load wait | PASS; all five SVGs loaded with expected natural dimensions |
| Desktop overflow | Chrome/CDP, 1440x1000 | PASS; `scrollWidth - clientWidth = 0` |
| Mobile overflow | Chrome/CDP, 390x844 | PASS; `scrollWidth - clientWidth = 0` |
| Runtime console | Chrome/CDP log capture | PASS; no relevant page errors |
| Framework error overlay | HTML and DOM selector checks for Vite/Astro error overlays | PASS |
| Publication governance files | Repo file inspection | PASS; root agent contract, compatibility entry point, article skill, and mandatory baseline are present |
| Shared typography visual check | Headless Chrome screenshot after token unification | PASS; hero title and in-body thesis title use the same shared title token system |

Browser plugin note: in-app browser attachment failed during this audit session (`Timed out waiting for the Browser webview to attach for this browser-use page`), so visual validation used local Chrome/CDP fallback. The fallback produced DOM, meta, screenshot, viewport, console, figure-load, and live click-path evidence.

## Screenshot Evidence

| Evidence | Path |
|---|---|
| `/essays/` visible article entry | `/tmp/jw-aiaawp-title-hierarchy-check/essays-index-auditability-entry-visible.png` |
| Article after `/essays/` click | `/tmp/jw-aiaawp-title-hierarchy-check/article-after-index-click.png` |
| Desktop article title hierarchy | `/tmp/jw-aiaawp-title-hierarchy-check/article-title-desktop.png` |
| Mobile article title hierarchy | `/tmp/jw-aiaawp-title-hierarchy-check/article-title-mobile.png` |
| Figure lazy-load end state | `/tmp/jw-aiaawp-title-rename-check/article-figures-end.png` |
| OG/social card | `public/social/og-static-logs-dynamic-evidence-chains.png` |

## Asset Boundary Note

The working tree contains other untracked `public/social/*` assets unrelated to this article. They are not part of this publication audit and should not be treated as authorized publication assets for this article without a separate asset governance pass.
