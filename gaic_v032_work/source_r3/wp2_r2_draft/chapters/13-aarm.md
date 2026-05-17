# 13. Agentic Auditability Readiness Model

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Present AARM dimensions and readiness levels as a proposed readiness model.
**Reader question:** How can auditability readiness be described without claiming assurance?

## Key Claims

- AARM describes readiness for reconstructability, testability, evidence structure, privacy-aware review, and third-party review boundaries.
- AARM is proposed WP2 synthesis.
- AARM is not a score, audit standard, certification, assurance opinion, legal compliance proof, regulator approval, procurement tool, or vendor ranking.

## Source Grounding Note

Audit evidence language uses AUD-01. AI audit practice context uses AUD-05 and AUD-06. AI governance context uses AI-01. Attestation boundary context uses BOUND-03. R4B/R1 AARM baseline and GAIC source truth provide the model structure.

## Author Synthesis Note

AARM is WP2 author synthesis. It is a readiness vocabulary, not an external maturity model or professional assurance framework.

## Draft Prose

Once evidence objects are defined, organizations need a way to discuss readiness. AARM provides that vocabulary. It asks whether agentic lifecycle work can be reconstructed, tested, evidenced, and reviewed across the object areas this paper has defined.

AARM deliberately avoids scoring. Scores invite overprecision and can be mistaken for certification, compliance grades, vendor rankings, or procurement guidance. AARM instead uses dimensions and levels. The dimensions ask what must be reviewable. The levels describe the degree to which the lifecycle work is observable, trace-linked, evidence-structured, auditability-ready, or assurance-ready for planning.

The word "Assurance-Ready" is sensitive. In AARM, it does not mean assurance has been issued. It means the evidence architecture may be mature enough to support qualified assurance planning or review, subject to professional scope, criteria, independence, engagement acceptance, and judgment. It does not guarantee that assurance will be available or positive.

The ten AARM dimensions are:

1. Audit object clarity.
2. Authority traceability.
3. Human / agent responsibility mapping.
4. Evidence sufficiency.
5. Agent/tool partitioning.
6. Exception traceability.
7. Accepted outcome evidence.
8. Remediation closure.
9. Privacy and selective disclosure.
10. Third-party review boundary.

The levels describe readiness states. L0 Unobservable means lifecycle work cannot be reconstructed beyond informal narrative or final output. L1 Log-Visible means logs exist but responsibility linkage is weak. L2 Trace-Linked means traces connect some actions to agents, tools, or workflows. L3 Evidence-Structured means lifecycle evidence objects exist. L4 Auditability-Ready means defined-scope evidence chains can reconstruct authority, responsibility, tools, outcomes, exceptions, privacy, and closure. L5 Assurance-Ready means evidence architecture may support professional assurance planning, subject to external conditions.

The main use of AARM is conversation discipline. It helps technology leaders avoid saying "we have logs, so we are audit-ready." It helps governance teams ask whether accepted outcomes and remediation closure are evidence states. It helps audit teams separate raw observability from reconstructable evidence. It helps privacy teams see whether selective disclosure is built in. It helps third-party reviewers clarify what their review does and does not mean.

## Table 9: Auditability Readiness Levels

