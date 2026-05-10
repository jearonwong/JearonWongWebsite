# Appendix G — Expanded System-by-System Assessment

**Version:** v0.3.2-FRC-R3  
**Status:** REVALIDATED PROVISIONAL — Phase 1C claim-level source binding applied  
**Phase:** 1C Follow-up (Claim-Level Revalidation)

---

## G.0 Assessment Boundary and Provisional Status

This appendix provides expanded system-by-system assessments for eight representative AI governance and agentic systems. These assessments are **revalidated provisional** after Phase 1C follow-up. Official source entry points were located for the required L2 product/protocol groups and material claims were either source-bound, narrowed, downgraded to L5 analytical interpretation, or retained as explicit lifecycle gaps. The assessments remain provisional because public documentation does not by itself prove deployed lifecycle responsibility-object implementation, audit readiness, legal compliance, procurement suitability, or operational effectiveness.

**CRITICAL BOUNDARY STATEMENT:**

- **All assessments remain provisional.** Phase 1C claim-level review located official source entry points and narrowed claims, but did not produce final vendor assessments.
- **L2 product documentation is source-bound, not final proof.** Product documentation can support documented capability surfaces; it does not prove deployment practice, audit success, or lifecycle responsibility-object implementation.
- **This is not a product ordering.** Systems are assessed by capability posture, not ordered by quality, market position, or procurement suitability.
- **This is not a procurement recommendation.** Organizations must evaluate systems within their own legal, regulatory, operational, and business context.
- **This is not certification.** Assessments measure capability posture against analytical frameworks (RCCS/ALCS), not legal compliance, regulatory approval, or certification status.
- **Assessments are context-independent.** Organizations must interpret assessments within their legal, regulatory, and operational context.
- **Low provisional posture does not prove non-compliance or poor product quality.** It indicates gaps in publicly visible evidence for specific capability primitives.
- **High provisional posture does not prove legal compliance, enterprise readiness, or operational effectiveness.** It indicates stronger publicly visible evidence for specific capability primitives.

**Phase 1C follow-up result:**

1. Official L2 source entry points were located for the eight assessed systems and required source groups.
2. Product/protocol capability claims were bound to source IDs where official documentation supports the surface capability.
3. Lifecycle responsibility-object mappings that are not directly stated in official documentation remain L5 analytical interpretation.
4. Unsupported or adjacent ALCS claims remain boundary-limited as "requires implementer integration", "not visible as lifecycle responsibility object", or "requires exact source support".
5. No numerical scores, ordering, procurement recommendation, certification claim, or legal compliance proof was introduced.

---

## G.1 How to Read the System Assessments

**Assessment structure:**

Each system assessment uses a qualitative provisional posture framework across key assessment areas. Assessments do not compute numerical scores, ordered comparisons, or composite metrics before Phase 1C source revalidation.

**Assessment areas:**

1. **Regulatory Compliance Coverage Primitives (RCCS-aligned):** Risk management, data governance, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, monitoring
2. **Agentic Lifecycle Responsibility Objects (ALCS-aligned):** Human-role-to-MAS mapping, delegated authority boundary, agent-human role distinction, accepted outcome compliance, tool-action liability boundary, responsibility transfer, authority drift detection, MAS evidence partitioning, cross-project reuse compliance, privacy/GDPR lifecycle mapping, privacy-preserving validation, evidence minimization, data subject rights vs retention, processor chain tracking, vendor/model/runtime substitution conformance

**Provisional posture levels:**

- **Strong provisional posture:** Multiple capability primitives visible in public product documentation with implementation details
- **Moderate provisional posture:** Some capability primitives visible in public product documentation with partial implementation details
- **Partial provisional posture:** Limited capability primitives visible in public product documentation with minimal implementation details
- **Weak / implementer-built posture:** Few or no capability primitives visible in public product documentation; capabilities may exist but require implementer-built solutions
- **Not visible in public evidence:** No publicly visible evidence for capability primitives; does not prove absence, only lack of public documentation

