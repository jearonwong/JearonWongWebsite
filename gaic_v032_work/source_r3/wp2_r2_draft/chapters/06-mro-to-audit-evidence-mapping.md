# 6. MRO-to-Audit-Evidence Mapping

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Translate GAIC MROs into audit evidence objects and evidence requests.
**Reader question:** How does each MRO become evidence?

## Key Claims

- GAIC MROs can be mapped into reviewable audit evidence objects.
- The mapping turns lifecycle governance objects into evidence request categories.
- MROs remain GAIC-derived governance objects; they are not legal mandates, audit standards, or certification criteria.

## Source Grounding Note

MRO names and meanings use GAIC source truth. Audit evidence language uses AUD-01. AI audit/control context uses AUD-05 and AI-01.

## Author Synthesis Note

The MRO-to-audit-evidence mapping is WP2 author synthesis derived from GAIC objects and externally sourced audit/control terminology.

## Draft Prose

WP1 introduced the sixteen Missing Regulatory Objects for agentic and multi-agent system governance. WP2 reads those objects through an auditability lens. Each MRO asks a governance question. WP2 adds the evidence question: what object would a reviewer need to inspect to reconstruct the lifecycle work?

This translation is not a claim that MROs are law. It is not a claim that the presence of an MRO proves compliance. It is not a claim that absence proves non-compliance. MROs are GAIC-derived lifecycle responsibility objects. Their value for WP2 is that they give auditability a vocabulary for the work that logs alone do not capture.

The mapping also prevents a common failure in agentic governance: treating "evidence" as a flat export. Agentic systems do not need a pile of logs; they need evidence structured around review questions. Who owned the action? What authority applied? Which agent role acted? What tool created consequence? Was the outcome accepted? What exception occurred? What data was exposed? What changed after vendor, model, or runtime substitution? How did remediation close?

The sixteen MROs can be grouped into six auditability clusters:

1. Responsibility and role mapping: MRO-01, MRO-03, MRO-06.
2. Authority and action boundaries: MRO-02, MRO-05, MRO-07.
3. Outcome and closure: MRO-04, MRO-16.
4. Evidence partitioning and reuse: MRO-08, MRO-09.
5. Privacy and disclosure: MRO-10, MRO-11, MRO-12, MRO-13.
6. Vendor, processor, and substitution chains: MRO-14, MRO-15.

This cluster view helps readers see that auditability is not one control. It is the ability to reconstruct a lifecycle. A work unit can fail auditability at many points: no role map, no authority record, no accepted outcome state, no evidence partition, no privacy treatment, no substitution record, or no remediation closure.

## Table 3: MRO-to-Audit-Evidence Mapping

