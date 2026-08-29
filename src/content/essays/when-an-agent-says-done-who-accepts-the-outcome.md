---
title: 'When an Agent Says "Done," Who Accepts the Outcome?'
titleLines:
  - 'When an Agent Says "Done,"'
  - 'Who Accepts the Outcome?'
subtitle: "Execution can complete. Delivery still needs an accepting role."
description: "An Agent can complete its execution while the work remains unaccepted. A first-person field essay from building MPLP and its Development Runtime about Intent change, evidence, authority, and the lifecycle decision that turns execution into delivery."
shareTitle: "When an Agent Says Done"
shareSubtitle: "Execution can complete. Delivery still needs an accepting role."
shareDescription: "A first-person field essay on why execution completion is not delivery, why a receipt is evidence rather than authority, and why AcceptedOutcome must be a lifecycle responsibility decision."
shareImage: /social/when-an-agent-says-done-og.png
shareImageAlt: "When an Agent Says Done, Who Accepts the Outcome? - Jearon Wong"
publishDate: 2026-08-25
updatedAt: 2026-08-26
cluster: ai-agent-lifecycle
projectProof: MPLP
track: lifecycle
contentRole: essay
publicationClass: field-note
editorialTrack: lifecycle
canonicalRoute: /essays/when-an-agent-says-done-who-accepts-the-outcome/
canonicalParent: /essays/
primaryAudience: Builder
secondaryAudiences:
  - Architect
  - Governance
distinctReaderQuestion: "Who can accept an agent outcome when execution finishes but intent, authority, or evidence has changed?"
sourceRefs:
  - MPLP Development Runtime field work
  - Authored field essay
indexability: index
nextSteps:
  - /lifecycle/
  - /projects/mplp/
maxClickDepth: 3
readingTimeMinutes: 12
evidenceLevel: FIELD NOTE FROM MPLP DEVELOPMENT
featured: true
summary: "Execution completion is not delivery. A lifecycle needs an accepting role."
summaryLines:
  - "Execution completion is not delivery."
  - "A lifecycle needs an accepting role."
ogImage: /social/when-an-agent-says-done-og.png
images:
  - url: /figures/when-an-agent-says-done-lifecycle-evidence.svg
    alt: "Execution run compared with an accountable lifecycle: Intent, Authority, Action, Evidence, Accepted Outcome, and Remediation or Reopen"
    caption: "A completed execution run can produce a receipt without producing an accepted outcome. The lifecycle keeps Intent, Authority, Evidence, and Acceptance connected across change and recovery."
    thumbnailUrl: /social/when-an-agent-says-done-og.png
    width: 1600
    height: 900
series: "Define The AI Agent Lifecycle"
seriesOrder: 7
status: published
tags:
  - AI Agent Lifecycle
  - Accepted Outcome
  - Agent Accountability
  - Agentic Delivery
  - Evidence Chain
  - Intent Drift
relatedIdeas:
  - ai-agent-lifecycle
  - agentic-delivery
  - lifecycle-governance
  - protocol-engineering
  - accepted-outcome
relatedProjects:
  - MPLP
  - Cognitive OS
  - Validation Lab
---

*Execution can complete. Delivery still needs an accepting role.*

By Jearon Wong

> An agent's completed execution is not an accepted business outcome. While building MPLP and its Development Runtime, I found that Intent changes, controlled effects, and multi-Agent handoffs each create a separate responsibility boundary. An accepted outcome requires a current Intent, sufficient evidence, and a role with explicit authority to accept, reject, reopen, or remediate the result.

Architecture diagrams did not surface this problem. The problem appeared when I tried to make an Agent Runtime carry real work far enough that another person could trust the result.

At first, I thought the difficult part would be execution. The system needed to call tools, preserve state, coordinate more than one Agent, produce evidence, and recover when something went wrong. If those pieces worked, I assumed the remaining problem would be a matter of workflow design and better interfaces.

That assumption was wrong.

The harder problem appeared after execution had become visible and testable. I could see the calls, inspect the traces, verify the receipts, and confirm that an Agent had completed its assigned steps. None of that identified the person or role with authority to accept the result. The run was complete. The delivery decision was still missing.

