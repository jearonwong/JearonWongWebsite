# Chapter 7: Regulatory Compliance Coverage Score (RCCS)

**Version:** v0.3.2-FRC-R3

---

## 7.0 Chapter Overview

This chapter defines the two RCCS scoring lenses used in this white paper:

- **RCCS-T — Traditional Regulatory Compliance Coverage Score** measures how strongly a system covers existing regulatory and governance requirements such as risk management, data governance, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring.
- **RCCS-M — MRO-Adjusted Regulatory Compliance Coverage Score** measures whether those same regulatory obligations can be represented as Missing Regulatory Objects and lifecycle responsibility semantics.

RCCS-T and RCCS-M use the **same 10 dimension names and weights**. They differ in scoring lens. RCCS-T asks whether the system provides traditional governance and control coverage. RCCS-M asks whether the same regulatory obligation is expressed as inspectable, replayable, evidence-linked lifecycle responsibility objects.

RCCS is an analytical framework for comparing system capabilities against regulatory ideals. It is not a legal compliance certification, not a conformity assessment, and not a regulatory approval. It is a structured method for evaluating whether a system provides the primitives, controls, evidence mechanisms, and lifecycle objects that existing regulation and agentic/MAS governance increasingly require.

This chapter defines the ten RCCS dimensions, the RCCS-M adjustment test, the separate 0-5 scoring lens for RCCS-T and RCCS-M, evidence requirements for each lens, and the shared calculation method. Compact dimension rubrics begin in section 7.11; Appendix E provides the detailed RCCS-T baseline rubrics and RCCS-M adjustment matrix.

---

## 7.1 Why Traditional RCCS Is Necessary but Insufficient

RCCS-T measures how strongly a system covers existing regulatory and governance requirements. It evaluates whether a system provides the capabilities, controls, and evidence mechanisms that frameworks such as the EU AI Act, GDPR, NIST AI RMF, ISO/IEC 42001, and Singapore MGF increasingly require.

RCCS-T and RCCS-M are not legal compliance scores. A high RCCS-T or RCCS-M score does not mean a system is legally compliant. A low score does not mean a system is non-compliant. Legal compliance depends on organizational practice, deployment context, jurisdiction, risk class, and how the system is used. RCCS measures system capability, not organizational conformance.

The purpose of RCCS-T is to translate regulatory abstractions into measurable system capabilities. Regulation requires risk management, but what does that mean in a system? RCCS-T defines ten dimensions that operationalize regulatory requirements into system features that can be evaluated, compared, and improved. It is a bridge between regulatory language and engineering implementation.

Traditional coverage is necessary but insufficient for agentic and multi-agent systems. A governance dashboard, audit log, or approval workflow can support RCCS-T while still failing to express who held responsibility, what authority was delegated, which agent or tool acted, what evidence was partitioned, whether the outcome was accepted, and how incident or substitution closure was proven. High RCCS-T does not automatically imply high RCCS-M.

RCCS-M adds the MRO adjustment. It asks a second question: can the regulatory coverage captured by RCCS-T be expressed through lifecycle responsibility objects that agentic systems can emit, inspect, replay, and validate? A governance dashboard may support RCCS-T. An authority boundary object, accepted outcome record, partitioned evidence chain, and substitution conformance record support RCCS-M.

The distinction matters because enterprise governance platforms may show strong RCCS-T coverage through conventional dashboards, policies, documentation, controls, and monitoring. Lifecycle protocol systems may show stronger RCCS-M where they define explicit responsibility, authority, evidence, acceptance, privacy, substitution, and closure objects. This is a score-delta interpretation, not a product ranking.

---

## 7.2 RCCS-T Dimensions

RCCS-T and RCCS-M share the same 10 dimension names and weights. The dimensions correspond to recurring regulatory and governance requirements. The scoring lenses differ: RCCS-T evaluates traditional governance/control coverage, while RCCS-M evaluates whether that coverage is expressible through lifecycle responsibility objects.

The ten shared RCCS dimensions are:

1. **Risk Management (20%)** - Does the system support risk identification, assessment, and mitigation across the AI lifecycle?
2. **Data Governance (10%)** - Does the system track data lineage, quality, and lifecycle management?
3. **Documentation (10%)** - Does the system produce and maintain required technical documentation?
4. **Record-Keeping (10%)** - Does the system maintain audit trails and evidence records?
5. **Transparency (10%)** - Does the system provide explainability and disclosure mechanisms?
6. **Human Oversight (15%)** - Does the system support human review, approval, and intervention?
7. **Security (5%)** - Does the system implement security controls and access management?
8. **Accountability (5%)** - Does the system assign responsibility and track decisions?
9. **Contestability (5%)** - Does the system support dispute and appeal mechanisms?
10. **Monitoring (10%)** - Does the system support continuous monitoring and incident detection?

The following table summarizes the ten dimensions, their regulatory sources, core questions, and weights. The table is the baseline for both RCCS-T and RCCS-M; section 7.4 explains the MRO adjustment test that changes the RCCS-M raw score.

**Table T-07-01: RCCS Dimensions Summary**

| Dimension | Regulatory Source | Core Question | Weight |
|-----------|-------------------|---------------|--------|
| Risk Management | EU AI Act Art. 9, NIST AI RMF Govern/Map/Measure/Manage, ISO/IEC 42001 | Does the system support risk identification, assessment, and mitigation across the AI lifecycle? | 20% |
| Data Governance | GDPR Art. 5, ISO/IEC 42001, NIST AI RMF Map | Does the system track data lineage, quality, and lifecycle management? | 10% |
| Documentation | EU AI Act Art. 11, ISO/IEC 42001, NIST AI RMF Govern | Does the system produce and maintain required technical documentation? | 10% |
| Record-Keeping | EU AI Act Art. 12, GDPR Art. 30, ISO/IEC 42001 | Does the system maintain audit trails and evidence records? | 10% |
| Transparency | EU AI Act Art. 13, GDPR Art. 5, NIST AI RMF Govern | Does the system provide explainability and disclosure mechanisms? | 10% |
| Human Oversight | EU AI Act Art. 14, Singapore MGF Agentic AI, NIST AI RMF Manage | Does the system support human review, approval, and intervention? | 15% |
| Security | EU AI Act Art. 15, ISO/IEC 42001, NIST AI RMF Manage | Does the system implement security controls and access management? | 5% |
| Accountability | GDPR Art. 5, ISO/IEC 42001, Singapore MGF Agentic AI | Does the system assign responsibility and track decisions? | 5% |
| Contestability | EU AI Act recitals, GDPR Art. 22, Singapore MGF Agentic AI | Does the system support dispute and appeal mechanisms? | 5% |
| Monitoring | EU AI Act Art. 72, NIST AI RMF Manage, ISO/IEC 42001 | Does the system support continuous monitoring and incident detection? | 10% |

---

## 7.3 RCCS-M: MRO-Adjusted Interpretation of RCCS

