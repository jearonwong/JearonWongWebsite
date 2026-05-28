# PDF Rendering Parity QA Report

## PDF

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`

## Metadata And Layout

`pdfinfo` confirms:

- Title: `Agentic AI Insurability & Risk Transfer White Paper 2026`
- Creator: `Whitepaper R8 PDF A4 Print Profile renderer`
- Producer: `Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass`
- Pages: `138`
- Page size: `594.96 x 841.92 pts (A4)`

WP1 and WP2 public PDFs share the same R8 Creator/Producer lineage and A4 page size.

## Text Preservation

`pdftotext` confirms extractable:

- Chapter 28
- Appendix H
- Appendix I deferred note
- `T-02-01`
- `T-27-01`
- `[62]`
- no-DOCX and non-final/non-sealed/non-release-ready boundary language

## Header/Footer

R3AD found no Chrome default URL/date/page header/footer regression. WP3 remains on the R8 PDF profile.

## Visual Proof

Generated with `pdftoppm -png -r 120`:

- `visual-proof/wp3-pdf-first-page-001.png`
- `visual-proof/wp3-pdf-body-page-002.png`
- `visual-proof/wp3-pdf-table-page-061.png`

`pdftoppm` emitted Type 3 glyph bounding box warnings while still producing the PNGs. This is recorded as a non-blocking renderer warning.

## Repair

No PDF repair or regeneration was required in R3AD.

## Verdict

PDF rendering parity QA passes with the non-blocking `pdftoppm` warning noted.
