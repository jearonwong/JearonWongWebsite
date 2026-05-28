# WP1/WP2/WP3 PDF Style Forensics

| Dimension | WP1 GAIC | WP2 AIAAWP | WP3 before R3AC | WP3 after R3AC |
|---|---|---|---|---|
| Page count | 485 | 118 | 95 intermediate R3AB artifact | 138 |
| Page size | A4 | A4 | A4 | A4 |
| Creator | Whitepaper R8 PDF A4 Print Profile renderer | Whitepaper R8 PDF A4 Print Profile renderer | Missing | Whitepaper R8 PDF A4 Print Profile renderer |
| Producer | Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass | Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass | Headless Chrome no-pdf-header-footer; PyPDF2 metadata pass | Headless Chrome R8 A4 PDF Print Profile; PyPDF2 metadata pass |
| Browser default header/footer | Not present | Not present | Not present, but via one-off export | Not present; R8 custom header/footer policy |
| Custom page identity | R8 header/footer | R8 header/footer | Missing R8 lineage | R8 header/footer with AIIRWP 2026 |
| Cover | Professional publication cover | Professional publication cover | Intermediate cover | R8-rendered professional cover |
| Tables | R8 print table controls | R8 print table controls | One-off print behavior | R8 print table controls |
| Source refs/appendices | Extractable | Extractable | Extractable | Extractable; `[62]`, Appendix H/I detected |

## Page Count Note

R3AC does not force the earlier 95-page count. The 138-page count is accepted because parity is with the canonical R8 renderer and preserved content, not with an intermediate compression target.
