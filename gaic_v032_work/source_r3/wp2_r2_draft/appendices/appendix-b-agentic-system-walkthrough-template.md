# Appendix B — Agentic System Walkthrough Template

**Appendix status:** R2 INTERNAL DRAFT
**Purpose:** Provide a repeatable walkthrough structure for a single agentic lifecycle run.
**Intended reader:** Internal audit, technology risk, AI governance committees, architecture review teams, platform owners, and compliance engineering teams.

## Source Grounding

Control and audit practice context: AUD-04, AUD-05, AUD-06.
Provenance and observability context: EVID-01, EVID-02.
GAIC dependencies: MRO-01 through MRO-08 and MRO-16.

## Boundary

This template is illustrative. It is not a formal audit procedure, assurance engagement program, legal compliance test, certification path, or regulator-approved walkthrough.

## Walkthrough Fields

| Field | Description | Evidence pointer | Related MRO | Boundary note |
|---|---|---|---|---|
| Work unit ID | Stable identifier for the lifecycle work under review | Workflow/run/task record | MRO-08 | Not mandatory schema |
| Intent and scope | Purpose, initiating request, in-scope and out-of-scope actions | Request record, policy reference | MRO-01, MRO-08 | Does not prove appropriateness |
| Initiator role | Human or system role that initiated the work | Role map | MRO-01 | Not legal liability assignment |
| Delegated authority | Authority grant, conditions, expiry, confirmation, escalation | Authority record | MRO-02 | Not legal delegation proof |
| Agent role | Agent identity, role boundary, constraints, capability limits | Agent registry/config record | MRO-03 | Agent role is not human role |
| Tool/system used | Tool, external system, API, processor, runtime | Tool-action evidence | MRO-05, MRO-14 | Not vendor ranking |
| Evidence pointers | Logs, traces, approvals, tickets, records, hash manifests | Evidence chain references | MRO-08, MRO-12 | Not blanket disclosure |
| Human review | Reviewer role, review criteria, review result | Review record | MRO-01, MRO-04 | Not assurance opinion |
| Accepted outcome | Produced/accepted/rejected/disputed/remediated state | Outcome record | MRO-04 | Not compliance proof |
| Exception state | Drift, dispute, failure, privacy event, tool side effect | Exception record | MRO-07, MRO-16 | Not legal breach finding |
| Remediation closure | Corrective action, recheck, closure acceptance, reopen criteria | Remediation record | MRO-16 | Not legal settlement |
| Privacy treatment | Data category, redaction, retention, disclosure profile | Privacy/disclosure record | MRO-10 to MRO-13 | Not legal advice |
| Third-party review boundary | Reviewer role, ruleset, scope, result, limitation | Validation/review record | MRO-11 | Not certification |

## Walkthrough Sequence

1. Identify the work unit and review scope.
2. Confirm the authority boundary and role ownership.
3. Reconstruct agent actions, tool actions, and handoffs.
4. Link logs/traces to evidence pointers and lifecycle objects.
5. Verify accepted outcome, dispute, or rejection state.
6. Review exceptions and remediation closure.
7. Confirm privacy/selective disclosure treatment.
8. Record what the walkthrough supports and what it does not prove.

## Guide Relationship

Guide 1 should use this template as a technical evidence export and walkthrough architecture pattern. Guide 2 should use it as an audit preparation and governance review workflow.

## Placement Recommendation

Include in the WP2 PDF if space allows. Expand implementation details in Guide 1 and governance workflow details in Guide 2.

## R3 QA Notes

- Consider adding a generic sample work unit in R3 or deferring examples.
- Review all role language for legal liability overclaim.
