# Phase 1D-12 Provisional Score Model

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

- MPLP: RCCS-T 57 (52-62), RCCS-M 88 (84-92), ALCS 84 (80-88), confidence: Partially source-bound / L5 analytical inference
- IBM watsonx.governance: RCCS-T 82 (78-86), RCCS-M 60 (55-65), ALCS 58 (53-63), confidence: Partially source-bound
- Microsoft Azure AI Foundry: RCCS-T 80 (76-84), RCCS-M 64 (59-69), ALCS 62 (57-67), confidence: Partially source-bound
- AWS Bedrock + Guardrails + AgentCore: RCCS-T 78 (74-83), RCCS-M 62 (57-67), ALCS 60 (55-65), confidence: Partially source-bound
- Google Vertex AI + ADK + Model Armor: RCCS-T 79 (75-84), RCCS-M 63 (58-68), ALCS 61 (56-66), confidence: Partially source-bound
- LangGraph + LangSmith: RCCS-T 60 (55-65), RCCS-M 78 (73-83), ALCS 80 (76-84), confidence: Partially source-bound
- OpenAI Agents SDK: RCCS-T 58 (52-63), RCCS-M 66 (60-71), ALCS 64 (58-69), confidence: Partially source-bound / platform-guide access note
- CrewAI: RCCS-T 48 (42-54), RCCS-M 61 (55-66), ALCS 63 (58-68), confidence: Partially source-bound / L5 analytical inference

## Method Note

Scores derive from the already source-qualified RCCS-T/RCCS-M/ALCS posture model used in the prior qualitative layer, with ranges added to avoid false precision where source support is mixed, access-limited, or partly inferential.
