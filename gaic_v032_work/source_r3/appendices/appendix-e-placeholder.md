# Appendix E — RCCS Detailed Scoring Rubrics

**Version:** v0.3.2-FRC-R3  
**Status:** Reconstructed from v0.3.1 semantic base  
**Phase:** 1B-9

---

## E.0 RCCS Rubric Boundary

This appendix provides detailed scoring rubrics for all ten RCCS (Regulatory Compliance Coverage Score) dimensions. These rubrics are analytical tools for evaluating system capability to support regulatory compliance coverage primitives. They are not legal compliance scores, certifications, or regulatory approvals.

**Boundary statement:**

- **RCCS measures regulatory compliance coverage primitives.** RCCS evaluates whether a system provides primitives that can support regulatory compliance coverage requirements. It does not prove legal compliance, regulatory approval, certification, audit readiness, or operational effectiveness.

- **High RCCS scores do not prove legal compliance.** A high RCCS score indicates that a system provides primitives for regulatory compliance coverage. It does not prove that the system is legally compliant, operationally effective, or enterprise-ready.

- **Low RCCS scores do not prove non-compliance.** A low RCCS score indicates gaps in regulatory compliance coverage primitives. It does not prove that the system is non-compliant, unsafe, or unsuitable for deployment.

- **RCCS scores are context-independent.** RCCS scores measure system capability, not organizational practice. Organizations must interpret scores within their legal, regulatory, and operational context.

- **RCCS scores require evidence.** All scores must be supported by evidence. The evidence level (L1-L5) affects the score multiplier using the canonical formula from Phase 1B-8C.

- **RCCS scores are not product rankings.** Rubrics compare systems by regulatory compliance coverage primitives, not product quality, market leadership, or procurement suitability.

---

## E.1 How to Use RCCS Rubrics

**Scoring process:**

1. **Assess raw capability (0-5)** based on system capability against the rubric
2. **Identify evidence level (L1-L5)** based on source type
3. **Apply evidence multiplier** using canonical formula: Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier
4. **Document justification** explaining why the raw score and evidence level were assigned
5. **Add boundary note** clarifying what the score does and does not prove

**Canonical evidence multipliers (from Phase 1B-8C):**

- **L1 (Binding Legal Text):** 1.00
- **L2 (Product Docs):** 0.85
- **L3 (Audit Report):** 0.75
- **L4 (Vendor Claim):** 0.55
- **L5 (Author Inference):** 0.35

**Scoring scale:**

- **0:** No capability; no evidence
- **1:** Minimal capability; weak evidence
- **2:** Partial capability; some evidence
- **3:** Moderate capability; documented evidence
- **4:** Strong capability; validated evidence
- **5:** Complete capability demonstrated by implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts. Legal text may establish a regulatory baseline but does not by itself prove implementation.

**Negative controls:**

Each rubric includes negative controls to prevent overclaim. Negative controls distinguish adjacent capabilities from regulatory compliance coverage primitives.

---

## E.2 RCCS Detailed Rubrics

### RCCS-01: Risk Management

**Core question:** Does the system provide primitives for AI risk identification, assessment, mitigation, and monitoring?

**What counts:** Risk assessment frameworks, risk registers, risk mitigation controls, risk monitoring dashboards, risk escalation workflows

**What does not count:** General software risk management, non-AI-specific risk controls, risk management without AI lifecycle integration

**Table T-E-01: RCCS-01 Risk Management Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No risk management capability | None | No risk assessment, no risk register, no risk controls | N/A | Absence of risk management primitives |
| 1 | Minimal risk management | Vendor claim or marketing material | Risk management mentioned in marketing docs but no implementation details | Risk management mentioned ≠ risk management implemented | Vendor claim requires validation |
| 2 | Partial risk management | Product documentation with partial coverage | Risk assessment template exists but no risk register or monitoring | Risk template ≠ risk assessment workflow | Partial coverage; gaps exist |
| 3 | Moderate risk management | Product documentation with risk assessment and register | Risk assessment workflow, risk register, basic mitigation controls | Risk register ≠ risk monitoring or escalation | Moderate coverage; monitoring gaps exist |
| 4 | Strong risk management | Product documentation with risk assessment, register, mitigation, and monitoring | Risk assessment workflow, risk register, mitigation controls, risk monitoring dashboard | Risk monitoring ≠ risk escalation or continuous improvement | Strong coverage; escalation gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 9 risk management system requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-02: Data Governance

