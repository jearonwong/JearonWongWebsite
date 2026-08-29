export const governanceIndexPath = "/governance/";

export const regulatoryGovernanceBoundary =
  "These pages provide author-analytical lifecycle governance mappings. They are not legal advice, legal compliance proof, certification, regulator-approved guidance, procurement recommendation, vendor ranking, or official standards-body guidance.";

export type GovernanceSourceAuthority =
  | "authored-research"
  | "official-primary-source"
  | "official-guidance";

export interface GovernanceSource {
  label: string;
  url: string;
  scope: string;
  authority: GovernanceSourceAuthority;
}

export interface GovernanceMapping {
  slug: string;
  contentRole: "governance-mapping";
  canonicalRoute: string;
  canonicalParent: string;
  primaryAudience: string[];
  publishedAt?: string;
  updatedAt?: string;
  indexability: "index" | "noindex";
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
  sourceRefs: GovernanceSource[];
  relatedLinks: Array<{ href: string; label: string }>;
  keywords: string[];
}

const commonGovernanceLinks = [
  { href: "/concepts/agentic-lifecycle-governance/", label: "Agentic Lifecycle Governance" },
  { href: "/research/global-ai-compliance-white-paper-2026/", label: "Global AI Compliance White Paper 2026" }
];

export const officialGovernanceSources = {
  euAiAct: {
    label: "Regulation (EU) 2024/1689, Artificial Intelligence Act",
    url: "https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32024R1689",
    scope:
      "Official EU legal text used as regulatory context for cautious lifecycle mapping. It is not converted into legal advice.",
    authority: "official-primary-source"
  },
  gdpr: {
    label: "Regulation (EU) 2016/679, General Data Protection Regulation",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679",
    scope:
      "Official EU legal text used as privacy and personal-data context for evidence-chain and retention mapping.",
    authority: "official-primary-source"
  },
  edpbAutomatedDecisionMaking: {
    label: "EDPB automated decision-making and profiling guidance",
    url: "https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/automated-decision-making-and-profiling_en",
    scope:
      "Official EDPB guidance context for GDPR automated decision-making and profiling. It is not used to create legal conclusions.",
    authority: "official-guidance"
  },
  nistAiRmf: {
    label: "NIST AI Risk Management Framework 1.0",
    url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
    scope:
      "Official NIST AI RMF source used for voluntary risk-management context and Govern, Map, Measure, Manage mapping.",
    authority: "official-primary-source"
  },
  nistAiRmfOverview: {
    label: "NIST AI Risk Management Framework overview",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    scope:
      "Official NIST overview noting the AI RMF is intended for voluntary use across AI design, development, use, and evaluation.",
    authority: "official-guidance"
  },
  iso42001: {
    label: "ISO/IEC 42001:2023 official ISO overview",
    url: "https://www.iso.org/standard/42001",
    scope:
      "Official ISO overview used for AI management system context. It is not used as certification advice.",
    authority: "official-primary-source"
  },
  imdaGenAi: {
    label: "Singapore IMDA Model AI Governance Framework for Generative AI",
    url: "https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2024/public-consult-model-ai-governance-framework-genai",
    scope:
      "Official IMDA governance context used only as a comparative governance signal, not as legal or regulatory authority.",
    authority: "official-guidance"
  }
} satisfies Record<string, GovernanceSource>;

export const gaicGovernanceSource = {
  label: "Global AI Compliance White Paper 2026",
  url: "/research/global-ai-compliance-white-paper-2026/",
  scope:
    "Author research source for lifecycle responsibility objects, MRO, RCCS-M, and ALCS. It is a public research edition, not legal advice, certification, or an adopted professional standard.",
  authority: "authored-research"
} satisfies GovernanceSource;

