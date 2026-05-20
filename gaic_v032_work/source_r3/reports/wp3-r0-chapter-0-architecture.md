# WP3-R0 Chapter 0 Architecture

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Chapter:** 0  
**No-body-text note:** This file defines architecture, examples, tables, figures, source needs, and boundaries. It does not write final prose.

## Chapter Title

The Plain-English Problem: Why Agentic AI Breaks Today's Insurance Logic

## Chapter Purpose

Chapter 0 must explain the entire industry problem in plain language before introducing technical terms. It must assume the reader does not yet understand insurance, AI agents, workflows, legal subjects, risk objects, liability, or evidence chains.

## Key Claim

The problem is not whether AI can be insured in narrow cases. The problem is whether agentic work can be underwritten, claimed, disputed, and transferred at scale when the agent is not usually the insured legal subject and the loss must be reconstructed through lifecycle evidence.

## Plain-English Core

Chapter 0 must explain:

- The company may be insured. The AI agent usually is not.
- The agent may cause or contribute to a covered loss, but the insurer still needs to map that event back to a legal subject, a risk object, a responsibility path, and evidence.
- Insurance begins with who is covered, then asks what risk is covered.
- Current AI insurance discussion must be source-researched in R1 before any market fact is asserted.
- Agentic AI changes the question because it may plan, delegate, call tools, cross systems, and create business consequences.
- The missing bridge is: Legal Subject -> Human Role -> Agent / MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision.

## Required Sections

### 0.1 Insurance Starts with Who Is Covered

Purpose: define the insured legal subject in plain English.  
Required explanation: policies are oriented around companies, people, officers, professionals, vendors, or organizations, not free-floating AI agents.  
Boundary: no policy interpretation or legal advice.

### 0.2 Then Insurance Asks What Risk Is Covered

Purpose: distinguish subject from risk object.  
Required explanation: the insured subject may be a company, while the risk object may be a bounded agentic workflow, tool action, or loss-triggering operation.  
Boundary: no coverage opinion.

### 0.3 Current AI Insurance Covers the Edges

Purpose: introduce market-edge categories as source research targets, not R0 facts.  
Required explanation: R1 must verify AI-specific products, chatbot error coverage, AI performance/model failure products, cyber, professional liability, E&O, D&O, exclusions, and sublimits.  
Boundary: do not assert current market coverage without R1 sources.

### 0.4 Agentic AI Changes the Question

Purpose: explain why agents are different from static model use.  
Required explanation: agentic systems can plan, delegate, call tools, cross systems, reuse context, trigger external actions, and create consequences that must be mapped to human and organizational responsibility.  
WP1 mapping: MRO-01, MRO-02, MRO-03, MRO-05, MRO-06, MRO-07, MRO-08, MRO-16.  
WP2 mapping: audit object clarity, authority traceability, human/agent responsibility mapping, evidence sufficiency.

### 0.5 The Core Missing Bridge

Purpose: introduce the core insurance mapping.  
Required figure: Legal Subject -> Human Role -> Agent / MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision.  
Boundary: the bridge supports reviewability; it does not determine legal liability or coverage.

### 0.6 What This White Paper Defines

Purpose: explain WP3's scope.  
Required explanation: WP3 defines analytical objects and readiness vocabulary for insurability and risk-transfer review.  
Boundary: not insurance advice, not underwriting standard, not pricing model, not claim approval, not coverage opinion, not legal liability determination.

## Plain-English Examples

Use short hypothetical examples only:

| Example | Plain-English point | Boundary |
| --- | --- | --- |
| Customer-support agent promises a refund outside policy | The company may be insured; the agent is a system component; the issue is mapping authority, action, customer harm, and evidence. | Do not assert coverage exists. |
| Finance workflow agent sends payment instructions through a tool | The insurable object is the bounded workflow and tool-action exposure, not only the model name. | Do not assert cyber, crime, E&O, or other policy response. |
| Procurement agent selects a vendor using stale constraints | Loss review needs human role, agent role, accepted outcome, evidence, and remediation. | Do not assign liability. |
| Multi-agent workflow delegates to a third-party tool | Dependency and accumulation questions require vendor/model/tool maps. | Do not rank vendors. |

## Required Tables and Figures

- T-0-01: Insured Subject vs Agentic Risk Object.
- T-0-02: Market-edge coverage categories to source-research in R1.
- T-0-03: Logs vs lifecycle evidence for insurability.
- F-0-01: Legal Subject -> Human Role -> Agent / MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision.
- F-0-02: 4+3 series relationship with WP1 as root framework and WP3 as insurability interpretation.

## WP1 Mapping

Chapter 0 derives from:

- MRO-01 Human Role to MAS Responsibility Mapping.
- MRO-02 Delegated Authority Boundary.
- MRO-03 Agent Role is not Human Role.
- MRO-04 Accepted Outcome Compliance.
- MRO-05 Tool-Action Liability Boundary.
- MRO-06 Responsibility Transfer Across Agents.
- MRO-07 Authority Drift.
- MRO-08 MAS Evidence Partitioning.
- MRO-14 Third-Party Processor / Subprocessor Chain.
- MRO-15 Vendor / Model / Runtime Substitution Conformance.
- MRO-16 Incident, Dispute, and Remediation Closure.
- ALCS lifecycle reconstructability logic.
- Chapter 15 enterprise failure scenarios as source of insurance failure-mode translation.

## WP2 Mapping

Chapter 0 must map:

- Audit Evidence Chain -> Claim Evidence Chain.
- Agentic Audit Object -> Agentic Insurability Object.
- AARM -> AIRM.
- Logs are not audit evidence -> Logs are not claim evidence.

## Boundary Notes

Chapter 0 must not:

- Claim the market currently covers or excludes any specific agentic risk without R1 sources.
- Give insurance advice.
- Give legal advice.
- Interpret policy language.
- Set underwriting evidence requirements as a standard.
- Promise claim review or claim payment outcomes.
- Claim MPLP is required.
- Claim Validation Lab certifies insurability.

## Source Research Needs

R1 must source-ground:

- Insured subject and policy-structure basics.
- AI-specific insurance product categories.
- Chatbot error and AI performance/model failure coverage discussions.
- Cyber, professional liability, E&O, D&O, exclusions, and sublimits.
- Claims reconstruction and causality evidence.
- Aggregation and accumulation risk.
- Agentic AI framework behavior as technical context only.
- WP1/WP2 internal source truth.
