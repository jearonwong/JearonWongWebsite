# Phase 1D-11 Evaluation Results Architecture

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / NON-RANKING RESULT LAYER

## Presentation Decision

Phase 1D-11 uses **provisional analytical score ranges** for publication-facing RCCS/ALCS results.

| Option | Decision | Reason |
|---|---|---|
| A. Qualitative-only profile layer | Superseded | Useful as a safety baseline, but insufficient for reader-facing evaluation results. |
| B. Score bands / ranges | SELECTED | Makes results visible while avoiding false precision and final-vendor-score framing. |
| C. Provisional numeric profiles | SELECTED WITH RANGES | Safe only with confidence labels, fixed order, and explicit non-ranking boundaries. |

## Layer Separation

- **Methodology:** RCCS/ALCS definitions, canonical evidence multipliers, and formulas remain in Chapters 7-9 and Appendices B/E/F.
- **Evidence:** Source levels and documentation basis remain in Appendix C, the claim evidence register, source coverage matrix, and References / Sources.
- **Analytical results:** A generated publication-facing section, `Evaluation Results: RCCS / ALCS Provisional Analytical Profiles`, summarizes source-qualified scores, ranges, confidence labels, and posture patterns across all evaluated systems.
- **Boundary:** Results are not final vendor scores, rankings, procurement recommendations, certification claims, or legal compliance proof.

## Systems Covered

- MPLP: RCCS Partial; ALCS Strong; confidence Partially source-bound / L5 analytical inference
- IBM watsonx.governance: RCCS Strong; ALCS Partial; confidence Partially source-bound
- Microsoft Azure AI Foundry: RCCS Strong; ALCS Partial; confidence Partially source-bound
- AWS Bedrock + Guardrails + AgentCore: RCCS Strong; ALCS Partial; confidence Partially source-bound
- Google Vertex AI + ADK + Model Armor: RCCS Strong; ALCS Partial; confidence Partially source-bound
- LangGraph + LangSmith: RCCS Partial; ALCS Strong; confidence Partially source-bound
- OpenAI Agents SDK: RCCS Partial; ALCS Partial; confidence Partially source-bound / platform-guide access note
- CrewAI: RCCS Limited / Partial; ALCS Partial; confidence Partially source-bound / L5 analytical inference

## QA

| Check | Result |
|---|---|
| Evaluation section present in generated output | PASS |
| All eight systems present | PASS |
| Uses score/range labels | PASS |
| Numeric final vendor scores introduced | NO |
| Rank ordering introduced | NO |

## Decision

The results layer is strong enough to answer the reader's "what did the evaluation find?" question while preserving the paper's provisional, source-qualified, non-ranking boundary.