const primaryAudienceByCategory: Record<string, string[]> = {
  "Lifecycle governance": ["AI governance leaders", "Enterprise architects", "Agent platform owners"],
  "MAS governance": ["Multi-agent architects", "Governance leaders", "Engineering leads"],
  "Enterprise governance": ["Enterprise control owners", "Risk leaders", "Platform architects"],
  "Compliance mapping": ["Compliance leaders", "Legal reviewers", "AI platform owners"],
  "Regulatory mapping": ["Risk leaders", "Legal reviewers", "Product governance teams"],
  "Privacy mapping": ["Privacy leaders", "Security architects", "AI platform owners"],
  "Risk framework mapping": ["AI risk leaders", "Model risk teams", "Enterprise architects"],
  "Management system mapping": ["AI management system owners", "Audit teams", "Governance leaders"],
  "Responsibility mapping": ["Operating model owners", "Engineering leads", "Governance leaders"],
  "Evidence governance": ["Audit teams", "Privacy leaders", "Platform architects"],
  "Substitution governance": ["Procurement leaders", "Platform architects", "Model risk teams"],
  "Incident governance": ["Operations leaders", "Trust and safety teams", "Governance leaders"]
};

type GovernanceMappingRecord = Omit<
  GovernanceMapping,
  "contentRole" | "canonicalRoute" | "canonicalParent" | "primaryAudience" | "indexability"
> &
  Partial<
    Pick<
      GovernanceMapping,
      "contentRole" | "canonicalRoute" | "canonicalParent" | "primaryAudience" | "indexability"
    >
  >;