| Level | Definition | Observable traits | Minimum evidence | What it does not prove | Source / synthesis note |
|---|---|---|---|---|---|
| L0 Unobservable | Lifecycle work cannot be reconstructed beyond informal narrative or isolated outputs | Missing lifecycle IDs, no authority linkage, no role map, no accepted outcome state | None beyond ad hoc notes or final output | Absence of risk, absence of non-compliance, or system safety | Author synthesis grounded in AUD-01/AUD-02 expectations |
| L1 Log-Visible | Activity logs exist without responsibility-linked evidence chains | Logs, traces, timestamps, tool events | Raw logs or trace exports | Authority, responsibility, acceptance, exception closure, audit readiness | EVID-02/EVID-03 + WP2 synthesis |
| L2 Trace-Linked | Logs/traces link some actions to agents, tools, users, or workflows | Workflow IDs, agent/tool traces, partial actor linkage | Trace-linked run records and partial evidence map | Complete lifecycle responsibility or sufficient evidence | EVID-01/EVID-02 + WP2 synthesis |
| L3 Evidence-Structured | Lifecycle evidence is organized into objects that support reconstruction | Role maps, authority objects, accepted outcome records, partitioning, exception records | MRO-aligned evidence objects and sampled walkthroughs | Assurance readiness, legal compliance, operating effectiveness | GAIC-derived + AUD-01/AUD-04/AUD-05 |
| L4 Auditability-Ready | Evidence chains can reconstruct defined-scope agentic lifecycle work | Walkthroughs, evidence request response, privacy controls, closure evidence | Complete evidence chain for defined scope plus boundary statement | Audit opinion, certification, regulator approval, legal compliance | WP2 synthesis grounded in audit/provenance/privacy sources |
| L5 Assurance-Ready | Evidence architecture may support qualified assurance planning or review | Repeatable evidence packs, ruleset identity, reviewer scope, remediation/recheck procedure | Reviewable evidence packs, integrity records, boundary statement | Actual assurance opinion, certification, guaranteed compliance, regulator acceptance | WP2 synthesis bounded by AUD-03/BOUND-03 |

**Table note:** AARM is author synthesis grounded in source language. It is not a score, standard, certification, assurance conclusion, procurement benchmark, or vendor ranking.

## AARM Dimension Summary

| Dimension | Audit question | Minimum evidence family | Primary MRO links | Boundary |
|---|---|---|---|---|
| Audit object clarity | Can reviewers name the lifecycle unit under review? | Work unit ID, scope, object inventory | MRO-01, MRO-03, MRO-04 | Not legal category |
| Authority traceability | Was the action authorized under scope? | Authority grant, expiry, escalation | MRO-02, MRO-07 | Not legal delegation proof |
| Human / agent responsibility mapping | Who owned intent, execution, review, acceptance, remediation? | Role map and transfer record | MRO-01, MRO-03, MRO-06 | No anthropomorphism |
| Evidence sufficiency | Can reviewers reconstruct work without narrative memory? | Evidence chain and pointers | MRO-04, MRO-08, MRO-16 | Not universal sufficiency |
| Agent/tool partitioning | Can actions be separated across agents/tools/vendors/projects? | Partition keys, tool evidence, substitution record | MRO-05, MRO-08, MRO-14, MRO-15 | No vendor ranking |
| Exception traceability | Can deviation be linked to owner and next action? | Exception record and impact scope | MRO-07, MRO-16 | Not legal violation |
| Accepted outcome evidence | Who accepted or disputed the result? | Outcome state, reviewer role, evidence link | MRO-04 | Not compliance proof |
| Remediation closure | What was remediated and who accepted closure? | Corrective action, recheck, closure state | MRO-16 | Not settlement |
| Privacy and selective disclosure | Can review occur without unnecessary exposure? | Redaction, retention, disclosure profile | MRO-10 to MRO-13 | Not legal advice |
| Third-party review boundary | What can a reviewer inspect and claim? | Scope, ruleset, verdict, boundary statement | MRO-11, MRO-12, MRO-16 | No certification/assurance opinion |

## Cross-Links

- Appendix D provides the expanded readiness matrix.
- Chapter 14 connects AARM to enterprise readiness.
- Chapter 15 connects AARM to professional use boundaries.

## Boundary Note

AARM is a readiness model only. It does not prove legal compliance, issue assurance, certify systems, rank vendors, bind regulators, or require MPLP.

## R3 QA Notes

- Verify every level keeps a "what it does not prove" statement.
- Consider whether "Assurance-Ready" needs an even stronger explanatory note in front matter.
