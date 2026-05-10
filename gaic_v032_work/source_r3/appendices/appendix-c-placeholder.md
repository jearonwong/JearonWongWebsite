# Appendix C — References and Source Notes

**Version:** v0.3.2-FRC-R3  
**Status:** Filled — Phase 1C claim-level source binding applied  
**Phase:** 1B-8 / 1C Follow-up

---

## C.0 Source Boundary

This appendix provides a source register and citation guidance for the Global AI Compliance White Paper 2026. Phase 1C follow-up located official source entry points and created a claim evidence register for high-risk L2 product/protocol claims. This appendix does not claim final publication-candidate citation rendering or page-level source pinning is complete.

**Boundary statement:**

- **This appendix is a source register and claim-binding pointer, not a final bibliography.** The source register lists sources used in the white paper and their current validation status. Phase 1C follow-up completed source-entry and claim-disposition review; final page-level citation pinning remains before publication.

- **Citation placeholders require final page-level pinning.** Many L2 product documentation sources are referenced via source IDs (e.g., [IBM-WATSONX-GOVERNANCE-DOCS], [MPLP-DOCS]). Phase 1C follow-up located official entry points; final publication should pin exact page URLs and publication/access details where needed.

- **Evidence levels affect confidence.** L1 sources (binding legal text, formal standards) establish baseline obligations but do not prove implementation. L2 sources (official product/protocol documentation) support documented capability surfaces but do not prove deployment practice, audit success, legal compliance, or lifecycle responsibility-object implementation. L3-L5 sources have lower or different confidence and must be marked appropriately.

- **Source validation is not legal compliance proof.** Validated sources support the white paper's analytical framework. They do not prove legal compliance, regulatory approval, or certification.

---

## C.1 Evidence Level Policy

The following table defines evidence levels and their permitted use.

**Table T-C-01: Evidence Level Policy**

| Level | Source Type | Permitted Use | Confidence | Limitation |
|-------|-------------|---------------|------------|------------|
| L1 | Binding legal text (EU AI Act, GDPR, Colorado AI Act, etc.) | Regulatory baseline; legal obligation statements | Highest | Legal text requires legal interpretation; does not prove organizational compliance |
| L1 | Formal standards (NIST AI RMF, ISO/IEC 42001, Singapore IMDA, W3C PROV, W3C VC) | Framework baseline; standard requirements | Highest | Standards are voluntary unless mandated by regulation; adoption does not prove compliance |
| L2 | Official product documentation (vendor docs, protocol specs, GitHub repos) | System capability claims; feature descriptions | High | Product docs describe capability, not operational effectiveness; require validation; may change without notice |
| L3 | Third-party audit reports, academic papers, industry reports | Supplemental confidence; independent assessment | Medium | Audit reports are point-in-time assessments; academic papers may not reflect current state; industry reports may have bias |
| L4 | Vendor claims, marketing materials, blog posts | Positioning only; not capability claims | Low | Vendor claims require validation; marketing materials may overstate capability; blog posts are not authoritative |
| L5 | Author inference, analytical framework, logical derivation | Framework design; gap analysis; analytical tools | Lowest | Author inference must be marked clearly; does not replace evidence; requires organizational interpretation |

**Evidence level multipliers for RCCS/ALCS scoring:**

- **L1:** 1.00
- **L2:** 0.85
- **L3:** 0.75
- **L4:** 0.55
- **L5:** 0.35

---

## C.2 Required Source Groups

The white paper uses five source groups: L1 Binding Legal/Regulatory Sources, L1 Formal Standards, L2 Official Product Documentation, L3 Third-Party Reports, and L5 Author Inference.

### L1: Binding Legal/Regulatory Sources

| Source ID | Source Name | Type | Used In | Current Status |
|-----------|-------------|------|---------|----------------|
| EU-AI-ACT | EU AI Act (Regulation (EU) 2024/1689) Articles 9, 10, 11, 12, 13, 14, 15, 72 | Legal text | Chapter 4 | ✓ Referenced |
| GDPR | GDPR (Regulation (EU) 2016/679) Article 5, Article 17, Article 28 | Legal text | Chapter 4 | ✓ Referenced |
| COLORADO-AI-ACT | Colorado AI Act (SB25B-004) | Legal text | Chapter 4 | ✓ Referenced |

### L1: Formal Standards

