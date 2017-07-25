/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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
  var storageLimit = 4;
  var size = 0;

  let resizing = false;

  let resize = newSize => {
    if (!resizing) {
      resizing = true;
      let pairs = [];
      for (let i = 0; i < storage.length; i++) {
        if (!storage[i]) continue;
        for (let k = 0; k < storage[i].length; k++) {
          if (!storage[i][k]) continue;
          pairs.push(storage[i][k]);
        }
      }
      storageLimit = newSize;
      storage = [];
      size = 0;
      for (let j = 0; j < pairs.length; j++) {
        result.insert(pairs[j][0], pairs[j][1]);
      }
      resizing = false;
    }
  };

  result.insert = function(key, value) {
    let index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    let pairs = storage[index];
    let replaced = false;
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if (size >= storageLimit * 0.75) {
      resize(storageLimit * 2);
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
        size--;
        if (size <= storageLimit * 0.25) {
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };

  return result;
};
