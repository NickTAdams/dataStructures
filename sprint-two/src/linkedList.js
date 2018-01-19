var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.count = 0; //keeps track of how many nodes we have
  //everytime we make something new, we update the count prop
    
  
//when a new node is added... we add it to the tail and then when we 
//insert again, the last inserted item will be pointing to the head?

  list.addToTail = function(value) {
  //I think we should use node as a storage.
  // node itself looks like its a function class.
  //Node takes on a value as an argument.  
    var node = new Node(value);
    this.count++;
    if (this.count === 1) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; //before it gets overwritten, we refer to the previous
      this.tail = node;
    }

//why is head.next null???

//linkedList.addToTail(4); the function is called and list.tail should
//be the value 

  //should list.tail be an instantiation of node?
  //expect(linkedList.tail.value).to.equal(4);
  //linkedList is an instantiation of LinkedList.
    
    //this.tail = value;
  //when you call this function it should change list.tail to the value you plug
    //in as the argument
    
//if tail is first, assign that node as both tail and head.
    
    
//adding a tail is like adding a new stage

    
  };

  list.removeHead = function() {
  //still have control of the object since list.tail right now is the object.
    var previous = this.head.value;
    this.head = this.head.next;
    return previous;
  };

  list.contains = function(target) {
  //check head's value itself if its not target check next value  
  //continously until it finds it.
    
    //head.next is an obj {}.
    
    var recursion = function (node) { 

      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
    
        return recursion(node.next);
      }
    };    
    
    return recursion(this.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null; //next instance's value.
//how do we refer to something that doesn't exist yet?

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
