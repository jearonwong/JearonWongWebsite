# 2. Why AI Agent Auditability Is Different from Model Governance

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Explain why model governance is necessary but insufficient for agentic auditability.
**Reader question:** What changes when AI systems act through agents, tools, memory, delegation, and multi-agent workflows?

## Key Claims

- Model governance remains necessary for agentic systems, but it does not fully reconstruct lifecycle work.
- Agentic AI introduces delegated authority, tool action, role separation, handoffs, accepted outcomes, exception states, and remediation closure.
- Auditability must therefore move beyond model/output review into lifecycle responsibility review.

## Source Grounding Note

Big Four market context appears in BF-01, BF-04, and BF-05. AI governance context appears in AI-01, AI-02, AI-04, AI-05, and AI-08. Internal audit context appears in AUD-06. GAIC source truth provides MRO and RCCS-M/ALCS lifecycle-object context.

## Author Synthesis Note

The claim that "model governance is necessary but insufficient" for agentic auditability is WP2 author synthesis grounded in the shift from model/output governance to lifecycle responsibility objects.

## Draft Prose

Model governance is not obsolete. It remains part of responsible AI practice. Organizations still need to understand model purpose, data, evaluation, limitations, monitoring, robustness, bias, security, human oversight, and change management. Public AI governance frameworks and professional guidance continue to provide important language for risk management, accountability, documentation, monitoring, controls, and internal audit review.

The limitation is not that model governance is wrong. The limitation is that agentic systems create work that is not reducible to model behavior. An agent may plan a sequence, invoke a tool, pass work to another agent, store state, retrieve memory, request human confirmation, act under delegated authority, trigger an external workflow, or remediate an exception. A model output may be only one event in a broader lifecycle.

For auditability, that broader lifecycle matters. If an agent drafts a message, the model output may be reviewed. If an agent sends the message through a CRM tool, updates a customer record, triggers a refund, routes a contract, or changes a production configuration, the relevant review object is no longer only the output. It is the work unit: who initiated it, what authority permitted it, what agent and tool executed it, what evidence was retained, who accepted the result, what exception occurred, and how any remediation closed.

This creates an object gap. Traditional governance may document the model, evaluate outputs, approve use cases, and monitor performance. Agentic auditability must also document authority boundaries, role mappings, tool-action evidence, responsibility transfer, evidence partitioning, privacy treatment, and closure. These are lifecycle objects, not merely model attributes.

The distinction becomes clearer when human oversight is considered. A human-in-the-loop control may be meaningful only if the loop is tied to an identifiable responsibility state. Who was the human? What role did they occupy? What were they asked to confirm? Was the confirmation advisory, blocking, or final? Was it tied to the delegated authority boundary? Did it create an accepted outcome state? Did it leave evidence that another reviewer can reconstruct? Without these objects, "human oversight" may be real operationally but weak evidentially.

Agentic systems also complicate responsibility because agent roles are not human roles. Human-like names, personas, and task labels may help interfaces, but they can blur governance. An "analyst agent" is not the same thing as an analyst. It is a bounded execution role with tool permissions, instructions, constraints, evidence obligations, and escalation paths. A human or organizational role still owns intent, authority, acceptance, and remediation.

The point of WP2 is to place model governance beside lifecycle evidence architecture. Model governance asks whether the model and its use are governed. Agentic auditability asks whether the agentic work can be reconstructed. Both are needed. The second cannot be inferred from the first.

## Table 1: Traditional AI Audit vs Agentic AI Auditability

| Traditional AI audit focus | Agentic auditability focus | Missing lifecycle object | Evidence needed | Source / synthesis note | Boundary |
|---|---|---|---|---|---|
| Model documentation | Lifecycle work reconstruction | Agentic Audit Object | Work unit ID, scope, evidence chain, accepted outcome | Mixed: AI-01, AI-08, GAIC-SOURCE, WP2 synthesis | Not a new audit standard |
| Output review | Accepted outcome review | Accepted outcome state | Reviewer role, acceptance/rejection/dispute state, evidence pointer | GAIC-derived + AUD-01/AUD-06 | Acceptance is not legal proof |
| Monitoring | Authority and exception monitoring | Authority drift record | Baseline authority, observed action, escalation, closure evidence | AI-02, EVID-04, GAIC-SOURCE | Drift is not automatically a legal breach |
| Access control | Delegated authority review | Delegated authority boundary | Scope, condition, expiry, tool action, escalation | AI-08, AUD-06, GAIC-SOURCE | IAM permission is not full business authority |
| Control testing | Lifecycle responsibility walkthrough | Responsibility map and evidence chain | Human role, agent role, tool record, partitioned evidence | AUD-04, AUD-05, EVID-01 | Walkthrough is not formal audit procedure |

**Table note:** Mixed source-grounded, GAIC-derived, and WP2 author-synthesis table. It is not a certification table, audit procedure, procurement tool, or vendor comparison.

## Cross-Links

- Chapter 3 defines the audit object shift.
- Chapter 5 defines the Agentic Audit Object Model.
- Appendix C maps MROs to audit evidence objects.

## Boundary Note

This chapter does not attack model governance or claim model governance is useless. It argues that agentic auditability requires an additional lifecycle responsibility layer.

## R3 QA Notes

- Confirm the examples remain generic and non-vendor-specific.
- Ensure "audit" language does not become a professional procedure claim.
