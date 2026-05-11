# Appendix I — Source Audit and Revalidation Register

**Version:** v0.3.2-FRC-R3  

---

## I.0 Source Audit Boundary

This appendix provides a source audit register for the completed Phase 1D-11 source closure record and publication-candidate review handoff. It tracks source classes, citation status, evidence level, claim-binding status, and remaining non-blocking limitations.

This appendix was created before Phase 1C as a revalidation workflow. Phase 1C cleanup updated the citation inventory and source coverage matrix with URL/entry-point review status. Phase 1C follow-up then added the claim evidence register and reviewed high-risk product/protocol claims at claim level. Appendix G is now revalidated provisional, not final.

Source audit work in this appendix is procedural. Phase 1D-11 closed high-risk citation/access/source-pointer blockers by replacing inaccessible sources, narrowing claims, downgrading lifecycle interpretations to L5, and preserving explicit limitations.

---

## I.1 Source Classes and Evidence Levels

The source audit register uses the canonical evidence levels:

- **L1 (Binding Legal Text):** 1.00
- **L2 (Product Docs):** 0.85
- **L3 (Audit Report):** 0.75
- **L4 (Vendor Claim):** 0.55
- **L5 (Author Inference):** 0.35

Evidence levels describe source confidence for analytical scoring. They do not make a source legally sufficient, current, complete, or operationally validated. Evidence levels may change if source type, source currency, or claim support changes during future source review.

---

## I.2 Source Audit Register

**Table T-I-01: Source Audit Register**

| Source ID | Source Name | Source Class | Evidence Level | Used In | Current Status | Publication Follow-up Action |
|-----------|-------------|--------------|----------------|---------|----------------|-----------------|
| EU-AI-ACT | EU AI Act articles referenced in baseline chapters | Legal / regulatory text | L1 | Chapters 4, 7, 8, Appendices E/F | Referenced; citation rendering pending global check | Verify article references and citation formatting |
| GDPR | GDPR articles referenced in privacy and data governance sections | Legal / regulatory text | L1 | Chapters 4, 6, 8, Appendices E/F | Referenced; citation rendering pending global check | Verify article references and privacy mapping language |
| NIST-AI-RMF | NIST AI RMF 1.0 | Formal standard | L1 | Chapter 4, RCCS security/risk mapping | Referenced; final citation check pending | Verify source coverage and citation formatting |
| ISO-IEC-42001 | ISO/IEC 42001 | Formal standard | L1 | Chapter 4, management system baseline | Referenced; final citation check pending | Verify source coverage and citation formatting |
| IMDA-AGENTIC-AI | Singapore IMDA Model AI Governance Framework for Agentic AI | Formal governance framework | L1 | Chapter 4 and comparative baseline | Referenced; final citation check pending | Verify citation details and framework naming |
| W3C-PROV | W3C PROV | Protocol / provenance standard | L1 | Chapter 4, evidence/provenance framing | Referenced; final citation check pending | Verify citation details and relevance language |
| W3C-VC | W3C Verifiable Credentials | Protocol / evidence standard | L1 | Chapter 4, evidence framing | Referenced; final citation check pending | Verify citation details and relevance language |
| MPLP-DOCS | MPLP documentation | Protocol documentation | L2/L5 | Chapters 12, 13, Appendix G, claim register | Official docs entry point located; mapping remains analytical | Keep exact URL pinned; do not treat mapping as implementation proof |
| MPLP-SPEC | MPLP protocol specification | Protocol documentation | L2/L5 | Chapters 12, 13, Appendix G, claim register | Source-bound through MPLP docs entry point | Validate version/citation rendering during publication-candidate QA |
| VALIDATION-LAB | Validation Lab methodology / public surface | Validation methodology source | L2/L5 | Chapter 14, Appendix K, claim register | Methodology page located and narrowed to public-surface non-certifying support | Keep non-certifying boundary; do not treat as audit opinion, endorsement, or legal compliance proof |
| IBM-WATSONX-GOV | IBM watsonx.governance documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact docs pages for final citation |
| MS-AZURE-FOUNDRY | Microsoft Azure AI Foundry documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry point located; ALCS mappings remain L5 where not directly documented | Pin exact Microsoft Learn pages for final citation |
| AWS-BEDROCK-STACK | AWS Bedrock / Guardrails / AgentCore documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact AWS pages for final citation |
| GOOGLE-VERTEX-STACK | Google Vertex AI / ADK / Model Armor documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact Google pages for final citation |
| LANGGRAPH-LANGSMITH | LangGraph / LangSmith documentation | Product documentation / repository documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact LangChain docs pages for final citation |
| OPENAI-AGENTS-SDK | OpenAI Agents SDK documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Accessible official Python/JS SDK docs located; platform guide HTTP 403 retained as access note | Use accessible official SDK docs for SDK-surface claims only |
| CREWAI-DOCS | CrewAI documentation and repository references | Product documentation / repository documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official docs and repository entry points located; ALCS mappings remain L5 where not directly documented | Pin exact CrewAI docs pages for final citation |
| CLAIM-EVIDENCE-REGISTER | Claim evidence register | Internal governance ledger | L5 | Phase 1C follow-up | PHASE 1C CLAIM-LEVEL REVIEW COMPLETE — PROVISIONAL SOURCE BINDING | Maintain as source-to-claim audit ledger |
| CITATION-INVENTORY | Citation inventory ledger | Internal governance ledger | L5 | Appendix C, Appendix I | PHASE 1D-11 CITATION SOURCE CLOSURE COMPLETE — HIGH-RISK BLOCKERS CLOSED | Maintain closure ledger and explicit limitations |
| SOURCE-COVERAGE-MATRIX | Source coverage matrix | Internal governance ledger | L5 | Appendix I, Phase 1C carryover | PHASE 1C CLAIM-LEVEL REVIEWED — PROVISIONAL SOURCE BINDING COMPLETE | Final citation rendering and page-level source pinning remain before publication-candidate release |

