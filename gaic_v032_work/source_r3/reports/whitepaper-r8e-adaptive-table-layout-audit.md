# WHITEPAPER-R8E Adaptive Table Layout Audit

**Date:** 2026-05-19

## Decision Rule

Tables were audited by semantic profile, comparison importance, density, column count, long-header risk, long-cell risk, and portrait readability. Landscape is used only where it materially improves dense comparison.

## GAIC P0/P1 Table Decisions

| Section / table | Profile | Importance | Density | Columns | Long-header risk | Long-cell risk | R8D rendering | R8E target | QA | Reason |
| --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| T-11-01 Comparative Field Positioning Matrix | Comparative Matrix | High | Medium | 3 + 4 split | Medium | Medium | Portrait split matrix | Portrait split matrix | P0 | Portrait split already preserves comparison with repeated `System / Category`; landscape is not needed. |
| RCCS-T / RCCS-M / ALCS Provisional Analytical Score Overview | Comparative / Score Matrix | High | High | 7 | Medium | High | Dense portrait table | Dedicated landscape A4 table | P0 | Landscape materially improves side-by-side scanning across systems and score profiles. |
| Dimension-Level Coverage Patterns | Comparative Matrix | High | High by column count | 15 | Low | Low | Dense portrait table | Dedicated landscape A4 table | P0 | Many compact comparison columns need horizontal scanability; landscape is appropriate. |
| Chapter 7 RCCS-T/RCCS-M methodology tables | Score / Rubric Matrix | High | Low/Medium | 3-4 | Medium | Medium | Portrait table | Keep portrait table | P1 | Tables remain readable in normal portrait flow. |
| Chapter 8 ALCS summary and mapping tables | Score / Rubric / Lifecycle Mapping | Medium/High | Medium | 4-5 | Medium | Medium | Portrait or row-card depending width | Portrait table where readable; row-card only for descriptive long mappings | P1 | No blanket landscape; readable portrait tables stay in flow. |
| Chapter 10 enterprise control / procurement / monitoring tables | Lifecycle Mapping / Evidence Request | Medium | Medium/High | 4-5 | Medium | Medium/High | Mixed portrait / card | Portrait where readable; row-card where descriptive density is high | P1 | Comparison is useful but not always primary; card fallback is allowed only for low-comparison descriptive density. |
| Appendix D expanded cross-system MRO mapping | Appendix Long / Lifecycle Mapping | Medium | Medium | 4 split groups | Medium | Low | Portrait split tables | Portrait split tables | P1 | Source already splits columns by system groups; repeated MRO context preserves readability. |
| Source register / citation queues | Registry / Inventory | Low | Medium/High | 3-5 | Medium | Medium | Row-card where unsafe | Row-card acceptable | P2 | Completeness and extractability matter more than side-by-side comparison. |

## AIAAWP P0/P1 Table Decisions

| Section / table | Profile | Importance | Density | Columns | Long-header risk | Long-cell risk | R8D rendering | R8E target | QA | Reason |
| --- | --- | --- | --- | ---: | --- | --- | --- | --- | --- | --- |
| Table 9 Auditability Readiness Levels | Score / Rubric Matrix | High | Medium | 4 + 3 split | Medium | Medium | Portrait split rubric matrix | Portrait split rubric matrix | P0 | L0-L5 comparison is preserved without landscape. |
| Agentic Audit Object Overview | Lifecycle Mapping / Narrative Support | Medium | Medium | 5 | Medium | Low | Portrait table | Keep portrait table | P1 | Portrait is readable and more natural in flow. |
| Professional Use Matrix | Comparative / Narrative Support | Medium | Medium | 5 | Medium | Low | Portrait table | Keep portrait table | P1 | Table is readable in portrait; landscape would be unnecessary. |
| Executive Orientation / Scope tables | Narrative Support | Low/Medium | Low/Medium | 4 | Medium | Medium | Portrait table | Keep portrait table | P2 | Small/medium tables remain portrait. |
| Appendix citation map | Registry / Inventory | Low | Medium | 5 | Medium | Low | Portrait table | Keep portrait table | P2 | Readable in portrait; row-card not necessary. |
| MRO/evidence row-card sets | Evidence Request / Appendix Long | Low/Medium | High | Card source | N/A | High | Row-card | Row-card acceptable | P2 | Object-by-object evidence completeness is primary. |

## Gate Result

PASS. R8E uses no universal fallback. GAIC has two selected landscape pages; AIAAWP has none because its representative tables remain readable in portrait.
