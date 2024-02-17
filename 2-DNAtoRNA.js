// // ===================================================================================================
// // Challenge day 6/365
// // DNA To RNA

// // Solusi Ke 1
// function DNAtoRNA(dna) {
//     let rna = ''
//     for(let i = 0; i < dna.length; i++){
//         if(dna[i] === 'T') {
//             rna += "U"
//         } else {
//             rna += dna[i]
//         }
//     }
//     return rna
//   }

// // Solusi Ke 2
// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === "T" ? "U" : dna[i];
//   }
//   return rna;
// }

// // Solusi Ke 3
// const DNAtoRNA = (dna) =>
//   dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");

// // Solusi Ke 4
// const DNAtoRNA = (dna) => dna.replace(/T/g, 'U')

// // Solusi Ke 5
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TTTTT"));
// // ===================================================================================================
