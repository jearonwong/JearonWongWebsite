# Phase 1D-10 RCCS/ALCS Visual Results Plan

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / SOURCE-SAFE VISUALS IMPLEMENTED

## Implemented Visuals

| Visual | Type | Rows / Marks | Purpose | Boundary |
|---|---|---:|---|---|
| RCCS / ALCS Provisional Analytical Score Comparison | Grouped bar SVG | 8 systems x 2 scores | Shows RCCS and ALCS score/range differences | Fixed order, not ranking |
| RCCS / ALCS Provisional Analytical Score Map | Score quadrant SVG | 8 systems | Shows posture pattern across governance coverage and lifecycle conformance | Not a leaderboard or procurement quadrant |
| System x Dimension Posture Heatmap | Qualitative matrix | 8 systems x 6 dimensions | Shows dimension-level posture differences | Strong/Partial/Limited labels only; no final score |
| Coverage Profile Cards | Card grid | 8 cards | Shows visible strength, lifecycle gap, evidence basis, and boundary per system | Card order follows source mapping sequence, not performance |

## System Categories

- MPLP: Lifecycle protocol
- IBM watsonx.governance: Governance platform
- Microsoft Azure AI Foundry: Cloud AI platform
- AWS Bedrock + Guardrails + AgentCore: Cloud AI platform
- Google Vertex AI + ADK + Model Armor: Cloud AI platform
- LangGraph + LangSmith: Agent orchestration / observability
- OpenAI Agents SDK: Agent SDK / developer platform
- CrewAI: Agent orchestration framework

## Safe Rendering Rules

- No descending-score bar chart.
- No winner/leader quadrant.
- No procurement quadrant.
- No final vendor score.
- Confidence markers are textual evidence labels, not performance weights.

## QA

| Check | Result |
|---|---|
| Score bar chart present | PASS |
| Score map present | PASS |
| Heatmap present | PASS |
| Profile cards present | PASS |
| All systems present | PASS |
