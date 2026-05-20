# WP3-R6B Table Semantic Layout QA

Scope: table and matrix QA for internal HTML/PDF candidate artifacts only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

R6B table rule: high-comparison tables must remain matrix-like. Row-card or registry-card treatment is allowed only where comparison is not the reader task.

## Table Inventory

| # | Table | HTML | PDF | Purpose | Comparison | Rendering | Boundary nearby | Action |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Insurance Basics in Plain English | Found | Found | Plain-English insurance setup | High | Matrix/table with mobile scroll | Yes | Keep |
| 2 | Insurance Question / Traditional Answer / Agentic AI Problem / Required Mapping | Found | Found | Insured subject distinction | High | Matrix/table | Yes | Keep |
| 3 | Layer / What It Is / Insurance Function / Agentic AI Gap | Found | Found | Insurable object distinction | High | Matrix/table | Yes | Keep |
| 4 | Human Role x Agent Role x Work Unit x Evidence x Loss Event x Legal Subject | Found | Found | Responsibility mapping | High | Matrix/table | Yes | Keep |
| 5 | Current AI Insurance Focus / What It May Cover / Why Not Enough for Agentic AI | Found | Found | Market-signal framing | High | Matrix/table | Yes | Keep |
| 6 | Insurance Question / Current AI Stack Often Provides / Missing Lifecycle Object | Found | Found | Broad insurability gap | High | Matrix/table | Yes | Keep |
| 7 | WP1/WP2 Object / WP3 Insurance Translation | Found | Found | Series translation | High | Matrix/table | Yes | Keep |
| 8 | AIO / Object / Underwriting Use / Claims Use / Dispute Use | Found | Found | AIO model catalog | High | Matrix/table | Yes | Keep |
| 9 | Action / Tool Permission / Business Authority / Confirmation Required / Coverage Risk | Found | Found | Coverage boundary and authority distinction | High | Matrix/table | Yes | Keep |
| 10 | Loss Reconstruction Element / Evidence Needed / Source / Boundary Risk | Found | Found | Claim reconstruction structure | High | Matrix/table | Yes | Keep |
| 11 | Dependency Layer / Risk / Evidence Needed / Aggregation Concern | Found | Found | Dependency and aggregation evidence | High | Matrix/table | Yes | Keep |
| 12 | Underwriting Evidence Category / Why It Matters / AIO / Boundary Note | Found | Found | Evidence categories | High | Matrix/table | Yes | Keep |
| 13 | Claims Evidence Category / Why It Matters / AIO / Boundary Note | Found | Found | Claims review evidence categories | High | Matrix/table | Yes | Keep |
| 14 | Aggregation Driver / Example / Evidence Needed / Reinsurance Concern | Found | Found | Aggregation framing | High | Matrix/table | Yes | Keep |
| 15 | AIRM L0-L5 matrix | Found | Found | Readiness vocabulary | High | Rubric matrix | Yes | Keep |
| 16 | Appendix A AIO checklist | Found | Found | Checklist template | Medium | Matrix/checklist table | Yes | Keep |
| 17 | Appendix D AIO-to-MRO mapping | Found | Found | WP1 mapping | High | Matrix/table | Yes | Keep |
| 18 | Appendix E AIO-to-Audit-Evidence mapping | Found | Found | WP2 mapping | High | Matrix/table | Yes | Keep |
| 19 | Appendix F AIRM matrix | Found | Found | Long-form readiness comparison | High | R6B repaired to rubric matrix | Yes | Patched |
| 20 | Appendix G boundary language table/list | Found | Found | Boundary language guardrail | Medium | List/table content | Yes | Keep |

## Repairs

R6 rendered Appendix F as registry cards. R6B treated that as a semantic layout defect because Appendix F is a high-comparison AIRM matrix. R6B repaired the HTML section to a rubric matrix, regenerated the PDF, updated manifest/checksums, and added `pdf-appendix-f-airm-matrix-p39.png` as proof.

## Gate Checks

| Check | Result |
| --- | --- |
| High-comparison table rendered only as low-comparison row cards | PASS after Appendix F repair |
| Vertical single-character table text | PASS |
| Numeric/label hierarchy reversed | PASS |
| Boundary note detached from sensitive table | PASS |
| Table intro split awkwardly from table | PASS for representative pages |
| Table clipping | PASS |
| Mobile table behavior | PASS, table-internal horizontal scroll without body-level overflow |
| PDF table behavior | PASS, representative table pages readable |

Table semantic layout QA result: PASS.
