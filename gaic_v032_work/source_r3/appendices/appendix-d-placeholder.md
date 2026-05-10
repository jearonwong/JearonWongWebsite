# Appendix D — Expanded Cross-System MRO Mapping

**Version:** v0.3.2-FRC-R3  
**Status:** REVALIDATED PROVISIONAL — Phase 1C claim-level source binding applied  
**Phase:** 1B-8 / 1C Follow-up

---

## D.0 Mapping Boundary

This appendix provides an expanded cross-system MRO mapping across the eight representative systems evaluated in Chapters 11-12. This mapping is an analytical tool, not a product ranking, certification, or procurement recommendation. Phase 1C follow-up located official source entry points and added claim-level source binding, but the mapping remains **revalidated provisional** because many MRO-to-system cells are analytical interpretations rather than direct product-documentation claims.

**Boundary statement:**

- **This mapping is analytical only.** The mapping compares systems by responsibility semantics, not product quality, market leadership, or procurement suitability.

- **This mapping is not a product ranking.** Systems are not ranked by score or quality. The mapping identifies where systems appear to provide lifecycle responsibility object primitives and where gaps may exist.

- **This mapping is not certification.** The presence of lifecycle responsibility object primitives does not certify a system as compliant, approved, or enterprise-ready.

- **This mapping is not a procurement recommendation.** Organizations must evaluate systems within their specific legal, regulatory, and operational context. This mapping provides analytical input, not procurement guidance.

- **This mapping is based on source-bound public evidence and analytical interpretation.** Official product/protocol entry points were located during Phase 1C follow-up. L2 evidence supports documented capability surfaces; MRO cell-level mapping remains L5 analytical interpretation where official documentation does not directly define the lifecycle responsibility object.

- **This mapping uses qualitative values.** The mapping uses qualitative values (Strong object-level mapping, Strong workflow/feature mapping, Partial or adjacent capability, Weak or implementer-built only, Not visible in public evidence, Source support unresolved where applicable) rather than numeric scores to avoid creating a false precision ranking.

---

## D.1 How to Read the Expanded MRO Mapping

The expanded MRO mapping (Table T-D-01) maps all sixteen Missing Regulatory Objects across all eight representative systems.

**Qualitative values:**

- **Strong object-level mapping:** System appears to provide explicit lifecycle responsibility object primitives with protocol-level or API-level support based on available documentation. Example: MPLP appears to provide explicit role, context, plan, confirm, and trace semantics. **Revalidated provisional; mapping remains L5 unless the source directly defines the object.**

- **Strong workflow/feature mapping:** System appears to provide workflow or feature primitives that may support lifecycle responsibility objects with configuration or integration based on available documentation. Example: IBM watsonx.governance appears to provide model governance workflows that may support lifecycle responsibility objects. **Revalidated provisional; adjacent workflow evidence is not lifecycle-object proof.**

- **Partial or adjacent capability:** System appears to provide adjacent capabilities that are related to lifecycle responsibility objects but may not fully satisfy the object requirements based on available documentation. Example: Approval button is not the same as human-role-to-MAS responsibility mapping. **Revalidated provisional; keep as adjacent unless exact source support is pinned.**

- **Weak or implementer-built only:** Lifecycle responsibility object primitives are not visible in current public documentation; implementers may need to build lifecycle governance on top of the system. Example: OpenAI Agents SDK provides execution primitives, while enterprise lifecycle governance objects require additional design. **Revalidated provisional; this does not prove absence of private or implementation-specific capability.**

- **Not visible in public evidence:** Lifecycle responsibility object primitives are not visible in public product documentation or protocol specifications. This does not prove the capability does not exist; it means public evidence is not available.

- **Source support unresolved:** Mapping is uncertain because exact source support for the lifecycle responsibility object has not been pinned.

**Reading the table:**

- **Rows:** Sixteen Missing Regulatory Objects (MRO-01 through MRO-16)
- **Columns:** Eight representative systems (MPLP, IBM, Microsoft, AWS, Google, LangGraph/LangSmith, OpenAI, CrewAI)
- **Cells:** Qualitative mapping value for each MRO × System combination
- **Notes column:** Additional context or boundary notes

---

## D.2 Expanded Cross-System MRO Mapping

**Table T-D-01: Expanded Cross-System MRO Mapping**

**Note:** This table is very wide (10 columns) and requires landscape layout. Phase 1C layout audit documented the risk; Phase 1D rendering QA remains required.

