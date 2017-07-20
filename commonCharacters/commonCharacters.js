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

const commonCharacters = (...strings) => {
  let result = '';
  let head = strings[0];
  let rest = strings.slice(1);

  head.split('').forEach(chr => {
    if (result.indexOf(chr) === -1) {
      if (rest.every(word => word.indexOf(chr) !== -1)) {
        result += chr;
      }
    }
  })

  return result;
};

// console.log(commonCharacters('acexivou', 'aegihoebu', 'adgfide', 'fgacvei'));
