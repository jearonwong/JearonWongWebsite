# Chapter 8: Agentic Lifecycle Conformance Score (ALCS)

**Version:** v0.3.2-FRC-R3

---

## 8.0 Chapter Overview

This chapter introduces the **Agentic Lifecycle Conformance Score (ALCS)**, the lifecycle conformance profile used alongside RCCS-T and RCCS-M in this white paper. ALCS measures whether a system defines the agentic lifecycle objects required for lifecycle responsibility compliance. It evaluates whether a system can express the sixteen Missing Regulatory Objects introduced in Chapter 6.

ALCS is not a legal compliance certification, not a conformity assessment, and not a regulatory approval. It is an analytical framework for comparing system capabilities against lifecycle responsibility requirements. A system can have a strong RCCS-T profile and still have a weak ALCS score. That is not a contradiction. It means the system may be strong in existing regulatory compliance coverage while lacking deeper lifecycle responsibility semantics for multi-agent work.

RCCS-T measures traditional regulatory compliance coverage. RCCS-M measures whether that coverage can be expressed through Missing Regulatory Objects. ALCS measures agentic lifecycle conformance. These are different layers, not competing scores. RCCS-M asks whether regulatory obligations can be represented through MROs. ALCS asks whether lifecycle responsibility conformance is mature across responsibility, authority, evidence, privacy, substitution, and remediation.

The chapter defines the fifteen ALCS dimensions, explains the ALCS-to-MRO mapping, references the shared scoring procedure established in Chapter 7, and establishes clear boundaries around what ALCS measures and what it does not measure. Detailed scoring rubrics for each dimension are provided in sections 8.7 through 8.21 and expanded in Appendix F.

---

## 8.1 What ALCS Measures

ALCS measures whether a system defines the agentic lifecycle objects required for lifecycle responsibility compliance. It evaluates whether a system can express human-role-to-MAS responsibility mappings, delegated authority boundaries, agent role definitions, accepted outcome states, tool-action liability records, responsibility transfer semantics, authority drift detection, evidence partitioning, cross-project reuse controls, privacy lifecycle mappings, privacy-preserving validation protocols, evidence minimization policies, data subject rights reconciliation, processor chain tracking, and vendor substitution conformance.

ALCS is not a legal compliance score. A high ALCS score does not mean a system is legally compliant. A low ALCS score does not mean a system is non-compliant. Legal compliance depends on organizational practice, deployment context, jurisdiction, risk class, and how the system is used. ALCS measures system capability to express lifecycle responsibility objects, not organizational conformance to legal obligations.

ALCS is an analytical framework for comparing systems. It allows buyers, auditors, governance teams, and protocol designers to evaluate whether a system provides the lifecycle primitives required to prove that agentic work moved from intent to accepted outcome under controlled authority, evidence, privacy, and remediation constraints. It makes visible the difference between systems that provide lifecycle responsibility semantics and systems that provide only execution orchestration or observability features.

The purpose of ALCS is to translate the sixteen Missing Regulatory Objects into measurable system capabilities. Regulation requires human oversight, but what does that mean in a multi-agent system? ALCS defines fifteen dimensions that operationalize lifecycle responsibility requirements into system features that can be evaluated, compared, and improved. It is a bridge between regulatory abstractions and lifecycle implementation.

A system can have a strong RCCS-T score and weaker RCCS-M or ALCS scores. This is not a contradiction. It means the system may provide strong traditional regulatory compliance coverage through risk management, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring capabilities while lacking the deeper lifecycle responsibility objects required to prove authority boundaries, responsibility transfer, evidence partitioning, privacy lifecycle mapping, and vendor substitution conformance in multi-agent execution. RCCS-M and ALCS are related but not identical: RCCS-M adjusts regulatory coverage through MROs, while ALCS evaluates lifecycle conformance maturity.

---

## 8.2 ALCS Dimensions Overview

ALCS evaluates systems across fifteen dimensions. Each dimension corresponds to one or more Missing Regulatory Objects. The dimensions are weighted to reflect their relative importance in lifecycle responsibility compliance.

The fifteen ALCS dimensions are:

1. **Human-Role-to-MAS Responsibility Mapping (8%)** - Does the system map human roles to agent roles, delegated scopes, and evidence obligations?
2. **Delegated Authority Boundary (8%)** - Does the system define and enforce authority boundaries for agent actions?
3. **Agent Role vs Human Role Distinction (5%)** - Does the system distinguish agent roles from human roles with clear responsibility semantics?
4. **Accepted Outcome Compliance (8%)** - Does the system separate execution completion from outcome acceptance?
5. **Tool-Action Liability Boundary (8%)** - Does the system record liability boundaries for consequential tool actions?
6. **Responsibility Transfer Across Agents (8%)** - Does the system track responsibility transfer during agent handoffs?
7. **Authority Drift Detection (5%)** - Does the system detect unauthorized authority transitions?
8. **MAS Evidence Partitioning (8%)** - Does the system partition evidence by agent, tool, authority, and privacy boundaries?
9. **Cross-Project Reuse Compliance (5%)** - Does the system enforce revalidation when workflows are reused across projects?
10. **Privacy/GDPR Lifecycle Mapping (8%)** - Does the system map personal data flows across the agent lifecycle?
11. **Privacy-Preserving Third-Party Validation (5%)** - Does the system support validation without raw data disclosure?
12. **Evidence Minimization and Selective Disclosure (5%)** - Does the system minimize evidence retention and support selective disclosure?
13. **Data Subject Rights vs Evidence Retention (5%)** - Does the system reconcile data subject rights with evidence retention obligations?
14. **Third-Party Processor/Subprocessor Chain (5%)** - Does the system track processor and subprocessor usage at lifecycle granularity?
15. **Vendor/Model/Runtime Substitution Conformance (5%)** - Does the system enforce conformance revalidation when vendors are substituted?

The following table summarizes the fifteen dimensions, their MRO mappings, core questions, and weights.

**Table T-08-01: ALCS Dimensions Summary**

| Dimension | MRO Mapping | Core Question | Weight |
|-----------|-------------|---------------|--------|
| Human-Role-to-MAS Responsibility Mapping | MRO-01 | Does the system map human roles to agent roles, delegated scopes, and evidence obligations? | 8% |
| Delegated Authority Boundary | MRO-02 | Does the system define and enforce authority boundaries for agent actions? | 8% |
| Agent Role vs Human Role Distinction | MRO-03 | Does the system distinguish agent roles from human roles with clear responsibility semantics? | 5% |
| Accepted Outcome Compliance | MRO-04 | Does the system separate execution completion from outcome acceptance? | 8% |
| Tool-Action Liability Boundary | MRO-05 | Does the system record liability boundaries for consequential tool actions? | 8% |
| Responsibility Transfer Across Agents | MRO-06 | Does the system track responsibility transfer during agent handoffs? | 8% |
| Authority Drift Detection | MRO-07 | Does the system detect unauthorized authority transitions? | 5% |
| MAS Evidence Partitioning | MRO-08 | Does the system partition evidence by agent, tool, authority, and privacy boundaries? | 8% |
| Cross-Project Reuse Compliance | MRO-09 | Does the system enforce revalidation when workflows are reused across projects? | 5% |
| Privacy/GDPR Lifecycle Mapping | MRO-10 | Does the system map personal data flows across the agent lifecycle? | 8% |
| Privacy-Preserving Third-Party Validation | MRO-11 | Does the system support validation without raw data disclosure? | 5% |
| Evidence Minimization and Selective Disclosure | MRO-12 | Does the system minimize evidence retention and support selective disclosure? | 5% |
| Data Subject Rights vs Evidence Retention | MRO-13 | Does the system reconcile data subject rights with evidence retention obligations? | 5% |
| Third-Party Processor/Subprocessor Chain | MRO-14 | Does the system track processor and subprocessor usage at lifecycle granularity? | 5% |
| Vendor/Model/Runtime Substitution Conformance | MRO-15 | Does the system enforce conformance revalidation when vendors are substituted? | 5% |

