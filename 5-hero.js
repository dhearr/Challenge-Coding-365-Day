// // ===================================================================================================
// // Challenge day 3/365
// // Is He Gonna Survive?

// // Solusi Ke 1
// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Solusi Ke 2
function hero(bullets, dragons) {
  return bullets / 2 >= dragons ? true : false;
}

// // Solusi Ke 3
const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
// // ===================================================================================================
