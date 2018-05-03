function Trie() {
	this.rootNode = {}
}

Trie.prototype.addWord = function(word) {
	var currentNode = this.rootNode;

	var isNewWord = false;

	//work down through trie, add nodes as needed. keep track of whether nodes are added
	for (let i = 0; i < word.length; i++) {
		var char = word[i];

		if (!currentNode.hasOwnProperty(char)) {
			isNewWord = true;
			currentNode[char] = {};
		}

		currentNode = currentNode[char];
	}

	//explicitly mark end of word.
	if (!currentNode.hasOwnProperty('End of Word')) {
		isNewWord = true;
		currentNode['End of Word'] = {};
	}

	console.log(isNewWord);
	return isNewWord;
}