---

## I.3 Source Review and Publication Handoff Workflow

Source review and publication handoff should follow a controlled workflow:

1. Freeze the active Markdown source set for validation.
2. Confirm the citation inventory status and source coverage matrix status.
3. Verify each L1 legal or standards citation for citation rendering and relevance.
4. Revalidate every L2 product documentation source for currency, scope, and claim support.
5. Confirm MPLP documentation, Validation Lab methodology, and OpenAI SDK replacement source status.
6. Reclassify evidence levels only when documentation supports the change.
7. Record all source changes, narrowed claims, L5 downgrades, and explicit limitations in Appendix I or a publication QA report.

Phase 1D-11 completed the high-risk source closure path. It did not convert L2 documentation into audit proof, legal compliance proof, certification evidence, regulatory approval, procurement recommendation, or final vendor assessment evidence.

---

## I.4 URL and Citation Verification Queue

**Table T-I-02: URL Verification Queue**

| Source ID | URL / Source Pointer | Used In | Verification Need | Priority | Notes |
|-----------|-------------------|---------|-------------------|----------|-------|
| MPLP-DOCS | `https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview` | Chapters 12, 13, Appendix G | Official docs accessible; protocol identity source-bound | Non-blocking | MRO/ALCS mapping remains L5 analytical where not directly stated |
| MPLP-SPEC | `https://docs.mplp.io/docs/introduction/mplp-v1.0-protocol-overview` | Chapters 12, 13, Appendix G | Bound through protocol overview | Non-blocking | Do not treat protocol mapping as implementation proof |
| VALIDATION-LAB | `https://lab.mplp.io/methodology` | Chapter 14, Appendix K | Methodology page accessible; narrowed to public-surface non-certifying example | Non-blocking | No certification, endorsement, audit opinion, or compliance proof |
| IBM-WATSONX-GOV | IBM official entry points | Chapters 11, 12, Appendix G | Accessible; claims narrowed to capability surfaces | Non-blocking | ALCS mapping remains L5 where not directly documented |
| MS-AZURE-FOUNDRY | `https://learn.microsoft.com/en-us/azure/foundry/` | Chapters 11, 12, Appendix G | Accessible; claims narrowed to capability surfaces | Non-blocking | ALCS mapping remains L5 where not directly documented |
| AWS-BEDROCK-STACK | AWS official Bedrock / Guardrails / AgentCore docs | Chapters 11, 12, Appendix G | Accessible; claims narrowed to capability surfaces | Non-blocking | Guardrails/runtime features are not delegated-authority proof |
| GOOGLE-VERTEX-STACK | Google official Vertex / ADK / Model Armor docs | Chapters 11, 12, Appendix G | Accessible; claims narrowed to capability surfaces | Non-blocking | Safety/agent primitives are not lifecycle responsibility proof |
| LANGGRAPH-LANGSMITH | LangChain official docs | Chapters 11, 12, Appendix G | Accessible; claims narrowed to orchestration/observability surfaces | Non-blocking | Lifecycle governance requires implementer integration |
| OPENAI-AGENTS-SDK | `https://openai.github.io/openai-agents-python/`; `https://openai.github.io/openai-agents-js/` | Chapters 11, 12, Appendix G | Accessible official SDK docs replace platform guide 403 for retained SDK claims | Non-blocking | Platform guide HTTP 403 retained as access note only |
| CREWAI-DOCS | `https://docs.crewai.com/`; `https://github.com/crewAIInc/crewAI` | Chapters 11, 12, Appendix G | Accessible; claims narrowed to orchestration surfaces | Non-blocking | Accountability/lifecycle governance remains implementer-built |
| L1-LEGAL-STANDARDS | Citation source pointers / reference notes | Chapters 4, 7, 8, Appendices E/F | Verify citation rendering and article/standard references | Medium | Does not change legal interpretation |
| FIGURE-TABLE-REFERENCES | Internal references | Entire source | Verify table and figure references render correctly | Medium | Coordinate with Phase 1D layout QA |

