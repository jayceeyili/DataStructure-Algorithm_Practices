'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

// var asyncMap = function(tasks, callback) {
// };
const asyncMap = (tasks, callback) => {
  // initial 'results' to an array for storing return values from all tasks
  let results = [];
  // initial 'finished' to tatle number of takes for tracking how many tasks have finished
  let finished = tasks.length;

  // iterate over the tasks with forEach, this is the 'functional programming style'
  tasks.forEach((task, i) => {
    // invoke the current task and provide a callback instruction to the task that specifies how to handle the result of the task
    task(result => {
      // stroe the result of the task at results[i]
      results[i] = result;
      // keep tracking the number of finished tasks
      finished--;
      // only once all tasks have been finished, we excute the callback function in order
      if (finished === 0) {
        callback(results);
      }
    })
  })
};