Note: MRO-16 (Incident, Dispute, and Remediation Closure) is not directly mapped to a single ALCS dimension. It is a cross-cutting lifecycle capability that spans multiple dimensions including contestability, evidence partitioning, and continuous improvement. Incident closure capability is evaluated within the RCCS Contestability and Monitoring dimensions rather than as a separate ALCS dimension.

---

## 8.3 ALCS-to-MRO Mapping

Each ALCS dimension maps to one or more Missing Regulatory Objects. The mapping shows how ALCS dimensions operationalize MRO requirements into measurable system capabilities. ALCS dimensions are not merely restatements of MROs. They are evaluation criteria that translate MRO requirements into system features that can be scored, compared, and improved.

The mapping is primarily one-to-one: each ALCS dimension corresponds to a single primary MRO. However, some dimensions have secondary MRO relationships because lifecycle responsibility objects are interconnected. For example, Human-Role-to-MAS Responsibility Mapping (ALCS-01) primarily maps to MRO-01 but also relates to MRO-03 (Agent Role vs Human Role) and MRO-06 (Responsibility Transfer) because responsibility mapping, role distinction, and transfer semantics are interdependent.

The following table provides detailed ALCS-to-MRO mapping, including primary MRO, secondary MROs, lifecycle phase, and core object required.

**Table T-08-02: ALCS-to-MRO Mapping**

| ALCS Dimension | Primary MRO | Secondary MROs | Lifecycle Phase | Core Object Required |
|----------------|-------------|----------------|-----------------|----------------------|
| ALCS-01: Human-Role-to-MAS Responsibility Mapping | MRO-01 | MRO-03, MRO-06 | Intent, delegation, acceptance | Role-responsibility map binding human role IDs, agent role IDs, delegated scopes, evidence obligations |
| ALCS-02: Delegated Authority Boundary | MRO-02 | MRO-07 | Delegation, execution, monitoring | Authority boundary object binding role, action, scope, condition, risk class, expiry, escalation path |
| ALCS-03: Agent Role vs Human Role Distinction | MRO-03 | MRO-01 | Role definition, delegation | Agent responsibility boundary declaring duties, non-duties, allowed tools, inherited constraints, human accountability linkage |
| ALCS-04: Accepted Outcome Compliance | MRO-04 | MRO-01, MRO-08 | Review, acceptance, dispute | Accepted outcome state linking intent, plan, trace, reviewer, acceptance status, dispute window, remediation route |
| ALCS-05: Tool-Action Liability Boundary | MRO-05 | MRO-02, MRO-08 | Execution, external action | Tool-action liability object recording initiator, tool identity, external system, authority credential, reversibility, rollback plan |
| ALCS-06: Responsibility Transfer Across Agents | MRO-06 | MRO-01, MRO-08 | Agent handoff, delegation | Transfer object declaring transferred scope, source role, receiving role, retained responsibilities, inherited constraints |
| ALCS-07: Authority Drift Detection | MRO-07 | MRO-02 | Monitoring, drift detection | Drift event model comparing observed behavior against original authority boundary, risk class, tool scope |
| ALCS-08: MAS Evidence Partitioning | MRO-08 | MRO-01, MRO-04, MRO-10 | Evidence collection, audit | Partitioned evidence by agent, tool, human confirmation, plan version, authority boundary, privacy boundary, accepted outcome |
| ALCS-09: Cross-Project Reuse Compliance | MRO-09 | MRO-02, MRO-10 | Reuse, revalidation | Reuse compliance record linking original validation context to new deployment context, authority reset, privacy review |
| ALCS-10: Privacy/GDPR Lifecycle Mapping | MRO-10 | MRO-08, MRO-12 | All phases involving personal data | Lifecycle data-flow map showing personal data entry, flow, exit across agents, tools, memory, handoffs |
| ALCS-11: Privacy-Preserving Third-Party Validation | MRO-11 | MRO-08, MRO-12 | External validation, audit | Privacy-preserving validation protocol allowing selective disclosure and zero-knowledge proofs |
| ALCS-12: Evidence Minimization and Selective Disclosure | MRO-12 | MRO-08, MRO-10 | Evidence retention, disclosure | Evidence minimization policy defining retention periods, redaction rules, disclosure boundaries |
| ALCS-13: Data Subject Rights vs Evidence Retention | MRO-13 | MRO-10, MRO-12 | Data subject request handling | Data subject rights policy defining retention periods, anonymization rules, legal basis for retention override |
| ALCS-14: Third-Party Processor/Subprocessor Chain | MRO-14 | MRO-10 | All phases involving third-party processing | Dynamic processor chain record tracking processor identity, data categories, processing purpose, legal basis |
| ALCS-15: Vendor/Model/Runtime Substitution Conformance | MRO-15 | MRO-02, MRO-09 | Vendor substitution, revalidation | Vendor substitution conformance record proving substitution preserved lifecycle responsibility properties |

This mapping demonstrates that ALCS dimensions are operationalized versions of MRO requirements. Each dimension translates an MRO into a measurable system capability. The mapping also shows that lifecycle responsibility objects are interconnected: responsibility mapping relates to role distinction and transfer semantics; authority boundaries relate to drift detection; evidence partitioning relates to privacy mapping and selective disclosure; reuse compliance relates to authority reset and privacy review.

---

## 8.3.1 Treatment of MRO-16 as a Cross-Cutting Closure Requirement

MRO-16 (Incident, Dispute, and Remediation Closure) is not directly mapped to a single ALCS dimension. Instead, it is treated as a cross-cutting lifecycle capability that is evaluated through multiple dimensions and scoring logic across RCCS-T, RCCS-M, and ALCS.

ALCS directly operationalizes fifteen dimension-level MROs (MRO-01 through MRO-15). MRO-16 is cross-cutting rather than omitted. It is evaluated through contestability, monitoring, accepted outcome, evidence partitioning, evidence minimization, and remediation-related scoring logic. This prevents incident, dispute, and remediation closure from being treated as a narrow isolated dimension and instead recognizes it as a lifecycle-wide capability.

The following table shows how MRO-16 is evaluated across multiple dimensions:

**Table T-08-02A: MRO-16 Evaluation Path**

| MRO-16 Evaluation Path | Relevant Dimension / Chapter | Reason |
|------------------------|------------------------------|--------|
| Contestability | RCCS-09 (Chapter 7) | Disputes require challenge and review paths. Incident closure depends on dispute resolution mechanisms. |
| Monitoring | RCCS-10 (Chapter 7) | Incidents require detection and recurrence monitoring. Continuous improvement depends on monitoring capability. |
| Accepted Outcome | ALCS-04 (Chapter 8) | Closure requires knowing whether the outcome was accepted, rejected, or remediated. Dispute resolution affects acceptance state. |
| Evidence Partitioning | ALCS-08 (Chapter 8) | Closure requires reconstructable evidence linking incident detection to root cause, remediation, and resolution. |
| Evidence Minimization | ALCS-12 (Chapter 8) | Closure evidence must preserve accountability without unnecessary disclosure. Incident investigation must respect privacy boundaries. |
| Composite interpretation | Chapter 9 | Incident closure affects final system readiness interpretation. Systems with strong incident closure capability score higher on contestability, monitoring, and evidence dimensions. |

