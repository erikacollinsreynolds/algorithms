class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// // TREE SUM
// const treeSum = (head) => {
//   if (head === null) return 0;
//   let sum = 0;

//   sum += head.val;
//   sum += treeSum(head.left);
//   sum += treeSum(head.right);

//   return sum;
// }

// const a = new Node(1);
// const b = new Node(6);
// const c = new Node(0);
// const d = new Node(3);
// const e = new Node(-6);
// const f = new Node(2);
// const g = new Node(2);
// const h = new Node(2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      1
// //    /   \
// //   6     0
// //  / \     \
// // 3   -6    2
// //    /       \
// //   2         2

// console.log(treeSum(a)); // -> 10

// // TREE INCLUDES
// const treeIncludes = (root, target) => {
//   if (root === null) return;
//   if (root.val === target) return true;
//   return treeIncludes(root.left, target) || treeIncludes(root.right, target);
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// console.log(treeIncludes(a, "p")); // -> false


// // TREE MIN VALUE
// const treeMinValue = (root) => {
//   if (root === null) return Infinity;
//   const smallLeft = treeMinValue(root.left);
//   const smallRight = treeMinValue(root.right);
//   return Math.min(root.val, smallLeft, smallRight);
// };

// const a = new Node(-1);
// const b = new Node(-6);
// const c = new Node(-5);
// const d = new Node(-3);
// const e = new Node(-4);
// const f = new Node(-13);
// const g = new Node(-2);
// const h = new Node(-2);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //        -1
// //      /   \
// //    -6    -5
// //   /  \     \
// // -3   -4   -13
// //     /       \
// //    -2       -2

// console.log(treeMinValue(a)); // -> -13


// // MAX PATH SUM
// const maxPathSum = (root, sum = 0) => {
//   if (root === null) return -Infinity;
//   if (root.left === null && root.right === null) return root.val;
//   return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
// };


// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// console.log(maxPathSum(a)); // -> 18


// // // TREE PATH FINDER
// const pathFinder = (root, target) => {
//   // if root is null
//   if (root === null) return null;
//   // if root is target
//   if (root.val === target) return [root.val];

//   const leftPath = pathFinder(root.left, target);
//   if (leftPath !== null) return [root.val, ...leftPath];
//   const rightPath = pathFinder(root.right, target);
//   if (rightPath !== null) return [root.val, ...rightPath];

//   return null;
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /       \
// //   g         h

// console.log(pathFinder(a, "c")); // -> ['a', 'c']


// // TREE VALUE COUNT

/* Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree. */

/*
I: root of a bt and a target value to search for
O: the # of times that val was in the tree
E: null root
*/

// const treeValueCount = (root, target) => {
//   // count variable
//   let count = 0;

//   // depth first search
//   // increase the count var each time we encounter the target value
//     function dfsHelper(node) {
//       if (node === null) return count;
//       if (node.val === target) count += 1;
//       if (node.left) dfsHelper(node.left);
//       if (node.right) dfsHelper(node.right);
//     }
  
//   dfsHelper(root);

//   // return count
//   return count;
// }


// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      12
// //    /   \
// //   6     6
// //  / \     \
// // 4   6     12

// console.log(treeValueCount(a,  12)); // -> 3

// // HOW HIGH
/*



I:
O:
E:
A: 

*/

// const howHigh = (node) => {
//   if (!node) return -1;

//   return 1 + Math.max(howHigh(node.left), howHigh(node.right))
// }

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('f');
// const h = new Node('f');
// const i = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// f.right = g;
// g.right = h;
// h.right = i;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// console.log(howHigh(a)); // -> 2