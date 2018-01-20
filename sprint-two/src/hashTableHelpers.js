/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = []; //floating in memory

  var limitedArray = {}; //why does it have to be limited?
  limitedArray.get = function(index) { 
    checkLimit(index); //throws error if we go over index
    return storage[index]; 
    //returns element inside of storage array  
  };



  limitedArray.set = function(index, value) {
    checkLimit(index); //checks if you go over the limit
    storage[index] = value; //if its ok, sets the element at index to the value
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage); //forEach for storage array only.
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray; //instantiates an object with a storage 
  //array in it. Object has functions in it that lets you access
  //elements, push in elements or use an iterator function to apply
  //logic to all elements.
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
