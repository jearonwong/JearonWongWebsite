# Visual Style Consistency Audit

## Baseline

The site reads as an architectural headquarters rather than a generic SaaS, blog, portfolio, or resume site. The dominant grammar is restrained, registry-like, technical, and proof-oriented:

- Dark zone hero / light registry body rhythm.
- Monospace registry annotations.
- Sharp cards and panels.
- Evidence ledger tables.
- Direct claim language.
- Whitepaper publication pages using a shared hero, status panel, CTA, citation, integrity, boundary, and related-research grammar.

## Strengths

- The homepage first fold makes the identity and thesis immediate: `Execution is not Delivery.` plus `Protocol Architect for the Agent Era`.
- Research index and whitepaper pages now feel like one official publication system.
- Whitepaper HTML artifacts have a more institutional artifact grammar than the main site, which is appropriate for long-form public research.
- Concepts Map and Evidence Registry support the "evidence ledger / registry" feel.
- Browser smoke at desktop width found no horizontal overflow on homepage, research index, third whitepaper page, third HTML artifact, projects, or Concepts Map.

## P2 Findings

1. **Footer style contrast**
   - The footer uses lighter social-pill and text colors that feel less integrated with the high-end registry shell.
   - Recommended future action: tighten footer visual grammar to match the dark-header / registry-ledger system.

2. **Long-title stress on whitepaper pages**
   - Whitepaper H1s use large clamp values and narrow max width. They fit, but the first fold is dense for the second and third titles.
   - Recommended future action: test mobile and tablet screenshots before announcement and tune line breaks if needed.

3. **Artifact style vs site style**
   - HTML artifacts intentionally use publication-shell styling. They are aligned enough, but artifact HTML does not inherit the main site header/footer.
   - Recommended future action: preserve artifact independence but add consistent canonical metadata and optional "return to paper hub" affordance parity across all three artifacts.

4. **Governance and mapping pages are functionally coherent but visually denser**
   - The mapping/governance page families read as dense registry surfaces, which matches strategy, but they can feel less editorially guided than homepage/research.
   - Recommended future action: add a later polish wave for scan hierarchy and first-fold clarity.

## Non-Issues

- The dark/light zone split is intentional and aligned with "Black Box of Protocol" plus "Evidence Ledger".
- The absence of generic rounded SaaS cards is positive for this brand system.
- The current whitepaper page pattern should not be redesigned before announcement; only targeted metadata/semantic and minor consistency repairs are warranted.
