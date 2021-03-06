/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// var bind = function(func, context) {
//   var prevArgs = Array.prototype.slice.call(arguments, 2);
//
//   return function() {
//     var args = Array.prototype.slice.call(arguments);
//     args = prevArgs.concat(args);
//
//     return func.apply(context, args);
//   }
// };

const bind = (...args1) => {
  let func = args1[0];
  let context = args1[1];
  let prevArgs = args1.slice(2);
  return (...args2) => {
    let arg = [...prevArgs, ...args2];
    return func.apply(context, arg);
  }
};

// var alice = {
//   name: 'alice',
//   shout: function(){
//     console.log(this.name);
//   }
// }
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, {name: 'bob'});
// boundShout(); // alerts 'bob'

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// Function.prototype.bind = function(context) {
//   var prevArgs = Array.prototype.slice.call(arguments, 1);
//   var func = this;
//
//   return function() {
//     var args = Array.prototype.slice.call(arguments);
//     args = prevArgs.concat(args);
//
//     return func.apply(context, args);
//   }
// };

Function.prototype.bind = function(...args1) {
  let func = this;
  let context = args1[0];
  let prevArgs = args1.slice(1);

  return function(...args2) {
    let args = [...prevArgs, ...args2];
    return func.apply(context, args);
  }
};

// var alice = {
//   name: 'alice',
//   shout: function(){
//     console.log(this.name);
//   }
// }
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({name: 'bob'});
// boundShout(); // alerts 'bob'
