# Phase 1D-4 White Paper Format Research

**Task ID:** GACWP-2026-P1D4-WHITE-PAPER-FORMAT-RESEARCH-AND-FULL-CONTENT-REFLOW  
**Phase:** 1D-4  
**Date:** May 10, 2026  
**Status:** COMPLETE - research rules established before implementation

## Research Scope

Phase 1D-4 starts from a correction: Phase 1D-3 reduced the public white paper to a 93-page brief and moved full substantive appendices into a separate evidence pack. That solved page count, but it did not satisfy the current publication requirement. The required object is a full-content white paper: complete argument, complete methodology, necessary mappings, rubrics, figures, and publication appendices, with only governance ledgers and internal QA material externalized.

This research reviewed authoritative writing and document-design guidance, prioritizing university writing centers, technical-writing references, and professional report design guidance. The research does not create new claims for the GAIC paper; it creates layout and assembly constraints for the publication pipeline.

## Sources Reviewed

| Source | Relevant Guidance | GAIC Implication |
|--------|-------------------|------------------|
| Purdue OWL, "White Paper: Purpose and Audience" | A white paper is authoritative and informative; it argues a position or proposes a solution to a problem for an external audience. | GAIC must remain a complete problem/solution argument, not a mechanical source dump and not an executive-only brief. |
| George Mason University Writing Center, "White Papers" | White papers follow a problem-solution structure, use objective tone, rely on authoritative sources, and often include executive summary, background, problem, solution, and conclusion. | GAIC's argument spine must remain visible from model-governance insufficiency through lifecycle governance, MROs, RCCS/ALCS, validation, failure scenarios, and adoption roadmap. |
| UMGC Effective Writing Center, "Executive Summary" | Executive summaries must be concise but comprehensive, may be read independently by decision makers, and summarize the major sections of the full report. | GAIC's executive summary can guide the reader, but cannot replace full chapters or appendices. |
| Texas A&M University Writing Center, "Executive Summaries" | Executive summaries are decision-maker oriented and should stress results/conclusions in clear, specific, concise language. | GAIC should keep a strong executive summary while preserving the full technical reasoning in the body. |
| Purdue OWL, "Tables, Figures, and Equations" | Tables and figures should be introduced in body text before display and followed by explanation or connection to the broader point. | GAIC figures/tables must be embedded in narrative flow, not isolated on standalone pages. |
| Utah State University Engineering Writing Center, "Tables and Figures" | Every figure/table must be referred to in text; references should explain the relationship or trend; placement should be near first reference. | GAIC figure panels and wide-table splits need nearby lead-in and interpretation text. |
| BCcampus Technical Writing Essentials, "Figures and Tables" | Figures/tables should be close to first mention and discussed in the text; do not leave visuals to speak for themselves. | GAIC must preserve the figure/table -> interpretation chain. |
| Adobe Express, "Creating Professional-looking White Papers and Reports" | Effective reports use consistent formatting, clear hierarchy, line/paragraph spacing, data visualization, story structure, and purposeful whitespace. | GAIC should use JearonWong VI tokens consistently and reduce avoidable blank space without cramming unreadable tables. |
| OpenALG, "Contents of Technical Reports" | Large or distracting supporting content can go into appendices; appendices should be separately labeled. | GAIC can use publication appendices for dense rubrics/mappings, but substantive white paper content should remain in the white paper package. |

## Answers to Required Research Questions

### 1. Standard Structure of a Policy/Technical White Paper

The standard structure is not a fixed page count. It is a problem-solution argument with front matter, executive summary, background or context, problem statement, criteria/method, solution or analysis, implications/recommendations, conclusion, and supporting appendices. For GAIC, the publication structure should be:

1. Cover and document control
2. Boundary and conflict disclosure
3. Executive summary
4. Chapters 1-18 preserving the full argument
5. Publication appendices A-K, reflowed for readability
6. External evidence/source ledgers for governance-only material

### 2. Executive Summary Relationship to Full Report

The executive summary is a stand-alone miniature of the report, not a replacement. It should summarize purpose, problem, method, findings, and recommendations/boundaries. GAIC may improve the executive summary, but Phase 1D-4 must not repeat the Phase 1D-3 error of replacing full white paper content with a reduced brief.

### 3. Figure and Table Embedding

