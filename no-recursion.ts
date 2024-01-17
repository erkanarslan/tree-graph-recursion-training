/*console.clear();

let node1: TreeNode = { label: 1, children: [], parent: null }
let node2: TreeNode = { label: 2, children: [], parent: null }
let node3: TreeNode = { label: 3, children: [], parent: null }
let node4: TreeNode = { label: 4, children: [], parent: null }
let node5: TreeNode = { label: 5, children: [], parent: null }
let node6: TreeNode = { label: 6, children: [], parent: null }
let node7: TreeNode = { label: 7, children: [], parent: null }
let node8: TreeNode = { label: 8, children: [], parent: null }

node1.children.push(node2, node3);
node2.parent = node1;
node3.parent = node1;
node2.children.push(node4, node5);
node4.parent = node2;
node5.parent = node2;
node5.children.push(node6, node7, node8);
node6.parent = node5;
node7.parent = node5;
node8.parent = node5;

// Find the root from child (recursive)
function findRootFromNodeRecursive(node: TreeNode): TreeNode {
	console.log('visited', node.label);
	if (node.parent == null) return node;

	return findRootFromNodeRecursive(node.parent);
}

// Find root (loop)
function findRootFromNodeLoop(node: TreeNode): TreeNode {
	console.log('visited', node.label);

	while(node.parent) {
		node = node.parent!;
	}

	return node;
}

// Fibonacci: 1 1 2 3 5 8 13 21 ...
// f(n) = f(n-1) + f(n-2)
// Recursive O(2^n)
function fibonacci(n: number): number {
	if (n <= 2) return 1;

	return fibonacci(n - 1) + fibonacci(n - 2);
}

// Loop O(n)
function fibonacciLoop(n: number): number {
	if (n <= 2) return 1;

	let f1 = 1;
	let f2 = 1;
	let sum: number = 1;

	while (n > 2) {
		sum = f1 + f2;
		n--;
		f1 = f2;
		f2 = sum;
	}

	return sum;
}

// Factorial
// f(n) = n * f(n-1)
// tailing recursive call
function factorial(n: number): number {
	if (n == 1) return 1;
	return n * factorial(n-1);
}

console.log(factorial(500));

// 4 -> 3, 2 -> 2, 1
// 5 -> 4, 3 -> 3, 2 -> 2, 1 -> 2, 1

// 59 -> 58, 57 -> 56, 55
// 58 -> 57, 56
// 57 -> 56, 55

console.log(fibonacciLoop(60))

type TreeNode = {
	label: number;
	children: TreeNode[];
	parent: TreeNode | null;
};
*/
