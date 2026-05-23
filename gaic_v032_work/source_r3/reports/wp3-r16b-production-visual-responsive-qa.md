# WP3-R16B Production Visual / Responsive QA

Decision: PASS_WITH_NOTES.

R16B is production reverification only. It is not author release execution, public announcement, external adoption proof, indexing proof, SEO/GEO outcome proof, answer-engine recognition, or Final Seal. No DOCX is introduced.

Browser tooling:

- Browser plugin was used first for live route navigation, DOM inspection, visible status/CTA checks, and console/overflow checks.
- Browser screenshot capture timed out during batch capture.
- Headless Chrome hash-anchor screenshots produced blank anchor images for table/source-note targets, matching the earlier R15C anchored screenshot limitation pattern.
- Chrome DevTools fallback was used to load the live page, scroll to target elements by selector, and capture nonblank screenshots.

Proof screenshots saved under `gaic_v032_work/source_r3/reports/wp3-r16b-live-screens/`:

- `homepage-375.png`
- `homepage-1440.png`
- `aiirwp-route-375.png`
- `aiirwp-route-1440.png`
- `aiirwp-html-375-top.png`
- `aiirwp-html-375-table-sample.png`
- `aiirwp-html-1440-source-notes.png`
- `research-index-1440.png`
- `evidence-1440.png`
- `concepts-map-1440.png`

Viewport/DOM metrics:

- Checked homepage, AIIRWP route, AIIRWP HTML artifact, research index, Evidence Registry, Concepts Map, Definitions, GAIC hub, and AIAAWP hub at 375, 390, 768, and 1440 widths.
- Body-level horizontal overflow: none found.
- Console errors: none found.
- AIIRWP public route shows `Public research candidate`.
- HTML/PDF/manifest/checksum CTAs are present.
- No DOCX CTA is present; DOCX references are boundary/no-DOCX notices only.
- Source notes are present in the live HTML artifact.
- Chapter 4 responsibility bridge figure is present in the live HTML artifact.
- Boundary notes are visible.
- Mobile wide-table behavior uses contained horizontal scrolling; body overflow remains contained.

Notes:

- Mobile wide tables are acceptable in production through contained horizontal scrolling. This should remain a watch item for future design changes, but it is not a blocker.
- The minor PDF cover seam remains a non-blocking visual note carried from R16.
