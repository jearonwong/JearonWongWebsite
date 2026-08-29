export type ExtendedEcosystemSource = {
  label: string;
  url: string;
  note: string;
  authority: ExtendedEcosystemSourceAuthority;
};

export type ExtendedEcosystemSourceAuthority =
  | "official-primary-source"
  | "official-guidance"
  | "authored-research";

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
  sourceRefs: ExtendedEcosystemSource[];
  contentRole: "ecosystem-mapping";
  canonicalRoute: string;
  canonicalParent: string;
  primaryAudience: string[];
  publishedAt?: string;
  updatedAt?: string;
  indexability: "index" | "noindex";
  distinctiveQuestion: string;
  scenario: string;
  mappingFocus: string;
  decisionArtifact: string;
  inputs: string[];
  outputs: string[];
  failureModes: string[];
  evidenceRequired: string[];
  relatedLinks: Array<{ href: string; label: string }>;
  keywords: string[];
};

type ExtendedEcosystemSourceDraft = Omit<ExtendedEcosystemSource, "authority"> & {
  authority?: ExtendedEcosystemSourceAuthority;
};

type ExtendedEcosystemRecordDraft = Omit<
  ExtendedEcosystemRecord,
  | "officialSources"
  | "sourceRefs"
  | "contentRole"
  | "canonicalRoute"
  | "canonicalParent"
  | "primaryAudience"
  | "publishedAt"
  | "updatedAt"
  | "indexability"
  | "distinctiveQuestion"
  | "scenario"
  | "mappingFocus"
  | "decisionArtifact"
  | "inputs"
  | "outputs"
  | "failureModes"
  | "evidenceRequired"
  | "relatedLinks"
