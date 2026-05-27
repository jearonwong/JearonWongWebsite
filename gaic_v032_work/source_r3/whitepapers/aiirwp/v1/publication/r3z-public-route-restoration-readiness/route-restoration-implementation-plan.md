# Route Restoration Implementation Plan

## Scope

This plan gives exact instructions for the next execution wave, `WP3-V1-R3AA-PUBLIC-ROUTE-RESTORATION-EXECUTION`, if R3Z is accepted. R3Z does not execute these instructions and does not modify public files.

## Required Actions For R3AA

### 1. Preflight

R3AA must confirm:

- R3Z verdict is `ACCEPTED_FOR_PUBLIC_ROUTE_RESTORATION_EXECUTION_WITH_NOTES`.
- Owner authorization for public route restoration execution is explicit.
- `git rev-parse HEAD` matches the accepted R3Z baseline.
- Pre-existing untracked `public/social/*` files remain outside scope.
- R3X candidate package exists:
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/artifact-manifest.json`
  - `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/sha256sums.txt`
- R3Y QA verdict remains accepted for public route restoration planning with notes.

### 2. Copy Public Artifacts

Copy only R3Y-accepted artifacts into:

`public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`

Planned copies:

| Internal source | Public target |
|---|---|
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html` |
| `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf` | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf` |
| regenerated public manifest | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json` |
| regenerated public checksum file | `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256` |

Do not copy the source Markdown unless a separate owner authorization explicitly permits public source Markdown distribution. Do not create DOCX.

### 3. Regenerate Public Manifest And Checksums

R3AA should create a public-path manifest rather than copying the internal manifest unchanged.

Public manifest fields should include:

- `wave_id`: `WP3-V1-R3AA-PUBLIC-ROUTE-RESTORATION-EXECUTION`
- `source_basis`: R3X/R3Y accepted internal artifact candidate package.
- `source_basis_commit`: accepted R3Z commit SHA or R3AA starting SHA as recorded in R3AA.
- `public_html_path`
- `public_pdf_path`
- `public_manifest_path`
- `public_checksum_path`
- `generated_at`
- `public_status`: `public-research-candidate`
- `route_status`: `public-route-restored`
- `no_docx_status`: `public DOCX unauthorized`
- `rejected_v0_2_exclusion`: `true`
- `source_refs_range`: `[1]-[62]`
- `table_id_range`: `T-02-01, T-04-01 through T-27-01`
- `appendix_status`: `Appendix A-H included; Appendix I deferred`
- `boundary_status`: not legal advice, not insurance advice, not coverage opinion, not underwriting guidance, not certification, not final, not sealed, not release-ready.
- `checksums`: public artifact SHA256 entries.

`checksums.sha256` must include public HTML, public PDF, and public manifest hashes.

### 4. Update WP3 Route Page

Edit:

`src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`

Required changes:

- Remove withdrawn-only page behavior.
- Change the status banner to a bounded public route restoration status such as:
  `PUBLIC_RESEARCH_CANDIDATE_ROUTE_RESTORED`.
- Remove `noindex={true}` only if R3AA is authorized to make the route indexable.
- Add public artifact links:
  - Read HTML.
  - Download PDF.
  - View manifest.
  - Verify checksums.
- Add citation metadata and visible citation note.
- Keep withdrawn v0.2 note: rejected v0.2 is not current source truth or citation source.
- Keep no-DOCX note.
- Keep non-claim boundary visible in the first page body.
- Add JSON-LD `TechArticle` or equivalent `CreativeWork` metadata with HTML/PDF `MediaObject` encodings.

Required status language:

`Public research candidate route restored; not final, not sealed, not release-ready; public announcement not executed.`

Forbidden status language:

- final publication
- sealed artifact
- release-ready
- certified
- insurer accepted
- coverage-ready
- underwriting-ready
- claim-ready
- standard
- score

### 5. Update Research Index

Edit:

`src/pages/research/index.astro`

Required changes:

- Change the WP3 card from withdrawn/rewrite language to route-restored public research candidate language.
- Add links to:
  - WP3 hub route.
  - WP3 public HTML artifact.
  - WP3 public PDF artifact.
- Preserve no-DOCX language where appropriate.
- Do not describe WP3 as final, sealed, release-ready, insurer accepted, or coverage-ready.

### 6. Update Robots And Sitemap

Edit:

- `public/robots.txt`
- `astro.config.mjs`

Required robots action:

- Preserve or add disallow rules for stale v0.1 and v0.2 WP3 artifact paths.
- Remove disallow rules for current `manifest.json` and `checksums.sha256` only if those files are public in R3AA.
- Do not unblock rejected v0.2 artifact URLs.

Required sitemap action:

- Add the current WP3 HTML artifact URL to `customPages`:

`https://www.jearonwong.com/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`

### 7. Update llms.txt And Entity Graph

Edit:

- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`

Required `llms.txt` action:

- Replace WP3 withdrawn/no-current-artifact language with public research candidate route-restored language.
- Add public HTML, PDF, manifest, and checksum URLs.
- Preserve non-claim boundary language.
- Preserve rejected v0.2 exclusion language.

Required entity graph action:

- Update AIIRWP node/status from withdrawn/no-current-artifact to public research candidate route-restored.
- Add HTML/PDF artifact URLs where graph conventions support them.
- Preserve boundary language: not legal advice, not insurance advice, not coverage opinion, not underwriting standard, not certification, not final, not sealed, not release-ready, not public release announcement.

### 8. Update Governance And R3AA Reports

Update:

- `gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md`
- `gaic_v032_work/source_r3/reports/known-issues.md`
- `gaic_v032_work/source_r3/reports/reconstruction-notes.md`
- `gaic_v032_work/source_r3/whitepapers/registry/current-status.md`
- `gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml`
- R3AA reports under `gaic_v032_work/source_r3/reports/`.

## Optional Actions

- Create a WP3-specific social image only if separately authorized.
- Publish source Markdown only if separately authorized.
- Add additional internal cross-links to concepts only if bounded and not promotional.

## Prohibited Actions

R3AA must not:

- create DOCX;
- modify or promote rejected v0.2 as source truth;
- claim final/sealed/release-ready status;
- claim public release announcement or social posting;
- claim insurer acceptance, coverage readiness, underwriting readiness, claim readiness, certification, score, standard, readiness certification, or regulator approval;
- publish source Markdown without separate authorization;
- stage unrelated `public/social/*` files.

## Verification Commands

R3AA should run:

```sh
npm run typecheck
npm run lint
npm run build
git diff --check
ruby -e "require 'yaml'; YAML.load_file('gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml'); puts 'YAML OK'"
node -e "const fs=require('fs'); JSON.parse(fs.readFileSync('public/entity/jearonwong-mplp-gaic-entity-graph.json','utf8')); console.log('JSON OK')"
shasum -a 256 -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256
```

Additional scans:

- public artifact file existence checks;
- HTML/PDF route link checks;
- no DOCX scan;
- rejected v0.2 regression scan;
- forbidden claim scan;
- boundary wording scan;
- sitemap output check;
- robots stale path check;
- `llms.txt` WP3 entry check;
- entity graph WP3 entry check;
- public route no stale v0.2 link check.

## Rollback Summary

If any public issue is found during R3AA, revert the public route page, research index, public artifacts, robots, sitemap, `llms.txt`, and entity graph changes as one rollback set. Preserve the internal R3X/R3Y/R3Z packages.
