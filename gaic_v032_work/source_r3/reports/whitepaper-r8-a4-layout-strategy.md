# WHITEPAPER-R8 A4 Layout Strategy

**Date:** 2026-05-18
**Scope:** Strategy for the corrected multi-format publication model and PDF A4 repair.

## Publication Model

R8 adopts one Whitepaper Publication SOP with three rendering profiles:

- HTML Web Reading Profile: responsive, crawlable, anchor-friendly, semantic web edition.
- PDF A4 Print Profile: formal fixed-layout A4 artifact with controlled cover, TOC, page breaks, tables, and metadata.
- DOCX Editable Derivative Profile: editable review/distribution derivative, not visual authority.

The shared canonical layer controls identity, title/subtitle/author, document ID, boundary language, citation metadata, JSON-LD/SEO/GEO readiness discipline, manifest/checksum discipline, semantic mapping, and visual family.

## Implementation Approach

R8 reuses the existing public HTML visual shell as the semantic and visual-family source. The repair script creates temporary PDF-mode HTML only, strips web-only navigation, injects print-specific A4 CSS, renders through headless Chrome, and applies PDF metadata. Public HTML artifacts are not modified.

## Risk Controls

- No A4 fixed-page rules are applied to the public HTML web-reading artifacts.
- No white paper prose, score, methodology, source claim, document ID, or boundary language is rewritten.
- GAIC and AIAAWP use the same PDF A4 print-profile renderer.
- Sealed GAIC candidate PDF remains unchanged.
- Production reverification is required after public PDF artifact changes are deployed.

**Strategy Result:** PASS.
