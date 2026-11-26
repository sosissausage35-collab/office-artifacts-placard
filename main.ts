// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object,
// treated as an ancient artifact, to /output/entry.txt.
//
// The conceit: a sticky note is a votive tablet. The most banal reminder
// imaginable ("call mum back") is preserved as a sacred inscription,
// left as an offering at the shrine of the photocopier. Deadpan curator
// voice throughout: catalogue date, material, donor, no explanation of
// the joke. Deterministic: the same fixed line on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PLACARD =
  "Votive Tablet (sticky note), c. 2019, adhesive paper. " +
  "Inscribed 'call mum back' in fading ink, left at the shrine " +
  "of the photocopier. Anonymous donor.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 180;

// How the placard joke is constructed: catalogue date ("c. 2019") plus
// material ("adhesive paper") plus donor ("Anonymous donor") make a
// mundane sticky note read like an ancient artifact; the deadpan
// curator voice never explains the joke, it just catalogues it.
function validateLine(line: string, maxChars: number): void {
  if (line.trim().length === 0) {
    throw new Error("placard must not be empty");
  }
  if (line.length > maxChars) {
    throw new Error(
      `placard is ${line.length} characters, over the ${maxChars} limit`,
    );
  }
}

validateLine(PLACARD, MAX_CHARS);

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, PLACARD, "utf8");
console.log(`Wrote ${PLACARD.length} characters to ${OUTPUT_PATH}`);
