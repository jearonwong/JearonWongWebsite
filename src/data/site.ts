export const siteConfig = {
  title: "Jearon Wong",
  description: "Architecting production-grade AI agent systems through protocol, runtime, and product work.",
  siteUrl: "https://www.jearonwong.com",
  socialImagePath: "/social/jearonwong-og.png",
  xHandle: "@jearonwong",
  thesis: "Defining reliable delivery for AI agents.", // v1.0 Primary Headline
  supportLine: "While the industry optimizes prompts and contexts, I build protocols, runtime concepts, and products that make agent work plannable, verifiable, and governable.",
  newsletterEndpoint: "https://buttondown.com/api/emails/embed-subscribe/jearonwong",
  author: {
    name: "Jearon Wong",
    role: "Protocol Architect for the Agent Era", // Secondary role descriptor
    bio: "Writing and building at the intersection of Protocol Engineering, Agent Governance, and AI-native software delivery.",
    image: "/images/jearon-wong-avatar.jpg",
    email: "contact@jearonwong.com"
  }
};

export const socialLinks = [
  { platform: "GitHub", href: "https://github.com/Coregentis", label: "github.com/Coregentis" },
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/jearonwong/", label: "linkedin.com/in/jearonwong" },
  { platform: "X", href: "https://x.com/jearonwong", label: "x.com/jearonwong" },
  { platform: "Medium", href: "https://medium.com/@jearonwong", label: "medium.com/@jearonwong" }
];

export const siteThesis = {
  universalProblem:
    "AI agents are learning to act, but cannot yet reliably deliver accountable work.",
  conceptDefinition:
    "Agentic Delivery is the shift from task execution to reliable project delivery across a lifecycle.",
  technicalGap:
    "MCP connects tools. A2A connects agents. The missing layer is lifecycle governance.",
  stackProof: [
    { name: "MPLP", role: "Protocol Layer" },
    { name: "Cognitive OS", role: "Runtime Foundation" },
    { name: "SoloCrew", role: "Product Proof" },
    { name: "Validation Lab", role: "Evidence Surface" }
  ]
};

export const aiAgentLifecycleColumn = {
  categoryTitle: "AI Agent Lifecycle Protocol",
  seriesTitle: "Defining the AI Agent Lifecycle",
  title: "Defining the AI Agent Lifecycle",
  subtitle:
    "From execution frameworks to auditable, accountable, insurable, and task-completable agent systems.",
  categoryStatement:
    "AI Agent Lifecycle Protocol is the missing category between agent execution and accountable project delivery.",
  purpose:
    "This series defines AI Agent Lifecycle as the missing system boundary behind Agentic Delivery: the continuity of agent identity, role, activation, responsibility, state, evidence, learning, and task progress across activations, processes, projects, and cross-project environments.",
  relationToAgenticDelivery:
    "Agentic Delivery names the shift. AI Agent Lifecycle explains the system boundary. Multi-Agent Lifecycle Protocol (MPLP) defines the protocol layer.",
  categoryBridge:
    "Agent frameworks solve execution. Communication protocols solve connection. Observability tools solve visibility. MPLP defines the lifecycle layer.",
  href: "/lifecycle/",
  publicationRule:
    "Articles in this series are published one at a time after careful refinement. The series is not a content calendar dump.",
  preludeEssays: [
    {
      slug: "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      role: "Lifecycle governance gap / technical prelude"
    },
    {
      slug: "agentic-ai-inflection-point-project-delivery",
      role: "Agentic Delivery / project delivery prelude"
    }
  ],
  nextEssay: {
    title: "Agent Frameworks Manage Execution. They Don't Manage Lifecycle.",
    status: "in development"
  },
  previewLayers: [
    "Agent Activation Lifecycle",
    "Engineering / Process Lifecycle",
    "Project Lifecycle",
    "Enterprise Cross-Project Lifecycle"
  ],
  lifecycleLayers: [
    {
      name: "Agent Activation Lifecycle",
      description:
        "The continuity of a single agent's activation, context loading, tool use, state update, suspension, resumption, and evidence record."
    },
    {
      name: "Engineering / Process Lifecycle",
      description:
        "The continuity of intent intake, requirement clarification, planning, confirmation, execution, verification, change, review, and learning."
    },
    {
      name: "Project Lifecycle",
      description:
        "The continuity of a project as a living objective: state, constraints, agents, humans, plans, decisions, traces, outcomes, and recovery."
    },
    {
      name: "Enterprise Cross-Project Lifecycle",
      description:
        "The continuity of shared roles, activation boundaries, evidence ownership, audit chains, and responsibility across multiple projects or departments."
    }
  ],
  productionGuarantees: [
    {
      name: "Auditability",
      description:
        "The lifecycle can reconstruct what happened, under which context, plan, confirmation, role, and evidence trail."
    },
    {
      name: "Accountability",
      description:
        "Failures can be attributed to the right lifecycle boundary instead of being reduced to a generic AI error."
    },
    {
      name: "Insurability",
      description:
        "Insurability means the lifecycle produces enough evidence, risk boundaries, responsibility assignment, and adjudication records for risk systems to assess the work."
    },
    {
      name: "Task Completability",
      description:
        "The work has conditions for planning, confirmation, tracing, recovery, acceptance, and learning instead of ending at raw output."
    }
  ]
};

