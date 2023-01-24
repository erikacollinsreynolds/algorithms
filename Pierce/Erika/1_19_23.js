// // FOR PIERCE // //
/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction with 6 places after the decimal in an array.

func name is plusMinus

Input: arr = [1, 1, 0, -1, -1]
Output: an array of all the ratios (in a decimal format (6 places after the demicals))
[0.400000, 0.400000, 0.200000]
*/

// function plusMinus (array) {
//     //create a cache object OR increment a variable 
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;

//     //iterate through the array 
// //check index -> < 0, === 0 or > 0
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < 0) {
//             negative += 1
//         } else if (array[i] === 0) {
//             zero += 1
//         } else {
//             positive += 1
//         }
//     };

//     let pRatio = (positive / array.length).toFixed(6);
//     let nRatio = (negative / array.length).toFixed(6);
//     let zRatio = (zero / array.length).toFixed(6);

//     return [pRatio, nRatio, zRatio];

// };

// console.log(plusMinus([1, 1, 0, -1, -1])) //[0.400000, 0.400000, 0.200000]

// // ERIKA // //

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
Input: array of ints, target int
Output: array with two indices
Edge Cases: empty array
Considerations: negative numbers

- edge case (empty array)
- iterate thru array
- check if target - curr el is included in array, return indexes
*/

// const twoSum = (array, target) => {
//   if (!array.length) return 'Empty array';
//   for (let i = 0; i < array.length; i++) {
//     if (array.includes(target - array[i])) {
//       let j = array.indexOf((target - array[i]));
//       return [i, j]
//     }
//   }
// }

// const twoSum = (array, target) => {
//   const cache = {};

//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     // figure the rest out here
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 17));
