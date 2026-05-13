# GAIC-R3D-3 Production URL Verification

**Task ID:** GAIC-R3D-3-LIVE-MOBILE-VERIFICATION
**Date:** 2026-05-13
**Status:** PASS

## Production URLs

| URL | HTTP | Content-Type | Result |
|---|---:|---|---|
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/` | 200 | `text/html; charset=utf-8` | PASS |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.html` | 200 | `text/html; charset=utf-8` | PASS |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.pdf` | 200 | `application/pdf` | PASS |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/global-ai-compliance-white-paper-2026.docx` | 200 | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | PASS |
| `https://www.jearonwong.com/research/global-ai-compliance-white-paper-2026/checksums.sha256` | 200 | `application/octet-stream` | PASS |

## Production HTML Signals

- White paper hub links to `global-ai-compliance-white-paper-2026.html`.
- White paper hub still links to PDF and DOCX artifacts.
- White paper hub labels the HTML artifact as the responsive web-reading edition.
- Production HTML route includes `.web-edition-nav`.
- Production HTML route includes `Back to white paper hub`.
- Production HTML route includes `Responsive public web-reading edition`.
- Production checksum file includes responsive HTML checksum:
  `e36a7a209e499c47c422620dce32035f4945c9cffb9b6a549180310c9bcfd42c`.

## Conclusion

The R3D-3 responsive HTML web edition is deployed to production and the GAIC hub points to the responsive HTML route.
