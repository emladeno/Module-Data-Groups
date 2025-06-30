// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
  });
});
test("returns correct median for unsorted arrays", () => {
  expect(calculateMedian([3, 1, 2])).toEqual(2);
  expect(calculateMedian([5, 1, 3, 4, 2])).toEqual(3);
});
test("filters non-numeric values", () => {
  expect(calculateMedian([1, "2", 3, null, undefined, "apple", 4])).toEqual(
    3
  );
  expect(calculateMedian(["apple", 5, 3, "banana", 1, 4, 2])).toEqual(3);
});
test("returns null when there are no valid numbers", () => {
  expect(calculateMedian(["apple", null, {}, undefined])).toBe(null);
});
test("returns null for non-array inputs", () => {
  expect(calculateMedian(null)).toBe(null);
  expect(calculateMedian(undefined)).toBe(null);
  expect(calculateMedian("not an array")).toBe(null);
  expect(calculateMedian(123)).toBe(null);
  expect(calculateMedian({})).toBe(null);
});
test("returns null for empty array", () => {
  expect(calculateMedian([])).toBe(null);
});