# GAIC-R4C Guide 1 Table / Checklist Inventory

**Status:** Planning baseline
**Date:** May 17, 2026
**Boundary:** Planning-only. This inventory identifies expected Guide 1 tables/checklists; it does not draft Guide 1 body text.

## Required Tables and Checklists

| No. | Table / checklist | Purpose | Expected columns | Source dependencies | Placement | WP2 / Guide 2 relation | Boundary risk |
|---|---|---|---|---|---|---|---|
| 1 | Ordinary Agent Architecture vs Audit-Ready Agent Architecture | Show technical gap between execution architecture and audit-ready architecture. | Capability area; ordinary architecture; audit-ready architecture; evidence produced; related AARM dimension. | WP2 logs/evidence chain; AARM dimensions. | Body | WP2 defines evidence object; Guide 2 governs operating model. | Do not dismiss existing architecture or claim standard status. |
| 2 | Lifecycle Work Unit Design Checklist | Define addressable work unit requirements. | Field/check; purpose; minimum evidence; owner; related MRO; implementation note. | MRO common fields; AARM audit object clarity. | Body or appendix | WP2 Agentic Audit Object Model; Guide 2 review scope. | Not a mandatory schema. |
| 3 | Human Role x Agent Role x Responsibility Matrix | Map accountability and agent responsibility surfaces. | Lifecycle task; human role; agent role; responsibility; evidence pointer; escalation path. | MRO-01, MRO-03, MRO-06. | Body | Guide 2 owns governance accountability. | Do not assign legal liability. |
| 4 | Authority Boundary Implementation Checklist | Translate delegated authority into runtime controls. | Boundary element; runtime control; evidence record; failure mode; escalation. | MRO-02, MRO-07; AARM authority traceability. | Body | Guide 2 governs delegation policy. | Does not prove legal compliance. |
| 5 | Tool-Action Evidence Capture Matrix | Define evidence for consequential tool actions. | Tool action; initiator; authority basis; side effect; evidence; rollback path; owner. | MRO-05, MRO-08. | Body | Guide 2 governs policy and owner review. | No liability determination. |
| 6 | Accepted Outcome State Model | Define outcome states and transitions. | State; entry condition; evidence required; responsible role; exit condition; dispute path. | MRO-04, MRO-16. | Body | Guide 2 defines acceptance authority. | Acceptance is not compliance proof. |
| 7 | Exception and Remediation Architecture Checklist | Define rollback, remediation, and closure requirements. | Event type; detection; owner; affected outcome; remediation record; closure evidence. | MRO-16, MRO-07; AARM remediation closure. | Body or appendix | Guide 2 governs incident/dispute workflow. | No legal remedy or settlement claim. |
| 8 | Vendor / Runtime / Model Substitution Evidence Matrix | Define evidence needed when components change. | Component changed; evidence at risk; regression test; substitution record; reviewer; residual risk. | MRO-15, MRO-14, MRO-09. | Body | Guide 2 governs vendor/runtime change control. | No vendor ranking or procurement advice. |
| 9 | Audit-Ready Observability Checklist | Distinguish observability from audit evidence. | Signal; ordinary observability; added audit linkage; evidence export; related AARM level. | WP2 logs vs evidence; AARM L1-L4. | Body | Guide 2 defines evidence requests. | Do not say observability is useless. |
| 10 | AARM Technical Readiness Checklist | Translate AARM into implementation checkpoints. | AARM dimension; architecture question; minimum evidence; implementation owner; gap action. | R4B AARM baseline. | Appendix | Guide 2 uses governance readiness counterpart. | Not certification or assurance opinion. |

## Appendix Candidates

- Work Unit Field Reference.
- Authority Boundary Control Reference.
- Evidence Export / Replay Checklist.
- AARM Technical Readiness Matrix.
- Boundary Language for CIO/CTO Use.

## Final Status

**GUIDE 1 TABLE / CHECKLIST INVENTORY COMPLETE**
