# WP3-R15D Figure Final QA

## Scope

R15D inspected the Chapter 4 responsibility bridge figure in R15C HTML/PDF. This is final candidate artifact QA only: no public staging, public artifacts, public CTAs, DOCX, final/seal claim, production verification claim, or public release claim.

## Evidence

- SVG: `gaic_v032_work/source_r3/wp3_r15c_candidate_artifacts/assets/responsibility-bridge.svg`
- HTML proof: `html-375-figure.png`
- PDF proof: `pdf-chapter-4-figure.png`
- Copied proof SVG: `gaic_v032_work/source_r3/wp3_r15d_final_candidate_qa/proof/figure/responsibility-bridge.svg`

## Checks

| Check | Result | Notes |
| --- | --- | --- |
| SVG exists | PASS | R15C asset exists and was copied into R15D proof. |
| Rendered in HTML | PASS | Rendered inside `figure#responsibility-bridge-figure`. |
| Rendered in PDF | PASS | Page proof shows the figure. |
| Readability | PASS_WITH_NOTES | PDF figure is readable; mobile HTML figure is small but acceptable as responsive proof. |
| Alt text | PASS | HTML `img` includes descriptive alt text. |
| Caption | PASS | Caption present in HTML/PDF. |
| Caption boundary | PASS | Frames review/evidence path, not liability finding or coverage determination. |
| Raw Mermaid | PASS | None visible. |
| Visual style | PASS | Candidate-stage fit with the publication family. |
| Overclaim | PASS | No liability, coverage, or legal determination claim. |

## Decision

`PASS_WITH_NOTES`
