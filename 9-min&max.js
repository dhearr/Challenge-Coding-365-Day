// // ===================================================================================================
// // Challenge day 9/365
// // Min & Max

// // Solusi ke 1
// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] < minValue) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let max = list[0];
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] > max) {
//       max = list[i];
//     }
//   }
//   return max;
// };

// // Solusi ke 2
// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

// // Solusi ke 3
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
