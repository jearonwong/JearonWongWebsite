# WP3-R9 Build and Validation

## Validation Plan

Run:

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- JSON parse checks for modified JSON files

Validate:

- GAIC remains live/buildable.
- AIAAWP remains live/buildable.
- AIIRWP is no longer promoted as a release-quality artifact.
- No public DOCX introduced.
- No unrelated `public/social/*` staged.
- Sitemap excludes AIIRWP artifact-level promotion and the editorial hold route.
- Robots disallows old AIIRWP HTML/PDF/manifest/checksum artifact URLs without blocking the editorial review route.
- Entity graph JSON parses.
- `llms.txt` records AIIRWP as under editorial review and removes direct AIIRWP artifact promotion.

## Results

| Check | Result | Notes |
| --- | --- | --- |
| `npm run typecheck` | PASS | 0 errors. Existing BaseLayout inline preload hints reported; not R9 blockers. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | 93 static pages built; sitemap generated. |
| `git diff --check` | PASS | No whitespace errors. |
| Entity graph JSON parse | PASS | `public/entity/jearonwong-mplp-gaic-entity-graph.json` and built copy parse cleanly. |
| No AIIRWP DOCX | PASS | No `.docx` under AIIRWP public or build paths. |
| Sitemap promotion | PASS | Built sitemap excludes AIIRWP route and artifact-level AIIRWP entries. |
| Robots artifact hold | PASS | Built robots disallows old AIIRWP HTML/PDF/manifest/checksum artifact URLs only. |
| `llms.txt` | PASS | AIIRWP recorded as under editorial review; direct AIIRWP HTML/PDF/manifest/checksum promotion removed. |
| AIIRWP route build output | PASS | Route exists as editorial review placeholder with `noindex, follow`. |
| Homepage build output | PASS | AIIRWP appears as `Under editorial review` / `Publication revision pending`; PDF CTA is disabled. |
| Research index build output | PASS | AIIRWP appears as editorial review status; no AIIRWP HTML/PDF artifact links. |
| GAIC route build | PASS | GAIC route still builds. |
| AIAAWP route build | PASS | AIAAWP route still builds. |
| Evidence / Concepts / Definitions / Governance / Playbooks build | PASS | All relevant semantic pages build. |
| No unrelated public/social staged | PASS | Existing untracked `public/social/*` files remain unstaged and untouched. |

## Browser Validation

Local preview: `http://127.0.0.1:4322/`

| Page | Result |
| --- | --- |
| Homepage | Shows AIIRWP as under editorial review; only `View editorial status` link for AIIRWP; no AIIRWP artifact CTA; no body-level horizontal overflow; no console errors. |
| Research index | Shows AIIRWP under editorial review / revision pending; no AIIRWP artifact CTA; no body-level horizontal overflow; no console errors. |
| AIIRWP route | Shows `UNDER EDITORIAL REVIEW`; robots meta is `noindex, follow`; no AIIRWP HTML/PDF CTA; no body-level horizontal overflow; no console errors. |

## Result

PASS. R9 build and validation pass.
