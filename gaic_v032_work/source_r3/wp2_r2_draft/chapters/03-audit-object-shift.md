# 3. The Audit Object Shift: From Model Output to Lifecycle Work

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define the proposed review object for agentic auditability.
**Reader question:** What exactly should audit stakeholders reconstruct?

## Key Claims

- Agentic auditability requires a shift from model/output review to lifecycle work review.
- The Agentic Audit Object is a proposed review object for lifecycle-responsibility-linked agent work.
- Lifecycle-responsibility-linked agent work connects intent, authority, role, agent action, tool action, evidence, outcome, exception, privacy treatment, and closure.

## Source Grounding Note

Audit evidence language is grounded in AUD-01 and AUD-02. Governance context is grounded in AI-01 and AI-08. Provenance concepts are grounded in EVID-01. MRO source truth is GAIC-derived.

## Author Synthesis Note

Agentic Audit Object and lifecycle-responsibility-linked agent work are WP2 author-synthesis constructs. They are not claimed as existing professional standards, legal categories, or regulator-defined objects.

## Draft Prose

An audit object is the thing being reviewed. In many AI governance conversations, the object is a model, dataset, output, use case, control, system, or policy. Those objects remain important. But agentic systems create another review object: lifecycle work.

Lifecycle work is not a single output. It is the chain of actions and decisions by which an agentic system receives intent, acts under authority, uses tools, transfers work, records evidence, produces a result, reaches acceptance or dispute, handles exceptions, and closes remediation. If that chain cannot be reconstructed, the system may be observable but not audit-ready.

WP2 calls the proposed review unit the **Agentic Audit Object**. It is a structured representation of lifecycle-responsibility-linked agent work. It is not a mandatory data schema. It is a conceptual object model that helps audit, assurance, governance, and technology teams ask whether the relevant lifecycle work can be reviewed.

The Agentic Audit Object exists because agentic systems blur the boundary between process and output. A model-generated draft may be an output. A tool action that sends the draft, records the transaction, updates a system, triggers a workflow, or changes a downstream state is lifecycle work. The auditability question changes from "Was the output acceptable?" to "Can the lifecycle work that produced and accepted that outcome be reconstructed?"

The object shift also changes the meaning of responsibility. Responsibility cannot be inferred from a username, service account, model name, trace ID, or tool log alone. A responsibility-linked review object should identify the human role responsible for intent, authority, review, acceptance, exception handling, and remediation. It should separately identify the agent role and tool surface that executed the work. It should preserve the difference between technical execution and business responsibility.

Provenance concepts help explain why this structure matters. Provenance language distinguishes entities, activities, agents, and relationships. Audit evidence language asks whether evidence is relevant and reliable for the review objective. WP2 combines those ideas with GAIC's MRO layer: lifecycle work must be addressable, linked, partitioned, and reviewable.

The Agentic Audit Object therefore contains more than a log. It contains the work unit, the authority boundary, the human role, the agent role, the tool-action record, the evidence pointer, the accepted outcome state, the exception state, the remediation closure state, and the privacy/selective disclosure profile. Those fields may live in different systems. The model is not saying every enterprise must store them in one database. It says that the relationships must be reconstructable.

This object shift is also where WP2 becomes distinct from WP1. WP1 identifies the missing regulatory objects for agentic lifecycle governance. WP2 asks how those objects become evidence. The same MRO can be read as a governance gap, an engineering object, or an audit evidence object. WP2 focuses on the third reading.

## Agentic Audit Object Overview

| Object component | Review question | Evidence examples | Source / synthesis status | Boundary |
|---|---|---|---|---|
| Lifecycle work unit | What work is under review? | Work unit ID, scope, task intent, lifecycle stage | WP2 synthesis grounded by EVID-01 and GAIC-SOURCE | Not mandatory schema |
| Authority boundary | Was the action authorized within scope? | Delegation record, condition, expiry, escalation path | GAIC-derived + AI-01/AI-08 | Not proof of legal delegation |
| Human role responsibility | Who owned intent, review, acceptance, or closure? | Role map, review record, acceptance owner | GAIC-derived + AUD-06/AUD-07 | Not legal liability assignment |
| Agent role responsibility surface | What agent role executed or transformed the work? | Agent role ID, constraints, capability boundary | WP2/GAIC synthesis + EVID-01 | Agent is not a legal person |
| Tool-action evidence | What external or consequential action occurred? | Tool call record, affected system, reversibility, rollback evidence | GAIC-derived + EVID-02/EVID-03 | Not legal liability conclusion |
| Accepted outcome | Was the result accepted, disputed, rejected, or remediated? | Acceptance state, reviewer role, dispute reason | GAIC-derived + AUD-01/AUD-04 | Not compliance proof |
| Exception / remediation closure | How was deviation handled and closed? | Exception record, corrective action, recheck, closure owner | GAIC-derived + EVID-04/AUD-04 | Not legal settlement |

**Table note:** Mixed GAIC-derived and WP2 author-synthesis table grounded in audit evidence, provenance, and governance sources. It is not an audit standard or legal template.

## Cross-Links

- Chapter 5 expands the object model fields.
- Chapter 6 maps each MRO into audit evidence objects.
- Appendix B provides a walkthrough template.

## Boundary Note

The Agentic Audit Object is a proposed WP2 object model for reviewability. It does not create legal categories, professional requirements, certification criteria, or mandatory implementation schema.

## R3 QA Notes

- Review whether "audit object" needs a definition sidebar.
- Confirm the chapter does not imply that a single technical system must store all evidence.
