# Phase 1D-4 Full-Content Publication Architecture

**Task ID:** GACWP-2026-P1D4-WHITE-PAPER-FORMAT-RESEARCH-AND-FULL-CONTENT-REFLOW  
**Phase:** 1D-4  
**Date:** May 10, 2026  
**Status:** COMPLETE - architecture defined for implementation

## Architecture Decision

Phase 1D-4 adopts a full-content publication model. The white paper is no longer treated as a 93-page public brief. It also is not allowed to become a 539-page mechanically stitched source bundle. The publication object is:

1. a full white paper body with Chapters 1-18,
2. publication appendices A-K retained in the white paper package,
3. an external evidence/source ledger for internal QA, inventories, claim registers, and phase reports.

The key correction is that the external evidence pack supports audit traceability; it does not replace substantive white paper content.

## Layer 1: Main White Paper Body

**Includes:**

- publication cover
- document control and boundary statement
- conflict-of-interest disclosure
- executive summary
- curated table of contents / figure list / table group note
- Chapters 1-18 with substantive argument preserved
- core figure panels F-01 through F-11 where they appear in the active source
- selected chapter tables, reflowed and split as needed
- transitions preserved through native chapter text

**Design rule:** The body must read as a continuous argument: model governance insufficiency -> agentic lifecycle responsibility gap -> MRO object model -> RCCS/ALCS method -> system mapping evidence -> validation pattern -> failure scenarios -> adoption roadmap -> conclusion.

## Layer 2: Publication Appendices

**Includes:**

- Appendix A - Machine-Readable Object Templates
- Appendix B - Scorecard Template
- Appendix C - References and Source Notes
- Appendix D - Expanded Cross-System MRO Mapping
- Appendix E - RCCS Detailed Scoring Rubrics
- Appendix F - ALCS Detailed Scoring Rubrics
- Appendix G - Expanded System-by-System Assessment
- Appendix H - Enterprise Procurement Scorecard
- Appendix I - Source Audit and Revalidation Register
- Appendix J - v0.3.2 Gap Closure Coverage Matrix
- Appendix K - Editorial Remediation Record

**Design rule:** Dense appendix tables may be split into publication-readable subtables. They remain inside the white paper package because they are part of the substantive method and governance argument.

## Layer 3: External Evidence Pack / Source Ledger

**Includes:**

- internal QA reports
- generated logs
- rendered page PNG references
- full citation registers
- claim-evidence register
- source coverage matrix
- forbidden-claim whitelist
- reconstruction reports
- historical phase reports
- previous phase generated artifacts

**Design rule:** This layer is not part of the public white paper body. It exists for audit traceability, reproducibility, and reviewer verification.

## What Must Remain in the White Paper

| Content Type | Required Treatment |
|--------------|--------------------|
| Body Chapters 1-18 | Retain full substantive text |
| MRO taxonomy | Retain in Chapter 6 and supporting appendix detail |
| RCCS/ALCS methodology | Retain full method in chapters and detailed rubrics in appendices |
| Composite scoring method | Retain with analytical/non-legal boundary language |
| System mappings | Retain in Chapter 12 and Appendix D/G, with provisional/boundary language |
| MPLP boundary | Retain in Chapter 13 with conflict disclosure and non-required/non-exclusive language |
| Validation Lab boundary | Retain in Chapter 14 as non-certifying evidence adjudication example |
| Failure scenarios | Retain in Chapter 15 and figure F-09 |
| Adoption roadmap | Retain in Chapter 17 and figure F-11 |
| Appendices A-K | Retain as publication appendices, reflowed |

## What Can Be External Evidence Pack Only

| Content Type | Reason |
|--------------|--------|
| Phase reports | Historical governance and QA traceability; not publication body |
| Reconstruction notes | Internal build history; not publication argument |
| Known issues | Governance status; not publication body |
| Inventories | Source management ledgers; cite/report externally unless summarized in Appendix C/I |
| Claim evidence register | Audit ledger; current source already summarizes claim boundaries |
| Citation rendering QA checklist | Internal publication QA |
| Forbidden-claim context whitelist | Internal risk-control QA |
| Rendered page PNGs | QA evidence |
| Generation logs | Reproducibility evidence |

## Page-Length Position

Phase 1D-4 does not impose a hard compression target. The page count should be content-driven. The acceptance target is that the resulting PDF is meaningfully shorter and more continuous than the 539-page Phase 1D-2 draft because it removes mechanical pagination and internal ledger sprawl. A result in the 180-260+ page range may be acceptable if it preserves full substantive content and passes layout continuity checks.

## Final Architecture Decision

**Decision:** Use a full-content white paper publication model with Chapters 1-18 plus Appendices A-K retained inside the white paper, and externalize only governance/QA/source ledgers.  

**Rejected:** The Phase 1D-3 reduced-public-paper model as final direction.  

**Rejected:** The Phase 1D-2 full-corpus mechanical layout model as final direction.
