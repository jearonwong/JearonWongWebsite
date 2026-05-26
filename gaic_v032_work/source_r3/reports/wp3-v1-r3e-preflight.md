# WP3-V1-R3E Preflight

## Repo Truth

- Repository URL: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Starting HEAD: `79a623dd114a02537f299c7784206a840a5aa448`
- Origin HEAD before drafting: `79a623dd114a02537f299c7784206a840a5aa448`
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
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/outline/AIIRWP-v1.0-rewrite-architecture.md`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/qa/AIIRWP-v1.0-writing-rules.md`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/qa/AIIRWP-v1.0-body-quality-gate.md`
- R1 source research inspected:
  - source inventory
  - source-to-claim map
  - source-to-chapter map
  - claims reconstruction source register
  - silent AI exposure matrix
  - AI-linked cyber/sublimit register
  - insurer governance/regulatory register
  - WP1/WP2 mapping registers
- R2 source-grounded outline inspected:
  - Part V claims and disputes outline
  - responsibility and coverage boundary outline
  - chapter claim boundary map
  - chapter reader pain map
  - table/figure inventory
- R3A inspected:
  - Front Matter and Part I body draft
  - R3A Editorial QA and R3B readiness decision
- R3B inspected:
  - Part II body draft and continuity notes
  - R3B QA reports
- R3C inspected:
  - Part III body draft and continuity notes
  - R3C QA reports
- R3D inspected:
  - Part IV body draft and continuity notes
  - R3D QA reports
- Rejected v0.2 archive inspected as historical boundary only.

## Scope Confirmation

- R3E drafts Part V body only.
- R3E preserves accepted R3A through Chapter 3, R3B through Chapter 8, R3C through Chapter 13, and R3D through Chapter 18.
- R3E begins Part V at Chapter 19.
- R3E does not repair R3D or renumber accepted R3A/R3B/R3C/R3D text.
- R3E does not draft Part VI, appendices, implementation guidance, artifact generation, public staging, public CTAs, HTML, PDF, DOCX, manifest, or checksum.
- R3E does not use withdrawn v0.2 as source truth or citation source.
- Pre-existing `public/social/*` untracked files are out of scope and must not be staged.

## Structure Decision

The canonical v1 workspace already contains R3A, R3B, R3C, and R3D draft packages under `whitepapers/aiirwp/v1/draft/`. R3E therefore creates the parallel package:

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3e-part-v/`

This preserves wave-level traceability and avoids reopening accepted R3A/R3B/R3C/R3D drafts.