**Evidence types:**

- **L1 (Binding Legal Text):** EU AI Act, GDPR, formal standards
- **L2 (Product Docs):** Official product documentation, protocol specifications, GitHub repositories
- **L3 (Audit Report):** Third-party audit reports, academic papers
- **L4 (Vendor Claim):** Vendor claims, marketing materials
- **L5 (Author Inference):** Author inference, analytical framework

**What assessments do NOT provide:**

- Numerical scores or ordered comparisons
- Composite metrics or weighted averages
- Procurement recommendations or vendor preferences
- Legal compliance proof or certification status
- Regulatory approval or conformity assessment
- Market endorsement or quality ratings
- "Best" or "worst" designations
- Market tier classifications

---

## G.2 System Assessment Profiles

### G.2.1 MPLP (Multi-Agent Lifecycle Protocol)

**Table T-G-01: MPLP Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | No formal risk assessment framework visible | Revalidate protocol specification |
| Data Governance | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Data governance primitives require implementer integration | Revalidate protocol specification |
| Documentation | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec, GitHub) | Protocol documentation strong; implementation documentation varies | Revalidate protocol specification and implementation examples |
| Record-Keeping | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Evidence pack structure visible; export/retention require implementer integration | Revalidate protocol specification |
| Transparency | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Transparency primitives require implementer integration | Revalidate protocol specification |
| Human Oversight | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Human-role-to-MAS mapping visible in protocol; enforcement requires implementer integration | Revalidate protocol specification |
| Security | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Security primitives not protocol-level; require implementer integration | Revalidate protocol specification |
| Accountability | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Responsibility mapping visible in protocol; tracking requires implementer integration | Revalidate protocol specification |
| Contestability | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Contestability primitives not protocol-level; require implementer integration | Revalidate protocol specification |
| Monitoring | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Monitoring primitives require implementer integration | Revalidate protocol specification |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level mapping visible; implementation varies | Revalidate protocol specification |
| Delegated Authority Boundary | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level boundary visible; enforcement requires implementer integration | Revalidate protocol specification |
| Agent-Human Role Distinction | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level distinction visible; implementation varies | Revalidate protocol specification |
| Accepted Outcome Compliance | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level outcome tracking visible; compliance enforcement requires implementer integration | Revalidate protocol specification |
| Tool-Action Liability Boundary | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Protocol-level liability tracking visible; boundary enforcement requires implementer integration | Revalidate protocol specification |
| Responsibility Transfer | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level transfer tracking visible; implementation varies | Revalidate protocol specification |
| Authority Drift Detection | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Drift detection not protocol-level; requires implementer integration | Revalidate protocol specification |
| MAS Evidence Partitioning | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level evidence partitioning visible; storage/retrieval require implementer integration | Revalidate protocol specification |
| Cross-Project Reuse Compliance | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Reuse tracking not protocol-level; requires implementer integration | Revalidate protocol specification |
| Privacy/GDPR Lifecycle Mapping | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Privacy primitives require implementer integration | Revalidate protocol specification |
| Privacy-Preserving Validation | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Privacy-preserving validation not protocol-level; requires implementer integration | Revalidate protocol specification |
| Evidence Minimization | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Minimization primitives require implementer integration | Revalidate protocol specification |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Rights-retention conflict resolution not protocol-level; requires implementer integration | Revalidate protocol specification |
| Processor Chain Tracking | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Processor chain tracking not protocol-level; requires implementer integration | Revalidate protocol specification |
| Vendor/Model/Runtime Substitution | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Substitution conformance tracking requires implementer integration | Revalidate protocol specification |

**MPLP Boundary Note:**

MPLP is positioned as a lifecycle protocol path with strong provisional ALCS semantic alignment at the protocol specification level. Protocol fit does not prove implementation conformance, legal compliance, enterprise readiness, adoption, or operational effectiveness. MPLP is not required, not exclusive, not certified, and not regulator-approved. Organizations may use MPLP, alternative protocols, or implementer-built solutions based on their requirements.

