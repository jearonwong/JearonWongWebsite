# Chapter 9: Composite Scoring Method

**Version:** v0.3.2-FRC-R3  
**Status:** Reconstructed from v0.3.1 semantic base  
**Phase:** 1A-3.10

---

## 9.0 Chapter Overview

This chapter introduces the **Composite Scoring Method**, which combines RCCS and ALCS into system-level assessments. In this paper, composite scoring means a dual-layer scoring profile consisting of separate RCCS and ALCS scores. It does not collapse both scores into a single legal compliance number. Composite scoring provides a dual-layer view of system governance capability: regulatory compliance coverage and agentic lifecycle conformance. It is an analytical framework for comparing systems, not a legal compliance certification.

The chapter explains the composite score formula, evidence multiplier application, interpretation guidance for RCCS and ALCS together, reproducibility requirements, and boundary statements. It establishes clear expectations about what composite scoring measures and what it does not measure, and bridges to the system mapping chapters that follow.

---

## 9.1 Purpose of Composite Scoring

Composite scoring combines RCCS and ALCS into system-level assessments that reflect both regulatory compliance coverage and agentic lifecycle conformance. It provides a structured method for evaluating whether systems provide the governance primitives that existing regulation requires and the lifecycle objects that make agentic responsibility auditable, provable, and transferable.

The purpose of composite scoring is to make visible the difference between systems that provide regulatory compliance coverage, systems that provide lifecycle responsibility semantics, and systems that provide both. A system can have a strong RCCS score and a weak ALCS score. This is not a contradiction. It means the system may provide strong regulatory compliance coverage through risk management, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring capabilities while lacking the deeper lifecycle responsibility objects required to prove authority boundaries, responsibility transfer, evidence partitioning, privacy lifecycle mapping, and vendor substitution conformance in multi-agent execution.

Composite scoring is an analytical framework, not a certification program. It does not certify that a system is compliant with any specific regulation. It does not guarantee that a system meets all legal obligations. It does not substitute for legal counsel, compliance review, or risk assessment. It measures system capability to express governance primitives and lifecycle objects, not organizational conformance to legal requirements.

The value of composite scoring is comparative analysis. Buyers can compare systems to understand which provide stronger governance primitives or lifecycle objects. Auditors can evaluate whether deployed systems provide the capabilities required to support organizational compliance programs. Governance teams can identify gaps in system capabilities and prioritize improvements. Protocol designers can evaluate whether their designs provide the primitives and objects that regulation and lifecycle responsibility require.

---

## 9.2 Composite Score Formula

Composite scoring calculates adjusted RCCS and ALCS framework scores and then combines them using the canonical cross-framework weight. RCCS measures regulatory compliance coverage. ALCS measures agentic lifecycle conformance. Both scores are needed for full assessment.

Each dimension is first normalized using the canonical dimension formula:

**Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier**

Where:
- **Raw Score** is the 0-5 score for each dimension based on system capability strength
- **Evidence Confidence Multiplier** is L1=1.00, L2=0.85, L3=0.75, L4=0.55, or L5=0.35

The cross-framework composite score is:

**Composite Score = 0.40 × RCCS + 0.60 × ALCS**

RCCS and ALCS are expressed on a 0-100 scale after evidence adjustment. The composite score is also expressed on a 0-100 scale.

The following table illustrates the composite score calculation with an example.

**Table T-09-01: Composite Score Calculation Example**

| Component | Description | Example Calculation |
|-----------|-------------|---------------------|
| Raw Score | 0-5 scale based on capability strength | Risk Management = 4 |
| Evidence Multiplier | L1-L5 confidence multiplier | L2 evidence = 0.85 |
| Dimension Score | (Raw Score / 5) × 100 × Evidence Multiplier | (4 / 5) × 100 × 0.85 = 68.0 |
| RCCS Score | Aggregated RCCS dimension score | RCCS = 65.0 |
| ALCS Score | Aggregated ALCS dimension score | ALCS = 55.0 |
| Composite Score | 0.40 × RCCS + 0.60 × ALCS | 0.40 × 65.0 + 0.60 × 55.0 = 59.0 |

This calculation preserves the distinction between RCCS and ALCS while still producing a single analytical composite score for high-level comparison.

RCCS and ALCS are reported separately because they measure different layers. RCCS evaluates whether a system provides the governance primitives that existing regulation requires. ALCS evaluates whether a system provides the lifecycle objects that make agentic responsibility auditable and transferable. The composite score must therefore be read alongside the separate RCCS and ALCS scores.

---

## 9.3 Evidence Multiplier Application

Evidence quality affects composite scores through the evidence multiplier. The evidence multiplier adjusts dimension scores based on the quality and verifiability of evidence used to evaluate the system. It reflects the confidence level in the scoring assessment.

