# WP3-R0 Chapters 1-3 Core Insurance Logic

**Task ID:** WP3-R0-INSURABILITY-ARCHITECTURE-BASELINE  
**Mode:** Planning-only  
**No-body-text note:** This file freezes chapter architecture only.

## Shared Core Diagram

Legal Subject -> Human Responsibility Role -> Agent / MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision

This diagram is analytical and review-oriented. It does not decide legal liability, coverage, exclusions, claim payment, or insurability.

## Chapter 1

### Title

The Insured Subject Problem: Who Is Covered When an Agent Acts?

### Core Answer

The insured legal subject remains a company, person, officer, professional, vendor, or organization. The AI agent is not usually the insured legal subject.

### Purpose

Explain that insurance analysis starts with who is covered before it can ask what agentic activity caused or contributed to a loss.

### Key Claim

An agentic action must be mapped back to a covered or potentially covered legal subject before an insurer can identify policy, role, liability path, exclusion, limit, or dispute frame.

### Section Outline

1. Insurance begins with a legal subject.
2. AI agents normally have no independent insured status.
3. Agentic action must be mapped back to human, company, vendor, officer, or professional responsibility.
4. Legal subject ambiguity creates policy and claim-review ambiguity.
5. WP1/WP2 provide the responsibility and evidence mapping needed for review.
6. Boundary statement: this chapter does not decide liability or coverage.

### Required Examples

- Customer-support agent causing a contractual dispute.
- Agentic finance workflow triggering an external action.
- Vendor-operated agent acting inside a client process.
- Officer-approved agentic deployment causing board-level risk concern.

### Required Table/Figure

- T-1-01: Insured legal subject types and agentic responsibility mapping questions.
- F-1-01: Subject-to-agent mapping chain.

### Source Research Needs

- Legal subject and insured subject basics.
- Named insured/additional insured basics as source context only.
- Corporate, professional, vendor, and officer policy context.
- AI agent legal-personhood boundaries, only from authoritative legal or regulatory context where available.
- WP1 MRO-01/MRO-03 and WP2 human/agent responsibility mapping.

### Boundary Notes

Do not provide legal advice, coverage opinion, liability determination, D&O interpretation, E&O interpretation, or policy-form guidance.

### Later Chapter Dependencies

Chapters 2, 3, 8, 9, 10, and 13 depend on Chapter 1's legal-subject distinction.

## Chapter 2

### Title

The Insurable Object Problem: What Exactly Is Being Covered?

### Core Answer

The company or human may be the insured legal subject; the insurable risk object is the bounded agentic work unit, operation, exposure, or loss-triggering activity.

### Purpose

Define the difference between who is insured and what agentic exposure is being reviewed.

### Key Claim

Model name, vendor name, or workflow label is not enough. Insurable agentic risk must be bounded by scope, authority, tools, data, time, human oversight, and accepted outcome.

### Section Outline

1. Subject and object are different questions.
2. Company/person = insured subject.
3. Agent/workflow/system exposure = risk object.
4. Model/vendor/workflow name is insufficient.
5. Agentic work unit must be bounded.
6. Boundary statement: object model is analytical, not a policy form.

### Required Examples

- Same model used in low-risk drafting and high-impact financial execution.
- Same vendor operating across different client authority boundaries.
- Same agent workflow with different tool permissions.
- Same output accepted by one human role and rejected by another.

### Required Table/Figure

- T-2-01: Subject vs risk object vs evidence field.
- T-2-02: Bounded agentic work-unit fields.
- F-2-01: Work-unit boundary map.

### Source Research Needs

- Insurance policy structure basics.
- Underwriting evidence requirements for cyber/technology risk.
- AI model/performance product context.
- Technical framework context for agents, tools, workflows, MCP, A2A, and OpenAI Agents SDK only as technical background.
- WP1 MRO-02, MRO-04, MRO-05, MRO-08, MRO-15.

### Boundary Notes

Do not define policy wording, coverage trigger, underwriting rule, pricing model, or certification.

### Later Chapter Dependencies

Chapters 4, 5, 8, 9, 12, 13, and 15 depend on Chapter 2's risk-object boundary.

## Chapter 3

### Title

The Responsibility Mapping Problem: How Human Liability and Agentic AI Risk Connect

### Core Answer

The insurance problem is not whether humans remain liable or agents become liable. The problem is whether agentic actions can be mapped to human and organizational responsibility in a way that supports underwriting, claims review, exclusions, and dispute resolution.

### Purpose

Explain why simple human-in-the-loop language is insufficient for insurance review.

### Key Claim

Human role x agent role x work unit x evidence x loss event x legal subject is the core insurance mapping.

### Must Explain

- HITL is not responsibility mapping.
- An approval button is not liability structure.
- MAS roles must map to human responsibility roles.
- Human responsibility must connect to authority, action, outcome acceptance, exception, remediation, and evidence.
- This logic directly derives from the main GAIC whitepaper's human role / MAS responsibility mapping.

### Section Outline

1. Why "human in the loop" is too vague.
2. Why approval alone does not define responsibility.
3. Human role, agent role, and MAS role must be separated.
4. Agentic work units must carry responsibility and evidence fields.
5. Loss events need reconstruction, not narrative memory.
6. Boundary statement: responsibility mapping is not legal liability assignment.

### Required Examples

- Human approves goal but not tool action.
- Agent delegates to another agent under unclear authority.
- Reviewer accepts output but not downstream execution.
- Vendor tool performs a material action after an agent call.

### Required Table/Figure

- T-3-01: HITL vs responsibility mapping.
- T-3-02: Human role x agent role x work unit x evidence x loss event x legal subject.
- F-3-01: Legal Subject -> Human Responsibility Role -> Agent / MAS Role -> Agentic Work Unit -> Loss Event -> Claim Evidence Chain -> Coverage / Exclusion Decision.

### Source Research Needs

- Claims reconstruction and causality evidence.
- Professional liability and E&O context.
- D&O/corporate liability source context.
- WP1 MRO-01, MRO-03, MRO-06, MRO-07, MRO-16.
- WP2 Agentic Audit Object and Audit Evidence Chain.

### Boundary Notes

Do not decide legal liability, coverage, exclusions, claim acceptance, regulatory compliance, or professional responsibility outcomes.

### Later Chapter Dependencies

Chapters 6, 7, 8, 10, 13, 15, and 16 depend on Chapter 3's responsibility mapping.
