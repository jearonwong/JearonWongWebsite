/* global console, process */
import fs from "node:fs";
import {
  buildEntityPublicationRegistry,
  buildImpactManifest,
  buildManifest,
  entityGraphPath,
  generatedDirectory,
  llmsPath,
  publicationImpactPath,
  publicationManifestPath,
  relative,
  renderLlmsBlock,
  replaceManagedLlmsBlock
} from "./site-publication-utils.mjs";
import { execFileSync } from "node:child_process";
import path from "node:path";

// Publication metadata and share assets are one deterministic projection. Run
// the media writers here so a new essay cannot update llms/RSS while retaining
// a stale OG or authored-artwork contract.
const run = (script, args = []) => execFileSync(process.execPath, [path.join(process.cwd(), "scripts", script), ...args], { stdio: "inherit" });
run("generate-site-og-assets.mjs");
run("migrate-site-media-visual-system.mjs");
run("site-media-visual-system-audit.mjs");

const manifest = buildManifest();
fs.mkdirSync(generatedDirectory, { recursive: true });
fs.writeFileSync(publicationManifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
fs.writeFileSync(publicationImpactPath, `${JSON.stringify(buildImpactManifest(manifest), null, 2)}\n`, "utf8");
const currentLlms = fs.readFileSync(llmsPath, "utf8");
fs.writeFileSync(llmsPath, replaceManagedLlmsBlock(currentLlms, renderLlmsBlock(manifest)), "utf8");
if (fs.existsSync(entityGraphPath)) {
  const graph = JSON.parse(fs.readFileSync(entityGraphPath, "utf8"));
  graph.generated_publication_registry = {
    schemaVersion: 1,
    generatedBy: "scripts/site-publication-sync.mjs",
    records: buildEntityPublicationRegistry(manifest)
  };
  fs.writeFileSync(entityGraphPath, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
}
console.log(`Synchronized ${manifest.records.length} published publication records.`);
console.log(`- ${relative(publicationManifestPath)}`);
console.log(`- ${relative(publicationImpactPath)}`);
console.log(`- ${relative(llmsPath)} managed publication block`);
if (fs.existsSync(entityGraphPath)) console.log(`- ${relative(entityGraphPath)} generated publication registry`);
