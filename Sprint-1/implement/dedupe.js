// Explanation:

// All elements in a set are unique, so creating a set from an array removes duplicates - new Set(list)
// Creating a new array and using the spread operator (3 dots, ...) will destruct the values of the set back to the array

function dedupe(list) {
  return [...new Set(list)];
}

module.exports = dedupe;
