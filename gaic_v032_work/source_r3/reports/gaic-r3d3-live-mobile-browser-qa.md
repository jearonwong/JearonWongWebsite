# GAIC-R3D-3 Live Mobile Browser QA

**Task ID:** GAIC-R3D-3-LIVE-MOBILE-VERIFICATION
**Date:** 2026-05-13
**Status:** PASS

## Browser Method

The in-app Browser plugin successfully opened the production HTML route and verified the page title/URL. Its screenshot command timed out during mobile capture, so production screenshot and viewport QA used local Chrome headless through Chrome DevTools Protocol against the live production URL.

Production route:

`https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html`

## Viewports Checked

| View | Width | Result |
|---|---:|---|
| Mobile cover | 375 | PASS |
| Mobile cover | 390 | PASS |
| Tablet cover | 768 | PASS |
| Desktop sanity | 1440 | PASS |
| Mobile TOC | 375 | PASS |
| Mobile dense table | 375 | PASS |
| Mobile figure/chart | 375 | PASS |
| Mobile code/template block | 375 | PASS |

## Measured Results

- `overflowRoutes`: none.
- `eventProblems`: none.
- 375px document/body scroll width: `375 / 375`.
- 390px document/body scroll width: `390 / 390`.
- 768px document/body scroll width: `768 / 768`.
- 1440px document/body scroll width: `1425 / 1425`, within viewport.
- Web-edition nav present.
- H1 present: `Global AI Compliance White Paper 2026`.
- TOC present and readable.
- First dense table at 375px is scroll-contained: `scrollWidth 1693`, `clientWidth 343`.
- First 18 sampled dense table blocks at 375px are scroll-contained.
- Sampled figures/charts are visible and contained.
- Code/template block at 375px is contained.
- Link count on production HTML route: `34`.
- Console errors/warnings/runtime exceptions: `0`.

## Screenshots

Saved under `gaic_v032_work/source_r3/reports/r3d3-live-screens/`:

- `live-mobile-375-cover.png`
- `live-mobile-390-cover.png`
- `live-tablet-768-cover.png`
- `live-desktop-1440-sanity.png`
- `live-mobile-toc.png`
- `live-mobile-table.png`
- `live-mobile-figure.png`
- `live-mobile-code.png`

## Conclusion

The production responsive public HTML web edition is mobile-readable at 375px and 390px, tablet-readable at 768px, and still acceptable on desktop.
