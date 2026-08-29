# Jearon Wong

Static-first Astro site for publishing the Research Ledger: lifecycle definitions, essays, research editions, projects, governance notes, and evidence paths.

## What ships

- Primary navigation: Start here, Lifecycle, Essays, Research, Projects, About, and Explore
- Current essays with frontmatter-backed content collections
- Projects framed as protocol, runtime, delivery, and evidence paths rather than a generic portfolio
- Discovery assets: sitemap, robots, RSS, canonical metadata, JSON-LD, `llms.txt`, and entity graph records
- No auth, database, payments, or SaaS runtime requirements

## Commands

```bash
npm install
npm run build
npm run typecheck
npm run lint
npm run assets:og:check
npm run audit:browser
npm run verify:production:local
npm run publication:release
npm run audit:all
```

`npm run publication:release` is the single repository publication entrypoint. It resolves the publication plan, synchronizes derived surfaces, runs the full audit suite, starts a static preview for route and desktop/mobile browser checks, and writes the closeout receipt. Use `npm run publication:release -- --check` for a no-write local gate, `npm run publication:release -- --ci` in CI, and `npm run publication:release -- --vercel` as the Vercel build command. `npm run audit:all` remains the lower-level complete audit suite used by that entrypoint.

## Architecture

- Astro static output
- Markdown essays managed through a content collection
- Shared site metadata and JSON-LD in the base layout
- Research Ledger B visual tokens and responsive shell in `src/styles/global.css` and `src/styles/prototypes.css`
- Governed publication and semantic workflows under `.agents/skills/`, `.codex/skills/`, and `docs/governance/`
- Minimal documentation surface area by design

## Notes

- `astro.config.mjs` sets the production site URL to `https://www.jearonwong.com`
- `public/robots.txt` points crawlers to the generated sitemap
- `src/pages/rss.xml.ts` publishes the essays feed
- `.github/workflows/site-governance.yml` runs the same single publication entrypoint on pushes and pull requests
- `npm run audit:impact` classifies changed publication, semantic, route, visual, artifact, and workflow surfaces
- `npm run audit:routes` checks every sitemap route against a local static preview for HTTP 200, canonical, and H1 contracts
- `vercel.json` invokes the same entrypoint as a build-time gate, so a failed publication or visual check cannot produce a Vercel deployment build.
- `npm run verify:production` checks a Vercel deployment after it is live. It requires `SITE_BASE_URL` and deployed commit evidence; it does not deploy or publish.
- The governance workflow accepts Vercel's `deployment_status` success event for automatic post-deploy verification, plus a `vercel-deployment-ready` repository dispatch (URL and commit payload) and `workflow_dispatch` as explicit fallbacks.
- `npm run audit:browser` checks built routes statically; when given a preview base URL it runs Playwright desktop/mobile overflow and console checks.
- The CI workflow installs Chromium before the release entrypoint so dynamic desktop/mobile checks are mandatory there; the Vercel build mode uses the static checks and the post-deploy verifier covers the live URL.

Writing decisions remain author-controlled: W0-W2 (positioning, source, claim boundary, voice, and approval) must be recorded in the publication control record and article frontmatter. The release entrypoint automates the repeatable projection and verification steps; it does not invent article meaning, replace authored figures, submit external social posts, or guarantee search-engine indexing.
