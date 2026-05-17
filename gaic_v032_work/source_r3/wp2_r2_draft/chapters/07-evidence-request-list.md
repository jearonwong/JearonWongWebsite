# 7. Evidence Request List for Agentic Systems

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define the logic of evidence requests for agentic systems without turning them into formal audit procedures.
**Reader question:** What should reviewers ask to reconstruct agentic lifecycle work?

## Key Claims

- Evidence requests should be organized by lifecycle stage and review objective.
- Agentic evidence requests must cover role, authority, agent/tool action, outcomes, exceptions, privacy, partitioning, and closure.
- Evidence requests are readiness architecture, not universal legal demands or formal audit procedures.

## Source Grounding Note

Audit evidence and evidence sufficiency language is grounded in AUD-01 and AUD-02. Control and AI audit practice context comes from AUD-04, AUD-05, and AUD-06. AI governance/logging context may use AI-06.

## Author Synthesis Note

The evidence request taxonomy is WP2 author synthesis derived from GAIC MROs and professional audit/control language.

## Draft Prose

Agentic auditability becomes practical when it is expressed as evidence requests. A high-level statement that "the system is logged" is not enough. A reviewer needs to know what evidence should exist, where it lives, which lifecycle stage it supports, what role owns it, how sensitive fields are treated, and what boundary applies.

The evidence request list should begin with the lifecycle work unit. The reviewer should be able to ask: What work was initiated? What purpose and scope did it have? Who initiated it? Which agent or workflow received it? Which policy, authority, or business context applied? Without a work unit, later evidence cannot be connected.

The second request category is authority. What delegated authority allowed the agent to act? Was the action within scope? Did the authority have conditions, risk class, expiry, confirmation, or escalation requirements? If authority changed, was the change recorded? If authority drift occurred, was it escalated and closed?

The third category is responsibility. Which human role owned intent, review, acceptance, exception handling, and remediation? Which agent role executed the work? Was a responsibility transfer recorded across agents? Was a tool action tied back to a human or organizational owner? This category distinguishes accountability from technical execution.

The fourth category is tool-action evidence. Tool calls are where agent behavior often becomes operational consequence. Evidence should identify the tool, action, target system, affected data or process, response, reversibility, rollback path, and owner. The request is not asking for legal liability conclusions. It is asking for reconstructability.

The fifth category is outcome evidence. Reviewers should distinguish produced output from accepted outcome. Was the output accepted, rejected, disputed, escalated, or remediated? Who reviewed it? Which criteria or policy were applied? What evidence supports the final state?

The sixth category is exception and remediation. What event occurred? What lifecycle object was affected? Who owned the exception? What corrective action was taken? Was the action rechecked? Who accepted closure? What would reopen the issue?

The seventh category is privacy and selective disclosure. Evidence should not be over-collected or over-disclosed. Reviewers should ask for data categories, redaction profiles, retention rules, disclosure scope, access logs, and minimization rationale. Legal interpretation remains outside WP2, but the evidence architecture should make privacy-aware review possible.

Finally, evidence requests should include boundary statements. Each request should clarify whether it supports readiness, reconstruction, control review, third-party review, or assurance planning. It should also clarify what it does not prove.

## Table 4: Lifecycle Stage -> Audit Evidence Request

| Lifecycle stage | Core review question | Evidence requested | Human role | Agent/tool record | Outcome/closure | Privacy treatment |
|---|---|---|---|---|---|---|
| Intent | What work was initiated and why? | Work unit ID, purpose, scope, initiating context | Request owner | Initial agent/workflow assignment | No accepted outcome yet | Purpose and data categories |
| Delegation | Was action authorized within scope? | Authority grant, conditions, expiry, confirmation boundary | Delegating/approving role | Agent permission and tool scope | Escalation path | Minimum necessary authority evidence |
| Planning | What plan or route was selected? | Plan version, constraints, review flags | Plan reviewer if required | Agent plan trace | Plan accepted/rejected state | Redacted sensitive prompts if needed |
| Tool action | What external consequence occurred? | Tool identity, action, target, response, affected data, reversibility | Tool-action owner | Tool-call record, service trace | Action status and rollback path | Data minimization and access scope |
| Handoff | Was responsibility transferred? | Source/target agent, transferred scope, retained scope, acceptance/rejection | Handoff owner | Agent transfer record | Transfer state | Partition and disclosure rule |
| Review | Was work reviewed before acceptance? | Review record, criteria, evidence pointer | Reviewer role | Supporting traces/outputs | Accepted/rejected/disputed | Redaction profile |
| Exception | What deviation occurred? | Exception record, baseline, trigger, impact | Escalation owner | Incident trace or alert | Open/remediated/closed | Sensitive-data handling |
| Closure | Was remediation complete? | Corrective action, recheck evidence, closure owner, reopen criteria | Closure owner | Remediation workflow trace | Closure state | Retention/disclosure rule |

**Table note:** Mixed source-grounded and author-synthesis table. It is a readiness evidence architecture, not a formal audit procedure, legal demand, or certification criterion.

## Cross-Links

- Appendix A expands the evidence request list.
- Appendix B turns these categories into a walkthrough template.
- Appendix E provides exception/remediation checklist detail.

## Boundary Note

Evidence requests do not prove legal compliance or audit sufficiency. A qualified professional must evaluate sufficiency in context.

## R3 QA Notes

- Review whether any request reads like universal legal obligation.
- Consider adding source-note footnotes per request category in publication candidate.
