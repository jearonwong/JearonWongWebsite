# 5. The Agentic Audit Object Model

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define the proposed object model for audit-ready agentic lifecycle work.
**Reader question:** What makes lifecycle work audit-ready?

## Key Claims

- Audit-ready agentic lifecycle work should be addressable, reconstructable, partitioned, privacy-aware, and reviewable.
- The Agentic Audit Object Model binds lifecycle work unit, authority boundary, human role responsibility, agent role responsibility, tool-action evidence, evidence pointer, accepted outcome, exception state, remediation closure, and privacy treatment.
- The model is a proposed review architecture, not a mandatory schema or standard.

## Source Grounding Note

The model uses audit evidence language from AUD-01, control vocabulary from AUD-04, AI governance context from AI-01, and provenance structure from EVID-01. MRO dependencies are GAIC-derived.

## Author Synthesis Note

The Agentic Audit Object Model is WP2 author synthesis. It is a conceptual object model for auditability, not a required implementation format.

## Draft Prose

The Agentic Audit Object Model translates lifecycle work into a reviewable structure. It does not require that every enterprise use the same database table, evidence pack format, or protocol. It asks whether the relationships needed for review can be reconstructed.

The first requirement is an addressable lifecycle work unit. A reviewer needs to know what work is under review: the task, workflow, agent run, delegated action, tool call, handoff, or remediation event. Without a stable work unit, evidence remains scattered across logs, tickets, approvals, messages, policies, and memories.

The second requirement is an authority boundary. Agentic systems often combine technical permission with business action. Technical permission answers whether a service can call a tool. Business authority answers whether that action was allowed under scope, condition, risk class, and responsibility. Auditability requires evidence of the authority boundary, not merely evidence that the tool call succeeded.

The third requirement is role mapping. Human role responsibility and agent role responsibility surface must be separated. The human role owns intent, approval, review, acceptance, escalation, or closure. The agent role describes bounded execution capability, constraints, tool access, and evidence obligations. Confusing these roles weakens accountability and makes review harder.

The fourth requirement is tool-action evidence. A tool action is often where AI-generated output becomes operational consequence. The evidence object should identify the tool, action, target system, affected data or process, initiator, authority basis, reversibility, rollback path, and owner. This does not assign legal liability. It creates reviewability.

The fifth requirement is an evidence pointer. Auditability does not always require raw evidence to be duplicated into a central repository. It may require pointers to evidence, integrity hashes, redaction profiles, retention rules, and partition keys. The pointer must be strong enough that authorized reviewers can reconstruct the chain.

The sixth requirement is an accepted outcome state. An output is not the same as an accepted outcome. The model should distinguish produced, reviewed, accepted, rejected, disputed, remediated, and closed states. This is especially important when a downstream process treats agent work as completed before a responsible human or governance workflow has accepted it.

The seventh requirement is exception and remediation closure. Auditability is weak if exceptions disappear into operational tickets without lifecycle linkage. Exceptions should connect to authority, role, affected outcome, corrective action, recheck, closure owner, and reopen criteria.

The eighth requirement is privacy treatment. Evidence is not improved by unlimited collection. Reviewability must be balanced with minimization, selective disclosure, redaction, retention, and access control. The object model should identify which evidence can be disclosed, to whom, for what review purpose, and under what boundary.

Taken together, these fields create the Audit Evidence Chain. The chain does not replace professional judgment about sufficiency. It makes judgment possible by giving reviewers a reconstructable path.

## Agentic Audit Object Model Table

| Field | Purpose | Example evidence | Related MRO | Source / synthesis status | Boundary |
|---|---|---|---|---|---|
| Lifecycle work unit ID | Names the work under review | Workflow/run/task ID, scope, intent | MRO-08 | WP2 synthesis grounded in EVID-01 | Not mandatory schema |
| Authority boundary | Records delegated scope and limits | Delegation record, condition, expiry, escalation rule | MRO-02, MRO-07 | GAIC-derived + AI-01/AI-08 | Not legal delegation proof |
| Human role responsibility | Maps human ownership | Intent owner, review owner, acceptance owner, closure owner | MRO-01 | GAIC-derived + AUD-06/AUD-07 | Not legal liability assignment |
| Agent role responsibility surface | Defines bounded agent function | Agent role, constraints, capability boundary, evidence duties | MRO-03, MRO-06 | WP2/GAIC synthesis + EVID-01 | Agent is not human role |
| Tool-action evidence | Records consequential action | Tool ID, target system, affected data, rollback path | MRO-05 | GAIC-derived + EVID-02/EVID-03 | Not liability conclusion |
| Evidence pointer | Links to review evidence | URI, hash, evidence pack reference, partition key | MRO-08, MRO-12 | Mixed | Not blanket disclosure |
| Accepted outcome | Records outcome governance state | Accepted/rejected/disputed/remediated status | MRO-04 | GAIC-derived + AUD-01/AUD-04 | Not compliance proof |
| Exception state | Records deviation or dispute | Exception ID, trigger, owner, escalation path | MRO-07, MRO-16 | GAIC-derived + EVID-04 | Not legal breach finding |
| Remediation closure | Records corrective action and closure | Corrective action, recheck, closure reviewer, reopen criteria | MRO-16 | GAIC-derived + AUD-04/AUD-05 | Not settlement or regulator closure |
| Privacy treatment | Defines minimization and disclosure | Redaction profile, retention rule, access scope | MRO-10 to MRO-13 | PRIV sources + GAIC synthesis | Not legal advice |

**Table note:** This table is mixed source-grounded, GAIC-derived, and author-synthesis. It is a drafting model, not an audit standard, certification checklist, or legal template.

## Cross-Links

- Chapter 6 maps the model to all MROs.
- Appendix A converts fields into evidence requests.
- Appendix B turns fields into a walkthrough template.

## Boundary Note

The Agentic Audit Object Model should be read as a review architecture. It does not require MPLP, Cognitive OS, Validation Lab, or any particular vendor system.

## R3 QA Notes

- Confirm no field implies universal retention.
- Consider whether to add a figure showing object relationships in R3.