This cross-cutting treatment ensures that incident, dispute, and remediation closure is evaluated as a lifecycle-wide capability rather than as a single isolated dimension. Systems that provide strong contestability, monitoring, accepted outcome tracking, evidence partitioning, and evidence minimization capabilities will naturally support incident closure. Systems that lack these capabilities will struggle to close incidents in an auditable, privacy-preserving, and accountability-preserving manner.

---

## 8.4 Shared Scoring Procedure (Reference to Chapter 7)

ALCS uses the same scoring procedure as RCCS. This ensures consistency and comparability across both scoring frameworks. The shared scoring procedure was defined in Chapter 7.3 and includes the raw scoring scale, evidence confidence multiplier, dimension score formula, and cross-framework composite score.

**Raw scoring scale (0-5):** Each ALCS dimension is scored on a 0-5 raw scale based on the strength of system support:
- **0 = No capability; no evidence**
- **1 = Minimal capability; weak evidence**
- **2 = Partial capability; some evidence**
- **3 = Moderate capability; documented evidence**
- **4 = Strong capability; validated evidence**
- **5 = Complete capability demonstrated by implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts. Legal text may establish a regulatory baseline but does not by itself prove implementation.**

**Evidence confidence multiplier:** The evidence multiplier adjusts the dimension score based on the quality and verifiability of evidence used to evaluate the system:
- **L1:** 1.00
- **L2:** 0.85
- **L3:** 0.75
- **L4:** 0.55
- **L5:** 0.35

**Dimension score formula:** Each ALCS dimension is normalized using:

**Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier**

**Optional composite views:** RCCS-T, RCCS-M, and ALCS may be combined only as secondary analytical views:

- **Traditional Composite = 0.40 × RCCS-T + 0.60 × ALCS**
- **Agentic Composite = 0.40 × RCCS-M + 0.60 × ALCS**

The primary result display remains the three-profile view: RCCS-T, RCCS-M, and ALCS. Composite views must not be used as legal compliance proof, vendor rankings, certification signals, or procurement recommendations. For complete details on the scoring procedure, including scoring rationale, evidence hierarchy, and calculation examples, see Chapter 7.3 and Chapter 9.

---

## 8.5 ALCS Boundary Statement

ALCS is an analytical scoring framework, not a legal compliance score. This boundary must be understood clearly to avoid misinterpretation and over-claiming.

**What ALCS is:**
- An analytical framework for comparing system capabilities against lifecycle responsibility requirements
- A structured method for evaluating whether a system provides lifecycle objects required to prove agentic responsibility
- A tool for buyers, auditors, and governance teams to assess system readiness for multi-agent execution
- A bridge between regulatory abstractions and lifecycle implementation

**What ALCS is not:**
- A legal compliance certification or conformity assessment
- A regulatory approval or endorsement
- A guarantee that a system meets all legal obligations
- A substitute for legal counsel, compliance review, or risk assessment

**Key boundary principles:**

1. **High ALCS score does NOT mean legal compliance.** A system may score well on ALCS while the organization using it fails to comply with legal obligations due to deployment gaps, policy weaknesses, incomplete adoption, or jurisdictional differences. ALCS measures system capability to express lifecycle objects, not organizational conformance to legal requirements.

2. **Low ALCS score does NOT mean non-compliance.** A system may score lower on ALCS while the organization achieves compliance through compensating controls, manual processes, or alternative governance mechanisms. ALCS measures lifecycle object support, not all possible paths to compliance.

3. **ALCS measures system capability, not organizational practice.** A system may provide strong lifecycle objects while the organization fails to use them. Conversely, an organization may achieve strong lifecycle governance through processes that are not reflected in system capabilities. ALCS evaluates what the system can express, not what the organization actually does.

4. **ALCS is context-independent, but compliance is context-dependent.** ALCS evaluates system capabilities without regard to deployment context, risk class, jurisdiction, or use case. Legal compliance depends on all of these factors. A system with a high ALCS score may still be non-compliant in specific contexts, and a system with a low ALCS score may be compliant in other contexts.

**Relationship between RCCS-T, RCCS-M, and ALCS:**

RCCS-T, RCCS-M, and ALCS measure different layers. RCCS-T measures traditional regulatory compliance coverage: whether a system provides the governance primitives that existing regulation requires. RCCS-M measures whether that regulatory coverage can be expressed through Missing Regulatory Objects. ALCS measures agentic lifecycle conformance: whether a system provides mature lifecycle responsibility objects that make agentic responsibility auditable, provable, and transferable.

A system can have strong RCCS-T and weaker RCCS-M or ALCS. This means the system provides strong regulatory compliance coverage through risk management, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring capabilities while lacking deeper lifecycle responsibility objects for multi-agent execution. This is not a contradiction. It reflects the reality that existing regulation focuses on model governance and platform controls while lifecycle responsibility semantics for multi-agent systems are still emerging.

A system can have weaker RCCS-T and stronger RCCS-M or ALCS. This means the system provides strong lifecycle objects for expressing agentic responsibility while lacking broader productized governance coverage. This pattern is possible for specialized lifecycle protocols or agent frameworks that focus on responsibility semantics without providing full governance platform capabilities.

All three profiles are necessary. RCCS-T shows conventional governance coverage. RCCS-M shows whether that coverage survives MRO adjustment. ALCS shows lifecycle conformance maturity. Together, they provide a three-profile assessment of system governance capability.

The purpose of this boundary statement is to prevent over-claiming. ALCS is a useful analytical tool, but it is not a compliance certification. Organizations must not rely on ALCS scores as proof of legal compliance. Buyers must not treat high ALCS scores as a substitute for due diligence, legal review, or risk assessment. ALCS measures system capability to express lifecycle objects. Legal compliance requires organizational practice, deployment context, and jurisdictional analysis.

---

## 8.6 Bridge to Dimension Sections

The following sections (8.7 through 8.21) detail each ALCS dimension. Each dimension section includes:

- **MRO mapping** - Which Missing Regulatory Objects inform the dimension
- **Core question** - What the dimension evaluates
- **Scoring criteria** - How to apply the 0-5 raw scale to system capabilities
- **System mapping guidance** - How to evaluate whether a system supports the dimension

The dimension sections provide the detailed rubrics required to score systems consistently and reproducibly. They translate lifecycle responsibility abstractions into concrete system features that can be evaluated through documentation review, API inspection, and evidence analysis.

The body chapter includes compact dimension rubrics for reader continuity; Appendix F provides the reusable detailed ALCS scoring reference.

---

## 8.7 ALCS-01: Human-Role-to-MAS Responsibility Mapping

### MRO Mapping

This dimension primarily maps to MRO-01 (Human Role to MAS Responsibility Mapping) with secondary relationships to MRO-03 (Agent Role vs Human Role) and MRO-06 (Responsibility Transfer Across Agents). The core requirement is that human organizational accountability must be explicitly mapped to agent execution responsibilities.

### Core Question

**Does the system map human roles to agent roles, delegated scopes, evidence obligations, and acceptance authority?**

### Scoring Rubric

