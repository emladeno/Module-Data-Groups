// Explanation:

// !Array.isArray(object) checks if the first parameter is an array, the exclamation mark flips the condition result
// meaning if we pass an object like we are supposed to, the condition will be true instead of false
// (&&) is used to join two conditions, so both need to be true for true to be returned by the function.
// object.hasOwnProperty(key) just checks if the key exists in the object.

function contains(object, key) {
  return !Array.isArray(object) && object.hasOwnProperty(key);
}

module.exports = contains;
