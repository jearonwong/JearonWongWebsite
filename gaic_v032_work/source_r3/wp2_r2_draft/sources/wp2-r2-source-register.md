# WP2-R2 Source Register

**Status:** R2 internal draft source register
**Boundary:** Sources listed here are used for context, terminology, grounding, or boundary discipline. Inclusion does not imply endorsement of WP2, GAIC, MPLP, AARM, Validation Lab, or Jearon Wong.

## Source Use Rules

- Big Four sources are market context only.
- Audit/professional sources support audit evidence, assurance, controls, internal audit, and boundary language.
- AI governance/public guidance sources support governance context, risk management, accountability, documentation, monitoring, and human oversight.
- Evidence/provenance/observability/logging sources support the distinction between logs/traces and responsibility-linked audit evidence chains.
- Privacy sources support minimization, retention, selective disclosure, and evidence/privacy tension.
- Boundary sources support distinctions among validation, assurance, attestation, certification, conformity assessment, and audit opinion.
- GAIC source truth supports MROs, RCCS-M/ALCS context, Evidence-Based Validation Pattern, Validation Lab boundary, and companion-paper boundary.

## Register

| Source ID | Title | Organization | Source class | Use role | Chapters used | Quote/paraphrase note | Boundary note |
|---|---|---|---|---|---|---|---|
| BF-01 | AI agents: Scaling faster than expected | Deloitte | Big Four market context | Agentic AI adoption and enterprise readiness context | 0, 2, 14, 15 | Paraphrase only | No endorsement claim. |
| BF-02 | Assurance for AI | PwC | Big Four market context | AI assurance market context | 0, 1, 14, 15 | Paraphrase only | Context only; not WP2 validation. |
| BF-03 | EY Assurance releases new technology capabilities strengthening confidence and trust | EY | Big Four market context | Audit transformation and assurance technology context | 1, 15 | Paraphrase only | No methodology replacement claim. |
| BF-04 | KPMG Trusted AI | KPMG | Big Four market context | Trusted AI, governance, privacy, and accountability context | 2, 10, 14 | Paraphrase only | Context only. |
| BF-05 | AI Agents Move Beyond Experimentation as Leaders Prepare for Competitive Transformation Within 24 Months | KPMG | Big Four market context | Agentic AI adoption and risk context | 0, 2, 14, 15 | Paraphrase only | No adoption or endorsement claim. |
| AUD-01 | AS 1105: Audit Evidence | PCAOB | Audit/professional body | Audit evidence terminology and sufficiency/appropriateness framing | 0, 3, 4, 5, 6, 7, 13, 16 | Paraphrase; short definition quote only if later approved | WP2 is not a PCAOB audit standard. |
| AUD-02 | ISA 500 (Revised), Audit Evidence | IAASB | Audit/professional body | Audit evidence and technology-enabled evidence context | 3, 4, 7, 13 | Paraphrase only | WP2 is not ISA methodology. |
| AUD-03 | ISAE 3000 (Revised) | IAASB | Audit/professional body | Assurance engagement boundary | 1, 12, 13, 15, 16 | Paraphrase only | WP2 does not issue assurance conclusions. |
| AUD-04 | Trust Services Criteria | AICPA | Audit/professional body | Control vocabulary, monitoring, privacy/security, control activities | 5, 7, 8, 10, 11, 14 | Paraphrase only | WP2 is not SOC or attestation guidance. |
| AUD-05 | Audit and Assurance Guidance for the NIST Cybersecurity Framework 2.0 and Artificial Intelligence | ISACA | Audit/professional body | AI audit and assurance practice context | 6, 7, 8, 11, 13, 15 | Paraphrase only | No ISACA endorsement. |
| AUD-06 | Global Technology Audit Guide: Auditing Artificial Intelligence | IIA | Audit/professional body | Internal audit, AI governance, controls, human oversight | 2, 7, 8, 11, 13, 14, 15 | Paraphrase only | Internal audit language only. |
| AUD-07 | The IIA's Three Lines Model | IIA | Audit/professional body | Governance role separation | 1, 14, 15 | Paraphrase only | Not an enterprise mandate. |
| AI-01 | Artificial Intelligence Risk Management Framework 1.0 | NIST | Regulator/public guidance | AI risk management, governance, monitoring, accountability | 0, 2, 3, 5, 6, 13, 14, 16 | Paraphrase only | Guidance context, not legal proof. |
| AI-02 | NIST AI 600-1 Generative AI Profile | NIST | Regulator/public guidance | Generative AI risk, incidents, monitoring, documentation | 2, 7, 11, 14 | Paraphrase only | Guidance context only. |
| AI-03 | OECD AI Principles | OECD | Public guidance | Responsible AI accountability and transparency context | 1, 2, 14 | Paraphrase only | Policy context only. |
| AI-04 | ISO/IEC 42001:2023 AI management system | ISO | Standards body | AI management-system context | 2, 13, 14 | Paraphrase public summary only | No compliance claim. |
| AI-05 | ISO/IEC 23894:2023 AI risk management | ISO | Standards body | AI risk-management context | 2, 13, 14 | Paraphrase public summary only | No standard compliance claim. |
| AI-06 | Regulation (EU) 2024/1689 Artificial Intelligence Act | European Union | Regulator/public guidance | AI governance, logging, human oversight, documentation context | 1, 2, 4, 7, 14 | Paraphrase only | Legal context only; no legal advice. |
| AI-07 | Model AI Governance Framework for Generative AI | AI Verify Foundation / IMDA | Public guidance | Generative AI governance and testing context | 1, 2, 7, 14 | Paraphrase only | No endorsement. |
| AI-08 | Model AI Governance Framework for Agentic AI | Singapore MDDI / AI Verify Foundation | Public guidance | Agentic AI governance, autonomy, accountability, safeguards | 0, 2, 3, 5, 6, 14 | Paraphrase only | Context only. |
| AI-09 | Guidance on AI and Data Protection | UK ICO | Regulator/public guidance | AI/privacy context | 9, 10, 14 | Paraphrase only | No legal advice. |
| EVID-01 | PROV Overview | W3C | Technical documentation | Provenance vocabulary for entities, activities, agents, derivation, responsibility | 3, 4, 5, 8, 9, 13 | Paraphrase only | Technical vocabulary, not audit standard. |
| EVID-02 | OpenTelemetry Observability Primer | OpenTelemetry | Technical documentation | Logs, metrics, traces, observability context | 0, 4, 8, 9, 14 | Paraphrase only | Do not criticize vendors. |
| EVID-03 | SP 800-92 Guide to Computer Security Log Management | NIST | Public guidance | Log management context | 4, 9, 10 | Paraphrase only | Older official logging source; not agentic auditability. |
| EVID-04 | Cybersecurity Framework 2.0 | NIST | Public guidance | Governance, detection, response, recovery, incident context | 4, 11, 14 | Paraphrase only | Cybersecurity context only. |
| PRIV-01 | GDPR Article 5 | European Union | Regulator/public guidance | Minimization, storage limitation, accountability context | 9, 10 | Paraphrase; short quote only if later approved | Legal context, not advice. |
| PRIV-02 | EDPB Guidelines 4/2019 on Article 25 | EDPB | Regulator/public guidance | Data protection by design/default and minimization context | 9, 10 | Paraphrase only | No GDPR proof. |
| PRIV-03 | NIST Privacy Framework 1.0 | NIST | Public guidance | Privacy risk management and governance context | 10, 14 | Paraphrase only | Guidance only. |
| PRIV-04 | Data minimisation | UK ICO | Regulator/public guidance | Data minimization context | 10 | Paraphrase only | No legal advice. |
| PRIV-05 | Storage limitation | UK ICO | Regulator/public guidance | Retention and storage limitation context | 10 | Paraphrase only | No retention mandate. |
| BOUND-01 | CASCO - Committee on conformity assessment | ISO | Standards body | Conformity-assessment boundary | 12, 13 | Paraphrase public page only | Validation Lab is not a conformity assessment body. |
| BOUND-02 | ISO/IEC 17029:2019 summary | ISO | Standards body | Validation/verification body boundary | 12, 13 | Paraphrase public summary only | No conformance claim. |
| BOUND-03 | Attestation standards | AICPA | Audit/professional body | Attestation and practitioner-report boundary | 12, 13, 15 | Paraphrase only | WP2 is not an attestation engagement. |
| GAIC-SOURCE | GAIC v0.3.2-FRC-R3 source truth | Jearon Wong / GAIC source master | GAIC-derived source truth | MROs, RCCS-M/ALCS context, Evidence-Based Validation Pattern, Validation Lab boundary, companion-paper boundary | 1, 3, 5, 6, 9, 10, 11, 12, 13, 16; appendices | Internal source reference | GAIC-derived constructs must be labeled as author framework, not external standard. |

## R2 Source Register Result

**PASS — all sources used in the R2 draft are drawn from the WP2-R0 inventory or GAIC source truth.**
