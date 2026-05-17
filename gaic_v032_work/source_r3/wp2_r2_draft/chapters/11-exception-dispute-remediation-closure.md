# 11. Exception, Dispute, and Remediation Closure

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define closure evidence for failed, disputed, drifted, or remediated agentic work.
**Reader question:** How does auditability handle exceptions and closure?

## Key Claims

- Exceptions, disputes, authority drift, outcome rejection, and remediation must close as evidence-backed lifecycle states.
- Incident logs alone do not prove closure.
- Closure evidence should identify owner, corrective action, recheck, accepted closure state, and reopen criteria.

## Source Grounding Note

Incident/governance context uses EVID-04 and AI-02. Control and AI audit practice context uses AUD-04, AUD-05, and AUD-06. GAIC source truth provides MRO-04, MRO-07, and MRO-16.

## Author Synthesis Note

Remediation closure as an audit evidence state is WP2/GAIC synthesis. It is not a legal settlement, regulator closure, or assurance conclusion.

## Draft Prose

Agentic auditability is incomplete if it only reconstructs successful work. Many of the most important review questions arise when an agent acts outside expected authority, a tool action creates unintended consequence, an outcome is disputed, a privacy issue appears, a handoff fails, or remediation is required.

In ordinary operations, exceptions often become tickets. Tickets are useful, but they are not automatically lifecycle evidence. A ticket may describe an issue, assign an owner, record comments, and mark a status. For auditability, the ticket must connect to the agentic work unit, authority boundary, role map, tool action, evidence pointer, accepted outcome state, privacy treatment, corrective action, and closure state.

Closure is the critical concept. An incident can be detected without being remediated. A remediation can be attempted without being rechecked. A recheck can occur without being accepted. An accepted closure can later be reopened. Auditability requires those state transitions to be evidence-backed.

For agentic systems, exceptions should be categorized by lifecycle object. Was the issue an authority exception, where observed behavior exceeded delegated scope? Was it a responsibility exception, where no human owner could be identified? Was it a tool-action exception, where a tool created unexpected side effects? Was it an accepted-outcome dispute, where a result was produced but not accepted? Was it a privacy exception, where evidence collection or disclosure exceeded the intended boundary? Was it a substitution exception, where evidence integrity broke after runtime/model/tool change?

The closure record should answer five questions:

1. What happened and which lifecycle object was affected?
2. Who owned the exception and remediation?
3. What corrective action was taken?
4. What evidence shows recheck or review?
5. Who accepted closure, and what would reopen the issue?

None of these questions determines legal fault. None proves regulatory acceptance. None settles liability. They make the remediation lifecycle reconstructable.

## Table 10: Exception / Dispute / Remediation Evidence Checklist

| Event type | Evidence required | Owner | Escalation path | Remediation record | Closure evidence | Boundary |
|---|---|---|---|---|---|---|
| Authority exception | Baseline authority, observed action, trigger, affected work unit | Escalation owner | Stop, downgrade, reauthorize, or human confirmation | Reauthorization or stop-action record | Closure acceptance and new boundary | Not legal determination |
| Outcome dispute | Output, acceptance criteria, dispute reason, reviewer notes | Review owner | Secondary review or remediation | Correction/review path | Accepted, rejected, or remediated state | Not settlement proof |
| Tool-action side effect | Tool call, target system, affected data/process, reversibility | Tool-action owner | Rollback, disable, escalate | Rollback or corrective action | Recheck and owner acceptance | Not liability finding |
| Privacy event | Data category, disclosure path, redaction/retention record | Privacy owner | Privacy/legal review | Redaction, deletion, hold, or access restriction | Review note and disclosure update | Not legal advice |
| Handoff failure | Source/target agent, transferred scope, retained scope | Process owner | Return, reassign, or escalate | Transfer correction | Accepted transfer or closed exception | Not legal responsibility transfer |
| Remediation defect | Prior closure evidence, reopened issue, failed recheck | Remediation owner | Reopen and reassign | Updated corrective action | Recheck and closure reviewer | Not regulator closure |

**Table note:** Mixed source-grounded, GAIC-derived, and author-synthesis checklist. It is not an audit procedure, legal remedy checklist, or certification criterion.

## Cross-Links

- Appendix E provides an expanded closure checklist.
- Chapter 13 includes exception traceability and remediation closure as AARM dimensions.
- Chapter 16 connects closure to future Guide 1, Guide 2, and WP3.

## Boundary Note

Closure in this chapter means evidence-backed governance closure. It does not mean legal closure, settlement, regulator acceptance, assurance opinion, or certification.

## R3 QA Notes

- Review event types for completeness and consistency with Appendix E.
- Keep legal-risk wording soft and non-conclusive.
