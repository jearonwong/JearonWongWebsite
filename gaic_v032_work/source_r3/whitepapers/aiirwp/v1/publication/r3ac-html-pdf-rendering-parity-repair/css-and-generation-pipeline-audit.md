# CSS And Generation Pipeline Audit

## CSS Sources

- WP2 canonical CSS source: inline `<style>` block in `public/research/agentic-ai-auditability-assurance-white-paper-2026/agentic-ai-auditability-assurance-white-paper-2026.html`.
- WP3 R3AC CSS source: imported from WP2 by `gaic_v032_work/source_r3/scripts/repair_wp3_r3ab_publication_style.mjs` with bounded status-language replacements.
- PDF-only CSS source: injected by `gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py`.

## Pipeline Before R3AC

WP3 used an R3AB one-off artifact repair and one-off Chrome no-header/footer PDF export. It improved the artifact but did not prove parity with WP1/WP2 R8 PDF generation.

## Pipeline After R3AC

1. `repair_wp3_r3ab_publication_style.mjs` extracts the current WP3 body from either legacy `<article>` or R3AC sectionized HTML.
2. The script imports WP2 canonical inline CSS.
3. The script builds a WP3 HTML shell with WP2-like cover, status, generated TOC, section classes, and table wrappers.
4. The script calls `render_whitepaper_r8_a4_pdf.py aiirwp`.
5. The script updates public manifest and checksum records.

## Alignment Result

WP3 now shares the WP2 HTML artifact grammar and the WP1/WP2 R8 PDF pipeline. Future WP3 regeneration is repeatable through the script rather than manual one-off Chrome export.
