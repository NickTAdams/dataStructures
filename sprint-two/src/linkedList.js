var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

//when a new node is added... we add it to the tail and then when we 
//insert again, the last inserted item will be pointing to the head?

  list.addToTail = function(value) {
  //I think we should use node as a storage.
  // node itself looks like its a function class.
  //Node takes on a value as an argument.  
  list.head = value;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
