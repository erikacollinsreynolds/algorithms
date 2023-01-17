// // // 01/17/23 // // //

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7;
// ar = [1, 2, 1, 2, 1, 3, 2]

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Function Description
// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):
  // int n: the number of socks in the pile
  // int ar[n]: the colors of each sock

// Returns
  // int: the number of pairs

// Input Format
  // The first line contains an integer n, the number of socks represented in ar.
  // The second line contains n space-separated integers, ar[i], the colors of the socks in the pile.


  // function sockMerchant (array) {
  //   // create an object -> track the number of each number 
  //   let cache = {};

  //   // iterate through the array -> push into object
  //   for (let i = 0; i < array.length; i++) {
  //     if(!cache[array[i]]) {
  //       cache[array[i]] = 1
  //     } else {
  //       cache[array[i]] += 1
  //     }
  //   }

  //   let total = 0
  //   for (const prop in cache) {
  //     total += Math.floor(cache[prop] / 2)
  //   }

  //   return total
  // }

  // function sockMerchant(n, ar) {
  //     let counter = 0;
  //     ar = ar.sort();
  //     while (ar.length) {
  //       if (ar[0] === ar[1]) {
  //         counter += 1;
  //         ar.shift();
  //         ar.shift();
  //       } else {
  //         ar.shift();
  //       }
  //     }
  //   return counter;
  // }

  // console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2])) // 2
  // console.log(sockMerchant([1, 2, 1, 2, 1, 1, 2])) // 3
  // console.log(sockMerchant([1, 2, 3, 4])) // 0
  // console.log(sockMerchant([])) // 0



  // function BinarySearchTree(value) {
  //   this.value = value;
  //   this.right = null;
  //   this.left = null;
  // }
  
  // BinarySearchTree.prototype.add = function (num) {
  //   if (num === undefined) throw Error('Num is undefined');
  //   // tree is null
  //   // tree is not null
  //   // check if num is greater or less than root value
  //     // if less than, assign to left
  //     // if greater than, assign to right
  //   let curr = this;

  //   while (curr.value !== null){
  //     if (num < this.value) {
  //       curr = curr.left;
  //     }
  //     else if (num > this.value) {
  //       curr = curr.right
  //     }
  //   }

  //   curr.value = new BinarySearchTree(num);
    
  //   return;
  // }

  // const tree = new BinarySearchTree(5);
  // console.log(tree)
  // tree.add(6);
  // console.log(tree)


  // BinarySearchTree.prototype.add = function (value) {
  //   //create a new leaf with providfed value
  //   const leaf = new BinarySearchTree(value);
  //   //check to see if current is larger than this.value
  //   if (value > this.value) {
  //     //ternary operator to add leaf to right if right is null otherwise pass value back in
  //     this.right === null ? this.right = leaf : this.right.add(value);
  //   } else {
  //     //ternary operator to assign new lead to the left if left is null, otherwise pass value(leaf) back into the func
  //     this.left === null ? this.left = leaf : this.left.add(value);
  //   }
  //   return value
  // };






  