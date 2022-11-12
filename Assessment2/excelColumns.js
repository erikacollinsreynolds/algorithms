const coinCounter = (coinValues, amount) => {
  if (coinValues.length === 0) return -1;
  let leftOvers = amount;
  let pointer = coinValues.length - 1;
  let counter = 0;

  for (let i = coinValues.length -1; i >= 0; i--) {
      while (leftOvers >= coinValues[i]) {
          counter +=1;
          leftOvers = leftOvers - coinValues[i];
          if (leftOvers === 0) return counter;
      }
      if (i === 0) {
          i = pointer;
          pointer -= 1;
          leftOvers = amount;
          counter = 0;
          if (pointer === -1) return -1;
      }
  }
}

console.log(coinCounter([1, 2, 5], 11))
console.log(coinCounter([2, 5], 8))
console.log(coinCounter([2], 10))



var titleToNumber = function(s) {
  // s is a string, but basically converts to a number in base 26 
  // also instead of zero we have 26 
  const dict = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
      O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }
  let number = 0;
  let power = 0;
  for (let i = s.length-1; i >= 0; i--) {
      number += Math.pow(26, power)*dict[s[i]];
      power ++;
  }

  return number;
}

console.log(titleToNumber("AAZ"))

var titleToNumber = function(s) {
  // s is a string, but basically converts to a number in base 26 
  // also instead of zero we have 26 
  const dict = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14,
      O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }
  let number = 0;

  for (let i = 0; i < s.length; i++) {
      number = number*26 + dict[s[i]];
  }
  return number;
};

console.log(titleToNumber("AAA"))