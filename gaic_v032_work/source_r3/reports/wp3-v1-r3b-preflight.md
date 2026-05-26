# WP3-V1-R3B Preflight

## Repo Truth

- Repository URL: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Starting HEAD: `3420eb8f9aff947c617d2fda7f4709b2f46f2acf`
- Origin HEAD before drafting: `3420eb8f9aff947c617d2fda7f4709b2f46f2acf`
- `git pull --ff-only`: already up to date
- Worktree before drafting: only pre-existing untracked `public/social/*` assets

## Inspected Source Truth

- Canonical registry inspected:
  - `gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml`
  - `gaic_v032_work/source_r3/whitepapers/registry/current-status.md`
  - `gaic_v032_work/source_r3/whitepapers/registry/repo-canonicalization-plan.md`
- AIIRWP v1.0 baseline inspected:
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/README.md`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/outline/AIIRWP-v1.0-proposed-toc.md`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/qa/AIIRWP-v1.0-writing-rules.md`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/qa/AIIRWP-v1.0-body-quality-gate.md`
- R1 source research inspected:
  - source inventory, source-to-claim map, source-to-chapter map, WP1 mapping, WP2 mapping
- R2 outline inspected:
  - master outline, Part II outline, chapter maps, table/figure inventory, boundary maps
- R3A draft and Editorial QA inspected:
  - R3A body
  - R3A continuity notes
  - R3B readiness decision
- Rejected v0.2 archive inspected as historical boundary only.

## Scope Confirmation

- R3B drafts Part II body only.
- R3B does not repair R3A.
- R3B does not draft Part III.
- R3B does not create public files, public artifacts, public staging, public CTAs, HTML, PDF, DOCX, manifest, or checksum.
- R3B does not use withdrawn v0.2 as source truth.
- Pre-existing `public/social/*` untracked files are out of scope and must not be staged.

## Structure Decision

The canonical v1 workspace already contains R3A under `draft/r3a-front-matter-and-part-i/`. R3B therefore creates the parallel package:

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3b-part-ii/`

This avoids modifying the accepted R3A draft and preserves wave-level traceability.
