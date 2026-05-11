# Page-Level Citation Map

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Status:** PHASE 1D-11 CITATION SOURCE CLOSURE COMPLETE  
**Last Updated:** May 11, 2026

## Purpose

This map records citation clusters, source IDs, evidence levels, citation placement, and Phase 1D-11 closure actions for the active Markdown source. It does not introduce new claims or promote L5 inference. It records the high-risk source closure used for the publication-candidate review draft.

## Citation Placement Policy

- **Inline:** Use near specific legal, product, protocol, or methodology claims.
- **Table-level:** Use for table clusters where repeated row-level citations would make the table unreadable.
- **Appendix-level:** Use for source registers, templates, and governance ledgers.
- **Report-level:** Use only for internal reconstruction/provenance notes, not as support for body claims.

## Page-Level Citation Map

| Page / Section | Claim Cluster | Source ID(s) | Evidence Level | Citation Placement | Rendering Risk | Phase 1D Action |
|---|---|---|---|---|---|---|
| Front Matter | Conflict-of-interest, non-legal, non-certifying boundary | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Appendix-level / report-level | Low | Preserve disclosure and avoid raw URL expansion |
| Chapter 1 | Scope, methodology, audience, non-legal boundary | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; CLAIM-EVIDENCE-REGISTER | L1 + L5 | Inline for legal/standards references; appendix-level for methodology | Medium | Verify legal/standards citation rendering |
| Chapter 2 | Missing lifecycle governance layer | EU-AI-ACT-2024-1689; NIST-AI-RMF-1-0; ISO-IEC-42001; SOURCE-COVERAGE-MATRIX | L1 + L5 | Inline for baseline references; appendix-level for synthesis | Medium | Keep L5 synthesis visible |
| Chapter 3 | Model-centric compliance limitations for agentic AI | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001 | L1 + L5 | Inline / chapter-level | Medium | Verify baseline citations near regulatory claims |
| Chapter 4 | Regulatory and standards baseline | EU-AI-ACT-2024-1689; GDPR-2016-679; COLORADO-SB24-205; COLORADO-SB25B-004; NIST-AI-RMF-1-0; ISO-IEC-42001; IMDA-AGENTIC-AI-MGF; W3C-PROV; W3C-VC-DATA-MODEL | L1 | Inline and table-level | High | Pin article/page references and verify Colorado amendment note |
| Chapter 5 | Regulatory language to engineering objects | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001 | L1 + L5 | Inline / table-level | Medium | Preserve engineering translation as L5 analysis |
| Chapter 6 | Missing Regulatory Objects taxonomy | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; SOURCE-COVERAGE-MATRIX | L1 + L5 | Chapter-level / table-level | Medium | Check MRO taxonomy labels and legal baseline citations |
| Chapter 7 | RCCS dimensions and scoring boundary | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; SOURCE-COVERAGE-MATRIX | L1 + L5 | Inline for legal/standards; table-level for scoring | Medium | Preserve RCCS as analytical, not legal score |
| Chapter 8 | ALCS dimensions and lifecycle taxonomy | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; CLAIM-EVIDENCE-REGISTER | L1 + L5 | Inline / table-level | Medium | Preserve canonical ALCS dictionary and L5 lifecycle synthesis |
| Chapter 9 | Composite scoring method | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Chapter-level / table-level | Low | Verify formula rendering and non-legal-score boundary |
| Chapter 10 | Enterprise control crosswalk | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; SOURCE-COVERAGE-MATRIX | L1 + L5 | Inline / table-level | Medium | Verify control framework citations and non-procurement boundary |
| Chapter 11 | Comparative field positioning | MPLP-DOCS; MPLP-SITE; IBM-WATSONX-GOVERNANCE-DOCS; MICROSOFT-AZURE-AI-FOUNDRY-DOCS; AWS-BEDROCK-DOCS; GOOGLE-VERTEX-AI-DOCS; LANGGRAPH-DOCS; LANGSMITH-DOCS; OPENAI-AGENTS-SDK-DOCS; CREWAI-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level and appendix-level | High | Ensure system comparisons cite source IDs and remain non-ranking |
| Chapter 12 | Detailed system mappings | MPLP-DOCS; IBM-WATSONX-GOVERNANCE-DOCS; MICROSOFT-AZURE-AI-FOUNDRY-DOCS; AWS-BEDROCK-DOCS; AWS-BEDROCK-GUARDRAILS-DOCS; AWS-AGENTCORE-DOCS; GOOGLE-VERTEX-AI-DOCS; GOOGLE-ADK-DOCS; GOOGLE-MODEL-ARMOR-DOCS; LANGGRAPH-DOCS; LANGSMITH-DOCS; OPENAI-AGENTS-SDK-DOCS; OPENAI-TOOLS-DOCS; CREWAI-DOCS; CREWAI-GITHUB; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level plus local inline notes for high-risk claims | Medium | Phase 1D-11 closed high-risk source pointers; OpenAI platform guide 403 replaced by accessible official SDK docs for retained claims |
| Chapter 13 | MPLP deep mapping and boundary | MPLP-DOCS; MPLP-SITE; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Inline for protocol identity; table-level for analytical mapping | High | Preserve MPLP non-required/non-exclusive boundary and L5 mappings |
| Chapter 14 | Evidence-based validation pattern and Validation Lab example | VALIDATION-LAB; W3C-PROV; W3C-VC-DATA-MODEL; CLAIM-EVIDENCE-REGISTER | L2 + L1 + L5 | Inline for Validation Lab public surface; table-level for pattern mapping | Medium | Phase 1D-11 pins methodology page and narrows Validation Lab to public-surface non-certifying example only |
| Chapter 15 | Enterprise failure scenarios | GDPR-2016-679; EU-AI-ACT-2024-1689; CLAIM-EVIDENCE-REGISTER | L1 + L5 | Scenario/table-level | Medium | Confirm system-specific statements remain generic or source-bound |
| Chapter 16 | Companion paper boundary | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Chapter-level | Low | Preserve non-certification and companion scope boundaries |
| Chapter 17 | Adoption roadmap | SOURCE-COVERAGE-MATRIX; CLAIM-EVIDENCE-REGISTER | L5 | Table-level | Medium | Verify Stage 0-to-7 wording and non-procurement boundary |
| Chapter 18 | Conclusion and non-claims | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Chapter-level / table-level | Medium | Preserve eight-contribution wording and non-claim table |
| Appendix A | Machine-readable object templates | SOURCE-COVERAGE-MATRIX; CLAIM-EVIDENCE-REGISTER | L5 | Appendix-level | Low | Keep templates illustrative and non-certifying |
| Appendix B | Scorecard templates | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Appendix-level / table-level | Medium | Verify formulas and no legal-score framing |
| Appendix C | References and source notes | All citation inventory source IDs | L1-L5 | Appendix-level | High | Render source table cleanly; keep raw URLs allowed only in source tables |
| Appendix D | Expanded cross-system MRO mapping | MPLP-DOCS; IBM-WATSONX-GOVERNANCE-DOCS; MICROSOFT-AZURE-AI-FOUNDRY-DOCS; AWS-BEDROCK-DOCS; AWS-BEDROCK-GUARDRAILS-DOCS; AWS-AGENTCORE-DOCS; GOOGLE-VERTEX-AI-DOCS; GOOGLE-ADK-DOCS; GOOGLE-MODEL-ARMOR-DOCS; LANGGRAPH-DOCS; LANGSMITH-DOCS; OPENAI-AGENTS-SDK-DOCS; CREWAI-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Keep cell-level mappings provisional and avoid row over-support |
| Appendix E | RCCS detailed rubrics | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; CLAIM-EVIDENCE-REGISTER | L1 + L5 | Appendix-level / table-level | Medium | Preserve legal-text-not-implementation boundary |
| Appendix F | ALCS detailed rubrics | EU-AI-ACT-2024-1689; GDPR-2016-679; NIST-AI-RMF-1-0; ISO-IEC-42001; CLAIM-EVIDENCE-REGISTER | L1 + L5 | Appendix-level / table-level | Medium | Preserve canonical ALCS dictionary and legal-text boundary |
| Appendix G — G.0/G.1 | Assessment boundary and reading guide | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Appendix-level | Medium | Preserve revalidated provisional status and no-score/no-ranking language |
| Appendix G — MPLP | MPLP provisional assessment | MPLP-DOCS; MPLP-SITE; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level plus boundary note | High | Pin protocol page/version; keep mapping L5 where analytical |
| Appendix G — IBM | IBM provisional assessment | IBM-WATSONX-GOVERNANCE-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin exact IBM pages; keep ALCS object claims L5 unless directly supported |
| Appendix G — Microsoft | Microsoft provisional assessment | MICROSOFT-AZURE-AI-FOUNDRY-DOCS; MICROSOFT-RESPONSIBLE-AI-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin exact Microsoft Learn pages; use current Foundry entry point |
| Appendix G — AWS | AWS provisional assessment | AWS-BEDROCK-DOCS; AWS-BEDROCK-GUARDRAILS-DOCS; AWS-AGENTCORE-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin exact AWS pages for retained capability surfaces |
| Appendix G — Google | Google provisional assessment | GOOGLE-VERTEX-AI-DOCS; GOOGLE-ADK-DOCS; GOOGLE-MODEL-ARMOR-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin exact Google pages using current redirect targets |
| Appendix G — LangGraph/LangSmith | LangGraph/LangSmith provisional assessment | LANGGRAPH-DOCS; LANGSMITH-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin persistence/interrupt/tracing/evaluation pages |
| Appendix G — OpenAI Agents SDK | OpenAI provisional assessment | OPENAI-AGENTS-SDK-DOCS; OPENAI-TOOLS-DOCS; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | Medium | Use accessible official Python/JS SDK docs for retained SDK-surface claims; platform guide 403 remains a non-blocking access note |
| Appendix G — CrewAI | CrewAI provisional assessment | CREWAI-DOCS; CREWAI-GITHUB; CLAIM-EVIDENCE-REGISTER | L2 + L5 | Table-level | High | Pin docs/repository paths only for retained claims |
| Appendix G — T-G-09 | Cross-system pattern summary | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Table-level | Medium | Preserve qualitative and provisional pattern language |
| Appendix H | Enterprise procurement scorecard | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX | L5 | Appendix-level / table-level | Medium | Ensure scorecard supports questions, not vendor selection |
| Appendix I | Source audit register | CITATION-INVENTORY; SOURCE-COVERAGE-MATRIX; CLAIM-EVIDENCE-REGISTER | L5 | Appendix-level | High | Keep OpenAI 403, Validation Lab methodology limit, and page pinning queue visible |
| Appendix J | Gap closure matrix | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX; TABLE-INVENTORY; FIGURE-INVENTORY | L5 | Appendix-level / table-level | Medium | Preserve Phase 1D deferrals and no publication declaration |
| Appendix K | Editorial remediation record | CLAIM-EVIDENCE-REGISTER; SOURCE-COVERAGE-MATRIX; reports/* | L5 | Appendix-level / report-level | Medium | Preserve governance traceability without over-supporting factual claims |

## Phase 1D Citation Actions

1. Preserve article/page references for legal and standards citations as baseline references only.
2. Preserve product documentation references as capability-surface support only; lifecycle mapping remains L5 where not directly supported.
3. Treat OpenAI platform guide 403 as a non-blocking access note because accessible official SDK docs replace it for retained claims.
4. Treat Validation Lab methodology as public-surface, non-certifying, non-endorsement support only.
5. Verify raw URLs appear only in source tables, citation registers, or reports where intentionally allowed.
6. Confirm table-level citations do not over-support row-level L5 analytical mappings.

---

**End of Inventory**
