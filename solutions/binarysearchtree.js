class Tree
{
	constructor()
	{
		this.root = null;
	}

	toObject()
	{
		return this.root;
	}

	add(value)
	{
		if (this.root === null)
		{
			this.root = new Node(value);
		}

		let current = this.root; 

		while (true)
		{
			if 	(current.value > value)
			{
				//go left 
				if (current.left)
				{
					current = current.left
				}
				else 
				{
					current.left = new Node(value);
					return;	
				}
			}
			else 
			{
				//go right 
				if (current.right)
				{
					current = current.right;
				}
				else 
				{
					current.right = new Node(value);
					return;
				}
			}	
		}
	}
}

class Node
{
	constructor(value, right = null, left = null)
	{
		this.value = value;
		this.right = right;
		this.left = left;
	}
}

