# WHITEPAPER-R8E-1 HTML Web Reading Regression QA

**Date:** 2026-05-19

## Hash Results

| Artifact | SHA256 | Result |
| --- | --- | --- |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | UNCHANGED |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | UNCHANGED |

## Regression Checks

| Check | Result |
| --- | --- |
| HTML not forced into A4 layout | PASS |
| Public HTML files not modified | PASS |
| Responsive/mobile web-reading profile preserved | PASS by non-mutation; final site build required separately |
| Table layout in web mode unchanged | PASS by non-mutation |
| Metadata/JSON-LD/citation remains present | PASS; route files retain existing citation/JSON-LD structure and updated artifact hashes |
| No DOCX public references introduced | PASS |
| No final/sealed claim introduced | PASS |
| Artifact links are HTML/PDF only | PASS |

## Result

**PASS.** R8E-1 changes are PDF-mode and integrity-surface changes only; public HTML artifacts remain unchanged.
