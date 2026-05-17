# 10. Privacy, Selective Disclosure, and Audit Evidence Minimization

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Balance auditability with privacy, confidentiality, minimization, and retention discipline.
**Reader question:** How can evidence be reviewable without overexposure?

## Key Claims

- Auditability should not become evidence hoarding.
- Privacy-aware auditability uses minimization, redaction, retention discipline, evidence pointers, partitioning, and selective disclosure.
- WP2 frames privacy/evidence tension; it does not provide legal advice or GDPR compliance proof.

## Source Grounding Note

Privacy and minimization context uses PRIV-01, PRIV-02, PRIV-03, PRIV-04, PRIV-05, and AI-09. GAIC source truth provides MRO-10 through MRO-13 and the Validation Lab selective disclosure boundary.

## Author Synthesis Note

The privacy-preserving audit evidence controls are WP2 synthesis grounded in public privacy guidance and GAIC MROs.

## Draft Prose

Auditability can create a privacy problem if it is misunderstood. The answer to weak evidence is not to collect everything forever. Agentic systems may process personal data, confidential business data, privileged material, regulated data, customer records, employee records, prompts, outputs, tool responses, logs, memory, and third-party processor data. If auditability becomes indiscriminate evidence capture, it may increase exposure and reduce trust.

The better question is: what evidence is necessary for the review objective, and how can it be disclosed safely? This requires minimization, partitioning, retention discipline, access control, redaction, evidence pointers, and reviewer-specific disclosure profiles.

Privacy-aware auditability begins with purpose. Evidence should be collected and retained for defined review purposes: reconstruction, control review, exception handling, third-party validation, remediation, or assurance planning. A generic desire to "keep all logs just in case" is not a mature evidence strategy.

The second principle is minimization. Evidence objects should identify what fields are needed for reconstruction and which fields can be redacted, tokenized, summarized, hashed, or replaced with pointers. A reviewer may need to know that a tool action affected a customer data category without seeing every raw value. Another reviewer may need access under a narrower approved scope. The evidence architecture should support both.

The third principle is selective disclosure. Different reviewers need different levels of evidence. Internal engineering may need logs and traces. Internal audit may need work unit chains and evidence pointers. Privacy teams may need data category and retention records. Third-party reviewers may need redacted evidence packs, ruleset identity, verdict hashes, or replay packages. The system should make disclosure explicit, scoped, and recorded.

The fourth principle is retention discipline. Evidence needs may conflict with storage limitation and deletion expectations. WP2 does not decide legal retention periods. It asks that systems record retention rules, expiry, holds, deletion/redaction actions, and rights-retention reconciliation where relevant. A reviewable retention decision is stronger than a silent default.

The fifth principle is boundary clarity. Privacy sources provide context, not legal conclusions. A privacy-preserving evidence architecture does not prove GDPR compliance, UK GDPR compliance, EU AI Act compliance, or any jurisdiction-specific legal compliance. It creates the object layer that legal, privacy, audit, and governance professionals can review.

## Table 7: Privacy-Preserving Audit Evidence Controls

| Control | Purpose | Evidence artifact | Selective disclosure mechanism | Privacy risk reduced | Residual review need |
|---|---|---|---|---|---|
| Evidence minimization | Avoid unnecessary collection | Minimization rule, field inventory | Request only review-relevant fields | Overcollection | Legal/privacy review for purpose and necessity |
| Redaction profile | Remove or mask sensitive fields | Redaction rule and redaction log | Redacted evidence pointer | Overexposure to reviewer | Sufficiency check after redaction |
| Evidence pointer | Reference evidence without copying raw data | Pointer, hash, manifest entry | Reviewer-scoped access or replay | Data duplication | Integrity and access review |
| Retention rule | Limit storage duration or define hold | Retention schedule, expiry, hold indicator | Time-bound access | Excessive retention | Legal/privacy retention analysis |
| Disclosure profile | Define who can see what | Disclosure matrix, access log | Role-based disclosure package | Unscoped sharing | Reviewer authorization review |
| Rights-retention reconciliation | Address tension between rights requests and evidence retention | Request record, action, hold status, rationale | Redaction/deletion/hold decision path | Silent conflict between evidence and rights | Legal review |
| Third-party validation package | Support review without raw exposure | Redacted evidence pack, ruleset ID, verdict hash | Non-raw evidence adjudication | Third-party overexposure | Boundary and conflict review |

**Table note:** Source-grounded and GAIC-derived table. It is not legal advice, privacy compliance proof, or universal retention guidance.

## Cross-Links

- Chapter 9 addresses evidence partitioning.
- Chapter 12 addresses third-party validation boundaries.
- Appendix F provides privacy/legal boundary language.

## Boundary Note

This chapter does not provide legal advice, interpret specific legal obligations, or claim that any architecture proves compliance with GDPR, UK GDPR, EU AI Act, or other privacy laws.

## R3 QA Notes

- Flag this chapter for legal/privacy sensitivity review before public release.
- Check whether "selective disclosure" needs technical examples or should stay high-level in WP2.
