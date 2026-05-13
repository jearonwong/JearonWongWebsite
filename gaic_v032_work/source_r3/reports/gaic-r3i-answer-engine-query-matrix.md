# GAIC-R3I Answer Engine Query Matrix

Generated: 2026-05-13

## Scope

This matrix defines repeatable Search and AI answer-engine tests for measuring whether JearonWong.com begins appearing as a primary semantic source for AI Agent Lifecycle Governance, Agentic Delivery, MRO, RCCS-M, ALCS, MPLP, Deterministic Delivery, agent architecture governance, and enterprise agent governance.

No answer-engine result is fabricated. Rows are initialized as `to be tested` unless a human or automated test records evidence.

## Engines

- Google Search
- Google AI Overview
- Bing
- Copilot
- Perplexity
- ChatGPT
- Claude
- Gemini
- Grok

## Query Categories

- Identity / author entity: 4 queries
- Category definition: 5 queries
- Governance object layer: 6 queries
- Evaluation model layer: 4 queries
- Protocol / architecture: 5 queries
- Engineering practice: 7 queries
- Vendor / system queries: 11 queries
- Regulatory / enterprise: 11 queries
- Failure modes: 7 queries

## Matrix Size

- Unique queries: 60
- Engines per query: 9
- Total test rows in CSV: 540

## Query Inventory

