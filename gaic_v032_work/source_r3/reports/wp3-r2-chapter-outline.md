# WP3-R2 Chapter 0-16 Source-Grounded Outline

**Task ID:** WP3-R2-SOURCE-GROUNDED-OUTLINE
**Mode:** Source-grounded outline only
**Status:** Internal outline for R3 drafting preparation

## Chapter 0

**Title:** The Plain-English Problem: Why Agentic AI Breaks Today’s Insurance Logic

- **Purpose:** Open the paper in plain English and define the industry problem.
- **Opening problem:** Insurance must know who is covered, what is covered, what happened, who was responsible, and what evidence supports the claim.
- **Source-backed claims:** Insurance contracts identify subjects, limits, and exclusions; current AI governance and cyber sources show AI creates review and evidence pressures. Sources: INS-04, INS-05, INS-06, INS-08, INS-09, CLAIM-01, CLAIM-02, MKT-01, MKT-02.
- **Author synthesis:** The bridge chain `Legal Subject -> Human Role -> Agent/MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision`. INT-01, INT-05, INT-06.
- **WP1 mapping:** MRO-01, MRO-02, MRO-03, MRO-04, MRO-05, MRO-06, MRO-07, MRO-08, MRO-16; ALCS; enterprise failure scenarios.
- **WP2 mapping:** Audit Evidence Chain, Agentic Audit Object, AARM, logs-vs-evidence distinction.
- **AIO/AIRM mapping:** AIO overview; AIRM L0-L2.
- **Tables/figures:** bridge diagram, plain-English insurance table.
- **Examples:** support ticket bot, finance workflow agent, procurement agent, multi-agent vendor call.
- **Boundary notes:** No market consensus claim; no insurance advice.
- **Must-not-claim:** AI agents are legal insured subjects; current AI insurance solves broad agentic lifecycle risk.
- **R3 instructions:** Keep the first page human-readable; make the problem intelligible without jargon.

## Chapter 1

**Title:** The Insured Subject Problem: Who Is Covered When an Agent Acts?

- **Purpose:** Separate legal subject from agentic actor.
- **Opening problem:** Who is covered when an agent acts?
- **Source-backed claims:** Insurance terminology centers on insurer/insured/policy relationships; additional insured and D&O/E&O basics support subject distinctions. Sources: INS-04, INS-06, INS-07, INS-08.
- **Author synthesis:** Agentic action must map back to human/company/vendor responsibility. INT-01, INT-04, INT-05.
- **WP1 mapping:** MRO-01, MRO-03, MRO-06.
- **WP2 mapping:** Human/agent responsibility mapping.
- **AIO/AIRM mapping:** AIO-01, AIO-03; AIRM L0-L2.
- **Tables/figures:** insured subject vs agent question.
- **Examples:** officer-approved action, vendor-operated agent, professional-service mistake.
- **Boundary notes:** No jurisdiction-specific legal advice.
- **Must-not-claim:** AI agents are insured legal subjects.
- **R3 instructions:** Start with person/company/vendor before model or agent language.

## Chapter 2

**Title:** The Insurable Object Problem: What Exactly Is Being Covered?

- **Purpose:** Define the bounded exposure.
- **Opening problem:** What is the reviewable exposure?
- **Source-backed claims:** Existing AI products and cyber examples show AI risk is described as performance, error, misuse, or cyber event, not as a free-floating agent subject. Sources: MKT-01, MKT-02, MKT-03, INS-01, INS-09, INS-10.
- **Author synthesis:** The insurable object is a bounded agentic work unit, operation, exposure, or loss-triggering activity. INT-01, INT-06.
- **WP1 mapping:** MRO-02, MRO-04, MRO-05, MRO-08.
- **WP2 mapping:** Audit object clarity, evidence sufficiency.
- **AIO/AIRM mapping:** AIO-02, AIO-04, AIO-05; AIRM L1-L3.
- **Tables/figures:** subject/object/layer table.
- **Examples:** same model, different authority; same workflow, different outcome.
- **Boundary notes:** No policy-form or underwriting-standard claim.
- **Must-not-claim:** Model name alone is insurable object.
- **R3 instructions:** Make the object boundary concrete before discussing policy response.

