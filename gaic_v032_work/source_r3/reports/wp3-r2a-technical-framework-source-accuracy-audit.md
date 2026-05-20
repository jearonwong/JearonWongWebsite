# WP3-R2A Technical Framework Source Accuracy Audit

**Task ID:** WP3-R2A-EXTERNAL-SOURCE-ACCURACY-AUDIT
**Mode:** External source audit only

## Technical Source Audit

| Source | What official docs support | R2 claim | Accuracy | What the source does not claim | Safe R3 use |
| --- | --- | --- | --- | --- | --- |
| TECH-01 OpenAI Agents SDK | Agents, tools, handoffs, guardrails, sessions/tracing context in official docs/search result | Provides technical agent SDK capability context | Accurate as technical context | Does not define insurance evidence, legal authority, coverage boundary, or underwriting sufficiency | "OpenAI Agents SDK is a technical execution/observability layer; WP3 does not treat it as claim evidence by itself." |
| TECH-02 MCP | Resources, prompts, tools, and protocol layer for connecting applications to context/tools | Supports tool/context protocol layer | Accurate | Does not define business authority, insurance authority, or claim evidence | "MCP can describe a tool/context protocol layer, not an insurance boundary." |
| TECH-03 A2A | Current A2A docs support agent-to-agent interoperability; old R1 URL is broken | Supports interoperability context | Accurate only after URL replacement | Does not assign responsibility or provide insurance evidence | "A2A can be referenced for agent interoperability after replacing the old URL." |
| TECH-04 LangGraph | Durable execution and persistence docs support checkpointing/state/persistence context | Supports durable execution, persistence, trace/state context | Accurate after splitting URLs | Does not make checkpoint data claim evidence or legal causation proof | "LangGraph persistence/durable execution may produce technical state records; WP3 treats them as inputs, not claim evidence by themselves." |
| TECH-05 AutoGen | Official docs support multi-agent framework context | Supports multi-agent orchestration/communication context | Accurate | Does not define insurance authority or coverage boundaries | "AutoGen can be cited as technical multi-agent framework context only." |

## Approved Technical-Context Wording

- "necessary layer, not sufficient insurability layer"
- "technical trace, not claim evidence by itself"
- "tool permission, not coverage authority"
- "workflow completion, not insured outcome"
- "technical framework capability, not insurance evidence"
- "technical state record, not legal causation proof"

## Forbidden Technical-Context Wording

- "framework tracing proves the claim"
- "protocol permissions define coverage authority"
- "A2A/MCP/OpenAI/LangGraph creates insurance-grade evidence"
- "vendor assurance establishes causality"
- "framework X lacks governance" unless source-supported and narrowly framed
- "vendor X fails" or any vendor ranking language

## Corrections Required Before R3 Citation

- Replace `TECH-03` old URL with current A2A specification URL.
- Split `TECH-04` into separate durable execution and persistence URLs.
- Keep `TECH-01` access-caveated because automated fetch returned 403 even though official docs/search evidence exists.
