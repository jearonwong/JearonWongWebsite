# Appendix D — Auditability Readiness Matrix

**Appendix status:** R2 INTERNAL DRAFT
**Purpose:** Provide AARM dimension and readiness-level crosswalk.
**Intended reader:** Audit readiness teams, CIO/CTO/CCO leaders, internal audit, governance committees, platform teams.

## Source Grounding

Audit evidence: AUD-01.
AI audit practice: AUD-05, AUD-06.
AI governance: AI-01.
Boundary: BOUND-03.
GAIC dependency: R4B/R1 AARM baseline, MROs, ALCS context, Validation Lab boundary.

## Boundary

AARM is not an audit standard, certification, assurance opinion, legal compliance proof, regulator approval, procurement recommendation, vendor ranking, or score.

## AARM Dimensions

| Dimension | Definition | Audit question | Evidence expected | GAIC/MRO dependency | Author-synthesis note | Boundary |
|---|---|---|---|---|---|---|
| Audit object clarity | System can identify lifecycle work under review | Can reviewers name the lifecycle unit, scope, and outcome? | Lifecycle ID, workflow scope, object inventory | MRO-01, MRO-03, MRO-04 | AARM synthesis | Not legal category |
| Authority traceability | Delegated authority can be traced to action | Was the action authorized within scope? | Authority grant, expiry, escalation, reauthorization | MRO-02, MRO-07 | AARM synthesis | Not legal delegation proof |
| Human / agent responsibility mapping | Human and agent roles are separated and mapped | Who owned intent, execution, review, acceptance, remediation? | Role-responsibility map, transfer record | MRO-01, MRO-03, MRO-06 | AARM synthesis | No anthropomorphism |
| Evidence sufficiency | Evidence supports reconstruction under review scope | Can reviewers reconstruct without narrative memory? | Evidence chain, pointers, integrity records | MRO-04, MRO-08, MRO-16 | AARM synthesis | Not professional sufficiency conclusion |
| Agent/tool partitioning | Evidence separates agent, tool, vendor, processor, project | Can reviewers identify which surface produced each evidence item? | Agent/tool trace, partition keys, substitution record | MRO-05, MRO-08, MRO-14, MRO-15 | AARM synthesis | No vendor ranking |
| Exception traceability | Exceptions link to lifecycle objects and owners | Can deviation be linked to authority, impact, and next action? | Exception record, impact scope, escalation | MRO-07, MRO-16 | GAIC-derived synthesis | Not legal violation finding |
| Accepted outcome evidence | Outcome states are recorded with role and evidence linkage | Who accepted, rejected, disputed, or remediated the result? | Outcome state, reviewer role, evidence link | MRO-04 | GAIC-derived synthesis | Acceptance is not compliance proof |
| Remediation closure | Corrective action and closure are evidence-backed | What was remediated and who accepted closure? | Remediation plan, correction evidence, recheck, closure status | MRO-16 | GAIC-derived synthesis | Not legal settlement |
| Privacy and selective disclosure | Evidence can be minimized and disclosed by scope | Can review happen without exposing more than needed? | Redaction, retention, disclosure profile | MRO-10 to MRO-13 | WP2 synthesis | Not legal advice |
| Third-party review boundary | Review role and claim boundary are explicit | What can reviewers inspect and not claim? | Scope, ruleset, verdict, boundary statement | MRO-11, MRO-12, MRO-16 | WP2 synthesis | No certification/opinion |

## Readiness Levels

| Level | Definition | Observable traits | Minimum evidence | What it does not prove | Source / synthesis classification |
|---|---|---|---|---|---|
| L0 Unobservable | Lifecycle work cannot be reconstructed | Outputs only, informal memory, no lifecycle ID | None or ad hoc notes | Absence of risk or non-compliance | WP2 synthesis grounded in audit evidence concepts |
| L1 Log-Visible | Activity logs exist but are not responsibility-linked | Logs, traces, timestamps, event streams | Raw logs or trace exports | Authority, responsibility, accepted outcome, closure | EVID-02/EVID-03 + WP2 synthesis |
| L2 Trace-Linked | Logs/traces connect some actions to workflows or actors | Workflow IDs, agent/tool traces, partial actor link | Trace-linked run records | Complete lifecycle responsibility or sufficient evidence | EVID-01/EVID-02 + WP2 synthesis |
| L3 Evidence-Structured | Lifecycle objects exist for reconstruction | Role maps, authority objects, outcome records, exception records | MRO-aligned evidence objects | Assurance readiness, legal compliance, operating effectiveness | GAIC-derived + audit/control grounding |
| L4 Auditability-Ready | Defined-scope evidence chains reconstruct lifecycle work | Walkthroughs, evidence requests, privacy controls, closure records | Complete evidence chain for review scope | Audit opinion, certification, regulator approval | WP2 synthesis |
| L5 Assurance-Ready | Evidence architecture may support professional assurance planning | Repeatable evidence packs, reviewer scope, rulesets, recheck procedures | Reviewable evidence packs and boundary statement | Actual assurance, certification, legal compliance, regulator acceptance | WP2 synthesis bounded by AUD-03/BOUND-03 |

## Minimum Evidence Crosswalk

| Dimension | L0/L1 concern | L2/L3 transition | L4/L5 transition |
|---|---|---|---|
| Audit object clarity | No stable work unit | Work unit IDs appear in traces and evidence objects | Work units support scoped walkthroughs and evidence packs |
| Authority traceability | Access logs only | Partial authority metadata | Delegated authority records are reconstructable |
| Responsibility mapping | User/service IDs only | Partial role map | Human/agent responsibility chain is explicit |
| Evidence sufficiency | Narrative memory | Evidence pointers emerge | Evidence chain supports review objective |
| Partitioning | Flattened logs | Partial partitions | Agent/tool/vendor/project/privacy partitions are linked |
| Exception traceability | Incident tickets only | Exceptions linked to work units | Exceptions include owner, action, recheck, closure |
| Accepted outcome | Output completion only | Partial review records | Accepted/rejected/disputed/remediated states are evidence-backed |
| Remediation closure | Closed ticket only | Corrective action tracked | Closure is accepted and reopen criteria exist |
| Privacy/selective disclosure | Collect everything or disclose ad hoc | Redaction/retention rules appear | Selective disclosure packages support review |
| Third-party boundary | No scope statement | Limited reviewer scope | Ruleset, scope, verdict, and non-certifying boundary are explicit |

## R3 QA Notes

- Confirm no numeric scoring language enters AARM.
- Review L5 wording for assurance-overclaim risk.
