# Appendix A — Agentic Audit Evidence Request List

**Appendix status:** R2 INTERNAL DRAFT
**Purpose:** Provide a structured evidence request catalog for agentic systems.
**Intended reader:** Audit/assurance teams, internal audit, AI governance, CIO/CTO/CCO teams, technology risk teams, and evidence architecture owners.

## Source Grounding

Audit evidence and control vocabulary: AUD-01, AUD-02, AUD-04, AUD-05, AUD-06.
GAIC dependencies: MRO-01 through MRO-16, Evidence-Based Validation Pattern, Validation Lab boundary.

## Boundary

This appendix is an evidence request architecture. It is not a formal audit procedure, legal demand, certification criterion, procurement checklist, assurance engagement plan, or proof of legal compliance.

## Evidence Request Catalog

| Request ID | Lifecycle stage | Evidence requested | Related MRO | Owner | Privacy treatment | Boundary note |
|---|---|---|---|---|---|---|
| ER-01 | Work initiation | Work unit ID, task intent, request source, scope, excluded scope | MRO-08 | Request owner | Record only necessary purpose/context fields | Does not prove business appropriateness |
| ER-02 | Role mapping | Human role for intent, authorization, review, acceptance, exception, remediation | MRO-01 | Governance/control owner | Role data minimized to function and authority | Does not assign legal liability |
| ER-03 | Delegated authority | Authority grant, conditions, expiry, risk class, confirmation and escalation rules | MRO-02 | Delegating role | Restrict authority evidence to review scope | Not legal delegation proof |
| ER-04 | Agent role | Agent role, capability boundary, constraints, evidence duties, escalation route | MRO-03 | Platform owner | Avoid storing unnecessary prompt/user data | Agent is not a human role |
| ER-05 | Accepted outcome | Acceptance criteria, reviewer role, accepted/rejected/disputed/remediated state | MRO-04 | Review owner | Redact sensitive output fields where possible | Acceptance is not compliance proof |
| ER-06 | Tool action | Tool ID, action type, target system, affected data/process, reversibility, rollback path | MRO-05 | Tool-action owner | Classify affected data and redact as needed | Not legal liability finding |
| ER-07 | Responsibility transfer | Source agent, target agent, transferred scope, retained scope, inherited constraints | MRO-06 | Process owner | Partition by work unit and agent role | Not legal responsibility transfer |
| ER-08 | Authority drift | Baseline authority, observed action, drift trigger, escalation, stop/downgrade/reauthorization | MRO-07 | Escalation owner | Limit exposure to event-relevant fields | Not every drift is legal breach |
| ER-09 | Evidence partitioning | Partition keys, links, evidence pointers, integrity hashes, access/disclosure rules | MRO-08 | Evidence owner | Use scoped access and redaction profiles | Not blanket retention |
| ER-10 | Cross-project reuse | Source context, target context, reset validation, privacy review, authorization refresh | MRO-09 | Reuse owner | Revalidate data categories and retention | Not legal reuse clearance |
| ER-11 | Privacy lifecycle | Data flow, processing purpose, retention rule, rights workflow, minimization treatment | MRO-10 | Privacy owner | Apply privacy-by-design review | Not legal advice |
| ER-12 | Third-party validation | Ruleset identity, evidence pointer, disclosure/redaction profile, verdict hash, reviewer boundary | MRO-11 | Validation/review owner | Use selective disclosure package | Not certification |
| ER-13 | Evidence minimization | Minimization rule, disclosure justification, redaction profile, access log, expiry | MRO-12 | Evidence/privacy owner | Minimize and document residual exposure | Not privacy compliance proof |
| ER-14 | Rights vs retention | Request type, retention basis, hold status, deletion/redaction action, review owner | MRO-13 | Privacy/legal owner | Requires jurisdiction-specific review | Not legal interpretation |
| ER-15 | Processor chain | Processor role, subprocessor chain, data processing pointer, responsibility owner | MRO-14 | Vendor/privacy owner | Restrict processor evidence by need-to-know | Not vendor ranking |
| ER-16 | Substitution conformance | Prior/new model, vendor, runtime, tool, evidence-integrity check, reauthorization | MRO-15 | Change owner | Preserve evidence continuity without over-retention | Not conformance certification |
| ER-17 | Incident/remediation closure | Event, affected outcome, owner, corrective action, recheck, closure acceptance, reopen criteria | MRO-16 | Remediation owner | Redact sensitive incident details as needed | Not legal closure |

## Guide Relationship

Guide 1 should translate this appendix into system output requirements, evidence export design, runtime metadata, and workflow architecture. Guide 2 should translate it into policy-to-evidence governance, audit preparation, review cadence, and closure routines.

## Placement Recommendation

Retain a condensed version in the WP2 main PDF. A fuller operational checklist can be deferred to Guide 1 and Guide 2.

## R3 QA Notes

- Confirm request IDs align with chapter references.
- Review privacy/legal-sensitive rows ER-11 through ER-14.
