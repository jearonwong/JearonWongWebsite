# Jearon Wong

Static-first Astro site for publishing the Research Ledger: lifecycle definitions, essays, research editions, projects, governance notes, and evidence paths.

## What ships

- Primary navigation: Lifecycle, Essays, Research, Projects, About, and Explore
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
npm run audit:all
```

`npm run audit:all` is the publication closeout gate. It runs typechecking, linting, the static build, publication-surface checks, information-architecture checks, editorial metadata checks, content-similarity checks, the package-surface leak check, and the Research Ledger visual-system checks.

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
- `.github/workflows/site-governance.yml` runs the same closeout gate on pushes and pull requests
- `npm run audit:impact` classifies changed publication, semantic, route, visual, artifact, and workflow surfaces
- `npm run audit:routes` checks every sitemap route against a local static preview for HTTP 200, canonical, and H1 contracts
