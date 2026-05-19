# WHITEPAPER-R8E-0 Header / Footer / Copyright Plan

**Date:** 2026-05-19

## Goal

Define a restrained PDF identity system for GAIC and AIAAWP. This is planning-only; no footer or copyright text is implemented in R8E-0.

## Recommended Page Families

| Page family | Header | Footer | Notes |
| --- | --- | --- | --- |
| Cover | Omit standard header/footer | Omit or use designed cover-only identity | Cover should remain clean. |
| Status / publication boundary page | Optional light running title | Optional page number and URL | Keep boundary text dominant. |
| TOC / publication contents | Optional light running title | Page number, URL | Avoid clutter. |
| Body chapters | Running short title | Author/site, document ID/version, page number, URL, rights statement | Main default. |
| Landscape table pages | Short title + table title if needed | Page number, URL, document ID, compact boundary marker | Must preserve orientation context. |
| Appendices | Running appendix title | Page number, URL, rights statement | Helps citation and navigation. |
| Source/citation sections | Running source/citation title | Page number, URL, rights statement | Functional over decorative. |
| Final page | Running title optional | Full footer plus optional rights/boundary restatement | Publication closure. |

## GAIC Footer Proposal

Potential elements:

- `Global AI Compliance White Paper 2026`
- `Jearon Wong`
- `GACWP-2026-v0.3.2-FRC-R3`
- `jearonwong.com`
- page number
- restrained boundary marker: `Technical governance analysis - not legal advice or certification`

Copyright / rights wording:

- Safe owner-decision placeholder: `Copyright (c) 2026 Jearon Wong. All rights reserved.`
- Owner decision required before implementation if another rights statement is preferred.

## AIAAWP Footer Proposal

Potential elements:

- `Agentic AI Auditability & Assurance White Paper 2026`
- `Jearon Wong`
- AIAAWP document/version identifier if finalized in the hub/manifest
- `jearonwong.com`
- page number
- restrained boundary marker: `Public research candidate - not an audit standard or assurance opinion`

Copyright / rights wording:

- Safe owner-decision placeholder: `Copyright (c) 2026 Jearon Wong. All rights reserved.`
- Owner decision required before implementation if another rights statement is preferred.

## Typography

- Footer type should be smaller than body text.
- Footer should not compete with table content.
- Use a thin rule or whitespace, not heavy decoration.
- Landscape footer must not consume table width.
- Page numbers should be stable and easy to find.

## Owner Decisions Required

- Exact copyright wording.
- Whether "Protocol Architect for the Agent Era" appears in the footer or only frontmatter.
- Whether frontmatter pages carry page numbers.
- Whether boundary marker appears on every page or only sensitive sections.

## Result

R8E-0 recommends a restrained header/footer system but does not implement it. R8E-1 should wait for owner approval on copyright and identity wording.
