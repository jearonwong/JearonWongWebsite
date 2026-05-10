# Phase 1D-3 Publication Architecture Decision

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Task ID:** GACWP-2026-P1D3-PUBLICATION-COMPRESSION-REFLOW  
**Date:** May 10, 2026  
**Status:** ARCHITECTURE DECISION ACTIVE

## Decision

The Phase 1D-2 539-page artifact is rejected as a public white paper structure. It is a technical corpus export with publication styling, not a readable public white paper.

Phase 1D-3 adopts a two-artifact publication model:

1. **Public White Paper** - compressed, narrative-driven, branded, and readable.
2. **Technical Evidence Pack** - complete technical appendix and governance evidence artifact.

The public white paper must not include full Appendices A-K.

## Public White Paper Scope

| Component | Treatment |
|-----------|-----------|
| Cover | Include full publication cover |
| Document control / boundary statement | Include compressed |
| Executive summary | Include and strengthen as main reader entry |
| Core thesis | Include full |
| Chapters 1-5 | Compress as framing and methodology |
| Chapter 6 MROs | Summarize 16 objects; do not include every object card |
| Chapters 7-9 RCCS/ALCS/scoring | Summarize methodology and include core formulas |
| Chapters 10-15 | Include selected evidence, selected mapping conclusions, and selected failure/validation patterns |
| Chapter 16 | Include boundary summary only where needed |
| Chapter 17 | Include adoption roadmap |
| Chapter 18 | Include conclusion |
| Public appendix | Include short public appendix with methodology summary, evidence note, non-claim boundary, and technical evidence pack pointer |

## Technical Evidence Pack Scope

| Component | Treatment |
|-----------|-----------|
| Appendices A-K | Include full |
| Detailed rubrics E/F | Include full |
| Appendix D/G system mappings | Include full |
| Source audit register and claim evidence register | Include full |
| Table, figure, citation inventories | Include full |
| Source coverage matrix | Include full |
| QA reports | Include or reference as evidence ledgers |
| Phase reports | Include selected governance reports where useful |

## Source-Only Governance Material

Some internal development reports remain source-only governance material. They may be tracked in the repository but do not belong in either public white paper body or evidence pack body unless explicitly needed for audit traceability.

Examples:

- early phase completion reports
- obsolete reconstruction notes
- historical patch notes superseded by later reports
- old generation logs outside current Phase 1D-3 outputs

## Page Budget

| Artifact | Target | Hard Gate |
|----------|--------|-----------|
| Public White Paper | 80-140 pages | Must be under 160 pages unless explicitly justified |
| Technical Evidence Pack | No public readability cap | May exceed 300 pages |

If the public white paper exceeds 160 pages, Phase 1D-3 status must be `QA REQUIRED / TOO LONG`.

## Relationship Between Artifacts

The public white paper is the reader-facing argument. It should cite or point to the technical evidence pack when full matrices, detailed rubrics, source registers, and claim-level ledgers are needed.

The technical evidence pack is the audit substrate. It preserves detail and traceability without forcing every reader through a 500+ page public PDF.

## Non-Claim Boundary

This split does not change the paper's core claims, scoring methodology, MRO/ALCS taxonomy, system assessment semantics, vendor scope, certification boundaries, legal-compliance boundaries, or procurement boundaries.

