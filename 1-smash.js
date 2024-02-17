// // ===================================================================================================
// // Challenge day 4/365
// // Sentence Smash

// // Solusi Ke 1
// function smash(words) {
//   let result = "";
//   for (let i = 0; i < words.length; i++) {
//     result += words[i];
//     if (i != words.length - 1) result += " ";
//   }
//   return result;
// }

// // Solusi Ke 2
// function smash(words) {
//   return words.join(" ");
// }

// // Solusi Ke 3
const smash = (words) => words.join(" ");

console.log(smash(["dhea", "sayang", "afani", "akhira"]));
// // ===================================================================================================