**Table T-08-03: ALCS-01 Human-Role-to-MAS Responsibility Mapping Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No role-to-responsibility mapping features documented or observable |
| 1 | Conceptual support | Documentation mentions human oversight or role mapping but provides no implementation primitives |
| 2 | Partial implementation | Human roles and agent roles exist but are not explicitly mapped; no evidence obligations or acceptance authority tracking |
| 3 | Moderate implementation | Role-to-responsibility mappings exist for most workflows; some gaps in evidence obligation tracking, acceptance authority, or cross-project mapping |
| 4 | Strong implementation | Comprehensive role-responsibility graph linking human role IDs, agent role IDs, delegated scopes, reserved decisions, review duties, evidence obligations, and accepted-outcome authority |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

When evaluating a system for human-role-to-MAS responsibility mapping, examine whether the system maintains explicit bindings between human organizational roles and agent execution responsibilities. Look for role definition objects that specify not only who can initiate or approve agent work, but also who owns intent, who approves risk, who reviews evidence, and who accepts outcomes.

Strong systems provide role-responsibility graphs where each human role is linked to specific agent roles, with clear documentation of what responsibilities are delegated, what responsibilities are retained, and what evidence obligations apply. The mapping should be durable and auditable: given a completed workflow, the system should be able to reconstruct which human role held which responsibility at each lifecycle phase.

Weak systems may have user accounts, approval buttons, or workflow assignments without explicit responsibility semantics. A user may be listed as an approver without clarity about whether they own business acceptance, risk approval, or evidence review. The test is whether the system can answer: for this completed run, who owned intent, who approved risk, who executed each step, who reviewed evidence, and who accepted the outcome?

### Common Gaps

The most common gap is human oversight that exists at the UI level without responsibility mapping at the lifecycle level. Organizations may have approval workflows where humans click buttons, but the system cannot prove which human role held which responsibility. Another common gap is responsibility mappings that apply to initial delegation but do not track responsibility changes during multi-agent handoffs or cross-project reuse.

---

## 8.8 ALCS-02: Delegated Authority Boundary

### MRO Mapping

This dimension primarily maps to MRO-02 (Delegated Authority Boundary) with secondary relationships to MRO-07 (Authority Drift). The core requirement is that technical permission must be distinguished from business authority, and authority boundaries must be enforced at execution time.

### Core Question

**Does the system define and enforce delegated authority boundaries for agent actions?**

### Scoring Rubric

**Table T-08-04: ALCS-02 Delegated Authority Boundary Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No authority boundary features documented or observable |
| 1 | Conceptual support | Documentation mentions authority or delegation but provides no implementation primitives |
| 2 | Partial implementation | Tool permissions exist but are not mapped to business authority; no scope, condition, or risk class enforcement |
| 3 | Moderate implementation | Authority boundaries exist for most high-impact actions; some gaps in condition enforcement, expiry tracking, or escalation paths |
| 4 | Strong implementation | Comprehensive authority boundary objects binding role, action, scope, condition, risk class, evidence requirement, expiry, revocation, and escalation path with runtime enforcement |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating delegated authority requires distinguishing between access control and authority control. A system may grant an agent technical permission to call a tool while lacking business authority to use that tool for a particular action. Look for authority boundary objects that specify not only what an agent can do, but under what conditions, for what scope, at what risk level, and with what escalation requirements.

Strong systems check authority boundaries before high-impact tool calls and enforce scope limitations, condition requirements, and expiry rules. Authority should be evaluated against intent and plan state, not only against static credentials. The system should fail closed when authority cannot be reconstructed, and should escalate when observed actions exceed delegated authority.

Weak systems may rely on IAM permissions, API keys, or tool availability without authority semantics. The same tool call may be authorized in one context and unauthorized in another, but the system treats all calls with valid credentials as authorized. The test is whether the system can show the exact authority basis and escalation rule for a high-impact tool call before it executes.

### Common Gaps

The most common gap is authority boundaries that are documented in policies but not enforced at runtime. Organizations may define authority scopes in documentation while allowing agents to execute any action for which they have technical permission. Another common gap is authority boundaries that apply to initial delegation but do not detect authority drift during long-running workflows or autonomous retries.

---

## 8.9 ALCS-03: Agent Role vs Human Role Distinction

### MRO Mapping

This dimension primarily maps to MRO-03 (Agent Role is not Human Role) with secondary relationships to MRO-01 (Human Role to MAS Responsibility Mapping). The core requirement is that agent roles must be governance identities with bounded responsibility surfaces, not merely persuasive persona labels.

### Core Question

**Does the system distinguish agent roles from human roles with clear responsibility semantics?**

### Scoring Rubric

**Table T-08-05: ALCS-03 Agent Role vs Human Role Distinction Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No role distinction features documented or observable |
| 1 | Conceptual support | Documentation mentions agent roles but provides no responsibility semantics |
| 2 | Partial implementation | Agent roles exist as execution personas but lack responsibility boundaries, evidence duties, or human accountability linkage |
| 3 | Moderate implementation | Agent roles include responsibility boundaries and capability definitions; some gaps in evidence duties, escalation requirements, or human accountability linkage |
| 4 | Strong implementation | Comprehensive agent responsibility boundaries declaring duties, non-duties, allowed tools, inherited constraints, verification expectations, evidence obligations, and human accountability linkage |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating agent role distinction requires examining whether agent roles carry governance semantics beyond execution personas. Look for role objects that define not only what an agent can do, but what it must prove, what it must escalate, and which human role remains accountable for acceptance or rejection.

Strong systems separate UX persona labels from governance role definitions. An agent labeled "reviewer" should have a role object that specifies review duties, review criteria, evidence requirements, escalation conditions, and the human role accountable for final acceptance. The role definition should survive if the persona label is replaced with a neutral identifier.

Weak systems may use human-like role labels such as researcher, writer, analyst, or manager without defining responsibility boundaries. These labels are useful for UI and collaboration metaphors, but they can obscure the fact that legal and business accountability remains with humans and organizations. The test is whether the governance meaning remains intact if the agent name is replaced with a neutral identifier.

### Common Gaps

The most common gap is agent roles that exist as execution personas without responsibility semantics. Organizations may define agents with human-like job titles while lacking clarity about what responsibilities those agents carry, what evidence they must produce, or which human roles remain accountable. Another common gap is role definitions that specify capabilities without specifying non-delegable human responsibilities or escalation duties.

---

## 8.10 ALCS-04: Accepted Outcome Compliance

### MRO Mapping

This dimension primarily maps to MRO-04 (Accepted Outcome Compliance) with secondary relationships to MRO-01 (Human Role to MAS Responsibility Mapping) and MRO-08 (MAS Evidence Partitioning). The core requirement is that execution completion must be separated from outcome acceptance.

### Core Question

**Does the system separate execution completion from outcome acceptance and track acceptance authority?**

### Scoring Rubric

**Table T-08-06: ALCS-04 Accepted Outcome Compliance Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No acceptance tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions review or acceptance but provides no implementation primitives |
| 2 | Partial implementation | Execution completion states exist but are not distinguished from acceptance states; no acceptance criteria or reviewer tracking |
| 3 | Moderate implementation | Acceptance workflows exist for most deliverables; some gaps in acceptance criteria definition, dispute windows, or remediation routes |
| 4 | Strong implementation | Comprehensive accepted outcome states linking source intent, plan, trace, reviewer identity, acceptance criteria, acceptance status, acceptance timestamp, dispute window, and remediation route |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating accepted outcome compliance requires examining whether the system distinguishes between completed execution and accepted delivery. Look for acceptance state objects that bind deliverable ID, plan version, trace reference, reviewer role, acceptance criteria, acceptance decision, and dispute window.

