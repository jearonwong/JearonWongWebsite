# GAIC-R3K-1A GEO Canonicality Repair Report

**Date:** 2026-05-14

## Repair Summary

R3K-1A repairs only the P0 canonical/deduplication/drift routes identified by R3K-0. The repair strategy is bridge demotion and visible canonical routing rather than broad expansion, deletion, redirect creation, or new public semantic routes.

## AI Agent Governance Hierarchy

- Preferred governance route: `/governance/ai-agent-governance/`.
- `/ai-agent-governance/` is retained as a field-level bridge and now visibly points to the governance route, Agentic Lifecycle Governance, and the GAIC white paper hub.
- `/concepts/ai-agent-governance/` is retained as a concept bridge and now points to the governance route and Agentic Lifecycle Governance.
- `/definitions/#ai-agent-governance` remains a reference anchor but now routes evidence toward `/governance/ai-agent-governance/`.
- `llms.txt` now labels the concept page as a concept bridge and the standalone page as a bridge route, while preserving `/governance/ai-agent-governance/` in the Regulatory and Enterprise Governance Mapping section.

## Definitions / Concepts / Entity Mesh

- `/definitions/` now states it is a reference index for stable citation anchors.
- The visible note points canonical concept explanation to `/concepts/` and full entity mesh navigation to `/concepts/map/`.
- Definitions JSON-LD adds significant links to `/concepts/` and `/concepts/map/`.
- This avoids treating `/definitions/` as the canonical GAIC term explanation surface.

## Theory Cluster Compatibility

- `/theory-clusters/` already used the existing compatibility pattern: canonical `/theories/` and `noindex, follow`.
- R3K-1A preserved that pattern and added a visible legacy route boundary.
- The route now points to `/theories/`, `/concepts/`, and `/concepts/map/`.

## Drift-Risk Project and Concept Surfaces

- `/projects/mplp/` now links to the GAIC white paper hub, GAIC MPLP system mapping, and Agentic Lifecycle Governance with explicit non-certification/non-requirement boundary language.
- `/projects/validation-lab/` now links to the GAIC hub, the responsive HTML evidence-validation anchor, and Evidence Chain with explicit non-certifying evidence adjudication language.
- `/lifecycle/` now routes source-trace expectations to Agentic Lifecycle Governance, GAIC, and AI Agent Lifecycle concept.
- `/delivery-standard/` now routes formal-source expectations to Deterministic Delivery, Accepted Outcome, Evidence Chain, and GAIC.
- `/concepts/protocol-engineering/` now states that Protocol Engineering is broader than GAIC and treats MPLP as one protocol path.

## Deferred Link Cleanup

One non-P0 essay body still links its footer to `/ai-agent-governance/`. This was not changed in R3K-1A to avoid expanding the public-page repair surface outside the 10 P0 routes. It should be handled in a later link-cleanup or R3K-1B source-anchor wave if the user approves.

## llms.txt

Updated narrowly:

- Concept AI Agent Governance labeled as a concept bridge.
- Definitions clarified as reference anchors, not canonical concept explanations.
- Standalone AI Agent Governance labeled as a bridge route with preferred governance and concept-core routes.

No duplicate/legacy route is newly elevated as a canonical GAIC source.
