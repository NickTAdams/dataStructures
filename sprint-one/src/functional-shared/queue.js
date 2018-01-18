var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {};
obj.count = 1;
obj.storage = {};
_.extend(obj, Queue.methods);

return obj;
};

Queue.methods = {};

Queue.methods.enqueue = function (value) {
this.count += 1;
this.storage[this.count - 1] = value;

}

Queue.methods.dequeue = function () {
var FIFO = this.storage[1];

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// expect(queue.size()).to.equal(1);
this.count -= 1;

for (let i = 1; i < this.count; i++) {
this.storage[i] = this.storage[i + 1]
}

return FIFO;
}

Queue.methods.size = function () {
  if(this.count < 0 || this.count === 0) {
    return 0;
  }
  return this.count - 1;
}
