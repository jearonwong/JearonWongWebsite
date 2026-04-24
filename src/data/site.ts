export const siteConfig = {
  title: "Jearon Wang",
  description: "Protocol Architect for the Agent Era. Defining how AI agents reliably deliver real work.",
  siteUrl: "https://jearonwong.com",
  socialImagePath: "/social-card.svg",
  thesis: "Defining how AI agents reliably deliver real work.", // Canonical Thesis
  author: {
    name: "Jearon Wang",
    role: "Protocol Architect for the Agent Era", // Canonical Role Line
    bio: "Writing and building at the intersection of Protocol Engineering, Agent Governance, and AI-native software delivery."
  }
};

export const homepageActions = {
  thesis: {
    href: "/essays/from-prompt-engineering-to-protocol-engineering/",
    label: "Read the Thesis"
  },
  projects: {
    href: "/projects/",
    label: "Explore Projects"
  },
  ideas: {
    href: "/theories/",
    label: "Open the ideas registry"
  },
  essays: {
    href: "/essays/",
    label: "Open the writing log"
  },
  proof: {
    href: "/projects/",
    label: "Open the proof room"
  },
  startHere: {
    href: "/essays/from-prompt-engineering-to-protocol-engineering/",
    label: "Start with the flagship essay"
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

export const pageRegistry = {
  about: {
    title: "Jearon Wang",
    subtitle: "Protocol Architect for the Agent Era",
    objectType: "PAGE_ROLE",
    objectValue: "IDENTITY SHEET",
    lead: "A concise identity sheet for the thesis, category, and proof chain behind this site."
  },
  projects: {
    title: "Projects",
    objectType: "PAGE_ROLE",
    objectValue: "EVIDENCE LEDGER",
    lead: "The public proof chain. Start with the thesis, then use this room to inspect how each proof object carries a different architectural claim."
  },
  ideas: {
    title: "Ideas",
    objectType: "PAGE_ROLE",
    objectValue: "CONCEPTUAL BLUEPRINT",
    lead: "The conceptual library behind reliable AI agent work delivery, Protocol Engineering, and Agent Governance. Use it as a map, then move into the flagship essay and proof pages."
  },
  ideasLegacy: {
    title: "Ideas",
    objectType: "ROUTE_STATE",
    objectValue: "LEGACY COMPATIBILITY",
    lead: "The canonical ideas route is /theories. This compatibility page remains only so older links still have a clear destination."
  },
  essays: {
    title: "Essays",
    objectType: "PAGE_ROLE",
    objectValue: "REGISTRY LOGBOOK",
    lead: "A chronological registry of arguments, architectural decisions, and public thesis development."
  },
  governance: {
    title: "Governance",
    objectType: "PAGE_ROLE",
    objectValue: "SYSTEM APPENDIX",
    lead: "The governance appendix describes the binding conditions for auditable autonomous work."
  },
  playbooks: {
    title: "Playbooks",
    objectType: "PAGE_ROLE",
    objectValue: "METHODS APPENDIX",
    lead: "Repeatable methods for directing, verifying, and closing AI agent work."
  },
  contact: {
    title: "Contact",
    objectType: "PAGE_ROLE",
    objectValue: "QUIET ENDPOINT",
    lead: "For direct conversations about Protocol Engineering, agent governance, proof systems, or collaboration."
  },
  newsletter: {
    title: "Newsletter",
    objectType: "PAGE_ROLE",
    objectValue: "SUBSCRIPTION PATH",
    lead: "A future stream for essays, field notes, protocol updates, and proof-chain progress."
  }
};

export const theoryClusters = [
  {
    slug: "reliable-ai-agent-work-delivery",
    name: "Reliable AI Agent Work Delivery",
    description: "The core gap between experimental agent runs and production reliability.",
    prompt: "What must exist for an agent to be trusted out-of-loop?",
    essayPath: "/essays/interface-as-institutional-memory/",
    essayLabel: "Read the harness essay"
  },
  {
    slug: "protocol-engineering",
    name: "Protocol Engineering",
    description: "Systems thinking applied to autonomous workflows.",
    prompt: "How do we structurally bound cognitive drift?",
    essayPath: "/essays/from-prompt-engineering-to-protocol-engineering/",
    essayLabel: "Start with the flagship essay"
  },
  {
    slug: "agent-governance",
    name: "Agent Governance",
    description: "Frameworks for observability, auditability, and validation.",
    prompt: "Who signs off on the agent's definition of done?",
    essayPath: "/essays/governance-before-growth/",
    essayLabel: "Read the evidence essay"
  }
];

export function getTheoryClusterName(slug: string) {
  return theoryClusters.find((cluster) => cluster.slug === slug)?.name ?? slug;
}

export const projects = [
  {
    name: "MPLP",
    slug: "mplp",
    status: "Protocol",
    summary: "Open lifecycle protocol for AI agent systems.",
    proof: "Defines the protocol vocabulary for context, planning, confirmation, trace, and evidence.",
    proofRole: "PROTOCOL LAYER",
    whatItIs:
      "MPLP is an open lifecycle protocol for agent systems. It gives teams a shared vocabulary for context, plan, confirm, trace, governance, and evidence.",
    problem:
      "Most agent systems still move from prompt to output without a disciplined way to describe lifecycle state, handoff boundaries, or completion artifacts.",
    proves:
      "MPLP proves that reliable work delivery needs a protocol layer, not just a better prompt layer. Without a lifecycle grammar, governance and traceability stay vague.",
    shareDescription:
      "MPLP is the protocol-layer proof surface in the thesis chain. It shows why reliable AI work needs a lifecycle vocabulary for context, planning, confirmation, trace, governance, and evidence.",
    relatedIdeas: ["protocol-engineering", "agent-governance"],
    adjacentProofs: ["cognitive-os", "validation-lab"]
  },
  {
    name: "Cognitive OS",
    slug: "cognitive-os",
    status: "Runtime",
    summary: "Runtime substrate for protocol-aware agent work.",
    proof: "Shows how runtime state and operating constraints enforce reliable delivery.",
    proofRole: "RUNTIME SUBSTRATE",
    whatItIs:
      "Cognitive OS is the runtime-state-first substrate for protocol-aware work. It focuses on the operating surface where delegated work is actually executed.",
    problem:
      "A protocol vocabulary alone does not keep agent work reliable if runtime state, permissions, and working conditions are still implicit or weakly controlled.",
    proves:
      "Cognitive OS proves that reliable delivery needs a runtime substrate that enforces conditions, not just a conceptual model that describes them.",
    shareDescription:
      "Cognitive OS is the runtime-substrate proof surface in the thesis chain. It shows how state, permissions, and operating constraints make protocol-aware work real.",
    relatedIdeas: ["reliable-ai-agent-work-delivery", "protocol-engineering"],
    adjacentProofs: ["mplp", "solocrew"]
  },
  {
    name: "SoloCrew",
    slug: "solocrew",
    status: "Implementation",
    summary: "Personal AI operating loop and product projection.",
    proof: "Applies protocol and runtime ideas to one-person-company AI work.",
    proofRole: "APPLICATION PROJECTION",
    whatItIs:
      "SoloCrew is the application-facing projection of the protocol/runtime thesis into one-person-company AI work.",
    problem:
      "Systems ideas can remain abstract unless they show up inside a real operating loop that someone can use, inspect, and iterate on day to day.",
    proves:
      "SoloCrew proves that protocol-aware work can move from theory into a concrete product/application surface without collapsing back into generic AI tooling.",
    shareDescription:
      "SoloCrew is the application-projection proof surface in the thesis chain. It shows how protocol and runtime ideas become a concrete operating loop rather than a generic AI tool.",
    relatedIdeas: ["reliable-ai-agent-work-delivery", "protocol-engineering"],
    adjacentProofs: ["cognitive-os", "validation-lab"]
  },
  {
    name: "Validation Lab",
    slug: "validation-lab",
    status: "Audit",
    summary: "Evidence-based evaluation surface for lifecycle guarantees.",
    proof: "Evaluates lifecycle guarantees with evidence rather than claims.",
    proofRole: "EVIDENCE SURFACE",
    whatItIs:
      "Validation Lab is the evaluation and adjudication surface for lifecycle guarantees. It is where claims about reliability are tested against evidence.",
    problem:
      "Agent systems often make large claims about governance, reliability, or safety without offering a visible surface for checking what evidence supports those claims.",
    proves:
      "Validation Lab proves that reliable work delivery ultimately needs evidence surfaces, not just architectural language. Proof must be inspectable.",
    shareDescription:
      "Validation Lab is the evidence-surface proof page in the thesis chain. It shows why lifecycle claims need inspectable evidence instead of abstract assurance language.",
    relatedIdeas: ["agent-governance", "reliable-ai-agent-work-delivery"],
    adjacentProofs: ["mplp", "solocrew"]
  }
];

export const proofGraphOrder = ["mplp", "cognitive-os", "solocrew", "validation-lab"] as const;

export function getProjectByName(name: string) {
  return projects.find((project) => project.name === name);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectGraphPosition(slug: string) {
  const index = proofGraphOrder.indexOf(slug as (typeof proofGraphOrder)[number]);
  const previousSlug = index > 0 ? proofGraphOrder[index - 1] : null;
  const nextSlug = index >= 0 && index < proofGraphOrder.length - 1 ? proofGraphOrder[index + 1] : null;

  return {
    index,
    previous: previousSlug ? getProjectBySlug(previousSlug) : null,
    next: nextSlug ? getProjectBySlug(nextSlug) : null
  };
}

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
