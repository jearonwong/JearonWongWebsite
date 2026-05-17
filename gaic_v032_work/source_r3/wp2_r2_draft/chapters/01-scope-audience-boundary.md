# 1. Scope, Audience, and Non-Audit-Standard Boundary

**Chapter status:** R2 INTERNAL DRAFT
**Chapter purpose:** Define who WP2 is for, what it does, what it does not do, how sources are used, and how GAIC/MPLP/Validation Lab relate to the draft.
**Reader question:** Who should use this paper, and what authority must it not claim?

## Key Claims

- WP2 is a lifecycle evidence guide and auditability readiness framework.
- WP2 is not an audit standard, assurance opinion, certification, legal compliance proof, regulator approval, procurement recommendation, vendor ranking, or Big Four/audit body endorsement.
- Big Four sources are market context only.
- GAIC is the source for MROs, AARM planning, Validation Lab boundary, and companion-paper scope.
- MPLP may be discussed as one optional lifecycle protocol path, never as required or industry-standard.

## Source Grounding Note

Assurance and attestation boundaries use AUD-03 and BOUND-03. Certification and conformity-assessment boundaries use BOUND-01 and BOUND-02. Governance role context uses AUD-07. Big Four AI assurance context uses BF-02 and BF-03 only as market context.

## Author Synthesis Note

WP2's scope, Audit Evidence Object layer, Agentic Audit Object, Audit Evidence Chain, and AARM are author synthesis. They are draft framework constructs, not externally adopted professional requirements.

## Draft Prose

This paper is written for readers who need to understand whether agentic AI work can be reconstructed. Its primary audience includes audit and assurance professionals, internal audit teams, technology risk teams, AI governance committees, enterprise control owners, CIOs, CTOs, CCOs, CROs, legal/privacy stakeholders, and platform leaders responsible for agentic systems. Its secondary audience includes advisory teams, AI assurance practitioners, risk engineering teams, agent runtime builders, procurement and vendor-risk teams, and standards or policy readers exploring agentic AI governance.

The paper's scope is deliberately narrow. It does not try to restate all model governance, responsible AI, cybersecurity, privacy, or enterprise risk management. Those fields remain necessary. WP2 focuses on the lifecycle evidence layer that becomes necessary when AI systems act through agents, tools, memory, delegation, multi-agent handoffs, and remediation workflows. The question is not simply whether a model behaved acceptably. The question is whether the lifecycle work can be reconstructed across authority, responsibility, tools, outcomes, exceptions, and closure.

WP2 is best understood as a lifecycle evidence guide. It defines the proposed object layer needed for audit-ready agentic work, maps GAIC MROs into audit evidence objects, proposes evidence request categories, provides walkthrough and partitioning patterns, introduces AARM readiness levels, and preserves boundaries around privacy, third-party validation, and assurance. It is a draft architecture for auditability, not a professional standard.

The source hierarchy matters. Professional audit and assurance sources provide language for evidence, controls, assurance boundaries, internal audit, attestation, and professional limits. AI governance sources provide context for risk management, accountability, monitoring, documentation, and human oversight. Evidence, provenance, observability, and log-management sources help distinguish raw event data from responsibility-linked evidence. Privacy sources ground the tension between reviewability, minimization, selective disclosure, and retention. Big Four sources provide market context: they show that AI assurance, trusted AI, audit transformation, and agentic AI are active enterprise topics. They do not endorse this paper.

GAIC source truth plays a different role. WP1 created the MRO object layer and the broader Agentic Lifecycle Governance framing. WP2 uses those GAIC-derived objects as its internal foundation. When this draft discusses MRO-01 through MRO-16, RCCS-M/ALCS context, the Evidence-Based Validation Pattern, Validation Lab boundary language, or companion-paper sequencing, it is relying on GAIC source truth, not external audit standards.

MPLP should be handled with care. MPLP may be described as one protocol path whose lifecycle responsibility semantics can help express evidence objects. WP2 does not require MPLP, does not rank MPLP above other approaches, does not claim MPLP is an industry standard, and does not claim MPLP proves compliance, auditability, assurance readiness, or enterprise readiness. Guide 1 may later discuss implementation paths, but WP2 must remain implementation-neutral.

Validation Lab is also boundary-sensitive. GAIC describes Validation Lab as a non-certifying evidence adjudication example. WP2 may use that boundary as an example of third-party evidence review without certification. It must not describe Validation Lab as a certification body, conformity assessment body, regulator, audit firm, assurance provider, legal authority, or proof of compliance.

The safest reading of WP2 is this: it provides a structured way to ask what evidence must exist before agentic AI work can be meaningfully reviewed. It does not determine whether that evidence is sufficient for a particular audit, assurance engagement, legal analysis, regulatory process, insurance underwriting decision, procurement decision, or board conclusion. Those determinations belong to qualified professionals operating under their own methods, scopes, independence requirements, criteria, and legal obligations.

## Scope Table

| Area | WP2 does | WP2 does not do | Source / boundary grounding |
|---|---|---|---|
| Auditability | Defines proposed lifecycle evidence objects and readiness questions | Issue audit opinions or audit procedures | AUD-01, AUD-02, AUD-03 |
| Assurance | Frames readiness for possible assurance planning | Provide assurance conclusion or engagement standard | AUD-03, BOUND-03 |
| Certification | Distinguishes validation from certification | Certify systems or define certification criteria | BOUND-01, BOUND-02 |
| Legal/privacy | Frames evidence/privacy tension | Provide legal advice or legal compliance proof | PRIV-01 to PRIV-05, AI-09 |
| Big Four context | Uses public materials as market context | Claim endorsement, adoption, or need | BF-01 to BF-05 |
| GAIC/MRO | Uses MROs as GAIC-derived object layer | Claim MROs are law or external standards | GAIC-SOURCE |
| MPLP | Treats MPLP as optional protocol path | Require MPLP or claim industry-standard status | GAIC-SOURCE |
| Validation Lab | Gives non-certifying evidence adjudication example | Claim certification, assurance opinion, or regulator approval | GAIC-SOURCE, BOUND-01, BOUND-02 |

## Cross-Links

- Appendix F contains reusable boundary language.
- Chapter 12 expands the validation/certification boundary.
- Chapter 15 addresses professional use by audit and assurance firms.

## Boundary Note

This chapter intentionally repeats non-claim language because WP2's usefulness depends on not overstating its authority.

## R3 QA Notes

- Confirm all "what WP2 is not" language is preserved in the final front matter.
- Check whether legal/privacy boundary text should be reviewed by counsel before public release.
