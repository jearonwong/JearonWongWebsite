# WHITEPAPER-R8E-0 Table Layout Decision Audit

**Date:** 2026-05-19

## Method

Tables are audited by semantic role, reader task, comparison importance, content density, current rendering, defect type, recommended rendering, implementation complexity, and priority. This is a plan only.

## GAIC Table Decisions

| Table / section | Semantic role | Reader task | Importance | Density | Current rendering | Current defect | Recommended rendering | Complexity | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Table T-FM-01 to T-FM-05 frontmatter tables | registry / narrative support | read exact values | Low | Low | portrait tables | none material | keep portrait table with restrained footer context | Low | P2 |
| Table T-01-01 / T-01-02 | scope and evidence registry | read exact values | Medium | Medium | portrait table | possible text density | portrait table with content-aware widths | Low | P2 |
| Table T-02-01 Governance Layer Comparison | comparison matrix | compare governance layers | High | Medium | portrait table | comparison must stay side-by-side | portrait split matrix only if proof shows compression | Medium | P1 |
| Table T-03-01 Failure Mode Comparison | comparison matrix | compare failure modes | High | Medium | portrait table | row-card would weaken comparison | portrait table with controlled widths | Medium | P1 |
| Table T-04-01 Regulatory Frameworks Baseline | lifecycle / source mapping | review methodology | Medium | High | dense portrait/possible card | equal-column bad fit risk | portrait split matrix or registry cards by framework | Medium | P1 |
| Table T-05-01 Regulatory Language to Engineering Objects | lifecycle mapping | understand mapping | High | High | dense table | possible long-cell compression | split matrix with repeated regulatory-language key | Medium | P1 |
| Table T-06-01 and MRO object cards | appendix / object catalogue | scan object definitions | Low/Medium | High | object/card style | row-card acceptable | keep cards; improve card title and continuation labels | Low | P2 |
| Chapter 7 RCCS-T/RCCS-M methodology tables | score / rubric matrix | review methodology | High | Medium | portrait tables | must preserve rubric comparability | keep portrait or split matrix; no landscape unless proof shows collapse | Medium | P1 |
| Chapter 8 ALCS methodology tables | score / rubric / lifecycle mapping | review methodology | High | Medium | portrait/card mix | potential hierarchy drift | portrait table or split rubric matrix | Medium | P1 |
| Table T-11-01 Comparative Field Positioning Matrix | comparison matrix | compare systems | High | Medium | portrait split matrix | owner-observed screenshot history: vertical OpenAI Agents SDK column is a P0 failure mode; current R8E proof shows readable split but needs formal design review | preserve portrait split matrix with content-aware widths and repeated key column; do not row-card | Medium | P0 |
| Table T-11-02 Comparison Boundary Table | narrative support / boundary | read exact boundaries | Medium | Medium | portrait table | possible dense text | portrait table with wider meaning columns | Low | P2 |
| RCCS-T / RCCS-M / ALCS Score Overview | score matrix | compare scores and evidence boundaries | High | High | landscape table | wrong hierarchy: score/range/evidence all compete; explanation detached from table; equal-ish columns weaken result hierarchy | compact scorecard matrix or landscape table with score-first cell hierarchy, content-aware widths, and intro/title on same page | High | P0/P1 |
| Dimension-Level Coverage Patterns / System x Dimension Posture Heatmap | heatmap / comparison matrix | scan posture patterns | High | High column count | landscape table | description detached; legend/context weak; landscape page has large unused area | heatmap-first landscape page with title, legend, boundary note, repeated system key, and controlled badge scale | High | P1 |
| Chapter 12 detailed system profile tables | lifecycle mapping / evidence mapping | read exact mapping by system | Medium | High | table-system-profile splits | possible vertical text risk for long names such as OpenAI Agents SDK if width collapses | content-aware portrait splits; system name column must stay readable; no row-card for posture comparison sections | High | P0 if vertical text reproduces |
| Appendices D/E expanded mappings | appendix long table | completeness | Medium | High | split tables/cards | no major defect if extractable | split tables with repeated MRO/system key; card fallback allowed for low-comparison evidence lists | Medium | P2 |
| Source/citation registers | source registry | cite source | Low | Medium/High | registry tables | completeness more important than comparison | row-card or compact registry acceptable | Low | P2 |

