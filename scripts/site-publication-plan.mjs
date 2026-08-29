/* global console, process */
import { buildManifest, loadControlRecord, loadEssays, relative, resolveImpact, toRoute } from "./site-publication-utils.mjs";

const args = process.argv.slice(2);
const sourceArgIndex = args.indexOf("--source");
const requestedSource = sourceArgIndex >= 0 ? args[sourceArgIndex + 1] : null;
if (sourceArgIndex >= 0 && !requestedSource) throw new Error("--source requires an essay path");

const essays = loadEssays().filter((essay) => !requestedSource || essay.source === requestedSource || relative(essay.source) === requestedSource);
if (requestedSource && essays.length === 0) throw new Error(`Essay source not found: ${requestedSource}`);
const control = loadControlRecord();
const records = essays.map((essay) => {
  const wave = control.waves.find((item) => item.source === essay.source || item.canonicalRoute === toRoute(essay));
  const blockers = [];
  if (essay.data.status === "published") {
    if (!wave) blockers.push("BLOCKED_OWNER_DECISION: add a publication control record");
    if (!essay.data.distinctReaderQuestion) blockers.push("BLOCKED_METADATA: distinctReaderQuestion is required");
    if (!Array.isArray(essay.data.sourceRefs) || essay.data.sourceRefs.length === 0) blockers.push("BLOCKED_METADATA: sourceRefs are required");
    if (essay.data.indexability !== "index") blockers.push("BLOCKED_METADATA: published essays must be indexable");
    if (!Array.isArray(essay.data.nextSteps) || essay.data.nextSteps.length < 2) blockers.push("BLOCKED_IA: at least two nextSteps are required");
    if (wave && wave.ownerApproval?.publication !== "approved") blockers.push("BLOCKED_OWNER_DECISION: publication approval is not approved");
  }
  return {
    source: essay.source,
    route: toRoute(essay),
    title: essay.data.title,
    status: essay.data.status || "published",
    control: wave ? { waveId: wave.waveId, ownerApproval: wave.ownerApproval || {} } : null,
    impact: resolveImpact(essay),
    blockers
  };
});

const output = {
  schemaVersion: 1,
  generatedBy: "scripts/site-publication-plan.mjs",
  mode: requestedSource ? "single-source" : "site-wide",
  records,
  publishedCount: buildManifest().records.length,
  next: ["npm run publication:release -- --check", "npm run publication:release -- --ci", "npm run publication:release -- --vercel"]
};
console.log(JSON.stringify(output, null, 2));
if (records.some((record) => record.blockers.length > 0)) process.exitCode = 2;
