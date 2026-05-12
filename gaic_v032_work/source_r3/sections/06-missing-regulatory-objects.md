# 6. Missing Regulatory Objects for Agentic and MAS Compliance

## 6.0 Why Missing Regulatory Objects Matter

This chapter defines sixteen Missing Regulatory Objects. They are called missing because existing governance language implies their necessity but usually does not define their concrete machine-readable form. They are not proposed statutes. They are engineering and assurance objects that allow regulatory concepts to become testable in agentic workflows.

The phrase matters because existing language is fragmented. Model governance focuses on models. AI risk management focuses on organizational risk processes. Agent orchestration focuses on execution flow. Observability focuses on traces, metrics, and debugging. Human-in-the-loop focuses on review or approval moments. None of these terms alone names the full lifecycle responsibility problem.

These objects bridge the gap between regulatory abstractions and lifecycle implementation. Human oversight becomes human-role-to-MAS responsibility mapping. Logging becomes partitioned evidence chain. Accountability becomes tool-action liability and responsibility transfer. Transparency becomes evidence-linked review and accepted outcome. Monitoring becomes lifecycle drift, incident closure, and continuous improvement. Privacy becomes lifecycle data-flow mapping, minimization, and selective disclosure.

The core move in this paper is to turn regulatory abstractions into lifecycle objects. Regulatory compliance coverage remains the baseline, but agentic lifecycle conformance is the differentiating layer. If agentic workflows cannot prove lifecycle responsibility, they will remain difficult to audit, insure, delegate, reuse, and scale. This is the reason that AI Agent Lifecycle Governance is not a philosophical category. It is an operational prerequisite for agentic AI becoming trusted enterprise infrastructure.

## 6.1 Summary of the Sixteen Missing Regulatory Objects

The following table summarizes all sixteen MROs. Full detail for MRO-01 through MRO-16 is provided in this chapter.

**Figure F-03 — MRO Topology**

Responsibility → Authority → Evidence → Privacy → Substitution → Closure

*Figure F-03 groups the Missing Regulatory Objects by lifecycle control surface. It is a topology for engineering interpretation, not a new legal taxonomy, certification path, or compliance proof.*

| ID | Object | Core Judgment | Primary Lifecycle Concern |
|----|--------|---------------|---------------------------|
| MRO-01 | Human Role to MAS Responsibility Mapping | Human oversight without human-to-agent responsibility mapping is supervision theater. | Accountability, human oversight, role mapping |
| MRO-02 | Delegated Authority Boundary | IAM permission decides access. Delegated authority decides responsibility. | Authority, delegation, scope control |
| MRO-03 | Agent Role is not Human Role | An agent role is a bounded responsibility surface, not a human job title. | Role semantics, capability boundaries |
| MRO-04 | Accepted Outcome Compliance | Output is a system event. Accepted outcome is a governance state. | Outcome acceptance, review, evidence |
| MRO-05 | Tool-Action Liability Boundary | Tool use is where AI output becomes external consequence. | External actions, liability, reversibility |
| MRO-06 | Responsibility Transfer Across Agents | Handoff without explicit responsibility transfer is just routing. | Multi-agent handoff, constraint inheritance |
| MRO-07 | Authority Drift | The most dangerous agent failures are often unauthorized authority transitions. | Authority monitoring, drift detection |
| MRO-08 | MAS Evidence Partitioning | In MAS, evidence must be partitioned, linked, and reconstructable. | Evidence chain, multi-agent traceability |
| MRO-09 | Cross-Project Reuse Compliance | Cross-project reuse is not just efficiency. It is a compliance boundary. | Reuse, context reset, privacy review |
| MRO-10 | Privacy / GDPR Lifecycle Mapping | Privacy compliance in agentic systems must be mapped across the agent lifecycle. | Privacy, data flow, lifecycle stages |
| MRO-11 | Privacy-Preserving Third-Party Validation | External validation without raw sensitive data is a prerequisite for enterprise audit-readiness. | External validation, privacy preservation |
| MRO-12 | Evidence Minimization and Selective Disclosure | Evidence without minimization becomes a privacy risk. Privacy without evidence becomes an accountability gap. | Evidence minimization, selective disclosure |
| MRO-13 | Data Subject Rights vs Evidence Retention | Agentic audit systems must preserve accountability without hoarding personal data. | Data subject rights, retention, accountability |
| MRO-14 | Third-Party Processor / Subprocessor Chain | A multi-agent system is also a multi-party responsibility chain. | Processor chain, vendor responsibility |
| MRO-15 | Vendor / Model / Runtime Substitution Conformance | Vendor neutrality is not real unless compliance survives substitution. | Substitution, vendor changes, conformance continuity |
| MRO-16 | Incident, Dispute, and Remediation Closure | A compliance incident closes when evidence, responsibility, correction, and acceptance are resolved. | Incident closure, dispute resolution, remediation |

**Table T-06-01:** Summary of the Sixteen Missing Regulatory Objects

---

## 6.1.1 Common MRO Field Model

All sixteen MRO object cards share a common set of identity and evidence fields. This common field model avoids repeating generic fields across every object card and establishes a consistent structure for lifecycle governance objects.

The following table defines the common fields that apply to all MROs:

**Table T-06-01A:** Common MRO Field Model

| Common Field | Purpose |
|--------------|---------|
| object_id | Unique identifier for the object instance |
| object_type | MRO type identifier for the object instance |
| lifecycle_id | Identifier linking the object to a specific lifecycle execution |
| project_id | Project or regulated context in which the object applies |
| object_version | Version identifier for the object schema or instance |
| related_human_role_id | Human role identifier associated with the object |
| related_agent_role_id | Agent role identifier associated with the object, where applicable |
| authority_scope | Scope of authority for this object |
| risk_class | Risk classification for this object |
| evidence_pointer | Reference to evidence supporting the object's validity |
| privacy_treatment | Privacy treatment for this object |
| status | Current lifecycle status of the object (active, closed, revoked, etc.) |
| created_at | Timestamp when this object was created |
| updated_at | Timestamp when this object was last updated |
| closure_reason | Reason for closure, if the object is closed |

Implementation aliases may appear in specific systems. In this paper, `actor_role_id` is treated as an implementation alias for `related_human_role_id`, and `timestamp` is treated as implementation shorthand for `created_at` / `updated_at`, not as separate canonical fields.

Individual MRO object cards below therefore emphasize MRO-specific purpose, controls, failure mode, and audit question rather than repeating the full common field model.

---

## 6.2 MRO-01 — Human Role to MAS Responsibility Mapping

### Problem

Regulation can require oversight, but agentic execution needs a precise map from human accountable roles to agent roles, tasks, tools, evidence, and accepted outcomes.

### Required Object

