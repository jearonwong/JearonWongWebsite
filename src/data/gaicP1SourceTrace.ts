export type GaicSourceSupport = "direct" | "derived" | "adjacent";

export type GaicPageFamily =
  | "Concepts"
  | "Governance"
  | "Systems mapping"
  | "Extended ecosystem mapping";

export type GaicSourceAnchorId =
  | "ALG-CH2"
  | "MODEL-CH3"
  | "REG-CH4"
  | "OBJECTS-CH5"
  | "MRO-CH6"
  | "RCCST-CH7"
  | "RCCSM-CH7"
  | "ALCS-CH8"
  | "SCORE-CH9"
  | "RESULTS-CH12"
  | "SYSTEMS-CH12"
  | "MPLP-CH13"
  | "VALIDATION-CH14"
  | "FAILURE-CH15"
  | "PRIVACY-MRO"
  | "ROLE-MRO01"
  | "SUBSTITUTION-MRO15"
  | "CLOSURE-MRO16"
  | "BOUNDARY-FM"
  | "MRO-02"
  | "MRO-04"
  | "MRO-07"
  | "MRO-08"
  | "MRO-16";

export type GaicSourceAnchor = {
  id: GaicSourceAnchorId;
  label: string;
  href: string;
  description: string;
};

export type GaicRelatedSourceLink = {
  href: string;
  label: string;
};

export type GaicP1SourceTrace = {
  route: string;
  pageFamily: GaicPageFamily;
  sourceSupport: GaicSourceSupport;
  sourceTraceCompleteness: "partial";
  summary: string;
  relation: string;
  lifecycleExample: string;
  boundary: string;
  sourceAnchors: GaicSourceAnchor[];
  relatedLinks: GaicRelatedSourceLink[];
};

const whitePaperHtml = "/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html";

