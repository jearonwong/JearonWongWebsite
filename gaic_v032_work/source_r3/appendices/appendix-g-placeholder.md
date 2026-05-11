# Appendix G — Expanded System-by-System Assessment

**Version:** v0.3.2-FRC-R3  

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

Each system assessment uses a qualitative provisional posture framework across key assessment areas. Assessments do not compute numerical scores, ordered comparisons, or composite metrics. After Phase 1C source binding, they remain revalidated provisional and non-ranking.

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

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | No formal risk assessment framework visible | source-bound at entry-point level; implementation conformance unresolved |
| Data Governance | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Data governance primitives require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Documentation | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec, GitHub) | Protocol documentation strong; implementation documentation varies | source-bound at entry-point level; implementation examples remain deployment-context dependent |
| Record-Keeping | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Evidence pack structure visible; export/retention require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Transparency | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Transparency primitives require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Human Oversight | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Human-role-to-MAS mapping visible in protocol; enforcement requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Security | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Security primitives not protocol-level; require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Accountability | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Responsibility mapping visible in protocol; tracking requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Contestability | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Contestability primitives not protocol-level; require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Monitoring | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Monitoring primitives require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level mapping visible; implementation varies | source-bound at entry-point level; implementation conformance unresolved |
| Delegated Authority Boundary | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level boundary visible; enforcement requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Agent-Human Role Distinction | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level distinction visible; implementation varies | source-bound at entry-point level; implementation conformance unresolved |
| Accepted Outcome Compliance | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level outcome tracking visible; compliance enforcement requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Tool-Action Liability Boundary | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Protocol-level liability tracking visible; boundary enforcement requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Responsibility Transfer | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level transfer tracking visible; implementation varies | source-bound at entry-point level; implementation conformance unresolved |
| Authority Drift Detection | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Drift detection not protocol-level; requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| MAS Evidence Partitioning | Moderate provisional posture | Strong provisional posture | L2 (Protocol spec) | Protocol-level evidence partitioning visible; storage/retrieval require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Cross-Project Reuse Compliance | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Reuse tracking not protocol-level; requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Privacy/GDPR Lifecycle Mapping | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Privacy primitives require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Privacy-Preserving Validation | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Privacy-preserving validation not protocol-level; requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Evidence Minimization | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Minimization primitives require implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Rights-retention conflict resolution not protocol-level; requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Processor Chain Tracking | Weak / implementer-built posture | Partial provisional posture | L2 (Protocol spec) | Processor chain tracking not protocol-level; requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |
| Vendor/Model/Runtime Substitution | Partial provisional posture | Moderate provisional posture | L2 (Protocol spec) | Substitution conformance tracking requires implementer integration | source-bound at entry-point level; implementation conformance unresolved |

**MPLP Boundary Note:**

MPLP is positioned as a lifecycle protocol path with strong provisional ALCS semantic alignment at the protocol specification level. Protocol fit does not prove implementation conformance, legal compliance, enterprise readiness, adoption, or operational effectiveness. MPLP is not required, not exclusive, not certified, and not regulator-approved. Organizations may use MPLP, alternative protocols, or implementer-built solutions based on their requirements.

**Provisional Status:** REVALIDATED PROVISIONAL — Official MPLP documentation entry point located. Protocol identity is L2-supported; protocol-to-MRO/ALCS mapping remains L5 analytical interpretation unless directly stated in protocol text. Implementation conformance remains unresolved.

---

### G.2.2 IBM watsonx.governance

**Table T-G-02: IBM watsonx.governance Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Risk assessment framework visible; AI-specific risk integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance framework visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model cards and factsheets visible; system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Audit records visible; evidence export capability requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Explainability tools visible; interpretability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Approval workflows visible; human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Enterprise security controls visible; AI lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role assignment visible; responsibility tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Dispute resolution primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model monitoring visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role definitions visible; MAS responsibility mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Authority boundary primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role distinction visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Outcome compliance primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Liability boundary primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Transfer tracking primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Evidence partitioning visible; MAS-specific partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Reuse compliance primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Privacy controls visible; GDPR lifecycle mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data minimization visible; evidence minimization requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data subject rights visible; conflict resolution requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Processor chain tracking primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model substitution visible; conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official IBM source entry points located. RCCS-adjacent AI governance claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact IBM documentation directly supports the object.

---

### G.2.3 Microsoft Azure AI Foundry

