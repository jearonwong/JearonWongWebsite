# WHITEPAPER-R8E-4 Preflight

## Repo Truth

| Check | Result |
|---|---|
| Repository | `https://github.com/jearonwong/jearonwongwebsite.git` |
| Branch | `main` |
| Local HEAD before R8E-4 edits | `cf4622b000cf01f87bd8305f32fe8d57fc337b3c` |
| Origin HEAD before R8E-4 edits | `cf4622b000cf01f87bd8305f32fe8d57fc337b3c` |
| Pull status | `Already up to date.` |

## Worktree Status

Before R8E-4 edits, the worktree contained only unrelated untracked `public/social/*` assets. These files are outside the R8E-4 scope and must not be staged.

## Files Inspected

- `src/pages/index.astro`
- `gaic_v032_work/source_r3/reports/whitepaper-r8e3-homepage-exposure-decision-record.md`
- `gaic_v032_work/source_r3/reports/whitepaper-r8e3-visual-responsive-qa.md`
- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/reports/known-issues.md`
- `gaic_v032_work/source_r3/reports/reconstruction-notes.md`

## Current Homepage Finding

The R8E-3 homepage Research Series module exposed GAIC and AIAAWP as two equal desktop cards through `.research-series-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }`.

That layout made the two whitepapers read as peer alternatives instead of an ordered foundation-to-specialization series.

## Scope Confirmation

- R8E-4 repairs homepage series hierarchy only.
- PDFs, whitepaper artifacts, checksums, manifests, and standalone public whitepaper HTML artifacts should not change.
- Public DOCX remains offboarded.
- GAIC page count remains `485`.
- AIAAWP page count remains `118`.
- Production reverification remains required after this wave.
- Final Seal remains blocked.
