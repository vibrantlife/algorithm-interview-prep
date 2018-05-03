//how do you create a binary search tree? 

//first you need a node 
function Node(value)
{
	this.value = value;
	this.right = null;
	this.left = null;
}

//create a constructor for binary search tree 
function binarySearchTree()
{
	this.root = null;
}

binarySearchTree.prototype.push = function(val)
{
	let root = this.root;

	if (!root)
	{
		this.root = new Node(val);
		return;
	}

	let current = root;
	let newNode = new Node(val);

	while(current)
	{
		//if the value is less than the current node go left
		if (val < current)
		{
			//if there is no left on the current node, create a new node on the left
			if (!current.left)
			{
				current.left = newNode;
			}
			//if there is a left, assign current to that node. 
			else 
			{
				current = current.left;
			}
		}
		//if value is greater than current node go right
		else 
		{
			//if there is no right on the current node, create a new node on the right
			if (!current.right)
			{
				current.right = newNode;
				return;
			}
			//if there is a node there, assign current to that node
			else 
			{
				current = current.right;
			}
		}
	}
}

var bst = new binarySearchTree();
bst.push(3);
bst.push(6);
bst.push(4);
bst.push(1);
bst.push(5);

console.log(bst);


function isBST(treeRoot) {
	//start at root, with an arbitrarily lower bound
	//and an arbitrarily high upper bound

	var nodeAndBoundStack = [];
	nodeAndBoundStack.push({node: treeRoot, lowerBound: -Infinity, upperBound: Infinity});

	//depth first traversal 
	while (nodeAndBoundStack.length) {
		var nodeAndBounds = nodeAndBoundStack.pop();
		var node = nodeAndBounds.node,
		lowerBound = nodeAndBounds.lowerBound,
		upperBound = nodeAndBounds.upperBound;

		//if this node is invalid, we return false right away 
			//why is this invalid if the value is less than lowerBound or greater than upperBound?
		if (node.value <= lowerBound || node.value >= upperBound) {
			return false;
		}

		if (node.left) {
			//this node must be less than the current node
			nodeAndBoundStack.push({node: node.left, lowerBound: lowerBound, upperBound: upperBound});
		}
		if (node.right) {
			//this node must be less than current node
			nodeAndBoundStack.push({node: node.right, lowerBound: lowerBound, upperBound: upperBound})l
		}
	}

	//if none of the nodes were invalid, return true
	//at this point all nodes have been checked 
	return true;
}

//RECURSIVE SOLUTION 

function isBSTRecursive(treeRoot, upperBound, lowerBound) {
	lowerBound = (typeOf lowerBound !== 'undefined') ? lowerBound : -Infinity;
	upperBound = (typeOf upperBound !== 'undefined') ? upperBound ? Infinity;

	if (!treeRoot) return true;

	if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
		return false;
	}
	return isBSTRecursive(treeRoot.left, lowerBound, treeRoot.value) && isBSTRecursive(treeRoot.right, treeRoot.value, upperBound)

}