**Table T-G-03: Microsoft Azure AI Foundry Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Risk monitoring visible; formal risk assessment framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive documentation visible; model cards and system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Logging and audit records visible; evidence export capability requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Transparency tools visible; explainability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Human oversight workflows visible; human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Enterprise security controls visible; AI lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role assignment visible; accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Moderate provisional posture | Partial provisional posture | L2 (Product docs) | Escalation workflows visible; formal contestability requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Monitoring and metrics visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Role mapping visible; MAS responsibility mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Authority controls visible; boundary enforcement requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Role distinction visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Outcome validation visible; compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action definitions visible; liability boundary tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Workflow handoff visible; responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Evidence partitioning visible; MAS-specific partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model versioning visible; reuse compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Privacy controls visible; GDPR lifecycle mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Shared responsibility model visible; processor chain tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official Microsoft source entry points located. Cloud AI platform, agent, tracing, evaluation, and monitoring claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact Microsoft documentation directly supports the object.

---

### G.2.4 AWS Bedrock / Guardrails / AgentCore

**Table T-G-04: AWS Bedrock / Guardrails / AgentCore Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Guardrails visible; formal risk assessment framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive AWS documentation visible; model cards and system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | CloudWatch logging and audit records visible; evidence export capability requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Trace logs visible; explainability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group approval visible; human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | IAM integration and encryption visible; AI lifecycle security requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM roles visible; accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Contestability primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | CloudWatch monitoring visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM role mapping visible; MAS responsibility mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group permissions visible; boundary enforcement requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent definitions and IAM roles visible; distinction mechanisms require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Guardrails for outcome validation visible; compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Action group definitions visible; liability boundary tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Agent orchestration visible; responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-agent CloudWatch logs visible; MAS evidence partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent versioning visible; reuse compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | AWS compliance controls visible; GDPR lifecycle mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | AWS shared responsibility model visible; processor chain tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official AWS source entry points located for Bedrock, Guardrails, and AgentCore. Guardrail, runtime, security, and observability claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact AWS documentation directly supports the object.

---

### G.2.5 Google Vertex AI / ADK / Model Armor

**Table T-G-05: Google Vertex AI / ADK / Model Armor Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model monitoring visible; formal risk assessment framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Data governance controls visible; lifecycle integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive Google Cloud documentation visible; model cards and system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Cloud Logging and audit records visible; evidence export capability requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Conversation logs visible; explainability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Human handoff visible; human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | IAM integration and encryption visible; AI lifecycle security requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM roles visible; accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Contestability primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Cloud Monitoring visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | IAM role mapping visible; MAS responsibility mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Tool permissions visible; boundary enforcement requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent definitions and IAM roles visible; distinction mechanisms require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Response validation visible; compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Tool definitions visible; liability boundary tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Agent orchestration visible; responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Drift detection primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-agent Cloud Logging visible; MAS evidence partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Agent versioning visible; reuse compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Google Cloud compliance controls visible; GDPR lifecycle mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Privacy-preserving validation primitives require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Log filtering visible; evidence minimization requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Retention policies visible; conflict resolution requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Google Cloud shared responsibility model visible; processor chain tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection and versioning visible; substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official Google source entry points located for Vertex AI, ADK, and Model Armor. Agent-development, model safety, evaluation, and platform claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact Google documentation directly supports the object.

---

### G.2.6 LangGraph / LangSmith

**Table T-G-06: LangGraph / LangSmith Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Callback mechanisms visible; formal risk assessment framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Data loaders visible; formal data governance framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Extensive API documentation visible; model cards and system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith tracing visible; formal audit trail and evidence export require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph visualization visible; explainability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Human-in-the-loop via interrupts visible; formal oversight framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | API key management visible; formal security framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node naming visible; formal accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Contestability primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith monitoring visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node definitions visible; formal human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Tool definitions visible; formal boundary enforcement requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Node types visible; formal distinction mechanisms require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Output validation visible; formal compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Tool definitions visible; formal liability boundary tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph edges visible; formal responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Drift detection primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | LangSmith per-node tracing visible; formal MAS evidence partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Graph serialization visible; formal reuse compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy/GDPR lifecycle mapping primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy-preserving validation primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Evidence minimization primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Rights-retention conflict resolution primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Processor chain tracking primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | Model abstraction visible; formal substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official LangGraph and LangSmith source entry points located. Orchestration, persistence, human-in-the-loop, tracing, and evaluation/observability claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact documentation directly supports the object.