const governanceMappingRecords: GovernanceMappingRecord[] = [
  {
    slug: "ai-agent-governance",
    title: "AI Agent Governance",
    seoTitle: "AI Agent Governance Lifecycle Mapping",
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
    sourceRefs: [gaicGovernanceSource],
    relatedLinks: [
      { href: "/concepts/ai-agent-governance/", label: "AI Agent Governance concept bridge" },
      { href: "/ai-agent-governance/", label: "AI Agent Governance field bridge" },
      { href: "/concepts/authority-boundary/", label: "Authority Boundary" },
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
    sourceRefs: [gaicGovernanceSource],
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
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.iso42001, officialGovernanceSources.nistAiRmfOverview],
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
    sourceRefs: [
      gaicGovernanceSource,
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
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.euAiAct, officialGovernanceSources.gdpr, officialGovernanceSources.edpbAutomatedDecisionMaking],
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
      "GDPR and Agentic AI Evidence is a privacy crosswalk for agentic work. It follows personal data through purpose, controller and processor boundaries, rights requests, redaction, and disclosure decisions, asking what evidence can remain reviewable without becoming an unbounded personal-data store.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens follows a data subject's information through collection, agent action, evidence capture, review, disclosure, and deletion. It separates privacy review questions from the lifecycle records that make an action attributable, without deciding lawful basis or retention periods.",
    keyQuestions: [
      "What purpose and data category justify each personal-data element entering an evidence chain?",
      "Which controller, processor, or subprocessor owns each handoff, and where is that allocation recorded?",
      "Can a rights-request workflow locate, redact, restrict, or delete evidence without destroying the review trail?",
      "What pseudonymization, hashing, or redaction manifest preserves attribution while reducing exposure?",
      "Which disclosure, transfer, and retention decisions require a privacy or legal review artifact?"
    ],
    relatedObjects: [
      "Purpose Limitation Record",
      "Data Subject Rights Request",
      "Controller / Processor Allocation",
      "Redaction Manifest",
      "Privacy-Preserving Validation",
      "Disclosure Boundary"
    ],
    rccsAlcs:
      "RCCS-M is relevant because privacy analysis needs explicit objects for purpose, rights, processor allocation, redaction, and disclosure boundaries. ALCS is relevant because those records must remain coherent when evidence is reviewed, restricted, disputed, or removed.",
    enterpriseUse:
      "Privacy, security, legal, and platform teams can use this page to define a reviewable privacy evidence pack: data inventory, purpose record, processor handoff, rights-request status, redaction decision, and disclosure boundary.",
    sourceBoundary:
      "GDPR references are source-qualified to official EU and EDPB sources. This page does not decide lawful basis, retention periods, data subject request handling, or cross-border transfer rules.",
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.gdpr, officialGovernanceSources.edpbAutomatedDecisionMaking],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/ai-agent-evidence-retention/", label: "AI Agent Evidence Retention" },
      { href: "/projects/validation-lab/", label: "Validation Lab" }
    ],
    keywords: [
      "GDPR and agentic AI evidence",
      "purpose limitation record",
      "data subject rights request",
      "controller processor allocation",
      "redaction manifest",
      "privacy preserving validation",
      "disclosure boundary"
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
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.nistAiRmf, officialGovernanceSources.nistAiRmfOverview],
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
    seoTitle: "ISO/IEC 42001 and Agentic AI",
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
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.iso42001],
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
    seoTitle: "Human Role Responsibility Mapping",
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
    sourceRefs: [gaicGovernanceSource],
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
      "AI Agent Evidence Retention is an engineering record-design page. It distinguishes a bounded evidence pack from raw logs and asks how retention schedules, content-addressed snapshots, replay envelopes, access ledgers, and deletion receipts preserve lifecycle proof without turning storage into an uncontrolled data hoard.",
    boundary: regulatoryGovernanceBoundary,
    lifecycleLens:
      "The lifecycle lens treats retention as a state transition: capture, classify, minimize, seal, retrieve, dispute, remediate, expire, and verify deletion. It asks which evidence tier survives each transition and which role can authorize access or closure.",
    keyQuestions: [
      "Which signed or content-addressed records are necessary to support the delivery and acceptance claim?",
      "What raw traces can be sampled, summarized, or discarded after the evidence pack is sealed?",
      "Which storage tier, access ledger, and partition key protect evidence across roles and vendor boundaries?",
      "Can a replay envelope reconstruct the decision path without restoring an entire log archive?",
      "What expiration event produces a verifiable deletion receipt and a clear closure owner?"
    ],
    relatedObjects: [
      "Evidence Pack",
      "Retention Schedule",
      "Content-Addressed Snapshot",
      "Replay Envelope",
      "Access Ledger",
      "Deletion Receipt",
      "Remediation Closure"
    ],
    rccsAlcs:
      "RCCS-M is relevant because retention requires explicit evidence-pack, access, replay, and deletion objects instead of undifferentiated logs. ALCS is relevant because those objects must stay coherent through review, dispute, remediation, expiry, and closure.",
    enterpriseUse:
      "Privacy, security, audit, and platform teams can use this page to design a storage contract with evidence tiers, retrieval authority, replay boundaries, expiration events, and deletion receipts before operating an agent trace service.",
    sourceBoundary:
      "This page does not define lawful retention periods or data subject rights handling. Privacy and legal teams should review jurisdiction-specific requirements.",
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.gdpr],
    relatedLinks: [
      ...commonGovernanceLinks,
      { href: "/governance/gdpr-agentic-ai-evidence/", label: "GDPR and Agentic AI Evidence" },
      { href: "/projects/validation-lab/", label: "Validation Lab" }
    ],
    keywords: [
      "AI Agent Evidence Retention",
      "evidence pack",
      "retention schedule",
      "content addressed snapshot",
      "replay envelope",
      "access ledger",
      "deletion receipt",
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
    sourceRefs: [gaicGovernanceSource],
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
    seoTitle: "Incident and Remediation Closure",
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
    sourceRefs: [gaicGovernanceSource, officialGovernanceSources.nistAiRmfOverview, officialGovernanceSources.imdaGenAi],
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

/**
 * Add route and indexing metadata in one place so a mapping cannot silently
 * drift from the governance information architecture. Dates remain optional:
 * a page is not assigned a publication date unless an authoritative record
 * exists in this SOT.
 */
export const governanceMappings: GovernanceMapping[] = governanceMappingRecords.map((mapping) => ({
  ...mapping,
  contentRole: mapping.contentRole ?? "governance-mapping",
  canonicalRoute: mapping.canonicalRoute ?? `${governanceIndexPath}${mapping.slug}/`,
  canonicalParent: mapping.canonicalParent ?? governanceIndexPath,
  primaryAudience: mapping.primaryAudience ?? primaryAudienceByCategory[mapping.category] ?? ["AI governance readers"],
  indexability: mapping.indexability ?? "index"
}));

export const indexableGovernanceMappings = governanceMappings.filter(
  (mapping) => mapping.indexability === "index"
);

export function isIndexableGovernanceRoute(href: string) {
  const mapping = governanceMappings.find((candidate) => candidate.canonicalRoute === href);
  return !mapping || mapping.indexability === "index";
}

export function getGovernanceMappingBySlug(slug: string) {
  return governanceMappings.find((mapping) => mapping.slug === slug);
}
