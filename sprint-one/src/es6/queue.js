class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

enqueue(value){
this.count += 1;
this.storage[this.count - 1] = value;
}

dequeue() {
var FIFO = this.storage[1];
this.count -= 1;

for (let i = 1; i < this.count; i++) {
  this.storage[i] = this.storage[i + 1]; //current guy leaves, the guy behind him needs to take over his queue #.
}
return FIFO;
}

size() {
if(this.count < 1 || this.count === 0) {
return 0;
}

}

var queue = new Queue();