---

### G.2.7 OpenAI Agents SDK

**Table T-G-07: OpenAI Agents SDK Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Usage monitoring visible; formal risk assessment framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | File management visible; formal data governance framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Strong provisional posture | Moderate provisional posture | L2 (Product docs) | Extensive API documentation and model cards visible; system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Thread history visible; formal audit trail and evidence export require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Run steps visible; explainability integration requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Function calling approval patterns visible; formal oversight framework requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Partial provisional posture | Partial provisional posture | L2 (Product docs) | API key management and SOC 2 compliance visible; formal AI lifecycle security requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant naming visible; formal accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Contestability primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Usage metrics visible; drift detection requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function calling visible; formal human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function definitions visible; formal boundary enforcement requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant/user message distinction visible; formal distinction mechanisms require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Output validation visible; formal compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Function calling visible; formal liability boundary tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Thread management visible; formal responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Drift detection primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Per-thread history visible; formal MAS evidence partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Partial provisional posture | Partial provisional posture | L2 (Product docs) | Assistant definitions visible; formal reuse compliance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data retention controls visible; formal GDPR lifecycle mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Privacy-preserving validation primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Evidence minimization primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Data deletion visible; formal conflict resolution requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs) | Processor chain tracking primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Moderate provisional posture | Moderate provisional posture | L2 (Product docs) | Model selection visible; formal substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official OpenAI Agents SDK source entry point located, with platform docs requiring final citation rendering/access check where applicable. Agent execution, tools, handoffs, guardrails, sessions, and tracing claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact documentation directly supports the object.

---

### G.2.8 CrewAI

**Table T-G-08: CrewAI Expanded Assessment**

| Assessment Area | Provisional RCCS Posture | Provisional ALCS Posture | Visible Evidence Type | Main Lifecycle Gap | Claim-Level Support Status |
|-----------------|--------------------------|--------------------------|----------------------|-------------------|---------------------------|
| Risk Management | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Risk management primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Governance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Data governance primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Documentation | Moderate provisional posture | Moderate provisional posture | L2 (Product docs, GitHub) | API documentation visible; model cards and system cards require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Record-Keeping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Task execution logs visible; formal audit trail and evidence export require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Transparency | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Transparency primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human Oversight | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Human oversight primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Security | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Security primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accountability | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent roles and task assignment visible; formal accountability tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Contestability | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Contestability primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Monitoring | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Monitoring primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Human-Role-to-MAS Mapping | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent roles and task delegation visible; formal human-role-to-MAS mapping requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Delegated Authority Boundary | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Authority boundary primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Agent-Human Role Distinction | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Agent role definitions visible; formal distinction mechanisms require validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Accepted Outcome Compliance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Outcome compliance primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Tool-Action Liability Boundary | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Liability boundary primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Responsibility Transfer | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Task delegation across agents visible; formal responsibility transfer tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Authority Drift Detection | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Drift detection primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| MAS Evidence Partitioning | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Per-agent task logs visible; formal MAS evidence partitioning requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Cross-Project Reuse Compliance | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Reuse compliance primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy/GDPR Lifecycle Mapping | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy/GDPR lifecycle mapping primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Privacy-Preserving Validation | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Privacy-preserving validation primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Evidence Minimization | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Evidence minimization primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Data Subject Rights vs Retention | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Rights-retention conflict resolution primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Processor Chain Tracking | Weak / implementer-built posture | Weak / implementer-built posture | L2 (Product docs, GitHub) | Processor chain tracking primitives require implementer integration | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |
| Vendor/Model/Runtime Substitution | Partial provisional posture | Partial provisional posture | L2 (Product docs, GitHub) | Model configuration visible; formal substitution conformance tracking requires validation | source-bound at entry-point level; exact lifecycle-object support not visible unless directly stated |

**Provisional Status:** REVALIDATED PROVISIONAL — Official CrewAI documentation and repository entry points located. Agent, task, crew/flow, tool, and orchestration claims are L2-supported at source-entry level; ALCS-specific lifecycle responsibility-object claims remain L5 unless exact CrewAI documentation directly supports the object.

---

## G.3 Cross-System Pattern Summary

**Table T-G-09: Cross-System Pattern Summary**

