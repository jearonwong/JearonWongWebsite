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
  categoryTitle: "AI Agent Lifecycle",
  seriesTitle: "Define The AI Agent Lifecycle",
  title: "Define The AI Agent Lifecycle",
  subtitle:
    "A column on how agent work remains continuous across intent, context, role, plan, confirmation, execution, evidence, learning, and accepted outcome.",
  categoryStatement:
    "AI Agent Lifecycle is the work-continuity category beneath Agentic Delivery: how concrete work performed with agents remains traceable, reversible, and acceptable through time.",
  purpose:
    "This column defines AI Agent Lifecycle as the continuity of intent, context, role, plan, confirmation, execution, evidence, learning, and accepted outcome across agent activation, engineering process, project, and cross-project dimensions.",
  relationToAgenticDelivery:
    "Agentic Delivery names the shift. AI Agent Lifecycle explains the work-continuity layer. MPLP later expresses the protocol structure.",
  relationToMPLP:
    "MPLP is the later protocol abstraction that grew from these lifecycle failure boundaries; it is not the subject of the first origin essay.",
  categoryBridge:
    "Prompt Engineering improves a response. Context Engineering improves what the model sees. Harness Engineering improves execution. AI Agent Lifecycle asks what remains continuous after execution.",
  href: "/lifecycle/",
  publicationRule:
    "Articles in this column are published one at a time after careful refinement. The first essay is the origin story; the next essay defines the four lifecycle layers.",
  coverImage: "/figures/ai-agent-lifecycle-01-cover.svg",
  coverImageAlt: "AI Agent Lifecycle: It Was Not Designed. It Grew. cover image",
  firstPublishedEssay: {
    slug: "ai-agent-lifecycle-it-was-not-designed-it-grew",
    title: "AI Agent Lifecycle: It Was Not Designed. It Grew.",
    role: "Official first essay / concept origin prelude",
    status: "published"
  },
  nextEssayDirection:
    "The next essay will define the four layers of AI Agent Lifecycle and explain the engineering problem each layer solves.",
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

