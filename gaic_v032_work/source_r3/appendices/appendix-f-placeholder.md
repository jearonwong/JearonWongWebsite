# Appendix F — ALCS Detailed Scoring Rubrics

**Version:** v0.3.2-FRC-R3  

---

## F.0 ALCS Rubric Boundary

This appendix provides detailed scoring rubrics for all fifteen ALCS (Agentic Lifecycle Conformance Score) dimensions. These rubrics are analytical tools for evaluating system capability to support agentic lifecycle responsibility object maturity. They are not legal compliance scores, certifications, or regulatory approvals.

**Boundary statement:**

- **ALCS measures agentic lifecycle responsibility object maturity.** ALCS evaluates whether a system provides primitives that can support agentic lifecycle responsibility tracking, delegation, and accountability. It does not prove legal compliance, regulatory approval, certification, audit readiness, or operational effectiveness.

- **High ALCS scores do not prove legal compliance.** A high ALCS score indicates that a system provides primitives for agentic lifecycle responsibility management. It does not prove that the system is legally compliant, operationally effective, or enterprise-ready.

- **Low ALCS scores do not prove non-compliance.** A low ALCS score indicates gaps in agentic lifecycle responsibility primitives. It does not prove that the system is non-compliant, unsafe, or unsuitable for deployment.

- **ALCS scores are context-independent.** ALCS scores measure system capability, not organizational practice. Organizations must interpret scores within their legal, regulatory, and operational context.

- **ALCS scores require evidence.** All scores must be supported by evidence. The evidence level (L1-L5) affects the score multiplier using the canonical formula from Phase 1B-8C.

- **ALCS scores are not product rankings.** Rubrics compare systems by agentic lifecycle responsibility primitives, not product quality, market leadership, or procurement suitability.

---

## F.1 How to Use ALCS Rubrics

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

In score-5 rows, legal references identify the regulatory baseline only. They do not count as implementation evidence unless paired with implementation artifacts, formal audit evidence, protocol-level evidence, or validated operational records.

**Negative controls:**

Each rubric includes negative controls to prevent overclaim. Negative controls distinguish adjacent capabilities from agentic lifecycle responsibility primitives.

---

## F.2 ALCS Detailed Rubrics

### ALCS-01: Human-Role-to-MAS Responsibility Mapping

**Core question:** Does the system provide primitives for mapping human roles to multi-agent system (MAS) responsibilities?

**What counts:** Human role definitions, MAS responsibility definitions, role-to-responsibility mapping, responsibility tracking, responsibility audit trails

**What does not count:** General user management, role assignment without MAS integration, responsibility tracking without lifecycle integration

**Table T-F-01: ALCS-01 Human-Role-to-MAS Responsibility Mapping Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No human-role-to-MAS mapping capability | None | No human role definitions, no MAS responsibility definitions, no mapping | N/A | Absence of human-role-to-MAS mapping primitives |
| 1 | Minimal human-role-to-MAS mapping | Vendor claim or marketing material | Human-role-to-MAS mapping mentioned in marketing docs but no implementation details | Mapping mentioned ≠ mapping implemented | Vendor claim requires validation |
| 2 | Partial human-role-to-MAS mapping | Product documentation with partial coverage | Human role definitions exist but no MAS responsibility definitions or mapping | Human roles ≠ MAS responsibilities or mapping | Partial coverage; MAS responsibility and mapping gaps exist |
| 3 | Moderate human-role-to-MAS mapping | Product documentation with human roles and MAS responsibilities | Human role definitions, MAS responsibility definitions, basic role-to-responsibility mapping | Role-to-responsibility mapping ≠ responsibility tracking or audit trails | Moderate coverage; tracking and audit gaps exist |
| 4 | Strong human-role-to-MAS mapping | Product documentation with human roles, MAS responsibilities, and tracking | Human role definitions, MAS responsibility definitions, role-to-responsibility mapping, responsibility tracking | Responsibility tracking ≠ responsibility audit trails or accepted outcome compliance | Strong coverage; audit and accepted outcome gaps may exist |
| 5 | Complete human-role-to-MAS mapping demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 14 human oversight requirement with MAS integration; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-02: Delegated Authority Boundary

**Core question:** Does the system provide primitives for defining and enforcing delegated authority boundaries between humans and agents?

**What counts:** Authority boundary definitions, authority delegation workflows, authority enforcement mechanisms, authority audit trails

**What does not count:** General permission systems, authority without lifecycle integration, authority without delegation tracking