## Chapter 3

**Title:** The Responsibility Mapping Problem: How Human Liability and Agentic AI Risk Connect

- **Purpose:** Show why HITL is insufficient.
- **Opening problem:** How does agent action map to responsibility?
- **Source-backed claims:** Governance and D&O/E&O sources show human/organizational duty structures matter; incident/recovery sources show evidence of who did what matters. Sources: INS-01, INS-07, INS-08, MKT-07, CLAIM-03.
- **Author synthesis:** Human role x agent role x work unit x evidence x loss event x legal subject. INT-01, INT-04, INT-05.
- **WP1 mapping:** MRO-01, MRO-03, MRO-06, MRO-07, MRO-16.
- **WP2 mapping:** Agentic Audit Object, accepted outcome, remediation closure.
- **AIO/AIRM mapping:** AIO-03, AIO-05, AIO-08, AIO-09, AIO-10; AIRM L2-L4.
- **Tables/figures:** responsibility matrix.
- **Examples:** approval click, delegated tool action, exception escalation.
- **Boundary notes:** Responsibility mapping is not legal liability determination.
- **Must-not-claim:** HITL by itself creates liability structure.
- **R3 instructions:** Keep the distinction between oversight and responsibility explicit.

## Chapter 4

**Title:** What AI Insurance Covers Today, and Why Agentic AI Still Falls Through the Gap

- **Purpose:** Map current market edges.
- **Opening problem:** What exists today, and what gap remains?
- **Source-backed claims:** AI-specific products and market commentary show experimentation in AI performance/error, cyber-linked AI coverages, E&O, and D&O contexts. Sources: MKT-01, MKT-02, MKT-03, MKT-05, MKT-06, MKT-07, MKT-08, INS-07, INS-08, INS-09, INS-10.
- **Author synthesis:** These edges do not equal broad agentic lifecycle risk transfer. INT-01, INT-03.
- **WP1 mapping:** Market-neutral boundary, failure scenarios.
- **WP2 mapping:** Evidence boundary; logs/evidence distinction.
- **AIO/AIRM mapping:** AIO-04, AIO-12, AIO-13; AIRM L2-L4.
- **Tables/figures:** current AI insurance focus table.
- **Examples:** AI performance policy, cyber LLMjacking coverage, AI-related D&O discussion.
- **Boundary notes:** Do not imply market consensus.
- **Must-not-claim:** AI is broadly covered or broadly excluded.
- **R3 instructions:** Use narrow examples with caveats in the same paragraph.

## Chapter 5

**Title:** Why Agentic AI Is Not Yet Broadly Insurable

- **Purpose:** State the insurability blocker set.
- **Opening problem:** What prevents broad risk transfer?
- **Source-backed claims:** Public sources support the existence of AI governance pressure, cyber accumulation risk, and fragmented market experimentation, but not a standard lifecycle object layer. Sources: INS-01, MKT-08, CYB-02, CYB-03, CYB-04, CLAIM-01, TECH-01 to TECH-05.
- **Author synthesis:** Insurability needs bounded objects, authority, responsibility, evidence, dependencies, reconstruction, and aggregation views. INT-01 to INT-07.
- **WP1 mapping:** MRO set, ALCS, enterprise failure scenarios.
- **WP2 mapping:** AARM and Audit Evidence Chain.
- **AIO/AIRM mapping:** AIO-01 to AIO-14; AIRM L0-L3.
- **Tables/figures:** blocker-to-object table.
- **Examples:** claims dispute with missing event order, shared model dependency, unclear authority.
- **Boundary notes:** No insurer acceptance claim.
- **Must-not-claim:** AIO/AIRM are accepted insurance standards.
- **R3 instructions:** Present the gap as a missing lifecycle layer, not a model failure only.

