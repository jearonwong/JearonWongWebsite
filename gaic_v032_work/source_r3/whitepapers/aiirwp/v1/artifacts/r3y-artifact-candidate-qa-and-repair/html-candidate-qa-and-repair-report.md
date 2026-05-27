# HTML Candidate QA and Repair Report

## Candidate

`gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html`

## QA Results

| Check | Result | Notes |
|---|---|---|
| HTML exists and opens as an internal artifact | PASS | Static HTML candidate exists under internal artifacts workspace. |
| Visible internal-status / non-claim banner | PASS | Top banner states internal artifact candidate and blocks public/final/sealed/release-ready/public candidate/legal/insurance/coverage/underwriting/certification/score/standard claims. |
| No public release implication | PASS_WITH_CONTEXTUAL_HITS | Public release wording appears only as blocked/unauthorized boundary language. |
| Headings, parts, chapters, appendices preserved | PASS | Structure scan passed through Appendix H and Appendix I deferred note. |
| Source refs visible | PASS | `[1]` through `[62]` present in HTML. |
| Table IDs visible | PASS | `T-02-01`, `T-04-01` through `T-27-01` present in HTML. |
| Wide tables contained | PASS_WITH_NOTES | 37 tables are wrapped with `table-scroll`; CSS provides horizontal overflow for screen and fixed/word-wrapping print rules. |
| Appendix navigation usable enough for internal candidate | PASS_WITH_NOTES | Appendices are present as document headings; no public navigation repair performed. |
| Public route/sitemap/robots/llms/entity/CTA unaffected | PASS | No public route files were changed by R3Y. |

## Repair Result

No HTML repair was needed. The HTML candidate was left unchanged and served as the source for the repaired internal PDF candidate.

