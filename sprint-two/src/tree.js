var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  _.extend(newTree, treeMethods); //give newTree all of the functions
  // your code here
  newTree.children = [];  // fix me
//tree.children[0] should be an array and objects are supposed to be 
//pushed into here.

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //adds new nodes in here.
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false;
  var recursiveFind = function(object) {
    if(object.value === target) {
      result = true;
      return;
    } if(object.children !== undefined) {
      for (let i = 0; i < object.children.length; i++) {
        //console.log(object.value)
        recursiveFind(object.children[i]);
      }
    }
  }
  recursiveFind(this);
  return result;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