**Table T-F-02: ALCS-02 Delegated Authority Boundary Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No delegated authority boundary capability | None | No authority boundary definitions, no delegation workflows, no enforcement | N/A | Absence of delegated authority boundary primitives |
| 1 | Minimal delegated authority boundary | Vendor claim or marketing material | Delegated authority mentioned in marketing docs but no implementation details | Authority mentioned ≠ authority implemented | Vendor claim requires validation |
| 2 | Partial delegated authority boundary | Product documentation with partial coverage | Authority boundary definitions exist but no delegation workflows or enforcement | Authority definitions ≠ delegation workflows or enforcement | Partial coverage; delegation and enforcement gaps exist |
| 3 | Moderate delegated authority boundary | Product documentation with authority boundaries and delegation | Authority boundary definitions, authority delegation workflows, basic enforcement mechanisms | Enforcement mechanisms ≠ authority audit trails or authority drift detection | Moderate coverage; audit and drift detection gaps exist |
| 4 | Strong delegated authority boundary | Product documentation with authority boundaries, delegation, and enforcement | Authority boundary definitions, authority delegation workflows, enforcement mechanisms, authority audit trails | Authority audit trails ≠ authority drift detection or responsibility transfer tracking | Strong coverage; drift detection and transfer tracking gaps may exist |
| 5 | Complete delegated authority boundary demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 14 human oversight with authority boundary requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-03: Agent Role vs Human Role Distinction

**Core question:** Does the system provide primitives for distinguishing agent roles from human roles in lifecycle workflows?

**What counts:** Agent role definitions, human role definitions, role distinction mechanisms, role-based access control, role audit trails

**What does not count:** General role-based access control, role distinction without lifecycle integration, role distinction without accountability tracking

**Table T-F-03: ALCS-03 Agent Role vs Human Role Distinction Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No agent-human role distinction capability | None | No agent role definitions, no human role definitions, no distinction mechanisms | N/A | Absence of agent-human role distinction primitives |
| 1 | Minimal agent-human role distinction | Vendor claim or marketing material | Agent-human role distinction mentioned in marketing docs but no implementation details | Distinction mentioned ≠ distinction implemented | Vendor claim requires validation |
| 2 | Partial agent-human role distinction | Product documentation with partial coverage | Agent role definitions exist but no human role definitions or distinction mechanisms | Agent roles ≠ human roles or distinction mechanisms | Partial coverage; human role and distinction gaps exist |
| 3 | Moderate agent-human role distinction | Product documentation with agent roles, human roles, and distinction | Agent role definitions, human role definitions, basic role distinction mechanisms | Role distinction ≠ role-based access control or role audit trails | Moderate coverage; access control and audit gaps exist |
| 4 | Strong agent-human role distinction | Product documentation with agent roles, human roles, distinction, and access control | Agent role definitions, human role definitions, role distinction mechanisms, role-based access control | Role-based access control ≠ role audit trails or accountability tracking | Strong coverage; audit and accountability gaps may exist |
| 5 | Complete agent-human role distinction demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 14 human oversight with role distinction requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-04: Accepted Outcome Compliance

**Core question:** Does the system provide primitives for tracking accepted outcomes and ensuring compliance with accepted outcome boundaries?

**What counts:** Accepted outcome definitions, outcome acceptance workflows, outcome compliance tracking, outcome audit trails

**What does not count:** General output validation, outcome tracking without acceptance workflows, outcome tracking without compliance enforcement

**Table T-F-04: ALCS-04 Accepted Outcome Compliance Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No accepted outcome compliance capability | None | No accepted outcome definitions, no acceptance workflows, no compliance tracking | N/A | Absence of accepted outcome compliance primitives |
| 1 | Minimal accepted outcome compliance | Vendor claim or marketing material | Accepted outcome compliance mentioned in marketing docs but no implementation details | Compliance mentioned ≠ compliance implemented | Vendor claim requires validation |
| 2 | Partial accepted outcome compliance | Product documentation with partial coverage | Accepted outcome definitions exist but no acceptance workflows or compliance tracking | Outcome definitions ≠ acceptance workflows or compliance tracking | Partial coverage; acceptance and compliance gaps exist |
| 3 | Moderate accepted outcome compliance | Product documentation with outcome definitions and acceptance workflows | Accepted outcome definitions, outcome acceptance workflows, basic compliance tracking | Compliance tracking ≠ outcome audit trails or compliance enforcement | Moderate coverage; audit and enforcement gaps exist |
| 4 | Strong accepted outcome compliance | Product documentation with outcome definitions, acceptance, and compliance | Accepted outcome definitions, outcome acceptance workflows, compliance tracking, outcome audit trails | Outcome audit trails ≠ compliance enforcement or responsibility transfer tracking | Strong coverage; enforcement and transfer tracking gaps may exist |
| 5 | Complete accepted outcome compliance demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 14 human oversight with outcome acceptance requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-05: Tool-Action Liability Boundary

