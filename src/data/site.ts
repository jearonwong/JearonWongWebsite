export const siteConfig = {
  title: "Jearon Wang",
  description: "Defining how AI agents reliably deliver real work.",
  siteUrl: "https://jearonwong.com",
  thesis: "Defining how AI agents reliably deliver real work.", // Canonical Thesis
  author: {
    name: "Jearon Wang",
    role: "Protocol Architect for the Agent Era", // Canonical Role Line
    bio: "Writing and building at the intersection of Protocol Engineering, Agent Governance, and AI-native software delivery."
  }
};

export const primaryNav = [
  { href: "/essays/", label: "Essays" },
  { href: "/theories/", label: "Ideas" },
  { href: "/playbooks/", label: "Playbooks" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" }
];

export const secondaryNav = [
  { href: "/governance/", label: "Governance" },
  { href: "/newsletter/", label: "Newsletter" },
  { href: "/contact/", label: "Contact" },
  { href: "/rss.xml", label: "RSS" }
];

export const theoryClusters = [
  {
    slug: "reliable-ai-agent-work-delivery",
    name: "Reliable AI Agent Work Delivery",
    description: "The core gap between experimental agent runs and production reliability.",
    prompt: "What must exist for an agent to be trusted out-of-loop?"
  },
  {
    slug: "protocol-engineering",
    name: "Protocol Engineering",
    description: "Systems thinking applied to autonomous workflows.",
    prompt: "How do we structurally bound cognitive drift?"
  },
  {
    slug: "agent-governance",
    name: "Agent Governance",
    description: "Frameworks for observability, auditability, and validation.",
    prompt: "Who signs off on the agent's definition of done?"
  }
];

export const projects = [
  {
    name: "MPLP",
    status: "Protocol",
    summary: "Open lifecycle protocol for AI agent systems.",
    proof: "Defines the protocol vocabulary for context, planning, confirmation, trace, and evidence."
  },
  {
    name: "Cognitive OS",
    status: "Runtime",
    summary: "Runtime substrate for protocol-aware agent work.",
    proof: "Shows how runtime state and operating constraints enforce reliable delivery."
  },
  {
    name: "SoloCrew",
    status: "Implementation",
    summary: "Personal AI operating loop and product projection.",
    proof: "Applies protocol and runtime ideas to one-person-company AI work."
  },
  {
    name: "Validation Lab",
    status: "Audit",
    summary: "Evidence-based evaluation surface for lifecycle guarantees.",
    proof: "Evaluates lifecycle guarantees with evidence rather than claims."
  }
];

export const aboutSpecs = [
  {
    label: "ROLE_LINE",
    value: "Protocol Architect for the Agent Era"
  },
  {
    label: "THESIS_LINE",
    value: "Defining how AI agents reliably deliver real work."
  },
  {
    label: "CATEGORY",
    value: "AI systems thinker / protocol architect / founder-editorial voice"
  },
  {
    label: "PROOF_CHAIN",
    value: "MPLP / Cognitive OS / SoloCrew / Validation Lab"
  }
];

export const governanceModules = [
  {
    id: "agent-governance",
    label: "AGENT_GOVERNANCE",
    title: "Agent governance sets the binding conditions for autonomous work.",
    body:
      "Governance defines how agents are constrained, how state changes are reviewed, and how delivery remains auditable when execution is delegated."
  },
  {
    id: "auditability",
    label: "AUDITABILITY",
    title: "Evidence matters more than abstract safety language.",
    body:
      "Reliable systems must produce traceable artifacts: what changed, who approved it, and what evidence supports the claim of completion."
  },
  {
    id: "human-oversight",
    label: "HUMAN_OVERSIGHT",
    title: "The human stays in the loop as architect, reviewer, and escalation boundary.",
    body:
      "Governance is not anti-agent. It is the structure that makes delegation legible and keeps authority aligned with responsibility."
  }
];

export const playbookModules = [
  {
    id: "remote-truth-first",
    label: "REMOTE_TRUTH_FIRST",
    title: "Begin with repo truth before touching implementation.",
    body:
      "Verify branch, remote, current HEAD, and acceptance gates before an agent starts coding. The working environment is part of the protocol."
  },
  {
    id: "three-repo-flow",
    label: "THREE_REPO_FLOW",
    title: "Separate experiment, delivery, and reference surfaces.",
    body:
      "Use bounded working trees so proof, risk, and release discipline stay understandable instead of collapsing into one vague task surface."
  },
  {
    id: "verification-discipline",
    label: "VERIFICATION_DISCIPLINE",
    title: "Build, typecheck, lint, audit, and remote equality are part of the work.",
    body:
      "Agent output is not done when the code exists. It is done when truth, verification, and delivery closure agree."
  }
];
