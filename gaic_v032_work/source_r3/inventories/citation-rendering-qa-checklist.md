# Citation Rendering QA Checklist

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Status:** PHASE 1D-11 CITATION RENDERING QA COMPLETE  
**Last Updated:** May 11, 2026

## Purpose

This checklist records citation-rendering checks for Phase 1D-11. It supports publication-candidate review readiness after high-risk source blockers were closed, narrowed, replaced, downgraded, or retained as explicit non-blocking limitations.

## Checklist

| Check ID | Check | Current Preflight Status | Phase 1D Action | Blocking Level |
|---|---|---|---|---|
| CITE-QA-01 | Citation ID exists for every retained source cluster | Complete at source-ID level | Verify final inline/table/appendix citation labels | High |
| CITE-QA-02 | Source ID exists in citation inventory | Complete for active source IDs used in claim register and citation map | Check for orphaned citation IDs after render | High |
| CITE-QA-03 | Claim-evidence-register cross-link exists for high-risk product/protocol claims | Complete for 24 high-risk claims | Verify references survive rendering | High |
| CITE-QA-04 | Source coverage matrix entry exists for each chapter/appendix with source dependency | Complete at coverage level | Verify coverage status after any Phase 1D edits | Medium |
| CITE-QA-05 | Citation appears near relevant claim | Mapped at section/table level | Pin exact inline/table citations during Phase 1D | High |
| CITE-QA-06 | Table-level citations are not orphaned | Preflight map identifies table-level citation clusters | Check captions/notes in rendered DOCX/PDF | High |
| CITE-QA-07 | Appendix-level citations do not over-support body claims | Boundary recorded in citation map | Add local citations where body claim requires support | High |
| CITE-QA-08 | L5 inference clearly marked | Claim register and source coverage matrix mark L5 mappings | Verify L5 labels render near analytical mappings | High |
| CITE-QA-09 | OpenAI 403 entry flagged for final rendering check | OpenAI platform guide remains HTTP 403, but official Python/JS Agents SDK docs are accessible | Treat platform guide as non-blocking access note; use accessible SDK docs for retained SDK claims | Closed |
| CITE-QA-10 | No raw URLs in final prose unless intentionally allowed | Raw URLs currently concentrated in Appendix C/source ledgers/reports | Inspect body and appendix prose after generation | Medium |
| CITE-QA-11 | Legal citations do not imply implementation proof | Boundary present across scoring/rubric sections | Verify no caption or footnote changes overstate L1 evidence | High |
| CITE-QA-12 | L2 product documentation not treated as audit proof | Claim register and Appendix G preserve L2/L5 distinctions | Verify citation notes preserve narrowed claims | High |
| CITE-QA-13 | Validation Lab remains non-certifying | Boundary recorded in Chapter 14, Appendix I/K, claim register; methodology page pinned | Verify final citations do not promote methodology claims | Closed |
| CITE-QA-14 | MPLP remains non-required and non-exclusive | Boundary recorded in Chapter 13, Appendix G, claim register | Verify final proofing preserves boundary text | Critical |
| CITE-QA-15 | Appendix G citations preserve qualitative provisional posture | Appendix G proofing required | Verify no score/order/procurement language appears after render | Critical |
| CITE-QA-16 | Citation tables render without clipping | Not rendered in Phase 1C-FINAL | Inspect Appendix C/I and inventories during Phase 1D | High |
| CITE-QA-17 | Source URLs render as clickable links or plain text according to publication style | Not rendered in Phase 1C-FINAL | Verify final DOCX/PDF hyperlink behavior | Medium |
| CITE-QA-18 | Report-level citations are not mistaken for publication sources | Reports separated from body/appendices | Keep reports out of publication artifact unless intentionally included | Medium |

## Phase 1D-11 Result

Final unresolved high-risk citation/access/source-pointer blockers: 0. Remaining limitations are explicit and non-blocking for publication-candidate review.

## OpenAI 403 Handling

The OpenAI platform guide entry point returned HTTP 403 during curl verification. OpenAI Agents SDK Python and JavaScript documentation are accessible and are the primary official sources for retained SDK-surface claims. The platform-guide URL is retained as an access note only and is not used as proof for lifecycle-governance claims.

## Raw URL Policy

Raw URLs are allowed in citation registers, source tables, claim evidence registers, and internal reports. They should not appear in final prose unless explicitly retained as source-register content.

---

**End of Inventory**
