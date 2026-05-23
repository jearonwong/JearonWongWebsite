# WP3-V1-R2 Build and Validation

**Task:** WP3-V1-R2-SOURCE-GROUNDED-OUTLINE
**Date:** May 24, 2026
**Scope:** Validate R2 source-grounded outline package and governance updates.

## Commands Run

| Check | Result |
|---|---|
| `npm run typecheck` | PASS: 0 errors; existing Astro inline `onload` hints only |
| `npm run lint` | PASS |
| `npm run build` | PASS: 94 pages built |
| `git diff --check` | PASS |
| Registry YAML parse | PASS: `whitepaper-series-registry.yaml` parsed |
| JSON parse | PASS: `package.json` and public entity graph parsed |
| No-DOCX scan under `public/research` and `dist/research` | PASS: no `.docx` files found |
| Active v0.2 promotion regression scan | PASS with expected withdrawal-context matches only |
| AIIRWP public-candidate metadata regression scan | PASS: old global Person JSON-LD label removed |

## Public Artifact Validation

| Area | Result |
|---|---|
| WP3 public route | Remains withdrawn / under v1.0 rewrite |
| WP3 route robots | Built route includes `noindex, follow` |
| WP3 public artifact directory | No active files under `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` |
| WP3 HTML/PDF/manifest/checksum | No current public artifact promoted |
| WP3 DOCX | None introduced |
| Public CTAs | No public WP3 artifact CTA restored |
| Global Person JSON-LD | Bounded accidental-regression repair: AIIRWP label now says `Under v1.0 Rewrite`, not public candidate |
| GAIC public artifacts | Unchanged |
| AIAAWP public artifacts | Unchanged |

## v0.2 Regression Scan

The scan found only expected references in withdrawal, rejected-version, no-current-artifact, and robots-disallow contexts:

- WP3 route metadata and built HTML state the prior v0.2 public candidate is withdrawn.
- Registry files retain the rejected v0.2 version and do-not-use paths.
- `robots.txt` disallows obsolete v0.2 artifact paths.
- `llms.txt` states that no current AIIRWP HTML, PDF, manifest, checksum, or DOCX artifact is promoted.
- Entity graph records v0.2 as withdrawn and rejected for traceability only.

No active v0.2 promotion regression was found.

## Bounded Public Metadata Repair

R2 found one machine-readable label in `src/data/schema.ts` that still described AIIRWP as `Public Research Candidate` inside global Person JSON-LD `subjectOf`. This was inconsistent with the R0/R1 canonical registry and the current noindex withdrawn route. The label was repaired to:

`Agentic AI Insurability & Risk Transfer White Paper 2026 — Under v1.0 Rewrite`

This repair does not restore a public artifact, change the WP3 route status, create a public CTA, create a manifest/checksum/PDF/DOCX, or publish WP3. Rebuild and rescans confirmed the old AIIRWP public-candidate label is no longer present in `src`, `public`, or `dist`.

## Governance Validation

- `current-status.md` now records R2 completion while keeping WP3 status as withdrawn / v1.0 rewrite in progress.
- `GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md` records the R2 current status and wave summary.
- `known-issues.md` and `reconstruction-notes.md` include R2 completion records.
- WP3 v1.0 body remains incomplete.
- R3 is the next authorized formal body drafting wave.

## Worktree / Staging Note

Pre-existing untracked `public/social/*` files remain outside R2 scope and must not be staged.

## Decision

Build and validation pass. R2 is ready for final QA and commit.