**Core question:** Does the system provide primitives for defining and tracking tool-action liability boundaries?

**What counts:** Tool-action liability definitions, liability boundary enforcement, liability tracking, liability audit trails

**What does not count:** General tool usage tracking, liability tracking without boundary enforcement, liability tracking without lifecycle integration

**Table T-F-05: ALCS-05 Tool-Action Liability Boundary Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No tool-action liability boundary capability | None | No liability definitions, no boundary enforcement, no liability tracking | N/A | Absence of tool-action liability boundary primitives |
| 1 | Minimal tool-action liability boundary | Vendor claim or marketing material | Tool-action liability mentioned in marketing docs but no implementation details | Liability mentioned ≠ liability implemented | Vendor claim requires validation |
| 2 | Partial tool-action liability boundary | Product documentation with partial coverage | Liability definitions exist but no boundary enforcement or liability tracking | Liability definitions ≠ boundary enforcement or tracking | Partial coverage; enforcement and tracking gaps exist |
| 3 | Moderate tool-action liability boundary | Product documentation with liability definitions and boundary enforcement | Tool-action liability definitions, liability boundary enforcement, basic liability tracking | Liability tracking ≠ liability audit trails or responsibility transfer tracking | Moderate coverage; audit and transfer tracking gaps exist |
| 4 | Strong tool-action liability boundary | Product documentation with liability definitions, enforcement, and tracking | Tool-action liability definitions, liability boundary enforcement, liability tracking, liability audit trails | Liability audit trails ≠ responsibility transfer tracking or accepted outcome compliance | Strong coverage; transfer tracking and accepted outcome gaps may exist |
| 5 | Complete tool-action liability boundary demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 26 accountability with tool-action liability requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-06: Responsibility Transfer Across Agents

**Core question:** Does the system provide primitives for tracking responsibility transfer across agents in multi-agent workflows?

**What counts:** Responsibility transfer definitions, transfer workflows, transfer tracking, transfer audit trails

**What does not count:** General workflow orchestration, transfer tracking without responsibility mapping, transfer tracking without lifecycle integration

**Table T-F-06: ALCS-06 Responsibility Transfer Across Agents Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No responsibility transfer capability | None | No transfer definitions, no transfer workflows, no transfer tracking | N/A | Absence of responsibility transfer primitives |
| 1 | Minimal responsibility transfer | Vendor claim or marketing material | Responsibility transfer mentioned in marketing docs but no implementation details | Transfer mentioned ≠ transfer implemented | Vendor claim requires validation |
| 2 | Partial responsibility transfer | Product documentation with partial coverage | Transfer definitions exist but no transfer workflows or transfer tracking | Transfer definitions ≠ transfer workflows or tracking | Partial coverage; workflow and tracking gaps exist |
| 3 | Moderate responsibility transfer | Product documentation with transfer definitions and workflows | Responsibility transfer definitions, transfer workflows, basic transfer tracking | Transfer tracking ≠ transfer audit trails or cross-agent accountability | Moderate coverage; audit and accountability gaps exist |
| 4 | Strong responsibility transfer | Product documentation with transfer definitions, workflows, and tracking | Responsibility transfer definitions, transfer workflows, transfer tracking, transfer audit trails | Transfer audit trails ≠ cross-agent accountability or MAS evidence partitioning | Strong coverage; accountability and evidence partitioning gaps may exist |
| 5 | Complete responsibility transfer demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 26 accountability with multi-agent responsibility requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-07: Authority Drift Detection

**Core question:** Does the system provide primitives for detecting authority drift where agents exceed delegated authority boundaries?

**What counts:** Authority drift definitions, drift detection mechanisms, drift alerting, drift audit trails

**What does not count:** General anomaly detection, drift detection without authority boundary integration, drift detection without lifecycle integration

