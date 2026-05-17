# GAIC-R4C Guide 1 / Guide 2 Shared Object and Boundary Map

**Status:** Planning baseline
**Date:** May 17, 2026
**Boundary:** Planning-only. This map defines shared objects and ownership boundaries; it does not draft guide body text.

## Shared Objects

| Shared object | Definition | Guide 1 use | Guide 2 use | Boundary |
|---|---|---|---|---|
| MRO | Missing Regulatory Object from WP1 used as lifecycle responsibility vocabulary. | Technical object target for capture, storage, export, and replay. | Governance object for policy mapping, ownership, and review. | MROs are not statutes, certifications, or legal mandates. |
| Authority boundary | Scope, condition, risk class, and escalation boundary for delegated work. | Runtime authority checks, expiry, revocation, drift detection. | Delegation policy, authority owner, review cadence, escalation. | Does not prove legal compliance. |
| Delegated authority | Specific grant from human/business authority to agent/system action. | Tool-call gates and evidence records. | Governance approval, risk tier, confirmation rule. | Not the same as IAM permission alone. |
| Confirmation boundary | Point where human confirmation, escalation, or acceptance is required. | UI/workflow/control implementation. | Policy requirement and role ownership. | Not universal legal sufficiency. |
| Human role responsibility | Accountable human role for intent, review, acceptance, or remediation. | Role ID linkage and evidence capture. | Governance ownership and accountability workflow. | Do not allocate legal liability without legal review. |
| Agent role responsibility | Bounded responsibility surface for an agent role. | Agent role schema, allowed actions, evidence obligations. | Governance review of agent role boundaries. | Agent role is not human legal role. |
| Tool-action evidence | Evidence for consequential tool/API actions and side effects. | Tool trace, authority basis, result, reversibility, evidence pointer. | Policy-to-evidence request and owner review. | No liability determination. |
| Accepted outcome | Governance state where work is accepted, rejected, disputed, or remediated. | Outcome-state capture and transition logic. | Acceptance authority and dispute/remediation governance. | Not legal compliance proof. |
| Evidence request | Formal ask for reconstructable evidence. | System output and export requirement. | Governance request and review checklist. | Not universal legal requirement. |
| Audit evidence chain | Linked evidence from lifecycle work to role, authority, tools, outcomes, privacy, and closure. | Evidence chain generation, integrity, export, replay. | Evidence review, retention, disclosure, escalation. | Not audit opinion by itself. |
| Policy-to-evidence mapping | Mapping from policy obligation to evidence request and owner. | Implements evidence sources and system fields. | Owns mapping, review cadence, and policy updates. | Not legal advice. |
| Evidence retention | Policy and technical handling of evidence storage duration and availability. | Retention controls, partitioning, export, deletion workflows. | Retention policy, privacy/legal escalation, review scope. | No privacy legal advice. |
| Selective disclosure | Controlled disclosure of evidence without exposing unnecessary sensitive data. | Redaction, disclosure profile, evidence pointers, hashes. | Disclosure policy and reviewer boundary. | Not compliance guarantee. |
| Vendor/runtime substitution | Change of model, tool, runtime, vendor, or processor chain. | Substitution record and regression evidence. | Change governance, vendor risk, processor governance. | No vendor ranking or procurement recommendation. |
| Incident/dispute/remediation closure | Evidence-backed resolution of exceptions, disputes, failures, and remediation. | Rollback/remediation workflow records and closure state. | Compliance incident/dispute process and closure acceptance. | No legal settlement or remedy claim. |

## Guide 1 Owns

- Technical architecture.
- Runtime evidence capture.
- Work unit design.
- Tool-action trace.
- Accepted outcome system state.
- Rollback/remediation architecture.
- Vendor/runtime substitution evidence.
- AARM technical readiness.

## Guide 2 Owns

- Compliance operating model.
- Policy-to-evidence mapping.
- MRO adoption governance.
- Human role responsibility governance.
- Delegated authority governance.
- Audit/board/regulator preparation.
- Incident/dispute/remediation governance.
- Enterprise role operating model.

## Strict Split

- Guide 1 = how to build audit-ready systems.
- Guide 2 = how to govern audit-ready systems.
- Neither replaces audit, legal, compliance, privacy, procurement, or assurance professionals.
- Neither requires MPLP.
- Neither claims certification, legal compliance proof, audit opinion, assurance opinion, regulator approval, vendor ranking, procurement recommendation, external adoption, or SEO/GEO results.

## Final Status

**GUIDE 1 / GUIDE 2 SHARED OBJECT AND BOUNDARY MAP COMPLETE**
