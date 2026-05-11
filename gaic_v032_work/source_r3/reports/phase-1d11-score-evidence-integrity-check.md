# Phase 1D-11 Score Evidence Integrity Check

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** PASS / SCORES REMAIN PROVISIONAL AND EVIDENCE-QUALIFIED

| System | RCCS score/range | ALCS score/range | Confidence | Source support summary | Adjustment |
|---|---:|---:|---|---|---|
| MPLP | 57 (52-62) | 84 (80-88) | Partially source-bound / L5 analytical inference | Protocol materials support lifecycle semantics; enterprise RCCS posture remains implementation-dependent. | No adjustment required; range already expresses evidence uncertainty |
| IBM watsonx.governance | 82 (78-86) | 58 (53-63) | Partially source-bound | Official product documentation supports governance/documentation/monitoring posture; agentic lifecycle semantics remain analytical. | No adjustment required; range already expresses evidence uncertainty |
| Microsoft Azure AI Foundry | 80 (76-84) | 62 (57-67) | Partially source-bound | Responsible AI, evaluation, safety, and platform governance documentation support RCCS posture; MRO-level lifecycle mapping is analytical. | No adjustment required; range already expresses evidence uncertainty |
| AWS Bedrock + Guardrails + AgentCore | 78 (74-83) | 60 (55-65) | Partially source-bound | Official service documentation supports guardrails/runtime/governance posture; lifecycle responsibility transfer and closure remain implementation-dependent. | No adjustment required; range already expresses evidence uncertainty |
| Google Vertex AI + ADK + Model Armor | 79 (75-84) | 61 (56-66) | Partially source-bound | Official model/platform governance, ADK, and safety documentation support visible posture; lifecycle object conformance remains analytical. | No adjustment required; range already expresses evidence uncertainty |
| LangGraph + LangSmith | 60 (55-65) | 80 (76-84) | Partially source-bound | Official orchestration, tracing, observability, and evaluation documentation supports lifecycle posture; regulatory control mapping requires surrounding governance. | No adjustment required; range already expresses evidence uncertainty |
| OpenAI Agents SDK | 58 (52-63) | 64 (58-69) | Partially source-bound / platform-guide access note | Accessible official OpenAI Agents SDK Python and JavaScript documentation supports narrowed SDK-surface posture; the inaccessible platform guide is retained as an access note only. | No adjustment required; range already expresses evidence uncertainty |
| CrewAI | 48 (42-54) | 63 (58-68) | Partially source-bound / L5 analytical inference | Official documentation and repository materials support role/task orchestration posture; regulatory evidence and lifecycle closure controls require external governance. | No adjustment required; range already expresses evidence uncertainty |

## Decision

No score was preserved as false certainty. Phase 1D-11 keeps score ranges and confidence labels, changes OpenAI's confidence label to a source-bound/access-note posture, and preserves L5 analytical mapping where lifecycle responsibility is not directly source-supported.
