# GAIC-R3F Existing Asset Audit

Task ID: GAIC-R3F-EXTENDED-ECOSYSTEM-SEMANTIC-MAPPING

## Repo Truth

- Remote: `origin https://github.com/jearonwong/jearonwongwebsite.git`
- Branch: `main`
- Local HEAD before R3F edits: `aa6425857f957b3e07cd369958b80199d05706c0`
- Origin HEAD before R3F edits: `aa6425857f957b3e07cd369958b80199d05706c0`
- Pull result: already up to date.
- Working tree before edits: clean.

## Existing Routes Reused

R3F does not duplicate existing R3B/R3E routes.

| Ecosystem/context | Existing route | R3F decision |
| --- | --- | --- |
| Anthropic / Claude agent workflows | `/playbooks/anthropic-agent-governance/` | Reuse existing applied playbook. |
| DeepSeek-based agent workflows | `/playbooks/deepseek-agent-governance/` | Reuse existing applied playbook. |
| Kimi / Moonshot AI workflows | `/playbooks/kimi-agent-governance/` | Reuse existing applied playbook. |
| AI coding agent auditability | `/playbooks/ai-coding-agent-auditability/` | Reuse for general coding-agent auditability. |
| Harness Engineering | `/playbooks/harness-engineering-for-ai-agents/` | Reuse as the general method page. |
| OpenAI Agents SDK | `/research/global-ai-compliance-white-paper-2026/systems/openai-agents-sdk/` | Keep R3E GAIC-cited system page; do not recreate. |

## New Routes Needed

The following routes were needed because they were not already covered as first-layer GAIC-cited systems or existing R3B applied playbooks:

- `/mapping/extended-ecosystem/`
- `/mapping/extended-ecosystem/claude-code/`
- `/mapping/extended-ecosystem/qwen/`
- `/mapping/extended-ecosystem/cursor-ai-coding-agents/`
- `/mapping/extended-ecosystem/autogen/`
- `/mapping/extended-ecosystem/mcp/`
- `/mapping/extended-ecosystem/a2a/`
- `/mapping/extended-ecosystem/semantic-kernel/`

## Excluded or Deferred

- Generic Anthropic / Claude, DeepSeek, Kimi, and OpenAI pages were excluded because existing R3B/R3E routes already cover them.
- Claude Code is included separately because it is a narrower coding-agent workflow context than the generic Anthropic / Claude playbook.
- Semantic Kernel is included because official Microsoft Learn and Microsoft GitHub sources support the ecosystem context.
- Other ecosystems remain deferred to future waves unless official-source review and route-deduplication justify inclusion.

## Files Inspected

- `src/data/site.ts`
- `src/data/gaicSystems.ts`
- `src/data/schema.ts`
- `src/pages/playbooks/index.astro`
- `src/pages/playbooks/[slug].astro`
- `src/pages/research/global-ai-compliance-white-paper-2026/systems/index.astro`
- `src/pages/research/global-ai-compliance-white-paper-2026/systems/[slug].astro`
- `src/pages/concepts/map/index.astro`
- `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- `public/llms.txt`

## Decision

R3F should create a new extended ecosystem registry and mapping route family while linking back to existing playbooks and GAIC-cited systems. It should not create duplicate vendor pages.