| MRO ID | MRO Name | MPLP | IBM watsonx.governance | Microsoft Azure AI Foundry | AWS Bedrock / Guardrails / AgentCore | Google Vertex AI / ADK / Model Armor | LangGraph / LangSmith | OpenAI Agents SDK | CrewAI | Notes |
|--------|----------|------|------------------------|----------------------------|--------------------------------------|--------------------------------------|----------------------|-------------------|--------|-------|
| MRO-01 | Human Role to MAS Responsibility Mapping | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Role semantics appear explicit; IBM: Governance workflows may support role mapping; Others: Adjacent capabilities may exist but not lifecycle-specific. All provisional pending Phase 1C revalidation |
| MRO-02 | Delegated Authority Boundary | Strong object-level mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Authority boundary semantics appear explicit; AWS: Guardrails may provide boundary enforcement; Others: Access control ≠ authority boundary. All provisional pending Phase 1C revalidation |
| MRO-03 | Agent Role is not Human Role | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Partial or adjacent capability (provisional) | MPLP: Role distinction appears explicit; IBM: Governance workflows may distinguish roles; CrewAI: Agent role labels exist but ≠ accountability roles. All provisional pending Phase 1C revalidation |
| MRO-04 | Accepted Outcome Compliance | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Confirm semantics appear explicit; IBM: Approval workflows may exist; Others: Task completion ≠ accepted outcome. All provisional pending Phase 1C revalidation |
| MRO-05 | Tool-Action Liability Boundary | Strong object-level mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Tool-action semantics appear explicit; AWS: Guardrails may provide tool-action controls; Others: Tool calling ≠ liability boundary. All provisional pending Phase 1C revalidation |
| MRO-06 | Responsibility Transfer Across Agents | Strong object-level mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Weak or implementer-built only (provisional) | Partial or adjacent capability (provisional) | MPLP: Handoff semantics appear explicit; LangGraph: Orchestration may support handoff; Others: Handoff ≠ responsibility transfer. All provisional pending Phase 1C revalidation |
| MRO-07 | Authority Drift | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Drift detection semantics appear explicit; IBM: Model monitoring may detect drift; Others: Monitoring ≠ authority drift detection. All provisional pending Phase 1C revalidation |
| MRO-08 | MAS Evidence Partitioning | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Evidence partitioning semantics appear explicit; IBM: Audit trail partitioning may exist; LangSmith: Trace partitioning may exist; Others: Logs ≠ partitioned evidence. All provisional pending Phase 1C revalidation |
| MRO-09 | Cross-Project Reuse Compliance | Strong object-level mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Reuse validation semantics appear explicit; Others: Reuse ≠ reuse compliance validation. All provisional pending Phase 1C revalidation |
| MRO-10 | Privacy / GDPR Lifecycle Mapping | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Privacy lifecycle semantics appear explicit; IBM/Microsoft/Google: Data governance workflows may exist; Others: Data governance ≠ lifecycle privacy mapping. All provisional pending Phase 1C revalidation |
| MRO-11 | Privacy-Preserving Third-Party Validation | Strong object-level mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Validation semantics appear explicit; Others: Validation ≠ privacy-preserving validation protocol. All provisional pending Phase 1C revalidation |
| MRO-12 | Evidence Minimization and Selective Disclosure | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Selective disclosure semantics appear explicit; IBM: Evidence export with minimization may exist; Others: Data export ≠ selective disclosure. All provisional pending Phase 1C revalidation |
| MRO-13 | Data Subject Rights vs Evidence Retention | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Retention reconciliation semantics appear explicit; IBM/Microsoft/Google: Data subject rights workflows may exist; Others: Data retention ≠ evidence retention reconciliation. All provisional pending Phase 1C revalidation |
| MRO-14 | Third-Party Processor / Subprocessor Chain | Partial or adjacent capability (provisional) | Strong workflow/feature mapping (provisional) | Strong workflow/feature mapping (provisional) | Strong workflow/feature mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | IBM/Microsoft/AWS/Google: Processor chain documentation may exist; MPLP: Network semantics may support but require integration; Others: Processor chain ≠ responsibility chain. All provisional pending Phase 1C revalidation |
| MRO-15 | Vendor / Model / Runtime Substitution Conformance | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Substitution conformance semantics appear explicit; IBM: Model version management may exist; Others: Model substitution ≠ conformance validation. All provisional pending Phase 1C revalidation |
| MRO-16 | Incident, Dispute, and Remediation Closure | Strong object-level mapping (provisional) | Strong workflow/feature mapping (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Partial or adjacent capability (provisional) | Weak or implementer-built only (provisional) | Weak or implementer-built only (provisional) | MPLP: Closure semantics appear explicit; IBM: Incident management workflows may exist; Others: Incident response ≠ remediation closure with lifecycle evidence. All provisional pending Phase 1C revalidation |

---

## D.3 Pattern-Level Interpretation

The expanded MRO mapping reveals several provisional patterns across system categories. **All mappings remain revalidated provisional after Phase 1C claim-level source binding.**

**Pattern 1: Lifecycle protocol paths (MPLP) provisionally show strong object-level mapping across most MROs.**

Based on available protocol documentation, MPLP appears to provide explicit protocol-level semantics for lifecycle responsibility objects. However, protocol-level fit does not prove deployment conformance, operational effectiveness, or enterprise adoption. MPLP requires implementation validation, enterprise integration, and organizational adoption. Phase 1C follow-up located the official MPLP documentation entry point; mapping strength remains L5 analytical interpretation where not directly stated in protocol text.

**Pattern 2: Enterprise AI governance platforms (IBM watsonx.governance) provisionally show strong workflow/feature mapping across governance-related MROs.**

Based on available product documentation, IBM watsonx.governance appears to provide model governance workflows, audit trails, data governance, and incident management. These workflows may support lifecycle responsibility objects with configuration or integration. However, workflow/feature mapping does not automatically provide lifecycle responsibility semantics. Organizations must map workflows to lifecycle objects. Phase 1C follow-up located official IBM entry points; MRO cell mappings remain provisional.

**Pattern 3: Cloud AI platforms (Microsoft, AWS, Google) provisionally show strong workflow/feature mapping for data governance and processor chain MROs, but partial or adjacent capability for lifecycle-specific MROs.**

Based on available product documentation, cloud AI platforms appear to provide data governance, processor chain documentation, and compliance workflows. However, these platforms are designed for model governance and AI platform operations, not necessarily lifecycle responsibility-object governance. Lifecycle responsibility objects may require additional integration or custom implementation. Phase 1C follow-up located official Microsoft, AWS, and Google entry points; MRO cell mappings remain provisional.

**Pattern 4: Agent orchestration frameworks (LangGraph/LangSmith) provisionally show strong workflow/feature mapping for evidence partitioning and responsibility transfer, but partial or adjacent capability for other MROs.**

Based on available product documentation, LangGraph appears to provide orchestration primitives and LangSmith appears to provide tracing/observability primitives. These primitives may be useful for lifecycle governance but do not automatically provide lifecycle responsibility semantics. Organizations must build lifecycle governance on top of orchestration primitives. Phase 1C follow-up located official LangGraph/LangSmith entry points; MRO cell mappings remain provisional.

**Pattern 5: Developer agent SDKs (OpenAI Agents SDK, CrewAI) provisionally show weak or implementer-built only for most MROs.**

Based on available product documentation, developer agent SDKs appear to provide execution primitives but not final lifecycle governance primitives. Organizations must build lifecycle governance on top of execution primitives. This is not a weakness of the SDKs; it reflects their design purpose (execution, not governance). Phase 1C follow-up located official OpenAI Agents SDK and CrewAI entry points; MRO cell mappings remain provisional.

**Pattern 6: The field gap is not lack of AI tools. The field gap is lack of explicit lifecycle responsibility objects.**

All eight systems provide useful primitives for agentic AI. However, based on available public evidence, many lifecycle responsibility object primitives remain adjacent, implementer-built, or analytically inferred. Organizations must build lifecycle governance by integrating multiple systems, configuring workflows, or implementing custom lifecycle governance layers. **This pattern remains revalidated provisional after Phase 1C claim-level source binding.**

---

## D.4 Phase 1C Claim-Level Source Binding Note

This appendix is based on public product documentation and protocol specifications available as of the white paper publication date. Phase 1C follow-up completed source-entry and claim-disposition review for Appendix D. Remaining finalization work is to:

1. **Pin exact page-level citations** for high-risk MRO cell claims where needed
2. **Preserve L5 analytical status** for MRO mappings not directly stated in official documentation
3. **Retain provisional wording** for all cross-system cells until publication approval
4. **Verify all qualitative mapping values** during final proofing
5. **Mark uncertain mappings** as source-support unresolved if exact page-level support cannot be pinned

**Phase 1D wide-table evaluation:** Table T-D-01 is very wide (10 columns) and may require splitting, rotation, or alternative layout for readability in DOCX/PDF format.

---

**End of Appendix D**

**Appendix D Status:** REVALIDATED PROVISIONAL (Phase 1C Follow-up) — Expanded Cross-System MRO Mapping complete; official source entry points located and claim-level source binding recorded in the claim evidence register; cell-level mappings remain provisional/L5 where exact lifecycle-object support is not directly pinned; Phase 1D wide-table rendering QA required for T-D-01.
