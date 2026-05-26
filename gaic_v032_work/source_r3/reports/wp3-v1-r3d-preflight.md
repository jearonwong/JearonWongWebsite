# WP3-V1-R3D Preflight

## Repo Truth

- Repository URL: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Starting HEAD: `52a7464adf2942688918f1ab2b0a71cec8f5b740`
- Origin HEAD before drafting: `52a7464adf2942688918f1ab2b0a71cec8f5b740`
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
  - AI-linked cyber/sublimit register
  - reinsurance/aggregation source register
  - claims reconstruction source register
  - WP1/WP2 mapping registers
- R2 source-grounded outline inspected:
  - Part IV underwriting outline
  - premium variables outline
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
  - R3C source-note register, table inventory, final QA, and boundary QA
- Rejected v0.2 archive inspected as historical boundary only.

## Scope Confirmation

- R3D drafts Part IV body only.
- R3D preserves accepted R3B as expanded Part II through Chapter 8.
- R3D preserves accepted R3C as Part III through Chapter 13.
- R3D begins Part IV at Chapter 14.
- R3D does not repair R3C or renumber accepted R3B/R3C text.
- R3D does not draft Part V, Part VI, appendices, implementation guidance, artifact generation, public staging, public CTAs, HTML, PDF, DOCX, manifest, or checksum.
- R3D does not use withdrawn v0.2 as source truth or citation source.
- Pre-existing `public/social/*` untracked files are out of scope and must not be staged.

## Structure Decision

The canonical v1 workspace already contains R3A, R3B, and R3C draft packages under `whitepapers/aiirwp/v1/draft/`. R3D therefore creates the parallel package:

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3d-part-iv/`

This preserves wave-level traceability and avoids reopening accepted R3A/R3B/R3C drafts.
