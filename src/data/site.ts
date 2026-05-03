export const siteSemanticBaseline = {
  identityAnchor: "Jearon Wong — Protocol Architect for the Agent Era",
  problemStatement: "Execution is not Delivery.",
  fieldDefinitionStatement:
    "AI Agent Lifecycle defines the accountable lifecycle of agent work from intent to accepted outcome.",
  agenticDeliveryDefinition:
    "Agentic Delivery names the missing layer between agent execution and accountable outcomes.",
  agenticDeliveryStackDefinition:
    "The Agentic Delivery Stack is a secondary reference architecture for turning agent execution into scoped, authorized, traceable, reviewable, and accepted outcomes.",
  mplpDefinition:
    "MPLP is the lifecycle protocol path for making Agentic Delivery explicit, governable, and auditable.",
  cognitiveOSDefinition:
    "Cognitive OS is a protocol-native runtime path for state, activation, projection, constraints, and evidence capture.",
  soloCrewDefinition:
    "SoloCrew is a delivery proof path for applying Agentic Delivery to one-person company operations.",
  validationLabDefinition:
    "Validation Lab is an MPLP evidence adjudication surface for evaluating evidence packs under versioned rulesets.",
  referencePathDefinition:
    "Cognitive OS, SoloCrew, and Validation Lab form the concrete proof path through Agentic Delivery. MPLP is the protocol path that makes it governable and auditable.",
  multiAgentLifecycleGovernanceDefinition:
    "Multi-Agent Lifecycle Governance is the multi-agent form of Agentic Delivery: governing responsibility, authorization, evidence, and outcome acceptance across agents, roles, projects, and lifecycle stages.",
  confirmationBoundaryDefinition:
    "The lifecycle point where autonomous execution becomes authorized responsibility.",
  evidenceChainDefinition:
    "Structured proof that agent work can be reviewed, replayed, disputed, and accepted.",
  semanticLossDefinition:
    "The degradation of intent, constraints, responsibility, and evidence across lifecycle handoffs.",
  runtimeSubstrateNote:
    "PSG / AEL / VSL are reserved runtime substrates for future technical deep-dives.",
  projectRoles: {
    mplp: "Lifecycle Protocol",
    cognitiveOS: "Runtime Path",
    soloCrew: "Delivery Proof Path",
    validationLab: "Evidence Adjudication"
  },
  architectureSurfaces: [
    "Protocol Path",
    "Execution Runtime",
    "Proof Path",
    "Evidence / Adjudication Surface"
  ],
  primaryTerms: [
    "Protocol Architect for the Agent Era",
    "Execution is not Delivery",
    "AI Agent Lifecycle",
    "Agentic Delivery",
    "MPLP",
    "Multi-Agent Lifecycle Governance",
    "Confirmation Boundary",
    "Evidence Chain",
    "Semantic Loss",
    "lifecycle protocol",
    "accountable outcomes",
    "accountable delivery"
  ],
  avoidedTerms: [
    "AIG",
    "Agentic Intelligence Governance",
    "Proof Stack",
    "Proof Chain",
    "first reference path",
    "credentialing claims",
    "adoption overclaims",
    "universal protocol",
    "only protocol",
    "complete stack",
    "closed stack"
  ]
};

