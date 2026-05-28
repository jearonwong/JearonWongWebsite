# Semantic Architecture Audit

## Target Chain

`Jearon Wong -> Protocol Architect for the Agent Era -> Agentic Delivery / AI Agent Lifecycle / Lifecycle Protocol / Agentic Delivery Stack -> Multi-Agent Lifecycle Protocol (MPLP) -> Cognitive OS / SoloCrew / Validation Lab -> Whitepaper research foundation`

## Current Alignment

The chain is mostly preserved:

- Homepage anchors identity, thesis, research series, and proof path.
- About page anchors person/entity role.
- Projects page anchors MPLP, Cognitive OS, SoloCrew, and Validation Lab.
- Research index anchors the three whitepapers as one publication series.
- Concepts Map creates a visible entity mesh for human and machine navigation.
- `llms.txt` and entity graph repeat the core definitions and whitepaper routes.

## P1 Finding

**Concepts Map still contains public-research-candidate statuses and acronym nodes for second and third whitepaper relationships**

Evidence:

- `src/pages/concepts/map/index.astro` uses `status: "public-research-candidate"` for the auditability and insurability whitepaper relationships.
- The same map uses `AIAAWP` and `AIIRWP` as public node sources.

Impact:

- This is not the forbidden `WP1/WP2/WP3` shorthand, but it is weaker public terminology than the formal paper names.
- It creates inconsistency with the official publication model now used on the research index and whitepaper pages.

Recommended future action:

- Replace public-facing acronym nodes with formal paper names or natural-language aliases.
- Change relationship statuses to `public-research-edition` or `authored-analysis / public research edition`.

## P2 Findings

- `MPLP` appears frequently without immediate expansion on some pages. Keep `MPLP` as a valid entity, but expand `Multi-Agent Lifecycle Protocol` on first meaningful occurrence in SEO/GEO-critical surfaces.
- The site has several adjacent concept families: Agentic Delivery, AI Agent Lifecycle, Deterministic Delivery, Delivery Standard, Multi-Agent Lifecycle Governance, and Agentic Lifecycle Governance. They are mostly coherent but should receive a later "definition hierarchy" audit to prevent reader overload.
- The playbook layer is public and indexed even though future guide releases are strategically paused. This is not a blocker because existing playbooks are already part of the site, but new guide publication should remain held until MPLP v2.0 object-model consolidation.

## Strong Signals

- `llms.txt` is unusually complete for answer-engine discovery.
- Entity graph includes nodes and edges for person, protocols, concepts, whitepapers, systems, and evidence surfaces.
- Concepts Map is high-value for GEO, despite the P1 terminology/status cleanup need.
