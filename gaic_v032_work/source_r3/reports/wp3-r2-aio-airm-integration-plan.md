# WP3-R2 AIO and AIRM Integration Plan

**Task ID:** WP3-R2-SOURCE-GROUNDED-OUTLINE
**Mode:** Source-grounded outline only
**Boundary:** Analytical models only. Not a standard, certification, or insurer acceptance claim.

## Integration Rules

- AIO and AIRM are author synthesis unless directly source-supported.
- AIO maps to underwriting evidence, claims review, and dispute readiness.
- AIRM maps to readiness language, not to certification, scoring, or procurement.
- AIRM must remain distinct from WP2 AARM even where the vocabulary is intentionally parallel.
- WP1 MRO and WP2 Audit Evidence Chain provide the upstream object logic; WP3 translates that logic into insurability language.

## AIO Integration Table

| AIO | First surfaced | Fully defined | Used in chapters | Source support | Author-synthesis note | Table / appendix relation | Boundary warning |
| --- | --- | --- | --- | --- | --- | --- | --- |
| AIO-01 Legal Insured Subject | 1 | 1 | 1, 3, 12, 13, 15 | INS-04, INS-06, INS-07, INS-08 | Source-grounded naming, but WP3 frames it as the anchor subject for insurability | Appendix A, D, E, F | Not a legal subject test or coverage opinion |
| AIO-02 Insurable Agentic Work Unit | 2 | 8 | 2, 5, 8, 9, 12, 13, 15 | MKT-01, MKT-02, MKT-03, TECH-01, TECH-02, TECH-03, TECH-04, TECH-05, INT-06 | Core WP3 synthesis | Appendix A, B, C, F | Not an industry standard object |
| AIO-03 Human-Agent Responsibility Map | 3 | 3 | 3, 6, 8, 9, 12, 13, 15 | INS-01, INS-08, CLAIM-03, INT-01, INT-04, INT-05 | Built from source-backed governance and claims needs | Appendix A, D, E, F | Not liability assignment by itself |
| AIO-04 Coverage Boundary | 2 | 9 | 2, 4, 5, 9, 11, 12, 13, 14, 15 | INS-05, MKT-03, MKT-05, MKT-08, CYB-02 | WP3 synthesis that keeps policy scope visible | Appendix B, C, F, G | Not a coverage opinion |
| AIO-05 Authority and Delegation Boundary | 2 | 9 | 2, 3, 6, 9, 12, 13, 15 | TECH-01, TECH-02, TECH-03, TECH-04, TECH-05, INS-01, INT-05 | Technical permission is only one piece of authority | Appendix B, C, D, E, F | Tool permission is not coverage authority |
| AIO-06 Loss Event Record | 7 | 10 | 7, 10, 13, 14, 15 | CLAIM-01, CLAIM-02, CLAIM-03, CYB-02 | Source-grounded incident record translated into insurance language | Appendix C, F | Not a finding of liability |
| AIO-07 Causality Reconstruction Trace | 7 | 10 | 7, 10, 11, 13, 14, 15 | CLAIM-01, CLAIM-02, CLAIM-03, TECH-04 | Technical trace plus responsibility and boundary linkage | Appendix C, E, F | Not proof of causation by itself |
| AIO-08 Control Failure Record | 3 | 10 | 3, 6, 7, 10, 12, 13, 15 | CLAIM-01, CLAIM-02, CLAIM-03, INT-05 | Turn controls into reviewable failure evidence | Appendix C, F | Not a certification failure score |
| AIO-09 Claim Evidence Chain | 7 | 13 | 7, 10, 12, 13, 15 | CLAIM-01, CLAIM-02, CLAIM-03, INS-05 | WP3 translation of the WP2 evidence chain into claim language | Appendix C, E, F | Not a claim approval rule |
| AIO-10 Remediation and Recovery Record | 7 | 10 | 7, 10, 13, 15 | CLAIM-01, CLAIM-02, CLAIM-03, INT-05 | Recovery does not erase the need for reconstruction | Appendix C, F | Not a loss closure guarantee |
| AIO-11 Vendor / Model / Tool Dependency Map | 11 | 11 | 11, 12, 13, 14, 15 | CYB-01, CYB-02, CYB-03, CYB-04, CYB-05, TECH-01, TECH-02, TECH-03, TECH-04, TECH-05 | Dependency mapping is a risk view, not a product score | Appendix B, C, F | No vendor ranking or endorsement |
| AIO-12 Exclusion Trigger / Boundary Breach Map | 9 | 9 | 4, 5, 9, 11, 12, 13, 14, 15 | INS-05, MKT-03, MKT-05, MKT-08, CYB-02 | Boundary-breach language must stay cautious | Appendix B, C, G | Not a coverage denial rule |
| AIO-13 Aggregation and Accumulation Risk View | 14 | 14 | 4, 5, 11, 14, 15 | CYB-01, CYB-02, CYB-03, CYB-04, MKT-08 | Analogical transfer from cyber accumulation to agentic dependency risk | Appendix F | Not an actuarial model |
| AIO-14 Dispute-Ready Claim Package | 13 | 13 | 13, 15, 16 | CLAIM-01, CLAIM-02, CLAIM-03, INS-05, INT-05, INT-06 | A synthesis of evidence, boundary, and responsibility into a package for review | Appendix C, G | Not a guarantee of payment |

