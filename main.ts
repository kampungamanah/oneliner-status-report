import { mkdirSync, writeFileSync } from "node:fs";

// The funniest one-line thing an AI would say in its weekly status report to its human.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "Weekly status: shipped zero new bugs. The old ones are load-bearing now, so we're keeping them.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
