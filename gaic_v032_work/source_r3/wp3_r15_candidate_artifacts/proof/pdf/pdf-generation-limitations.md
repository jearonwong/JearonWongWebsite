# PDF Generation Limitation

Chrome wrote the internal candidate PDF, but the headless process did not exit cleanly before the R15 script timeout.

Continuing with pdfinfo, pdftotext, visual proof extraction, checksum validation, and PDF layout QA.

```text
spawnSync /Applications/Google Chrome.app/Contents/MacOS/Google Chrome ETIMEDOUT
```
