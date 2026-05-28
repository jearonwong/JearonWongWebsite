# UI / UX Audit

## Navigation

Primary navigation is clear enough for the current site shape: About, Projects, Essays, Research, Concepts, Playbooks, Governance, and related secondary surfaces are available through header/footer patterns. Mobile drawer exists and exposes primary plus secondary links.

## Research Discovery

The whitepaper discovery path is now strong:

- Homepage includes a three-paper research-series band.
- `/research/` shows all three public research editions.
- Each whitepaper page presents Read HTML, Download PDF, View Manifest, Verify Checksums, and Cite this paper.
- Manifest/checksum links are discoverable from both whitepaper page and research index.

## User Understanding Checks

| Visitor question | Current answerability | Audit note |
| --- | --- | --- |
| Who is Jearon Wong? | Strong | Homepage/about/entity graph make the role clear. |
| What is Agentic Delivery? | Strong | Homepage, concepts, essays, and `llms.txt` repeat the definition. |
| What is MPLP? | Strong but acronym-heavy | Project page and `llms.txt` define it; some routes can expand `Multi-Agent Lifecycle Protocol` earlier. |
| Why do the whitepapers matter? | Strong | Homepage and research index state the series progression. |
| What should I do next? | Moderate | Read paper / download PDF is clear; post-whitepaper path toward MPLP v2.0 is not yet explicit. |

## P1 Finding

**Announcement-readiness next-step gap**

The site now proves three public research editions exist, but it does not explicitly explain the strategic transition: the first three whitepapers are the research foundation, while MPLP v2.0 object-model consolidation is the next protocol phase and fourth-paper/guide publication remains held. This is not a whitepaper publication blocker, but it matters before public announcement because new readers need a next-step narrative.

Recommended future action: add a restrained sitewide or research-page note after planning, not during audit, that frames "research foundation complete; protocol consolidation next."

## P2 Findings

- Citation usability is good on whitepaper pages, but the research index could expose "Cite" as a first-class action if the intended audience is researchers and AI engines.
- Manifest/checksum discoverability is strong for expert users but may be opaque for nontechnical readers. Add a one-line explanation in a later polish wave if desired.
- Project navigation is coherent but the relationship between MPLP and the three whitepapers could be more explicit on `/projects/mplp/`.

## Browser Smoke

Local preview smoke test covered:

- `/`
- `/research/`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/`
- `/research/agentic-ai-insurability-risk-transfer-white-paper-2026/agentic-ai-insurability-risk-transfer-white-paper-2026.html`
- `/projects/`
- `/concepts/map/`

All were nonblank, had meaningful H1 content, had no horizontal overflow at 1280x720, and reported no console errors/warnings through the in-app browser.
