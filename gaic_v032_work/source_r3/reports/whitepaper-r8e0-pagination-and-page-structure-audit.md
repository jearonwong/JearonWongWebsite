# WHITEPAPER-R8E-0 Pagination and Page Structure Audit

**Date:** 2026-05-19

## Method

This audit reviews GAIC and AIAAWP as publication PDFs. It focuses on semantic page starts, heading orphans, table/figure introductions, continuation logic, and page-family consistency. It is planning-only and does not change artifacts.

## GAIC Pagination Audit

| Area | Current behavior | Severity | Proposed repair |
| --- | --- | --- | --- |
| Cover and status pages | R8/R8E cover repairs are technically acceptable, but page identity after cover is still not a full publication system. | P1 | Add intentional frontmatter page-family rules and decide which frontmatter pages omit normal footer. |
| Publication contents / TOC | TOC is controlled enough for navigation but does not yet establish a consistent PDF running identity. | P2 | Add restrained footer from first body page onward; keep TOC clear and not overdecorated. |
| Level-1 chapters | Major chapters do not consistently start as deliberate publication sections. | P1 | Start each level-1 chapter on a new page with consistent chapter opener spacing. |
| Level-2 / level-3 headings | Some headings are at risk of being separated from first paragraph/table in dense chapters. | P1 | Apply heading orphan control and keep-with-next rules for heading plus first content block. |
| Chapter 11 comparative matrix | Table T-11-01 is currently readable as portrait split matrix, with note and follow-up text on the same page. | P2 | Keep portrait split matrix unless owner wants a more editorial spread; no landscape by default. |
| Evaluation Results introduction and score overview | Explanatory text ends on portrait page, while the dense landscape table begins on the next landscape page. The semantic relationship is broken. | P0/P1 | Treat intro + title + boundary note + landscape table as one designed table module. Either move a concise intro onto the landscape page or create a portrait lead-in page with explicit "table follows" transition and repeated title. |
| Dimension-level coverage patterns | Landscape heatmap/table is readable but begins as a detached landscape object after portrait explanation. | P1 | Keep title, table note, and legend with the landscape table. Consider heatmap-first design with a compact legend above the grid. |
| Chart pages after score table | Charts communicate the scores better than raw table in some cases, but the relationship among table, chart, and boundary language needs stronger editorial sequencing. | P1 | Use a sequence: key finding, scorecard/heatmap, table appendix reference, boundary note. |
| Dense system mapping chapters | Repeated system profile tables and mappings can split without reader orientation. | P1 | Add table group labels, repeated system names, and keep table section intros with first table. |
| Appendices and source/citation sections | Long registries prioritize completeness; page breaks are acceptable if labels and headers repeat. | P2 | Use registry continuation labels and running headers; no need for landscape unless actual clipping occurs. |
| Final pages | Final page lacks a full publication closure system. | P2 | Add final-page footer identity and optional copyright/rights restatement. |

## AIAAWP Pagination Audit

| Area | Current behavior | Severity | Proposed repair |
| --- | --- | --- | --- |
| Cover and publication candidate status | Frontmatter is readable and bounded, but needs the same header/footer policy decision as GAIC. | P1 | Define frontmatter footer exceptions and consistent body footer. |
| Publication contents | Current TOC is usable. | P2 | Keep simple; avoid forcing a decorative magazine layout. |
| Level-1 chapters | Chapters are readable but should receive consistent new-page starts for formal PDF quality. | P1 | Start each numbered chapter on a new page. |
| Level-2 / level-3 headings | Long chapters with table blocks can produce heading/table separation risk. | P1 | Add keep-with-next controls for headings and table captions. |
| Tables 1-8 registry/evidence mappings | Row-card treatment is often semantically acceptable because these are evidence/object lists, not primary comparison matrices. | P2 | Preserve row-card where it improves completeness; add continuation labels for multi-page cards. |
| Table 9 Auditability Readiness Levels | Current portrait split rubric table is readable and keeps explanation nearby. | P1 | Keep portrait split matrix; refine typography and panel labels only if needed. |
| AARM dimension summary | Dense but readable in portrait; comparison across dimensions matters less than level interpretation. | P2 | Keep portrait or split matrix; no landscape unless proof shows collapse. |
| Appendices A-E | Evidence request and closure checklists can use cards or compact tables; page breaks need labels. | P2 | Use row-card or registry card with consistent card title hierarchy and repeated section context. |
| Source/citation sections | Registry behavior is acceptable, but running identity would improve final artifact professionalism. | P2 | Add footer and source-section continuation labels. |
| Final page | Needs consistent publication closure. | P2 | Add restrained footer and rights/boundary closure if owner approves. |

## Cross-Document Pagination Rules

- Major numbered chapters start on a new page.
- Table captions stay with tables.
- Introductory paragraphs stay with their table/figure where possible.
- Landscape pages must include repeated title, short explanation, legend, and boundary note if the previous portrait page carried essential context.
- Continuation pages repeat enough context for the page to stand alone.
- Header/footer identity must not appear on cover unless specifically designed.

## Result

R8E-0 identifies semantic pagination as a first-class repair area. The highest-priority issue is detached explanatory text for GAIC landscape score/coverage tables.
