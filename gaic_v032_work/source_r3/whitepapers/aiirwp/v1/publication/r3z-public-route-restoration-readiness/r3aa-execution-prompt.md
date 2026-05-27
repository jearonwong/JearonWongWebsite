# R3AA Execution Prompt

```text
You are working in the local repository:

/Users/jasonwang/Documents/AI_Dev/JearonWong

Repo:
https://github.com/jearonwong/jearonwongwebsite.git

Branch:
main

Current status:
WP3-V1-R3Z PUBLIC ROUTE RESTORATION READINESS COMPLETE / READY FOR R3AA PUBLIC ROUTE RESTORATION EXECUTION

Task ID:
WP3-V1-R3AA-PUBLIC-ROUTE-RESTORATION-EXECUTION-01

Prerequisite:
Proceed only if R3Z verdict is ACCEPTED_FOR_PUBLIC_ROUTE_RESTORATION_EXECUTION_WITH_NOTES and owner authorization for route restoration execution remains explicit.

Goal:
Execute WP3 / AIIRWP v1.0 public route restoration using the R3Y-accepted internal artifact candidates and the R3Z readiness package.

This wave may:
- copy R3Y-accepted internal HTML and PDF candidates into the WP3 public artifact directory;
- create public manifest and checksum files for the copied public artifacts;
- update the WP3 public route page;
- update the research index;
- update metadata, citation tags, JSON-LD, robots, sitemap custom pages, llms.txt, and entity graph;
- update governance/status files and R3AA validation reports.

This wave must NOT:
- create DOCX;
- publish source Markdown unless separately authorized;
- create social posts or public announcement copy as executed;
- claim final/sealed/release-ready status;
- claim public release announcement;
- claim insurer acceptance, coverage readiness, underwriting readiness, claim readiness, certification, score, standard, readiness certification, insurer-adopted method, or regulator approval;
- use rejected v0.2 as source truth;
- stage unrelated public/social/* files.

First inspect:
1. R3Z readiness package:
   - gaic_v032_work/source_r3/whitepapers/aiirwp/v1/publication/r3z-public-route-restoration-readiness/
2. R3X internal artifact candidate package:
   - gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/
3. R3Y artifact candidate QA and repair package:
   - gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3y-artifact-candidate-qa-and-repair/
4. Current WP3 public route:
   - src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro
5. Research index:
   - src/pages/research/index.astro
6. Public semantic files:
   - public/robots.txt
   - astro.config.mjs
   - public/llms.txt
   - public/entity/jearonwong-mplp-gaic-entity-graph.json
7. Governance files:
   - gaic_v032_work/source_r3/GAIC-2026-v0.3.2-FRC-R3-SOURCE-MASTER.md
   - gaic_v032_work/source_r3/reports/known-issues.md
   - gaic_v032_work/source_r3/reports/reconstruction-notes.md
   - gaic_v032_work/source_r3/whitepapers/registry/current-status.md
   - gaic_v032_work/source_r3/whitepapers/registry/whitepaper-series-registry.yaml

Required implementation:
1. Copy accepted HTML:
   from gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.html
   to public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html

2. Copy accepted PDF:
   from gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/AIIRWP-v1.0-internal-candidate.pdf
   to public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf

3. Create public manifest:
   public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json
   It must use public paths/status and include SHA256 entries for public HTML, PDF, and manifest.

4. Create public checksum file:
   public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256

5. Update WP3 route page:
   - restore bounded public research candidate hub behavior;
   - add Read HTML, Download PDF, View manifest, Verify checksums links;
   - remove noindex only if authorized;
   - add citation metadata and JSON-LD;
   - preserve no-DOCX note;
   - preserve rejected v0.2 withdrawal note;
   - preserve visible non-claim boundary.

6. Update research index:
   - change WP3 card from withdrawn/rewrite status to bounded public research candidate route-restored status;
   - add hub, HTML, and PDF links;
   - avoid final/sealed/release-ready language.

7. Update robots/sitemap/llms/entity graph:
   - preserve stale v0.1/v0.2 blocking;
   - include current WP3 HTML artifact in sitemap custom pages;
   - update llms.txt with current WP3 public artifact URLs and boundaries;
   - update entity graph WP3 status without overclaiming.

8. Update governance and create R3AA reports.

Required validation:
- npm run typecheck
- npm run lint
- npm run build
- git diff --check
- YAML parse
- JSON parse
- public manifest JSON parse
- checksum validation
- no-DOCX scan
- rejected v0.2 regression scan
- forbidden-claim scan
- boundary wording scan
- public route link scan
- public artifact existence scan
- sitemap custom page scan
- robots stale-path scan
- llms.txt WP3 scan
- entity graph WP3 scan
- public HTML/PDF checksum scan

Commit:
paper: restore WP3 R3AA public route

Final status if accepted:
WP3-V1-R3AA PUBLIC ROUTE RESTORATION EXECUTION COMPLETE / READY FOR POST-RESTORATION VERIFICATION

The final status must still state:
- no DOCX authorized;
- not final;
- not sealed;
- not release-ready;
- public announcement not executed;
- no insurer acceptance, coverage readiness, underwriting readiness, claim readiness, certification, score, standard, or regulator approval claim.
```
