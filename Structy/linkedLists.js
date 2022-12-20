class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// // ZIPPER LINKED LIST
// const zipperLists = (head1, head2) => {
//   if (head1 === null && head2 === null) return null;
//   if (head1 === null) return head2;
//   if (head2 === null) return head1;
//   const next1 = head1.next;
//   const next2 = head2.next;
//   console.log('next1: ', next1, 'next2: ', next2)
//   head1.next = head2;
//   head2.next = zipperLists(next1, next2);
//   return head1;
// };


// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // a -> b -> c -> d -> e -> f

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// // x -> y -> z

// zipperLists(a, x);
// // a -> x -> b -> y -> c -> z -> d -> e -> f

// // MERGE LISTS
// const mergeLists = (head1, head2) => {
//   let dummyHead = new Node(null);
//   let tail = dummyHead;
//   let current1 = head1;
//   let current2 = head2;
  
//   while (current1 !== null && current2 !== null) {
//     if (current1.val < current2.val) {
//       tail.next = current1;
//       current1 = current1.next;
//     } else {
//       tail.next = current2;
//       current2 = current2.next;
//     }
//     tail = tail.next;
//   }
  
//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;
  
//   return dummyHead.next;
// };

// const a = new Node(5);
// const b = new Node(7);
// const c = new Node(10);
// const d = new Node(12);
// const e = new Node(20);
// const f = new Node(28);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// // 5 -> 7 -> 10 -> 12 -> 20 -> 28

// const q = new Node(6);
// const r = new Node(8);
// const s = new Node(9);
// const t = new Node(25);
// q.next = r;
// r.next = s;
// s.next = t;
// // 6 -> 8 -> 9 -> 25

// console.log(mergeLists(a, q));

// // IS UNIVALUE LIST
// const isUnivalueList = (head) => {
//   let current = head;

//   while (current !== null) {
//     if (current.val !== head.val) return false;
//     current = current.next;
//   }

//   return true;

// };

// const a = new Node(7);
// const b = new Node(7);
// const c = new Node(6);

// a.next = b;
// b.next = c;
// // 7 -> 7 -> 7

// console.log(isUnivalueList(a)); // true


// // LONGEST STREAK
// const longestStreak = (head) => {
//   if (head === null) return 0;

//   let current = head;
//   let currentVal = head.val;
//   let currCount = 0;
//   let maxCount = 0;

//   while (current !== null) {
//     if (current.val === currentVal) currCount += 1;
//     else {
//       maxCount = Math.max(maxCount, currCount);
//       currCount = 1;
//       currentVal = current.val;
//     };
//     current = current.next;
//   }
//   return Math.max(maxCount, currCount);
// }

// const a = new Node(9);
// const b = new Node(9);
// const c = new Node(1);
// const d = new Node(9);
// const e = new Node(9);
// const f = new Node(9);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// // 9 -> 9 -> 1 -> 9 -> 9 -> 9

// console.log(longestStreak(a)); // 3

// // REMOVE NODE
// const removeNode = (head, targetVal) => {
//   // if head is target
//   if (head.val === targetVal) {
//     head = head.next;
//     return head;
//   };

//   // if head is not target
//   let curr = head.next;
//   let prev = head;
//   while (curr !== null) {
//     if (curr.val === targetVal) {
//       prev.next = curr.next;
//       return head;
//     } 
//     let temp = curr;
//     curr = curr.next;
//     prev = temp;
//   }
//   return head;
// };

// const node1 = new Node("h");
// const node2 = new Node("i");
// const node3 = new Node("j");
// const node4 = new Node("i");

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// // h -> i -> j -> i

// console.log(removeNode(node1, "i"));




// const nestedArr = [['elephant'], ['anaconda'], ['zebra'], ['gorilla']];
// const nestedArr1 = [['elephant', 'apple', 'snake'], ['anaconda', 'jumping spider', 'blue bird'], ['zebra', 'dog'], ['gorilla', 'chipmunk', 'cat']];

// const postNestedArr = nestedArr.sort();
// const postNestedArr1 = nestedArr1.sort();

// console.log(nestedArr);
// console.log(postNestedArr);
// console.log(nestedArr1);
// console.log(postNestedArr1);

// function objToSortedArray(obj) {
//   const returnArr = [];
//   const keysOfObj = Object.keys(obj);
//   const valsOfObj = Object.values(obj);

//   for (let i = 0; i < keysOfObj.length; i++) {
//     const nestedArr = [];
//     nestedArr.push(keysOfObj[i], valsOfObj[i]);
//     console.log(nestedArr);
//     returnArr.push(nestedArr);    
//   }
//   returnArr.sort();
//   return returnArr;
// }

// console.log(objToSortedArray([['chris', 503030495], ['andy', 29384092], ['mildew', 90128402]]));


// // INSERT NODE
// const insertNode = (head, value, index) => {
//   const node = new Node(value);
//   let current = head;
  
//   // edge case if we want to insert at head
//   if (index === 0) {
//     node.next = head;
//     return node;
//   };
//   while (index >= 1) {
//     index -= 1;
//     current = current.next;
//     if (index === 1) {
//       let prev = current;
//       let next = current.next;
//       prev.next = node;
//       node.next = next;
//       return head;
//     }
//   }
// };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// // a -> b -> c -> d

// console.log(insertNode(a, 'x', 2));
// // a -> b -> x -> c -> d

// // CREATE LINKED LIST
// const createLinkedList = (values) => {
//   const length = values.length;
//   const head = new Node(values[0]);
//   const sliced = values.slice(1);
//   let current = head;
  
//   sliced.forEach(el => {
//     current.next = new Node(el);
//     current = current.next;
//   })

//   return head;
// };

// createLinkedList([1, 7, 1, 8]);
// // 1 -> 7 -> 1 -> 8

// const addLists = (head1, head2) => {
//   let num1 = '';
//   let num2 = '';
//   let curr = head1;
  
//   while (curr !== null){
//     num1 += curr.val;
//     curr = curr.next;
//   }
//   curr = head2;
//   while (curr !== null) {
//     num2 += curr.val;
//     curr = curr.next;   
//   }

//   num1 = num1.split("").reverse().join("");
//   num2 = num2.split("").reverse().join("");

//   const sum = Number(num1) + Number(num2);
  
//   function createList(num) {
//     let number = JSON.stringify(num);
//     number = number.split("").reverse().join("");

//     const head = new Node(number[0]);
//     let current = head;
  
//     for (let i = 1; i < number.length; i++) {
//       current.next = new Node(number[i]);
//       current = current.next;
//     }
//     return head;
//   }
//   return createList(sum);
// };

// const a1 = new Node(1);
// const a2 = new Node(4);
// const a3 = new Node(5);
// const a4 = new Node(7);
// a1.next = a2;
// a2.next = a3;
// a3.next = a4;
// // 1 -> 4 -> 5 -> 7

// const b1 = new Node(2);
// const b2 = new Node(3);
// b1.next = b2;
// // 2 -> 3 

// console.log(addLists(a1, b1));
// // 3 -> 7 -> 5 -> 7
