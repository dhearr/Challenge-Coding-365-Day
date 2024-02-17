// // ===================================================================================================
// // Challenge day 8/365
// // Count Sheep

// // Solusi ke 1
// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

// // Solusi ke 2
const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));

// // ===================================================================================================
