# WP3-R0 Appendix Architecture

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**Status:** Appendix architecture only. No templates are final, public, or source-grounded yet.

## Appendix Plan

| Appendix | Purpose | Expected tables/checklists | Source dependency | Boundary risk | Relation to chapter body |
| --- | --- | --- | --- | --- | --- |
| A. Agentic Insurability Object Checklist | Provide a compact checklist for AIO v2 review. | AIO-01 to AIO-14 checklist; object existence; evidence field; owner; boundary note. | WP1 MRO, WP2 Audit Evidence Chain, WP3-R1 insurance sources. | Treating checklist as underwriting standard or certification. | Supports Chapter 8 and Chapter 15. |
| B. Underwriting Evidence Request Template | Define evidence categories an insurer-facing review may ask for, without making them mandatory. | Subject, work unit, authority, responsibility map, dependency map, controls, scenarios, aggregation view. | Underwriting evidence sources, cyber/technology risk sources, WP1/WP2. | False underwriting standard or insurer acceptance claim. | Supports Chapter 12. |
| C. Claims Reconstruction Evidence Package | Define post-loss evidence package architecture. | Loss event record, causality trace, control failure, remediation, boundary facts, dispute package. | Claims reconstruction, causality evidence, incident response, WP2 evidence chain. | Claim approval framework or legal causation finding. | Supports Chapter 10 and Chapter 13. |
| D. AIO-to-MRO Mapping | Map AIO objects to WP1 MROs. | AIO x MRO crosswalk; source-grounding notes; boundary column. | GAIC SOURCE MASTER, WP1 MRO appendices, R8F reports. | Treating MROs as legal mandates. | Supports Chapter 6 and Chapter 8. |
| E. AIO-to-Audit-Evidence-Chain Mapping | Map AIO objects to WP2 audit evidence objects. | AIO x audit evidence chain crosswalk; AARM relation; claim evidence translation. | AIAAWP candidate, WP2 source register, WP2 AARM. | Treating audit evidence as claim approval evidence. | Supports Chapter 6, 7, 8, 13. |
| F. AIRM Readiness Matrix | Present AIRM levels and required evidence visibility. | L0-L5 matrix; what insurer can see; what enterprise can prove; missing evidence. | WP1 ALCS, WP2 AARM, R1 insurance evidence sources. | Certification, score, benchmark, insurer acceptance. | Supports Chapter 15. |
| G. Boundary and Non-Claim Language | Provide safe language and forbidden language. | Allowed/forbidden/replacement language for insurance, underwriting, claims, legal, MPLP, Validation Lab, vendor references. | SOP, WP2 boundary appendix, R1 legal/insurance source boundaries. | Boundary drift. | Supports all chapters and final QA. |

## Appendix Sequencing

Appendices must not be written as final templates until after:

1. WP3-R1 source research.
2. Source-grounded chapter outline.
3. Chapter-level source register.
4. Boundary QA.
5. Owner review.

## R0 Boundary

Appendix names and functions are frozen for architecture. Their final contents remain blocked until source research and outline approval.
