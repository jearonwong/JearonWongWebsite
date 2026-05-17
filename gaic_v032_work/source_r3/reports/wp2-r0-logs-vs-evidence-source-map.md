# WP2-R0 Logs vs Audit Evidence Chain Source Map

**Task ID:** WP2-R0-BIG-FOUR-AUDIT-ASSURANCE-SOURCE-RESEARCH  
**Date:** May 17, 2026  
**Status:** Source map for the logs/evidence distinction  
**Boundary:** This report supports the future WP2 claim that logs are not audit evidence chains. It does not claim logs are useless, observability vendors fail, or raw telemetry has no audit value.

## Core Claim to Ground

**Logs are not audit evidence chains.**

Future WP2 drafting should express this carefully:

Logs, traces, metrics, and observability signals can be valuable evidence ingredients. They do not automatically prove authority, responsibility, accepted outcome, exception handling, privacy treatment, or remediation closure unless they are linked to lifecycle responsibility metadata and reviewable evidence objects.

## What Logs / Traces / Observability Can Support

| Evidence ingredient | What it can show | Candidate source support |
|---|---|---|
| Logs | Events, timestamps, users/services, errors, changes, security-relevant activity, operational sequence. | EVID-02, EVID-03, EVID-04 |
| Traces | Request/workflow flow across services, latency, spans, service dependency, execution path. | EVID-02 |
| Metrics | Aggregated system behavior, rates, availability, errors, performance patterns. | EVID-02, EVID-04 |
| Provenance records | Relationships among entities, activities, agents, derivation, attribution, and responsibility concepts. | EVID-01 |
| Audit evidence sources | Professional framing for evidence relevance, reliability, sufficiency, and appropriateness. | AUD-01, AUD-02 |

## What Logs Do Not Automatically Prove

| Missing proof element | Why logs alone are insufficient | Related WP2 object |
|---|---|---|
| Authority | A tool call record may show an action happened but not whether the action was authorized under business scope, risk class, expiry, or escalation rule. | Authority boundary; delegated authority |
| Human responsibility | A user or service account does not automatically identify the accountable human role for intent, acceptance, or remediation. | Human role responsibility; MRO-01 |
| Agent role boundary | Logs may record a service or agent name without capturing its bounded responsibility surface or capability constraints. | Agent role responsibility; MRO-03 |
| Accepted outcome | Execution completion does not show whether a business owner accepted, rejected, disputed, or remediated the outcome. | Accepted outcome; MRO-04 |
| Tool-action consequence | Logs may show a tool invocation but not reversibility, affected data, external consequence, or liability boundary. | Tool-action evidence; MRO-05 |
| Multi-agent handoff | A trace may show routing without showing responsibility transfer, constraint inheritance, or receiving-role acceptance. | Responsibility transfer; MRO-06 |
| Evidence partition | Centralized logs may flatten agents, tools, vendors, projects, jurisdictions, or privacy boundaries. | MAS evidence partitioning; MRO-08 |
| Privacy treatment | Logging can increase privacy exposure unless evidence retention, minimization, redaction, and disclosure rules are applied. | Evidence minimization; selective disclosure; MRO-10 to MRO-13 |
| Remediation closure | Incident logs can show activity but not whether corrective action, owner acceptance, recheck, and closure happened. | Remediation closure; MRO-16 |

## What Audit Evidence Requires Beyond Raw Logs

| Audit-evidence need | Source support | WP2 interpretation |
|---|---|---|
| Relevance and reliability | AUD-01, AUD-02 | Evidence must be fit for the assertion or review question. |
| Sufficiency and appropriateness | AUD-01, AUD-02 | Evidence quantity and quality matter; logs alone may be insufficient. |
| Criteria and engagement boundary | AUD-03, BOUND-03 | Assurance conclusions depend on defined criteria and practitioner scope, not an authored readiness model alone. |
| Control context | AUD-04, AUD-05, AUD-06 | Logs should be tied to controls, walkthroughs, risk, governance, and exception handling. |
| Provenance relationships | EVID-01 | Evidence chains should preserve entity/activity/agent relationships and derivation/attribution context. |
| Privacy/minimization constraints | PRIV-01 to PRIV-05 | Evidence retention and disclosure must be balanced with privacy and data minimization. |

## How Lifecycle Responsibility Metadata Changes Evidentiary Value

Lifecycle responsibility metadata can turn raw activity records into more reviewable evidence by linking records to:

- lifecycle ID and work unit;
- human role and agent role;
- delegated authority scope and confirmation boundary;
- tool-action context and reversibility;
- evidence pointer and integrity/hash record;
- accepted, rejected, disputed, or remediated outcome state;
- exception owner and remediation closure;
- retention, redaction, selective-disclosure, and privacy boundary.

This should be framed as an evidence architecture claim, not as a statement that telemetry products are deficient.

## Where OpenTelemetry / Observability Sources Are Useful

OpenTelemetry is useful for explaining observability signals and the difference between logs, metrics, and traces. It should support the "what logs and traces can show" side of the argument.

OpenTelemetry should not be used as the authority for professional audit evidence. For audit evidence terminology, future WP2 drafting should rely on PCAOB, IAASB, AICPA, ISACA, IIA, and related professional sources.

## Where Audit Evidence Sources Are Needed

PCAOB AS 1105 and IAASB ISA 500 (Revised) should support the professional distinction between raw information and audit evidence that is evaluated for relevance, reliability, sufficiency, and appropriateness.

AICPA Trust Services Criteria, ISACA AI Audit Toolkit, and IIA AI auditing guidance can support control, walkthrough, internal audit, and governance language.

## Privacy and Security Retention Constraints

Evidence-chain design must avoid a naive "log everything forever" posture. GDPR Article 5, EDPB Article 25 guidance, NIST Privacy Framework, and ICO minimization/storage limitation guidance support the need for minimization, retention discipline, selective disclosure, and reviewable data governance.

## Safe Future WP2 Phrasing

Allowed:

- "Logs and traces are useful evidence ingredients."
- "Logs do not automatically prove authority, responsibility, accepted outcome, exception handling, or remediation closure."
- "Audit evidence chains require lifecycle responsibility metadata."
- "Observability explains system behavior; auditability also needs responsibility reconstruction."

Avoid:

- "Logs are useless."
- "Observability vendors fail."
- "Logging proves compliance."
- "Telemetry is audit evidence by itself."
- "Evidence chains guarantee audit sufficiency."

## Final Status

**WP2-R0 LOGS VS AUDIT EVIDENCE SOURCE MAP COMPLETE**