const anchorDefinitions: Record<GaicSourceAnchorId, GaicSourceAnchor> = {
  "ALG-CH2": {
    id: "ALG-CH2",
    label: "Chapter 2: Agentic Lifecycle Governance",
    href: `${whitePaperHtml}#chapter-2-the-missing-layer-ai-agent-lifecycle-governance`,
    description: "The source argument for the missing governance layer above model behavior."
  },
  "MODEL-CH3": {
    id: "MODEL-CH3",
    label: "Chapter 3: Model-centric compliance limit",
    href: `${whitePaperHtml}#chapter-3-why-agentic-ai-breaks-model-centric-compliance`,
    description: "Why agentic systems move responsibility beyond model-only governance."
  },
  "REG-CH4": {
    id: "REG-CH4",
    label: "Chapter 4: Regulatory baseline",
    href: `${whitePaperHtml}#chapter-4-regulatory-and-standards-baseline`,
    description: "Regulatory and standards-language context used as cautious mapping input."
  },
  "OBJECTS-CH5": {
    id: "OBJECTS-CH5",
    label: "Chapter 5: Engineering objects",
    href: `${whitePaperHtml}#chapter-5-from-regulatory-language-to-engineering-objects`,
    description: "Translation from governance language to lifecycle responsibility objects."
  },
  "MRO-CH6": {
    id: "MRO-CH6",
    label: "Chapter 6: Missing Regulatory Objects",
    href: `${whitePaperHtml}#6-missing-regulatory-objects-for-agentic-and-mas-compliance`,
    description: "The MRO object layer for authority, evidence, acceptance, substitution, and closure."
  },
  "RCCST-CH7": {
    id: "RCCST-CH7",
    label: "Chapter 7: RCCS-T",
    href: `${whitePaperHtml}#chapter-7-regulatory-compliance-coverage-score-rccs`,
    description: "Traditional regulatory coverage baseline used before MRO adjustment."
  },
  "RCCSM-CH7": {
    id: "RCCSM-CH7",
    label: "RCCS-M",
    href: `${whitePaperHtml}#rccs-m`,
    description: "MRO-adjusted regulatory coverage for lifecycle responsibility objects."
  },
  "ALCS-CH8": {
    id: "ALCS-CH8",
    label: "ALCS",
    href: `${whitePaperHtml}#alcs`,
    description: "Lifecycle conformance lens across intent, authority, evidence, acceptance, and closure."
  },
  "SCORE-CH9": {
    id: "SCORE-CH9",
    label: "Chapter 9: Scoring method",
    href: `${whitePaperHtml}#methodology`,
    description: "Composite scoring method and evidence confidence boundary."
  },
  "RESULTS-CH12": {
    id: "RESULTS-CH12",
    label: "Evaluation results",
    href: `${whitePaperHtml}#scoring-results`,
    description: "Provisional RCCS-T, RCCS-M, and ALCS analytical profiles."
  },
  "SYSTEMS-CH12": {
    id: "SYSTEMS-CH12",
    label: "Chapter 12: System mappings",
    href: `${whitePaperHtml}#systems-mapping`,
    description: "Source-qualified system mapping layer discussed by the white paper."
  },
  "MPLP-CH13": {
    id: "MPLP-CH13",
    label: "Chapter 13: MPLP boundary",
    href: `${whitePaperHtml}#13-mplp-deep-mapping-boundary-and-non-claim-discipline`,
    description: "MPLP as one protocol path with explicit non-claim discipline."
  },
  "VALIDATION-CH14": {
    id: "VALIDATION-CH14",
    label: "Chapter 14: Evidence validation",
    href: `${whitePaperHtml}#evidence-validation`,
    description: "Evidence-based validation as a non-certifying review pattern."
  },
  "FAILURE-CH15": {
    id: "FAILURE-CH15",
    label: "Chapter 15: Failure scenarios",
    href: `${whitePaperHtml}#failure-scenarios`,
    description: "Enterprise failure scenarios used as pressure tests for lifecycle responsibility."
  },
  "PRIVACY-MRO": {
    id: "PRIVACY-MRO",
    label: "Privacy MRO cluster",
    href: `${whitePaperHtml}#6-11-mro-10-privacy-gdpr-lifecycle-mapping`,
    description: "Privacy, minimization, disclosure, rights, and processor-chain lifecycle objects."
  },
  "ROLE-MRO01": {
    id: "ROLE-MRO01",
    label: "MRO-01: Human role mapping",
    href: `${whitePaperHtml}#mro-01`,
    description: "Human-role-to-MAS responsibility mapping."
  },
  "SUBSTITUTION-MRO15": {
    id: "SUBSTITUTION-MRO15",
    label: "MRO-15: Substitution conformance",
    href: `${whitePaperHtml}#mro-15`,
    description: "Vendor, model, or runtime substitution as a lifecycle responsibility object."
  },
  "CLOSURE-MRO16": {
    id: "CLOSURE-MRO16",
    label: "MRO-16: Remediation closure",
    href: `${whitePaperHtml}#mro-16`,
    description: "Incident, dispute, remediation, and closure state."
  },
  "BOUNDARY-FM": {
    id: "BOUNDARY-FM",
    label: "Publication boundary",
    href: `${whitePaperHtml}#publication-scope-and-boundary-statement`,
    description: "Non-legal, non-certification, non-ranking, and non-procurement boundary."
  },
  "MRO-02": {
    id: "MRO-02",
    label: "MRO-02: Delegated Authority Boundary",
    href: `${whitePaperHtml}#mro-02`,
    description: "Delegated authority as an inspectable lifecycle object."
  },
  "MRO-04": {
    id: "MRO-04",
    label: "MRO-04: Accepted Outcome Compliance",
    href: `${whitePaperHtml}#mro-04`,
    description: "Accepted outcome as a responsibility state."
  },
  "MRO-07": {
    id: "MRO-07",
    label: "MRO-07: Authority Drift",
    href: `${whitePaperHtml}#mro-07`,
    description: "Authority drift as a lifecycle failure mode."
  },
  "MRO-08": {
    id: "MRO-08",
    label: "MRO-08: MAS Evidence Partitioning",
    href: `${whitePaperHtml}#mro-08`,
    description: "Evidence partitioning across multi-agent work."
  },
  "MRO-16": {
    id: "MRO-16",
    label: "MRO-16: Incident and remediation closure",
    href: `${whitePaperHtml}#mro-16`,
    description: "Closure records for incident, dispute, and remediation."
  }
};