The evidence hierarchy established in the front matter defines five evidence levels:

- **L1: Binding legal, regulatory, or formal standards text** - Highest confidence for baseline obligations; does not prove system implementation
- **L2: Official product documentation, API docs, developer documentation, platform architecture docs** - High confidence
- **L3: Independent audits, certifications, third-party evaluations, regulatory commentary** - Medium confidence
- **L4: Vendor white papers, product pages, blog posts, marketing statements** - Low confidence
- **L5: Author inference, conceptual analysis, strategic interpretation** - Disclosed inference

The evidence multiplier translates evidence levels into scoring adjustments:

**Table T-09-02: Evidence Multiplier Values**

| Evidence Level | Evidence Type | Multiplier | Rationale |
|----------------|---------------|------------|-----------|
| L1 | Binding legal, regulatory, or formal standards text | 1.00 | Highest confidence for baseline obligations; does not prove system implementation |
| L2 | Official product documentation, API docs, developer documentation, platform architecture docs | 0.85 | High confidence, but product capability claims still require current-source validation |
| L3 | Independent audits, certifications, third-party evaluations, regulatory commentary | 0.75 | Medium confidence; independent but may lack technical depth |
| L4 | Vendor white papers, product pages, blog posts, marketing statements | 0.55 | Low confidence; promotional and may lack implementation detail |
| L5 | Author inference, conceptual analysis, strategic interpretation | 0.35 | Disclosed inference; useful for analysis but not verified implementation evidence |

The evidence multiplier is applied per dimension, not globally. Different dimensions may be evaluated with different evidence levels. A system may have L2 evidence for risk management (official documentation) and L4 evidence for contestability (vendor white paper). Each dimension receives its own evidence multiplier based on the evidence used to evaluate that specific dimension.

Mixed evidence levels are common and expected. System vendors provide detailed documentation for some capabilities while providing only high-level descriptions for others. Independent audits may cover some dimensions but not others. Evaluators must assess evidence quality dimension by dimension and apply the appropriate multiplier to each.

The evidence multiplier ensures that scores reflect not only system capability but also the confidence level in that assessment. A raw score of 4 based on L2 evidence becomes `(4 / 5) × 100 × 0.85 = 68.0`. The same raw score based on L4 evidence becomes `(4 / 5) × 100 × 0.55 = 44.0`. This prevents over-claiming based on weak evidence.

---

## 9.4 Interpreting RCCS and ALCS Together

RCCS and ALCS measure different layers. RCCS measures regulatory compliance coverage: whether a system provides the governance primitives that existing regulation requires. ALCS measures agentic lifecycle conformance: whether a system provides the lifecycle objects that make agentic responsibility auditable, provable, and transferable across agents, humans, tools, projects, vendors, and organizational boundaries.

Interpreting RCCS and ALCS together requires understanding four quadrants: High RCCS + High ALCS, High RCCS + Low ALCS, Low RCCS + High ALCS, and Low RCCS + Low ALCS. Each quadrant represents a different system capability profile.

**Table T-09-03: RCCS and ALCS Interpretation Matrix**

| Quadrant | RCCS | ALCS | Interpretation | Common System Types |
|----------|------|------|----------------|---------------------|
| High/High | High (≥70%) | High (≥70%) | Strong regulatory compliance coverage and strong lifecycle responsibility semantics. System provides both governance primitives and lifecycle objects. | Lifecycle protocol systems, enterprise AI governance platforms with lifecycle extensions |
| High/Low | High (≥70%) | Low (<70%) | Strong regulatory compliance coverage but weak lifecycle responsibility semantics. System provides governance primitives for model governance and platform controls but lacks lifecycle objects for multi-agent responsibility. | Enterprise AI governance platforms, managed AI platforms with strong observability but limited lifecycle semantics |
| Low/High | Low (<70%) | High (≥70%) | Weak regulatory compliance coverage but strong lifecycle responsibility semantics. System provides lifecycle objects for expressing agentic responsibility but lacks broader governance primitives. | Specialized lifecycle protocols or agent frameworks focused on responsibility semantics without full governance platform capabilities |
| Low/Low | Low (<70%) | Low (<70%) | Weak regulatory compliance coverage and weak lifecycle responsibility semantics. System provides execution orchestration or observability features but lacks governance primitives and lifecycle objects. | Developer agent SDKs, orchestration frameworks without governance extensions |

The High RCCS + Low ALCS quadrant is the most common pattern. Many enterprise AI governance platforms, managed AI platforms, and observability tools provide strong regulatory compliance coverage through risk management, documentation, record-keeping, transparency, human oversight, security, accountability, contestability, and monitoring capabilities. However, they may lack the deeper lifecycle responsibility objects required to prove authority boundaries, responsibility transfer, evidence partitioning, privacy lifecycle mapping, and vendor substitution conformance in multi-agent execution. This is not a failure. It reflects the reality that existing regulation focuses on model governance and platform controls while lifecycle responsibility semantics for multi-agent systems are still emerging.