A role-responsibility map binding human role IDs, agent role IDs, permitted delegated scopes, reserved human decisions, review duties, and evidence obligations.

### Judgment

Human oversight without human-to-agent responsibility mapping is supervision theater.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make human role to MAS responsibility mapping explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable human role to MAS responsibility mapping semantics. |
| Audit question | Can an independent reviewer determine whether human role to MAS responsibility mapping was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-02:** MRO-01 Object Card — Human Role to MAS Responsibility Mapping

### Detailed Discussion

This object is the bridge between human organizational accountability and machine execution. In a MAS, a product owner, reviewer, compliance officer, operator, or customer-success lead may each retain different decision rights even when agents perform the underlying work. The mapping must therefore distinguish who owns intent, who approves risk, who reviews evidence, and who accepts the final outcome.

The core question for MRO-01 is whether a system can identify the accountable human role for each agentic lifecycle state, not merely whether a user account or approval button exists. Strong mapping requires a durable relationship among human role, agent role, delegated scope, evidence obligation, review duty, and accepted outcome authority.

The difficulty is that a human may own business acceptance while an agent owns evidence collection, and another agent owns execution. A governance object must preserve those differences instead of flattening them into a single owner field.

### Enterprise Implication

Without this map, a company can show that a human was somewhere in the loop but cannot prove that the right human held the right responsibility at the right lifecycle point. This weakens internal audit, customer assurance, and board-level accountability because role labels become narrative claims rather than evidence-backed assignments.

Adjacent identity, approval, or workflow controls may support this object, but lifecycle conformance requires explicit object semantics that preserve responsibility mapping across multi-agent delegation, cross-project reuse, and external validation. The implementation test is to select a completed run and ask: who owned intent, who approved risk, who executed each step, who reviewed evidence, and who accepted the outcome? If the answer requires tribal memory, the mapping is not audit-grade.

### Design Implication

The object should be represented as a role-responsibility graph linking human role IDs, agent role IDs, delegated scopes, reserved decisions, review duties, evidence obligations, and accepted-outcome authority. It must be updated when responsibilities move across teams or projects.

The design should separate persona labels from capability boundaries, evidence duties, and human accountability so that collaboration structure does not substitute for responsibility semantics.

### Audit Question

For any completed agentic workflow, can the system reconstruct which human role held which responsibility at each lifecycle phase, backed by evidence pointers and acceptance records?

---

## 6.3 MRO-02 — Delegated Authority Boundary

### Problem

API access and tool permission do not prove that a particular business action was authorized under the correct scope, condition, risk level, and escalation path.

### Required Object

A delegated-authority object binding role, action, scope, condition, risk class, evidence requirement, expiry, revocation, and escalation path.

### Judgment

IAM permission decides access. Delegated authority decides responsibility.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make delegated authority boundary explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable delegated authority boundary semantics. |
| Audit question | Can an independent reviewer determine whether delegated authority boundary was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-03:** MRO-02 Object Card — Delegated Authority Boundary

### Detailed Discussion

Delegated authority is narrower than access control. A model or agent may technically possess a credential while lacking business authority to use it for a particular action. The compliance object must describe not only who can call a tool, but why that call is authorized under a specific intent, plan, risk class, condition, and time window.

The core question for MRO-02 is whether a system distinguishes technical permission from business authority. Strong support requires action-level delegation tied to scope, condition, risk class, expiry, escalation, and evidence. The same tool call can be harmless in one context and impermissible in another. Authority must therefore be evaluated against intent and plan state, not only against static credentials.

### Enterprise Implication

If authority is reduced to IAM, API keys, or tool availability, a low-risk task can silently become a high-impact act. The organization may later discover that the system had permission to act but no evidence that the action was approved under the relevant business scope.

Adjacent controls such as IAM, guardrails, and workflow approvals may support this object, but lifecycle conformance requires explicit object semantics that bind a specific action to delegated authority, escalation rules, and evidence.

### Design Implication

The boundary should be checked before high-impact tool calls and should include action class, permitted scope, expiration, revocation, escalation path, evidence pointer, and human override requirements. It should fail closed when authority cannot be reconstructed.

Adjacent platform capabilities can support lifecycle governance, but they do not automatically define accepted outcome, human-role-to-MAS mapping, or cross-project responsibility continuity.

### Audit Question

Before a high-impact tool call, can the system show the exact authority basis and escalation rule for that action? If not, permission is being mistaken for authority.

---

## 6.4 MRO-03 — Agent Role is not Human Role

### Problem

Agent names such as researcher, writer, reviewer, or manager are useful UI metaphors but are not adequate compliance identities.

### Required Object

An agent responsibility boundary declaring duties, non-duties, allowed tools, inherited constraints, verification expectations, and human accountability linkage.

### Judgment

An agent role is a bounded responsibility surface, not a human job title.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make agent role boundaries explicit, inspectable, and replayable within an agentic lifecycle, separating persona labels from responsibility semantics. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable agent role responsibility semantics. |
| Audit question | Can an independent reviewer determine whether agent role boundaries were properly established and preserved for the relevant lifecycle phase? |

**Table T-06-04:** MRO-03 Object Card — Agent Role is not Human Role

### Detailed Discussion

Agent labels such as researcher, writer, analyst, or reviewer are useful interface metaphors, but they do not automatically carry legal, organizational, or professional responsibility. A compliance-grade role must define bounded capabilities, evidence obligations, escalation duties, and non-delegable human responsibilities.

The core question for MRO-03 is whether agent roles are governance identities or only execution personas. Strong support requires separating persona labels from capability boundaries, evidence duties, and human accountability. Human-like role labels are persuasive in UI and documentation, but they can obscure the fact that legal and business accountability remains with humans and organizations.

### Enterprise Implication

Treating an agent persona as a human job role creates false accountability. The company may believe that a reviewer agent has performed review while no accountable human or approved review boundary exists.

Adjacent controls may support this object, but lifecycle conformance requires explicit object semantics for responsibility, evidence, escalation duties, and human accountability linkage.

### Design Implication

Separate UX persona, runtime capability, and governance role. The role object should identify what the agent can do, what it must prove, what it must escalate, and which human role remains accountable for acceptance or rejection.

The implementation test is to replace the agent name with a neutral identifier. If the governance meaning disappears, the system is relying on persona language rather than responsibility structure.

### Audit Question

If the agent name is replaced with a neutral identifier, does the governance meaning remain intact, or was the system relying on persona language rather than responsibility structure?

---

## 6.5 MRO-04 — Accepted Outcome Compliance

### Problem

A model output or orchestrator completion event does not become enterprise work until the right role has reviewed, accepted, or rejected it under evidence.

### Required Object

An accepted_outcome state linking source intent, plan, trace, reviewer, acceptance status, dispute window, remediation route, and evidence pointers.

