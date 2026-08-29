/* global console, process */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const researchRoot = path.join(root, "public", "research");
const sha256 = (file) => crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
const byteCount = (file) => fs.statSync(file).size;

for (const directory of fs.readdirSync(researchRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
  const dir = path.join(researchRoot, directory.name);
  const manifestFile = path.join(dir, "manifest.json");
  const checksumFile = path.join(dir, "checksums.sha256");
  if (!fs.existsSync(manifestFile) || !fs.existsSync(checksumFile)) continue;

  const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  for (const artifact of manifest.artifacts ?? []) {
    const relativeArtifact = String(artifact.path ?? "").replace(/^\//, "");
    const artifactFile = path.join(root, "public", relativeArtifact);
    if (!fs.existsSync(artifactFile)) throw new Error(`Missing artifact: ${relativeArtifact}`);
    artifact.sha256 = sha256(artifactFile);
    artifact.bytes = byteCount(artifactFile);
    if (artifact.role === "HTML" && manifest.checksums && typeof manifest.checksums === "object") manifest.checksums.public_html = artifact.sha256;
    if (artifact.role === "PDF" && manifest.checksums && typeof manifest.checksums === "object") manifest.checksums.public_pdf = artifact.sha256;
  }
  fs.writeFileSync(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  const checksumLines = fs.readFileSync(checksumFile, "utf8").split(/\r?\n/).filter(Boolean);
  const updated = checksumLines.map((line) => {
    const match = line.match(/^[0-9a-f]{64}\s+(.+)$/i);
    if (!match) return line;
    const target = path.join(root, match[1]);
    return fs.existsSync(target) ? `${sha256(target)}  ${match[1]}` : line;
  });
  fs.writeFileSync(checksumFile, `${updated.join("\n")}\n`, "utf8");
  console.log(`Refreshed white-paper integrity: ${directory.name}`);
}