export const siteConfig = {
  title: "Jearon Wong — Protocol Architect for the Agent Era",
  description:
    "Jearon Wong defines AI Agent Lifecycle, Agentic Delivery, and MPLP: a field definition for accountable agent work from intent to accepted outcome.",
  siteUrl: "https://www.jearonwong.com",
  socialImagePath: "/social/jearonwong-og.png",
  xHandle: "@jearonwong",
  thesis: siteSemanticBaseline.agenticDeliveryDefinition,
  supportLine:
    "Execution is not Delivery. AI agents will not become real infrastructure until execution becomes accountable delivery. I define the lifecycle protocol path, proof path, and evidence chain behind that claim.",
  newsletterEndpoint: "https://buttondown.com/api/emails/embed-subscribe/jearonwong",
  author: {
    name: "Jearon Wong",
    role: "Protocol Architect for the Agent Era", // Secondary role descriptor
    bio: "Writing and building at the intersection of protocol architecture, lifecycle governance, and accountable delivery.",
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
  universalProblem: siteSemanticBaseline.problemStatement,
  conceptDefinition: siteSemanticBaseline.agenticDeliveryDefinition,
  stackDefinition: siteSemanticBaseline.agenticDeliveryStackDefinition,
  technicalGap:
    "MCP connects tools. A2A connects agents. Agentic Delivery names the missing layer between execution and accountable outcomes.",
  stackProof: [
    { name: "MPLP", role: siteSemanticBaseline.projectRoles.mplp },
    { name: "Cognitive OS", role: siteSemanticBaseline.projectRoles.cognitiveOS },
    { name: "SoloCrew", role: siteSemanticBaseline.projectRoles.soloCrew },
    { name: "Validation Lab", role: siteSemanticBaseline.projectRoles.validationLab }
  ]
};

export const aiAgentLifecycleColumn = {
  categoryTitle: "The AI Agent Lifecycle",
  seriesTitle: "Define The AI Agent Lifecycle",
  title: "The AI Agent Lifecycle",
  subtitle:
    "A field definition by Jearon Wong.",
  categoryStatement:
    siteSemanticBaseline.fieldDefinitionStatement,
  purpose:
    "This column defines the accountable lifecycle of agent work, the category conflict that surrounds it, and the proof path that follows from it.",
  relationToAgenticDelivery:
    "AI Agent Lifecycle is the field-definition layer. Agentic Delivery names the category. MPLP is the protocol path within that category.",
  relationToMPLP:
    siteSemanticBaseline.mplpDefinition,
  categoryBridge:
    "Prompt Engineering improves a response. Context Engineering improves what the model sees. Harness Engineering improves execution. AI Agent Lifecycle asks what must stay dynamic, governable, and accountable after execution.",
  href: "/lifecycle/",
  publicationRule:
    "Articles in this column are published one at a time after careful refinement. The first essay is the origin story; the second essay defines MAS through lifecycle responsibility separation. The next essay defines the field conflict between execution and delivery.",
  coverImage: "/figures/ai-agent-lifecycle-01-cover.svg",
  coverImageAlt: "AI Agent Lifecycle: It Was Not Designed. It Grew. cover image",
  firstPublishedEssay: {
    slug: "ai-agent-lifecycle-it-was-not-designed-it-grew",
    title: "AI Agent Lifecycle: It Was Not Designed. It Grew.",
    role: "Official first essay / concept origin prelude",
    status: "published"
  },
  nextEssayDirection:
    "After the second essay on MAS responsibility separation, the next essay will define the field conflict between execution and delivery.",
  preludeEssays: [
    {
      slug: "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      role: "Technical prelude: lifecycle governance gap"
    },
    {
      slug: "agentic-ai-inflection-point-project-delivery",
      role: "Foundation reading: Agentic Delivery thesis"
    }
  ],
  nextEssay: {
    title: "The Four Layers of AI Agent Lifecycle",
    status: "next"
  },
  previewLayers: [
    "Agent Activation Lifecycle",
    "Engineering Process Lifecycle",
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
      name: "Engineering Process Lifecycle",
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

export const lifecyclePageContent = {
  hero: {
    title: "The AI Agent Lifecycle",
    subtitle: "A Field Definition by Jearon Wong",
    leadLines: [
      "The AI agent industry built execution.",
      "It forgot delivery.",
      "That is not a tooling problem.",
      "That is a lifecycle failure.",
      "AI agents will not become real infrastructure",
      "until execution becomes accountable delivery.",
      "This is the AI Agent Lifecycle.",
      "A field definition by Jearon Wong."
    ]
  },
  thesis: {
    title: "Execution is not Delivery.",
    body:
      "Execution proves that an agent can act. Delivery proves that the work reached an accepted outcome with responsibility, evidence, and authority still attached."
  },
  fieldDefinition: {
    title: "The field definition",
    body: [
      siteSemanticBaseline.fieldDefinitionStatement,
      "It is not merely a deployment lifecycle, runtime state lifecycle, manifest lifecycle, or workflow lifecycle.",
      "Those systems may be useful. They still do not define the accountable lifecycle of agent work."
    ]
  },
  dynamicReality: {
    title: "The dynamic agent reality",
    body: [
      "Static definitions cannot govern dynamic agents.",
      "If agents are dynamic, governance cannot be static.",
      "The market built static governance for dynamic agents. That is the foundational failure.",
      "The dominant market routes, from AWS, Google, Microsoft, Salesforce, IBM, and LangChain, often begin by defining agents, assigning tools, setting policies, routing workflows, and observing execution.",
      "These systems may be useful. They still do not define dynamic lifecycle governance for accountable agent work.",
      "MPLP governs agent work as a dynamic lifecycle."
    ],
    sourceNote:
      "Named market routes are referenced as public product and framework directions. Detailed source-backed comparisons will be developed in the Agentic Delivery essay series."
  },
  category: {
    title: "The category",
    body: [
      siteSemanticBaseline.agenticDeliveryDefinition,
      "Agentic Delivery is the category.",
      "MPLP is the lifecycle protocol path within that category."
    ]
  },
  governanceScope: {
    title: "Governance scope",
    body: [
      siteSemanticBaseline.multiAgentLifecycleGovernanceDefinition,
      "Multi-agent is not headcount. It is responsibility architecture."
    ]
  },
  governancePrimitives: [
    {
      name: "Confirmation Boundary",
      definition: siteSemanticBaseline.confirmationBoundaryDefinition
    },
    {
      name: "Evidence Chain",
      definition: siteSemanticBaseline.evidenceChainDefinition
    },
    {
      name: "Semantic Loss",
      definition: siteSemanticBaseline.semanticLossDefinition
    }
  ],
  governancePairing: [
    "Semantic Loss is the failure mode.",
    "Evidence Chain is the governance response."
  ],
  protocolPath: {
    title: "Protocol path",
    body: siteSemanticBaseline.mplpDefinition,
    boundary: "MPLP does not equal Agentic Delivery. It is the protocol path inside the category."
  },
  runtimeSubstrate: {
    title: "Runtime substrate note",
    body: siteSemanticBaseline.runtimeSubstrateNote
  },
  proofPath: {
    title: "Proof path",
    body: "Cognitive OS → SoloCrew → Validation Lab."
  },
  closingAnchor:
    "Execution is not Delivery. The AI Agent Lifecycle is the field where accountable agent work begins."
};

export const contentRouteRoles = {
  homepage: {
    question: "What is the thesis?",
    job: "State the problem, define the field, and route from the protocol path into the concrete proof path."
  },
  essays: {
    question: "Why is the thesis true?",
    job: "Develop the public arguments behind AI Agent Lifecycle, Agentic Delivery, and lifecycle governance."
  },
  ideas: {
    question: "What concepts make the thesis legible?",
    job: "Define the conceptual map behind reliable AI agent work delivery."
  },
  projects: {
    question: "What proves the thesis?",
    job: "Show the concrete proof path that makes the thesis inspectable without closing the category."
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
    job: "Anchor the maintainer to the thesis, terminology, protocol path, and concrete proof path."
  },
  newsletter: {
    question: "What ongoing signal will readers receive?",
    job: "State the publication promise for essays, frameworks, and proof updates."
  },
  concepts: {
    question: "What do the core terms mean?",
    job: "Provide canonical definitions and evidence routes for the concepts behind AI Agent Lifecycle."
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
    href: "/lifecycle/",
    label: "Open the field definition"
  },
  projects: {
    href: "/projects/",
    label: "Inspect the Proof Path"
  },
  ideas: {
    href: "/theories/",
    label: "Open the supporting idea map"
  },
  essays: {
    href: "/essays/",
    label: "Read the Essays"
  },
  proof: {
    href: "/projects/",
    label: "Inspect the Proof Path"
  },
  lifecycle: {
    href: "/lifecycle/",
    label: "Open the field definition"
  },
  lifecycleEssay: {
    href: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/",
    label: "Read the first Lifecycle essay"
  },
  startHere: {
    href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    label: "Start with the flagship essay"
  }
};

export const homepageContent = {
  hero: {
    hookLines: [
      "Execution is not Delivery.",
      "AI agents will not become",
      "real infrastructure until",
      "execution becomes accountable delivery."
    ],
    technicalHookLines: [
      "AI Agent Lifecycle",
      "Field definition by Jearon Wong"
    ],
    concept:
      siteSemanticBaseline.fieldDefinitionStatement,
    authorAnchor: "Jearon Wong",
    role: "Protocol Architect for the Agent Era",
    support:
      "The AI agent industry built execution. It forgot delivery. Start with the field definition, then inspect the proof path."
  },
  coreThesis: {
    eyebrow: "CORE_THESIS",
    title: "Execution is not Delivery.",
    execution:
      "Most agent systems optimize execution: prompts, tool calls, workflow runs, traces, and evaluations.",
    delivery:
      "My work starts from delivery: AI agents will not become real infrastructure until execution becomes accountable delivery.",
    taskAgentLabel: "Task Agent",
    taskAgentFlow: ["Prompt", "Tool call", "Output"],
    agenticDeliveryLabel: "Agentic Delivery",
    agenticDeliveryFlow: ["Intent", "Context", "Plan", "Confirm", "Execute", "Evidence", "Accepted Outcome"]
  },
  stackMap: {
    eyebrow: "SECONDARY_REFERENCE_ARCHITECTURE",
    headline: "Agentic Delivery Stack",
    summary: siteSemanticBaseline.agenticDeliveryDefinition,
    detail: siteSemanticBaseline.agenticDeliveryStackDefinition,
    closingLine: "Secondary reference architecture. MPLP is the protocol path.",
    core: {
      label: "CORE THESIS",
      title: "Delivery, not isolated execution",
      description:
        "AI agents do not become infrastructure because they can act. They become infrastructure when their work can be scoped, authorized, traced, reviewed, and accepted."
    },
    layers: [
      {
        stackLabel: "LIFECYCLE PROTOCOL",
        verb: "Protocol",
        title: "Lifecycle Protocol",
        description: "Shared lifecycle semantics for context, plan, confirmation, responsibility boundary, and trace."
      },
      {
        stackLabel: "EXECUTION RUNTIME",
        verb: "Runtime",
        title: "Execution Runtime",
        description: "State, activation, constraints, projection, and runtime evidence capture."
      },
      {
        stackLabel: "DELIVERY SURFACE",
        verb: "Delivery",
        title: "Delivery Surface",
        description: "The surface where agent activity becomes user-facing or organization-facing deliverables."
      },
      {
        stackLabel: "EVIDENCE / ADJUDICATION",
        verb: "Adjudication",
        title: "Evidence / Adjudication Surface",
        description: "Evidence packs, review, challenge, comparison, and ruleset-based adjudication."
      }
    ]
  },
  readingPath: [
    {
      slug: "ai-agent-lifecycle-it-was-not-designed-it-grew",
      note: "Column start: why AI Agent Lifecycle had to be named from real engineering failure boundaries."
    },
    {
      slug: "the-industry-misdefined-multi-agent-ai",
      note: "Series continuation: why real MAS is lifecycle responsibility separation, not agent count."
    },
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

export const concepts = [
  {
    slug: "ai-agent-lifecycle",
    term: "AI Agent Lifecycle",
    seoTitle: "AI Agent Lifecycle Definition",
    seoDescription:
      siteSemanticBaseline.fieldDefinitionStatement,
    definition:
      "AI Agent Lifecycle is the discipline of keeping agent work continuous from human intent to accepted outcome. It treats intent, context, role, plan, confirmation, execution, evidence, learning, and closure as lifecycle state rather than loose prompt text or runtime exhaust. A lifecycle view asks whether a system can preserve the meaning of the work across sessions, tools, agents, reviews, and changes, not merely whether a single execution succeeded.",
    problem:
      "The problem it names is the gap between runnable agents and accountable work. An agent can produce a correct-looking output while losing the reason the work was requested, the constraints that made it acceptable, the authority boundary around the action, or the evidence needed for review. That failure is especially visible when work crosses multiple conversations, handoffs, agents, or tools. The project continues, but the agent system may only see the latest slice of text.",
    whyExistingApproachesAreNotEnough:
      "Prompt engineering can make one request clearer. Context engineering can improve what the model sees. Orchestration can make execution repeatable. Observability can record what happened. None of those alone defines what must remain valid before, during, and after execution. A lifecycle needs a grammar for continuity: what state is active, what has expired, what has been confirmed, which evidence is required, and when an outcome is accepted.",
    relationToLifecycle:
      "AI Agent Lifecycle is the field definition for accountable agent work. Agentic Delivery names the category between execution and accountable outcomes. MPLP is the lifecycle protocol path, while Cognitive OS, SoloCrew, and Validation Lab continue the concrete proof path through runtime, delivery, and evidence adjudication.",
    evidenceRoute:
      "The evidence route starts with the origin essay, because it explains why the category grew out of real engineering failure boundaries. From there, MPLP shows how lifecycle concepts can become protocol records, while Validation Lab keeps the delivery claim tied to inspectable evidence. The route is intentionally modest: it shows a thesis, a vocabulary, and proof path, not market adoption.",
    relatedEssays: [
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "the-industry-misdefined-multi-agent-ai",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "cognitive-os", "validation-lab"],
    relatedTerms: [
      "agentic-delivery",
      "lifecycle-role-decomposition",
      "lifecycle-governed-agent-workflow",
      "intent-drift",
      "context-drift",
      "lifecycle-evidence",
      "protocol-engineering"
    ],
    keywords: [
      "AI Agent Lifecycle",
      "AI agent work continuity",
      "production-grade AI agents",
      "multi-agent systems",
      "accepted outcome"
    ]
  },
  {
    slug: "lifecycle-role-decomposition",
    term: "Lifecycle Role Decomposition",
    seoTitle: "Lifecycle Role Decomposition Definition",
    seoDescription:
      "Lifecycle Role Decomposition translates human work roles into lifecycle responsibility boundaries that agent systems can execute, confirm, trace, roll back, and accept.",
    definition:
      "Lifecycle Role Decomposition is the translation step between human work models and real multi-agent systems. It does not merely rename PM, Architect, Developer, Reviewer, or QA as agents. It decomposes the responsibility behind those roles into lifecycle objects such as Context, Role, Plan, Confirm, Trace, and Delivery so an agent system can execute, confirm, trace, audit, roll back, and accept work.",
    problem:
      "The problem it names is that human roles carry implicit authority and responsibility, while agents do not automatically inherit those boundaries. A Reviewer Agent may produce comments, but unless its review boundary, confirmation authority, evidence obligation, and delivery-transition control are explicit, the system still only has a role label. The label looks familiar to the operator, but the accountability structure never entered the system.",
    whyExistingApproachesAreNotEnough:
      "Manual workflow graphs can show which agent runs next, and orchestration frameworks can execute those graphs. They usually do not infer which responsibilities must be separated, which decisions require confirmation, which traces must survive, or which states become accepted and inheritable. Lifecycle Role Decomposition names the missing translation layer before execution begins.",
    relationToLifecycle:
      "Within AI Agent Lifecycle, Lifecycle Role Decomposition sits at the boundary between human-readable work practice and protocol-governed agent work. It keeps role, plan, confirmation, trace, rollback, and delivery from remaining implicit. It is a supporting decomposition pattern, not an added first-stage public concept.",
    evidenceRoute:
      "The evidence route starts with the second Define The AI Agent Lifecycle essay, where human software work is decomposed into lifecycle objects and responsibility boundaries. MPLP is the protocol path for the vocabulary; SoloCrew is the delivery proof path where human-facing roles need to become usable without losing accountability.",
    relatedEssays: [
      "the-industry-misdefined-multi-agent-ai",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle"
    ],
    relatedProjects: ["mplp", "solocrew", "cognitive-os"],
    relatedTerms: [
      "ai-agent-lifecycle",
      "lifecycle-governed-agent-workflow",
      "confirmation-boundary",
      "lifecycle-evidence",
      "protocol-engineering"
    ],
    keywords: [
      "Lifecycle Role Decomposition",
      "lifecycle responsibility separation",
      "real MAS",
      "multi-agent systems",
      "AI Agent Lifecycle"
    ]
  },
  {
    slug: "lifecycle-governed-agent-workflow",
    term: "Lifecycle-Governed Agent Workflow",
    seoTitle: "Lifecycle-Governed Agent Workflow Definition",
    seoDescription:
      "Lifecycle-Governed Agent Workflow is a protocol-generated workflow model where human work models become confirmable, traceable, rollback-aware, and delivery-aware agent work.",
    definition:
      "Lifecycle-Governed Agent Workflow is the workflow model in which a human-readable work process is interpreted through lifecycle protocol and generated as a governed agent workflow. The workflow is not only a node graph. It carries role boundaries, confirm gates, trace obligations, rollback points, and delivery states so multi-agent collaboration can move toward accountable delivery.",
    problem:
      "The problem it names is the limit of user-drawn orchestration. If the user must manually decide every agent, edge, review point, approval boundary, evidence obligation, and rollback point, the framework can execute the graph but cannot guarantee accountability. Missing responsibility structure remains the user’s burden.",
    whyExistingApproachesAreNotEnough:
      "Conventional workflow tools define who comes next. Lifecycle-governed workflow also defines who may continue, who must confirm, who is blocked, what evidence must remain, which state is locked, and where rollback should occur. That requires protocol interpretation, not only orchestration.",
    relationToLifecycle:
      "Lifecycle-Governed Agent Workflow is a downstream expression of AI Agent Lifecycle. It becomes possible after human roles have been decomposed into lifecycle responsibilities. It is the workflow direction made possible by lifecycle protocol and the direction being tested across MPLP, SoloCrew, and the broader proof path.",
    evidenceRoute:
      "The evidence route begins with the second Lifecycle essay’s software workflow example, where product requirements, review, architecture, development, QA, and acceptance are translated into lifecycle objects. MPLP supplies protocol language; SoloCrew tests whether the generated governance model can become usable inside real work.",
    relatedEssays: [
      "the-industry-misdefined-multi-agent-ai",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "solocrew", "validation-lab"],
    relatedTerms: [
      "ai-agent-lifecycle",
      "lifecycle-role-decomposition",
      "agentic-delivery",
      "confirmation-boundary",
      "lifecycle-evidence"
    ],
    keywords: [
      "Lifecycle-Governed Agent Workflow",
      "lifecycle protocol",
      "agent workflow",
      "accountable MAS",
      "protocol-governed workflow"
    ]
  },
  {
    slug: "intent-drift",
    term: "Intent Drift",
    seoTitle: "Intent Drift in AI Agent Systems",
    seoDescription:
      "Intent Drift describes how agent work gradually separates from the original human objective, constraints, and accepted outcome criteria.",
    definition:
      "Intent Drift is the gradual separation between the original human objective and the direction an agent system actually follows. The words in the current prompt may still look reasonable, but the work has moved away from the intended outcome, active constraints, or strategic judgment that gave the task meaning. Intent Drift is not only a model misunderstanding. It is a lifecycle failure where the system lacks a stable way to preserve, update, and verify intent over time.",
    problem:
      "The problem it names is quiet misalignment during long-running work. A user may begin with a clear objective, clarify several boundaries, reject certain paths, and approve a direction. After enough sessions, summaries, tool runs, and handoffs, the agent may continue with a plausible but altered interpretation. No single step looks obviously wrong. The drift appears when the final direction no longer matches the reason the work existed.",
    whyExistingApproachesAreNotEnough:
      "Better prompts reduce ambiguity at the moment of instruction, but they do not guarantee that intent survives change. Longer context windows can hold more material, but they do not decide which intent is current, which decisions are historical, and which constraints still bind execution. Logs can show actions after the fact, but they do not prove that each action stayed attached to the approved objective. Intent needs to be represented as active lifecycle state.",
    relationToLifecycle:
      "Within AI Agent Lifecycle, Intent Drift is one of the core failure modes the lifecycle is designed to detect and reduce. The lifecycle asks for a traceable path from intent to context, plan, confirmation, execution, evidence, review, and accepted outcome. If that path cannot be reconstructed, drift becomes invisible until a human notices the mismatch. Protocol Engineering makes the intent object explicit; Evidence Chain makes the adherence inspectable.",
    evidenceRoute:
      "The evidence route for Intent Drift runs through the origin essay and the lifecycle governance essay. The origin essay names the experience of project intent shifting across prompts, summaries, and sessions. The governance essay then shows why intent needs a lifecycle authority layer rather than a one-time instruction. MPLP, Cognitive OS, and Validation Lab each test a different part of that route: protocol, runtime state, and evidence review.",
    relatedEssays: [
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle"
    ],
    relatedProjects: ["mplp", "cognitive-os", "validation-lab"],
    relatedTerms: ["ai-agent-lifecycle", "context-drift", "confirmation-boundary", "lifecycle-evidence"],
    keywords: [
      "Intent Drift",
      "AI agent misalignment",
      "agent intent continuity",
      "AI Agent Lifecycle",
      "trustworthy multi-agent systems"
    ]
  },
  {
    slug: "context-drift",
    term: "Context Drift",
    seoTitle: "Context Drift in AI Agent Lifecycle",
    seoDescription:
      "Context Drift describes the loss, staleness, or misweighting of project context as agent work moves across sessions, tools, and summaries.",
    definition:
      "Context Drift is the loss of fit between the context an agent uses and the actual state of the work. It can happen when summaries compress away reasoning, old rules remain active after requirements change, abandoned paths re-enter the task, or important constraints are present but not weighted correctly. Context Drift is not simply a shortage of tokens. It is a failure to keep context valid, scoped, and connected to current lifecycle state.",
    problem:
      "The problem it names is that agent systems often treat context as a pile of relevant text. Real project context is more structured than that. It includes decisions, rejected options, active constraints, role boundaries, evidence expectations, unresolved risks, and acceptance criteria. When those pieces are flattened into notes or summaries, the agent may read more material while understanding less about what still matters now.",
    whyExistingApproachesAreNotEnough:
      "Retrieval, memory, and long-context models help agents access more information, but access is not the same as authority. A retrieved note may be outdated. A rule file may conflict with a newer decision. A summary may preserve a conclusion while losing the trade-off that made the conclusion valid. Without lifecycle semantics, the system has no reliable way to distinguish current context from stale context, background context, or nonbinding history.",
    relationToLifecycle:
      "AI Agent Lifecycle treats context as a stateful layer that must be loaded, updated, invalidated, and evidenced as work moves forward. Context Drift is closely tied to Intent Drift: once context stops representing the real project state, intent becomes easier to reinterpret incorrectly. Cognitive OS is the runtime path for this concern, while Evidence Chain and MPLP show why context needs traceable links to plans, confirmations, and outcomes.",
    evidenceRoute:
      "The evidence route for Context Drift starts in the origin essay's discussion of summaries, rule files, and stale project state. It continues through Cognitive OS as the runtime path: the place where context has to become active state, not background reading. Validation Lab matters because context validity eventually has to be checked against evidence, especially when the same work resumes across sessions or agents.",
    relatedEssays: [
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["cognitive-os", "mplp", "validation-lab"],
    relatedTerms: ["ai-agent-lifecycle", "intent-drift", "lifecycle-evidence", "protocol-engineering"],
    keywords: [
      "Context Drift",
      "AI agent context",
      "agent memory validity",
      "AI Agent Lifecycle",
      "production-grade AI agents"
    ]
  },
  {
    slug: "agentic-delivery",
    term: "Agentic Delivery",
    seoTitle: "Agentic Delivery Definition",
    seoDescription:
      siteSemanticBaseline.agenticDeliveryDefinition,
    definition:
      `${siteSemanticBaseline.agenticDeliveryDefinition} Delivery means carrying human intent through context, planning, confirmation, execution, evidence, review, and accepted outcome. It is a project-level concept, not a prompt-level compliment. An agent that can act is useful; an agent system that can deliver must preserve meaning, authority, and evidence across time.`,
    problem:
      "The problem it names is the industry's habit of measuring the wrong unit. Tool calls, workflow runs, latency, traces, and evaluation scores matter, but they mostly describe execution. Real work is judged at the level of projects and outcomes. A system can score well on local execution while failing to carry the original objective, maintain accountability, recover from change, or prove why the final result should be accepted.",
    whyExistingApproachesAreNotEnough:
      "Execution frameworks make agents runnable. AgentOps makes behavior more observable. Evals make selected outputs measurable. These are necessary foundations, but they do not automatically create delivery. Delivery requires an architecture that binds intent to plan, plan to confirmation, confirmation to action, action to evidence, and evidence to acceptance. Without that chain, the system may be operationally impressive but still weak as a work-delivery environment.",
    relationToLifecycle:
      "Agentic Delivery is the category; AI Agent Lifecycle is the field problem that makes the category necessary. If Agentic Delivery asks whether AI agents can deliver accountable outcomes, the lifecycle asks what must remain accountable from intent to accepted outcome. The Agentic Delivery Stack is a secondary reference architecture for that chain. MPLP is the protocol path, while Cognitive OS, SoloCrew, and Validation Lab form the concrete proof path.",
    evidenceRoute:
      "The evidence route begins with the Agentic Delivery essay, where the unit of analysis moves from task execution to accountable outcomes. The lifecycle page then gives the category entry for what must remain continuous. SoloCrew is the delivery proof path because it asks whether a governed operating loop can make that thesis usable. Validation Lab is the evidence adjudication route because delivery claims need more than fluent outputs.",
    relatedEssays: [
      "agentic-ai-inflection-point-project-delivery",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "the-industry-misdefined-multi-agent-ai",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle"
    ],
    relatedProjects: ["solocrew", "mplp", "validation-lab"],
    relatedTerms: [
      "ai-agent-lifecycle",
      "lifecycle-governed-agent-workflow",
      "confirmation-boundary",
      "lifecycle-evidence",
      "ai-agent-governance"
    ],
    keywords: [
      "Agentic Delivery",
      "agentic project delivery",
      "production-grade AI agents",
      "accepted outcome",
      "multi-agent systems"
    ]
  },
  {
    slug: "ai-agent-governance",
    term: "AI Agent Governance",
    seoTitle: "AI Agent Governance for Lifecycle Systems",
    seoDescription:
      "AI Agent Governance defines the authority, confirmation, evidence, and review conditions that make delegated agent work accountable.",
    definition:
      "AI Agent Governance is the set of authority, boundary, confirmation, evidence, and review conditions that make delegated agent work accountable. In this site architecture, governance is not a policy banner placed around an agent after it runs. It is part of the lifecycle itself: who authorized the work, under which intent, with what constraints, through which plan, and against what evidence the result is accepted.",
    problem:
      "The problem it names is that agent autonomy can outrun accountability. A multi-agent system may coordinate tools, pass tasks between agents, and produce outputs while leaving unclear who approved an action, which scope was permitted, and what evidence proves the result stayed legitimate. Once consequential work crosses tools, agents, and time, informal human oversight is too fragile to serve as the only governance layer.",
    whyExistingApproachesAreNotEnough:
      "Access control, monitoring, and human-in-the-loop checkpoints each solve part of the governance problem. Access control says what a system can reach. Monitoring says what happened. Human review can approve or reject a proposed action. But agent governance also needs continuity across those pieces: authority must attach to intent, plans must carry constraints, confirmations must be recorded, and evidence must survive after execution.",
    relationToLifecycle:
      "AI Agent Lifecycle gives governance a place to live. Instead of treating governance as a separate compliance layer, the lifecycle binds governance to the path from intent to accepted outcome. Confirmation Boundary is one governance primitive. Evidence Chain is another. Protocol Engineering makes those primitives explicit enough to be implemented across agent systems without claiming that one implementation has become universal.",
    evidenceRoute:
      "The evidence route for AI Agent Governance starts with the MCP/A2A lifecycle governance essay, because that essay separates tool access and agent coordination from lifecycle authority. From there, MPLP gives the protocol path for context, plan, confirm, trace, and evidence. Validation Lab keeps the governance claim accountable by asking what records would let a reviewer inspect authorization, action, and outcome. This keeps governance practical: the question is not whether a page claims safety, but whether the system can show the authority path behind the work. That path is what makes governance inspectable after the agent has already acted and after memory has faded.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "the-industry-misdefined-multi-agent-ai",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "validation-lab", "solocrew"],
    relatedTerms: [
      "confirmation-boundary",
      "lifecycle-evidence",
      "lifecycle-role-decomposition",
      "protocol-engineering",
      "ai-agent-lifecycle"
    ],
    keywords: [
      "AI Agent Governance",
      "agent governance",
      "trustworthy multi-agent systems",
      "confirmation boundary",
      "lifecycle governance"
    ]
  },
  {
    slug: "lifecycle-evidence",
    term: "Evidence Chain",
    seoTitle: "Evidence Chain for AI Agent Systems",
    seoDescription:
      siteSemanticBaseline.evidenceChainDefinition,
    definition:
      "Evidence Chain is structured proof that agent work can be reviewed, replayed, disputed, and accepted. It includes the artifacts needed to reconstruct why the work began, what context was active, what plan was approved, which confirmations were required, what actions occurred, what changed, how the result was reviewed, and why the outcome was accepted or rejected. Evidence is not the same as raw logs. It is structured support for a delivery claim.",
    problem:
      "The problem it names is that many agent systems can say they completed work without showing enough evidence to trust the claim. A trace may show calls. A diff may show changes. A chat transcript may show discussion. But none of those alone proves that the result satisfied the original intent under the approved constraints. Without Evidence Chain, reliability becomes a narrative rather than an inspectable condition.",
    whyExistingApproachesAreNotEnough:
      "Observability tools are valuable, but they often describe system behavior from the runtime outward. Evidence Chain starts from the delivery claim and asks what must be visible for that claim to be assessed. Evaluations can test outputs, but they may not preserve authority, context, confirmation, or acceptance state. Audit logs can record events, but they may not explain whether the events were legitimate within the lifecycle.",
    relationToLifecycle:
      "AI Agent Lifecycle depends on evidence because continuity must be inspectable. If a system cannot show how intent became plan, how plan became confirmed action, and how action became an accepted outcome, the lifecycle is only implied. Semantic Loss is the failure mode. Evidence Chain is the governance response. Validation Lab is the evidence adjudication surface most directly tied to this primitive, while Cognitive OS explores how runtime state can keep evidence attached to work.",
    evidenceRoute:
      "The evidence route is direct: start with the Agentic Delivery essay to understand why accepted outcome matters, then read the governance essay for the protocol gap above MCP and A2A. Validation Lab is the main evidence adjudication surface because it treats evidence as something to inspect rather than something to assert. MPLP and Cognitive OS explain how evidence can be represented and kept attached to lifecycle state.",
    relatedEssays: [
      "agentic-ai-inflection-point-project-delivery",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "the-industry-misdefined-multi-agent-ai",
      "ai-agent-lifecycle-it-was-not-designed-it-grew"
    ],
    relatedProjects: ["validation-lab", "mplp", "cognitive-os"],
    relatedTerms: ["ai-agent-lifecycle", "ai-agent-governance", "context-drift", "confirmation-boundary"],
    keywords: [
      "Evidence Chain",
      "agent evidence chain",
      "AI agent auditability",
      "production-grade AI agents",
      "accepted outcome"
    ]
  },
  {
    slug: "confirmation-boundary",
    term: "Confirmation Boundary",
    seoTitle: "Confirmation Boundary in AI Agent Governance",
    seoDescription:
      "A Confirmation Boundary defines where AI agent work must stop for explicit authorization before consequential execution continues.",
    definition:
      "A Confirmation Boundary is the point where an agent system must stop and obtain explicit authorization before consequential execution continues. The boundary is not a generic approval button. It defines what plan is being approved, which scope is covered, which actions remain outside the approval, who is authorizing the next step, and how that authorization links back to the original intent and active constraints.",
    problem:
      "The problem it names is the difference between permission and governable authorization. In many agent products, a human is asked to approve an action without seeing the full lifecycle context: why the action is necessary, what it changes, what evidence will prove completion, and when the agent must return for review. Approval becomes a momentary UI event instead of a durable governance record.",
    whyExistingApproachesAreNotEnough:
      "Human-in-the-loop design is necessary but often underspecified. A human can be present and still lack the information needed to authorize responsibly. Access controls can block categories of action, but they do not define when a specific plan is acceptable. Logs can show that approval happened, but not necessarily what was approved. A Confirmation Boundary makes the approved scope and its lifecycle links explicit.",
    relationToLifecycle:
      "Within AI Agent Lifecycle, Confirmation Boundary sits between plan and execution. It is one of the points where human authority enters the lifecycle in a structured way. Protocol Engineering can model the boundary as a record rather than a chat message. AI Agent Governance uses it to preserve accountability. SoloCrew is the delivery proof path where confirmation boundaries matter as part of an operating loop.",
    evidenceRoute:
      "The evidence route for Confirmation Boundary starts with the lifecycle governance essay, where confirmation is treated as a protocol primitive rather than a decorative checkpoint. SoloCrew is the most concrete delivery route because confirmation boundaries have to feel usable inside a working loop. MPLP provides the protocol vocabulary, and Validation Lab asks whether the resulting approval record is enough for later review. The boundary should explain the approved plan, the excluded scope, the expected evidence, and the return condition before the agent continues. That makes approval durable enough to audit rather than merely visible in a UI at execution time.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "the-industry-misdefined-multi-agent-ai",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["solocrew", "mplp", "validation-lab"],
    relatedTerms: ["ai-agent-governance", "protocol-engineering", "agentic-delivery", "lifecycle-evidence"],
    keywords: [
      "Confirmation Boundary",
      "human in the loop",
      "AI agent authorization",
      "AI Agent Governance",
      "trustworthy multi-agent systems"
    ]
  },
  {
    slug: "protocol-engineering",
    term: "Protocol Engineering",
    seoTitle: "Protocol Engineering for AI Agent Lifecycle",
    seoDescription:
      "Protocol Engineering makes intent, context, plans, confirmations, traces, evidence, and accepted outcomes explicit for AI agent systems.",
    definition:
      "Protocol Engineering is the discipline of making the critical states and transitions of agent work explicit enough to be implemented, checked, and shared. For AI agent systems, that means representing intent, context, roles, plans, confirmations, traces, evidence, learning, and accepted outcomes as more than informal language. Protocol Engineering asks what must be true before agents act and what must remain traceable after they act.",
    problem:
      "The problem it names is that agent systems often depend on implicit agreements. The human assumes the agent understood the intent. The runtime assumes permissions are enough. The orchestrator assumes the plan is valid. The log assumes history is evidence. These assumptions may hold in small demos, but they become brittle when work crosses multiple agents, vendors, tools, or review cycles.",
    whyExistingApproachesAreNotEnough:
      "Application logic can encode local rules, but those rules often stay trapped inside one application. Prompt rules can guide behavior, but they are hard to validate across systems. Observability can expose events, but it may not define their meaning. Protocol Engineering gives teams a way to name the objects and transitions that must survive beyond one interface or runtime, without claiming that every team must adopt the same implementation.",
    relationToLifecycle:
      "AI Agent Lifecycle supplies the conceptual boundary for Protocol Engineering in this site architecture. It identifies what has to remain continuous; Protocol Engineering turns that continuity into explicit records, modules, and interfaces. MPLP is the protocol path for this work. AI Agent Governance, Confirmation Boundary, and Evidence Chain are examples of lifecycle concepts that become more useful when expressed as protocol primitives.",
    evidenceRoute:
      "The evidence route for Protocol Engineering starts with MPLP because it is the protocol path, but the essays explain why the protocol question exists. The governance essay names the missing layer above tool access and coordination. The lifecycle origin essay explains how real project failure boundaries pushed the category into view. Validation Lab then tests whether protocol language produces evidence that can be inspected.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "the-industry-misdefined-multi-agent-ai",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "cognitive-os", "solocrew", "validation-lab"],
    relatedTerms: [
      "ai-agent-lifecycle",
      "lifecycle-role-decomposition",
      "lifecycle-governed-agent-workflow",
      "ai-agent-governance",
      "confirmation-boundary",
      "lifecycle-evidence"
    ],
    keywords: [
      "Protocol Engineering",
      "AI agent protocol",
      "MPLP",
      "AI Agent Lifecycle",
      "multi-agent systems"
    ]
  }
];

export function getConceptBySlug(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}

export const primaryNav = [
  { href: "/lifecycle/", label: "Lifecycle" },
  { href: "/essays/", label: "Essays" },
  { href: "/projects/", label: "Projects" },
  { href: "/about/", label: "About" },
  { href: "/newsletter/", label: "Newsletter" }
];

export const secondaryNav = [
  { href: "/concepts/", label: "Concepts" },
  { href: "/theories/", label: "Ideas" },
  { href: "/governance/", label: "Governance" },
  { href: "/playbooks/", label: "Playbooks" },
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
    lead: "A concise identity sheet for the thesis, category, protocol path, and concrete proof path behind this site."
  },
  projects: {
    title: "Projects",
    objectType: "PAGE_ROLE",
    objectValue: "EVIDENCE LEDGER",
    lead: "The project evidence ledger for the concrete proof path through Agentic Delivery, with each proof object kept inside its maturity boundary."
  },
  ideas: {
    title: "Ideas",
    objectType: "PAGE_ROLE",
    objectValue: "SUPPORTING IDEA MAP",
    lead: "A supporting idea map for the AI Agent Lifecycle mainline. Canonical definitions live in Concepts; the main theory route is Lifecycle."
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
    lead: "The public arguments behind AI Agent Lifecycle, Agentic Delivery, lifecycle governance, and the protocol path."
  },
  lifecycle: {
    title: "AI Agent Lifecycle",
    subtitle: "A Field Definition by Jearon Wong",
    objectType: "FIELD_DEFINITION",
    objectValue: "ACCOUNTABLE DELIVERY",
    lead: siteSemanticBaseline.fieldDefinitionStatement
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
    lead: "A low-noise stream on AI Agent Lifecycle, Agentic Delivery, lifecycle governance, and protocol-grade AI agent systems."
  },
  concepts: {
    title: "Concepts for AI Agent Lifecycle",
    objectType: "PAGE_ROLE",
    objectValue: "CONCEPT MAP",
    lead: "A concise conceptual map for AI Agent Lifecycle, Agentic Delivery, lifecycle governance primitives, and supporting protocol concepts."
  }
};

export const theoryClusters = [
  {
    slug: "ai-agent-lifecycle",
    name: "AI Agent Lifecycle",
    description:
      "The field-definition layer for accountable agent work: how intent, context, decisions, evidence, learning, and accepted outcome stay coherent through time.",
    prompt: "What must stay continuous for agent work to remain traceable, reversible, accountable, and acceptable?",
    essayPath: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/",
    essayLabel: "Read the origin essay",
    proofPath: "/projects/mplp/",
    proofLabel: "Open the protocol path"
  },
  {
    slug: "agentic-delivery",
    name: "Agentic Delivery",
    description: siteSemanticBaseline.agenticDeliveryDefinition,
    prompt: "Can the system carry work from human intent to accepted outcome?",
    essayPath: "/essays/agentic-ai-inflection-point-project-delivery/",
    essayLabel: "Read the project delivery essay",
    proofPath: "/projects/",
    proofLabel: "Inspect the concrete proof path"
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
    proofLabel: "Open the protocol path"
  },
  {
    slug: "lifecycle-governance",
    name: "Lifecycle Governance",
    description: "The missing governance layer above tool access and agent coordination: authority, constraints, confirmation, evidence, and closure.",
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
    proofLabel: "Open evidence adjudication"
  },
  {
    slug: "accountable-work",
    name: "Accountable Work",
    description: "Work that remains tied to intent, authority, responsibility, evidence, and review instead of ending as an unaudited output.",
    prompt: "Can someone reconstruct why the agent acted and why the result should be trusted?",
    essayPath: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
    essayLabel: "Read the accountability argument",
    proofPath: "/projects/solocrew/",
    proofLabel: "Open the delivery proof path"
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
    status: "Lifecycle Protocol",
    summary: "Lifecycle protocol path for Agentic Delivery.",
    proof: siteSemanticBaseline.mplpDefinition,
    proofRole: "LIFECYCLE PROTOCOL PATH",
    whatItIs: siteSemanticBaseline.mplpDefinition,
    problem:
      "Most agent systems still move from prompt to output without a disciplined way to describe lifecycle state, handoff boundaries, or completion artifacts.",
    proves:
      "MPLP anchors the protocol path for context, planning, confirmation, trace, governance, and evidence so Agentic Delivery can be explicit, governable, and auditable.",
    shareDescription: siteSemanticBaseline.mplpDefinition,
    relatedIdeas: ["protocol-engineering", "lifecycle-governance", "accountable-work"],
    relatedConcepts: [
      "ai-agent-lifecycle",
      "lifecycle-role-decomposition",
      "lifecycle-governed-agent-workflow",
      "protocol-engineering",
      "lifecycle-evidence"
    ],
    relatedEssays: [
      {
        href: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/",
        label: "AI Agent Lifecycle origin essay"
      },
      {
        href: "/essays/the-industry-misdefined-multi-agent-ai/",
        label: "MAS responsibility separation essay"
      },
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
    status: "Runtime Path",
    summary: "Runtime path for protocol-native agent work.",
    proof: siteSemanticBaseline.cognitiveOSDefinition,
    proofRole: "RUNTIME PATH",
    whatItIs: siteSemanticBaseline.cognitiveOSDefinition,
    problem:
      "A protocol vocabulary alone does not keep agent work reliable if runtime state, permissions, and working conditions are still implicit or weakly controlled.",
    proves:
      "Cognitive OS keeps the runtime claim bounded: it explores how state, activation, projection, constraints, and evidence capture can make protocol-native work operational.",
    shareDescription: siteSemanticBaseline.cognitiveOSDefinition,
    relatedIdeas: ["agentic-delivery", "project-lifecycle-vs-task-execution", "protocol-engineering"],
    relatedConcepts: ["context-drift", "lifecycle-governed-agent-workflow", "lifecycle-evidence"],
    relatedEssays: [
      {
        href: "/essays/agentic-ai-inflection-point-project-delivery/",
        label: "Agentic Delivery project lifecycle essay"
      },
      {
        href: "/essays/the-industry-misdefined-multi-agent-ai/",
        label: "Lifecycle-governed workflow essay"
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
    status: "Delivery Proof Path",
    summary: "Delivery proof path for one-person-company AI operations.",
    proof: siteSemanticBaseline.soloCrewDefinition,
    proofRole: "DELIVERY PROOF PATH",
    whatItIs: siteSemanticBaseline.soloCrewDefinition,
    problem:
      "Systems ideas can remain abstract unless they show up inside a real operating loop that someone can use, inspect, and iterate on day to day.",
    proves:
      "SoloCrew tests how Agentic Delivery can become a concrete operating path for one-person-company work without claiming the category is closed or commercially proven.",
    shareDescription: siteSemanticBaseline.soloCrewDefinition,
    relatedIdeas: ["agentic-delivery", "accountable-work", "protocol-engineering"],
    relatedConcepts: ["agentic-delivery", "lifecycle-role-decomposition", "lifecycle-governed-agent-workflow", "confirmation-boundary"],
    relatedEssays: [
      {
        href: "/essays/agentic-ai-inflection-point-project-delivery/",
        label: "Agentic Delivery project lifecycle essay"
      },
      {
        href: "/essays/the-industry-misdefined-multi-agent-ai/",
        label: "Lifecycle-governed workflow essay"
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
    status: "Evidence Adjudication",
    summary: "MPLP evidence adjudication surface.",
    proof: siteSemanticBaseline.validationLabDefinition,
    proofRole: "EVIDENCE ADJUDICATION",
    whatItIs: siteSemanticBaseline.validationLabDefinition,
    problem:
      "Agent systems often make large claims about governance, reliability, or safety without offering a visible surface for checking what evidence supports those claims.",
    proves:
      "Validation Lab shows that reliable work delivery needs evidence adjudication, not just architectural language. Proof must be inspectable.",
    shareDescription: siteSemanticBaseline.validationLabDefinition,
    relatedIdeas: ["lifecycle-governance", "evidence-accepted-outcome", "accountable-work"],
    relatedConcepts: ["lifecycle-evidence", "lifecycle-governed-agent-workflow", "ai-agent-governance"],
    relatedEssays: [
      {
        href: "/essays/mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle/",
        label: "Lifecycle governance essay"
      },
      {
        href: "/essays/the-industry-misdefined-multi-agent-ai/",
        label: "MAS responsibility separation essay"
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
    value: "Execution is not Delivery."
  },
  {
    label: "CATEGORY",
    value: "AI systems thinker / protocol architect / founder-editorial voice"
  },
  {
    label: "PROOF_PATH",
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
    "Follow the public development of AI Agent Lifecycle, Agentic Delivery, lifecycle governance, and protocol-grade AI agent systems.",
  cadence:
    "New notes go out when there is a real thesis, column essay, framework, proof update, or evidence adjudication surface to report.",
  topics: [
    "Agentic Delivery and project lifecycle design",
    "AI Agent Lifecycle as the field definition for accountable agent work",
    "the field conflict between execution and delivery",
    "lifecycle governance above MCP and A2A",
    "lifecycle protocol, runtime path, delivery proof path, and evidence adjudication",
    "field notes from MPLP, Cognitive OS, SoloCrew, and Validation Lab"
  ],
  boundary: "No generic marketing drip, sponsor inserts, or forced cadence."
};
