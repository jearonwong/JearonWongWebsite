# WP3-R15D Table Layout Final QA

## Scope

R15D inspected major table rendering in the repaired R15C HTML/PDF. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Table Review

| Table | HTML | PDF | Comparison importance | Layout result | Action |
| --- | --- | --- | --- | --- | --- |
| Executive thesis define / non-claim | Found | Found | High | Matrix preserved; readable | Keep |
| Traditional insurance question / Agentic AI complication / Needed lifecycle evidence | Found | Found | High | Matrix preserved; readable | Keep |
| Market edge / Public source signal / Lifecycle gap | Found | Found | High | Matrix preserved; PDF page 13 readable; mobile uses contained horizontal scroll | Keep with note |
| Artifact / Useful for / Not sufficient for / Needed linkage | Found | Found | High | Matrix preserved; readable | Keep |
| Compliance / Auditability / Insurability translation | Found | Found | High | Matrix preserved; readable | Keep |
| AIO group overview | Found | Found | Medium | Readable | Keep |
| AIRM readiness matrix | Found | Found | High | Matrix preserved; readable | Keep |
| Appendix A source note index | Found | Found | High | Readable; not source inventory dump | Keep |
| Appendix B AIO reference | Found | Found | High | Matrix readable | Keep |
| Appendix C AIRM reference | Found | Found | High | Matrix readable | Keep |
| Appendix D boundary language | Found | Found | High | List/table-adjacent boundary language readable | Keep |

## Hard-Fail Checks

| Hard fail | Result |
| --- | --- |
| High-comparison tables become row-card-only | PASS |
| Vertical single-character text | PASS |
| Clipped table | PASS |
| Unreadably small table | PASS |
| Boundary note detached from sensitive table | PASS |
| Essential context detached from table | PASS |

## Notes

- Mobile HTML proof for wide matrices shows contained horizontal table scrolling, not page-level overflow.
- PDF tables remain compact but readable and preserve comparison semantics.

## Decision

`PASS_WITH_NOTES`
