# Rollback Readiness Report

## Rollback Goal

If a public issue is found during R3AB post-restoration QA or after deployment, rollback should remove public AIIRWP artifact access while preserving the internal R3X/R3Y candidate package.

## Rollback Actions

1. Revert the R3AA commit or restore the pre-R3AA public route state.
2. Remove or stop linking public AIIRWP HTML, PDF, manifest, and checksum files.
3. Restore the WP3 route to withdrawn / under-rewrite status if needed.
4. Restore noindex treatment if route containment is required.
5. Restore `llms.txt` and entity graph AIIRWP wording to non-public-artifact posture if public artifact access is withdrawn.
6. Preserve the R3X internal artifact candidate package and R3Y QA package for repair.
7. Document the rollback in reconstruction notes, known issues, and current-status registry.

## Containment Boundaries

- Do not delete internal R3X/R3Y candidate artifacts during rollback.
- Do not promote rejected v0.2 artifacts.
- Do not create DOCX.
- Do not issue public announcement copy as part of rollback.

## Verification After Rollback

- Confirm public route state.
- Confirm robots treatment.
- Confirm sitemap no longer lists any withdrawn public artifact URL if removed.
- Confirm `llms.txt` and entity graph match the rollback state.
- Confirm public artifact files and links are absent or intentionally inaccessible.