export const contentRouteRoles = {
  homepage: {
    question: "What is the thesis?",
    job: "State the problem, define the concept, and route into stack proof."
  },
  essays: {
    question: "Why is the thesis true?",
    job: "Develop the public arguments behind Agentic Delivery and lifecycle governance."
  },
  ideas: {
    question: "What concepts make the thesis legible?",
    job: "Define the conceptual map behind reliable AI agent work delivery."
  },
  projects: {
    question: "What proves the thesis?",
    job: "Show the proof surfaces that make the thesis buildable."
  },
  governance: {
    question: "What conditions make agent work accountable?",
    job: "Explain the binding conditions for lifecycle authority, evidence, and oversight."
  },
  playbooks: {
    question: "How do you operate according to the thesis?",
    job: "Translate Agentic Delivery into repeatable operating methods."
  },
  about: {
    question: "Who is maintaining this thesis and stack?",
    job: "Anchor the maintainer to the thesis, terminology, and proof stack."
  },
  newsletter: {
    question: "What ongoing signal will readers receive?",
    job: "State the publication promise for essays, frameworks, and proof updates."
  },
  contact: {
    question: "How can someone reach the maintainer?",
    job: "Provide a quiet endpoint for direct conversations."
  }
};

export const contentUpdateProtocol = {
  whenNewFlagshipEssay: {
    update: [
      "homepage reading path",
      "ideas concept mapping",
      "governance modules when authority, risk, or accountability changes",
      "playbooks when the essay introduces a method, test, or checklist",
      "newsletter promise when the topic stream changes",
      "projects when proof framing changes"
    ]
  },
  whenNewProjectOrProjectShift: {
    update: [
      "projects data",
      "homepage stack map if the change is major",
      "proof graph order if a role changes",
      "related ideas",
      "newsletter description if public updates become relevant"
    ]
  },
  whenHomepageThesisChanges: {
    update: [
      "pageRegistry leads",
      "about narrative",
      "ideas guidance",
      "governance lead and modules",
      "playbooks lead and modules",
      "newsletter promise"
    ]
  }
};