RCCS-M measures whether traditional regulatory obligations can be represented as Missing Regulatory Objects and lifecycle responsibility semantics. Operationally, RCCS-M asks whether a regulatory obligation is represented as inspectable, replayable, evidence-linked lifecycle responsibility objects.

The MRO adjustment changes what counts as strong support. For example:

- Risk management becomes stronger when risks are linked to lifecycle risk objects, authority boundaries, mitigations, monitoring evidence, and incident closure.
- Human oversight becomes stronger when approval is bound to human-role responsibility, delegated authority, escalation, and accepted outcome authority.
- Record-keeping becomes stronger when logs become partitioned evidence chains tied to role, agent/tool action, authority boundary, privacy boundary, and accepted outcome.
- Monitoring becomes stronger when runtime observation includes authority drift, substitution conformance, privacy lifecycle events, and incident/dispute/remediation closure.

RCCS-M is an author analytical, forward-looking model. It is not current law, legal compliance proof, certification, a regulator-approved benchmark, vendor ranking, or procurement recommendation.

---

## 7.4 Dimension Mapping: RCCS-T Dimension to MRO Adjustment Test

**Table T-07-01A: RCCS-T Dimension to RCCS-M MRO Adjustment Test**

| RCCS-T Dimension | Traditional RCCS-T Test | RCCS-M Adjustment Question | Related MROs | Required MRO Evidence | Negative Control |
|------------------|-------------------------|----------------------------|--------------|-----------------------|------------------|
| RCCS-01 Risk Management | Does the system identify, assess, mitigate, and monitor AI risks? | Are risks linked to lifecycle authority, evidence, mitigation, monitoring, and closure objects? | MRO-02, MRO-07, MRO-08, MRO-16 | Risk object, authority boundary, mitigation record, evidence pointer, monitoring/closure record | Risk register without lifecycle linkage |
| RCCS-02 Data Governance | Does the system govern data quality, lineage, access, retention, and lifecycle handling? | Are data flows mapped across agents, tools, memory, evidence stores, privacy boundaries, and reuse contexts? | MRO-08, MRO-10, MRO-12, MRO-13, MRO-14 | Lifecycle data-flow map, selective disclosure profile, retention/erasure policy, processor chain record | Dataset lineage without agent/runtime lifecycle mapping |
| RCCS-03 Documentation | Does the system produce and maintain technical and governance documentation? | Does documentation bind intent, plan, authority, role, evidence, accepted outcome, and substitution context? | MRO-01, MRO-02, MRO-04, MRO-08, MRO-15 | Versioned lifecycle documentation, object schema, trace manifest, substitution record | Static model card without lifecycle responsibility objects |
| RCCS-04 Record-Keeping | Does the system record relevant events, logs, and audit trails? | Are records partitioned by role, authority boundary, agent/tool action, evidence pointer, privacy boundary, and accepted outcome? | MRO-08, MRO-12, MRO-13, MRO-16 | Partitioned evidence chain, evidence pointer, disclosure policy, closure record | Generic logs without lifecycle responsibility partitioning |
| RCCS-05 Transparency | Does the system disclose purpose, behavior, limitations, and relevant decision factors? | Can disclosure be tied to lifecycle evidence, role, authority, accepted outcome, privacy boundary, and dispute path? | MRO-04, MRO-08, MRO-11, MRO-12, MRO-16 | Evidence-linked explanation, disclosure profile, redacted validation pack, dispute replay record | Explanation UI without lifecycle evidence or selective disclosure |
| RCCS-06 Human Oversight | Does the system support human review, approval, intervention, and escalation? | Is oversight bound to human-role responsibility, delegated scope, escalation, and accepted outcome authority? | MRO-01, MRO-02, MRO-03, MRO-04, MRO-07 | Human-role map, authority grant, escalation path, acceptance state, drift alert | Generic approve/reject UI without responsibility or authority scope |
| RCCS-07 Security | Does the system implement access, authentication, authorization, and security monitoring controls? | Are security controls linked to delegated authority, tool-action liability, lifecycle evidence, and privacy-limited disclosure? | MRO-02, MRO-05, MRO-08, MRO-10, MRO-12 | Delegated authority record, tool-action liability object, evidence partition, privacy boundary | Access control treated as delegated authority proof |
| RCCS-08 Accountability | Does the system assign roles, responsibilities, policies, and escalation paths? | Are accountability relationships represented as human/agent responsibility mappings, transfer records, and accepted outcome states? | MRO-01, MRO-03, MRO-04, MRO-05, MRO-06 | Responsibility map, agent role boundary, transfer record, acceptance record, liability record | User role assignment without responsibility continuity |
| RCCS-09 Contestability | Does the system support dispute, appeal, investigation, correction, and remediation workflows? | Can challenged outcomes be replayed with evidence, reviewer role, accepted/rejected state, remediation action, and closure? | MRO-04, MRO-08, MRO-12, MRO-13, MRO-16 | Dispute replay pack, evidence manifest, remediation record, closure acceptance | Customer support ticket without lifecycle replay or closure |
| RCCS-10 Monitoring | Does the system monitor performance, drift, incidents, and continuous improvement? | Does monitoring detect authority drift, lifecycle drift, substitution change, privacy events, incidents, and remediation closure? | MRO-07, MRO-09, MRO-10, MRO-15, MRO-16 | Drift event, reuse/revalidation record, privacy event record, substitution conformance record, incident closure | General observability dashboard without responsibility-object monitoring |

---

## 7.5 Scoring Criteria: How 0-5 Differs Under RCCS-T and RCCS-M

RCCS-T and RCCS-M use the same 0-5 raw score range, but the meaning of each raw score differs because they use different scoring lenses.

**Table T-07-02A: RCCS-T vs RCCS-M 0-5 Scoring Lens**

| Raw Score | RCCS-T Meaning | RCCS-M Meaning | Evidence Difference | Negative Control |
|-----------|----------------|----------------|---------------------|------------------|
| 0 | No visible traditional coverage | No lifecycle object expression | No credible evidence for either lens | Absence of public feature or object support |
| 1 | Policy, concept, or marketing mention only | MRO concept implied but not represented as an object or evidence artifact | RCCS-T may rely on weak public mention; RCCS-M needs at least identifiable lifecycle-object semantics | Governance language without implementation or object evidence |
| 2 | Partial feature or control support | Partial lifecycle object support, mostly implementer-built or inferred | RCCS-T can count partial controls; RCCS-M requires a plausible but incomplete mapping to MRO evidence | Adjacent feature treated as lifecycle object |
| 3 | Documented operational control | Documented object-level mapping for some lifecycle responsibility objects | RCCS-T requires official feature/workflow documentation; RCCS-M requires documented role, authority, evidence, acceptance, privacy, substitution, or closure mapping | Workflow support without explicit responsibility semantics |
| 4 | Strong operational control with evidence | Strong lifecycle object coverage with evidence pointers and responsibility/authority binding | RCCS-T requires strong control evidence; RCCS-M requires object records, schemas, protocol evidence, or replayable artifacts | Strong dashboard or log export without object partitioning |
| 5 | Comprehensive traditional governance control with strong evidence | Inspectable, replayable, evidence-linked lifecycle responsibility object coverage across the relevant dimension | RCCS-T can be satisfied by comprehensive implementation or audit evidence; RCCS-M requires implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts showing lifecycle object conformance | Legal text or policy baseline treated as implementation proof |

