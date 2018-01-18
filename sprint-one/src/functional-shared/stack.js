var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {};

obj.count = 0;
obj.storage = {};
_.extend(obj, stackMethods);

return obj;
};

//how would we have stackMethods' functions to access the instance's count property/storage property?

var stackMethods = {
  push : function (value) {
    this.count += 1;
    this.storage[this.count] = value;
  },
  pop : function () {
    this.count -= 1;
    return this.storage[this.count + 1];
  },
  size : function () {
    if(this.count < 0){
      return 0;
    }
    return this.count;
  }
};

// stackMethods.push = function (value) {
//   this.count += 1;
//   this.storage[this.count] = value;
// },
//
// stackMethods.pop = function () {
//
//   this.count -= 1;
//
//   return this.storage[this.count + 1];
// },
//
// stackMethods.size = function () {
//   if(this.count < 0){
//     return 0;
//   }
//   return this.count;
// }
