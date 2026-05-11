# GAIC HTML Publication Style

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Phase:** 1D-9 Evaluation Results and Semantic Table Reflow
**Status:** DESIGN SYSTEM ACTIVE FOR HTML/PDF EVALUATION RESULTS DRAFT
**Last Updated:** May 11, 2026

## Visual Position

The HTML publication should read as a JearonWong.com white paper: architectural, evidence-led, protocol-native, and restrained. The visual model is a technical registry and governance publication, not a SaaS brochure, academic manuscript, generic consulting report, or Word-exported artifact.

The HTML/PDF artifact is the visual source of truth. DOCX is an editable derivative and may have lower layout fidelity.

Phase 1D-8 extended the Phase 1D-7 HTML-first foundation with stricter publication rules: chapters and appendices begin on new print pages, ordinary tables and code templates may split when needed, deterministic charts are rendered as print-safe SVG, body code-like examples can become reader-friendly object cards, and the final publication includes a References / Sources section.

Phase 1D-9 adds the missing evaluation-results layer and semantic table-type system. Publication-facing system results are expressed as qualitative, source-qualified RCCS/ALCS analytical profiles, not rankings or final vendor scores. Dense rubric, system mapping, scorecard, source, and governance tables can render as score cards, system profile cards, semantic row cards, or limited column-split tables depending on content role.

## VI Principles

| Principle | Publication Meaning | HTML/CSS Implication |
|---|---|---|
| Architectural Headquarters | The paper defines a framework layer and operating architecture | Strong cover, part dividers, clear heading hierarchy, registry-like metadata |
| Evidence First | Claims are bounded by source level and evidence confidence | Evidence badges, source notes, boundary callouts, cautious table language |
| Identity as Infrastructure | Protocol identity and lifecycle objects are governance infrastructure | Protocol lanes, object cards, compact figures, no product-marketing treatment |
| Restrained Authority | Confident without legal or certification overclaim | Dark structure, quiet accent color, no decorative gradients or oversized hero tropes |
| Black Box of Protocol | Governance feels like controlled institutional machinery | Charcoal fields, grid rules, monospace trace tags, compact control blocks |

## CSS Tokens

| Token | Hex | Use |
|---|---|---|
| Monolith Charcoal | `#111111` | Primary text, cover field, major rules |
| Anodized Slate | `#1a1a1a` | Structural dark panels and table headers |
| Machine White | `#f1f5f9` | Page background and subtle panels |
| Registry Blue | `#3b82f6` | Links, figure labels, active registry elements |
| Evidence Cyan | `#22d3ee` | Evidence highlights, protocol strip accents |
| Status Gray | `#64748b` | Metadata, notes, secondary labels |
| Grid Gray | `#d8dee8` | Borders and table rules |
| Boundary Amber | `#b7791f` | Non-legal and non-certifying callout accents |
| Fault Red | `#991b1b` | Blocker notes only |

## Typography

