/* global process, console */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const file = path.join(root, "src", "data", "assetRegistry.ts");
const failures = [];
const pass = (message) => console.log(`[PASS] ${message}`);
const fail = (message) => failures.push(message);

if (!fs.existsSync(file)) {
  fail("src/data/assetRegistry.ts is missing");
} else {
  const source = fs.readFileSync(file, "utf8");
  const requiredFields = ["assetType", "canonicalRoute", "canonicalParent", "status", "audience", "distinctReaderQuestion", "sourceOfTruth", "sourceRefs", "indexability", "publicationApproval", "relatedAssets", "derivedSurfaces"];
  for (const field of requiredFields) {
    if (!source.includes(`${field}:`)) fail(`asset registry is missing required field: ${field}`);
  }
  const ids = [...source.matchAll(/id:\s*["`]([^"`]+)["`]/g)].map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) fail(`asset registry contains duplicate ids: ${[...new Set(duplicates)].join(", ")}`);
  const indexedRecordFamilies = (source.match(/\b(?:hub\(|projects\.map|whitepaperPublications\.map|definitions\.map)/g) ?? []).length;
  if (indexedRecordFamilies < 10) fail(`asset registry has too few indexed record families: ${indexedRecordFamilies}`);
  if (!source.includes('hub("startHere", "/start-here/"')) fail("asset registry does not index /start-here/");
  if (!source.includes('hub("contact", "/contact/"')) fail("asset registry does not index /contact/");
  if (failures.length === 0) pass(`asset registry contract checked (${indexedRecordFamilies} indexed record families)`);
}

if (failures.length > 0) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
}
