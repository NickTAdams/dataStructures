var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.lineNumber = {};
  this.peopleCount = 1;

};

Queue.prototype.enqueue = function (value) {
//with enqueue we need it to keep track of who came in the line
//and the people count would increase because someone just stepped in line

this.peopleCount += 1;
this.lineNumber[this.peopleCount - 1] = value;
}

Queue.prototype.dequeue = function () {
var guyLeaving = this.lineNumber[1];
this.peopleCount -= 1;

for(let i = 1; i < this.peopleCount; i++) {
  this.lineNumber[i] = this.lineNumber[i + 1];
}

return guyLeaving; //everytime you dequeue you're telling who is leaving.
}

Queue.prototype.size = function () {
//we're always displaying who big the line is
if(this.peopleCount < 0 || this.peopleCount === 0) {
  return 0;
}

  return this.peopleCount - 1;
}

var line = new Queue();
