# Phase 1D-2 Table Reflow Plan

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Date:** May 10, 2026  
**Status:** TABLE REFLOW STRATEGY DEFINED / FINAL SPLIT-TABLE WORK PENDING

## Reflow Principle

Phase 1D proved that dense tables can render in landscape. Phase 1D-2 should improve visual credibility, but it should not change framework semantics. The final publication path should prioritize readability over preserving every dense matrix in the body.

## High-Risk Table Decisions

| Table Group | Current Risk | Phase 1D-2 Treatment | Final Publication Recommendation |
|-------------|--------------|----------------------|----------------------------------|
| T-D-01 | 16 MROs x 8 systems plus many columns; dense landscape | Keep as technical appendix table with improved styling | Consider split by MRO cluster or system group |
| Appendix G T-G-01 to T-G-08 | Long qualitative system assessment tables | Keep landscape; preserve revalidated provisional status | Split each table into evidence visibility and boundary notes if final font remains too small |
| T-G-09 | Cross-system pattern summary could be misread as comparative ranking | Keep qualitative table; no score/ranking terms | Add boundary note if extracted into publication figures |
| Appendix H tables | Procurement scorecard tables are wide | Keep appendix technical tables | Split T-H-01 into due-diligence domains if final PDF is cramped |
| Appendix I tables | Source audit rows are long | Keep appendix technical tables | Split source register from URL queue in final layout |
| Appendix J tables | Gap closure matrix is wide | Keep appendix technical ledger | Consider compact status badges for final |
| Appendix K tables | Editorial remediation record is wide | Keep appendix technical ledger | Keep dense but navigable |
| T-13-02 / T-13-04 | MPLP mapping tables are dense body tables | Keep landscape for draft | Consider body summary + full appendix mapping |
| T-14-01 / T-14-04 | Evidence validation mapping tables are dense | Keep landscape for draft | Consider converting validation flow to figure plus shorter table |
| T-15-01 to T-15-04 | Failure scenario tables are long | Keep landscape for draft; add F-09 visual chain | Consider keeping only scenario summary in body |
| T-17-01 to T-17-05 | Roadmap tables are dense | Keep landscape for draft; add F-11 visual roadmap | Consider moving implementation details to appendix |
| T-18-01 / T-18-02 | Conclusion summary tables are wide | Keep landscape for draft | Consider prose plus compact contribution table |

## Body vs Appendix Policy

| Location | Rule |
|----------|------|
| Body chapters | Prefer summary table, figure, and interpretive paragraph |
| Technical appendices | Dense matrix acceptable if captions, headers, and orientation are stable |
| Procurement appendix | Never compress so much that due-diligence questions become unreadable |
| Appendix G | Never use design to imply ranking, ordered comparison, or vendor recommendation |

## Phase 1D-2 Implementation

The Phase 1D-2 script should:

1. Improve table header contrast and typography.
2. Continue using landscape for high-risk tables.
3. Raise high-risk table font where feasible.
4. Keep table captions near tables.
5. Record table records in the generation log.

## Remaining Before Publication Candidate

Final publication candidate should decide which of the widest body tables become split subtables or appendix-only details. Phase 1D-2 does not resolve every split-table design decision.

