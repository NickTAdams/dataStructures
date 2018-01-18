var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.count = 0; //plate count
this.storage = {};
};

Stack.prototype.push = function (value) {
this.count += 1;
this.storage[this.count] = value; //keeps track of what plate you stacked on top
};

Stack.prototype.pop = function () {
this.count -= 1;

return this.storage[this.count + 1]; //returns what you just popped
};

Stack.prototype.size = function () {
if(this.count < 0) {
return 0;
}
return this.count;
};

var plates = new Stack()