## AIRM Integration Table

| AIRM level | First surfaced | Fully defined | What insurer can see | What enterprise can prove | Relation to AIO | Relation to WP1 / WP2 | Boundary warning |
| --- | --- | --- | --- | --- | --- | --- | --- |
| L0 Uninsurable Black Box | 0 | 15 | Little to no bounded lifecycle visibility | Little to no reconstructable evidence | Missing AIO coverage almost entirely | Upstream MRO/Audit objects are absent or unusable | Not a score or label of failure |
| L1 Logged but Not Attributable | 0 | 15 | Events and traces, but weak subject or authority linkage | Logs without responsibility or boundary reconstruction | Partial AIO-06 / AIO-07 / AIO-09 | WP1/WP2 traces exist but do not resolve attribution | Technical traces are not claim evidence |
| L2 Bounded but Weakly Reconstructable | 5 | 15 | Some scope, authority, and control visibility | Partial object and event reconstruction | Partial AIO-02 / AIO-03 / AIO-05 / AIO-06 | MRO and Audit Evidence Chain are visible, but not yet claim-ready | Not insurer acceptance |
| L3 Evidence-Linked and Claim-Reviewable | 5 | 15 | Reviewable evidence chain with partial claim context | A plausible dispute-ready package | AIO-06 through AIO-10 and AIO-14 begin to align | WP1/WP2 objects can be translated into claim review language | Not claim approval |
| L4 Underwriting-Ready Lifecycle System | 12 | 15 | Pre-loss evidence, dependency, and boundary clarity | Enough structure for underwriting discussion | AIO-01 through AIO-05, AIO-11, AIO-13 are visible | WP1/WP2 objects are reusable as risk architecture inputs | Not actuarial pricing guidance |
| L5 Dispute-Ready Risk Transfer Architecture | 13 | 15 | Full lifecycle evidence, dependency, and boundary context | Reviewable, reconstructable, and disputable package | All AIOs are in play | WP1 MRO and WP2 Audit Evidence Chain are translated into insurability language | Not certification or insurer acceptance |

## Integration Notes

- Underwriting: AIO should let WP3 describe what evidence categories matter before loss, without prescribing underwriting standards.
- Claims review: AIO should let WP3 describe what reconstruction materials matter after loss, without promising approval.
- Dispute readiness: AIO should let WP3 explain how evidence, authority, and boundary linkage are packaged for review.
- WP1 bridge: MRO and ALCS are upstream lifecycle objects; WP3 re-expresses them as insurability objects and readiness language.
- WP2 bridge: Audit Evidence Chain and AARM are upstream auditability objects; WP3 re-expresses them as claim evidence and readiness language.