export const homepageActions = {
  thesis: {
    href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
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
  lifecycle: {
    href: "/lifecycle/",
    label: "Open the Lifecycle Protocol entry"
  },
  startHere: {
    href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    label: "Start with the flagship essay"
  }
};

export const homepageContent = {
  hero: {
    hookLines: [
      "AI agents are learning",
      "to act. They still cannot",
      "reliably deliver",
      "accountable work."
    ],
    technicalHookLines: [
      "MCP connects tools. A2A connects agents.",
      "Who governs the lifecycle?"
    ],
    concept:
      "Agentic Delivery is the shift from task execution to reliable project delivery across a lifecycle.",
    authorAnchor: "Jearon Wong",
    role: "Architecting production-grade AI agent systems.",
    support:
      "I turn that thesis into protocol, runtime, product, and evidence surfaces: MPLP, Cognitive OS, SoloCrew, and Validation Lab."
  },
  coreThesis: {
    eyebrow: "CORE_THESIS",
    title: "From execution to delivery.",
    execution:
      "Most agent systems optimize execution: prompts, tool calls, workflow runs, traces, and evaluations.",
    delivery:
      "My work starts from delivery: how AI agents carry real work from human intent to accepted outcome across a project lifecycle.",
    taskAgentLabel: "Task Agent",
    taskAgentFlow: ["Prompt", "Tool call", "Output"],
    agenticDeliveryLabel: "Agentic Delivery",
    agenticDeliveryFlow: ["Intent", "Context", "Plan", "Confirm", "Execute", "Evidence", "Accepted Outcome"]
  },
  stackMap: {
    headline: "The Stack Behind Agentic Delivery",
    summary:
      "Agentic Delivery is not one product. It is a stack: protocol, runtime, product proof, and evidence.",
    core: {
      label: "CORE THESIS",
      title: "Project lifecycle, not isolated execution",
      description: "Agentic AI must move from task execution to project delivery."
    },
    layers: [
      {
        projectSlug: "mplp",
        verb: "Defines",
        description: "Defines the lifecycle language."
      },
      {
        projectSlug: "cognitive-os",
        verb: "Runs",
        description:
          "Turns lifecycle semantics into runtime state, memory, evidence, and orchestration."
      },
      {
        projectSlug: "solocrew",
        verb: "Proves",
        description: "Applies the stack to one-person company work."
      },
      {
        projectSlug: "validation-lab",
        verb: "Verifies",
        description: "Verifies lifecycle evidence and adjudication."
      }
    ],
    closingLine: "MPLP defines it. Cognitive OS runs it. SoloCrew proves it. Validation Lab verifies it."
  },
  readingPath: [
    {
      slug: "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      note: "Protocol-stack gap: tool access and agent coordination still need lifecycle delivery."
    },
    {
      slug: "agentic-ai-inflection-point-project-delivery",
      note: "Core thesis: Agentic Delivery is the next layer after task execution."
    }
  ]
};

export const primaryNav = [
  { href: "/theories/", label: "Ideas" },
  { href: "/lifecycle/", label: "Lifecycle" },
  { href: "/essays/", label: "Essays" },
  { href: "/projects/", label: "Projects" },
  { href: "/governance/", label: "Governance" },
  { href: "/playbooks/", label: "Playbooks" },
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
    title: "Jearon Wong",
    subtitle: "Protocol Architect for the Agent Era",
    objectType: "PAGE_ROLE",
    objectValue: "IDENTITY SHEET",
    lead: "A concise identity sheet for the thesis, category, and stack proof behind this site."
  },
  projects: {
    title: "Projects",
    objectType: "PAGE_ROLE",
    objectValue: "EVIDENCE LEDGER",
    lead: "The public proof surfaces. Start with the thesis, then use this room to inspect how each proof object carries a different architectural claim."
  },
  ideas: {
    title: "Ideas",
    objectType: "PAGE_ROLE",
    objectValue: "CONCEPTUAL BLUEPRINT",
    lead: "A conceptual map for Agentic Delivery: the shift from task execution toward lifecycle-governed, accountable work."
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
    lead: "The public arguments behind Agentic Delivery, lifecycle governance, and the stack proof."
  },
  lifecycle: {
    title: "AI Agent Lifecycle Protocol",
    subtitle: "Defining the AI Agent Lifecycle",
    objectType: "CATEGORY_ENTRY",
    objectValue: "PROTOCOL LAYER",
    lead: "The category entry for the missing lifecycle layer between agent execution and accountable project delivery."
  },
  governance: {
    title: "Governance",
    objectType: "PAGE_ROLE",
    objectValue: "SYSTEM APPENDIX",
    lead: "The binding conditions that make delegated agent work accountable across a lifecycle."
  },
  playbooks: {
    title: "Playbooks",
    objectType: "PAGE_ROLE",
    objectValue: "METHODS APPENDIX",
    lead: "Repeatable methods for turning Agentic Delivery from a thesis into an operating discipline."
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
    lead: "A low-noise stream on Agentic Delivery, lifecycle governance, and protocol-grade AI agent systems."
  }
};