### Judgment

Output is a system event. Accepted outcome is a governance state.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make accepted outcome compliance explicit, inspectable, and replayable within an agentic lifecycle, separating execution completion from governance acceptance. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable accepted outcome compliance semantics. |
| Audit question | Can an independent reviewer determine whether accepted outcome compliance was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-05:** MRO-04 Object Card — Accepted Outcome Compliance

### Detailed Discussion

Agentic systems often mark work as complete when execution reaches a terminal state. Compliance requires a stronger state: the output must be reviewed against intent, evidence, risk, and acceptance criteria before it becomes an accepted outcome.

The core question for MRO-04 is whether output completion is separated from outcome acceptance. Strong support requires acceptance criteria, reviewer identity, evidence linkage, and dispute/remediation state. Execution engines naturally optimize for terminal states, while governance requires a second state transition from completed output to accepted outcome.

### Enterprise Implication

Without accepted-outcome semantics, completed tasks may enter business processes without accountable review. This creates disputes when customers, regulators, or internal stakeholders ask who accepted the work and on what evidence.

Adjacent execution controls may complete work reliably, but lifecycle conformance requires explicit object semantics for accepted delivery rather than executed task closure. In a dispute, the enterprise must be able to distinguish execution quality, review failure, and missing acceptance policy.

### Design Implication

The accepted_outcome object should bind deliverable ID, plan version, trace reference, reviewer role, acceptance criteria, acceptance decision, dispute window, and remediation path. Completion and acceptance should remain separate states.

The implementation test is to identify a completed task and ask: who accepted it, against what criteria, with what evidence, and what is the dispute window? If the answer is that completion equals acceptance, the system has collapsed execution into governance.

### Audit Question

For any completed task, can the system identify the acceptance criteria, evidence reviewed, reviewer role, decision timestamp, and dispute window?

---

## 6.6 MRO-05 — Tool-Action Liability Boundary

### Problem

Agentic AI becomes operationally consequential when it sends, modifies, deploys, purchases, transfers, deletes, or triggers external actions.

### Required Object

A tool-action liability object recording initiator, tool identity, external system, authority credential, reversibility, rollback plan, affected data, and owner.

### Judgment

Tool use is where AI output becomes external consequence.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make tool-action liability boundary explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable tool-action liability boundary semantics. |
| Audit question | Can an independent reviewer determine whether tool-action liability boundary was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-06:** MRO-05 Object Card — Tool-Action Liability Boundary

### Detailed Discussion

Tool use is the moment where AI output becomes external consequence. Sending email, changing records, deploying code, querying regulated data, or triggering payment workflows each carries different liability and reversibility properties.

A tool call is not only an execution event. It is the point where AI output can affect external systems, records, customers, code, money, permissions, communications, or regulated data. The governance object must bind action, affected system, authority source, reversibility, rollback path, data sensitivity, evidence pointer, and accountable owner.

The core question for MRO-05 is whether the system can reconstruct the liability boundary for each consequential tool action. Strong support requires recording initiator, tool identity, external system, authority credential, reversibility status, rollback plan, affected data categories, and accountable owner. The same tool may be low-risk in one context and high-impact in another.

The difficulty is that a tool log alone may show that an action happened, but not whether the agent had authority, whether the action was reversible, which system was affected, or who owns the resulting consequence.

### Enterprise Implication

Without liability boundaries, enterprises face disputes when external actions cause customer impact, regulatory violations, or financial loss. The organization cannot prove who authorized the action, whether it was within delegated scope, or whether rollback procedures were available.

Adjacent controls such as IAM and API permissions may support this object, but lifecycle conformance requires explicit object semantics that bind the specific tool action to authority, reversibility, affected systems, and accountable ownership.

### Design Implication

Every consequential tool action should produce a liability boundary record: initiator, authority source, target system, action type, reversibility, rollback path, data sensitivity, evidence pointer, and accountable owner.

The implementation test is to select a high-impact tool action and ask: who initiated it, under what authority, affecting which system, with what reversibility, and who owns the consequence? If the answer requires tribal memory or manual investigation, the liability boundary is not audit-grade.

### Audit Question

For any consequential tool action, can the system reconstruct the initiator, authority source, affected system, reversibility status, rollback path, and accountable owner?

---

## 6.7 MRO-06 — Responsibility Transfer Across Agents

### Problem

Handoff in a workflow engine does not automatically transfer responsibility, inherited constraints, retained obligations, or evidence duties.

### Required Object

A transfer object declaring transferred scope, source role, receiving role, retained responsibilities, inherited constraints, and receiving-role acceptance.

### Judgment

Handoff without explicit responsibility transfer is just routing.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make responsibility transfer across agents explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable responsibility transfer across agents semantics. |
| Audit question | Can an independent reviewer determine whether responsibility transfer across agents was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-07:** MRO-06 Object Card — Responsibility Transfer Across Agents

### Detailed Discussion

Handoff is an execution event; responsibility transfer is a governance event. When one agent delegates to another, the receiving agent must inherit constraints, evidence duties, privacy restrictions, and escalation conditions rather than merely receiving a prompt or task payload.

The core question for MRO-06 is whether the system distinguishes workflow routing from responsibility transfer. Strong support requires explicit transfer records declaring transferred scope, retained scope, inherited constraints, evidence obligations, receiving-role acceptance, and rejection/escalation behavior.

The difficulty is that workflow engines naturally optimize for task routing, while governance requires explicit responsibility semantics. A downstream agent can claim it only followed instructions while the upstream agent no longer controls execution, leaving a gap in audit and remediation.

### Enterprise Implication

Without explicit transfer semantics, multi-agent workflows create accountability gaps. When disputes arise, the organization cannot prove which agent held which responsibility at which lifecycle point. This weakens internal audit, customer assurance, and regulatory defense.

Adjacent orchestration controls may support this object, but lifecycle conformance requires explicit object semantics for transferred responsibility, retained responsibility, inherited constraints, evidence duties, and escalation.

### Design Implication

Responsibility transfer should be explicit: transferred scope, retained scope, inherited constraints, evidence obligations, receiving-role acceptance, and rejection/escalation behavior must be recorded.

The implementation test is to select a multi-agent workflow and ask: at each handoff, what responsibility was transferred, what was retained, what constraints were inherited, and did the receiving agent accept? If the answer is that handoff equals transfer, the system has collapsed execution into governance.

### Audit Question

For any multi-agent workflow, can the system reconstruct which agent held which responsibility at each handoff, including transferred scope, retained scope, and inherited constraints?

---

## 6.8 MRO-07 — Authority Drift

### Problem

Agents can drift from advising to executing, drafting to sending, reading to modifying, or summarizing to committing changes.