const commonBoundary =
  "This source trace is author-analytical. It is not legal advice, certification, legal compliance proof, regulator approval, vendor ranking, procurement guidance, or a claim that MPLP is required.";

const conceptLinks: GaicRelatedSourceLink[] = [
  { href: "/research/global-ai-compliance-white-paper-2026/", label: "GAIC white paper hub" },
  { href: "/concepts/agentic-lifecycle-governance/", label: "Agentic Lifecycle Governance" },
  { href: "/concepts/map/", label: "Concepts Map" }
];

const governanceLinks: GaicRelatedSourceLink[] = [
  { href: "/research/global-ai-compliance-white-paper-2026/", label: "GAIC white paper hub" },
  { href: "/concepts/missing-regulatory-objects/", label: "Missing Regulatory Objects" },
  { href: "/concepts/rccs-m/", label: "RCCS-M" },
  { href: "/concepts/alcs/", label: "ALCS" }
];

const mappingLinks: GaicRelatedSourceLink[] = [
  { href: "/research/global-ai-compliance-white-paper-2026/", label: "GAIC white paper hub" },
  { href: "/research/global-ai-compliance-white-paper-2026/systems/", label: "GAIC-cited systems" },
  { href: "/concepts/missing-regulatory-objects/", label: "Missing Regulatory Objects" },
  { href: "/concepts/rccs-m/", label: "RCCS-M" },
  { href: "/concepts/alcs/", label: "ALCS" }
];

function anchors(ids: GaicSourceAnchorId[]) {
  return ids.map((id) => anchorDefinitions[id]);
}

function trace(record: Omit<GaicP1SourceTrace, "sourceTraceCompleteness">): GaicP1SourceTrace {
  return {
    sourceTraceCompleteness: "partial",
    ...record
  };
}

function conceptTrace(
  route: string,
  sourceSupport: GaicSourceSupport,
  sourceAnchors: GaicSourceAnchorId[],
  summary: string,
  relation: string,
  lifecycleExample: string
) {
  return trace({
    route,
    pageFamily: "Concepts",
    sourceSupport,
    summary,
    relation,
    lifecycleExample,
    boundary: commonBoundary,
    sourceAnchors: anchors(sourceAnchors),
    relatedLinks: conceptLinks
  });
}

function governanceTrace(route: string, summary: string, relation: string, extraAnchors: GaicSourceAnchorId[] = []) {
  return trace({
    route,
    pageFamily: "Governance",
    sourceSupport: "direct",
    summary,
    relation,
    lifecycleExample:
      "Use this mapping to ask which lifecycle object carries authority, evidence, accepted outcome, dispute, remediation, and closure for the governance question at hand.",
    boundary: commonBoundary,
    sourceAnchors: anchors(["REG-CH4", "OBJECTS-CH5", "MRO-CH6", "RCCSM-CH7", "ALCS-CH8", "BOUNDARY-FM", ...extraAnchors]),
    relatedLinks: governanceLinks
  });
}

function systemTrace(route: string, summary: string, extraAnchors: GaicSourceAnchorId[] = []) {
  return trace({
    route,
    pageFamily: "Systems mapping",
    sourceSupport: "direct",
    summary,
    relation:
      "The white paper treats the system through source-qualified RCCS-M and ALCS mapping. The page records that relation without recalculating scores or turning the system into a vendor ranking.",
    lifecycleExample:
      "Read the mapping as a question about whether authority, evidence, accepted outcome, substitution, dispute, remediation, and closure remain visible around the system surface.",
    boundary: commonBoundary,
    sourceAnchors: anchors(["SYSTEMS-CH12", "RESULTS-CH12", "SCORE-CH9", "BOUNDARY-FM", ...extraAnchors]),
    relatedLinks: mappingLinks
  });
}

