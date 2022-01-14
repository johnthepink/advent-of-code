// https://adventofcode.com/2021/day/1

import input from "./input";

let increases = 0;

input.forEach((current, index, all) => {
  // skip first as no previous to compare to
  if (index === 0) {
    return;
  }
  const prev = all[index - 1];
  if (current > prev) {
    increases += 1;
  }
});

console.log(increases);