### Required Object

A drift event model comparing observed behavior against original delegated authority, risk class, tool scope, and required confirmation boundary.

### Judgment

The most dangerous agent failures are often unauthorized authority transitions.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make authority drift explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable authority drift semantics. |
| Audit question | Can an independent reviewer determine whether authority drift was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-08:** MRO-07 Object Card — Authority Drift

### Detailed Discussion

Authority drift occurs when an agent gradually moves from advice to execution, from draft to send, from read-only to write, or from internal recommendation to external commitment. It is often a transition problem rather than a single bad output.

The core question for MRO-07 is whether the system monitors for unauthorized authority transitions. Strong support requires comparing observed behavior against original authority boundaries and plan state. Unauthorized transitions should trigger stop, downgrade, or human confirmation rather than being treated as ordinary execution variance.

The difficulty is that drift is dangerous because each local step may appear reasonable while the cumulative lifecycle state exceeds the original delegation. This is especially acute in long-running workflows, autonomous retries, or agent loops.

### Enterprise Implication

Without drift detection, agents can silently escalate from low-risk to high-impact actions. The organization may discover the problem only after customer impact, regulatory violation, or financial loss. Drift detection is a lifecycle monitoring requirement, not merely a model safety feature.

Adjacent guardrails and content filters may support this object, but lifecycle conformance requires explicit object semantics that monitor authority boundaries across the full execution timeline.

### Design Implication

The system should compare observed behavior against original authority boundaries and plan state. Unauthorized transitions should trigger stop, downgrade, or human confirmation rather than being treated as ordinary execution variance.

The implementation test is to simulate a long-running workflow where an agent gradually escalates from read-only to write, or from draft to send. Can the system detect the transition and halt execution before external consequence? If not, authority drift is unmonitored.

### Audit Question

For any long-running workflow, can the system detect when an agent's observed behavior exceeds its original authority boundary, and does it halt or escalate before external consequence?

---

## 6.9 MRO-08 — MAS Evidence Partitioning

### Problem

A flat chronological log cannot show how different agents, tools, humans, plans, privacy constraints, and evidence fragments relate.

### Required Object

Partitioned evidence by agent, tool, human confirmation, plan version, authority boundary, privacy boundary, and accepted outcome.

### Judgment

In MAS, evidence must be partitioned, linked, and reconstructable.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make MAS evidence partitioning explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | scope boundary, risk class, evidence requirement, privacy treatment, review/approval rule, revocation or closure rule |
| Failure if missing | The system may appear governed at UI or workflow level while lacking enforceable MAS evidence partitioning semantics. |
| Audit question | Can an independent reviewer determine whether MAS evidence partitioning was properly established and preserved for the relevant lifecycle phase? |

**Table T-06-09:** MRO-08 Object Card — MAS Evidence Partitioning

### Detailed Discussion

Multi-agent evidence is not a single log stream. It includes plan versions, agent messages, tool calls, human confirmations, data accesses, privacy decisions, model outputs, evidence hashes, and outcome states. Different auditors may need different partitions.

The core question for MRO-08 is whether evidence can be partitioned, linked, and reconstructed for different audit purposes. Strong support requires partitioning by agent, tool, authority boundary, privacy class, confirmation event, plan version, and accepted outcome. Partitions should be linked by stable identifiers and integrity hashes.

The difficulty is that flat logs are difficult to use in disputes because they mix irrelevant telemetry with critical proof. They also make selective disclosure and privacy minimization harder because sensitive payloads and governance metadata are not separated.

### Enterprise Implication

Without evidence partitioning, multi-agent workflows become difficult to audit, dispute, or selectively disclose. The organization cannot prove which agent performed which action under which authority without exposing unnecessary sensitive data. This weakens regulatory defense, customer assurance, and external validation.

Adjacent observability and trace systems may support this object, but lifecycle conformance requires explicit object semantics that partition evidence by governance boundaries rather than only by execution timeline.

### Design Implication

Evidence should be partitioned by agent, tool, authority boundary, privacy class, confirmation event, plan version, and accepted outcome. Partitions should be linked by stable identifiers and integrity hashes.

The implementation test is to select a completed multi-agent workflow and ask: can the system produce evidence for a specific agent's actions, a specific tool's usage, a specific privacy class, or a specific accepted outcome without exposing the full raw log? If not, evidence partitioning is not audit-grade.

### Audit Question

For any completed multi-agent workflow, can the system reconstruct evidence partitions for specific agents, tools, privacy classes, and accepted outcomes without exposing unnecessary raw data?

---

## 6.10 MRO-09 — Cross-Project Reuse Compliance

### Problem

Agent workflows are increasingly reused across projects, but reuse without revalidation creates compliance drift. A workflow validated for one context, risk class, or privacy boundary may be deployed in a different context without resetting authority, evidence, or privacy constraints.

### Required Object

A cross-project reuse compliance record linking original validation context to new deployment context, including authority reset, privacy review, evidence revalidation, and acceptance criteria adjustment.

### Judgment

Reuse without revalidation is the most common lifecycle governance failure.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make cross-project reuse compliance explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | original validation record, receiving project context, reuse authorization, context delta, privacy review, evidence revalidation, acceptance criteria adjustment |
| Failure if missing | A workflow may be reused in a new project, risk class, or privacy context without authority reset, evidence revalidation, or privacy reassessment. |
| Audit question | Can an independent reviewer determine whether cross-project reuse was authorized, revalidated, and privacy-reviewed for the new deployment context? |

**Table T-06-10:** MRO-09 Object Card — Cross-Project Reuse Compliance

### Detailed Discussion

Reuse is a powerful efficiency mechanism, but it is also a compliance boundary. A workflow validated for internal analytics may be reused for customer-facing decisions without recognizing that the risk class, privacy obligations, and evidence requirements have changed. The original validation context does not automatically transfer.

The governance challenge is that reuse often happens through copy-paste, template libraries, or shared agent definitions. These mechanisms optimize for speed but do not enforce context reset. A reused workflow may carry forward authority assumptions, privacy treatments, or evidence obligations that no longer apply.

Cross-project reuse requires explicit revalidation. The reuse record must link the original validation context to the new deployment context and document what changed: authority scope, risk class, privacy boundary, data sources, tool permissions, human oversight requirements, and acceptance criteria. If the new context is materially different, the workflow must be revalidated rather than merely copied.

The difficulty is that reuse is often invisible to governance systems. A developer may copy a workflow definition, adjust a few parameters, and deploy it in a new project without triggering any compliance review. The organization discovers the problem only when a dispute arises and the reused workflow cannot prove that it was authorized for the new context.

### Enterprise Implication

