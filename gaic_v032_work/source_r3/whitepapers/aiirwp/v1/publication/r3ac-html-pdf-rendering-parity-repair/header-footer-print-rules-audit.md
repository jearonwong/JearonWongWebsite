# Header/Footer And Print Rules Audit

## Browser Header/Footer

WP1 and WP2 do not use Chrome default browser URL/date/page headers or footers. Their PDFs use the shared R8 print profile with custom CSS page margin boxes and PyPDF2 metadata patching.

Pre-R3AC WP3 removed browser defaults through a one-off Chrome export but did not carry the shared R8 Creator/Producer lineage or custom header/footer profile.

R3AC WP3 now uses the shared R8 renderer:

- first page: no header/footer, full cover page;
- body pages: custom top-left short title, top-right `Public PDF edition`, bottom-left short title/document ID, bottom-center `jearonwong.com`, bottom-right page/copyright line;
- page size: A4;
- portrait margin: `18mm 14mm 19mm` injected by R8 renderer;
- landscape table margin support: `15mm 11mm 17mm` via `@page r8-landscape`.

## Print Flags

The repair path uses `/usr/bin/python3 gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py aiirwp`, which invokes headless Chrome through the established R8 A4 rendering profile and then patches metadata.

## Header/Footer Evidence

`pdftotext -f 1 -l 2` confirms page 2 includes `AIIRWP 2026`, `Public PDF edition`, `jearonwong.com`, and page/copyright text. `pdfinfo` confirms Creator and Producer match WP1/WP2 R8 lineage.
