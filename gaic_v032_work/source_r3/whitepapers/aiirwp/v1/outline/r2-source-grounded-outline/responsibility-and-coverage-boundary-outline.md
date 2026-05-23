# Responsibility and Coverage Boundary Outline

**Status:** Source-grounded outline support only. This file does not provide legal advice, insurance advice, coverage opinion, liability determination, or claims approval guidance.

## Chapter Role

Chapter 16 should help readers sort the evidence questions that arise when an AI-linked loss crosses human review, agent behavior, vendor dependency, policy line, exclusion, sublimit, and remediation responsibility. It should frame the review architecture without deciding the legal or coverage outcome.

## Boundary Thesis

Responsibility evidence and coverage review are related but not identical. WP3 can show how to preserve and organize evidence about roles, authority, causality, policy-line context, exclusions, sublimits, and remediation, but actual liability, coverage, and claim outcomes remain external and case-specific.

## Responsibility and Coverage Boundary Elements

| Element | R3 purpose | Evidence needed | Boundary |
|---|---|---|---|
| Insured subject | Identify the legal person/entity whose policy may be implicated | Named entity, business unit, policyholder role, responsible owner | Do not decide coverage |
| Named insured / additional insured concept | Mention only as a policy-structure concept if source-grounded in final drafting | Policy declarations or sourced insurance explanation if later added | Do not infer named-insured status |
| Human role | Identify reviewer, approver, operator, manager, or professional | Role record, approval record, escalation record, training/control context | Do not determine human liability |
| Agent role | Identify whether the agent drafted, recommended, approved, executed, or monitored | Agent logs, prompt/tool calls, authority scope, task record | Do not treat the agent as legal insured subject |
| Vendor/platform role | Identify dependency and service boundary | Contract/source context if available, platform logs, service status, dependency register | Do not determine vendor liability |
| Tool/model provider role | Identify model/tool contribution to output or incident | Model endpoint, version, tool invocation, API record, dependency map | Do not assign fault |
| Policy line | Identify possible review lanes such as D&O, E&O, Tech E&O, Cyber, EPLI, Media/IP, Crime/Fraud, Product Liability, Professional Liability | Policy line context and loss scenario | Do not offer coverage opinion |
| Exclusion | Identify whether AI, cyber, professional, or other exclusion language may need review | Policy text if available; R1 caveated market signals only as context | Do not conclude exclusion applies |
| Sublimit | Identify whether AI-linked cyber or other limits may constrain transfer | Policy terms or sourced sublimit signal if verified | Do not recommend limits or apply sublimits |
| Causality trace | Connect event sequence, technical action, authority state, and loss narrative | Timeline, logs, tool calls, human actions, external dependencies | Technical causality is not legal causation |
| Legal causation boundary | Preserve distinction between reconstruction and legal conclusion | Boundary note, counsel review context if applicable | Do not determine proximate cause |
| Coverage review boundary | Preserve distinction between evidence package and policy interpretation | Policy-specific review by authorized parties | Do not determine claim outcome |
| Remediation responsibility | Identify who owned containment, fix, retest, reauthorization, and residual-risk acceptance | Closure record, change record, owner signoff, retest evidence | Closure does not prove no liability |
| Dispute package | Organize evidence for later review | Evidence index, source map, timeline, caveat log, missing-evidence register | Does not guarantee acceptance |

## Policy-Line Examples for R3

| Line | Example ambiguity | Evidence question |
|---|---|---|
| D&O | Board or officer oversight of AI governance failure | What governance records, disclosure records, and oversight decisions exist? |
| E&O / Professional Liability | AI-assisted professional output relied on by client | Who reviewed, accepted, and delivered the professional work product? |
| Tech E&O | AI-enabled service failure affecting customer operations | Which service object failed, and what dependency or vendor records exist? |
| Cyber | LLMjacking, credential abuse, data exposure, API misuse | What incident timeline, containment, forensic, and authority records exist? |
| EPLI | AI-assisted employment screening or workplace decision | What human review, policy, and decision records exist? |
| Media / IP | AI-generated content causing rights or publication dispute | What source, review, approval, and publication records exist? |
| Crime / Fraud | Agentic workflow enables fraudulent transfer or impersonation | What approval, authentication, tool-use, and payment records exist? |
| Product Liability | AI-enabled product/service contributes to harm | What design, use, monitoring, and remediation records exist? |

## Suggested Chapter Structure

1. Open with a professional-service or cyber-linked AI loss scenario involving human, agent, vendor, and policy-line ambiguity.
2. Separate responsibility evidence from coverage review.
3. Present the responsibility and coverage boundary matrix.
4. Explain causality trace vs legal causation.
5. Explain policy line, exclusion, and sublimit review as questions, not conclusions.
6. Close by linking remediation responsibility to Chapter 17.

## Forbidden Moves

- Do not decide liability.
- Do not decide coverage.
- Do not say an exclusion or sublimit applies.
- Do not give claims approval guidance.
- Do not say a responsibility map proves legal causation.
- Do not say an evidence package compels insurer action.