export const theoryClusters = [
  {
    slug: "ai-agent-lifecycle",
    name: "AI Agent Lifecycle Protocol",
    description:
      "The protocol category behind Agentic Delivery: defining lifecycle continuity across activation, process, project, and enterprise cross-project responsibility.",
    prompt: "What must stay continuous for agent work to become auditable, accountable, insurable, and task-completable?",
    essayPath: "/lifecycle/",
    essayLabel: "Open the category entry",
    proofPath: "/projects/mplp/",
    proofLabel: "Open the protocol proof"
  },
  {
    slug: "agentic-delivery",
    name: "Agentic Delivery",
    description: "The shift from isolated task execution to reliable project delivery across a lifecycle.",
    prompt: "Can the system carry work from human intent to accepted outcome?",
    essayPath: "/essays/agentic-ai-inflection-point-project-delivery/",
    essayLabel: "Read the project delivery essay",
    proofPath: "/projects/",
    proofLabel: "Inspect the stack proof"
  },
  {
    slug: "project-lifecycle-vs-task-execution",
    name: "Project Lifecycle vs Task Execution",
    description: "The distinction between completing a run and preserving intent, constraints, evidence, and acceptance over time.",
    prompt: "Is the system optimizing the run, or preserving the work?",
    essayPath: "/essays/agentic-ai-inflection-point-project-delivery/",
    essayLabel: "Read the lifecycle argument",
    proofPath: "/projects/cognitive-os/",
    proofLabel: "Open the runtime proof"
  },
  {
    slug: "protocol-engineering",
    name: "Protocol Engineering",
    description: "A systems discipline for making intent, plans, confirmations, traces, and evidence explicit.",
    prompt: "What must be represented before agents are allowed to act?",
    essayPath: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    essayLabel: "Start with the lifecycle governance essay",
    proofPath: "/projects/mplp/",
    proofLabel: "Open the protocol proof"
  },
  {
    slug: "lifecycle-governance",
    name: "Lifecycle Governance",
    description: "The missing layer above tool access and agent coordination: authority, constraints, confirmation, trace, and closure.",
    prompt: "Who governs the lifecycle before, during, and after agent action?",
    essayPath: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    essayLabel: "Read the governance essay",
    proofPath: "/projects/mplp/",
    proofLabel: "Open MPLP"
  },
  {
    slug: "evidence-accepted-outcome",
    name: "Evidence / Accepted Outcome",
    description: "A delivery claim is not complete until evidence can be inspected and the outcome can be accepted against intent.",
    prompt: "What proves that the work stayed legitimate and finished correctly?",
    essayPath: "/essays/agentic-ai-inflection-point-project-delivery/",
    essayLabel: "Read the delivery essay",
    proofPath: "/projects/validation-lab/",
    proofLabel: "Open the evidence surface"
  },
  {
    slug: "accountable-work",
    name: "Accountable Work",
    description: "Work that remains tied to intent, authority, responsibility, evidence, and review instead of ending as an unaudited output.",
    prompt: "Can someone reconstruct why the agent acted and why the result should be trusted?",
    essayPath: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    essayLabel: "Read the accountability argument",
    proofPath: "/projects/solocrew/",
    proofLabel: "Open the product proof"
  }
];