Without reuse compliance, organizations face hidden governance debt. A workflow validated once may be reused dozens of times across different projects, risk classes, and privacy contexts without any record of revalidation. This creates audit gaps, privacy violations, and liability exposure.

Adjacent template libraries and shared agent definitions may support this object, but lifecycle conformance requires explicit object semantics for context reset, privacy review, and evidence revalidation when deployment context changes.

### Design Implication

The reuse record should bind original workflow ID, original validation record, receiving project ID, reuse authorization, context delta analysis, privacy review, evidence revalidation, and acceptance criteria adjustment. Reuse should trigger a compliance checkpoint rather than being treated as a copy operation.

The implementation test is to select a reused workflow and ask: was it revalidated for the new context, was the privacy boundary reassessed, were authority and evidence requirements reset, and who approved the reuse? If the answer is that reuse was automatic, the system has no reuse compliance boundary.

### Audit Question

For any reused workflow, can the system prove that it was revalidated for the new deployment context, including authority reset, privacy review, and evidence revalidation?

---

## 6.11 MRO-10 — Privacy / GDPR Lifecycle Mapping

### Problem

GDPR applies to the full lifecycle, but most AI governance focuses on model training data. Agentic systems retrieve, process, store, share, and delete personal data across agents, tools, memory systems, and handoffs. Privacy compliance requires lifecycle data-flow mapping, not only model-level controls.

### Required Object

A lifecycle data-flow map showing what personal data enters, flows through, and exits each agent, tool, memory, and handoff, including legal basis, purpose limitation, retention period, and data subject rights.

### Judgment

Privacy compliance in MAS requires lifecycle data-flow mapping, not only model-level controls.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make privacy / GDPR lifecycle mapping explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | data-flow map, legal-basis reference, purpose-limitation record, retention policy, data subject rights workflow, privacy impact assessment reference |
| Failure if missing | Personal data may move through agents, tools, memory, and handoffs without lifecycle-level evidence of purpose, retention, rights handling, or privacy treatment. |
| Audit question | Can an independent reviewer reconstruct what personal data entered, flowed through, and exited each agent, tool, and memory system, and verify that legal basis, purpose limitation, and retention policies were enforced? |

**Table T-06-11:** MRO-10 Object Card — Privacy / GDPR Lifecycle Mapping

### Detailed Discussion

Privacy compliance in agentic systems is not limited to model training data. Agents retrieve customer records, process personal data in tool calls, store conversation history in memory systems, share data across agent handoffs, and delete data in response to data subject requests. Each of these operations is a privacy event.

The governance challenge is that privacy controls are often applied at the model or database layer but not at the agent lifecycle layer. An agent may retrieve personal data from a compliant database, process it through multiple tools, store it in a memory system, and share it with another agent without any lifecycle-level privacy tracking. The organization cannot prove what personal data was accessed, for what purpose, under what legal basis, or how long it was retained.

GDPR requires data controllers to document processing activities, enforce purpose limitation, implement retention policies, and honor data subject rights. In a multi-agent system, this requires a lifecycle data-flow map that shows what personal data enters each agent, how it flows through tools and memory, where it is stored, when it is deleted, and how data subject rights are implemented.

The difficulty is that agentic systems are dynamic. Data flows change based on runtime decisions, tool availability, and agent handoffs. A static data-flow diagram is insufficient. The map must be reconstructable from lifecycle evidence, showing actual data flows rather than only intended flows.

### Enterprise Implication

Without lifecycle data-flow mapping, organizations cannot prove GDPR compliance for agentic systems. A data subject access request may require reconstructing what personal data was processed by which agents, for what purpose, under what legal basis, and where it is now stored. If the organization cannot answer these questions, it faces regulatory penalties and reputational damage.

Adjacent privacy dashboards and data governance systems may support this object, but lifecycle conformance requires explicit object semantics that track personal data through the full agent lifecycle, not only model training or database layers.

### Design Implication

The data-flow map should be reconstructable from lifecycle evidence. Each agent, tool, memory system, and handoff should record what personal data was accessed, for what purpose, under what legal basis, how long it was retained, and how data subject rights were implemented. The map should support data subject access requests, rectification, erasure, and portability.

The implementation test is to simulate a data subject access request and ask: can the system reconstruct what personal data was processed by which agents, for what purpose, under what legal basis, and where it is now stored? If the answer requires manual investigation, the lifecycle data-flow map is not audit-grade.

### Audit Question

For any completed workflow involving personal data, can the system reconstruct what personal data entered, flowed through, and exited each agent, tool, and memory system, and verify that legal basis, purpose limitation, and retention policies were enforced?

---

## 6.12 MRO-11 — Privacy-Preserving Third-Party Validation

### Problem

Enterprise buyers want independent validation, but full evidence disclosure violates privacy and trade secrets. Third-party validators need to verify compliance without accessing raw sensitive data, model weights, or proprietary workflows.

### Required Object

A privacy-preserving validation protocol allowing selective disclosure and zero-knowledge proofs, enabling validators to verify compliance properties without accessing raw evidence.

### Judgment

Third-party validation must not require full evidence disclosure.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make privacy-preserving third-party validation explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | validation scope definition, selective disclosure policy, redaction profile, proof or hash manifest, evidence-owner authorization, validator access boundary |
| Failure if missing | External validation may require raw sensitive evidence access, creating privacy, trade-secret, and over-disclosure risk. |
| Audit question | Can an independent validator verify compliance properties without accessing raw sensitive data, and can the evidence owner prove that only authorized evidence was disclosed? |

**Table T-06-12:** MRO-11 Object Card — Privacy-Preserving Third-Party Validation

### Detailed Discussion

Third-party validation is a trust mechanism. Enterprise buyers, insurers, and regulators want independent verification that an agentic system meets compliance requirements. But full evidence disclosure creates privacy and trade secret risks. A validator who accesses raw customer data, model weights, or proprietary workflows becomes a privacy risk and a competitive threat.

The governance challenge is that traditional audit models assume full evidence access. A financial auditor expects to see transaction records. A security auditor expects to see system logs. But in agentic systems, full evidence access may violate GDPR, expose trade secrets, or create insider threat risks.

Privacy-preserving validation requires a different model. The evidence owner must be able to prove compliance properties without disclosing raw evidence. This can be achieved through selective disclosure, where only governance metadata is shared, or through zero-knowledge proofs, where the validator can verify a property without seeing the underlying data.

The difficulty is that privacy-preserving validation is technically complex. Zero-knowledge proofs require cryptographic expertise. Selective disclosure requires careful evidence partitioning. Validators may resist these approaches because they reduce audit confidence. The market needs validation protocols that balance privacy preservation with audit rigor.

### Enterprise Implication

