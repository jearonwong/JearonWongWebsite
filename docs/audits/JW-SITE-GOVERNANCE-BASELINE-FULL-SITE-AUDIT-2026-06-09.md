# JW-SITE-GOVERNANCE-BASELINE-FULL-SITE-AUDIT-2026-06-09

**Date:** 2026-06-09
**Branch:** `main`
**HEAD:** `550289c140a5185e5adb3fcec54dcbaec139178a`
**Origin main:** `550289c140a5185e5adb3fcec54dcbaec139178a`
**Scope:** Full-site semantic consistency, publication-surface consistency, machine-readable surfaces, and UI/UX consistency under the new governance baseline.
**Verdict:** `PASS_WITH_BROWSER_FALLBACK_CODE_FINDINGS_CLOSED`

## Governance Baseline Used

This audit used the current repository governance baseline:

- `AGENTS.md`
- `.agents/skills/site-semantic-brand-governance/SKILL.md`
- `.agents/skills/site-publication-surface-governance/SKILL.md`
- `.agents/skills/article-publication-governance/SKILL.md`
- `docs/governance/ARTICLE_PUBLICATION_GOVERNANCE_BASELINE.md`
- `src/data/siteGovernance.ts`
- `src/data/site.ts`
- `src/data/definitions.ts`
- `src/data/whitepaperPublications.ts`

The mirrored skill check passed:

```sh
diff -qr .agents/skills .codex/skills
```

No differences were reported.

## Required Pre-Audit Reports

```yaml
repo_truth:
  branch: main
  local_head: 550289c140a5185e5adb3fcec54dcbaec139178a
  origin_main_head: 550289c140a5185e5adb3fcec54dcbaec139178a
  dirty_status:
    governance_wave:
      - AGENTS.md
      - Agent.md
      - src/data/siteGovernance.ts
      - .agents/skills/site-semantic-brand-governance/
      - .agents/skills/site-publication-surface-governance/
      - .codex/skills/article-publication-governance/
      - .codex/skills/site-semantic-brand-governance/
      - .codex/skills/site-publication-surface-governance/
    pre_existing_ui_style_changes:
      - src/components/ProjectProofCard.astro
      - src/components/RegistryPageHero.astro
      - src/components/SiteFooter.astro
      - src/components/SiteHeader.astro
      - src/components/WhitePaperPublicationPage.astro
      - src/styles/global.css
    unrelated_untracked_assets:
      - public/social/agentic-lifecycle-governance-poster*
      - public/social/gaic-white-paper-2026-*thread-card*
      - public/social/spotify-gaic-white-paper-2026-cover*
  proposed_change_surface:
    - docs/audits/JW-SITE-GOVERNANCE-BASELINE-FULL-SITE-AUDIT-2026-06-09.md
```

```yaml
doc_reuse_check:
  existing_candidate_docs:
    - docs/audits/JW-SITE-v0.4-FULL-SITE-AUDIT-REAL-01.md
    - docs/audits/JW-SITE-AIAAWP-ARTICLE-ASSET-PUBLICATION-AUDIT-2026-06-04.md
  can_update_existing: false
  why_not_reuse: Existing audits cover older visual drift and one article-publication wave. This audit evaluates the new semantic and publication governance baseline across the full site.
  new_doc_needed: true
  proposed_doc_path: docs/audits/JW-SITE-GOVERNANCE-BASELINE-FULL-SITE-AUDIT-2026-06-09.md
  document_budget_impact: One dated audit record; no new governance baseline.
```

