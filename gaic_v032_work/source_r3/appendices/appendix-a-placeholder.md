# Appendix A — Machine-Readable Object Templates

**Version:** v0.3.2-FRC-R3  

---

## A.0 Template Boundary

This appendix provides illustrative machine-readable templates for the sixteen Missing Regulatory Objects defined in Chapter 6. These templates are reference structures, not formal schemas, legal requirements, or certification requirements.

**Boundary statement:**

- **These templates are illustrative only.** They demonstrate how lifecycle responsibility objects might be represented in machine-readable form. They are not formal MPLP schemas, not legal requirements, and not certification requirements.

- **These templates are not prescriptive.** Organizations may use different field names, data types, or structures. The templates show one possible approach to representing lifecycle responsibility objects.

- **These templates do not prove compliance.** The presence of these fields in a system does not prove legal compliance, regulatory approval, or certification. Organizations must interpret lifecycle responsibility objects within their legal, regulatory, and operational context.

- **These templates are not MPLP-specific.** While MPLP (Multi-Agent Lifecycle Protocol) is one protocol path that can express lifecycle responsibility objects, these templates are protocol-agnostic. Other protocols, platforms, or custom implementations may use different representations.

---

## A.1 Shared Field Conventions

All sixteen MRO templates share a common set of fields to support lifecycle traceability, evidence partitioning, and cross-object relationships.

**Shared fields:**

```yaml
object_id: unique identifier for this object instance
object_type: MRO type (e.g., "MRO-01", "MRO-02")
lifecycle_id: identifier linking this object to a specific lifecycle instance
project_id: identifier for the project or regulated context
object_version: version number for this object instance
related_human_role_id: identifier for the human role associated with this object
related_agent_role_id: identifier for the agent role associated with this object
authority_scope: scope of authority for this object (e.g., "draft", "send", "commit")
risk_class: risk classification for this object (e.g., "low", "medium", "high")
evidence_pointer: pointer to evidence artifacts supporting this object
privacy_treatment: privacy treatment for this object (e.g., "redact_pii", "selective_disclosure")
status: current status (e.g., "active", "closed", "disputed")
created_at: timestamp when this object was created
updated_at: timestamp when this object was last updated
closure_reason: reason for closure (if status is "closed")
```

**Object-specific fields:** Each MRO template includes 3-6 object-specific fields relevant to that MRO's purpose.

All example values are non-normative placeholders and do not establish legal compliance, liability allocation, certification, or completed validation.

For readability, the examples below present object-specific fields under a comment block. Implementations may alternatively nest them under `object_specific_fields`.

---

## A.2 MRO Template Index

The following table indexes the sixteen MRO templates and their object-specific fields.

**Table T-A-01: Appendix A Template Index**