> & {
  officialSources: ExtendedEcosystemSourceDraft[];
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

const ecosystemRelatedLinksBySlug: Record<string, Array<{ href: string; label: string }>> = {
  "claude-code": [
    { href: "/playbooks/ai-coding-agent-auditability/", label: "AI Coding Agent Auditability" },
    { href: "/projects/cognitive-os/", label: "Cognitive OS runtime path" },
    { href: "/concepts/deterministic-delivery/", label: "Deterministic Delivery" }
  ],
  qwen: [
    { href: "/governance/vendor-runtime-substitution-conformance/", label: "Vendor and Runtime Substitution Conformance" },
    { href: "/research/global-ai-compliance-white-paper-2026/systems/", label: "GAIC-cited Systems" },
    { href: "/concepts/lifecycle-evidence/", label: "Lifecycle Evidence" }
  ],
  "cursor-ai-coding-agents": [
    { href: "/playbooks/ai-coding-agent-auditability/", label: "AI Coding Agent Auditability" },
    { href: "/projects/mplp/", label: "MPLP protocol path" },
    { href: "/concepts/accepted-outcome/", label: "Accepted Outcome" }
  ],
  autogen: [
    { href: "/governance/multi-agent-system-governance/", label: "Multi-Agent System Governance" },
    { href: "/playbooks/human-role-to-mas-responsibility/", label: "Human Role to MAS Responsibility" }
  ],
  mcp: [
    { href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/", label: "MCP and A2A lifecycle essay" },
    { href: "/concepts/lifecycle-governed-agent-workflow/", label: "Lifecycle-Governed Agent Workflow" },
    { href: "/research/global-ai-compliance-white-paper-2026/systems/", label: "GAIC-cited Systems" }
  ],
  a2a: [
    { href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/", label: "MCP and A2A lifecycle essay" },
    { href: "/governance/multi-agent-system-governance/", label: "Multi-Agent System Governance" },
    { href: "/concepts/lifecycle-role-decomposition/", label: "Lifecycle Role Decomposition" }
  ],
  "semantic-kernel": [
    { href: "/playbooks/harness-engineering-for-ai-agents/", label: "Harness Engineering" },
    { href: "/concepts/configurable-agent-governance/", label: "Configurable Agent Governance" },
    { href: "/research/global-ai-compliance-white-paper-2026/systems/", label: "GAIC-cited Systems" }
  ]
};

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

const extendedEcosystemRecords: ExtendedEcosystemRecordDraft[] = [
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

type ExtendedEcosystemSpecifics = {
  primaryAudience: string[];
  distinctiveQuestion: string;
  scenario: string;
  mappingFocus: string;
  decisionArtifact: string;
  inputs: string[];
  outputs: string[];
  failureModes: string[];
  evidenceRequired: string[];
  indexability?: "index" | "noindex";
  publishedAt?: string;
  updatedAt?: string;
};

/**
 * These fields are deliberately kept per ecosystem. The shared lifecycle
 * vocabulary is the lens; the scenario, decision artifact, and evidence
 * boundary are what make each mapping useful as its own reading destination.
 */
const ecosystemSpecifics: Record<string, ExtendedEcosystemSpecifics> = {
  "claude-code": {
    primaryAudience: ["Engineering leads using coding agents", "Repository owners and reviewers"],
    distinctiveQuestion:
      "Can a repository owner reconstruct which coding-agent action crossed the task boundary and who accepted the resulting change?",
    scenario:
      "A coding session edits files, runs commands, and proposes a diff across a repository. Review must separate authorized actions from incidental changes before the work is accepted.",
    mappingFocus:
      "The useful unit here is the repository change, not the assistant conversation. A reviewer should be able to inspect the task scope, the command boundary, the files touched, and the checks that support acceptance. The mapping therefore treats an agent session as a governed change packet with a beginning, a bounded action set, and an explicit handoff. If a command changes state outside the diff, that side effect belongs in the evidence chain even when the final patch looks clean.",
    decisionArtifact:
      "Repository change packet: scoped task, command ledger, diff, verification result, reviewer decision, and rollback pointer.",
    inputs: ["Repository scope and task intent", "Allowed command and tool boundary", "Diff and verification plan"],
    outputs: ["Scoped change record", "Command and evidence ledger", "Acceptance or rollback decision"],
    failureModes: [
      "A clean diff hides unapproved command side effects",
      "A chat transcript is mistaken for execution evidence",
      "A reviewer accepts the artifact without recording responsibility"
    ],
    evidenceRequired: [
      "Task and repository scope",
      "Commands and tool actions",
      "Diff, tests, and review decision",
      "Rollback or remediation record"
    ]
  },
  qwen: {
    primaryAudience: ["Model platform owners", "Teams designing model substitution controls"],
    distinctiveQuestion:
      "When a Qwen model or endpoint changes, can the workflow preserve output provenance and the accepted outcome that followed?",
    scenario:
      "A model endpoint is substituted during an agent workflow. The team needs to distinguish the model response from the work product that a responsible role reviewed and accepted.",
    mappingFocus:
      "The mapping separates model identity from responsibility for the resulting work. A model response can be useful evidence, but it is not by itself an accepted outcome. The important comparison is between the approved intent before substitution and the reviewable output after substitution. Recording the endpoint, context, tool permissions, and acceptance decision makes a later replay possible without turning model choice into a product ranking.",
    decisionArtifact:
      "Model substitution record: model and endpoint identity, approved change scope, affected intent, output provenance, and acceptance decision.",
    inputs: ["Model and endpoint identity", "Substitution reason and authority", "Prompt, tool, and output context"],
    outputs: ["Substitution lineage", "Output provenance record", "Review, rollback, or remediation decision"],
    failureModes: [
      "A model identifier is stored without the task or authority context",
      "Model output is treated as the accepted deliverable",
      "A substitution cannot be replayed when the endpoint changes again"
    ],
    evidenceRequired: [
      "Model and endpoint version reference",
      "Substitution authorization",
      "Input and output provenance",
      "Accepted outcome and follow-up state"
    ]
  },
  "cursor-ai-coding-agents": {
    primaryAudience: ["Engineering leads using interactive or background agents", "Release and repository reviewers"],
    distinctiveQuestion:
      "Can a reviewer tie an interactive or background coding-agent run to one workspace boundary, one change set, and one accepted outcome?",
    scenario:
      "An agent works in an editor, CLI, or background workspace and returns a change later. The handoff must show where it ran, what it changed, and which checks made acceptance possible.",
    mappingFocus:
      "Interactive and background modes create different handoff conditions. The mapping treats workspace identity and branch state as first-class evidence because a delayed result can otherwise arrive detached from the repository that authorized it. Tests and build output establish verification, while a human or accountable role still records acceptance. This keeps an autonomous run from being confused with a release decision and leaves a recovery path when the handoff is rejected.",
    decisionArtifact:
      "Agent handoff record: workspace or branch boundary, task plan, change set, verification evidence, reviewer decision, and recovery path.",
    inputs: ["Workspace, branch, or handoff boundary", "Task plan and change constraints", "Test, lint, and build expectations"],
    outputs: ["Traceable handoff", "Evidence-linked change set", "Accepted, rejected, or rollback state"],
    failureModes: [
      "Background work arrives without a durable workspace boundary",
      "A successful check is treated as human acceptance",
      "Handoff loses the context needed to reproduce or reverse the change"
    ],
    evidenceRequired: [
      "Workspace or branch identity",
      "Plan and diff",
      "Test, lint, and build outputs",
      "Reviewer acceptance and recovery path"
    ]
  },
  autogen: {
    // Retain the route for existing references, but keep it out of the
    // indexable registry while its framework-level scope overlaps the A2A
    // interoperability mapping and the general multi-agent playbook.
    indexability: "noindex",
    primaryAudience: ["Multi-agent application architects", "Workflow and operations owners"],
    distinctiveQuestion:
      "When agents delegate and terminate work, which role owns the handoff, the evidence, and the accepted outcome?",
    scenario:
      "Several agents exchange messages and tools calls before one agent reports completion. The workflow needs a responsibility record that outlives the conversation and identifies who may accept or reopen the result.",
    mappingFocus:
      "The key boundary in a multi-agent application is delegation, not message volume. A conversation may show what agents said, yet still leave unclear who had authority to assign the work, who could terminate it, and which role could accept the artifact. This mapping follows the role graph and the termination reason through closure. It treats the final response as a handoff signal that requires an acceptance record, rather than as proof that responsibility has ended. The review should distinguish a planner assigning work, a worker invoking a tool, a critic returning a correction, and an orchestrator deciding that the run is finished. Those transitions are different evidence events even when they share one transcript. A useful closure record names the delegated scope, records whether termination was normal or exceptional, and preserves the route for a human owner to reopen the result. Reviewers can then compare planned delegation with actual message topology, identify an agent that acted outside its role, and decide whether an apparently complete conversation needs escalation. This is the specific gap the mapping addresses in framework-level multi-agent conversations: orchestration can coordinate a task, but it cannot silently become the accepting authority.",
    decisionArtifact:
      "Delegation closure record: role graph, delegated scope, message and tool evidence, termination reason, acceptance owner, and remediation state.",
    inputs: ["Agent roles and delegation authority", "Task and termination conditions", "Inter-agent messages, artifacts, and tool evidence"],
    outputs: ["Role-linked delegation trail", "Termination classification", "Accepted outcome or escalation record"],
    failureModes: [
      "The last speaking agent is assumed to own the result",
      "Message history cannot distinguish delegation from authorization",
      "Termination is recorded without an acceptance or remediation owner"
    ],
    evidenceRequired: [
      "Role and delegation scope",
      "Message and artifact lineage",
      "Termination or escalation reason",
      "Human or organizational acceptance record"
    ]
  },
  mcp: {
    primaryAudience: ["Tool and platform integrators", "Security and workflow owners"],
    distinctiveQuestion:
      "When MCP exposes a tool or resource, what separate record proves that its use was authorized for the work and led to an accepted outcome?",
    scenario:
      "An AI application invokes an external tool through MCP. Connectivity succeeds, but the workflow still needs to show authority, action scope, evidence, and the outcome a responsible person accepted.",
    mappingFocus:
      "MCP answers how an application reaches a tool or resource; it does not answer whether a particular action belongs to the approved work. The mapping keeps those questions separate. It asks for an authorization scope before invocation, records the side effect that actually occurred, and links that effect to an accepted outcome or remediation path. This distinction matters most when a read, write, or external mutation is hidden behind an apparently successful tool call.",
    decisionArtifact:
      "Tool-use responsibility record: tool or resource identity, authorization scope, invocation evidence, side-effect status, and accepted outcome.",
    inputs: ["Tool or resource identity", "Authorized action scope", "Invocation context and side-effect expectations"],
    outputs: ["Authorization-linked tool trace", "Side-effect and evidence record", "Acceptance or remediation decision"],
    failureModes: [
      "A successful connection is mistaken for permission to perform the action",
      "Tool output is retained without the input authority boundary",
      "A side effect cannot be linked to rollback or accepted outcome"
    ],
    evidenceRequired: [
      "Tool and resource identity",
      "Authorization and action scope",
      "Invocation and side-effect evidence",
      "Outcome acceptance or remediation closure"
    ]
  },
  a2a: {
    primaryAudience: ["Interoperability architects", "Owners of delegated agent workflows"],
    distinctiveQuestion:
      "When one agent hands work to another through A2A, can the receiving agent's result be accepted without losing the original responsibility boundary?",
    scenario:
      "Independent agents discover one another, exchange a task, and return an artifact. The handoff must preserve delegation authority, artifact lineage, review state, and the right to dispute or remediate.",
    mappingFocus:
      "Interoperability makes handoffs easier, but it can also make ownership ambiguous. The mapping follows the original delegating role across discovery, task exchange, artifact return, and acceptance. It does not treat an agent card, capability description, or successful response as authorization. The durable record is the cross-agent handoff: who delegated, what was in scope, what came back, and which role could accept, dispute, or reopen it. A reviewer should also preserve the protocol-level identity used for discovery, the task state transitions, and the artifact reference returned by the remote agent. Streaming updates, asynchronous completion, and retries can each change what a human thinks has been delivered. Recording those transitions lets the owner distinguish a capability advertisement from a performed action and a returned artifact from an accepted result. This is why the A2A mapping centers on handoff lineage rather than treating interoperability as a substitute for lifecycle responsibility.",
    decisionArtifact:
      "Cross-agent handoff record: delegating role, receiving role, task scope, artifact lineage, return condition, and acceptance or dispute state.",
    inputs: ["Delegation authority and task scope", "Agent identity and capability context", "Artifacts, messages, and return conditions"],
    outputs: ["Cross-agent responsibility chain", "Artifact and message lineage", "Acceptance, dispute, or remediation state"],
    failureModes: [
      "Discovery is treated as authorization to delegate consequential work",
      "The returned artifact loses the original task and owner context",
      "A receiving agent reports completion with no acceptance boundary"
    ],
    evidenceRequired: [
      "Delegating and receiving agent identity",
      "Task scope and authorization",
      "Artifact and message lineage",
      "Return, acceptance, or dispute record"
    ]
  },
  "semantic-kernel": {
    primaryAudience: ["Enterprise AI platform architects", "Developers composing plugins and agent processes"],
    distinctiveQuestion:
      "When plugins, functions, and agents are composed in one process, which execution boundary keeps authority and acceptance attached to the work?",
    scenario:
      "A process coordinates model calls, plugins, filters, and human input. The orchestration graph is useful only when each consequential function call can be traced to approved scope and a final acceptance decision.",
    mappingFocus:
      "An orchestration SDK can make a process legible without making it accountable. This mapping therefore follows the function and plugin calls that can change the work, then checks where filters, human input, and observability sit in relation to authority. The process record should explain not only that a step ran, but why it was allowed and how its result entered the accepted outcome. That gives enterprise reviewers a bounded execution view without claiming a framework certification.",
    decisionArtifact:
      "Process execution record: orchestration graph, plugin and function calls, filter or human checkpoints, evidence, and closure decision.",
    inputs: ["Process and agent role definition", "Plugin and function authority scope", "Filter, observability, and human-review conditions"],
    outputs: ["Function-level execution lineage", "Checkpoint and evidence record", "Accepted outcome or remediation closure"],
    failureModes: [
      "A plugin call is hidden inside an otherwise successful process",
      "Observability records execution without proving authority",
      "Human input is collected but not connected to acceptance or closure"
    ],
    evidenceRequired: [
      "Process and role graph",
      "Plugin and function invocation trace",
      "Filter or human checkpoint evidence",
      "Acceptance and remediation closure"
    ]
  }
};

const authoredLifecycleSource: ExtendedEcosystemSource = {
  label: "Global AI Compliance White Paper 2026",
  url: "/research/global-ai-compliance-white-paper-2026/",
  note:
    "Author research source for the lifecycle responsibility vocabulary used by this mapping. It is a public research edition, not a standard or certification.",
  authority: "authored-research"
};

function normalizeSource(source: ExtendedEcosystemSourceDraft): ExtendedEcosystemSource {
  return {
    ...source,
    authority: source.authority ?? "official-primary-source"
  };
}

export const extendedEcosystems: ExtendedEcosystemRecord[] = extendedEcosystemRecords.map((record) => {
  const specifics = ecosystemSpecifics[record.slug];
  if (!specifics) {
    throw new Error(`Missing extended ecosystem publication metadata: ${record.slug}`);
  }

  const officialSources = record.officialSources.map(normalizeSource);
  const sourceRefs = [authoredLifecycleSource, ...officialSources];

  return {
    ...record,
    ...specifics,
    officialSources,
    sourceRefs,
    relatedLinks: ecosystemRelatedLinksBySlug[record.slug] ?? [],
    contentRole: "ecosystem-mapping",
    canonicalRoute: `${extendedEcosystemIndexPath}${record.slug}/`,
    canonicalParent: extendedEcosystemIndexPath,
    indexability: specifics.indexability ?? "index"
  };
});

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
