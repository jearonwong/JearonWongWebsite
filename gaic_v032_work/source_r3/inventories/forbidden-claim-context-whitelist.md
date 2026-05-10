# Forbidden-Claim Context Whitelist

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Status:** PHASE 1C-FINAL FORBIDDEN-CONTEXT WHITELIST COMPLETE  
**Last Updated:** May 10, 2026

## Purpose

This whitelist classifies broad forbidden-claim grep matches so Phase 1D proofing can distinguish allowed boundary/negative/historical contexts from prohibited affirmative claims. It does not permit positive claims of certification, regulatory approval, procurement recommendation, vendor ordering, legal compliance proof, or exclusive validation paths.

## Grep Scope

Active-source grep scope:

- `GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `sections/`
- `appendices/`
- `inventories/`
- `reports/known-issues.md`
- `reports/reconstruction-notes.md`
- `reports/phase-1c-claim-level-revalidation-report.md`

Forbidden terms:

- certifies compliance
- certification authority
- regulator-approved
- regulatory approval
- proves legal compliance
- guarantees compliance
- only validation path
- official compliance standard
- conformity assessment body
- market endorsement
- recommended vendor
- best system
- procurement winner
- winner
- leader
- trails
- final vendor score
- MPLP is required
- MPLP certifies
- Validation Lab certifies compliance

## Classification Summary

| Category | Match Lines | Positive Claim Count | Whitelist Decision |
|---|---:|---:|---|
| Negative boundary statement | 76 | 0 | Allowed; statements explicitly negate forbidden claims |
| Forbidden wording table | 30 | 0 | Allowed; table columns document forbidden framing |
| Historical report / completion report | 50 | 0 | Allowed; historical remediation or completion records |
| Non-claim disclaimer | 78 | 0 | Allowed; disclaimers, taxonomy labels, or incidental substrings such as audit trails / leadership |
| Quoted grep verification | 2 | 0 | Allowed; terms appear only as verification terms |
| Positive forbidden claim | 0 | 0 | No positive forbidden claim found |

**Total matched lines:** 236  
**Total term matches:** 309  
**Positive forbidden claim count:** 0

## Term Count Summary

| Term | Term Matches | Allowed Context |
|---|---:|---|
| trails | 82 | Mostly audit trails / boundary and historical contexts |
| regulatory approval | 71 | Negative boundary, forbidden wording, and historical contexts |
| leader | 34 | Mostly market leadership / senior leadership substring contexts |
| certification authority | 24 | Negative boundary and forbidden wording contexts |
| regulator-approved | 19 | Negative boundary and forbidden wording contexts |
| conformity assessment body | 11 | Negative boundary and forbidden wording contexts |
| only validation path | 10 | Negative boundary and forbidden wording contexts |
| proves legal compliance | 10 | Negative boundary and forbidden wording contexts |
| MPLP certifies | 7 | Forbidden wording table / quoted non-claim contexts |
| MPLP is required | 6 | Negative boundary and forbidden wording contexts |
| Validation Lab certifies compliance | 6 | Forbidden wording table / quoted non-claim contexts |
| market endorsement | 6 | Negative boundary contexts |
| official compliance standard | 5 | Forbidden wording table contexts |
| recommended vendor | 4 | Negative boundary / grep verification contexts |
| guarantees compliance | 4 | Negative boundary and forbidden wording contexts |
| final vendor score | 3 | Negative boundary / grep verification contexts |
| best system | 2 | Grep verification / non-claim contexts |
| winner | 2 | Grep verification / historical context |
| certifies compliance | 2 | Forbidden wording contexts |
| procurement winner | 1 | Grep term list / historical context |

## File-Level Whitelist

| File / Area | Match Lines | Category | Decision |
|---|---:|---|---|
| `appendices/appendix-a-placeholder.md` | 1 | Negative boundary statement | Allowed |
| `appendices/appendix-b-placeholder.md` | 5 | Negative boundary statement | Allowed |
| `appendices/appendix-c-placeholder.md` | 1 | Negative boundary statement | Allowed |
| `appendices/appendix-d-placeholder.md` | 2 | Negative boundary / non-claim wording | Allowed |
| `appendices/appendix-e-placeholder.md` | 12 | Negative boundary / non-claim rubric wording | Allowed |
| `appendices/appendix-f-placeholder.md` | 46 | Negative boundary / non-claim rubric wording | Allowed |
| `appendices/appendix-g-placeholder.md` | 4 | Negative boundary / non-claim disclaimer | Allowed |
| `appendices/appendix-h-placeholder.md` | 2 | Negative boundary statement | Allowed |
| `inventories/claim-evidence-register.md` | 2 | Forbidden wording table / negative boundary | Allowed |
| `reports/known-issues.md` | 15 | Historical report / completion report | Allowed |
| `reports/reconstruction-notes.md` | 35 | Historical report / completion report | Allowed |
| `reports/phase-1c-claim-level-revalidation-report.md` | 5 | Negative boundary / quoted grep verification | Allowed |
| `sections/00-front-matter.md` | 5 | Forbidden wording table / negative boundary / disclaimer | Allowed |
| `sections/01-scope-methodology.md` | 6 | Forbidden wording table / negative boundary / disclaimer | Allowed |
| `sections/07-rccs-regulatory-compliance-coverage.md` | 8 | Negative boundary / disclaimer | Allowed |
| `sections/08-alcs-agentic-lifecycle-conformance.md` | 3 | Negative boundary / disclaimer | Allowed |
| `sections/09-composite-scoring-method.md` | 3 | Negative boundary / disclaimer | Allowed |
| `sections/10-enterprise-control-crosswalk.md` | 2 | Negative boundary / disclaimer | Allowed |
| `sections/11-comparative-field.md` | 14 | Negative boundary / disclaimer | Allowed |
| `sections/12-detailed-system-mappings.md` | 14 | Negative boundary / audit-trail / market-leadership disclaimer | Allowed |
| `sections/13-mplp-deep-mapping.md` | 13 | Forbidden wording table / disclaimer | Allowed |
| `sections/14-evidence-validation-placeholder.md` | 17 | Forbidden wording table / negative boundary | Allowed |
| `sections/16-companion-paper-boundary.md` | 9 | Forbidden wording table / negative boundary / disclaimer | Allowed |
| `sections/17-adoption-roadmap-placeholder.md` | 2 | Negative boundary statement | Allowed |
| `sections/18-conclusion-placeholder.md` | 10 | Forbidden wording table / negative boundary | Allowed |

## Positive-Claim Review

No positive forbidden claim remains in active source. Matches are allowed only where they negate, warn against, quote, or historically record forbidden wording.

## Phase 1D Use

Phase 1D proofing should rerun the same grep after DOCX/PDF generation. Any new positive context is a blocker. The whitelist does not automatically approve new wording introduced after this preflight.

---

**End of Inventory**