export const theoryClusterAliases: Record<string, string> = {
  "reliable-ai-agent-work-delivery": "Agentic Delivery",
  "agent-governance": "Lifecycle Governance"
};

export function getTheoryClusterName(slug: string) {
  return theoryClusters.find((cluster) => cluster.slug === slug)?.name ?? theoryClusterAliases[slug] ?? slug;
}

export const projects = [
  {
    name: "MPLP",
    slug: "mplp",
    status: "Protocol",
    summary: "Vendor-neutral lifecycle protocol for AI agent systems.",
    proof: "Defines the protocol vocabulary for context, planning, confirmation, trace, and evidence.",
    proofRole: "PROTOCOL LAYER",
    whatItIs:
      "MPLP is a vendor-neutral lifecycle protocol for AI agent systems. It gives teams a shared vocabulary for context, plan, confirm, trace, governance, and evidence.",
    problem:
      "Most agent systems still move from prompt to output without a disciplined way to describe lifecycle state, handoff boundaries, or completion artifacts.",
    proves:
      "MPLP proves that reliable work delivery needs a protocol layer, not just a better prompt layer. Without a lifecycle grammar, governance and traceability stay vague.",
    shareDescription:
      "MPLP is the protocol-layer proof surface in the thesis chain. It shows why reliable AI work needs a lifecycle vocabulary for context, planning, confirmation, trace, governance, and evidence.",
    relatedIdeas: ["protocol-engineering", "lifecycle-governance", "accountable-work"],
    relatedEssays: [
      {
        href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
        label: "MCP/A2A lifecycle governance essay"
      }
    ],
    adjacentProofs: ["cognitive-os", "validation-lab"],
    evidence: {
      repo: "https://github.com/Coregentis/MPLP-Protocol",
      repoLabel: "MPLP-Protocol",
      website: "https://www.mplp.io",
      docs: "https://docs.mplp.io"
    }
  },
  {
    name: "Cognitive OS",
    slug: "cognitive-os",
    status: "Runtime",
    summary: "Runtime foundation for protocol-aware agent work.",
    proof: "Shows how runtime state and operating constraints enforce reliable delivery.",
    proofRole: "RUNTIME FOUNDATION",
    whatItIs:
      "Cognitive OS is the runtime foundation for protocol-aware work. It focuses on the operating surface where delegated work is actually executed.",
    problem:
      "A protocol vocabulary alone does not keep agent work reliable if runtime state, permissions, and working conditions are still implicit or weakly controlled.",
    proves:
      "Cognitive OS proves that reliable delivery needs a runtime foundation that enforces conditions, not just a conceptual model that describes them.",
    shareDescription:
      "Cognitive OS is the runtime-foundation proof surface in the thesis chain. It shows how state, permissions, and operating constraints make protocol-aware work real.",
    relatedIdeas: ["agentic-delivery", "project-lifecycle-vs-task-execution", "protocol-engineering"],
    relatedEssays: [
      {
        href: "/essays/agentic-ai-inflection-point-project-delivery/",
        label: "Agentic Delivery project lifecycle essay"
      }
    ],
    adjacentProofs: ["mplp", "solocrew"],
    evidence: {
      repo: "https://github.com/Coregentis/Cognitive_OS",
      repoLabel: "Cognitive_OS"
    }
  },
  {
    name: "SoloCrew",
    slug: "solocrew",
    status: "Product",
    summary: "Personal AI operating loop and product proof.",
    proof: "Applies protocol and runtime ideas to one-person-company AI work.",
    proofRole: "PRODUCT PROOF",
    whatItIs:
      "SoloCrew is the product proof of the protocol/runtime thesis in one-person-company AI work.",
    problem:
      "Systems ideas can remain abstract unless they show up inside a real operating loop that someone can use, inspect, and iterate on day to day.",
    proves:
      "SoloCrew proves that protocol-aware work can move from theory into a concrete product/application surface without collapsing back into generic AI tooling.",
    shareDescription:
      "SoloCrew is the product-proof surface in the thesis chain. It shows how protocol and runtime ideas become a concrete operating loop rather than a generic AI tool.",
    relatedIdeas: ["agentic-delivery", "accountable-work", "protocol-engineering"],
    relatedEssays: [
      {
        href: "/essays/agentic-ai-inflection-point-project-delivery/",
        label: "Agentic Delivery project lifecycle essay"
      }
    ],
    adjacentProofs: ["cognitive-os", "validation-lab"],
    evidence: {
      repo: "https://github.com/Coregentis/SoloCrew",
      repoLabel: "SoloCrew"
    }
  },
  {
    name: "Validation Lab",
    slug: "validation-lab",
    status: "Evidence",
    summary: "Evidence-based evaluation surface for lifecycle guarantees.",
    proof: "Evaluates lifecycle guarantees with evidence rather than claims.",
    proofRole: "EVIDENCE SURFACE",
    whatItIs:
      "Validation Lab is the evaluation and adjudication surface for lifecycle guarantees. It is where claims about reliability are tested against evidence.",
    problem:
      "Agent systems often make large claims about governance, reliability, or safety without offering a visible surface for checking what evidence supports those claims.",
    proves:
      "Validation Lab verifies that reliable work delivery ultimately needs evidence surfaces, not just architectural language. Proof must be inspectable.",
    shareDescription:
      "Validation Lab is the evidence-surface proof page in the thesis chain. It shows why lifecycle claims need inspectable evidence instead of abstract assurance language.",
    relatedIdeas: ["lifecycle-governance", "evidence-accepted-outcome", "accountable-work"],
    relatedEssays: [
      {
        href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
        label: "Lifecycle governance essay"
      },
      {
        href: "/essays/agentic-ai-inflection-point-project-delivery/",
        label: "Agentic Delivery project lifecycle essay"
      }
    ],
    adjacentProofs: ["mplp", "solocrew"],
    evidence: {
      repo: "https://github.com/Coregentis/MPLP-Validation-Lab",
      repoLabel: "MPLP-Validation-Lab",
      website: "https://lab.mplp.io"
    }
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
    label: "STACK_PROOF",
    value: "MPLP / Cognitive OS / SoloCrew / Validation Lab"
  }
];

