// // // FOR PIERCE // // //
/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

Inputs:
strings = ['ab', 'abc', 'ab']
queries = ['ab', 'abc', 'bc']

Output:
results = [2, 1, 0]

input: array of primatives 
output: array of numbers 
edge: na
testing: [true, 13, 'ab'], []

- cache obj
- loop through strings to build cache obj 
- loop through queries to check if they exist in the cache obj
- build out the return statement 

*/

// function queryCounter (strings, queries) {
//     // declare cache obj 
//     const cache = {};
//     const returnArr = [];
//     //loop through the strings array 
//     for (let i = 0; i < strings.length; i++) {
//         //build out logic to add to cache 
//         if (cache[strings[i]]) {
//             cache[strings[i]] += 1
//         } else {
//             cache[strings[i]] = 1
//         }
//     };

//     //loop through the queries array
//     for (let i = 0; i < queries.length; i++) {
//         //compare current to cache 
//         if (cache[queries[i]]) {
//             returnArr.push(cache[queries[i]])
//         } else {
//             returnArr.push(0)
//         }
//     }
//     //return statement 
//     return returnArr;
// }; 

// console.log(queryCounter(['ab', 'abc', 'ab'], ['ab', 'abc', 'bc']))

// function matchingStrings(strings, queries) {
//   if (strings.length === 0) return [];
//   if (queries.length === 0) return 'No queries entered';

//   const results = [];
  
//   function helper(str) {
//       const array = strings.filter(el => el === str); //['ab', 'abc', 'ab']

//       return array.length;
//   }

//   queries.forEach(el => {
//       results.push(helper(el)) //['ab', 'abc', 'bc']
//   });

//   return results;
// }



// // // FOR ERIKA // // //

/*

You are given an array of prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/



// const stocks = (prices) => {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = 1; j < prices.length; j++) {
//       const difference = prices[j] - prices[i];
//       maxProfit = Math.max(maxProfit, difference);  
//     }
//   }
//   return maxProfit;
// }


const highestProfit = prices => {  
  if (!Array.isArray(prices)) return 0;

  let maxProfit = 0;
  let boughtPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const sellPrice = prices[i];
    if (sellPrice < boughtPrice) boughtPrice = sellPrice;
    else maxProfit = Math.max(maxProfit, sellPrice - boughtPrice);
  }

  return maxProfit;
}


// console.log(stocks([7, 1, 5, 3, 6, 4])); //maxPro = 5      boughtPrice = 1     sellPrice = 4
console.log(stocks([7,6,4,3,1])); //maxPro = 0      boughtPrice = 1     sellPrice = 1