That gap became the boundary between execution and delivery for me.

Execution completion is not delivery.

## The industry already knows how to observe execution

Agent systems are not invisible. The industry has built increasingly capable layers for tool access, orchestration, tracing, evaluation, retries, and operational monitoring. These layers are necessary. They show what an Agent attempted, which tools it called, how long a step took, and where a workflow stopped.

That visibility changes the problem.

Once execution can be observed, another problem comes into view: the record can show what happened without showing whether the original meaning survived the work or who can accept the result.

A trace can show movement. A receipt can show that an action was recorded. A successful workflow can show that a sequence terminated.

None of those, by themselves, are an accepted outcome.

I learned this through three engineering findings about lifecycle meaning. None was a failure of model intelligence. In each case the system could execute while the responsibility structure remained incomplete.

## First, Intent changed before we had a record for the change

In early July, I was working through a protocol question that looked simple at first: how an Intent should evolve after work has already started.

The existing version relationship could tell me that one Intent version came after another. That was useful, but it was not enough. It recorded ancestry, not the authorizer, the materiality of the change, or whether the plan and confirmation boundary had to reopen. History was present. Responsibility was not.

That distinction matters in ordinary project delivery. A refinement to a sentence is not the same as a change to the objective. A change in scope is not the same as a correction to an implementation detail. A pivot can invalidate an approval that was perfectly valid for the previous version.

If the system stores only "current version" and "previous version," it preserves history without preserving responsibility.

I therefore had to treat the change itself as a lifecycle record. The record needed to bind the prior and current versions, the type of change, the authorizer, the supporting evidence, the supplied materiality decision, and, when required, the relation to reopening and reconfirmation.

This became the basis for the Intent Delta semantics in MPLP.

The important lesson was not the name of the object. Versioning an Intent does not make the transition accountable. The transition needs its own authorizer, evidence, and materiality decision.

## Then, the first real write made "success" look very small

Later in July, I allowed the Development Runtime to perform one bounded local effect: a controlled write against a disposable target.

It was intentionally low risk. It did not touch an external service. It did not publish anything. It was not a production deployment.

It was still the moment when the architecture had to stop speaking in abstractions.

Before the write could happen, the Runtime had to establish the exact plan, the target allowlist, the expected preimage, the mutation lease, the fence, the idempotency key, and the one-writer boundary. The write then needed an atomic path, a read-back, a content-addressed journal, and a committed record bound to the current state.

The reason was not theoretical. A successful write can still be the wrong write.

The target can change between planning and execution. Two writers can race. A process can stop after the target changes but before the evidence is committed. A recovery path can restore an old state over a newer legitimate change. A retry can produce a duplicate effect.

The Runtime therefore had to preserve the exact preimage before mutation and make recovery a distinct path. A pending or partial effect restored the recorded preimage and ended in a rolled-back state. A committed effect did not get silently replayed just because a later receipt was missing.

The line that changed how I think about delivery was simple:

The receipt is evidence, not authority.

A receipt records a bounded action and the evidence around it. Permission, intent fit, and acceptance still belong to the relevant authority and accepting role.

That distinction is easy to say and surprisingly easy to erase in a fast-moving system. A green gate starts to stand in for a decision. A receipt starts to stand in for legitimacy. A terminated workflow starts to stand in for delivery.

The first effectful change made those shortcuts impossible to defend.

## Then two Agents finished, and the work was still not accepted

The clearest evidence came from a bounded multi-Agent coordination run.

I gave two Agents separate scopes, deadlines, budgets, and authority boundaries. The system recorded their assignments and attempts. One responsibility transfer from Agent A to Agent B was accepted. A contention between proposals was resolved deterministically, with the losing proposal retained as evidence.

Both Agents produced completion records.

The handoff existed.

The evidence existed.

The system still had no accepted outcome.

At first glance, this looked like an incomplete projection. It would have been easy to add one more field, mark the run complete, and move on.

But the missing record was telling me something more important: completion and acceptance were different lifecycle states.

