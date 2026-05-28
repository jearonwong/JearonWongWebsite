# R3AC Continuity Notes

**Recommended next wave:** WP3-V1-R3AC-HTML-PDF-RENDERING-PARITY-FORENSICS-AND-REPAIR

R3AB is not accepted for public route post-restoration QA. Owner review corrected the result: technical build and route restoration passed, publication page alignment was partial, HTML artifact style alignment failed, PDF artifact style alignment failed, and release acceptance failed.

R3AC must perform rendering parity forensics first, identify the canonical WP1/WP2 artifact baseline, repair WP3 HTML/PDF generation to that baseline, and refresh manifest/checksum records before any post-restoration QA wave.

## R3AC Must Verify

- WP1/WP2/WP3 public HTML artifacts and PDFs are located by path, not assumed.
- Canonical HTML/PDF baseline is selected from accepted WP1/WP2 artifact evidence.
- WP3 HTML CSS, shell, cover, status, TOC, table, appendix, and print CSS differences are compared and repaired.
- WP3 PDF page size, margins, header/footer behavior, metadata, page count, cover/status/table rendering, and print parameters are compared and repaired.
- WP3 public manifest and checksum validate after repair.
- Source refs `[1]-[62]`, table IDs, Appendix A-H, and Appendix I deferred note remain detectable.
- Metadata/JSON-LD, sitemap, `llms.txt`, entity graph, and research index remain consistent.
- Boundary language remains visible and non-claiming.

## R3AC Must Not

- Claim final/sealed/release-ready status.
- Create DOCX.
- Publish source Markdown.
- Create social announcement.
- Claim certification, insurer acceptance, coverage-ready, underwriting-ready, claim-ready, score, standard, readiness certification, regulator approval, or public announcement execution.