| MRO ID | Object Name | Template Purpose | Object-Specific Fields | Boundary |
|--------|-------------|------------------|------------------------|----------|
| MRO-01 | Human Role to MAS Responsibility Mapping | Map human roles to MAS responsibilities with explicit acceptance records | human_role_name, mas_responsibility_scope, acceptance_required, escalation_policy, review_frequency | Illustrative only; not legal requirement; not certification requirement |
| MRO-02 | Delegated Authority Boundary | Define explicit authority boundaries for agent actions | authority_grant_type, tool_action_permissions, boundary_violation_policy, reauthorization_trigger, drift_detection_enabled | Illustrative only; not legal requirement; not certification requirement |
| MRO-03 | Agent Role is not Human Role | Distinguish agent responsibility surfaces from human roles | agent_role_name, agent_responsibility_surface, human_role_distinction, accountability_mapping, role_confusion_risk | Illustrative only; not legal requirement; not certification requirement |
| MRO-04 | Accepted Outcome Compliance | Record explicit acceptance of agent outcomes by accountable human roles | outcome_description, acceptance_status, accepted_by_role, acceptance_timestamp, rejection_reason, escalation_path | Illustrative only; not legal requirement; not certification requirement |
| MRO-05 | Tool-Action Liability Boundary | Record tool actions and liability boundaries | tool_name, action_type, liability_assignment, tool_provider_agreement, authorization_record, action_reversibility | Illustrative only; not legal requirement; not certification requirement |
| MRO-06 | Responsibility Transfer Across Agents | Record responsibility transfer and constraint inheritance across agent handoffs | source_agent_id, target_agent_id, transfer_timestamp, constraint_inheritance, handoff_validation, responsibility_acceptance | Illustrative only; not legal requirement; not certification requirement |
| MRO-07 | Authority Drift | Detect and record authority drift over time | authority_baseline, current_authority_scope, drift_detected, drift_magnitude, reauthorization_required, drift_alert_policy | Illustrative only; not legal requirement; not certification requirement |
| MRO-08 | MAS Evidence Partitioning | Partition evidence by project, customer, jurisdiction, or data subject | partition_key, partition_type, evidence_export_policy, selective_disclosure_enabled, partition_boundary, cross_partition_access_policy | Illustrative only; not legal requirement; not certification requirement |
| MRO-09 | Cross-Project Reuse Compliance | Validate reuse compliance across regulated contexts | source_project_id, target_project_id, reuse_type, reset_validation, reauthorization_required, context_boundary_check | Illustrative only; not legal requirement; not certification requirement |
| MRO-10 | Privacy / GDPR Lifecycle Mapping | Map data flow, retention, and subject rights across agent lifecycle | data_flow_record, retention_policy, data_subject_rights_workflow, privacy_impact_assessment, gdpr_article_mapping, data_minimization_policy | Illustrative only; not legal requirement; not certification requirement |
| MRO-11 | Privacy-Preserving Third-Party Validation | Support privacy-preserving validation without exposing sensitive data | validation_protocol, disclosure_profile, redaction_profile, hash_manifest, verdict_hash, validation_provider_agreement | Illustrative only; not legal requirement; not certification requirement |
| MRO-12 | Evidence Minimization and Selective Disclosure | Implement evidence minimization and selective disclosure policies | retention_policy, disclosure_policy, minimization_rules, selective_disclosure_log, evidence_expiry, disclosure_justification | Illustrative only; not legal requirement; not certification requirement |
| MRO-13 | Data Subject Rights vs Evidence Retention | Reconcile data subject rights with evidence retention requirements | data_subject_request_type, evidence_retention_requirement, reconciliation_policy, legal_hold_status, erasure_exception, retention_justification | Illustrative only; not legal requirement; not certification requirement |
| MRO-14 | Third-Party Processor / Subprocessor Chain | Map processor and subprocessor chain with responsibility assignment | processor_name, processor_role, subprocessor_chain, data_processing_agreement, responsibility_assignment, processor_liability | Illustrative only; not legal requirement; not certification requirement |
| MRO-15 | Vendor / Model / Runtime Substitution Conformance | Validate conformance after vendor, model, or runtime substitution | substitution_type, previous_vendor, new_vendor, conformance_validation, regression_testing, evidence_integrity_check | Illustrative only; not legal requirement; not certification requirement |
| MRO-16 | Incident, Dispute, and Remediation Closure | Record incident, dispute, and remediation closure with responsible owner | incident_type, affected_outcomes, remediation_action, closure_status, responsible_owner, customer_impact_assessment | Illustrative only; not legal requirement; not certification requirement |

---

## A.3 MRO Templates

### MRO-01: Human Role to MAS Responsibility Mapping

```yaml
# MRO-01: Human Role to MAS Responsibility Mapping
object_id: "mro01-uuid-example"
object_type: "MRO-01"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "review_and_accept"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
human_role_name: "Customer Support Manager"
mas_responsibility_scope: "Review and accept agent-drafted customer responses"
acceptance_required: true
escalation_policy: "Escalate to Senior Manager if customer dispute"
review_frequency: "daily"
```

### MRO-02: Delegated Authority Boundary

```yaml
# MRO-02: Delegated Authority Boundary
object_id: "mro02-uuid-example"
object_type: "MRO-02"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "draft_only"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
authority_grant_type: "explicit_grant"
tool_action_permissions: ["read_crm", "draft_email"]
boundary_violation_policy: "alert_and_block"
reauthorization_trigger: "model_version_change"
drift_detection_enabled: true
```

