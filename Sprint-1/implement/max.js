function findMax(elements) {
  let maxValue = -Infinity;

  for (let item of elements) {
    if (typeof item === "number" && isFinite(item)) { 
      if (item > maxValue) {
        maxValue = item;
      }
    }
  }

  return maxValue;
}


module.exports = findMax;
