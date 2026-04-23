# Jearon Wong

Static-first Astro site for publishing essays, theory clusters, projects, and governance notes.

## What ships

- Primary navigation: Home, Essays, Theory Clusters, Projects, Governance
- Three initial essays with frontmatter-backed content collections
- Projects framed as proof points rather than a generic portfolio
- Discovery assets: sitemap, robots, RSS, metadata baseline, and JSON-LD baseline
- No auth, database, payments, or SaaS runtime requirements

## Commands

```bash
npm install
npm run build
npm run typecheck
npm run lint
```

## Architecture

- Astro static output
- Markdown essays managed through a content collection
- Shared site metadata and JSON-LD in the base layout
- Minimal documentation surface area by design

## Notes

- `astro.config.mjs` sets the production site URL to `https://jearonwong.com`
- `public/robots.txt` points crawlers to the generated sitemap
- `src/pages/rss.xml.ts` publishes the essays feed