| Pattern Area | Observed Pattern | Systems with More Visible Posture | Systems with More Limited Visible Posture | Claim-Level Support Status |
|--------------|------------------|----------------------------|---------------------------|----------------------------|
| **RCCS Coverage** | Enterprise cloud platforms show stronger RCCS provisional posture due to integrated monitoring, logging, security, and governance controls | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | source-bound at entry-point level; integration support remains deployment-context dependent |
| **ALCS Coverage** | MPLP shows stronger visible ALCS provisional posture at protocol specification level; enterprise platforms show moderate visible posture; open-source frameworks show more limited visible posture | MPLP (protocol-level), Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | source-bound at entry-point level; ALCS implementation conformance unresolved |
| **Documentation** | All systems show strong to moderate documentation provisional posture; model cards and system cards require validation across all systems | All systems | None | source-bound at entry-point level; system-card support remains product- and deployment-dependent |
| **Record-Keeping** | Enterprise platforms show strong record-keeping provisional posture with cloud logging integration; open-source frameworks show partial to moderate posture | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI | source-bound at entry-point level; evidence export support remains deployment-context dependent |
| **Human Oversight** | Microsoft Azure AI Foundry shows stronger visible human oversight provisional posture; MPLP shows strong protocol-level posture; other systems show moderate to more limited visible posture | Microsoft Azure AI Foundry, MPLP (protocol-level) | CrewAI, LangGraph/LangSmith | source-bound at entry-point level; lifecycle responsibility-object support remains L5 unless directly stated |
| **Security** | Enterprise platforms show strong security provisional posture with IAM integration; open-source frameworks show weak to partial posture | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | source-bound at entry-point level; AI lifecycle security integration remains deployment-context dependent |
| **Accountability** | All systems show partial to moderate accountability provisional posture; formal accountability tracking requires validation across all systems | None | None | source-bound at entry-point level; accountability tracking remains L5 unless directly stated |
| **Contestability** | All systems show weak to partial contestability provisional posture; contestability primitives require implementer integration or validation | None | All systems | source-bound at entry-point level; contestability support remains implementation-context dependent |
| **Authority Drift Detection** | All systems show weak to partial authority drift detection provisional posture; drift detection primitives require implementer integration or validation | None | All systems | source-bound at entry-point level; authority drift support remains L5 unless directly stated |
| **Privacy/GDPR Lifecycle Mapping** | Enterprise platforms show moderate privacy provisional posture; open-source frameworks show more limited visible posture; formal GDPR lifecycle mapping requires validation | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith, OpenAI Agents SDK | source-bound at entry-point level; GDPR lifecycle-object support remains L5 unless directly stated |
| **Implementer-Built Gap** | Open-source frameworks (CrewAI, LangGraph/LangSmith) show significant implementer-built gaps across multiple assessment areas; enterprise platforms show fewer gaps | Microsoft Azure AI Foundry, AWS Bedrock, Google Vertex AI, IBM watsonx.governance | CrewAI, LangGraph/LangSmith | source-bound at entry-point level; platform-provided primitive boundaries remain provisional |

**Key Observations (Provisional):**

1. **Enterprise platforms show stronger RCCS provisional posture** due to integrated cloud platform capabilities (monitoring, logging, security, governance)
2. **MPLP shows stronger visible ALCS provisional posture at protocol specification level** but requires implementer integration for operational deployment
3. **All systems show gaps in contestability and authority drift detection** indicating industry-wide gaps in these capability primitives
4. **Open-source frameworks show significant implementer-built gaps** requiring organizations to build additional governance layers
5. **All assessments are provisional** after Phase 1C source binding and require final publication proofing before any finalized assessment posture

**CRITICAL REMINDER:** These patterns are provisional observations after Phase 1C claim-level source binding. They are not final assessment postures, product ordering, procurement recommendations, or certification.

---

## G.4 Claim-Level Source Support Note

**Appendix G has completed Phase 1C claim-level source binding and remains revalidated provisional.**

**Remaining finalization scope:**

1. **Pin exact source pages for each source-bound claim** — Source entry points have been located, but some claims still need exact page-level citation pinning.
2. **Preserve L5 mapping discipline** — Product documentation supporting adjacent platform features must not be treated as direct ALCS lifecycle responsibility-object proof.
3. **Retain no-score/no-ranking posture** — Qualitative postures remain analytical and provisional.
4. **Perform final citation rendering QA in Phase 1D** — No DOCX/PDF citation rendering has been generated in this phase.

**Systems not assessed in Appendix G:**

The following systems were mentioned in earlier phases but are not assessed in Appendix G. They may be considered for future versions:

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
