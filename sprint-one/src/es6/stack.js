class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push() {
  this.count += 1;
  this.storage[this.count] = value;
  }

  pop() {
    this.count -= 1;
    return this.storage[this.count + 1];
  }

  size() {
    if(this.count < 0) {
  return 0;
}
return this.count;
  }

}

var stack = new Stack()
