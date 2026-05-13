# GAIC-R3F Build and Route QA

Task ID: GAIC-R3F-EXTENDED-ECOSYSTEM-SEMANTIC-MAPPING

## Commands

- `npm run typecheck`
  - Result: PASS, 0 errors. Existing Astro hints in `BaseLayout.astro` about inline `onload` were present and non-blocking.
- `npm run lint`
  - Result: PASS.
- `npm run build`
  - Result: PASS, 69 pages built.
- `git diff --check`
  - Result: PASS.

## Route Checks

Expected built routes:

- `/mapping/extended-ecosystem/`
- `/mapping/extended-ecosystem/claude-code/`
- `/mapping/extended-ecosystem/qwen/`
- `/mapping/extended-ecosystem/cursor-ai-coding-agents/`
- `/mapping/extended-ecosystem/autogen/`
- `/mapping/extended-ecosystem/mcp/`
- `/mapping/extended-ecosystem/a2a/`
- `/mapping/extended-ecosystem/semantic-kernel/`

Expected reused routes:

- `/playbooks/anthropic-agent-governance/`
- `/playbooks/deepseek-agent-governance/`
- `/playbooks/kimi-agent-governance/`
- `/playbooks/ai-coding-agent-auditability/`
- `/playbooks/harness-engineering-for-ai-agents/`
- `/research/global-ai-compliance-white-paper-2026/systems/openai-agents-sdk/`

## Sitemap Checks

Sitemap inclusion after build:

- `https://www.jearonwong.com/mapping/extended-ecosystem/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/claude-code/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/qwen/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/cursor-ai-coding-agents/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/autogen/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/mcp/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/a2a/`
- `https://www.jearonwong.com/mapping/extended-ecosystem/semantic-kernel/`

All expected R3F routes were present in `dist/sitemap-0.xml`.

## llms.txt

`public/llms.txt` now includes:

- Extended Ecosystem Lifecycle Governance Mapping
- Claude Code
- Qwen
- Cursor / AI Coding Agents
- AutoGen
- MCP
- A2A
- Semantic Kernel

## Artifact Integrity

Verified unchanged hashes:

- public responsive HTML: `e36a7a209e499c47c422620dce32035f4945c9cffb9b6a549180310c9bcfd42c`
- public/sealed PDF: `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`
- public/sealed DOCX: `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa`
- public/sealed generation log: `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e`

## Status

PASS.

Local browser smoke test was run against Astro preview at `http://127.0.0.1:4321/` for:

- `/mapping/extended-ecosystem/`
- `/mapping/extended-ecosystem/claude-code/`
- `/mapping/extended-ecosystem/mcp/`

All three rendered with expected titles, expected boundary text, and no console errors or warnings.
