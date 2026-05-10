# GAIC White Paper VI System

**Document:** GAIC-2026-v0.3.2-FRC-R3  
**Phase:** 1D-2 Publication Design Reflow  
**Status:** DESIGN SYSTEM ACTIVE FOR PUBLICATION DRAFT  
**Last Updated:** May 10, 2026

## 1. Design Position

The publication should read as a JearonWong.com white paper: architectural, evidence-led, protocol-native, and restrained. It should not read as a default Word export, SaaS marketing PDF, academic manuscript, or generic consulting report.

The visual temperament is a black-box protocol document: quiet authority, dense but navigable evidence, precise boundaries, and strong hierarchy.

## 2. Core Principles

| Principle | Publication Meaning | Design Implication |
|-----------|---------------------|--------------------|
| Architectural Headquarters | The paper frames a category and operating architecture | Use strong section gates, precise titles, and system diagrams |
| Evidence First | Claims are tied to source level, boundary status, and evidence objects | Use evidence badges, source markers, and table notes |
| Identity as Infrastructure | MPLP and lifecycle objects are treated as governance infrastructure, not product marketing | Keep visual language protocol-led and non-promotional |
| Restrained Authority | The paper is confident without over-claiming | Use quiet contrast, direct captions, and boundary boxes |
| Black Box of Protocol | Lifecycle governance feels like machinery under institutional control | Use charcoal headers, grid logic, evidence lanes, and sparse accent color |

## 3. Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| Monolith Charcoal | `#111318` | Cover field, major heading bars, footer rules |
| Machine White | `#F7F7F4` | Page background reference and cover contrast |
| Anodized Slate | `#3C4858` | Secondary headings, table header text |
| Protocol Blue | `#1F4E79` | Source markers, figure labels, controlled emphasis |
| Evidence Green | `#356B56` | Evidence-pass badges and validation lanes |
| Boundary Amber | `#8A6A20` | Boundary / non-claim callouts |
| Fault Red | `#8B2E2E` | Negative-control and blocker notes only |
| Grid Gray | `#D9DEE5` | Table rules and figure lanes |

## 4. Typography

The DOCX pipeline should use system-safe fonts that survive LibreOffice conversion:

| Role | Preferred Font | Fallback | Notes |
|------|----------------|----------|-------|
| Title | Aptos Display | Helvetica Neue / Arial | Large, restrained, no decorative effect |
| Headings | Aptos / Arial | Helvetica | Bold, charcoal or protocol blue |
| Body | Aptos / Arial | Helvetica | 9.5-10 pt for draft, 10-10.5 pt for final if tables are split |
| Tables | Aptos Narrow / Arial Narrow | Arial | 6.2-8 pt depending on table risk |
| Figure labels | Arial | Helvetica | All caps only for small lane tags |
| Code/YAML | Courier New | Menlo | 7.5-8 pt |

Do not use ornamental fonts, gradient text, oversized decorative quotes, or poster-like SaaS hero treatment.

## 5. Cover Layout

The cover should include:

1. Document title and subtitle.
2. Trace tag and version.
3. Status: publication design draft, not final publication candidate.
4. Boundary statement: non-legal technical governance analysis.
5. A compact protocol stack mark or figure-like title block.

Recommended cover structure:

| Zone | Content | Treatment |
|------|---------|-----------|
| Top rule | Jearon Wong / AI Agent Lifecycle Governance | Small caps, charcoal |
| Main field | Global AI Compliance White Paper 2026 | Large title, no card |
| Subtitle | From Model Governance to Agentic Lifecycle Conformance | Medium weight |
| Protocol strip | Evidence -> Authority -> Agent Work -> Accepted Outcome | Thin table/diagram |
| Control block | Version, trace tag, compiled date, status | Small table |

## 6. Heading Rhythm

| Level | Treatment |
|-------|-----------|
| H1 | New page, charcoal or protocol blue, strong spacing before |
| H2 | Dense section gate, 13 pt, rule-like spacing |
| H3 | 11.5 pt, bold, no oversized marketing scale |
| H4 | 10.5 pt, slate, used sparingly |

Chapters should open with a short orientation block, then move quickly into tables, figures, or claims. Avoid long uninterrupted text walls.

## 7. Callout Boxes

Use restrained callout styles:

| Callout Type | Use | Visual Treatment |
|--------------|-----|------------------|
| Evidence Note | Evidence level and source confidence | Slate border, evidence green label |
| Boundary Note | Non-claim / non-certification guardrail | Amber label, white fill |
| Negative Control | What the framework does not prove | Fault red label, very sparse |
| Protocol Object | MRO/ALCS object summary | Charcoal label, grid gray fill |

Do not turn every paragraph into a callout. Use callouts for reader navigation and claim discipline.

## 8. Evidence Badges

Evidence badges should be text-safe and export-stable:

- `L1 Legal / Standards`
- `L2 Official Docs`
- `L3 Independent`
- `L4 Vendor Statement`
- `L5 Analytical Inference`

Badges must not imply certification, regulatory approval, or final product verification.

## 9. Table Design Rules

| Table Type | Rule |
|------------|------|
| Body chapter summary table | Keep columns to 3-5 when possible; use interpretation text below |
| Dense mapping table | Use landscape only as draft fallback; prefer split tables before publication |
| Appendix technical table | Dense layout acceptable if table header repeats and row spacing is stable |
| Procurement table | Must avoid recommendation / endorsement wording |
| Appendix G system table | Qualitative only; no scores, ordered posture, or procurement language |

Table header fill should be pale slate, not bright blue. Very wide tables should be candidates for split-table reflow before publication.

## 10. Figure Style Rules

Figures should use protocol diagrams, not illustration. Preferred structures:

- Lifecycle lanes
- Stack diagrams
- Object topology maps
- Evidence flow chains
- Boundary maps
- Roadmap strips

Figures should avoid gradients, stock imagery, icons without purpose, and crowded node clouds. Use labels that match the paper's vocabulary: authority, evidence, review, acceptance, dispute, remediation, reuse.

## 11. Appendix Treatment

Appendices are technical ledgers. They may remain denser than body chapters, but they must be navigable:

- Start each appendix with a boundary statement.
- Keep table captions visible.
- Use landscape pages for wide evidence tables.
- Consider splitting Appendix G and H-K tables before final publication.
- Keep Appendix G visibly provisional and non-ranking.

## 12. Header and Footer Rules

Footer should include:

- `GAIC-2026 v0.3.2-FRC-R3`
- `Phase 1D-2 Publication Draft`
- Page number if final tooling supports it

Avoid raw local file paths or reconstruction notes in the publication body.

## 13. Citation Style

For the Phase 1D-2 draft, source IDs may remain visible as bracketed markers. Before publication candidate:

- Convert raw source IDs into final citation style or a controlled source note system.
- Keep L5 author inference labels visible.
- Preserve the OpenAI 403 access note in source governance, not as a distracting body claim.
- Ensure appendix-level citations do not over-support body claims.

## 14. PDF Export Rules

Phase 1D-2 export must:

1. Generate DOCX/PDF fresh from `source_r3`.
2. Write to `out/phase_1d2/`.
3. Render PDF pages to PNG for visual QA.
4. Preserve headings, captions, source markers, and boundary language.
5. Avoid using previous DOCX/PDF as an input artifact.
6. Keep publication candidate blocked unless all visual, figure, citation, and table QA gates pass.

