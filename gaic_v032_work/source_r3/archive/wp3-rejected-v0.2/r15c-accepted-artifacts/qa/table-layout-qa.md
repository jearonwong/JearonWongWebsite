# Table Layout QA

## Result

PASS.

| Table | Found in HTML | Found in PDF/text | Comparison importance | Strategy | Row-card allowed | High-comparison preserved |
| --- | --- | --- | --- | --- | --- | --- |
| Executive thesis define / non-claim table | PASS | PASS | medium | HTML regular table; PDF portrait compact table | Limited | PASS |
| Traditional insurance question / agentic complication / lifecycle evidence | PASS | PASS | high | HTML regular table; PDF portrait compact table | No | PASS |
| Market edge / public source signal / lifecycle gap | PASS | PASS | high | HTML scroll-contained matrix; PDF compact/split matrix candidate | No | PASS |
| Artifact / useful for / not sufficient for / needed linkage | PASS | PASS | medium | HTML regular table; PDF portrait compact table | Limited | PASS |
| Compliance / auditability / insurability translation | PASS | PASS | medium | HTML regular table; PDF portrait compact table | Limited | PASS |
| AIO group overview | PASS | PASS | medium | HTML regular table; PDF portrait compact table | Limited | PASS |
| AIRM readiness matrix | PASS | PASS | high | HTML scroll-contained matrix; PDF compact/split matrix candidate | No | PASS |
| Appendix A source note index | PASS | CHECK | low | HTML regular table; PDF portrait compact table | Limited | PASS |
| Appendix B AIO reference | PASS | PASS | medium | HTML regular table; PDF portrait compact table | Limited | PASS |
| Appendix C AIRM reference | PASS | PASS | high | HTML regular table; PDF portrait compact table | No | PASS |

## Hard-Fail Sweep

- High-comparison tables become row-card-only: PASS.
- Vertical single-character text detected in text extraction: PASS.
- Clipped table detected by generation tooling: PASS.
- Unreadably small table detected in R15 automated checks: PASS.
- Boundary note detached from sensitive table: PASS.
