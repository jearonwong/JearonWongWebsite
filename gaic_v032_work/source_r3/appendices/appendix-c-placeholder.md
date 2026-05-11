# Appendix C — References and Source Notes

**Version:** v0.3.2-FRC-R3  

---

## C.0 Source Boundary

This appendix provides a source register and citation guidance for the Global AI Compliance White Paper 2026. Phase 1D-11 closes the high-risk citation/access/source-pointer blockers by replacing inaccessible sources, narrowing claims, downgrading lifecycle interpretations to L5, and retaining explicit non-blocking limitations where appropriate.

**Boundary statement:**

- **This appendix is a source register and claim-binding pointer, not legal proof.** The source register lists sources used in the white paper and their current validation status. Phase 1D-11 completed high-risk source closure for publication-candidate review.

- **Citation source pointers are classified by claim support.** L2 product documentation sources support visible capability surfaces only. Lifecycle-object interpretations remain L5 analytical unless the source directly supports the lifecycle object.

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

### L2: Official Product Documentation (Claim-Level Reviewed)

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
| OPENAI-AGENTS-SDK-DOCS | OpenAI Agents SDK Official Documentation | Product docs | Chapter 12 | ✓ Accessible official Python/JS SDK docs replace inaccessible platform guide for retained SDK-surface claims; platform guide 403 retained as access note |
| OPENAI-TOOLS-DOCS | OpenAI Tools Official Documentation | Product docs | Chapter 12 | ✓ Narrowed to accessible SDK primitive claims only; lifecycle-governance mapping remains analytical |
| CREWAI-DOCS | CrewAI Official Documentation | Product docs | Chapter 12 | ✓ Entry point located; agent role labels are not human accountability roles |
| CREWAI-GITHUB | CrewAI GitHub Repository | Product docs | Chapter 12 | ✓ Repository entry point located; exact code/API claims require page-level pinning |
| MPLP-DOCS | MPLP (Multi-Agent Lifecycle Protocol) Official Documentation | Protocol docs | Chapters 12, 13 | ✓ Entry point located; protocol mapping remains L2 + L5 analytical interpretation |
| MPLP-SPEC | MPLP Protocol Specification | Protocol docs | Chapter 13 | ✓ Bound through MPLP docs entry point; version/citation rendering remains |
| VALIDATION-LAB-METHODOLOGY | Validation Lab Evidence-Based Validation Methodology | Protocol docs | Chapter 14 | ✓ Methodology page cited as public-surface, non-certifying evidence adjudication example only |

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

