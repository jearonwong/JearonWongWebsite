# AIAAWP-R6B Production URL Availability QA

**Status:** PASS
**Temporary download root:** `/tmp/aiaawp-r6b-live/`

All required AIAAWP production route and artifact URLs returned HTTP 200. Supporting discovery and crosslink endpoints also returned HTTP 200.

| Surface | HTTP | Content type | Size | Redirects | Result |
| --- | ---: | --- | ---: | ---: | --- |
| AIAAWP hub route | 200 | `text/html; charset=utf-8` | 48889 | 0 | PASS |
| AIAAWP HTML artifact | 200 | `text/html; charset=utf-8` | 271443 | 0 | PASS |
| AIAAWP PDF artifact | 200 | `application/pdf` | 1369639 | 0 | PASS |
| AIAAWP DOCX artifact | 200 | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | 105667 | 0 | PASS |
| AIAAWP manifest | 200 | `application/json; charset=utf-8` | 3508 | 0 | PASS |
| AIAAWP checksums | 200 | `application/octet-stream` | 588 | 0 | PASS |
| GAIC main white paper hub | 200 | `text/html; charset=utf-8` | 45963 | 0 | PASS |
| Evidence Registry | 200 | `text/html; charset=utf-8` | 48612 | 0 | PASS |
| Concepts Map | 200 | `text/html; charset=utf-8` | 103613 | 0 | PASS |
| Research index | 200 | `text/html; charset=utf-8` | 26733 | 0 | PASS |
| `llms.txt` | 200 | `text/plain; charset=utf-8` | 25827 | 0 | PASS |
| `sitemap-index.xml` | 200 | `application/xml` | 189 | 0 | PASS |
| `sitemap-0.xml` | 200 | `application/xml` | 8213 | 0 | PASS |
| `robots.txt` | 200 | `text/plain; charset=utf-8` | 78 | 0 | PASS |
| Entity graph JSON | 200 | `application/json; charset=utf-8` | 32838 | 0 | PASS |

## Result

Production deployment is live for the AIAAWP hub route, HTML artifact, PDF artifact, DOCX artifact, manifest, checksums, and supporting technical visibility endpoints. No deployment-pending 404 or stale-route condition was observed.
