export const governanceIndexPath = "/governance/";

export const regulatoryGovernanceBoundary =
  "These pages provide author-analytical lifecycle governance mappings. They are not legal advice, legal compliance proof, certification, regulator-approved guidance, procurement recommendation, vendor ranking, or official standards-body guidance.";

export interface GovernanceSource {
  label: string;
  url: string;
  scope: string;
}

export interface GovernanceMapping {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  summary: string;
  boundary: string;
  lifecycleLens: string;
  keyQuestions: string[];
  relatedObjects: string[];
  rccsAlcs: string;
  enterpriseUse: string;
  sourceBoundary: string;
  sources: GovernanceSource[];
  relatedLinks: Array<{ href: string; label: string }>;
  keywords: string[];
}

const commonGovernanceLinks = [
  { href: "/concepts/agentic-lifecycle-governance/", label: "Agentic Lifecycle Governance" },
  { href: "/research/global-ai-compliance-white-paper-2026/", label: "Global AI Compliance White Paper 2026" },
  { href: "/research/agentic-ai-auditability-assurance-white-paper-2026/", label: "Agentic AI Auditability & Assurance White Paper 2026" },
  { href: "/research/agentic-ai-insurability-risk-transfer-white-paper-2026/", label: "AIIRWP v1.0 rewrite status" },
  { href: "/concepts/missing-regulatory-objects/", label: "Missing Regulatory Objects" },
  { href: "/concepts/rccs-m/", label: "RCCS-M" },
  { href: "/concepts/alcs/", label: "ALCS" },
  { href: "/concepts/lifecycle-evidence/", label: "Evidence Chain" },
  { href: "/concepts/authority-boundary/", label: "Authority Boundary" },
  { href: "/concepts/accepted-outcome/", label: "Accepted Outcome" },
  { href: "/concepts/deterministic-delivery/", label: "Deterministic Delivery" },
  { href: "/concepts/agent-architecture-governance/", label: "Agent Architecture Governance" },
  { href: "/projects/mplp/", label: "MPLP protocol path" },
  { href: "/playbooks/", label: "Applied Playbooks" }
];

export const officialGovernanceSources = {
  euAiAct: {
    label: "Regulation (EU) 2024/1689, Artificial Intelligence Act",
    url: "https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32024R1689",
    scope:
      "Official EU legal text used as regulatory context for cautious lifecycle mapping. It is not converted into legal advice."
  },
  gdpr: {
    label: "Regulation (EU) 2016/679, General Data Protection Regulation",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
    scope:
      "Official EU legal text used as privacy and personal-data context for evidence-chain and retention mapping."
  },
  edpbAutomatedDecisionMaking: {
    label: "EDPB automated decision-making and profiling guidance",
    url: "https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/automated-decision-making-and-profiling_en",
    scope:
      "Official EDPB guidance context for GDPR automated decision-making and profiling. It is not used to create legal conclusions."
  },
  nistAiRmf: {
    label: "NIST AI Risk Management Framework 1.0",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
    scope:
      "Official NIST AI RMF source used for voluntary risk-management context and Govern, Map, Measure, Manage mapping."
  },
  nistAiRmfOverview: {
    label: "NIST AI Risk Management Framework overview",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    scope:
      "Official NIST overview noting the AI RMF is intended for voluntary use across AI design, development, use, and evaluation."
  },
  iso42001: {
    label: "ISO/IEC 42001:2023 official ISO overview",
    url: "https://www.iso.org/standard/42001",
    scope:
      "Official ISO overview used for AI management system context. It is not used as certification advice."
  },
  imdaGenAi: {
    label: "Singapore IMDA Model AI Governance Framework for Generative AI",
    url: "https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2024/public-consult-model-ai-governance-framework-genai",
    scope:
      "Official IMDA governance context used only as a comparative governance signal, not as legal or regulatory authority."
  }
} satisfies Record<string, GovernanceSource>;