Strong systems enforce a two-state transition: from completed output to accepted outcome. Completion means execution reached a terminal state. Acceptance means the output was reviewed against intent, evidence, risk, and acceptance criteria by an authorized reviewer. The system should track who accepted, against what criteria, with what evidence, and what the dispute window is.

Weak systems may mark work as complete when execution terminates without requiring explicit acceptance. Downstream business processes may rely on unaccepted output. In disputes, the organization cannot distinguish whether the problem was execution quality, review failure, or missing acceptance policy. The test is whether the system can identify acceptance criteria, evidence reviewed, reviewer role, decision timestamp, and dispute window for any completed task.

### Common Gaps

The most common gap is execution completion being treated as outcome acceptance. Organizations may have reliable execution engines while lacking explicit acceptance workflows, acceptance criteria, or acceptance authority tracking. Another common gap is acceptance workflows that exist for final deliverables but not for intermediate agent outputs, allowing unaccepted work to propagate through multi-agent workflows.

---

## 8.11 ALCS-05: Tool-Action Liability Boundary

### MRO Mapping

This dimension primarily maps to MRO-05 (Tool-Action Liability Boundary) with secondary relationships to MRO-02 (Delegated Authority Boundary) and MRO-08 (MAS Evidence Partitioning). The core requirement is that consequential tool actions must record liability boundaries including initiator, authority source, affected system, reversibility, and accountable owner.

### Core Question

**Does the system record liability boundaries for consequential tool actions?**

### Scoring Rubric

**Table T-08-07: ALCS-05 Tool-Action Liability Boundary Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No tool-action liability tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions tool use or external actions but provides no liability tracking primitives |
| 2 | Partial implementation | Tool call logs exist but do not record authority source, affected systems, reversibility, or accountable owner |
| 3 | Moderate implementation | Tool-action records exist for most consequential actions; some gaps in reversibility tracking, rollback plans, or liability assignment |
| 4 | Strong implementation | Comprehensive tool-action liability objects recording initiator, tool identity, external system, authority credential, reversibility status, rollback plan, affected data categories, evidence pointer, and accountable owner |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating tool-action liability requires examining whether the system records the full liability context for consequential tool actions. Look for tool-action records that capture not only what action was performed, but who initiated it, under what authority, affecting which external system, with what reversibility, and who owns the resulting consequence.

Strong systems distinguish between low-risk tool calls and consequential actions that affect external systems, records, customers, code, money, permissions, communications, or regulated data. Consequential actions should produce liability boundary records before execution. The system should be able to reconstruct the initiator, authority source, affected system, reversibility status, rollback path, and accountable owner for any high-impact tool action.

Weak systems may log tool calls without liability context. A tool log may show that an action happened, but not whether the agent had authority, whether the action was reversible, which system was affected, or who owns the consequence. The test is whether the system can reconstruct the full liability context for any consequential tool action without requiring tribal memory or manual investigation.

### Common Gaps

The most common gap is tool call logging that captures execution events without liability semantics. Organizations may have extensive tool usage logs while lacking visibility into authority sources, affected systems, reversibility status, or accountability assignments. Another common gap is liability boundaries that apply to some tool categories but not others, leaving gaps in coverage for newly added tools or third-party integrations.

---

## 8.12 ALCS-06: Responsibility Transfer Across Agents

### MRO Mapping

This dimension primarily maps to MRO-06 (Responsibility Transfer Across Agents) with secondary relationships to MRO-01 (Human Role to MAS Responsibility Mapping) and MRO-08 (MAS Evidence Partitioning). The core requirement is that agent handoffs must include explicit responsibility transfer semantics, not merely task routing.

### Core Question

**Does the system track responsibility transfer during agent handoffs?**

### Scoring Rubric

**Table T-08-08: ALCS-06 Responsibility Transfer Across Agents Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No responsibility transfer tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions agent handoffs or delegation but provides no responsibility transfer primitives |
| 2 | Partial implementation | Agent handoff routing exists but does not track responsibility transfer; no inherited constraints or receiving-role acceptance |
| 3 | Moderate implementation | Responsibility transfer records exist for most handoffs; some gaps in inherited constraints, retained responsibilities, or transfer acceptance |
| 4 | Strong implementation | Comprehensive transfer objects declaring transferred scope, source role, receiving role, retained responsibilities, inherited constraints, evidence obligations, receiving-role acceptance, and rejection/escalation behavior |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating responsibility transfer requires distinguishing between workflow routing and governance transfer. Look for transfer objects that specify what responsibility was transferred, what was retained, what constraints were inherited, and whether the receiving agent accepted the transfer.

Strong systems enforce explicit responsibility transfer at agent handoffs. A receiving agent must inherit constraints, evidence duties, privacy restrictions, and escalation conditions rather than merely receiving a prompt or task payload. Upstream and downstream responsibility must remain reconstructable. The system should be able to answer: at each handoff, what responsibility was transferred, what was retained, what constraints were inherited, and did the receiving agent accept?

Weak systems may route tasks between agents without responsibility semantics. A downstream agent can claim it only followed instructions while the upstream agent no longer controls execution, leaving a gap in audit and remediation. The test is whether the system can reconstruct responsibility continuity across agent handoffs without relying on execution flow alone.

### Common Gaps

The most common gap is agent handoffs that exist as workflow routing without responsibility transfer semantics. Organizations may have sophisticated multi-agent orchestration while lacking explicit tracking of what responsibilities moved between agents. Another common gap is responsibility transfer that happens implicitly through task delegation without recording transferred scope, retained scope, or inherited constraints.

---

## 8.13 ALCS-07: Authority Drift Detection

### MRO Mapping

This dimension primarily maps to MRO-07 (Authority Drift) with secondary relationships to MRO-02 (Delegated Authority Boundary). The core requirement is that the system must detect when agents transition from their original authority boundaries without explicit authorization.

### Core Question

**Does the system detect and alert on unauthorized authority transitions?**

### Scoring Rubric

**Table T-08-09: ALCS-07 Authority Drift Detection Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No authority drift detection features documented or observable |
| 1 | Conceptual support | Documentation mentions authority monitoring but provides no drift detection primitives |
| 2 | Partial implementation | Authority boundaries are defined but not monitored for drift; no drift detection rules or alerts |
| 3 | Moderate implementation | Authority drift detection exists for most high-risk transitions; some gaps in drift alert routing, remediation workflows, or long-running workflow monitoring |
| 4 | Strong implementation | Comprehensive authority drift monitoring comparing observed behavior against original authority boundaries with drift detection rules, drift alerts, automatic stop/downgrade, and drift remediation workflows |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating authority drift detection requires examining whether the system monitors for unauthorized authority transitions during execution. Look for drift detection mechanisms that compare observed agent behavior against original authority boundaries and plan state.

Strong systems detect when agents move from advice to execution, draft to send, read-only to write, or internal recommendation to external commitment without a new authority boundary or confirmation event. Drift detection should trigger stop, downgrade, or human confirmation rather than being treated as ordinary execution variance. The system should be particularly vigilant in long-running workflows, autonomous retries, or agent loops where cumulative drift can occur.

Weak systems may define authority boundaries at delegation time but not monitor for drift during execution. Each local step may appear reasonable while the cumulative lifecycle state exceeds the original delegation. The test is whether the system can detect when an agent's observed behavior exceeds its original authority boundary and halt or escalate before external consequence.

