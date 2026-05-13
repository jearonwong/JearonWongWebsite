# GAIC-R3E Whitepaper-Cited Systems Extraction

**Task ID:** GAIC-R3E-GAIC-CITED-SYSTEMS-SEMANTIC-MAPPING-LAYER  
**Date:** 2026-05-13  
**Status:** COMPLETE

## Authority Sources Used

Local GAIC authority sources inspected:

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/out/publication_candidate/publication-candidate-manifest.json`
- `gaic_v032_work/source_r3/reports/phase-1d12-score-evidence-integrity-check.md`
- `gaic_v032_work/source_r3/reports/phase-1d12-evaluation-results-qa.md`
- `gaic_v032_work/source_r3/reports/phase-1d12-system-table-reflow-report.md`
- `public/research/global-ai-compliance-white-paper-2026/generation-log.json`

The sealed white paper artifacts were not modified.

## Confirmed First-Layer Systems

| System | Category | White paper context | Status |
|---|---|---|---|
| MPLP | Lifecycle protocol path | Chapter 12, Chapter 13, Appendix G | CONFIRMED |
| IBM watsonx.governance | Enterprise AI governance platform | Chapter 12, Appendix G | CONFIRMED |
| Microsoft Azure AI Foundry | Cloud AI platform | Chapter 12, Appendix G | CONFIRMED |
| AWS Bedrock + Guardrails + AgentCore | Cloud AI platform | Chapter 12, Appendix G | CONFIRMED |
| Google Vertex AI + ADK + Model Armor | Cloud AI platform | Chapter 12, Appendix G | CONFIRMED |
| LangGraph + LangSmith | Agent orchestration / observability | Chapter 12, Appendix G | CONFIRMED |
| OpenAI Agents SDK | Agent SDK / developer platform | Chapter 12, Appendix G, OpenAI source closure notes | CONFIRMED |
| CrewAI | Agent orchestration framework | Chapter 12, Appendix G | CONFIRMED |

## Extraction Notes

- SOURCE MASTER states Appendix G contains eight representative system provisional assessments: MPLP, IBM, Microsoft, AWS, Google, LangGraph, OpenAI, and CrewAI.
- Phase 1D-12 system table reflow report lists Chapter 12 mapping tables T-12-02 through T-12-17 and Appendix G tables T-G-01 through T-G-08 for the eight systems.
- Phase 1D-12 evidence integrity report confirms the systems have source-qualified, provisional RCCS-T/RCCS-M/ALCS evidence posture.
- Numeric scores were not reproduced on public R3E detail pages. Pages use qualitative lifecycle governance questions instead.
- No additional systems were invented or added to the first layer.

## Boundary Language Required

Every system detail page uses or inherits the following boundary:

`This page summarizes how the Global AI Compliance White Paper 2026 discusses this system through a lifecycle governance lens. It is not official vendor documentation, endorsement, certification, legal advice, procurement recommendation, or a vendor ranking.`

MPLP is framed as one protocol path, not required, exclusive, certified, regulator-approved, or already an industry standard.
