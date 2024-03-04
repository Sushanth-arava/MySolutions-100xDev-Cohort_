/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(arr) {
  let largestNum = arr[0];
  if (arr == []) {
    return undefined;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
  }

  return largestNum;
}
module.exports = findLargestElement;
