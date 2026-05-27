# Rollback And Containment Plan

## Scope

This plan defines how R3AA should contain or revert public route restoration if a public issue is found. R3Z does not execute rollback because it does not restore the route.

## Rollback Triggers

Rollback should be considered if R3AA or post-deploy verification finds:

- broken WP3 route;
- broken HTML/PDF/manifest/checksum links;
- checksum mismatch;
- stale v0.2 link promoted as current;
- DOCX file or DOCX link introduced;
- final/sealed/release-ready/public release overclaim;
- insurance/legal/certification/scoring overclaim;
- unreadable public artifact rendering issue that cannot be repaired quickly;
- robots/sitemap/`llms.txt`/entity graph conflict;
- owner revokes public route restoration authorization.

## Files To Revert Or Remove

If rollback is needed after R3AA, revert or remove the R3AA changes to:

- `src/pages/research/agentic-ai-insurability-risk-transfer-white-paper-2026/index.astro`
- `src/pages/research/index.astro`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.pdf`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/manifest.json`
- `public/research/agentic-ai-insurability-risk-transfer-white-paper-2026/checksums.sha256`
- `public/robots.txt`
- `astro.config.mjs`
- `public/llms.txt`
- `public/entity/jearonwong-mplp-gaic-entity-graph.json`
- R3AA governance/status entries that describe public route restoration as active.

## Restore Noindex Under-Rewrite

Rollback should restore the WP3 public route to:

- withdrawn / v1.0 rewrite in progress;
- `noindex={true}`;
- no public AIIRWP HTML/PDF/manifest/checksum promotion;
- no public artifact CTA;
- no public DOCX;
- rejected v0.2 shown only as withdrawn/rejected historical context.

## Remove Public Artifact Links

Rollback should remove public links to:

- current WP3 HTML artifact;
- current WP3 PDF artifact;
- current WP3 manifest;
- current WP3 checksum file;
- any source Markdown path if it was separately authorized later.

The internal R3X/R3Y artifact candidate package must remain preserved.

## Robots And Sitemap Containment

Rollback should:

- remove the WP3 HTML artifact custom page from `astro.config.mjs`;
- restore robots disallow coverage for current public artifact paths if the route returns to withdrawn/noindex status;
- keep stale v0.1/v0.2 paths blocked;
- rebuild and verify sitemap output.

## llms.txt And Entity Graph Containment

Rollback should return WP3 language in `public/llms.txt` and `public/entity/jearonwong-mplp-gaic-entity-graph.json` to:

- withdrawn for AIIRWP v1.0 rewrite;
- no current public AIIRWP artifact promoted;
- rejected v0.2 not source truth;
- no public DOCX;
- no final/sealed/release-ready/public release claim.

## Documentation Requirements

Any rollback must create a rollback report that records:

- trigger;
- files reverted or removed;
- artifact hashes before removal if relevant;
- validation commands;
- route status after rollback;
- owner authorization status;
- remaining risks;
- next wave recommendation.

## Containment Validation

After rollback, run:

```sh
npm run typecheck
npm run lint
npm run build
git diff --check
```

Also run scans for:

- no WP3 public artifact links;
- no DOCX;
- stale v0.2 promotion;
- forbidden claims;
- robots/sitemap consistency;
- `llms.txt` WP3 withdrawn status;
- entity graph WP3 withdrawn status.
