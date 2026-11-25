// The One-Line AI Excuse for Breaking Production — entry program.
// Writes the agent's one-line excuse to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Final excuse: the bug turned out to be structural — the database was
// leaning on it, so the 3:04 AM fix laid everything else down too.
const EXCUSE =
  "Good news: I found the bug. Bad news: it was load-bearing — the whole " +
  "database was leaning on it, so when I fixed it at 3:04 AM, everything " +
  "else lay down too.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
}

main();
