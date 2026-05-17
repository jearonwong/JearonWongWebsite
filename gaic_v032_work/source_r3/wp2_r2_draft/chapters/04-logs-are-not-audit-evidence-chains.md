# 4. Why Logs Are Not Audit Evidence Chains

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Ground the core WP2 claim that logs and traces are useful but insufficient for agentic auditability.
**Reader question:** What can logs show, and what do they fail to prove?

## Key Claims

- Logs, traces, metrics, and workflow histories can support auditability.
- They do not automatically prove authority, responsibility, accepted outcome, exception handling, privacy treatment, or remediation closure.
- Audit Evidence Chains increase evidentiary value by linking activity to lifecycle responsibility metadata.

## Source Grounding Note

Audit evidence language is grounded in AUD-01 and AUD-02. Observability and logging context is grounded in EVID-02 and EVID-03. Provenance concepts are grounded in EVID-01. Incident/governance context is grounded in EVID-04. AI Act logging context may be referenced as legal context only through AI-06.

## Author Synthesis Note

"Logs are not audit evidence chains" is WP2 author synthesis. It is grounded in the distinction between observability/logging and professional audit evidence concepts.

## Draft Prose

Logs are necessary but not sufficient. That sentence is the safest starting point for agentic auditability. The point is not to diminish logs, traces, metrics, monitoring systems, workflow histories, or observability platforms. They are often the first evidence ingredients available. Without them, reconstruction may collapse into narrative memory.

The problem is that logs usually describe activity, not responsibility. A log may show that a service called a tool at a time. A trace may show that a workflow crossed several components. A metric may show latency, error rate, or throughput. An incident record may show that something failed. Those are useful signals. They do not automatically tell a reviewer whether the action was authorized, which human role owned it, which agent role was acting, what business scope applied, whether the tool action was reversible, whether the outcome was accepted, what privacy treatment applied, or whether remediation closed.

Audit evidence is tied to a review objective. In professional audit language, evidence is evaluated for relevance and reliability within context. For agentic systems, the review objective is not merely to explain system behavior. It is to reconstruct lifecycle responsibility. That means the evidence must connect the technical event to authority, role, tool action, outcome state, exception state, privacy treatment, and closure.

Observability explains how systems behave. Auditability asks whether lifecycle work can be reviewed. The same trace can be valuable for both, but it plays different roles. In observability, the trace helps engineers understand execution path and performance. In auditability, the trace is an input to a larger evidence chain. It must be joined with responsibility records, authority records, evidence pointers, acceptance records, and exception/remediation records.

Consider a tool call. A log may show the tool name, timestamp, endpoint, response code, and service identity. The auditability question is broader: Who authorized the tool action? Was the agent operating inside delegated scope? Which data or system was affected? Was the action reversible? Did a human review occur before or after the action? Was the result accepted, disputed, or remediated? Was sensitive data minimized or redacted in review evidence? Was there a closure state?

The same distinction applies to incident records. An incident log may show that an error occurred. It may not show whether the affected outcome was withdrawn, corrected, re-reviewed, accepted, escalated, or closed. It may not show whether the issue was due to authority drift, responsibility transfer, cross-project reuse, tool-action side effects, privacy leakage, or vendor/runtime substitution. Without linkage to lifecycle objects, the incident is visible but not fully reconstructable.

WP2 calls the needed structure an **Audit Evidence Chain**. An Audit Evidence Chain is not just a sequence of logs. It is a responsibility-linked reconstruction path. It ties a lifecycle work unit to the relevant evidence objects: authority boundary, human role, agent role, tool action, evidence pointer, accepted outcome, exception, remediation, privacy treatment, and third-party review boundary where relevant.

This structure also protects against over-retention. A naive response to auditability gaps is to collect everything. That can create privacy and confidentiality risks. A better approach is to preserve evidence pointers, partition keys, disclosure profiles, redaction rules, retention logic, and integrity records so reviewers can reconstruct what they are authorized to inspect without unnecessary exposure.

## Table 2: Logs vs Audit Evidence Chains

| Evidence item | What logs/traces can show | What they do not automatically prove | Required linkage | Related MRO | Source / synthesis note |
|---|---|---|---|---|---|
| Tool-call log | Tool, endpoint, timestamp, service, response | Business authority, human owner, reversibility, accepted outcome | Delegated authority record, human role map, tool-action evidence, outcome state | MRO-02, MRO-05, MRO-04 | EVID-02/EVID-03 + GAIC-SOURCE |
| Trace span | Execution path, service dependencies, timing | Lifecycle responsibility or review sufficiency | Work unit ID, agent role, evidence pointer, role map | MRO-01, MRO-03, MRO-08 | EVID-01/EVID-02 + WP2 synthesis |
| Workflow state | Step completion, state transition | Whether state is a governance acceptance state | Acceptance criteria, reviewer role, dispute/remediation state | MRO-04, MRO-16 | AUD-01/AUD-04 + GAIC-SOURCE |
| Incident log | Error event, detection, response action | Remediation closure or legal fault | Exception owner, corrective action, recheck, closure acceptance | MRO-07, MRO-16 | EVID-04/AUD-04 |
| Access log | User/service access event | Delegated business authority or scope | Authority boundary, confirmation rule, risk class, expiry | MRO-02, MRO-07 | AI-01/AI-08 + WP2 synthesis |
| Retention log | Data/evidence storage or deletion event | Whether retention/disclosure is legally sufficient | Privacy treatment, minimization rule, retention basis, disclosure profile | MRO-10, MRO-12, MRO-13 | PRIV-01 to PRIV-05 |

**Table note:** Mixed source-grounded and author-synthesis table. Logs are treated as useful inputs, not as useless artifacts. The table is not a vendor critique or audit procedure.

## Cross-Links

- Appendix A lists evidence request categories.
- Chapter 9 addresses evidence partitioning.
- Chapter 10 addresses minimization and selective disclosure.

## Boundary Note

This chapter does not claim observability vendors fail, logs are useless, or telemetry can never support audit evidence. It claims only that raw logs do not automatically become responsibility-linked audit evidence chains.

## R3 QA Notes

- Confirm the title phrase remains supported by the surrounding nuance.
- Review privacy paragraphs for legal-advice risk.