Mandatory GAIC decisions:

1. Any table where "OpenAI Agents SDK" breaks into vertical single-character text is P0.
2. Table T-13-06 or any similarly readable normal portrait table must not be forced into landscape unless proof shows density collapse.
3. The dimension-level heatmap/landscape table must keep description, legend, table, and boundary note together.
4. RCCS-T / RCCS-M / ALCS Score Overview needs visual hierarchy repair: score larger than range, range secondary, system name bold, evidence text secondary, content-aware widths, and likely compact scorecard or improved landscape matrix.

## AIAAWP Table Decisions

| Table / section | Semantic role | Reader task | Importance | Density | Current rendering | Current defect | Recommended rendering | Complexity | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Executive Orientation Table | narrative support | orient reader | Medium | Low | portrait table | none material | keep portrait table | Low | P2 |
| Table 1 Traditional AI Audit vs Agentic AI Auditability | comparison matrix | compare old vs agentic auditability | High | Medium | row-card/table mix | row-card may weaken direct contrast if overused | portrait comparison table or two-panel comparison | Medium | P1 |
| Table 2 Logs vs Audit Evidence Chains | evidence comparison / mapping | understand difference | Medium/High | High | row-card | acceptable for object-by-object reading, but comparison across columns is weaker | keep row-card if cards retain labels; consider compact comparison table summary before cards | Medium | P1/P2 |
| Agentic Audit Object Overview / Model Table | lifecycle object catalogue | scan objects | Medium | High | row-card | row-card acceptable | keep row-card; improve card hierarchy and continuation labels | Low | P2 |
| Table 3 MRO-to-Audit-Evidence Mapping | lifecycle mapping | understand mapping | Medium | High | likely card/long table | density risk | split matrix with repeated MRO key or row-card for appendix-style completeness | Medium | P1 |
| Table 4 Lifecycle Stage -> Audit Evidence Request | evidence request | scan evidence asks | Low/Medium | High | row-card/table | row-card acceptable | row-card / checklist cards with strong stage labels | Low | P2 |
| Table 5 Human Role / Agent / Tool Responsibility Matrix | comparison / responsibility matrix | compare responsibility allocation | High | Medium | portrait table | must preserve side-by-side comparison | keep portrait table or split matrix; no row-card default | Medium | P1 |
| Table 6 Evidence Partitioning Matrix | lifecycle mapping | compare evidence partitioning | Medium | High | table/card | possible split risk | portrait split matrix with repeated key column | Medium | P1 |
| Table 7 Privacy-Preserving Audit Evidence Controls | evidence request / control matrix | scan controls | Medium | Medium | portrait/table | no major defect observed | keep portrait table with content-aware widths | Low | P2 |
| Table 8 Third-Party Validation Boundary Table | boundary matrix | compare allowed/not allowed | Medium | Medium | portrait/card mix | boundary text can dominate | portrait table with allowed/not-allowed columns visually balanced | Medium | P1 |
| Table 9 Auditability Readiness Levels | score / rubric matrix | compare L0-L5 levels | High | Medium | portrait split rubric | acceptable normal table; no landscape needed | keep portrait split matrix; refine panel labels and footer identity | Low | P1 |
| AARM Dimension Summary | rubric / lifecycle mapping | review dimensions | High | Medium/High | portrait table | possible density but not landscape-required | portrait split matrix; avoid row-card if level comparability matters | Medium | P1 |
| Appendix evidence request and citation tables | evidence/source registry | scan completeness | Low | High | row-card or table | row-card acceptable | row-card / registry card with continuation labels | Low | P2 |

## Result

R8E-0 recommends a table-by-table remediation plan. GAIC has the highest P0/P1 design issues because score and coverage tables require both comparison and strong hierarchy. AIAAWP is structurally safer but still needs a consistent publication identity, selective table hierarchy improvements, and rubric-preservation rules.
