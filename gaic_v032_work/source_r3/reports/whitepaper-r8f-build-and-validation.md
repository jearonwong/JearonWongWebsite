# WHITEPAPER-R8F Build and Local Validation

Date: 2026-05-20

## Commands

- `npm run typecheck`: PASS
- `npm run lint`: PASS
- `npm run build`: PASS
- `git diff --check`: PASS

## Additional Validation

- GAIC checksums validate after adding current manifest.
- AIAAWP checksums validate after manifest status update.
- Entity graph JSON parses.
- GAIC current manifest parses.
- AIAAWP manifest parses.
- Local build generated `/ecosystem-mapping/index.html` with noindex and canonical `/mapping/extended-ecosystem/`.
- Local sitemap includes both whitepaper hub routes and intended HTML artifact routes.
- Local sitemap excludes `/ecosystem-mapping/`.
- No `.docx` files were generated under `dist/research`.
- No public PDFs were regenerated.
- No standalone public whitepaper HTML artifacts were changed.
- No GAIC scores/methodology changed.
- No AIAAWP core content changed.
- Unrelated untracked `public/social/*` assets were not staged.

## Result

PASS.
