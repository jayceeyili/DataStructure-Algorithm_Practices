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

const multiply = (x, y) => {
  if (x === 0 || y === 0) {
    return 0;
  }

  let isNegative = x < 0 ^ y < 0;
  let result = 0;
  x = Math.abs(x);
  y = Math.abs(y);

  for (let i = 0; i < y; i++) {
    result += x;
  }

  return isNegative ? 0 - result : result;
};

// console.log(multiply(-3, 2));

const divide = (x, y) => {
  if (x === 0) {
    return 0;
  }
  if (y === 0) {
    throw Error('Denominator cannot be Zero');
  }

  let isNegative = x < 0 ^ y < 0;
  let result = 0;
  x = Math.abs(x);
  y = Math.abs(y);

  while (x - y >= 0) {
    x -= y;
    result++;
  }

  return isNegative ? 0 - result : result;
};

// console.log(divide(-11, 2));

const modulo = (x, y) => {
  if (x === 0) {
    return 0;
  }
  if (y === 0) {
    throw Error('Denominator cannot be Zero');
  }

  let isNegative = x < 0 ^ y < 0;
  x = Math.abs(x);
  y = Math.abs(y);

  while (x - y >= 0) {
    x -= y;
  }

  return isNegative ? 0 - x : x;
};

// console.log(modulo(9, 6));