Legal text may establish a regulatory baseline but does not by itself prove RCCS-T implementation or RCCS-M lifecycle-object expression.

---

## 7.6 Evidence Requirements: Traditional Evidence vs MRO Evidence

RCCS-T evidence and RCCS-M evidence are not the same.

**RCCS-T evidence** may include dashboards, policies, documentation, risk workflows, audit logs, oversight features, control reports, monitoring views, governance console records, and official product documentation showing traditional governance/control coverage.

**RCCS-M evidence** should show lifecycle responsibility object expression. Examples include authority boundary records, human-role responsibility maps, accepted outcome states, partitioned evidence chains, privacy lifecycle maps, substitution conformance records, incident/dispute/remediation closure records, replayable lifecycle traces, protocol schemas, object manifests, or validated operational artifacts.

Official product documentation may support RCCS-T strongly while supporting RCCS-M only indirectly. When lifecycle responsibility objects are not directly documented, RCCS-M scoring should be marked as source-qualified or L5 author analytical inference rather than treated as source-bound proof.

---

## 7.7 Calculation Method

RCCS-T and RCCS-M use the same dimension weights and the same normalized dimension formula:

**Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier**

RCCS-T raw scores and RCCS-M raw scores are assigned separately. The formula is shared; the scoring lens differs. RCCS-T raw scores evaluate traditional governance/control coverage. RCCS-M raw scores evaluate MRO-adjusted lifecycle responsibility object expression.

The evidence multiplier adjusts each dimension score based on evidence quality:

- **L1:** 1.00
- **L2:** 0.85
- **L3:** 0.75
- **L4:** 0.55
- **L5:** 0.35

Weights are fixed for this version of the white paper:
- Risk Management: 20%
- Human Oversight: 15%
- Data Governance: 10%
- Documentation: 10%
- Record-Keeping: 10%
- Transparency: 10%
- Monitoring: 10%
- Security: 5%
- Accountability: 5%
- Contestability: 5%

Weights are fixed for this version of the white paper. Future versions may adjust weights based on regulatory evolution or stakeholder feedback.

RCCS-T and RCCS-M should not be averaged invisibly. The preferred publication-facing display is the three-profile view: RCCS-T, RCCS-M, and ALCS. Optional composite views are defined in Chapter 9 and remain secondary.

The following table illustrates the calculation formula.

**Table T-07-02: RCCS Dimension Score Calculation Formula**

| Component | Formula | Example |
|-----------|---------|---------|
| Raw Score | 0-5 scale based on capability strength | Risk Management = 4 |
| Evidence Multiplier | L1-L5 multiplier | L2 evidence = 0.85 |
| Dimension Score | (Raw Score / 5) × 100 × Evidence Multiplier | (4 / 5) × 100 × 0.85 = 68.0 |
| Framework Score | Aggregate of adjusted RCCS dimension scores | RCCS-T or RCCS-M framework score |
| Optional Composite View | Secondary calculation using RCCS-T or RCCS-M with ALCS | See Chapter 9 |

This calculation method is used for RCCS-T, RCCS-M, and ALCS. The difference is the evaluation lens: RCCS-T asks about traditional regulatory coverage, RCCS-M asks about MRO-adjusted coverage, and ALCS asks about lifecycle conformance maturity.

---

## 7.8 Boundary and Negative Controls

RCCS-T and RCCS-M are analytical scoring frameworks, not legal compliance scores. This boundary must be understood clearly to avoid misinterpretation.

**What RCCS is:**
- An analytical framework for comparing system capabilities against regulatory ideals
- A structured method for evaluating whether a system provides governance primitives and whether those primitives can be expressed through lifecycle responsibility objects
- A tool for buyers, auditors, and governance teams to assess system readiness
- A bridge between regulatory language and engineering implementation

**What RCCS is not:**
- A legal compliance certification or conformity assessment
- A regulatory approval or endorsement
- A guarantee that a system meets all legal obligations
- A substitute for legal counsel, compliance review, or risk assessment

**Key boundary principles:**

1. **High RCCS-T or RCCS-M score does NOT mean legal compliance.** A system may score well while the organization using it fails to comply with legal obligations due to deployment gaps, policy weaknesses, incomplete adoption, or jurisdictional differences.

2. **High RCCS-T does NOT mean lifecycle responsibility conformance.** Traditional governance coverage can be strong while authority, responsibility, evidence, privacy, substitution, and closure objects remain weak.

3. **High RCCS-M does NOT mean legal compliance or certification.** RCCS-M is author analytical and forward-looking; it is not current law, regulator-approved, a procurement benchmark, or a legal compliance proof.

4. **High ALCS does NOT mean regulatory compliance.** ALCS evaluates lifecycle conformance maturity; RCCS-T and RCCS-M still need to be read separately.

5. **Low RCCS score does NOT mean non-compliance.** A system may score lower on RCCS while the organization achieves compliance through compensating controls, manual processes, or alternative governance mechanisms.

6. **RCCS measures system capability, not organizational practice.** A system may provide strong governance primitives while the organization fails to use them. Conversely, an organization may achieve strong governance through processes that are not reflected in system capabilities.

7. **RCCS is context-independent, but compliance is context-dependent.** RCCS evaluates system capabilities without regard to deployment context, risk class, jurisdiction, or use case. Legal compliance depends on all of these factors.

The purpose of this boundary statement is to prevent over-claiming. RCCS-T and RCCS-M are useful analytical tools, but they are not compliance certifications. Organizations must not rely on RCCS scores as proof of legal compliance. Buyers must not treat high RCCS scores as a substitute for due diligence, legal review, or risk assessment. RCCS-M must also not be presented as a regulator-approved benchmark or official standard.

---

## 7.9 Rubric Tables / Appendix E Bridge

The following sections (7.11 through 7.20) detail each RCCS dimension. Each dimension section includes:

- **Regulatory basis** - Which frameworks and requirements inform the dimension
- **Core question** - What the dimension evaluates
- **Scoring criteria** - How to apply the 0-5 raw scale to system capabilities
- **RCCS-M adjustment note** - How the dimension changes when evaluated through lifecycle responsibility objects
- **System mapping guidance** - How to evaluate whether a system supports the dimension

The compact chapter rubrics preserve the traditional RCCS-T baseline and add RCCS-M adjustment notes where practical. Appendix E contains the detailed RCCS-T rubrics plus the reusable RCCS-M adjustment matrix. Appendix E does not duplicate every RCCS-M rubric row; it provides the matrix that evaluators should apply to the ten shared dimensions.

## 7.10 What RCCS-T / RCCS-M Do Not Prove