**Table T-F-07: ALCS-07 Authority Drift Detection Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No authority drift detection capability | None | No drift definitions, no drift detection, no drift alerting | N/A | Absence of authority drift detection primitives |
| 1 | Minimal authority drift detection | Vendor claim or marketing material | Authority drift detection mentioned in marketing docs but no implementation details | Drift detection mentioned ≠ drift detection implemented | Vendor claim requires validation |
| 2 | Partial authority drift detection | Product documentation with partial coverage | Drift definitions exist but no drift detection mechanisms or drift alerting | Drift definitions ≠ drift detection or alerting | Partial coverage; detection and alerting gaps exist |
| 3 | Moderate authority drift detection | Product documentation with drift definitions and detection | Authority drift definitions, drift detection mechanisms, basic drift alerting | Drift alerting ≠ drift audit trails or drift remediation workflows | Moderate coverage; audit and remediation gaps exist |
| 4 | Strong authority drift detection | Product documentation with drift definitions, detection, and alerting | Authority drift definitions, drift detection mechanisms, drift alerting, drift audit trails | Drift audit trails ≠ drift remediation workflows or continuous monitoring | Strong coverage; remediation and continuous monitoring gaps may exist |
| 5 | Complete authority drift detection demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 72 post-market monitoring with authority drift requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-08: MAS Evidence Partitioning

**Core question:** Does the system provide primitives for partitioning evidence by agent, role, and responsibility in multi-agent systems?

**What counts:** Evidence partitioning definitions, partitioning mechanisms, partitioned evidence storage, partitioned evidence retrieval

**What does not count:** General evidence storage, evidence partitioning without agent/role/responsibility mapping, evidence partitioning without lifecycle integration

**Table T-F-08: ALCS-08 MAS Evidence Partitioning Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No MAS evidence partitioning capability | None | No partitioning definitions, no partitioning mechanisms, no partitioned storage | N/A | Absence of MAS evidence partitioning primitives |
| 1 | Minimal MAS evidence partitioning | Vendor claim or marketing material | MAS evidence partitioning mentioned in marketing docs but no implementation details | Partitioning mentioned ≠ partitioning implemented | Vendor claim requires validation |
| 2 | Partial MAS evidence partitioning | Product documentation with partial coverage | Partitioning definitions exist but no partitioning mechanisms or partitioned storage | Partitioning definitions ≠ partitioning mechanisms or storage | Partial coverage; mechanism and storage gaps exist |
| 3 | Moderate MAS evidence partitioning | Product documentation with partitioning definitions and mechanisms | Evidence partitioning definitions, partitioning mechanisms, basic partitioned evidence storage | Partitioned storage ≠ partitioned evidence retrieval or selective disclosure | Moderate coverage; retrieval and disclosure gaps exist |
| 4 | Strong MAS evidence partitioning | Product documentation with partitioning definitions, mechanisms, and storage | Evidence partitioning definitions, partitioning mechanisms, partitioned evidence storage, partitioned evidence retrieval | Partitioned retrieval ≠ selective disclosure or evidence minimization | Strong coverage; disclosure and minimization gaps may exist |
| 5 | Complete MAS evidence partitioning demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 5 data minimization with MAS evidence requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-09: Cross-Project Reuse Compliance

**Core question:** Does the system provide primitives for ensuring compliance when reusing agents, models, or workflows across projects?

**What counts:** Reuse compliance definitions, reuse tracking, reuse validation, reuse audit trails

**What does not count:** General code reuse, reuse tracking without compliance validation, reuse tracking without lifecycle integration

**Table T-F-09: ALCS-09 Cross-Project Reuse Compliance Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No cross-project reuse compliance capability | None | No reuse compliance definitions, no reuse tracking, no reuse validation | N/A | Absence of cross-project reuse compliance primitives |
| 1 | Minimal cross-project reuse compliance | Vendor claim or marketing material | Cross-project reuse compliance mentioned in marketing docs but no implementation details | Reuse compliance mentioned ≠ reuse compliance implemented | Vendor claim requires validation |
| 2 | Partial cross-project reuse compliance | Product documentation with partial coverage | Reuse compliance definitions exist but no reuse tracking or reuse validation | Reuse definitions ≠ reuse tracking or validation | Partial coverage; tracking and validation gaps exist |
| 3 | Moderate cross-project reuse compliance | Product documentation with reuse definitions and tracking | Reuse compliance definitions, reuse tracking, basic reuse validation | Reuse validation ≠ reuse audit trails or compliance enforcement | Moderate coverage; audit and enforcement gaps exist |
| 4 | Strong cross-project reuse compliance | Product documentation with reuse definitions, tracking, and validation | Reuse compliance definitions, reuse tracking, reuse validation, reuse audit trails | Reuse audit trails ≠ compliance enforcement or vendor substitution conformance | Strong coverage; enforcement and substitution gaps may exist |
| 5 | Complete cross-project reuse compliance demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 43 conformity assessment with reuse requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-10: Privacy/GDPR Lifecycle Mapping

