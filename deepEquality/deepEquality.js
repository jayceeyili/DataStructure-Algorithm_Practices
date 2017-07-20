/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
// var deepEquals = function(apple, orange) {
// };

const deepEquals = (apple, orange) => {
  if (apple === orange) return true;
  if (!(apple instanceof Object) || !(orange instanceof Object)) return false;

  let appleKeys = Object.keys(apple);
  let appleLength = appleKeys.length;
  let orangeKeys = Object.keys(orange);
  let orangeLength = orangeKeys.length;

  if (appleLength !== orangeLength) return false;
  // appleKeys.forEach(key => {
  //   if (!deepEquals(apple[key], orange[key])) return false;
  // })
  // we cannot use forEach function here because there is no way to stop the loop using return key word
  // instead, a plain for loop is a better choise;
  // for (let i = 0; i < appleLength; i++) {
  //   let key = appleKeys[i];
  //   if(!deepEquals(apple[key], orange[key])) return false;
  // }

  return true;
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