**Provisional Status:** REVALIDATED PROVISIONAL — Official MPLP documentation entry point located. Protocol identity is L2-supported; protocol-to-MRO/ALCS mapping remains L5 analytical interpretation unless directly stated in protocol text. Implementation conformance remains unresolved.

---

### G.2.2 IBM watsonx.governance

**Table T-G-02: IBM watsonx.governance Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Risk assessment framework visible; AI-specific risk integration requires validation | Revalidate IBM product documentation |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance framework visible; lifecycle integration requires validation | Revalidate IBM product documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model cards and factsheets visible; system cards require validation | Revalidate IBM product documentation |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Audit records visible; evidence export capability requires validation | Revalidate IBM product documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Explainability tools visible; interpretability integration requires validation | Revalidate IBM product documentation |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Approval workflows visible; human-role-to-MAS mapping requires validation | Revalidate IBM product documentation |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Enterprise security controls visible; AI lifecycle integration requires validation | Revalidate IBM product documentation |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role assignment visible; responsibility tracking requires validation | Revalidate IBM product documentation |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Dispute resolution primitives require validation | Revalidate IBM product documentation |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model monitoring visible; drift detection requires validation | Revalidate IBM product documentation |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role definitions visible; MAS responsibility mapping requires validation | Revalidate IBM product documentation |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Authority boundary primitives require validation | Revalidate IBM product documentation |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role distinction visible; lifecycle integration requires validation | Revalidate IBM product documentation |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Outcome compliance primitives require validation | Revalidate IBM product documentation |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Liability boundary primitives require validation | Revalidate IBM product documentation |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Transfer tracking primitives require validation | Revalidate IBM product documentation |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | Revalidate IBM product documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Evidence partitioning visible; MAS-specific partitioning requires validation | Revalidate IBM product documentation |
| Cross-Project Reuse Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Reuse compliance primitives require validation | Revalidate IBM product documentation |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Privacy controls visible; GDPR lifecycle mapping requires validation | Revalidate IBM product documentation |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | Revalidate IBM product documentation |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data minimization visible; evidence minimization requires validation | Revalidate IBM product documentation |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data subject rights visible; conflict resolution requires validation | Revalidate IBM product documentation |
| Processor Chain Tracking | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Processor chain tracking primitives require validation | Revalidate IBM product documentation |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model substitution visible; conformance tracking requires validation | Revalidate IBM product documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official IBM source entry points located. RCCS-adjacent AI governance claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact IBM documentation directly supports the object.

---

### G.2.3 Microsoft Azure AI Foundry

**Table T-G-03: Microsoft Azure AI Foundry Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Risk monitoring visible; formal risk assessment framework requires validation | Revalidate Microsoft product documentation |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | Revalidate Microsoft product documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive documentation visible; model cards and system cards require validation | Revalidate Microsoft product documentation |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Logging and audit records visible; evidence export capability requires validation | Revalidate Microsoft product documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Transparency tools visible; explainability integration requires validation | Revalidate Microsoft product documentation |
| Human Oversight | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Human oversight workflows visible; human-role-to-MAS mapping requires validation | Revalidate Microsoft product documentation |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Enterprise security controls visible; AI lifecycle integration requires validation | Revalidate Microsoft product documentation |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role assignment visible; accountability tracking requires validation | Revalidate Microsoft product documentation |
| Contestability | Moderate provisional posture | Partial provisional posture | L2 (Product docs) | Escalation workflows visible; formal contestability requires validation | Revalidate Microsoft product documentation |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Monitoring and metrics visible; drift detection requires validation | Revalidate Microsoft product documentation |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role mapping visible; MAS responsibility mapping requires validation | Revalidate Microsoft product documentation |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Authority controls visible; boundary enforcement requires validation | Revalidate Microsoft product documentation |
| Agent-Human Role Distinction | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Role distinction visible; lifecycle integration requires validation | Revalidate Microsoft product documentation |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Outcome validation visible; compliance tracking requires validation | Revalidate Microsoft product documentation |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action definitions visible; liability boundary tracking requires validation | Revalidate Microsoft product documentation |
| Responsibility Transfer | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Workflow handoff visible; responsibility transfer tracking requires validation | Revalidate Microsoft product documentation |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | Revalidate Microsoft product documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Evidence partitioning visible; MAS-specific partitioning requires validation | Revalidate Microsoft product documentation |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model versioning visible; reuse compliance tracking requires validation | Revalidate Microsoft product documentation |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Privacy controls visible; GDPR lifecycle mapping requires validation | Revalidate Microsoft product documentation |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | Revalidate Microsoft product documentation |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | Revalidate Microsoft product documentation |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | Revalidate Microsoft product documentation |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Shared responsibility model visible; processor chain tracking requires validation | Revalidate Microsoft product documentation |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | Revalidate Microsoft product documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official Microsoft source entry points located. Cloud AI platform, agent, tracing, evaluation, and monitoring claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact Microsoft documentation directly supports the object.

