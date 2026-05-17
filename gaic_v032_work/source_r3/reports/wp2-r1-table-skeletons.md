# WP2-R1 Table Skeletons

**Task ID:** WP2-R1-SOURCE-GROUNDED-OUTLINE-AND-TABLE-SKELETON  
**Date:** May 17, 2026  
**Status:** Draft-ready table skeletons  
**Boundary:** Skeleton rows are structural examples only, not final prose, audit criteria, certification criteria, legal requirements, scores, rankings, or procurement guidance.

## Table 1: Traditional AI Audit vs Agentic AI Auditability

| Field | Skeleton |
|---|---|
| Purpose | Show why model/output/control review is necessary but insufficient for agentic lifecycle work. |
| Location | Main text, Chapter 2. |
| Expected columns | Traditional AI audit focus; agentic auditability focus; missing lifecycle object; evidence needed; source grounding; boundary note. |
| Source IDs | BF-01, BF-04, BF-05, AI-01, AI-02, AI-08, AUD-05, AUD-06. |
| GAIC dependencies | Chapter 2; Chapter 5; RCCS-T/RCCS-M distinction. |
| Classification | Mixed: source-grounded + GAIC-derived + author synthesis. |
| Boundary risk | Must not dismiss model governance or professional audit methods. |
| R2 instructions | Use as early orientation table; keep non-combative. |

Sample rows:

| Traditional AI audit focus | Agentic auditability focus | Missing lifecycle object | Evidence needed | Boundary note |
|---|---|---|---|---|
| Model documentation | Lifecycle work reconstruction | Agentic Audit Object | Lifecycle work unit ID; evidence chain | Not a new audit standard |
| Output review | Accepted outcome review | Accepted outcome state | Acceptance/rejection/dispute record | Acceptance is not legal proof |
| Monitoring | Authority and exception monitoring | Authority drift record | Baseline authority; drift event; escalation | Do not call every drift a legal breach |

## Table 2: Logs vs Audit Evidence Chains

| Field | Skeleton |
|---|---|
| Purpose | Separate logs/traces as ingredients from responsibility-linked evidence chains. |
| Location | Main text, Chapter 4. |
| Expected columns | Evidence item; what logs show; what logs do not prove; required linkage; related MRO; source IDs. |
| Source IDs | AUD-01, AUD-02, EVID-01, EVID-02, EVID-03, EVID-04, PRIV-01 to PRIV-05. |
| GAIC dependencies | MRO-08, MRO-12, MRO-16; Chapter 14. |
| Classification | Mixed. |
| Boundary risk | Must not say logs are useless. |
| R2 instructions | Pair observability sources with audit evidence sources. |

Sample rows:

| Evidence item | What logs show | What logs do not prove | Required linkage | Related MRO |
|---|---|---|---|---|
| Tool-call log | Action time and service/tool | Business authority and reversibility | Authority record; tool-action evidence | MRO-02, MRO-05 |
| Trace span | Execution path | Human responsibility or accepted outcome | Role map; acceptance record | MRO-01, MRO-04 |
| Incident log | Error or event | Remediation closure | Corrective action; recheck; closure owner | MRO-16 |

## Table 3: MRO-to-Audit-Evidence Mapping

| Field | Skeleton |
|---|---|
| Purpose | Convert GAIC MROs into audit evidence objects and requests. |
| Location | Both summary in Chapter 6 and full appendix C. |
| Expected columns | MRO ID; lifecycle concern; audit evidence object; sample evidence request; source support; Guide 1 relation; Guide 2 relation; boundary. |
| Source IDs | GAIC Chapter 6, Appendix A, AUD-01, AUD-05, AI-01. |
| GAIC dependencies | All MROs. |
| Classification | GAIC-derived + author synthesis, with source-grounded audit/control language. |
| Boundary risk | Must not treat MROs as legal mandates. |
| R2 instructions | Include all 16 in appendix; body can use cluster summary. |

Sample rows:

| MRO | Audit evidence object | Sample evidence request | Source support | Boundary |
|---|---|---|---|---|
| MRO-01 | Human-role responsibility map | Show accountable role for intent, review, acceptance, remediation | AUD-06, AUD-07 | No legal liability assignment |
| MRO-02 | Delegated authority record | Show scope, condition, expiry, escalation | AI-01, AI-06, AI-08 | Not equal to IAM permission |
| MRO-08 | Partitioned evidence chain | Show partition keys, links, and integrity records | EVID-01, EVID-02, AUD-01 | Not blanket retention |

