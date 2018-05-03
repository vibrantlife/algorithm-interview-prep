//complexity
	//O(h) time - h = height
	//O(1) space

function Node(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

Node.prototype.insertLeft = function(value) {
	this.left = new Node(value);
	return this.left;
}

Node.prototype.insertRight = function(value) {
	this.left = new Node(value);
	return this.right;
}

function findLargest(rootNode) {
	var current = rootNode;

	while(current) {
		if (!current.right) return current.value;

		current = current.right;
	}
}

function findSecondLargest(rootNode) {

	//base case: if there isn't a root node or if there is not nodes to the left or right of the root throw an error
	if (!rootNode || (!rootNode.left && !rootNode.right)) {
		thorow new Error('Tree must have at least 2 nodes');
	}

	var current = rootNode;

	///if there is a left node, but there is no right node, continue searching on the left side
	if(current.left && !current.right) {
		return findLargest(current.left)
	}

	// if there's a right node and that node does not have left or right children return that node's value
	if (current.right && (!current.right.left && !current.right.right)) {
		return current.value;
	}

	current = current.right;
}