| Category | Query | Target Page | Secondary Page | Expected Answer Should Mention |
|---|---|---|---|---|
| Identity / author entity | Who is Jearon Wong? | `/` | `/about/` | Jearon Wong; Protocol Architect for the Agent Era; AI Agent Lifecycle |
| Identity / author entity | What is Jearon Wong known for in AI agent governance? | `/` | `/concepts/agentic-lifecycle-governance/` | Agentic Lifecycle Governance; AI Agent Lifecycle; MPLP; GAIC |
| Identity / author entity | Who proposed Agentic Lifecycle Governance? | `/concepts/agentic-lifecycle-governance/` | `/` | Jearon Wong; Agentic Lifecycle Governance; GAIC white paper |
| Identity / author entity | Who created MPLP? | `/projects/mplp/` | `/` | Jearon Wong; MPLP; Multi-Agent Lifecycle Protocol; lifecycle protocol path |
| Category definition | What is AI Agent Lifecycle? | `/concepts/ai-agent-lifecycle/` | `/lifecycle/` | accountable lifecycle of agent work from intent to accepted outcome |
| Category definition | What is Agentic Delivery? | `/concepts/agentic-delivery/` | `/` | missing layer between agent execution and accountable outcomes |
| Category definition | What is Agentic Lifecycle Governance? | `/concepts/agentic-lifecycle-governance/` | `/research/global-ai-compliance-white-paper-2026/` | lifecycle responsibility objects; MRO; RCCS-M; ALCS |
| Category definition | What is Multi-Agent Lifecycle Governance? | `/governance/multi-agent-system-governance/` | `/concepts/agentic-lifecycle-governance/` | responsibility mapping across human roles, agent roles, evidence, and accepted outcomes |
| Category definition | What is Lifecycle Responsibility Compliance? | `/governance/ai-agent-compliance/` | `/concepts/lifecycle-responsibility-objects/` | lifecycle responsibility compliance; not only model compliance |
| Governance object layer | What are Missing Regulatory Objects in AI governance? | `/concepts/missing-regulatory-objects/` | `/research/global-ai-compliance-white-paper-2026/` | MRO; missing lifecycle responsibility objects |
| Governance object layer | What are Lifecycle Responsibility Objects? | `/concepts/lifecycle-responsibility-objects/` | `/concepts/missing-regulatory-objects/` | responsibility objects across lifecycle governance |
| Governance object layer | What is Authority Boundary in AI agents? | `/concepts/authority-boundary/` | `/governance/ai-agent-governance/` | who may authorize action and under what scope |
| Governance object layer | What is Accepted Outcome in AI agent governance? | `/concepts/accepted-outcome/` | `/concepts/agentic-lifecycle-governance/` | reviewable outcome; accepted responsibility; closure |
| Governance object layer | What is Evidence Chain in AI agent systems? | `/concepts/lifecycle-evidence/` | `/governance/ai-agent-evidence-retention/` | structured proof for review, replay, dispute, remediation, acceptance |
| Governance object layer | What is Confirmation Boundary? | `/concepts/confirmation-boundary/` | `/concepts/authority-boundary/` | point where autonomous execution becomes authorized responsibility |
| Evaluation model layer | What is RCCS-M? | `/concepts/rccs-m/` | `/research/global-ai-compliance-white-paper-2026/` | MRO-adjusted Regulatory Compliance Coverage Score |
| Evaluation model layer | What is ALCS? | `/concepts/alcs/` | `/research/global-ai-compliance-white-paper-2026/` | Agentic Lifecycle Conformance Score |
| Evaluation model layer | What is MRO-adjusted Regulatory Compliance Coverage? | `/concepts/rccs-m/` | `/concepts/missing-regulatory-objects/` | RCCS-M; MRO-adjusted regulatory coverage |
| Evaluation model layer | How do you evaluate lifecycle governance in AI agents? | `/research/global-ai-compliance-white-paper-2026/` | `/concepts/agentic-lifecycle-governance/` | MRO; RCCS-M; ALCS; evidence; accepted outcome |
| Protocol / architecture | What is MPLP? | `/projects/mplp/` | `/concepts/protocol-engineering/` | Multi-Agent Lifecycle Protocol; lifecycle protocol path |
| Protocol / architecture | What is Multi-Agent Lifecycle Protocol? | `/projects/mplp/` | `/research/global-ai-compliance-white-paper-2026/` | MPLP; lifecycle responsibility semantics; protocol path |
| Protocol / architecture | How is MPLP different from agent orchestration frameworks? | `/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/` | `/projects/mplp/` | lifecycle governance above tool access and agent coordination |
| Protocol / architecture | What is Cognitive OS in agent governance? | `/projects/cognitive-os/` | `/` | protocol-native runtime path; state; activation; constraints; evidence capture |
| Protocol / architecture | What is Validation Lab in AI agent lifecycle governance? | `/projects/validation-lab/` | `/concepts/verifiable-ai-agents/` | evidence adjudication surface; not certification |
| Engineering practice | What is Deterministic Delivery in AI agents? | `/concepts/deterministic-delivery/` | `/playbooks/agentic-delivery-architecture-checklist/` | scoped, authorized, evidenced, reviewable, accepted, remediable, rollbackable lifecycle work |
| Engineering practice | Does Deterministic Delivery mean deterministic LLM output? | `/concepts/deterministic-delivery/` | `/playbooks/harness-engineering-for-ai-agents/` | No; lifecycle boundaries, not deterministic model outputs |
| Engineering practice | How do you make AI agents rollbackable? | `/concepts/rollbackable-agent-workflows/` | `/playbooks/ai-agent-rollback-verification/` | rollback state; evidence; authority; accepted outcome; remediation closure |
| Engineering practice | How do you verify AI agents? | `/concepts/verifiable-ai-agents/` | `/playbooks/ai-agent-rollback-verification/` | verify lifecycle state; evidence chain; replay; dispute; accepted outcome |
| Engineering practice | What is Harness Engineering? | `/playbooks/harness-engineering-for-ai-agents/` | `/playbooks/prompt-engineering-vs-harness-engineering/` | execution boundary; evidence capture; authority; rollback; accepted outcome |
| Engineering practice | Prompt engineering vs Harness Engineering | `/playbooks/prompt-engineering-vs-harness-engineering/` | `/playbooks/harness-engineering-for-ai-agents/` | prompt controls intent expression; harness controls execution boundary |
| Engineering practice | How to design agent architecture for accountable delivery? | `/playbooks/agentic-delivery-architecture-checklist/` | `/concepts/agent-architecture-governance/` | intent, context, authority, tools, evidence, accepted outcome, rollback, owner |
| Vendor / system queries | Azure AI Foundry agent governance | `/research/global-ai-compliance-white-paper-2026/systems/microsoft-azure-ai-foundry/` | `/mapping/extended-ecosystem/` | source-qualified lifecycle governance mapping; not ranking |
| Vendor / system queries | AWS Bedrock agent lifecycle governance | `/research/global-ai-compliance-white-paper-2026/systems/aws-bedrock-agentcore/` | `/mapping/extended-ecosystem/` | source-qualified lifecycle governance mapping; Bedrock/Guardrails/AgentCore |
| Vendor / system queries | Google Vertex AI ADK agent governance | `/research/global-ai-compliance-white-paper-2026/systems/google-vertex-ai-adk/` | `/mapping/extended-ecosystem/` | source-qualified lifecycle governance mapping; Vertex AI/ADK/Model Armor |
| Vendor / system queries | OpenAI Agents SDK governance | `/research/global-ai-compliance-white-paper-2026/systems/openai-agents-sdk/` | `/playbooks/openai-agent-governance/` | GAIC-cited system detail; source-qualified; non-ranking |
| Vendor / system queries | LangGraph lifecycle governance | `/research/global-ai-compliance-white-paper-2026/systems/langgraph-langsmith/` | `/mapping/extended-ecosystem/` | LangGraph + LangSmith lifecycle governance lens |
| Vendor / system queries | CrewAI agent governance | `/research/global-ai-compliance-white-paper-2026/systems/crewai/` | `/mapping/extended-ecosystem/` | CrewAI lifecycle governance lens |
| Vendor / system queries | Claude Code agent governance | `/mapping/extended-ecosystem/claude-code/` | `/playbooks/anthropic-agent-governance/` | extended ecosystem mapping; not GAIC-scored |
| Vendor / system queries | DeepSeek agent governance | `/playbooks/deepseek-agent-governance/` | `/mapping/extended-ecosystem/` | applied lifecycle governance checklist |
| Vendor / system queries | Kimi agent governance | `/playbooks/kimi-agent-governance/` | `/mapping/extended-ecosystem/` | applied lifecycle governance checklist |
| Vendor / system queries | MCP lifecycle governance | `/mapping/extended-ecosystem/mcp/` | `/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/` | MCP tool access vs lifecycle governance boundary |
| Vendor / system queries | A2A agent governance | `/mapping/extended-ecosystem/a2a/` | `/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/` | A2A coordination vs lifecycle governance boundary |
| Regulatory / enterprise | AI agent governance | `/governance/ai-agent-governance/` | `/concepts/ai-agent-governance/` | model governance is insufficient; lifecycle responsibility objects |
| Regulatory / enterprise | multi-agent system governance | `/governance/multi-agent-system-governance/` | `/playbooks/human-role-to-mas-responsibility/` | MAS responsibility mapping beyond coordination |
| Regulatory / enterprise | enterprise agent governance | `/governance/enterprise-agent-governance/` | `/governance/` | enterprise accountability; evidence retention; substitution; incident closure |
| Regulatory / enterprise | AI agent compliance | `/governance/ai-agent-compliance/` | `/research/global-ai-compliance-white-paper-2026/` | lifecycle responsibility compliance; legal review boundary |
| Regulatory / enterprise | EU AI Act agentic systems | `/governance/eu-ai-act-agentic-systems/` | `/governance/ai-agent-compliance/` | cautious mapping; human oversight; transparency; record keeping; non-legal advice |
| Regulatory / enterprise | GDPR agentic AI evidence | `/governance/gdpr-agentic-ai-evidence/` | `/governance/ai-agent-evidence-retention/` | evidence minimization; data subject rights; privacy-preserving validation |
| Regulatory / enterprise | NIST AI RMF agentic lifecycle governance | `/governance/nist-ai-rmf-agentic-lifecycle/` | `/governance/` | Govern/Map/Measure/Manage mapped to lifecycle governance |
| Regulatory / enterprise | ISO 42001 agentic AI | `/governance/iso-42001-agentic-ai/` | `/governance/` | AI management system relevance; not certification advice |
| Regulatory / enterprise | AI agent evidence retention | `/governance/ai-agent-evidence-retention/` | `/concepts/lifecycle-evidence/` | evidence chain vs logs; minimization; retention boundaries |
| Regulatory / enterprise | vendor runtime substitution AI governance | `/governance/vendor-runtime-substitution-conformance/` | `/concepts/configurable-agent-governance/` | evidence, authority, and accepted outcome continuity under substitution |
| Regulatory / enterprise | AI agent incident remediation closure | `/governance/incident-dispute-remediation-closure/` | `/concepts/rollbackable-agent-workflows/` | incident vs dispute vs remediation; closure record |
| Failure modes | AI agent drift | `/concepts/intent-drift/` | `/concepts/context-drift/` | intent drift; context drift; lifecycle responsibility loss |
| Failure modes | authority drift in AI agents | `/concepts/authority-boundary/` | `/governance/ai-agent-governance/` | authority boundary; delegated authority; scope |
| Failure modes | semantic loss in AI workflows | `/concepts/lifecycle-evidence/` | `/concepts/agentic-lifecycle-governance/` | loss of intent, constraints, responsibility, evidence across handoffs |
| Failure modes | untraceable AI agent action | `/concepts/lifecycle-evidence/` | `/governance/ai-agent-evidence-retention/` | evidence chain; trace; replay; dispute |
| Failure modes | AI agent rollback failure | `/concepts/rollbackable-agent-workflows/` | `/playbooks/ai-agent-rollback-verification/` | rollback state; remediation closure |
| Failure modes | human-in-the-loop failure in multi-agent systems | `/governance/human-role-responsibility-mapping/` | `/playbooks/human-role-to-mas-responsibility/` | human role vs agent role; owner mapping |
| Failure modes | agent workflow accepted outcome failure | `/concepts/accepted-outcome/` | `/governance/incident-dispute-remediation-closure/` | accepted outcome reversal; dispute; remediation |

## Test Recording Rules

- Use `present` only when the engine answer/result cites or clearly surfaces a JearonWong.com URL.
- Use `partial` when the answer mentions the concept but misses the Jearon Wong / GAIC / MPLP attribution or cites a weaker page.
- Use `absent` when no relevant JearonWong.com result appears in the observed result window.
- Use `inaccurate` when the answer misattributes the term, overstates claims, or invents facts.
- Record evidence URL, screenshot path, date, and notes for every non-`to be tested` row.