The Low RCCS + High ALCS quadrant is rare. It represents systems that provide strong lifecycle objects for expressing agentic responsibility while lacking broader regulatory compliance coverage. This pattern may appear in specialized lifecycle protocols or agent frameworks that focus on responsibility semantics without providing full governance platform capabilities. These systems may be valuable as components within larger governance architectures but may not provide sufficient coverage for standalone compliance programs.

The High RCCS + High ALCS quadrant represents systems that provide both regulatory compliance coverage and lifecycle responsibility semantics. These systems are positioned to support both existing regulatory requirements and emerging lifecycle responsibility requirements for multi-agent systems. This quadrant is the target for systems designed specifically for agentic AI governance.

The Low RCCS + Low ALCS quadrant represents systems that provide execution orchestration or observability features but lack governance primitives and lifecycle objects. These systems may be valuable for development, experimentation, or low-risk use cases but may not provide sufficient governance capability for high-risk or regulated deployments.

Both RCCS and ALCS scores are necessary for full assessment. Neither alone is sufficient. RCCS ensures that systems meet existing regulatory requirements. ALCS ensures that systems can prove lifecycle responsibility in multi-agent execution. Together, they provide a dual-layer assessment of system governance capability.

---

## 9.5 Scoring Reproducibility and Transparency

Composite scoring must be reproducible and transparent. Scoring is only useful if different evaluators can reach similar conclusions when evaluating the same system with the same evidence. Reproducibility requires clear scoring criteria, documented evidence sources, and explicit scoring rationale.

Scoring reproducibility requires four elements: dimension scores with rationale, evidence sources with quality assessment, evidence multiplier application, and calculation transparency.

Dimension scores must be documented with rationale. For each dimension, evaluators must record the 0-5 raw score and explain why that score was assigned. The rationale should reference specific system capabilities, features, or documentation that support the score. Generic statements such as "the system provides risk management" are insufficient. Specific statements such as "the system provides risk registers, assessment workflows, and mitigation tracking as documented in the platform architecture guide" enable reproducibility.

Evidence sources must be documented with quality assessment. For each dimension, evaluators must record which evidence sources were used and what evidence level applies. Evidence sources should be cited with sufficient detail to allow verification: document title, version, publication date, and relevant section or page numbers. Evidence quality assessment should explain why a particular evidence level was assigned. For example, "L2 evidence: official product documentation, API reference v2.3, section 4.2" is more reproducible than "L2 evidence: documentation."

Evidence multiplier application must be explicit. For each dimension, evaluators must show the evidence multiplier value and how it was applied to the raw score. This ensures that evidence quality adjustments are transparent and verifiable. The calculation should be shown using the canonical formula: `Dimension Score = (Raw Score / 5) × 100 × Evidence Confidence Multiplier`.

Calculation transparency requires showing the full composite score calculation. Evaluators must provide a table or worksheet showing raw scores, evidence multipliers, adjusted dimension scores, RCCS and ALCS framework scores, and the final `0.40 × RCCS + 0.60 × ALCS` composite score. This allows reviewers to verify the calculation and identify any errors or disagreements.

Scoring is comparative, not absolute. Composite scores are most useful when comparing systems against defined governance expectations or tracking a single system over time. Absolute score thresholds such as "70% is compliant" are not meaningful because composite scoring is an analytical framework, not a compliance certification. The value of scoring is in making visible capability gaps and evidence-confidence limits.

---

## 9.6 Boundary Statement

Composite scoring is an analytical framework, not a legal compliance score. This boundary must be understood clearly to avoid misinterpretation and over-claiming.

**What composite scoring is:**
- An analytical framework for comparing system capabilities against regulatory requirements and lifecycle responsibility requirements
- A structured method for evaluating whether systems provide governance primitives and lifecycle objects
- A tool for buyers, auditors, governance teams, and protocol designers to assess system readiness
- A bridge between regulatory abstractions, lifecycle requirements, and engineering implementation

**What composite scoring is not:**
- A legal compliance certification or conformity assessment
- A regulatory approval or endorsement
- A guarantee that a system meets all legal obligations
- A substitute for legal counsel, compliance review, or risk assessment
- A market endorsement or procurement recommendation

High composite scores do NOT mean legal compliance. A system may score well on both RCCS and ALCS while the organization using it fails to comply with legal obligations due to deployment gaps, policy weaknesses, incomplete adoption, jurisdictional differences, or use case risks. Composite scoring measures system capability to express governance primitives and lifecycle objects, not organizational conformance to legal requirements.