Without privacy-preserving validation, enterprises face a dilemma: accept unvalidated systems or disclose sensitive data to validators. This slows adoption, increases risk, and creates vendor lock-in because switching vendors requires re-disclosing evidence.

Adjacent validation programs may support this object, but lifecycle conformance requires explicit object semantics for selective disclosure and independent verification without unnecessary raw data access.

### Design Implication

The validation protocol should support selective disclosure and zero-knowledge proofs. Evidence should be partitioned so that governance metadata can be shared without exposing raw payloads. Validators should be able to verify compliance properties such as authority boundaries, evidence completeness, and privacy controls without accessing customer data or model weights.

The implementation test is to simulate a third-party validation and ask: can the validator verify compliance properties without accessing raw sensitive data, and can the evidence owner prove that only authorized evidence was disclosed? If the answer is that full evidence access is required, the validation protocol is not privacy-preserving.

### Audit Question

Can an independent validator verify compliance properties without accessing raw sensitive data, and can the evidence owner prove that only authorized evidence was disclosed?

---

## 6.13 MRO-12 — Evidence Minimization and Selective Disclosure

### Problem

Lifecycle governance requires evidence retention, but GDPR requires data minimization. Retaining full execution logs, conversation history, and tool payloads creates privacy risk. Deleting evidence creates accountability gaps.

### Required Object

An evidence minimization and selective disclosure policy defining retention periods, redaction rules, and disclosure boundaries for different evidence classes.

### Judgment

Evidence retention must balance auditability with privacy minimization.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make evidence minimization and selective disclosure explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | retention policy, redaction rules, disclosure boundaries, deletion schedule, audit trail, evidence class handling |
| Failure if missing | Evidence retention may become a privacy risk, while evidence deletion may create accountability gaps. |
| Audit question | Can an independent reviewer verify that evidence retention was minimized to what is necessary for accountability, and that disclosure was limited to authorized parties and purposes? |

**Table T-06-13:** MRO-12 Object Card — Evidence Minimization and Selective Disclosure

### Detailed Discussion

Evidence retention is a governance requirement. Auditors, regulators, and dispute resolution processes need evidence to reconstruct what happened. But GDPR requires data minimization: personal data should be retained only as long as necessary for the specified purpose. These requirements are in tension.

The governance challenge is that agentic systems generate large volumes of evidence: execution logs, conversation history, tool payloads, model outputs, memory snapshots, and handoff records. Retaining all of this evidence creates privacy risk. Deleting it creates accountability gaps. The organization must balance auditability with privacy minimization.

Evidence minimization requires a retention policy that distinguishes different evidence classes. Governance metadata such as authority boundaries, acceptance decisions, and responsibility transfers may need long retention periods. Raw payloads such as customer messages, tool responses, and memory snapshots may need short retention periods or immediate redaction. The policy must define what is retained, for how long, in what form, and for what purpose.

Selective disclosure requires disclosure boundaries. Different auditors may need different evidence partitions. A privacy regulator may need data-flow evidence but not model weights. A financial auditor may need transaction evidence but not conversation history. A customer dispute may require specific evidence without exposing unrelated data. The system must support selective disclosure without requiring full evidence access.

### Enterprise Implication

Without evidence minimization, organizations face privacy violations and regulatory penalties. Retaining full execution logs indefinitely violates GDPR data minimization principles. Without selective disclosure, organizations face dilemmas: deny audit requests or expose unnecessary sensitive data.

Adjacent observability and evidence management systems may support this object, but lifecycle conformance requires explicit object semantics that balance auditability with privacy minimization and selective disclosure.

### Design Implication

The evidence policy should define retention periods, redaction rules, and disclosure boundaries for different evidence classes. Governance metadata should be retained longer than raw payloads. Personal data should be redacted or pseudonymized unless required for accountability. Disclosure should be partitioned by audit purpose.

The implementation test is to simulate a data subject erasure request and ask: can the system delete personal data while preserving accountability evidence, and can it prove that only necessary evidence was retained? If the answer is that all evidence must be retained or all evidence must be deleted, the policy does not balance auditability with privacy minimization.

### Audit Question

For any evidence retention decision, can the system prove that evidence was minimized to what is necessary for accountability, and that disclosure was limited to authorized parties and purposes?

---

## 6.14 MRO-13 — Data Subject Rights vs Evidence Retention

### Problem

GDPR grants data subjects the right to erasure, but lifecycle governance requires evidence retention for audit, dispute resolution, and regulatory defense. These requirements are in structural tension in agentic systems where evidence chains must be preserved to prove accountability.

### Required Object

A data subject rights vs evidence retention policy defining retention periods, anonymization rules, legal basis for retention, and reconciliation procedures when erasure requests conflict with evidence obligations.

### Judgment

Data subject rights and evidence retention are in structural tension in agentic systems.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make data subject rights versus evidence retention handling explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | retention policy, legal-basis documentation, anonymization procedures, erasure request log, retention override justification, escalation path |
| Failure if missing | The organization may either lose accountability evidence or over-retain personal data without a documented reconciliation process. |
| Audit question | Can an independent reviewer verify that evidence retention was limited to what is legally necessary for accountability, and that data subject rights were honored except where legal retention obligations apply? |

**Table T-06-14:** MRO-13 Object Card — Data Subject Rights vs Evidence Retention

### Detailed Discussion

The tension between data subject rights and evidence retention is fundamental. GDPR Article 17 grants individuals the right to erasure when personal data is no longer necessary for the original purpose. But lifecycle governance requires retaining evidence to prove that agentic work was authorized, executed under proper authority, reviewed, and accepted. If a customer later disputes an outcome, the organization needs evidence to reconstruct what happened.

This tension becomes acute in agentic systems because evidence chains are distributed across agents, tools, memory systems, and handoffs. A data subject erasure request may require deleting conversation history, tool payloads, and memory snapshots while preserving governance metadata such as authority boundaries, acceptance decisions, and responsibility transfers. The challenge is determining what can be deleted without breaking the accountability chain.

The policy must define retention periods for different evidence classes. Raw payloads containing personal data may have short retention periods. Governance metadata may have longer retention periods based on legal, regulatory, or contractual obligations. When a data subject requests erasure, the system must determine whether the request can be honored immediately, whether evidence can be anonymized instead of deleted, or whether retention is legally required.

The difficulty is that legal retention obligations vary by jurisdiction, industry, and context. Financial services may require seven-year retention. Healthcare may require longer. Employment records may have different rules. The policy must map these obligations to evidence classes and provide clear procedures for handling erasure requests that conflict with retention requirements.

### Enterprise Implication

Without a clear policy, organizations face impossible choices: honor erasure requests and lose accountability evidence, or deny erasure requests and violate GDPR. Both paths create legal risk. The organization needs a documented policy that defines when evidence retention overrides erasure rights, what legal basis applies, and how to minimize retained personal data.

