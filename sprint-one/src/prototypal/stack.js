var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

//First we need to make a new object with Object.create()

//LIFO

    var newStack = Object.create(stackMethods); 
    newStack.count = 0; //all of the properties.
    newStack.storage = {};

    return newStack;
};

var stackMethods = {
  push : function (value) {
  this.count += 1;
  this.storage[this.count] = value; //will tell you what you pushed in at which index.
},
  pop: function () {
    this.count -= 1;
    return this.storage[this.count + 1]; //undefined???
  },
  size : function () {
    if(this.count < 0) {
      return 0;
    }
    return this.count;
  }
};
