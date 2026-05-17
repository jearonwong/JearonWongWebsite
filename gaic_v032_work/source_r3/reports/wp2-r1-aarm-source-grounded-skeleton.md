# WP2-R1 AARM Source-Grounded Skeleton

**Task ID:** WP2-R1-SOURCE-GROUNDED-OUTLINE-AND-TABLE-SKELETON  
**Date:** May 17, 2026  
**Status:** Draft-ready AARM skeleton  
**Boundary:** AARM is a proposed readiness model. It is not an audit standard, certification, assurance opinion, legal compliance proof, regulator approval, procurement recommendation, vendor ranking, or MPLP-only model.

## Definition

**Agentic Auditability Readiness Model (AARM)** is a readiness model for evaluating whether agentic lifecycle work can be reconstructed, tested, evidenced, and reviewed by audit and assurance stakeholders.

## Purpose

AARM gives WP2 a structured way to discuss auditability readiness without claiming that an organization has passed an audit, received assurance, achieved certification, proven legal compliance, or obtained regulator approval.

## What AARM Does

- Describes whether agentic lifecycle work is observable, trace-linked, evidence-structured, auditability-ready, or assurance-ready.
- Maps readiness to lifecycle responsibility objects, evidence chains, privacy treatment, exception handling, and third-party review boundaries.
- Gives Guide 1 technical readiness checkpoints and Guide 2 governance readiness checkpoints.

## What AARM Does Not Do

- Does not issue an audit opinion.
- Does not certify systems.
- Does not prove legal compliance.
- Does not guarantee assurance readiness in a professional engagement.
- Does not bind regulators, auditors, insurers, vendors, or procurement teams.

## AARM Dimensions

| No. | Dimension | Definition | Audit question | Evidence expected | Source grounding | GAIC/MRO dependency | Author-synthesis note | Boundary |
|---|---|---|---|---|---|---|---|---|
| 1 | Audit object clarity | The system can identify what lifecycle work is being reviewed and which object is under review. | Can reviewers name the lifecycle unit, agent work, scope, and outcome being reconstructed? | Lifecycle ID, workflow scope, object inventory, accepted outcome record. | AUD-01/AUD-02 audit evidence; EVID-01 provenance. | MRO-01, MRO-03, MRO-04. | "Audit object clarity" is AARM synthesis grounded in audit evidence/provenance concepts. | Not legal liability assignment. |
| 2 | Authority traceability | Delegated authority can be traced from human/business scope to agent/tool action. | Was the agent authorized to act under relevant scope, condition, and risk class? | Authority grant, revocation/expiry, escalation rule, action authorization record. | AI-01, AI-06, AI-08, AUD-06. | MRO-02, MRO-07. | Business authority vs technical permission is WP2 synthesis from GAIC objects and governance sources. | Not proof of legal delegation. |
| 3 | Human / agent responsibility mapping | Human roles, agent roles, and responsibility surfaces are explicitly mapped. | Who owned intent, execution, review, acceptance, and remediation? | Role-responsibility map, agent role boundary, responsibility transfer record. | AUD-06, AUD-07, AI-01, EVID-01. | MRO-01, MRO-03, MRO-06. | Agent role as responsibility surface is author synthesis. | Do not anthropomorphize agent accountability. |
| 4 | Evidence sufficiency | Evidence is sufficient to reconstruct the lifecycle work under review scope. | Can reviewers reconstruct what happened without relying on narrative memory? | Evidence chain, evidence pointers, hash/integrity records, acceptance evidence. | AUD-01, AUD-02, EVID-01. | MRO-04, MRO-08, MRO-16. | WP2 uses professional evidence language but does not decide sufficiency for a formal engagement. | Not universal audit sufficiency. |
| 5 | Agent/tool partitioning | Evidence separates agent actions, tool calls, vendors, processors, and project contexts where needed. | Can reviewers distinguish which agent, tool, vendor, or project produced each evidence item? | Agent/tool trace, processor chain, project partition, substitution record. | EVID-01, EVID-02, EVID-03, AI-09. | MRO-05, MRO-08, MRO-14, MRO-15. | Partition model is WP2 architecture synthesis. | No vendor ranking or procurement implication. |
| 6 | Exception traceability | Exceptions, disputes, and deviations can be traced to lifecycle objects and owners. | Can an exception be linked to authority, evidence, owner, impact, and next action? | Exception record, dispute path, escalation record, reviewer notes, impact scope. | EVID-04, AI-02, AUD-04, AUD-05. | MRO-07, MRO-16. | Exception linkage is GAIC-derived readiness logic. | Not legal violation finding. |
| 7 | Accepted outcome evidence | Accepted, rejected, disputed, or remediated outcome states are recorded with role and evidence linkage. | Who accepted the outcome, under what authority, and with what evidence? | Accepted outcome state, reviewer role, acceptance timestamp, rejection/dispute reason. | AUD-01, AUD-02, AUD-06. | MRO-04, MRO-01, MRO-08. | Accepted outcome as named evidence state is WP2/GAIC synthesis. | Acceptance is not compliance proof. |
| 8 | Remediation closure | Corrective action and closure are recorded as evidence-backed lifecycle states. | Can reviewers see what was remediated, by whom, and when closure was accepted? | Remediation plan, correction evidence, closure status, responsible owner, reopen criteria. | EVID-04, AUD-04, AUD-05, AUD-06. | MRO-16, MRO-04. | Closure as evidence state is GAIC-derived synthesis. | Not legal settlement or regulator closure. |
| 9 | Privacy and selective disclosure | Evidence can be minimized, redacted, partitioned, and selectively disclosed. | Can review happen without exposing more data than necessary? | Disclosure profile, redaction profile, retention policy, evidence minimization log. | PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05, AI-09. | MRO-10, MRO-11, MRO-12, MRO-13. | Selective disclosure architecture is WP2 synthesis grounded in privacy guidance. | Not legal advice or GDPR proof. |
| 10 | Third-party review boundary | Internal or third-party review roles are explicit and non-certifying unless separately authorized. | What can the reviewer inspect, and what can the reviewer not claim? | Ruleset identity, validation scope, verdict hash, boundary statement, reviewer role. | AUD-03, BOUND-01, BOUND-02, BOUND-03. | MRO-11, MRO-12, MRO-16; Chapter 14 Validation Lab boundary. | AARM uses boundary sources to avoid certification/assurance overclaim. | No certification or assurance opinion. |

