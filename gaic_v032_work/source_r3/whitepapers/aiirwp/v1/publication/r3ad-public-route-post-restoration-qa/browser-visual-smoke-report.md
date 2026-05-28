# Browser Visual Smoke Report

## Local Server

Command:

`npm run dev -- --host 127.0.0.1 --port 4321`

Effective URL:

`http://127.0.0.1:4323/`

Ports `4321` and `4322` were already occupied, so Vite selected `4323`.

## Browser Checks

### WP3 Public Route

URL:

`http://127.0.0.1:4323/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

Results:

- Title rendered: PASS.
- `PUBLIC_RESEARCH_CANDIDATE` status rendered: PASS.
- `Read HTML` rendered: PASS.
- `Download PDF` rendered: PASS.
- `View Manifest` rendered: PASS.
- `Verify Checksums` rendered: PASS.
- Boundary/no-DOCX language rendered: PASS.
- `route restored` hero language absent: PASS.
- Console errors/warnings: 0 relevant.

Screenshot:

`visual-proof/wp3-route-first-fold.png`

### WP3 HTML Artifact

URL:

`http://127.0.0.1:4323/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`

Results:

- Professional artifact shell rendered: PASS.
- `Public Research Candidate Status` rendered: PASS.
- `Publication Contents` rendered: PASS.
- no-DOCX language rendered: PASS.
- Appendix H and Appendix I text reachable in DOM snapshot: PASS.
- `route restored` artifact language absent: PASS.
- Console errors/warnings: 0 relevant.

Screenshot:

`visual-proof/wp3-html-artifact-first-fold.png`

### Research Index

URL:

`http://127.0.0.1:4323/research/`

Results:

- WP1/WP2/WP3 cards rendered: PASS.
- `Read HTML`, `Download PDF`, `View Manifest`, `Verify Checksums` labels rendered: PASS.
- no-DOCX language rendered: PASS.
- Console errors/warnings: 0 relevant.

Screenshot:

`visual-proof/research-index-whitepaper-cards.png`

## PDF Visual Proof

Generated with `pdftoppm -png -r 120`:

- `visual-proof/wp3-pdf-first-page-001.png`
- `visual-proof/wp3-pdf-body-page-002.png`
- `visual-proof/wp3-pdf-table-page-061.png`

## Verdict

Browser and visual smoke QA passes with a non-blocking `pdftoppm` Type 3 glyph bounding box warning.