```yaml
semantic_impact:
  requested_change: full-site audit under new semantic and publication governance baseline
  mutation_class:
    - brand-positioning-change
    - core-concept-change
    - visual-identity-change
    - metadata-machine-surface-change
  primary_sot:
    - src/data/siteGovernance.ts
    - src/data/site.ts
    - src/data/definitions.ts
    - src/data/whitepaperPublications.ts
  affected_surfaces:
    - public routes
    - content collections
    - metadata and JSON-LD
    - RSS and sitemap output
    - public/llms.txt
    - public/entity/jearonwong-mplp-gaic-entity-graph.json
    - shared UI components and global tokens
  surfaces_to_update:
    - audit record only
  surfaces_to_verify_only:
    - site pages
    - article and white paper renderers
    - public assets
    - build output
    - browser-rendered representative routes
  missing_sot:
    - no P0/P1 SOT absence found
  forbidden_shortcuts:
    - code-only visual pass
    - collection-only publication pass
    - llms.txt as source for new claims
```

```yaml
publication_impact:
  publication_class: publication-audit-only
  source_authority:
    essays: src/content/essays
    whitepapers: src/data/whitepaperPublications.ts and public/research artifacts
    concepts: src/data/definitions.ts and src/data/site.ts concept data
    brand: src/data/site.ts and src/data/siteGovernance.ts
  canonical_surface: docs/audits/JW-SITE-GOVERNANCE-BASELINE-FULL-SITE-AUDIT-2026-06-09.md
  required_public_surfaces:
    - /essays/
    - /research/
    - /concepts/
    - /definitions/
    - /projects/
    - /governance/
    - /playbooks/
  required_machine_surfaces:
    - RSS
    - sitemap
    - JSON-LD
    - llms.txt
    - entity graph JSON
  required_assets:
    - essay share images
    - in-article figures
    - white paper HTML/PDF/manifest/checksum artifacts
  linked_semantic_surfaces:
    - homepage
    - about
    - lifecycle
    - projects
    - concepts
    - definitions
    - research
  audit_record_required: true
  missing_sot:
    - executable governance audit script is now present as `npm run audit:governance`; the original audit used ad hoc scripts derived from the SOT
  forbidden_shortcuts:
    - trusting Astro collection generation without checking visible indexes
    - accepting OG metadata without probing actual asset dimensions
    - declaring visual consistency without browser evidence
```

## Summary Verdict

No P0 or P1 publication blocker was found in the current generated site.

The new governance baseline is usable: it correctly forced the audit to inspect upstream SOT, linked public routes, machine-readable surfaces, social/OG assets, white paper artifact integrity, and representative browser-rendered UI. The site builds, content routes resolve, public publication ledgers expose their records, RSS and sitemap include expected essay routes, and the sampled browser pages have no console errors, broken images, or real horizontal overflow.

The original audit identified three P2 governance and UI consistency items; all are closed in the current working tree and tracked in the closure addendum:

1. One active essay OG asset is `2400x1260` while `BaseLayout` declares all OG images as `1200x630`.
2. Article hero metadata can become visually crowded on mobile when `PROOF_PATH` and `SERIES` are both long.
3. The governance center now has a reusable `npm run audit:governance` command; CI integration remains an optional future enhancement, not an open P2 finding.

## Findings

> Historical baseline findings are retained for traceability. Current closure status is recorded in the P0/P1/P2 Closure Addendum at the end of this file.

### P2 (Closed) - Active OG Asset Dimension Mismatch

`src/content/essays/from-model-governance-to-agentic-lifecycle-conformance.md` uses `/social/from-model-governance-to-agentic-lifecycle-conformance-newsletter-cover.png` as both `shareImage` and `ogImage`. That file exists and has the correct social ratio, but its actual dimensions are `2400x1260`, while `src/layouts/BaseLayout.astro` declares all OG images as `1200x630`.

Evidence:

- `src/content/essays/from-model-governance-to-agentic-lifecycle-conformance.md:13`
- `src/content/essays/from-model-governance-to-agentic-lifecycle-conformance.md:15`
- `src/layouts/BaseLayout.astro:86`
- `src/layouts/BaseLayout.astro:87`
- `sips` result: `2400x1260`
- Built page declares `og:image:width 1200` and `og:image:height 630`