RCCS-T and RCCS-M do not prove legal compliance, certification, regulatory approval, audit success, deployment readiness, product quality, market leadership, or procurement suitability. They also do not replace ALCS. RCCS-T names traditional regulatory coverage. RCCS-M names MRO-adjusted regulatory coverage. ALCS names lifecycle conformance maturity.

Chapter 9 explains how to interpret score deltas across RCCS-T, RCCS-M, and ALCS. A system with high RCCS-T and lower RCCS-M may have strong traditional governance surfaces but weaker lifecycle object expression. A system with lower RCCS-T and higher RCCS-M/ALCS may have strong lifecycle semantics but less productized governance-platform coverage. This difference is an analytical profile, not a ranking.

---

## 7.11 RCCS-01: Risk Management

### Regulatory Basis

Risk management is the highest-weighted RCCS dimension because it appears as a core requirement across all major frameworks. EU AI Act Article 9 requires providers of high-risk AI systems to establish, implement, document, and maintain a risk management system. NIST AI RMF 1.0 structures its entire framework around four risk management functions: Govern, Map, Measure, and Manage. ISO/IEC 42001 requires organizations to establish and maintain processes for identifying, analyzing, evaluating, and treating AI-related risks throughout the system lifecycle.

These frameworks converge on a shared expectation: AI systems must support continuous risk identification, assessment, mitigation, and monitoring. Risk management is not a one-time activity performed during model development. It is a lifecycle discipline that must be maintained across deployment, operation, updates, and decommissioning.

### Core Question

**Does the system support risk identification, assessment, mitigation, and continuous monitoring across the AI lifecycle?**

### RCCS-M Adjustment Note

RCCS-M adjustment: are risks linked to lifecycle authority, evidence, mitigation, monitoring, and incident/dispute/remediation closure objects rather than only stored as a risk register or dashboard item?

### Scoring Rubric

**Table T-07-03: RCCS-01 Risk Management Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of risk management capability | No risk management features documented or observable |
| 1 | Conceptual support | Documentation mentions risk management but provides no implementation primitives |
| 2 | Partial implementation | Risk assessment tools exist but are limited to specific phases (e.g., model development only) or lack integration with execution controls |
| 3 | Moderate implementation | Risk registers, assessment workflows, and mitigation tracking exist; some gaps in continuous monitoring or cross-lifecycle integration |
| 4 | Strong implementation | Comprehensive risk lifecycle support including identification, assessment, mitigation tracking, continuous monitoring, and risk-based controls integrated across all system phases |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

When evaluating a system for risk management capability, look for evidence of four core functions: risk identification, risk assessment, risk mitigation, and continuous monitoring.

Risk identification requires mechanisms for discovering and documenting risks. Strong systems provide risk registers, risk taxonomies, and workflows for capturing risks from multiple sources including model evaluation, deployment review, incident reports, and external threat intelligence. Weak systems rely on manual documentation without structured capture mechanisms.

Risk assessment requires methods for analyzing and prioritizing risks. Look for risk scoring frameworks, impact and likelihood matrices, risk classification schemes, and decision workflows that route high-risk scenarios to appropriate review or mitigation. Systems that provide only generic risk labels without assessment workflows score lower.

Risk mitigation requires tracking and verification of risk controls. Strong systems link identified risks to specific mitigation measures, track implementation status, and verify that controls are active before deployment. Systems that document mitigations without enforcement or verification score lower.

Continuous monitoring requires runtime risk detection and response. Look for monitoring dashboards, alerting mechanisms, drift detection, and incident response workflows that connect runtime observations back to the risk register. Systems that perform risk assessment only at design time without runtime monitoring score lower.

### Common Gaps

The most common gap is risk assessment that exists for model development but does not extend to agent execution, tool use, or multi-agent handoffs. Organizations may have strong ML risk management practices while lacking risk controls for agentic workflows. Another common gap is risk registers that document risks without linking them to runtime controls or monitoring, creating a disconnect between risk identification and risk mitigation.

---

## 7.12 RCCS-02: Data Governance

### Regulatory Basis

Data governance requirements stem from GDPR Article 5, which establishes principles for processing personal data including data quality, purpose limitation, and data minimization. EU AI Act Article 10 requires providers to ensure that training, validation, and testing datasets are subject to appropriate data governance and management practices. ISO/IEC 42001 requires organizations to establish and maintain data management processes covering data quality, data lifecycle, and data provenance.

For agentic systems, data governance extends beyond training datasets to include runtime data flows: retrieval results, tool payloads, memory contents, agent handoff data, and evidence records. Data governance must track what data enters the system, how it flows through agents and tools, where it is stored, and when it is deleted.

### Core Question

**Does the system track data lineage, quality, lifecycle, and provenance across agent execution?**

### RCCS-M Adjustment Note

RCCS-M adjustment: are data flows mapped across agents, tools, memory, evidence stores, privacy boundaries, reuse contexts, retention rules, and processor/subprocessor chains?

### Scoring Rubric

**Table T-07-04: RCCS-02 Data Governance Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of data governance capability | No data tracking features documented or observable |
| 1 | Conceptual support | Documentation mentions data governance but provides no implementation primitives |
| 2 | Partial implementation | Data catalogs or lineage tracking exist but are limited to training data or specific data sources; runtime data flows are not tracked |
| 3 | Moderate implementation | Data lineage, quality metrics, and lifecycle management exist for most data flows; some gaps in agent-to-agent data tracking or memory system governance |
| 4 | Strong implementation | Comprehensive data governance covering training data, runtime retrieval, tool payloads, memory contents, agent handoffs, and evidence records with full lineage, quality metrics, and lifecycle management |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Data governance evaluation requires examining four capabilities: data cataloging, lineage tracking, quality management, and lifecycle controls.

Data cataloging requires inventories of data sources, datasets, and data flows. Strong systems maintain catalogs that identify what data is available, where it originates, what sensitivity classifications apply, and what usage restrictions exist. Look for data catalogs that cover not only training datasets but also runtime data sources such as retrieval systems, tool APIs, and memory stores.

Lineage tracking requires the ability to trace data from source to consumption. Evaluate whether the system can show where a piece of data originated, which agents accessed it, which tools processed it, and where it was stored or transmitted. Systems that track lineage only for training pipelines but not for runtime agent execution score lower.

Quality management requires metrics and controls for data accuracy, completeness, consistency, and timeliness. Look for data quality dashboards, validation rules, and quality gates that prevent low-quality data from entering critical workflows. Systems that assume data quality without measurement or enforcement score lower.

Lifecycle controls require policies and mechanisms for data retention, archival, and deletion. Evaluate whether the system enforces retention periods, supports data subject deletion requests, and can prove that data was deleted when required. Systems that retain data indefinitely without lifecycle policies score lower.

### Common Gaps

The most common gap is data governance that covers training data but not runtime data flows. Organizations may have strong data catalogs and lineage tracking for ML pipelines while lacking visibility into what data agents retrieve, process, and store during execution. Another common gap is data quality controls that apply to databases but not to agent memory systems or tool payloads, creating blind spots in data governance coverage.

---

## 7.13 RCCS-03: Documentation

### Regulatory Basis

