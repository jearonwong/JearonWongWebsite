# Technical Hygiene Audit

## Validation Snapshot

- `npm run typecheck`: PASS with existing Astro check hints in `src/layouts/BaseLayout.astro` for inline font preload `onload`.
- `npm run lint`: PASS.
- `npm run build`: PASS, 95 pages generated.
- JSON-LD parse: PASS, 504 blocks, 0 parse failures.
- Manifest JSON parse: PASS for all three whitepapers.
- Entity graph JSON parse: PASS.
- Whitepaper checksum validation: PASS for all three artifact sets.
- Internal link scan over `dist`: PASS, 6671 internal hrefs, 0 broken.

## P3 Findings

1. **Pre-existing untracked public/social files**
   - 30 untracked `public/social/*` files appear in `git status --short`.
   - `find public/social` shows 57 files total, including tracked existing files and untracked historical assets.
   - Required action: do not stage them in this audit. Decide later whether to track, archive, or delete.

2. **`public/research/.DS_Store` exists**
   - Size: 6148 bytes.
   - Public tree hygiene issue only; not a build blocker.

3. **Astro inline style preload hint**
   - `src/layouts/BaseLayout.astro` uses inline `onload` on a preload stylesheet link.
   - Astro check passes but reports hints. Consider a compliant font-loading approach later.

4. **Duplicate data key suspicion resolved**
   - Earlier exploratory scan suggested a duplicate `title` under lifecycle data; closer line inspection shows nested title fields rather than a duplicate object key at the same level.
   - No action required from this audit.

5. **Large static artifacts**
   - GAIC HTML: 1.45 MB; PDF: 6.95 MB.
   - AIAAWP HTML: 270 KB; PDF: 1.39 MB.
   - AIIRWP HTML: 377 KB; PDF: 1.87 MB.
   - No immediate blocker, but long artifact pages should remain excluded from aggressive interactive scripting.

## P2 Technical SEO Hygiene

- Third whitepaper artifact lacks canonical/JSON-LD.
- GAIC artifact has 34 H1 elements.
- Duplicate titles/descriptions exist in a small number of intentional overlap routes.

## No Mutation Confirmation

This audit did not regenerate public artifacts, edit public pages, change metadata, change components, change styles, or create social assets.