export const governanceMappings: GovernanceMapping[] = [
  {
    slug: "ai-agent-governance",
    title: "AI Agent Governance",
    seoTitle: "AI Agent Governance and Lifecycle Responsibility",
    seoDescription:
      "AI Agent Governance maps delegated agent work to lifecycle responsibility objects: authority boundaries, evidence chains, accepted outcomes, rollback, remediation, RCCS-M, and ALCS.",
    category: "Lifecycle governance",
    summary:
      "AI Agent Governance treats agent work as a lifecycle responsibility problem. Model governance remains necessary, but agentic work also needs authority, evidence, acceptance, rollback, remediation, and closure.",
    boundary:
      `${regulatoryGovernanceBoundary} This is the preferred canonical governance mapping route for AI Agent Governance; /ai-agent-governance/ and /concepts/ai-agent-governance/ are retained as bridge and concept-context routes.`,
    lifecycleLens:
      "The lifecycle lens asks who authorized agent action, what evidence supports it, who accepts the outcome, and how the work can be disputed, remediated, or rolled back.",
    keyQuestions: [
      "Which human or organizational role owns the agent's delegated authority?",
      "What evidence chain supports the work from intent to accepted outcome?",
      "Where does a completed output become accepted responsibility?",
      "How are rollback, dispute, remediation, and closure recorded?",
      "What changes when model, tool, runtime, or vendor substitution occurs?"
    ],
    relatedObjects: [
      "Authority Boundary",
      "Evidence Chain",
      "Accepted Outcome",
      "Rollbackable Agent Workflows",
      "Remediation Closure",
      "Lifecycle Responsibility Objects"
    ],
    rccsAlcs:
      "RCCS-M is relevant because AI agent governance must express lifecycle responsibility objects. ALCS is relevant because authority, evidence, acceptance, dispute, remediation, and closure must remain coherent after execution begins.",
    enterpriseUse:
      "Enterprise teams can use this page as a vocabulary bridge between AI governance programs and the work-specific evidence expected from agentic systems.",
    sourceBoundary:
      "This page relies on GAIC as the author-analytical source for lifecycle responsibility objects, MRO, RCCS-M, and ALCS. It does not make a specific legal or standards compliance claim, certify any system, or state that MPLP is required.",
    sources: [],
    relatedLinks: [
      { href: "/concepts/ai-agent-governance/", label: "AI Agent Governance concept bridge" },
      { href: "/ai-agent-governance/", label: "AI Agent Governance field bridge" },
      ...commonGovernanceLinks
    ],
    keywords: [
      "AI Agent Governance",
      "AI agent compliance",
      "agentic lifecycle governance",
      "Agentic AI Auditability",
      "Evidence Chain",
      "Accepted Outcome",
      "Authority Boundary",
      "RCCS-M",
      "ALCS"
    ]
  },
  {
    slug: "multi-agent-system-governance",
    title: "Multi-Agent System Governance",
    seoTitle: "Multi-Agent System Governance",
    seoDescription:
      "Multi-Agent System Governance maps MAS coordination to human-role responsibility, evidence partitioning, responsibility transfer, dispute, remediation, and accepted outcome.",
    category: "MAS governance",
    summary:
      "Multi-Agent System Governance is not only coordination between agents. It is responsibility architecture across humans, agents, tools, projects, evidence partitions, transfers, disputes, and remediation.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens separates communication topology from responsibility continuity. It asks whether work remains attributable as it crosses agents, tools, roles, projects, and review states.",
    keyQuestions: [
      "Which human role owns intent, delegation, review, acceptance, dispute, and remediation?",
      "How is evidence partitioned when agents exchange information or delegate work?",
      "What responsibility transfer record exists when work crosses an agent boundary?",
      "How is cross-project reuse governed and evidenced?",
      "How do disputes and remediation close when multiple agents contributed?"
    ],
    relatedObjects: [
      "Human Role Responsibility Mapping",
      "Evidence Partitioning",
      "Responsibility Transfer",
      "Cross-Project Reuse",
      "Dispute Object",
      "Remediation Closure"
    ],
    rccsAlcs:
      "RCCS-M is relevant because MAS governance requires expressible objects for transfer, evidence, acceptance, and remediation. ALCS is relevant because those objects must stay coherent across multi-agent handoffs.",
    enterpriseUse:
      "Enterprise teams can use this page to distinguish MAS orchestration from MAS accountability before deploying multi-agent workflows across departments or projects.",
    sourceBoundary:
      "This page is grounded in GAIC lifecycle responsibility language and does not claim that a particular MAS architecture is legally sufficient.",
    sources: [],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/playbooks/human-role-to-mas-responsibility/", label: "Human Role to MAS Responsibility" },
      { href: "/concepts/lifecycle-role-decomposition/", label: "Lifecycle Role Decomposition" }
    ],
    keywords: [
      "Multi-Agent System Governance",
      "MAS governance",
      "multi-agent responsibility",
      "human role responsibility mapping",
      "evidence partitioning",
      "Agentic Lifecycle Governance"
    ]
  },
  {
    slug: "enterprise-agent-governance",
    title: "Enterprise Agent Governance",
    seoTitle: "Enterprise Agent Governance",
    seoDescription:
      "Enterprise Agent Governance translates lifecycle responsibility into enterprise accountability, context boundaries, auditability, evidence retention, substitution, accepted outcome, and incident closure.",
    category: "Enterprise governance",
    summary:
      "Enterprise Agent Governance translates AI agent work into control language: ownership, project boundaries, auditability, evidence retention, substitution, accepted outcome, incident closure, and board-readable risk.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks whether enterprise control evidence can reconstruct authorized work, accepted outcomes, exceptions, substitutions, incidents, and remediation.",
    keyQuestions: [
      "Which enterprise role owns the agent workflow and its accepted outcome?",
      "Which project and context boundaries constrain the agent's work?",
      "What evidence is retained, minimized, partitioned, and reviewable?",
      "How are vendor, model, runtime, tool, or harness substitutions recorded?",
      "How does incident closure link to accepted outcome and remediation records?"
    ],
    relatedObjects: [
      "Enterprise AI Control Evidence",
      "Project Boundary",
      "Context Boundary",
      "Evidence Retention",
      "Vendor / Runtime Substitution Conformance",
      "Incident Closure"
    ],
    rccsAlcs:
      "RCCS-M is relevant because enterprise governance must express control evidence as lifecycle responsibility objects. ALCS is relevant because enterprise workflows need continuity across project boundaries, substitutions, incidents, and closure.",
    enterpriseUse:
      "Enterprise teams can use this as a routing page for control owners, audit teams, model risk teams, security teams, and product leaders translating agent execution into governance evidence.",
    sourceBoundary:
      "This page provides enterprise control mapping language and does not replace internal audit, legal, security, privacy, or compliance review.",
    sources: [officialGovernanceSources.iso42001, officialGovernanceSources.nistAiRmfOverview],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/ai-agent-evidence-retention/", label: "AI Agent Evidence Retention" },
      { href: "/governance/vendor-runtime-substitution-conformance/", label: "Vendor and Runtime Substitution Conformance" },
      { href: "/governance/incident-dispute-remediation-closure/", label: "Incident, Dispute, and Remediation Closure" }
    ],
    keywords: [
      "Enterprise Agent Governance",
      "enterprise AI agent governance",
      "AI agent auditability",
      "Agentic AI Auditability & Assurance White Paper 2026",
      "evidence retention",
      "vendor substitution",
      "incident closure"
    ]
  },
  {
    slug: "ai-agent-compliance",
    title: "AI Agent Compliance",
    seoTitle: "AI Agent Compliance",
    seoDescription:
      "AI Agent Compliance maps compliance questions from model-centric governance to lifecycle responsibility: MRO, RCCS-M, ALCS, evidence, acceptance, remediation, and legal-review boundaries.",
    category: "Compliance mapping",
    summary:
      "AI Agent Compliance means compliance analysis cannot stop at model properties when agent work crosses authority, tools, evidence, acceptance, dispute, remediation, and substitution.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens frames compliance as responsibility evidence across the work path, not as a claim that an agent or platform is legally compliant because it has logs, evals, or policies.",
    keyQuestions: [
      "Which compliance obligation is being analyzed, and which lifecycle object expresses it?",
      "Does the evidence chain show authorized work rather than only runtime behavior?",
      "Is there an accepted outcome owner and review record?",
      "Can disputes, remediation, rollback, and closure be reconstructed?",
      "Which questions require legal or compliance counsel before operational use?"
    ],
    relatedObjects: [
      "MRO",
      "RCCS-M",
      "ALCS",
      "Evidence Chain",
      "Accepted Outcome",
      "Legal Review Boundary"
    ],
    rccsAlcs:
      "RCCS-M is the MRO-adjusted compliance coverage lens. ALCS adds lifecycle coherence, asking whether responsibility survives through intent, authority, evidence, acceptance, dispute, remediation, and closure.",
    enterpriseUse:
      "Compliance teams can use this page as a non-legal concept map for deciding what evidence to ask engineering, product, model risk, privacy, and operations teams to produce.",
    sourceBoundary:
      "Specific legal compliance conclusions are outside this site. Legal and compliance counsel should review jurisdiction-specific obligations.",
    sources: [
      officialGovernanceSources.euAiAct,
      officialGovernanceSources.gdpr,
      officialGovernanceSources.nistAiRmf,
      officialGovernanceSources.iso42001
    ],
    relatedLinks: commonGovernanceLinks,
    keywords: [
      "AI Agent Compliance",
      "AI agent compliance",
      "agentic AI compliance",
      "MRO",
      "RCCS-M",
      "ALCS",
      "legal review boundary"
    ]
  },
  {
    slug: "eu-ai-act-agentic-systems",
    title: "EU AI Act and Agentic Systems",
    seoTitle: "EU AI Act and Agentic Systems",
    seoDescription:
      "A cautious lifecycle governance mapping between EU AI Act themes and agentic system objects such as human oversight, transparency, record keeping, monitoring, contestability, and remediation.",
    category: "Regulatory mapping",
    summary:
      "This page maps selected EU AI Act themes to agentic lifecycle objects. It does not state that GAIC, MPLP, or any page here satisfies the EU AI Act.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks how human oversight, transparency, logging, monitoring, explanation, and contestability themes can be analyzed through authority, evidence, accepted outcome, dispute, and remediation objects.",
    keyQuestions: [
      "Where does human oversight become a recorded authority boundary?",
      "What evidence supports transparency or explanation after an agentic action?",
      "What logging or record-keeping is needed for lifecycle review rather than raw event capture?",
      "How does monitoring connect to remediation and closure?",
      "How are contestability and GDPR automated-decision rights distinguished from a general explanation narrative?"
    ],
    relatedObjects: [
      "Human Oversight",
      "Transparency",
      "Record Keeping",
      "Post-Market Monitoring",
      "Authority Boundary",
      "Dispute and Remediation Closure"
    ],
    rccsAlcs:
      "RCCS-M is relevant because EU AI Act themes can be mapped to lifecycle responsibility objects only if those objects are expressible. ALCS is relevant because the objects must remain coherent after the agent acts.",
    enterpriseUse:
      "Risk, compliance, product, and engineering teams can use this as a discussion map before legal counsel reviews actual EU AI Act obligations for a specific system and role.",
    sourceBoundary:
      "EU AI Act references are source-qualified to the official Regulation text. This page does not provide legal interpretation or compliance advice.",
    sources: [officialGovernanceSources.euAiAct, officialGovernanceSources.gdpr, officialGovernanceSources.edpbAutomatedDecisionMaking],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/gdpr-agentic-ai-evidence/", label: "GDPR and Agentic AI Evidence" },
      { href: "/governance/ai-agent-compliance/", label: "AI Agent Compliance" }
    ],
    keywords: [
      "EU AI Act and agentic systems",
      "EU AI Act AI agents",
      "AI agent compliance",
      "human oversight",
      "record keeping",
      "post-market monitoring",
      "Article 86",
      "GDPR Article 22"
    ]
  },
  {
    slug: "gdpr-agentic-ai-evidence",
    title: "GDPR and Agentic AI Evidence",
    seoTitle: "GDPR and Agentic AI Evidence",
    seoDescription:
      "A cautious lifecycle governance mapping for GDPR and agentic AI evidence: evidence minimization, data subject rights, processor chains, privacy-preserving validation, and retention boundaries.",
    category: "Privacy mapping",
    summary:
      "GDPR and Agentic AI Evidence frames the tension between preserving enough evidence to review agent work and minimizing personal data exposure across lifecycle records.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks how evidence chain, retention, minimization, data subject rights, processor responsibility, and validation can coexist without treating raw logs as governance.",
    keyQuestions: [
      "What personal data enters the evidence chain, and why is it needed?",
      "Can evidence be minimized, partitioned, redacted, or hashed while preserving reviewability?",
      "How are data subject rights considered when evidence is retained for replay, dispute, or remediation?",
      "Which controller, processor, or subprocessors touch the evidence chain?",
      "What legal review is needed before retaining or disclosing agentic evidence?"
    ],
    relatedObjects: [
      "Evidence Chain",
      "Evidence Minimization",
      "Evidence Partitioning",
      "Processor Chain",
      "Privacy-Preserving Validation",
      "Retention Boundary"
    ],
    rccsAlcs:
      "RCCS-M is relevant because privacy obligations need lifecycle objects for evidence partitioning, processor chains, and data subject rights reconciliation. ALCS is relevant because evidence must remain coherent without excessive retention.",
    enterpriseUse:
      "Privacy, security, legal, and platform teams can use this page to discuss evidence retention requirements before designing agent traces, audit records, or validation packs.",
    sourceBoundary:
      "GDPR references are source-qualified to official EU and EDPB sources. This page does not decide lawful basis, retention periods, data subject request handling, or cross-border transfer rules.",
    sources: [officialGovernanceSources.gdpr, officialGovernanceSources.edpbAutomatedDecisionMaking],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/ai-agent-evidence-retention/", label: "AI Agent Evidence Retention" },
      { href: "/projects/validation-lab/", label: "Validation Lab" }
    ],
    keywords: [
      "GDPR and agentic AI evidence",
      "AI agent evidence retention",
      "privacy preserving validation",
      "processor chain",
      "data subject rights",
      "evidence minimization"
    ]
  },
  {
    slug: "nist-ai-rmf-agentic-lifecycle",
    title: "NIST AI RMF and Agentic Lifecycle Governance",
    seoTitle: "NIST AI RMF and Agentic Lifecycle Governance",
    seoDescription:
      "A non-official mapping from NIST AI RMF Govern, Map, Measure, and Manage functions to agentic lifecycle governance concepts such as evidence chain, authority boundary, accepted outcome, monitoring, and remediation.",
    category: "Risk framework mapping",
    summary:
      "This page maps NIST AI RMF risk-management language to agentic lifecycle governance. It is a non-official crosswalk, not NIST guidance.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens maps Govern to authority and role ownership, Map to lifecycle context and impact, Measure to evidence and review, and Manage to remediation, rollback, monitoring, and closure.",
    keyQuestions: [
      "How does governance define roles, authority boundaries, and risk ownership?",
      "How are agentic contexts, users, tools, and impacts mapped before execution?",
      "What evidence supports measurement beyond output quality?",
      "How does monitoring trigger remediation, rollback, dispute, or accepted outcome revision?",
      "How does a voluntary risk framework become operational lifecycle practice?"
    ],
    relatedObjects: [
      "Govern",
      "Map",
      "Measure",
      "Manage",
      "Authority Boundary",
      "Evidence Chain",
      "Accepted Outcome",
      "Remediation Closure"
    ],
    rccsAlcs:
      "RCCS-M is relevant because risk-management functions need lifecycle responsibility objects to become inspectable in agent workflows. ALCS is relevant because those objects must stay connected through monitoring and remediation.",
    enterpriseUse:
      "Risk teams can use this page to translate voluntary NIST AI RMF language into engineering questions for agentic systems without implying NIST endorsement.",
    sourceBoundary:
      "NIST AI RMF is cited as official NIST source context. The mapping is author-analytical and not official NIST guidance.",
    sources: [officialGovernanceSources.nistAiRmf, officialGovernanceSources.nistAiRmfOverview],
    relatedLinks: commonGovernanceLinks,
    keywords: [
      "NIST AI RMF and agentic lifecycle governance",
      "NIST AI RMF AI agents",
      "Govern Map Measure Manage",
      "AI risk management",
      "Evidence Chain",
      "Authority Boundary",
      "Accepted Outcome"
    ]
  },
  {
    slug: "iso-42001-agentic-ai",
    title: "ISO/IEC 42001 and Agentic AI Management Systems",
    seoTitle: "ISO/IEC 42001 and Agentic AI Management Systems",
    seoDescription:
      "A cautious mapping between ISO/IEC 42001 AI management system language and agentic AI lifecycle responsibility objects, governance profiles, audit evidence, remediation, and continuous improvement.",
    category: "Management system mapping",
    summary:
      "This page maps ISO/IEC 42001 AI management system language to agentic lifecycle responsibility. It is not certification advice.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks how an AI management system can express governance profiles, authority limits, evidence expectations, accepted outcomes, remediation records, and continuous improvement for agentic work.",
    keyQuestions: [
      "What is the scope of the AI management system for agentic workflows?",
      "Which governance profiles define authority, context, tools, substitutions, review, and acceptance?",
      "What audit evidence shows lifecycle responsibility rather than only policy existence?",
      "How are incidents, disputes, remediation, and continuous improvement closed?",
      "Which certification or conformity questions require qualified ISO/IEC 42001 specialists?"
    ],
    relatedObjects: [
      "AI Management System",
      "Governance Profile",
      "Audit Evidence",
      "Continuous Improvement",
      "Remediation Closure",
      "Configuration Evidence"
    ],
    rccsAlcs:
      "RCCS-M is relevant because an AI management system for agents needs expressible lifecycle objects. ALCS is relevant because management-system evidence must remain coherent across work, review, remediation, and improvement cycles.",
    enterpriseUse:
      "Organizations can use this page as a vocabulary bridge between AI management systems and agentic lifecycle evidence before consulting qualified standards, audit, legal, and compliance advisers.",
    sourceBoundary:
      "ISO/IEC 42001 is cited through the official ISO overview. This page does not provide certification, audit, implementation, or conformity advice.",
    sources: [officialGovernanceSources.iso42001],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/concepts/configurable-agent-governance/", label: "Configurable Agent Governance" },
      { href: "/governance/enterprise-agent-governance/", label: "Enterprise Agent Governance" }
    ],
    keywords: [
      "ISO/IEC 42001 and agentic AI",
      "ISO 42001 AI agents",
      "AI management system",
      "agentic AI management system",
      "audit evidence",
      "governance profiles"
    ]
  },
  {
    slug: "human-role-responsibility-mapping",
    title: "Human Role Responsibility Mapping",
    seoTitle: "Human Role Responsibility Mapping for AI Agents",
    seoDescription:
      "Human Role Responsibility Mapping connects human roles to delegated authority, accepted outcome ownership, dispute ownership, remediation ownership, and cross-project reuse in AI agent systems.",
    category: "Responsibility mapping",
    summary:
      "Human Role Responsibility Mapping makes human authority visible before agents act and after outcomes are reviewed, disputed, remediated, reused, or closed.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks which human or organizational role owns each responsibility state rather than treating human-in-the-loop as a generic checkpoint.",
    keyQuestions: [
      "Who owns intent and active constraints?",
      "Who can delegate authority and approve consequential action?",
      "Who accepts, rejects, or escalates the outcome?",
      "Who owns disputes, rollback decisions, and remediation closure?",
      "Who owns cross-project reuse and evidence retention decisions?"
    ],
    relatedObjects: [
      "Human Role",
      "Agent Role",
      "Delegated Authority",
      "Accepted Outcome Owner",
      "Dispute Owner",
      "Remediation Owner",
      "Cross-Project Reuse Owner"
    ],
    rccsAlcs:
      "RCCS-M is relevant because human responsibility must be expressible as lifecycle objects. ALCS is relevant because human role ownership must stay coherent across delegation, execution, review, dispute, remediation, and closure.",
    enterpriseUse:
      "Enterprise teams can use this page to separate accountable role ownership from generic HITL, approval, or review language.",
    sourceBoundary:
      "This page is an author-analytical responsibility-mapping guide and does not assign legal liability or employment responsibility.",
    sources: [],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/playbooks/human-role-to-mas-responsibility/", label: "Human Role to MAS Responsibility" },
      { href: "/projects/solocrew/", label: "SoloCrew" }
    ],
    keywords: [
      "Human Role Responsibility Mapping",
      "human role AI agents",
      "delegated authority",
      "accepted outcome owner",
      "dispute owner",
      "remediation owner"
    ]
  },
  {
    slug: "ai-agent-evidence-retention",
    title: "AI Agent Evidence Retention",
    seoTitle: "AI Agent Evidence Retention",
    seoDescription:
      "AI Agent Evidence Retention maps evidence chains, logs, evidence minimization, retention boundaries, privacy tension, replay, dispute, remediation, and lifecycle evidence partitioning.",
    category: "Evidence governance",
    summary:
      "AI Agent Evidence Retention distinguishes evidence chains from raw logs. The goal is to preserve enough lifecycle proof for review, replay, dispute, and remediation without retaining unnecessary sensitive data.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens asks what evidence must survive, what can be minimized, what must be partitioned, who can access it, and when retention should close.",
    keyQuestions: [
      "Which evidence is necessary to support a delivery claim?",
      "Which raw logs are excessive, sensitive, stale, or irrelevant?",
      "How is evidence partitioned across roles, vendors, processors, and reviewers?",
      "Can the work be replayed or disputed without exposing unnecessary personal data?",
      "What retention and deletion questions require privacy/legal review?"
    ],
    relatedObjects: [
      "Evidence Chain",
      "Evidence Minimization",
      "Retention Boundary",
      "Evidence Partitioning",
      "Replay",
      "Dispute",
      "Remediation"
    ],
    rccsAlcs:
      "RCCS-M is relevant because evidence retention must express lifecycle objects rather than preserve undifferentiated logs. ALCS is relevant because evidence must stay coherent through review, dispute, remediation, and closure.",
    enterpriseUse:
      "Privacy, security, audit, and platform teams can use this page to design evidence packs that are reviewable without becoming uncontrolled data hoards.",
    sourceBoundary:
      "This page does not define lawful retention periods or data subject rights handling. Privacy and legal teams should review jurisdiction-specific requirements.",
    sources: [officialGovernanceSources.gdpr],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/gdpr-agentic-ai-evidence/", label: "GDPR and Agentic AI Evidence" },
      { href: "/projects/validation-lab/", label: "Validation Lab" }
    ],
    keywords: [
      "AI Agent Evidence Retention",
      "AI agent logs",
      "Evidence Chain",
      "evidence minimization",
      "retention boundary",
      "privacy preserving validation",
      "lifecycle evidence partitioning"
    ]
  },
  {
    slug: "vendor-runtime-substitution-conformance",
    title: "Vendor and Runtime Substitution Conformance",
    seoTitle: "Vendor and Runtime Substitution Conformance",
    seoDescription:
      "Vendor and Runtime Substitution Conformance maps model, runtime, tool, vendor, prompt, and harness substitutions to authority continuity, evidence continuity, accepted outcome continuity, RCCS-M, and ALCS.",
    category: "Substitution governance",
    summary:
      "Vendor and Runtime Substitution Conformance asks what must remain stable when a model, runtime, tool, vendor, prompt, or harness changes inside an agent workflow.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens treats substitution as a governance event. Evidence, authority, acceptance, review, privacy, and remediation states must remain understandable after the substitution.",
    keyQuestions: [
      "What changed: model, tool, vendor, runtime, prompt, harness, policy, or context source?",
      "Which authority boundary approved or permitted the substitution?",
      "What evidence proves continuity or explains the break in continuity?",
      "Does the accepted outcome still stand after substitution?",
      "How are rollback, remediation, and review triggered if substitution changes risk?"
    ],
    relatedObjects: [
      "Substitution Record",
      "Authority Continuity",
      "Evidence Continuity",
      "Accepted Outcome Continuity",
      "Model Runtime Change",
      "Harness Configuration"
    ],
    rccsAlcs:
      "RCCS-M is relevant because substitution requires an expressible substitution record and continuity objects. ALCS is relevant because lifecycle responsibility must remain coherent after the system changes underneath the work.",
    enterpriseUse:
      "Procurement, platform, model risk, and architecture teams can use this page as a non-procurement governance checklist for substitution planning.",
    sourceBoundary:
      "This page does not recommend vendors or rank substitution options. It only names lifecycle continuity questions.",
    sources: [],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/mapping/extended-ecosystem/", label: "Extended Ecosystem Mapping" },
      { href: "/research/global-ai-compliance-white-paper-2026/systems/", label: "GAIC-cited Systems" }
    ],
    keywords: [
      "Vendor and Runtime Substitution Conformance",
      "model substitution governance",
      "runtime substitution",
      "vendor substitution",
      "AI agent continuity",
      "RCCS-M",
      "ALCS"
    ]
  },
  {
    slug: "incident-dispute-remediation-closure",
    title: "Incident, Dispute, and Remediation Closure for AI Agents",
    seoTitle: "Incident, Dispute, and Remediation Closure for AI Agents",
    seoDescription:
      "Incident, Dispute, and Remediation Closure for AI Agents maps incident handling, disputes, rollback, accepted outcome reversal, evidence chain, owner responsibility, and lifecycle closure records.",
    category: "Incident governance",
    summary:
      "Incident, Dispute, and Remediation Closure for AI Agents separates event detection from lifecycle closure. A workflow is not closed until responsibility, evidence, outcome status, remediation, and acceptance are resolved.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens distinguishes incidents, disputes, remediation, rollback, accepted outcome reversal, and closure records instead of treating them as one generic support event.",
    keyQuestions: [
      "Is the event an incident, a disputed outcome, a remediation task, or a rollback trigger?",
      "What evidence chain supports the event classification?",
      "Was an accepted outcome reversed, revised, rejected, or left standing?",
      "Who owns remediation and closure?",
      "What record proves remediation has closed rather than merely stopped?"
    ],
    relatedObjects: [
      "Incident Record",
      "Dispute Object",
      "Accepted Outcome Reversal",
      "Rollback Trigger",
      "Remediation Closure",
      "Owner Responsibility"
    ],
    rccsAlcs:
      "RCCS-M is relevant because incident and remediation governance require explicit lifecycle objects. ALCS is relevant because the lifecycle must remain coherent after failure, dispute, rollback, or closure.",
    enterpriseUse:
      "Operations, trust and safety, security, product, and governance teams can use this page to design closure records that survive beyond ticket status.",
    sourceBoundary:
      "This page is not an incident-response standard, legal notification guide, or regulator reporting procedure.",
    sources: [officialGovernanceSources.nistAiRmfOverview, officialGovernanceSources.imdaGenAi],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/playbooks/ai-agent-rollback-verification/", label: "AI Agent Rollback and Verification" },
      { href: "/concepts/rollbackable-agent-workflows/", label: "Rollbackable Agent Workflows" }
    ],
    keywords: [
      "Incident Dispute Remediation Closure AI Agents",
      "AI agent incident closure",
      "AI agent dispute handling",
      "remediation closure",
      "rollback trigger",
      "Accepted Outcome"
    ]
  }
];

export function getGovernanceMappingBySlug(slug: string) {
  return governanceMappings.find((mapping) => mapping.slug === slug);
}
