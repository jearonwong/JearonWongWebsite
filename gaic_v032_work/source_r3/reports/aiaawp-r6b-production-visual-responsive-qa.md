# AIAAWP-R6B Production Visual / Responsive QA

**Status:** PASS
**Browser:** Chrome/148.0.7778.168 through headless DevTools protocol.

Representative screenshots were saved under:

`gaic_v032_work/source_r3/reports/aiaawp-r6b-live-screens/`

## Hub Route Checks

| Viewport | Screenshot | Horizontal overflow | Console entries | Core content | Result |
| --- | --- | --- | ---: | --- | --- |
| 375 x 1200 | `hub-375.png` | No | 0 | title, document ID, artifact actions, boundary visible | PASS |
| 390 x 1200 | `hub-390.png` | No | 0 | title, document ID, artifact actions, boundary visible | PASS |
| 768 x 1200 | `hub-768.png` | No | 0 | title, document ID, artifact actions, boundary visible | PASS |
| 1440 x 1200 | `hub-1440.png` | No | 0 | title, document ID, artifact actions, boundary visible | PASS |

## HTML Artifact Checks

| Viewport | Screenshot | Horizontal overflow | Console entries | Core content | Result |
| --- | --- | --- | ---: | --- | --- |
| 375 x 1200 | `html-375.png` | No | 0 | title, document ID, TOC, boundary visible | PASS |
| 768 x 1200 | `html-768.png` | No | 0 | title, document ID, TOC, boundary visible | PASS |
| 1440 x 1200 | `html-1440.png` | No | 0 | title, document ID, TOC, boundary visible | PASS |

## Notes

- Hub route artifact actions are visible at mobile and desktop widths.
- HTML artifact table/row-card containment is inherited from the GAIC-aligned responsive candidate.
- No body-level horizontal overflow was detected in the sampled production viewports.
- No runtime console errors or warnings were captured in the sampled pages.

## Result

Production hub and HTML artifact render across mobile, tablet, and desktop widths with readable title/status/boundary surfaces and without detected body-level horizontal overflow.