---

### G.2.4 AWS Bedrock / Guardrails / AgentCore

**Table T-G-04: AWS Bedrock / Guardrails / AgentCore Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Guardrails visible; formal risk assessment framework requires validation | Revalidate AWS product documentation |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | Revalidate AWS product documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive AWS documentation visible; model cards and system cards require validation | Revalidate AWS product documentation |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | CloudWatch logging and audit records visible; evidence export capability requires validation | Revalidate AWS product documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Trace logs visible; explainability integration requires validation | Revalidate AWS product documentation |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group approval visible; human-role-to-MAS mapping requires validation | Revalidate AWS product documentation |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | IAM integration and encryption visible; AI lifecycle security requires validation | Revalidate AWS product documentation |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM roles visible; accountability tracking requires validation | Revalidate AWS product documentation |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Contestability primitives require validation | Revalidate AWS product documentation |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | CloudWatch monitoring visible; drift detection requires validation | Revalidate AWS product documentation |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM role mapping visible; MAS responsibility mapping requires validation | Revalidate AWS product documentation |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group permissions visible; boundary enforcement requires validation | Revalidate AWS product documentation |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent definitions and IAM roles visible; distinction mechanisms require validation | Revalidate AWS product documentation |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Guardrails for outcome validation visible; compliance tracking requires validation | Revalidate AWS product documentation |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group definitions visible; liability boundary tracking requires validation | Revalidate AWS product documentation |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Agent orchestration visible; responsibility transfer tracking requires validation | Revalidate AWS product documentation |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | Revalidate AWS product documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-agent CloudWatch logs visible; MAS evidence partitioning requires validation | Revalidate AWS product documentation |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent versioning visible; reuse compliance tracking requires validation | Revalidate AWS product documentation |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | AWS compliance controls visible; GDPR lifecycle mapping requires validation | Revalidate AWS product documentation |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | Revalidate AWS product documentation |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | Revalidate AWS product documentation |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | Revalidate AWS product documentation |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | AWS shared responsibility model visible; processor chain tracking requires validation | Revalidate AWS product documentation |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | Revalidate AWS product documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official AWS source entry points located for Bedrock, Guardrails, and AgentCore. Guardrail, runtime, security, and observability claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact AWS documentation directly supports the object.

---

### G.2.5 Google Vertex AI / ADK / Model Armor

