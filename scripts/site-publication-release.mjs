/* global console, fetch, process, setTimeout, URL */
import fs from "node:fs";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const mode = args.has("--vercel") ? "vercel" : args.has("--ci") ? "ci" : "local";
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const evidenceDirectory = process.env.PUBLICATION_EVIDENCE_DIR || os.tmpdir();
const preferredPreviewPort = Number(process.env.PUBLICATION_PREVIEW_PORT || (mode === "ci" ? "4321" : "4329"));
const generatedSurfacePaths = [
  "public/generated/publication-manifest.json",
  "public/generated/publication-impact.json",
  "public/generated/media-manifest.json",
  "public/llms.txt",
  "public/entity/jearonwong-mplp-gaic-entity-graph.json",
  "public/social",
  "public/figures"
];

function writeEvidence(name, content) {
  fs.mkdirSync(evidenceDirectory, { recursive: true });
  const file = path.join(evidenceDirectory, name);
  fs.writeFileSync(file, content, "utf8");
  return file;
}

function run(command, commandArgs = [], options = {}) {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    stdio: "inherit",
    env: process.env,
    ...options
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${command} ${commandArgs.join(" ")} exited with status ${result.status ?? "unknown"}`);
}

function runNpm(script, scriptArgs = []) {
  console.log(`\n[publication] npm run ${script}${scriptArgs.length ? ` -- ${scriptArgs.join(" ")}` : ""}`);
  run(npmCommand, ["run", script, ...(scriptArgs.length ? ["--", ...scriptArgs] : [])]);
}

function runAsync(command, commandArgs = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, commandArgs, {
      cwd: root,
      stdio: "inherit",
      env: process.env,
      ...options
    });
    child.once("error", reject);
    child.once("close", (status) => {
      if (status !== 0) reject(new Error(`${command} ${commandArgs.join(" ")} exited with status ${status ?? "unknown"}`));
      else resolve();
    });
  });
}

function runNpmAsync(script, scriptArgs = []) {
  console.log(`\n[publication] npm run ${script}${scriptArgs.length ? ` -- ${scriptArgs.join(" ")}` : ""}`);
  return runAsync(npmCommand, ["run", script, ...(scriptArgs.length ? ["--", ...scriptArgs] : [])]);
}

function runNodeScript(script, scriptArgs = [], evidenceName) {
  const scriptPath = path.join(root, "scripts", script);
  const result = spawnSync(process.execPath, [scriptPath, ...scriptArgs], {
    cwd: root,
    encoding: "utf8",
    env: process.env
  });
  const output = `${result.stdout || ""}${result.stderr || ""}`;
  if (output) process.stdout.write(output);
  if (evidenceName) writeEvidence(evidenceName, result.stdout || output);
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${script} exited with status ${result.status ?? "unknown"}`);
}

function assertGeneratedSurfacesClean() {
  const result = spawnSync("git", ["diff", "--exit-code", "--", ...generatedSurfacePaths], {
    cwd: root,
    stdio: "inherit",
    env: process.env
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error("generated publication surfaces are stale; commit the output of npm run publication:sync before merging or deploying");
  }
}

async function waitForPreview(url, timeoutMs = 30000) {
  const started = Date.now();
  let lastError = "";
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`static preview did not become ready at ${url}: ${lastError}`);
}

function contentType(file) {
  const types = {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".txt": "text/plain; charset=utf-8",
    ".webp": "image/webp",
    ".xml": "application/xml; charset=utf-8",
    ".woff2": "font/woff2"
  };
  return types[path.extname(file).toLowerCase()] || "application/octet-stream";
}

function serveBuiltFile(request, response) {
  const pathname = decodeURIComponent(new URL(request.url || "/", "http://127.0.0.1").pathname);
  const relativePath = pathname.replace(/^\/+/, "");
  const distRoot = path.resolve(root, "dist");
  const candidates = pathname.endsWith("/")
    ? [path.join(distRoot, relativePath, "index.html")]
    : [path.join(distRoot, relativePath), path.join(distRoot, relativePath, "index.html")];
  const target = candidates.map((candidate) => path.resolve(candidate)).find((candidate) => {
    try { return candidate.startsWith(`${distRoot}${path.sep}`) && fs.statSync(candidate).isFile(); }
    catch { return false; }
  });
  if (!target) {
    response.statusCode = 404;
    response.end("Not found");
    return;
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", contentType(target));
  fs.createReadStream(target).on("error", () => {
    if (!response.headersSent) response.statusCode = 500;
    response.end();
  }).pipe(response);
}

async function startStaticServer(preferredPort) {
  for (let offset = 0; offset < 10; offset += 1) {
    const port = preferredPort + offset;
    const server = http.createServer(serveBuiltFile);
    try {
      await new Promise((resolve, reject) => {
        const onError = (error) => { server.off("listening", onListening); reject(error); };
        const onListening = () => { server.off("error", onError); resolve(); };
        server.once("error", onError);
        server.once("listening", onListening);
        server.listen(port, "127.0.0.1");
      });
      return { server, port };
    } catch (error) {
      server.close();
      if (error?.code !== "EADDRINUSE") throw error;
    }
  }
  throw new Error(`no available preview port in ${preferredPort}-${preferredPort + 9}`);
}

async function runRouteMatrix() {
  const { server, port } = await startStaticServer(preferredPreviewPort);
  const previewBase = `http://127.0.0.1:${port}`;
  console.log(`\n[publication] serving built output at ${previewBase}`);
  writeEvidence("site-preview.log", `Built-output static server: ${previewBase}\n`);
  try {
    await waitForPreview(`${previewBase}/`);
    await runNpmAsync("audit:routes", ["--base", previewBase]);
    await runNpmAsync("audit:browser", [`--base=${previewBase}`]);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

async function main() {
  console.log(`[publication] governed release mode: ${mode}`);
  runNodeScript("site-publication-plan.mjs", [], "site-publication-plan.json");
  if (mode !== "vercel") runNodeScript("site-change-impact.mjs", [], "site-change-impact.json");

  const writeProjection = (mode === "local" && !args.has("--check")) || mode === "ci";
  if (writeProjection) {
    runNpm("publication:sync");
  }

  runNpm("publication:verify");
  if (mode === "ci") assertGeneratedSurfacesClean();
  runNpm("assets:media:check");

  // Vercel invokes this script as its build command. audit:all owns the Astro
  // build, so the deployment cannot proceed when any publication gate fails.
  runNpm("audit:all");

  if (mode !== "vercel") {
    await runRouteMatrix();
  }

  runNpm("publication:closeout");
  console.log(`[publication] governed release passed in ${mode} mode`);
}

main().catch((error) => {
  console.error(`[FAIL] governed publication release stopped: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
