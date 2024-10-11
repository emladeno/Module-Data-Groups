function tally(list) {
  if (!Array.isArray(list)) {
    throw new Error("Invalid input: input must be an array");
  }

  return list.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
}

module.exports = tally;
