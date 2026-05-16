# GAIC-R4B AARM Baseline

**Status:** Architecture baseline
**Date:** May 16, 2026
**Boundary:** Planning-only. AARM is a proposed readiness model for WP2 architecture; it is not an audit standard, certification, assurance opinion, legal compliance proof, or regulator-approved model.

## Name

**Agentic Auditability Readiness Model**

## Short Name

**AARM**

## Definition

AARM is a readiness model for evaluating whether agentic lifecycle work can be reconstructed, tested, evidenced, and reviewed by audit and assurance stakeholders.

## Purpose

AARM gives WP2 a structured way to discuss auditability readiness without claiming that an organization has passed an audit, received assurance, achieved certification, or proven legal compliance.

## Dimensions

| No. | Dimension | Definition | Audit question | Evidence expected | Related MRO | Guide 1 / Guide 2 relation | Boundary risk |
|---|---|---|---|---|---|---|---|
| 1 | Audit object clarity | The system can identify what lifecycle work is being reviewed and which object is under audit. | Can reviewers name the lifecycle unit, agent work, scope, and outcome being reconstructed? | Lifecycle ID, workflow scope, object inventory, accepted outcome record. | MRO-01, MRO-03, MRO-04 | Guide 1 defines object IDs and run models; Guide 2 defines review scope and owners. | Do not turn object clarity into legal liability assignment. |
| 2 | Authority traceability | Delegated authority can be traced from human/business scope to agent/tool action. | Was the agent authorized to act under the relevant scope, condition, and risk class? | Authority grant, revocation/expiry, escalation rule, action authorization record. | MRO-02, MRO-07 | Guide 1 implements authority checks; Guide 2 governs delegation policy. | Do not equate IAM permission with business authority. |
| 3 | Human / agent responsibility mapping | Human roles, agent roles, and responsibility surfaces are explicitly mapped. | Who owned intent, execution, review, acceptance, and remediation? | Role-responsibility map, agent role boundary, responsibility transfer record. | MRO-01, MRO-03, MRO-06 | Guide 1 maps runtime responsibility; Guide 2 maps accountability and governance owners. | Do not claim legal responsibility without counsel review. |
| 4 | Evidence sufficiency | Evidence is sufficient to reconstruct the lifecycle work under review. | Can the reviewer reconstruct what happened without relying on narrative memory? | Evidence chain, evidence pointers, hash/integrity records, acceptance evidence. | MRO-04, MRO-08, MRO-16 | Guide 1 produces evidence artifacts; Guide 2 validates evidence completeness expectations. | Do not claim sufficiency for all legal or audit contexts. |
| 5 | Agent/tool partitioning | Evidence separates agent actions, tool calls, vendors, processors, and project contexts where needed. | Can reviewers distinguish which agent, tool, vendor, or project produced each evidence item? | Agent/tool trace, processor chain, project partition, vendor/runtime substitution record. | MRO-05, MRO-08, MRO-14, MRO-15 | Guide 1 handles technical partitioning; Guide 2 handles vendor/process governance. | Do not imply vendor endorsement or ranking. |
| 6 | Exception traceability | Exceptions, disputes, and deviations can be traced to lifecycle objects and owners. | Can an exception be linked to authority, evidence, owner, impact, and next action? | Exception record, dispute path, escalation record, reviewer notes, impact scope. | MRO-07, MRO-16 | Guide 1 creates exception telemetry; Guide 2 defines incident/dispute governance. | Do not claim legal remedy or liability closure. |
| 7 | Accepted outcome evidence | Accepted, rejected, disputed, or remediated outcome states are recorded with role and evidence linkage. | Who accepted the outcome, under what authority, and with what evidence? | Accepted outcome state, reviewer role, acceptance timestamp, rejection/dispute reason. | MRO-04, MRO-01, MRO-08 | Guide 1 implements outcome-state capture; Guide 2 defines acceptance authority. | Do not equate acceptance with legal compliance. |
| 8 | Remediation closure | Corrective action and closure are recorded as evidence-backed lifecycle states. | Can reviewers see what was remediated, by whom, and when closure was accepted? | Remediation plan, correction evidence, closure status, responsible owner, reopen criteria. | MRO-16, MRO-04 | Guide 1 implements rollback/repair records; Guide 2 defines closure governance. | Do not claim legal settlement or regulatory closure. |
| 9 | Privacy and selective disclosure | Evidence can be minimized, redacted, partitioned, and selectively disclosed. | Can review happen without exposing more data than necessary? | Disclosure profile, redaction profile, retention policy, evidence minimization log. | MRO-10, MRO-11, MRO-12, MRO-13 | Guide 1 implements privacy-preserving evidence architecture; Guide 2 governs privacy review. | Do not provide legal advice or GDPR compliance proof. |
| 10 | Third-party review boundary | Internal or third-party review roles are explicit and non-certifying unless separately authorized. | What can the reviewer inspect, and what can the reviewer not claim? | Ruleset identity, validation scope, verdict hash, boundary statement, reviewer role. | MRO-11, MRO-12, MRO-16 | Guide 1 supports evidence export/replay; Guide 2 defines qualified-review boundaries. | Do not claim certification, assurance opinion, or regulator approval. |