Technical-writing guidance is consistent: figures and tables should be introduced before display, located near the relevant text, captioned clearly, and followed by explanation or interpretation. GAIC should implement a flow rule:

**lead-in paragraph -> table/figure -> interpretation paragraph or boundary note**

This rule treats pages with isolated diagrams or wide-table islands as layout defects.

### 4. Long Appendix Handling

Appendices are appropriate for material that would interrupt the main flow but is still necessary for the publication. For GAIC, full rubrics, detailed mappings, system assessments, scorecard templates, and remediation records are substantive white paper material and may remain in publication appendices. Internal QA reports, source registers, generation logs, rendered PNG references, and phase-history reports are external evidence/source ledger material.

### 5. Acceptable Page Length

The reviewed guidance does not define a universal maximum. Complex technical white papers can be long when the content requires it. Phase 1D-4 therefore rejects both extremes:

- 93 pages is too reduced because it loses substantive white paper content.
- 500+ pages is too inefficient if caused by forced page breaks, landscape islands, duplicate ledgers, or unhandled wide tables.

For GAIC, a 180-260+ page full-content draft can be acceptable if the pages carry real content and the layout is continuous.

### 6. Readability vs. Stitched Report

A readable white paper has a visible argument spine, consistent hierarchy, deliberate spacing, integrated visuals, and tables that support reading tasks. A stitched report has abrupt section changes, repeated hard breaks, table-only pages, figure-only pages, and duplicated governance ledgers. Phase 1D-4 must optimize continuity, not deletion.

### 7. Layout Anti-Patterns

The following are blockers or warnings for GAIC:

- forcing every H1, table, or figure onto a new page
- creating a landscape section before and after every wide table
- using 5.8pt ultra-wide tables as a default strategy
- leaving figure placeholders visible
- moving substantive appendices out of the white paper as a substitute for layout work
- making the executive summary carry the entire argument
- appending internal QA/reconstruction reports to the publication body

## Formatting Rules to Implement

1. Preserve all substantive body chapters 1-18.
2. Preserve appendices A-K as publication appendices, reflowed and split where needed.
3. Keep internal reports, inventories, claim registers, and generation logs external to the publication body.
4. Do not force each H1 to a new page.
5. Do not force each table or figure to a standalone page.
6. Split wide tables semantically before using landscape.
7. Preserve all table rows and cells across split subtables.
8. Use figure panels for F-01 through F-11; no visible figure-placeholder text.
9. Keep Appendix G provisional, qualitative, non-ranking, and non-score-based.
10. Preserve citation markers and evidence-level labels while avoiding raw internal paths in publication prose.

## Explicit Correction of Phase 1D-3 Interpretation

Phase 1D-3 correctly identified the 539-page full-corpus artifact as unacceptable, but it incorrectly treated compression as content reduction. Phase 1D-4 corrects that interpretation. The new objective is full-content continuous reflow: preserve substantive content while removing avoidable blank space, mechanical pagination, table/figure isolation, and internal governance material from the public-facing white paper package.

## Source URLs

- Purdue OWL, White Paper Purpose and Audience: https://owl.purdue.edu/owl/subject_specific_writing/professional_technical_writing/white_papers/index.html
- George Mason University Writing Center, White Papers: https://writingcenter.gmu.edu/writing-resources/different-genres/white-papers
- UMGC Effective Writing Center, Executive Summary: https://www.umgc.edu/current-students/learning-resources/writing-center/writing-resources/professional-and-presentation/executive-summary
- Texas A&M University Writing Center, Executive Summaries: https://writingcenter.tamu.edu/guides/resources/executive-summaries.html
- Purdue OWL, Tables, Figures, and Equations: https://owl.purdue.edu/owl/research_and_citation/ieee_style/tables_figures_and_equations.html
- Utah State University Engineering Writing Center, Tables and Figures: https://engineering.usu.edu/students/ewc/writing-resources/tables-figures
- BCcampus Technical Writing Essentials, Figures and Tables: https://pressbooks.bccampus.ca/technicalwriting2ed/chapter/figurestables/
- Adobe Express, Professional Reports and White Papers: https://www.adobe.com/uk/express/learn/blog/professional-reports-and-white-papers
- OpenALG, Contents of Technical Reports: https://alg.manifoldapp.org/read/open-tc-2e-chapter-17-contents-of-technical-reports
