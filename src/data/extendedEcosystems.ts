export type ExtendedEcosystemSource = {
  label: string;
  url: string;
  note: string;
};

export type ExtendedEcosystemRecord = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  sourceStatus: string;
  sourceBasis: string;
  ecosystemContext: string;
  lifecycleQuestion: string;
  lifecycleQuestions: string[];
  relatedMros: string[];
  rccsAlcsRelevance: string;
  harnessRelevance: string;
  protocolPath: string;
  boundary: string;
  officialSources: ExtendedEcosystemSource[];
  keywords: string[];
};

export type ExistingEcosystemRoute = {
  name: string;
  href: string;
  context: string;
  updatePolicy: string;
};

export const extendedEcosystemIndexPath = "/mapping/extended-ecosystem/";

export const extendedEcosystemBoundary =
  "These pages apply GAIC lifecycle governance concepts to extended ecosystems. They are not GAIC scored assessments, vendor rankings, procurement recommendations, certifications, legal compliance proof, official vendor documentation, or vendor affiliations.";

const commonLifecycleQuestions = [
  "What authority boundary governs consequential work?",
  "What evidence chain survives tool, model, agent, or runtime action?",
  "What accepted outcome state is defined, and who may accept it?",
  "How are rollback, remediation, dispute, and substitution handled?",
  "Which human or organizational role owns lifecycle responsibility?"
];

const commonMros = [
  "Authority Boundary",
  "Evidence Chain",
  "Accepted Outcome",
  "Lifecycle Responsibility Objects",
  "Substitution record",
  "Dispute object",
  "Remediation closure"
];

const commonRccsAlcs =
  "RCCS-M is relevant as a governance-coverage lens for lifecycle responsibility objects. ALCS is relevant as a lifecycle-coherence lens across intent, authority, evidence, acceptance, dispute, remediation, and closure. This R3F mapping is author-analytical and source-qualified, not a GAIC-scored assessment.";

const commonProtocolPath =
  "MPLP is one protocol path for expressing lifecycle responsibility semantics around agentic work. It is not required, exclusive, certified, regulator-approved, vendor-affiliated, or already an industry standard.";

export const existingExtendedEcosystemRoutes: ExistingEcosystemRoute[] = [
  {
    name: "Anthropic / Claude Agent Workflows",
    href: "/playbooks/anthropic-agent-governance/",
    context:
      "Existing R3B applied playbook for generic Anthropic / Claude workflow governance.",
    updatePolicy:
      "Reuse the existing playbook. Do not create a duplicate Anthropic or Claude page in R3F."
  },
  {
    name: "DeepSeek-Based Agent Workflows",
    href: "/playbooks/deepseek-agent-governance/",
    context:
      "Existing R3B applied playbook for generic DeepSeek-based workflow governance.",
    updatePolicy:
      "Reuse the existing playbook. Do not create a duplicate DeepSeek page in R3F."
  },
  {
    name: "Kimi-Based Agent Workflows",
    href: "/playbooks/kimi-agent-governance/",
    context:
      "Existing R3B applied playbook for generic Moonshot AI / Kimi workflow governance.",
    updatePolicy:
      "Reuse the existing playbook. Do not create a duplicate Kimi page in R3F."
  },
  {
    name: "AI Coding Agent Auditability",
    href: "/playbooks/ai-coding-agent-auditability/",
    context:
      "Existing R3B applied playbook for coding-agent auditability across tools.",
    updatePolicy:
      "Reuse the existing playbook and add Cursor / Claude Code / coding-agent mappings only where a narrower new route is needed."
  },
  {
    name: "Harness Engineering",
    href: "/playbooks/harness-engineering-for-ai-agents/",
    context:
      "Existing R3B playbook for wrapping agent execution with lifecycle boundaries, evidence capture, rollback, remediation, and accepted outcome.",
    updatePolicy:
      "Reuse as the general method page behind ecosystem-specific mappings."
  }
];

