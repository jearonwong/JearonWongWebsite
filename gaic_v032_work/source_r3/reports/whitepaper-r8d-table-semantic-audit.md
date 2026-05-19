# WHITEPAPER-R8D Table Semantic Audit

**Date:** 2026-05-19

## Result

Major GAIC and AIAAWP table patterns were classified by semantic purpose before patching the PDF renderer. R8C made many wide tables readable by converting them into row cards, but that fallback was too broad for high-comparison matrices.

## GAIC Tables

| Table / section | Semantic purpose | Comparison importance | R8C PDF rendering | R8D target rendering | QA priority | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| Table T-11-01: Comparative Field Positioning Matrix | Comparative Matrix | High | First column group plus row-card continuation | Split matrix with repeated `System / Category` key column | P0 | The table's value is side-by-side comparison of systems, RCCS-T, RCCS-M, ALCS, and lifecycle gaps. |
| Chapter 7 RCCS-T / RCCS-M methodology tables | Score / Rubric Matrix | High | Native compact tables where safe | Preserve matrix, compact typography, controlled widths | P1 | Scores and rubric dimensions need level-to-level comparability. |
| Chapter 8 ALCS scoring/rubric tables | Score / Rubric Matrix | High | Native compact tables or PDF-safe transformed tables | Preserve matrix or split matrix | P1 | ALCS posture and scoring logic must remain scanable. |
| Chapter 12 system mapping tables | Lifecycle Mapping Table | Medium to high | Mixed table and row-card treatment | Preserve matrix where systems are compared; row-card only for descriptive mappings | P1 | Some mappings are comparison surfaces, others are object descriptions. |
| Chapter 13 MPLP boundary and non-claim tables | Lifecycle Mapping Table / Narrative Support Table | Medium | Row-card acceptable for descriptive long mappings | Row-card or compact key-value where comparison is not primary | P2 | The primary need is readable boundary mapping, not vendor-style comparison. |
| Appendix E RCCS-T/RCCS-M detailed rubrics | Score / Rubric Matrix | High | Native or compact tables | Preserve matrix or split matrix | P1 | Rubric comparability must not collapse into isolated cards. |
| Appendix F ALCS detailed scoring rubrics | Score / Rubric Matrix | High | Native or compact tables | Preserve matrix or split matrix | P1 | Level comparison is the core reading mode. |
| Source/register/citation tables | Registry / Inventory Table | Low | Row-card where wide | Row-card acceptable | P2 | Inventory completeness and extractability matter more than side-by-side comparison. |

Mandatory classification: GAIC Table T-11-01 is `Comparative Matrix`, high comparison importance, and P0 visual QA.

## AIAAWP Tables

| Table / section | Semantic purpose | Comparison importance | R8C PDF rendering | R8D target rendering | QA priority | Reason |
| --- | --- | --- | --- | --- | --- | --- |
| Table 9: Auditability Readiness Levels | Score / Rubric Matrix | High | HTML row-card source carried into PDF | Split rubric matrix with repeated `Level` key | P0 | L0 through L5 must remain comparable across definition, traits, evidence, and boundary fields. |
| MRO-to-audit-evidence mapping | Lifecycle Mapping Table | Medium | Row-card or dense table pattern | Row-card acceptable if each MRO is self-contained | P1 | The mapping is object-by-object and can remain readable without a single wide matrix. |
| Logs vs evidence chain table | Comparative Matrix / Narrative Support Table | Medium | Native table where safe | Preserve table if comparative columns remain readable | P1 | The contrast between logs and evidence chains matters. |
| AARM dimension summary | Score / Rubric Matrix | Medium to high | Row-card/structured blocks | Matrix where level comparison is central; row-card acceptable for descriptive dimension inventory | P1 | Readiness dimension comparisons must remain clear. |
| Appendix C expanded MRO mapping | Appendix Long Table / Lifecycle Mapping | Medium | Row-card acceptable | Row-card or compact registry format | P2 | Completeness and extractability are primary. |
| Evidence request/checklist tables | Evidence Request Table | Low to medium | Row-card acceptable | Row-card or checklist table | P2 | These are action/checklist surfaces, not primary comparison matrices. |

## Gate Outcome

PASS for audit completion. The renderer must now preserve matrix form for comparative and score/rubric profiles, while keeping row-card layout for registry, evidence request, appendix long, and low-comparison descriptive tables.