| Source ID | Source Name | Type | Used In | Current Status |
|-----------|-------------|------|---------|----------------|
| NIST-AI-RMF | NIST AI Risk Management Framework 1.0 | Standard | Chapter 4 | ✓ Referenced |
| ISO-42001 | ISO/IEC 42001:2023 AI Management System | Standard | Chapter 4 | ✓ Referenced |
| SINGAPORE-IMDA | Singapore IMDA Model AI Governance Framework for Agentic AI | Standard | Chapter 4 | ✓ Referenced |
| W3C-PROV | W3C PROV-DM: The PROV Data Model | Protocol spec | Chapter 4 | ✓ Referenced |
| W3C-VC | W3C Verifiable Credentials Data Model | Protocol spec | Chapter 4 | ✓ Referenced |

### L2: Official Product Documentation (Phase 1C Claim-Level Reviewed)

| Source ID | Source Name | Type | Used In | Current Status |
|-----------|-------------|------|---------|----------------|
| IBM-WATSONX-GOVERNANCE-DOCS | IBM watsonx.governance Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; ALCS object mappings remain L5 unless exact docs support them |
| MICROSOFT-AZURE-AI-FOUNDRY-DOCS | Microsoft Azure AI Foundry Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; ALCS object mappings remain L5 unless exact docs support them |
| MICROSOFT-RESPONSIBLE-AI-DOCS | Microsoft Responsible AI Documentation | Product docs | Chapter 12 | ◐ Entry point/source family located; exact responsible-AI page pinning remains |
| AWS-BEDROCK-DOCS | AWS Bedrock Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; lifecycle-object mappings remain L5 unless exact docs support them |
| AWS-BEDROCK-GUARDRAILS-DOCS | AWS Bedrock Guardrails Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; guardrails are not delegated-authority proof |
| AWS-AGENTCORE-DOCS | AWS AgentCore Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; ALCS object mappings remain analytical |
| GOOGLE-VERTEX-AI-DOCS | Google Vertex AI Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; lifecycle-object mappings remain L5 unless exact docs support them |
| GOOGLE-ADK-DOCS | Google Agent Development Kit (ADK) Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; ADK primitives are not governance objects by default |
| GOOGLE-MODEL-ARMOR-DOCS | Google Model Armor Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; safety inspection is not lifecycle responsibility proof |
| LANGGRAPH-DOCS | LangGraph Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; orchestration mappings remain analytical |
| LANGSMITH-DOCS | LangSmith Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; observability mappings remain analytical |
| OPENAI-AGENTS-SDK-DOCS | OpenAI Agents SDK Official Documentation | Product docs | Chapter 12 | ✓ SDK entry point located; OpenAI platform guide returned HTTP 403 by curl and needs final access/rendering check |
| OPENAI-TOOLS-DOCS | OpenAI Tools Official Documentation | Product docs | Chapter 12 | ◐ Official source family located; exact tools page pinning remains |
| CREWAI-DOCS | CrewAI Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; agent role labels are not human accountability roles |
| CREWAI-GITHUB | CrewAI GitHub Repository | Product docs | Chapter 12 | ✓ Repository entry point located; exact code/API claims require page-level pinning |
| MPLP-DOCS | MPLP (Multi-Agent Lifecycle Protocol) Official Documentation | Protocol docs | Chapters 12, 13 | ✓ Entry point located; protocol mapping remains L2 + L5 analytical interpretation |
| MPLP-SPEC | MPLP Protocol Specification | Protocol docs | Chapter 13 | ✓ Bound through MPLP docs entry point; version/citation rendering remains |
| VALIDATION-LAB-METHODOLOGY | Validation Lab Evidence-Based Validation Methodology | Protocol docs | Chapter 14 | ◐ Public entry point located; methodology-specific support remains boundary-limited |

### L5: Author Inference

| Source ID | Source Name | Type | Used In | Current Status |
|-----------|-------------|------|---------|----------------|
| AUTHOR-INFERENCE-MRO | Sixteen Missing Regulatory Objects (Author Inference) | Analytical framework | Chapter 6 | ✓ Marked as L5 |
| AUTHOR-INFERENCE-RCCS | RCCS Analytical Framework (Author Inference) | Analytical framework | Chapter 7 | ✓ Marked as L5 |
| AUTHOR-INFERENCE-ALCS | ALCS Analytical Framework (Author Inference) | Analytical framework | Chapter 8 | ✓ Marked as L5 |
| AUTHOR-INFERENCE-COMPOSITE | Composite Scoring Method (Author Inference) | Analytical framework | Chapter 9 | ✓ Marked as L5 |
| AUTHOR-INFERENCE-SYSTEM-MAPPING | System Mapping Methodology (Author Inference) | Analytical framework | Chapters 11, 12 | ✓ Marked as L5 |
| AUTHOR-INFERENCE-FAILURE-SCENARIOS | Enterprise Failure Scenarios (Author Inference) | Analytical framework | Chapter 15 | ✓ Marked as L5 |