Adjacent evidence retention controls may support this object, but lifecycle conformance requires explicit object semantics that distinguish governance metadata from raw payloads and reconcile data subject requests with accountability needs.

### Design Implication

The policy should define retention periods by evidence class, legal basis for retention, anonymization procedures, and escalation paths for erasure requests that conflict with retention obligations. The system should support selective erasure: deleting raw payloads while preserving anonymized governance metadata.

The implementation test is to simulate a data subject erasure request and ask: can the system delete personal data while preserving accountability evidence, can it document the legal basis for any retained evidence, and can it prove that retention was minimized to what is legally necessary? If the answer is that all evidence must be retained or all evidence must be deleted, the policy does not resolve the tension.

### Audit Question

For any data subject erasure request, can the system prove that personal data was deleted except where legal retention obligations apply, and that retained evidence was minimized and anonymized where possible?

---

## 6.15 MRO-14 — Third-Party Processor / Subprocessor Chain

### Problem

GDPR requires data controllers to maintain processor agreements and notify data subjects of subprocessors. In multi-agent systems, the processor chain is dynamic: agents call tools, tools call APIs, APIs invoke third-party services, and the chain changes based on runtime decisions. Static processor lists cannot capture this dynamic reality.

### Required Object

A dynamic processor chain record tracking which processors and subprocessors handled which personal data at which lifecycle phase, including processor identity, data categories, processing purpose, legal basis, and data flow timestamps.

### Judgment

In MAS, the processor chain is dynamic and must be tracked at lifecycle granularity.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make third-party processor / subprocessor chain handling explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | processor identity, subprocessor identity, data categories, processing purpose, legal-basis reference, processor agreement reference, data-flow timestamps |
| Failure if missing | Static vendor or processor lists may fail to show which third parties processed which personal data during actual agentic execution. |
| Audit question | Can an independent reviewer reconstruct which processors and subprocessors handled which personal data at which lifecycle phase, and verify that processor agreements and legal basis were in place? |

**Table T-06-15:** MRO-14 Object Card — Third-Party Processor / Subprocessor Chain

### Detailed Discussion

GDPR Article 28 requires data controllers to use only processors that provide sufficient guarantees of compliance, to maintain written processor agreements, and to notify data subjects of subprocessors. This works well for static systems where the processor list is known in advance. But in multi-agent systems, the processor chain is dynamic and context-dependent.

An agent may retrieve customer data from an internal database, send it to a third-party API for enrichment, store the result in a cloud memory service, and pass it to another agent that uses a different model provider. Each of these steps may involve a different processor or subprocessor. The chain changes based on which tools are available, which models are selected, and which agents are invoked.

The governance challenge is that static processor lists become outdated immediately. A data subject access request may ask: which third parties processed my data? The organization cannot answer without reconstructing the actual processor chain from lifecycle evidence. The record must show which processors handled which data categories at which lifecycle phase, under which legal basis, and pursuant to which processor agreement.

The difficulty is that processor chains can be long and nested. A tool may call an API that invokes a subprocessor that uses another subprocessor. The organization may not have direct visibility into nested subprocessor relationships unless the primary processor discloses them. The record must capture what is known and flag what is unknown or unverified.

### Enterprise Implication

Without dynamic processor chain tracking, organizations cannot answer data subject access requests, cannot verify processor compliance, and cannot detect unauthorized subprocessor usage. This creates GDPR violation risk and weakens vendor management.

Adjacent vendor management systems may support this object, but lifecycle conformance requires explicit object semantics that track processor and subprocessor usage at lifecycle granularity, not only at configuration time.

### Design Implication

The processor chain record should capture processor identity, subprocessor identity, data categories, processing purpose, legal basis, processor agreement reference, and data flow timestamps for each lifecycle phase. The record should be reconstructable from tool call evidence and should support data subject access requests.

The implementation test is to select a completed workflow involving personal data and ask: which processors and subprocessors handled which data categories, under which legal basis, and pursuant to which processor agreements? If the answer requires manual investigation or vendor inquiry, the processor chain record is not audit-grade.

### Audit Question

For any completed workflow involving personal data, can the system reconstruct which processors and subprocessors handled which data categories at which lifecycle phase, and verify that processor agreements and legal basis were in place?

---

## 6.16 MRO-15 — Vendor / Model / Runtime Substitution Conformance

### Problem

Enterprises want vendor optionality and the ability to substitute models, agent runtimes, or tool vendors without revalidation. But substitution without conformance verification breaks lifecycle governance. A workflow validated with one model may behave differently with another model. A tool validated with one vendor may have different authority boundaries with another vendor.

### Required Object

A vendor substitution conformance record proving that substitution preserved lifecycle responsibility properties, including authority boundaries, evidence requirements, privacy constraints, and acceptance criteria.

### Judgment

Vendor substitution without revalidation breaks lifecycle conformance.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make vendor / model / runtime substitution conformance explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | original validation record, substitution authorization, delta analysis, conformance check record, privacy boundary review, revalidation decision |
| Failure if missing | Vendor, model, or runtime substitution may create compliance drift while appearing to be only a configuration change. |
| Audit question | Can an independent reviewer verify that vendor substitution preserved lifecycle responsibility properties, and that conformance was revalidated before deployment? |

**Table T-06-16:** MRO-15 Object Card — Vendor / Model / Runtime Substitution Conformance

### Detailed Discussion

Vendor neutrality is a strategic goal for many enterprises. Organizations want to avoid vendor lock-in, negotiate better pricing, and maintain optionality. But vendor neutrality is not real unless compliance survives substitution. Swapping one model for another, one agent runtime for another, or one tool vendor for another can change behavior in ways that break lifecycle conformance.

A model substitution may change output quality, reasoning patterns, or tool-calling behavior. A runtime substitution may change how authority boundaries are enforced, how evidence is collected, or how privacy constraints are applied. A tool vendor substitution may change API semantics, error handling, or reversibility properties. These changes can be subtle but consequential.

The governance challenge is that substitution is often treated as a configuration change rather than a compliance event. A developer may swap model providers, update an API endpoint, or switch agent frameworks without triggering any revalidation. The organization discovers the problem only when a dispute arises and the substituted system cannot prove that it preserved the original lifecycle responsibility properties.

The conformance record must document what was substituted, why, what changed, what was tested, and whether the substitution preserved authority boundaries, evidence requirements, privacy constraints, and acceptance criteria. If the substitution introduces material changes, the workflow must be revalidated rather than merely reconfigured.

### Enterprise Implication

Without substitution conformance, vendor optionality becomes compliance drift. The organization may believe it has validated workflows when in fact it has validated only the original vendor configuration. Substitution without revalidation creates hidden governance debt that surfaces during audits or disputes.

