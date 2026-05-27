# Integration Master Plan

## Purpose

This plan defines how the R3J revised internal body and R3M internal appendices should be integrated in a future R3P wave. R3O does not assemble the integrated draft.

## Integration Decision

R3O recommends that R3P create one internal integrated Markdown draft with:

1. R3J revised body first.
2. Appendix A through Appendix H after Chapter 28.
3. Appendix I still deferred unless the owner explicitly authorizes it.
4. Minimal body-to-appendix cross-references only where they improve navigation without rewriting substantive body prose.
5. No artifact generation, public route change, public CTA, manifest, checksum, PDF, HTML, DOCX, public candidate status, final/sealed status, release-ready status, or public release claim.

## Justification

R3N found that Appendix A-H are complete enough for integration planning, Appendix I deferral does not block planning, and no body repair or appendix repair blocker exists before integration planning. A single internal integrated Markdown draft will allow later QA to review the paper as a reader would encounter it while preserving the current internal-only boundary.

Keeping appendices after Chapter 28 is preferable to leaving them as separate reference material because:

- Appendix A-H directly support the 28-chapter body.
- Appendix H carries forward table/layout risk that later integration QA will need to inspect.
- Appendix F and Appendix G provide source and non-claim discipline that should travel with the internal full draft.
- A single internal Markdown file gives R3P/R3Q a clearer structure to validate before any later artifact-planning decision.

## Appendix Placement

Appendices A-H should appear after Chapter 28 in this order:

1. Appendix A - Agentic Insurability Object Model Reference.
2. Appendix B - Non-Scoring Agentic Insurability Reasoning Model.
3. Appendix C - Underwriting-Facing Evidence Request Structure.
4. Appendix D - Claim Reconstruction and Evidence Gap Register.
5. Appendix E - Coverage Boundary Question Map.
6. Appendix F - Source and Claim Boundary Notes.
7. Appendix G - Final Non-Claim Language Register.
8. Appendix H - Table Inventory and Layout Risk Register.

Appendix I remains deferred. R3P should include a short internal note that Appendix I is deferred only if needed for continuity; it should not draft Appendix I unless separately authorized.

## Body Structure Preservation

R3P must preserve:

- Front Matter.
- Part I through Part VI.
- Chapters 1-28.
- Chapter 28 as prose conclusion.
- Public status: withdrawn / v1.0 rewrite in progress.
- Internal-only draft status.

R3P must not renumber chapters, collapse parts, or turn appendix material into body chapters.

## Table and Source Preservation

R3P must preserve:

- Body table IDs `T-02-01` and `T-04-01` through `T-27-01`.
- No duplicate body table IDs.
- Source refs `[1]` through `[62]`.
- Existing source caveats.
- Rejected v0.2 exclusion as historical boundary context only.

Appendix-local tables should use descriptive headings or appendix-local labels only if necessary. They should not use the body table ID pattern.

## Cross-Reference Decision

R3P may add minimal safe body-to-appendix cross-references where they help readers find reference material. These references should be internal navigation cues, not substantive claims. R3P should avoid cross-references that make appendices look like standards, checklists, certifications, required evidence, coverage paths, or insurer-adopted methods.

## Non-Claim Preservation

Appendices remain reference material only:

- Appendix A is not a policy definition, coverage trigger, standard, certification, proof of insurability, insurer endorsement, regulator approval, or insurer-adopted method.
- Appendix B is not a score, grade, benchmark, rating model, readiness certification, underwriting rule, coverage path, or insurer-adopted method.
- Appendix C is not an underwriting checklist, claim demand, procurement requirement, certification checklist, premium-credit path, binding condition, insurer acceptance statement, or mandatory coverage requirement.
- Appendix D is not claim approval guidance, legal liability proof, settlement guidance, coverage determination, legal causation determination, claim payment support, insurer endorsement, or insurer-adopted method.
- Appendix E is not coverage opinion, legal advice, policy interpretation, exclusion application, sublimit application, claim handling instruction, or insurer-adopted method.
- Appendix F is traceability and caveat discipline only.
- Appendix G is publication guardrail only.
- Appendix H is layout-risk planning only, not artifact generation.

## R3P Recommendation

Proceed to `R3P-FULL-DRAFT-INTEGRATION-DRAFT`.