**Core question:** Does the system provide primitives for mapping privacy and GDPR requirements to AI lifecycle stages?

**What counts:** Privacy lifecycle mapping definitions, GDPR requirement mapping, lifecycle stage integration, privacy audit trails

**What does not count:** General privacy controls, privacy mapping without lifecycle integration, privacy mapping without GDPR-specific requirements

**Table T-F-10: ALCS-10 Privacy/GDPR Lifecycle Mapping Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No privacy/GDPR lifecycle mapping capability | None | No privacy mapping definitions, no GDPR requirement mapping, no lifecycle integration | N/A | Absence of privacy/GDPR lifecycle mapping primitives |
| 1 | Minimal privacy/GDPR lifecycle mapping | Vendor claim or marketing material | Privacy/GDPR lifecycle mapping mentioned in marketing docs but no implementation details | Mapping mentioned ≠ mapping implemented | Vendor claim requires validation |
| 2 | Partial privacy/GDPR lifecycle mapping | Product documentation with partial coverage | Privacy mapping definitions exist but no GDPR requirement mapping or lifecycle integration | Privacy definitions ≠ GDPR mapping or lifecycle integration | Partial coverage; GDPR and lifecycle gaps exist |
| 3 | Moderate privacy/GDPR lifecycle mapping | Product documentation with privacy mapping and GDPR requirements | Privacy lifecycle mapping definitions, GDPR requirement mapping, basic lifecycle stage integration | Lifecycle integration ≠ privacy audit trails or data subject rights workflows | Moderate coverage; audit and data subject rights gaps exist |
| 4 | Strong privacy/GDPR lifecycle mapping | Product documentation with privacy mapping, GDPR requirements, and lifecycle integration | Privacy lifecycle mapping definitions, GDPR requirement mapping, lifecycle stage integration, privacy audit trails | Privacy audit trails ≠ data subject rights workflows or evidence minimization | Strong coverage; data subject rights and minimization gaps may exist |
| 5 | Complete privacy/GDPR lifecycle mapping demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 25 data protection by design with AI lifecycle requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-11: Privacy-Preserving Third-Party Validation

**Core question:** Does the system provide primitives for third-party validation while preserving privacy and minimizing evidence disclosure?

**What counts:** Privacy-preserving validation mechanisms, selective disclosure controls, third-party validation workflows, validation audit trails

**What does not count:** General third-party access, validation without privacy controls, validation without selective disclosure

**Table T-F-11: ALCS-11 Privacy-Preserving Third-Party Validation Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No privacy-preserving third-party validation capability | None | No privacy-preserving validation, no selective disclosure, no validation workflows | N/A | Absence of privacy-preserving third-party validation primitives |
| 1 | Minimal privacy-preserving third-party validation | Vendor claim or marketing material | Privacy-preserving validation mentioned in marketing docs but no implementation details | Validation mentioned ≠ validation implemented | Vendor claim requires validation |
| 2 | Partial privacy-preserving third-party validation | Product documentation with partial coverage | Privacy-preserving validation mechanisms exist but no selective disclosure or validation workflows | Privacy mechanisms ≠ selective disclosure or workflows | Partial coverage; disclosure and workflow gaps exist |
| 3 | Moderate privacy-preserving third-party validation | Product documentation with privacy mechanisms and selective disclosure | Privacy-preserving validation mechanisms, selective disclosure controls, basic third-party validation workflows | Validation workflows ≠ validation audit trails or evidence minimization | Moderate coverage; audit and minimization gaps exist |
| 4 | Strong privacy-preserving third-party validation | Product documentation with privacy mechanisms, disclosure, and workflows | Privacy-preserving validation mechanisms, selective disclosure controls, third-party validation workflows, validation audit trails | Validation audit trails ≠ evidence minimization or zero-knowledge proofs | Strong coverage; minimization and zero-knowledge gaps may exist |
| 5 | Complete privacy-preserving third-party validation demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 5 data minimization with third-party validation requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-12: Evidence Minimization and Selective Disclosure

