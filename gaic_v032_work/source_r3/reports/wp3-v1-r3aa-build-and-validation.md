# WP3-V1-R3AA Build And Validation

## Scope

Build and validation report for R3AA public route restoration execution.

## Validation Commands

| Command / scan | Result | Notes |
|---|---|---|
| `npm run typecheck` | PASS_WITH_EXISTING_NOTES | Astro check passed; existing `BaseLayout.astro` inline `onload` / `rel` hints remain unrelated to R3AA. |
| `npm run lint` | PASS | ESLint completed successfully. |
| `npm run build` | PASS | Astro build completed successfully; 95 pages built and sitemap generated. |
| `git diff --check` | PASS | No whitespace errors detected. |
| YAML parse | PASS | Registry YAML parsed successfully. |
| JSON parse | PASS | Entity graph JSON and public manifest JSON parsed successfully. |
| checksum validation | PASS | `shasum -a 256 -c public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256` passed. |
| no-DOCX scan | PASS | No WP3 public DOCX exists. |
| rejected v0.2 regression scan | PASS | Stale v0.1/v0.2 public paths remain blocked/withdrawn; no active v0.2 promotion detected. |
| forbidden-claim scan | PASS_WITH_CONTEXTUAL_HITS | Forbidden terms appear only in negative boundary/status statements. |
| boundary wording scan | PASS_WITH_CONTEXTUAL_HITS | Public route, `llms.txt`, entity graph, manifest, and reports preserve non-claim boundary language. |
| public artifact existence checks | PASS | Public HTML, PDF, manifest, and checksum files exist. |
| public link checks | PASS | Route page, research index, `llms.txt`, and entity graph point to the restored public HTML/PDF/manifest/checksum URLs. |
| browser smoke test | PASS | Local preview route loaded, visible artifact links were present, and no browser console errors were detected. |
| sitemap output/customPages check | PASS | WP3 public HTML artifact URL appears in generated sitemap output. |
| PDF text/page-count scan | PASS | PDF is 117 A4 pages; text extraction detects status language, Chapter 28, Appendix A/H/I, source ref `[62]`, and table ID `T-02-01`. |
| no source Markdown public copy scan | PASS | No `.md` file exists under the WP3 public artifact directory. |
| no public announcement/social copy scan | PASS_WITH_UNTRACKED_PREEXISTING_FILES | R3AA created no social announcement copy; pre-existing untracked `public/social/*` files remain outside the R3AA staging scope. |

## Artifact Validation Baseline

- Public PDF page count: 117 A4 pages.
- Public PDF text extraction detects public status, `T-02-01`, Chapter 28, Appendix A, Appendix H, Appendix I deferred note, and source ref `[62]`.
- Public PDF text extraction does not detect `file://`, `noindex`, or internal-only route status residue.

## Final Results

R3AA validation passes with contextual boundary hits only. The restored WP3 route and public artifacts are ready for R3AB public route post-restoration QA. R3AA does not authorize public announcement, final/sealed/release-ready status, public DOCX, source Markdown publication, certification, insurer acceptance, coverage-ready status, underwriting-ready status, claim-ready status, score, standard, readiness certification, or regulator approval.
