
// soal 1
let stars = ""
for (let i=5; i>=0; i--){
    stars += "*";
    console.log(stars)
}

// excample 1
let star = ""; 
for(let i = 5; i >= 1; i-- ){ 
 for(let j = 0; j >= 1 - i; j-- ){ 
  star += "*"; 
 } 
 star += "\n"; 
} 
console.log(star);


// // diamond
// let n = 5;
// // Upside pyramid
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }
// // downside pyramid
// for (let i = 1; i <= n - 1; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//      process.stdout.write(' ');
//   }
//   // printing star
//   for (let k = (n - i) * 2 - 1; k > 0; k--) {
//     process.stdout.write('*');
//   }
//   console.log();
// }

// love 
var n = 6;

for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    process.stdout.write(' ')
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    process.stdout.write(' ')
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    process.stdout.write('*')
  }
  console.log();
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(' ')
  }
  for (let j = 1; j < i * 2; j++) {
    process.stdout.write('*')
  }
  console.log();
}

// end love


