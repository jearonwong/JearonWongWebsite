# WP3-V1-R3D Build and Validation

## Scope

Build and validation report for WP3-V1-R3D Part IV Body Draft.

This wave creates internal draft/source files only. It does not create public files, public artifacts, or DOCX files.

## Commands Run

| Check | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS | 0 errors; existing `src/layouts/BaseLayout.astro` inline `onload` hints remain. |
| `npm run lint` | PASS | ESLint completed with no errors. |
| `npm run build` | PASS | Astro build completed; 95 pages generated. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | Parsed `whitepaper-series-registry.yaml`. |
| JSON parse | PASS | Parsed `public/entity/jearonwong-mplp-gaic-entity-graph.json`. |
| no-DOCX scan | PASS | No DOCX files found under `public/research` or `dist/research`. |
| active v0.2 promotion regression scan | PASS | v0.2 references remain withdrawn/noindex/robots-disallow context only; no active AIIRWP artifact promotion found. |
| forbidden-claim scan | PASS WITH CONTEXTUAL HITS | Hits are negative boundary statements, forbidden-word checklists, source-note forbidden wording, or historical governance context. No positive restricted R3D claim found. |

## Public Artifact Validation

- WP3 public route must remain withdrawn and noindex.
- No WP3 public artifact should be restored.
- No DOCX should be introduced.
- GAIC public artifacts should remain unaffected.
- AIAAWP public artifacts should remain unaffected.
- Pre-existing untracked `public/social/*` files must remain unstaged.

Validation findings:

- `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro` still sets `noindex={true}`.
- The built AIIRWP route remains a withdrawn / v1.0 rewrite status page.
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` contains no active public files.
- `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/` contains only the built status `index.html`.
- Pre-existing untracked `public/social/*` files remain outside the R3D staging scope.

## Final Validation Result

PASS.
