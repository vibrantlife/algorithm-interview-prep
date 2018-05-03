









//function Node(value) {
// 	this.value = value;
// 	this.right = null;
// 	this.left = null;
// }

// function BST() {
// 	this.root = null;
// }

// BST.prototype.insert = function(value) {
// 	let root = this.root;

// 	if (!root) {
// 		this.root = new Node(value);
// 		return;
// 	}

// 	if (value <= this.value) {
// 		if (!this.left) {
// 			this.left = new Node(value)
// 		}
// 		else {
// 			return this.left.insert(value)
// 		}
// 	}
// 	else {
// 		if (!this.right) {
// 			this.right = new Node(value);
// 		}
// 		else {
// 			return this.right.insert(value)
// 		}
// 	}
// }


// BST.prototype.contains = function(value) {
// 	//base case: if current node is equavelent to search value 
// 	//if search value is less than or equal to root node's value 
// 		//recurse the left side of the tree in search of value;
// 	// else 
// 		//recurse the right side of the tree in search of the value;

// 	if (this.value === value) return true;

// 	if(value <= this.value) {
// 		if (!this.left) {
// 			return false;
// 		}
// 		else {
// 			return this.left.contains(value)
// 		}
// 	}
// 	else {
// 		if (!this.right) return false;
// 		else {
// 			return this.right.contains(value);
// 		}
// 	}
// }


// BST.prototype.depthFirst = function(iterator)