export const contentRouteRoles = {
  homepage: {
    question: "What is the thesis?",
    job: "State the problem, define the concept, and route into stack proof."
  },
  essays: {
    question: "Why is the thesis true?",
    job: "Develop the public arguments behind Agentic Delivery, AI Agent Lifecycle, and lifecycle governance."
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
    label: "Start with AI Agent Lifecycle"
  },
  projects: {
    href: "/projects/",
    label: "Inspect the Proof Stack"
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
    label: "Inspect the Proof Stack"
  },
  lifecycle: {
    href: "/lifecycle/",
    label: "Start with AI Agent Lifecycle"
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
      slug: "ai-agent-lifecycle-it-was-not-designed-it-grew",
      note: "Column start: why AI Agent Lifecycle had to be named from real engineering failure boundaries."
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
      "AI Agent Lifecycle is the work-continuity layer for agent systems: intent, context, role, plan, confirmation, execution, evidence, learning, and accepted outcome.",
    definition:
      "AI Agent Lifecycle is the discipline of keeping agent work continuous from human intent to accepted outcome. It treats intent, context, role, plan, confirmation, execution, evidence, learning, and closure as lifecycle state rather than loose prompt text or runtime exhaust. A lifecycle view asks whether a system can preserve the meaning of the work across sessions, tools, agents, reviews, and changes, not merely whether a single execution succeeded.",
    problem:
      "The problem it names is the gap between runnable agents and accountable work. An agent can produce a correct-looking output while losing the reason the work was requested, the constraints that made it acceptable, the authority boundary around the action, or the evidence needed for review. That failure is especially visible when work crosses multiple conversations, handoffs, agents, or tools. The project continues, but the agent system may only see the latest slice of text.",
    whyExistingApproachesAreNotEnough:
      "Prompt engineering can make one request clearer. Context engineering can improve what the model sees. Orchestration can make execution repeatable. Observability can record what happened. None of those alone defines what must remain valid before, during, and after execution. A lifecycle needs a grammar for continuity: what state is active, what has expired, what has been confirmed, which evidence is required, and when an outcome is accepted.",
    relationToLifecycle:
      "AI Agent Lifecycle is the category that sits beneath Agentic Delivery and above isolated execution. Agentic Delivery names the shift from task execution to reliable project delivery; AI Agent Lifecycle explains what has to stay continuous for that shift to be real. MPLP is one proof surface for expressing this lifecycle as protocol vocabulary, while Cognitive OS, SoloCrew, and Validation Lab explore runtime, product, and evidence surfaces.",
    evidenceRoute:
      "The evidence route starts with the origin essay, because it explains why the category grew out of real engineering failure boundaries. From there, the MPLP proof surface shows how lifecycle concepts can become protocol records, while Validation Lab keeps the delivery claim tied to inspectable evidence. The route is intentionally modest: it shows a thesis, a vocabulary, and proof surfaces, not market adoption.",
    relatedEssays: [
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "cognitive-os", "validation-lab"],
    relatedTerms: ["agentic-delivery", "intent-drift", "context-drift", "lifecycle-evidence", "protocol-engineering"],
    keywords: [
      "AI Agent Lifecycle",
      "AI agent work continuity",
      "production-grade AI agents",
      "multi-agent systems",
      "accepted outcome"
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
      "Within AI Agent Lifecycle, Intent Drift is one of the core failure modes the lifecycle is designed to detect and reduce. The lifecycle asks for a traceable path from intent to context, plan, confirmation, execution, evidence, review, and accepted outcome. If that path cannot be reconstructed, drift becomes invisible until a human notices the mismatch. Protocol Engineering makes the intent object explicit; Lifecycle Evidence makes the adherence inspectable.",
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
      "AI Agent Lifecycle treats context as a stateful layer that must be loaded, updated, invalidated, and evidenced as work moves forward. Context Drift is closely tied to Intent Drift: once context stops representing the real project state, intent becomes easier to reinterpret incorrectly. Cognitive OS is the runtime proof surface for this concern, while Lifecycle Evidence and MPLP show why context needs traceable links to plans, confirmations, and outcomes.",
    evidenceRoute:
      "The evidence route for Context Drift starts in the origin essay's discussion of summaries, rule files, and stale project state. It continues through Cognitive OS as the runtime proof surface: the place where context has to become active state, not background reading. Validation Lab matters because context validity eventually has to be checked against evidence, especially when the same work resumes across sessions or agents.",
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
      "Agentic Delivery is the shift from isolated AI agent task execution to reliable project delivery across a lifecycle.",
    definition:
      "Agentic Delivery is the shift from asking whether an agent can execute a task to asking whether an agent system can deliver real work. Delivery means carrying human intent through context, planning, confirmation, execution, evidence, review, and accepted outcome. It is a project-level concept, not a prompt-level compliment. An agent that can act is useful; an agent system that can deliver must preserve meaning, authority, and evidence across time.",
    problem:
      "The problem it names is the industry's habit of measuring the wrong unit. Tool calls, workflow runs, latency, traces, and evaluation scores matter, but they mostly describe execution. Real work is judged at the level of projects and outcomes. A system can score well on local execution while failing to carry the original objective, maintain accountability, recover from change, or prove why the final result should be accepted.",
    whyExistingApproachesAreNotEnough:
      "Execution frameworks make agents runnable. AgentOps makes behavior more observable. Evals make selected outputs measurable. These are necessary foundations, but they do not automatically create delivery. Delivery requires an architecture that binds intent to plan, plan to confirmation, confirmation to action, action to evidence, and evidence to acceptance. Without that chain, the system may be operationally impressive but still weak as a work-delivery environment.",
    relationToLifecycle:
      "Agentic Delivery is the broader thesis; AI Agent Lifecycle is the work-continuity layer that makes the thesis legible. If Agentic Delivery asks whether AI agents can deliver projects, the lifecycle asks what must stay continuous for delivery to be trustworthy. MPLP defines protocol language for the chain. SoloCrew explores the product proof of a governed operating loop. Validation Lab examines whether delivery claims can be checked against evidence.",
    evidenceRoute:
      "The evidence route begins with the Agentic Delivery essay, where the unit of analysis moves from task execution to project delivery. The lifecycle page then gives the category entry for what must remain continuous. SoloCrew is the product proof route because it asks whether a governed operating loop can make that thesis usable. Validation Lab is the evidence route because delivery claims need more than fluent outputs.",
    relatedEssays: [
      "agentic-ai-inflection-point-project-delivery",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle"
    ],
    relatedProjects: ["solocrew", "mplp", "validation-lab"],
    relatedTerms: ["ai-agent-lifecycle", "confirmation-boundary", "lifecycle-evidence", "ai-agent-governance"],
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
      "AI Agent Lifecycle gives governance a place to live. Instead of treating governance as a separate compliance layer, the lifecycle binds governance to the path from intent to accepted outcome. Confirmation Boundary is one governance primitive. Lifecycle Evidence is another. Protocol Engineering makes those primitives explicit enough to be implemented across agent systems without claiming that one implementation has become universal.",
    evidenceRoute:
      "The evidence route for AI Agent Governance starts with the MCP/A2A lifecycle governance essay, because that essay separates tool access and agent coordination from lifecycle authority. From there, MPLP gives the protocol proof surface for context, plan, confirm, trace, and evidence. Validation Lab keeps the governance claim accountable by asking what records would let a reviewer inspect authorization, action, and outcome. This keeps governance practical: the question is not whether a page claims safety, but whether the system can show the authority path behind the work. That path is what makes governance inspectable after the agent has already acted and after memory has faded.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "validation-lab", "solocrew"],
    relatedTerms: ["confirmation-boundary", "lifecycle-evidence", "protocol-engineering", "ai-agent-lifecycle"],
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
    term: "Lifecycle Evidence",
    seoTitle: "Lifecycle Evidence for AI Agent Systems",
    seoDescription:
      "Lifecycle Evidence is the inspectable proof chain that connects AI agent intent, plan, confirmation, execution, review, and accepted outcome.",
    definition:
      "Lifecycle Evidence is the inspectable proof chain that connects agent work from intent to accepted outcome. It includes the artifacts needed to reconstruct why the work began, what context was active, what plan was approved, which confirmations were required, what actions occurred, what changed, how the result was reviewed, and why the outcome was accepted or rejected. Evidence is not the same as raw logs. It is structured support for a delivery claim.",
    problem:
      "The problem it names is that many agent systems can say they completed work without showing enough evidence to trust the claim. A trace may show calls. A diff may show changes. A chat transcript may show discussion. But none of those alone proves that the result satisfied the original intent under the approved constraints. Without lifecycle evidence, reliability becomes a narrative rather than an inspectable condition.",
    whyExistingApproachesAreNotEnough:
      "Observability tools are valuable, but they often describe system behavior from the runtime outward. Lifecycle Evidence starts from the delivery claim and asks what must be visible for that claim to be assessed. Evaluations can test outputs, but they may not preserve authority, context, confirmation, or acceptance state. Audit logs can record events, but they may not explain whether the events were legitimate within the lifecycle.",
    relationToLifecycle:
      "AI Agent Lifecycle depends on evidence because continuity must be inspectable. If a system cannot show how intent became plan, how plan became confirmed action, and how action became an accepted outcome, the lifecycle is only implied. Validation Lab is the proof surface most directly tied to Lifecycle Evidence. MPLP supplies protocol vocabulary for evidence-bearing records, while Cognitive OS explores how runtime state can keep evidence attached to work.",
    evidenceRoute:
      "The evidence route is direct: start with the Agentic Delivery essay to understand why accepted outcome matters, then read the governance essay for the protocol gap above MCP and A2A. Validation Lab is the main proof surface because it treats evidence as something to inspect rather than something to assert. MPLP and Cognitive OS explain how evidence can be represented and kept attached to lifecycle state.",
    relatedEssays: [
      "agentic-ai-inflection-point-project-delivery",
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "ai-agent-lifecycle-it-was-not-designed-it-grew"
    ],
    relatedProjects: ["validation-lab", "mplp", "cognitive-os"],
    relatedTerms: ["ai-agent-lifecycle", "ai-agent-governance", "context-drift", "confirmation-boundary"],
    keywords: [
      "Lifecycle Evidence",
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
      "Within AI Agent Lifecycle, Confirmation Boundary sits between plan and execution. It is one of the points where human authority enters the lifecycle in a structured way. Protocol Engineering can model the boundary as a record rather than a chat message. AI Agent Governance uses it to preserve accountability. SoloCrew is the product proof surface where confirmation boundaries matter as part of an operating loop.",
    evidenceRoute:
      "The evidence route for Confirmation Boundary starts with the lifecycle governance essay, where confirmation is treated as a protocol primitive rather than a decorative checkpoint. SoloCrew is the most concrete product route because confirmation boundaries have to feel usable inside a working loop. MPLP provides the protocol vocabulary, and Validation Lab asks whether the resulting approval record is enough for later review. The boundary should explain the approved plan, the excluded scope, the expected evidence, and the return condition before the agent continues. That makes approval durable enough to audit rather than merely visible in a UI at execution time.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
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
      "Application logic can encode local rules, but those rules often stay trapped inside one product. Prompt rules can guide behavior, but they are hard to validate across systems. Observability can expose events, but it may not define their meaning. Protocol Engineering gives teams a way to name the objects and transitions that must survive beyond one interface or runtime, without claiming that every team must adopt the same implementation.",
    relationToLifecycle:
      "AI Agent Lifecycle supplies the conceptual boundary for Protocol Engineering in this site architecture. It identifies what has to remain continuous; Protocol Engineering turns that continuity into explicit records, modules, and interfaces. MPLP is the protocol proof surface for this work. AI Agent Governance, Confirmation Boundary, and Lifecycle Evidence are examples of lifecycle concepts that become more useful when expressed as protocol primitives.",
    evidenceRoute:
      "The evidence route for Protocol Engineering starts with MPLP because it is the protocol proof surface, but the essays explain why the protocol question exists. The governance essay names the missing layer above tool access and coordination. The lifecycle origin essay explains how real project failure boundaries pushed the category into view. Validation Lab then tests whether protocol language produces evidence that can be inspected.",
    relatedEssays: [
      "mcp-connects-tools-a2a-connects-agents-who-governs-the-lifecycle",
      "ai-agent-lifecycle-it-was-not-designed-it-grew",
      "agentic-ai-inflection-point-project-delivery"
    ],
    relatedProjects: ["mplp", "cognitive-os", "solocrew", "validation-lab"],
    relatedTerms: ["ai-agent-lifecycle", "ai-agent-governance", "confirmation-boundary", "lifecycle-evidence"],
    keywords: [
      "Protocol Engineering",
      "AI agent protocol",
      "MPLP",
      "AI Agent Lifecycle Protocol",
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
    lead: "The public arguments behind Agentic Delivery, AI Agent Lifecycle, lifecycle governance, and the stack proof."
  },
  lifecycle: {
    title: "AI Agent Lifecycle",
    subtitle: "Define The AI Agent Lifecycle",
    objectType: "MAIN_THEORY_ENTRY",
    objectValue: "WORK CONTINUITY LAYER",
    lead: "The main theory entry for how agent work remains continuous through intent, context, plan, confirmation, evidence, learning, and accepted outcome."
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
    lead: "A low-noise stream on Agentic Delivery, Define The AI Agent Lifecycle, lifecycle governance, and protocol-grade AI agent systems."
  },
  concepts: {
    title: "Concepts for AI Agent Lifecycle",
    objectType: "PAGE_ROLE",
    objectValue: "CONCEPT MAP",
    lead: "A concise conceptual map for AI Agent Lifecycle, Agentic Delivery, Intent Drift, AI Agent Governance, and Protocol Engineering."
  }
};

export const theoryClusters = [
  {
    slug: "ai-agent-lifecycle",
    name: "AI Agent Lifecycle",
    description:
      "The work-continuity category behind Agentic Delivery: how agent work keeps intent, context, decisions, evidence, learning, and accepted outcome coherent through time.",
    prompt: "What must stay continuous for agent work to remain traceable, reversible, accountable, and acceptable?",
    essayPath: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/",
    essayLabel: "Read the origin essay",
    proofPath: "/projects/mplp/",
    proofLabel: "Open the later protocol proof"
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
    relatedConcepts: ["ai-agent-lifecycle", "protocol-engineering", "lifecycle-evidence"],
    relatedEssays: [
      {
        href: "/essays/ai-agent-lifecycle-it-was-not-designed-it-grew/",
        label: "AI Agent Lifecycle origin essay"
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
    relatedConcepts: ["context-drift", "lifecycle-evidence"],
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
    relatedConcepts: ["agentic-delivery", "confirmation-boundary"],
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
    relatedConcepts: ["lifecycle-evidence", "ai-agent-governance"],
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
    "Follow the public development of Agentic Delivery, Define The AI Agent Lifecycle, lifecycle governance, and protocol-grade AI agent systems.",
  cadence:
    "New notes go out when there is a real thesis, column essay, framework, proof update, or evidence surface to report.",
  topics: [
    "Agentic Delivery and project lifecycle design",
    "Define The AI Agent Lifecycle, starting from the published origin essay",
    "the upcoming four-layer AI Agent Lifecycle definition",
    "lifecycle governance above MCP and A2A",
    "protocol, runtime, product, and evidence surfaces",
    "field notes from MPLP, Cognitive OS, SoloCrew, and Validation Lab"
  ],
  boundary: "No generic marketing drip, sponsor inserts, or forced cadence."
};
