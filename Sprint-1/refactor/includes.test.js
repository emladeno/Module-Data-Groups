// Refactored version of includes should still pass the tests below:

const includes = require("./includes.js");

test("returns index when target is in array", () => {
  const currentOutput = includes(["a", "b", "c", "d"], "c");
  const targetOutput = 2;

  expect(currentOutput).toBe(targetOutput);
});

test("returns -1 when target not in array", () => {
  const currentOutput = includes([1, 2, 3, 4], "a");
  const targetOutput = -1;

  expect(currentOutput).toBe(targetOutput);
});

test("returns index of first match", () => {
  const currentOutput = includes([1, 2, 2, 3], 2);
  const targetOutput = 1;

  expect(currentOutput).toBe(targetOutput);
});

test("returns -1 for empty array", () => {
  const currentOutput = includes([]);
  const targetOutput = -1;

  expect(currentOutput).toBe(targetOutput);
});

test("searches for null", () => {
  const currentOutput = includes(["b", "z", null, "a"], null);
  const targetOutput = 2;

  expect(currentOutput).toBe(targetOutput);
});
