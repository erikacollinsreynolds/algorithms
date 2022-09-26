// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. 


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const depthFirstValues = (root) => {
//   if (root === null)
//     return [];
  
//   const leftValues = depthFirstValues(root.left);
//   const rightValues = depthFirstValues(root.right);
//   return [ root.val, ...leftValues, ...rightValues ];
// };


// test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//initialize result array
//recursively 
// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']


// // test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f
// //    /
// //   g

// depthFirstValues(a); 
// //    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']


// // test_02:
// const a = new Node('a');
// //      a
// depthFirstValues(a); 
// //    -> ['a']


// // test_03:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.right = b;
// b.left = c;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //       \
// //        d
// //         \
// //          e

// depthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'd', 'e']


// // test_04:
// depthFirstValues(null); 
// //    -> []

// // // // Breadth First Values // // // //
/* Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// const breadthFirstValues = (root) => {
//   // declare array for output
//   //initialize new instance of queue
//   //add root to the end of queue
//   const result = [];
//   let queue = [root];

//   if (root === null) return [];
  
//   while (queue.length > 0) {
//     //declare current
//     const currentNode = queue.shift()

//     //push current value to result
//     result.push(currentNode.val);

//     //if left and right are null, break out of while loop
//     if(currentNode.left === null && currentNode.right === null) continue
    
//     //if currentnode.left exists
//       //push into queue 

//       if(currentNode.left) {
//         queue.push(currentNode.left)
//       }
      
//     //if current.right exists
//       //push into queue

//       if(currentNode.right) {
//         queue.push(currentNode.right)
//       }
    
//   }

//   console.log('result', result)
//   // return output array 
//   return result;
// };


// // test_00:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// //      a
// //    /   \
// //   b     c
// //  / \     \
// // d   e     f

// breadthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'd', 'e', 'f']
// //test_01:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');
// const g = new Node('g');
// const h = new Node('h');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// e.left = g;
// f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

// breadthFirstValues(a); 
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// //test_02:
// const a = new Node('a');

// //      a

// breadthFirstValues(a); 
// //    -> ['a']
// //test_03:
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const x = new Node('x');

// a.right = b;
// b.left = c;
// c.left = x;
// c.right = d;
// d.right = e;

// //      a
// //       \
// //        b
// //       /
// //      c
// //    /  \
// //   x    d
// //         \
// //          e

// breadthFirstValues(a); 
// //    -> ['a', 'b', 'c', 'x', 'd', 'e']

// //test_04:
// breadthFirstValues(null); 
// //    -> []


// DEPTH FIRST SUM
// const bstSum = root => {
//   // a place to visualize the values
//   let values = [];
//   // declare a variable to store sum
//   let sum = 0;

//   // create helper function to find leftmost node
//   function traversePreOrder(root) {

//     if (!root) return sum;

//     // push root node to values
//     values.push(root.value);
//     sum += root.value;

//     // if left node exists, traverse recursively 
//     if (root.left) traversePreOrder(root.left);
    
//     // if right node exists, traverse recursively 
//     if (root.right) traversePreOrder(root.right);
//   }

//   // invoke helper function
//   traversePreOrder(root);

//   console.log(`The sum is: ${sum} and here are the nodes we visited in order: ${values}`)

//   // return sum
//   return sum;
// };