**Core question:** Does the system provide primitives for evidence minimization and selective disclosure to reduce privacy risk?

**What counts:** Evidence minimization policies, selective disclosure mechanisms, disclosure controls, minimization audit trails

**What does not count:** General data minimization, minimization without lifecycle integration, minimization without selective disclosure controls

**Table T-F-12: ALCS-12 Evidence Minimization and Selective Disclosure Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No evidence minimization capability | None | No minimization policies, no selective disclosure, no disclosure controls | N/A | Absence of evidence minimization primitives |
| 1 | Minimal evidence minimization | Vendor claim or marketing material | Evidence minimization mentioned in marketing docs but no implementation details | Minimization mentioned ≠ minimization implemented | Vendor claim requires validation |
| 2 | Partial evidence minimization | Product documentation with partial coverage | Minimization policies exist but no selective disclosure mechanisms or disclosure controls | Minimization policies ≠ selective disclosure or controls | Partial coverage; disclosure and control gaps exist |
| 3 | Moderate evidence minimization | Product documentation with minimization policies and selective disclosure | Evidence minimization policies, selective disclosure mechanisms, basic disclosure controls | Disclosure controls ≠ minimization audit trails or retention enforcement | Moderate coverage; audit and retention gaps exist |
| 4 | Strong evidence minimization | Product documentation with minimization policies, disclosure, and controls | Evidence minimization policies, selective disclosure mechanisms, disclosure controls, minimization audit trails | Minimization audit trails ≠ retention enforcement or data subject rights integration | Strong coverage; retention and data subject rights gaps may exist |
| 5 | Complete evidence minimization demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 5 data minimization requirement; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-13: Data Subject Rights vs Evidence Retention

**Core question:** Does the system provide primitives for balancing data subject rights (erasure, portability) with evidence retention requirements?

**What counts:** Data subject rights workflows, evidence retention policies, rights-retention conflict resolution, conflict audit trails

**What does not count:** General data subject rights, rights workflows without evidence retention integration, rights workflows without conflict resolution

**Table T-F-13: ALCS-13 Data Subject Rights vs Evidence Retention Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No data subject rights vs evidence retention capability | None | No data subject rights workflows, no evidence retention policies, no conflict resolution | N/A | Absence of data subject rights vs evidence retention primitives |
| 1 | Minimal data subject rights vs evidence retention | Vendor claim or marketing material | Data subject rights vs evidence retention mentioned in marketing docs but no implementation details | Rights-retention mentioned ≠ rights-retention implemented | Vendor claim requires validation |
| 2 | Partial data subject rights vs evidence retention | Product documentation with partial coverage | Data subject rights workflows exist but no evidence retention policies or conflict resolution | Rights workflows ≠ retention policies or conflict resolution | Partial coverage; retention and conflict resolution gaps exist |
| 3 | Moderate data subject rights vs evidence retention | Product documentation with rights workflows and retention policies | Data subject rights workflows, evidence retention policies, basic rights-retention conflict resolution | Conflict resolution ≠ conflict audit trails or legal basis tracking | Moderate coverage; audit and legal basis gaps exist |
| 4 | Strong data subject rights vs evidence retention | Product documentation with rights workflows, retention policies, and conflict resolution | Data subject rights workflows, evidence retention policies, rights-retention conflict resolution, conflict audit trails | Conflict audit trails ≠ legal basis tracking or regulatory exemption tracking | Strong coverage; legal basis and exemption tracking gaps may exist |
| 5 | Complete data subject rights vs evidence retention demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 17 right to erasure with legal basis exemptions; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-14: Third-Party Processor/Subprocessor Chain

**Core question:** Does the system provide primitives for tracking third-party processor and subprocessor chains in AI lifecycle workflows?

**What counts:** Processor chain definitions, processor tracking, processor compliance validation, processor audit trails

**What does not count:** General vendor management, processor tracking without compliance validation, processor tracking without lifecycle integration

