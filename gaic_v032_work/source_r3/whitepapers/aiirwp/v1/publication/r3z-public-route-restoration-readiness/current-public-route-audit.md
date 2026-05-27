# Current Public Route Audit

## Current Route Path

`/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

## Current Route File

`src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`

## Current Status Page Behavior

The current Astro route is a withdrawn / v1.0 rewrite status page. It presents:

- `WITHDRAWN_FOR_V1_REWRITE` status.
- Statement that the prior AIIRWP v0.2 public candidate has been withdrawn by owner decision.
- No current public AIIRWP HTML, PDF, manifest, checksum, or DOCX promotion.
- Series links to WP1 and WP2.
- Rewrite-next-work framing.

## Current Noindex / Robots Treatment

- The route passes `noindex={true}` into `BaseLayout`, which emits `<meta name="robots" content="noindex, follow" />`.
- `public/robots.txt` disallows stale prior AIIRWP artifact paths:
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.html`
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf`
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.html`
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.pdf`
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
  - `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`

## Current Public Artifact Links

No current public AIIRWP HTML/PDF/manifest/checksum links are exposed on the route. The research index links only to the rewrite status page.

## Current CTA State

No public artifact CTA is restored. The route has no Read HTML, Download PDF, manifest, or checksum CTA.

## Stale v0.2 Link Audit

The current route mentions v0.2 only as withdrawn/rejected context. No active v0.2 HTML/PDF links remain in the route body. `robots.txt` still blocks prior v0.2 artifact paths.

## Rejected v0.2 Withdrawal State

Rejected v0.2 is safely withdrawn in route copy, `llms.txt`, and entity graph language. It remains historical traceability context only.

## Exact Files/Routes Needing Change in R3AA

Required R3AA changes if execution is authorized:

- `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`
- `src/pages/research/index.astro`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`
- `public/robots.txt`
- `astro.config.mjs`
- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- governance/status files and R3AA reports.

R3Z does not modify any of these files.
