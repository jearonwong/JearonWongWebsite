# Source and Citation Assembly Plan

## Purpose

This plan defines source-note and citation handling for R3H full-body assembly. R3G does not consolidate source notes.

## Source Bases

R3H should preserve the source discipline from:

- R1 verified source inventory.
- R1 source risk register.
- R1 source-to-chapter and source-to-claim maps.
- R2 chapter source map and claim boundary map.
- R3A-R3F source-note registers.
- R3A editorial QA source-use review.
- R3B-R3F boundary and final QA reports.

## Existing Source IDs and Notes

R3A-R3F use numbered source notes and source-register files. R3H should consolidate them without renumbering unless the assembly process requires a clean final note sequence.

If renumbering is necessary, R3H should create a crosswalk:

| Original note source | Final note treatment |
|---|---|
| R3A notes | Preserve market reality and front matter notes; avoid raw source IDs in body. |
| R3B notes | Preserve object/evidence/claim-pack source notes. |
| R3C notes | Preserve WP1/WP2 translation, line ambiguity, aggregation, privacy, and source caveats. |
| R3D notes | Preserve underwriting-facing architecture and non-pricing caveats. |
| R3E notes | Preserve claim reconstruction, coverage-boundary, remediation, and feedback caveats. |
| R3F notes | Preserve final model, non-scoring, and final boundary-source notes. |

## Source Caveats to Keep Visible

R3H must keep visible caveats for:

- exact exclusion / endorsement / sublimit primary wording not yet verified;
- insurer claim documentation still a strengthening opportunity;
- AI underwriting questionnaires still a strengthening opportunity;
- cyber/cloud/reinsurance sources used as analogies unless directly tied to AI;
- product marketing sources proving product existence only, not broad market acceptance;
- WP1/WP2 sources supporting analytical vocabulary only, not insurance proof;
- NAIC/NIST/regulatory sources supporting governance context only, not coverage.

## Author Synthesis Labels

Author synthesis should remain explicit where the paper creates analytical constructs:

- Insurable Agentic Risk Object.
- Claim Evidence Pack.
- Agentic Insurability Object Model.
- Non-Scoring Insurability Reasoning Model.
- Optional reviewer evidence request structure.
- Hard-to-insure pattern framing.

These labels prevent analytical models from being mistaken for insurer-adopted methods, standards, certifications, policy definitions, or coverage triggers.

## External Market and Context Sources

External market/context sources may support:

- split-market signals;
- affirmative AI product examples;
- AI-linked cyber context;
- model-performance or AI warranty context;
- governance/regulatory context;
- reinsurance/aggregation analogies;
- incident-response reconstruction context.

They must not be used to claim broad AI insurability, insurer acceptance, coverage-ready status, underwriting-ready status, claim-ready status, pricing, claim approval, or legal liability.

## Rejected v0.2 Rule

The rejected v0.2 body must not be used as current source truth or citation source. It may be referenced only in governance files as historical boundary context.

## Unresolved Source Gaps

| Source gap | Status | R3H blocker? | Treatment |
|---|---|---:|---|
| Exact exclusion / endorsement / sublimit primary wording | Still unresolved | No | Strengthening opportunity; preserve caveats and avoid exact wording claims. |
| Insurer claim documentation specific to AI incidents | Still unresolved | No | Strengthening opportunity; use NIST/CISA/QBE context without claim approval language. |
| AI underwriting questionnaires or applications | Still unresolved | No | Strengthening opportunity; keep evidence requests optional and analytical. |
| AI-specific reinsurer model/vendor concentration literature | Partly unresolved | No | Use Geneva/Swiss Re cyber/cloud analogy with caveat. |

These are not blockers for R3H internal assembly. They remain strengthening opportunities before any later public candidate or artifact wave.

## Citation QA Requirements for R3H

R3H should verify:

- no raw `[SRC: ...]` markers in assembled body;
- no raw source IDs in body prose unless used in a source-note section;
- no unsupported quotes;
- no fake citations;
- no unsupported market consensus claims;
- no primary-source caveat removed from high-risk market claims;
- no WP1/WP2 source treated as insurance fact;
- no v0.2 source used as body truth.
