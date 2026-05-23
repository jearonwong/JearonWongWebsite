# WP3-V1-R0 Machine-Readable Withdrawal QA

Decision: PASS.

## Entity Graph

`public/entity/jearonwong-mplp-gaic-entity-graph.json` now describes AIIRWP v0.2 as withdrawn and rejected, with WP3 reopened as an AIIRWP v1.0 rewrite.

The entity graph parses as JSON.

Current entity graph boundary states that no current AIIRWP HTML/PDF/manifest/checksum artifact is promoted and that the withdrawn v0.2 candidate is not current source truth or a citation source.

## llms.txt

`public/llms.txt` no longer promotes direct AIIRWP v0.2 HTML/PDF/manifest/checksum links.

The AIIRWP entry now states:

- Withdrawn for AIIRWP v1.0 rewrite.
- v0.2 public candidate is rejected.
- No current AIIRWP HTML, PDF, manifest, checksum, or DOCX artifact is promoted.
- Not final, not sealed, not author-release executed, not legal advice, not insurance advice, not a coverage opinion, not an underwriting standard, not actuarial pricing guidance, not claims approval guidance, not certification, not endorsement, not insurer acceptance, not coverage-ready, and not underwriting-ready.

## Sitemap

`astro.config.mjs` no longer adds the AIIRWP v0.2 HTML artifact as a custom sitemap page.

The built site contains the AIIRWP under-rewrite route. The removed v0.2 public artifact files are no longer present in `dist/`.

## Robots

`public/robots.txt` blocks obsolete AIIRWP v0.1 and v0.2 artifact paths and the withdrawn manifest/checksum paths:

- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.html`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.1.pdf`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.html`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.pdf`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`

## Machine-Readable Boundary

No machine-readable surface claims Final Seal, public release execution, author release execution, external adoption, indexing, SEO/GEO outcome, answer-engine recognition, insurer acceptance, coverage-ready status, underwriting-ready status, certification, legal advice, insurance advice, coverage opinion, underwriting standard, actuarial pricing guidance, claims approval guidance, or WP4 implementation for current WP3.
