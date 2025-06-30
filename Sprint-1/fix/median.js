// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if (!Array.isArray(list)) return null;

  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );
  if (numbers.length === 0) return null;

  const sortedNumbers = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 1) {
    return sortedNumbers[middleIndex];
  } else {
    const middle1 = sortedNumbers[middleIndex - 1];
    const middle2 = sortedNumbers[middleIndex];
    return (middle1 + middle2) / 2;
  }
}

module.exports = calculateMedian;
