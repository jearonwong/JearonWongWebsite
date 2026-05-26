# Appendix Table and Layout Risk Plan

## Purpose

This plan records table inventory and layout risk before future artifact work. It does not implement HTML, PDF, CSS, DOCX, manifest, checksum, or artifact generation.

## Full Table Inventory

| Table ID | Title | Planned appendix relationship | Layout risk |
|---|---|---|---|
| T-02-01 | AI Insurance Split-Market Signal Matrix | Appendix H inventory; Appendix F source caveat support | Wide-table risk |
| T-04-01 | Insurance Object Shift | Appendix A reference support | Normal |
| T-05-01 | Responsibility Continuity Map | Appendix A reference support | Normal |
| T-06-01 | Underwriting Evidence Request Model | Appendix C reference support | Normal |
| T-07-01 | Claim Evidence Pack Components | Appendix D reference support | Normal |
| T-08-01 | Hard-to-Insure Agentic Risk Patterns | Appendix B reference support | Normal |
| T-09-01 | MRO-to-Insurability Translation Map | Appendix A/B reference support; Appendix H inventory | Wide-table risk |
| T-10-01 | Auditability-to-Claim-Reconstruction Crosswalk | Appendix D reference support | Normal |
| T-11-01 | Insurance Line Ambiguity Map | Appendix E reference support | Normal |
| T-12-01 | Agentic Aggregation Risk Map | Appendix F source caveat support | Normal |
| T-13-01 | Insurance Evidence vs Privacy Control Map | Appendix C/F reference support | Normal |
| T-14-01 | Underwriting Evidence Architecture Components | Appendix C reference support; Appendix H inventory | Wide-table risk |
| T-15-01 | Agentic Exposure Inventory Template | Appendix C reference support | Normal |
| T-16-01 | Non-Pricing Exposure Variables | Appendix C/G boundary support | Normal |
| T-17-01 | Renewal and Change Evidence Register | Appendix C reference support | Normal |
| T-18-01 | Optional Reviewer Evidence Request Structure | Appendix C reference support; Appendix H inventory | Wide-table risk |
| T-19-01 | Agentic Claim Reconstruction Map | Appendix D reference support | Normal |
| T-20-01 | Dispute and Evidence Gap Register | Appendix D reference support | Normal |
| T-21-01 | Coverage Boundary Question Map | Appendix E reference support; Appendix H inventory | Wide-table risk |
| T-22-01 | Post-Loss Remediation Evidence Map | Appendix D reference support | Normal |
| T-23-01 | Claims-to-Renewal Feedback Loop | Appendix A-D reference support | Normal |
| T-24-01 | Agentic Insurability Object Model | Appendix A reference support | Normal |
| T-25-01 | Non-Scoring Insurability Reasoning Model | Appendix B reference support | Normal |
| T-26-01 | Audience Takeaway Matrix | Appendix F/G support | Normal |
| T-27-01 | Final Non-Claim Boundary Register | Appendix G reference support; Appendix H inventory | Wide-table risk |

## Wide-Table Risk List

The current wide-table risk list is:

- `T-02-01`
- `T-09-01`
- `T-14-01`
- `T-18-01`
- `T-21-01`
- `T-27-01`

## Body-Only vs Appendix Handling

Tables that should remain body-only unless later artifact QA requires change:

- T-04-01 through T-08-01;
- T-10-01 through T-13-01;
- T-15-01 through T-17-01;
- T-19-01 through T-20-01;
- T-22-01 through T-26-01.

Tables that may later be summarized, duplicated, or cross-referenced in appendices:

- T-02-01 in Appendix H and source caveat notes.
- T-09-01 in Appendix A/B or H.
- T-14-01 and T-18-01 in Appendix C or H.
- T-21-01 in Appendix E or H.
- T-27-01 in Appendix G or H.

## Future Layout Treatment

Future artifact planning may consider:

- responsive HTML table wrappers;
- abbreviated body tables with full appendix versions;
- landscape or smaller-type treatment for PDF;
- appendix-only detailed matrices;
- table footnote compression;
- body-to-appendix parity QA.

None of those treatments is implemented in R3L.

## Artifact Boundary

No HTML, PDF, DOCX, CSS, manifest, checksum, public artifact, or public route update is created in this wave.
