# Appendix E — Exception / Remediation Closure Checklist

**Appendix status:** R2 INTERNAL DRAFT
**Purpose:** Define closure evidence requirements for exceptions, disputes, and remediation.
**Intended reader:** Internal audit, incident governance, compliance, risk, security, AI platform owners, remediation owners.

## Source Grounding

Incident/governance context: EVID-04, AI-02.
Controls and audit practice: AUD-04, AUD-05, AUD-06.
GAIC dependencies: MRO-04, MRO-07, MRO-16.

## Boundary

This checklist frames closure as evidence-backed governance state. It does not prove legal remedy, settlement, regulator acceptance, operational effectiveness, certification, or assurance.

## Closure Checklist

| Event type | Evidence required | Owner | Corrective action | Closure status | Reviewer | Reopen criteria | Boundary note |
|---|---|---|---|---|---|---|---|
| Authority exception | Baseline authority, observed action, trigger, work unit, evidence pointer | Escalation owner | Stop, downgrade, reauthorize, confirm, or constrain | Open / remediated / closed | Authority reviewer | Repeat drift, scope expansion, failed confirmation | Not legal breach finding |
| Responsibility gap | Missing role owner, affected lifecycle stage, agent role, work unit | Governance owner | Assign owner, update role map, recheck workflow | Open / assigned / closed | Governance reviewer | Owner missing in later run | Not legal liability assignment |
| Tool-action side effect | Tool call, affected system/data, reversibility, rollback evidence | Tool-action owner | Rollback, correction, disable tool, add approval | Open / corrected / closed | System owner | New side effect or rollback failure | Not liability conclusion |
| Outcome dispute | Output, criteria, dispute reason, reviewer notes | Review owner | Re-review, correct, reject, accept with limitation | Open / disputed / remediated / accepted | Outcome reviewer | New evidence or recurring dispute | Not settlement proof |
| Privacy event | Data category, disclosure path, redaction/retention record | Privacy owner | Redact, restrict, delete, hold, notify internal process | Open / contained / closed | Privacy reviewer | Unauthorized exposure or rights request | Not legal advice |
| Handoff failure | Source/target agent, transferred scope, retained scope, rejection reason | Process owner | Return, reassign, clarify constraints | Open / reassigned / closed | Process reviewer | Repeated failed handoff | Not legal transfer |
| Cross-project reuse issue | Source context, target context, reuse decision, missing reset | Reuse owner | Revalidate, reset, withdraw, update evidence | Open / revalidated / closed | Reuse/governance reviewer | Reuse in new context | Not legal reuse clearance |
| Substitution evidence gap | Prior/new component, evidence break, regression or revalidation status | Change owner | Reauthorize, retest, revalidate evidence chain | Open / revalidated / closed | Change reviewer | Component change or failed evidence continuity | Not conformance certification |
| Remediation defect | Prior remediation, failed recheck, affected outcome | Remediation owner | Reopen, assign corrective action, recheck | Reopened / corrected / closed | Closure reviewer | Failed recheck or recurring exception | Not regulator closure |

## Closure Evidence Fields

- Event ID.
- Work unit ID.
- Affected MRO.
- Affected outcome.
- Owner.
- Evidence pointer.
- Corrective action.
- Recheck evidence.
- Closure reviewer.
- Closure status.
- Reopen criteria.
- Privacy treatment.
- Boundary statement.

## Guide Relationship

Guide 1 should translate closure fields into workflow, ticketing, runtime, and evidence-export architecture. Guide 2 should translate closure fields into incident/dispute/remediation governance routines.

## R3 QA Notes

- Align event types with Chapter 11.
- Review "privacy event" row before public release.
