# Style Source Discovery Report

## Public Artifact Paths

| Paper | Route | HTML | PDF | Integrity |
|---|---|---|---|---|
| WP1 GAIC | `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | `manifest.json`, `checksums.sha256` |
| WP2 AIAAWP | `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf` | `manifest.json`, `checksums.sha256` |
| WP3 AIIRWP | `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` | `manifest.json`, `checksums.sha256` |

## Standards And Style Sources Found

- `gaic_v032_work/source_r3/design/gaic-html-publication-style.md`
- `gaic_v032_work/source_r3/design/gaic-whitepaper-vi-system.md`
- `design/VI_System_Brief_v0.4_Registry.md`
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`
- `gaic_v032_work/source_r3/whitepapers/publication/WHITEPAPER-PUBLICATION-STANDARD-v1.0.md`
- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-wp2-r4-candidate-html.mjs`
- `gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs`

## Canonical Baseline Decision

Canonical HTML baseline: WP2 public HTML artifact.

Canonical PDF baseline: shared R8 A4 PDF Print Profile (`render_whitepaper_r8_a4_pdf.py`). WP1 and WP2 PDFs both show Creator `Whitepaper R8 PDF A4 Print Profile renderer`, Producer `Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass`, and A4 page size. Pre-R3AC WP3 lacked that profile, so R3AC repaired WP3 into the shared renderer.
