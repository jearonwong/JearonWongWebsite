# WP3-R1 AIO / AIRM Source Grounding Map

**Task ID:** WP3-R1-INSURABILITY-SOURCE-RESEARCH
**Mode:** Source research only
**Boundary:** AIO and AIRM remain author analytical models unless a source directly supports the same concept. This map does not make AIO or AIRM an insurance standard, coverage test, underwriting rule, actuarial score, certification, insurer acceptance model, or claims approval method.

## AIO Source Grounding

| AIO | External source support | Internal WP1/WP2 support | Insurance relevance | Source gap | Likely chapter | Grounding label | Boundary warning |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AIO-01 Legal Insured Subject | INS-04, INS-06, INS-08 | INT-01, INT-06 | Identifies legal/policy subject. | Jurisdiction-specific insured-subject nuance. | 1 | External + internal + synthesis | Do not assign legal liability. |
| AIO-02 Insurable Agentic Work Unit | MKT-01, MKT-02, INS-01 | INT-01, INT-06 | Bounds the exposure and work being reviewed. | No external source names "AIO work unit." | 2, 8, 12 | Author synthesis with external analogues | Do not call it a policy form. |
| AIO-03 Human-Agent Responsibility Map | INS-01, INS-08, MKT-07 | INT-01, INT-04, INT-05 | Connects governance roles to agent actions. | External insurance sources do not define MAS responsibility objects. | 3, 8 | Author synthesis with governance support | Not legal liability determination. |
| AIO-04 Coverage Boundary | INS-05, INS-07, INS-09, MKT-05 | INT-05, INT-06 | Frames limits/exclusions/scope questions. | Exact AI forms remain P1. | 2, 9, 13 | External + internal + synthesis | Not a coverage opinion. |
| AIO-05 Authority and Delegation Boundary | INS-01, TECH-01, TECH-02 | INT-01, INT-05 | Separates tool permissions from business authority. | External insurance sources address authority indirectly. | 9, 12 | Author synthesis | Tool permission is not coverage authority. |
| AIO-06 Loss Event Record | CLAIM-01, CLAIM-02, CLAIM-03 | INT-05, INT-06 | Anchors event, time, effect, and loss narrative. | Insurance-claim-specific AI evidence examples sparse. | 10, 13 | External + internal + synthesis | Record is not proof of legal causation. |
| AIO-07 Causality Reconstruction Trace | CLAIM-01, CLAIM-02, TECH-04 | INT-05, INT-06 | Links sequence and possible contributors. | Technical trace vs legal causality must stay separate. | 7, 10 | Author synthesis with evidence support | Not expert causation finding. |
| AIO-08 Control Failure Record | INS-01, AI-01, CLAIM-01 | INT-01, INT-05, INT-06 | Identifies failed/bypassed controls. | AI control failure classification is context-specific. | 10, 13 | Author synthesis with governance support | Not negligence or violation finding. |
| AIO-09 Claim Evidence Chain | CLAIM-01, CLAIM-02, INS-05 | INT-04, INT-05, INT-06 | Converts event data into reviewable package. | Direct public AI claim package sources limited. | 7, 10, 13 | Author synthesis | Not claim approval. |
| AIO-10 Remediation and Recovery Record | CLAIM-01, CLAIM-02, CLAIM-03 | INT-01, INT-05, INT-06 | Supports containment/recovery/closure evidence. | Settlement and claim closure sources out of scope. | 10, 13 | External + internal + synthesis | Not legal closure. |
| AIO-11 Vendor / Model / Tool Dependency Map | CYB-02, TECH-01 to TECH-05 | INT-03, INT-06 | Shows dependency chain and substitution exposure. | Needs R2 optional subprocessor/outsourcing source. | 11, 12 | Author synthesis with technical/aggregation support | No vendor ranking. |
| AIO-12 Exclusion Trigger / Boundary Breach Map | INS-05, INS-07, MKT-03, MKT-05 | INT-05, INT-06 | Helps identify facts relevant to limits/exclusions. | Exact AI exclusions/sublimits need more public forms. | 9, 13 | Author synthesis | Not exclusion determination. |
| AIO-13 Aggregation and Accumulation Risk View | CYB-01, CYB-02, CYB-03, CYB-04, MKT-08 | INT-01, INT-03, INT-06 | Shows correlated dependencies and repeated work units. | Direct agentic AI accumulation actuarial model absent. | 14 | Author synthesis with cyber analogy | Not actuarial model. |
| AIO-14 Dispute-Ready Claim Package | CLAIM-01, CLAIM-02 | INT-04, INT-05, INT-06 | Structures evidence for review/challenge/response. | Legal privilege and claims handling detail out of scope. | 13, 16 | Author synthesis | Not guaranteed claim payment. |

## AIRM Source Grounding

| AIRM level | External source support | Internal WP1/WP2 support | Insurance relevance | Source gap | Grounding label | Boundary warning |
| --- | --- | --- | --- | --- | --- | --- |
| L0 Uninsurable Black Box | INS-01, AI-01, CLAIM-01 | INT-01, INT-04, INT-07 | Little evidence visibility makes risk review difficult. | "Uninsurable" is analytical wording, not insurer decision. | Author synthesis | Do not say insurer will deny coverage. |
| L1 Logged but Not Attributable | TECH-01, TECH-04, CLAIM-01 | INT-05, INT-07 | Logs/traces exist but lack responsibility/authority mapping. | Need careful distinction between logs and evidence. | Author synthesis | Logs can help; they are not claim evidence by themselves. |
| L2 Bounded but Weakly Reconstructable | INS-01, AI-01, TECH-04 | INT-01, INT-05, INT-07 | Work units and authority may be visible but reconstruction incomplete. | No external readiness-level source. | Author synthesis | Not underwriting-ready. |
| L3 Evidence-Linked and Claim-Reviewable | CLAIM-01, CLAIM-02 | INT-04, INT-05, INT-07 | Bounded event can be reconstructed for review. | Claim reviewable is not claim approved. | Author synthesis | No coverage guarantee. |
| L4 Underwriting-Ready Lifecycle System | INS-01, INS-09, INS-10, CYB-02 | INT-01, INT-02, INT-07 | Pre-loss evidence architecture can support review. | Underwriting details are not public standards. | Author synthesis | Not insurer acceptance or pricing. |
| L5 Dispute-Ready Risk Transfer Architecture | CLAIM-01, CLAIM-02, CYB-02 | INT-04, INT-05, INT-07 | Full evidence package supports review/challenge. | No insurer has adopted AIRM in sources. | Author synthesis | Not certification, coverage guarantee, or claims approval. |

## R2 Citation Rule

For every AIO/AIRM appearance:

1. Cite external insurance/claims/technical source where it supports the adjacent concept.
2. Cite internal WP1/WP2/WP3 source where it supports the object model.
3. Label the AIO/AIRM object or level as author synthesis unless a source explicitly says the same thing.
