# Full-Body QA Plan

## Purpose

This plan defines QA gates for R3H full-body assembly. It does not perform the R3H assembly.

## Required QA Gates

| Gate | What to verify | Pass condition |
|---|---|---|
| Structural TOC gate | Front Matter, Parts I-VI, Chapters 1-28, and conclusion are present in order. | No missing or duplicate chapters; no wave IDs in body headings. |
| Table numbering gate | T-02-01 and T-04-01 through T-27-01 appear once each. | No duplicate or missing accepted table IDs; Chapter 28 has no required table. |
| Repeated language/rhythm gate | Boundary, WP1/WP2, evidence, and object-list repetition is controlled. | First full definitions preserved; later repetition compressed without overclaim. |
| Source citation continuity gate | Source notes and caveats survive assembly. | No raw body markers, unsupported quotes, fake citations, or unsupported market consensus claims. |
| WP1/WP2 bridge boundary gate | WP1/WP2 remain analytical foundations only. | No insurance proof, underwriting standard, coverage proof, claim approval, or insurer-binding implication. |
| Insurance claim-risk gate | Insurance lines, claims, and coverage boundaries remain questions and evidence structures. | No coverage opinion, claim approval guidance, legal liability determination, or claim-ready claim. |
| Pricing/actuarial overclaim gate | Chapter 16 and related variables remain non-pricing. | No formula, score-to-price mapping, rating, surcharge, discount, premium recommendation, or actuarial guidance. |
| Coverage-opinion overclaim gate | Coverage-boundary chapters avoid policy interpretation. | Policy wording and claim handling remain external. |
| Claim-approval overclaim gate | Reconstruction and evidence packs do not become claim approval guidance. | Incident evidence supports reconstruction only. |
| Public artifact regression gate | No public route or artifact is touched. | No new public artifact, route update, CTA, manifest, checksum, staging, release package, or sitemap/llms promotion. |
| No-DOCX gate | No public DOCX is created. | No DOCX under `public/research` or `dist/research`; no DOCX distribution claim. |
| Rejected-v0.2 regression gate | v0.2 is not used as body truth. | v0.2 appears only in withdrawn/historical/governance context. |
| Source caveat gate | Source gaps remain visible. | Exact policy wording, exclusion/sublimit, claim documentation, and underwriting questionnaire gaps are not erased. |
| Final conclusion force gate | Conclusion is strong but non-claiming. | The ending returns to bounded lifecycle evidence and reviewability without claiming release, final status, coverage, or acceptance. |

## Validation Commands for R3H

R3H should run:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- YAML parse for `whitepaper-series-registry.yaml`
- JSON parse for `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- no-DOCX scan under `public/research` and `dist/research`
- active v0.2 promotion regression scan
- forbidden-claim scan
- boundary wording scan

## R3H Report Expectations

R3H should create:

- preflight report;
- boundary QA report;
- build and validation report;
- final QA report;
- assembly change log;
- source-note consolidation report if source notes are consolidated;
- TOC/table reconciliation report if any reconciliation edits are made.

## Failure Handling

If a QA gate fails, R3H should stop before artifact planning. R3H may repair assembly-level continuity and wording within the internal Markdown draft, but it must not generate public artifacts or alter public route status.
