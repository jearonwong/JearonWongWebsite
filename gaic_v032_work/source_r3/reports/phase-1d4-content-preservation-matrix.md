# Phase 1D-4 Content Preservation Matrix

**Task ID:** GACWP-2026-P1D4-WHITE-PAPER-FORMAT-RESEARCH-AND-FULL-CONTENT-REFLOW  
**Phase:** 1D-4  
**Date:** May 10, 2026  
**Status:** COMPLETE - no substantive chapter/appendix content designated for removal

## Preservation Rule

All substantive white paper content must remain in the white paper body or publication appendices. Only governance ledgers, QA reports, inventories, generation logs, and rendered QA artifacts may be external evidence/source material only.

| Source File | Semantic Role | White Paper Treatment | Evidence Pack Treatment | Content Loss Risk | Action |
|-------------|---------------|-----------------------|--------------------------|-------------------|--------|
| sections/00-front-matter.md | Publication front matter, boundary, executive summary | Reflowed in white paper; phase-status residue suppressed in generated publication where possible | Source ledger may retain original status wording | Low | Reflowed/split in white paper |
| sections/01-scope-methodology.md | Chapter 1 methodology and scope | Full content retained | Optional source trace | Low | Include full |
| sections/02-missing-layer.md | Chapter 2 core missing-layer argument | Full content retained; figure marker rendered as panel | Optional source trace | Low | Include full |
| sections/03-agentic-ai-breaks-model-compliance.md | Chapter 3 model governance gap | Full content retained | Optional source trace | Low | Include full |
| sections/04-regulatory-standards-baseline.md | Chapter 4 legal/standards baseline | Full content retained | Optional source trace | Low | Include full |
| sections/05-regulatory-language-to-engineering-objects.md | Chapter 5 translation method | Full content retained | Optional source trace | Low | Include full |
| sections/06-missing-regulatory-objects.md | Chapter 6 MRO taxonomy | Full content retained; wide object tables split if needed | Optional source trace | Low | Include full |
| sections/07-rccs-regulatory-compliance-coverage.md | Chapter 7 RCCS method | Full content retained; tables split if needed | Optional source trace | Low | Include full |
| sections/08-alcs-agentic-lifecycle-conformance.md | Chapter 8 ALCS method | Full content retained; tables split if needed | Optional source trace | Low | Include full |
| sections/09-composite-scoring-method.md | Chapter 9 composite method | Full content retained; analytical boundary retained | Optional source trace | Low | Include full |
| sections/10-enterprise-control-crosswalk.md | Chapter 10 enterprise controls | Full content retained; figures rendered; wide tables split if needed | Optional source trace | Low | Include full |
| sections/11-comparative-field.md | Chapter 11 comparative positioning | Full content retained; heatmap figure rendered as qualitative panel | Optional source trace | Low | Include full |
| sections/12-detailed-system-mappings.md | Chapter 12 system mappings | Full content retained; many mapping tables split into readable subtables | Optional source trace | Medium from table splitting | Reflowed/split in white paper |
| sections/13-mplp-deep-mapping.md | Chapter 13 MPLP mapping and non-claim discipline | Full content retained; MPLP boundary retained | Optional source trace | Low | Include full |
| sections/14-evidence-validation-placeholder.md | Chapter 14 evidence validation pattern | Full content retained; F-08 rendered as panel | Optional source trace | Low | Include full |
| sections/15-failure-scenarios-placeholder.md | Chapter 15 failure scenarios | Full content retained; F-09 rendered as panel | Optional source trace | Low | Include full |
| sections/16-companion-paper-boundary.md | Chapter 16 companion paper boundaries | Full content retained; F-10 rendered as panel | Optional source trace | Low | Include full |
| sections/17-adoption-roadmap-placeholder.md | Chapter 17 adoption roadmap | Full content retained; F-11 rendered as panel | Optional source trace | Low | Include full |
| sections/18-conclusion-placeholder.md | Chapter 18 conclusion | Full content retained | Optional source trace | Low | Include full |
| appendices/appendix-a-placeholder.md | Appendix A MRO templates | Full publication appendix retained; code blocks styled compactly | Optional source trace | Low | Include full |
| appendices/appendix-b-placeholder.md | Appendix B scorecard templates | Full publication appendix retained; tables split if needed | Optional source trace | Low | Include full |
| appendices/appendix-c-placeholder.md | Appendix C references/source notes | Full publication appendix retained | External evidence pack may include inventories | Low | Include full |
| appendices/appendix-d-placeholder.md | Appendix D expanded MRO mapping | Full publication appendix retained; T-D-01 split by semantic column groups | Optional source trace | Medium from table splitting | Reflowed/split in white paper |
| appendices/appendix-e-placeholder.md | Appendix E RCCS rubrics | Full publication appendix retained; rubric tables split/readability styled | Optional source trace | Medium from table splitting | Reflowed/split in white paper |
| appendices/appendix-f-placeholder.md | Appendix F ALCS rubrics | Full publication appendix retained; rubric tables split/readability styled | Optional source trace | Medium from table splitting | Reflowed/split in white paper |
| appendices/appendix-g-placeholder.md | Appendix G provisional system assessment | Full publication appendix retained; no scores/rankings; tables split/readability styled | Optional source trace | Medium from no-score proofing | Reflowed/split in white paper |
| appendices/appendix-h-placeholder.md | Appendix H procurement scorecard | Full publication appendix retained; no vendor recommendation | Optional source trace | Low | Include full |
| appendices/appendix-i-placeholder.md | Appendix I source audit register | Full publication appendix retained because it is an appendix, but detailed inventories remain external | External evidence pack retains inventories | Low | Include full |
| appendices/appendix-j-placeholder.md | Appendix J gap closure matrix | Full publication appendix retained | Optional source trace | Low | Include full |
| appendices/appendix-k-placeholder.md | Appendix K remediation record | Full publication appendix retained | Optional source trace | Low | Include full |
| inventories/table-inventory.md | Source-management inventory | Not in main white paper; summarized through reports | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/figure-inventory.md | Source-management inventory | Not in main white paper; figures rendered from active markers | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/citation-inventory.md | Citation/source ledger | Not in main white paper body except Appendix C/I summaries | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/claim-evidence-register.md | Claim-level evidence ledger | Not in main white paper body except summarized boundary language | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/page-level-citation-map.md | Citation pinning preflight | Not in main white paper body | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/citation-rendering-qa-checklist.md | QA checklist | Not in main white paper body | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/source-coverage-matrix.md | Source coverage ledger | Not in main white paper body except source note summaries | Full external ledger | None to white paper argument | External evidence pack only |
| inventories/forbidden-claim-context-whitelist.md | Forbidden phrase QA ledger | Not in main white paper body | Full external ledger | None to white paper argument | External evidence pack only |
| reports/*.md | Phase, QA, governance reports | Not in publication body | Full external ledger | None to white paper argument | Source-only governance / evidence pack |

## Result

No substantive chapter or appendix content is silently dropped. Phase 1D-4 generation must report all split tables and confirm row/cell preservation across split subtables.