### Common Gaps

The most common gap is authority boundaries that are enforced at delegation time but not monitored during execution. Organizations may have clear authority definitions while lacking runtime detection of authority transitions. Another common gap is drift detection that applies to individual tool calls but not to cumulative authority escalation across multiple steps in long-running workflows.

---

## 8.14 ALCS-08: MAS Evidence Partitioning

### MRO Mapping

This dimension primarily maps to MRO-08 (MAS Evidence Partitioning) with secondary relationships to MRO-01 (Human Role to MAS Responsibility Mapping), MRO-04 (Accepted Outcome Compliance), and MRO-10 (Privacy/GDPR Lifecycle Mapping). The core requirement is that multi-agent evidence must be partitioned, linked, and reconstructable for different audit purposes.

### Core Question

**Does the system partition evidence by agent, tool, authority boundary, privacy class, and lifecycle phase?**

### Scoring Rubric

**Table T-08-10: ALCS-08 MAS Evidence Partitioning Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No evidence partitioning features documented or observable |
| 1 | Conceptual support | Documentation mentions evidence or audit trails but provides no partitioning primitives |
| 2 | Partial implementation | Flat chronological logs exist but are not partitioned by agent, tool, authority, or privacy boundaries |
| 3 | Moderate implementation | Evidence partitioning exists for most governance boundaries; some gaps in cross-partition linking, privacy class partitioning, or reconstruction capability |
| 4 | Strong implementation | Comprehensive evidence partitioning by agent, tool, human confirmation, plan version, authority boundary, privacy boundary, and accepted outcome with stable identifiers, integrity hashes, cross-partition linking, and evidence reconstruction capability |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating evidence partitioning requires examining whether the system can partition, link, and reconstruct evidence for different audit purposes. Look for evidence partitions organized by agent, role, tool, plan version, authority boundary, privacy class, confirmation event, and accepted outcome.

Strong systems maintain evidence partitions that can be selectively disclosed without exposing the full raw log. Different auditors may need different partitions: a privacy regulator may need data-flow evidence, a financial auditor may need transaction evidence, a customer dispute may require specific agent evidence. Partitions should be linked by stable identifiers and integrity hashes to enable reconstruction while supporting selective disclosure.

Weak systems may maintain flat chronological logs that mix irrelevant telemetry with critical proof. Flat logs are difficult to use in disputes because they require exposing unnecessary sensitive data to extract relevant evidence. The test is whether the system can reconstruct evidence partitions for specific agents, tools, privacy classes, and accepted outcomes without exposing the full raw log.

### Common Gaps

The most common gap is evidence that exists as flat execution logs without governance partitioning. Organizations may have comprehensive observability while lacking the ability to partition evidence by agent, authority boundary, or privacy class. Another common gap is evidence partitions that exist but are not linked by stable identifiers, making it difficult to reconstruct cross-agent workflows or trace responsibility chains.

---

## 8.15 ALCS-09: Cross-Project Reuse Compliance

### MRO Mapping

This dimension primarily maps to MRO-09 (Cross-Project Reuse Compliance) with secondary relationships to MRO-02 (Delegated Authority Boundary) and MRO-10 (Privacy/GDPR Lifecycle Mapping). The core requirement is that workflows validated in one project context must be revalidated when reused in different project contexts.

### Core Question

**Does the system enforce revalidation when workflows are reused across projects?**

### Scoring Rubric

**Table T-08-11: ALCS-09 Cross-Project Reuse Compliance Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No reuse tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions workflow reuse but provides no revalidation primitives |
| 2 | Partial implementation | Workflow templates or reuse mechanisms exist but do not track original validation context or enforce revalidation |
| 3 | Moderate implementation | Reuse compliance records exist for most cross-project reuse; some gaps in authority reset, privacy review, or revalidation enforcement |
| 4 | Strong implementation | Comprehensive reuse compliance records linking original validation context, new deployment context, authority reset, privacy review, revalidation decision, and revalidation evidence |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating cross-project reuse compliance requires examining whether the system tracks workflow provenance and enforces revalidation when workflows move between project contexts. Look for reuse compliance records that bind original workflow ID, original validation record, original project context, new project context, authority reset decision, privacy review, and revalidation approval.

Strong systems treat cross-project reuse as a governance event rather than a convenience feature. When a workflow validated for one customer, risk class, data category, or authority boundary is reused in a different context, the system should require explicit revalidation. The original validation may not apply: the new project may have different privacy constraints, different authority boundaries, different acceptance criteria, or different risk exposure. Reuse without revalidation creates hidden governance debt.

Weak systems may provide workflow templates, agent libraries, or reusable components without tracking where they came from, what validation they received, or whether that validation applies to the new context. Developers may copy workflows across projects assuming that prior validation transfers automatically. The test is whether the system can identify the original validation context for any reused workflow and prove that revalidation occurred before deployment in the new context.

### Common Gaps

The most common gap is workflow reuse treated as a productivity feature without governance controls. Organizations may have extensive workflow libraries while lacking visibility into original validation contexts or revalidation requirements. Another common gap is revalidation policies that apply to major version changes but not to cross-project reuse, allowing workflows to migrate between contexts without authority reset or privacy review.

---

## 8.16 ALCS-10: Privacy/GDPR Lifecycle Mapping

### MRO Mapping

This dimension primarily maps to MRO-10 (Privacy/GDPR Lifecycle Mapping) with secondary relationships to MRO-08 (MAS Evidence Partitioning) and MRO-12 (Evidence Minimization and Selective Disclosure). The core requirement is that personal data flows must be mapped across the entire agent lifecycle, not only at training or input boundaries.

### Core Question

**Does the system map personal data flows across the agent lifecycle?**

### Scoring Rubric

**Table T-08-12: ALCS-10 Privacy/GDPR Lifecycle Mapping Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No privacy lifecycle mapping features documented or observable |
| 1 | Conceptual support | Documentation mentions privacy or data protection but provides no lifecycle mapping primitives |
| 2 | Partial implementation | Privacy controls exist for training data or input data but do not map personal data flows across agents, tools, memory, or handoffs |
| 3 | Moderate implementation | Privacy lifecycle mapping exists for most personal data flows; some gaps in cross-agent flows, tool-level tracking, or memory retention mapping |
| 4 | Strong implementation | Comprehensive lifecycle data-flow maps showing personal data entry, flow, transformation, storage, cross-agent transfer, tool disclosure, memory retention, and exit with data category labels, legal basis, retention periods, and processor tracking |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating privacy lifecycle mapping requires examining whether the system tracks personal data flows throughout multi-agent execution. Look for data-flow maps that show where personal data enters the system, which agents process it, which tools receive it, where it is stored in memory, how it moves during agent handoffs, and where it exits the system.

Strong systems maintain dynamic data-flow maps that update as workflows execute. Each agent, tool, memory store, and handoff should be labeled with data categories processed, legal basis for processing, retention period, and processor identity. The system should be able to answer: for any completed workflow, what personal data was processed, by which agents, using which tools, stored in which memory locations, transferred to which processors, and retained for how long?

Weak systems may have privacy controls at the platform level without lifecycle-level data-flow visibility. Privacy policies may specify general data handling practices while the system cannot reconstruct actual data flows for specific workflow executions. The test is whether the system can generate a data-flow map for any completed workflow showing personal data movement across agents, tools, memory, and external processors.

### Common Gaps

