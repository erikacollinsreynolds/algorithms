// // // // Introduction Problem // // // //

// const AverageOfSubarrayOfSizeK = (array, k) => {
//   const result = [];
//   let sum = 0.0;
//   let start = 0;

//   for (let end = 0; end < array.length; end++){
//     // Keep track of sum until we reach 3 elements in width
//     sum += array[end];
    
//     // Once we have the sum of three elements
//     if (end >= k - 1){
//       // Push current average
//       result.push(sum / k);
      
//       // Subtract first element from sum
//       sum -= array[start];
      
//       // Increment start (sliding window at beginning)
//       start += 1;
//     }
//   }
//   return result;
// }

// console.log(AverageOfSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)) // [2.6, 2.3, 3, 2]


// // // // Maximum Sum Subarray of Size K // // // //
  // Time Complexity: 0(n)
  // Space Complexity: 0(1)

// const MaxSum = (array, k) => {
//   let maxSum;
//   let sum = 0.0;
//   let start = 0;

//   for (let end = 0; end < array.length; end++){
//     // Keep track of sum until we reach 3 elements in width
//     sum += array[end];
    
//     // Once we have the sum of three elements
//     if (end >= k - 1){

//       // MY SOLUTION
//       // If maxSum is undefined
//       if (maxSum === undefined) {
//         maxSum = sum;
//       }

//       // Check if sum is greater than current max
//       if (sum > maxSum) {
//         maxSum = sum;
//       }
      
//       //REFACTORED VERSION (but this version doesn't account for the possibility that the maxSum could be less than 0 if we initialize maxSum (line 34) at 0)
//       // maxSum = Math.max(sum, maxSum);

//       // Subtract first element from sum
//       sum -= array[start];
      
//       // Increment start (sliding window at beginning)
//       start += 1;
//     }
//   }
//   return maxSum;
// }

// console.log(MaxSum([2, 1, 5, 1, 3, 2], 3)) // Output: 9

// // // // Smallest Subarray with a Greater Sum // // // //
// (given they are all positive numbers)
  // Time Complexity: 0(n)
  // Space Complexity: 0(1)

const smallestLength = (array, s) => {
  let L = Infinity,
    start = 0,
    sum = 0
  
  // If 's' already exists in the array, no need to go in the loop
  if (array.includes(s)) return 1;

  for (let end = 0; end < array.length; end++) {
    sum += array[end] // add each element to sum

    while (sum >= s){
      L = Math.min(L, end - start + 1); // compare current l to  current window (but shouldn't this only check if it's equal??)
      sum -= array[start]; // subtract start element from sum
      start += 1; // move start window to right by one element
    }
  }
  if (L === Infinity) return 0; // if nothing added to s

  return L; 
}

// console.log(smallestLength([2, 1, 5, 2, 3, 2], 7)) // Output: 2
// console.log(smallestLength([2, 7, 5, 2, 3, 2], 7)) // Output: 1

// // // // Longest Substring with Distinct Characters // // // //
// Given a string, find the length of the longest substring, which has all distinct characters.
/* Example: 
    Input: String = 'abbbb'
    Output: 2
    Explanation: The longest substring with distinct characters is "ab"

    Input: String="aabccbb"
    Output: 3
    Explanation: The longest substring with distinct characters is "abc".

    Input: String="abccde"
    Output: 3
    Explanation: Longest substrings with distinct characters are "abc" & "cde".
*/

// const longestSubstring = (string) => {
//   // variable to keep track of length
//   let length = 0;

//   // variable to keep track of start
//   let start = 0;

//   // variable to keep track of current string
//   let cacheString = '';

//   // loop (i will represent the end of the sliding door)
//   for (let end = 0; end < string.length; end++){

//     // concat current element to end of string
//     cacheString += string[end];

//     let A = cacheString.split(""); // create array of character substrings
//     let B = [...new Set(A)]; // remove any duplicates from that array

//     // compare the two arrays to see if they have the same contents
//     if (JSON.stringify(A) !== JSON.stringify(B)){ // conditional if there ARE repeat characters

