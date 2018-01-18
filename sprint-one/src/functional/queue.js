var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 1;
  // Implement the methods below

//queue pulling cards from bottom

  someInstance.enqueue = function(value) {
    count += 1;
    storage[count - 1] = value;
  };

  someInstance.dequeue = function() {
    count -= 1;
//dequeue returns the last pushed in value of enqueue...
//so we need to get rid of 'a' since if we pull the card away from the bottom, we need to remove it from the deck
//which is our storage.
//queue.enqueue('a');
//queue.enqueue('b');
//right now when we enqueued twice... return storage[count] is = to 'b' when we want 'a'...


//we can loop through the storage each time to see how many properties are in there
//to see if we have 2 items. Then we just need to remove the least recent one.


 //our counts should tell us how many things are stored actually... so if you enqueued twice... count should = 3.
//console.log(storage)

//I'm sort of confused whether or not we should be deleting the specific property... since we're thinking FIFO
//we're removing whatever that got

    var FIFO = storage[1];
// We want to remove the first value from our container of the first key
// We want to store it in a temporary variable so we don't lose it
// We want to adjust the previous values to move up in key.
// We want to return the temporary variable.

    for (let i = 1; i < count; i++) {
      storage[i] = storage[i + 1];
    }

    return FIFO;
  };

  someInstance.size = function() {
    if (count < 0 || count === 0) {
      return 0;
    }

    return count - 1;
  };

  return someInstance;
};