The Agents could report that they had completed the work assigned to them. The Runtime could verify that the expected evidence existed. The handoff could show that responsibility had moved from one Agent to another.

None of those actors necessarily had the authority to decide that the project result satisfied the original Intent.

That decision belonged to an accepting role with a bounded domain, a defined acceptance criterion, and enough evidence to make the decision explainable.

This was the point at which I stopped treating `AcceptedOutcome` as a final status field.

AcceptedOutcome is a versioned responsibility decision, not a final status field.

It names a bounded acceptance decision, not a nicer label for "done."

An accepted outcome must bind four things: the Intent and version it belongs to, the evidence supporting the decision, the role or authority that accepted it, and the path to reopen or remediate the work if the decision is later disputed or the Intent changes.

The exact criteria differ by domain. A marketing review, a code change, a treasury operation, and a compliance workflow do not share one universal success metric. The acceptance record has to be specific to the work, the authority, and the role that is allowed to accept it.

The role that accepts an outcome is not automatically the party that bears every legal, organizational, or commercial consequence of that outcome. Acceptance is a lifecycle decision, not a complete theory of liability.

AcceptedOutcome is not an enterprise KPI. It is a versioned lifecycle decision.

## This is not a logging problem

The natural response to an incomplete outcome is to add more observability.

Sometimes that is exactly right. Missing evidence is a real problem. Poor traces make investigation expensive. Inconsistent identifiers make handoffs difficult to reconstruct.

More logs do not solve the authority problem.

A perfect chronological record can document an unauthorized action. Every tool call can be preserved even when an Agent misunderstood the scope. A complete trace can show two Agents finishing the wrong objective.

The record will be excellent. The delivery will still be wrong.

Workflow approvals, OpenTelemetry traces, IAM controls, and Human-in-the-loop nodes each solve part of the problem. The gap appears when they are not bound to the same Intent version, Authority boundary, Evidence chain, and acceptance decision across the life of the work.

That cross-layer continuity is the problem I am trying to make explicit. It is also why this is a protocol question rather than a request for one more dashboard field.

The lifecycle has to preserve more than activity. It has to preserve meaning and responsibility across the transitions where meaning is most likely to be lost. I now read those transitions as a small registry of states and handoff conditions:

<div class="protocol-stack-diagram" aria-label="Accountable agent lifecycle registry">
  <div class="protocol-layer protocol-layer--application">
    <span class="protocol-layer__label">01 / Intent</span>
    <strong>Versioned scope and materiality</strong>
    <span>Current Intent, Delta, authorizer, and the decision about whether the change is material.</span>
    <small>Control: current work remains attached to the same Intent.</small>
  </div>
  <div class="protocol-layer protocol-layer--governance">
    <span class="protocol-layer__label">02 / Authority + Plan</span>
    <strong>Bounded permission before execution</strong>
    <span>Role, target, constraints, confirmation boundary, and the plan that turns the Intent into an executable scope.</span>
    <small>Control: the role, scope, and confirmation boundary are explicit.</small>
  </div>
  <div class="protocol-layer protocol-layer--coordination">
    <span class="protocol-layer__label">03 / Action + Handoff</span>
    <strong>Controlled effect with responsibility attached</strong>
    <span>One writer, explicit delegation, idempotency, and a handoff that keeps the same Intent in view.</span>
    <small>Control: responsibility moves with the handoff instead of disappearing into a message.</small>
  </div>
  <div class="protocol-layer protocol-layer--tools">
    <span class="protocol-layer__label">04 / Evidence + Review</span>
    <strong>Receipts that can support a decision</strong>
    <span>Preimage, effect, read-back, trace, and reviewable evidence bound to the current lifecycle state.</span>
    <small>Control: another role can verify the effect from the bound evidence.</small>
  </div>
  <div class="protocol-layer protocol-layer--runtime">
    <span class="protocol-layer__label">05 / Accepted Outcome</span>
    <strong>Acceptance, remediation, or reopen</strong>
    <span>An accepting role records the decision and keeps a defined path to dispute, rollback, compensation, or remediation.</span>
    <small>Control: an accepting role is named, with a defined path to reopen or remediate.</small>
  </div>