Documentation requirements are established in EU AI Act Article 11, which requires providers of high-risk AI systems to draw up technical documentation that demonstrates compliance with regulatory requirements. ISO/IEC 42001 requires organizations to maintain documented information necessary for the effectiveness of the AI management system. NIST AI RMF Govern function includes documentation of AI system characteristics, intended use, and risk management decisions.

Documentation is not merely a compliance artifact. It is the primary mechanism for communicating system capabilities, limitations, and governance controls to deployers, operators, auditors, and regulators. For agentic systems, documentation must cover not only model characteristics but also agent roles, authority boundaries, tool permissions, and lifecycle controls.

### Core Question

**Does the system produce and maintain required technical documentation across the system lifecycle?**

### RCCS-M Adjustment Note

RCCS-M adjustment: does documentation bind intent, plan, authority, role, evidence, accepted outcome, privacy boundary, and substitution context as lifecycle responsibility records?

### Scoring Rubric

**Table T-07-05: RCCS-03 Documentation Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of documentation capability | No documentation features documented or observable |
| 1 | Conceptual support | Documentation mentions documentation requirements but provides no automated generation or maintenance primitives |
| 2 | Partial implementation | Model cards or system documentation exist but are manually maintained and not version-controlled or linked to deployments |
| 3 | Moderate implementation | Automated documentation generation exists for models and some system components; some gaps in agent role documentation, tool documentation, or deployment linkage |
| 4 | Strong implementation | Comprehensive automated documentation covering models, agents, tools, authority boundaries, deployment configurations, and change history with version control and deployment linkage |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Documentation evaluation requires examining four capabilities: documentation generation, version control, deployment linkage, and coverage completeness.

Documentation generation requires mechanisms for producing required documentation artifacts. Look for automated generation of model cards, system cards, agent role definitions, tool specifications, and deployment documentation. Systems that rely entirely on manual documentation score lower because manual processes are error-prone and difficult to maintain.

Version control requires tracking documentation changes over time. Evaluate whether documentation is version-controlled alongside code and configuration, whether changes are linked to specific releases or deployments, and whether historical documentation can be retrieved for audit purposes. Systems that maintain documentation in separate systems without version control score lower.

Deployment linkage requires connecting documentation to specific deployed instances. Strong systems can show which documentation version applies to which deployment, enabling auditors to verify that deployed systems match their documentation. Systems that maintain documentation separately from deployment records score lower.

Coverage completeness requires documentation for all system components that affect governance. For agentic systems, this includes not only model documentation but also agent role definitions, authority boundaries, tool permissions, memory system configurations, and human oversight mechanisms. Systems that document models but not agent governance primitives score lower.

### Common Gaps

The most common gap is documentation that exists but is not version-controlled or linked to deployments. Organizations may maintain model cards and system documentation while lacking the ability to prove which documentation version applied to a specific deployment at a specific time. Another common gap is documentation that covers models but not agent roles, tool permissions, or authority boundaries, leaving governance controls undocumented.

---

## 7.14 RCCS-04: Record-Keeping

### Regulatory Basis

Record-keeping requirements are established in EU AI Act Article 12, which requires providers and deployers of high-risk AI systems to keep logs automatically generated by their systems. GDPR Article 30 requires controllers and processors to maintain records of processing activities. ISO/IEC 42001 requires organizations to maintain records necessary to demonstrate conformity with requirements.

Record-keeping differs from documentation in that records capture what actually happened during system operation, while documentation describes what the system is designed to do. For agentic systems, records must capture agent decisions, tool invocations, human approvals, authority checks, and outcome acceptance events.

### Core Question

**Does the system maintain audit trails and evidence records across agent execution?**

### RCCS-M Adjustment Note

RCCS-M adjustment: are records partitioned by human/agent role, authority boundary, agent/tool action, evidence pointer, privacy boundary, accepted outcome, and closure state rather than stored as generic logs?

### Scoring Rubric

**Table T-07-06: RCCS-04 Record-Keeping Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of record-keeping capability | No logging or audit trail features documented or observable |
| 1 | Conceptual support | Documentation mentions logging but provides no structured record-keeping primitives |
| 2 | Partial implementation | Execution logs exist but are not structured for audit purposes; no evidence retention policy or tamper-evident storage |
| 3 | Moderate implementation | Structured audit trails exist for most lifecycle events; some gaps in evidence retention policies, tamper-evident storage, or cross-agent record linkage |
| 4 | Strong implementation | Comprehensive tamper-evident audit trails covering all lifecycle events with structured records, evidence retention policies, integrity verification, and cross-agent record linkage |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Record-keeping evaluation requires examining four capabilities: structured logging, audit trail completeness, tamper-evident storage, and retention policies.

Structured logging requires records that are machine-readable and queryable. Look for structured log formats, consistent schemas, and query interfaces that allow auditors to reconstruct specific events or workflows. Systems that produce only unstructured text logs score lower because they are difficult to audit and analyze.

Audit trail completeness requires capturing all governance-relevant events. For agentic systems, this includes agent decisions, tool invocations, human approvals, authority checks, risk assessments, data accesses, and outcome acceptance events. Evaluate whether the system captures these events consistently and whether records can be linked across agents and lifecycle phases. Systems that log execution events but not governance events score lower.

Tamper-evident storage requires mechanisms to detect unauthorized modification of records. Look for cryptographic integrity verification, append-only storage, or blockchain-based audit trails. Systems that store logs in mutable storage without integrity verification score lower because records cannot be trusted in disputes.

Retention policies require defined periods for retaining different record types. Evaluate whether the system enforces retention periods, supports deletion of expired records, and can prove that records were retained for the required period. Systems that retain all records indefinitely or delete records without policy enforcement score lower.

### Common Gaps

The most common gap is logs that exist but are not structured for audit purposes. Organizations may have extensive execution logs while lacking the ability to reconstruct governance events such as authority checks, human approvals, or outcome acceptance. Another common gap is logs stored in mutable systems without integrity verification, making it impossible to prove that records were not altered after the fact.

---

## 7.15 RCCS-05: Transparency

### Regulatory Basis

Transparency requirements are established in EU AI Act Article 13, which requires providers to design and develop high-risk AI systems to be sufficiently transparent to enable deployers to interpret system output and use it appropriately. GDPR Articles 13-14 require controllers to provide information to data subjects about automated decision-making. ISO/IEC 42001 requires organizations to establish transparency mechanisms appropriate to the AI system's risk level and context.

Transparency serves multiple purposes: enabling deployers to understand system behavior, allowing users to challenge decisions, and supporting auditors in verifying compliance. For agentic systems, transparency must extend beyond model explainability to include agent decision rationale, tool selection justification, and authority boundary explanations.

### Core Question

**Does the system provide explainability and disclosure mechanisms for agent decisions and outcomes?**

### RCCS-M Adjustment Note

RCCS-M adjustment: can explanations and disclosures be tied to lifecycle evidence, role, authority, accepted outcome, privacy boundary, selective disclosure, and dispute path?

### Scoring Rubric

