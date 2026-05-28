# SEO, GEO, and JSON-LD Publication Report

All three public route pages use shared metadata from `src/data/whitepaperPublications.ts`.

Checks:

- Accurate route titles: PASS.
- Accurate public descriptions: PASS.
- Canonical routes: PASS.
- OG/Twitter metadata: PASS.
- Citation metadata: PASS.
- JSON-LD generation from publication data: PASS.
- JSON-LD parse after build: pending final validation command.
- No overclaim in JSON-LD: PASS with boundary wording.
- Official paper names used in metadata: PASS.

Status alignment:

- `creativeWorkStatus` uses `Public Research Edition` route data through Schema.org output.
- Public status no longer uses internal whitepaper shorthand.
- Metadata does not claim certification, legal advice, insurance advice, audit standard, assurance opinion, coverage opinion, underwriting guidance, insurer acceptance, regulator approval, readiness certification, vendor ranking, or official benchmark status.
