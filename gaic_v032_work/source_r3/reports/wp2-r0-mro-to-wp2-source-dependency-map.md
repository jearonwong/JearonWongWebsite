# WP2-R0 MRO-to-WP2 Source Dependency Map

**Task ID:** WP2-R0-BIG-FOUR-AUDIT-ASSURANCE-SOURCE-RESEARCH  
**Date:** May 17, 2026  
**Status:** Source dependency map  
**Boundary:** This report maps GAIC Missing Regulatory Objects to future WP2 auditability source needs. It does not change MRO definitions, scores, methodology, or white paper source text.

## Source Truth Correction

The task prompt's short MRO list used a compressed numbering for some objects. Current GAIC source truth is:

- MRO-01 Human Role to MAS Responsibility Mapping
- MRO-02 Delegated Authority Boundary
- MRO-03 Agent Role is not Human Role
- MRO-04 Accepted Outcome Compliance
- MRO-05 Tool-Action Liability Boundary
- MRO-06 Responsibility Transfer Across Agents
- MRO-07 Authority Drift
- MRO-08 MAS Evidence Partitioning
- MRO-09 Cross-Project Reuse Compliance
- MRO-10 Privacy / GDPR Lifecycle Mapping
- MRO-11 Privacy-Preserving Third-Party Validation
- MRO-12 Evidence Minimization and Selective Disclosure
- MRO-13 Data Subject Rights vs Evidence Retention
- MRO-14 Third-Party Processor / Subprocessor Chain
- MRO-15 Vendor / Model / Runtime Substitution Conformance
- MRO-16 Incident, Dispute, and Remediation Closure

## Dependency Map

