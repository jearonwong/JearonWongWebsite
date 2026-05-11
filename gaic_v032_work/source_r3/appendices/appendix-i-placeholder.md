# Appendix I — Source Audit and Revalidation Register

**Version:** v0.3.2-FRC-R3  

---

## I.0 Source Audit Boundary

This appendix provides a source audit register for the completed Phase 1C source review record and Phase 1D publication handoff. It tracks source classes, citation status, evidence level, claim-binding status, and required publication follow-up actions.

This appendix was created before Phase 1C as a revalidation workflow. Phase 1C cleanup updated the citation inventory and source coverage matrix with URL/entry-point review status. Phase 1C follow-up then added the claim evidence register and reviewed high-risk product/protocol claims at claim level. Appendix G is now revalidated provisional, not final.

Source audit work in this appendix is procedural. Phase 1C follow-up completed source-entry and claim-disposition review; final publication still requires page-level citation pinning and DOCX/PDF citation rendering checks.

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
| VALIDATION-LAB | Validation Lab methodology / public surface | Validation methodology source | L2/L5 | Chapter 14, Appendix K, claim register | Public entry point located; methodology-specific support remains limited | Keep non-certifying boundary; add methodology-specific citation if available |
| IBM-WATSONX-GOV | IBM watsonx.governance documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact docs pages for final citation |
| MS-AZURE-FOUNDRY | Microsoft Azure AI Foundry documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry point located; ALCS mappings remain L5 where not directly documented | Pin exact Microsoft Learn pages for final citation |
| AWS-BEDROCK-STACK | AWS Bedrock / Guardrails / AgentCore documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact AWS pages for final citation |
| GOOGLE-VERTEX-STACK | Google Vertex AI / ADK / Model Armor documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact Google pages for final citation |
| LANGGRAPH-LANGSMITH | LangGraph / LangSmith documentation | Product documentation / repository documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official entry points located; ALCS mappings remain L5 where not directly documented | Pin exact LangChain docs pages for final citation |
| OPENAI-AGENTS-SDK | OpenAI Agents SDK documentation | Product documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | SDK docs entry point located; platform guide access/rendering needs final check | Use accessible official SDK docs and perform final citation rendering check |
| CREWAI-DOCS | CrewAI documentation and repository references | Product documentation / repository documentation | L2/L5 | Chapters 11, 12, Appendix G, claim register | Official docs and repository entry points located; ALCS mappings remain L5 where not directly documented | Pin exact CrewAI docs pages for final citation |
| CLAIM-EVIDENCE-REGISTER | Claim evidence register | Internal governance ledger | L5 | Phase 1C follow-up | PHASE 1C CLAIM-LEVEL REVIEW COMPLETE — PROVISIONAL SOURCE BINDING | Maintain as source-to-claim audit ledger |
| CITATION-INVENTORY | Citation inventory ledger | Internal governance ledger | L5 | Appendix C, Appendix I | PHASE 1C CLAIM-LEVEL REVIEWED — PROVISIONAL SOURCE BINDING COMPLETE | Final page-level citation pinning remains before publication-candidate release |
| SOURCE-COVERAGE-MATRIX | Source coverage matrix | Internal governance ledger | L5 | Appendix I, Phase 1C carryover | PHASE 1C CLAIM-LEVEL REVIEWED — PROVISIONAL SOURCE BINDING COMPLETE | Final citation rendering and page-level source pinning remain before publication-candidate release |

---

## I.3 Source Review and Publication Handoff Workflow

Source review and publication handoff should follow a controlled workflow:

1. Freeze the active Markdown source set for validation.
2. Confirm the citation inventory status and source coverage matrix status.
3. Verify each L1 legal or standards citation for citation rendering and relevance.
4. Revalidate every L2 product documentation source for currency, scope, and claim support.
5. Confirm MPLP documentation and Validation Lab URL/source pointers.
6. Reclassify evidence levels only when documentation supports the change.
7. Record all source changes and unresolved gaps in Appendix I or a publication QA report.

