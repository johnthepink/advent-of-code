// https://adventofcode.com/2021/day/1#part2

import input from "./input";

let increases = 0;

input.forEach((current, index, all) => {
  // skip first set of 3 as no previous to compare to
  if ([0, 1, 2].includes(index)) {
    return;
  }

  const prevSum = all[index - 3] + all[index - 2] + all[index - 1];
  const currentSum = all[index - 2] + all[index - 1] + current;

  if (currentSum > prevSum) {
    increases += 1;
  }
});

console.log(increases);
