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
    slug: "audit-evidence-chain",
    term: "Audit Evidence Chain",
    section: "governance",
    definition:
      "An Audit Evidence Chain is a responsibility-linked evidence chain for agentic work that connects authority, role, tool action, evidence, outcome, exception, privacy treatment, and remediation closure.",
    distinction:
      "Not raw logs, traces, screenshots, or observability alone. The Agentic AI Auditability & Assurance White Paper 2026 treats audit evidence chains as lifecycle evidence architecture, not as an audit standard or assurance opinion.",
    evidence: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026: logs are not audit evidence chains",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#4-why-logs-are-not-audit-evidence-chains"
      }
    ],
    related: [
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Agentic Audit Object", href: "#agentic-audit-object" },
      { label: "Agentic AI Auditability", href: "#agentic-ai-auditability" }
    ]
  },
  {
    slug: "agentic-ai-auditability",
    term: "Agentic AI Auditability",
    section: "governance",
    definition:
      "Agentic AI Auditability is the ability to reconstruct, test, and evidence agentic lifecycle work across authority, responsibility, tools, outcomes, exceptions, privacy treatment, and closure.",
    distinction:
      "Not certification, an audit standard, legal compliance proof, assurance opinion, or vendor ranking. It is the auditability and assurance white paper's public research edition framing.",
    evidence: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026 hub",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/"
      },
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026 executive thesis",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#executive-thesis"
      }
    ],
    related: [
      { label: "Audit Evidence Chain", href: "#audit-evidence-chain" },
      { label: "AARM", href: "#aarm" },
      { label: "AI Agent Governance", href: "#ai-agent-governance" }
    ]
  },
  {
    slug: "agentic-audit-object",
    term: "Agentic Audit Object",
    section: "governance",
    definition:
      "An Agentic Audit Object is a proposed review object for agentic work that makes delegated lifecycle activity inspectable through authority, role, tool, evidence, outcome, exception, privacy, and closure fields.",
    distinction:
      "Not a legal liability object, certification criterion, mandatory implementation schema, or audit-procedure template.",
    evidence: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026: Agentic Audit Object model",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#agentic-audit-object-overview"
      }
    ],
    related: [
      { label: "Agentic AI Auditability", href: "#agentic-ai-auditability" },
      { label: "Audit Evidence Chain", href: "#audit-evidence-chain" },
      { label: "Lifecycle Responsibility Objects", href: "/concepts/lifecycle-responsibility-objects/" }
    ]
  },
  {
    slug: "aarm",
    term: "Agentic Auditability Readiness Model (AARM)",
    section: "governance",
    definition:
      "AARM is the Agentic Auditability Readiness Model from the Agentic AI Auditability & Assurance White Paper 2026, describing L0-L5 readiness states for lifecycle evidence, audit evidence chains, and assurance-planning discussion.",
    distinction:
      "Not a score, benchmark, certification, assurance result, legal compliance proof, procurement tool, or vendor comparison.",
    evidence: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026: Agentic Auditability Readiness Model",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html#13-agentic-auditability-readiness-model"
      }
    ],
    related: [
      { label: "Agentic AI Auditability", href: "#agentic-ai-auditability" },
      { label: "Audit Evidence Chain", href: "#audit-evidence-chain" },
      { label: "MRO", href: "/concepts/missing-regulatory-objects/" }
    ]
  },
  {
    slug: "agentic-ai-insurability",
    term: "Agentic AI Insurability",
    section: "governance",
    definition:
      "Agentic AI Insurability is the ability to describe agentic work through lifecycle evidence, responsibility mapping, bounded risk objects, and claim-reviewable records for risk-transfer discussion.",
    distinction:
      "Not insurance advice, a coverage opinion, insurer acceptance, coverage-ready status, underwriting-ready status, certification, or a guarantee that any system is insurable.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Agentic Insurability Objects", href: "#agentic-insurability-objects" },
      { label: "Agentic Insurability Reasoning Model", href: "#agentic-insurability-reasoning-model" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "agentic-insurability-objects",
    term: "Agentic Insurability Objects (AIO)",
    section: "governance",
    definition:
      "Agentic Insurability Objects are analytical objects from the Agentic AI Insurability & Risk Transfer White Paper 2026 that separate insured legal subject, agentic risk object, authority, responsibility, evidence, loss reconstruction, dependency, aggregation, and dispute-readiness questions.",
    distinction:
      "Not insurer product requirements, policy terms, legal liability objects, certification criteria, or a mandatory implementation schema.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Agentic AI Insurability", href: "#agentic-ai-insurability" },
      { label: "Insured Legal Subject", href: "#insured-legal-subject" },
      { label: "Agentic Risk Object", href: "#agentic-risk-object" }
    ]
  },
  {
    slug: "agentic-insurability-reasoning-model",
    term: "Agentic Insurability Reasoning Model (AIRM)",
    section: "governance",
    definition:
      "AIRM is the Agentic Insurability Reasoning Model from the Agentic AI Insurability & Risk Transfer White Paper 2026, a non-scoring vocabulary for evidence visibility, claims review, underwriting discussion, and dispute readiness.",
    distinction:
      "Not an actuarial score, insurer acceptance, coverage guarantee, underwriting standard, claims approval guide, certification, vendor score, or procurement benchmark.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Agentic AI Insurability", href: "#agentic-ai-insurability" },
      { label: "Agentic Insurability Objects", href: "#agentic-insurability-objects" },
      { label: "Claim Evidence Chain", href: "#claim-evidence-chain" }
    ]
  },
  {
    slug: "insured-legal-subject",
    term: "Insured Legal Subject",
    section: "governance",
    definition:
      "An Insured Legal Subject is the person or organization whose risk-transfer relationship must remain separate from the agentic system, work unit, tool, model, or workflow being analyzed.",
    distinction:
      "Not a liability determination, coverage opinion, insured-status opinion, or conclusion that a policy applies.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Agentic Risk Object", href: "#agentic-risk-object" },
      { label: "Agentic AI Insurability", href: "#agentic-ai-insurability" },
      { label: "Authority Boundary", href: "/concepts/authority-boundary/" }
    ]
  },
  {
    slug: "agentic-risk-object",
    term: "Agentic Risk Object",
    section: "governance",
    definition:
      "An Agentic Risk Object is the bounded agentic work unit, action path, dependency, evidence chain, or loss-relevant lifecycle object being evaluated for risk-transfer analysis.",
    distinction:
      "Not the insured party, not a legal subject, not a standalone coverage trigger, and not a claim that a system is insurable.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Insured Legal Subject", href: "#insured-legal-subject" },
      { label: "Agentic Insurability Objects", href: "#agentic-insurability-objects" },
      { label: "Evidence Chain", href: "#evidence-chain" }
    ]
  },
  {
    slug: "claim-evidence-chain",
    term: "Claim Evidence Chain",
    section: "governance",
    definition:
      "A Claim Evidence Chain is the lifecycle evidence needed to reconstruct authority, action, loss event, dependency, remediation, dispute posture, and boundary risk for claim review.",
    distinction:
      "Not claims approval guidance, a payment guarantee, legal causation proof, settlement advice, or an insurer-required form.",
    evidence: [
      {
        label: "Agentic AI Insurability & Risk Transfer White Paper 2026",
        href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/"
      }
    ],
    related: [
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "Agentic AI Insurability", href: "#agentic-ai-insurability" },
      { label: "Agentic Insurability Reasoning Model", href: "#agentic-insurability-reasoning-model" }
    ]
  },
  {
    slug: "lifecycle-responsibility-linked-agent-work",
    term: "Lifecycle-Responsibility-Linked Agent Work",
    section: "governance",
    definition:
      "Lifecycle-responsibility-linked agent work is agent work whose intent, authority, responsibility, tool actions, evidence, review, accepted outcome, exception handling, and closure remain connected.",
    distinction:
      "Not task completion, autonomous execution, generic observability, or a claim that a system is audit-ready by default.",
    evidence: [
      {
        label: "Agentic AI Auditability & Assurance White Paper 2026 hub",
        href: "/research/agentic-ai-auditability-assurance-white-paper-2026/"
      },
      {
        label: "Agentic Lifecycle Governance concept core",
        href: "/concepts/agentic-lifecycle-governance/"
      }
    ],
    related: [
      { label: "Agentic AI Auditability", href: "#agentic-ai-auditability" },
      { label: "Evidence Chain", href: "#evidence-chain" },
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
    evidence: [
      { label: "Concepts: Intent Drift", href: "/concepts/intent-drift/" },
      {
        label: "Intent Drift essay",
        href: "/essays/defining-intent-drift-in-agentic-workflows/"
      }
    ],
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
      { label: "Governance: AI Agent Governance", href: "/governance/ai-agent-governance/" },
      { label: "Concept bridge: AI Agent Governance", href: "/concepts/ai-agent-governance/" }
    ],
    related: [
      { label: "Confirmation Boundary", href: "#confirmation-boundary" },
      { label: "Evidence Chain", href: "#evidence-chain" },
      { label: "HITL", href: "#hitl" },
      { label: "Multi-Agent Lifecycle Governance", href: "#multi-agent-lifecycle-governance" },
      { label: "Agentic Lifecycle Governance", href: "/concepts/agentic-lifecycle-governance/" }
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
      { label: "AI Agent Governance mapping", href: "/governance/ai-agent-governance/" }
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
