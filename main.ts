import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Your Ex — the single word my ex would use to describe me.
// Winner of the in-session pairwise judge (rubric: funny, painfully honest,
// fresh, lands instantly): "almost". She never said I was bad. She said I
// was almost. Almost enough, almost ready, almost the one. Six letters,
// no explanation needed, and no synonym keeps the edge.
const word = "almost";

// The gate only accepts UTF-8 text of 1 to 24 characters, not only
// whitespace, and the brief demands exactly one word: fail loudly here
// instead of shipping an entry the gate would refuse.
const entry = word.trim();
if (entry.length < 1 || entry.length > 24 || /\s/.test(entry)) {
  throw new Error(`invalid entry word: ${JSON.stringify(word)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
