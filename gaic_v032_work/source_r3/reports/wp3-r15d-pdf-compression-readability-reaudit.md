# WP3-R15D PDF Compression and Readability Re-Audit

## Scope

R15D re-audited the R15C repaired PDF profile after R15B rejected the 20-page R15 PDF as too compressed. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Findings

| Item | Result |
| --- | --- |
| R15 rejected profile | 20 A4 pages |
| R15C repaired profile | 27 A4 pages |
| Page size | A4 |
| PDF text extract | 10,018 words |
| Candidate source | 9,553 words |
| R12 accepted body source | 9,568 words |

## Readability Assessment

- The move from 20 to 27 pages resolves the R15B compression blocker.
- Body text density is still compact, but it has acceptable paragraph rhythm for an external serious-whitepaper candidate.
- Margins and line height are materially more comfortable than the rejected profile.
- Appendix/source-note pages are readable and no longer feel crushed.
- Tables remain matrix-like and readable without vertical single-character text.
- The responsibility bridge figure is large enough to read in PDF proof.
- Footer/page identity is present without dominating body content.
- The final page is acceptable for candidate-stage staging preparation.
- The cover seam remains a minor visual note, not a readability blocker.

## Decision

`PDF_ACCEPTED_WITH_NOTES`
