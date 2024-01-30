// // ===================================================================================================
// // Challenge day 5/365
// // Will You Make It?

// // Solusi Ke 1
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump <= mpg * fuelLeft;
// };

// // Solusi Ke 2
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft
//   };

// // Solusi Ke 3
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump;
};

console.log(zeroFuel(100, 50, 1));
// // ===================================================================================================
