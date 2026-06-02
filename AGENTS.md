# Repository Operating Rules for Codex

This repository is part of the Coregentis MPLP / Cognitive OS / SoloCrew / Validation Lab project family. Codex work here must preserve project boundaries and produce verifiable engineering evidence.

## Repository Layer

JearonWong.com owns articles, essays, white papers, brand narrative, publication pages, metadata, and social distribution assets. Public writing may be sharper thought leadership and claim conceptual positioning. Named critique is allowed only when fact-backed and not a personal attack. Essays, white papers, visible copy, metadata, and social metadata must preserve the boundary between opinion, protocol, evidence, and product, and must not drift into unsupported certification, legal-compliance, regulator-approval, vendor-ranking, official-standard, or endorsement claims.

## Repo Truth First

Before implementation, inspect repository truth:

- `git branch --show-current`
- `git status --short`
- `git rev-parse HEAD`
- `git rev-parse --verify origin/main || true`
- `git log --oneline -5`

Reuse existing assets before creating new files. Prefer updating an existing rule, skill, script, audit, or governance record over creating a duplicate document.

## Codex Skill Discovery

- `.agents/skills/*/SKILL.md` is the repository-scoped Codex skill discovery path.
- `.codex/skills/*/SKILL.md` is retained as the project-internal ops source and compatibility copy.
- Keep mirrored skills same-named and content-equivalent; do not create divergent SOPs.

## Hard Boundaries

- Preserve protocol, runtime, product, validation, and publication boundaries.
- Normal task-authorized changes may modify files within the explicitly scoped repository layer, including low-risk code or docs that the current task asks for.
- Owner approval is required for high-risk or irreversible changes, including release mutation, registry mutation, public legal/compliance claims, package version changes, schema primitive intake, provider-send behavior, auth/payment/data-deletion flows, runtime authority changes, and merge/tag/seal actions.
- Forbidden without explicit owner approval:
  - `npm publish`
  - `npm deprecate`
  - npm dist-tag add/remove
  - PyPI upload
  - PyPI yank/delete
  - `git tag`
  - release seal creation
  - package version bump
  - schema object intake
  - external registry mutation
- Do not make public certification, regulator-approval, vendor-ranking, official-standard, or legal-compliance proof claims without owner approval.
- Do not over-block normal task-authorized development.

## MPLP Schema v2 Discipline

For MPLP `schemas/v2` work, use this order:

1. Invariant first.
2. Negative fixture second.
3. Object schema third.
4. Positive fixture fourth.
5. Validator and conformance gates last.

v1.0 module references to v2 objects must be pointer-only. Do not inline v2 object fields into v1 module schemas.

## Boundary Language

- No product, runtime, commercial, certification, legal-compliance, regulator-approval, or vendor-ranking language may leak into MPLP protocol core.
- No protocol authority may leak into product UI.
- Cognitive OS may bind to MPLP semantics but must not redefine MPLP protocol authority.
- Validation Lab may present deterministic evidence and adjudication but must not become a certification authority.
- SoloCrew UI must not expose internal protocol/runtime jargon as primary user-facing copy.

## Standard Subagent Lanes

Use `.codex/agents/*.toml` reviewers only when the parent task explicitly requests them. Relevant lanes include `package_surface_auditor`, `release_governance_reviewer`, `protocol_schema_reviewer`, `product_boundary_reviewer`, `runtime_binding_reviewer`, and `publication_claim_reviewer`.

Default lane policy: use no subagent for trivial docs typos, one subagent for isolated repo-specific review, and multiple subagents for release, schema, runtime, publication, or cross-repo tasks. JearonWong.com defaults to `publication_claim_reviewer`, with `product_boundary_reviewer` as the secondary lane when the task touches product positioning, evidence claims, essays, white papers, or social metadata.

Subagents run review lanes only unless edits are explicitly authorized. They inherit sandbox and approval boundaries, must not publish, upload, tag, seal, bump versions, mutate registries, intake schema primitives, merge PRs, or change public claims, and must return P0/P1/P2 findings to the parent with files inspected and commands run.

## Completion Discipline

Do not declare completion without reporting:

- files changed
- commands run
- pass/fail evidence
- final git status
- remaining risk

If a verification command is unavailable or inappropriate, state why instead of silently skipping it.
