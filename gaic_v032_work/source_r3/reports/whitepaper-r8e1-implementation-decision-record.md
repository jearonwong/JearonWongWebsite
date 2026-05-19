# WHITEPAPER-R8E-1 Implementation Decision Record

**Date:** 2026-05-19

## Owner-Approved Decisions

| Decision Area | Owner Decision |
| --- | --- |
| Copyright wording | `Copyright © 2026 Jearon Wong. All rights reserved.` |
| Footer identity | Do not include `Protocol Architect for the Agent Era` in every footer. Keep footer restrained. |
| Page numbers | Cover omits standard footer. Status/TOC may use restrained footer if visually safe. Body uses normal page numbers. |
| Footer default | Body pages include running title, document ID/version, `jearonwong.com`, page number, and copyright. |
| Boundary marker | Do not place full boundary language on every page. Use concise boundary context on status, sensitive scoring/comparison, and source/citation pages. |
| HTML | Preserve HTML Web Reading Profile. Do not force public HTML into A4/PDF layout. |
| Public DOCX | Remain offboarded. Do not reintroduce public DOCX files or links. |
| Table strategy | No universal table style. Decide per table by purpose, density, comparison importance, column count, and readability. |
| High-comparison tables | Preserve comparison through scorecard, heatmap, split matrix, or landscape matrix as appropriate. Avoid row-card default. |
| Low-comparison tables | Registry, evidence, checklist, source, and inventory tables may use row-card when side-by-side comparison is not the reader task. |

## Implementation Scope

- Patch PDF-only renderer/CSS/template logic in `render_whitepaper_r8_a4_pdf.py`.
- Add internal proof output support so public PDFs are not replaced before QA.
- Improve semantic pagination through page family, heading orphan, landscape module, and continuation controls.
- Preserve matrix comparison for high-comparison tables.
- Add score-first visual hierarchy for GAIC score overview.
- Keep dimension heatmap and explanatory context together.
- Add restrained PDF footer/copyright system.
- Regenerate GAIC and AIAAWP public PDFs only after internal proof QA passes.
- Update integrity surfaces only after public replacement.

## Non-Goals

- No GAIC score, methodology, MRO definition, or argument/source-claim changes.
- No AIAAWP AARM, MRO, argument, or source-claim changes.
- No public HTML mutation.
- No public DOCX reintroduction.
- No Final Seal, production live verification, certification, assurance opinion, legal compliance proof, regulator approval, endorsement, vendor ranking, procurement recommendation, SEO/GEO uplift, indexing, answer-engine recognition, or external adoption claim.

## Risk Controls

- Internal proof PDFs are generated under `gaic_v032_work/source_r3/reports/whitepaper-r8e1-internal-proof/`.
- Public PDF replacement is blocked unless internal proof QA passes.
- Proof images are rendered for cover, frontmatter, key table modules, appendices, sources, and final pages.
- Public HTML hashes are checked before and after PDF generation.
- Public DOCX absence is rechecked.
- Checksum, manifest, hub hash, and JSON-LD references are reconciled after public PDF changes.

## Proof-Before-Public Rule

Public PDFs must not be replaced until internal proof confirms:

- no cover split,
- no vertical single-character table text,
- no broken table comparison,
- no detached table intro,
- no major orphan heading in checked pages,
- no catastrophic clipping,
- header/footer acceptable,
- content parity intact.
