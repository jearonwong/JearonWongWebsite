# Phase 1D-9 Evaluation Results QA

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS FOR QA DRAFT / NON-RANKING

## Checks

| Check | Result |
|---|---|
| Evaluation Results section present | PASS |
| All eight systems have profiles | PASS |
| Qualitative RCCS/ALCS posture used | PASS |
| Final vendor scores introduced | NO |
| Vendor ranking introduced | NO |
| Procurement recommendation introduced | NO |
| Certification/legal proof introduced | NO |

## Systems

- MPLP: RCCS Partial; ALCS Strong; strongest visible coverage: Protocol-level lifecycle semantics for responsibility objects, evidence pointers, and closure records.
- IBM watsonx.governance: RCCS Strong; ALCS Partial; strongest visible coverage: Model governance, documentation, risk management, monitoring, and enterprise governance controls.
- Microsoft Azure AI Foundry: RCCS Strong; ALCS Partial; strongest visible coverage: Responsible AI, model/platform governance, safety controls, evaluation support, and enterprise integration.
- AWS Bedrock + Guardrails + AgentCore: RCCS Strong; ALCS Partial; strongest visible coverage: Foundation-model access controls, guardrails, agent/runtime services, monitoring hooks, and enterprise integration.
- Google Vertex AI + ADK + Model Armor: RCCS Strong; ALCS Partial; strongest visible coverage: Model/platform governance, agent-development tooling, safety filtering, and enterprise AI operations.
- LangGraph + LangSmith: RCCS Partial; ALCS Strong; strongest visible coverage: Agent graph orchestration, traceability, observability, evaluation workflows, and runtime state patterns.
- OpenAI Agents SDK: RCCS Partial; ALCS Partial; strongest visible coverage: Agent/tool orchestration primitives, developer-facing SDK surfaces, and tool/action workflow support.
- CrewAI: RCCS Limited / Partial; ALCS Partial; strongest visible coverage: Role-based multi-agent orchestration, task delegation, crews/flows, and operational agent patterns.
