# R3AB Style Source Discovery Report

**Wave:** WP3-V1-R3AB-WHITEPAPER-PUBLICATION-STYLE-SYSTEM-REPAIR-01
**Purpose:** Record the style, rendering, generator, and governance sources inspected before repairing the whitepaper publication style system.

## Files and Areas Searched

- `src/pages/research/` for WP1/WP2/WP3 public route pages.
- `src/components/` and `src/data/whitepaperPublications.ts` for shared route rendering and publication registry data.
- `public/research/` for WP1/WP2/WP3 HTML, PDF, manifest, and checksum artifacts.
- `design/VI_System_Brief_v0.4_Registry.md` for site visual authority.
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md` for the active whitepaper series publication SOP.
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/` for WP2 artifact generation patterns.
- `gaic_v032_work/source_r3/scripts/` for historical GAIC/WP3 artifact generation and PDF repair scripts.
- `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/` for prior WP3 professional artifact repair evidence.
- `public/llms.txt`, `public/entity/jearonwong-mplp-gaic-entity-graph.json`, sitemap config, manifests, and registry files for metadata conventions.

## Existing Public Page Paths

| Paper | Route page |
| --- | --- |
| WP1 GAIC | `src/pages/research/global-ai-compliance-white-paper-2026/index.astro` |
| WP2 AIAAWP | `src/pages/research/agentic-ai-auditability-assurance-white-paper-2026/index.astro` |
| WP3 AIIRWP | `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro` |

## Existing Artifact Paths

| Paper | HTML | PDF | Manifest | Checksums |
| --- | --- | --- | --- | --- |
| WP1 | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | `public/research/global-ai-compliance-white-paper-2026/manifest.json` | `public/research/global-ai-compliance-white-paper-2026/checksums.sha256` |
| WP2 | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.pdf` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/manifest.json` | `public/research/agentic-ai-auditability-assurance-white-paper-2026/checksums.sha256` |
| WP3 | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256` |

## Generator and Script Sources Found

- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-wp2-r4-candidate-html.mjs`.
- `gaic_v032_work/source_r3/wp2_r4_publication_candidate/generation/generate-aiaawp-r4d-publication-candidate.py`.
- `gaic_v032_work/source_r3/scripts/generate_wp3_r15c_candidate_artifacts.mjs`.
- `gaic_v032_work/source_r3/scripts/generate_wp3_r16_public_candidate_artifacts.mjs`.
- `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`.
- New repair entrypoint created in this wave: `gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs`.

## VI and Publication Standards Found

- `design/VI_System_Brief_v0.4_Registry.md`: Architectural Headquarters, Evidence First, Identity as Infrastructure, Restrained Authority, Black Box of Protocol, Monolith Charcoal, Anodized Slate, Machine White, Registry Blue, Evidence Cyan, JetBrains Mono metadata.
- `gaic_v032_work/source_r3/reports/whitepaper-series-publication-sop-v1.md`: active Whitepaper Series Publication SOP v2, HTML web reading profile, PDF A4 print profile, wide-table layout gate, semantic table gate, adaptive PDF table layout gate.
- WP1/WP2 public artifacts: professional-shell, cover-page, cover-frame, cover-meta, important-notice, generated-toc, table-block/table-scroll, manifest/checksum integrity layer.
- WP3 R15C evidence: prior cover repair, PDF A4 layout QA, table layout QA, boundary rendering QA, and visual proof artifacts.

## Canonical Baseline Decision

A canonical standard already existed in distributed form: VI v0.4 plus Whitepaper Series Publication SOP v2 plus the accepted WP1/WP2 professional artifact shell. R3AB does not invent a new style. It codifies that standard into `WHITEPAPER-PUBLICATION-STANDARD-v1.0.md`, applies the shared route component/data registry, and repairs WP3 HTML/PDF to the professional whitepaper artifact shell.
