# GAIC R0 Artifact Inventory

**Task:** GAIC-R0-CLEANUP-AND-RELEASE-HYGIENE  
**Date:** May 12, 2026  
**Status:** PASS - cleanup candidates identified before deletion

## Must Keep

| Path | Type | Size | Decision | Reason |
|---|---:|---:|---|---|
| `gaic_v032_work/source_r3/out/publication_candidate/` | sealed output directory | 12M | KEEP | Only sealed publication candidate output source for R1 release work. |
| `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.html` | sealed HTML | 1.4M | KEEP | HTML/PDF visual authority artifact; checksum sealed. |
| `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.pdf` | sealed PDF | 10M | KEEP | Human review artifact; checksum sealed. |
| `gaic_v032_work/source_r3/out/publication_candidate/Global-AI-Compliance-White-Paper-2026-v0.3.2-FRC-R3-HTML-Publication-Candidate.docx` | sealed DOCX | 268K | KEEP | Editable derivative; checksum sealed. |
| `gaic_v032_work/source_r3/out/publication_candidate/phase_1d13f_generation_log.json` | sealed generation log | 107K | KEEP | Reproducibility evidence; checksum sealed. |
| `gaic_v032_work/source_r3/out/publication_candidate/publication-candidate-manifest.json` | sealed manifest | 4.3K | KEEP | Release manifest and checksum record. |
| `gaic_v032_work/source_r3/reports/publication-candidate-seal-report.md` | governance report | 3.0K | KEEP | Seal report required for traceability. |
| `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md` | source master | tracked source | KEEP | Canonical source hierarchy and current sealed status. |
| `gaic_v032_work/source_r3/sections/` | active source | tracked source | KEEP | Final white paper body source. |
| `gaic_v032_work/source_r3/appendices/` | active source | tracked source | KEEP | Final white paper appendix source. |
| `gaic_v032_work/source_r3/inventories/` | traceability inventories | tracked source | KEEP | Table, figure, citation, source, and claim traceability. |
| `gaic_v032_work/source_r3/tables/` | source table support | tracked source | KEEP | Reproducibility support. |
| `gaic_v032_work/source_r3/scripts/` | renderer scripts | tracked source | KEEP | Final renderer/style generation lineage remains reproducible. |
| `gaic_v032_work/source_r3/design/` | style/design docs | tracked source | KEEP | Publication style and VI rules. |
| `gaic_v032_work/source_r3/reports/known-issues.md` | governance report | tracked source | KEEP | Current limitation record. |
| `gaic_v032_work/source_r3/reports/reconstruction-notes.md` | governance report | tracked source | KEEP | Reconstruction lineage and decisions. |

## Candidate For Cleanup

| Path | Type | Size | Decision | Reason |
|---|---:|---:|---|---|
| `gaic_v032_work/source_r3/out/phase_1d/` | tracked phase output | 66M | DELETE | Old draft output superseded by sealed publication candidate. |
| `gaic_v032_work/source_r3/out/phase_1d2/` | tracked phase output | 72M | DELETE | Old publication draft output. |
| `gaic_v032_work/source_r3/out/phase_1d3/` | tracked phase output | 105M | DELETE | Old public/evidence split draft output. |
| `gaic_v032_work/source_r3/out/phase_1d4/` | tracked phase output | 65M | DELETE | Old full-whitepaper draft output. |
| `gaic_v032_work/source_r3/out/phase_1d6/` | tracked phase output | 73M | DELETE | Old final-generation draft output. |
| `gaic_v032_work/source_r3/out/phase_1d7/` | tracked phase output | 50M | DELETE | Old HTML publication draft output. |
| `gaic_v032_work/source_r3/out/phase_1d8/` | tracked phase output | 54M | DELETE | Old HTML refinement draft output. |
| `gaic_v032_work/source_r3/out/phase_1d9/` | tracked phase output | 66M | DELETE | Old evaluation-results draft output. |
| `gaic_v032_work/source_r3/out/phase_1d10/` | tracked phase output | 67M | DELETE | Old scored-results draft output. |
| `gaic_v032_work/source_r3/out/phase_1d11/` | tracked phase output | 67M | DELETE | Old citation-closure draft output. |
| `gaic_v032_work/source_r3/out/phase_1d12/` | tracked phase output | 67M | DELETE | Old two-layer RCCS draft output. |
| `gaic_v032_work/source_r3/out/phase_1d13b/` | tracked phase output | 70M | DELETE | Old RCCS-M integration draft output. |
| `gaic_v032_work/source_r3/out/phase_1d13d/` | tracked phase output | 73M | DELETE | Old methodology-correction draft output. |
| `gaic_v032_work/source_r3/out/phase_1d13e/` | tracked phase output | 69M | DELETE | Old style-shell draft output. |
| `gaic_v032_work/source_r3/out/phase_1d13f/` | tracked phase output | 70M | DELETE | Superseded by sealed copy in `out/publication_candidate/`. |
| `gaic_v032_work/output/` | untracked generated output | 4.5M | DELETE | Superseded v0.3.2 Final-RC output outside active source tree. |
| `gaic_v032_work/output_r2/` | untracked generated output | 4.5M | DELETE | Superseded R2 output outside active source tree. |
| `gaic_v032_work/output_r3/` | untracked source duplicate | 4.0K | DELETE | Duplicate source-master copy outside active source path. |
| `gaic_v032_work/pdf_out/` | untracked generated output | 3.4M | DELETE | Superseded PDF output. |
| `gaic_v032_work/render_final/` | untracked rendered pages | 52M | DELETE | Superseded rendered-page folder. |
| `gaic_v032_work/render_v031_converted/` | untracked rendered pages | 48M | DELETE | Old v0.3.1 conversion render folder. |
| `gaic_v032_work/pydeps/` | untracked local dependencies | 251M | DELETE | Local generated dependency folder, not release traceability. |
| `gaic_v032_work/lo_profile_final*/` | untracked LibreOffice profile dirs | 488K each | DELETE | Temporary conversion profiles. |
| `gaic_v032_work/*.py` scratch scripts | untracked scripts | small | DELETE | Obsolete reconstruction/conversion scratch scripts outside final renderer path. |
| `gaic_v032_work/v031_*` files | untracked old inputs/extracts | small to medium | DELETE | Old v0.3.1 conversion artifacts outside active source. |
| `.DS_Store` under `gaic_v032_work/` | ignored OS metadata | small | DELETE | Local Finder metadata. |

## Needs Review / Do Not Delete Automatically

| Path | Type | Decision | Reason |
|---|---|---|---|
| `gaic_v032_work/source_r3/reports/phase-*.md` | historical reports | KEEP | Internal traceability; not public-current artifacts. |
| `gaic_v032_work/source_r3/reports/gaic-r0-*.md` | R0 reports | KEEP | Required cleanup evidence. |
| `gaic_v032_work/source_r3/scripts/generate_r3_phase*.py` | renderer history | KEEP | Required for reproducibility and source lineage. |
| `gaic_v032_work/source_r3/design/*.md` | style lineage | KEEP | Required for publication-shell traceability. |

## Unrelated / Do Not Touch

| Path | Decision | Reason |
|---|---|---|
| `src/` | DO NOT TOUCH | Site pages/components are outside this cleanup wave unless a stale public link is found. |
| `public/` | DO NOT TOUCH | Public site assets are inspected separately for stale exposure. |
| `docs/` | DO NOT TOUCH | No automatic deletion unless GAIC public-current conflict is found. |
| `dist/` | DO NOT TOUCH | Build output is excluded from source cleanup. |
| Non-GAIC project content | DO NOT TOUCH | Outside task scope. |

