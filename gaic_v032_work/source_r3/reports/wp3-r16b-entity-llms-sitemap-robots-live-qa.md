# WP3-R16B Entity / llms / Sitemap / Robots Live QA

Decision: PASS_WITH_NOTES.

R16B is production reverification only. It is not author release execution, public announcement, external adoption proof, indexing proof, SEO/GEO outcome proof, answer-engine recognition, or Final Seal. No DOCX is introduced.

Entity graph:

- Live entity graph URL returns 200.
- JSON parses.
- Entity graph contains AIIRWP public research candidate.
- Entity graph contains AIO and AIRM terms.
- Entity graph boundary language does not claim public DOCX, insurer acceptance, coverage-ready status, underwriting-ready status, certification, endorsement, legal proof, insurance advice, legal advice, coverage opinion, underwriting standard, claims approval, external adoption, indexing outcome, or Final Seal.

`llms.txt`:

- Live `llms.txt` returns 200.
- Initial R16B live check found AIIRWP route and no-DOCX boundary, but not direct AIIRWP v0.2 HTML/PDF/manifest/checksum links.
- Minimal production blocker repair added direct links to:
  - `AIIRWP-2026-v0.2.html`
  - `AIIRWP-2026-v0.2.pdf`
  - `manifest.json`
  - `checksums.sha256`
- Post-repair live check confirms all four direct links are present.
- Live `llms.txt` says no public DOCX.

Sitemap:

- Live `sitemap-index.xml` returns 200.
- Live `sitemap-0.xml` returns 200.
- Sitemap includes the AIIRWP route.
- Sitemap includes the AIIRWP v0.2 HTML artifact, matching the current GAIC/AIAAWP pattern for standalone HTML artifacts.
- Sitemap excludes DOCX.

Robots:

- Live `robots.txt` returns 200.
- Robots does not block current v0.2 AIIRWP HTML/PDF/manifest/checksum/SVG artifacts.
- Robots still blocks obsolete v0.1 AIIRWP HTML/PDF paths.
- Robots includes sitemap pointer.

Note:

- The `llms.txt` missing-direct-links issue was the only production machine-readable gap found. It was repaired and rechecked before final R16B acceptance.
