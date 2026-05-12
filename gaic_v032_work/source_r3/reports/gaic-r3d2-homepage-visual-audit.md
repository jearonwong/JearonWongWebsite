# GAIC-R3D-2 Homepage Visual Audit

**Task ID:** GAIC-R3D-2-HOMEPAGE-VISUAL-AND-LIVE-GEO-DRIFT-PATCH  
**Date:** 2026-05-13

## Finding

The R3D homepage GAIC release panel existed and had the correct content and links, but its section treatment used the dark `zone-a registry-grid` surface directly below the dark homepage hero. Visually, the hero and research release panel read as one continuous dark block, weakening the intended research-release distinction.

## Files Inspected

- `src/pages/index.astro`
- Homepage hero markup and local styles in `src/pages/index.astro`
- Existing VI primitives: `zone-a`, `zone-b`, `registry-grid`, `registry-chassis`, `button-primary`, `button-outline`

## Change Plan

Use a minimal component-local patch:

- change the GAIC release section from dark `zone-a registry-grid` to light `zone-b`;
- give `.gaic-release-band` a near-white research paper surface with a subtle low-contrast grid;
- give `.gaic-release-panel` a white surface, dark text, restrained Evidence Cyan left rule, light border, and subtle shadow;
- keep existing copy, CTAs, semantics, and heading hierarchy;
- add explicit CTA colors for readable contrast on the light section.

## Files / Classes Changed

- `src/pages/index.astro`
  - `<section class="zone-a registry-grid gaic-release-band"...>` changed to `<section class="zone-b gaic-release-band"...>`.
  - `.gaic-release-band` now uses `#f8fafc` with subtle light grid and light borders.
  - `.gaic-release-panel` now uses `#ffffff`, dark border, `border-left: 4px solid var(--accent-proof)`, and a restrained shadow.
  - `.gaic-release-panel h2`, `.gaic-release-thesis`, and `.gaic-release-support` now use dark readable text.
  - `.gaic-release-actions` button styles now explicitly support high contrast on the light panel.

## Accessibility / Hierarchy

- No duplicated H1 introduced.
- Existing `aria-labelledby="gaic-release-title"` preserved.
- CTA labels and targets preserved.
- Focus behavior inherits existing button/link focus behavior.
- Mobile layout still collapses to one column through the existing `@media (max-width: 900px)` rule.

