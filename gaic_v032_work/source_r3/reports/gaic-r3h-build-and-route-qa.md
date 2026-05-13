# GAIC-R3H Build and Route QA

Task ID: GAIC-R3H-REGULATORY-AND-ENTERPRISE-GOVERNANCE-SEMANTIC-LAYER

## Command Results

Final command results:

- `npm run typecheck`: PASS, 0 errors. Existing Astro hints remain in `src/layouts/BaseLayout.astro` for inline font preload handling.
- `npm run lint`: PASS.
- `npm run build`: PASS, 88 static pages generated.
- `git diff --check`: PASS.

## Expected Routes

- `/governance/`: PASS.
- `/governance/ai-agent-governance/`: PASS.
- `/governance/multi-agent-system-governance/`: PASS.
- `/governance/enterprise-agent-governance/`: PASS.
- `/governance/ai-agent-compliance/`: PASS.
- `/governance/eu-ai-act-agentic-systems/`: PASS.
- `/governance/gdpr-agentic-ai-evidence/`: PASS.
- `/governance/nist-ai-rmf-agentic-lifecycle/`: PASS.
- `/governance/iso-42001-agentic-ai/`: PASS.
- `/governance/human-role-responsibility-mapping/`: PASS.
- `/governance/ai-agent-evidence-retention/`: PASS.
- `/governance/vendor-runtime-substitution-conformance/`: PASS.
- `/governance/incident-dispute-remediation-closure/`: PASS.

## Sitemap

`dist/sitemap-0.xml` includes the governance index and all twelve governance detail routes.

## Artifact Integrity

Verified unchanged hashes:

- public responsive HTML: `e36a7a209e499c47c422620dce32035f4945c9cffb9b6a549180310c9bcfd42c`
- public/sealed PDF: `3e4ed39624661ecb29c6328635d0d97a5f6d638e09aa5eee3e2ae6cdc418b643`
- public/sealed DOCX: `b3c5fec8e9a5446a15266ab394a51b51f9dac62b6f9cf366646b5d38306134aa`
- sealed candidate HTML: `0bb6d33d7fa5c2930fc4f0da449b9bce37ba5f968300bd0fd3a251bcc5c925af`
- sealed generation log: `414b912cd4fd190ab50a0a5b9fb09476d6d56628edcad281e2ac05776fc8da3e`

No diff exists under `gaic_v032_work/source_r3/out/publication_candidate/` or `public/research/global-ai-compliance-white-paper-2026/`.

## Browser Smoke

Local preview ran at `http://127.0.0.1:4324/`.

Browser smoke verified:

- `/governance/`
- `/governance/eu-ai-act-agentic-systems/`
- `/governance/gdpr-agentic-ai-evidence/`
- `/governance/nist-ai-rmf-agentic-lifecycle/`
- `/governance/incident-dispute-remediation-closure/`
- `/concepts/map/`

Each tested page returned the expected title/content, included boundary language, and had no console warnings or errors.

## Status

GAIC-R3H route, build, sitemap, and artifact QA pass.