export const governanceModules = [
  {
    id: "lifecycle-authority",
    label: "LIFECYCLE_AUTHORITY",
    title: "Authority must travel with the work, not disappear after the prompt.",
    body:
      "A lifecycle-governed agent system preserves who authorized the work, under what intent, with which constraints, and how those conditions remain visible as execution moves across tools or agents.",
    relatedConcept: "Lifecycle Governance",
    relatedEssay: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/"
  },
  {
    id: "confirmation-boundary",
    label: "CONFIRMATION_BOUNDARY",
    title: "A confirmation boundary turns permission into governable authorization.",
    body:
      "Before consequential action, the system should know what plan is being approved, which scope is covered, what remains out of bounds, and how that approval links back to the originating intent.",
    relatedConcept: "Protocol Engineering",
    relatedEssay: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/"
  },
  {
    id: "auditability",
    label: "AUDITABILITY",
    title: "Auditability means the delivery path can be reconstructed.",
    body:
      "Reliable agent work should leave structured artifacts for intent, plan, confirmation, trace, evidence, review, and acceptance instead of relying on a loose pile of logs.",
    relatedConcept: "Evidence / Accepted Outcome",
    relatedEssay: "/essays/agentic-ai-inflection-point-project-delivery/"
  },
  {
    id: "evidence-chain",
    label: "EVIDENCE_CHAIN",
    title: "Evidence has to survive execution.",
    body:
      "A claim of completion is weak unless the supporting evidence remains inspectable after the run: what changed, why it changed, who approved it, and what proves the outcome satisfies the original intent.",
    relatedConcept: "Accountable Work",
    relatedEssay: "/essays/agentic-ai-inflection-point-project-delivery/"
  },
  {
    id: "human-oversight",
    label: "HUMAN_AUTHORITY_BOUNDARY",
    title: "Human oversight is an authority boundary, not a decorative checkpoint.",
    body:
      "The human stays in the loop as architect, reviewer, and escalation boundary where intent, risk, or acceptance cannot be safely delegated.",
    relatedConcept: "Lifecycle Governance",
    relatedEssay: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/"
  },
  {
    id: "accepted-outcome",
    label: "ACCEPTED_OUTCOME",
    title: "The endpoint is accepted outcome, not output generation.",
    body:
      "Agent work is accountable when the result can be reviewed against intent, constraints, evidence, and delivery criteria. Output alone is not closure.",
    relatedConcept: "Evidence / Accepted Outcome",
    relatedEssay: "/essays/agentic-ai-inflection-point-project-delivery/"
  }
];