## Chapter 6

**Title:** From Compliance and Auditability to Insurability

- **Purpose:** Translate WP1/WP2 into WP3.
- **Opening problem:** How do compliance and auditability become insurability?
- **Source-backed claims:** AI governance and technical docs show governance objects, traces, and controls matter, but do not themselves create insurance coverage. Sources: AI-01, AI-02, TECH-01 to TECH-05, CLAIM-01.
- **Author synthesis:** MRO -> AIO; ALCS/AARM -> claim reviewability/readiness. INT-01 to INT-07.
- **WP1 mapping:** MRO, ALCS, enterprise failure scenarios.
- **WP2 mapping:** Audit Evidence Chain, AARM, boundary language.
- **AIO/AIRM mapping:** All AIOs; all AIRM levels.
- **Tables/figures:** WP1/WP2/WP3 translation table.
- **Examples:** governance artifact becoming claim evidence ingredient.
- **Boundary notes:** Compliance does not guarantee insurance.
- **Must-not-claim:** Governance evidence equals coverage.
- **R3 instructions:** State the translation as prerequisite logic, not proof.

## Chapter 7

**Title:** Why Logs, Traces, and Vendor Assurances Are Not Claim Evidence

- **Purpose:** Separate observability from claim evidence.
- **Opening problem:** Why are logs not enough?
- **Source-backed claims:** NIST/CISA incident-response sources and technical docs support trace/log utility, but claims sources require reconstruction and review. Sources: CLAIM-01, CLAIM-02, CLAIM-03, TECH-01, TECH-04.
- **Author synthesis:** Logs record activity; claim evidence reconstructs authority, responsibility, causality, loss, and boundary. INT-05, INT-06.
- **WP1 mapping:** MRO-08, MRO-16.
- **WP2 mapping:** Logs are not audit evidence chains.
- **AIO/AIRM mapping:** AIO-06, AIO-07, AIO-09, AIO-10; AIRM L1-L3.
- **Tables/figures:** logs vs claim evidence flow.
- **Examples:** monitor shows tool call, but not who authorized it.
- **Boundary notes:** Technical traces are ingredients, not claim evidence by themselves.
- **Must-not-claim:** Framework traces make agentic AI insurable.
- **R3 instructions:** Keep this chapter non-technical enough for claims readers.

## Chapter 8

**Title:** The Agentic Insurability Object Model

- **Purpose:** Introduce AIO v2.
- **Opening problem:** What objects are required?
- **Source-backed claims:** Internal WP1/WP2 object models and claim evidence sources support the need for reviewable lifecycle objects. Sources: CLAIM-01, CLAIM-02, CLAIM-03, INT-01, INT-04, INT-06.
- **Author synthesis:** AIO-01 through AIO-14. INT-06.
- **WP1 mapping:** MRO set.
- **WP2 mapping:** Agentic Audit Object to claim object translation.
- **AIO/AIRM mapping:** AIO full model.
- **Tables/figures:** AIO catalog table.
- **Examples:** work unit, loss event, causality trace, dependency map.
- **Boundary notes:** AIO is analytical, not a standard.
- **Must-not-claim:** AIO is mandatory schema or insurer requirement.
- **R3 instructions:** Define each object in one plain-English sentence before any technical detail.

## Chapter 9

**Title:** Coverage Boundaries, Authority, Delegation, and Exclusion Triggers

