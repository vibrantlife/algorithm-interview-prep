//constructor function 
//pass a value to the  node contructor function 
	//set its left and right child to null
function Node(value) {
	this.value = value;
	this.right = null;
	this.left = null;
}

//binary search tree 
function BinarySearchTree() {
	this.root = null;
}

//insert 
BinarySearchTree.prototype.insert = function(val) {
	let root = this.root;

	//if there is no root, create a new Node and return;
	if (!root) {
		this.root = new Node(val);
		return;
	}

	let currentNode = root;
	let newNode = new Node(val);

	//while there is a currentNode
	while (currentNode) {
		//if val is less than or equal to currentNode value
		if (val <= currentNode.value) {
			// if there is no left node
				//create a new left node
			if (!currentNode.left) {
				currentNode.left = newNode;
				break;
			}
			else {
				// if there is a left node 
					// assign the currentNode to the current left node and continue
				currentNode = currentNode.left;
			}
		}
		//if val is greater than the currentNode
		else {
			//if there isn't a right node 
				//create a new right node
			if (!currentNode.right) {
				currentNode.right = newNode;
				break;
			}
			else {
				//if there is a right node
					//assign currentNode to the right node and continue
				currentNode = currentNode.right;
			}
		}

	}
}


BinarySearchTree.prototype.contains = function(value) {
	var node = this.root;

	var traverse = function(node) {
		if (!node) return false;
		if (value === node.value) {
			return true;
		}
		else if (value > node.value) {
			return traverse(node.right);
		}
		else if (value < node.value) {
			return traverse(node.right);
		}
	}
	return traverse(node);
}


var bst = new BinarySearchTree();
bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(1);
bst.insert(5);

console.log('----- BINARY SEARCH TREE -----');
console.log(bst);

// BREADTH FIRST TREE TRAVERSAL 

//find all siblings at each level in order from left to right or right to left

BinarySearchTree.prototype.bfs = function (rootNode) {
	//check that root node exists 
	if (!rootNode) {
		return;
	}

	//create queue and push root node to it 
	var queue = [];
	queue.push(rootNode);

	//search through as long as queue is not empty 
	while (queue.length > 0) {
		//create reference to currentNode at top of queue 

		var currentNode = queue[0];

		//if currentNode has a left child node add it to the queue
		if (currtNode.left) {
			queue.push(currentNode.left);
		}

		//if currentNode has a right child add it to queue
		if (currtNode.right) {
			queue.push(currtNode.right);
		}

		//remove curdrntNode from queue 
		queue.shift();
	}
}



var bst3 = new BinarySearchTree();
bst3.insert('j');
bst3.insert('f');
bst3.insert('k');
bst3.insert('z')
bst3.insert('a')

console.log('--- BREADTH FIRST SEARCH ----');
console.log(bst3);




/// DEPTH FIRST SEARCH 

//pre-order traversal 
	// 1. display data of root element 
	// 2. traverse left subtree recursively by calling pre-order fxn
	// 3. traverse the right subtree by recursively calling pre-order fxn 
		//returns shallowest descendents first 

BinarySearchTree.prototype.preOrder = function(root) {
	var result = [];
	var node = this.root;

	var traverse = function(node) {
		//pushing shallowest descendent;
		result.push(node.value);
		node.left && traverse(node.left);
		node.right && traverse(node.right);
	};
	traverse(node);
	return result;

	
}

var preOrderBST = new BinarySearchTree();
preOrderBST.insert(10);
preOrderBST.insert(1);
preOrderBST.insert(20);
preOrderBST.insert(12);
preOrderBST.insert(17);

console.log('----- PREORDER BST -----')
console.log(preOrderBST);


//in order traversal - resturns the deepest descendents first
	//1. Traverse the left subtree by recursively
	//2. display the data part of the root element (current)
	//3. traverse the right subtree recursively 
BinarySearchTree.prototype.inOrder = function() {
	var result = [];
	var node = this.root;

	var traverse = function(node) {
		node.left && traverse(node.left);
		result.push(node.value);
		node.right && traverse(node.right);
	}
	traverse(node);
	return result;
}

BinarySearchTree.prototype.postOrder = function() {
	var result = [];
	var node = this.root;

	var traverse = function(node) {
		node.left && traverse(node.left);
		node.right && traverse(node.right);
		result.push(node.value);
	}

	traverse(node);
	return result;
}

console.log('---- Searching Tree Tests ---- ')
var searchTree = new BinarySearchTree();
searchTree.insert(10);
searchTree.insert(20);
searchTree.insert(30);
searchTree.insert(5);
searchTree.insert(8);
searchTree.insert(9);
searchTree.insert(3);

console.log(searchTree);
console.log(searchTree.preOrder());
console.log(searchTree.inOrder());
console.log(searchTree.postOrder());

//TEST RESULT EXPECTATIONS
// PREORDER [ 10, 5, 3, 8, 9, 20, 30 ]
// INORDER [ 3, 5, 8, 9, 10, 20, 30 ]
// POSTORDER [ 3, 9, 8, 5, 30, 20, 10 ]


//FIND MIN 
	//find the left most node to find the min value 
BinarySearchTree.prototype.findMin = function() {
	var node = this.root;
	var traverse = function(node) {
		return !node.left ? node.value : traverse(node.left);
	}
	return traverse(node);
}

//FIND MAX 
	//find the right most node to find the max value 
BinarySearchTree.prototype.findMax = function() {
	var node = this.root;
	var traverse = function(node) {
		return !node.right ? node.value : traverse(node.right);
	}
	return traverse(node);
}

















