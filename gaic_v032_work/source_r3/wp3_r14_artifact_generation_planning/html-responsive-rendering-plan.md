# HTML Responsive Rendering Plan

## Purpose

Plan the internal candidate HTML rendering for R15. Do not generate HTML in R14.

## Shell Reuse

R15 should reuse the GAIC/AIAAWP responsive web-reading shell:

- Long-form whitepaper typography.
- Restrained research-publication visual identity.
- Stable chapter anchors.
- Source-note and appendix style.
- Boundary-note treatment.
- Table overflow controls.

The HTML profile must not become a legal memo, academic serif report, SaaS blog, or consulting-deck page.

## Responsive Requirements

R15 HTML QA must test:

- 375px.
- 390px.
- 768px.
- 1440px.

At each width:

- No body-level horizontal overflow.
- Tables are scroll-contained or adapted without losing meaning.
- Source notes are readable and navigable.
- Chapter anchors work.
- Appendices remain readable without visually dominating the body.
- Chapter 4 appears as a rendered figure, not raw Mermaid.

## Internal Candidate Rules

- No public canonical.
- No public JSON-LD in the internal candidate artifact.
- No public release/final/seal claim.
- No public CTA.
- No public artifact path.

## R15 HTML QA Plan

- Viewport screenshots.
- DOM overflow checks.
- Console checks.
- Source-note marker/link checks.
- Chapter anchor checks.
- Table behavior checks.
- Figure alt-text and mobile readability checks.
