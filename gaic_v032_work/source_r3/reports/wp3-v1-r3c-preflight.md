# WP3-V1-R3C Preflight

## Repo Truth

- Repository URL: `https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Starting HEAD: `5e4ffa9812648d1e8883c511cc30e1c561c51d6c`
- Origin HEAD before drafting: `5e4ffa9812648d1e8883c511cc30e1c561c51d6c`
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
  - verified source inventory
  - source-to-claim map
  - source-to-chapter map
  - WP1-to-insurability mapping register
  - WP2-to-claim-evidence mapping register
  - claims reconstruction source register
  - reinsurance/aggregation source register
  - insurer governance/regulatory register
  - silent AI exposure matrix
  - open source gaps
- R2 source-grounded outline inspected:
  - Part III outline
  - chapter claim boundary map
  - chapter reader pain map
  - table/figure inventory
- R3A inspected:
  - Front Matter and Part I body draft
  - R3A Editorial QA and R3B readiness decision
- R3B inspected:
  - Part II body draft
  - source-note register
  - claim-boundary check
  - reader-pain check
  - WP1/WP2 bridge check
  - table inventory
  - continuity notes for R3C
  - R3B preflight, boundary QA, build/validation, and final QA reports
- Rejected v0.2 archive inspected as historical boundary only.

## Scope Confirmation

- R3C drafts Part III body only.
- R3C preserves accepted R3B as expanded Part II through Chapter 8.
- R3C begins Part III at Chapter 9.
- R3C does not repair R3B or renumber accepted R3B text.
- R3C does not draft Part IV, Part V, appendices, implementation guidance, artifact generation, public staging, public CTAs, HTML, PDF, DOCX, manifest, or checksum.
- R3C does not use withdrawn v0.2 as source truth or citation source.
- Pre-existing `public/social/*` untracked files are out of scope and must not be staged.

## Structure Decision

The canonical v1 workspace already contains R3A and R3B draft packages under `whitepapers/aiirwp/v1/draft/`. R3C therefore creates the parallel package:

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3c-part-iii/`

This preserves wave-level traceability and avoids reopening accepted R3A/R3B drafts.
