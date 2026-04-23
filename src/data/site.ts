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
  { href: "/essays", label: "Essays" },
  { href: "/theories", label: "Ideas" }, // Internal is theories, visible label is Ideas
  { href: "/playbooks", label: "Playbooks" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export const secondaryNav = [
  { href: "/governance", label: "Governance" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/contact", label: "Contact" }
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
    summary: "Machine Priority Legibility Protocol. A specification for making autonomous work auditable.",
    proof: "Defines the protocol level of reliable agent work."
  },
  {
    name: "Cognitive OS",
    status: "Runtime",
    summary: "The execution layer implementing the MPLP specification for agent workloads.",
    proof: "Demonstrates runtime protocol enforcement."
  },
  {
    name: "SoloCrew",
    status: "Implementation",
    summary: "A concrete engineering apparatus delivering reliable task orchestration.",
    proof: "Shows practical application of the cognitive runtime."
  },
  {
    name: "Validation Lab",
    status: "Audit",
    summary: "A secure sandbox and matrix for automated regression and capability verification.",
    proof: "Proves that the system is governable."
  }
];
