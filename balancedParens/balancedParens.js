/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
// var balancedParens = function(input) {
// };

const balancedParens = input => {
  const pair = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let stack = [];

  for (var i = 0; i < input.length; i++) {
    let char = input[i];
    if (pair[char]) {
      stack.push(char);
    } else if (Object.values(pair).includes(char)) {
      if (pair[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
