# Boundary and Non-Claim QA Report

## Scope

R3Y audited the Markdown, HTML, PDF extracted text, manifest, checksum, and R3Y report outputs for positive forbidden claims.

## Blocked Claim Results

| Claim Type | Result | Notes |
|---|---|---|
| legal advice | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| insurance advice | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| underwriting guidance / standard | PASS_WITH_CONTEXTUAL_HITS | Appears only as blocked/non-claim language or descriptive underwriting-facing evidence context. |
| coverage opinion | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| actuarial pricing guidance | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| premium recommendation | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| claim approval guidance | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| legal liability determination | PASS_WITH_CONTEXTUAL_HITS | Appears only in non-claim language. |
| certification / proof of insurability | PASS_WITH_CONTEXTUAL_HITS | Appears only in blocked/non-certifying language. |
| insurer endorsement / regulator-approved method | PASS_WITH_CONTEXTUAL_HITS | Appears only in blocked language. |
| procurement recommendation / vendor ranking | PASS_WITH_CONTEXTUAL_HITS | Appears only in blocked language. |
| score / standard / readiness certification | PASS_WITH_CONTEXTUAL_HITS | Appears only as blocked/non-scoring/non-standard language. |
| insurer-adopted method | PASS_WITH_CONTEXTUAL_HITS | Appears only as blocked language. |
| public release / public candidate | PASS_WITH_CONTEXTUAL_HITS | Appears only as blocked/unauthorized status language. |
| final/sealed/release-ready | PASS_WITH_CONTEXTUAL_HITS | Appears only as blocked/unauthorized status language. |

## Boundary Decision

PASS_WITH_CONTEXTUAL_HITS.

The contextual hits are required because the candidate files and QA reports explicitly list prohibited claims and statuses to block them. R3Y found no positive forbidden claim, no public status elevation, no final/sealed status, no release-ready status, no public candidate status, and no public release claim.