**Table T-F-14: ALCS-14 Third-Party Processor/Subprocessor Chain Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No third-party processor chain capability | None | No processor chain definitions, no processor tracking, no compliance validation | N/A | Absence of third-party processor chain primitives |
| 1 | Minimal third-party processor chain | Vendor claim or marketing material | Third-party processor chain mentioned in marketing docs but no implementation details | Processor chain mentioned ≠ processor chain implemented | Vendor claim requires validation |
| 2 | Partial third-party processor chain | Product documentation with partial coverage | Processor chain definitions exist but no processor tracking or compliance validation | Processor definitions ≠ processor tracking or validation | Partial coverage; tracking and validation gaps exist |
| 3 | Moderate third-party processor chain | Product documentation with processor definitions and tracking | Processor chain definitions, processor tracking, basic processor compliance validation | Compliance validation ≠ processor audit trails or subprocessor notification | Moderate coverage; audit and notification gaps exist |
| 4 | Strong third-party processor chain | Product documentation with processor definitions, tracking, and validation | Processor chain definitions, processor tracking, processor compliance validation, processor audit trails | Processor audit trails ≠ subprocessor notification or data transfer impact assessment | Strong coverage; notification and impact assessment gaps may exist |
| 5 | Complete third-party processor chain demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: GDPR Article 28 processor requirements with subprocessor chain tracking; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

### ALCS-15: Vendor/Model/Runtime Substitution Conformance

**Core question:** Does the system provide primitives for ensuring conformance when substituting vendors, models, or runtimes?

**What counts:** Substitution conformance definitions, substitution tracking, substitution validation, substitution audit trails

**What does not count:** General configuration management, substitution tracking without conformance validation, substitution tracking without lifecycle integration

**Table T-F-15: ALCS-15 Vendor/Model/Runtime Substitution Conformance Detailed Rubric**

| Score | Capability Level | Required Evidence | Example Evidence Artifact | Negative Control | Boundary Note |
|-------|------------------|-------------------|---------------------------|------------------|---------------|
| 0 | No vendor/model/runtime substitution conformance capability | None | No substitution conformance definitions, no substitution tracking, no substitution validation | N/A | Absence of vendor/model/runtime substitution conformance primitives |
| 1 | Minimal vendor/model/runtime substitution conformance | Vendor claim or marketing material | Substitution conformance mentioned in marketing docs but no implementation details | Substitution mentioned ≠ substitution implemented | Vendor claim requires validation |
| 2 | Partial vendor/model/runtime substitution conformance | Product documentation with partial coverage | Substitution conformance definitions exist but no substitution tracking or substitution validation | Substitution definitions ≠ substitution tracking or validation | Partial coverage; tracking and validation gaps exist |
| 3 | Moderate vendor/model/runtime substitution conformance | Product documentation with substitution definitions and tracking | Substitution conformance definitions, substitution tracking, basic substitution validation | Substitution validation ≠ substitution audit trails or cross-project reuse compliance | Moderate coverage; audit and reuse compliance gaps exist |
| 4 | Strong vendor/model/runtime substitution conformance | Product documentation with substitution definitions, tracking, and validation | Substitution conformance definitions, substitution tracking, substitution validation, substitution audit trails | Substitution audit trails ≠ cross-project reuse compliance or evidence re-partitioning | Strong coverage; reuse compliance and re-partitioning gaps may exist |
| 5 | Complete vendor/model/runtime substitution conformance demonstrated by implementation evidence | Implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts | Legal baseline: EU AI Act Article 43 conformity assessment with substitution requirements; implementation evidence: audit report, operational artifact, protocol evidence, or validated workflow record | Legal text may establish regulatory baseline but does not prove ALCS implementation | Complete ALCS capability requires implementation evidence; legal text alone insufficient |

---