Impact: The visual ratio is safe, but the publication asset baseline says OG/social images are `1200x630`. This creates a metadata/source mismatch and weakens future automated publication checks.

Closure applied: the essay now uses the canonical `1200x630` `from-model-governance-to-agentic-lifecycle-conformance-og.png`, and the executable audit enforces that dimension.

### P2 (Closed) - Mobile Article Hero Metadata Crowding

The AIAAWP article mobile hero renders without horizontal page overflow, but the registry metadata row becomes visually crowded when `PROOF_PATH: VALIDATION LAB` and `SERIES: AIAAWP 2026` appear on the same line at `390px`.

Evidence:

- Renderer source: `src/pages/essays/[slug].astro:158`
- Metadata fields: `src/pages/essays/[slug].astro:168` through `src/pages/essays/[slug].astro:174`
- Browser screenshot: `/tmp/jw-governance-audit-1781012486246/essays-from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai-mobile.png`
- Browser metrics: `scrollWidth = 390`, `clientWidth = 390`, `hasHorizontalOverflow = false`

Impact: This is not a route or build blocker, but it is a UI/UX consistency issue under the registry annotation system. Long metadata values should wrap as stable rows instead of relying on inline flow.

Closure applied: the shared article hero metadata now uses stable grid/flex rows with wrapping; the 390px browser check reports no horizontal overflow.

### P2 (Closed) - Governance Center Has No Reusable Audit Command Yet

At the original audit time, `src/data/siteGovernance.ts` defined semantic impact rules and publication surface checklists, but the checks were not yet exposed as a reusable command. The current working tree closes that gap with `npm run audit:governance`.

Evidence:

- Governance center source: `src/data/siteGovernance.ts`
- Current scripts: `package.json` includes `audit:governance`, which runs the executable publication and linked-surface audit.
- This audit required ad hoc Node/CDP scripts to check route linkage, asset dimensions, RSS/sitemap inclusion, white paper checksums, and browser rendering.

Impact at the original audit time: future agents had to follow the rules manually. The current executable audit makes linked-surface discovery reproducible.

Closure: `npm run audit:governance` now checks article/whitepaper surfaces, validates asset dimensions and metadata parity, verifies RSS/sitemap/index coverage, and checks canonical route semantics.

## Passing Checks

### Semantic And Brand Surfaces

| Surface | Result | Evidence |
|---|---|---|
| Internal governance center | PASS | `src/data/siteGovernance.ts` defines SOT order, page anchors, semantic impact rules, and publication checklist. |
| Site identity SOT | PASS | `src/data/site.ts` contains `siteSemanticBaseline`, `siteConfig`, `siteThesis`, and `pageRegistry`. |
| Shared terms | PASS | `src/data/definitions.ts` provides quote-ready definition entries and boundary distinctions. |
| `llms.txt` | PASS | Contains site identity, three white paper anchors, flagship essays, definitions, projects, and boundary language. |
| Entity graph JSON | PASS_WITH_NOTE | JSON parses, has no numeric weights, and uses boundary terms as exclusions rather than positive authority claims. |
| Forbidden claim scan | PASS_WITH_FALSE_POSITIVES | Automated scan found many boundary phrases such as "not certification" and "not vendor ranking"; sampled hits were exclusionary rather than unsupported claims. |

### Essay Publication Surfaces

| Check | Result |
|---|---|
| Essay content files | 9 source essays found in `src/content/essays/`. |
| Canonical routes | All 9 canonical `/essays/<slug>/` routes exist in `dist`. |
| Legacy routes | 2 legacy AIAAWP article slugs are generated and noindexed through the shared renderer. |
| `/essays/` visible index | All 9 canonical essay links appear visibly on the built index. |
| RSS | All 9 canonical essay routes appear in `dist/rss.xml`. |
| Sitemap | All 9 canonical essay routes appear in `dist/sitemap-0.xml`. |
| Share images | All referenced essay share images exist. |
| In-article figures | All referenced in-article image sources exist. |
| Browser click path | PASS: `/essays/` click reached `/essays/the-industry-is-still-debating-ai-agent-governance-mplp-lifecycle-answer/`. |