**Core question:** Does the system provide primitives for data governance including data quality, data lineage, data access control, and data retention?

**What counts:** Data quality checks, data lineage tracking, data access control, data retention policies, data subject rights workflows

**What does not count:** General database management, data storage without governance, data access control without lifecycle integration

**Table T-E-02: RCCS-02 Data Governance Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No data governance capability | None | No data quality checks, no data lineage, no data access control | N/A | Absence of data governance primitives |
| 1 | Minimal data governance | Vendor claim or marketing material | Data governance mentioned in marketing docs but no implementation details | Data governance mentioned ≠ data governance implemented | Vendor claim requires validation |
| 2 | Partial data governance | Product documentation with partial coverage | Data quality checks exist but no data lineage or retention policies | Data quality ≠ data lineage or retention | Partial coverage; lineage and retention gaps exist |
| 3 | Moderate data governance | Product documentation with data quality, lineage, and access control | Data quality checks, data lineage tracking, data access control | Data access control ≠ data retention or subject rights | Moderate coverage; retention and subject rights gaps exist |
| 4 | Strong data governance | Product documentation with data quality, lineage, access control, and retention | Data quality checks, data lineage tracking, data access control, data retention policies | Data retention ≠ data subject rights workflows | Strong coverage; subject rights gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | GDPR Article 5 data governance requirements; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-03: Documentation

**Core question:** Does the system provide primitives for AI system documentation including model cards, system cards, and technical documentation?

**What counts:** Model cards, system cards, technical documentation, API documentation, deployment documentation

**What does not count:** General software documentation, marketing materials, documentation without AI lifecycle integration

**Table T-E-03: RCCS-03 Documentation Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No documentation capability | None | No model cards, no system cards, no technical documentation | N/A | Absence of documentation primitives |
| 1 | Minimal documentation | Vendor claim or marketing material | Documentation mentioned in marketing docs but no implementation details | Documentation mentioned ≠ documentation implemented | Vendor claim requires validation |
| 2 | Partial documentation | Product documentation with partial coverage | Model card template exists but no system card or deployment documentation | Model card ≠ system card or deployment documentation | Partial coverage; system card and deployment gaps exist |
| 3 | Moderate documentation | Product documentation with model cards and system cards | Model card template, system card template, basic technical documentation | System card ≠ deployment documentation or API documentation | Moderate coverage; deployment and API gaps exist |
| 4 | Strong documentation | Product documentation with model cards, system cards, and technical documentation | Model card template, system card template, technical documentation, API documentation | API documentation ≠ deployment documentation or lifecycle documentation | Strong coverage; deployment and lifecycle gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 11 technical documentation requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-04: Record-Keeping

**Core question:** Does the system provide primitives for record-keeping including audit trails, logs, and evidence export?

**What counts:** Audit trails, logs, evidence export capability, log retention policies, log integrity validation

**What does not count:** General application logs, logs without lifecycle integration, logs without export capability

**Table T-E-04: RCCS-04 Record-Keeping Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No record-keeping capability | None | No audit trails, no logs, no evidence export | N/A | Absence of record-keeping primitives |
| 1 | Minimal record-keeping | Vendor claim or marketing material | Record-keeping mentioned in marketing docs but no implementation details | Record-keeping mentioned ≠ record-keeping implemented | Vendor claim requires validation |
| 2 | Partial record-keeping | Product documentation with partial coverage | Audit trails exist but no evidence export or retention policies | Audit trails ≠ evidence export or retention | Partial coverage; export and retention gaps exist |
| 3 | Moderate record-keeping | Product documentation with audit trails and evidence export | Audit trails, evidence export capability, basic log retention policies | Evidence export ≠ log integrity validation or selective disclosure | Moderate coverage; integrity and disclosure gaps exist |
| 4 | Strong record-keeping | Product documentation with audit trails, evidence export, and retention | Audit trails, evidence export capability, log retention policies, log integrity validation | Log integrity ≠ selective disclosure or evidence minimization | Strong coverage; disclosure and minimization gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 12 record-keeping requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-05: Transparency

**Core question:** Does the system provide primitives for transparency including explainability, interpretability, and disclosure?

**What counts:** Explainability tools, interpretability methods, disclosure mechanisms, transparency reports

