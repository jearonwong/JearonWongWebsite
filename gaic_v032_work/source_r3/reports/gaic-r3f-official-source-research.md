# GAIC-R3F Official Source Research

Task ID: GAIC-R3F-EXTENDED-ECOSYSTEM-SEMANTIC-MAPPING

## Rule Applied

Only official documentation, official product pages, official project pages, or official GitHub repositories were used to establish ecosystem context. R3F pages do not add comparative product claims, feature rankings, product defects, or procurement guidance.

## New Ecosystem Source Review

| Ecosystem | Official sources checked | HTTP status | R3F use |
| --- | --- | --- | --- |
| Claude Code | `https://code.claude.com/docs/en/overview`; `https://www.claude.com/product/claude-code` | 200 / 200 | Establishes coding-agent workflow context only. |
| Qwen | `https://qwen.readthedocs.io/en/latest/`; `https://github.com/QwenLM/Qwen3` | 200 / 200 | Establishes Qwen model ecosystem context only. |
| Cursor / AI Coding Agents | `https://cursor.com/docs`; `https://docs.cursor.com/en/chat/agent`; `https://docs.cursor.com/background-agents`; `https://docs.cursor.com/en/cli/using` | 200 / 200 / 200 / 200 | Establishes Cursor coding-agent workflow context only. |
| AutoGen | `https://microsoft.github.io/autogen/stable/`; `https://github.com/microsoft/autogen` | 200 / 200 | Establishes multi-agent framework context only. |
| MCP | `https://modelcontextprotocol.io/docs/getting-started/intro`; `https://modelcontextprotocol.io/docs/learn/architecture`; `https://github.com/modelcontextprotocol/modelcontextprotocol` | 200 / 200 / 200 | Establishes tool/context protocol context only. |
| A2A | `https://a2a-protocol.org/`; `https://github.com/a2aproject/A2A` | 200 / 200 | Establishes agent interoperability protocol context only. |
| Semantic Kernel | `https://learn.microsoft.com/en-us/semantic-kernel/overview/`; `https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/`; `https://github.com/microsoft/semantic-kernel` | 200 / 200 / 200 | Establishes agent/orchestration SDK context only; inclusion supported. |

## Existing Page Source-Boundary Review

Existing R3B pages already avoid current feature claims and present lifecycle governance checklists rather than vendor evaluation:

- `/playbooks/anthropic-agent-governance/`
- `/playbooks/deepseek-agent-governance/`
- `/playbooks/kimi-agent-governance/`
- `/playbooks/ai-coding-agent-auditability/`
- `/playbooks/harness-engineering-for-ai-agents/`

The R3E OpenAI Agents SDK route remains a GAIC-cited system detail page and was not recreated:

- `/research/global-ai-compliance-white-paper-2026/systems/openai-agents-sdk/`

## Facts Added

R3F adds only high-level ecosystem context such as coding-agent workflow surface, model ecosystem, multi-agent framework, tool/context protocol, agent interoperability protocol, or agent/orchestration SDK context. These are source-boundary facts from official sources.

## Facts Not Added

R3F does not add:

- current capability comparisons
- benchmark claims
- safety or compliance maturity claims
- product defects
- vendor ranking
- procurement language
- endorsement or affiliation claims
- legal compliance proof

## Source-Limited Notes

Where a source URL moved or redirected, the final working official URL was used. The A2A docs entry uses `https://a2a-protocol.org/` after the GitHub Pages URL redirected to the current official docs domain.

## Decision

Official-source review supports the seven new extended ecosystem detail routes. The pages should remain generic lifecycle governance mappings and should not be treated as GAIC-scored assessments.
