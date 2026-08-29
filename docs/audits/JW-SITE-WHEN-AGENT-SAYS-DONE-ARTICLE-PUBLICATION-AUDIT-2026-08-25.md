# Article Publication Audit: When an Agent Says Done

**Date:** 2026-08-25

**Publication class:** Personal engineering essay / protocol-governance position essay

**Verdict:** `PASS_AFTER_CORRECTION`

## Scope

This audit covers the article route, the in-article lifecycle visual, the OG asset, and the publication Workflow operating model added to `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`.

The essay is grounded in first-person development work on MPLP and its Development Runtime. It does not claim production Agent OS readiness, universal Intent Drift detection, certification, regulatory approval, insurance approval, or legal compliance.

## Correction

The lifecycle sequence was previously rendered as an unstyled text code block. It was replaced with the existing `protocol-stack-diagram` component and five registry layers: Intent; Authority + Plan; Action + Handoff; Evidence + Review; Accepted Outcome.

## Evidence

| Check | Result |
|---|---|
| `npm run typecheck` | PASS; 0 errors, 2 existing BaseLayout font-preload hints. |
| `npm run build:clean` | PASS; Astro cache cleaned and 102 static pages generated with no duplicate-content warning. |
| `git diff --check` | PASS. |
| Canonical route | PASS; `http://127.0.0.1:4323/essays/when-an-agent-says-done-who-accepts-the-outcome/` returned HTTP 200 after clean rebuild and server restart. |
| `/essays/` listing and click path | PASS; visible article link navigated to the canonical route in the in-app Browser. |
| Browser console | PASS; no page error entries on the clean article route. |
| Registry visual | PASS; desktop render uses the existing Architectural Registry grid, shared mono labels, and blue/cyan functional accents. |
| Mobile layout | PASS; 390px viewport check produced no horizontal overflow (`bodyScrollWidth` 375) and the diagram collapsed to one column. |
| OG asset | PASS; `public/social/when-an-agent-says-done-og.png` is 1200x630. |
| RSS / sitemap / `llms.txt` | PASS; canonical route appears in `dist/rss.xml`, `dist/sitemap-0.xml`, and `public/llms.txt`. |

## Workflow Control

The repeatable publication sequence is now recorded in the existing baseline as `W1 POSITIONING + INPUT`, `W2 WRITING + VOICE`, `W3 VISUAL SYSTEM`, `W4 PUBLICATION SURFACES`, `W5 SEO + GEO`, and `W6 VERIFY + CLOSEOUT`. Each workflow has a source of truth, output, stop condition, acceptance, and reopen condition.

Each workflow now also binds its required Skill files and specifications. The minimum article entry chain is `AGENTS.md` -> dialogue harness -> repo-truth audit -> cross-repo boundary guard -> site semantic governance -> site publication surface governance -> article publication governance -> this baseline. Skill selection and read evidence remain internal execution records; they are not exposed as article copy.

## Residual Risk

The working tree contains unrelated pre-existing site and asset changes. This audit does not authorize commit, merge, release, or external publication. The two existing BaseLayout typecheck hints remain outside this article wave.