The most common gap is privacy controls that apply to training data or input validation but do not track personal data flows during agent execution. Organizations may have strong data governance for model training while lacking visibility into how personal data moves through multi-agent workflows, tool calls, memory stores, and agent handoffs. Another common gap is data-flow mapping that exists at the platform level but cannot be reconstructed for individual workflow executions.

---

## 8.17 ALCS-11: Privacy-Preserving Third-Party Validation

### MRO Mapping

This dimension primarily maps to MRO-11 (Privacy-Preserving Third-Party Validation) with secondary relationships to MRO-08 (MAS Evidence Partitioning) and MRO-12 (Evidence Minimization and Selective Disclosure). The core requirement is that external validators must be able to verify compliance without requiring full disclosure of raw evidence, personal data, or trade secrets.

### Core Question

**Does the system support validation without raw data disclosure?**

### Scoring Rubric

**Table T-08-13: ALCS-11 Privacy-Preserving Third-Party Validation Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No privacy-preserving validation features documented or observable |
| 1 | Conceptual support | Documentation mentions external validation or audit but provides no privacy-preserving primitives |
| 2 | Partial implementation | External validation is supported but requires full evidence disclosure; no selective disclosure or privacy-preserving protocols |
| 3 | Moderate implementation | Selective disclosure mechanisms exist for most validation scenarios; some gaps in zero-knowledge proofs, cryptographic commitments, or cross-validator consistency |
| 4 | Strong implementation | Comprehensive privacy-preserving validation protocols supporting selective disclosure, redacted evidence, cryptographic commitments, zero-knowledge proofs, and validator-specific evidence views without raw data exposure |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating privacy-preserving validation requires examining whether the system provides mechanisms for external validators to verify compliance without accessing raw evidence. Look for selective disclosure protocols, redaction capabilities, cryptographic commitments, zero-knowledge proofs, or validator-specific evidence views.

Strong systems allow validators to verify that specific properties hold without exposing the underlying data. A privacy regulator may verify that personal data was processed under valid legal basis without seeing the actual data. A customer may verify that their request was handled correctly without exposing other customers' data. An auditor may verify that authority boundaries were enforced without accessing trade secret workflows. The system should support multiple validation protocols appropriate for different validator types and verification requirements.

Weak systems may require full evidence disclosure for any external validation. Validators must choose between accepting unverified claims or demanding access to raw logs, personal data, and trade secrets. This creates a false choice between privacy and accountability. The test is whether the system can prove specific compliance properties to external validators without exposing raw evidence that contains personal data or trade secrets.

### Common Gaps

The most common gap is validation protocols that require full evidence disclosure. Organizations may have comprehensive evidence collection while lacking mechanisms for selective disclosure or privacy-preserving verification. Another common gap is privacy-preserving validation that works for specific use cases but lacks general protocols for different validator types, verification requirements, or evidence categories.

---

## 8.18 ALCS-12: Evidence Minimization and Selective Disclosure

### MRO Mapping

This dimension primarily maps to MRO-12 (Evidence Minimization and Selective Disclosure) with secondary relationships to MRO-08 (MAS Evidence Partitioning) and MRO-10 (Privacy/GDPR Lifecycle Mapping). The core requirement is that evidence retention must be minimized to what is necessary for governance purposes, and disclosure must be limited to what is required for specific validation contexts.

### Core Question

**Does the system minimize evidence retention and support selective disclosure?**

### Scoring Rubric

**Table T-08-14: ALCS-12 Evidence Minimization and Selective Disclosure Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No evidence minimization features documented or observable |
| 1 | Conceptual support | Documentation mentions evidence retention or disclosure but provides no minimization primitives |
| 2 | Partial implementation | Evidence retention exists but lacks minimization policies; no retention periods, redaction rules, or disclosure boundaries |
| 3 | Moderate implementation | Evidence minimization policies exist for most evidence categories; some gaps in automated retention enforcement, redaction rules, or disclosure boundary controls |
| 4 | Strong implementation | Comprehensive evidence minimization policies defining retention periods by evidence category, automated retention enforcement, redaction rules, disclosure boundaries, and purpose-specific evidence views |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating evidence minimization requires examining whether the system defines and enforces retention limits and disclosure boundaries. Look for evidence minimization policies that specify retention periods by evidence category, automated deletion or anonymization rules, redaction protocols, and disclosure boundary controls.

Strong systems distinguish between evidence required for immediate governance, evidence required for dispute resolution, and evidence required for long-term compliance. Retention periods should vary by evidence category and purpose. Personal data in evidence should be minimized, anonymized, or deleted when no longer necessary. Disclosure should be limited to what is required for specific validation contexts rather than exposing full raw logs.

Weak systems may retain all evidence indefinitely without minimization policies or may delete evidence too aggressively, creating gaps in audit capability. The balance is between retaining sufficient evidence for governance purposes and minimizing retention to reduce privacy risk, storage cost, and disclosure exposure. The test is whether the system can define retention periods by evidence category, enforce automated retention limits, and support selective disclosure without exposing unnecessary evidence.

### Common Gaps

The most common gap is evidence retention without minimization policies. Organizations may collect comprehensive evidence while lacking clarity about retention periods, deletion rules, or disclosure boundaries. Another common gap is minimization policies that exist in documentation but are not enforced automatically, requiring manual review and deletion processes that are rarely executed.

---

## 8.19 ALCS-13: Data Subject Rights vs Evidence Retention

### MRO Mapping

This dimension primarily maps to MRO-13 (Data Subject Rights vs Evidence Retention) with secondary relationships to MRO-10 (Privacy/GDPR Lifecycle Mapping) and MRO-12 (Evidence Minimization and Selective Disclosure). The core requirement is that data subject rights must be reconciled with evidence retention obligations, not treated as separate concerns.

### Core Question

**Does the system reconcile data subject rights with evidence retention obligations?**

### Scoring Rubric

**Table T-08-15: ALCS-13 Data Subject Rights vs Evidence Retention Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No data subject rights reconciliation features documented or observable |
| 1 | Conceptual support | Documentation mentions data subject rights or evidence retention but provides no reconciliation primitives |
| 2 | Partial implementation | Data subject rights mechanisms exist but do not account for evidence retention obligations; no retention override rules or anonymization protocols |
| 3 | Moderate implementation | Data subject rights policies exist with some retention reconciliation; some gaps in legal basis documentation, anonymization rules, or dispute-window protection |
| 4 | Strong implementation | Comprehensive data subject rights policies defining retention periods, anonymization rules, legal basis for retention override, dispute-window protection, and reconciliation procedures for erasure requests vs evidence obligations |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating data subject rights reconciliation requires examining whether the system handles conflicts between erasure requests and evidence retention obligations. Look for data subject rights policies that define retention periods, anonymization protocols, legal basis for retention override, and dispute-window protection.

Strong systems recognize that data subject rights are not absolute when evidence retention is required for legal compliance, dispute resolution, or regulatory obligations. When a data subject requests erasure, the system should evaluate whether evidence retention obligations apply, whether anonymization can satisfy both requirements, and whether retention override is legally justified. The system should document the legal basis for any retention override and implement anonymization where possible.

Weak systems may treat data subject rights and evidence retention as separate concerns. Privacy teams may implement erasure without consulting governance teams about evidence obligations, or governance teams may retain evidence without considering data subject rights. The test is whether the system can handle erasure requests while preserving evidence required for governance purposes, documenting the legal basis for retention, and implementing anonymization where appropriate.

### Common Gaps

