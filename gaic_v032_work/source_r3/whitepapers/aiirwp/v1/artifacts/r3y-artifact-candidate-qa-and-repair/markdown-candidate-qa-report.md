# Markdown Candidate QA Report

## Candidate

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-publication-candidate-source.md`

## QA Results

| Check | Result | Notes |
|---|---|---|
| Frontmatter/status block exists and is correct | PASS | Includes title, subtitle, version, wave, source basis, source basis commit, internal candidate status, no-public route status, source ref range, table range, appendix status, rejected v0.2 exclusion, non-claim status, and no-DOCX status. |
| Chapters 1-28 present | PASS | Machine scan found no missing chapter markers. |
| Appendix A-H present | PASS | Machine scan found all required appendices. |
| Appendix I deferred note present | PASS | Deferred note detected. |
| Source refs `[1]` through `[62]` present | PASS | No missing refs. |
| Table IDs preserved | PASS | `T-02-01` and `T-04-01` through `T-27-01` present. |
| No duplicate body table headings | PASS_WITH_NOTES | Table IDs appear multiple times because Appendix H inventory and cross-references intentionally repeat them; body table headings remain preserved and not duplicated as separate body tables. |
| Rejected v0.2 not source truth | PASS | Candidate source states rejected v0.2 exclusion and uses R3P as source basis. |
| No DOCX authorization | PASS | No DOCX status remains unauthorized. |
| No final/sealed/release-ready/public release claim | PASS_WITH_CONTEXTUAL_HITS | Terms appear only in negative boundary/status language. |
| No public candidate status | PASS_WITH_CONTEXTUAL_HITS | Candidate source uses internal publication-candidate source status and blocks public candidate status. |
| Boundary language intact | PASS | Non-claim status preserved. |

## Repair Result

No Markdown repair was needed. The Markdown candidate source was left unchanged.

