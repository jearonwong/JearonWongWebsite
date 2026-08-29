/**
 * Controlled public taxonomy for essays and semantic navigation.
 *
 * Tags are navigation labels, not a keyword dump. Keep the vocabulary small,
 * stable, and mappable to a canonical site surface.
 */
export const controlledTaxonomy = {
  field: [
    "AI Agent Lifecycle",
    "Agentic Delivery",
    "Lifecycle Governance",
    "Multi-Agent Systems",
    "Protocol Engineering"
  ],
  problem: [
    "Intent Drift",
    "Context Drift",
    "Semantic Loss",
    "Accepted Outcome",
    "Evidence Chain",
    "Authority Boundary",
    "Auditability"
  ],
  method: [
    "Agentic Workflows",
    "Harness Engineering",
    "Deterministic Delivery",
    "Agent Accountability",
    "Lifecycle Role Decomposition"
  ],
  system: [
    "MPLP",
    "Cognitive OS",
    "SoloCrew",
    "Validation Lab"
  ]
} as const;

export type ControlledTag =
  (typeof controlledTaxonomy)[keyof typeof controlledTaxonomy][number];

export const controlledTags = Object.values(controlledTaxonomy).flat() as ControlledTag[];

/** Historical labels are accepted only as migration aliases, never emitted. */
export const taxonomyAliases: Record<string, ControlledTag> = {
  Lifecycle: "AI Agent Lifecycle",
  "AI Governance": "Lifecycle Governance",
  "AI Agent Governance": "Lifecycle Governance",
  "AI Agent Lifecycle Governance": "Lifecycle Governance",
  "AI Agents": "Agentic Workflows",
  "Agentic AI": "Agentic Workflows",
  "Agent Workflow": "Agentic Workflows",
  "Runtime Governance": "Lifecycle Governance",
  "Enterprise AI": "Agentic Delivery",
  "Enterprise AI Governance": "Lifecycle Governance",
  "AI Assurance": "Auditability",
  "AI Auditability": "Auditability",
  "Agentic Audit Object": "Auditability",
  AARM: "Auditability",
  Insurability: "Auditability",
  MRO: "Lifecycle Governance",
  "RCCS-T": "Lifecycle Governance",
  "RCCS-M": "Lifecycle Governance",
  ALCS: "Lifecycle Governance",
  "Global AI Compliance White Paper": "Lifecycle Governance",
  "Agent Orchestration": "Agentic Workflows",
  "Lifecycle Responsibility Consensus": "Accepted Outcome",
  "Delivery Standard": "Deterministic Delivery",
  "Bidirectional Responsibility Mapping": "Agent Accountability",
  "Semantic Consensus": "Agent Accountability",
  "Intent Delta": "Intent Drift"
};

export const taxonomyRouteByTag: Record<ControlledTag, string> = {
  "AI Agent Lifecycle": "/lifecycle/",
  "Agentic Delivery": "/concepts/agentic-delivery/",
  "Lifecycle Governance": "/concepts/agentic-lifecycle-governance/",
  "Multi-Agent Systems": "/concepts/lifecycle-role-decomposition/",
  "Protocol Engineering": "/concepts/protocol-engineering/",
  "Intent Drift": "/concepts/intent-drift/",
  "Context Drift": "/concepts/context-drift/",
  "Semantic Loss": "/concepts/context-drift/",
  "Accepted Outcome": "/concepts/accepted-outcome/",
  "Evidence Chain": "/concepts/lifecycle-evidence/",
  "Authority Boundary": "/concepts/authority-boundary/",
  Auditability: "/research/agentic-ai-auditability-assurance-white-paper-2026/",
  "Agentic Workflows": "/concepts/lifecycle-governed-agent-workflow/",
  "Harness Engineering": "/playbooks/harness-engineering-for-ai-agents/",
  "Deterministic Delivery": "/concepts/deterministic-delivery/",
  "Agent Accountability": "/concepts/accepted-outcome/",
  "Lifecycle Role Decomposition": "/concepts/lifecycle-role-decomposition/",
  MPLP: "/projects/mplp/",
  "Cognitive OS": "/projects/cognitive-os/",
  SoloCrew: "/projects/solocrew/",
  "Validation Lab": "/projects/validation-lab/"
};

export function isControlledTag(value: string): value is ControlledTag {
  return controlledTags.includes(value as ControlledTag);
}
