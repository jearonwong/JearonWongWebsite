# Phase 1D-9 Evaluation Results Architecture

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Date:** May 11, 2026
**Status:** COMPLETE / NON-RANKING RESULT LAYER

## Presentation Decision

Phase 1D-9 uses **qualitative posture matrix only** for publication-facing RCCS/ALCS results.

| Option | Decision | Reason |
|---|---|---|
| A. Qualitative posture matrix only | SELECTED | Supports result-first reading while preserving source-qualified, non-ranking, no-final-score boundary. |
| B. Score bands / ranges | Deferred | Would require final page-level citation/access pinning before public release. |
| C. Provisional numeric profiles | Rejected for this phase | Risk of being read as final vendor scores or procurement ranking. |

## Layer Separation

- **Methodology:** RCCS/ALCS definitions, canonical evidence multipliers, and formulas remain in Chapters 7-9 and Appendices B/E/F.
- **Evidence:** Source levels and documentation basis remain in Appendix C, the claim evidence register, source coverage matrix, and References / Sources.
- **Analytical results:** A generated publication-facing section, `Evaluation Results: RCCS/ALCS Analytical Profiles`, summarizes source-qualified posture patterns across all evaluated systems.
- **Boundary:** Results are not final vendor scores, rankings, procurement recommendations, certification claims, or legal compliance proof.

## Systems Covered

- MPLP: RCCS Partial; ALCS Strong; confidence L4 / L5
- IBM watsonx.governance: RCCS Strong; ALCS Partial; confidence L2 / L5
- Microsoft Azure AI Foundry: RCCS Strong; ALCS Partial; confidence L2 / L5
- AWS Bedrock + Guardrails + AgentCore: RCCS Strong; ALCS Partial; confidence L2 / L5
- Google Vertex AI + ADK + Model Armor: RCCS Strong; ALCS Partial; confidence L2 / L5
- LangGraph + LangSmith: RCCS Partial; ALCS Strong; confidence L2 / L5
- OpenAI Agents SDK: RCCS Partial; ALCS Partial; confidence L2 / L5 with access caveat
- CrewAI: RCCS Limited / Partial; ALCS Partial; confidence L2 / L5

## QA

| Check | Result |
|---|---|
| Evaluation section present in generated output | PASS |
| All eight systems present | PASS |
| Uses qualitative posture labels | PASS |
| Numeric final vendor scores introduced | NO |
| Rank ordering introduced | NO |

## Decision

The results layer is strong enough to answer the reader's "what did the evaluation find?" question while preserving the paper's provisional, source-qualified, non-ranking boundary.