**Table T-G-05: Google Vertex AI / ADK / Model Armor Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model monitoring visible; formal risk assessment framework requires validation | Revalidate Google product documentation |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | Revalidate Google product documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive Google Cloud documentation visible; model cards and system cards require validation | Revalidate Google product documentation |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Cloud Logging and audit records visible; evidence export capability requires validation | Revalidate Google product documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Conversation logs visible; explainability integration requires validation | Revalidate Google product documentation |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Human handoff visible; human-role-to-MAS mapping requires validation | Revalidate Google product documentation |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | IAM integration and encryption visible; AI lifecycle security requires validation | Revalidate Google product documentation |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM roles visible; accountability tracking requires validation | Revalidate Google product documentation |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Contestability primitives require validation | Revalidate Google product documentation |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Cloud Monitoring visible; drift detection requires validation | Revalidate Google product documentation |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM role mapping visible; MAS responsibility mapping requires validation | Revalidate Google product documentation |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Tool permissions visible; boundary enforcement requires validation | Revalidate Google product documentation |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent definitions and IAM roles visible; distinction mechanisms require validation | Revalidate Google product documentation |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Response validation visible; compliance tracking requires validation | Revalidate Google product documentation |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Tool definitions visible; liability boundary tracking requires validation | Revalidate Google product documentation |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Agent orchestration visible; responsibility transfer tracking requires validation | Revalidate Google product documentation |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | Revalidate Google product documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-agent Cloud Logging visible; MAS evidence partitioning requires validation | Revalidate Google product documentation |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent versioning visible; reuse compliance tracking requires validation | Revalidate Google product documentation |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Google Cloud compliance controls visible; GDPR lifecycle mapping requires validation | Revalidate Google product documentation |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | Revalidate Google product documentation |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | Revalidate Google product documentation |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | Revalidate Google product documentation |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Google Cloud shared responsibility model visible; processor chain tracking requires validation | Revalidate Google product documentation |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | Revalidate Google product documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official Google source entry points located for Vertex AI, ADK, and Model Armor. Agent-development, model safety, evaluation, and platform claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact Google documentation directly supports the object.

---

### G.2.6 LangGraph / LangSmith

**Table T-G-06: LangGraph / LangSmith Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Callback mechanisms visible; formal risk assessment framework requires validation | Revalidate LangGraph/LangSmith documentation |
| Data Governance | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Data loaders visible; formal data governance framework requires validation | Revalidate LangGraph/LangSmith documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Extensive API documentation visible; model cards and system cards require validation | Revalidate LangGraph/LangSmith documentation |
| Record-Keeping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith tracing visible; formal audit trail and evidence export require validation | Revalidate LangGraph/LangSmith documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph visualization visible; explainability integration requires validation | Revalidate LangGraph/LangSmith documentation |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Human-in-the-loop via interrupts visible; formal oversight framework requires validation | Revalidate LangGraph/LangSmith documentation |
| Security | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | API key management visible; formal security framework requires validation | Revalidate LangGraph/LangSmith documentation |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node naming visible; formal accountability tracking requires validation | Revalidate LangGraph/LangSmith documentation |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Contestability primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Monitoring | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith monitoring visible; drift detection requires validation | Revalidate LangGraph/LangSmith documentation |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node definitions visible; formal human-role-to-MAS mapping requires validation | Revalidate LangGraph/LangSmith documentation |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Tool definitions visible; formal boundary enforcement requires validation | Revalidate LangGraph/LangSmith documentation |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node types visible; formal distinction mechanisms require validation | Revalidate LangGraph/LangSmith documentation |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Output validation visible; formal compliance tracking requires validation | Revalidate LangGraph/LangSmith documentation |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Tool definitions visible; formal liability boundary tracking requires validation | Revalidate LangGraph/LangSmith documentation |
| Responsibility Transfer | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph edges visible; formal responsibility transfer tracking requires validation | Revalidate LangGraph/LangSmith documentation |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Drift detection primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith per-node tracing visible; formal MAS evidence partitioning requires validation | Revalidate LangGraph/LangSmith documentation |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph serialization visible; formal reuse compliance tracking requires validation | Revalidate LangGraph/LangSmith documentation |
| Privacy/GDPR Lifecycle Mapping | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy/GDPR lifecycle mapping primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy-preserving validation primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Evidence minimization primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Rights-retention conflict resolution primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Processor chain tracking primitives require implementer integration | Revalidate LangGraph/LangSmith documentation |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Model abstraction visible; formal substitution conformance tracking requires validation | Revalidate LangGraph/LangSmith documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official LangGraph and LangSmith source entry points located. Orchestration, persistence, human-in-the-loop, tracing, and evaluation/observability claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact documentation directly supports the object.

