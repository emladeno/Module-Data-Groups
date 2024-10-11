// Explanation:

// list.filter(value => typeof value === "number") checks the value type (number, string etc)
// to remove anything that is not a number
// reduce((agg, value) => agg + value, 0) uses an aggregator (agg) to keep an overall tally while iterating the array
// the second argument in the reduce function, in this case a 0, is the default value of the aggregator

function sum(list) {
  return list.filter(value => typeof value === "number").reduce((agg, value) => agg + value, 0);
}

module.exports = sum;
