// if
let num = 2
if (num < 5) {
console.log(num + 'lebih kecil dari 5')
}
// if else
let angka = 2
if (angka < 5) {
console.log(angka + 'bilangan GENAP')
} else {
console.log(angka + 'bilangan GANJIL')
}
// switch case
let day = InputHari('pilihan hari :')

switch (day) {
case 'Senin':
console.log('Senin')
break
case 'Selasa':
console.log('Selasa')
break
case 'Rabu':
console.log('Rabu')
break
case 'Kamis':
console.log('Kamis')
break
case 'Jumat':
console.log('Jumat')
break
case 'Sabtu':
console.log('Sabtu')
break
case 'Minggu':
console.log('Minggu')
default :
console.log('ini bukan bagian hari dalam seminggu.')
}

// for
let i = 0;

for (; i < 3;) {
  console.log( i++ );
}
// while
let a = 3;
while (a) {
  alert( a );
  i--;
}
// do while
let b = 0;
do {
  alert( b );
  i++;
} while (b < 3);