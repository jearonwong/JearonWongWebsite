# WP2-R4 Integrity Notes

**Status:** Internal R4 candidate source package integrity notes.  
**Date:** May 17, 2026

## Package Integrity

- Candidate directory created under `gaic_v032_work/source_r3/wp2_r4_publication_candidate/`.
- Candidate source assembled from the R3 QA-reviewed internal draft.
- R2/R3 internal chapter status lines and R3 QA note sections were removed from the assembled candidate source.
- Source register and citation map were normalized into R4 package files.
- Metadata and JSON-LD plans were created but not wired into the public site.
- Candidate HTML/PDF/DOCX artifacts were intentionally deferred.
- `checksums.sha256` records generated package files except itself to avoid recursive checksum instability.

## Source Integrity

- Source baseline remains WP2-R0/R1/R2/R3 plus GAIC source truth.
- No broad new source research was added.
- Big Four sources remain market context only.
- Professional audit sources remain terminology, context, and boundary support.
- Privacy and legal sources remain context only, not legal advice.
- GAIC remains the source truth for MRO names, ALCS/RCCS-M context, Validation Lab boundary, and companion-paper boundary.

## Artifact Integrity

- WP2-R4B generated internal candidate HTML, PDF, and DOCX artifacts under `out/`.
- The generated artifacts are internal candidate artifacts only.
- No public WP2 route or page was created.
- No public WP2 HTML/PDF/DOCX artifact was created or copied to `public/`.
- No existing GAIC public content or sealed artifact was modified by the package.
- Candidate HTML/PDF/DOCX hashes are recorded in `manifest.json` and `checksums.sha256`.

## R4B Integrity Notes

- HTML was generated as standalone internal candidate HTML with noindex/no-follow metadata.
- PDF was generated from HTML and PDF metadata was normalized for title, author, subject, and keywords.
- DOCX was generated through a LibreOffice ODT bridge with a DOCX-specific landscape conversion stylesheet so wide tables remain readable in the review derivative.
- DOCX render QA was performed with the Documents workflow; representative title, body, table, appendix, source-register, and citation-map pages were sampled before the temporary render images were removed from the package.
- Playwright browser QA was attempted, but the local Chromium binary was unavailable; static HTML structure and extracted artifact text were used for HTML readability QA.

## Readiness Decision

R4B generated the internal candidate artifact package and is ready for WP2 final candidate QA, subject to final source/citation/boundary review and author review. This is not a publication, final seal, public release, or live deployment.
