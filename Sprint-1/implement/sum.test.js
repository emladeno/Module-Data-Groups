/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

const sum = require("./sum");

describe("sum", () => {
  it("returns 0 when the array is empty", () => {
    expect(sum([])).toEqual(0);
  });

  it("returns the only number when the array contains one number", () => {
    expect(sum([8])).toEqual(8);
  });

  it("returns the correct sum value when the array contains a sequence of numbers", () => {
    expect(sum([-10, 40, 50])).toEqual(80);
    expect(sum([10, 20, 30])).toEqual(60);
    expect(sum([1.1, 2.2, 3.3])).toEqual(6.6);
  });

  it("returns the correct sum value when the array contains a sequence of numbers and strings", () => {
    expect(sum([-10, 40, 50, "testing"])).toEqual(80);
    expect(sum([10, 20, 30, "testing"])).toEqual(60);
    expect(sum([1.1, 2.2, 3.3, "testing"])).toEqual(6.6);
  });
});