## Table 4: Lifecycle Stage -> Audit Evidence Request

| Field | Skeleton |
|---|---|
| Purpose | Define stage-by-stage evidence requests for agentic work. |
| Location | Main text, Chapter 7 or 8; expanded appendix A/B. |
| Expected columns | Lifecycle stage; core review question; evidence requested; human role; agent/tool record; accepted outcome/closure; privacy treatment. |
| Source IDs | AUD-01, AUD-02, AUD-04, AUD-05, AUD-06, EVID-01. |
| GAIC dependencies | Chapter 5; Chapter 6; Chapter 14; Chapter 15. |
| Classification | Mixed. |
| Boundary risk | Evidence request architecture, not legal/audit requirement. |
| R2 instructions | Keep samples generic and non-vendor-specific. |

Sample rows:

| Stage | Core review question | Evidence requested | Human role | Agent/tool record | Outcome/closure |
|---|---|---|---|---|---|
| Intent | What work was initiated? | Work unit ID; purpose; scope | Request owner | Initial agent plan | Not yet accepted |
| Delegation | Was action authorized? | Authority grant; confirmation boundary | Delegating role | Permission/tool scope | Escalation path |
| Closure | Was issue resolved? | Remediation record; recheck | Closure owner | Corrective action trace | Closure status |

## Table 5: Human Role / Agent / Tool Responsibility Matrix

| Field | Skeleton |
|---|---|
| Purpose | Show responsibility split across human roles, agent roles, and tools. |
| Location | Main text, Chapter 8 or 9. |
| Expected columns | Lifecycle task; human role; agent role; tool/system; authority basis; evidence pointer; escalation path. |
| Source IDs | AUD-06, AUD-07, AI-01, AI-08, EVID-01. |
| GAIC dependencies | MRO-01, MRO-02, MRO-03, MRO-05, MRO-06. |
| Classification | GAIC-derived + author synthesis. |
| Boundary risk | Do not assign legal liability. |
| R2 instructions | Use responsibility as governance/auditability language. |

Sample rows:

| Lifecycle task | Human role | Agent role | Tool/system | Authority basis | Evidence pointer |
|---|---|---|---|---|---|
| Approve external action | Business owner | Execution agent | CRM/API tool | Delegated authority record | Authority evidence pointer |
| Review output | Reviewer role | Drafting agent | Document system | Review policy | Accepted outcome pointer |
| Handle exception | Incident owner | Monitoring agent | Ticketing system | Escalation rule | Remediation closure pointer |

## Table 6: Evidence Partitioning Matrix

| Field | Skeleton |
|---|---|
| Purpose | Define partition logic across agents, tools, vendors, projects, privacy boundaries, and jurisdictions. |
| Location | Main text, Chapter 9. |
| Expected columns | Partition dimension; why it matters; evidence boundary; access/disclosure rule; failure if missing; related MRO. |
| Source IDs | EVID-01, EVID-02, EVID-03, PRIV-01, PRIV-02, PRIV-03, AI-09. |
| GAIC dependencies | MRO-08, MRO-09, MRO-10, MRO-14, MRO-15. |
| Classification | Mixed. |
| Boundary risk | Do not imply universal disclosure or retention. |
| R2 instructions | Mark vendor/project examples as illustrative only. |

Sample rows:

| Partition dimension | Why it matters | Evidence boundary | Access/disclosure rule | Failure if missing |
|---|---|---|---|---|
| Agent | Separates responsibility surfaces | Agent ID and work unit | Scoped reviewer access | Flattened responsibility |
| Tool | Tracks external consequence | Tool-action evidence | Tool-specific disclosure | Unclear side effects |
| Privacy class | Limits overexposure | Redaction/disclosure profile | Minimization rule | Privacy leakage |

## Table 7: Privacy-Preserving Audit Evidence Controls

| Field | Skeleton |
|---|---|
| Purpose | Map privacy controls to audit evidence needs. |
| Location | Main text, Chapter 10. |
| Expected columns | Control; purpose; evidence artifact; selective disclosure mechanism; privacy risk reduced; residual review need. |
| Source IDs | PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05, AI-09. |
| GAIC dependencies | MRO-10, MRO-11, MRO-12, MRO-13; Chapter 14. |
| Classification | Source-grounded + GAIC-derived. |
| Boundary risk | Not legal advice or GDPR proof. |
| R2 instructions | Use jurisdiction-neutral phrasing; cite privacy sources carefully. |