## Readiness Levels

| Level | Definition | Observable traits | Minimum evidence | What it does NOT prove | Source grounding / synthesis classification |
|---|---|---|---|---|---|
| L0 Unobservable | Lifecycle work cannot be reconstructed beyond informal narrative or isolated outputs. | Missing lifecycle IDs; no authority linkage; no role map; no accepted outcome state. | None beyond ad hoc notes or final output. | Does not prove absence of risk or non-compliance; only indicates auditability gap. | Author synthesis grounded in audit evidence expectations from AUD-01/AUD-02. |
| L1 Log-Visible | Activity logs exist, but they are not structured into responsibility-linked evidence chains. | Execution logs, tool traces, timestamps, system events. | Raw logs or trace exports with limited role/authority linkage. | Does not prove authority, responsibility, accepted outcome, exception closure, or audit readiness. | Mixed: EVID-02/EVID-03 for logs; WP2 synthesis for limits. |
| L2 Trace-Linked | Logs and traces link some actions to agents, tools, users, or workflows. | Workflow IDs; agent/tool traces; partial actor linkage; some evidence pointers. | Trace-linked run records and partial evidence map. | Does not prove complete lifecycle responsibility or sufficient review evidence. | Mixed: EVID-01/EVID-02 plus WP2 synthesis. |
| L3 Evidence-Structured | Lifecycle evidence is organized into objects that support reconstruction and review. | Role maps; authority objects; accepted outcome records; evidence partitioning; exception records. | MRO-aligned evidence objects and walkthrough template for sampled runs. | Does not prove assurance readiness, legal compliance, or operating effectiveness. | GAIC-derived + author synthesis grounded by AUD-01/AUD-04/AUD-05. |
| L4 Auditability-Ready | Evidence chains can reconstruct agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, privacy, and closure. | Reconstructable walkthroughs; evidence request response; privacy/selective disclosure controls; closure evidence. | Complete evidence chain for defined scope plus boundary statement. | Does not prove audit opinion, certification, regulator approval, or legal compliance. | Author synthesis grounded by audit/provenance/privacy sources. |
| L5 Assurance-Ready | Evidence architecture is mature enough to support qualified assurance planning or review, subject to professional scope and independent judgment. | Repeatable evidence packs; review rulesets; third-party/internal review boundary; remediation/recheck procedure. | Reviewable evidence packs, ruleset identity, integrity records, and qualified reviewer scope. | Does not itself issue assurance, certify a system, guarantee compliance, or bind regulators. | Author synthesis bounded by AUD-03/BOUND-03 assurance/attestation sources. |

## R2 Drafting Notes

- Present AARM after evidence objects and tables so it reads as a readiness synthesis, not a scoring regime.
- Include "what it does not prove" in every readiness level.
- Do not calculate scores, compare vendors, or attach AARM to procurement recommendations.
- Use AARM as the bridge to Guide 1 technical readiness and Guide 2 governance readiness.

## Final Status

**WP2-R1 AARM SOURCE-GROUNDED SKELETON COMPLETE**
