export type DefinitionSection = "thesis" | "governance" | "architecture" | "corrections";

export interface DefinitionEntry {
  slug: string;
  term: string;
  section: DefinitionSection;
  definition: string;
  distinction: string;
  evidence: { label: string; href: string }[];
  related: { label: string; href: string }[];
}

export const definitions: DefinitionEntry[] = [
  // 01_CORE_THESIS
  {
    slug: "ai-agent-lifecycle",
    term: "AI Agent Lifecycle",
    section: "thesis",
    definition:
      "AI Agent Lifecycle defines the accountable lifecycle of agent work from intent to accepted outcome.",
    distinction:
      "Not a deployment lifecycle, runtime state lifecycle, manifest lifecycle, or workflow lifecycle. Those systems may be useful. They do not define the accountable lifecycle of agent work.",
    evidence: [
      { label: "Lifecycle field analysis", href: "/lifecycle/" },
      { label: "Origin essay", href: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/" }
    ],
    related: [
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "MPLP", href: "#mplp" },
      { label: "Concepts: AI Agent Lifecycle", href: "/concepts/ai-agent-lifecycle/" }
    ]
  },
  {
    slug: "agentic-delivery",
    term: "Agentic Delivery",
    section: "thesis",
    definition:
      "Agentic Delivery names the missing layer between agent execution and accountable outcomes.",
    distinction:
      "Not prompt engineering, context engineering, or harness engineering. Delivery means carrying human intent through context, planning, confirmation, execution, evidence, review, and accepted outcome.",
    evidence: [
      { label: "Delivery essay", href: "/essays/agentic-ai-inflection-point-project-delivery/" },
      { label: "Concepts: Agentic Delivery", href: "/concepts/agentic-delivery/" }
    ],
    related: [
      { label: "AI Agent Lifecycle", href: "#ai-agent-lifecycle" },
      { label: "Delivery Standard", href: "#delivery-standard" },
      { label: "MPLP", href: "#mplp" }
    ]
  },
  {
    slug: "execution-is-not-delivery",
    term: "Execution is not Delivery",
    section: "thesis",
    definition:
      "Execution proves that an agent can act, while delivery proves that the work reached an accepted outcome with responsibility, evidence, and authority still attached.",
    distinction:
      "Execution is a necessary condition. It is not a sufficient condition for accountable delivery.",
    evidence: [{ label: "Lifecycle field analysis", href: "/lifecycle/" }],
    related: [
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "Accepted Outcome", href: "#accepted-outcome" },
      { label: "Accountable Delivery", href: "#accountable-delivery" }
    ]
  },
  {
    slug: "accepted-outcome",
    term: "Accepted Outcome",
    section: "thesis",
    definition:
      "An Accepted Outcome is a result that has been reviewed against original intent, constraints, and evidence, then formally accepted.",
    distinction:
      "Not task completion. Not model output. Not a passing evaluation score. Acceptance requires a review record, not merely a visible result.",
    evidence: [{ label: "Delivery Standard", href: "/delivery-standard/" }],
    related: [
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Accountable Delivery", href: "#accountable-delivery" }
    ]
  },
  {
    slug: "accountable-delivery",
    term: "Accountable Delivery",
    section: "thesis",
    definition:
      "Accountable Delivery is agent work that stays tied to intent, authority, responsibility, evidence, and review from start to accepted outcome.",
    distinction:
      "Not observable work. Not evaluatable work. Accountable delivery is work that can be traced, reviewed, disputed, and accepted.",
    evidence: [
      { label: "Lifecycle field analysis", href: "/lifecycle/" },
      { label: "Delivery essay", href: "/essays/agentic-ai-inflection-point-project-delivery/" }
    ],
    related: [
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Accepted Outcome", href: "#accepted-outcome" }
    ]
  },

  // 02_GOVERNANCE_PRIMITIVES
  {
    slug: "confirmation-boundary",
    term: "Confirmation Boundary",
    section: "governance",
    definition:
      "A Confirmation Boundary is the lifecycle point where autonomous execution becomes authorized responsibility.",
    distinction:
      "Not a UI approval button. A Confirmation Boundary defines what plan is being approved, which scope is covered, who is authorizing, and how that authorization links to the original intent and active constraints.",
    evidence: [
      {
        label: "Concepts: Confirmation Boundary",
        href: "/concepts/confirmation-boundary/"
      },
      {
        label: "Governance essay",
        href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/"
      }
    ],
    related: [
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "HITL", href: "#hitl" },
      { label: "AI Agent Governance", href: "#ai-agent-governance" }
    ]
  },
  {
    slug: "evidence-chain",
    term: "Evidence Chain",
    section: "governance",
    definition:
      "An Evidence Chain is structured proof that agent work can be reviewed, replayed, disputed, and accepted.",
    distinction:
      "Not raw logs. Not traces. An Evidence Chain is structured support for a delivery claim: artifacts that can reconstruct why the work began, what plan was approved, what happened, and why the outcome should be accepted.",
    evidence: [
      { label: "Concepts: Evidence Chain", href: "/concepts/lifecycle-evidence/" },
      { label: "Validation Lab", href: "/projects/validation-lab/" }
    ],
    related: [
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Semantic Loss", href: "#semantic-loss" },
      { label: "Accepted Outcome", href: "#accepted-outcome" }
    ]
  },
  {
    slug: "semantic-loss",
    term: "Semantic Loss",
    section: "governance",
    definition:
      "Semantic Loss is the degradation of intent, constraints, responsibility, and evidence across lifecycle handoffs.",
    distinction:
      "Not hallucination. Not context window overflow. Semantic Loss is the failure mode where meaning, authority, and constraints are silently dropped during agent work, often without any single step appearing wrong.",
    evidence: [{ label: "Lifecycle field analysis", href: "/lifecycle/" }],
    related: [
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Intent Drift", href: "#intent-drift" },
      { label: "Context Drift", href: "#context-drift" }
    ]
  },
  {
    slug: "multi-agent-lifecycle-governance",
    term: "Multi-Agent Lifecycle Governance",
    section: "governance",
    definition:
      "Multi-Agent Lifecycle Governance is the multi-agent form of Agentic Delivery: governing responsibility, authorization, evidence, and outcome acceptance across agents, roles, projects, and lifecycle stages.",
    distinction:
      "Not multi-agent coordination. Not orchestration. Multi-Agent Lifecycle Governance requires authority, evidence, and accepted outcome, not only task routing.",
    evidence: [{ label: "Lifecycle field analysis", href: "/lifecycle/" }],
    related: [
      { label: "AI Agent Governance", href: "#ai-agent-governance" },
      { label: "Lifecycle Role Decomposition", href: "#lifecycle-role-decomposition" },
      { label: "Agentic Delivery", href: "#agentic-delivery" }
    ]
  },
  {
    slug: "intent-drift",
    term: "Intent Drift",
    section: "governance",
    definition:
      "Intent Drift is the gradual separation between the original human objective and the direction an agent system actually follows.",
    distinction:
      "Not model hallucination. Not factual error. Intent Drift is a lifecycle failure where the system lacks a stable way to preserve, update, and verify intent over time.",
    evidence: [{ label: "Concepts: Intent Drift", href: "/concepts/intent-drift/" }],
    related: [
      { label: "Context Drift", href: "#context-drift" },
      { label: "Semantic Loss", href: "#semantic-loss" },
      { label: "Confirmation Boundary", href: "#confirmation-boundary" }
    ]
  },
  {
    slug: "context-drift",
    term: "Context Drift",
    section: "governance",
    definition:
      "Context Drift is the loss of fit between the context an agent uses and the actual state of the work.",
    distinction:
      "Not a context window limitation. Context Drift happens when summaries compress reasoning, old rules remain active after requirements change, or constraints are present but not weighted correctly.",
    evidence: [{ label: "Concepts: Context Drift", href: "/concepts/context-drift/" }],
    related: [
      { label: "Intent Drift", href: "#intent-drift" },
      { label: "Semantic Loss", href: "#semantic-loss" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },

  // 03_SYSTEM_ARCHITECTURE
  {
    slug: "mplp",
    term: "MPLP",
    section: "architecture",
    definition:
      "MPLP is the lifecycle protocol path for making Agentic Delivery explicit, governable, and auditable.",
    distinction:
      "MPLP does not equal Agentic Delivery. MPLP is the protocol path inside the Agentic Delivery category, not the category itself.",
    evidence: [{ label: "MPLP protocol path", href: "/projects/mplp/" }],
    related: [
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "Protocol Engineering", href: "#protocol-engineering" },
      { label: "AI Agent Lifecycle", href: "#ai-agent-lifecycle" }
    ]
  },
  {
    slug: "protocol-engineering",
    term: "Protocol Engineering",
    section: "architecture",
    definition:
      "Protocol Engineering is the discipline of making the critical states and transitions of agent work explicit enough to be implemented, checked, and shared.",
    distinction:
      "Not application logic. Not prompt rules. Not observability. Protocol Engineering defines what must be true before agents act and what must remain traceable after they act.",
    evidence: [
      { label: "Concepts: Protocol Engineering", href: "/concepts/protocol-engineering/" },
      { label: "MPLP", href: "/projects/mplp/" }
    ],
    related: [
      { label: "MPLP", href: "#mplp" },
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "lifecycle-role-decomposition",
    term: "Lifecycle Role Decomposition",
    section: "architecture",
    definition:
      "Lifecycle Role Decomposition translates human work roles into lifecycle responsibility boundaries that agent systems can execute, confirm, trace, roll back, and accept.",
    distinction:
      "Not renaming PM, Architect, Developer, Reviewer, or QA as agents. Lifecycle Role Decomposition decomposes the responsibility behind those roles into lifecycle objects so agent systems can operate them with accountability.",
    evidence: [
      {
        label: "Concepts: Lifecycle Role Decomposition",
        href: "/concepts/lifecycle-role-decomposition/"
      },
      { label: "MAS essay", href: "/essays/the-industry-misdefined-multi-agent-ai/" }
    ],
    related: [
      { label: "Lifecycle-Governed Agent Workflow", href: "#lifecycle-governed-agent-workflow" },
      { label: "Multi-Agent Systems", href: "#multi-agent-systems" },
      { label: "MPLP", href: "#mplp" }
    ]
  },
  {
    slug: "lifecycle-governed-agent-workflow",
    term: "Lifecycle-Governed Agent Workflow",
    section: "architecture",
    definition:
      "A Lifecycle-Governed Agent Workflow is a workflow model in which a human-readable work process is interpreted through lifecycle protocol and generated as a governed agent workflow.",
    distinction:
      "Not a node graph. A Lifecycle-Governed Agent Workflow carries role boundaries, confirm gates, trace obligations, rollback points, and delivery states, not only execution edges.",
    evidence: [
      {
        label: "Concepts: Lifecycle-Governed Agent Workflow",
        href: "/concepts/lifecycle-governed-agent-workflow/"
      }
    ],
    related: [
      { label: "Lifecycle Role Decomposition", href: "#lifecycle-role-decomposition" },
      { label: "MPLP", href: "#mplp" },
      { label: "Confirmation Boundary", href: "#confirmation-boundary" }
    ]
  },

  // 04_MARKET_CORRECTIONS
  {
    slug: "multi-agent-systems",
    term: "Multi-Agent Systems",
    section: "corrections",
    definition:
      "A multi-agent system is an agent architecture in which responsibility for work is separated across distinct lifecycle roles, not merely an architecture with more than one agent.",
    distinction:
      "Multi-agent is not multi-agent count. Two agents sharing a context window without responsibility separation is not a multi-agent system. It is a parallel execution pattern.",
    evidence: [
      { label: "MAS essay", href: "/essays/the-industry-misdefined-multi-agent-ai/" }
    ],
    related: [
      { label: "Lifecycle Role Decomposition", href: "#lifecycle-role-decomposition" },
      { label: "Multi-Agent Lifecycle Governance", href: "#multi-agent-lifecycle-governance" },
      { label: "Lifecycle-Governed Agent Workflow", href: "#lifecycle-governed-agent-workflow" }
    ]
  },
  {
    slug: "agent-orchestration",
    term: "Agent Orchestration",
    section: "corrections",
    definition:
      "Agent Orchestration is the coordination of multiple agents for execution, directing which agent runs next, under what conditions, and with what inputs.",
    distinction:
      "Agent Orchestration is not lifecycle governance. Orchestration coordinates execution. Governance defines authority, accountability, evidence, and accepted outcome: conditions that persist beyond any single execution run.",
    evidence: [
      {
        label: "Governance essay",
        href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/"
      }
    ],
    related: [
      { label: "AI Agent Governance", href: "#ai-agent-governance" },
      { label: "Execution is not Delivery", href: "#execution-is-not-delivery" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "hitl",
    term: "Human-in-the-Loop (HITL)",
    section: "corrections",
    definition:
      "Human-in-the-Loop (HITL) is a design pattern in which a human is positioned to observe or approve actions at one or more points in an agent workflow.",
    distinction:
      "HITL is not governance. A human can be present and still lack the information needed to authorize responsibly. Lifecycle governance requires that the human's confirmation carries explicit scope, plan context, evidence obligation, and return condition.",
    evidence: [
      { label: "Concepts: Confirmation Boundary", href: "/concepts/confirmation-boundary/" }
    ],
    related: [
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "AI Agent Governance", href: "#ai-agent-governance" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "ai-agent-governance",
    term: "AI Agent Governance",
    section: "corrections",
    definition:
      "AI Agent Governance is the set of authority, boundary, confirmation, evidence, and review conditions that make delegated agent work accountable.",
    distinction:
      "Not permission management, access control, or monitoring. Those are necessary conditions. Governance also requires lifecycle continuity: authority must attach to intent, plans must carry constraints, confirmations must be recorded, and evidence must survive after execution.",
    evidence: [
      { label: "Concepts: AI Agent Governance", href: "/concepts/ai-agent-governance/" }
    ],
    related: [
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "HITL", href: "#hitl" },
      { label: "Multi-Agent Lifecycle Governance", href: "#multi-agent-lifecycle-governance" }
    ]
  },
  {
    slug: "delivery-standard",
    term: "Delivery Standard",
    section: "corrections",
    definition:
      "The Delivery Standard is the set of conditions under which AI agent work counts as accountable delivery: scope, authority, evidence, review, and accepted outcome.",
    distinction:
      "Not an output standard. Not an evaluation score. The Delivery Standard asks whether the work can be traced from intent to accepted outcome with responsibility still attached.",
    evidence: [{ label: "The Delivery Standard", href: "/delivery-standard/" }],
    related: [
      { label: "Accepted Outcome", href: "#accepted-outcome" },
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "lifecycle-responsibility-consensus",
    term: "Lifecycle Responsibility Consensus",
    section: "governance",
    definition:
      "Lifecycle Responsibility Consensus is the orchestration-layer mechanism that aligns human intent, role authority, agent execution, evidence, review, and accepted outcome into a traceable delivery relationship.",
    distinction:
      "Lifecycle Responsibility Consensus is not ordinary agent routing, workflow continuation, or human approval. It describes how the orchestration layer aligns responsibility, execution, evidence, review, and acceptance into one traceable delivery relationship.",
    evidence: [
      { label: "Orchestration essay", href: "/essays/agent-orchestration-is-not-delivery/" },
      { label: "Delivery Standard", href: "/delivery-standard/" }
    ],
    related: [
      { label: "AI Agent Lifecycle", href: "#ai-agent-lifecycle" },
      { label: "Agentic Delivery", href: "#agentic-delivery" },
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Semantic Loss", href: "#semantic-loss" },
      { label: "Multi-Agent Lifecycle Governance", href: "#multi-agent-lifecycle-governance" },
      { label: "AI Agent Governance", href: "/ai-agent-governance/" }
    ]
  }
];

export const definitionSections: {
  id: string;
  tag: string;
  heading: string;
  section: DefinitionSection;
}[] = [
  { id: "core-thesis", tag: "01_CORE_THESIS", heading: "Core thesis", section: "thesis" },
  {
    id: "governance-primitives",
    tag: "02_GOVERNANCE_PRIMITIVES",
    heading: "Governance primitives",
    section: "governance"
  },
  {
    id: "system-architecture",
    tag: "03_SYSTEM_ARCHITECTURE",
    heading: "System architecture",
    section: "architecture"
  },
  {
    id: "market-corrections",
    tag: "04_MARKET_CORRECTIONS",
    heading: "Market corrections",
    section: "corrections"
  }
];

export function getDefinitionsBySection(section: DefinitionSection): DefinitionEntry[] {
  return definitions.filter((d) => d.section === section);
}
