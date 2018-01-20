

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this.isBucket) {
  
  
  }
  
  
};

HashTable.prototype.makeBucket = function(index) {
 this._storage.set(index, 'sfasf');
}

HashTable.prototype.isBucket = function(index) {
//function that makes an array.
//var array = []; //this._storage.get(index) returns an element in the in-memory stoage.
//console.log(this._storage.get(index));
  if(this._storage.get(index) !== undefined) {
    return true;
  } else {
    return false;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

var hash = new HashTable();
hash.makeBucket(0)
hash.isBucket(0)