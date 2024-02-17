// // ===================================================================================================
// // Challenge day 2/365
// // Reverse Sequence

// // Solusi Ke 1
// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// // Solusi Ke 2
// const reverseSeq = (n) => Array(n).fill().map((el,i) => i + 1).reverse();
// // Solusi Ke 3
const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);

console.log(reverseSeq(5));
// // ===================================================================================================
