# Body-to-Artifact Parity Plan

## Purpose

R15 must verify candidate HTML/PDF parity against the accepted R12 body source.

## Required Parity Items

- Title.
- Subtitle.
- Document ID.
- Status boundary.
- Chapters 0-10.
- Appendices A-D.
- 12 source-note families.
- Source markers.
- 5 scenario families.
- AIO groups.
- AIRM L0-L5.
- Chapter 4 responsibility bridge rendered figure.
- No raw Mermaid in final candidate artifacts.
- No raw source-marker tags.
- No internal QA.
- No public release/final/seal claim.
- No insurance/legal/coverage/underwriting/claims overclaim.

## R15 QA Methods

- HTML DOM content checks.
- PDF text extraction.
- Body word count sanity check.
- Appendix presence check.
- Source-note family count check.
- Marker count sanity check.
- Manual spot checks for Chapters 0, 4, 5, 8, 9, and Appendix A.
- Figure caption and alt-text check.

## Acceptance Rule

Candidate artifacts fail if they omit accepted body sections, reintroduce source-pack residue, expose raw Mermaid, lose source-note support, or alter boundary semantics.