### MRO-03: Agent Role is not Human Role

```yaml
# MRO-03: Agent Role is not Human Role
object_id: "mro03-uuid-example"
object_type: "MRO-03"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "agent_responsibility_surface"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
agent_role_name: "Customer Support Agent"
agent_responsibility_surface: "Draft responses; recommend actions; escalate disputes"
human_role_distinction: "Human role: Review, accept, and send responses; resolve disputes"
accountability_mapping: "Agent recommends; human accepts; human accountable"
role_confusion_risk: "low"
```

### MRO-04: Accepted Outcome Compliance

```yaml
# MRO-04: Accepted Outcome Compliance
object_id: "mro04-uuid-example"
object_type: "MRO-04"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "outcome_acceptance"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "redact_pii"
status: "accepted"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:15:00Z"
closure_reason: null

# Object-specific fields
outcome_description: "Customer refund request approved"
acceptance_status: "accepted"
accepted_by_role: "Customer Support Manager"
acceptance_timestamp: "2026-05-10T10:15:00Z"
rejection_reason: null
escalation_path: "Senior Manager if customer disputes"
```

### MRO-05: Tool-Action Liability Boundary

```yaml
# MRO-05: Tool-Action Liability Boundary
object_id: "mro05-uuid-example"
object_type: "MRO-05"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "tool_action"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "redact_pii"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
tool_name: "CRM API"
action_type: "update_customer_record"
liability_assignment: "responsibility_boundary_recorded"
tool_provider_agreement: "agreement-uuid"
authorization_record: "authorization-uuid"
action_reversibility: "reversible_with_audit_trail"
```

### MRO-06: Responsibility Transfer Across Agents

```yaml
# MRO-06: Responsibility Transfer Across Agents
object_id: "mro06-uuid-example"
object_type: "MRO-06"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "handoff"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
source_agent_id: "agent-1-uuid"
target_agent_id: "agent-2-uuid"
transfer_timestamp: "2026-05-10T10:00:00Z"
constraint_inheritance: ["no_refund_over_1000", "require_manager_approval"]
handoff_validation: "handoff_check_recorded"
responsibility_acceptance: "accepted_by_agent_2"
```

### MRO-07: Authority Drift

```yaml
# MRO-07: Authority Drift
object_id: "mro07-uuid-example"
object_type: "MRO-07"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "draft_only"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "drift_detected"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T11:00:00Z"
closure_reason: null

# Object-specific fields
authority_baseline: "draft_only"
current_authority_scope: "draft_and_send"
drift_detected: true
drift_magnitude: "high"
reauthorization_required: true
drift_alert_policy: "alert_governance_team"
```

### MRO-08: MAS Evidence Partitioning

```yaml
# MRO-08: MAS Evidence Partitioning
object_id: "mro08-uuid-example"
object_type: "MRO-08"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "evidence_partition"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "selective_disclosure"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
partition_key: "customer-uuid"
partition_type: "customer"
evidence_export_policy: "selective_disclosure_only"
selective_disclosure_enabled: true
partition_boundary: "customer_data_only"
cross_partition_access_policy: "deny"
```

### MRO-09: Cross-Project Reuse Compliance

```yaml
# MRO-09: Cross-Project Reuse Compliance
object_id: "mro09-uuid-example"
object_type: "MRO-09"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "reuse_validation"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "context_reset"
status: "reuse_review_recorded"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
source_project_id: "project-1-uuid"
target_project_id: "project-2-uuid"
reuse_type: "prompt_template"
reset_validation: "reset_check_recorded"
reauthorization_required: true
context_boundary_check: "context_boundary_check_recorded"
```

### MRO-10: Privacy / GDPR Lifecycle Mapping

```yaml
# MRO-10: Privacy / GDPR Lifecycle Mapping
object_id: "mro10-uuid-example"
object_type: "MRO-10"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "privacy_mapping"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "gdpr_lifecycle_mapping_required"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
data_flow_record: "data-flow-uuid"
retention_policy: "30_days"
data_subject_rights_workflow: "rights_workflow_mapping_required"
privacy_impact_assessment: "pia-uuid"
gdpr_article_mapping: ["Article 6 mapping required", "Article 17 mapping required"]
data_minimization_policy: "collect_only_necessary"
```

