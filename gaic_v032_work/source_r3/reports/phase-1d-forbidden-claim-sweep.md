# Phase 1D Forbidden Claim Sweep

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Date:** May 10, 2026  
**Status:** PASS — POSITIVE FORBIDDEN CLAIM COUNT 0

## Scope

The sweep covered active publication source and Phase 1D QA inventories used by the generation workflow. Backup/archive files and historical DOCX/PDF artifacts were not used as active publication source.

## Broad Term Match Counts

| Term | Match Count | Disposition |
|------|-------------|-------------|
| certifies compliance | 12 | Allowed negative/boundary examples |
| certification authority | 19 | Allowed negative/boundary examples |
| regulator-approved | 17 | Allowed negative/boundary examples |
| regulatory approval | 54 | Allowed negative/boundary examples |
| proves legal compliance | 10 | Allowed negative/boundary examples |
| guarantees compliance | 5 | Allowed negative/boundary examples |
| only validation path | 6 | Allowed negative/boundary examples |
| official compliance standard | 4 | Allowed negative/boundary examples |
| conformity assessment body | 9 | Allowed negative/boundary examples |
| market endorsement | 6 | Allowed negative/boundary examples |
| recommended vendor | 3 | Allowed grep/whitelist contexts |
| best system | 2 | Allowed grep/whitelist contexts |
| procurement winner | 2 | Allowed grep/whitelist contexts |
| winner | 4 | Allowed grep/whitelist contexts |
| leader | 27 | Mostly leadership/audience or market-leadership boundary contexts |
| trails | 65 | False positive substring for audit trails / evidence trails |
| final vendor score | 2 | Allowed grep/whitelist contexts |
| MPLP is required | 6 | Allowed negative/boundary examples |
| MPLP certifies | 7 | Allowed negative/boundary examples |
| Validation Lab certifies compliance | 6 | Allowed negative/boundary examples |

## Classification

Manual review of representative matches and the Phase 1C-FINAL whitelist confirms the matches fall into these allowed categories:

1. Negative boundary statement
2. Forbidden wording table
3. Non-claim disclaimer
4. Source/governance ledger context
5. Quoted grep verification or whitelist term list
6. False positive substring context, especially `audit trails`

## Positive Claim Count

**0 positive forbidden claims found.**

## Final Decision

The forbidden-claim sweep passes for Phase 1D draft QA. No vendor ranking, procurement recommendation, certification claim, regulatory approval claim, legal compliance proof claim, MPLP exclusivity claim, or Validation Lab certification claim was introduced by fresh DOCX/PDF generation.
