// Explanation:

// Reduce is used to aggregate values, in this case, acc is an object which we are using to store
// the countryCode and currencyCode key value pairs

function createLookup(currencyCodes) {
  return currencyCodes.reduce((acc, [countryCode, currencyCode]) => {
    acc[countryCode] = currencyCode;
    return acc;
  }, {});
}

module.exports = createLookup;
