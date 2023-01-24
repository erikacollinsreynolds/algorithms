// // FOR PIERCE // //

/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

Input: string
Output: string: either 'pangram' or 'not pangram'

Test Case
Input: 'The quick brown fox jumps over the lazy dog'
Output: 'pangram'

Input: 'We promptly judged antique ivory buckles for the prize'
Output: 'not pangram' (no x)
*/

// function pangram (string) {

// // delcare a cache object 
// const cache = {};
// // declare a counter variable
// let counter = 0;
// // interate through the string 
// string = string.replace(/[^\w]/g,'').toLowerCase()
// // console.log(string)

// for (let i = 0; i < string.length; i++) {
// // check if the character is in cache 
//     if (!cache[string[i]]) {
//         // console.log(string[i])

//         cache[string[i]] = true;
//         counter += 1
//     };
//     // if not - add and increment counter
//     // if - do nothing 
// }

//   if (counter === 26) return "pangram" 
//   return "not pangram"
// }


// function pangram(s) {
//   const abc = 'abcdefghijklmnopqrstuvwxyz';

//   let str = s.replace(/[^\w]/g,'').toLowerCase().split('');
//   str = [...new Set(str)];
//   str = str.sort().join('');

//   return str === abc ? 'pangram' : 'not pangram';
// }   

// console.log(pangram('The quick brown fox jumps over the lazy dog'));
// console.log(pangram('We promptly judged antique ivory buckles for the prize'));



// // FOR ERIKA // //

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

/*
Input: string (capitals, lowercase, punctuation, spaces)
Output: boolean (depending on if it's an palindrome)
Edge Cases: if string is empty, (capitals, lowercase, punctuation, spaces)
Approach: 
  - lowercase
  - remove all non-alpha/numeric (spaces, punctuation)
  - compare that string with the reversed string OR two pointers comparison --> TWO POINTER
*/

// const palindrome = (string) => {
//   // check if string is empty
//   if (string.length === 0) return true;

//   // convert to lowercase
//   // remove all non-alphanumeric 
//   string = string.replace(/[^\w]/g,'').toLowerCase();

//   // two pointer iteration comparing
//   let i = 0;
//   let j = string.length - 1;

//   while (i <= j) {
//     if (string[i] !== string[j]) return false;
//     i += 1;
//     j -= 1;
//   }

//   return true;
// }

// console.log(palindrome("A man, a plan, a canal: Panama")); //t
// console.log(palindrome("race a car")); //f
// console.log(palindrome("")); //t
// console.log(palindrome("erika")); //f
