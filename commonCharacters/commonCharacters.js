/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



// var commonCharacters = function(string1, string2) {
//   // TODO: Your code here!
// };

const commonCharacters = (string1, string2) => {
  let result = '';

  for (let i = 0; i < string1.length; i++) {
    let chr = string1[i];
    if (result.indexOf(chr) === -1) {
      if (string2.indexOf(chr) !== -1) {
        result += chr;
      }
    }
  }

  return result;
};

console.log(commonCharacters('acexivou', 'aegihobu'));
