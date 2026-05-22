# WP3-R15C Artifact Repair Summary

## Scope

WP3-R15C is internal artifact repair only. No public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, author release execution claim, insurer acceptance claim, coverage-ready claim, or underwriting-ready claim is made.

## Summary

R15C repaired the R15 internal candidate artifact profile in a new historical package, preserving the R12 accepted body and the R15 HTML direction while replacing the rejected 20-page PDF profile.

## Repaired Outputs

- `wp3_r15c_candidate_artifacts/input/AIIRWP-2026-v0.4-R15C-CANDIDATE-SOURCE.md`
- `wp3_r15c_candidate_artifacts/assets/responsibility-bridge.svg`
- `wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.html`
- `wp3_r15c_candidate_artifacts/out/AIIRWP-2026-v0.4-R15C-CANDIDATE.pdf`
- `wp3_r15c_candidate_artifacts/out/manifest.json`
- `wp3_r15c_candidate_artifacts/out/checksums.sha256`
- `wp3_r15c_candidate_artifacts/proof/`
- `wp3_r15c_candidate_artifacts/qa/`

## Repair Changes

- PDF profile expanded naturally from 20 A4 pages to 27 A4 pages.
- Cover white-band defect removed through a first-page PDF cover-background repair pass.
- Publication-family page identity added with short title, internal status, document ID, site, page number, and copyright.
- Appendix and source-note readability relaxed while preserving the numbered source-note model.
- Table matrix rendering preserved for high-comparison tables.
- Chapter 4 responsibility bridge figure preserved as rendered SVG.

## Decision

R15C artifact repair is complete with notes for R15D final candidate artifact QA.
