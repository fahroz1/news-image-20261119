// News image entry: copies the pre-rendered newspaper PNG to the output
// directory. Node 22, standard library only, no network, deterministic.
// All paths resolve relative to this script file, never to process.cwd().

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

if (!existsSync(sourcePath)) {
  console.error(`error: entry.png is missing next to main.ts (${sourcePath})`);
  process.exit(1);
}

const bytes = readFileSync(sourcePath);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  console.error("error: entry.png is not a valid PNG (bad signature)");
  process.exit(1);
}

// A valid PNG carries its dimensions in the IHDR chunk (bytes 16-23:
// 4-byte big-endian width, then height). Refuse anything over the
// competition limits instead of copying an image the gate would reject.
if (bytes.length < 24 || bytes.subarray(12, 16).toString("ascii") !== "IHDR") {
  console.error("error: entry.png has no IHDR chunk");
  process.exit(1);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  console.error(`error: entry.png is ${width}x${height}, over the 1024x1024 limit`);
  process.exit(1);
}
if (bytes.length > 1048576) {
  console.error(`error: entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, outputPath);
console.log(`wrote ${outputPath} (${bytes.length} bytes)`);
