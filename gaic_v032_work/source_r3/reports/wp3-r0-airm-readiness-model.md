# WP3-R0 Agentic Insurability Readiness Model

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Model:** AIRM  
**Boundary:** AIRM is a readiness vocabulary for evidence visibility and claim reviewability. It is not certification, insurer acceptance, actuarial score, procurement benchmark, legal compliance proof, insurance coverage guarantee, or claims approval.

## AIRM Levels

| Level | Plain-English definition | What the insurer can see | What the enterprise can prove | What remains missing | Relation to AIO | Relation to WP1/WP2 | Boundary statement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| L0: Uninsurable Black Box | The agentic system may act, but the enterprise cannot explain who authorized what, what the agent did, or how a loss happened. | Little beyond narrative, screenshots, high-level vendor claims, or post-hoc summaries. | Very little reconstructable evidence. | Legal subject mapping, work-unit boundary, authority, responsibility, loss reconstruction, and claim evidence chain. | AIOs mostly absent. | WP1 MRO layer absent; WP2 audit evidence absent. | L0 is analytical language only, not an insurer decision. |
| L1: Logged but Not Attributable | Activity is recorded, but logs do not map actions to authority, human responsibility, work units, or loss events. | Logs, traces, tool-call records, vendor dashboards, or monitoring output. | That something happened, but not enough to connect subject, responsibility, causality, and boundary. | Attribution, responsibility map, evidence chain, and claim package. | AIO-06 may exist weakly; AIO-01 to AIO-05 and AIO-09 weak or absent. | Matches WP2 warning that logs are not audit evidence chains. | L1 does not mean claim evidence exists. |
| L2: Bounded but Weakly Reconstructable | Agentic work units and authority boundaries exist, but reconstruction is incomplete or inconsistent. | Scope, workflow boundaries, authority records, some tool and agent metadata. | Basic exposure boundary and some accountability facts. | Reliable causality trace, loss record, remediation closure, dependency map, and dispute package. | AIO-01 to AIO-05 present; AIO-06 to AIO-14 incomplete. | Partial WP1 MRO adoption; partial WP2 evidence sufficiency. | L2 is not underwriting-ready. |
| L3: Evidence-Linked and Claim-Reviewable | The system can connect subject, work unit, authority, action, event, evidence, and remediation for defined claims review. | Linked evidence chain and scoped claim-review package for defined agentic work. | A bounded event can be reconstructed within defined scope. | Portfolio aggregation view, consistent dependency concentration, and mature risk-transfer architecture. | AIO-01 to AIO-10 and AIO-12 generally present for defined scope. | Strong WP1 MRO mapping and WP2 Audit Evidence Chain translation. | L3 does not imply claim approval or coverage. |
| L4: Underwriting-Ready Lifecycle System | The enterprise can show stable pre-loss evidence architecture for defined agentic exposures. | Exposure inventory, responsibility maps, authority boundaries, dependency maps, control records, and aggregation views. | Defined work units are controlled, evidenced, and reviewable before loss. | Dispute-ready packaging across complex or multi-party loss scenarios. | AIO-01 to AIO-13 mature for defined scope. | WP1 ALCS/MRO logic and WP2 AARM-style evidence readiness are operationalized. | L4 is not insurer acceptance or pricing. |
| L5: Dispute-Ready Risk Transfer Architecture | The system can support underwriting review, claims reconstruction, boundary review, remediation evidence, and dispute handling at scale. | Full lifecycle evidence architecture, selective disclosure, dependency and accumulation views, and dispute-ready claim packages. | The enterprise can produce scoped evidence packages for review and challenge. | Actual policy response, insurer judgment, legal causation, pricing, and coverage outcomes remain external. | AIO-01 to AIO-14 mature and linked. | WP1/WP2 object and evidence layers are translated into risk-transfer readiness. | L5 is not certification, coverage guarantee, or claims approval. |

## Required Use

AIRM must be used only to describe evidence readiness and claim reviewability. It must not become a scorecard, procurement screen, vendor ranking, insurance eligibility test, or legal conclusion.

## Relation to Chapter Architecture

- Chapters 0-5 explain why L0-L2 are common failure patterns to source-research later.
- Chapters 6-8 introduce how WP1/WP2 object logic supports movement from L1/L2 to L3.
- Chapters 9-14 define the evidence areas that support L3-L5.
- Chapter 15 formally presents AIRM.
- Chapter 16 closes with L5 as dispute-ready architecture, not guaranteed risk transfer.
