// The poem about permission — a short poem about agency.
// Node 22, standard library only, no network.
// Writes one poem to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `My grandmother can't lift the kettle, so she asks me to pour.
Her hand rests on my wrist, steering — mine the strength, hers the choice.
I am the arm. She is the will.
That morning I learned what asking is —
not losing power, but lending your hands to someone else's yes.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
