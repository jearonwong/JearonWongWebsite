# Full-Body Assembly Plan

## Purpose

This plan defines how R3H should assemble the first internal full-body Markdown draft of AIIRWP v1.0 from the accepted R3A-R3F draft packages. It does not assemble the body in R3G.

## Assembly Source Files

R3H should assemble from these source files, in order:

1. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3a-front-matter-and-part-i/AIIRWP-v1.0-R3A-front-matter-and-part-i.md`
2. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3b-part-ii/AIIRWP-v1.0-R3B-part-ii.md`
3. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3c-part-iii/AIIRWP-v1.0-R3C-part-iii.md`
4. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3d-part-iv/AIIRWP-v1.0-R3D-part-iv.md`
5. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3e-part-v/AIIRWP-v1.0-R3E-part-v.md`
6. `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/draft/r3f-part-vi/AIIRWP-v1.0-R3F-part-vi.md`

R3H should preserve the R3A title and subtitle as the front matter source. Later draft headers such as `# AIIRWP v1.0 R3B - Part II Body Draft` should be removed or converted into internal assembly comments only if the chosen assembled Markdown convention permits comments. The body itself should not expose wave IDs.

## Assembly Order

The assembled internal Markdown draft should follow this order:

1. Document title and subtitle.
2. Front Matter.
3. Global boundary and non-claim note.
4. Relationship to WP1 and WP2.
5. Reader map / how to read the paper.
6. Part I through Part VI in accepted order.
7. Chapter-level tables in place.
8. Consolidated source-note section or chapter source-note appendix stub, depending on R3H scope.
9. Internal assembly note stating the draft is not public, not final, not sealed, and not an artifact source.

R3H should not draft full appendices unless separately authorized.

## Accepted Numbering

R3H should preserve accepted numbering:

- Front Matter + Part I: Chapters 1-3.
- Part II: Chapters 4-8.
- Part III: Chapters 9-13.
- Part IV: Chapters 14-18.
- Part V: Chapters 19-23.
- Part VI: Chapters 24-28.

The original R2 20-chapter plan remains historical outline truth, but the accepted R3A-R3F 28-chapter body is the current assembly source of truth unless the owner rejects the expansion.

## R2 20-Chapter Plan vs R3A-R3F 28-Chapter Draft

R3H should not silently compress the accepted 28 chapters into the R2 20-chapter plan. The expansion occurred through accepted owner-scoped waves:

- R3B added Chapter 8 as negative-space hard-to-insure patterns.
- R3C began Part III at Chapter 9 and expanded translation into five chapters.
- R3D began Part IV at Chapter 14 and expanded underwriting-facing architecture into five chapters.
- R3E began Part V at Chapter 19 and expanded post-loss evidence into five chapters.
- R3F began Part VI at Chapter 24 and expanded final models, takeaways, caveats, and conclusion into five chapters.

R3H should record this as an intentional accepted expansion, not an error to repair.

## Table Handling

R3H should preserve table IDs:

- T-02-01.
- T-04-01 through T-08-01.
- T-09-01 through T-13-01.
- T-14-01 through T-18-01.
- T-19-01 through T-23-01.
- T-24-01 through T-27-01.

Chapter 28 does not require a table. Do not add one unless separately authorized.

The original R2 table inventory contains historical IDs that later accepted drafts superseded. R3H should use accepted R3A-R3F table IDs as the assembly truth and update any full-body inventory accordingly.

## Transition Compression

R3H should compress duplicate transitions where they repeat earlier chapter summaries without adding force. Likely compression areas:

- Part-opening recaps that restate the full prior part arc.
- "This is not coverage" phrases repeated in consecutive paragraphs.
- Repeated WP1/WP2 bridge setup after Part III has established it.
- Repeated logs/traces versus evidence-chain language after Chapter 10.
- Repeated authority/evidence/remediation object lists across Chapters 14, 17, 22, and 23.

Compression should preserve first full definitions and shorten later references.

## Boundary Notes

R3H should keep chapter-level boundary notes where the chapter is exposed to claim risk:

- Chapter 2 market signal boundaries.
- Chapter 3 product/cyber/model-performance boundary.
- Chapter 6 underwriting evidence boundary.
- Chapter 7 claim evidence pack boundary.
- Chapter 10 auditability-to-claim reconstruction boundary.
- Chapter 11 coverage-line ambiguity boundary.
- Chapter 12 aggregation/reinsurance boundary.
- Chapter 16 premium/exposure variable boundary.
- Chapter 18 optional reviewer evidence request boundary.
- Chapter 19 claim reconstruction boundary.
- Chapter 21 coverage boundary analysis boundary.
- Chapter 24 object-model boundary.
- Chapter 25 non-scoring reasoning-model boundary.
- Chapter 27 final non-claim boundary register.

Repeated non-claim language can be shortened elsewhere and consolidated into Chapter 27 and a later appendix skeleton.

## Source Notes

R3H should preserve source-note sequence and check for duplicate note definitions. It should not introduce raw source IDs into body prose. Source-note registers from R3A-R3F should be consolidated carefully, keeping caveats for market signals, cyber/cloud analogy, policy wording gaps, and author synthesis labels.

## Internal Draft Marking

The assembled Markdown created in R3H should be labeled internal draft only. It must not claim publication, release readiness, final/sealed status, public candidate status, coverage-ready status, underwriting-ready status, claim-ready status, certification, standard, score, or insurer acceptance.
