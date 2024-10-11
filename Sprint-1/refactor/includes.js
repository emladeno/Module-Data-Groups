// Refactor the implementation of find to use a for...of loop

// function includes(list, target) {
//   for (let index = 0; index < list.length; index++) {
//     const element = list[index];
//     if (element === target) {
//       return index;
//     }
//   }
//   return -1;
// }

function includes(list, target) {
  for (const value of list) {
    if (value === target) {
      return list.indexOf(value);
    }
  }

  return -1;
}

module.exports = includes;
