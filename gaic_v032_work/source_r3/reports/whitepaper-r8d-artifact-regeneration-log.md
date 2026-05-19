# WHITEPAPER-R8D Artifact Regeneration Log

**Date:** 2026-05-19

## Regeneration

Command used:

```bash
python3 gaic_v032_work/source_r3/scripts/render_whitepaper_r8_a4_pdf.py gaic aiaawp
```

## Artifact Hashes

| Artifact | Old hash | New hash | Status |
| --- | --- | --- | --- |
| GAIC public PDF | `bf7f241642719a9ab0214fc6110d0e7018b532b055a3be2bd2f1e12fff1330c8` | `e37654ae3eb4e99aa0a3ed125952ee88a4a3bb8a1b3e3f4362135a0cb87b38b5` | Changed intentionally |
| AIAAWP public PDF | `cc13249074a7cdd79c0a071f29ccfe1ba89dce2103dc61fb09dded7b0304caca` | `1a8289b375ea51d6bdd601d5575f8c4b2f530f7f8f9cb1867b62864766520e71` | Changed intentionally |
| GAIC public HTML | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | `3a60e753a0bbf7887fd23c09f3ffa59450ea22e6b704caf7bb4afcc4330d913e` | Unchanged |
| AIAAWP public HTML | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | `4c728e7f1202afc69622c1fc60a2eb5ee1daaed6e319c2060f01e001c53a82e4` | Unchanged |
| GAIC sealed candidate PDF | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643` | Unchanged |

## Page Counts

| Artifact | Page count |
| --- | ---: |
| GAIC public PDF | 489 |
| AIAAWP public PDF | 116 |

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