**What does not count:** General UI transparency, transparency without AI lifecycle integration, transparency without disclosure capability

**Table T-E-05: RCCS-05 Transparency Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No transparency capability | None | No explainability, no interpretability, no disclosure | N/A | Absence of transparency primitives |
| 1 | Minimal transparency | Vendor claim or marketing material | Transparency mentioned in marketing docs but no implementation details | Transparency mentioned ≠ transparency implemented | Vendor claim requires validation |
| 2 | Partial transparency | Product documentation with partial coverage | Explainability tools exist but no interpretability or disclosure mechanisms | Explainability ≠ interpretability or disclosure | Partial coverage; interpretability and disclosure gaps exist |
| 3 | Moderate transparency | Product documentation with explainability and interpretability | Explainability tools, interpretability methods, basic disclosure mechanisms | Disclosure mechanisms ≠ transparency reports or selective disclosure | Moderate coverage; reporting and selective disclosure gaps exist |
| 4 | Strong transparency | Product documentation with explainability, interpretability, and disclosure | Explainability tools, interpretability methods, disclosure mechanisms, transparency reports | Transparency reports ≠ selective disclosure or evidence minimization | Strong coverage; selective disclosure and minimization gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 13 transparency requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-06: Human Oversight

**Core question:** Does the system provide primitives for human oversight including human-in-the-loop, human-on-the-loop, and human review workflows?

**What counts:** Human-in-the-loop workflows, human-on-the-loop monitoring, human review workflows, escalation mechanisms

**What does not count:** General approval buttons, human oversight without lifecycle integration, human oversight without accountability mapping

**Table T-E-06: RCCS-06 Human Oversight Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No human oversight capability | None | No human-in-the-loop, no human-on-the-loop, no human review | N/A | Absence of human oversight primitives |
| 1 | Minimal human oversight | Vendor claim or marketing material | Human oversight mentioned in marketing docs but no implementation details | Human oversight mentioned ≠ human oversight implemented | Vendor claim requires validation |
| 2 | Partial human oversight | Product documentation with partial coverage | Approval button exists but no human-role-to-MAS responsibility mapping or escalation | Approval button ≠ human-role-to-MAS responsibility mapping | Partial coverage; responsibility mapping and escalation gaps exist |
| 3 | Moderate human oversight | Product documentation with human-in-the-loop and human-on-the-loop | Human-in-the-loop workflows, human-on-the-loop monitoring, basic human review workflows | Human review ≠ escalation mechanisms or accountability mapping | Moderate coverage; escalation and accountability gaps exist |
| 4 | Strong human oversight | Product documentation with human-in-the-loop, human-on-the-loop, and escalation | Human-in-the-loop workflows, human-on-the-loop monitoring, human review workflows, escalation mechanisms | Escalation mechanisms ≠ accountability mapping or accepted outcome compliance | Strong coverage; accountability and accepted outcome gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 14 human oversight requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-07: Security

**Core question:** Does the system provide primitives for security including access control, authentication, authorization, and security monitoring?

**What counts:** Access control, authentication, authorization, security monitoring, security incident response

**What does not count:** General application security, security without AI lifecycle integration, security without lifecycle evidence

**Table T-E-07: RCCS-07 Security Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No security capability | None | No access control, no authentication, no authorization | N/A | Absence of security primitives |
| 1 | Minimal security | Vendor claim or marketing material | Security mentioned in marketing docs but no implementation details | Security mentioned ≠ security implemented | Vendor claim requires validation |
| 2 | Partial security | Product documentation with partial coverage | Access control exists but no authentication or authorization for AI lifecycle | Access control ≠ authentication or authorization | Partial coverage; authentication and authorization gaps exist |
| 3 | Moderate security | Product documentation with access control, authentication, and authorization | Access control, authentication, authorization, basic security monitoring | Security monitoring ≠ security incident response or lifecycle evidence | Moderate coverage; incident response and lifecycle evidence gaps exist |
| 4 | Strong security | Product documentation with access control, authentication, authorization, and monitoring | Access control, authentication, authorization, security monitoring, security incident response | Security incident response ≠ lifecycle evidence or delegated authority boundary | Strong coverage; lifecycle evidence and authority boundary gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | NIST AI RMF security requirements; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-08: Accountability

**Core question:** Does the system provide primitives for accountability including role assignment, responsibility mapping, and accountability tracking?