Low composite scores do NOT mean non-compliance. A system may score lower on RCCS or ALCS while the organization achieves compliance through compensating controls, manual processes, alternative governance mechanisms, or different system architectures. Composite scoring evaluates specific system capabilities, not all possible paths to compliance.

Composite scoring measures system capability, not organizational practice. A system may provide strong governance primitives and lifecycle objects while the organization fails to use them. Conversely, an organization may achieve strong governance through processes that are not reflected in system capabilities. Composite scoring evaluates what the system can express, not what the organization actually does.

Composite scoring is context-independent, but compliance is context-dependent. Composite scoring evaluates system capabilities without regard to deployment context, risk class, jurisdiction, or use case. Legal compliance depends on all of these factors. A system with high composite scores may still be non-compliant in specific contexts, and a system with low composite scores may be compliant in other contexts.

The purpose of this boundary statement is to prevent over-claiming. Composite scoring is a useful analytical tool, but it is not a compliance certification. Organizations must not rely on composite scores as proof of legal compliance. Buyers must not treat high composite scores as a substitute for due diligence, legal review, or risk assessment. System vendors must not market composite scores as compliance certifications or regulatory approvals.

---

## 9.7 Bridge to System Mappings

The following chapters apply RCCS and ALCS to specific systems. Chapter 10 provides enterprise control crosswalk, mapping RCCS and ALCS dimensions to enterprise control frameworks such as NIST Cybersecurity Framework, ISO 27001, and SOC 2. Chapters 11 through 15 provide comparative field analysis and detailed system mappings for major system categories shaping the enterprise agentic stack.

Each system mapping documents dimension scores, evidence sources, and scoring rationale. The mappings are responsibility-semantics comparisons, not product endorsements or procurement recommendations. The key question is not which system is useful. Most of them are useful. The key question is whether the system defines the governance primitives and lifecycle responsibility objects required to prove that agentic work moved from intent to accepted outcome under controlled authority, evidence, privacy, and remediation constraints.

System mappings use the composite scoring method defined in this chapter. Each system receives separate RCCS and ALCS scores. Dimension scores are documented with rationale. Evidence sources are cited with quality assessment. Evidence multipliers are applied per dimension. Composite scores are calculated transparently. The result is a dual-layer assessment of system governance capability that makes visible the difference between regulatory compliance coverage and lifecycle responsibility conformance.

The system mappings are based on public evidence available as of May 2026. They reflect the state of system capabilities at the time of analysis. System capabilities evolve rapidly. Vendors add features, update documentation, and release new versions. The mappings should be treated as snapshots, not permanent judgments. Organizations evaluating systems should verify current capabilities with vendors and review updated documentation.

---

## 9.8 Chapter Summary

This chapter introduced the composite scoring method, which combines RCCS and ALCS into system-level assessments. Composite scoring provides a dual-layer view of system governance capability: regulatory compliance coverage and agentic lifecycle conformance. It is an analytical framework for comparing systems, not a legal compliance certification.

The composite score formula first normalizes dimension scores using `(Raw Score / 5) × 100 × Evidence Confidence Multiplier`, then combines RCCS and ALCS with `0.40 × RCCS + 0.60 × ALCS`. RCCS and ALCS should still be reported separately because they measure different layers. Both scores are necessary for full assessment. The evidence multiplier adjusts dimension scores based on evidence quality, ensuring that scores reflect both system capability and confidence level in the assessment.

Interpreting RCCS and ALCS together requires understanding four quadrants. High RCCS + Low ALCS is the most common pattern, representing systems with strong regulatory compliance coverage but weak lifecycle responsibility semantics. High RCCS + High ALCS represents systems with both regulatory compliance coverage and lifecycle responsibility semantics. Low RCCS + High ALCS is rare, representing specialized lifecycle protocols without full governance platform capabilities. Low RCCS + Low ALCS represents systems with execution orchestration or observability features but lacking governance primitives and lifecycle objects.

Composite scoring must be reproducible and transparent. Dimension scores must be documented with rationale. Evidence sources must be cited with quality assessment. Evidence multipliers must be applied explicitly. Calculations must be shown transparently. Scoring is comparative, not absolute. The value of scoring is in making visible the differences between systems and identifying gaps in capability.

Composite scoring is an analytical framework, not a legal compliance score. High composite scores do not mean legal compliance. Low composite scores do not mean non-compliance. Composite scoring measures system capability, not organizational practice. It is context-independent, but compliance is context-dependent. Organizations must not rely on composite scores as proof of legal compliance. The following chapters apply composite scoring to specific systems, providing comparative field analysis and detailed system mappings.

---

**End of Chapter 9**

**Chapter 9 Status:** COMPLETE — All sections filled (9.0-9.8); composite scoring method defined; RCCS/ALCS interpretation guidance provided; boundary discipline maintained.
