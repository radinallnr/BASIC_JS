
// // soal 1
let stars = ""
for (let i=5; i>=0; i--){
    stars += "*";
    console.log(stars)
}


// // soal 2
let n = 5;
let string = "";

for (let i = 3; i <= n; i++) {
  // untuk mengatur jarak
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // nge-print bintangnya
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

