# Appendix B — Scorecard Template

**Version:** v0.3.2-FRC-R3  
**Status:** Reconstructed from v0.3.1 semantic base  
**Phase:** 1B-8

---

## B.0 Scorecard Boundary

This appendix provides reusable RCCS/ALCS scorecard templates for system evaluation and gap analysis. These templates are analytical tools, not legal compliance scores, certifications, or regulatory approvals.

**Boundary statement:**

- **Scorecards are analytical tools only.** RCCS and ALCS scores measure regulatory compliance coverage and lifecycle responsibility object maturity. They do not prove legal compliance, regulatory approval, or certification.

- **High scores do not guarantee compliance.** A high RCCS or ALCS score indicates that a system provides primitives for regulatory compliance coverage or lifecycle responsibility objects. It does not prove that the system is legally compliant, operationally effective, or enterprise-ready.

- **Low scores do not prove non-compliance.** A low RCCS or ALCS score indicates gaps in regulatory compliance coverage or lifecycle responsibility object maturity. It does not prove that the system is non-compliant, unsafe, or unsuitable for deployment.

- **Scores are context-independent.** RCCS and ALCS scores measure system capability, not organizational practice. Organizations must interpret scores within their legal, regulatory, and operational context.

- **Scores require evidence.** All scores must be supported by evidence. The evidence level (L1-L5) affects the score multiplier. Scores without evidence are not valid.

- **Scores are not product rankings.** Scorecards compare systems by responsibility semantics, not product quality, market leadership, or procurement suitability.

---

## B.1 Dimension-Level Scoring Template

The following template supports dimension-level scoring for RCCS and ALCS dimensions.

**Table T-B-01: RCCS/ALCS Dimension Scorecard Template**

| System | Dimension | Raw Score 0-5 | Evidence Level | Multiplier | Adjusted Score | Justification | Boundary Note |
|--------|-----------|---------------|----------------|------------|----------------|---------------|---------------|
| Example System | RCCS-04: Record-Keeping | 4 | L2: Product Docs | 0.85 | 68.0 | System provides audit trail API and log export capability documented in official product docs | Score measures capability, not organizational practice; does not prove legal compliance |
| Example System | ALCS-02: Delegated Authority Boundary | 3 | L3: Audit Report | 0.75 | 45.0 | System supports authority grant records and boundary violation alerts per third-party audit report | Score measures capability, not operational enforcement; does not prove regulatory approval |
| Example System | RCCS-06: Human Oversight | 2 | L4: Vendor Claim | 0.55 | 22.0 | Vendor claims human-in-the-loop capability but no public documentation or audit evidence | Score reflects vendor claim only; requires validation; does not prove human oversight is operational |
| Example System | RCCS-04: Record-Keeping | 5 | L1: EU AI Act Article 12 | 1.00 | 100.0 | EU AI Act Article 12 establishes record-keeping baseline; mapping system capability to Article 12 requirements is analytical interpretation | Score reflects regulatory baseline; mapping to system capability is analytical; does not prove legal compliance |

**Scoring rubric:**

- **0:** No capability; no evidence
- **1:** Minimal capability; weak evidence
- **2:** Partial capability; some evidence
- **3:** Moderate capability; documented evidence
- **4:** Strong capability; validated evidence
- **5:** Complete capability demonstrated by implementation evidence, formal audit evidence, protocol-level evidence, or validated operational artifacts. Legal text may establish a regulatory baseline but does not by itself prove implementation.

**Evidence level multipliers:**

- **L1 (Binding Legal Text):** 1.00
- **L2 (Product Docs):** 0.85
- **L3 (Audit Report):** 0.75
- **L4 (Vendor Claim):** 0.55
- **L5 (Author Inference):** 0.35

---

## B.2 Evidence-Level Adjustment Template

The following template supports evidence-level adjustment for dimension scores.

**Evidence-level adjustment policy:**

1. **Start with raw score (0-5)** based on system capability assessment
2. **Identify evidence level (L1-L5)** based on source type
3. **Apply multiplier** to calculate adjusted score using normalized formula: (Raw Score / 5) × 100 × Evidence Multiplier
4. **Document justification** explaining why the raw score and evidence level were assigned
5. **Add boundary note** clarifying what the score does and does not prove

**Example:**

```yaml
dimension: RCCS-04 Record-Keeping
raw_score: 4
evidence_level: L2
multiplier: 0.85
adjusted_score: 68.0  # (4/5) × 100 × 0.85
justification: "System provides audit trail API and log export capability documented in official product docs"
boundary_note: "Score measures capability, not organizational practice; does not prove legal compliance"
```

---

## B.3 Composite Score Template

The following template supports composite score calculation combining RCCS and ALCS.

**Table T-B-02: Composite Score Worksheet**

| System | RCCS Average | ALCS Average | RCCS Weight | ALCS Weight | Composite Score | Interpretation Boundary |
|--------|--------------|--------------|-------------|-------------|-----------------|------------------------|
| Example System A | 3.5 | 2.8 | 0.40 | 0.60 | 3.08 | Composite score is analytical tool; does not prove legal compliance or regulatory approval |
| Example System B | 2.9 | 4.2 | 0.40 | 0.60 | 3.68 | Strong ALCS posture indicates lifecycle responsibility object maturity; does not prove operational effectiveness |
| Example System C | 4.1 | 2.3 | 0.40 | 0.60 | 3.02 | Strong RCCS posture indicates regulatory compliance coverage primitives; does not prove legal compliance |

