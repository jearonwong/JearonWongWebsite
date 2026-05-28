# Public Route Publication Report

All three white paper routes use the shared white paper publication system through `src/components/WhitePaperPublicationPage.astro` and `src/data/whitepaperPublications.ts`.

Route pattern:

- Shared hero grammar: PASS.
- Shared status panel grammar: PASS.
- CTA order: `Read HTML`, `Download PDF`, `View Manifest`, `Verify Checksums`, `Cite this paper`: PASS.
- Citation block: PASS.
- Integrity block: PASS.
- Boundary block: PASS.
- Related research block: PASS.
- Public DOCX link: absent.

Repairs made in this wave:

- Public page status language aligned to `Public Research Edition`.
- Shared component no longer exposes `WP{sequence}` in the public hero; it now uses `Paper {sequence}` under `WHITE PAPER SERIES`.
- Research index cards use official titles, public research edition status, artifact availability, and no-DOCX boundary.
- Sitewide references were adjusted away from public-facing internal whitepaper shorthand.