---

## C.3 Source Register

The following table provides the complete source register for the white paper.

**Table T-C-02: Source Register**

| Source ID | Source Name | Evidence Level | Used In | Current Status | Phase 1C Action |
|-----------|-------------|----------------|---------|----------------|-----------------|
| EU-AI-ACT | EU AI Act (Regulation (EU) 2024/1689) | L1 | Chapter 4 | ✓ Referenced | Verify article citations |
| GDPR | GDPR (Regulation (EU) 2016/679) | L1 | Chapter 4 | ✓ Referenced | Verify article citations |
| COLORADO-AI-ACT | Colorado AI Act (SB25B-004) | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| NIST-AI-RMF | NIST AI RMF 1.0 | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| ISO-42001 | ISO/IEC 42001:2023 | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| SINGAPORE-IMDA | Singapore IMDA Model AI Governance Framework for Agentic AI | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| W3C-PROV | W3C PROV-DM | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| W3C-VC | W3C Verifiable Credentials | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| IBM-WATSONX-GOVERNANCE-DOCS | IBM watsonx.governance Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| MICROSOFT-AZURE-AI-FOUNDRY-DOCS | Microsoft Azure AI Foundry Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| MICROSOFT-RESPONSIBLE-AI-DOCS | Microsoft Responsible AI Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| AWS-BEDROCK-DOCS | AWS Bedrock Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| AWS-BEDROCK-GUARDRAILS-DOCS | AWS Bedrock Guardrails Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| AWS-AGENTCORE-DOCS | AWS AgentCore Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| GOOGLE-VERTEX-AI-DOCS | Google Vertex AI Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| GOOGLE-ADK-DOCS | Google ADK Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| GOOGLE-MODEL-ARMOR-DOCS | Google Model Armor Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| LANGGRAPH-DOCS | LangGraph Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| LANGSMITH-DOCS | LangSmith Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| OPENAI-AGENTS-SDK-DOCS | OpenAI Agents SDK Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| OPENAI-TOOLS-DOCS | OpenAI Tools Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| CREWAI-DOCS | CrewAI Docs | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| CREWAI-GITHUB | CrewAI GitHub | L2 | Chapter 12 | ⏸️ Placeholder | Validate URL and publication details |
| MPLP-DOCS | MPLP Docs | L2 | Chapters 12, 13 | ⏸️ Placeholder | Validate URL and publication details |
| MPLP-SPEC | MPLP Spec | L2 | Chapter 13 | ⏸️ Placeholder | Validate URL and publication details |
| VALIDATION-LAB-METHODOLOGY | Validation Lab Methodology | L2 | Chapter 14 | ⏸️ Placeholder | Validate URL and publication details |
| AUTHOR-INFERENCE-MRO | Sixteen MROs (Author Inference) | L5 | Chapter 6 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-RCCS | RCCS (Author Inference) | L5 | Chapter 7 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-ALCS | ALCS (Author Inference) | L5 | Chapter 8 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-COMPOSITE | Composite Scoring (Author Inference) | L5 | Chapter 9 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-SYSTEM-MAPPING | System Mapping (Author Inference) | L5 | Chapters 11, 12 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-FAILURE-SCENARIOS | Failure Scenarios (Author Inference) | L5 | Chapter 15 | ✓ Marked as L5 | Verify L5 marking in text |

---

## C.4 Citation Revalidation Queue

The following table lists sources requiring final page-level citation pinning or retained boundary notes after Phase 1C follow-up.

**Table T-C-03: Citation Revalidation Queue**

