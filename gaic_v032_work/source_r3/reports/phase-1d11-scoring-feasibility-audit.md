# Phase 1D-11 Scoring Feasibility Audit

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / PROVISIONAL SCORES SAFE WITH BOUNDARIES

## Decision

The active source supports publication-facing **provisional analytical scores/ranges** for all eight evaluated systems. Exact final vendor scores remain outside scope, but all retained score claims have visible confidence labels and source-boundary rationale. Phase 1D-11 keeps 0-100 provisional analytical scores with ranges, confidence labels, source-basis notes, and explicit non-ranking boundaries.

## Audit Table

| System | RCCS Provisional Analytical Score | ALCS Provisional Analytical Score | Confidence | Source Basis |
|---|---:|---:|---|---|
| MPLP | 57 (52-62) | 84 (80-88) | Partially source-bound / L5 analytical inference | Protocol materials support lifecycle semantics; enterprise RCCS posture remains implementation-dependent. |
| IBM watsonx.governance | 82 (78-86) | 58 (53-63) | Partially source-bound | Official product documentation supports governance/documentation/monitoring posture; agentic lifecycle semantics remain analytical. |
| Microsoft Azure AI Foundry | 80 (76-84) | 62 (57-67) | Partially source-bound | Responsible AI, evaluation, safety, and platform governance documentation support RCCS posture; MRO-level lifecycle mapping is analytical. |
| AWS Bedrock + Guardrails + AgentCore | 78 (74-83) | 60 (55-65) | Partially source-bound | Official service documentation supports guardrails/runtime/governance posture; lifecycle responsibility transfer and closure remain implementation-dependent. |
| Google Vertex AI + ADK + Model Armor | 79 (75-84) | 61 (56-66) | Partially source-bound | Official model/platform governance, ADK, and safety documentation support visible posture; lifecycle object conformance remains analytical. |
| LangGraph + LangSmith | 60 (55-65) | 80 (76-84) | Partially source-bound | Official orchestration, tracing, observability, and evaluation documentation supports lifecycle posture; regulatory control mapping requires surrounding governance. |
| OpenAI Agents SDK | 58 (52-63) | 64 (58-69) | Partially source-bound / platform-guide access note | Accessible official OpenAI Agents SDK Python and JavaScript documentation supports narrowed SDK-surface posture; the inaccessible platform guide is retained as an access note only. |
| CrewAI | 48 (42-54) | 63 (58-68) | Partially source-bound / L5 analytical inference | Official documentation and repository materials support role/task orchestration posture; regulatory evidence and lifecycle closure controls require external governance. |

## Safety Finding

- Exact operational conformance remains unverified.
- Scores are displayed in fixed source order, not score order.
- Scores are not final vendor scores, rankings, procurement recommendations, legal compliance proof, certifications, regulatory approval signals, or deployment-readiness guarantees.
- OpenAI platform guide HTTP 403 is a non-blocking access note after accessible official SDK documentation replaced it for narrowed SDK-surface claims.
- Product/platform source gaps are reflected in confidence labels and L5 analytical mapping notes rather than hidden behind false precision.
