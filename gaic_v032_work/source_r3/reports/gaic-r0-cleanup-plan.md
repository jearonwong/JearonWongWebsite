# GAIC R0 Cleanup Plan

**Task:** GAIC-R0-CLEANUP-AND-RELEASE-HYGIENE  
**Date:** May 12, 2026  
**Status:** APPROVED FOR EXECUTION

## Scope

Clean historical GAIC draft/output clutter from the current repository tree while preserving the sealed publication candidate, active source, final renderer/style files, and governance traceability.

## Remove

1. Remove every old generated phase output directory under `gaic_v032_work/source_r3/out/phase_*`.
2. Remove rendered PDF page folders and contact sheets contained in those old phase output directories.
3. Remove old generated HTML/PDF/DOCX/Markdown/JSON artifacts contained in those old phase output directories.
4. Remove untracked top-level GAIC temporary/generated directories:
   - `gaic_v032_work/output/`
   - `gaic_v032_work/output_r2/`
   - `gaic_v032_work/output_r3/`
   - `gaic_v032_work/pdf_out/`
   - `gaic_v032_work/render_final/`
   - `gaic_v032_work/render_v031_converted/`
   - `gaic_v032_work/pydeps/`
   - `gaic_v032_work/lo_profile_final/`
   - `gaic_v032_work/lo_profile_final2/`
   - `gaic_v032_work/lo_profile_final3/`
   - `gaic_v032_work/lo_profile_final4/`
   - `gaic_v032_work/lo_profile_final5/`
5. Remove untracked top-level obsolete scratch scripts/files:
   - `gaic_v032_work/clean_forbidden_phrases.py`
   - `gaic_v032_work/compact_docx.py`
   - `gaic_v032_work/convert_and_qa.py`
   - `gaic_v032_work/generate_docs.py`
   - `gaic_v032_work/patch_gaic_v032.py`
   - `gaic_v032_work/rebuild_document.py`
   - `gaic_v032_work/reconstruct_complete_document.py`
   - `gaic_v032_work/remediate_document.py`
   - `gaic_v032_work/v031_converted.docx`
   - `gaic_v032_work/v031_extracted_pages.txt`
   - `gaic_v032_work/v031_outline.txt`
6. Remove `.DS_Store` files under `gaic_v032_work/`.

## Preserve

1. Preserve all sealed publication candidate files under `gaic_v032_work/source_r3/out/publication_candidate/`.
2. Preserve `gaic_v032_work/source_r3/out/publication_candidate/publication-candidate-manifest.json`.
3. Preserve `gaic_v032_work/source_r3/reports/publication-candidate-seal-report.md`.
4. Preserve `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`.
5. Preserve active source files under `sections/`, `appendices/`, `inventories/`, and `tables/`.
6. Preserve final renderer/style files under `scripts/` and `design/`.
7. Preserve governance reports needed to understand the sealed state.

## Verification After Removal

1. `gaic_v032_work/source_r3/out/` must contain only `publication_candidate/`.
2. Sealed HTML/PDF/DOCX/log/manifest must remain.
3. Sealed artifact SHA256 hashes must match the sealed manifest and known checksums.
4. `publication-candidate-seal-report.md` and SOURCE MASTER must remain.
5. No `.backup`, `.bak`, `*~`, or `.DS_Store` files should remain under `gaic_v032_work/`.
6. No old public-facing generated artifacts should remain outside `publication_candidate/`.

