# Appendix C — MRO-to-Audit-Evidence Mapping

**Appendix status:** R2 INTERNAL DRAFT
**Purpose:** Preserve the full mapping from GAIC MROs to WP2 audit evidence objects.
**Intended reader:** Audit/assurance method teams, compliance engineering, internal audit, AI governance, Guide 1/2 authors.

## Source Grounding

GAIC source truth defines MRO-01 through MRO-16. Audit evidence and control language is grounded in AUD-01, AUD-05, and AI-01. This appendix is GAIC-derived plus WP2 author synthesis.

## Boundary

MROs are proposed GAIC governance objects. They are not legal mandates, audit standards, certification criteria, procurement criteria, or legal compliance proof.

## Full Mapping

| MRO | Evidence object | Audit question | Evidence request | AARM dimension | Guide 1 relation | Guide 2 relation | Boundary |
|---|---|---|---|---|---|---|---|
| MRO-01 Human Role to MAS Responsibility Mapping | Human-role responsibility map | Who owned intent, authorization, review, acceptance, exception, and remediation? | Role map with lifecycle stage and evidence duty | Human / agent responsibility mapping | Capture roles in workflows and evidence metadata | Define role accountability routines | No legal liability assignment |
| MRO-02 Delegated Authority Boundary | Delegated authority record | Was the agent authorized for the action under scope and condition? | Authority grant, expiry, risk class, escalation, reauthorization | Authority traceability | Implement authority checks and evidence records | Govern delegation policy and approval | Not IAM-only and not legal proof |
| MRO-03 Agent Role is not Human Role | Agent role boundary object | Was the agent role separated from human accountability? | Agent role, constraints, owner, escalation | Human / agent responsibility mapping | Define agent role registry and capability boundaries | Govern agent role ownership | Do not anthropomorphize |
| MRO-04 Accepted Outcome Compliance | Accepted outcome record | Was the output accepted, rejected, disputed, or remediated? | Acceptance criteria, reviewer, outcome state, evidence link | Accepted outcome evidence | Capture outcome state transitions | Govern review and acceptance | Not compliance proof |
| MRO-05 Tool-Action Liability Boundary | Tool-action evidence object | What tool created consequence, under what authority, and with what reversibility? | Tool, target, action, affected data, rollback, owner | Agent/tool partitioning | Instrument tool-action evidence | Define tool-action approval and review | No legal liability conclusion |
| MRO-06 Responsibility Transfer Across Agents | Responsibility transfer record | Did responsibility transfer or remain with source role? | Source/target agent, transferred/retained scope, inherited constraints | Human / agent responsibility mapping | Capture handoff records | Govern transfer and escalation | Not legal transfer |
| MRO-07 Authority Drift | Authority drift exception record | Did observed action exceed delegated authority? | Baseline, observed action, trigger, escalation, closure | Authority traceability; exception traceability | Detect and record drift | Govern drift escalation | Not automatic legal breach |
| MRO-08 MAS Evidence Partitioning | Partitioned evidence chain | Can evidence be separated and linked for review? | Partition keys, links, hashes, evidence pointers, access rules | Evidence sufficiency; agent/tool partitioning | Build partitioned evidence architecture | Govern evidence access | No blanket retention |
| MRO-09 Cross-Project Reuse Compliance | Reuse context validation record | Was reused agent/workflow context reset and revalidated? | Source/target context, reset validation, privacy review, authorization refresh | Agent/tool partitioning | Implement reuse validation checks | Govern reuse policy | No legal reuse clearance |
| MRO-10 Privacy / GDPR Lifecycle Mapping | Privacy lifecycle evidence object | How does lifecycle work map to data processing and retention? | Data flow, purpose, retention rule, rights workflow, minimization | Privacy and selective disclosure | Capture privacy metadata | Govern privacy review | Not legal advice |
| MRO-11 Privacy-Preserving Third-Party Validation | Validation disclosure profile and verdict record | Can third-party review happen without raw over-disclosure? | Ruleset, redaction/disclosure profile, evidence pointer, verdict hash | Third-party review boundary; privacy | Support export/replay packages | Govern third-party review | Not certification |
| MRO-12 Evidence Minimization and Selective Disclosure | Evidence minimization and disclosure object | Is disclosed evidence limited to review purpose? | Minimization rule, disclosure justification, redaction profile, access log | Privacy and selective disclosure | Build redaction/selective disclosure | Govern disclosure approvals | Not privacy compliance proof |
| MRO-13 Data Subject Rights vs Evidence Retention | Rights-retention reconciliation record | How are rights requests reconciled with evidence retention? | Request, retention basis, hold status, redaction/deletion action | Privacy and selective disclosure | Support retention/rights workflows | Govern legal/privacy review | Requires counsel |
| MRO-14 Third-Party Processor / Subprocessor Chain | Processor/subprocessor chain evidence | Which third parties processed or affected lifecycle work? | Processor role, subprocessor chain, data agreement pointer, responsibility owner | Agent/tool partitioning | Capture vendor/processor evidence | Govern processor chain | No vendor ranking |
| MRO-15 Vendor / Model / Runtime Substitution Conformance | Substitution conformance record | Did evidence continuity survive component change? | Prior/new component, integrity check, reauthorization, revalidation | Agent/tool partitioning; evidence sufficiency | Implement substitution evidence controls | Govern change review | Not conformance certification |
| MRO-16 Incident, Dispute, and Remediation Closure | Incident/remediation closure record | Did exception or dispute close with evidence? | Event, affected outcome, owner, corrective action, recheck, closure | Exception traceability; remediation closure | Build closure workflow evidence | Govern remediation closure | Not legal closure |

## Guide Relationship

Guide 1 should treat this appendix as an implementation-neutral architecture checklist. Guide 2 should treat it as a policy-to-evidence and compliance operating model checklist.

## Placement Recommendation

Include full mapping in the WP2 appendix. Consider a shorter summary table in Chapter 6.

## R3 QA Notes

- Validate every MRO name against `sections/06-missing-regulatory-objects.md`.
- Ensure MRO-03, MRO-04, and MRO-05 remain aligned with current GAIC numbering.
