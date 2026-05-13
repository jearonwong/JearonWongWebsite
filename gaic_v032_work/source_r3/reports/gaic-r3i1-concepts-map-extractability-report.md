# GAIC-R3I-1 Concepts Map Extractability Report

**Date:** May 13, 2026

## Purpose

Verify that `/concepts/map/` is not only a visual page, but a server-rendered, crawler-readable entity node for the site.

## Server-Rendered Groups Verified

The local R3I-1 build includes a visible `Extractable layer index` section with the required groups:

1. Identity Layer
2. Category Layer
3. Governance Object Layer
4. Evaluation Layer
5. Protocol Path
6. Systems Discussed in GAIC
7. Extended Ecosystem Mapping
8. Engineering Practice Layer
9. Regulatory and Enterprise Governance Layer
10. Applied Playbooks

## JSON-LD Representation

The local build includes:

- WebSite JSON-LD.
- Person JSON-LD.
- WebPage JSON-LD.
- Entity mesh ItemList JSON-LD.
- DefinedTermSet JSON-LD.
- Layer group ItemList JSON-LD.
- BreadcrumbList JSON-LD.

The Concepts Map `WebPage` JSON-LD also includes `hasPart` entries for the server-rendered layer groups.

## Browser Verification

Local preview route verified:

`http://127.0.0.1:4322/concepts/map/`

Browser checks:

- Page title matched: `Concepts Map / Entity Mesh | Jearon Wong — Protocol Architect for the Agent Era`.
- DOM snapshot contained `Extractable layer index`.
- DOM snapshot contained `Engineering Practice Layer`.
- DOM snapshot contained `Regulatory and Enterprise Governance Layer`.
- Console warnings/errors: none captured.
- Visible screenshot confirmed the Concepts Map first screen rendered normally.

## Live Status

Production `https://www.jearonwong.com/concepts/map/` returned HTTP 200 and parseable JSON-LD before R3I-1 deployment. The new extractable layer index is not live until this commit is deployed.

## Result

Concepts Map extractability is complete in source/build. Production follow-up should verify the new layer index after deployment.
