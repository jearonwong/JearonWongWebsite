# Shared Component and Template Change Report

**Wave:** WP3-V1-R3AB-WHITEPAPER-PUBLICATION-STYLE-SYSTEM-REPAIR-01

## Route Components

Updated `src/components/WhitePaperPublicationPage.astro`:

- Added a publication-system strip in the hero.
- Expanded primary CTA order to include HTML, PDF, manifest, checksum, and citation.
- Added a publication record heading to the right-side status panel.
- Reduced oversized hero scale into a denser registry/publication cockpit aligned with VI v0.4.

Updated `src/data/whitepaperPublications.ts`:

- Refreshed WP3 page count to 95 after style-system PDF regeneration.
- Refreshed WP3 HTML/PDF/manifest/checksum hashes.

## Artifact Template

Created `gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs`:

- Extracts the current WP3 article body.
- Applies the GAIC/WP2 professional-shell artifact template.
- Preserves anchors, source refs, tables, appendices, Appendix I deferred note, and boundary language.
- Regenerates PDF with Chrome headless and no browser header/footer.
- Patches PDF metadata with PyPDF2.
- Refreshes public manifest and checksums.

No React or heavy UI dependency was introduced.