**Composite score formula:**

```
Composite Score = (RCCS Average × RCCS Weight) + (ALCS Average × ALCS Weight)
```

**Default weights:**

- **RCCS Weight:** 0.40
- **ALCS Weight:** 0.60

**Interpretation guidance:**

- **Composite score 4.0-5.0:** Strong regulatory compliance coverage and lifecycle responsibility object maturity; does not prove legal compliance
- **Composite score 3.0-3.9:** Moderate regulatory compliance coverage and lifecycle responsibility object maturity; gaps exist
- **Composite score 2.0-2.9:** Partial regulatory compliance coverage and lifecycle responsibility object maturity; significant gaps exist
- **Composite score 1.0-1.9:** Weak regulatory compliance coverage and lifecycle responsibility object maturity; major gaps exist
- **Composite score 0.0-0.9:** Minimal regulatory compliance coverage and lifecycle responsibility object maturity; fundamental gaps exist

---

## B.4 Score Delta Record Template

The following template supports tracking score changes over time.

**Table T-B-03: Score Delta Record**

| Dimension | Previous Score | Updated Score | Reason for Change | Evidence Change | Reviewer | Date |
|-----------|----------------|---------------|-------------------|-----------------|----------|------|
| RCCS-04: Record-Keeping | 3.2 | 3.6 | System added evidence export API with selective disclosure capability | L2 product docs updated with new API documentation | Governance Team | 2026-05-10 |
| ALCS-02: Delegated Authority Boundary | 2.7 | 3.5 | System added authority drift detection and reauthorization workflow | L3 audit report validated new capability | Compliance Team | 2026-05-10 |
| RCCS-06: Human Oversight | 1.2 | 2.4 | Vendor published official documentation for human-in-the-loop capability | Evidence level upgraded from L4 (vendor claim) to L2 (product docs) | Governance Team | 2026-05-10 |

**Score delta policy:**

- **Track all score changes** with reason for change, evidence change, reviewer, and date
- **Require reviewer approval** for all score changes
- **Document evidence change** explaining why the score changed (new capability, new evidence, evidence level upgrade, etc.)
- **Preserve score history** to support audit trail and continuous improvement

---

## B.5 Negative Control Template

The following template supports negative control to prevent overclaim.

**Table T-B-04: Negative Control Checklist**

| Claim | Adjacent Capability | Why It Does Not Count | Required Evidence | Reviewer Note |
|-------|---------------------|----------------------|-------------------|---------------|
| "System provides human oversight" | System has approval button in UI | Approval button ≠ human-role-to-MAS responsibility mapping; no role assignment records; no acceptance records; no escalation workflow | Human-role-to-MAS responsibility mapping (MRO-01); acceptance records (MRO-04); escalation workflow | Approval button is UI feature, not lifecycle governance object |
| "System provides evidence chain" | System has logs | Logs ≠ partitioned evidence chain; no evidence export capability; no selective disclosure; no evidence integrity validation | MAS evidence partitioning (MRO-08); evidence export capability; selective disclosure; evidence integrity validation | Logs are execution records, not lifecycle responsibility evidence |
| "System provides authority boundary" | System has access control | Access control ≠ delegated authority boundary; no authority grant records; no boundary violation alerts; no drift detection | Delegated authority boundary (MRO-02); authority grant records; boundary violation alerts; drift detection | Access control is security feature, not lifecycle governance object |
| "System provides accepted outcome compliance" | Orchestrator marks task complete | Task completion ≠ accepted outcome; no accountable human role; no acceptance records; no review workflow | Accepted outcome compliance (MRO-04); human-role-to-MAS responsibility mapping (MRO-01); acceptance records; review workflow | Execution completion ≠ accepted outcome |
| "System provides privacy-preserving validation" | System has data export | Data export ≠ privacy-preserving validation; no disclosure profile; no redaction profile; no hash manifests; no verdict hashes | Privacy-preserving third-party validation (MRO-11); disclosure profile; redaction profile; hash manifests; verdict hashes | Data export is data management feature, not privacy-preserving validation protocol |

**Negative control policy:**

- **Distinguish adjacent capabilities from lifecycle responsibility objects.** Many systems have features that are adjacent to lifecycle governance but do not constitute lifecycle responsibility objects.
- **Require explicit evidence for lifecycle responsibility objects.** Approval buttons, logs, access control, task completion, and data export are not lifecycle responsibility objects unless they include the required fields and workflows.
- **Prevent overclaim.** Negative control prevents scoring systems for adjacent capabilities that do not meet lifecycle responsibility object requirements.
- **Document why adjacent capabilities do not count.** Negative control checklist explains why specific capabilities do not count toward RCCS/ALCS scores.

---

**End of Appendix B**

**Appendix B Status:** FILLED (Phase 1B-8; Phase 1C follow-up reviewed) — Scorecard Template complete; canonical evidence multipliers and non-legal-score boundaries preserved.
