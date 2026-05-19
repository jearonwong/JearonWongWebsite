# WHITEPAPER-R8E Artifact Regeneration Log

**Date:** 2026-05-19

## Regeneration

Command used:

```bash
python3 gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py gaic aiaawp
```

## Artifact Hashes

| Artifact | Old hash | New hash | Status |
| --- | --- | --- | --- |
| GAIC public PDF | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` | `ce06d40fc4cd66e42e4f1144a4a2238753d9ead66313ae2bd04692786301d396` | Changed intentionally |
| AIAAWP public PDF | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` | `a034219994b245bcfbc359e97155557501d4baf814bbe6fe7a39d900f2d6f45c` | Changed intentionally |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | Unchanged |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | Unchanged |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | Unchanged |

## Page Counts and Orientation

| Artifact | Pages | Landscape pages |
| --- | ---: | --- |
| GAIC public PDF | 475 | 2 pages: 193, 196 |
| AIAAWP public PDF | 113 | 0 |

## Integrity Updates

Updated:

- GAIC `checksums.sha256`
- GAIC public PDF metadata repair manifest
- GAIC responsive HTML web-edition note
- GAIC hub hash display / JSON-LD source value
- AIAAWP `manifest.json`
- AIAAWP `checksums.sha256`
- AIAAWP hub hash display / JSON-LD source value

Public DOCX remains absent. Production reverification is required after commit and deployment.
