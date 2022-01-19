// https://adventofcode.com/2021/day/2

import input from "./input";

let position = 0;
let depth = 0;

input.forEach((move) => {
  const [direction, stepsString] = move.split(" ");
  const steps = Number(stepsString);

  if (direction === "forward") {
    position += steps;
  }
  if (direction === "up") {
    depth -= steps;
  }
  if (direction === "down") {
    depth += steps;
  }
});

const result = position * depth;
console.log({ result });
