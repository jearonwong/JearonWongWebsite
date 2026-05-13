# GAIC-R3I-1 External Proposal Reconciliation

**Date:** May 13, 2026

## Classification Key

- `ALREADY_SOLVED`: already satisfied by prior source/build/live state.
- `IMPROVED_IN_THIS_WAVE`: improved by R3I-1 source/build changes.
- `NOT_REPRODUCED`: external finding was not reproduced in source/build/live.
- `OUT_OF_SCOPE_EXTERNAL_EXECUTION`: requires owner action outside the repo.
- `DEFER_TO_R3J`: belongs to launch execution materials created in R3J.
- `DEFER_TO_MONITORING`: requires measurement over time.

## Findings

| Proposal / finding | Classification | Rationale |
|---|---|---|
| Homepage meta/JSON-LD missing | `NOT_REPRODUCED` | Source/build/live all include homepage title, meta description, canonical, robots, WebSite, Person, WebPage, ProfilePage, and BreadcrumbList JSON-LD. |
| Homepage entity graph should expose priority surfaces | `IMPROVED_IN_THIS_WAVE` | Homepage `hasPart` now includes Concepts, Concepts Map, GAIC hub, GAIC systems, Concept Core, Deterministic Delivery, Playbooks, Extended Ecosystem, and Governance. |
| `/concepts/` meta/JSON-LD missing | `NOT_REPRODUCED` | Source/build/live include metadata and CollectionPage/DefinedTermSet/Breadcrumb JSON-LD. |
| `/concepts/` description too generic for outcome KPI extraction | `IMPROVED_IN_THIS_WAVE` | Description now names core entity targets directly while avoiding keyword stuffing. |
| `/concepts/map/` meta/JSON-LD missing | `NOT_REPRODUCED` | Source/build/live include metadata and JSON-LD. |
| Concepts Map visual crawler limitation | `IMPROVED_IN_THIS_WAVE` | Added server-rendered extractable layer index and layer-group JSON-LD. |
| Concepts Map text fallback and links are server-rendered | `ALREADY_SOLVED` | R3H-0 verified fallback; R3I-1 keeps and strengthens it. |
| Big-tech/model/project mappings weak | `ALREADY_SOLVED` | R3E and R3F added GAIC-cited systems and extended ecosystem mappings; R3I-1 verifies index metadata/schema quality. |
| Governance / regulatory mappings weak | `ALREADY_SOLVED` | R3H added governance index and detail mappings; R3I-1 verifies index metadata/schema quality. |
| External authority signals needed | `DEFER_TO_R3J` | R3J created launch and evidence-capture pack. Execution requires owner login/action. |
| SEO visibility +30% | `DEFER_TO_MONITORING` | KPI target only. Requires Search Console / analytics baseline and follow-up window. |
| AI answer engines begin citing JearonWong.com | `DEFER_TO_MONITORING` | KPI target only. Requires answer-engine test evidence. |
| Top-3-page visibility target | `DEFER_TO_MONITORING` | KPI target only. Requires search result monitoring and evidence. |

## Result

External proposals are reconciled. R3I-1 improves source/build metadata and extractability where useful, defers external execution to R3J owner actions, and defers outcome claims to monitoring evidence.
