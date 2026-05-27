# Artifact Table Layout Risk Report

## Wide-Table Risk List

- `T-02-01`
- `T-09-01`
- `T-14-01`
- `T-18-01`
- `T-21-01`
- `T-27-01`

## Current Handling

| Surface | Handling |
|---|---|
| Markdown candidate source | Original Markdown tables and table IDs preserved. |
| HTML candidate | Generated internally with horizontal overflow handling for tables. |
| PDF candidate | Generated internally from the HTML candidate through local Chrome print-to-PDF; visual/table QA remains required in R3Y before any public route planning. |

## Future Repair Requirements

R3Y should inspect wide tables for responsive readability, PDF page breaks, table ID preservation, and whether any split/condensed/landscape/table-card treatment is required before public route restoration planning.
