/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];

    let pairs = storage[index];
    let replaced = false;

    pairs.forEach(pair => {
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    })

    if (!replaced) {
      pairs.push([key, value]);
    }
  };

  result.retrieve = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let pairs = storage[index];
    if (!pairs) return;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let pairs = storage[index];
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair[0] === key) {
        let value = pair[1];
        delete pairs[i];
        return value;
      }
    }
  };

  return result;
};