| Source ID | Source Name | Evidence Level | Used In | Current Status | Publication Follow-up Action |
|-----------|-------------|----------------|---------|----------------|-----------------|
| EU-AI-ACT | EU AI Act (Regulation (EU) 2024/1689) | L1 | Chapter 4 | ✓ Referenced | Verify article citations |
| GDPR | GDPR (Regulation (EU) 2016/679) | L1 | Chapter 4 | ✓ Referenced | Verify article citations |
| COLORADO-AI-ACT | Colorado AI Act (SB25B-004) | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| NIST-AI-RMF | NIST AI RMF 1.0 | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| ISO-42001 | ISO/IEC 42001:2023 | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| SINGAPORE-IMDA | Singapore IMDA Model AI Governance Framework for Agentic AI | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| W3C-PROV | W3C PROV-DM | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| W3C-VC | W3C Verifiable Credentials | L1 | Chapter 4 | ✓ Referenced | Verify citation |
| IBM-WATSONX-GOVERNANCE-DOCS | IBM watsonx.governance Docs | L2 | Chapter 12 | Closed for high-risk citation review; official entry points support narrowed capability-surface claims | Preserve narrowed claim wording and final citation formatting |
| MICROSOFT-AZURE-AI-FOUNDRY-DOCS | Microsoft Azure AI Foundry Docs | L2 | Chapter 12 | Closed for high-risk citation review; Microsoft Learn entry point supports narrowed platform-surface claims | Preserve narrowed claim wording and final citation formatting |
| MICROSOFT-RESPONSIBLE-AI-DOCS | Microsoft Responsible AI Docs | L2 | Chapter 12 | Closed as source-family support for retained responsible-AI surface claims | Keep lifecycle-object scoring analytical unless exact source language directly supports the object |
| AWS-BEDROCK-DOCS | AWS Bedrock Docs | L2 | Chapter 12 | Closed for high-risk citation review; official entry points support narrowed Bedrock capability-surface claims | Preserve narrowed claim wording and final citation formatting |
| AWS-BEDROCK-GUARDRAILS-DOCS | AWS Bedrock Guardrails Docs | L2 | Chapter 12 | Closed for high-risk citation review; guardrail claims narrowed to documented safety/control surfaces | Preserve authority-boundary caveat |
| AWS-AGENTCORE-DOCS | AWS AgentCore Docs | L2 | Chapter 12 | Closed for high-risk citation review; AgentCore claims narrowed to documented runtime/agent surfaces | Preserve lifecycle-object mapping as analytical where needed |
| GOOGLE-VERTEX-AI-DOCS | Google Vertex AI Docs | L2 | Chapter 12 | Closed for high-risk citation review; Vertex AI claims narrowed to documented platform surfaces | Preserve narrowed claim wording and final citation formatting |
| GOOGLE-ADK-DOCS | Google ADK Docs | L2 | Chapter 12 | Closed for high-risk citation review; ADK claims narrowed to documented agent-development primitives | Preserve lifecycle-object mapping as analytical where needed |
| GOOGLE-MODEL-ARMOR-DOCS | Google Model Armor Docs | L2 | Chapter 12 | Closed for high-risk citation review; Model Armor claims narrowed to documented safety inspection surfaces | Preserve lifecycle-governance caveat |
| LANGGRAPH-DOCS | LangGraph Docs | L2 | Chapter 12 | Closed for high-risk citation review; LangGraph claims narrowed to documented orchestration surfaces | Preserve narrowed claim wording and final citation formatting |
| LANGSMITH-DOCS | LangSmith Docs | L2 | Chapter 12 | Closed for high-risk citation review; LangSmith claims narrowed to documented observability/evaluation surfaces | Preserve lifecycle-object mapping as analytical where needed |
| OPENAI-AGENTS-SDK-DOCS | OpenAI Agents SDK Docs | L2 | Chapter 12 | Accessible official Python/JS SDK docs validated; platform guide 403 is a non-blocking access note | Use accessible official SDK docs for retained agents/tools/handoffs/guardrails/tracing/session claims |
| OPENAI-TOOLS-DOCS | OpenAI Tools Docs | L2 | Chapter 12 | Narrowed to SDK primitive claims supported by accessible official docs | Keep liability-boundary and lifecycle-governance mapping analytical |
| CREWAI-DOCS | CrewAI Docs | L2 | Chapter 12 | Closed for high-risk citation review; CrewAI claims narrowed to documented orchestration surfaces | Preserve human-accountability caveat |
| CREWAI-GITHUB | CrewAI GitHub | L2 | Chapter 12 | Repository entry point located; exact code/API claims require page-level pinning | Pin exact repository paths only for code/API-specific claims |
| MPLP-DOCS | MPLP Docs | L2 | Chapters 12, 13 | Closed for protocol identity claims; GAIC MRO/ALCS mapping remains author analytical mapping where not directly stated | Preserve conflict-of-interest boundary |
| MPLP-SPEC | MPLP Spec | L2 | Chapter 13 | Closed through MPLP docs entry point for protocol identity support | Preserve version/citation details during final proof |
| VALIDATION-LAB-METHODOLOGY | Validation Lab Methodology | L2 | Chapter 14 | Methodology page cited and boundary narrowed | Retain as public-surface non-certifying example only |
| AUTHOR-INFERENCE-MRO | Sixteen MROs (Author Inference) | L5 | Chapter 6 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-RCCS | RCCS (Author Inference) | L5 | Chapter 7 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-ALCS | ALCS (Author Inference) | L5 | Chapter 8 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-COMPOSITE | Composite Scoring (Author Inference) | L5 | Chapter 9 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-SYSTEM-MAPPING | System Mapping (Author Inference) | L5 | Chapters 11, 12 | ✓ Marked as L5 | Verify L5 marking in text |
| AUTHOR-INFERENCE-FAILURE-SCENARIOS | Failure Scenarios (Author Inference) | L5 | Chapter 15 | ✓ Marked as L5 | Verify L5 marking in text |

---

## C.4 Citation Closure Ledger

The following table lists Phase 1D-11 source closure results after claim-level source review.

