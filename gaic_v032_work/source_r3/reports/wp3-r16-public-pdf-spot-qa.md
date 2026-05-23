# WP3-R16 Public PDF Spot QA

Status: PASS_WITH_NOTES.

R16 public PDF spot QA validates the staged public PDF only. It is not production verification, public release execution, or Final Seal.

PDF:

- Path: `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/AIIRWP-2026-v0.2.pdf`
- `pdfinfo` page count: 27.
- Page size: A4, `594.96 x 841.92 pts`.
- Title: `Agentic AI Insurability & Risk Transfer White Paper 2026 - Public Research Candidate`.
- Author: `Jearon Wong`.
- Creator: `AIIRWP public staging renderer`.
- PDF text extraction: PASS, approximately 10,016 extracted words.

Proof images:

- `pdf/pdf-cover.png`
- `pdf/pdf-toc.png`
- `pdf/pdf-chapter-4-figure.png`
- `pdf/pdf-chapter-5-table.png`
- `pdf/pdf-appendix-a-source-notes.png`
- `pdf/pdf-appendix-b-aio-reference.png`
- `pdf/pdf-appendix-c-airm-reference.png`
- `pdf/pdf-appendix-d-boundary.png`
- `pdf/pdf-final-page.png`
- `pdf/pdfinfo.txt`
- `pdf/pdf-text-extract.txt`

Spot results:

- Cover has no bottom white-band blocker.
- TOC readable.
- Chapter 4 figure proof captured.
- Chapter 5 table remains matrix-readable; no vertical single-character table text.
- Appendix A source-note index is readable and not over-compressed.
- Appendices B/C/D are extractable and proofed.
- Footer/page identity is present.
- No Chrome default URL/date/header/footer.
- No DOCX.
- No public release/final/seal/production-verified positive claim.

Note:

- `pdftoppm` emitted Type 3 glyph bounding-box warnings while writing proof images, but all proof PNGs were created and visually readable. This is recorded as non-blocking for staging and should be rechecked in production proof if the renderer changes.

