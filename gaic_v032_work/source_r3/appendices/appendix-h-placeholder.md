# Appendix H — Enterprise Procurement Scorecard

**Version:** v0.3.2-FRC-R3  

---

## H.0 Procurement Boundary

This appendix provides an enterprise procurement-oriented checklist and scorecard template for evaluating agentic AI systems using RCCS, ALCS, and lifecycle governance requirements.

This appendix is a buyer diligence aid. It is not a procurement recommendation, vendor ranking, legal compliance determination, certification checklist, market endorsement, or substitute for human review. It helps enterprise buyers ask better governance questions before adopting agentic AI systems.

The scorecard may reference RCCS and ALCS dimensions as analytical prompts. It must not be read as proof that a vendor, platform, protocol, or implementation is legally compliant, operationally effective, enterprise-ready, certified, or regulator-approved.

Appendix G may be used only as an example of qualitative provisional assessment categories. Appendix G provisional postures must not be reused as vendor selection advice without enterprise-specific review, page-level citation support, and accountable buyer judgment.

---

## H.1 How Enterprises Should Use This Scorecard

Enterprises should use this scorecard during early diligence, request-for-information review, request-for-proposal design, architecture review, and internal governance review. The scorecard is intended to structure questions, evidence requests, and review boundaries.

Recommended use sequence:

1. Identify the intended agentic AI use case, deployment context, and lifecycle risk profile.
2. Select the relevant RCCS and ALCS dimensions for that use case.
3. Request evidence from vendors or implementation teams using the evidence request template.
4. Record gaps, red flags, and unresolved assumptions.
5. Escalate material gaps to legal, security, privacy, risk, procurement, and business owners.
6. Defer final evidence interpretation to publication / enterprise review.

This appendix does not tell an enterprise which system to buy. It supports disciplined questioning and evidence collection.

---

## H.2 Procurement Due Diligence Questions

**Table T-H-01: Enterprise Procurement Scorecard**

| Area | Procurement Question | Related RCCS/ALCS | Required Vendor Evidence | Red Flag | Buyer Note |
|------|----------------------|-------------------|--------------------------|----------|------------|
| Governance scope | What agentic workflows, tools, models, and runtime components are covered by the governance controls? | RCCS-03, ALCS-15 | Scope statement, architecture diagram, runtime inventory | Governance claims cover only model behavior while agent workflow remains undefined | Confirm whether controls apply to the full lifecycle, not only model invocation |
| Risk management | How are agentic risks identified, assessed, mitigated, and monitored over time? | RCCS-01, RCCS-10 | Risk register template, monitoring policy, escalation workflow | Risk management is described only as a general platform feature | Require AI-agent-specific risk handling evidence |
| Data governance | How are input data, context data, generated evidence, and retained records governed? | RCCS-02, ALCS-10, ALCS-13 | Data flow map, retention policy, access control description | Retention and deletion duties are described without lifecycle evidence handling | Verify privacy and retention conflicts during publication / enterprise review |
| Documentation | What documentation exists for model use, agent role, tool access, and deployment configuration? | RCCS-03, ALCS-03, ALCS-15 | System card, model card, deployment record, configuration manifest | Documentation exists for models but not agents or tool actions | Separate model documentation from agent lifecycle documentation |
| Record keeping | What records are created for plans, tool actions, authority grants, evidence packs, reviews, and accepted outcomes? | RCCS-04, ALCS-08, ALCS-12 | Log schema, evidence export sample, retention rule | Logs cannot be connected to lifecycle responsibility objects | Ask whether records are exportable and reviewable |
| Human oversight | How are human roles mapped to agent responsibilities, review points, and escalation authority? | RCCS-06, ALCS-01, ALCS-02 | Responsibility matrix, review workflow, escalation rule | Human oversight is described as a generic approval button | Require role-to-responsibility mapping |
| Authority boundaries | How are delegated authority limits defined, enforced, and changed? | ALCS-02, ALCS-07 | Authority policy, change log, exception workflow | Agents can acquire or use tools without visible authority boundaries | Require authority drift review before deployment |
| Tool action liability | How are tool calls, side effects, and responsibility transfers recorded? | ALCS-05, ALCS-06 | Tool registry, action log schema, handoff record | Tool execution is visible but responsibility assignment is not | Require traceability from tool action to accountable review owner |
| Contestability and remediation | How can contested outputs, incidents, and remediation actions be recorded and closed? | RCCS-09, MRO-16 | Dispute workflow, incident record, remediation closure template | No clear path for dispute intake or closure evidence | Align with enterprise incident and dispute processes |
| Vendor/model/runtime substitution | How are model, tool, vendor, and runtime changes evaluated before reuse or substitution? | ALCS-09, ALCS-15 | Change approval record, substitution policy, version manifest | Substitution can occur without lifecycle impact review | Require substitution conformance evidence |

---

## H.3 Lifecycle Governance Procurement Checklist

The following checklist organizes lifecycle governance diligence. Buyers may adapt the checklist for internal approval gates, but should preserve the distinction between evidence request, evidence review, and final enterprise decision.

Checklist areas:

1. Lifecycle scope and system boundary
2. Human role and responsibility mapping
3. Delegated authority and tool boundary
4. Evidence creation, retention, minimization, and export
5. Privacy and data subject rights handling
6. Monitoring, incident, dispute, and remediation closure
7. Vendor, model, tool, and runtime substitution control
8. Evidence level and source quality review

The checklist should be completed by a cross-functional review group. Procurement alone should not decide lifecycle governance sufficiency.

---

## H.4 Evidence Request Template

**Table T-H-02: Vendor Evidence Request Template**

| Evidence Area | Requested Artifact | Minimum Acceptable Evidence | Preferred Evidence | Publication / Enterprise Review Note |
|---------------|--------------------|-----------------------------|--------------------|----------------------------|
| System boundary | Product scope statement and deployment architecture | Official documentation or implementation description | Versioned architecture record tied to deployed configuration | Review documentation currency before publication or adoption |
| Human responsibility | Role-to-responsibility mapping | Documented workflow or responsibility matrix | Evidence of review workflow execution and exception handling | Confirm mapping against active enterprise roles |
| Delegated authority | Authority policy and enforcement description | Product documentation or implementation policy | Validated operational artifact showing grant, denial, and change handling | Verify whether enforcement is built-in or implementer-defined |
| Tool actions | Tool registry and action record schema | Tool list and logging description | Exportable action records with accountability linkage | Validate record completeness before publication or adoption |
| Evidence handling | Evidence pack, log export, or audit record sample | Sample artifact with field definitions | Hashable or reviewable evidence artifact with minimization controls | Confirm no sensitive evidence over-disclosure |
| Privacy lifecycle | Data flow, retention, and deletion policy | Privacy documentation and retention statement | Mapped workflow for retention conflict and data subject request handling | Review against current privacy requirements before publication or adoption |
| Monitoring | Monitoring dashboard or alert workflow | Monitoring documentation | Operational monitoring artifact tied to lifecycle risk events | Confirm monitoring covers agent lifecycle, not only model metrics |
| Substitution control | Versioning and change approval record | Change management description | Substitution review artifact covering vendor, model, runtime, and tool changes | Review version history and current product state |

---

## H.5 Red Flag and Negative Control Checklist

**Table T-H-03: Procurement Red Flag Checklist**

| Red Flag | Why It Matters | Related Lifecycle Risk | Required Clarification | Boundary |
|----------|----------------|------------------------|------------------------|----------|
| Governance evidence covers only model output | Agentic failures can arise from planning, delegation, tool use, or handoff | Model-centric review misses lifecycle responsibility gaps | Clarify whether lifecycle events are governed | Red flag does not prove non-compliance |
| Human oversight is described without role mapping | Oversight without responsibility mapping may not support accountability | Review duty unclear after agent action | Request role-to-responsibility artifact | Requires enterprise context review |
| Authority limits are not visible | Agents may operate beyond intended delegated scope | Authority drift and unauthorized tool use | Request authority boundary and enforcement evidence | Absence in public docs does not prove absence in product |
| Logs are not exportable or interpretable | Evidence may not support review, audit, or incident reconstruction | Evidence gap during dispute or remediation | Request export format and retention rule | Exportability must be tested in implementation context |
| Privacy retention conflict is not addressed | Evidence retention may conflict with privacy obligations | Data subject rights vs evidence retention conflict | Request retention conflict workflow | Legal interpretation remains outside this appendix |
| Vendor substitution lacks impact review | Model or runtime changes may change lifecycle risk | Reuse and substitution conformance gap | Request change review template | This checklist does not approve substitutions |
| Claims rely only on marketing material | Evidence confidence is lower than product docs or validated artifacts | Overstated capability posture | Request higher-confidence evidence | Evidence level must be recorded explicitly |
| Appendix G posture is treated as a purchase conclusion | Appendix G is provisional and not procurement advice | Premature selection based on provisional source posture | Require enterprise-specific review, page-level citation support, and accountable buyer judgment before final use | Appendix G categories are illustrative only |

---

## H.6 Procurement Decision Boundary

**Table T-H-04: Buyer Interpretation Boundary**

| Procurement Use | What This Scorecard Supports | What It Does Not Support | Required Human Review |
|-----------------|------------------------------|--------------------------|-----------------------|
| RFI/RFP design | Structured governance questions and evidence requests | Automatic vendor filtering or vendor ordering | Procurement, risk, legal, privacy, security |
| Architecture review | Identification of lifecycle governance evidence gaps | Proof of production readiness | Architecture, security, platform owner |
| Risk review | Mapping of visible evidence to RCCS/ALCS prompts | Legal compliance determination | Risk, legal, compliance |
| Privacy review | Identification of retention and data subject rights questions | Privacy law conclusion | Privacy, legal, data governance |
| Contract negotiation | Evidence requirements and control expectations | Contract sufficiency determination | Legal, procurement, business owner |
| Deployment gate | Checklist for unresolved assumptions | Certification or approval | Enterprise governance board or equivalent owner |

Procurement decisions remain enterprise decisions. This appendix helps buyers ask better questions; it does not replace accountable human judgment.