The most common gap is data subject rights and evidence retention treated as separate concerns without reconciliation procedures. Organizations may have privacy teams handling erasure requests and governance teams managing evidence retention without coordination. Another common gap is retention override decisions made without documented legal basis or anonymization analysis, creating compliance risk when erasure requests are denied.

---

## 8.20 ALCS-14: Third-Party Processor/Subprocessor Chain

### MRO Mapping

This dimension primarily maps to MRO-14 (Third-Party Processor/Subprocessor Chain) with secondary relationships to MRO-10 (Privacy/GDPR Lifecycle Mapping). The core requirement is that processor and subprocessor usage must be tracked at lifecycle granularity, not only at contract level.

### Core Question

**Does the system track processor and subprocessor usage at lifecycle granularity?**

### Scoring Rubric

**Table T-08-16: ALCS-14 Third-Party Processor/Subprocessor Chain Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No processor chain tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions third-party processors but provides no lifecycle tracking primitives |
| 2 | Partial implementation | Processor agreements exist but processor usage is not tracked at lifecycle granularity; no dynamic processor chain records |
| 3 | Moderate implementation | Processor chain tracking exists for most workflows; some gaps in subprocessor tracking, data category mapping, or legal basis documentation |
| 4 | Strong implementation | Comprehensive dynamic processor chain records tracking processor identity, subprocessor identity, data categories processed, processing purpose, legal basis, retention period, and processor location for each workflow execution |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating processor chain tracking requires examining whether the system records which processors and subprocessors were used during specific workflow executions. Look for processor chain records that bind workflow ID, processor identity, subprocessor identity, data categories processed, processing purpose, legal basis, and processor location.

Strong systems maintain dynamic processor chain records that update as workflows execute. When an agent calls a tool that uses a third-party API, the system should record the processor identity, what data was sent, for what purpose, under what legal basis, and where the processor is located. The system should track subprocessor chains when processors use their own subprocessors. The processor chain should be reconstructable for any completed workflow.

Weak systems may have processor agreements at the contract level without tracking which processors were actually used during specific workflow executions. Privacy teams may maintain processor lists while the system cannot prove which processors handled which data for which workflows. The test is whether the system can reconstruct the processor chain for any completed workflow showing which processors and subprocessors handled personal data.

### Common Gaps

The most common gap is processor agreements that exist at the contract level without lifecycle-level tracking. Organizations may have comprehensive processor agreements while lacking visibility into which processors were used during specific workflow executions. Another common gap is processor tracking that covers primary processors but not subprocessor chains, creating blind spots when processors use their own subprocessors.

---

## 8.21 ALCS-15: Vendor/Model/Runtime Substitution Conformance

### MRO Mapping

This dimension primarily maps to MRO-15 (Vendor/Model/Runtime Substitution Conformance) with secondary relationships to MRO-02 (Delegated Authority Boundary) and MRO-09 (Cross-Project Reuse Compliance). The core requirement is that vendor, model, or runtime substitutions must trigger conformance revalidation rather than being treated as transparent configuration changes.

### Core Question

**Does the system enforce conformance revalidation when vendors are substituted?**

### Scoring Rubric

**Table T-08-17: ALCS-15 Vendor/Model/Runtime Substitution Conformance Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of capability | No vendor substitution tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions vendor optionality or model substitution but provides no conformance revalidation primitives |
| 2 | Partial implementation | Vendor or model substitution is supported but does not trigger conformance revalidation; no substitution records or delta analysis |
| 3 | Moderate implementation | Vendor substitution conformance records exist for most substitutions; some gaps in delta analysis, conformance testing, or revalidation enforcement |
| 4 | Strong implementation | Comprehensive vendor substitution conformance records linking original validation, substitution authorization, conformance test results, delta analysis, revalidation decision, and deployment approval |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove ALCS implementation |

### System Mapping Guidance

Evaluating vendor substitution conformance requires examining whether the system treats substitutions as governance events requiring revalidation. Look for substitution conformance records that bind original workflow ID, original vendor/model/runtime, new vendor/model/runtime, substitution authorization, conformance test results, delta analysis, and revalidation decision.

Strong systems recognize that vendor substitution can change behavior in ways that break lifecycle conformance. Swapping one model for another may change output quality, reasoning patterns, or tool-calling behavior. Swapping one runtime for another may change how authority boundaries are enforced or how evidence is collected. The system should require conformance testing and revalidation before substituted configurations are deployed. The substitution record should document what changed, what was tested, and whether lifecycle responsibility properties were preserved.

Weak systems may treat vendor substitution as a configuration change that does not require revalidation. Developers may swap model providers, update API endpoints, or switch agent frameworks without triggering any governance checkpoint. The organization discovers conformance drift only when disputes arise. The test is whether the system can identify vendor substitutions, prove that conformance was revalidated, and document that lifecycle responsibility properties were preserved.

### Common Gaps

The most common gap is vendor substitution treated as a configuration change without conformance revalidation. Organizations may value vendor optionality while lacking governance controls that ensure substitution preserves lifecycle responsibility properties. Another common gap is substitution conformance that applies to major vendor changes but not to model version updates, runtime patches, or tool vendor switches, creating gaps in coverage.

---

## 8.22 Chapter Summary

This chapter introduced the Agentic Lifecycle Conformance Score (ALCS), a framework for measuring whether systems define the lifecycle objects required for agentic responsibility compliance. ALCS evaluates whether a system can express the sixteen Missing Regulatory Objects introduced in Chapter 6, translating regulatory abstractions into measurable system capabilities. ALCS is not a legal compliance certification. It is an analytical framework for comparing system capabilities against lifecycle responsibility requirements.

The fifteen ALCS dimensions operationalize the sixteen MROs into system features that can be evaluated, scored, and improved. Human-role-to-MAS responsibility mapping ensures that human organizational accountability is explicitly linked to agent execution responsibilities. Delegated authority boundaries distinguish technical permission from business authority. Agent role definitions carry governance semantics beyond execution personas. Accepted outcome compliance separates execution completion from outcome acceptance. Tool-action liability boundaries record accountability for consequential actions. Responsibility transfer semantics make agent handoffs auditable. Authority drift detection prevents unauthorized authority transitions. MAS evidence partitioning enables selective disclosure and reconstruction. Cross-project reuse compliance enforces revalidation when workflows move between contexts. Privacy lifecycle mapping tracks personal data flows across agents, tools, and memory. Privacy-preserving validation supports external verification without raw data disclosure. Evidence minimization limits retention to governance purposes. Data subject rights reconciliation balances erasure requests with evidence obligations. Processor chain tracking maintains visibility into third-party data handling. Vendor substitution conformance ensures that optionality does not become governance drift.

ALCS complements RCCS-T and RCCS-M by measuring a different layer. RCCS-T evaluates traditional regulatory compliance coverage. RCCS-M evaluates whether that coverage can be expressed through Missing Regulatory Objects. ALCS evaluates agentic lifecycle conformance: whether a system provides mature lifecycle objects that make agentic responsibility auditable, provable, and transferable across agents, humans, tools, projects, vendors, and organizational boundaries. A system can have strong RCCS-T and weaker ALCS, meaning it provides strong regulatory compliance coverage while lacking deeper lifecycle responsibility semantics for multi-agent work. A system can also have stronger RCCS-M and ALCS because it defines lifecycle responsibility semantics while lacking productized governance-platform coverage. Chapter 9 explains why the three-profile view is primary and any composite calculation is secondary.
