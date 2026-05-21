# Figure Rendering Plan

## Critical Issue

R12 Chapter 4 contains a Mermaid responsibility bridge placeholder. Raw Mermaid is acceptable in the source body but must not enter final HTML/PDF candidate artifacts.

## R15 Figure Requirement

R15 should convert the Chapter 4 responsibility bridge into a rendered publication-grade figure matching the GAIC/AIAAWP visual system.

## Required Figure Content

The figure must show:

1. Legal Subject.
2. Human Responsibility Role.
3. Agent / MAS Role.
4. Bounded Agentic Work Unit.
5. Lifecycle Evidence.
6. Loss Event.
7. Review Path.
8. Coverage / Exclusion Boundary Review.

## Figure Semantics

- The figure represents a review path, not a liability finding.
- It must not imply coverage, claim approval, legal conclusion, or insurer acceptance.
- Caption should say it is a review path / evidence path.
- Alt text should state the same.

## R15 Output Plan

- Rendered SVG or static image in an internal candidate asset path.
- Source figure file if needed.
- Figure checksum in internal manifest.
- HTML screenshot proof.
- PDF screenshot proof.
- Mobile readability proof.
- Text fallback / alt text.

## R14 Boundary

Do not render the figure in R14.