### MRO-11: Privacy-Preserving Third-Party Validation

```yaml
# MRO-11: Privacy-Preserving Third-Party Validation
object_id: "mro11-uuid-example"
object_type: "MRO-11"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "validation"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "hash_based_validation"
status: "validation_recorded"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:30:00Z"
closure_reason: null

# Object-specific fields
validation_protocol: "evidence_based_validation_pattern"
disclosure_profile: "minimal_disclosure"
redaction_profile: "redact_all_pii"
hash_manifest: "hash-manifest-uuid"
verdict_hash: "sha256-verdict-hash"
validation_provider_agreement: "agreement-uuid"
```

### MRO-12: Evidence Minimization and Selective Disclosure

```yaml
# MRO-12: Evidence Minimization and Selective Disclosure
object_id: "mro12-uuid-example"
object_type: "MRO-12"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "evidence_minimization"
risk_class: "medium"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "minimized"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
retention_policy: "30_days"
disclosure_policy: "selective_disclosure_only"
minimization_rules: ["remove_pii", "aggregate_metrics"]
selective_disclosure_log: "disclosure-log-uuid"
evidence_expiry: "2026-06-10T10:00:00Z"
disclosure_justification: "audit_request"
```

### MRO-13: Data Subject Rights vs Evidence Retention

```yaml
# MRO-13: Data Subject Rights vs Evidence Retention
object_id: "mro13-uuid-example"
object_type: "MRO-13"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "data_subject_rights"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "erasure_exception"
status: "reconciled"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
data_subject_request_type: "erasure"
evidence_retention_requirement: "legal_hold"
reconciliation_policy: "pseudonymize_instead_of_erase"
legal_hold_status: "active"
erasure_exception: "legal_obligation"
retention_justification: "ongoing_dispute"
```

### MRO-14: Third-Party Processor / Subprocessor Chain

```yaml
# MRO-14: Third-Party Processor / Subprocessor Chain
object_id: "mro14-uuid-example"
object_type: "MRO-14"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "processor_chain"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "processor_agreement"
status: "active"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
processor_name: "Cloud AI Provider"
processor_role: "model_inference"
subprocessor_chain: ["Vector DB Provider", "Monitoring Platform"]
data_processing_agreement: "dpa-uuid"
responsibility_assignment: "processor_responsibility_reference"
processor_liability: "gdpr_article_28_mapping_required"
```

### MRO-15: Vendor / Model / Runtime Substitution Conformance

```yaml
# MRO-15: Vendor / Model / Runtime Substitution Conformance
object_id: "mro15-uuid-example"
object_type: "MRO-15"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "substitution_validation"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "no_pii"
status: "conformance_check_recorded"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T10:00:00Z"
closure_reason: null

# Object-specific fields
substitution_type: "model_provider"
previous_vendor: "Vendor A"
new_vendor: "Vendor B"
conformance_validation: "conformance_check_recorded"
regression_testing: "regression_check_recorded"
evidence_integrity_check: "evidence_integrity_check_recorded"
```

### MRO-16: Incident, Dispute, and Remediation Closure

```yaml
# MRO-16: Incident, Dispute, and Remediation Closure
object_id: "mro16-uuid-example"
object_type: "MRO-16"
lifecycle_id: "lifecycle-uuid"
project_id: "project-uuid"
object_version: 1
related_human_role_id: "human-role-uuid"
related_agent_role_id: "agent-role-uuid"
authority_scope: "incident_closure"
risk_class: "high"
evidence_pointer: "evidence-chain-uuid"
privacy_treatment: "redact_pii"
status: "closed"
created_at: "2026-05-10T10:00:00Z"
updated_at: "2026-05-10T12:00:00Z"
closure_reason: "remediation_complete"

# Object-specific fields
incident_type: "prompt_bug"
affected_outcomes: ["outcome-1-uuid", "outcome-2-uuid"]
remediation_action: "prompt_fixed_and_redeployed"
closure_status: "closed"
responsible_owner: "Engineering Manager"
customer_impact_assessment: "low_impact_2_customers_notified"
```
