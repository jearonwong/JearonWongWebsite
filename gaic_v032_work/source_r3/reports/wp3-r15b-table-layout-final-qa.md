# WP3-R15B Table Layout Final QA

## Decision

PASS_WITH_NOTES.

Major tables are present in HTML and PDF, high-comparison tables remain table/matrix-like, and sampled PDF proof pages show no vertical single-character collapse or clipping. The table layer should still be rechecked after R15C because the current PDF density and mobile HTML table affordance are not yet comfortable enough to proceed directly to publication staging preparation.

## Table Review

| Table | HTML | PDF | Importance | Assessment | Action |
| --- | --- | --- | --- | --- | --- |
| Executive thesis define / non-claim table | Found | Found | High | Matrix semantics preserved | Keep, reproof after R15C |
| Traditional insurance question / Agentic AI complication / Needed lifecycle evidence | Found | Found | High | Comparison preserved | Keep, reproof after R15C |
| Market edge / Public source signal / Lifecycle gap | Found | Found | High | Readable in PDF; mobile HTML uses contained narrow-table behavior | Keep with mobile note |
| Artifact / Useful for / Not sufficient for / Needed linkage | Found | Found | High | Comparison preserved | Keep, reproof after R15C |
| Compliance / Auditability / Insurability translation table | Found | Found | High | Comparison preserved | Keep, reproof after R15C |
| AIO group overview | Found | Found | Medium | Readable, dense but acceptable | Keep |
| AIRM readiness matrix | Found | Found | High | Matrix preserved; PDF readable | Keep |
| Appendix A source note index | Found | Found | Medium | Readable but compressed | Repair spacing through PDF density work |
| Appendix B AIO reference | Found | Found | Medium | Present and extractable | Reproof |
| Appendix C AIRM reference | Found | Found | Medium | Present and extractable | Reproof |
| Appendix D boundary language | Found | Found | Low | Present and readable | Keep |

## Hard-Fail Checks

| Hard-fail condition | Result |
| --- | --- |
| High-comparison tables become row-card-only | PASS |
| Vertical single-character text | PASS |
| Clipped table in sampled proof | PASS |
| Unreadably small table | PASS_WITH_NOTES |
| Boundary note detached from sensitive table | PASS |
| Table context detached where essential | PASS |

## Notes

Table structure is not the primary blocker. The blocker is the overall PDF profile and compression. R15C should preserve high-comparison table semantics while giving tables and surrounding text more room.

