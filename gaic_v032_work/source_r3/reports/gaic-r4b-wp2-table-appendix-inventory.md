# GAIC-R4B WP2 Table and Appendix Inventory

**Status:** Architecture baseline
**Date:** May 16, 2026
**Boundary:** Planning-only. This file identifies likely WP2 tables and appendices; it does not draft WP2 body text, create artifacts, or complete source research.

## Required Core Tables

| No. | Table | Purpose | Expected columns | Source dependencies | Placement | Boundary risk |
|---|---|---|---|---|---|---|
| 1 | Traditional AI Audit vs Agentic AI Auditability | Show why model/output/control review is insufficient for lifecycle work. | Traditional audit focus; agentic audit focus; missing lifecycle object; evidence needed; boundary note. | Chapter 2 missing layer; Chapter 5 object bridge; Chapter 7 RCCS-T/RCCS-M. | Body, Chapter 2. | Must not dismiss existing model governance or professional audit methods. |
| 2 | Logs vs Audit Evidence Chains | Separate logs as ingredients from evidence chains as reconstructable proof structure. | Evidence item; what logs show; what logs do not prove; required linkage; related MRO. | Chapter 7 record-keeping; Chapter 14 evidence validation; MRO-08, MRO-12, MRO-16. | Body, Chapter 4. | Must not say logs are useless or automatically unreliable. |
| 3 | MRO-to-Audit-Evidence Mapping | Convert WP1 MROs into audit evidence objects and requests. | MRO ID; lifecycle concern; audit evidence object; sample evidence request; Guide 1 relation; Guide 2 relation; boundary. | Chapter 6 MROs; Appendix A; Appendix F. | Body plus Appendix C. | Must not treat MROs as legal mandates, certification criteria, or MPLP-only schemas. |
| 4 | Lifecycle Stage -> Audit Evidence Request | Define what evidence is needed at each lifecycle phase. | Stage; core question; evidence requested; human role; agent/tool record; accepted outcome / closure state; privacy treatment. | Chapter 5; Chapter 6; Chapter 15 failure scenarios. | Body, Chapter 7 or 8. | Must remain a request architecture, not a universal legal requirement. |
| 5 | Human Role / Agent / Tool Responsibility Matrix | Show how responsibility is split across human roles, agents, and tools. | Lifecycle task; human role; agent role; tool/system; authority basis; evidence pointer; escalation path. | MRO-01, MRO-02, MRO-03, MRO-05, MRO-06. | Body, Chapter 8 or 9. | Must not assign legal liability without legal review. |
| 6 | Evidence Partitioning Matrix | Define partition logic across agents, tools, vendors, projects, privacy boundaries, and jurisdictions. | Partition dimension; why it matters; evidence boundary; access/disclosure rule; failure if missing; related MRO. | MRO-08, MRO-09, MRO-10, MRO-14, MRO-15; ALCS-08 to ALCS-15. | Body, Chapter 9. | Must not imply universal disclosure or retention duties. |
| 7 | Privacy-Preserving Audit Evidence Controls | Map privacy controls to audit evidence needs. | Control; purpose; evidence artifact; selective disclosure mechanism; privacy risk reduced; residual review need. | MRO-10, MRO-11, MRO-12, MRO-13; Chapter 14. | Body, Chapter 10. | Must not provide legal advice or claim GDPR compliance proof. |
| 8 | Third-Party Validation Boundary Table | Preserve non-certifying third-party review boundaries. | Review activity; can support; cannot prove; evidence artifact; boundary language. | Chapter 14 evidence-based validation; Chapter 16 companion boundary; R4A boundary QA. | Body, Chapter 12. | Must not imply certification, assurance opinion, regulator approval, or Validation Lab exclusivity. |
| 9 | Auditability Readiness Levels | Introduce AARM L0-L5 in a non-standard readiness frame. | Level; definition; observable traits; minimum evidence; what it does not prove. | Chapter 8 ALCS maturity model; Chapter 17 adoption roadmap; R4B AARM baseline. | Body, Chapter 13. | Must not become audit standard, maturity certification, or assurance result. |
| 10 | Exception / Dispute / Remediation Evidence Checklist | Define closure evidence for exception and dispute handling. | Event type; evidence required; owner; escalation path; remediation record; closure evidence; boundary note. | MRO-04, MRO-07, MRO-16; Chapter 7 contestability; Chapter 15 scenarios. | Body plus Appendix E. | Must not claim legal remedy, settlement, or legal closure. |

## Required Appendices

| Appendix | Title | Purpose | Expected content | Source dependencies | Relation to Guide 1 / Guide 2 |
|---|---|---|---|---|---|
| A | Agentic Audit Evidence Request List | Provide a structured evidence request catalog for agentic systems. | Role map requests; authority grant requests; tool-action evidence; accepted outcome evidence; exception/remediation evidence; privacy/selective disclosure evidence. | Appendix H evidence request template; Chapter 14 evidence pack pattern; MRO-01 to MRO-16. | Guide 1 turns requests into system outputs; Guide 2 turns requests into policy/control review procedures. |
| B | Agentic System Walkthrough Template | Provide a repeatable walkthrough format for a single lifecycle run. | Intent; scope; delegated authority; agents/tools; human review; evidence pointers; acceptance; exception; closure; privacy treatment. | Chapter 5; Chapter 6; Chapter 15. | Guide 1 uses it for architecture review; Guide 2 uses it for governance committee and audit prep. |
| C | MRO-to-Audit-Evidence Mapping | Preserve the full mapping from WP1 MROs to WP2 audit evidence objects. | Sixteen MRO mappings; sample audit questions; sample evidence artifacts; AARM dimensions; boundary notes. | Chapter 6; Appendix A; Appendix F. | Shared reference appendix for both guides. |
| D | Auditability Readiness Matrix | Provide the AARM level/dimension crosswalk. | AARM dimensions; L0-L5 level descriptors; minimum evidence; related MRO; what each level does not prove. | Chapter 8 ALCS; Chapter 17; R4B AARM baseline. | Guide 1 uses technical remediation roadmap; Guide 2 uses governance maturity roadmap. |
| E | Exception / Remediation Closure Checklist | Provide closure evidence requirements for exceptions, disputes, and remediation. | Exception type; evidence required; owner; impact; corrective action; closure acceptance; selective disclosure; reopen rule. | MRO-04, MRO-07, MRO-16; Chapter 15. | Guide 1 covers rollback/technical closure; Guide 2 covers incident and compliance governance closure. |
| F | Boundary Language | Provide safe language for auditability and assurance discussion. | Allowed phrases; forbidden phrases; safe replacements; non-standard/non-certifying/non-legal boundary statements. | R4A boundary discipline; Chapter 14; Chapter 16. | Both guides reuse boundary language to avoid overclaiming. |

## Table Sequencing Logic

1. First prove the object shift.
2. Then prove logs are insufficient.
3. Then map MROs into evidence objects.
4. Then show lifecycle walkthrough and evidence partitioning.
5. Then address privacy and third-party validation boundaries.
6. Then introduce AARM and closure evidence.

## Final Status

**WP2 TABLE AND APPENDIX INVENTORY COMPLETE**
