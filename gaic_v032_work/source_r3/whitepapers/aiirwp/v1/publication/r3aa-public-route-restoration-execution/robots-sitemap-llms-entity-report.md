# Robots / Sitemap / LLMS / Entity Report

## Robots

File: `public/robots.txt`

R3AA preserves disallow rules for stale WP3 v0.1/v0.2 artifact paths:

- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.html`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.html`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.pdf`

The current WP3 HTML/PDF/manifest/checksum files are not blocked by robots.

## Sitemap

File: `astro.config.mjs`

R3AA adds the current WP3 HTML artifact URL to sitemap custom pages and does not add stale v0.1/v0.2 URLs.

## llms.txt

File: `public/llms.txt`

R3AA updates AIIRWP language from withdrawn/rewrite posture to public research candidate route restored, with HTML, PDF, manifest, and checksum URLs and no-DOCX language.

## Entity Graph

File: `public/entity/jearonwong-mplp-gaic-entity-graph.json`

R3AA updates the AIIRWP node and related concept nodes to public research candidate route restored. It preserves non-claim boundary language and rejected v0.2 exclusion.

## Boundary

The public metadata surface does not claim final/sealed/release-ready status, public announcement, certification, insurer acceptance, coverage-ready status, underwriting-ready status, claim-ready status, score, standard, or regulator approval.
