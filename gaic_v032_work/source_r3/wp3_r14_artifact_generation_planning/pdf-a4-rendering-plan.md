# PDF A4 Rendering Plan

## Purpose

Plan the internal candidate A4 PDF rendering for R15. Do not generate PDF in R14.

## Shell Reuse

R15 should reuse the GAIC/AIAAWP A4 PDF profile:

- Full-page A4 cover optimized for PDF.
- Controlled title/subtitle/author/document identity.
- Clear status/boundary block.
- Readable TOC.
- Intentional chapter and appendix starts where semantically appropriate.
- Restrained header/footer with author, site, document ID, page number, and copyright as appropriate.
- No Chrome default URL/date header/footer.

## Layout Rules

- No cover white-border issue.
- No accidental cover split.
- Footer/header must not dominate content.
- Tables must not collapse into vertical single-character text.
- Dense high-comparison tables may use landscape A4, split matrix, or landscape split matrix.
- High-comparison tables must not be converted into low-comparison row cards.
- Source notes and appendices must remain readable.
- No DOCX generation.

## R15 PDF QA Plan

- `pdfinfo` page count.
- PDF metadata check.
- `pdftotext` extraction.
- Representative page screenshots.
- Cover proof.
- TOC proof.
- Chapter-start proof.
- Table-heavy page proof.
- Source-note proof.
- Appendix proof.
- Final-page proof.
- Header/footer proof.