**What counts:** Role assignment, responsibility mapping, accountability tracking, accountability escalation

**What does not count:** General user management, accountability without lifecycle integration, accountability without accepted outcome compliance

**Table T-E-08: RCCS-08 Accountability Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No accountability capability | None | No role assignment, no responsibility mapping, no accountability tracking | N/A | Absence of accountability primitives |
| 1 | Minimal accountability | Vendor claim or marketing material | Accountability mentioned in marketing docs but no implementation details | Accountability mentioned ≠ accountability implemented | Vendor claim requires validation |
| 2 | Partial accountability | Product documentation with partial coverage | Role assignment exists but no responsibility mapping or accountability tracking | Role assignment ≠ responsibility mapping or accountability tracking | Partial coverage; responsibility mapping and tracking gaps exist |
| 3 | Moderate accountability | Product documentation with role assignment and responsibility mapping | Role assignment, responsibility mapping, basic accountability tracking | Accountability tracking ≠ accountability escalation or accepted outcome compliance | Moderate coverage; escalation and accepted outcome gaps exist |
| 4 | Strong accountability | Product documentation with role assignment, responsibility mapping, and tracking | Role assignment, responsibility mapping, accountability tracking, accountability escalation | Accountability escalation ≠ accepted outcome compliance or human-role-to-MAS mapping | Strong coverage; accepted outcome and human-role-to-MAS gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 26 accountability requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-09: Contestability

**Core question:** Does the system provide primitives for contestability including dispute resolution, appeal mechanisms, and remediation workflows?

**What counts:** Dispute resolution workflows, appeal mechanisms, remediation workflows, contestability tracking

**What does not count:** General customer support, contestability without lifecycle integration, contestability without remediation closure

**Table T-E-09: RCCS-09 Contestability Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No contestability capability | None | No dispute resolution, no appeal mechanisms, no remediation workflows | N/A | Absence of contestability primitives |
| 1 | Minimal contestability | Vendor claim or marketing material | Contestability mentioned in marketing docs but no implementation details | Contestability mentioned ≠ contestability implemented | Vendor claim requires validation |
| 2 | Partial contestability | Product documentation with partial coverage | Dispute resolution workflow exists but no appeal mechanisms or remediation workflows | Dispute resolution ≠ appeal mechanisms or remediation workflows | Partial coverage; appeal and remediation gaps exist |
| 3 | Moderate contestability | Product documentation with dispute resolution and appeal mechanisms | Dispute resolution workflows, appeal mechanisms, basic remediation workflows | Remediation workflows ≠ remediation closure or contestability tracking | Moderate coverage; closure and tracking gaps exist |
| 4 | Strong contestability | Product documentation with dispute resolution, appeal, and remediation | Dispute resolution workflows, appeal mechanisms, remediation workflows, contestability tracking | Contestability tracking ≠ remediation closure or incident/dispute/remediation closure | Strong coverage; closure gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | GDPR Article 22 right to contest automated decision-making; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

### RCCS-10: Monitoring

**Core question:** Does the system provide primitives for monitoring including performance monitoring, drift detection, and continuous improvement?

**What counts:** Performance monitoring, drift detection, continuous improvement workflows, monitoring dashboards

**What does not count:** General application monitoring, monitoring without AI lifecycle integration, monitoring without drift detection

**Table T-E-10: RCCS-10 Monitoring Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No monitoring capability | None | No performance monitoring, no drift detection, no continuous improvement | N/A | Absence of monitoring primitives |
| 1 | Minimal monitoring | Vendor claim or marketing material | Monitoring mentioned in marketing docs but no implementation details | Monitoring mentioned ≠ monitoring implemented | Vendor claim requires validation |
| 2 | Partial monitoring | Product documentation with partial coverage | Performance monitoring exists but no drift detection or continuous improvement | Performance monitoring ≠ drift detection or continuous improvement | Partial coverage; drift detection and continuous improvement gaps exist |
| 3 | Moderate monitoring | Product documentation with performance monitoring and drift detection | Performance monitoring, drift detection, basic continuous improvement workflows | Continuous improvement ≠ monitoring dashboards or authority drift detection | Moderate coverage; dashboards and authority drift gaps exist |
| 4 | Strong monitoring | Product documentation with performance monitoring, drift detection, and continuous improvement | Performance monitoring, drift detection, continuous improvement workflows, monitoring dashboards | Monitoring dashboards ≠ authority drift detection or lifecycle drift detection | Strong coverage; authority drift and lifecycle drift gaps may exist |
| 5 | Complete capability demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | EU AI Act Article 72 post-market monitoring requirement; implementation validated by audit or operational evidence | Legal text may establish regulatory baseline but does not prove system implementation | Complete capability requires implementation evidence; legal text alone insufficient |

