# GAIC-R3K-0 Essay Score Snapshot Audit

**Generated:** 2026-05-14

## Finding

- Essay route: `/essays/from-model-governance-to-agentic-lifecycle-conformance/`
- Current state: score snapshot already present.
- Recommendation: no implementation needed in R3K-0. The existing snapshot improves the article by showing the layer-separation result after RCCS-M and ALCS are explained and before the bias/COI section.
- Mobile table risk: previously addressed by desktop table plus mobile stacked-card rendering; responsive QA was recorded in `gaic-newsletter-essay-score-snapshot-patch-report.md`.

## Exact Source Files For Scores

- `gaic_v032_work/source_r3/reports/phase-1d12-provisional-score-model.md`
- `gaic_v032_work/source_r3/reports/phase-1d12-evaluation-results-qa.md`
- `gaic_v032_work/source_r3/reports/phase-1d12-score-evidence-integrity-check.md`
- `public/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html`

## Exact Values Located

| System | RCCS-T | RCCS-M | ALCS | Confidence / source status |
| --- | --- | --- | --- | --- |
| MPLP | 57 (52-62) | 88 (84-92) | 84 (80-88) | Partially source-bound / L5 analytical inference |
| IBM watsonx.governance | 82 (78-86) | 60 (55-65) | 58 (53-63) | Partially source-bound |
| Microsoft Azure AI Foundry | 80 (76-84) | 64 (59-69) | 62 (57-67) | Partially source-bound |
| AWS Bedrock + Guardrails + AgentCore | 78 (74-83) | 62 (57-67) | 60 (55-65) | Partially source-bound |
| Google Vertex AI + ADK + Model Armor | 79 (75-84) | 63 (58-68) | 61 (56-66) | Partially source-bound |
| LangGraph + LangSmith | 60 (55-65) | 78 (73-83) | 80 (76-84) | Partially source-bound |
| OpenAI Agents SDK | 58 (52-63) | 66 (60-71) | 64 (58-69) | Partially source-bound / platform-guide access note |
| CrewAI | 48 (42-54) | 61 (55-66) | 63 (58-68) | Partially source-bound / L5 analytical inference |


## Audit Result

All exact values for the eight systems are locatable. No score recalculation is needed. The article already includes the compact snapshot in the required non-ranked order.
