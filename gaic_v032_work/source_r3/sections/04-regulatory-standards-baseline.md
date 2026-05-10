# Chapter 4: Regulatory and Standards Baseline

**Version:** v0.3.2-FRC-R3  

---

## 4.1 Purpose of the Baseline

This chapter establishes the regulatory and standards baseline that informs the Missing Regulatory Objects and scoring frameworks introduced later in the paper. The baseline is not exhaustive. It focuses on frameworks that establish recurring obligations around risk management, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring.

The analysis does not claim that these frameworks are weak or absent. The claim is technical: these frameworks give baseline obligations and conceptual direction, but agentic systems require engineering objects that bind authority, responsibility, evidence, and privacy to concrete execution states.

Each framework analyzed in this chapter contributes essential governance direction. The shared pattern across all frameworks is that they establish what must be governed, but they do not themselves define the lifecycle objects required to prove that agentic work moved from intent to accepted outcome under controlled authority, evidence, privacy, and remediation constraints. That engineering layer is the focus of Chapters 6 through 9.

## 4.2 Regulatory Frameworks Baseline Table

The table below summarizes the frameworks analyzed in this chapter, their type, relevant requirements, and the agentic gap that remains.

**Table T-04-01: Regulatory Frameworks Baseline**

| **Framework** | **Type** | **Relevant Requirements** | **Agentic Gap** |
|---------------|----------|---------------------------|-----------------|
| EU AI Act | Binding regulation | Technical documentation, record-keeping, transparency, human oversight, accuracy/robustness/cybersecurity, post-market monitoring | Strong legal baseline for high-risk systems; does not itself define MAS responsibility-transfer object models |
| GDPR | Binding privacy regulation | Lawfulness, fairness, transparency, purpose limitation, minimization, storage limitation, integrity/confidentiality, accountability | Applies strongly to agentic memory, prompt payloads, traces, evidence packs, and cross-project reuse; lifecycle mapping remains an engineering task |
| NIST AI RMF 1.0 | Voluntary risk framework | Govern, Map, Measure, Manage functions across the AI lifecycle | Excellent risk-management umbrella; intentionally not a MAS protocol or delegated-authority object model |
| ISO/IEC 42001 | Management system standard | AIMS requirements for establishing, implementing, maintaining, and improving AI management systems | Supports organizational governance; needs technical lifecycle evidence objects for agentic execution |
| Singapore IMDA Model AI Governance Framework for Agentic AI | Voluntary governance framework | Assessing and bounding risks upfront; making humans meaningfully accountable; implementing technical controls and processes; enabling end-user responsibility | Strong agentic governance signal; voluntary framework rather than protocol schema, certification, or binding law |
| W3C PROV / Verifiable Credentials | Web provenance and credential standards | Provenance of entities, activities, agents; tamper-evident machine-verifiable claims | Useful foundation for evidence chain, selective disclosure, and third-party validation; not agent governance by itself |
| Colorado AI Act (SB24-205 / SB25B-004) | U.S. state law sample; not yet effective at 2026-05-07 snapshot | Consumer protections for high-risk AI systems; effective date extended to 2026-06-30 by SB25B-004 | Useful state-level signal for algorithmic accountability; should be treated as forward-looking in this paper, not as an active effective-law baseline at the snapshot date |

## 4.3 EU AI Act

[EU-AI-ACT-ART-11] [EU-AI-ACT-ART-12] [EU-AI-ACT-ART-14] [EU-AI-ACT-ART-15] [EU-AI-ACT-ART-72]

EU AI Act functions in this paper as binding regulation. Its relevance to agentic lifecycle conformance comes from the following requirement cluster: technical documentation, record-keeping, transparency, human oversight, accuracy/robustness/cybersecurity, post-market monitoring.

**What it contributes:** Strong legal baseline for high-risk systems; binding direction around technical documentation, record-keeping, human oversight, and post-market monitoring.

**Why it matters for agentic AI:** Articles 11, 12, 14, and 72 together indicate that high-risk AI systems must be documentable, loggable, supervisable, and monitored across their lifecycle. The missing agentic engineering question is how those obligations apply when a single outcome is produced by a moving graph of agents, tools, memory, delegated tasks, and human confirmations.

**What it does not define (the agentic gap):** The framework does not itself define MAS responsibility-transfer object models.

**How it connects to lifecycle objects:** The EU AI Act establishes binding direction around technical documentation, record-keeping, human oversight, and post-market monitoring. In agentic workflows, those obligations need lifecycle evidence boundaries: which agent or human role acted, which authority applied, which logs support the action, how oversight occurred, and how post-market monitoring reaches the workflow state rather than only the model artifact.

## 4.4 GDPR

[GDPR-ART-5]

GDPR functions in this paper as binding privacy regulation. Its relevance to agentic lifecycle conformance comes from the following requirement cluster: lawfulness, fairness, transparency, purpose limitation, minimization, storage limitation, integrity/confidentiality, accountability.

**What it contributes:** Binding privacy regulation with strong requirements for lawfulness, fairness, transparency, purpose limitation, minimization, storage limitation, integrity, confidentiality, and accountability.

**Why it matters for agentic AI:** GDPR is crucial because agentic systems do not keep personal data in one place. Personal data may appear in user intent, prompt context, retrieval results, memory, tool payloads, trace records, review packets, evidence packs, and third-party validation artifacts. Therefore privacy controls need to be mapped to lifecycle phases, not merely database tables.

**What it does not define (the agentic gap):** Lifecycle mapping remains an engineering task.

**How it connects to lifecycle objects:** GDPR pushes the lifecycle question into data flow. Privacy controls must follow prompts, memory, retrieval context, tool payloads, traces, evidence packs, redaction profiles, and validation artifacts. A lifecycle object model makes those flows reviewable without treating a database policy or privacy notice as the whole control surface.

