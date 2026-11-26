import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line for make.fun's "Make the Judge Laugh in One Line".
// Premise: a robot vacuum smart enough to map the whole flat, dumb enough
// to eat the same cable every day. The laugh lands at the end.
const LINE =
  "My Roomba mapped my flat, learned every wall, and still eats the same charging cable every day. I respect the commitment.";

// The gate only accepts 1-200 non-blank characters, so fail loudly here
// instead of silently writing an entry the judge would never see.
if (!LINE.trim() || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `Invalid entry line: must be 1-200 non-blank characters on one line, got ${LINE.length} chars.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
