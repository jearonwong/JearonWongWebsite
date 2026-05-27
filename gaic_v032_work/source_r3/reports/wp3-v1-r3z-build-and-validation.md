# WP3-V1-R3Z Build And Validation

## Scope

Build and validation report for WP3-V1-R3Z public route restoration readiness and plan.

R3Z creates planning/readiness documents and governance updates only. It does not execute route restoration or create public artifacts.

## Commands Run

| Check | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS_WITH_HINTS | 0 errors; existing `src/layouts/BaseLayout.astro` hints for inline `onload`/`rel`. |
| `npm run lint` | PASS | ESLint completed without errors. |
| `npm run build` | PASS | Astro build completed; 95 pages built. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | `whitepaper-series-registry.yaml` parsed successfully. |
| JSON parse | PASS | Entity graph JSON and R3X artifact manifest parsed successfully. |
| no-DOCX scan | PASS | No DOCX files found in R3Z package or WP3 public artifact directory. |
| active v0.2 promotion regression scan | PASS | v0.2 remains withdrawn/rejected historical context; no active promotion introduced. |
| forbidden-claim scan | PASS_WITH_CONTEXTUAL_HITS | Hits are negative controls, prohibited wording, or future gates. |
| boundary / forbidden wording scan | PASS_WITH_CONTEXTUAL_HITS | R3Z remains readiness/planning only. |
| public route unchanged scan | PASS | No diff under `src/pages`, `public/research`, `public/robots.txt`, `public/llms.txt`, `public/entity`, or `astro.config.mjs`. |
| no public/research artifact scan | PASS | WP3 public artifact directory remains empty. |
| current public route audit | PASS | Route remains noindex withdrawn / v1.0 rewrite status page. |
| metadata planning completeness scan | PASS | Page title, description, OG/Twitter, canonical, robots decision, JSON-LD, entity graph, `llms.txt`, sitemap, and robots plans present. |
| artifact candidate existence scan | PASS | R3X Markdown, HTML, PDF, manifest, and checksum files exist. |
| manifest/checksum validation | PASS | `shasum -a 256 -c` passed for R3X candidate artifacts. |
| R3Z structure scan | PASS | All 11 required R3Z readiness files exist. |

## Public Route Unchanged Evidence

`git diff --name-only -- src/pages public/research public/robots.txt public/llms.txt public/entity astro.config.mjs` returned no changed files.

## WP3 Public Artifact Directory Evidence

`find public/research/agentic-ai-insurability-risk-transfer-white-paper-2026 -maxdepth 1 -type f -print` returned no files.

## Checksum Evidence

R3X candidate checksum validation passed for:

- `AIIRWP-v1.0-publication-candidate-source.md`
- `AIIRWP-v1.0-internal-candidate.html`
- `AIIRWP-v1.0-internal-candidate.pdf`
- `artifact-manifest.json`

## Final Validation Result

PASS_WITH_CONTEXTUAL_HITS.

The contextual hits are expected because R3Z explicitly documents non-claim boundaries and prohibited public status language. No public route change, public artifact creation, DOCX, final/sealed status, release-ready status, public release, or public announcement was introduced.
