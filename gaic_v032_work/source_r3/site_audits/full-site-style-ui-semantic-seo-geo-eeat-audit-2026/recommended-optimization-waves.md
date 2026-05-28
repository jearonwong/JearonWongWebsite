# Recommended Optimization Waves

Do not execute these changes inside the audit wave. This file is a planning handoff only.

## Wave 1: Whitepaper Artifact Metadata Parity Repair

Goal:

- Add canonical and JSON-LD parity to the Agentic AI Insurability & Risk Transfer White Paper 2026 HTML artifact.
- Review all three artifact HTML heads for consistent title, description, canonical, JSON-LD, and return-to-hub metadata.
- Preserve paper prose, HTML/PDF rendering style, manifest/checksum discipline, and no-DOCX boundary.

Priority: P1.

## Wave 2: Public Semantic Surface Terminology and Status Hardening

Goal:

- Repair Concepts Map and entity graph public-facing acronym/status drift.
- Replace public acronym-first nodes where appropriate with formal paper names or natural-language aliases.
- Change `public-research-candidate` relationship statuses to public research edition language.
- Keep document IDs where useful, but introduce them as IDs rather than public shorthand.

Priority: P1.

## Wave 3: Evidence Registry Historical Artifact Labeling

Goal:

- Clarify current official manifests/checksums vs historical first-whitepaper publication-candidate manifests.
- Rename public labels to "historical" where applicable.
- Avoid removing integrity history unless owner authorizes.

Priority: P1.

## Wave 4: Research Foundation and MPLP v2.0 Positioning

Goal:

- Add a bounded narrative that the first three whitepapers are the research foundation.
- State that MPLP v2.0 object-model consolidation is next.
- State that fourth whitepaper and future practitioner guide public releases are held, not abandoned and not now published.
- Do not announce socially in this wave.

Priority: P1.

## Wave 5: SEO/GEO Metadata Polish

Goal:

- Fix duplicate governance titles.
- Normalize short/long meta descriptions.
- Clarify `/lifecycle/` vs `/concepts/ai-agent-lifecycle/`.
- Add compact `llms.txt` answer-engine summary if owner approves.

Priority: P2.

## Wave 6: Visual and UX Registry Polish

Goal:

- Improve mobile first-fold checks across homepage, research, whitepaper pages, governance, projects, and concepts.
- Tighten footer visual grammar.
- Improve governance/mapping scan hierarchy.
- Keep the architectural headquarters feel; avoid generic SaaS redesign.

Priority: P2.

## Wave 7: Technical Hygiene Cleanup

Goal:

- Remove `public/research/.DS_Store`.
- Decide disposition of pre-existing untracked `public/social/*`.
- Address Astro font preload hints.
- Keep public artifact hashes stable unless artifact files intentionally change.

Priority: P3.

## Explicitly Not Recommended Now

- Fourth whitepaper publication.
- New practitioner guide public release.
- Automatic social announcement execution.
- Broad redesign before targeted P1 repairs.
