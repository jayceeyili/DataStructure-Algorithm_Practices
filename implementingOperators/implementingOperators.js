// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


// var multiply = function(x, y) {
//   // TODO: should return the product of x * y
// };
const multiply = (x, y) => {
  let result = 0;
  for (let i = 0; i < y; i++) {
    result += x;
  }

  return result;
};

console.log(multiply(2, 2));

var divide = function(x, y) {
  // TODO: should return the quotient of x / y
};

var modulo = function(x, y) {
  // TODO: should return the remainder of x / y
};
