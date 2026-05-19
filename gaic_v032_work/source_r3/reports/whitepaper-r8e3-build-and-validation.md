# WHITEPAPER-R8E-3 Build and Validation

## Commands

| Command | Result |
|---|---|
| `npm run typecheck` | PASS, 0 errors; existing Astro hints only in `BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS, 91 pages built |
| `shasum -a 256 -c` for GAIC checksums | PASS |
| `shasum -a 256 -c` for AIAAWP checksums | PASS |
| JSON parse for manifests/entity graph | PASS |
| PDF page count extraction | PASS, GAIC `485`, AIAAWP `118` |

## Validation

| Check | Result |
|---|---|
| Site builds | PASS |
| Homepage builds | PASS |
| GAIC/AIAAWP hubs build | PASS |
| No public PDF regenerated | PASS |
| No standalone public HTML artifact changed | PASS |
| No public DOCX reintroduced | PASS |
| No GAIC scores/methodology changed | PASS |
| No AIAAWP content changed | PASS |
| Public checksums pass | PASS |
| Manifests parse | PASS |
| JSON-LD route build passes | PASS |
| No unrelated `public/social/*` staged | PASS pending final staging check |

## Result

Build and validation passed. Production reverification remains required after deployment.
