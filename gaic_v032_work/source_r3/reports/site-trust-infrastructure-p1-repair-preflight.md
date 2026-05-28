# Site Trust Infrastructure P1 Repair Preflight

Task ID: `SITE-TRUST-INFRASTRUCTURE-P1-REPAIR-01`

Starting HEAD: `d5f50dba4c741c72f9656322df57ae952f01f0a8`

Preflight result: pass.

Inspected:

- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/SiteFooter.astro`
- `src/data/schema.ts`
- `src/data/site.ts`
- whitepaper route pages
- essay route template
- previous P1 repair package
- full-site audit package
- current governance records

Pre-existing warning:

- Untracked files under `public/social/*` existed before this wave and remain outside scope.

Scope confirmed:

- Add Privacy Policy and Terms.
- Add footer trust links.
- Add homepage date/meta/schema trust signals.
- Audit Article and TechArticle schema coverage.
- Do not perform full E-E-A-T optimization.
