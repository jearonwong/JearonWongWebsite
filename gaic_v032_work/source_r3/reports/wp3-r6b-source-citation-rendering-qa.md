# WP3-R6B Source and Citation Rendering QA

Scope: rendered source/citation QA for internal HTML/PDF candidate artifacts only. No public route, no public artifact, no public staging, no final/sealed claim, and no insurance/legal/coverage/underwriting/claims overclaim.

## Marker Counts

| Marker type | HTML | PDF text extraction |
| --- | ---: | ---: |
| `[SRC:]` | 239 | 239 |
| `[INT:]` | 109 | 109 |
| `[SYNTHESIS:]` | 24 | 24 |

## Citation Rendering Checks

| Check | Result | Notes |
| --- | --- | --- |
| Source markers visible | PASS | HTML and PDF text extraction preserve marker counts. |
| No malformed marker | PASS | No malformed marker pattern found in R6B scan. |
| No stale `EVID` marker | PASS | No stale `EVID` marker remains. |
| No old A2A URL | PASS after patch | Literal legacy A2A URL string was removed from source-note hygiene text. |
| No combined LangGraph bad URL | PASS | R5/R6 source-note text preserves split durable execution/persistence instruction. |
| Old Coalition source not used for central claims | PASS | Candidate notes continue to say old Coalition source is not used for critical claims. |
| Source/citation notes visible | PASS | Source section proofed at `html-desktop-1440-source-section.png` and `pdf-source-citation-p41.png`. |
| Market-signal caveats visible | PASS | Market examples remain fragmented/conditional and not consensus proof. |
| Technical docs limited to technical capability | PASS | Necessary-but-insufficient framing remains visible. |
| AIO/AIRM synthesis markers visible | PASS | Synthesis markers preserved in HTML and PDF. |
| Fake quote | PASS | No fabricated quotation introduced. |
| Unsupported citation | PASS | No unsupported citation issue found in rendered artifact QA. |
| Citation overflow or unreadably small source text | PASS | Source notes are readable in representative HTML/PDF proofs. |

## R6B Citation Repair

The R6 artifact contained a literal legacy A2A URL inside a sentence explaining that the old path must be replaced. R6B removed the literal URL from both the R6 source Markdown and rendered HTML, regenerated the PDF, updated manifest/checksums, and confirmed the literal string no longer appears in source, HTML, or PDF text extraction.

Source/citation rendering QA result: PASS.