Adjacent vendor-neutral architectures may support this object, but lifecycle conformance requires explicit object semantics proving that substitution preserved responsibility properties rather than merely preserving technical capability.

### Design Implication

The substitution record should bind original workflow ID, original validation record, substitution authorization, conformance test results, delta analysis, and revalidation decision. Substitution should trigger a conformance checkpoint rather than being treated as a transparent configuration change.

The implementation test is to simulate a vendor substitution and ask: was conformance revalidated, were lifecycle responsibility properties preserved, and can the system prove that the substituted configuration meets the same governance requirements as the original? If the answer is that substitution was automatic, the system has no substitution conformance boundary.

### Audit Question

For any vendor substitution, can the system prove that lifecycle responsibility properties were preserved, and that conformance was revalidated before deployment?

---

## 6.17 MRO-16 — Incident, Dispute, and Remediation Closure

### Problem

Most AI governance focuses on prevention: risk assessment, guardrails, human oversight, and monitoring. But lifecycle governance is incomplete without incident detection, dispute resolution, remediation, and closure. When an agentic system produces an incorrect outcome, violates a policy, or causes customer harm, the organization needs a structured process to detect the incident, investigate root cause, remediate the problem, close the dispute, and implement continuous improvement.

### Required Object

An incident, dispute, and remediation closure record linking incident detection to root cause analysis, remediation action, dispute resolution, acceptance of closure, and continuous improvement measures.

### Judgment

Lifecycle governance is incomplete without incident closure and continuous improvement.

### Object Card

| Field | Description |
|-------|-------------|
| Object purpose | To make incident, dispute, and remediation closure explicit, inspectable, and replayable within an agentic lifecycle. |
| Minimum identity fields | object_id, object_type, lifecycle_id, project_id, object_version, related_human_role_id, related_agent_role_id where applicable, evidence_pointer, status, created_at, updated_at |
| Required controls | incident detection record, root cause analysis, remediation action, dispute resolution decision, closure acceptance, continuous improvement plan, privacy-limited evidence disclosure |
| Failure if missing | Incidents may be detected or handled manually without evidence-linked remediation, dispute closure, or continuous improvement. |
| Audit question | Can an independent reviewer verify that incidents were detected, investigated, remediated, and closed with documented root cause and continuous improvement measures? |

**Table T-06-17:** MRO-16 Object Card — Incident, Dispute, and Remediation Closure

### Detailed Discussion

Incident closure is where lifecycle governance proves its value. Prevention is important, but no system is perfect. Agents will make mistakes, policies will be violated, and customers will be harmed. The question is whether the organization can detect incidents quickly, investigate root cause accurately, remediate effectively, resolve disputes fairly, and improve continuously.

An incident is any event where an agentic system produces an outcome that violates policy, exceeds authority, causes harm, or fails to meet acceptance criteria. A dispute is any challenge to an outcome by a customer, regulator, or internal stakeholder. Remediation is the action taken to correct the problem. Closure is the state where the incident is resolved, the dispute is settled, and the organization has implemented measures to prevent recurrence.

The governance challenge is that incident management is often ad hoc. A customer complaint may trigger an investigation, but the investigation may not link back to the original lifecycle evidence. The root cause may not be documented. The remediation may not be verified. The dispute may be settled without any continuous improvement. The organization learns nothing from the incident.

The closure record must link incident detection to lifecycle evidence, root cause analysis, remediation action, dispute resolution decision, closure acceptance, and continuous improvement plan. The record must be auditable: an independent reviewer should be able to verify that the incident was handled properly and that the organization learned from it.

### Enterprise Implication

Without incident closure, organizations cannot prove that they handle agentic failures responsibly. Customers lose trust. Regulators question accountability. Insurers raise premiums or deny coverage. The organization cannot demonstrate continuous improvement because it has no structured process for learning from incidents.

Adjacent monitoring systems may support this object, but lifecycle conformance requires explicit object semantics that link incidents to remediation, dispute closure, and continuous improvement.

### Design Implication

The closure record should bind incident ID, detection timestamp, lifecycle evidence pointers, root cause analysis, remediation action, dispute resolution decision, closure acceptance, and continuous improvement plan. Incidents should remain open until remediation is verified and closure is accepted by the accountable owner.

The implementation test is to simulate an incident and ask: can the system detect it, link it to lifecycle evidence, document root cause, track remediation, resolve disputes, and close with continuous improvement measures? If the answer is that incidents are handled manually without structured records, the system has no incident closure capability.

### Audit Question

For any incident, can the system verify that it was detected, investigated, remediated, and closed with documented root cause and continuous improvement measures?

---

## 6.18 Chapter Summary

The sixteen Missing Regulatory Objects defined in this chapter represent the missing object layer between regulatory abstractions and agentic lifecycle implementation. They are not proposed statutes or legal mandates. They are engineering and assurance objects that make regulatory concepts testable in multi-agent execution.

Existing regulation and governance frameworks increasingly require human oversight, logging, documentation, monitoring, accountability, transparency, and privacy controls. But they do not yet fully specify the lifecycle objects required to prove those properties inside dynamic agentic workflows. The sixteen MROs bridge that gap. They turn regulatory abstractions into lifecycle objects: human oversight becomes human-role-to-MAS responsibility mapping, logging becomes partitioned evidence chain, accountability becomes tool-action liability and responsibility transfer, transparency becomes evidence-linked review and accepted outcome, monitoring becomes lifecycle drift and incident closure, privacy becomes lifecycle data-flow mapping and selective disclosure.

These objects are necessary because agentic AI is not only model output. It is organized work that moves from intent to accepted outcome through delegation, execution, evidence collection, review, acceptance, dispute, remediation, and reuse. If that work cannot be proven under controlled authority, evidence, privacy, and remediation constraints, it remains difficult to audit, insure, delegate, reuse, and scale. This is why AI Agent Lifecycle Governance is not a philosophical category. It is an operational prerequisite for agentic AI becoming trusted enterprise infrastructure.

The next chapters introduce the three-profile analytical model that measures how systems map to these objects. RCCS-T measures traditional regulatory compliance coverage. MROs provide the adjustment layer that asks whether that coverage can be represented as lifecycle responsibility objects. RCCS-M measures MRO-adjusted regulatory coverage. ALCS measures lifecycle conformance maturity.

Conceptually:

```text
RCCS-T + MRO Coverage = RCCS-M
```

This is an analytical model, not a legal formula, certification, regulator-approved scoring method, vendor ranking, or procurement recommendation. Its purpose is to make the transition visible: regulatory language names the governance expectation; MROs define the lifecycle responsibility object; RCCS-M evaluates whether the traditional regulatory surface can be expressed through that object layer.
