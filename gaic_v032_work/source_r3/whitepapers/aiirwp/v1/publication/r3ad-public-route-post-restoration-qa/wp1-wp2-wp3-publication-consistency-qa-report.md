# WP1/WP2/WP3 Publication Consistency QA Report

## Shared Route Pattern

All three public whitepaper pages use:

- `src/data/whitepaperPublications.ts`
- `src/components/WhitePaperPublicationPage.astro`
- route-specific Astro wrappers under `src/pages/research/`

## Consistency Checks

- Unified hero structure: PASS.
- Status panel fields: PASS.
- Artifact CTA order: PASS after R3AD label cleanup.
- Citation section: PASS.
- Manifest/checksum integrity section: PASS.
- Boundary note section: PASS.
- Related research section: PASS.
- Research index card pattern: PASS.
- No public DOCX language: PASS.

## R3AD Repair

R3AD normalized CTA label casing across WP1/WP2/WP3:

- `View Manifest`
- `Verify Checksums`

## Remaining Notes

WP1 is a public edition while WP2 and WP3 are public research candidates. This is a factual status difference, not a publication-system inconsistency.

## Verdict

WP1/WP2/WP3 publication consistency QA passes.
