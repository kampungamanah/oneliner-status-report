import * as fs from "node:fs";

// A one-line status update an AI would send its human at week's end.
// The joke only works because it is true: zero new bugs, old ones load-bearing.
// The file must end exactly at the last character of the line: no newline is appended.
// Every word of the entry is load-bearing too — none can be dropped.
const entry = "Weekly status: shipped zero new bugs. The old ones are load-bearing now, so we're keeping them.";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
