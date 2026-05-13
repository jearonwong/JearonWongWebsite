export type GAICSystemGroup =
  | "Protocol Path"
  | "Enterprise Governance / Cloud AI Platforms"
  | "Agent Frameworks and Tooling";

export type GAICSystemRecord = {
  slug: string;
  name: string;
  category: string;
  group: GAICSystemGroup;
  summary: string;
  whitePaperContext: string;
  lifecycleQuestion: string;
  sourceBasis: string;
  caveat: string;
  detailContext: string;
  relatedMros: string[];
  lifecycleQuestions: string[];
  rccsAlcsRelevance: string;
  protocolPath: string;
  keywords: string[];
  tableReferences: string[];
};

const commonLifecycleQuestions = [
  "What authority boundaries are visible?",
  "What evidence chain is available?",
  "What accepted outcome state is defined?",
  "What happens under substitution, dispute, or remediation?",
  "Which human or organizational role owns lifecycle responsibility?"
];

const commonMros = [
  "Authority Boundary",
  "Evidence Chain",
  "Accepted Outcome",
  "Lifecycle Responsibility Objects",
  "Substitution record",
  "Dispute object",
  "Remediation closure"
];

export const gaicSystems: GAICSystemRecord[] = [
  {
    slug: "mplp",
    name: "MPLP",
    category: "Lifecycle protocol path",
    group: "Protocol Path",
    summary:
      "MPLP is discussed as one protocol path for lifecycle responsibility semantics, not as a product platform, certification scheme, or required compliance implementation.",
    whitePaperContext:
      "The white paper discusses MPLP in Chapter 12, Chapter 13, and Appendix G as a protocol-oriented mapping surface for Missing Regulatory Objects, RCCS-M, and ALCS.",
    lifecycleQuestion:
      "Can lifecycle responsibility semantics be made explicit enough to preserve authority, evidence, accepted outcome, substitution, dispute, remediation, and closure across agentic work?",
    sourceBasis:
      "GAIC source references include Chapter 12 mapping summaries, Chapter 13 MPLP deep mapping, Appendix G expanded assessment, and Phase 1D-12/13 boundary QA.",
    caveat:
      "MPLP mapping is author-analytical where protocol materials do not directly state GAIC MRO/RCCS-M/ALCS semantics; design alignment is not market validation.",
    detailContext:
      "In GAIC, MPLP is treated as a protocol proposal and lifecycle semantics path. It is used to examine what becomes possible when authority, evidence, accepted outcome, and remediation closure are represented as lifecycle objects rather than inferred from logs or workflow completion.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M is relevant because MPLP is analyzed for lifecycle responsibility object coverage after MRO adjustment. ALCS is relevant because the protocol path is assessed for coherence across intent, authority, evidence, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is itself the protocol path in this mapping. GAIC distinguishes protocol proposal from product or platform evaluation, and it does not present MPLP as required, exclusive, certified, regulator-approved, or already an industry standard.",
    keywords: [
      "MPLP",
      "Multi-Agent Lifecycle Protocol",
      "lifecycle protocol",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: [
      "T-12-02",
      "T-12-03",
      "T-13-02",
      "T-13-03",
      "T-13-04",
      "T-G-01"
    ]
  },
  {
    slug: "ibm-watsonx-governance",
    name: "IBM watsonx.governance",
    category: "Enterprise AI governance platform",
    group: "Enterprise Governance / Cloud AI Platforms",
    summary:
      "IBM watsonx.governance is discussed as an enterprise governance surface in the white paper's source-qualified lifecycle responsibility analysis.",
    whitePaperContext:
      "The white paper includes IBM watsonx.governance in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "How far can an enterprise governance surface express lifecycle responsibility objects for agentic and multi-agent work, beyond traditional model governance controls?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "The white paper treats lifecycle semantics as author-analytical where they are not directly stated by product documentation.",
    detailContext:
      "In GAIC, IBM watsonx.governance is used as an enterprise governance reference surface. The mapping asks which lifecycle responsibility questions remain visible when governance moves from model documentation and monitoring toward agentic work.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M examines whether governance coverage can be expressed through Missing Regulatory Objects. ALCS examines whether lifecycle responsibility remains coherent across intent, authority, evidence, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "Where protocol-level lifecycle semantics are needed, MPLP is one possible protocol path. GAIC does not present MPLP as required for this system or as a certified implementation route.",
    keywords: [
      "IBM watsonx.governance",
      "enterprise AI governance",
      "AI governance platform",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-04", "T-12-05", "T-G-02"]
  },
  {
    slug: "microsoft-azure-ai-foundry",
    name: "Microsoft Azure AI Foundry",
    category: "Cloud AI platform",
    group: "Enterprise Governance / Cloud AI Platforms",
    summary:
      "Microsoft Azure AI Foundry is discussed as a cloud AI platform reference in GAIC's lifecycle governance mapping.",
    whitePaperContext:
      "The white paper includes Microsoft Azure AI Foundry in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "Which agentic lifecycle responsibility objects remain explicit when platform governance, evaluation, safety, and deployment controls meet AI agent workflows?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "MRO-level lifecycle mapping remains author-analytical where official platform sources do not directly define GAIC lifecycle objects.",
    detailContext:
      "In GAIC, Microsoft Azure AI Foundry is used to examine the gap between platform governance surfaces and lifecycle responsibility semantics for agentic systems.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M asks whether platform governance can express MRO-adjusted lifecycle objects. ALCS asks whether responsibility coherence remains visible through intent, authority, evidence, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is one protocol path for lifecycle responsibility semantics where a surrounding system needs explicit authority, evidence, accepted outcome, and remediation objects.",
    keywords: [
      "Microsoft Azure AI Foundry",
      "cloud AI platform",
      "AI agent governance",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-06", "T-12-07", "T-G-03"]
  },
  {
    slug: "aws-bedrock-agentcore",
    name: "AWS Bedrock + Guardrails + AgentCore",
    category: "Cloud AI platform",
    group: "Enterprise Governance / Cloud AI Platforms",
    summary:
      "AWS Bedrock, Guardrails, and AgentCore are discussed together as a cloud AI platform and agent runtime governance surface.",
    whitePaperContext:
      "The white paper includes AWS Bedrock + Guardrails + AgentCore in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "What lifecycle responsibility remains inspectable when guardrails, runtime controls, agent behavior, evidence, and remediation are distributed across platform surfaces?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "Lifecycle responsibility transfer and closure are treated as implementation-dependent where not directly source-defined.",
    detailContext:
      "In GAIC, AWS Bedrock + Guardrails + AgentCore is used to examine how platform guardrails and agent runtime surfaces relate to authority, evidence, accepted outcome, substitution, dispute, and remediation questions.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M examines whether governance controls can be represented as lifecycle responsibility objects. ALCS examines whether those objects remain coherent across the full agentic lifecycle.",
    protocolPath:
      "MPLP is one possible protocol path for lifecycle responsibility semantics; GAIC does not present it as required for AWS-based workflows or as a vendor-endorsed route.",
    keywords: [
      "AWS Bedrock",
      "AWS Guardrails",
      "AWS AgentCore",
      "AI agent governance",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-08", "T-12-09", "T-G-04"]
  },
  {
    slug: "google-vertex-ai-adk",
    name: "Google Vertex AI + ADK + Model Armor",
    category: "Cloud AI platform",
    group: "Enterprise Governance / Cloud AI Platforms",
    summary:
      "Google Vertex AI, ADK, and Model Armor are discussed together as platform, agent development, and model safety reference surfaces.",
    whitePaperContext:
      "The white paper includes Google Vertex AI + ADK + Model Armor in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "How do platform governance, agent development, and safety surfaces map to lifecycle responsibility objects when agentic work must remain auditable and accepted?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "Lifecycle object conformance remains analytical where it is not directly expressed in public platform materials.",
    detailContext:
      "In GAIC, Google Vertex AI + ADK + Model Armor is used to examine the relationship between platform governance, agent development surfaces, safety controls, and lifecycle responsibility questions.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M asks whether MRO-adjusted governance objects are visible. ALCS asks whether responsibility remains coherent across intent, authority, evidence, accepted outcome, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is one protocol path for making lifecycle responsibility semantics explicit, not a required or official route for Google-based workflows.",
    keywords: [
      "Google Vertex AI",
      "ADK",
      "Model Armor",
      "AI agent governance",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-10", "T-12-11", "T-G-05"]
  },
  {
    slug: "langgraph-langsmith",
    name: "LangGraph + LangSmith",
    category: "Agent orchestration / observability",
    group: "Agent Frameworks and Tooling",
    summary:
      "LangGraph and LangSmith are discussed as agent orchestration, tracing, observability, and evaluation surfaces in GAIC's lifecycle mapping.",
    whitePaperContext:
      "The white paper includes LangGraph + LangSmith in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "When orchestration and trace surfaces are present, what additional governance objects are needed for authority, acceptance, dispute, remediation, and lifecycle closure?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "Regulatory control mapping requires surrounding governance where lifecycle responsibility is not directly established by framework traces.",
    detailContext:
      "In GAIC, LangGraph + LangSmith is used to examine how orchestration, tracing, observability, and evaluation relate to lifecycle responsibility. The mapping does not treat framework traces alone as accepted outcome or compliance proof.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M asks whether framework-level evidence and orchestration can be linked to MRO-style responsibility objects. ALCS asks whether lifecycle state remains coherent through review, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is one protocol path for adding lifecycle responsibility semantics around agent orchestration; GAIC does not present it as required, exclusive, or superior to a framework.",
    keywords: [
      "LangGraph",
      "LangSmith",
      "agent orchestration",
      "agent observability",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-12", "T-12-13", "T-G-06"]
  },
  {
    slug: "openai-agents-sdk",
    name: "OpenAI Agents SDK",
    category: "Agent SDK / developer platform",
    group: "Agent Frameworks and Tooling",
    summary:
      "OpenAI Agents SDK is discussed as an agent SDK surface in GAIC's source-qualified lifecycle governance mapping.",
    whitePaperContext:
      "The white paper includes OpenAI Agents SDK in Chapter 12 mapping summaries and Appendix G expanded assessment, with a platform-guide access note in source QA.",
    lifecycleQuestion:
      "What governance questions remain after SDK-level agent behavior is made visible, especially around authority, evidence, accepted outcome, substitution, dispute, and remediation?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, Phase 1D-12 score evidence integrity notes, and OpenAI source closure notes.",
    caveat:
      "The mapping is narrowed to accessible SDK-surface documentation in the GAIC source layer; unsupported lifecycle governance claims are excluded or treated analytically.",
    detailContext:
      "In GAIC, OpenAI Agents SDK is used to examine how an SDK surface relates to lifecycle responsibility questions. The page does not describe current product features beyond the white paper's source-qualified framing.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M asks whether SDK-surface evidence can be connected to Missing Regulatory Objects. ALCS asks whether lifecycle coherence remains visible across planning, authority, evidence, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is one possible protocol path around lifecycle responsibility semantics; GAIC does not present it as an OpenAI requirement, endorsement, or official implementation route.",
    keywords: [
      "OpenAI Agents SDK",
      "agent SDK",
      "AI agent governance",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-14", "T-12-15", "T-G-07"]
  },
  {
    slug: "crewai",
    name: "CrewAI",
    category: "Agent orchestration framework",
    group: "Agent Frameworks and Tooling",
    summary:
      "CrewAI is discussed as an agent orchestration framework in GAIC's source-qualified lifecycle responsibility analysis.",
    whitePaperContext:
      "The white paper includes CrewAI in Chapter 12 mapping summaries and Appendix G expanded assessment.",
    lifecycleQuestion:
      "How should role and task orchestration be connected to evidence, authority, accepted outcome, dispute, remediation, and lifecycle closure?",
    sourceBasis:
      "GAIC source references include Chapter 12 RCCS/ALCS mapping summaries, Appendix G expanded assessment, and Phase 1D-12 score evidence integrity notes.",
    caveat:
      "Regulatory evidence and lifecycle closure controls require external governance where they are not directly established by framework materials.",
    detailContext:
      "In GAIC, CrewAI is used to examine role and task orchestration through a lifecycle responsibility lens. The mapping asks what must surround orchestration before it can become accountable delivery.",
    relatedMros: commonMros,
    lifecycleQuestions: commonLifecycleQuestions,
    rccsAlcsRelevance:
      "RCCS-M asks whether orchestration evidence can be expressed through MRO-style responsibility objects. ALCS asks whether lifecycle coherence is maintained through authority, evidence, acceptance, dispute, remediation, and closure.",
    protocolPath:
      "MPLP is one protocol path for lifecycle responsibility semantics around agent orchestration; it is not required, certified, regulator-approved, exclusive, or a procurement recommendation.",
    keywords: [
      "CrewAI",
      "agent orchestration framework",
      "AI agent governance",
      "Missing Regulatory Objects",
      "RCCS-M",
      "ALCS"
    ],
    tableReferences: ["T-12-16", "T-12-17", "T-G-08"]
  }
];

export const gaicSystemGroups: GAICSystemGroup[] = [
  "Protocol Path",
  "Enterprise Governance / Cloud AI Platforms",
  "Agent Frameworks and Tooling"
];

export function getGAICSystemBySlug(slug: string) {
  return gaicSystems.find((system) => system.slug === slug);
}

export function getGAICSystemsByGroup(group: GAICSystemGroup) {
  return gaicSystems.filter((system) => system.group === group);
}
