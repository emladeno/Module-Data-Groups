/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array,it should return -Infinity " , () => {
    expect(findMax ([])).toBe(-Infinity);

});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number, it should return that number" , () => {
expect(findMax([37])).toBe(37);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers, returns the largest number", () => {
  expect(findMax([-8, 6, 20, -10, 15])).toBe(20);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers, returns the closest one to zero", () => {
  expect(findMax([-20, -8, -5, -80])).toBe(-5);
});


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns the largest decimal number", () => {
  expect(findMax([1.3, 3.8, 0.1, 6.7])).toBe(6.7);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns the max ignoring non-numeric values", () => {
  expect(findMax([9, "hello", 40, null, 20])).toBe(40);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -Infinity", () => {
  expect(findMax(["hello", null, undefined, "world"])).toBe(-Infinity);
});