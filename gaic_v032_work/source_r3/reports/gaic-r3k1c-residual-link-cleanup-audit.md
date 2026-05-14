# GAIC-R3K-1C Residual Link Cleanup Audit

**Date:** 2026-05-14

## Audit Targets

Checked internal links to:

- `/ai-agent-governance/`
- `/concepts/ai-agent-governance/`
- `/definitions/`
- `/theory-clusters/`
- old GAIC phase/output routes
- stale public white paper checksums

## Repairs Implemented

| Item | Before | After | Reason |
|---|---|---|---|
| Essay footer link | `/ai-agent-governance/` | `/governance/ai-agent-governance/` | Footer text intent is AI Agent Governance, so it should prefer the canonical governance mapping route. |
| Ideas page concept-map link | Text said "Open the Concepts map" but linked `/concepts/` | `/concepts/map/` | Concept map/entity mesh intent should point to the Concepts Map route. |
| GAIC hub HTML checksum display | `2693eb11826e9930e7c2d0587a67d5e2aada3c5999fadce4c70e1e0d9f9cfb06` | `ffacf14849b1f1d6ff743f635442a4f646e27ba0c77e61c53db01258842fe8ce` | Align displayed checksum and JSON-LD encoding hash with `checksums.sha256` and R3K-1B artifact QA. |
| Responsive HTML note | Pre-R3K-0B/R3K-0C hash context | Current public HTML and public PDF/sealed PDF distinction | Prevent stale artifact context before launch. |

## Remaining Bridge Links

Remaining `/ai-agent-governance/` links are intentional bridge references or self-route implementation details:

- `src/pages/ai-agent-governance.astro` self-canonical bridge route.
- `public/llms.txt` bridge section explaining preferred governance route.
- `src/data/governanceMappings.ts` related links that explicitly label field/concept bridge routes after the canonical governance route is stated.
- `src/data/site.ts` and definitions data text that documents the bridge hierarchy.

No unambiguous essay/footer link to the demoted bridge route remains.

## Result

**PASS** - residual link cleanup was limited to clear canonical-intent mismatches and stale artifact-display context. No broad P0/P1 rework was performed.
