/*
Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
 */

// const fiveSort = (nums) => {
//   // create an array to store 5s.
//   const fives = [];
//   // iterate thru nums array 
//   for (let i = 0; i < nums.length; i++) {
//     let current = nums.pop()
//     // if you encounter a 5: 
//       // push it into 5s array
//     if (current === 5) {
//       fives.push(current);
//     } else {
//     // if it isn't a 5:
//       // pop it off, then unshift it to the nums array
//       nums.unshift(current);
//     }
//   } 
//   // return concat nums + array
//   return nums.concat(fives);
// };

// const fiveSort = (nums) => {
//   let i = 0;
//   let j = nums.length - 1;
//   while (i < j) {
//     if (nums[j] === 5) {
//       j -= 1;
//     } else if (nums[i] === 5) {
//       [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
//       i += 1;
//     } else {
//       i += 1;
//     }
//   }

//   return nums;
// };