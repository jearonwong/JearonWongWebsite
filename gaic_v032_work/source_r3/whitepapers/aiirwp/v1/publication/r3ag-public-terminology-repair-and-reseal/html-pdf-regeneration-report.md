# HTML/PDF Regeneration Report

## Regeneration Command

`node gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs`

The script rebuilds WP3 public HTML, calls the shared A4 PDF renderer, regenerates the public PDF, and updates manifest/checksum records.

## Result

- HTML: regenerated.
- PDF: regenerated.
- PDF pages: 138.
- Page size: A4.
- PDF Creator: `Whitepaper A4 PDF Print Profile renderer`.
- PDF Producer: `Headless Chrome whitepaper A4 PDF Print Profile; PyPDF2 metadata pass`.
- Browser default header/footer: absent.

## Rendering Parity

The repaired artifacts retain the professional-shell HTML and shared A4 PDF print profile established during R3AC while removing internal shorthand from public-facing text.
