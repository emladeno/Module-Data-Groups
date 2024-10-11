// Fix this implementation
// Start by running the tests for this function
// If you're in the week-1 directory, you can run npm test -- fix to run the tests in the fix directory

// Old Code:

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];
//   return median;
// }

// Explanation:
// .splice() is a mutating method, so it updates the array in place.
// to prevent this, you could take a copy of the array and use .splice(),
// or you could use bracket notation to element at the desired index

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 === 0) { // use the remainder operator (%) to check if the array length is even
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }

  return list[middleIndex];
}

module.exports = calculateMedian;