export const extendedEcosystems: ExtendedEcosystemRecord[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "AI coding agent / developer workflow",
    summary:
      "A source-qualified lifecycle governance mapping for Claude Code as a coding-agent workflow context, not a product evaluation.",
    sourceStatus:
      "Official Claude Code documentation and Anthropic product documentation reviewed.",
    sourceBasis:
      "R3F uses only official Claude Code / Anthropic source surfaces to establish the coding-agent context. No capability ranking or defect claim is added.",
    ecosystemContext:
      "Claude Code is treated here as a coding-agent workflow surface. The governance mapping asks how repository changes, command execution, tool access, review evidence, and accepted outcome should remain lifecycle-governed when a coding agent participates in software work.",
    lifecycleQuestion:
      "When a coding agent can participate in repository work, which lifecycle records preserve intent, authority, evidence, rollback, and acceptance?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which repository or environment boundary is in scope for the coding-agent run?",
      "Which command or file-change actions require explicit confirmation before continuing?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because coding-agent work needs task boundaries, environment boundaries, command constraints, test evidence, review state, rollback path, and acceptance criteria outside the model response itself.",
    protocolPath: commonProtocolPath,
    boundary:
      "This page is independent lifecycle governance analysis. It is not Anthropic documentation, Anthropic affiliation, product scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "Claude Code overview",
        url: "https://code.claude.com/docs/en/overview",
        note: "Official Claude Code documentation surface reviewed for source boundary."
      },
      {
        label: "Claude Code product page",
        url: "https://www.claude.com/product/claude-code",
        note: "Official product surface reviewed only to confirm the coding-agent context."
      }
    ],
    keywords: [
      "Claude Code governance",
      "coding agent lifecycle governance",
      "AI coding agent auditability",
      "Authority Boundary",
      "Evidence Chain",
      "Accepted Outcome",
      "Harness Engineering"
    ]
  },
  {
    slug: "qwen",
    name: "Qwen",
    category: "Model ecosystem / agent workflow input",
    summary:
      "A source-qualified lifecycle governance mapping for Qwen-based agent workflows, not a model benchmark or vendor ranking.",
    sourceStatus:
      "Official Qwen documentation and QwenLM GitHub sources reviewed.",
    sourceBasis:
      "R3F uses official Qwen documentation and GitHub source surfaces to establish Qwen as a model ecosystem context. No benchmark, capability, safety, or procurement comparison is added.",
    ecosystemContext:
      "Qwen is treated here as a model ecosystem that may be used inside agent workflows. The lifecycle governance question is not whether one model is better than another; it is whether model use, substitution, tool authority, evidence, and accepted outcome remain explicit when Qwen is part of an agentic workflow.",
    lifecycleQuestion:
      "When a Qwen model is used in an agentic workflow, how are model substitution, authority, evidence, accepted outcome, and remediation recorded?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "How is model or endpoint substitution recorded when the workflow changes?",
      "What evidence distinguishes model output from accepted work product?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because model use should be surrounded by explicit context boundaries, prompt/tool constraints, output evidence, review state, and rollback/remediation paths.",
    protocolPath: commonProtocolPath,
    boundary:
      "This page is independent lifecycle governance analysis. It is not Alibaba Cloud or Qwen documentation, affiliation, model ranking, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "Qwen documentation",
        url: "https://qwen.readthedocs.io/en/latest/",
        note: "Official Qwen documentation reviewed for model ecosystem boundary."
      },
      {
        label: "Qwen3 GitHub repository",
        url: "https://github.com/QwenLM/Qwen3",
        note: "Official QwenLM GitHub source reviewed for current model-family context."
      }
    ],
    keywords: [
      "Qwen governance",
      "Qwen agent workflow",
      "model substitution record",
      "AI agent lifecycle governance",
      "RCCS-M",
      "ALCS"
    ]
  },
  {
    slug: "cursor-ai-coding-agents",
    name: "Cursor / AI Coding Agents",
    category: "AI coding agent / developer workflow",
    summary:
      "A source-qualified lifecycle governance mapping for Cursor and AI coding-agent workflows, extending the existing AI Coding Agent Auditability playbook.",
    sourceStatus:
      "Official Cursor documentation reviewed for Agent, Background Agent, CLI, and MCP source boundaries.",
    sourceBasis:
      "R3F relies on official Cursor documentation only for the existence of Cursor agent workflow surfaces. It does not score, rank, or evaluate Cursor products.",
    ecosystemContext:
      "Cursor is treated here as an AI coding-agent ecosystem. The mapping focuses on repository scope, autonomous or semi-autonomous edits, command execution, branch or handoff evidence, review state, and accepted outcome.",
    lifecycleQuestion:
      "When an AI coding agent edits or proposes code, what evidence proves the task boundary, change boundary, test boundary, and accepted outcome?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which branch, workspace, or machine boundary is used for agent work?",
      "What test, lint, review, and handoff evidence is required before acceptance?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is central for coding agents because the harness must keep plan, file changes, commands, tests, review, rollback, and accepted outcome connected.",
    protocolPath: commonProtocolPath,
    boundary:
      "This page is independent lifecycle governance analysis. It is not Cursor documentation, Cursor affiliation, product scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "Cursor documentation",
        url: "https://cursor.com/docs",
        note: "Official Cursor documentation index reviewed."
      },
      {
        label: "Cursor Agent modes",
        url: "https://docs.cursor.com/en/chat/agent",
        note: "Official Agent / Ask / Custom mode documentation reviewed."
      },
      {
        label: "Cursor Background Agents",
        url: "https://docs.cursor.com/background-agents",
        note: "Official Background Agents documentation reviewed."
      },
      {
        label: "Cursor CLI Agent",
        url: "https://docs.cursor.com/en/cli/using",
        note: "Official CLI Agent documentation reviewed."
      }
    ],
    keywords: [
      "Cursor agent governance",
      "AI coding agent auditability",
      "background agent governance",
      "code diff evidence",
      "Accepted Outcome",
      "Harness Engineering"
    ]
  },
  {
    slug: "autogen",
    name: "AutoGen",
    category: "Multi-agent framework",
    summary:
      "A source-qualified lifecycle governance mapping for AutoGen-style multi-agent applications, not a framework ranking.",
    sourceStatus:
      "Official Microsoft AutoGen documentation and GitHub repository reviewed.",
    sourceBasis:
      "R3F uses Microsoft AutoGen official documentation and repository language to establish the multi-agent framework context. Current source status is recorded without treating it as a defect claim.",
    ecosystemContext:
      "AutoGen is treated here as a multi-agent application framework context. The lifecycle governance question is how agent roles, message passing, human collaboration, tool action, evidence, termination, and acceptance remain accountable across a multi-agent workflow.",
    lifecycleQuestion:
      "When multiple agents converse or coordinate, where do authority, evidence, accepted outcome, dispute, remediation, and lifecycle closure live?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which agent role is allowed to delegate, terminate, or escalate work?",
      "What record links inter-agent messages to human responsibility and accepted outcome?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because multi-agent frameworks need surrounding role boundaries, routing constraints, message evidence, termination conditions, review gates, and closure records.",
    protocolPath: commonProtocolPath,
    boundary:
      "This page is independent lifecycle governance analysis. It is not Microsoft documentation, Microsoft affiliation, framework scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "AutoGen documentation",
        url: "https://microsoft.github.io/autogen/stable/",
        note: "Official AutoGen documentation reviewed."
      },
      {
        label: "AutoGen GitHub repository",
        url: "https://github.com/microsoft/autogen",
        note: "Official repository reviewed for current project boundary."
      }
    ],
    keywords: [
      "AutoGen governance",
      "multi-agent framework governance",
      "agent role responsibility",
      "multi-agent auditability",
      "MRO",
      "ALCS"
    ]
  },
  {
    slug: "mcp",
    name: "MCP",
    category: "Tool and context protocol ecosystem",
    summary:
      "A source-qualified lifecycle governance mapping for Model Context Protocol ecosystems, focused on tool/context access versus lifecycle responsibility.",
    sourceStatus:
      "Official Model Context Protocol documentation and GitHub sources reviewed.",
    sourceBasis:
      "R3F uses official MCP sources to establish MCP as a protocol for connecting AI applications to external systems. The mapping does not treat MCP alone as lifecycle governance or accepted outcome.",
    ecosystemContext:
      "MCP is treated here as a tool and context access protocol ecosystem. The governance mapping asks what remains outside tool connectivity: authority to use a tool, evidence of legitimate use, accepted outcome, dispute, remediation, and lifecycle closure.",
    lifecycleQuestion:
      "When AI applications connect to tools and external systems through MCP, what lifecycle governance layer keeps tool access tied to authorized work and accepted outcome?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which MCP tool or resource access requires user or organizational authorization?",
      "What evidence distinguishes tool access from accepted delivery?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because tool access must be wrapped with context boundaries, authorization, allowed action scope, evidence capture, rollback, and remediation logic.",
    protocolPath:
      "MPLP and MCP answer different lifecycle questions in this site architecture. MCP connects AI applications to external systems; MPLP is one protocol path for lifecycle responsibility semantics around the work that uses those connections. MPLP is not required, exclusive, certified, regulator-approved, vendor-affiliated, or already an industry standard.",
    boundary:
      "This page is independent lifecycle governance analysis. It is not official MCP documentation, affiliation, protocol scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "MCP introduction",
        url: "https://modelcontextprotocol.io/docs/getting-started/intro",
        note: "Official MCP introduction reviewed."
      },
      {
        label: "MCP architecture overview",
        url: "https://modelcontextprotocol.io/docs/learn/architecture",
        note: "Official MCP architecture documentation reviewed."
      },
      {
        label: "MCP GitHub repository",
        url: "https://github.com/modelcontextprotocol/modelcontextprotocol",
        note: "Official specification and documentation repository reviewed."
      }
    ],
    keywords: [
      "MCP governance",
      "Model Context Protocol governance",
      "tool authority boundary",
      "AI agent tool access",
      "Evidence Chain",
      "Accepted Outcome"
    ]
  },
  {
    slug: "a2a",
    name: "A2A",
    category: "Agent interoperability protocol ecosystem",
    summary:
      "A source-qualified lifecycle governance mapping for Agent2Agent protocol ecosystems, focused on inter-agent communication versus lifecycle responsibility.",
    sourceStatus:
      "Official A2A specification and A2A project GitHub sources reviewed.",
    sourceBasis:
      "R3F uses official A2A specification and project sources to establish A2A as an agent communication and interoperability protocol context. It does not treat A2A alone as lifecycle governance or compliance proof.",
    ecosystemContext:
      "A2A is treated here as an agent-to-agent communication protocol ecosystem. The governance mapping asks how discovery, delegation, task exchange, messages, artifacts, authorization, and acceptance remain tied to human or organizational responsibility.",
    lifecycleQuestion:
      "When independent agents communicate or delegate through A2A, where is lifecycle responsibility recorded and accepted?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which agent is authorized to delegate work to another agent?",
      "What artifact or message evidence supports review, dispute, remediation, and acceptance?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because inter-agent communication needs boundaries for delegation, task scope, evidence capture, return conditions, review, and closure.",
    protocolPath:
      "MPLP and A2A answer different lifecycle questions in this site architecture. A2A enables agent communication and interoperability; MPLP is one protocol path for lifecycle responsibility semantics around delegated work. MPLP is not required, exclusive, certified, regulator-approved, vendor-affiliated, or already an industry standard.",
    boundary:
      "This page is independent lifecycle governance analysis. It is not official A2A documentation, affiliation, protocol scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "A2A documentation",
        url: "https://a2a-protocol.org/",
        note: "Official A2A documentation reviewed. The public specification URL is generated from the project docs and may move."
      },
      {
        label: "A2A project GitHub",
        url: "https://github.com/a2aproject/A2A",
        note: "Official A2A project repository reviewed."
      }
    ],
    keywords: [
      "A2A governance",
      "Agent2Agent protocol governance",
      "agent interoperability governance",
      "delegated agent responsibility",
      "Authority Boundary",
      "Evidence Chain"
    ]
  },
  {
    slug: "semantic-kernel",
    name: "Semantic Kernel",
    category: "Agent framework / orchestration SDK",
    summary:
      "A source-qualified lifecycle governance mapping for Semantic Kernel agent and orchestration patterns, included because official Microsoft sources support the ecosystem context.",
    sourceStatus:
      "Official Microsoft Learn and Microsoft GitHub sources reviewed; inclusion supported.",
    sourceBasis:
      "R3F uses Microsoft Learn and Microsoft GitHub sources to establish Semantic Kernel as an AI agent and orchestration SDK context. The page does not compare Semantic Kernel against Microsoft Agent Framework, AutoGen, or other frameworks.",
    ecosystemContext:
      "Semantic Kernel is treated here as an agent and orchestration SDK context. The lifecycle governance question is how plugins, agent interactions, process orchestration, tool calls, filters, observability, human input, and accepted outcome remain tied to responsibility records.",
    lifecycleQuestion:
      "When an agent framework connects models, plugins, functions, and agents, what lifecycle records preserve authority, evidence, review, and accepted outcome?",
    lifecycleQuestions: [
      ...commonLifecycleQuestions,
      "Which plugin or function calls are allowed under the approved work scope?",
      "What filter, observability, or review evidence is sufficient for acceptance and remediation?"
    ],
    relatedMros: commonMros,
    rccsAlcsRelevance: commonRccsAlcs,
    harnessRelevance:
      "Harness Engineering is relevant because SDK-level orchestration needs surrounding policy, context boundaries, tool-call authority, evidence capture, review gates, and closure records.",
    protocolPath: commonProtocolPath,
    boundary:
      "This page is independent lifecycle governance analysis. It is not Microsoft documentation, Microsoft affiliation, framework scoring, legal advice, certification, legal compliance proof, or procurement guidance.",
    officialSources: [
      {
        label: "Semantic Kernel overview",
        url: "https://learn.microsoft.com/en-us/semantic-kernel/overview/",
        note: "Official Microsoft Learn overview reviewed."
      },
      {
        label: "Semantic Kernel Agent Framework",
        url: "https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/",
        note: "Official Microsoft Learn agent framework documentation reviewed."
      },
      {
        label: "Semantic Kernel GitHub repository",
        url: "https://github.com/microsoft/semantic-kernel",
        note: "Official Microsoft GitHub repository reviewed."
      }
    ],
    keywords: [
      "Semantic Kernel governance",
      "Semantic Kernel agent framework",
      "AI agent orchestration governance",
      "plugin authority boundary",
      "RCCS-M",
      "ALCS"
    ]
  }
];

