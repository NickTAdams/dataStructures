var Stack = function() {
  var someInstance = {};

  var storage = {};
  var count = 0;
//pulling cards on top
  someInstance.push = function(value) {
    count += 1;
    storage[count] = value;
  };

  someInstance.pop = function() {
    count -= 1;
     return storage[count + 1];
  };

  someInstance.size = function() {
    if(count < 0){
      return 0;
    }
    return count;
  };

  return someInstance;
};
