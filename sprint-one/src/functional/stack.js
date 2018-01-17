var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
/*
‣
AssertionError: expected true to be false// This
test could fail if the word "this" is found inside comments,
// or if there are opening/closing braces ("{", "}") in comments inside the constructor.
*/
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