---

### G.2.7 OpenAI Agents SDK

**Table T-G-07: OpenAI Agents SDK Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Usage monitoring visible; formal risk assessment framework requires validation | Revalidate OpenAI product documentation |
| Data Governance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | File management visible; formal data governance framework requires validation | Revalidate OpenAI product documentation |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive API documentation and model cards visible; system cards require validation | Revalidate OpenAI product documentation |
| Record-Keeping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Thread history visible; formal audit trail and evidence export require validation | Revalidate OpenAI product documentation |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Run steps visible; explainability integration requires validation | Revalidate OpenAI product documentation |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Function calling approval patterns visible; formal oversight framework requires validation | Revalidate OpenAI product documentation |
| Security | Partial provisional posture | Partial provisional posture | L2 (Product docs) | API key management and SOC 2 compliance visible; formal AI lifecycle security requires validation | Revalidate OpenAI product documentation |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant naming visible; formal accountability tracking requires validation | Revalidate OpenAI product documentation |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Contestability primitives require implementer integration | Revalidate OpenAI product documentation |
| Monitoring | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Usage metrics visible; drift detection requires validation | Revalidate OpenAI product documentation |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function calling visible; formal human-role-to-MAS mapping requires validation | Revalidate OpenAI product documentation |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function definitions visible; formal boundary enforcement requires validation | Revalidate OpenAI product documentation |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant/user message distinction visible; formal distinction mechanisms require validation | Revalidate OpenAI product documentation |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Output validation visible; formal compliance tracking requires validation | Revalidate OpenAI product documentation |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function calling visible; formal liability boundary tracking requires validation | Revalidate OpenAI product documentation |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Thread management visible; formal responsibility transfer tracking requires validation | Revalidate OpenAI product documentation |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Drift detection primitives require implementer integration | Revalidate OpenAI product documentation |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-thread history visible; formal MAS evidence partitioning requires validation | Revalidate OpenAI product documentation |
| Cross-Project Reuse Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant definitions visible; formal reuse compliance tracking requires validation | Revalidate OpenAI product documentation |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data retention controls visible; formal GDPR lifecycle mapping requires validation | Revalidate OpenAI product documentation |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Privacy-preserving validation primitives require implementer integration | Revalidate OpenAI product documentation |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Evidence minimization primitives require implementer integration | Revalidate OpenAI product documentation |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data deletion visible; formal conflict resolution requires validation | Revalidate OpenAI product documentation |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Processor chain tracking primitives require implementer integration | Revalidate OpenAI product documentation |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection visible; formal substitution conformance tracking requires validation | Revalidate OpenAI product documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official OpenAI Agents SDK source entry point located, with platform docs requiring final citation rendering/access check where applicable. Agent execution, tools, handoffs, guardrails, sessions, and tracing claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact documentation directly supports the object.

---

### G.2.8 CrewAI

