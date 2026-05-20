# WP3-R1 LLM / Framework / Vendor Platform Gap Map

**Task ID:** WP3-R1-INSURABILITY-SOURCE-RESEARCH
**Mode:** Source research only
**Boundary:** This report compares technical layers to insurability needs. It does not rank vendors, recommend procurement, declare product defects, or assert that any framework provides insurance evidence or coverage authority.

## Tested Conclusion

The gap is not a single-layer defect. LLMs, frameworks, protocols, cloud platforms, observability tools, governance tools, and claims systems are necessary layers, but insurability requires a lifecycle object layer that binds legal subject, human role, agent role, authority, work unit, loss event, causality, dependency, remediation, and claim evidence.

Mandatory safe language for R2:

- "necessary layer, not sufficient insurability layer"
- "technical trace, not claim evidence by itself"
- "tool permission, not coverage authority"
- "workflow completion, not insured outcome"
- "vendor assurance, not causality reconstruction"

## Layer Map

| Category | What it provides | What readers may mistakenly assume it provides | Insurability gap remaining | Source support | AIO mapping | Safe language rule |
| --- | --- | --- | --- | --- | --- | --- |
| 1. LLM capability and model reliability | Model output, reasoning, generation, classification, tool-call planning, and uncertainty/reliability concerns. | That a better model removes insurance uncertainty. | Model reliability does not identify insured legal subject, business authority, policy boundary, or claim causality. | AI-01, AI-02, MKT-02 | AIO-02, AIO-06, AIO-08 | Necessary layer, not sufficient insurability layer. |
| 2. Agent frameworks and orchestration | Multi-step workflows, agents, tools, handoffs, memory, human-in-the-loop, durable execution, and persistence primitives. | That orchestration creates responsibility, coverage, or claim evidence. | Framework state must be mapped to human role, authority, work unit, loss, and remediation evidence. | TECH-01, TECH-04, TECH-05 | AIO-03, AIO-05, AIO-07, AIO-11 | Workflow completion, not insured outcome. |
| 3. Tool protocols / interoperability protocols | Tool access, external context, resources, prompts, inter-agent communication, and interoperability surfaces. | That protocol permission equals business authority or risk-transfer permission. | Tool authorization needs enterprise authority, responsibility, and boundary review objects. | TECH-02, TECH-03 | AIO-05, AIO-11, AIO-12 | Tool permission, not coverage authority. |
| 4. Cloud / enterprise AI platforms | Deployment, governance features, evaluations, model registries, monitoring, security, and platform integrations. | That vendor platform controls equal insurability. | Platform assurance must be connected to legal subject, work unit, dependencies, loss event, and claim package. | AI-01, INT-03, TECH-01 through TECH-05 | AIO-02, AIO-08, AIO-11 | Vendor assurance, not causality reconstruction. |
| 5. Observability / tracing / monitoring | Logs, traces, telemetry, state snapshots, tool-call records, and debugging evidence. | That logs are claim evidence. | Claim evidence requires relevance, responsibility, causality, loss, remediation, and boundary linkage. | TECH-01, TECH-04, CLAIM-01, INT-05 | AIO-06, AIO-07, AIO-09 | Technical trace, not claim evidence by itself. |
| 6. Governance / risk tools | Policies, AI governance programs, risk controls, documentation, and oversight processes. | That governance documentation proves coverage or claim acceptability. | Governance helps underwriting visibility but does not decide coverage or prove causality. | INS-01, AI-01, AI-02, CLAIM-03 | AIO-03, AIO-04, AIO-08, AIRM L2-L4 | Governance evidence, not insurer acceptance. |
| 7. Insurance / claims systems | Policy, limits, exclusions, claim reporting, incident handling, evidence review, and settlement workflows. | That existing claims systems can absorb agentic AI without new object semantics. | Claims review still needs agentic work-unit, authority, dependency, and loss reconstruction fields. | INS-04 through INS-10, CLAIM-01 through CLAIM-03 | AIO-01, AIO-04, AIO-09, AIO-14 | Claim process, not claim approval guarantee. |

## Framework-Specific Technical Context

| Source | Provides | Does not fully define for WP3 |
| --- | --- | --- |
| TECH-01 OpenAI Agents SDK | Agents, tools, handoffs, guardrails, tracing/session primitives. | Legal subject, policy boundary, business authority, claim causality, insurer review package. |
| TECH-02 MCP | Tool/resource/prompt protocol for LLM applications and external systems. | Enterprise authority semantics, coverage authority, loss classification, claim evidence sufficiency. |
| TECH-03 A2A | Agent-to-agent communication/interoperability protocol. | Human-agent responsibility map, insured subject map, claim reconstruction, aggregation view. |
| TECH-04 LangGraph | Durable execution, persistence, checkpointing, interrupts, resume. | Claim evidence by itself, legal causation, policy scope, coverage boundary. |
| TECH-05 AutoGen | Multi-agent orchestration and conversation framework. | Insurability object model, policy boundary, legal subject mapping, dispute-ready claim package. |

## R2 Safe Claim Pattern

Allowed:

> Technical frameworks can produce useful records of agent behavior. WP3 treats those records as ingredients that must be linked to legal subject, responsibility, authority, loss, dependency, remediation, and claim evidence before they can support insurance review.

Forbidden:

> Framework tracing makes agentic AI insurable.
