# GAIC HTML Publication Style

**Document:** GAIC-2026-v0.3.2-FRC-R3
**Phase:** 1D-13F Necessity Argument and Protocol Boundary
**Status:** DESIGN SYSTEM ACTIVE FOR HTML/PDF PUBLICATION CANDIDATE
**Last Updated:** May 12, 2026

## Visual Position

The HTML publication should read as a JearonWong.com white paper: architectural, evidence-led, protocol-native, and restrained. The visual model is a technical registry and governance publication, not a SaaS brochure, academic manuscript, generic consulting report, or Word-exported artifact.

The HTML/PDF artifact is the visual source of truth. DOCX is an editable derivative and may have lower layout fidelity.

Phase 1D-8 extended the Phase 1D-7 HTML-first foundation with stricter publication rules: chapters and appendices begin on new print pages, ordinary tables and code templates may split when needed, deterministic charts are rendered as print-safe SVG, body code-like examples can become reader-friendly object cards, and the final publication includes a References / Sources section.

Phase 1D-9 added the missing evaluation-results layer and semantic table-type system. Publication-facing system results were expressed as qualitative, source-qualified RCCS/ALCS analytical profiles, not rankings or procurement selection signals.

Phase 1D-10 adds explicit RCCS/ALCS provisional analytical score ranges and confidence labels for all evaluated systems. These scores are publication-facing result signals, but they are not vendor rankings, procurement recommendations, certifications, regulatory approval signals, legal compliance proof, or deployment-readiness guarantees. Dense rubric, system mapping, scorecard, source, and governance tables can render as score cards, system profile cards, semantic row cards, or limited column-split tables depending on content role.

Phase 1D-11 closes the high-risk citation/source evidence blockers without swallowing them as vague limitations. OpenAI platform-guide HTTP 403 is retained as an access note only because accessible official OpenAI Agents SDK Python and JavaScript docs replace it for narrowed SDK-surface claims. Validation Lab is limited to a public-surface, non-certifying evidence adjudication example. MPLP identity is source-bound, while GAIC MRO/ALCS mappings remain author analytical mapping where not directly stated. Product/platform documentation supports capability surfaces, not lifecycle compliance proof.

Phase 1D-12 adds the final two-layer RCCS presentation and repairs the table wrapping blocker. Evaluation Results now distinguishes RCCS-T (traditional governance coverage), RCCS-M (MRO-adjusted agentic regulatory coverage), and ALCS (lifecycle responsibility conformance). MPLP remains in the fixed-order comparison with limited RCCS-T product/platform coverage and strong RCCS-M/ALCS lifecycle-object semantics. Tables must not use wrapping rules that create single-letter vertical columns.

Phase 1D-13B globally integrates the Phase 1D-12 model into active source. RCCS-T / MRO / RCCS-M / ALCS is the explanatory spine across front matter, methodology, mappings, appendices, and conclusion. Appendix G remains qualitative and no-score, while numeric RCCS-T/RCCS-M/ALCS profiles remain only in Evaluation Results. RCCS-M is author analytical and forward-looking, not current law, legal compliance proof, certification, regulator-approved benchmark, vendor ranking, or procurement recommendation.

Phase 1D-13D completes the Chapter 7 methodology layer. Chapter 7 now treats RCCS-T and RCCS-M as the same ten dimensions and weights with different scoring lenses, and includes T-07-01A / T-07-02A methodology tables. Appendix E adds T-E-11 as the RCCS-M Adjustment Matrix while preserving T-E-01 through T-E-10 as RCCS-T baseline rubrics. These wide methodology matrices should use the existing semantic row-card / split-table rendering rules rather than narrow columns that could reintroduce vertical word breaks.

Phase 1D-13E repairs the remaining PDF table blocker by forcing the MRO / ALCS Dimension + Mapping Strength + Boundary / Evidence Limit table shape into semantic row cards where needed. It also adds the Chapter 14 RCCS-M evidence-confidence bridge and the Chapter 15 RCCS-M pressure-test bridge. The generated v9 artifacts must have zero vertical single-letter table pages, zero positive forbidden-claim blockers, and preserve source closure.

Phase 1D-13F preserves the Phase 1D-13E professional shell and table blocker repair, then adds a publication-facing necessity-argument layer. RCCS-M and ALCS are framed as proposed analytical adequacy models and necessary-dimension models for agentic lifecycle governance. MPLP's strong RCCS-M / ALCS posture is design alignment with the proposed lifecycle object layer, not independent market validation, certification, deployment proof, or procurement superiority. Chapter 13 distinguishes protocol-level semantic proposal evaluation from product/platform/framework maturity evaluation and adds an interoperability/specification boundary.

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
| Figure card | Bordered panel with figure label, flow lane, interpretation text; F-04 uses RCCS-T -> MRO Adjustment Layer -> RCCS-M -> ALCS |
| Chart card | Print-safe SVG or CSS chart with source-data boundary note |
| Evaluation profile card | Source-qualified RCCS-T/RCCS-M/ALCS posture, visible strength, lifecycle gap, evidence basis, and boundary per system |
| Score overview table | Fixed-order RCCS-T/RCCS-M/ALCS provisional analytical scores, score ranges, confidence labels, and source-boundary notes |
| RCCS-T/RCCS-M/ALCS score comparison | Grouped bar chart with fixed source order; no score sorting, leaderboard, or winner framing |
| RCCS-M/ALCS posture map | Provisional analytical score map; no final scores, no rank order, no procurement quadrant |
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
| Citation closure ledger | Publication-facing evidence status summary: closed official source, replacement source, narrowed claim, L5 analytical mapping, explicit limitation, unresolved blocker count |

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
- no score sorting or leaderboard framing;
- Appendix G remains qualitative, source-qualified, provisional, non-ranking, and no-score.