</div>

<figure class="article-figure article-figure--diagram">
  <img src="/figures/when-an-agent-says-done-lifecycle-evidence.svg" alt="Execution run compared with an accountable lifecycle: a run can produce an action, trace, receipt, and done state, while an accountable lifecycle binds Intent, Authority, Evidence, Accepted Outcome, and Reopen or Fix." width="1600" height="900" loading="lazy" decoding="async" />
  <figcaption>Figure 1. A completed execution run can produce a receipt without producing an accepted outcome. The lifecycle keeps Intent, Authority, Evidence, and Acceptance connected across change and recovery.</figcaption>
</figure>

The arrows are not decorative. Each one is a boundary where a system can ask whether the next state is authorized, current, supported by evidence, and still attached to the same work.

When an Intent changes materially, the lifecycle may need to reopen.

When an effect is partial, the lifecycle may need to recover or compensate.

When an Agent hands work to another Agent, responsibility must move explicitly rather than disappearing into a message.

When execution completes, acceptance must come from the role that owns that decision.

## What this changed in MPLP

I did not design MPLP because I wanted to add governance vocabulary to an Agent framework.

I needed a way to preserve the meaning of work while the work moved through Agents, tools, state changes, evidence, review, and recovery.

The development Runtime made the missing pieces visible.

Intent needed versioned change semantics, not only ancestry.

Effects needed authority and recovery semantics, not only a success callback.

Evidence needed to remain evidence, rather than quietly becoming authority.

Completion needed to remain distinct from acceptance.

Handoffs needed to preserve responsibility rather than merely pass context.

These are lifecycle requirements. They do not belong exclusively to a model, a workflow engine, a tracing vendor, or a user interface.

By mid-August, the Runtime exposed a related problem at the control-plane level. More than one admission path, dispatcher, queue, or current authority could make the same lifecycle appear valid from different perspectives. A stale Edition could carry receipts that were once correct but were no longer current. A validation path could accidentally become a second dispatcher. A completion projection could lag behind the work it was supposed to describe.

The correction was architectural, not cosmetic: one lifecycle reducer, one executable queue, one current authority, and currentness checks that fail closed. Historical receipts remain evidence of what happened. They do not become permission to replay the past.

That is why I see MPLP as one proposed protocol path above Agent runtimes. The protocol does not replace execution or prescribe the only possible implementation. It gives execution a place to carry the meaning and responsibility that delivery requires.

The Runtime decides how to execute. The lifecycle semantics define what must remain true while execution is happening and what must be proven before work can be accepted.

## The boundaries of the claim

The current Development Runtime remains a development system. It is not a complete production Agent OS. MPLP's Intent Delta records a supplied comparison, materiality decision, evidence, and reopen relation; it does not by itself detect every form of Intent Drift. A configured profile, detector, human decision, or independent validation may still be required.

Rollback is domain-specific. A local filesystem effect can have a precise preimage and recovery path. A payment, publication, contract, or market action may require compensation, dispute handling, or remediation instead.

An evidence packet organizes material for a defined assessment. It does not become a certification, regulatory approval, insurance decision, or legal conclusion. A Runtime built on lifecycle semantics can prepare the evidence; the relevant authority still makes the determination.

Those limits are part of the argument. A lifecycle that cannot distinguish evidence from authority is not more governed because it uses more governance language.

## Where the work leaves me

When an Agent says "done," most systems can now tell us what happened next. The harder part is establishing that the work still matches the Intent, that the evidence supports the decision, and that the accepting role had the authority to make it.

I believe this is the next boundary in Agentic AI.

The industry has spent the first phase making Agents capable of action. The next phase will require systems that can carry responsibility across action.

That is what a lifecycle is for.

The practical test is simple: when an Agent says "done," the system still has to show who accepted the outcome.

---

*This essay is based on engineering work carried out while developing MPLP and its Development Runtime during July and August 2026. The examples describe bounded protocol and Runtime experiments, not a claim of production readiness, certification, or independent audit approval.*
