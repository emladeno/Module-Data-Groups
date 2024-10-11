// Explanation:

// list.filter(value => typeof value === "number") checks the value type (number, string etc)
// to remove anything that is not a number
// numericValues.length === 0 ? -Infinity : Math.max(...numericValues) is a ternary operator expression
// if the condition (whatever is before the question mark, in this case (numericValues.length === 0)) is true
// then -Infinity will be returned, if the condition is false Math.max(...numericValues) will be returned
// Math.Max() finds the largest number in the given parameters


function getLargestNumber(list) {
  const numericValues = list.filter(value => typeof value === "number");

  return numericValues.length === 0 ? -Infinity : Math.max(...numericValues);
}

module.exports = getLargestNumber;
