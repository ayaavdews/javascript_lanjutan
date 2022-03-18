// Javascript Lanjutan (Advanced Javascript)
// Looping (for..of vs for..in)


// for..of
/**
 * 
 * Definisi 
 *    - create a loop iterationg over iterable object. ~ MDN Web Docs
 *    - looping yang bisa mengulang/menelusuri object yang iterable
 *      object iterable : String, Array, Arguments/NodeList,
 *                        typedArray, Map, Set, User-defined Iterables
 *      
 */

// Array
const crew =  ['King', 'Queen', 'Jack']

// for(let i=0; i<crew.length; i++) {
//   console.log(crew[i])
// }

// crew.forEach((c,i) => {
//   console.log(`${c} adalah crew ke-${i+1}`)
// })
// parameter ke-2 akan menyimpan nilai indeks

// for(const c of crew) {
//   console.log(c)
// } 
for(const [i,c] of crew.entries()) {
  console.log(`${c} adalah crew ke-${i+1}`)
}
// urutannya index terlebih dahulu

// String
// foreach tidak bisa digunakan untuk looping string
const captain = 'Kaido'
for(cpt of captain) {
  console.log(cpt)
}

// NodeList
const liCrew = document.querySelectorAll('.crew')
// liCrew.forEach(c => console.log(c.textContent))

for(c of liCrew) {
  console.log(c.innerHTML)
}

// Arguments
function jumlahkanAngka() {
   let jumlah = 0
   for(a of arguments) {
     jumlah += a
   }
   return jumlah
}
console.log(jumlahkanAngka(1,2,3,4,5));


// for..in
/**
 * 
 * Definisi
 *    - Creates a loop only iterating over enumerable ~ MDN Web Docs
 * 
 */

const crew7 = {
  name   : 'Nico Robin',
  role   : 'Archeolog',
  bounty : 130000000 
}

for (c7 in crew7) {
  // console.log(c7)      // ambil property
  console.log(crew7[c7])  // ambil value
}

/**
 * - Jika ingin lopping property dari object gunakan for..in
 * - JIka ingin lopping isi array dan iterable object lainnya, gunakan for..of
 */