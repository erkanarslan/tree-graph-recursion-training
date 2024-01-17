console.clear();
console.log('Welcome to Tree, Graph and Recursion Course!');

let node8 = { label: 8, children: [], population: 30 };
let node5 = {
	label: 5,
	children: [
		{ label: 6, children: [], population: 40 },
		{ label: 7, children: [], starred: true, population: 50 },
		node8,
	],
	starred: true
};

let node2: TreeNode = {
	label: 2,
	children: [
		{
			label: 4,
			children: [],
			population: 20,
		},
		node5,
	],
};

let node3 = {
	label: 3,
	children: [],
	starred: true,
};

let root = {
	label: 1,
	children: [
		node2,
		node3,
	]
};

// DFS example
function dfsTraversal(node: TreeNode) {
	console.log(node.label);

	for (let child of node.children) {
		dfsTraversal(child);
	}
}

// BFS example
function bfsTraversal(node: TreeNode) {
	let queue = [node];

	let nextNode: TreeNode | undefined;
	while(nextNode = queue.shift()) {
		console.log('Visited:', nextNode.label, 'Children:', nextNode.children.map(c => c.label).join(', '));
		queue.push(...nextNode.children);
		console.log(queue.map(n => n.label).join(', '))
	}
}

// Find node in tree
function findFirstStarredProject(node: TreeNode): TreeNode | null {
	console.log('visited', node.label);

	// --- Leaf node ---
	if (node.starred) return node;

	// --- Non-leaf node ---
	for (let child of node.children) {
		let starred = findFirstStarredProject(child);
		if (starred) return starred;
	}

	return null;
}

// Find nodes in tree
function findAllStarredProjects(node: TreeNode): TreeNode[] {
	console.log('visited', node.label);

	// --- Leaf node ---
	if (!node.children.length) {
		if (node.starred) {
			return [node];
		} else {
			return [];
		}
	}

	// --- Non-leaf node ---
	let starred: TreeNode[] = [];
	if (node.starred) starred.push(node);

	for (let child of node.children) {
		let childStarred = findAllStarredProjects(child);
		starred.push(...childStarred);
	}

	return starred;
}

// Find path to node
function findPathToNode(node: TreeNode, target: number): TreeNode[] {
	// -- Leaf --
	if (!node.children.length) {
		if (node.label == target) {
			return [node];
		} else {
			return [];
		}
	}

	// -- Children --
	for (let child of node.children) {
		let path = findPathToNode(child, target);
		if (path.length > 0) {
			return [node, ...path];
		}
	}

	return [];
}

// Find total population
function findTotalPopulation(node: TreeNode): number {
	// -- End --
	if (!node.children.length) return node.population!;

	let total = 0;
	for (let child of node.children) {
		total += findTotalPopulation(child);
	}

	return total;
}

// Find total population (Directed Acyclic Graph example)
function findTotalPopulationInDAG(node: TreeNode, visited: number[] = []): number {
	// Visit check
	if (visited.includes(node.label)) return 0;
	visited.push(node.label);
	console.log('visited', node.label);

	// -- End --
	if (!node.children.length) return node.population!;

	let total = 0;
	for (let child of node.children) {
		let childTotal = findTotalPopulationInDAG(child, visited);
		console.log('Child total for', child.label, childTotal);
		total += childTotal;
	}

	return total;
}

// Print tree hierarchy line by line
function printTreeHierarchy(node: TreeNode, depth = 0): string {
	// Leaf (check if leaf)
	let dots = '.'.repeat(depth * 2);
	let text = dots + node.label + '\n';

	// Non-leaf
	for (let child of node.children) {
		text += printTreeHierarchy(child, depth + 1);
	}

	return text;
}

// Print tree hierarch in beautiful format
function printBeautifulTreeHierarchy(node: TreeNode): string[] {
	let lines = [
		String(node.label)
	];

	for (let child of node.children) {
		let childText = printBeautifulTreeHierarchy(child);

		// If last child, use └─
		if (node.children.at(-1) == child) {
			childText[0] = '└─' + childText[0];
			for (let i = 1; i < childText.length; i++) {
				childText[i] = '  ' + childText[i];
			}
		}
		else {
			childText[0] = '├─' + childText[0];
			for (let i = 1; i < childText.length; i++) {
				childText[i] = '│ ' + childText[i];
			}
		}

		lines.push(...childText);
	}

	return lines;
}

let lines = printBeautifulTreeHierarchy(root);
console.log(lines.join('\n'));


type TreeNode = {
	label: number;
	children: TreeNode[];
	starred?: boolean;
	population?: number;
};
