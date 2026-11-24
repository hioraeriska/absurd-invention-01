// One-Sentence Absurd Invention Pitch — entry program.
//
// Writes exactly one sentence pitching a ridiculous invention that fixes a
// tiny everyday annoyance, to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's
// /output). The sentence is at most 220 characters, a single sentence.
//
// The pitch: a showerhead that pauses the shower and plays hold music
// whenever someone flushes the toilet, so the person rinsing never gets
// scalded mid-rinse.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A showerhead that pauses your shower and plays hold music whenever someone flushes the toilet, so you never get scalded mid-rinse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