| Source ID | URL or Placeholder | Reason for Revalidation | Priority | Phase |
|-----------|-------------------|------------------------|----------|-------|
| IBM-WATSONX-GOVERNANCE-DOCS | `https://www.ibm.com/products/watsonx-governance`; `https://www.ibm.com/docs/en/watsonx` | Pin exact pages for specific governance claims | High | Phase 1D / publication QA |
| MICROSOFT-AZURE-AI-FOUNDRY-DOCS | `https://learn.microsoft.com/en-us/azure/foundry/` | Pin exact pages for agents, tracing, evaluations, and safety claims | High | Phase 1D / publication QA |
| MICROSOFT-RESPONSIBLE-AI-DOCS | Microsoft Learn source family | Pin exact responsible-AI pages if retained | High | Phase 1D / publication QA |
| AWS-BEDROCK-DOCS | `https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html` | Pin exact Bedrock pages for retained claims | High | Phase 1D / publication QA |
| AWS-BEDROCK-GUARDRAILS-DOCS | `https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html` | Pin exact guardrails pages; preserve authority-boundary caveat | High | Phase 1D / publication QA |
| AWS-AGENTCORE-DOCS | `https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html` | Pin exact AgentCore pages for runtime/observability claims | High | Phase 1D / publication QA |
| GOOGLE-VERTEX-AI-DOCS | `https://docs.cloud.google.com/vertex-ai/docs` | Pin exact Vertex AI pages for retained claims | High | Phase 1D / publication QA |
| GOOGLE-ADK-DOCS | `https://adk.dev/` | Pin exact ADK pages for agent/tool/session claims | High | Phase 1D / publication QA |
| GOOGLE-MODEL-ARMOR-DOCS | `https://docs.cloud.google.com/model-armor/overview` | Pin exact Model Armor pages; preserve lifecycle-governance caveat | High | Phase 1D / publication QA |
| LANGGRAPH-DOCS | `https://docs.langchain.com/oss/python/langgraph/overview` | Pin exact persistence/interrupt/tool pages for retained claims | High | Phase 1D / publication QA |
| LANGSMITH-DOCS | `https://docs.langchain.com/langsmith/home` | Pin exact tracing/evaluation pages for retained claims | High | Phase 1D / publication QA |
| OPENAI-AGENTS-SDK-DOCS | `https://openai.github.io/openai-agents-python/` | Pin exact SDK pages for agents/tools/handoffs/tracing claims | High | Phase 1D / publication QA |
| OPENAI-TOOLS-DOCS | OpenAI platform docs source family | Pin exact accessible tools pages if retained | High | Phase 1D / publication QA |
| CREWAI-DOCS | `https://docs.crewai.com/` | Pin exact agents/tasks/crews/flows/tools pages for retained claims | High | Phase 1D / publication QA |
| CREWAI-GITHUB | `https://github.com/crewAIInc/crewAI` | Pin exact repository paths only for code/API-specific claims | High | Phase 1D / publication QA |
| MPLP-DOCS | `https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview` | Pin protocol version and preserve conflict-of-interest boundary | Critical | Phase 1D / publication QA |
| MPLP-SPEC | `https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview` | Pin exact specification/version reference if separate page exists | Critical | Phase 1D / publication QA |
| VALIDATION-LAB-METHODOLOGY | `https://lab.mplp.io/` | Add methodology-specific citation or retain unresolved/boundary-limited note | Critical | Phase 1D / publication QA |

---

## C.5 Source Notes and Revalidation Policy

### Source Notes

- **L1 sources (legal text and formal standards)** are referenced in Chapter 4 and provide the regulatory baseline for the white paper. These sources are authoritative but require legal interpretation. The white paper does not provide legal advice or legal interpretation.

- **L2 sources (official product documentation)** are referenced in Chapters 12, 13, and 14 and support documented product/protocol capability surfaces. Phase 1C follow-up located official entry points and recorded claim-level dispositions. L2 sources still require page-level pinning before publication and do not prove deployment practice or legal compliance.

- **L5 sources (author inference)** are used in Chapters 6-9, 11-12, and 15 to define the analytical framework (MROs, RCCS, ALCS, Composite Scoring, System Mapping, Failure Scenarios). These sources are marked as author inference and do not replace evidence-based analysis.

- **MPLP and Validation Lab sources** require special attention due to author conflict of interest. The author of this white paper is also the creator of MPLP and Validation Lab. Phase 1C follow-up verified that MPLP and Validation Lab remain positioned as examples, not required or exclusive solutions; final proof must preserve that boundary.

### Revalidation Policy

Final source governance before publication must:

1. **Pin exact page-level L2 product documentation URLs** and replace remaining placeholders with validated URLs and publication/access details
2. **Verify all L1 legal/regulatory citations** for accuracy and completeness
3. **Mark all L5 author inference** clearly in the text
4. **Preserve MPLP and Validation Lab boundary discipline** and add methodology-specific Validation Lab support if available
5. **Remove or mark as inference** any unsupported claims
6. **Maintain the claim evidence register** documenting all source validation and downgrade actions

---

**End of Appendix C**

**Appendix C Status:** FILLED (Phase 1B-8; Phase 1C follow-up reviewed) — References and Source Notes updated for claim-level source binding; official entry points located for required L2 groups; final page-level citation pinning and rendering QA remain before publication.
