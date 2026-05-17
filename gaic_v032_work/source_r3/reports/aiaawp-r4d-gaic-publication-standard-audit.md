# AIAAWP R4D GAIC Publication Standard Audit

**Status:** PASS
**Source standard:** GAIC main white paper publication system.

## Reusable GAIC Checklist

| Area | GAIC rule extracted | AIAAWP requirement |
|---|---|---|
| Document identity | Stable title, subtitle, document ID, version, date, author, and boundary block | Use `AIAAWP-2026-v0.1-R4-CANDIDATE`; no public-facing WP2 identity |
| Visual shell | Architectural, evidence-led, restrained JearonWong.com white paper style | Use dark technical cover, registry metadata, thesis strip, compact status block |
| Typography | Inter/system body, Outfit-like heading fallback, monospace IDs, no negative letter spacing | Apply the same hierarchy and no viewport font scaling dependency |
| Layout | Centered publication shell, A4 print target, chapter/appendix page breaks | HTML/PDF visual authority; DOCX editable derivative |
| Tables | Avoid single-letter vertical table text; use semantic row cards for dense/wide tables | Convert dense AIAAWP tables into row-card structures for HTML/PDF/DOCX |
| HTML | Responsive reading layout, active TOC, scroll or reflow for wide content, no blocking external assets | Generate standalone internal HTML with noindex and no public canonical |
| PDF | Generated from publication-quality HTML; metadata set; title page and TOC visible | Generate with Chrome from HTML and patch PDF metadata |
| DOCX | Editable derivative from same source; metadata and styles present | Generate structured DOCX with title page, styles, row-card tables, and metadata |
| Metadata / SEO / GEO | Stable identifiers, citation metadata, JSON-LD plan, future public discoverability wiring | Keep noindex for internal artifacts; defer public canonical, sitemap, Evidence Registry, `llms.txt`, and entity graph |
| Integrity | Manifest, checksums, sealed/public distinction, candidate/final distinction | Update AIAAWP manifest/checksums and mark internal-only status |
| Boundary | Design reinforces non-legal, non-certifying, non-ranking boundaries | Preserve non-public, non-final, non-sealed, non-live status |

## GAIC Standard Gaps

GAIC's DOCX is explicitly an editable derivative and not the visual authority. AIAAWP inherits that model: HTML/PDF are used for visual review, while DOCX is checked for editability, metadata, extractable text, headings, and table readability.
