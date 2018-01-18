var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newLine = Object.create(queueMethods);
newLine.storage = {}; //keeps track of who's in line and refreshing the line order.
newLine.count = 1;

return newLine;
};

var queueMethods = {
enqueue : function (value) {
this.count += 1;
this.storage[this.count - 1] = value;    //this guy is first in line
},

dequeue: function () {
var FIFO = this.storage[1];
this.count -= 1;

for (let i = 1; i < this.count; i++) {
  this.storage[i] = this.storage[i + 1]; //current guy leaves, the guy behind him needs to take over his queue #.
}
return FIFO; //because everytime you dequeue you need to show who left the line.
},
size: function () {
//if you dequeued twice it'll make your count to negative.
if(this.count < 1 || this.count === 0) {
return 0;
}

return this.count - 1; //size of 0 for a new queue
}

};
