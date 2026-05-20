# WP3-R1 WP1 / WP2 to WP3 Mapping

**Task ID:** WP3-R1-INSURABILITY-SOURCE-RESEARCH
**Mode:** Source research only
**Boundary:** This mapping is internal framework translation. It does not claim that GAIC, AIAAWP, MRO, ALCS, AARM, AIO, or AIRM is an insurance standard, legal requirement, certification, insurer-accepted model, coverage guarantee, or claims approval method.

## Mapping Table

| WP1 / WP2 object | Source file / source ID | WP3 interpretation | Chapter | AIO/AIRM relation | Boundary note |
| --- | --- | --- | --- | --- | --- |
| WP1 MRO | INT-01, INT-02 | MRO becomes a prerequisite object vocabulary for defining the agentic risk object and responsibility path. | 1, 2, 3, 6, 8 | AIO-01 through AIO-14; AIRM L0-L5 | MRO is internal analytical framework, not law or policy form. |
| WP1 ALCS | INT-01, INT-02 | ALCS becomes source truth for lifecycle conformance visibility relevant to claim reconstructability. | 5, 6, 10, 12, 15 | AIRM L2-L5 | ALCS does not prove coverage, pricing, or insurer acceptance. |
| WP1 enterprise failure scenarios | INT-01 | Failure scenarios become insurance failure modes: unidentified subject, unclear authority, dependency cascade, inadequate evidence, and remediation uncertainty. | 0, 5, 10, 11, 14 | AIO-06, AIO-07, AIO-11, AIO-13 | Hypothetical scenarios are analytical examples only. |
| WP1 Human Role / MAS responsibility mapping | INT-01, INT-03 | Becomes WP3 Human-Agent Responsibility Map for linking human roles, agent/MAS roles, authority, acceptance, escalation, and remediation. | 3, 8, 10, 13 | AIO-03, AIO-05, AIO-10 | Responsibility mapping is not legal liability assignment. |
| WP1 authority / confirmation boundary | INT-01, INT-05 | Becomes coverage/exclusion boundary inquiry: whether action was inside authority and review scope. | 2, 9, 13 | AIO-04, AIO-05, AIO-12 | Do not say outside authority automatically means no coverage. |
| WP1 trace / evidence chain | INT-01, INT-05 | Becomes Claim Evidence Chain linking subject, work unit, authority, action, loss, causality, remediation, and boundary review. | 7, 10, 13 | AIO-06, AIO-07, AIO-09, AIO-14 | Logs and traces are ingredients, not claim evidence by themselves. |
| WP1 accepted outcome | INT-01, INT-05 | Becomes claimable business outcome / reliance event: what the enterprise accepted, relied on, or delivered. | 2, 3, 10, 13 | AIO-02, AIO-06, AIO-09 | Accepted outcome is not proof of loss, liability, or coverage. |
| WP1 remediation closure | INT-01, INT-05 | Becomes remediation and recovery record: containment, correction, recheck, responsible owner, closure evidence. | 10, 13, 15 | AIO-08, AIO-10, AIO-14 | Closure evidence is not settlement or legal closure. |
| WP1 vendor / processor chain | INT-01, INT-03 | Becomes dependency risk: vendors, models, tools, processors, runtimes, substitutions, and cross-system involvement. | 11, 12, 14 | AIO-11, AIO-13 | Do not rank vendors or infer product defects. |
| WP1 cross-project reuse | INT-01, INT-03 | Becomes aggregation and accumulation risk across repeated work units, templates, models, tools, and vendors. | 11, 14, 15 | AIO-13; AIRM L4-L5 | Author synthesis grounded by cyber aggregation sources. |
| WP2 Audit Evidence Chain | INT-04, INT-05 | Becomes WP3 Claim Evidence Chain. It must support post-loss reconstruction and dispute review. | 7, 10, 13 | AIO-09, AIO-14 | Claim evidence chain does not guarantee claim approval. |
| WP2 AARM | INT-04 | Becomes AIRM, shifting from auditability readiness to claim reviewability and risk-transfer evidence readiness. | 15 | AIRM L0-L5 | AIRM is readiness vocabulary only. |
| WP2 boundary language | INT-04, INT-05 | Becomes non-claim / non-coverage boundary language: evidence readiness does not equal coverage, certification, or legal conclusion. | All | All AIO/AIRM | Carry boundary strip into every chapter with insurance-sensitive claims. |
| WP2 auditability object logic | INT-04, INT-05 | Becomes agentic insurability object logic: object clarity, evidence sufficiency, authority traceability, partitioning, and remediation closure. | 6, 8, 12, 13 | AIO-02, AIO-05, AIO-09, AIO-14 | Internal analytical logic, not adopted insurance method. |

## Translation Rules for R2

1. When WP3 uses WP1/WP2 objects, label them as internal framework dependencies.
2. When WP3 connects those objects to insurance, cite external insurance sources for the insurance concept and internal sources for the lifecycle object.
3. Do not let WP1/WP2 source truth substitute for external insurance-market evidence.
4. Do not claim GAIC or AIAAWP makes a system insurable, auditable, compliant, certified, or accepted by insurers.

## High-Value Bridges

- MRO -> AIO
- ALCS -> claim reconstructability
- Audit Evidence Chain -> Claim Evidence Chain
- AARM -> AIRM
- Human role / MAS role map -> Human-Agent Responsibility Map
- Authority / confirmation boundary -> coverage / exclusion boundary question
- Accepted outcome -> claimable business outcome / reliance event
- Remediation closure -> recovery and closure record
- Vendor/runtime substitution -> dependency risk
- Cross-project reuse -> aggregation and accumulation risk