### White Paper Publication Surfaces

| Check | Result |
|---|---|
| White paper records | 3 records in `src/data/whitepaperPublications.ts`. |
| `/research/` visible index | 3 visible research links in built `dist/research/index.html`. |
| Canonical white paper routes | 3 white paper hub routes return 200 in browser sampling. |
| HTML/PDF/manifest/checksum files | All expected files exist. |
| Checksum integrity | All listed checksum entries match current public files. |
| Boundary notes | Public routes and manifests retain non-certification, non-legal, non-ranking, and non-endorsement language. |
| Public DOCX boundary | Current white paper records preserve no-public-DOCX language where applicable. |

### UI/UX And Visual Identity

| Check | Result |
|---|---|
| Shared page hero system | PASS: representative pages use `RegistryPageHero` or white paper hero shell. |
| Typography tokens | PASS: shared hero title tokens exist in `src/styles/global.css`. |
| Zone model | PASS: dark `zone-a` hero/authority surfaces and light `zone-b` content surfaces are preserved in sampled pages. |
| Header/footer | PASS_WITH_NOTE: current modified components use shared CSS variables more consistently than the older v0.4 audit baseline, but they remain part of pre-existing dirty UI/style work. |
| Browser visual sampling | PASS_WITH_BROWSER_FALLBACK: 21 desktop/mobile browser checks passed for HTTP, console, broken image, and real overflow gates. |
| Hidden drawer panel | PASS_WITH_NOTE: CDP reports offscreen drawer elements by bounding box, but `scrollWidth == clientWidth`; the closed drawer does not create horizontal page overflow. |

## Browser Evidence

The in-app Browser plugin was searched for but did not expose a callable navigate/screenshot tool in this session. Playwright was also not installed in the project. The audit used Google Chrome headless via CDP as the browser fallback.

Browser report:

- Report JSON: `/tmp/jw-governance-audit-1781012486246/browser-audit.json`
- Screenshot directory: `/tmp/jw-governance-audit-1781012486246/`
- Method: Google Chrome CDP headless
- Result count: 21 route/viewport checks
- Failed route checks: 0

Sampled routes:

