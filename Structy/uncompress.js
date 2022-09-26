// const uncompress = (s) => {
//     const numbers = '0123456789';
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (j < s.length) {
//       if (numbers.includes(s[j])){
//         j += 1;
//       } else {
//         const num = Number(s.slice(i, j));
//         for (let count = 0; count < num; count += 1){
//           result.push(s[j]);
//         }
//         j += 1;
//         i = j;
//       }
//     }
//     console.log(result.join(""))
//     return result.join("");
//   }

//   // test_02:
//   uncompress("2p1o5p"); // -> 'ppoppppp'
//   // test_03:
//   uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
//   // // test_04:
//   uncompress("127y");


  const compress = (s) => {
    const result = [];
    let count = 0;
    let i = 0;
    while (i < s.length) {
      let currChar = s[i];
      while (s[i] == currChar) {
        i += 1;
        count += 1;
      }
      if (count == 1) {
        result.push(s[i - 1]);
        count = 0;
      } else {
        result.push(count);
        result.push(s[i - 1]);
        count = 0;
      }
    }
    console.log(result.join(""))
    return result.join("")
  };

//test_00:
compress('ccaaatsss'); // -> '2c3at3s'
//test_01:
compress('ssssbbz'); // -> '4s2bz'
//test_02:
compress('ppoppppp');