## Phase 1D-10 Scored Result Components

| Component | Rule |
|---|---|
| Provisional score cell | Show `0-100` score plus range; label as `Provisional Analytical Score` |
| Confidence label | Use Source-bound, Partially source-bound, L5 analytical inference, platform-guide access note, or explicit non-blocking limitation language |
| Score chart | Display systems in fixed source order, not score order |
| Score map | Use axis labels for RCCS and ALCS only; no leader/winner quadrant |
| Scored profile card | Lead with score/range/confidence, then visible strength, lifecycle gap, evidence basis, and boundary |
| Boundary note | Repeat that scores are analytical profiles, not vendor rankings, legal proof, certifications, regulatory approval, or procurement recommendations |

## Phase 1D-12 RCCS-T / RCCS-M Components

| Component | Rule |
|---|---|
| RCCS-T | Traditional Regulatory Compliance Coverage Score; measures familiar governance surfaces such as risk management, documentation, records, transparency, oversight, security, accountability, contestability, and monitoring |
| RCCS-M | MRO-Adjusted Regulatory Compliance Coverage Score; measures whether regulatory coverage can be expressed through Missing Regulatory Objects and lifecycle responsibility semantics |
| ALCS | Agentic Lifecycle Conformance Score; remains the lifecycle responsibility conformance layer |
| MPLP interpretation | Do not inflate traditional RCCS-T; explain that MPLP is not an enterprise governance SaaS while its RCCS-M/ALCS profile is strong because protocol semantics map to MRO-style lifecycle objects |
| Chart order | Use fixed system order only; do not sort by any score or create a winner, leader, best-system, or procurement quadrant |
| Boundary note | RCCS-M is author analytical, not a regulator-approved benchmark, legal compliance score, certification, vendor ranking, or procurement recommendation |

## Phase 1D-11 Citation Closure Components

| Component | Rule |
|---|---|
| Source closure summary | Show final unresolved high-risk blocker count and closure actions without hiding limitations |
| OpenAI access note | Platform guide HTTP 403 is visible but non-blocking; accessible official SDK docs support retained SDK claims |
| Validation Lab boundary | Public-surface methodology example only; no certification, endorsement, audit opinion, or compliance proof |
| MPLP boundary | Protocol identity source-bound; GAIC MRO/ALCS mapping is author analytical mapping where not directly stated |
| L2 product support | Product docs support capability surfaces only; lifecycle responsibility mapping remains L5 where analytical |

## Phase 1D-10 Semantic Table Classes

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

## Phase 1D-12 Table Wrapping Repair Rules

| Rule | Requirement |
|---|---|
| Table/code wrapping | Do not use `overflow-wrap: anywhere` for table cells or code-like text |
| Word breaking | Do not use `word-break: break-all`; table cells use `word-break: normal` |
| Long text | Use `overflow-wrap: break-word` plus semantic colgroups, table splitting, or card rendering |
| Hyphenation | Use `hyphens: auto` for table prose and `hyphens: none` for code/preformatted text |
| Visual blocker | Single-letter vertical table text is a publication blocker, not an accepted limitation |

## Phase 1D-13E Professional Style Shell Rules

| Component | Rule |
|---|---|
| Style reference | `/Users/jasonwang/Downloads/Global-AI-Compliance-White-Paper-2026-Professional-Final.html` may be used only as a visual/layout reference, never as a content source |
| Content truth | Latest `source_r3` Markdown remains the sole body-content source; HTML/PDF are visual authority and DOCX is derivative |
| Cover rhythm | Dark professional cover treatment is allowed when it preserves current status, document control, and RCCS-T / MRO / RCCS-M / ALCS framing |
| Forbidden adoption | Do not copy `QA Required`, old RCCS/ALCS-only language, incomplete TOC structure, old Figure F-04 naming, or old Appendix E naming from the reference HTML |
| Content regression guard | Generated output must retain RCCS-T, RCCS-M, MRO Adjustment Layer / MRO-adjusted framing, ALCS, T-07-01A, T-07-02A, T-E-11, AUTHOR-INFERENCE-RCCS-M, and Chapter 14/15 bridges |
| Table blocker | MRO/ALCS mapping tables with `MRO / ALCS Dimension`, `Mapping Strength`, and `Boundary / Evidence Limit` render as semantic row cards where needed |
| Final status | Publication-candidate status is allowed only when style-shell QA, content-regression guard, table visual QA, boundary QA, and source-closure QA all pass |