| MRO | Audit evidence object | Sample evidence request | Source support | Guide 1 relation | Guide 2 relation | Boundary |
|---|---|---|---|---|---|---|
| MRO-01 Human Role to MAS Responsibility Mapping | Human-role responsibility map | Show accountable role for intent, authorization, review, acceptance, exception, and remediation | AUD-06, AUD-07, AI-01 | Role/evidence architecture | Responsibility governance | No legal liability assignment |
| MRO-02 Delegated Authority Boundary | Delegated authority record | Show scope, condition, expiry, escalation, and reauthorization evidence | AI-01, AI-06, AI-08, AUD-06 | Authority control implementation | Delegation policy-to-evidence | Not equal to IAM permission |
| MRO-03 Agent Role is not Human Role | Agent role boundary object | Show agent role, capability limits, constraints, owner, and escalation boundary | AI-08, EVID-01, AI-01 | Agent role design | Accountability model | Do not anthropomorphize agents |
| MRO-04 Accepted Outcome Compliance | Accepted outcome record | Show acceptance criteria, reviewer, acceptance/rejection/dispute state, and evidence link | AUD-01, AUD-02, AUD-04 | Outcome state capture | Review/acceptance governance | Acceptance is not compliance proof |
| MRO-05 Tool-Action Liability Boundary | Tool-action evidence object | Show tool identity, action, affected system/data, authority basis, reversibility, rollback path, owner | EVID-02, EVID-03, EVID-04, AUD-05 | Tool evidence capture | Tool-action approval policy | No legal liability conclusion |
| MRO-06 Responsibility Transfer Across Agents | Responsibility transfer record | Show source/target agent, transferred scope, retained scope, inherited constraints, acceptance/rejection | EVID-01, AI-08, AUD-06 | Handoff record design | Transfer governance | Not legal transfer |
| MRO-07 Authority Drift | Authority drift exception record | Show baseline authority, observed action, trigger, escalation, stop/downgrade/reauthorization | AI-01, AI-02, EVID-04, AUD-04 | Drift monitoring | Exception governance | Not every drift is a legal breach |
| MRO-08 MAS Evidence Partitioning | Partitioned evidence chain | Show partition keys, evidence pointers, link identifiers, integrity hashes, access rules | EVID-01, EVID-02, EVID-03, AUD-01 | Evidence partitioning architecture | Evidence access governance | No blanket retention/disclosure |
| MRO-09 Cross-Project Reuse Compliance | Reuse context validation record | Show source context, target context, reset validation, privacy review, authorization refresh | AI-01, AI-05, PRIV-02, AUD-04 | Reuse validation workflow | Reuse governance | No legal reuse clearance |
| MRO-10 Privacy / GDPR Lifecycle Mapping | Privacy lifecycle evidence object | Show data flow, processing purpose, retention rule, rights workflow, minimization treatment | PRIV-01 to PRIV-05, AI-09 | Privacy-aware evidence capture | Privacy governance | No legal advice or GDPR proof |
| MRO-11 Privacy-Preserving Third-Party Validation | Validation disclosure profile and verdict record | Show ruleset identity, redaction profile, evidence pointer, verdict hash, reviewer boundary | PRIV-02, PRIV-03, BOUND-01, BOUND-02, AUD-03 | Evidence export/replay | Third-party review governance | No certification claim |
| MRO-12 Evidence Minimization and Selective Disclosure | Evidence minimization and disclosure object | Show minimization rule, disclosure justification, redaction profile, access log, expiry | PRIV-01 to PRIV-05 | Selective disclosure design | Disclosure policy | No privacy compliance proof |
| MRO-13 Data Subject Rights vs Evidence Retention | Rights-retention reconciliation record | Show request type, retention basis, hold status, deletion/redaction action, owner | PRIV-01, PRIV-02, PRIV-05, AI-09 | Rights-aware retention | Legal/privacy governance | Requires legal review |
| MRO-14 Third-Party Processor / Subprocessor Chain | Processor/subprocessor chain evidence | Show processor role, subprocessor chain, data agreement pointer, responsibility owner | AI-09, PRIV-01, PRIV-02, AUD-04 | Vendor evidence partitioning | Processor governance | No vendor ranking |
| MRO-15 Vendor / Model / Runtime Substitution Conformance | Substitution conformance record | Show prior/new component, control evidence, evidence-integrity check, reauthorization, revalidation | AI-01, AI-04, AI-05, AUD-04, BOUND-02 | Runtime/model change evidence | Change governance | No conformance certification |
| MRO-16 Incident, Dispute, and Remediation Closure | Incident/remediation closure record | Show event, affected outcome, owner, corrective action, recheck, closure acceptance, reopen condition | EVID-04, AI-02, AUD-04, AUD-05, AUD-06 | Remediation workflow evidence | Closure governance | No legal closure or regulator acceptance |

**Table note:** GAIC-derived and author-synthesis mapping grounded in audit/control/governance source language. It is not a legal checklist, audit procedure, certification criterion, or procurement tool.

## Cross-Links

- Appendix C contains the expanded mapping.
- Chapter 13 maps the same objects into AARM dimensions.
- Guide 1 will later translate this table into implementation planning.
- Guide 2 will later translate it into compliance operating-model planning.

## Boundary Note

This chapter does not invent new MRO numbering. It uses current GAIC source truth for MRO-01 through MRO-16.

## R3 QA Notes

- Re-check MRO names against GAIC source before publication candidate generation.
- Consider whether a shorter body table and full appendix table would improve readability.