Phase 1D-11 located, validated, replaced, or narrowed the high-priority L2 groups. Final human proofing may refine citations, but no high-risk source-pointer remains unresolved.

---

## I.5 Evidence Level Reclassification Rules

**Table T-I-03: Evidence Level Reclassification Rules**

| Current Level | Trigger for Reclassification | New Level | Required Documentation | Reviewer Note |
|---------------|------------------------------|-----------|------------------------|---------------|
| L5 author inference | Official product documentation directly supports the claim | L2 | Source URL, publication/access date, quoted claim summary, mapped claim location | Do not reclassify based on assumption |
| L4 vendor claim | Claim is found in official technical documentation with implementation detail | L2 | Official documentation reference and implementation detail | Marketing-only material remains L4 |
| L2 product documentation | Documentation no longer exists, changed materially, or no longer supports the claim | L4 or L5 | Change note, archived pointer if available, unsupported claim record | Downgrade evidence rather than preserving stale confidence |
| L2 product documentation | Third-party audit report validates implementation detail | L3 | Audit report reference, scope, date, and control mapping | Audit scope must match claim scope |
| L3 audit report | Audit scope does not cover the claim or is not accessible | L4 or L5 | Gap explanation and reviewer note | Do not infer coverage from report existence |
| L1 legal text | Legal text establishes regulatory baseline but not system implementation | L1 for baseline only | Citation and claim boundary note | Do not use legal text alone as implementation evidence |
| Any level | Source is unverifiable during source review | Lower confidence level or unresolved | Verification attempt log and unresolved issue record | Preserve uncertainty explicitly |

---

## I.6 Source Coverage Matrix Validation Note

**Table T-I-04: Source Coverage Matrix Validation Checklist**

| Coverage Area | Expected Source Type | Current Status | Gap | Publication Follow-up Action |
|---------------|----------------------|----------------|-----|-----------------|
| Legal baseline claims | L1 legal / regulatory text | Referenced in baseline chapters | Citation rendering and article mapping not globally validated | Verify all legal citations and claim boundaries |
| Standards baseline claims | L1 formal standards | Referenced in baseline chapters | Citation rendering and standard references not globally validated | Verify all standards citations |
| Product capability claims | L2 product documentation plus L5 mapping where needed | Phase 1D-11 closure applied | No high-risk source-pointer remains unresolved | Preserve narrowed claims and L5 downgrades during publication QA |
| MPLP protocol mapping | L2 protocol docs plus disclosed author relationship | Official docs entry point located; mapping remains L2 + L5 | Version/citation rendering still requires final proofing | Preserve conflict-of-interest and implementation-proof boundary |
| Validation Lab discussion | L2 public methodology page plus L5 methodology interpretation | Phase 1D-11 closure applied | No high-risk source-pointer remains unresolved | Keep non-certifying boundary and do not promote methodology claims |
| Appendix G provisional assessments | L2 product docs and L5 inference | Revalidated provisional | Final assessment remains non-final and non-ranking | Preserve no-score/no-ranking posture and page-level citation needs |
| Citation inventory | Internal ledger | PHASE 1D-11 CITATION SOURCE CLOSURE COMPLETE — HIGH-RISK BLOCKERS CLOSED | Remaining limitations explicit | Preserve closure ledger through final proof |
| Source coverage matrix | Internal ledger | PHASE 1D-11 CITATION SOURCE CLOSURE COMPLETE — HIGH-RISK BLOCKERS CLOSED | Claim-label preservation verified in generated artifact | Preserve source labels during final proof |

The source coverage matrix has been updated through Phase 1D-11 as a coverage and closure ledger. Appendix G remains revalidated provisional, not final, and no score is a final vendor score, ranking, procurement recommendation, certification, or legal compliance proof.
