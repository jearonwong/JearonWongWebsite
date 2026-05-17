# 8. Lifecycle Walkthrough for AI Agent / MAS Work

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Provide a reconstruction pattern for one agentic lifecycle run or work unit.
**Reader question:** How is one agentic workflow walked from intent to accepted outcome?

## Key Claims

- A lifecycle walkthrough should connect intent, authority, planning, execution, handoff, evidence, review, outcome, exception, remediation, and closure.
- The walkthrough is illustrative and readiness-oriented, not a formal audit procedure.
- Walkthroughs should preserve human role and agent role separation.

## Source Grounding Note

Control and walkthrough-adjacent language uses AUD-04, AUD-05, and AUD-06. Provenance and trace context uses EVID-01 and EVID-02. GAIC source truth provides MRO lifecycle objects.

## Author Synthesis Note

The agentic lifecycle walkthrough is WP2 author synthesis. It translates GAIC MROs and evidence request categories into a reconstruction pattern.

## Draft Prose

A lifecycle walkthrough tests whether a single unit of agentic work can be reconstructed. It begins with a concrete work unit: a task, run, agent workflow, multi-agent handoff, tool action, or remediation event. The goal is not to prove compliance. The goal is to determine whether the evidence chain can explain the work from intent to closure.

The walkthrough should begin with intent and scope. What was the system asked to do? Who initiated the work? What business process, policy, or governance context applied? What was out of scope? The purpose of this step is to avoid reviewing an isolated output without understanding the work it belongs to.

The second step is authority. What authority allowed the agent or workflow to act? Was authority delegated by role, policy, system configuration, human confirmation, or another control? Did that authority include limits, expiry, risk class, confirmation requirements, or escalation paths? If the tool action exceeded scope, was that captured as exception or authority drift?

The third step is agent and tool identification. Which agent role acted? What constraints applied to that role? Which tools were available? Which tools were used? Which external systems, data stores, APIs, or processors were touched? The walkthrough should separate the agent role from the human role and the tool surface.

The fourth step is evidence pointer review. Where are logs, traces, workflow records, approvals, policies, tickets, evidence packs, or hash manifests stored? Are they linked by a stable work unit ID? Are there partition keys by agent, tool, role, vendor, project, data class, and lifecycle stage? Can an authorized reviewer reconstruct the chain without overexposing sensitive data?

The fifth step is outcome review. What output or action occurred? Was the outcome accepted, rejected, disputed, escalated, remediated, or closed? Who had authority to accept it? What evidence supports that state? An accepted outcome is a governance state, not just a completed workflow event.

The sixth step is exception and remediation review. If something deviated, did the system record the baseline, trigger, owner, corrective action, recheck, closure state, and reopen criteria? A lifecycle walkthrough is incomplete if it stops at detection and never reaches closure.

The seventh step is boundary review. What does the walkthrough support? It may support readiness discussion, internal review, evidence request scoping, or future assurance planning. It does not itself produce an audit opinion, certification, legal conclusion, or regulator-approved result.

## Table 5: Human Role / Agent / Tool Responsibility Matrix

| Lifecycle task | Human role | Agent role | Tool/system | Authority basis | Evidence pointer | Escalation path |
|---|---|---|---|---|---|---|
| Initiate work | Request owner | Intake agent | Workflow system | Business request policy | Work unit record | Reject or request clarification |
| Approve external action | Business owner or delegated approver | Execution agent | CRM/API/configuration tool | Delegated authority record | Authority evidence pointer and tool log | Human confirmation or stop |
| Transfer task | Process owner | Source and target agents | Orchestration runtime | Handoff rule and inherited constraints | Responsibility transfer record | Return/reject/escalate |
| Review output | Reviewer role | Drafting or analysis agent | Document/review system | Review policy | Output, review note, evidence pointer | Dispute or remediation |
| Handle exception | Incident/remediation owner | Monitoring or remediation agent | Ticketing/incident system | Escalation rule | Exception record and remediation evidence | Reopen, escalate, or close |

**Table note:** GAIC-derived and author-synthesis table grounded in internal audit, control, provenance, and observability context. It assigns review responsibility for auditability purposes only and does not assign legal liability.

## Walkthrough Output

A completed walkthrough should produce:

- Work unit identity and scope.
- Authority boundary and confirmation history.
- Human role and agent role map.
- Tool-action evidence and side-effect summary.
- Evidence chain with pointers and partition keys.
- Accepted outcome or dispute state.
- Exception/remediation closure state if applicable.
- Privacy treatment and disclosure profile.
- Boundary statement describing what the walkthrough does and does not prove.

## Cross-Links

- Appendix B provides the walkthrough template.
- Chapter 9 addresses partitioning across agents, tools, vendors, and projects.
- Chapter 11 addresses exceptions and remediation closure.

## Boundary Note

The walkthrough is a reconstruction pattern for readiness and evidence design. It is not a formal audit procedure, assurance engagement step, or legal compliance test.

## R3 QA Notes

- Consider whether to add a neutral worked example in R3 or defer examples to Guide 1.
- Check that the matrix does not read as legal accountability assignment.