## F.3 ALCS Evidence Requirements

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
ALCS-01 Human-Role-to-MAS Responsibility Mapping
Raw Score: 3 (Moderate capability)
Evidence Level: L2 (Product documentation)
Evidence Multiplier: 0.85
Dimension Score: (3/5) × 100 × 0.85 = 51.0
```

---

## F.4 ALCS Scoring Notes and Negative Controls

**Negative controls prevent overclaim:**

1. **Human-role-to-MAS mapping mentioned ≠ mapping implemented**
   - Vendor marketing materials may mention human-role-to-MAS mapping without providing implementation details
   - Require product documentation or audit evidence to validate implementation

2. **Authority definitions ≠ delegation workflows or enforcement**
   - Authority boundary definitions do not automatically provide delegation workflows or enforcement mechanisms
   - Require explicit evidence of delegation and enforcement capabilities

3. **Agent roles ≠ human roles or distinction mechanisms**
   - Agent role definitions do not automatically provide human role definitions or distinction mechanisms
   - Require explicit evidence of human roles and distinction capabilities

4. **Outcome definitions ≠ acceptance workflows or compliance tracking**
   - Accepted outcome definitions do not automatically provide acceptance workflows or compliance tracking
   - Require explicit evidence of acceptance and compliance capabilities

5. **Liability definitions ≠ boundary enforcement or tracking**
   - Tool-action liability definitions do not automatically provide boundary enforcement or liability tracking
   - Require explicit evidence of enforcement and tracking capabilities

6. **Transfer definitions ≠ transfer workflows or tracking**
   - Responsibility transfer definitions do not automatically provide transfer workflows or transfer tracking
   - Require explicit evidence of workflows and tracking capabilities

7. **Drift definitions ≠ drift detection or alerting**
   - Authority drift definitions do not automatically provide drift detection mechanisms or drift alerting
   - Require explicit evidence of detection and alerting capabilities

8. **Partitioning definitions ≠ partitioning mechanisms or storage**
   - Evidence partitioning definitions do not automatically provide partitioning mechanisms or partitioned storage
   - Require explicit evidence of mechanisms and storage capabilities

9. **Reuse definitions ≠ reuse tracking or validation**
   - Cross-project reuse compliance definitions do not automatically provide reuse tracking or reuse validation
   - Require explicit evidence of tracking and validation capabilities

10. **Privacy definitions ≠ GDPR mapping or lifecycle integration**
    - Privacy lifecycle mapping definitions do not automatically provide GDPR requirement mapping or lifecycle integration
    - Require explicit evidence of GDPR mapping and lifecycle integration capabilities

11. **Privacy mechanisms ≠ selective disclosure or workflows**
    - Privacy-preserving validation mechanisms do not automatically provide selective disclosure controls or validation workflows
    - Require explicit evidence of disclosure and workflow capabilities

12. **Minimization policies ≠ selective disclosure or controls**
    - Evidence minimization policies do not automatically provide selective disclosure mechanisms or disclosure controls
    - Require explicit evidence of disclosure and control capabilities

13. **Rights workflows ≠ retention policies or conflict resolution**
    - Data subject rights workflows do not automatically provide evidence retention policies or conflict resolution
    - Require explicit evidence of retention and conflict resolution capabilities

14. **Processor definitions ≠ processor tracking or validation**
    - Processor chain definitions do not automatically provide processor tracking or compliance validation
    - Require explicit evidence of tracking and validation capabilities

15. **Substitution definitions ≠ substitution tracking or validation**
    - Vendor/model/runtime substitution conformance definitions do not automatically provide substitution tracking or substitution validation
    - Require explicit evidence of tracking and validation capabilities

**Boundary discipline:**

- ALCS measures agentic lifecycle responsibility object maturity, not legal compliance
- High ALCS scores do not prove legal compliance, regulatory approval, or certification
- Low ALCS scores do not prove non-compliance or unsuitability
- ALCS scores are context-independent; organizations must interpret within their legal, regulatory, and operational context
- ALCS scores require evidence; evidence level affects score multiplier
- ALCS scores are not product rankings; they compare systems by agentic lifecycle responsibility primitives

**ALCS vs RCCS distinction:**

- **RCCS** measures regulatory compliance coverage primitives (risk management, data governance, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, monitoring)
- **ALCS** measures agentic lifecycle responsibility object maturity (human-role-to-MAS mapping, delegated authority boundary, agent-human role distinction, accepted outcome compliance, tool-action liability boundary, responsibility transfer, authority drift detection, MAS evidence partitioning, cross-project reuse compliance, privacy/GDPR lifecycle mapping, privacy-preserving third-party validation, evidence minimization, data subject rights vs evidence retention, third-party processor chain, vendor/model/runtime substitution conformance)
- **RCCS** focuses on regulatory compliance coverage capabilities
- **ALCS** focuses on agentic lifecycle responsibility tracking and accountability capabilities
- Both are analytical tools, not legal compliance scores

**Composite score formula (from Phase 1B-8C):**

```
Composite Score = 0.40 × RCCS + 0.60 × ALCS

Where:
RCCS = Average of 10 RCCS dimension scores (0-100)
ALCS = Average of 15 ALCS dimension scores (0-100)
Composite Score = Weighted average (0-100)
```

**Example:**

```
RCCS Adjusted Score: 65.0 (across 10 dimensions, 0-100)
ALCS Adjusted Score: 55.0 (across 15 dimensions, 0-100)
Composite Score: 0.40 × 65.0 + 0.60 × 55.0 = 26.0 + 33.0 = 59.0
```