---

## E.3 RCCS Evidence Requirements

**Evidence hierarchy:**

- **L1 (Binding Legal Text):** EU AI Act, GDPR, Colorado AI Act, formal standards (NIST AI RMF, ISO/IEC 42001)
- **L2 (Product Docs):** Official product documentation, protocol specifications, GitHub repositories
- **L3 (Audit Report):** Third-party audit reports, academic papers, industry reports
- **L4 (Vendor Claim):** Vendor claims, marketing materials, blog posts
- **L5 (Author Inference):** Author inference, analytical framework, logical derivation

**Evidence multiplier application:**

```
Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier

Where:
Raw Score = 0-5 based on capability assessment
Evidence Confidence Multiplier = L1=1.00, L2=0.85, L3=0.75, L4=0.55, L5=0.35
```

**Example:**

```
RCCS-04 Record-Keeping
Raw Score: 4 (Strong capability)
Evidence Level: L2 (Product documentation)
Evidence Multiplier: 0.85
Dimension Score: (4/5) × 100 × 0.85 = 68.0
```

---

## E.4 RCCS Scoring Notes and Negative Controls

**Negative controls prevent overclaim:**

1. **Risk management mentioned ≠ risk management implemented**
   - Vendor marketing materials may mention risk management without providing implementation details
   - Require product documentation or audit evidence to validate implementation

2. **Data quality ≠ data lineage or retention**
   - Data quality checks do not automatically provide data lineage tracking or retention policies
   - Require explicit evidence of lineage and retention capabilities

3. **Model card ≠ system card or deployment documentation**
   - Model cards document model-level information but do not provide system-level or deployment-level documentation
   - Require explicit evidence of system cards and deployment documentation

4. **Audit trails ≠ evidence export or retention**
   - Audit trails provide execution records but do not automatically provide evidence export or retention capabilities
   - Require explicit evidence of export and retention capabilities

5. **Explainability ≠ interpretability or disclosure**
   - Explainability tools provide post-hoc explanations but do not automatically provide interpretability methods or disclosure mechanisms
   - Require explicit evidence of interpretability and disclosure capabilities

6. **Approval button ≠ human-role-to-MAS responsibility mapping**
   - Approval buttons provide UI controls but do not automatically provide human-role-to-MAS responsibility mapping or accountability tracking
   - Require explicit evidence of responsibility mapping and accountability tracking

7. **Access control ≠ authentication or authorization**
   - Access control provides basic security but does not automatically provide authentication or authorization for AI lifecycle
   - Require explicit evidence of authentication and authorization capabilities

8. **Role assignment ≠ responsibility mapping or accountability tracking**
   - Role assignment provides user management but does not automatically provide responsibility mapping or accountability tracking
   - Require explicit evidence of responsibility mapping and accountability tracking

9. **Dispute resolution ≠ appeal mechanisms or remediation workflows**
   - Dispute resolution workflows provide basic contestability but do not automatically provide appeal mechanisms or remediation workflows
   - Require explicit evidence of appeal and remediation capabilities

10. **Performance monitoring ≠ drift detection or continuous improvement**
    - Performance monitoring provides basic observability but does not automatically provide drift detection or continuous improvement workflows
    - Require explicit evidence of drift detection and continuous improvement capabilities

**Boundary discipline:**

- RCCS measures regulatory compliance coverage primitives, not legal compliance
- High RCCS scores do not prove legal compliance, regulatory approval, or certification
- Low RCCS scores do not prove non-compliance or unsuitability
- RCCS scores are context-independent; organizations must interpret within their legal, regulatory, and operational context
- RCCS scores require evidence; evidence level affects score multiplier
- RCCS scores are not product rankings; they compare systems by regulatory compliance coverage primitives

---

**End of Appendix E**

**Appendix E Status:** FILLED (Phase 1B-9) — RCCS Detailed Scoring Rubrics complete; all 10 RCCS dimensions with detailed rubrics, evidence requirements, and negative controls.