**Table T-G-08: CrewAI Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Phase 1C Revalidation Need |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Risk management primitives require implementer integration | Revalidate CrewAI documentation |
| Data Governance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Data governance primitives require implementer integration | Revalidate CrewAI documentation |
| Documentation | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | API documentation visible; model cards and system cards require validation | Revalidate CrewAI documentation |
| Record-Keeping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Task execution logs visible; formal audit trail and evidence export require validation | Revalidate CrewAI documentation |
| Transparency | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Transparency primitives require implementer integration | Revalidate CrewAI documentation |
| Human Oversight | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Human oversight primitives require implementer integration | Revalidate CrewAI documentation |
| Security | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Security primitives require implementer integration | Revalidate CrewAI documentation |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent roles and task assignment visible; formal accountability tracking requires validation | Revalidate CrewAI documentation |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Contestability primitives require implementer integration | Revalidate CrewAI documentation |
| Monitoring | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Monitoring primitives require implementer integration | Revalidate CrewAI documentation |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent roles and task delegation visible; formal human-role-to-MAS mapping requires validation | Revalidate CrewAI documentation |
| Delegated Authority Boundary | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Authority boundary primitives require implementer integration | Revalidate CrewAI documentation |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent role definitions visible; formal distinction mechanisms require validation | Revalidate CrewAI documentation |
| Accepted Outcome Compliance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Outcome compliance primitives require implementer integration | Revalidate CrewAI documentation |
| Tool-Action Liability Boundary | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Liability boundary primitives require implementer integration | Revalidate CrewAI documentation |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Task delegation across agents visible; formal responsibility transfer tracking requires validation | Revalidate CrewAI documentation |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Drift detection primitives require implementer integration | Revalidate CrewAI documentation |
| MAS Evidence Partitioning | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Per-agent task logs visible; formal MAS evidence partitioning requires validation | Revalidate CrewAI documentation |
| Cross-Project Reuse Compliance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Reuse compliance primitives require implementer integration | Revalidate CrewAI documentation |
| Privacy/GDPR Lifecycle Mapping | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy/GDPR lifecycle mapping primitives require implementer integration | Revalidate CrewAI documentation |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy-preserving validation primitives require implementer integration | Revalidate CrewAI documentation |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Evidence minimization primitives require implementer integration | Revalidate CrewAI documentation |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Rights-retention conflict resolution primitives require implementer integration | Revalidate CrewAI documentation |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Processor chain tracking primitives require implementer integration | Revalidate CrewAI documentation |
| Vendor/Model/Runtime Substitution | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Model configuration visible; formal substitution conformance tracking requires validation | Revalidate CrewAI documentation |

**Provisional Status:** REVALIDATED PROVISIONAL — Official CrewAI documentation and repository entry points located. Agent, task, crew/flow, tool, and orchestration claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact CrewAI documentation directly supports the object.

---

## G.3 Cross-System Pattern Summary

**Table T-G-09: Cross-System Pattern Summary**

| Pattern Area | Observed Pattern | Systems with More Visible Posture | Systems with More Limited Visible Posture | Phase 1C Validation Priority |
|--------------|------------------|----------------------------|---------------------------|----------------------------|
| **RCCS Coverage** | Enterprise cloud platforms show stronger RCCS provisional posture due to integrated monitoring, logging, security, and governance controls | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | Revalidate enterprise platform integration claims |
| **ALCS Coverage** | MPLP shows stronger visible ALCS provisional posture at protocol specification level; enterprise platforms show moderate visible posture; open-source frameworks show more limited visible posture | MPLP (protocol-level), Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | Revalidate MPLP protocol semantics and enterprise platform ALCS implementation |
| **Documentation** | All systems show strong to moderate documentation provisional posture; model cards and system cards require validation across all systems | All systems | None | Revalidate model card and system card availability |
| **Record-Keeping** | Enterprise platforms show strong record-keeping provisional posture with cloud logging integration; open-source frameworks show partial to moderate posture | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI | Revalidate audit trail and evidence export capabilities |
| **Human Oversight** | Microsoft Azure AI Foundry shows stronger visible human oversight provisional posture; MPLP shows strong protocol-level posture; other systems show moderate to more limited visible posture | Microsoft Azure AI Foundry, MPLP (protocol-level) | CrewAI, LangGraph/LangSmith | Revalidate human-role-to-MAS mapping and oversight workflows |
| **Security** | Enterprise platforms show strong security provisional posture with IAM integration; open-source frameworks show weak to partial posture | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | Revalidate AI lifecycle security integration |
| **Accountability** | All systems show partial to moderate accountability provisional posture; formal accountability tracking requires validation across all systems | None | None | Revalidate accountability tracking mechanisms across all systems |
| **Contestability** | All systems show weak to partial contestability provisional posture; contestability primitives require implementer integration or validation | None | All systems | Revalidate contestability and dispute resolution mechanisms |
| **Authority Drift Detection** | All systems show weak to partial authority drift detection provisional posture; drift detection primitives require implementer integration or validation | None | All systems | Revalidate authority drift detection mechanisms |
| **Privacy/GDPR Lifecycle Mapping** | Enterprise platforms show moderate privacy provisional posture; open-source frameworks show more limited visible posture; formal GDPR lifecycle mapping requires validation | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | Revalidate GDPR lifecycle mapping mechanisms |
| **Implementer-Built Gap** | Open-source frameworks (CrewAI, LangGraph/LangSmith) show significant implementer-built gaps across multiple assessment areas; enterprise platforms show fewer gaps | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith | Revalidate implementer-built vs platform-provided primitives |