//       //remove first character in string
//       cacheString = cacheString.substring(1);

//       // increment start by 1 (slide the window)
//       start += 1;

//     } else { // conditional if there ARE NOT repeat characters

//       // store current cache string length if it's more than the current
//       if (cacheString.length > length) { 

//         length = cacheString.length;
//       }
//     }
//   }

//   // return length
//   return [length, cacheString];
// }

// console.log(longestSubstring('abbbb')) // Output: 2;
// console.log(longestSubstring("aabccbb")) // Output: 3;
// console.log(longestSubstring("abccde")) // Output: 3;
// console.log(longestSubstring('hippopotamus')) // Output: 7;


// // // // Problem Challenge 1: Permutation in a String // // // //
/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
*/

const find_permutation = (string, pattern) => {
  let start = 0,
    matched = 0,
    charFreq = {};
  
  // Using a hashMap to sroe frequency of characters in pattern
  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    console.log(chr)
    if (!(chr in charFreq)) {
      charFreq[chr] = 0;
    }
    charFreq[chr] =+ 1;
  }
  console.log(charFreq)

  // Our goal is to match all the characters from the 'charFreq' with the current 
  // window try to extend the range [start, end]
  for (let end = 0; end < string.length; end++) {
    const rightChar = string[end];
    console.log(rightChar)
    console.log(charFreq)
    if (rightChar in charFreq) {
      // Decremenet the freq of the matched character
      charFreq[rightChar] -= 1;
      if (charFreq[rightChar] === 0) {
        matched += 1;
      }
    }
    console.log(charFreq)
    console.log(matched)
    if (matched === Object.keys(charFreq).length) {
      return true;
    }

    // Shrink sliding window
    if (end >= pattern.length - 1) {
      let leftChar = string[start];
      console.log(leftChar)
      start += 1;
      if (leftChar in charFreq) {
        if (charFreq[leftChar] === 0) {
          matched -= 1;
        }
        charFreq[leftChar] += 1;
      }
      console.log(charFreq)
      console.log(matched)
    }
  }
  // return boolean
  return false;
}

console.log(`Permutation exist: ${find_permutation('oidbcaf', 'abc')}`);
// console.log(`Permutation exist: ${find_permutation('odicf', 'dc')}`);
// console.log(`Permutation exist: ${find_permutation('bcdxabcdy', 'bcdyabcdx')}`);
// console.log(`Permutation exist: ${find_permutation('aaacb', 'abc')}`);


// // // // Problem Challenge 2: String Anagrams // // // //
// function find_string_anagrams(str, pattern) {
//   let windowStart = 0,
//       matched = 0,
//       charFrequency = {};

//   for (i = 0; i < pattern.length; i++) {
//       const chr = pattern[i];
//       if (!(chr in charFrequency)) {
//           charFrequency[chr] = 0;
//       }
//       charFrequency[chr] += 1;
//   }

//   const resultIndices = [];
//   // our goal is to match all the characters from the 'charFrequency' with the current 
//   // window try to extend the range [windowStart, windowEnd]
//   for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
//       const rightChar = str[windowEnd];
//       if (rightChar in charFrequency) {
//           // decrement the frequency of matched character
//           charFrequency[rightChar] -= 1;
//           if (charFrequency[rightChar] === 0) {
//               matched += 1;
//           }
//       }

//       if (matched === Object.keys(charFrequency).length) { // have we found an anagram?
//           resultIndices.push(windowStart);
//       }

//       // shrink the sliding window
//       if (windowEnd >= pattern.length - 1) {
//           leftChar = str[windowStart];
//           windowStart += 1;
//           if (leftChar in charFrequency) {
//               if (charFrequency[leftChar] === 0) {
//                   matched -= 1; // before putting the character back, decrement the matched count
//               }
//               charFrequency[leftChar] += 1; // put the character back
//           }
//       }
//   }

//   return resultIndices;
// }


// console.log(find_string_anagrams('ppqp', 'pq'));
// console.log(find_string_anagrams('abbcabc', 'abc'));