# WP2-R4 Artifact Generation Decision

**Task ID:** WP2-R4-PUBLICATION-CANDIDATE-PREPARATION  
**Date:** May 17, 2026  
**Decision:** Option B - source package and generation plan only

## Tooling Reviewed

Existing artifact tooling is tailored to GAIC WP1 and prior Phase 1D / publication-candidate workflows:

- `gaic_v032_work/source_r3/scripts/generate_r3_phase1d7_html_publication.py` through `generate_r3_phase1d13f_html_publication.py`.
- Existing sealed candidate output under `gaic_v032_work/source_r3/out/publication_candidate/`.
- Public GAIC artifacts under `public/research/global-ai-compliance-white-paper-2026/`.

## Why Option A Was Not Chosen

R4 does not generate candidate HTML/PDF/DOCX because:

- The renderer scripts assume GAIC WP1 source structure and publication shell behavior.
- Direct reuse would require script adaptation and visual QA beyond this safe preparation wave.
- The sealed/public GAIC artifact workflow must remain untouched.
- A WP2-specific generation wave can isolate output under `wp2_r4_publication_candidate/out/` and checksum artifacts after visual/source/boundary QA.

## Option B Output

- Candidate source package created.
- Metadata and JSON-LD plans created.
- Source register and citation map created.
- Manifest and checksums created.
- Generation plan created at `wp2_r4_publication_candidate/generation/wp2-r4-generation-plan.md`.

## Boundary

No public WP2 page, public route, public HTML/PDF/DOCX artifact, live launch, final/sealed claim, audit standard, certification, assurance opinion, legal proof, regulator approval, procurement guidance, vendor ranking, or endorsement claim is created.
