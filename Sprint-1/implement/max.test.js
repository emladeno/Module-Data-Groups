/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)
*/

// Given an empty array
// When passed to the max function
// Then it should return -Infinity

test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

const getLargestNumber = require("./max");

describe("getLargestNumber", () => {
  it("returns negative infinity when the array is empty", () => {
    expect(getLargestNumber([])).toEqual(-Infinity);
  });

  it("returns the only value when the array contains only 1 number", () => {
    expect(getLargestNumber([5])).toEqual(5);
  });

  it("returns the largest number when the array contains positive and negative numbers", () => {
    expect(getLargestNumber([43, 75, 21, -64, -97])).toEqual(75);
  });

  it("returns the largest number when the array contains strings, and positive and negative numbers", () => {
    expect(getLargestNumber([-54, 71, 342, -987321, "test", "again"])).toEqual(342);
  });

  it("returns the largest decimal number when the array contains decimal numbers", () => {
    expect(getLargestNumber([14.7, 1.43, 87.45, 6.432])).toEqual(87.45);
  });
});
