/* global console */
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
