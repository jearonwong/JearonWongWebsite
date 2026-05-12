# GAIC-R3A Structured Data Report

**Task ID:** GAIC-R3A-CORE-ENTITY-MESH  
**Date:** May 12, 2026

## Scope

R3A expands the existing `/concepts/[slug]/` template so GAIC entity pages are SEO/GEO-readable definition surfaces. This affects dynamic concept pages only and does not modify sealed white paper artifacts.

## Metadata

Each entity page receives:

- Page title from the concept registry.
- Meta description from the concept registry.
- Canonical URL via `BaseLayout`.
- Robots `index, follow` via the default layout behavior.
- Open Graph and Twitter metadata through `BaseLayout`.
- Keyword/entity metadata from the concept registry.

## JSON-LD

The dynamic concept template now emits:

- `WebPage`
- `TechArticle`
- `BreadcrumbList`
- `DefinedTerm`

Each `DefinedTerm` includes:

- `name`
- `description`
- `url`
- `keywords`
- `inDefinedTermSet`
- `isBasedOn` link to the Global AI Compliance White Paper 2026 hub
- related links to Concept Core, white paper hub, and related concept entities

## Entity Coverage

Structured data applies to:

- Missing Regulatory Objects
- RCCS-M
- ALCS
- Lifecycle Responsibility Objects
- Accepted Outcome
- Authority Boundary
- Evidence Chain via `/concepts/lifecycle-evidence/`

## Boundary

Structured data does not claim legal compliance proof, certification, regulator approval, vendor ranking, procurement recommendation, or MPLP exclusivity/current industry-standard status.

