# GAIC-R3I-1 Live Extraction Proof

**Date:** May 13, 2026

## Live URL Extraction

Live production checks were run against the 12 priority URLs before R3I-1 deployment.

| URL | HTTP | Metadata | JSON-LD | Visible terms | Build/live status |
|---|---|---|---|---|---|
| `https://www.jearonwong.com/` | 200 | title, description, canonical, robots present | 5 blocks, parseable | Jearon Wong, Protocol Architect, GAIC, AI Agent Lifecycle, MRO, RCCS-M, ALCS, MPLP | Live healthy; R3I-1 homepage JSON-LD enhancement pending deploy |
| `https://www.jearonwong.com/concepts/` | 200 | title, description, canonical, robots present | 5 blocks, parseable | Agentic Lifecycle Governance, AI Agent Lifecycle, MRO, RCCS-M, ALCS, MPLP, Deterministic Delivery | Live healthy; R3I-1 description improvement pending deploy |
| `https://www.jearonwong.com/concepts/map/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | Jearon Wong, GAIC, Agentic Lifecycle Governance, MRO, RCCS-M, ALCS, MPLP, Deterministic Delivery | Live healthy; R3I-1 extractable layer index pending deploy |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | GAIC, MRO, RCCS-M, ALCS, Deterministic Delivery | Build/live match for existing metadata |
| `https://www.jearonwong.com/concepts/agentic-lifecycle-governance/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | Agentic Lifecycle Governance, MRO, RCCS-M, ALCS, MPLP | Build/live match for existing metadata |
| `https://www.jearonwong.com/concepts/missing-regulatory-objects/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | MRO, GAIC, Agentic Lifecycle Governance, RCCS-M, ALCS | Build/live match for existing metadata |
| `https://www.jearonwong.com/concepts/rccs-m/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | RCCS-M, MRO, ALCS, GAIC | Build/live match for existing metadata |
| `https://www.jearonwong.com/concepts/alcs/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | ALCS, RCCS-M, MRO, GAIC | Build/live match for existing metadata |
| `https://www.jearonwong.com/concepts/deterministic-delivery/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | Deterministic Delivery, Agentic Delivery, GAIC | Build/live match for existing metadata |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/systems/` | 200 | title, description, canonical, robots present | 6 blocks, parseable | systems, GAIC, MRO, RCCS-M, ALCS | Build/live match for existing metadata |
| `https://www.jearonwong.com/mapping/extended-ecosystem/` | 200 | title, description, canonical, robots present | 5 blocks, parseable | Extended Ecosystem, Agentic Lifecycle Governance, Deterministic Delivery | Build/live match for existing metadata |
| `https://www.jearonwong.com/governance/` | 200 | title, description, canonical, robots present | 5 blocks, parseable | AI Agent Governance, Enterprise Agent Governance, RCCS-M, ALCS, Deterministic Delivery | Build/live match for existing metadata |

## Screenshot

Local browser screenshot was captured for the R3I-1 Concepts Map build through the in-app browser preview route. It showed the Concepts Map first screen rendering correctly and no console warnings/errors.

## Result

Live extraction is healthy for existing deployed priority pages. R3I-1-specific source/build improvements require post-deploy live verification.
