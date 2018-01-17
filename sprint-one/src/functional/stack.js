var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  //What if we need to use this empty object storage? So even if we pop something
  //we can still access it in the storage?

  someInstance.push = function(value) {
    count += 1;
    storage[count] = value;
    //console.log(storage)
  };

//if stack.pop is called, we should return what was last pushed.
  someInstance.pop = function() {
    count -= 1;
    //how do you return the last object prop-val
    //return storage[count - 1];
    console.log(storage)
  };

  someInstance.size = function() {
    if(count < 0){
      return 0;
    }
    return count;
  };

  return someInstance;
};
