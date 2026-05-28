# Whitepaper Series Official Publication Build and Validation

Validation status: PASS.

Command validation:

- `npm run typecheck`: PASS. Astro reported 0 errors; existing BaseLayout inline-onload hints remain non-blocking.
- `npm run lint`: PASS.
- `npm run build`: PASS. 95 static pages built; sitemap generated.
- `git diff --check`: PASS.
- YAML parse for whitepaper-series registry: PASS.
- JSON parse for entity graph: PASS.
- JSON parse for all three public manifests: PASS.
- Checksum validation for all three public whitepaper artifact sets: PASS from repository root.
- No-DOCX scan: PASS; no DOCX files in current public whitepaper artifact sets.
- No newly published public source Markdown scan: PASS with note. Two historical GAIC public integrity notes remain: `publication-candidate-seal-report.md` and `responsive-html-web-edition-note.md`; neither is a white paper source Markdown publication and neither was newly introduced in this wave.
- Rejected/withdrawn version regression scan: PASS. AIIRWP v0.2 remains rejected/withdrawn and not current source truth.
- Forbidden-claim scan: PASS with expected negative-control hits in non-claim boundary language.
- Boundary wording scan: PASS.
- Public route link checks for all three white papers: PASS through build output and browser smoke.
- Research index link checks: PASS through build output and browser smoke.
- Sitemap/customPages check: PASS; all three public HTML artifact URLs appear in `dist/sitemap-0.xml`.
- Robots stale-path check: PASS; stale AIIRWP v0.1/v0.2 HTML/PDF paths remain disallowed.
- `llms.txt` three-whitepaper consistency check: PASS.
- Entity graph three-whitepaper consistency check: PASS.
- JSON-LD parse/check: PASS; all three public routes expose parseable JSON-LD blocks.
- Public-facing internal shorthand scan: PASS for current public route pages, public HTML/PDF text, manifests, `llms.txt`, entity graph, and metadata source data. Historical GAIC filename/path strings are classified as historical integrity artifact paths.
- No certification / insurer acceptance / coverage-ready scan: PASS with only negative-control boundary statements.
- No social/public announcement execution scan: PASS.
- No public/social staging scan: PASS; pre-existing untracked `public/social/*` files remain unstaged and out of scope.

Browser smoke:

- Local preview: `http://127.0.0.1:4321/`.
- Checked `/research/`, all three public white paper routes, WP3 HTML, WP3 manifest, and WP3 checksum.
- Result: PASS; pages loaded with expected publication signals and no relevant console warnings/errors.
