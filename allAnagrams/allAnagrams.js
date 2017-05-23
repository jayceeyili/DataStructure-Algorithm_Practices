/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// var allAnagrams = function(string) {
//   // Your code here.
// };

const allAnagrams = string => {
  let result = {};

  let recusive = (anagram, str) => {
    let strArr = str.split('');
    if (!str) {
      result[anagram] = 1;
    }

    strArr.forEach((char, i) => {
      recusive(anagram + char, str.slice(0, i) + str.slice(i + 1));
    })
  }

  recusive('', string);

  return Object.keys(result);
};

console.log(allAnagrams('aabbc'));
