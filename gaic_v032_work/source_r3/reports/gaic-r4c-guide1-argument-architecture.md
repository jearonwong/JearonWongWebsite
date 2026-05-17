# GAIC-R4C Guide 1 Argument Architecture

**Status:** Planning baseline
**Date:** May 17, 2026
**Boundary:** Planning-only. This file defines argument structure; it does not draft Guide 1 body text.

## Core Thesis

Audit-ready AI agent systems require architecture-level support for authority boundaries, responsibility mapping, tool-action evidence, accepted outcomes, exception handling, remediation closure, and selective evidence disclosure.

## Core Problem

Ordinary agent architectures are not automatically audit-ready because logs, traces, workflow state, and approvals usually do not bind to lifecycle responsibility objects.

## Argument Stack

| Layer | Argument | WP2 / AARM dependency | Boundary |
|---|---|---|---|
| Ordinary orchestration is not audit-ready architecture | Workflow execution and task routing do not by themselves produce reconstructable responsibility evidence. | WP2 logs/evidence-chain argument; AARM evidence sufficiency. | Do not dismiss orchestration value. |
| Observability explains behavior; audit-ready evidence explains responsibility | Metrics, traces, and logs need role, authority, outcome, and closure linkage. | WP2 logs vs audit evidence chains; AARM audit object clarity. | Do not say observability is useless. |
| Agent work units must be addressable | Each lifecycle work unit needs identifiers, boundaries, owners, evidence pointers, and status. | WP2 Agentic Audit Object Model; MRO common field model. | Do not prescribe a mandatory schema. |
| Human roles and agent roles must be responsibility-mapped | Human accountability and agent responsibility surfaces need durable mapping. | MRO-01, MRO-03, MRO-06; AARM responsibility mapping. | Do not assign legal liability. |
| Authority boundaries must be implemented | Policy-only delegation is not enough; systems need runtime checks and evidence. | MRO-02, MRO-07; AARM authority traceability. | Do not claim implementation proves compliance. |
| Tool actions and side effects must generate evidence | Consequential external actions need initiator, authority, tool, result, reversibility, and evidence. | MRO-05; WP2 evidence request list. | Do not claim liability determination. |
| Accepted outcomes must become system states | Delivery requires accepted, rejected, disputed, or remediated states, not only completed tasks. | MRO-04; AARM accepted outcome evidence. | Do not equate acceptance with legal compliance. |
| Exceptions, disputes, rollback, and remediation must close as evidence-backed workflows | Remediation closure is a reconstructable state, not only an engineering fix. | MRO-16; AARM remediation closure. | Do not claim legal remedy or settlement. |
| Runtime/model/vendor/tool substitution must remain traceable | Substitution can preserve execution while breaking evidence semantics. | MRO-15, MRO-14; AARM partitioning. | Do not rank vendors or certify substitutions. |
| Architecture must support privacy-preserving selective disclosure | Audit-ready evidence must avoid unnecessary data exposure. | MRO-10 to MRO-13; AARM privacy/selective disclosure. | Do not provide privacy legal advice. |
| AARM becomes technical readiness checkpoints | AARM dimensions can be translated into architecture and implementation review checkpoints. | R4B AARM baseline. | Do not turn AARM into audit standard or certification. |

## Objection Handling

| Objection | Answer direction | Boundary to avoid |
|---|---|---|
| Isn't this just logging? | No. Logs record activity. Audit-ready architecture links activity to work unit, role, authority, tool action, accepted outcome, exception, privacy, and closure. | Do not imply logs have no value. |
| Can we do this with existing observability? | Existing observability can supply ingredients, but it usually needs lifecycle responsibility metadata and evidence export/replay design. | Do not dismiss existing platforms or tools. |
| Do we need MPLP? | No. MPLP is one optional protocol path for lifecycle responsibility semantics; the guide must remain implementation-neutral. | Do not claim MPLP is required or industry standard. |
| Does this make us compliant? | No. It improves auditability readiness and evidence architecture; legal compliance requires context, controls, practice, and professional interpretation. | Do not claim legal compliance proof. |
| Does this replace audit? | No. It helps systems produce evidence that audit and assurance stakeholders can review. | Do not claim audit opinion or audit standard status. |
| Is this too much overhead? | The guide should frame evidence design as risk-tiered and proportional: high-impact work needs stronger evidence than low-risk automation. | Do not promise low cost or universal ROI. |
| Can vendors provide this for us? | Vendors can provide evidence features, but enterprises still need ownership of authority, role, acceptance, privacy, retention, and closure requirements. | Do not create procurement recommendation or vendor ranking. |
| How does this relate to Guide 2? | Guide 1 defines how to build audit-ready technical systems; Guide 2 defines how to govern those systems through policy, roles, evidence requests, and review workflows. | Do not let Guide 1 become compliance operating model or legal advice. |

## Final Status

**GUIDE 1 ARGUMENT ARCHITECTURE COMPLETE**
