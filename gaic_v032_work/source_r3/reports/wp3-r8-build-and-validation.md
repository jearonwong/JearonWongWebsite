# WP3-R8 Build and Validation

## Validation Scope

R8 creates internal launch and evidence-capture files only, plus internal R8 reports and governance notes. No public route, public artifact, public DOCX, homepage, entity graph, `llms.txt`, sitemap, research index, Evidence Registry, Concepts, Definitions, Governance, or Playbooks change is intended.

## Commands

| Command | Result |
|---|---|
| `shasum -a 256 -c checksums.sha256` in AIIRWP public artifact directory | PASS |
| JSON parse for AIIRWP public manifest and entity graph | PASS |
| AIIRWP DOCX scan in `public` and `dist` | PASS; zero AIIRWP DOCX files found |
| `npm run typecheck` | PASS; 0 errors, 2 existing Astro hints in `BaseLayout.astro` |
| `npm run lint` | PASS |
| `npm run build` | PASS; 93 pages built |
| `git diff --check` | PASS |

## Artifact Validation

| Check | Result |
|---|---|
| No public artifacts changed | PASS |
| No public DOCX introduced | PASS |
| No unrelated `public/social/*` staged | PASS; pre-existing untracked files remain unstaged |
| AIIRWP route still builds | PASS; `dist/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.html` exists |
| AIIRWP public HTML/PDF/manifest/checksums still output | PASS |
| Homepage still builds | PASS |
| Research index still builds | PASS |
| Evidence Registry still builds | PASS |
| Concepts, Definitions, Governance, and Playbooks build | PASS |
| `llms.txt`, sitemap, and entity graph remain valid if build checks them | PASS; entity graph JSON parses and sitemap includes AIIRWP route |

## Result

PASS. R8 adds internal launch/evidence pack files, internal reports, and governance notes only. No public AIIRWP artifact was changed and no public DOCX was introduced.
