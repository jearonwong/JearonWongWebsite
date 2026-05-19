# WHITEPAPER-R8C Wide-Table Repair Strategy

**Date:** 2026-05-19

## Chosen Approach

Use a PDF-only transformation in `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`.

The renderer reads public HTML into temporary PDF-mode HTML, applies A4 print CSS, and renders PDF from that temporary file. R8C keeps that model and adds wide-table handling before print rendering. Public HTML is not modified and remains governed by the HTML Web Reading Profile.

## Table Treatment

Wide tables are detected in temporary PDF HTML when they have many columns, long headers, or enough size/row volume to create print compression risk. Those tables are converted into semantic stacked row cards for PDF mode. Each row card preserves:

- row title from the first cell
- all original cell content
- header labels as field labels
- table captions and surrounding notes
- text extraction for auditability and search within the PDF

## Why This Approach

- It fixes the PDF A4 Print Profile without forcing HTML into A4 pagination.
- It avoids Chrome print-renderer narrow-column collapse.
- It preserves source text and document semantics.
- It scales to future white papers through the shared renderer/SOP gate.
- It keeps DOCX offboarded from public distribution.

## Risk Controls

- Public HTML hashes are checked and remain unchanged.
- GAIC RCCS-T / RCCS-M / ALCS scores and methodology are checked and remain unchanged.
- AIAAWP AARM and MRO references are checked and remain unchanged.
- PDF text extraction is checked after regeneration.
- Before/after proof images are stored under R8C report directories.
