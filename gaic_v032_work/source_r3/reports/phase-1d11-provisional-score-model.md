# Phase 1D-11 Provisional Score Model

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE

## Model

- Scale: 0-100.
- Label: Provisional Analytical Score.
- Confidence labels: Source-bound, Partially source-bound, L5 analytical inference, and platform-guide access note where applicable.
- Display order: fixed system order from the source mapping, not score order.
- Boundary: Scores are analytical profiles, not final vendor scores, rankings, legal compliance proof, certifications, regulatory approval signals, or procurement recommendations.

## Scores

- MPLP: RCCS 57 (52-62), ALCS 84 (80-88), confidence: Partially source-bound / L5 analytical inference
- IBM watsonx.governance: RCCS 82 (78-86), ALCS 58 (53-63), confidence: Partially source-bound
- Microsoft Azure AI Foundry: RCCS 80 (76-84), ALCS 62 (57-67), confidence: Partially source-bound
- AWS Bedrock + Guardrails + AgentCore: RCCS 78 (74-83), ALCS 60 (55-65), confidence: Partially source-bound
- Google Vertex AI + ADK + Model Armor: RCCS 79 (75-84), ALCS 61 (56-66), confidence: Partially source-bound
- LangGraph + LangSmith: RCCS 60 (55-65), ALCS 80 (76-84), confidence: Partially source-bound
- OpenAI Agents SDK: RCCS 58 (52-63), ALCS 64 (58-69), confidence: Partially source-bound / platform-guide access note
- CrewAI: RCCS 48 (42-54), ALCS 63 (58-68), confidence: Partially source-bound / L5 analytical inference

## Method Note

Scores derive from the already source-qualified RCCS/ALCS posture model used in the prior qualitative layer, with ranges added to avoid false precision where source support is mixed, access-limited, or partly inferential.