export const playbookModules = [
  {
    id: "agentic-delivery-test",
    label: "AGENTIC_DELIVERY_TEST",
    title: "Ask whether the system can explain the path from intent to accepted outcome.",
    body:
      "A production-grade agent system should be able to explain original intent, active constraints, plan, authorization, evidence, acceptance, and replayability.",
    steps: ["Intent", "Constraints", "Plan", "Authorization", "Evidence", "Acceptance", "Replayability"]
  },
  {
    id: "lifecycle-first-brief",
    label: "LIFECYCLE_FIRST_BRIEF",
    title: "Start with lifecycle state before asking for execution.",
    body:
      "A good agent brief captures objective, constraints, authority, expected evidence, review criteria, and closure conditions before the agent begins work.",
    steps: ["Objective", "Constraints", "Authority", "Evidence", "Review", "Closure"]
  },
  {
    id: "confirmation-gate",
    label: "CONFIRMATION_GATE",
    title: "Place confirmation gates before consequential action.",
    body:
      "Confirmation should be tied to a concrete plan and scope. It should record what is being authorized, what remains excluded, and when the agent must return for review.",
    steps: ["Plan", "Scope", "Exclusions", "Approval", "Return condition"]
  },
  {
    id: "evidence-checklist",
    label: "EVIDENCE_CHECKLIST",
    title: "Require evidence that survives the run.",
    body:
      "A delivery claim should include inspectable evidence: changed artifacts, verification results, unresolved risks, and the link back to original intent.",
    steps: ["Changed artifacts", "Verification", "Risks", "Intent link"]
  },
  {
    id: "acceptance-closure",
    label: "ACCEPTANCE_CLOSURE",
    title: "Close work only when the outcome is accepted against intent.",
    body:
      "The endpoint is not that an agent produced output. The endpoint is that the result has been reviewed against the brief and accepted as satisfying the intended outcome.",
    steps: ["Review", "Compare to brief", "Accept or revise", "Record closure"]
  },
  {
    id: "replay-audit-path",
    label: "REPLAY_AUDIT_PATH",
    title: "Keep the path replayable enough for later review.",
    body:
      "A reliable system should let a reviewer reconstruct the major decisions, confirmations, evidence, and acceptance state without mining raw logs by hand.",
    steps: ["Decision path", "Confirmations", "Evidence", "Acceptance state"]
  }
];

export const newsletterPromise = {
  headline:
    "Follow the public development of Agentic Delivery, lifecycle governance, and protocol-grade AI agent systems.",
  cadence:
    "New notes go out when there is a real thesis, framework, proof update, or evidence surface to report.",
  topics: [
    "Agentic Delivery and project lifecycle design",
    "lifecycle governance above MCP and A2A",
    "protocol, runtime, product, and evidence surfaces",
    "field notes from MPLP, Cognitive OS, SoloCrew, and Validation Lab"
  ],
  boundary: "No generic marketing drip, sponsor inserts, or forced cadence."
};
