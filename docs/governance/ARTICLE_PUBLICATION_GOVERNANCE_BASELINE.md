# Article Publication Governance Baseline

**Scope:** Future public articles, essays, whitepaper-derived media posts, diagrams, OG/social assets, and `/essays/` navigation on the JearonWong site.

**Status:** Mandatory for article publication work.

## 1. Publication Authority

An article is not publishable until the source, route, assets, machine-readable surfaces, and live browser behavior are all aligned.

For whitepaper-derived articles, the article must identify the source whitepaper and preserve its conceptual boundaries. Research commentary must not be described as an adopted standard, certification, assurance result, compliance proof, regulator-approved method, insurer-approved method, or Big Four-endorsed methodology.

## 2. Site Style Baseline

Use the existing Architectural Registry visual system:

| Surface | Required Pattern |
|---|---|
| Hero | `zone-a`, dark grid, `RegistryPageHero`, registry annotation |
| Body | `zone-b`, light reading surface, restrained panels |
| Metadata | `KEY : VALUE`, JetBrains Mono, uppercase |
| Title typography | Shared `--type-registry-hero-title-*` tokens |
| Accent | `--accent-signal` blue and `--accent-proof` cyan only for functional emphasis |
| Layout | No card-in-card drift, no unrelated decorative blobs, no marketing hero unless requested |

Any article-specific visual module that behaves like a title block must reuse the shared title token rather than defining a one-off display weight.

## 3. Article Writing Baseline

Public essays should be:

- Category-defining
- Evidence-conscious
- Precise about scope
- Restrained in claims
- Close to the user's approved reference structure when a reference is provided

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
| `llms.txt` | Updated for flagship or governance-significant articles |
| Audit doc | Required for significant publication waves |

If `/essays/` displays section headings but empty logs, the publication is blocked.

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
