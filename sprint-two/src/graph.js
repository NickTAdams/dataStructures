

// Instantiate a new graph
var Graph = function() {
  this.masterList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.masterList.push(newNode);

  return newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for (let i = 0; i < this.masterList.length; i++) {
    if(this.masterList[i].value === target) {
      return true
    }

  }
  return false;
};

// Removes a node 
Graph.prototype.removeNode = function(target) {
//we could use contains again to look for the node and remove it.
  // for (let i = 0; i < this.masterList.length; i++) {
  //   for (let j = 0; j < this.masterList[i].edges.length; j++) {
  //     if(this.masterList[i].edges[j].value === target) {
  //       this.masterList[i].edges.splice(j, 1);
  //     }
  //   } 
  // }
  var removedEdges = undefined;
  var removeThis;
  for(var i = 0; i < this.masterList.length; i++) {
    if(this.masterList[i].value === target) {
      removedEdges = this.masterList[i].edges;
      removeThis = i;
    }
  }
  

//removed edges gives us the nodes that contain the nodes that was removed itself.
//now that we've identified who has the removed node in their array...
//we iterate through mother node and access that particular one.

//look into removedEdges.edge

  for(let i = 0; i < removedEdges.length; i++) {
    for(let x = 0; x < removedEdges[i].length; x++) {
        if(removedEdges[i].edges[x].value === target) {
          removedEdges[i].edges.splice(x, 1);
        }
    }
  }
  
  this.masterList.splice(removeThis, 1);
  // if(removedEdges.length > 0) {
  //   for(var i = 0; i < removedEdges.length; i++) {
  //     this.removeNode(removedEdges[i]);
  //   }
  // }


  // if(removed.edges !== undefined) {
  //   for(var i = 0; i < removed.edges.length; i++) {
  //     console.log(removed.edges[i].value);
  //   }
  // }


  // for (let i = 0; i < this.masterList.length; i++) {
  //   if(this.masterList[i].edge.includes(removed)) {
  //     this.masterList[i].edge.splice(, 1);
  //   }
  // }


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var node1 = undefined;
  var node2 = undefined;
  var result1 = false;
  var result2 = false;

  for(var i = 0; i < this.masterList.length; i++) {
    if(this.masterList[i].value === fromNode) {
        node1 = this.masterList[i];
    } else if (this.masterList[i].value === toNode) {
        node2 = this.masterList[i];
    }
  }
  for(var i = 0; i < node1.edges.length; i++) {
      if(node1.edges[i].value === toNode) {
        result1 = true;
      } 
  }
   
 //check this later.
  if(node2){
    for(var i = 0; i < node2.edges.length; i++) {
      if(node2.edges[i]) {
        if(node2.edges[i].value === fromNode) {
           result2 = true;
        } 
      } 
    }
  }
  if (result1 && result2) {    
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
 
//why can this not have a node add itself?
 var node1 = undefined;
 var node2 = undefined;
  
 for (var i = 0; i < this.masterList.length; i++) {
    if(this.masterList[i].value === fromNode) {
      node1 = this.masterList[i];
    } 
    if (this.masterList[i].value === toNode) {
      node2 = this.masterList[i];
    }
  }
  node1.edges.push(node2);
  if(fromNode !== toNode) {
    node2.edges.push(node1);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.masterList.length; i++) {
    if(this.masterList[i].value === fromNode) {
      var node1 = this.masterList[i];
    } else if (this.masterList[i].value === toNode) {
      var node2 = this.masterList[i];
    }
  }
  for(var i = 0; i < node1.edges.length; i++) {
    if(node1.edges[i].value === toNode) {
      node1.edges.splice(i, 1);
    }
  }
  for(var i = 0; i < node2.edges.length; i++) {
    if(node2.edges[i].value === fromNode) {
      node2.edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
 
// for (let i = 0; i < this.masterList.length; i++) {
//     var item;
//     cb(this.masterList[i]);
//   }
  _.each(this.masterList, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };
// var graph = new Graph();
// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(5, 4);
// graph.forEachNode(connectToFive)
//graph.removeNode(5);
