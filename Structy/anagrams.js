const anagrams = (s1, s2) => {
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  return s1 == s2 ? true : false;
};

// test_00:
console.log(anagrams('restful', 'fluster')); // -> true
// test_01:
console.log(anagrams('cats', 'tocs')); // -> false
// test_02:
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true