- `/`
- `/about/`
- `/lifecycle/`
- `/essays/`
- `/essays/from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai/`
- `/essays/the-industry-is-still-debating-ai-agent-governance-mplp-lifecycle-answer/`
- `/research/`
- `/research/global-ai-compliance-white-paper-2026/`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`
- `/projects/`
- `/definitions/`
- `/concepts/`
- `/concepts/map/`
- `/governance/`
- `/playbooks/`

Browser gate summary:

| Gate | Result |
|---|---|
| HTTP status | PASS, all sampled routes returned 200. |
| Console errors | PASS, no sampled route emitted console errors or exceptions. |
| Broken images | PASS, no sampled route had broken loaded images. |
| Desktop overflow | PASS, sampled desktop routes had no real horizontal overflow. |
| Mobile overflow | PASS, sampled mobile routes had no real horizontal overflow. |
| Click path | PASS, `/essays/` to essay detail navigation loaded successfully. |

Screenshot evidence:

- `/tmp/jw-governance-audit-1781012486246/home-desktop.png`
- `/tmp/jw-governance-audit-1781012486246/home-mobile.png`
- `/tmp/jw-governance-audit-1781012486246/essays-desktop.png`
- `/tmp/jw-governance-audit-1781012486246/essays-mobile.png`
- `/tmp/jw-governance-audit-1781012486246/essays-from-static-logs-to-dynamic-evidence-chains-auditability-era-agentic-ai-mobile.png`
- `/tmp/jw-governance-audit-1781012486246/research-desktop.png`
- `/tmp/jw-governance-audit-1781012486246/concepts-map-mobile.png`

## Commands Run

```sh
git branch --show-current
git status --short
git rev-parse HEAD
git rev-parse --verify origin/main || true
git log --oneline -5
diff -qr .agents/skills .codex/skills
npm run typecheck
npm run build
npm run lint
git diff --check
find src/pages -type f \( -name '*.astro' -o -name '*.ts' \) | sort
find src/content/essays -type f -name '*.md' | sort
rg -n "getCollection|legacySlugs|shareImage|shareImageAlt|manual|featured|slug|essays" src/pages/essays src/content/essays src/data/schema.ts
rg -n "whitepaperPublications|documentId|publicationStatus|manifest|checksums|pdfPath|htmlPath|boundary|citation" src/data/whitepaperPublications.ts src/pages/research public/research
node essay publication surface inventory scripts
node research index, RSS, sitemap, and asset dimension scripts
node white paper checksum verification script
node claim-boundary term scan
npm run preview -- --host 127.0.0.1 --port 4323
Google Chrome CDP browser audit script
```

One exploratory command failed because Node ESM could not import `src/data/whitepaperPublications.ts` directly with extensionless internal imports. The white paper audit was completed by verifying public artifacts and checksum files directly.

## Required Gate Results

| Gate | Result |
|---|---|
| `npm run typecheck` | PASS: 0 errors; existing BaseLayout font preload hints only. |
| `npm run build` | PASS: 100 pages built. |
| `npm run lint` | PASS. |
| `git diff --check` | PASS. |
| Browser fallback | PASS_WITH_BROWSER_FALLBACK. |

## Remaining Risk

- Pre-existing dirty UI/style changes are present in shared components and `global.css`. This audit verified their current rendered behavior on representative routes, but did not attribute or normalize those edits.
- Several untracked `public/social/*` assets exist outside the audited publication wave. They were not treated as authorized publication assets.
- Visual inspection was representative, not exhaustive across all 100 generated pages.
- The governance baseline is executable through `npm run audit:governance`, which makes future linked-surface discovery repeatable.

## Semantic-Derived SOT Addendum

**Added after user challenge:** The first pass primarily audited publication surfaces, route/index exposure, assets, build output, browser behavior, and the main SOT files. This addendum specifically audits semantic derivation, content-derived SOT, and reverse-dependency risk under the same governance baseline.

**Supplemental verdict:** `PASS_WITH_BROWSER_FALLBACK_DERIVED_SOT_FINDINGS_CLOSED`

No P0 or P1 semantic blocker was found after correcting false positives in the first exploratory script. The core semantic graph is structurally usable: concept, project, essay, white paper, governance mapping, playbook, GAIC system, extended ecosystem, `llms.txt`, and entity graph surfaces can be traced to existing SOT layers. The supplemental P2 findings are historical and closed in the current working tree.

### Supplemental Method

The supplemental audit loaded repository SOT data with an in-memory TypeScript module loader and parsed essay frontmatter with YAML. It then checked:

- `src/data/site.ts`: `siteSemanticBaseline`, `concepts`, `projects`, `theoryClusters`, `theoryClusterAliases`, `appliedPlaybooks`, and `pageRegistry`.
- `src/data/definitions.ts`: quote-ready definition anchors and internal anchor links.
- `src/data/whitepaperPublications.ts`: title, document ID, citation, status, artifact, boundary, key concept, and related research records.
- `src/data/governanceMappings.ts`, `src/data/gaicSystems.ts`, and `src/data/extendedEcosystems.ts`: derived mapping records and source-qualified boundaries.
- `src/content/essays/*.md`: `cluster`, `relatedIdeas`, `relatedProjects`, `projectProof`, image references, and share/OG references.
- `public/llms.txt`: crawler-facing derived summary against upstream site and white paper SOT.
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`: node/edge integrity and derived public-state wording.
- Special hardcoded semantic pages: `src/pages/concepts/agentic-lifecycle-governance/index.astro` and `src/pages/concepts/map/index.astro`.

Counts checked:

| Surface | Count |
|---|---:|
| Concepts in `concepts[]` | 21 |
| Definitions | 32 |
| Essays | 9 |
| Projects | 4 |
| Theory clusters | 7 |
| Theory cluster aliases | 2 |
| Applied playbooks | 10 |
| White papers | 3 |
| Governance mappings | 12 |
| GAIC systems | 8 |
| Extended ecosystems | 7 |
| `siteEntityTerms` | 95 |
| Entity graph nodes | 42 |
| Entity graph edges | 54 |

The first exploratory run reported false P1 asset misses because public URL paths such as `/figures/...` were initially checked from the repository root instead of `public/`. The final supplemental result corrected that path model; its seven historical P2 findings are closed below.

### Supplemental Findings

#### P2 (Closed) - Definition Index Has Two Missing Internal Anchor Targets

Two `/definitions/` entries use internal `#slug` references for concepts that exist as concept routes but not as definition anchors:

- `src/data/definitions.ts`: `agentic-audit-object` links to `#lifecycle-responsibility-objects`.
- `src/data/definitions.ts`: `insured-legal-subject` links to `#authority-boundary`.

Impact: The public definition page remains valid, but two related links cannot resolve as in-page citation anchors. This weakens the "Citation Infrastructure" role of `/definitions/` because definition entries should either link to an existing definition anchor or to the canonical concept route.

Closure applied: both links now route to the canonical concept pages `/concepts/lifecycle-responsibility-objects/` and `/concepts/authority-boundary/`.

#### P2 (Closed) - `llms.txt` Omits The Current AIIRWP Document ID

`public/llms.txt` correctly states that the Agentic AI Insurability & Risk Transfer White Paper 2026 is a Public Research Edition and that the v0.2 candidate is rejected. However, it does not include the current SOT document ID `AIIRWP-2026-v1.0` from `src/data/whitepaperPublications.ts`.

Evidence:

- `src/data/whitepaperPublications.ts`: `documentId: "AIIRWP-2026-v1.0"`
- `public/llms.txt`: AIIRWP public-state entries mention Public Research Edition and rejected v0.2, but omit `AIIRWP-2026-v1.0`.

Impact: Human-facing research routes are safe, but the crawler-facing SOT is less precise than the white paper record. Future AIIRWP citations could keep repeating public status without the current document ID.

Closure applied: `public/llms.txt` now includes `AIIRWP-2026-v1.0` while preserving rejected-v0.2 historical boundaries.

#### P2 (Closed) - Agentic Lifecycle Governance Is A Special Concept Surface Outside `concepts[]`

`/concepts/agentic-lifecycle-governance/` is a dedicated hand-authored route rather than an entry in `concepts[]`. It is heavily referenced from `llms.txt`, `whitepaperPublications`, `concepts/map`, governance mappings, playbooks, and project pages.

Evidence:

- `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- No matching `slug: "agentic-lifecycle-governance"` entry in `src/data/site.ts` `concepts[]`.
- `src/data/whitepaperPublications.ts` and `public/llms.txt` both treat it as a key semantic anchor.

Impact: This is an intentional high-value page, not a broken route. The governance risk is that future core concept updates driven through `concepts[]` will miss this special page unless it is explicitly listed as a derived SOT surface.

Closure applied: `src/data/siteGovernance.ts` explicitly enumerates the special concept surface and `npm run audit:governance` checks its rendered semantic record.

#### P2 (Closed) - GAIC Citation Drift On Agentic Lifecycle Governance Page

The Agentic Lifecycle Governance page hardcodes a GAIC citation that differs from the white paper SOT:

- Derived page text: `Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Responsibility. v0.3.2 Public Edition. JearonWong.com, 2026.`
- SOT text: `Global AI Compliance White Paper 2026: From Model Governance to Agentic Lifecycle Conformance. Technical Report GACWP-2026-v0.3.2-FRC-R3, May 2026.`

Evidence:

- `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- `src/data/whitepaperPublications.ts`

Impact: This is a classic derived-SOT drift: the page is semantically correct in broad terms, but its citation identity no longer matches the publication record. Future citation, crawler, or reader extraction may pick up the wrong subtitle/version style.

Closure applied: the page derives its citation from `getWhitePaperPublication("wp1-gaic").citationText`.

#### P2 (Closed) - Entity Graph Uses Stale AIIRWP v0.2 Boundary Wording On Child Concepts

The entity graph top-level boundary and AIIRWP node say the current public edition is v1.0 and v0.2 is rejected. Child concept wording is normalized to historical traceability context only.

Evidence:

- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- `src/data/whitepaperPublications.ts`

Impact: This does not create an unsafe endorsement or certification claim, but it creates public-state ambiguity inside the machine-readable graph. The intended state is: AIIRWP-2026-v1.0 is current public SOT; v0.2 is historical rejected/withdrawn context only.

Closure applied: child concept boundaries now state that withdrawn v0.2 is historical context and not current source truth or citation source.

#### P2 (Closed) - `Agentic Delivery Defines The Standard` Needs Governance Disambiguation

`public/llms.txt` states: `Agentic Delivery defines the standard.` The site also has a formal `/delivery-standard/` page and a `/definitions/#delivery-standard` anchor.

Evidence:

- `public/llms.txt`
- `src/data/site.ts`: `deliveryStandardPageContent` and `pageRegistry.deliveryStandard`
- `src/data/definitions.ts`: `delivery-standard`

Impact: The phrase is category-defining and not currently presented as an official standard, certification, or regulator-approved standard. However, because "Delivery Standard" is also a named site artifact, future derived content can confuse category language with official/adopted standard claims.

Closure applied: crawler-facing wording now identifies Agentic Delivery as the site's category standard and explicitly excludes official, regulator-approved, adopted professional, or certification-standard status.

### Supplemental Passing Checks

| Check | Result |
|---|---|
| Concept `relatedTerms` -> `concepts[]` | PASS |
| Concept `relatedProjects` -> `projects[]` | PASS |
| Concept `relatedEssays` -> essay collection | PASS |
| Project `relatedConcepts`, `relatedIdeas`, `adjacentProofs`, and related essay links | PASS, using `theoryClusterAliases` for legacy idea slugs |
| Essay `cluster`, `relatedIdeas`, `relatedProjects`, and `projectProof` | PASS, using aliases where defined |
| Essay image/share/OG references | PASS after resolving `/...` URLs under `public/` |
| White paper artifact references | PASS after resolving `/...` URLs under `public/` |
| White paper key concept/governance links | PASS |
| Governance mapping concept links | PASS |
| Entity graph required core nodes | PASS |
| Entity graph edge references | PASS |
| `llms.txt` core identity and concept SOT phrases | PASS, except AIIRWP document ID precision noted above |

### Supplemental Governance Conclusion

The answer to the user's challenge is yes: the first audit did not deeply audit semantic derivation and content-derived SOT. This addendum completes that missing layer.

The current repository has a workable semantic center with executable reverse-dependency checks. The governed discovery surface covers:

- `siteSemanticBaseline` and `pageRegistry`
- `definitions[]`
- `concepts[]` plus special concept pages
- `whitepaperPublications[]`
- article frontmatter/body
- `llms.txt`
- `public/entity/*.json`
- hardcoded concept-map/entity-map pages

Future homepage, concept, white paper, or article changes should not be accepted unless the changed SOT is traced into those derived surfaces and either updated or explicitly marked unchanged with rationale.

## Derived-SOT Repair Addendum

**Added after repair authorization:** The user authorized repair based on the two factual bases above:

1. The original full-site audit was too focused on primary publication surfaces and did not sufficiently audit semantic derivation and content-derived SOT.
2. The supplemental audit found P2 derived-SOT drift and showed that future governance needed explicit reverse-dependency rules, not only manual route/content checks.

### Repair Scope

This repair used existing SOT instead of inventing new wording:

- `src/data/site.ts` for site thesis, page roles, and category-standard boundary language.
- `src/data/definitions.ts` for quote-ready definition anchors and definition-route behavior.
- `src/data/whitepaperPublications.ts` for white paper document IDs, citations, status, version, rejected/withdrawn artifact state, and boundary notes.
- `src/data/siteGovernance.ts` for the internal governance center.

### Repairs Applied

| Prior finding | Repair |
|---|---|
| Definition index had two missing internal anchor targets | Changed the two related links to canonical concept routes instead of unresolved `#` anchors. |
| `llms.txt` omitted AIIRWP current document ID | Added `AIIRWP-2026-v1.0` and v1.0 public research status from the white paper SOT while preserving rejected-v0.2 boundary language. |
| Agentic Lifecycle Governance special concept page could be missed by generated `concepts[]` checks | Added it as an explicit page anchor and derived surface in `src/data/siteGovernance.ts`. |
| GAIC citation drift on Agentic Lifecycle Governance page | Changed the page to derive its citation from `getWhitePaperPublication("wp1-gaic").citationText`. |
| Entity graph used stale AIIRWP v0.2 child-concept boundary wording | Normalized child boundaries to state that withdrawn v0.2 is historical traceability context only and not current source truth or citation source. |
| `Agentic Delivery defines the standard` needed governance disambiguation | Updated crawler-facing wording to say it is the site's category standard for accountable delivery, not an official, regulator-approved, adopted professional, or certification standard. |

### Governance Baseline Repairs

`src/data/siteGovernance.ts` now includes `semanticDerivedSotRegistry` with explicit reverse-dependency rules for:

- site identity and homepage thesis;
- definition and concept anchor graph;
- white paper publication derived SOT;
- publication content derived SOT.

The registry explicitly includes special semantic surfaces that generated route checks can miss:

- `src/pages/concepts/agentic-lifecycle-governance/index.astro`
- `src/pages/concepts/map/index.astro`
- `src/pages/evidence.astro`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`

The mirrored site governance skills were also updated so future work must report derived SOT rules, reverse-dependency searches, special concept surfaces, entity graph checks, and definition-anchor resolution before declaring semantic or publication consistency.

### Remaining Governance Risk

The repair improves the governance baseline and current derived-SOT drift. The executable gate is now available as `npm run audit:governance`.

## P0/P1/P2 Closure Addendum

**Closure date:** 2026-08-26

The previously listed code-level P0, P1, and P2 findings are closed in the current working tree. Historical findings remain above for traceability; they are not open work items.

| Priority | Finding | Closure evidence |
|---|---|---|
| P0 | No P0 blocker was identified | `npm run typecheck`, `npm run build`, `npm run audit:governance`, `npm run lint`, `git diff --check` all pass. |
| P1 | Legacy canonical routing and generic detail-page OG fallback | Legacy routes resolve to the canonical essay; project and concept detail pages use category-specific 1200x630 OG assets. |
| P2 | Active essay OG dimension mismatch | Canonical essay share/OG asset is `from-model-governance-to-agentic-lifecycle-conformance-og.png` at 1200x630; the audit script enforces this dimension. |
| P2 | Mobile article hero metadata crowding | Hero metadata uses stable flex rows with wrapping; 390px browser check reports `scrollWidth == clientWidth`. |
| P2 | Definition anchors, AIIRWP identity, citation drift, entity wording, and standard-language ambiguity | Derived-SOT repairs are applied and the public route/entity/llms surfaces pass the executable audit. |
| P2 | Governance center lacked a reusable command | `npm run audit:governance` now runs the publication and derived-surface checks, including white-paper metadata parity and asset contracts. |

External indexing, answer-engine citation, third-party adoption, and commercial conversion remain external evidence states and are intentionally not represented as code-level closure.