| Role | Stack | Rule |
|---|---|---|
| Headings | `Outfit, Inter, system-ui, sans-serif` | Bold, tight, no negative letter spacing |
| Body | `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | 10.2-10.8 pt print equivalent; line-height 1.52 |
| Registry / Code | `"JetBrains Mono", "SFMono-Regular", Consolas, monospace` | Trace tags, badges, source IDs, code blocks |

Fonts must degrade cleanly to system fonts. The renderer should not depend on fragile remote font loading.

## Layout

| Surface | Rule |
|---|---|
| Screen body | Centered publication shell, max width 980 px, generous side padding |
| Print target | A4 portrait |
| Print margins | 16 mm top/bottom, 15 mm inner/outer |
| Paragraph measure | Continuous flow, no arbitrary page breaks after every heading |
| Part dividers | Optional compact section gates, not standalone decorative pages |
| Footer | Trace tag, non-legal note, page number when browser print supports it |

## Heading Scale

| Level | Screen | Print Behavior |
|---|---|---|
| H1 | 34-42 px | Chapter opening; avoid page break immediately after |
| H2 | 24-28 px | Section gate with top border or rule |
| H3 | 18-20 px | Dense subsection heading |
| H4 | 14-16 px | Compact label heading |

Do not scale typography with viewport width. Letter spacing remains normal.

## Components

| Component | Style |
|---|---|
| Cover page | Charcoal title block, registry metadata, five-lane thesis strip |
| Important notice | Amber-left callout, non-legal/non-certifying/non-ranking boundary |
| Document control | Compact key/value table with strong label column |
| Thesis callout | Charcoal or pale blue panel, one focused claim |
| Evidence badge | Small monospace pill: L1-L5 |
| MRO/RCCS/ALCS badge | Small registry-blue or slate monospace pill |
| Figure card | Bordered panel with figure label, flow lane, interpretation text |
| Chart card | Print-safe SVG or CSS chart with source-data boundary note |
| Evaluation profile card | Source-qualified RCCS/ALCS posture, visible strength, lifecycle gap, evidence basis, and boundary per system |
| RCCS/ALCS posture map | Qualitative quadrant chart; no numeric final scores, no rank order, no procurement quadrant |
| System heatmap | Strong / Partial / Limited / Not visible qualitative cells only; no leaderboard coloring |
| Object card | Reader-facing rendering of short lifecycle object/code examples in body chapters |
| Table | Fixed layout where possible, shaded header, compact cell padding, repeat headers in print when supported |
| Wide table | Semantic column splitting for dense 6+ column tables; preserve all rows and columns |
| Rubric card set | Score badge plus capability/evidence text for scoring rubrics where long evidence text would otherwise be squeezed |
| System profile row card | Mapping/profile rows rendered as labeled fields when a grid would imply equal column weight or waste space |
| Semantic row card | Scorecard, source register, and governance-boundary rows rendered as labeled cards when the table is semantically a form/register rather than a comparison grid |
| Appendix | More compact density, visible provisional/boundary notes, no ranking style |
| Citation/source note | Small status-gray text, no unsupported raw URL sprawl |
| References / Sources | Grouped source register with evidence level, access status, page-pinning notes, and conflict-of-interest boundaries |

## Print Rules

The renderer must define:

- `@media print`;
- `@page { size: A4; margin: 16mm 15mm; }`;
- `.chapter { break-before: page; }` and `.appendix { break-before: page; }`;
- `break-after: avoid` for headings;
- `break-inside: avoid` for callouts, figure cards, chart cards, object cards, and reference items where practical;
- `break-inside: auto` for large tables and technical template code so they do not create avoidable blank page islands;
- table headers styled for repetition where supported;
- compact appendix table mode;
- no forced figure-only pages unless explicitly justified.

## Boundary Rules

The design must reinforce, not weaken, the paper's non-claim boundaries:

- no legal advice;
- no certification standard;
- no regulatory approval;
- no procurement recommendation;
- no vendor ranking;
- no final vendor assessment;
- no final vendor score;
- Appendix G remains qualitative, source-qualified, provisional, non-ranking, and no-score.

## Phase 1D-9 Semantic Table Classes

| Semantic Type | CSS Class / Rendering | Publication Intent |
|---|---|---|
| matrix_table | `.table-matrix` | Standard comparison or lookup table when row/column balance is natural |
| rubric_table | `.table-rubric` or `.rubric-card-set` | Score/capability/evidence rubrics; score stays compact, evidence gets readable width |
| scorecard_table | `.table-scorecard` or semantic row cards | Templates and scorecard records; avoids wide empty numeric columns |
| source_register_table | `.table-source-register` or semantic row cards | Source ID/status records with readable follow-up actions |
| mro_object_card_table | `.table-mro-card` | MRO object metadata and registry-like fields |
| system_profile_table | `.table-system-profile` or `.system-profile-card-set` | System/mapping rows with long strength, gap, evidence, and boundary text |
| governance_boundary_table | `.table-boundary` or semantic row cards | Claim/non-claim boundary rows |
| appendix_dense_table | `.table-appendix-dense` | Compact technical appendix tables only |