Sample rows:

| Control | Purpose | Evidence artifact | Disclosure mechanism | Residual review need |
|---|---|---|---|---|
| Evidence minimization | Reduce overcollection | Minimization rule | Scoped evidence request | Legal/privacy review |
| Redaction profile | Remove sensitive fields | Redaction log | Redacted evidence pointer | Sufficiency check |
| Retention rule | Limit storage duration | Retention schedule | Expiry/hold indicator | Context-specific review |

## Table 8: Third-Party Validation Boundary Table

| Field | Skeleton |
|---|---|
| Purpose | Preserve non-certifying third-party review boundaries. |
| Location | Main text, Chapter 12. |
| Expected columns | Review activity; can support; cannot prove; evidence artifact; boundary language; source IDs. |
| Source IDs | AUD-03, BOUND-01, BOUND-02, BOUND-03, GAIC Chapter 14. |
| GAIC dependencies | MRO-11, MRO-12, MRO-16; Validation Lab boundary. |
| Classification | Source-grounded boundary + GAIC-derived example. |
| Boundary risk | Certification or assurance overclaim. |
| R2 instructions | Repeat Validation Lab non-certifying status. |

Sample rows:

| Review activity | Can support | Cannot prove | Evidence artifact | Boundary language |
|---|---|---|---|---|
| Evidence adjudication | Ruleset conformance review | Legal compliance | Verdict/hash record | Non-certifying |
| Evidence replay | Reconstructability check | Audit opinion | Replay package | Reviewer-scoped |
| Third-party review | Independent review input | Regulator approval | Scope statement | Not conformity assessment unless separately authorized |

## Table 9: Auditability Readiness Levels

| Field | Skeleton |
|---|---|
| Purpose | Introduce AARM L0-L5 in a non-standard readiness frame. |
| Location | Main text, Chapter 13; appendix D. |
| Expected columns | Level; definition; observable traits; minimum evidence; what it does not prove; source/synthesis note. |
| Source IDs | AUD-01, AUD-05, AUD-06, AI-01, R4B AARM. |
| GAIC dependencies | ALCS context; Chapter 14; Chapter 17. |
| Classification | Author synthesis grounded by sources. |
| Boundary risk | Maturity certification or assurance-result overclaim. |
| R2 instructions | Use exact boundary column for every level. |

Sample rows:

| Level | Definition | Observable traits | Minimum evidence | Does not prove |
|---|---|---|---|---|
| L0 Unobservable | Lifecycle work cannot be reconstructed | Outputs only; narrative memory | None or ad hoc notes | Absence of risk |
| L1 Log-Visible | Activity logs exist without responsibility chain | Logs/traces | Raw logs | Authority or acceptance |
| L4 Auditability-Ready | Evidence chains reconstruct defined scope | Role/authority/outcome/closure evidence | Complete evidence chain for scope | Audit opinion or legal compliance |

## Table 10: Exception / Dispute / Remediation Evidence Checklist

| Field | Skeleton |
|---|---|
| Purpose | Define closure evidence for exceptions and disputes. |
| Location | Main text, Chapter 11; appendix E. |
| Expected columns | Event type; evidence required; owner; escalation path; remediation record; closure evidence; boundary note. |
| Source IDs | EVID-04, AI-02, AUD-04, AUD-05, AUD-06. |
| GAIC dependencies | MRO-04, MRO-07, MRO-16; Chapter 15. |
| Classification | Mixed. |
| Boundary risk | Legal remedy or settlement claim. |
| R2 instructions | Keep closure as governance/evidence state. |

Sample rows:

| Event type | Evidence required | Owner | Remediation record | Closure evidence | Boundary |
|---|---|---|---|---|---|
| Authority exception | Baseline authority; observed action | Escalation owner | Reauthorization or stop action | Closure acceptance | Not legal determination |
| Outcome dispute | Outcome state; dispute reason | Review owner | Correction/review path | Accepted/remediated state | Not settlement proof |
| Privacy event | Data category; disclosure record | Privacy owner | Redaction/deletion/hold action | Review note | Not legal advice |

## Final Status

**WP2-R1 TABLE SKELETONS COMPLETE**
