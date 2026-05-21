# No-DOCX Public Distribution Plan

## Rule

R15 must not generate DOCX. R16 public staging must not include DOCX.

## SOP Basis

The Whitepaper Series Publication SOP treats DOCX as an internal editable derivative by default. Public distribution requires explicit owner approval for a specific release. The default public whitepaper surface remains HTML plus PDF.

## R15 Requirements

- Do not generate DOCX.
- Do not include DOCX in internal candidate manifest.
- Do not include DOCX in checksums.
- Do not expose DOCX in metadata.

## Future Public Staging Requirements

- Public route exposes HTML + PDF only.
- Metadata, JSON-LD, `llms.txt`, sitemap, manifests, and checksums must not expose DOCX.
- Public DOCX URL should remain absent.

## QA

- Scan for `.docx`.
- Scan for `DOCX`.
- Confirm no DOCX artifact path exists in internal output.
- Confirm no public surface references DOCX.