function ecosystemTrace(route: string, summary: string, extraAnchors: GaicSourceAnchorId[] = []) {
  return trace({
    route,
    pageFamily: "Extended ecosystem mapping",
    sourceSupport: "adjacent",
    summary,
    relation:
      "This page is adjacent to GAIC, not a GAIC-scored assessment. It uses MRO, RCCS-M, and ALCS as lifecycle governance lenses for an ecosystem context established by official sources.",
    lifecycleExample:
      "Use the trace to ask how tool access, agent delegation, model/runtime substitution, evidence, accepted outcome, rollback, and remediation would survive across the workflow.",
    boundary:
      "This mapping is source-qualified and non-GAIC-scored. It is not vendor documentation, vendor affiliation, product scoring, legal advice, certification, legal compliance proof, procurement guidance, or a claim that MPLP is required.",
    sourceAnchors: anchors(["SUBSTITUTION-MRO15", "MRO-CH6", "ALCS-CH8", "BOUNDARY-FM", ...extraAnchors]),
    relatedLinks: mappingLinks
  });
}

export const gaicP1SourceTraceRecords: GaicP1SourceTrace[] = [
  conceptTrace(
    "/concepts/accepted-outcome/",
    "derived",
    ["MRO-04", "MRO-CH6", "ALCS-CH8"],
    "Accepted Outcome is traced to the white paper's MRO-04 and ALCS lifecycle-conformance argument.",
    "MRO is direct through accepted outcome; RCCS-M is derived because the object becomes part of governance coverage; ALCS is direct because acceptance must remain coherent through closure.",
    "A task is not governed merely because it completed; the accepted outcome record shows who reviewed and accepted responsibility for the result."
  ),
  conceptTrace(
    "/concepts/agent-architecture-governance/",
    "derived",
    ["OBJECTS-CH5", "MRO-CH6", "FAILURE-CH15"],
    "Agent Architecture Governance is traced to the white paper's engineering-object translation and enterprise failure-scenario pressure tests.",
    "MRO relation is direct through authority, evidence, transfer, and closure objects; RCCS-M and ALCS are derived lenses for coverage and lifecycle coherence.",
    "Architecture is assessed by whether human roles, agent roles, tools, evidence paths, rollback, and remediation ownership remain connected."
  ),
  conceptTrace(
    "/concepts/agentic-delivery/",
    "adjacent",
    [],
    "Agentic Delivery is adjacent to GAIC through the site category chain; R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "The page supplies category framing for accountable outcomes, while GAIC supplies the source-traced lifecycle responsibility vocabulary.",
    "Delivery means the work reaches an accepted outcome with authority and evidence attached, not merely that an agent executed."
  ),
  conceptTrace(
    "/concepts/ai-agent-lifecycle/",
    "adjacent",
    [],
    "AI Agent Lifecycle is adjacent to GAIC through the field-definition layer; R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "The page frames lifecycle continuity, while GAIC applies that continuity to MRO, RCCS-M, and ALCS.",
    "The lifecycle lens asks what remains valid across intent, context, plan, confirmation, execution, evidence, review, and closure."
  ),
  conceptTrace(
    "/concepts/alcs/",
    "direct",
    ["ALCS-CH8", "RCCSM-CH7", "BOUNDARY-FM"],
    "ALCS is directly sourced to the white paper's Agentic Lifecycle Conformance Score chapter.",
    "ALCS is the direct lifecycle-coherence lens; RCCS-M is adjacent as the governance-coverage pair; MRO is adjacent through the objects ALCS tests.",
    "A workflow can have governance objects and still fail if responsibility fragments across handoffs, substitutions, disputes, or closure."
  ),
  conceptTrace(
    "/concepts/authority-boundary/",
    "derived",
    ["MRO-02", "MRO-07", "MRO-CH6"],
    "Authority Boundary is traced to delegated authority and authority-drift objects in the MRO chapter.",
    "MRO relation is direct; RCCS-M and ALCS are derived because authority must be expressible and remain coherent during execution.",
    "A tool action can be technically permitted while still lacking a durable record of who authorized the work and under what scope."
  ),
  conceptTrace(
    "/concepts/configurable-agent-governance/",
    "derived",
    ["MRO-02", "SUBSTITUTION-MRO15", "ALCS-CH8"],
    "Configurable Agent Governance is traced to delegated authority, substitution conformance, and ALCS lifecycle coherence.",
    "MRO relation is direct through authority and substitution; ALCS is direct because configuration must preserve lifecycle state after changes.",
    "Governance profiles, tool constraints, and substitution rules need evidence links so a changed runtime does not erase responsibility."
  ),
  conceptTrace(
    "/concepts/confirmation-boundary/",
    "adjacent",
    [],
    "Confirmation Boundary is adjacent to GAIC through authority and lifecycle governance, but R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "It functions as a practical authorization boundary that supports GAIC authority and evidence concepts without claiming a standalone score.",
    "A confirmation point should record the approved plan, excluded scope, expected evidence, and return condition before consequential action continues."
  ),
  conceptTrace(
    "/concepts/context-drift/",
    "adjacent",
    [],
    "Context Drift is adjacent to GAIC through lifecycle continuity and evidence integrity; R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "The concept supports MRO and ALCS reasoning by naming how active work context can detach from accepted responsibility.",
    "A workflow can keep running while its active assumptions no longer match the original intent, constraints, or review state."
  ),
  conceptTrace(
    "/concepts/deterministic-delivery/",
    "derived",
    ["ALCS-CH8", "FAILURE-CH15", "CLOSURE-MRO16", "BOUNDARY-FM"],
    "Deterministic Delivery is traced to ALCS, failure scenarios, closure, and the white paper's non-claim boundary.",
    "ALCS is direct as lifecycle coherence; MRO-16 is direct for remediation closure; RCCS-M is not used as a delivery guarantee.",
    "Deterministic Delivery means scoped, authorized, evidenced, accepted, remediable, and rollbackable work, not deterministic LLM output."
  ),
  conceptTrace(
    "/concepts/intent-drift/",
    "adjacent",
    [],
    "Intent Drift is adjacent to GAIC through lifecycle continuity; R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "The concept supports lifecycle governance by naming how work can separate from the original purpose before acceptance.",
    "A plan can remain executable while no longer satisfying the intent, constraints, or acceptance state that made the work legitimate."
  ),
  conceptTrace(
    "/concepts/lifecycle-evidence/",
    "derived",
    ["MRO-08", "VALIDATION-CH14", "PRIVACY-MRO"],
    "Evidence Chain is traced to MAS evidence partitioning, evidence-based validation, and privacy/evidence MROs.",
    "MRO relation is direct through evidence partitioning and privacy evidence boundaries; ALCS is derived through evidence continuity.",
    "Evidence must support review, replay, dispute, remediation, and acceptance instead of being reduced to raw logs."
  ),
  conceptTrace(
    "/concepts/lifecycle-governed-agent-workflow/",
    "adjacent",
    [],
    "Lifecycle-Governed Agent Workflow is adjacent to GAIC through the workflow application of lifecycle responsibility; R3K-0 did not assign a direct chapter/table/MRO anchor.",
    "The page uses GAIC as source context for why workflows need authority, evidence, acceptance, and closure objects.",
    "The workflow is governed when lifecycle state survives across plan, confirmation, execution, review, rollback, and accepted outcome."
  ),
  conceptTrace(
    "/concepts/lifecycle-responsibility-objects/",
    "derived",
    ["OBJECTS-CH5", "MRO-CH6", "BOUNDARY-FM"],
    "Lifecycle Responsibility Objects are traced to the white paper's engineering-object translation and Missing Regulatory Objects chapter.",
    "MRO relation is direct; RCCS-M and ALCS are derived because the objects become the coverage and coherence substrate.",
    "Authority, evidence, accepted outcome, substitution, dispute, remediation, and closure become inspectable records rather than implied states."
  ),
  conceptTrace(
    "/concepts/lifecycle-role-decomposition/",
    "adjacent",
    [],
    "Lifecycle Role Decomposition is adjacent to GAIC through human-role responsibility mapping; R3K-0 did not assign a direct chapter/table/MRO anchor for this route.",
    "The page explains the role-decomposition practice that supports GAIC-style human-role and MAS responsibility objects.",
    "A role decomposition separates who owns intent, who can authorize action, who reviews evidence, and who accepts or remediates the outcome."
  ),
  conceptTrace(
    "/concepts/missing-regulatory-objects/",
    "direct",
    ["MRO-CH6", "OBJECTS-CH5", "BOUNDARY-FM"],
    "Missing Regulatory Objects are directly sourced to the white paper's Chapter 6 object layer.",
    "MRO is direct; RCCS-M and ALCS are derived from how the object layer becomes coverage and lifecycle-conformance analysis.",
    "The page names the missing objects that make agentic authority, evidence, acceptance, substitution, dispute, and remediation inspectable."
  ),
  conceptTrace(
    "/concepts/rccs-m/",
    "direct",
    ["RCCSM-CH7", "RCCST-CH7", "SCORE-CH9", "BOUNDARY-FM"],
    "RCCS-M is directly sourced to the white paper's MRO-adjusted coverage chapter and scoring-method boundary.",
    "RCCS-M is direct; MRO is direct as the adjustment layer; ALCS is adjacent as the separate lifecycle-coherence score.",
    "The page explains analytical coverage adequacy, not current law, certification, regulator approval, procurement ranking, or final vendor scoring."
  ),
  conceptTrace(
    "/concepts/rollbackable-agent-workflows/",
    "derived",
    ["MRO-16", "FAILURE-CH15", "ALCS-CH8", "CLOSURE-MRO16"],
    "Rollbackable Agent Workflows are traced to remediation closure, enterprise failure scenarios, and ALCS coherence.",
    "MRO-16 relation is direct; ALCS is direct because rollback must preserve lifecycle coherence after failure or dispute.",
    "Rollback is treated as a lifecycle state transition with authority and evidence, not merely retry, undo, or version history."
  ),
  conceptTrace(
    "/concepts/verifiable-ai-agents/",
    "derived",
    ["VALIDATION-CH14", "MRO-08", "ALCS-CH8"],
    "Verifiable AI Agents are traced to evidence-based validation, MAS evidence partitioning, and ALCS.",
    "MRO relation is direct through evidence partitioning; ALCS is direct because verification must preserve lifecycle coherence.",
    "A verifiable agent exposes enough lifecycle state to inspect intent, authority, evidence, review, acceptance, dispute, and remediation."
  ),
  governanceTrace(
    "/governance/ai-agent-compliance/",
    "AI Agent Compliance is traced to the white paper's regulatory baseline, engineering-object translation, MRO, RCCS-M, ALCS, and boundary discipline.",
    "The page maps compliance language to lifecycle responsibility objects without replacing legal or compliance counsel."
  ),
  governanceTrace(
    "/governance/ai-agent-evidence-retention/",
    "AI Agent Evidence Retention is traced to GAIC's object, MRO, RCCS-M, ALCS, and boundary layers.",
    "The page treats retention as lifecycle evidence design, including minimization and dispute needs, not as legal retention advice."
  ),
  governanceTrace(
    "/governance/enterprise-agent-governance/",
    "Enterprise Agent Governance is traced to GAIC's regulatory baseline, object translation, MRO, RCCS-M, and ALCS.",
    "The page maps enterprise control language to lifecycle responsibility evidence without claiming audit opinion or certification."
  ),
  governanceTrace(
    "/governance/eu-ai-act-agentic-systems/",
    "EU AI Act and Agentic Systems is traced through GAIC's regulatory baseline and lifecycle-object mapping.",
    "The page uses EU AI Act context cautiously and maps it to lifecycle responsibility questions without providing legal advice."
  ),
  governanceTrace(
    "/governance/gdpr-agentic-ai-evidence/",
    "GDPR and Agentic AI Evidence is traced through GAIC's regulatory baseline, privacy MRO cluster, evidence, RCCS-M, and ALCS.",
    "The page maps privacy/evidence tension to lifecycle objects without asserting GDPR compliance.",
    ["PRIVACY-MRO"]
  ),
  governanceTrace(
    "/governance/human-role-responsibility-mapping/",
    "Human Role Responsibility Mapping is traced through GAIC's role-object MRO and lifecycle governance chapters.",
    "The page maps human roles to MAS responsibility records without saying human-in-the-loop alone proves governance.",
    ["ROLE-MRO01"]
  ),
  governanceTrace(
    "/governance/incident-dispute-remediation-closure/",
    "Incident, Dispute, and Remediation Closure is traced through GAIC's closure MRO and enterprise failure scenarios.",
    "The page maps incidents and disputes to closure records rather than treating remediation as an unstructured after-action note.",
    ["CLOSURE-MRO16", "FAILURE-CH15"]
  ),
  governanceTrace(
    "/governance/iso-42001-agentic-ai/",
    "ISO/IEC 42001 and Agentic AI Management Systems is traced through GAIC's regulatory baseline, object translation, MRO, RCCS-M, and ALCS.",
    "The page uses ISO management-system context only as a mapping lens and does not provide certification guidance."
  ),
  governanceTrace(
    "/governance/multi-agent-system-governance/",
    "Multi-Agent System Governance is traced through GAIC's MAS responsibility objects, RCCS-M, ALCS, and boundary discipline.",
    "The page separates coordination topology from responsibility continuity across agents, roles, evidence, and closure."
  ),
  governanceTrace(
    "/governance/nist-ai-rmf-agentic-lifecycle/",
    "NIST AI RMF and Agentic Lifecycle Governance is traced through GAIC's regulatory baseline and lifecycle-object mapping.",
    "The page maps voluntary risk-management language to lifecycle responsibility objects without implying official NIST interpretation."
  ),
  governanceTrace(
    "/governance/vendor-runtime-substitution-conformance/",
    "Vendor and Runtime Substitution Conformance is traced through GAIC's substitution MRO, RCCS-M, ALCS, and boundary discipline.",
    "The page maps substitution to responsibility continuity without ranking vendors or making procurement recommendations.",
    ["SUBSTITUTION-MRO15"]
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/a2a/",
    "A2A is treated as an adjacent ecosystem mapping for inter-agent communication and delegation, not a GAIC-scored system."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/autogen/",
    "AutoGen is treated as an adjacent ecosystem mapping for multi-agent framework governance, not a GAIC-scored system."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/claude-code/",
    "Claude Code is treated as an adjacent coding-agent workflow mapping, not a GAIC-scored system or Anthropic documentation."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/cursor-ai-coding-agents/",
    "Cursor / AI Coding Agents is treated as an adjacent coding-agent workflow mapping with added evidence-validation and remediation-closure source context.",
    ["VALIDATION-CH14", "CLOSURE-MRO16"]
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/",
    "The Extended Ecosystem index is treated as a navigation surface for adjacent, non-GAIC-scored lifecycle governance mappings."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/mcp/",
    "MCP is treated as an adjacent tool/context protocol mapping where tool connectivity is separated from lifecycle responsibility."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/qwen/",
    "Qwen is treated as an adjacent model-ecosystem mapping focused on substitution, authority, evidence, and accepted outcome."
  ),
  ecosystemTrace(
    "/mapping/extended-ecosystem/semantic-kernel/",
    "Semantic Kernel is treated as an adjacent framework/orchestration SDK mapping, not a GAIC-scored system or Microsoft documentation."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/aws-bedrock-agentcore/",
    "AWS Bedrock + Guardrails + AgentCore is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/crewai/",
    "CrewAI is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/google-vertex-ai-adk/",
    "Google Vertex AI + ADK + Model Armor is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/ibm-watsonx-governance/",
    "IBM watsonx.governance is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/langgraph-langsmith/",
    "LangGraph + LangSmith is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/microsoft-azure-ai-foundry/",
    "Microsoft Azure AI Foundry is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/mplp/",
    "MPLP is source-traced to the white paper's system mapping, provisional results, scoring method, boundary discipline, and dedicated MPLP deep-mapping chapter.",
    ["MPLP-CH13"]
  ),
  systemTrace(
    "/research/global-ai-compliance-white-paper-2026/systems/openai-agents-sdk/",
    "OpenAI Agents SDK is source-traced to the white paper's system mapping, provisional results, scoring method, and boundary discipline."
  )
];

const tracesByRoute = new Map(gaicP1SourceTraceRecords.map((record) => [record.route, record]));

export function getGaicP1SourceTraceByRoute(route: string) {
  return tracesByRoute.get(route);
}