- **Purpose:** Explain authority and boundary questions.
- **Opening problem:** Where does coverage end or become disputed?
- **Source-backed claims:** Policy terminology and AI/cyber market sources show limits, sublimits, exclusions, and scope questions matter. Sources: INS-05, INS-07, MKT-03, MKT-05, MKT-08, TECH-02.
- **Author synthesis:** Authority and delegation boundary maps to coverage boundary review. INT-05, INT-06.
- **WP1 mapping:** authority/confirmation boundary, accepted outcome, authority drift.
- **WP2 mapping:** authority traceability and exception traceability.
- **AIO/AIRM mapping:** AIO-04, AIO-05, AIO-12; AIRM L3-L5.
- **Tables/figures:** action/permission/authority/coverage table.
- **Examples:** tool permission versus business approval.
- **Boundary notes:** Do not conclude no coverage from outside authority alone.
- **Must-not-claim:** Any specific action is covered or excluded.
- **R3 instructions:** Keep boundary questions framed as review questions.

## Chapter 10

**Title:** Loss Event Reconstruction and Causality Tracing

- **Purpose:** Define reconstruction.
- **Opening problem:** How can a claim event be reconstructed?
- **Source-backed claims:** Incident-response and claim-evidence sources support event timelines, incident records, and remediation sequencing. Sources: CLAIM-01, CLAIM-02, CLAIM-03.
- **Author synthesis:** Causality reconstruction trace across human, agent, tool, vendor, data, and system. INT-05, INT-06.
- **WP1 mapping:** accepted outcome, remediation closure, MRO-04, MRO-08, MRO-16.
- **WP2 mapping:** evidence chain and remediation closure.
- **AIO/AIRM mapping:** AIO-06, AIO-07, AIO-08, AIO-09, AIO-10; AIRM L3-L5.
- **Tables/figures:** loss reconstruction table and event flow.
- **Examples:** incident timeline, failed control, recovery record.
- **Boundary notes:** Reconstruction is not legal causation.
- **Must-not-claim:** Evidence chain proves liability or coverage.
- **R3 instructions:** Show how claims teams think about sequence, not just logs.

## Chapter 11

**Title:** Third-Party, Vendor, Model, and Tool Dependency Risk

- **Purpose:** Map dependency and concentration risk.
- **Opening problem:** Which dependencies affected the event?
- **Source-backed claims:** Cyber accumulation and technical protocol sources show vendors, processors, models, and tools matter in systemic and operational risk. Sources: CYB-02, CYB-03, CYB-04, TECH-01 to TECH-05, MKT-08.
- **Author synthesis:** Dependency map and concentration view. INT-03, INT-06.
- **WP1 mapping:** vendor/processor chain, runtime substitution, cross-project reuse.
- **WP2 mapping:** agent/tool partitioning.
- **AIO/AIRM mapping:** AIO-11, AIO-13; AIRM L4-L5.
- **Tables/figures:** dependency map table.
- **Examples:** shared model, shared tool, subprocessors, runtime substitutions.
- **Boundary notes:** Do not rank vendors.
- **Must-not-claim:** Any vendor is safer or worse.
- **R3 instructions:** Keep vendor, model, and tool categories distinct.

## Chapter 12

**Title:** Evidence Requirements for Underwriting

- **Purpose:** State pre-loss evidence categories.
- **Opening problem:** What must be visible before risk-transfer review?
- **Source-backed claims:** AI governance, cyber underwriting, and insurer AI sources show controls, documentation, and evidence matter for risk review. Sources: INS-01, INS-09, INS-10, AI-01, CLAIM-01.
- **Author synthesis:** Underwriting evidence request categories for agentic work. INT-01, INT-06.
- **WP1 mapping:** MROs and ALCS as evidence inputs.
- **WP2 mapping:** evidence sufficiency and audit object clarity.
- **AIO/AIRM mapping:** AIO-01 to AIO-05, AIO-11, AIO-13; AIRM L3-L5.
- **Tables/figures:** underwriting evidence request table.
- **Examples:** authority records, dependency inventory, controls, scenarios.
- **Boundary notes:** Not an underwriting standard.
- **Must-not-claim:** Required checklist for insurers.
- **R3 instructions:** Phrase as evidence categories, not prescriptions.

## Chapter 13

**Title:** Evidence Requirements for Claims Review

