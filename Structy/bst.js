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
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const smallLeft = treeMinValue(root.left);
  const smallRight = treeMinValue(root.right);
  return Math.min(root.val, smallLeft, smallRight);
};

const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

console.log(treeMinValue(a)); // -> -13











