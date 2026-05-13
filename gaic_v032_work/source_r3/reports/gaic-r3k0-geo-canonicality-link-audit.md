# GAIC-R3K-0 GEO Canonicality / Internal Link Audit

**Generated:** 2026-05-14

## Findings

- Each GAIC-derived concept currently has a canonical route under `/concepts/` or a purpose-specific canonical route under `/governance/`, `/research/`, `/playbooks/`, or `/mapping/extended-ecosystem/`.
- Concepts Map points to canonical pages and acts as a visible entity mesh.
- `public/llms.txt` points to canonical GAIC, Concepts, Governance, Playbooks, Systems, and Extended Ecosystem pages and includes boundary language.
- GAIC hub points to canonical concept pages and the systems index.
- JSON-LD IDs and canonical URLs were previously validated in R3H-0; R3K-0 found no new schema mutation.
- The new essay should remain a narrative bridge, not the canonical source for terms that have concept pages.

## Duplicate / Competing Route Risks

| Route cluster | Risk | R3K-1 recommendation |
| --- | --- | --- |
| /ai-agent-governance/ + /concepts/ai-agent-governance/ + /governance/ai-agent-governance/ | Three routes can compete around AI Agent Governance search intent. | Clarify hierarchy: field/landing route, concept definition route, and governance mapping route; add explicit cross-links and canonical wording. |
| /definitions/ + /concepts/* | Definitions page can compete with concept pages for short definitions. | Keep definitions as citation infrastructure and point readers/crawlers to concept detail pages as canonical deep sources. |
| /theory-clusters/ + /theories/ | Legacy compatibility route duplicates Ideas route. | Keep compatibility role explicit; avoid treating legacy route as canonical. |
| /essays/from-model-governance-to-agentic-lifecycle-conformance/ + concept pages | Essay may become perceived as primary source for RCCS-M/MRO/ALCS if heavily distributed. | Preserve links to concept pages and full white paper; do not make essay the canonical term source. |


## Result

No emergency canonical conflict was found, but R3K-1 should address the duplicate-risk clusters before major external launch distribution.