## Readiness Levels

| Level | Name | Definition | Observable traits | Minimum evidence | What it does NOT prove |
|---|---|---|---|---|---|
| L0 | Unobservable | Lifecycle work cannot be reconstructed beyond informal narrative or isolated outputs. | Missing lifecycle IDs; no authority linkage; no role map; no accepted outcome state. | None beyond ad hoc notes or final output. | Does not prove absence of risk; does not prove non-compliance; only indicates auditability gap. |
| L1 | Log-Visible | Activity logs exist, but they are not structured into responsibility-linked evidence chains. | Execution logs, tool traces, timestamps, system events. | Raw logs or trace exports with limited role/authority linkage. | Does not prove authority, responsibility, accepted outcome, exception closure, or audit readiness. |
| L2 | Trace-Linked | Logs and traces link some actions to agents, tools, users, or workflows. | Workflow IDs; agent/tool traces; partial actor linkage; some evidence pointers. | Trace-linked run records and partial evidence map. | Does not prove complete lifecycle responsibility or sufficient review evidence. |
| L3 | Evidence-Structured | Lifecycle evidence is organized into objects that support reconstruction and review. | Role maps; authority objects; accepted outcome records; evidence partitioning; exception records. | MRO-aligned evidence objects and walkthrough template for sampled runs. | Does not prove assurance readiness, legal compliance, or operating effectiveness. |
| L4 | Auditability-Ready | Evidence chains can reconstruct agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, privacy, and closure. | Reconstructable walkthroughs; evidence request response; privacy/selective disclosure controls; closure evidence. | Complete evidence chain for defined scope plus boundary statement. | Does not prove audit opinion, certification, regulator approval, or legal compliance. |
| L5 | Assurance-Ready | Evidence architecture is mature enough to support qualified assurance planning or review, subject to professional scope and independent judgment. | Repeatable evidence packs; review rulesets; third-party/internal review boundary; remediation/recheck procedure. | Reviewable evidence packs, ruleset identity, integrity records, and qualified reviewer scope. | Does not itself issue assurance, certify a system, guarantee compliance, or bind regulators. |

## Boundary

- AARM is not an audit standard.
- AARM is not certification.
- AARM is not an assurance opinion.
- AARM is not legal compliance proof.
- AARM is not regulator approval.
- AARM is not procurement recommendation or vendor ranking.
- AARM is not MPLP-only and must remain usable across protocol, platform, and custom implementations.

## Final Status

**AARM BASELINE COMPLETE / READY FOR WP2 ARCHITECTURE USE**
