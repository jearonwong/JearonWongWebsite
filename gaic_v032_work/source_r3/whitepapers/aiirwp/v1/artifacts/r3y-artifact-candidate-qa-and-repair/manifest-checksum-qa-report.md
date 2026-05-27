# Manifest and Checksum QA Report

## Files

- Manifest: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/artifact-manifest.json`
- Checksum file: `gaic_v032_work/source_r3/whitepapers/aiirwp/v1/artifacts/r3x-artifact-candidate/sha256sums.txt`

## QA Results

| Check | Result | Notes |
|---|---|---|
| Manifest JSON parses | PASS | `artifact-manifest.json` parsed successfully. |
| Manifest paths match actual files | PASS | Markdown, HTML, PDF, manifest, and checksum files exist. |
| Public status preserved | PASS | Manifest remains `internal-only`. |
| Route status preserved | PASS | Manifest remains `no-public-route-change`. |
| No DOCX status preserved | PASS | Manifest states public DOCX unauthorized and no DOCX created. |
| Source refs range preserved | PASS | `[1]-[62]` preserved. |
| Table ID range preserved | PASS | `T-02-01, T-04-01 through T-27-01` preserved. |
| Appendix status preserved | PASS | Appendix A-H included; Appendix I deferred. |
| Repair metadata added | PASS | Manifest records R3Y PDF header/footer repair scope. |
| Checksums match actual files | PASS | `shasum -a 256 -c sha256sums.txt` passed after repair. |
| Checksum file includes all created candidate artifacts and manifest | PASS | Markdown, HTML, repaired PDF, and manifest are included. |

## Updated Hashes

| Artifact | SHA256 |
|---|---|
| Markdown candidate source | `08724a77dc3ffdf91a98aafa5afec8b2c82a75361bd1910dd4d811703a3c6343` |
| HTML candidate | `429df4e916a33433e4f5d36407bd94eb588161049dd81c65eac797a33dd0b0e3` |
| Repaired PDF candidate | `d9eb41fb9fc75217773b88aaf4207c69da0a26c20bdc68cc32cbc802247ddb92` |
| Updated manifest | `c70bbe91d83737cfb3c80a886a26da55a87d6c25cfdb482d0a4113d035de9e67` |