**Key Observations (Provisional):**

1. **Enterprise platforms show stronger RCCS provisional posture** due to integrated cloud platform capabilities (monitoring, logging, security, governance)
2. **MPLP shows stronger visible ALCS provisional posture at protocol specification level** but requires implementer integration for operational deployment
3. **All systems show gaps in contestability and authority drift detection** indicating industry-wide gaps in these capability primitives
4. **Open-source frameworks show significant implementer-built gaps** requiring organizations to build additional governance layers
5. **All assessments are provisional** and require Phase 1C source revalidation before finalization

**CRITICAL REMINDER:** These patterns are provisional observations based on Phase 1B reconstruction evidence. Phase 1C source revalidation is required before patterns can be considered final. This is not a product ordering, procurement recommendation, or certification.

---

## G.4 Phase 1C Source Revalidation Note

**Appendix G has completed Phase 1C claim-level source binding and remains revalidated provisional.**

**Remaining finalization scope:**

1. **Pin exact source pages for each source-bound claim** — Source entry points have been located, but some claims still need exact page-level citation pinning.
2. **Preserve L5 mapping discipline** — Product documentation supporting adjacent platform features must not be treated as direct ALCS lifecycle responsibility-object proof.
3. **Retain no-score/no-ranking posture** — Qualitative postures remain analytical and provisional.
4. **Perform final citation rendering QA in Phase 1D** — No DOCX/PDF citation rendering has been generated in this phase.

**Systems not assessed in Appendix G:**

The following systems were mentioned in earlier phases but are not assessed in Appendix G. They may be considered for Phase 1C expansion or future versions:

- LangChain (standalone framework; LangGraph/LangSmith assessed instead as representative LangChain ecosystem system)
- AutoGen (not included in representative system set)
- Semantic Kernel (not included in representative system set)
- Microsoft Copilot Studio (Microsoft Azure AI Foundry assessed instead as representative Microsoft system)
- Anthropic Claude API (not included in representative system set)
- OpenAI Assistants API (OpenAI Agents SDK assessed instead as representative OpenAI system)
- Amazon Bedrock Agents (AWS Bedrock / Guardrails / AgentCore assessed instead as comprehensive AWS system)
- Google Vertex AI Agent Builder (Google Vertex AI / ADK / Model Armor assessed instead as comprehensive Google system)

**Validation Lab Note:**

Validation Lab is mentioned in Chapter 14 as a non-certifying evidence adjudication example. It is not assessed in Appendix G as it is not positioned as a required, exclusive, or certified validation path. Organizations may use Validation Lab, alternative validation approaches, or implementer-built validation solutions based on their requirements.

---

**End of Appendix G**

**Appendix G Status:** REVALIDATED PROVISIONAL (Phase 1C Follow-up) — Expanded System-by-System Assessment complete; 8 representative systems plus T-G-09 cross-system pattern summary included with qualitative provisional posture; official source entry points located and material claims source-bound, narrowed, or downgraded to L5 analytical interpretation; no scores, ordered comparisons, or procurement recommendations.
