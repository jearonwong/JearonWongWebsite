# WP3-V1-R3AB Build and Validation

## Scope

Validate R3AB publication-system alignment, artifact integrity, and static site build health.

## Expected Commands

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- `git diff --check`
- YAML parse
- JSON parse
- public manifest parse
- checksum validation
- no-DOCX scan
- rejected v0.2 regression scan
- forbidden-claim scan
- boundary wording scan
- public route link checks
- research index consistency check
- metadata/JSON-LD check
- `llms.txt` WP1/WP2/WP3 consistency check
- entity graph parse/check
- no final/sealed/release-ready positive-claim scan
- no social announcement scan

## Results

| Validation | Result | Notes |
| --- | --- | --- |
| `npm run typecheck` | PASS | 0 errors; existing BaseLayout inline handler hints only. |
| `npm run lint` | PASS | ESLint completed without findings. |
| `npm run build` | PASS | Static build completed; 95 pages built; sitemap generated. |
| `git diff --check` | PASS | No whitespace errors. |
| YAML parse | PASS | `whitepaper-series-registry.yaml` parses. |
| JSON parse | PASS | Entity graph and WP1/WP2/WP3 public manifests parse. |
| Public manifest parse | PASS | WP3 public manifest parses after R3AB refresh. |
| Checksum validation | PASS | WP3 HTML, PDF, and manifest match `checksums.sha256`. |
| PDF page count | PASS | WP3 public PDF remains 117 A4 pages. |
| no-DOCX scan | PASS | No WP3 public `.docx`; no source Markdown copied to WP3 public route. |
| rejected v0.2 regression scan | PASS | v0.2 remains rejected and excluded as current source truth. |
| forbidden positive-claim scan | PASS | Boundary-language hits are contextual negative controls only. |
| public route link checks | PASS | Research page, three hubs, and WP3 HTML/PDF/manifest/checksum returned HTTP 200 locally. |
| research index consistency check | PASS | Cards use shared publication registry and consistent CTA order. |
| metadata/JSON-LD check | PASS | Route JSON-LD blocks parse for WP1/WP2/WP3. |
| `llms.txt` consistency check | PASS | WP1/WP2/WP3 entries and no-DOCX language present. |
| entity graph parse/check | PASS | WP1/WP2/WP3 and series entity nodes present; WP3 artifact URLs present. |
| no final/sealed/release-ready positive-claim scan | PASS | Only negative-control or future-gate language remains. |
| no social announcement scan | PASS | No R3AB social announcement created. |
| Browser rendered QA | PASS with note | Desktop Browser QA passed for `/research/`, all three hubs, and WP3 HTML artifact interaction; Browser runtime did not expose viewport resize, so mobile viewport remains for R3AC. |

## Browser QA Flow

The flow under test was:

`/research/` -> WP1/WP2/WP3 white paper hubs -> WP3 HTML artifact link -> expected unified publication pattern and bounded public research candidate language.

Observed:

- research index listed WP1/WP2/WP3 and all shared CTAs;
- WP1/WP2/WP3 hubs exposed shared status panel, CTAs, integrity block, no-DOCX language, and boundary section;
- WP3 hub used `AIIRWP-2026-v1.0-PUBLIC-RESEARCH-CANDIDATE`;
- WP3 hub no longer exposed public-facing `R3AA-PUBLIC-ROUTE` or `route restored` language;
- WP3 HTML artifact opened from the hub and retained public research candidate/no-DOCX/non-claim language;
- Browser console errors/warnings were empty for checked pages.
