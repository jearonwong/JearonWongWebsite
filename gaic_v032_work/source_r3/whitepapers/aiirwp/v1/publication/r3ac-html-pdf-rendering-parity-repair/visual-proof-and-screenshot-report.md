# Visual Proof And Screenshot Report

## PDF Proof Images

Generated with `pdftoppm -png -r 120`.

- WP1 first page: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3ac-html-pdf-rendering-parity-repair/visual-proof/wp1-first-page-001.png`
- WP2 first page: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3ac-html-pdf-rendering-parity-repair/visual-proof/wp2-first-page-001.png`
- WP3 repaired first page: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3ac-html-pdf-rendering-parity-repair/visual-proof/wp3-first-pages-001.png`
- WP3 repaired page 2 header/footer sample: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3ac-html-pdf-rendering-parity-repair/visual-proof/wp3-first-pages-002.png`
- WP3 repaired table sample page containing `T-14-01`: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3ac-html-pdf-rendering-parity-repair/visual-proof/wp3-table-sample-page-061.png`

## Browser Screenshot Evidence

Local browser smoke testing was run against `http://127.0.0.1:4323/` after the R3AC repair.

- WP3 public route opened successfully.
- WP3 public HTML artifact opened successfully.
- Route checks passed for title, `PUBLIC_RESEARCH_CANDIDATE`, `Read HTML`, `Download PDF`, manifest/checksum access, and 138-page metadata.
- Artifact checks passed for the cover, `Public Research Candidate Status`, publication contents, boundary language, and no-DOCX note.
- Browser console error/warning check returned no relevant issues.

Browser screenshots were emitted in the local QA session. The committed visual proof set for this package is the PDF-rendered PNG evidence listed above.

## Limitation

R3AC visual proof is local repository proof, not production deployment proof. R3AD should repeat public route and artifact verification after deployment or production preview.
