# GAIC-R3D-3 HTML Mobile Audit

**Task ID:** GAIC-R3D-3-RESPONSIVE-WHITEPAPER-HTML-WEB-EDITION
**Date:** 2026-05-13
**Status:** PASS

## Finding

The public HTML white paper was readable as a desktop/print artifact, but it behaved like a fixed publication shell on phones. This made the `Read full HTML` route a weak public web-reading experience for mobile readers.

## Root Causes

- `.publication` and cover sections were optimized for a desktop/A4-like reading surface.
- Large cover typography and cover spacing had insufficient mobile overrides.
- Dense tables, score tables, heatmaps, charts, and code blocks could exceed the viewport without a deliberate mobile scroll affordance.
- Figure/chart elements were not consistently constrained for screen mode.
- TOC and multi-column/grid sections needed a stronger stacked mobile treatment.
- The generated HTML was public-facing, but the sealed candidate had to remain untouched.

## Files Changed

- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html`
- `public/research/global-ai-compliance-white-paper-2026/checksums.sha256`
- `public/research/global-ai-compliance-white-paper-2026/responsive-html-web-edition-note.md`
- `src/pages/research/global-ai-compliance-white-paper-2026/index.astro`
- `src/styles/global.css`
- `src/components/SiteHeader.astro`
- `src/layouts/BaseLayout.astro`

## Strategy Used

The safest implementation was a targeted public web-reading edition patch:

- Add screen-only responsive CSS to the public HTML file.
- Add a minimal sticky web-edition navigation strip back to the white paper hub.
- Keep existing print/PDF-oriented styles intact.
- Do not modify the sealed publication candidate artifacts.
- Update only the public HTML checksum and hub integrity language.

## Responsive Fixes

- Fluid `.publication` width with readable max-width on desktop.
- Mobile body font at 16px with improved line-height.
- Mobile cover scaling and stacked cover metadata.
- Stacked TOC/grids on narrow screens.
- Horizontal scrolling for dense tables, heatmaps, score tables, chart cards, and code/template blocks.
- Responsive media constraints for images, SVG, and canvas.
- `content-visibility: auto` for chapters/appendices to reduce initial rendering cost for the long HTML document.
- Screen-only nav clarifying that the responsive HTML web edition is separate from sealed PDF/DOCX formal artifacts.

## Sitewide Mobile/Performance Fixes

- Added global overflow guards and text wrapping for long headings/body/code content.
- Made site media `height: auto`.
- Reduced mobile shell widths to prevent edge bleed.
- Reworked the mobile drawer from offscreen `right` positioning to transform-based translation.
- Changed Google Fonts loading to preload-onload swap with a `noscript` fallback.

## Sealed Artifact Handling

No sealed file under `gaic_v032_work/source_r3/out/publication_candidate/` was edited. The public HTML file is now explicitly treated as a responsive derivative web-reading edition.
