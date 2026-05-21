# WP3-R7B Production Visual / Responsive QA

Browser plugin path was used first for live production DOM, viewport, console, and overflow checks. Browser screenshot capture repeatedly timed out on `Page.captureScreenshot`; this limitation is recorded. Headless Chrome was then used only for screenshot capture proof, while Browser DOM/console metrics remain the primary responsive QA signal.

## Browser DOM / Console Matrix

Checked 18 live viewport/page combinations:

- Homepage: 375, 390, 768, 1440
- AIIRWP route: 375, 390, 768, 1440
- AIIRWP HTML artifact: 375, 390, 768, 1440
- Research index: 1440
- Evidence Registry: 1440
- Concepts Map: 1440
- Definitions: 1440
- GAIC hub: 1440
- AIAAWP hub: 1440

Results:

- Body-level horizontal overflow: PASS, none detected.
- Console warnings/errors: PASS, none relevant detected.
- DOCX links: PASS, none detected.
- AIIRWP route title/subtitle/status/boundary: PASS.
- AIIRWP HTML chapters 00-16, appendices A-G, AIO-01 through AIO-14, AIRM L0-L5, source/citation text, and synthesis/boundary markers: PASS.
- Homepage trilogy stack visible in production: PASS; GAIC `01`, AIAAWP `02`, AIIRWP `03` present.
- Table behavior on AIIRWP HTML mobile: PASS by DOM overflow metrics; table overflow remains internal rather than body-level.

Metrics file:

- `gaic_v032_work/source_r3/reports/wp3-r7b-live-screens/responsive-metrics.json`

## Screenshot Proof

Captured production screenshots under `gaic_v032_work/source_r3/reports/wp3-r7b-live-screens/`:

- `homepage-375.png`
- `homepage-1440.png`
- `aiirwp-route-375.png`
- `aiirwp-route-1440.png`
- `aiirwp-html-375-top.png`
- `aiirwp-html-375-table-sample.png`
- `aiirwp-html-1440-source-section.png`
- `research-index-1440.png`
- `evidence-1440.png`
- `concepts-map-1440.png`

Note: the two scrolled AIIRWP artifact screenshots were captured by headless Chrome through a helper page; DOM/console metrics are the authoritative validation for table/source section presence.
