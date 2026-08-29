---
name: dialogue-execution-harness-governance
description: Use for non-trivial conversations that involve strategy, architecture judgment, product/protocol/public OSS boundaries, Codex prompt generation, Codex result review, correction, release/projection/migration/copyright risk, or dynamic task governance routing.
---

# Dialogue Execution Harness Governance

Use this skill as the first governance layer before task-specific repo execution. Its job is to route the conversation, preserve independent judgment, and select the right downstream governance baseline before any prompt, plan, review, or mutation proceeds.

## Core Method

Default internal response method:

```yaml
default_response_method:
  1: pre_plan
  2: assistant_judgment
  3: dialectical_reasoning
  4: prompt_or_action_plan_when_needed
```

For simple requests, compress the visible output. Do not skip the internal sequence.

## Stage Classification

Before acting, classify the current user input:

```yaml
conversation_stage:
  - strategic_discussion
  - architecture_judgment
  - product_design
  - protocol_governance
  - codex_prompt_generation
  - codex_result_review
  - correction
  - high_risk_release_projection_migration_copyright
  - writing_social_email
  - personal_market_career
```

Also classify the user's input as one or more of:

```yaml
user_input_classification:
  - owner_decision
  - strategic_direction
  - emotional_signal
  - correction
  - execution_instruction
```

## Pre-Action Questions

Answer these before substantive work:

```yaml
pre_action_questions:
  continue_now:
  discovery_first:
  stop_or_block:
  correction_needed:
  original_intent_risk:
  boundary_mix_risk:
  prompt_mistaken_for_authority:
```

For Coregentis/MPLP/JearonWong/repo/release/projection/package-like work, also classify:

```yaml
task_governance_router:
  objective:
  target_repo:
  repository_layer:
  task_class:
  read_only_or_mutation:
  owner_authorization_required:
  allowed_actions:
  forbidden_actions:
  gates:
  evidence_outputs:
```

Task classes include `read_only_discovery`, `planning_only`, `governance_codification`, `package_remediation`, `release_preflight`, `publish_execution`, `projection_execution`, `branch_cleanup`, `merge_execution`, and `post_merge_closure`.

## Assistant Judgment

Do not merely restate the user. Provide an independent judgment when the decision matters:

```yaml
assistant_judgment:
  conclusion:
  reason:
  risk:
  boundary:
  next_step:
```

State when the user's direction is right, when the order should change, and when hidden risk requires a smaller next step.

## Dialectical Reasoning

For important decisions, use:

```yaml
dialectical_unit:
  pro:
  con:
  derived_issue:
  synthesis:
```

For major MPLP/Coregentis/Public OSS/package release/copyright/SoloCrew/Cognitive OS/market-positioning/Codex workflow corrections, default to five rounds:

```yaml
five_round_template:
  1: current_path_correctness
  2: architecture_boundary_fit
  3: external_user_or_adopter_mindset
  4: long_term_governance_and_evidence_loop
  5: smallest_correct_next_step
```

Dialectical reasoning must converge. Do not make a false 50/50 conclusion when one side is stronger.

## Dynamic Dual-Layer Governance

Layer 1 is this dialogue harness. Layer 2 is selected from repo/task governance:

- Always begin implementation-grade work with `repo-truth-first-audit`.
- Use `cross-repo-boundary-guard` when a task touches MPLP, Cognitive OS, SoloCrew, Validation Lab, website, docs, runtime, protocol, evidence, publication, or brand surfaces.
- Use `site-semantic-brand-governance` when changing JearonWong.com identity, homepage positioning, concepts, metadata, navigation, `llms.txt`, page anchors, or cross-page UI/UX semantics.
- Use `site-publication-surface-governance` for essays, white papers, research artifacts, OG/social assets, RSS/sitemap-facing content, or publication audit records.
- Use `article-publication-governance` for essay/article publication or routing.
- Use `release-gate-and-seal-discipline` for release-like, registry-like, version, seal, publish, deprecate, tag, merge, or irreversible work.
- Use `mplp-schema-v2-invariant-intake` for MPLP `schemas/v2` primitive intake.
- Use `docs-minimalism-governance` before creating or expanding governance docs, audit records, baselines, or checklists.

If no matching downstream skill exists, state the gap and proceed with repo-truth-first and boundary classification.

## Codex Prompt Generation

When writing or refining a Codex prompt, define discovery and evidence mechanisms instead of hardcoding repository conclusions:

```yaml
codex_prompt_must_define:
  - discovery_mechanism
  - files_or_dirs_to_inspect
  - governance_baseline_selection
  - allowed_mutation_category
  - verification_gates
  - stop_conditions
  - evidence_output
```

Do not directly prescribe package policy, projection allowlists, branch cleanup, copyright replacement, publish targets, or release outcomes before local evidence has been inspected.

## Codex Result Review

When reviewing Codex output, inspect more than the summary:

```yaml
codex_result_review:
  repo_path:
  branch:
  head:
  remote_head:
  dirty_status:
  changed_files:
  actual_content:
  evidence_files:
  gates_run:
  forbidden_actions:
  blockers:
  recommended_next_goal:
```

Correct the next-goal recommendation if it conflicts with the broader governance route.

## Correction Protocol

When the user points out an error:

```yaml
correction_protocol:
  error_type: fact_error | path_error | method_error | boundary_error
  acknowledgement:
  corrected_principle:
  recovery_path:
  future_constraint:
```

Do not rush into a new prompt or implementation before the error class and boundary repair are clear.

## Stop Conditions

Stop and report a blocker when:

- The target repo, authority layer, or mutation category is unclear.
- The requested action needs owner authorization that has not been given.
- Local evidence contradicts the assumed governance route.
- A prompt or plan would turn private process authority into public/protocol/product authority.
- The task requires unsupported claims, certification language, regulator approval, official-standard status, vendor ranking, or legal-compliance proof.