Phase 1C follow-up completed the claim-level review path at source-entry and claim-disposition level. It did not convert L2 documentation into audit proof or final vendor assessment evidence.

---

## I.4 URL and Citation Verification Queue

**Table T-I-02: URL Verification Queue**

| Source ID | URL / Source Pointer | Used In | Verification Need | Priority | Notes |
|-----------|-------------------|---------|-------------------|----------|-------|
| MPLP-DOCS | Citation inventory source pointer | Chapters 12, 13, Appendix G | Validate URL, source currency, and protocol documentation scope | High | Canonical Phase 1C carryover item |
| MPLP-SPEC | Citation inventory source pointer | Chapters 12, 13, Appendix G | Validate specification URL and version | High | Do not treat protocol mapping as implementation proof |
| VALIDATION-LAB | Citation inventory source pointer | Chapter 14, Appendix K | Validate URL and non-certifying methodology boundary | High | Canonical Phase 1C carryover item |
| IBM-WATSONX-GOV | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate official documentation URL and current product scope | High | L2 product docs remain provisional |
| MS-AZURE-FOUNDRY | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate official documentation URL and current product scope | High | L2 product docs remain provisional |
| AWS-BEDROCK-STACK | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate official documentation URLs and current product scope | High | Includes Bedrock, Guardrails, and AgentCore references |
| GOOGLE-VERTEX-STACK | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate official documentation URLs and current product scope | High | Includes Vertex AI, ADK, and Model Armor references |
| LANGGRAPH-LANGSMITH | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate documentation and repository references | High | Confirm current framework/documentation names |
| OPENAI-AGENTS-SDK | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate official documentation URL and current SDK scope | High | Do not add new product claims during verification |
| CREWAI-DOCS | Citation inventory source pointer | Chapters 11, 12, Appendix G | Validate documentation and repository references | High | Confirm current documentation scope |
| L1-LEGAL-STANDARDS | Citation source pointers / reference notes | Chapters 4, 7, 8, Appendices E/F | Verify citation rendering and article/standard references | Medium | Does not change legal interpretation |
| FIGURE-TABLE-REFERENCES | Internal references | Entire source | Verify table and figure references render correctly | Medium | Coordinate with Phase 1D layout QA |

Phase 1C follow-up located or validated official source entry points for the high-priority L2 groups. Final page-level citation pinning and DOCX/PDF citation rendering remain Phase 1D/publication-candidate tasks.

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
| Product capability claims | L2 product documentation plus L5 mapping where needed | Claim-level source binding applied | Exact page-level citation pinning remains for publication-candidate QA | Preserve narrowed claims and L5 downgrades during publication QA |
| MPLP protocol mapping | L2 protocol docs plus disclosed author relationship | Official docs entry point located; mapping remains L2 + L5 | Version/citation rendering still requires final proofing | Preserve conflict-of-interest and implementation-proof boundary |
| Validation Lab discussion | L2 public entry point plus L5 methodology interpretation | Public entry point located; methodology-specific support remains boundary-limited | Exact methodology citation may remain unresolved | Keep non-certifying boundary and do not promote methodology claims |
| Appendix G provisional assessments | L2 product docs and L5 inference | Revalidated provisional | Final assessment remains non-final and non-ranking | Preserve no-score/no-ranking posture and page-level citation needs |
| Citation inventory | Internal ledger | PHASE 1C CLAIM-LEVEL REVIEWED — PROVISIONAL SOURCE BINDING COMPLETE | Exact citation pages and rendering not yet verified | Pin page-level citations before publication candidate |
| Source coverage matrix | Internal ledger | PHASE 1C CLAIM-LEVEL REVIEWED — PROVISIONAL SOURCE BINDING COMPLETE | Citation rendering and claim-label preservation not yet verified | Verify source labels during Phase 1D/publication QA |

The source coverage matrix has been updated during Phase 1C as a coverage ledger and during Phase 1C follow-up as a claim-level source-binding ledger. Publication-candidate QA still requires page-level citation pinning and rendering checks. Appendix G remains revalidated provisional, not final.
