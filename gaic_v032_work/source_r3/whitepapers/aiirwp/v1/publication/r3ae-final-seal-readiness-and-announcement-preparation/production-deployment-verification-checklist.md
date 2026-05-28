# Production Deployment Verification Checklist

**Purpose:** Checklist for live-site verification after deployment or preview promotion. R3AE does not perform production announcement.

## Live URL Checks

- [ ] Live public route loads:
  `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`
- [ ] Public HTML loads:
  `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`
- [ ] Public PDF downloads:
  `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`
- [ ] Manifest loads:
  `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- [ ] Checksum file loads:
  `https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`
- [ ] Downloaded artifact checksums verify against the live checksum file.

## Metadata And Discovery Checks

- [ ] OG preview renders with bounded public research framing.
- [ ] Twitter preview renders with bounded public research framing.
- [ ] Schema / rich result check parses JSON-LD without overclaiming.
- [ ] Sitemap contains the current WP3 HTML artifact URL.
- [ ] Robots keeps stale v0.1/v0.2 artifact paths blocked or excluded.
- [ ] Live `llms.txt` contains WP3 public route and artifact URLs with bounded status.
- [ ] Live entity graph contains WP3 route and artifact URLs with bounded status.

## Visual Checks

- [ ] Mobile first-fold screenshot.
- [ ] Desktop first-fold screenshot.
- [ ] PDF first page spot check.
- [ ] PDF body page spot check.
- [ ] PDF wide-table spot check.

## Boundary Checks

- [ ] No DOCX link exists.
- [ ] No source Markdown public link exists.
- [ ] No final, sealed, or release-ready overclaim appears.
- [ ] No insurance advice, legal advice, coverage opinion, certification, insurer acceptance, score, standard, or regulator approval claim appears.

