import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line for make.fun's "Make the Judge Laugh in One Line".
// Premise: a robot vacuum smart enough to map the whole flat, dumb enough
// to eat the same cable every day. The laugh lands at the end.
const LINE =
  "My Roomba mapped my flat, learned every wall, and still eats the same charging cable every day. I respect the commitment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
