# GAIC-R3K-0C Baseline PDF Metadata

## Baseline Public PDF Metadata

Tooling available:

- `pdfinfo`
- `pdftoppm`
- Python `fitz` / PyMuPDF
- Python `PyPDF2`

Unavailable:

- `exiftool`
- `qpdf`

## Baseline Metadata

| Field | Value |
|---|---|
| Title | `Global AI Compliance White Paper 2026 - GACWP-2026-v0.3.2-FRC-R3` |
| Author | Missing |
| Subject | Missing |
| Keywords | Missing |
| Creator | Headless Chrome user agent |
| Producer | `Skia/PDF m148` |
| CreationDate | `Tue May 12 18:15:29 2026 CST` |
| ModDate | `Tue May 12 18:15:29 2026 CST` |
| Tagged PDF | Yes |
| Page count | 425 |
| File size | 10,724,946 bytes |
| PDF version | 1.4 |

## Baseline Render Capture

Rendered sampled pages with `pdftoppm -png -r 120` before metadata mutation.

Sample pages:

- 1: cover
- 2: front matter / notice
- 3: TOC-adjacent early page
- 50: MRO / lifecycle object area sample
- 120: score/table-heavy middle sample
- 200: appendix/table-heavy sample
- 300: later appendix/source area sample
- 425: final page sample

Baseline render output directory:

`gaic_v032_work/source_r3/reports/r3k0c_pdf_render/baseline/`

Renderer warnings:

- `pdftoppm` emitted existing Type 3 glyph bounding-box warnings on some pages. This did not block rendering and was present during baseline/post render operations.

