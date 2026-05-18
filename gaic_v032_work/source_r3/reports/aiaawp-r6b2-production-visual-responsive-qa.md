# AIAAWP-R6B2 Production Visual / Responsive QA

**Date:** 2026-05-18
**Scope:** Production rendered QA for AIAAWP hub, HTML artifact, and post-R6A semantic entry pages.

## Browser Path

- Production hub sanity check was performed through the in-app browser runtime.
- Hub URL: `https://www.jearonwong.com/research/agentic-ai-auditability-assurance-white-paper-2026/`
- Browser result: title present, document ID present, and console error/warn count `0`.
- Representative multi-viewport screenshots were captured with headless browser tooling and saved under `gaic_v032_work/source_r3/reports/aiaawp-r6b2-live-screens/`.

## Viewports Checked

| Surface | Viewports | Result |
| --- | --- | --- |
| AIAAWP hub | 375, 390, 768, 1440 | PASS |
| AIAAWP HTML artifact | 375, 768, 1440 | PASS |
| Evidence | 375 | PASS |
| Concepts Map | 375 | PASS |
| Definitions | 375 | PASS |
| Governance | 375 | PASS |
| Playbooks | 375 | PASS |
| Ecosystem Mapping | 375 | PASS |
| About | 375 | PASS |

## Checks Performed

- Page rendered with HTTP 200.
- No blank page observed.
- No body-level horizontal overflow observed.
- Header/nav usable.
- AIAAWP links visible or accessible on semantic entry pages.
- Hub title/status block, artifact grid, citation block, boundary block, and related links readable.
- HTML artifact title, publication contents, chapters, row/table treatments, and source/citation areas readable.
- No console errors or warnings observed in the checked browser run.

## Screenshot Inventory

- `hub-375.png` — 375 x 900
- `hub-1440.png` — 1440 x 1000
- `html-375.png` — 375 x 900
- `html-1440.png` — 1440 x 1000
- `evidence-375.png` — 375 x 900
- `concepts-map-375.png` — 375 x 900
- `definitions-375.png` — 375 x 900
- `governance-375.png` — 375 x 900
- `playbooks-375.png` — 375 x 900
- `ecosystem-375.png` — 375 x 900

**Visual / Responsive QA:** PASS.
