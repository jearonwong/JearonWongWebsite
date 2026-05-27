# PDF Candidate QA and Repair Report

## Candidate

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf`

## Initial Finding

R3Y detected that the R3X PDF candidate contained Chrome default print header/footer text in extracted PDF text: local `file://` URL lines and timestamp/page footer lines appeared on every page. This was an internal artifact quality defect, not a public-route or source-truth defect.

## Repair Performed

R3Y regenerated the internal PDF candidate from the existing internal HTML candidate using local Chrome headless with the `--no-pdf-header-footer` print option. No new public tooling, public route, or large generation system was introduced.

## QA Results After Repair

| Check | Result | Notes |
|---|---|---|
| PDF exists | PASS | Repaired internal PDF candidate exists. |
| Page count recorded | PASS | `pdfinfo` reports 117 A4 pages. |
| Text extraction works | PASS | `pdftotext -layout` extracted 384119 bytes. |
| Title detected | PASS | `Agentic AI Insurability` detected. |
| Chapters 1-28 detected | PASS | No missing chapter markers. |
| Appendix A-H detected | PASS | No missing appendix markers. |
| Appendix I deferred note detected | PASS | Deferred note detected. |
| Source refs `[1]` and `[62]` detected | PASS | Full `[1]` through `[62]` scan also passed. |
| Table IDs detected | PASS | `T-02-01`, `T-04-01` through `T-27-01` detected. |
| No Chrome local file URL footer | PASS | `file://` no longer appears in extracted PDF text. |
| No default date/header footer | PASS | R3X default timestamp header/footer no longer appears. |
| No public PDF status claim | PASS | Candidate remains internal only. |
| No final/sealed/release-ready/public release claim | PASS_WITH_CONTEXTUAL_HITS | Terms appear only in boundary statements blocking those statuses. |

## Wide-Table Page Markers

| Table ID | First detected PDF text page |
|---|---:|
| `T-02-01` | 13 |
| `T-09-01` | 39 |
| `T-14-01` | 56 |
| `T-18-01` | 66 |
| `T-21-01` | 76 |
| `T-27-01` | 93 |

## Limitation

R3Y performed machine text/page-count QA and repaired the visible default print footer/header defect. Full human visual inspection of every wide table remains a later QA gate before any public route restoration execution.

