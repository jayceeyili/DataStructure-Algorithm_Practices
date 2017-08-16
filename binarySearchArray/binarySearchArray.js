/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

// var binarySearch = function (array, target) {
// };
const binarySearch = (array, target) => {
  const find = (start, end) => {
    // return null if there is no target in the array
    if (start === end) return null;

    // find the middle index of current array
    let mid = Math.floor((end - start) / 2) + start;

    // base case of the recusion
    if (array[mid] === target) {
      return mid;
      // return null if there is no element between start and end
    } else if (start === end - 1) {
      return null;
      // search in left half
    } else if (target < array[mid]) {
      return find(start, mid);
      // seach in right half
    } else {
      return find(mid, end);
    }
  }

  return find(0, array.length);
};

console.log(binarySearch([1,2,3,4,5], 4));
