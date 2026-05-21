# Table Layout Plan

## Table Policy

R15 must use table-specific semantic layout decisions. High-comparison tables must not become row cards unless explicitly justified. Dense high-comparison tables may use landscape A4, split matrix, or landscape split matrix. Appendix/source-note tables may use compact registry treatment if readable.

| # | Table / figure | Purpose | Comparison importance | HTML strategy | PDF strategy | Row-card allowed | R15 action |
| ---:| --- | --- | --- | --- | --- | --- | --- |
| 1 | Executive thesis define / non-claim table | Separate what the paper defines from what it does not claim. | Medium | Regular comparison table with mobile overflow guard. | Portrait regular table. | No. | Keep near Chapter 0 thesis. |
| 2 | Traditional insurance question / agentic complication / evidence table | Anchor insured subject and lifecycle evidence questions. | High | Responsive matrix with sticky or repeated context if needed. | Portrait split matrix if width tight. | No. | Preserve side-by-side comparison. |
| 3 | Market edge / public source signal / lifecycle gap | Show Chapter 5 market reality without overclaim. | High | Responsive matrix; avoid body overflow. | Landscape or split matrix if portrait collapses. | No. | Highest PDF layout priority. |
| 4 | Artifact / useful for / not sufficient for / needed linkage | Distinguish logs, traces, assurances, and claim evidence. | Medium | Regular table. | Portrait compact matrix. | Only if portrait fails and comparison remains clear. | Keep compact. |
| 5 | Compliance / auditability / insurability translation | Explain WP1/WP2/WP3 progression. | Medium | Regular table. | Portrait regular table or compact split. | No unless comparison is preserved. | Keep concise. |
| 6 | AIO group overview | Introduce object groups. | Medium | Regular overview table. | Portrait regular or split matrix. | No. | Do not expand into full inventory. |
| 7 | AIRM readiness matrix | Show readiness vocabulary L0-L5. | High | Matrix with careful labels. | Landscape or split matrix if portrait weakens level comparison. | No. | Style as readiness vocabulary, not scorecard. |
| 8 | Appendix A source note index | Preserve 12 source-note families. | Low | Appendix registry table with anchors. | Compact appendix table or row-card if needed. | Yes. | Must remain readable and linkable. |
| 9 | Appendix B AIO reference | Preserve AIO labels and boundaries. | Medium | Appendix reference table. | Split table or compact matrix. | Limited. | Preserve object labels and boundary column. |
| 10 | Appendix C AIRM reference | Preserve L0-L5 reference. | High | Matrix. | Compact matrix or landscape if needed. | No. | Preserve level comparison. |
| 11 | Appendix D boundary language | Keep avoid/replace examples clear. | Low | List/table hybrid. | Compact appendix treatment. | Yes. | Do not visually overemphasize disclaimers. |

## QA Risks

- Chapter 5 and AIRM are the highest PDF clipping risks.
- Appendix A source-note table is the highest density risk.
- Chapter 4 is a figure rendering risk, not a table risk.

## R15 QA Requirements

- Record table semantic profile.
- Record selected HTML and PDF layout.
- Verify mobile overflow.
- Verify PDF clipping.
- Verify text extraction.
- Render proof screenshots for every high-risk table.