- **Purpose:** State post-loss evidence categories.
- **Opening problem:** What must be reconstructable after loss?
- **Source-backed claims:** Incident-response and claim-documented sources support event, control-failure, remediation, and closure evidence. Sources: CLAIM-01, CLAIM-02, CLAIM-03, INS-05.
- **Author synthesis:** Dispute-ready claim package. INT-04, INT-05, INT-06.
- **WP1 mapping:** MRO-04, MRO-07, MRO-08, MRO-16.
- **WP2 mapping:** Audit Evidence Chain to Claim Evidence Chain.
- **AIO/AIRM mapping:** AIO-06 to AIO-10, AIO-12, AIO-14; AIRM L3-L5.
- **Tables/figures:** claims reconstruction package table.
- **Examples:** incident, remediation, boundary review.
- **Boundary notes:** Not claim approval guidance.
- **Must-not-claim:** Claim package guarantees payment.
- **R3 instructions:** Focus on dispute readiness and reconstructability.

## Chapter 14

**Title:** Aggregation and Accumulation Risk

- **Purpose:** Explain correlated exposure.
- **Opening problem:** What could fail together?
- **Source-backed claims:** Cyber accumulation and reinsurer sources support concentration/systemic risk concepts. Sources: CYB-01, CYB-02, CYB-03, CYB-04, MKT-08.
- **Author synthesis:** Shared model/tool/agent templates can create correlated agentic exposure. INT-01, INT-03, INT-06.
- **WP1 mapping:** enterprise failure scenarios, cross-project reuse, vendor/processor chain.
- **WP2 mapping:** evidence partitioning and agent/tool partitioning.
- **AIO/AIRM mapping:** AIO-11, AIO-13; AIRM L4-L5.
- **Tables/figures:** aggregation driver table and portfolio view.
- **Examples:** shared provider outage, repeated workflow template.
- **Boundary notes:** Not an actuarial model.
- **Must-not-claim:** Quantified AI accumulation model.
- **R3 instructions:** Use cyber accumulation as analogy, not direct equivalence.

## Chapter 15

**Title:** Agentic Insurability Readiness Model

- **Purpose:** Define AIRM.
- **Opening problem:** How can readiness be described without certifying it?
- **Source-backed claims:** Readiness and evidence-architecture concepts appear in incident, cyber, and governance sources, but not as insurer acceptance. Sources: CLAIM-01, CYB-02, INT-07.
- **Author synthesis:** AIRM L0-L5. INT-07.
- **WP1 mapping:** ALCS, MROs.
- **WP2 mapping:** AARM to AIRM translation.
- **AIO/AIRM mapping:** Full AIO model; AIRM all levels.
- **Tables/figures:** AIRM matrix.
- **Examples:** black box to dispute-ready.
- **Boundary notes:** Not certification or benchmark.
- **Must-not-claim:** AIRM certifies insurability.
- **R3 instructions:** Emphasize readiness vocabulary only.

## Chapter 16

**Title:** Conclusion: From Agentic Deployment to Insurable Risk Transfer

- **Purpose:** Close the chain and set up the next wave.
- **Opening problem:** How does deployment become transferable risk?
- **Source-backed claims:** Market and claims sources support the need for reconstruction, boundary clarity, and evidence; they do not prove broad lifecycle transfer. Sources: INS-01 through INS-10, MKT-01 through MKT-08, CLAIM-01 through CLAIM-03.
- **Author synthesis:** Risk transfer requires lifecycle evidence that connects subject, responsibility, risk object, loss, remediation, and boundary. INT-01 through INT-07.
- **WP1 mapping:** root framework and enterprise failure scenarios.
- **WP2 mapping:** evidence chain and readiness model.
- **AIO/AIRM mapping:** AIO/AIRM summary.
- **Tables/figures:** closing diagram.
- **Examples:** none beyond final recap.
- **Boundary notes:** No final/guarantee claim.
- **Must-not-claim:** WP3 published or insurer accepted.
- **R3 instructions:** Return to the plain-English thesis and the sharp sentence.
