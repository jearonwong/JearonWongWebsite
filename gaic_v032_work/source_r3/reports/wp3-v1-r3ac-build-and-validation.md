# WP3-V1-R3AC Build And Validation

## Validation Summary

- `node gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs`: PASS.
- `pdfinfo` WP1/WP2/WP3: PASS; WP3 now shares R8 Creator/Producer lineage and is 138 A4 pages.
- `pdftotext` WP3 preservation scan: PASS for Chapter 28, Appendix H, Appendix I, `T-02-01`, `T-27-01`, and `[62]`.
- `shasum -a 256 -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`: PASS.
- `npm run typecheck`: PASS; existing Astro hints remain limited to `BaseLayout.astro` inline preload attributes.
- `npm run lint`: PASS after removing an unused global from the R3AB/R3AC WP3 repair script.
- `npm run build`: PASS; static site build completed with 95 pages.
- `git diff --check`: PASS.
- YAML parse for `whitepaper-series-registry.yaml`: PASS.
- JSON parse for entity graph and WP3 public manifest: PASS.
- no-DOCX and no-public-source scans for the WP3 public artifact directory: PASS.
- rejected v0.2 regression scan: PASS; remaining references are boundary/exclusion notes and stale-path robot controls.
- forbidden-claim and boundary wording scan: PASS; findings are negative boundary statements, not positive claims.
- public route and research index link checks: PASS for HTML, PDF, manifest, checksum, and page-count references.
- sitemap/customPages, robots stale-path, `llms.txt`, and entity graph WP3 consistency checks: PASS.
- HTML style parity scan: PASS; WP2/WP3 share professional-shell grammar, generated TOC, no sticky artifact nav, `@page`, and `@media print`.
- PDF metadata/page-size/page-count scan: PASS; WP1/WP2/WP3 use the R8 Creator/Producer lineage and A4 page size, with WP3 at 138 pages.
- header/footer scan: PASS; WP3 PDF is regenerated without browser default header/footer and follows the R8 print profile policy.
- local browser smoke test: PASS on `http://127.0.0.1:4323/`; WP3 route and WP3 HTML artifact rendered without relevant console errors or framework overlays.

## Artifact Hashes

- HTML: `f95886154020538d77712fc341411a638c5c1317d5713e6c05a83fe8f8a76129`
- PDF: `c28eb086fc4d74a4b15aa019c7328c9cd31399b120ad2c8954423af96574091e`
- Manifest: `d8a5e8b442ae351f03163c39c9279b809bfde08bf84295bc48502c7bb852c531`
- Checksums file: `b053af9c6a7d460e0693097f1be2b68ca6da8d626ad67c6d8584351460defc2b`

## Browser Smoke Detail

The rendered flow under test was:

`WP3 public route -> artifact CTAs and status panel -> WP3 public HTML artifact first fold`

Local development server:

- Requested command: `npm run dev -- --host 127.0.0.1 --port 4321`
- Effective URL: `http://127.0.0.1:4323/` because ports `4321` and `4322` were already occupied.

Observed route state:

- WP3 route title rendered.
- Status rendered as `PUBLIC_RESEARCH_CANDIDATE`.
- CTA links rendered for `Read HTML`, `Download PDF`, manifest, and checksum access.
- Page count rendered as 138 pages.
- No framework error overlay was visible.
- Browser console error/warning check returned no relevant issues.

Observed artifact state:

- WP3 public HTML artifact rendered with the professional shell.
- First fold included the cover, `Public Research Candidate Status`, publication contents, boundary language, and no-DOCX note.
- No `route restored` / `route-restored` public-facing hero language was present in the built WP3 route or public WP3 HTML artifact.