**Table T-07-07: RCCS-05 Transparency Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of transparency capability | No explainability or disclosure features documented or observable |
| 1 | Conceptual support | Documentation mentions transparency but provides no implementation primitives |
| 2 | Partial implementation | Model explainability tools exist but do not extend to agent decisions, tool selection, or authority boundaries |
| 3 | Moderate implementation | Explainability mechanisms exist for models and some agent decisions; some gaps in tool selection rationale, authority boundary explanations, or user-facing disclosure |
| 4 | Strong implementation | Comprehensive transparency covering model outputs, agent decision rationale, tool selection justification, authority boundaries, and user-facing disclosure mechanisms |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Transparency evaluation requires examining four capabilities: model explainability, agent decision rationale, disclosure mechanisms, and user-facing transparency.

Model explainability requires mechanisms for explaining model outputs. Look for feature importance, attention visualization, counterfactual explanations, or other explainability techniques. However, model explainability alone is insufficient for agentic systems. Evaluate whether explainability extends to agent-level decisions.

Agent decision rationale requires explanations for why an agent chose a particular action, tool, or delegation path. Strong systems capture and expose the reasoning behind agent decisions, including which information was considered, which constraints were applied, and which alternatives were rejected. Systems that provide only execution traces without decision rationale score lower.

Disclosure mechanisms require interfaces for communicating system capabilities and limitations to deployers and users. Look for system cards, capability statements, limitation disclosures, and risk warnings. Evaluate whether disclosures are specific and actionable rather than generic disclaimers.

User-facing transparency requires mechanisms for informing users when they are interacting with an AI system and what decisions are being made. For agentic systems, this includes disclosing when agents are acting autonomously, when human review is required, and how users can challenge decisions. Systems that operate without user awareness score lower.

### Common Gaps

The most common gap is model explainability that does not extend to agent decision-making. Organizations may have strong explainability tools for model outputs while lacking visibility into why an agent selected a particular tool, delegated to another agent, or escalated to human review. Another common gap is transparency mechanisms that exist for developers but not for end users, leaving users unable to understand or challenge agent decisions.

---

## 7.16 RCCS-06: Human Oversight

### Regulatory Basis

Human oversight requirements are established in EU AI Act Article 14, which requires high-risk AI systems to be designed and developed to enable effective oversight by natural persons. ISO/IEC 42001 requires organizations to establish human oversight mechanisms appropriate to the AI system's risk level. NIST AI RMF Manage function includes human-AI configuration as a key practice. Singapore MGF for Agentic AI emphasizes making humans meaningfully accountable for agentic system outcomes.

Human oversight is the second-highest weighted RCCS dimension because it is the primary mechanism for ensuring that AI systems remain under human control. For agentic systems, oversight must be designed into the system architecture, not merely added as a review step after execution.

### Core Question

**Does the system support human review, approval, intervention, and escalation across agent execution?**

### RCCS-M Adjustment Note

RCCS-M adjustment: is oversight bound to human-role responsibility, delegated authority scope, escalation path, drift detection, and accepted outcome authority rather than only an approve/reject UI?

### Scoring Rubric

**Table T-07-08: RCCS-06 Human Oversight Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of human oversight capability | No human review or intervention features documented or observable |
| 1 | Conceptual support | Documentation mentions human oversight but provides no implementation primitives |
| 2 | Partial implementation | Human approval workflows exist but are not mapped to responsibility boundaries or risk levels; no intervention or escalation mechanisms |
| 3 | Moderate implementation | Human review, approval, and intervention mechanisms exist for most high-risk actions; some gaps in escalation paths, responsibility mapping, or cross-agent oversight |
| 4 | Strong implementation | Comprehensive human-in-the-loop controls including risk-based review, approval workflows, intervention mechanisms, escalation paths, and responsibility mapping across all agent actions |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Human oversight evaluation requires examining four capabilities: review interfaces, approval workflows, intervention mechanisms, and escalation paths.

Review interfaces require mechanisms for humans to examine agent plans, decisions, and outputs before they take effect. Look for review dashboards, approval queues, and decision summaries that present relevant information to human reviewers. Evaluate whether review interfaces are designed for the specific oversight task rather than generic log viewers. Systems that require humans to review raw execution logs score lower.

Approval workflows require explicit human authorization before high-risk actions execute. Strong systems identify which actions require approval based on risk level, authority boundaries, or policy rules, and enforce approval requirements before execution. Look for approval routing, approval tracking, and approval evidence capture. Systems that allow high-risk actions to execute without approval score lower.

Intervention mechanisms require the ability for humans to stop, modify, or override agent actions. Evaluate whether humans can intervene during execution, whether intervention is recorded as evidence, and whether agents respect intervention signals. Systems that allow agents to continue executing after human intervention requests score lower.

Escalation paths require routing decisions to appropriate human roles based on risk, complexity, or policy violations. Look for escalation rules, escalation routing, and escalation tracking. Strong systems escalate automatically when agents encounter situations beyond their authority or capability. Systems that require agents to decide when to escalate score lower.

### Common Gaps

The most common gap is human review that exists but is not mapped to responsibility boundaries. Organizations may have approval workflows while lacking clarity about which human role is accountable for which agent decision. Another common gap is oversight mechanisms that apply to final outputs but not to intermediate agent decisions, tool selections, or authority transitions, allowing agents to drift beyond their intended scope before human review occurs.

---

## 7.17 RCCS-07: Security

### Regulatory Basis

Security requirements are established in EU AI Act Article 15, which requires high-risk AI systems to be resilient against attempts to alter their use or performance through exploitation of system vulnerabilities. GDPR Article 32 requires controllers and processors to implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk. ISO/IEC 42001 requires organizations to establish security controls for AI systems.

Security is foundational for all other governance controls. Without security, risk management, documentation, record-keeping, and oversight mechanisms can be bypassed or manipulated. For agentic systems, security must cover not only platform security but also agent-to-agent communication, tool access controls, and authority boundary enforcement.

### Core Question

**Does the system implement security controls, access management, and threat protection across agent execution?**

### RCCS-M Adjustment Note

RCCS-M adjustment: are security controls linked to delegated authority, tool-action liability, evidence partitioning, privacy lifecycle boundaries, and selective disclosure rules?

### Scoring Rubric

**Table T-07-09: RCCS-07 Security Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of security capability | No security controls documented or observable |
| 1 | Conceptual support | Documentation mentions security but provides no implementation primitives |
| 2 | Partial implementation | Platform security exists but does not extend to agent-to-agent communication, tool access controls, or authority boundary enforcement |
| 3 | Moderate implementation | Security controls exist for platform, agent communication, and tool access; some gaps in threat detection, security monitoring, or authority boundary enforcement |
| 4 | Strong implementation | Comprehensive security architecture covering platform security, agent-to-agent communication, tool access controls, authority boundary enforcement, threat detection, and security monitoring |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Security evaluation requires examining four capabilities: access controls, communication security, threat protection, and security monitoring.

