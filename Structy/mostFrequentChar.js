const mostFrequentChar = (s) => {
  const cache = {};
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (!cache[curr]) cache[curr] = 1;
    else cache[curr] += 1;
  }

  let freq = null;
  for (let char of s) {
    if (freq === null || cache[char] > cache[freq]) {
      freq = char;
    }
  }
  return freq;
};

// test_00:
console.log(mostFrequentChar('bookeeper')); // -> 'e'
// test_01:
console.log(mostFrequentChar('david')); // -> 'd'
// test_02:
console.log(mostFrequentChar('abby')); // -> 'b'
// test_03:
console.log(mostFrequentChar('mississippi')); // -> 'i'
// test_04:
console.log(mostFrequentChar('potato')); // -> 'o'