export const officialSourceStatusChecks = [
  { status: 200, url: "https://code.claude.com/docs/en/overview" },
  { status: 200, url: "https://www.claude.com/product/claude-code" },
  { status: 200, url: "https://qwen.readthedocs.io/en/latest/" },
  { status: 200, url: "https://github.com/QwenLM/Qwen3" },
  { status: 200, url: "https://cursor.com/docs" },
  { status: 200, url: "https://docs.cursor.com/en/chat/agent" },
  { status: 200, url: "https://docs.cursor.com/background-agents" },
  { status: 200, url: "https://docs.cursor.com/en/cli/using" },
  { status: 200, url: "https://microsoft.github.io/autogen/stable/" },
  { status: 200, url: "https://github.com/microsoft/autogen" },
  { status: 200, url: "https://modelcontextprotocol.io/docs/getting-started/intro" },
  { status: 200, url: "https://modelcontextprotocol.io/docs/learn/architecture" },
  { status: 200, url: "https://github.com/modelcontextprotocol/modelcontextprotocol" },
  { status: 200, url: "https://a2a-protocol.org/" },
  { status: 200, url: "https://github.com/a2aproject/A2A" },
  { status: 200, url: "https://learn.microsoft.com/en-us/semantic-kernel/overview/" },
  { status: 200, url: "https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/" },
  { status: 200, url: "https://github.com/microsoft/semantic-kernel" }
];

export function getExtendedEcosystemBySlug(slug: string) {
  return extendedEcosystems.find((ecosystem) => ecosystem.slug === slug);
}
