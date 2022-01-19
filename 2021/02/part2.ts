// https://adventofcode.com/2021/day/2#part2

import input from "./input";

let position = 0;
let depth = 0;
let aim = 0;

input.forEach((move) => {
  const [direction, stepsString] = move.split(" ");
  const steps = Number(stepsString);

  if (direction === "forward") {
    position += steps;
    depth += aim * steps;
  }
  if (direction === "up") {
    aim -= steps;
  }
  if (direction === "down") {
    aim += steps;
  }
});

const result = position * depth;
console.log({ result });