Access controls require authentication, authorization, and permission management. Look for identity management, role-based access control, and least-privilege enforcement. For agentic systems, evaluate whether access controls apply not only to human users but also to agents and tools. Systems that grant broad permissions to agents without fine-grained access control score lower.

Communication security requires encryption and integrity protection for data in transit. Evaluate whether agent-to-agent communication, agent-to-tool communication, and agent-to-external-system communication are encrypted and authenticated. Systems that transmit sensitive data or credentials in plaintext score lower.

Threat protection requires defenses against adversarial attacks, prompt injection, and unauthorized access. Look for input validation, output filtering, and adversarial robustness testing. For agentic systems, evaluate whether the system protects against prompt injection attacks that could manipulate agent behavior or bypass authority boundaries. Systems without adversarial defenses score lower.

Security monitoring requires detection and response to security events. Look for security logging, anomaly detection, and incident response workflows. Evaluate whether security monitoring covers agent behavior, tool usage, and authority boundary violations. Systems that monitor platform security but not agent security score lower.

### Common Gaps

The most common gap is platform security that does not extend to agent-to-agent communication or tool access controls. Organizations may have strong perimeter security while lacking visibility into how agents communicate with each other or which tools agents can access. Another common gap is security controls that protect against external threats but not against prompt injection or adversarial manipulation of agent behavior.

---

## 7.18 RCCS-08: Accountability

### Regulatory Basis

Accountability requirements are established in GDPR Article 5(2), which requires controllers to be responsible for and able to demonstrate compliance with data protection principles. EU AI Act Article 26 establishes responsibilities along the AI value chain, clarifying obligations for providers, deployers, importers, and distributors. ISO/IEC 42001 requires organizations to establish accountability mechanisms for AI system decisions and outcomes. Singapore MGF for Agentic AI emphasizes making humans meaningfully accountable for agentic system outcomes.

Accountability is the principle that someone must be responsible for AI system decisions and outcomes. For agentic systems, accountability requires clear assignment of responsibility for agent actions, tool use, and outcomes, with evidence to prove who was responsible for what.

### Core Question

**Does the system assign responsibility and track accountability for agent decisions and outcomes?**

### RCCS-M Adjustment Note

RCCS-M adjustment: are accountability relationships represented as human-role-to-MAS responsibility mappings, agent role boundaries, responsibility transfer records, accepted outcome states, and liability records?

### Scoring Rubric

**Table T-07-10: RCCS-08 Accountability Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of accountability capability | No responsibility assignment or accountability tracking documented or observable |
| 1 | Conceptual support | Documentation mentions accountability but provides no implementation primitives |
| 2 | Partial implementation | Responsibility assignment exists for models but does not extend to agent actions, tool use, or multi-agent handoffs |
| 3 | Moderate implementation | Accountability mechanisms exist for most agent actions and outcomes; some gaps in tool use accountability, cross-agent responsibility tracking, or evidence linkage |
| 4 | Strong implementation | Comprehensive accountability covering responsibility assignment for all agent actions, tool use, outcomes, and multi-agent handoffs with evidence linkage and accountability reports |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Accountability evaluation requires examining four capabilities: responsibility assignment, decision tracking, accountability reports, and evidence linkage.

Responsibility assignment requires explicit identification of who is accountable for each agent decision and outcome. Look for responsibility mappings that link human roles to agent roles, agent roles to specific actions, and actions to outcomes. Evaluate whether responsibility assignments are documented, enforced, and auditable. Systems that execute agent actions without clear responsibility assignment score lower.

Decision tracking requires capturing who made each decision and on what basis. For agentic systems, this includes not only human decisions but also agent decisions that were delegated by humans. Look for decision logs that record decision maker, decision rationale, decision timestamp, and decision outcome. Systems that track execution events but not decision accountability score lower.

Accountability reports require mechanisms for demonstrating who was responsible for what. Look for accountability dashboards, responsibility matrices, and audit reports that show responsibility assignments and decision outcomes. Evaluate whether reports can be generated for specific time periods, projects, or incidents. Systems without accountability reporting capabilities score lower.

Evidence linkage requires connecting accountability assignments to evidence records. Strong systems can show not only who was responsible but also what evidence supports that responsibility assignment. Look for evidence pointers in responsibility records and responsibility metadata in evidence records. Systems that maintain responsibility assignments separately from evidence score lower.

### Common Gaps

The most common gap is accountability for models but not for agent actions or tool use. Organizations may have clear responsibility assignments for model development and deployment while lacking accountability for what agents do with those models during execution. Another common gap is accountability assignments that exist in documentation but are not enforced or tracked during execution, making it impossible to prove who was actually responsible for a specific decision or outcome.

---

## 7.19 RCCS-09: Contestability

### Regulatory Basis

Contestability requirements should be read across several legal and governance sources rather than collapsed into a single remedy model. EU AI Act Article 86 is best treated here as an affected-person explanation-right context for certain high-risk AI decisions. GDPR Article 22 is closer to the safeguard pattern for automated decisions, including human intervention, the ability to express one's point of view, and the ability to contest a decision. ISO/IEC 42001 requires organizations to establish mechanisms for challenging AI system decisions. Singapore MGF for Agentic AI emphasizes enabling end-user responsibility, which includes the ability to challenge outcomes.

Contestability is the principle that affected persons should have mechanisms to understand, challenge, or seek review of relevant AI-mediated outcomes where the applicable legal and governance context requires it. For agentic systems, contestability requires not only dispute mechanisms but also the evidence needed to reconstruct what happened and why. Remediation and dispute closure are treated in this chapter as engineering governance patterns, not as legal conclusions that a particular remedy is required or satisfied.

### Core Question

**Does the system support dispute, appeal, and remediation mechanisms for agent decisions and outcomes?**

### RCCS-M Adjustment Note

RCCS-M adjustment: can challenged outcomes be replayed with partitioned evidence, reviewer role, accepted/rejected state, remediation action, selective disclosure, and closure acceptance?

### Scoring Rubric

**Table T-07-11: RCCS-09 Contestability Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of contestability capability | No dispute or appeal mechanisms documented or observable |
| 1 | Conceptual support | Documentation mentions contestability but provides no implementation primitives |
| 2 | Partial implementation | Dispute mechanisms exist for final outputs but do not extend to intermediate agent decisions; no remediation tracking or evidence reconstruction |
| 3 | Moderate implementation | Dispute workflows, appeal mechanisms, and remediation tracking exist for most decisions; some gaps in evidence reconstruction, cross-agent dispute handling, or remediation verification |
| 4 | Strong implementation | Comprehensive contestability covering dispute workflows, appeal mechanisms, evidence reconstruction, remediation tracking, and closure verification for all agent decisions and outcomes |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Contestability evaluation requires examining four capabilities: dispute workflows, evidence reconstruction, remediation tracking, and closure verification.

Dispute workflows require mechanisms for users to challenge decisions and outcomes. Look for dispute submission interfaces, dispute routing, dispute tracking, and dispute resolution workflows. Evaluate whether disputes can be filed for specific agent decisions or outcomes and whether disputes are routed to appropriate human reviewers. Systems without structured dispute mechanisms score lower.