| MRO | WP2 role | Audit evidence object | Evidence request | Source support needed | Candidate source IDs | Remaining source gap | Boundary risk |
|---|---|---|---|---|---|---|---|
| MRO-01 Human Role to MAS Responsibility Mapping | Establish responsibility-linked review scope. | Human-role responsibility map. | Identify accountable role for intent, authorization, review, acceptance, exception, and remediation. | Internal audit role/governance language; control ownership; AI governance accountability. | AUD-06, AUD-07, AI-01, AUD-04 | More examples from internal audit AI guidance could enrich Guide 2 later. | Do not assign legal liability. |
| MRO-02 Delegated Authority Boundary | Link agent/tool action to authorized scope. | Delegated authority record. | Provide authority grant, scope, conditions, expiry, escalation, and reauthorization evidence. | AI governance, human oversight, control design, audit evidence. | AI-01, AI-06, AI-08, AUD-06 | More source work on agent-specific delegation may be useful during WP2-R1. | Do not equate IAM permission with business authority. |
| MRO-03 Agent Role is not Human Role | Separate agent capability surface from human role/accountability. | Agent role boundary object. | Provide agent role, capability limits, constraint set, human owner, and escalation boundary. | Agentic AI governance, provenance agent concept, governance accountability. | AI-08, EVID-01, AI-01 | Agent-role specific standards are emerging; may need careful author inference. | Do not anthropomorphize agents as legal persons. |
| MRO-04 Accepted Outcome Compliance | Make outcome acceptance reviewable. | Accepted outcome record. | Provide acceptance criteria, acceptance/rejection/dispute state, reviewer role, evidence link, and timestamp. | Audit evidence, internal controls, management review, AI governance. | AUD-01, AUD-02, AUD-04, AUD-06 | Professional sources support evidence/control language, but accepted outcome as a named object remains WP2-authored. | Acceptance does not prove legal compliance. |
| MRO-05 Tool-Action Liability Boundary | Connect tool calls to operational consequence. | Tool-action evidence object. | Provide tool identity, action type, initiator, authority basis, affected system/data, reversibility, rollback plan, and owner. | Logging/trace sources, internal controls, AI governance, cybersecurity incident controls. | EVID-02, EVID-03, EVID-04, AUD-05, AI-06 | Liability-specific legal/insurance sources deferred to WP3. | Do not make legal liability conclusions. |
| MRO-06 Responsibility Transfer Across Agents | Make multi-agent handoffs reviewable. | Responsibility transfer record. | Provide source/target agent, transferred scope, retained scope, inherited constraints, acceptance/rejection, and evidence pointer. | Provenance, AI governance, control/walkthrough language. | EVID-01, AI-08, AUD-06 | Multi-agent handoff professional sources remain limited; treat as author model grounded by provenance/control language. | Do not imply formal legal transfer. |
| MRO-07 Authority Drift | Detect and document unauthorized authority expansion. | Authority drift exception record. | Provide baseline authority, observed action, drift trigger, escalation, downgrade/stop, and reauthorization evidence. | AI risk management, monitoring, control exception, incident response. | AI-01, AI-02, EVID-04, AUD-04 | More technical agent-control sources may be useful later. | Do not claim every drift is a legal breach. |
| MRO-08 MAS Evidence Partitioning | Partition evidence by agent, tool, role, vendor, project, jurisdiction, privacy class, and lifecycle state. | Partitioned evidence chain. | Provide partition keys, evidence pointers, link identifiers, integrity hashes, access rules, and reconstruction path. | Provenance, audit evidence, observability, log management, privacy. | EVID-01, EVID-02, EVID-03, AUD-01, PRIV-03 | Need careful drafting to distinguish partitioning architecture from universal retention duties. | Do not imply blanket disclosure or retention. |
| MRO-09 Cross-Project Reuse Compliance | Preserve context boundary for reused agent/workflow components. | Reuse context validation record. | Provide source context, target context, reset validation, privacy review, authorization refresh, and evidence chain impact. | AI risk management, privacy-by-design, control change management. | AI-01, AI-05, PRIV-02, AUD-04 | More official source support for cross-project agent reuse may be needed; likely author inference. | Do not claim legal reuse clearance. |
| MRO-10 Privacy / GDPR Lifecycle Mapping | Connect agent lifecycle to data processing, retention, rights, and disclosure. | Privacy lifecycle evidence object. | Provide data flow, processing purpose, retention rule, privacy impact evidence, rights workflow, and minimization treatment. | GDPR, ICO, EDPB, NIST Privacy Framework, AI/data protection guidance. | PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05, AI-09 | Sufficient for R0; legal interpretation still requires counsel. | Do not provide legal advice or GDPR proof. |
| MRO-11 Privacy-Preserving Third-Party Validation | Define external review without raw sensitive-data disclosure. | Validation disclosure profile and verdict record. | Provide ruleset identity, disclosure/redaction profile, evidence pointer, validation result hash, reviewer boundary, and recheck procedure. | Privacy guidance, conformity assessment boundary, assurance engagement boundary. | PRIV-02, PRIV-03, BOUND-01, BOUND-02, AUD-03 | Need future decision on whether to cite cryptographic selective disclosure research. | Do not claim certification or conformity assessment. |
| MRO-12 Evidence Minimization and Selective Disclosure | Limit evidence collection/disclosure to review purpose. | Evidence minimization and disclosure object. | Provide minimization rule, retention rule, disclosure justification, redaction profile, access log, and expiry. | GDPR Article 5, EDPB Article 25, ICO minimization/retention, NIST Privacy Framework. | PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05 | Sufficient for R0. | Do not imply privacy compliance proof. |
| MRO-13 Data Subject Rights vs Evidence Retention | Reconcile accountability evidence with data subject rights and retention limits. | Rights-retention reconciliation record. | Provide request type, evidence retention basis, legal hold status, redaction/deletion action, retention justification, and review owner. | GDPR, ICO storage limitation, EDPB design/default guidance. | PRIV-01, PRIV-02, PRIV-05, AI-09 | Requires legal review in future drafting; WP2 can only frame tension. | Do not give legal interpretation. |
| MRO-14 Third-Party Processor / Subprocessor Chain | Map vendor, processor, and subprocessor responsibility surfaces. | Processor/subprocessor chain evidence. | Provide processor role, subprocessor chain, data processing agreement pointer, responsibility owner, and evidence partition. | Privacy/data protection guidance, AI governance, control/vendor risk language. | AI-09, PRIV-01, PRIV-02, AUD-04 | Need deeper vendor-risk/procurement sources only if WP2 chapter expands. | Do not create vendor ranking or procurement recommendation. |
| MRO-15 Vendor / Model / Runtime Substitution Conformance | Preserve evidence and controls after system component changes. | Substitution conformance record. | Provide prior component, new component, regression/control evidence, evidence-integrity check, reauthorization, and revalidation. | AI risk management, management systems, control change language, evidence validation boundary. | AI-01, AI-04, AI-05, AUD-04, BOUND-02 | Need more software change/control sources if Guide 1 later expands. | Do not claim conformance certification. |
| MRO-16 Incident, Dispute, and Remediation Closure | Make exception and closure reconstructable. | Incident/remediation closure record. | Provide event, affected outcome, owner, corrective action, evidence, recheck, closure acceptance, and reopen condition. | NIST CSF, AI RMF GenAI, Trust Services Criteria, internal audit controls. | EVID-04, AI-02, AUD-04, AUD-05, AUD-06 | Sufficient for R0; legal remedy/settlement sources deferred. | Do not claim legal closure or regulator acceptance. |

## Mapping Sufficiency

R0 source support is sufficient for WP2-R1 outline planning. Some concepts, especially agent-role boundaries, responsibility transfer across agents, accepted outcome evidence, and cross-project reuse, remain WP2-authored constructs that should be presented as proposed object-model extensions grounded in professional evidence/control/provenance language.

## Final Status

**WP2-R0 MRO-TO-WP2 SOURCE DEPENDENCY MAP COMPLETE**
