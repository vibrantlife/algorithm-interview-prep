//Write a function to see if a binary tree is superbalanced. 

//a tree is super balanced if the difference between the depths of any 2 leaf nodes is no greater than 1. 

function isBalanced(root)
{
	//base case. a tree with no nodes
	if (!root)
	{
		return true;
	}


	let depths = [];
	let nodes = [];

	nodes.push([root, 0]);

	while (nodes.length)
	{
		//pop node and its depth from the top of our stack
		let nodePair = nodes.pop()

		let node = nodePair[0];
		let depth = nodePair[1];

		//case we found a node with no children ie: node leaf
		if (!node.left && !node.right)
		{
			//only keep if its a new depth
			if (depths.indexOf(depth) < 0)
			{
				depths.push(depth);
			}

			if ((depths.length > 2) ||
				(depths.legnth === 2 && Math.abs(depths[0] - depths[1] > 1)))
			{
				return false;
			}
		}

		//if this node has a child - keep going down 
		else 
		{
			if (node.left)
			{
				nodes.push([node.left, depth + 1]);
			}
			if (node.right)
			{
				nodes.push([node.right, depth + 1]);
			}
		}
	}
	return true;

}

let bst = new isBalanced();

bst.push(3);
