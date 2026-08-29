/* global console, process */
import fs from "node:fs";
import path from "node:path";
import { buildManifest } from "./site-publication-utils.mjs";

const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outputPath = outIndex >= 0 ? args[outIndex + 1] : null;
if (outIndex >= 0 && !outputPath) throw new Error("--out requires a file path");

const manifest = buildManifest();
const receipt = {
  schemaVersion: 1,
  receiptType: "site-publication-closeout",
  generatedAt: new Date().toISOString(),
  sourceOfTruth: manifest.sourceOfTruth,
  publishedCount: manifest.records.length,
  generatedSurfaces: [
    "public/generated/publication-manifest.json",
    "public/generated/publication-impact.json",
    "public/generated/media-manifest.json",
    "public/social essay/page OG pairs",
    "public/llms.txt managed publication registry",
    "public/entity/jearonwong-mplp-gaic-entity-graph.json generated publication registry"
  ],
  verificationCommands: ["npm run publication:release -- --check", "npm run publication:release -- --ci", "npm run publication:release -- --vercel", "npm run audit:impact", "npm run publication:plan", "npm run publication:verify", "npm run assets:media:check", "npm run audit:all", "npm run audit:routes", "npm run typecheck", "npm run build", "git diff --check"],
  releaseBoundary: "Readiness evidence only. No deployment, external publication, registry mutation, or social distribution is authorized by this receipt."
};
const serialized = `${JSON.stringify(receipt, null, 2)}\n`;
if (outputPath) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, serialized, "utf8");
}
console.log(serialized);
