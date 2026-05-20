# WP3-R7 Public Artifact and Route QA

Internal only. No public release claim. No final seal. No production verification.

## Route QA

- Route title is correct.
- Canonical route is correct.
- Route JSON-LD parsed cleanly.
- Route links to HTML, PDF, manifest, and checksums.
- No public DOCX link exists.
- No console errors or warnings were observed.
- No body-level horizontal overflow was observed at `375`, `768`, or `1440`.

## Direct HTML Artifact QA

Checked at `375`, `768`, and `1440` widths:

- Title: `Agentic AI Insurability & Risk Transfer White Paper 2026 | AIIRWP-2026-v0.1`
- `bodyScrollWidth == innerWidth`
- `tableCount: 24`
- `sourceMarkerCount: 343`
- `synthesisMarkerCount: 23`
- `hasWp3: false`

## PDF QA

- File exists and opens locally.
- `pdfinfo` reports `59` pages.
- Metadata title, subtitle/subject, author, and A4 page size are correct.
- `pdftotext` shows the expected title, subtitle, candidate ID, boundary language, and contents.

## Notes

- Browser screenshot capture was flaky in this runtime, so the QA relied on DOM, viewport, text-extraction, and build-output checks instead of image files.
