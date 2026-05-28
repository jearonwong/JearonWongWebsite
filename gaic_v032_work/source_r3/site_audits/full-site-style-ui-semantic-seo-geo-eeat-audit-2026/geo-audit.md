# GEO Audit

GEO here means readiness for answer engines such as ChatGPT, Perplexity, Gemini, and Claude to infer site identity, concept hierarchy, research assets, and boundaries.

## Strengths

- `public/llms.txt` clearly defines Jearon Wong, AI Agent Lifecycle, Agentic Delivery, MPLP, the three whitepapers, concepts, project proof path, governance mappings, and playbooks.
- Entity graph JSON parses and includes nodes/edges for the whitepaper series, MPLP, GAIC/AIAAWP/AIIRWP concepts, concepts map, evidence registry, and project surfaces.
- The Concepts Map is an unusually valuable human-visible machine-navigation layer.
- The whitepaper pages contain citation identity, artifact links, manifest/checksum references, and explicit boundary notes.
- JSON-LD parses sitewide.

## P1 Findings

1. **Third whitepaper HTML artifact missing machine-readable metadata**
   - No canonical and no JSON-LD on the HTML artifact itself.
   - The route page and `llms.txt` compensate, but answer engines may land directly on the artifact URL.

2. **MPLP v2.0 next-phase narrative missing**
   - The site says the three whitepapers are public, but does not yet clearly state that the fourth paper and guides are held while MPLP v2.0 object-model consolidation catches up.
   - Recommendation: after planning, add a bounded research-program note to the research or MPLP surface.

3. **Public acronym hygiene**
   - `AIAAWP` and `AIIRWP` remain in Concepts Map and entity graph as document IDs/acronyms. This is acceptable internally and in technical report IDs, but public answer-engine surfaces should prefer full paper names unless an acronym is explicitly introduced.

## P2 Findings

- `llms.txt` is comprehensive but long. A later optimization wave can add a compact "answer engine summary" near the top.
- Entity graph uses many boundary statements, which is good for risk, but may dilute the primary concept hierarchy. Consider adding explicit `primary_entity_chain` or `recommended_answer_summary` fields.
- Existing playbook pages may look like guides are active; future messaging should distinguish existing published playbooks from paused future guide releases.

## Answerability Assessment

| Question | Answerability | Note |
| --- | --- | --- |
| Who is Jearon Wong? | Strong | Homepage, about, JSON-LD, entity graph align. |
| What is Agentic Delivery? | Strong | Multiple canonical definitions exist. |
| What is MPLP? | Strong | Project page and `llms.txt`; expansion can improve first-contact clarity. |
| What do the three whitepapers cover? | Strong | Research index, homepage band, `llms.txt`, entity graph align. |
| What is paused pending MPLP v2.0? | Weak/moderate | Needs explicit public narrative before announcement. |
