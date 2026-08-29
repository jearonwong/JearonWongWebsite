/* global URL, process, console */
import fs from "node:fs";

const configPath = new URL("../vercel.json", import.meta.url);
const failures = [];
const fail = (message) => failures.push(message);
const pass = (message) => console.log(`[PASS] ${message}`);

if (!fs.existsSync(configPath)) {
  fail("vercel.json is missing; deployment security headers are not governed");
} else {
  let config;
  try {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } catch (error) {
    fail(`vercel.json is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
  }

  const headerEntries = config?.headers?.flatMap((entry) => entry.headers ?? []) ?? [];
  const headers = new Map(headerEntries.map((entry) => [String(entry.key).toLowerCase(), String(entry.value)]));
  const required = {
    "content-security-policy": ["default-src 'self'", "object-src 'none'", "frame-ancestors 'self'", "form-action"],
    "x-content-type-options": ["nosniff"],
    "x-frame-options": ["sameorigin"],
    "referrer-policy": ["strict-origin-when-cross-origin"],
    "permissions-policy": ["camera=()", "microphone=()", "geolocation=()"],
    "strict-transport-security": ["max-age=31536000"]
  };

  for (const [name, fragments] of Object.entries(required)) {
    const value = headers.get(name);
    if (!value) {
      fail(`Vercel security header is missing: ${name}`);
      continue;
    }
    for (const fragment of fragments) {
      if (!value.toLowerCase().includes(fragment.toLowerCase())) {
        fail(`Vercel security header ${name} is missing directive/value: ${fragment}`);
      }
    }
  }

  const wildcard = config?.headers?.some((entry) => entry.source === "/(.*)");
  if (!wildcard) fail("Vercel security headers must cover all routes with source /(.*)");
  if (failures.length === 0) pass("Vercel deployment security-header contract checked");
}

if (failures.length > 0) {
  console.error("\nSecurity header audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Security header audit passed.");
}