Evidence reconstruction requires the ability to retrieve and present the evidence underlying a disputed decision. For agentic systems, this includes agent decision rationale, tool outputs, data sources, authority boundaries, and human approvals. Look for evidence retrieval interfaces that can reconstruct the full context of a decision. Systems that cannot reconstruct decision evidence score lower.

Remediation tracking requires mechanisms for documenting and verifying corrective actions. When a dispute is upheld, look for remediation workflows that specify what correction is required, who is responsible for implementing it, and how completion is verified. Systems that resolve disputes without tracking remediation score lower.

Closure verification requires confirmation that disputes are resolved and remediation is complete. Look for closure workflows that require explicit acceptance by the disputing party or an independent reviewer. Evaluate whether closure is recorded as evidence and whether closed disputes can be reopened if new information emerges. Systems that close disputes without verification score lower.

### Common Gaps

The most common gap is contestability for final outputs but not for intermediate agent decisions. Organizations may allow users to challenge final outcomes while lacking mechanisms to challenge specific agent decisions, tool selections, or authority transitions that contributed to the outcome. Another common gap is dispute mechanisms that exist but cannot reconstruct the evidence needed to evaluate the dispute, forcing manual investigation and delaying resolution.

---

## 7.20 RCCS-10: Monitoring

### Regulatory Basis

Monitoring requirements are established in EU AI Act Article 72, which requires providers to establish a post-market monitoring system proportionate to the nature of the AI technologies and the risks of the high-risk AI system. ISO/IEC 42001 requires organizations to establish monitoring and measurement processes for AI systems. NIST AI RMF Manage function includes continuous monitoring as a key practice for detecting and responding to AI system issues.

Monitoring is the mechanism for detecting when systems deviate from expected behavior, when risks materialize, or when governance controls fail. For agentic systems, monitoring must cover not only model performance but also agent behavior, authority drift, and lifecycle conformance.

### Core Question

**Does the system support continuous monitoring, incident detection, and drift detection across agent execution?**

### RCCS-M Adjustment Note

RCCS-M adjustment: does monitoring detect authority drift, lifecycle drift, privacy events, substitution changes, incidents, reuse/revalidation needs, and remediation closure?

### Scoring Rubric

**Table T-07-12: RCCS-10 Monitoring Scoring Rubric**

| Score | Capability Level | Evidence Required |
|-------|------------------|-------------------|
| 0 | No evidence of monitoring capability | No monitoring or alerting features documented or observable |
| 1 | Conceptual support | Documentation mentions monitoring but provides no implementation primitives |
| 2 | Partial implementation | Monitoring exists for model performance but does not extend to agent behavior, authority drift, or lifecycle conformance |
| 3 | Moderate implementation | Monitoring dashboards, alerting, and incident detection exist for models and some agent behaviors; some gaps in authority drift detection, lifecycle conformance monitoring, or incident response |
| 4 | Strong implementation | Comprehensive continuous monitoring covering model performance, agent behavior, authority drift, lifecycle conformance, incident detection, and incident response with dashboards, alerting, and automated response |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts; legal text may establish a regulatory baseline but does not prove implementation |

### System Mapping Guidance

Monitoring evaluation requires examining four capabilities: monitoring dashboards, alerting mechanisms, drift detection, and incident response.

Monitoring dashboards require visibility into system behavior and performance. Look for dashboards that show model performance metrics, agent execution statistics, tool usage patterns, authority boundary violations, and governance control status. Evaluate whether dashboards are designed for different audiences including operators, governance teams, and auditors. Systems without monitoring dashboards score lower.

Alerting mechanisms require automated detection and notification of anomalies, policy violations, or risk events. Look for configurable alert rules, alert routing, and alert escalation. For agentic systems, evaluate whether alerts cover not only model performance degradation but also agent behavior anomalies, authority drift, and governance control failures. Systems that require manual monitoring score lower.

Drift detection requires mechanisms for identifying when system behavior deviates from baseline. Look for model drift detection, data drift detection, and authority drift detection. Evaluate whether drift detection is automated and whether detected drift triggers alerts or intervention workflows. Systems without drift detection score lower.

Incident response requires workflows for investigating and resolving detected issues. Look for incident creation, incident assignment, incident investigation, and incident closure workflows. Evaluate whether incident response is integrated with monitoring and alerting and whether incidents are tracked to closure. Systems that detect issues but lack incident response workflows score lower.

### Common Gaps

The most common gap is monitoring for model performance but not for agent behavior or authority drift. Organizations may have strong ML monitoring practices while lacking visibility into whether agents are operating within their intended authority boundaries or whether agent behavior is drifting over time. Another common gap is monitoring that detects issues but lacks automated incident response, requiring manual investigation and intervention for every alert.

---

## 7.21 Chapter Summary

This chapter introduced the Regulatory Compliance Coverage Score (RCCS) family used in this white paper. RCCS-T measures how strongly a system covers existing regulatory and governance requirements across ten dimensions: risk management, data governance, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring. RCCS-M asks whether that coverage can be expressed through Missing Regulatory Objects and lifecycle responsibility semantics. Both are analytical frameworks for comparing system capabilities against regulatory ideals, not legal compliance certifications.

The ten RCCS dimensions map directly to recurring requirements in EU AI Act, GDPR, NIST AI RMF, ISO/IEC 42001, and Singapore MGF for Agentic AI. Risk management corresponds to EU AI Act Article 9 and NIST AI RMF core functions. Data governance corresponds to GDPR Article 5 and EU AI Act Article 10. Documentation corresponds to EU AI Act Article 11. Record-keeping corresponds to EU AI Act Article 12 and GDPR Article 30. Transparency corresponds to EU AI Act Article 13 and GDPR Articles 13-14. Human oversight corresponds to EU AI Act Article 14. Security corresponds to EU AI Act Article 15 and GDPR Article 32. Accountability corresponds to GDPR Article 5(2) and EU AI Act Article 26. Contestability is informed by EU AI Act Article 86 explanation-right context, GDPR Article 22 automated-decision safeguards, and related governance guidance rather than by a single legal remedy workflow. Monitoring corresponds to EU AI Act Article 72. These mappings demonstrate that RCCS is grounded in existing regulatory requirements and governance patterns, while RCCS-M separately asks whether those patterns can be expressed as lifecycle responsibility objects.

RCCS-T provides a baseline for evaluating whether systems provide the governance primitives that regulation increasingly requires. However, traditional coverage alone is insufficient for agentic systems. A system may score well on RCCS-T while lacking the lifecycle objects required to prove that agentic work moved from intent to accepted outcome under controlled authority, evidence, privacy, and remediation constraints. RCCS-M makes that missing adjustment explicit. Chapter 8 introduces the Agentic Lifecycle Conformance Score (ALCS), which measures a different layer: whether lifecycle responsibility conformance is mature across the object set. RCCS-T, RCCS-M, and ALCS together provide a three-profile assessment of system governance capability.
