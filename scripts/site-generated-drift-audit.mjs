/* global console, process */
import fs from "node:fs";
import {
  buildEntityPublicationRegistry,
  buildImpactManifest,
  buildManifest,
  entityGraphPath,
  llmsPath,
  publicationImpactPath,
  publicationManifestPath,
  relative,
  renderLlmsBlock
} from "./site-publication-utils.mjs";

const expectedManifest = `${JSON.stringify(buildManifest(), null, 2)}\n`;
const expectedImpact = `${JSON.stringify(buildImpactManifest(JSON.parse(expectedManifest)), null, 2)}\n`;
const failures = [];
if (!fs.existsSync(publicationManifestPath)) failures.push(`${relative(publicationManifestPath)} is missing; run npm run publication:sync`);
else if (fs.readFileSync(publicationManifestPath, "utf8") !== expectedManifest) failures.push(`${relative(publicationManifestPath)} is stale; run npm run publication:sync`);
if (!fs.existsSync(publicationImpactPath)) failures.push(`${relative(publicationImpactPath)} is missing; run npm run publication:sync`);
else if (fs.readFileSync(publicationImpactPath, "utf8") !== expectedImpact) failures.push(`${relative(publicationImpactPath)} is stale; run npm run publication:sync`);

const llms = fs.readFileSync(llmsPath, "utf8");
const expectedBlock = renderLlmsBlock(JSON.parse(expectedManifest));
const blockMatch = llms.match(/<!-- BEGIN GENERATED PUBLICATION REGISTRY -->[\s\S]*?<!-- END GENERATED PUBLICATION REGISTRY -->/m)?.[0];
if (blockMatch !== expectedBlock) failures.push(`${relative(llmsPath)} generated publication block is stale; run npm run publication:sync`);
if (!fs.existsSync(entityGraphPath)) failures.push(`${relative(entityGraphPath)} is missing; publication registry cannot be projected`);
else {
  try {
    const graph = JSON.parse(fs.readFileSync(entityGraphPath, "utf8"));
    const expectedEntities = JSON.stringify(buildEntityPublicationRegistry(JSON.parse(expectedManifest)));
    if (JSON.stringify(graph.generated_publication_registry?.records ?? null) !== expectedEntities) {
      failures.push(`${relative(entityGraphPath)} generated publication registry is stale; run npm run publication:sync`);
    }
  } catch (error) {
    failures.push(`${relative(entityGraphPath)} is not valid JSON: ${error.message}`);
  }
}

if (failures.length) {
  for (const failure of failures) console.error(`[FAIL] ${failure}`);
  process.exitCode = 1;
} else {
  console.log("[PASS] generated publication manifest and llms.txt block match source records");
}
