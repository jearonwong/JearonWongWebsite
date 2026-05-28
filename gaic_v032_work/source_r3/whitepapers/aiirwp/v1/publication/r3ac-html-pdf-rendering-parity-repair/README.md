# R3AC HTML/PDF Rendering Parity Repair

**Task ID:** WP3-V1-R3AC-HTML-PDF-RENDERING-PARITY-FORENSICS-AND-REPAIR-01
**Starting HEAD:** `bbdc970d7d5191c0673ad53a8de66d74272b4a92`
**Scope:** forensic comparison plus repair of WP3 public HTML/PDF artifact rendering parity.

R3AC supersedes the R3AB acceptance posture. R3AA technical route restoration passed, but the publication rendering standard gate failed after owner review: page alignment was partial, HTML artifact style alignment failed, PDF artifact style alignment failed, and release acceptance failed.

R3AC does not create DOCX, publish source Markdown, create social announcement copy, claim final/sealed/release-ready status, or claim certification, insurer acceptance, coverage-ready, underwriting-ready, claim-ready, score, standard, readiness certification, or regulator approval.

## Result

- Canonical HTML baseline: WP2 AIAAWP public HTML artifact grammar.
- Canonical PDF baseline: shared R8 A4 PDF Print Profile used by WP1 and WP2.
- WP3 public HTML repaired to the WP2 professional-shell grammar.
- WP3 public PDF regenerated through `render_whitepaper_r8_a4_pdf.py aiirwp`.
- Public manifest/checksum regenerated and validated.
- Recommended next wave: `WP3-V1-R3AD-PUBLIC-ROUTE-POST-RESTORATION-QA`.