**Table T-C-03: Citation Revalidation Queue**

| Source ID | URL / Source Pointer | Closure Result | Remaining Limitation | Release Status |
|-----------|-------------------|----------------|----------------------|----------------|
| IBM-WATSONX-GOVERNANCE-DOCS | `https://www.ibm.com/products/watsonx-governance`; `https://www.ibm.com/docs/en/watsonx` | Official entry points accessible; governance capability claims narrowed to documented surfaces | ALCS lifecycle-object mapping remains L5 where not directly documented | Non-blocking |
| MICROSOFT-AZURE-AI-FOUNDRY-DOCS | `https://learn.microsoft.com/en-us/azure/foundry/` | Official entry point accessible; platform/agent claims narrowed | ALCS lifecycle-object mapping remains L5 where not directly documented | Non-blocking |
| AWS-BEDROCK-DOCS / GUARDRAILS / AGENTCORE | AWS official docs URLs | Official entry points accessible; guardrail/runtime claims narrowed | Guardrails/runtime features are not delegated-authority proof | Non-blocking |
| GOOGLE-VERTEX-AI-DOCS / ADK / MODEL ARMOR | Google official docs URLs | Official entry points accessible; safety/agent claims narrowed | Model safety and ADK primitives are not lifecycle responsibility proof | Non-blocking |
| LANGGRAPH-DOCS / LANGSMITH-DOCS | LangChain official docs URLs | Official entry points accessible; orchestration/observability claims narrowed | Lifecycle governance requires implementer integration | Non-blocking |
| OPENAI-AGENTS-SDK-DOCS / OPENAI-TOOLS-DOCS | `https://openai.github.io/openai-agents-python/`; `https://openai.github.io/openai-agents-js/` | Inaccessible platform guide replaced by accessible official SDK docs for SDK claims | Platform guide HTTP 403 retained as access note only | Non-blocking |
| CREWAI-DOCS / CREWAI-GITHUB | `https://docs.crewai.com/`; `https://github.com/crewAIInc/crewAI` | Official docs/repository accessible; orchestration claims narrowed | Human accountability/lifecycle governance remains implementer-built | Non-blocking |
| MPLP-DOCS / MPLP-SPEC | `https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview` | Protocol identity source-bound; conflict-of-interest boundary preserved | GAIC MRO/ALCS mapping remains author analytical mapping | Non-blocking |
| VALIDATION-LAB-METHODOLOGY | `https://lab.mplp.io/methodology` | Closed as public-surface non-certifying methodology example | Does not support certification, endorsement, audit opinion, or legal compliance proof | Non-blocking |

---

## C.5 Source Notes and Revalidation Policy

### Source Notes

- **L1 sources (legal text and formal standards)** are referenced in Chapter 4 and provide the regulatory baseline for the white paper. These sources are authoritative but require legal interpretation. The white paper does not provide legal advice or legal interpretation.

- **L2 sources (official product documentation)** are referenced in Chapters 12, 13, and 14 and support documented product/protocol capability surfaces. Phase 1D-11 records closure dispositions for high-risk source pointers. L2 sources do not prove deployment practice, audit success, lifecycle responsibility-object implementation, or legal compliance.

- **L5 sources (author inference)** are used in Chapters 6-9, 11-12, and 15 to define the analytical framework (MROs, RCCS, ALCS, Composite Scoring, System Mapping, Failure Scenarios). These sources are marked as author inference and do not replace evidence-based analysis.

- **MPLP and Validation Lab sources** require special attention due to author conflict of interest. The author of this white paper is also the creator of MPLP and Validation Lab. Phase 1C follow-up verified that MPLP and Validation Lab remain positioned as examples, not required or exclusive solutions; publication-candidate QA must preserve that boundary.

### Revalidation Policy

Publication-candidate source governance must:

1. **Keep L2 product documentation tied to narrowed capability-surface claims** and preserve L5 mapping labels where lifecycle support is analytical
2. **Verify all L1 legal/regulatory citations** for accuracy and completeness
3. **Mark all L5 author inference** clearly in the text
4. **Preserve MPLP and Validation Lab boundary discipline** and keep the Validation Lab methodology citation limited to public-surface non-certifying support
5. **Remove or mark as inference** any unsupported claims
6. **Maintain the claim evidence register** documenting all source validation and downgrade actions
