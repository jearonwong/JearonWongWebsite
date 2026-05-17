# 0. Executive Summary

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** State the auditability problem, the object shift, the evidence-chain answer, the AARM bridge, and the non-standard boundary.
**Reader question:** Why does agentic AI need a new auditability frame?

## Key Claims

- AI agent auditability cannot be built on logs alone.
- Agentic systems become auditable only when lifecycle work can be reconstructed through responsibility-linked evidence chains.
- Auditability shifts the review object from model output alone to lifecycle work across authority, responsibility, tools, outcomes, exceptions, privacy treatment, and remediation.
- GAIC MROs can be translated into audit evidence objects and evidence requests.
- AARM is a proposed readiness model for describing auditability readiness; it does not issue assurance, certification, or legal compliance proof.

## Source Grounding Note

Market context is grounded in BF-01, BF-02, and BF-05. Audit evidence language is grounded in AUD-01 and AUD-02. AI governance context is grounded in AI-01 and AI-08. Observability context is grounded in EVID-02. MROs, Validation Lab boundaries, and companion-paper boundaries are GAIC-derived source truth.

## Author Synthesis Note

Agentic AI Auditability, Agentic Audit Object, Audit Evidence Chain, lifecycle-responsibility-linked agent work, and AARM are WP2 author synthesis. They are not presented as externally issued audit standards or certification schemes.

## Draft Prose

AI agent auditability cannot be built on logs alone. Logs matter. Traces matter. Workflow histories, tool-call records, telemetry, and incident records all help reconstruct technical activity. But agentic auditability asks a different question: not merely what happened inside a system, but whether the work can be reviewed as lifecycle responsibility.

The shift is subtle and material. Traditional AI governance often begins with the model, the dataset, the output, the control environment, and the policy framework. Those layers remain necessary. An agentic system, however, does not only produce outputs. It delegates work, calls tools, transfers tasks across agents, accepts or disputes outcomes, escalates exceptions, stores evidence, crosses vendor or processor boundaries, and may require remediation. A log can record that a tool call occurred. By itself, it usually does not establish who authorized the action, which human role owned the work, whether the agent acted inside a delegated authority boundary, whether the outcome was accepted, what exception occurred, or whether remediation closed.

WP2 defines **Agentic AI Auditability** as the ability to reconstruct, test, and evidence agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, and remediation. This is an authored definition. It is grounded in professional audit evidence language, AI governance guidance, provenance concepts, observability/logging documentation, privacy guidance, and GAIC's existing lifecycle responsibility object layer. It is not a legal definition, audit standard, assurance engagement requirement, certification criterion, or regulator-approved compliance test.

The central contribution of this draft is the Audit Evidence Object layer. WP1 defined Missing Regulatory Objects for agentic lifecycle governance. WP2 translates those objects into auditability terms: evidence requests, walkthrough structures, responsibility maps, evidence partitioning, privacy-aware disclosure, third-party review boundaries, and readiness levels. The Agentic Audit Object is the unit of review. The Audit Evidence Chain is the responsibility-linked structure that connects lifecycle work to authority, role, tool action, evidence pointer, accepted outcome, exception state, and closure state.

This matters because audit and assurance readers increasingly face AI systems whose behavior cannot be understood through model cards, output samples, policy attestations, or raw telemetry alone. Big Four and professional sources already discuss AI assurance, trusted AI, responsible AI, audit transformation, governance, risk, controls, and agentic AI adoption. Those discussions create the market context for WP2. WP2 does not claim that any firm endorses this framework. Instead, it offers an object-model layer adjacent to those discussions: a disciplined way to ask what must exist before agentic work can be reconstructed.

The paper's recurring distinction is simple:

- Logs record activity.
- Observability explains system behavior.
- Audit evidence supports responsibility review.
- Responsibility-linked evidence chains make agentic lifecycle work reconstructable.

The distinction does not make logs unimportant. Logs and traces are often evidence ingredients. They may identify time, sequence, tool, service, user, or execution path. But audit evidence requires more than event capture. It requires relevance, reliability, sufficiency in context, relationship to review objective, and linkage to responsibility. For agentic systems, that means linking activity to lifecycle work units, human roles, agent roles, delegated authority, accepted outcomes, exception handling, privacy treatment, and remediation closure.

WP2 also introduces the **Agentic Auditability Readiness Model (AARM)**. AARM describes whether an agentic system is unobservable, log-visible, trace-linked, evidence-structured, auditability-ready, or assurance-ready for planning purposes. AARM is deliberately bounded. It is not a score, benchmark, certification, audit opinion, assurance conclusion, legal compliance proof, regulator approval, procurement recommendation, or vendor ranking. Its purpose is to help organizations and reviewers discuss readiness before they overstate assurance.

For enterprises, WP2 prepares the path to two practitioner guides. Guide 1 will translate auditability into technical architecture for CIO, CTO, platform, security, and engineering teams. Guide 2 will translate auditability into compliance operating-model design for CCO, governance, legal, risk, internal audit, and policy-to-evidence teams. WP2 defines what audit-ready means; the later guides will address how to build and govern toward it.

For audit and assurance firms, WP2 can be used as a discussion and readiness structure. It can support evidence request framing, walkthrough scoping, object-model review, and internal method conversations. It does not replace professional methodology, professional judgment, engagement acceptance, independence rules, attestation criteria, assurance standards, or audit procedures. The paper is useful only if its boundary is kept visible.

## Executive Orientation Table

| WP2 element | What it means | Source / synthesis status | Boundary |
|---|---|---|---|
| Agentic AI Auditability | Ability to reconstruct, test, and evidence agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, and remediation | WP2 author synthesis grounded by AUD-01, AUD-02, AI-01, AI-08, EVID-01, EVID-02, and GAIC-SOURCE | Not audit standard, legal proof, or assurance opinion |
| Agentic Audit Object | Reviewable lifecycle work object for agentic systems | WP2 author synthesis derived from GAIC MROs and provenance/audit evidence concepts | Not mandatory schema |
| Audit Evidence Chain | Responsibility-linked chain connecting work unit, authority, role, tool, evidence, outcome, exception, privacy treatment, and closure | WP2 author synthesis | Not a certification criterion |
| MRO-to-evidence mapping | Translation of GAIC MROs into audit evidence objects and evidence requests | GAIC-derived plus audit/control language | MROs are not legal mandates |
| AARM | Proposed readiness model for auditability | WP2 author synthesis grounded by R4B/R1 and audit/governance sources | Not score, certification, or assurance result |

## Cross-Links

- See Appendix A for evidence request categories.
- See Appendix C for the full MRO-to-audit-evidence mapping.
- See Appendix D for the AARM readiness matrix.
- See Appendix F for boundary language.

## Boundary Note

This chapter does not claim WP2 is published, final, sealed, regulator-approved, audit-body-endorsed, Big-Four-endorsed, legally sufficient, certifying, or assurance-producing.

## R3 QA Notes

- Tighten executive prose for length without removing boundary clarity.
- Verify that every source ID remains in the R2 source register.
- Confirm that "Assurance-Ready" remains clearly bounded as readiness for planning, not assurance conclusion.
