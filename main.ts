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

if (PLACARD.length === 0 || PLACARD.trim().length === 0) {
  throw new Error("placard must not be empty");
}
if (PLACARD.length > MAX_CHARS) {
  throw new Error(
    `placard is ${PLACARD.length} characters, over the ${MAX_CHARS} limit`,
  );
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, PLACARD, "utf8");
console.log(`Wrote ${PLACARD.length} characters to ${OUTPUT_PATH}`);
