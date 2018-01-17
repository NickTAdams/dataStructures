var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 1;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    count += 1;
    storage[count - 1] = value;
  };

  someInstance.dequeue = function() {
    count -= 1;

    return storage[count];
  };

  someInstance.size = function() {
    if(count < 0 || count === 0) {
      return 0;
    }

    return count - 1;
  };

  return someInstance;
};
