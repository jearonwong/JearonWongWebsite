# WP3-R16 Visual / Responsive QA

Status: PASS_WITH_NOTES.

R16 visual QA confirms the staged route and public HTML artifact render as a public research candidate. This is not production verification and does not claim public release execution or Final Seal.

Browser path:

- Browser plugin was used first for route navigation, title, DOM, console, CTA, DOCX CTA, and overflow checks.
- Browser screenshot API was unavailable in this environment (`tab.playwright.screenshot` was not exposed), so committed proof screenshots were generated through a headless Chrome CDP fallback.

Screenshots:

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
- `viewport-metrics.json`

Viewport metrics:

- AIIRWP route: no body-level horizontal overflow at 375, 390, 768, or 1440.
- AIIRWP HTML artifact: no body-level horizontal overflow at 375, 390, 768, or 1440.
- Mobile wide table sample uses contained horizontal scroll: at 375, `table-market-edge` client width 345 and scroll width 820 while document scroll width remains 375.
- No DOCX CTA in route or artifact.
- Public candidate status visible.
- Source notes visible in artifact proof.

Carry-forward notes:

- Mobile wide-table contained scrolling is accepted for staging and should be rechecked on production in R16B.
- Minor cover seam remains a PDF proof note, not a route preview blocker.

