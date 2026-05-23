# Repository Canonicalization Plan

R0 does not mass-delete historical WP3 folders and does not break build. It establishes canonical pointers first.

## Current Canonical

- `gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml`
- `gaic_v032_work/source_r3/whitepapers/registry/current-status.md`

## Active v1 Rewrite

- `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/`

## Historical Rejected

- `gaic_v032_work/source_r3/archive/wp3-rejected-v0.2/`
- `gaic_v032_work/source_r3/wp3_r15_candidate_artifacts/`
- `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/`
- `gaic_v032_work/source_r3/wp3_r15b_final_candidate_qa/`
- `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/`
- `gaic_v032_work/source_r3/launch/aiirwp-r17/`
- `gaic_v032_work/source_r3/reports/wp3-r15*.md`
- `gaic_v032_work/source_r3/reports/wp3-r16*.md`
- `gaic_v032_work/source_r3/reports/wp3-r17*.md`

These remain trace records only and must not be treated as v1.0 source truth.

## Historical Accepted for Body/Planning Context Only

- `gaic_v032_work/source_r3/wp3_r12_body_expansion_rewrite/`
- `gaic_v032_work/source_r3/wp3_r10_publication_grade_rewrite/`

These may inform failure analysis and body-quality lessons, but v1.0 must not use them as final body base.

## Older Historical Candidate / QA Folders

- `gaic_v032_work/source_r3/wp3_r6_candidate_artifacts/`
- `gaic_v032_work/source_r3/wp3_r6b_final_candidate_qa/`
- `gaic_v032_work/source_r3/wp3_r5_publication_candidate/`
- `gaic_v032_work/source_r3/wp3_r3_draft/`

These are historical and safe to archive later after owner approval.

## QA Reports

- `gaic_v032_work/source_r3/reports/wp3-rXX*`

These remain audit trail records. They should be classified in future cleanup by wave, not deleted.

## Launch Packs

- `gaic_v032_work/source_r3/launch/aiirwp-r8/`
- `gaic_v032_work/source_r3/launch/aiirwp-r17/`

These are historical and superseded by v1.0 rewrite status. They do not prove current release execution.

## Archive Candidates

Safe to archive later with owner approval:

- old `wp3_r3_*` through `wp3_r17_*` work products
- superseded launch packs
- duplicate proof screenshots
- obsolete public-candidate reports

## Do Not Touch in R0

- WP1 / GAIC public artifacts.
- WP2 / AIAAWP public artifacts.
- Shared site layout/components unless required for withdrawal.
- Pre-existing unrelated `public/social/*` untracked files.

## R1 Rule

WP3-V1-R1 must use `whitepapers/aiirwp/v1/research/` and must not create a new `wp3_rXX_*` source directory.
