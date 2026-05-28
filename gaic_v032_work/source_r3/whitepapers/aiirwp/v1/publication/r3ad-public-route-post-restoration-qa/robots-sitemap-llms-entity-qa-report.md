# Robots Sitemap Llms Entity QA Report

## Robots

`public/robots.txt` preserves stale WP3 v0.1/v0.2 disallow controls:

- `AIIRWP-2026-v0.1.html`
- `AIIRWP-2026-v0.1.pdf`
- `AIIRWP-2026-v0.2.html`
- `AIIRWP-2026-v0.2.pdf`

## Sitemap

`astro.config.mjs` custom pages include the current WP3 HTML artifact URL.

Built sitemap output contains:

`agentic-ai-insurability-risk-transfer-white-paper-2026.html`

## llms.txt

`public/llms.txt` contains:

- WP1/WP2/WP3 public route URLs.
- WP3 public HTML, PDF, manifest, and checksum URLs.
- WP3 public research candidate status.
- v0.2 rejected/current-source-truth exclusion.
- Boundary language: not legal advice, not insurance advice, not coverage opinion, not final, not sealed, not release-ready.

## Entity Graph

`public/entity/jearonwong-mplp-gaic-entity-graph.json` parses and contains:

- WP3 public route URL.
- WP3 public HTML/PDF/manifest/checksum URLs.
- WP3 public research candidate status.
- v0.2 rejected/current-source-truth exclusion.
- Boundary language preserving non-claim posture.

## Repair

No robots, sitemap, `llms.txt`, or entity graph repair was required in R3AD.

## Verdict

Robots, sitemap, `llms.txt`, and entity graph QA passes.