## 4.5 NIST AI RMF 1.0

[NIST-AI-RMF-1.0]

NIST AI RMF 1.0 functions in this paper as voluntary risk framework. Its relevance to agentic lifecycle conformance comes from the following requirement cluster: Govern, Map, Measure, Manage functions across the AI lifecycle.

**What it contributes:** Excellent risk-management umbrella covering Govern, Map, Measure, and Manage functions across the AI lifecycle.

**Why it matters for agentic AI:** Provides a comprehensive risk management structure that applies to all AI systems, including agentic systems. The framework establishes the risk management direction; lifecycle objects make that direction testable in agentic workflows.

**What it does not define (the agentic gap):** Intentionally not a MAS protocol or delegated-authority object model.

**How it connects to lifecycle objects:** NIST AI RMF supplies the risk-management frame; agentic execution needs the frame to bind to action classes, delegated authority, evidence sufficiency, monitoring triggers, remediation records, and accepted-outcome review. Lifecycle objects make the Govern, Map, Measure, and Manage functions concrete inside multi-step workflows.

## 4.6 ISO/IEC 42001

[ISO-IEC-42001]

ISO/IEC 42001 functions in this paper as management system standard. Its relevance to agentic lifecycle conformance comes from the following requirement cluster: AIMS requirements for establishing, implementing, maintaining, and improving AI management systems.

**What it contributes:** Management system standard for AI governance; provides organizational structure for AI governance programs.

**Why it matters for agentic AI:** Establishes organizational governance requirements that apply to agentic systems. Organizational governance must be supported by technical lifecycle objects that prove governance was enforced at execution boundaries.

**What it does not define (the agentic gap):** Needs technical lifecycle evidence objects for agentic execution.

**How it connects to lifecycle objects:** ISO/IEC 42001 can organize the management system around AI governance, but agentic systems still need execution-level evidence objects. The management system needs records that show where policy, responsibility, authorization, monitoring, correction, and improvement were enforced in the actual agentic lifecycle.

## 4.7 Singapore IMDA Model AI Governance Framework for Agentic AI

[SINGAPORE-MGF-AGENTIC-AI]

Singapore MGF for Agentic AI functions in this paper as a voluntary governance framework. Its relevance comes from its four-part framing: assessing and bounding risks upfront; making humans meaningfully accountable; implementing technical controls and processes; and enabling end-user responsibility. Technical controls are especially relevant for agent planning, tools, protocol interactions, testing, monitoring, and lifecycle controls.

**What it contributes:** Most directly aligned with agentic-specific risk language; provides clear guidance on human accountability, technical controls, and end-user responsibility in agentic contexts.

**Why it matters for agentic AI:** Singapore's agentic AI framework is a signal that governance bodies are now treating agent planning, tool use, human accountability, testing, monitoring, and end-user responsibility as agent-specific concerns. The framework names the agentic lifecycle control problem; lifecycle objects make those controls testable.

**What it does not define (the agentic gap):** Still a governance framework rather than a protocol schema. It should not be overstated as a protocol, law, or certification regime; it is a voluntary framework that helps name the agentic lifecycle control problem.

**How it connects to lifecycle objects:** The Singapore framework names the agentic governance problem more directly than many general AI frameworks. The implementation step is to translate that framing into protocol or schema-level controls for authority, human accountability, testing, monitoring, tool use, and lifecycle evidence.

## 4.8 W3C PROV / Verifiable Credentials

[W3C-PROV] [W3C-VC-DM-2.0]

W3C PROV / Verifiable Credentials functions in this paper as web provenance and credential standards. Its relevance to agentic lifecycle conformance comes from the following requirement cluster: provenance of entities, activities, agents; tamper-evident machine-verifiable claims.

**What it contributes:** Useful foundation for evidence chain, selective disclosure, and third-party validation.

**Why it matters for agentic AI:** Provides standards for tamper-evident, machine-verifiable claims that can support evidence chains and third-party validation. Provenance standards provide the technical foundation for evidence chains; lifecycle objects define what must be proven.

**What it does not define (the agentic gap):** Not agent governance by itself.

**How it connects to lifecycle objects:** W3C PROV and Verifiable Credentials can represent provenance and machine-verifiable claims, but they do not decide which agentic governance facts must exist. Lifecycle objects define the semantics that provenance and credential structures may carry: authority, responsibility, evidence partition, selective disclosure, validation verdict, dispute, and remediation state.

## 4.9 Colorado AI Act (SB24-205 / SB25B-004)

[COLORADO-SB25B-004]

Colorado AI Act (SB24-205 / SB25B-004) functions in this paper as U.S. state law sample; not yet effective at 2026-05-07 snapshot. Consumer protections for high-risk AI systems; effective date extended to 2026-06-30 by SB25B-004.

**What it contributes:** Useful state-level signal for algorithmic accountability.

**Why it matters for agentic AI:** Demonstrates U.S. state-level movement toward algorithmic accountability requirements. At the 2026-05-07 snapshot date used in this paper, the effective date had been extended to 2026-06-30 by SB25B-004. It should therefore be treated as a forward-looking indicator of U.S. state-level algorithmic accountability requirements, not as an active baseline law at the time of writing.

**What it does not define (the agentic gap):** Should be treated as forward-looking in this paper, not as an active effective-law baseline at the snapshot date.

**How it connects to lifecycle objects:** State-level accountability requirements point toward a need for lifecycle evidence that can connect risk management, notice, review, impact, and accountability to actual system behavior. This paper keeps the Colorado discussion snapshot-bound and treats final legal-status verification as a publication QA item.
