// Javascript Lanjutan (Advanced Javascript)
// Destructuring Assignment/Variable

/**
 * 
 * Definisi
 *    Expression pada javascript yang membuat kita dapat 'membongkar'
 *    nilai dari array atau property dari object kedalam variable terpisah.
 *    ~ MDN Web Docs
 * 
 * 
 * Contoh 
 *    - Array                                 ||  - Object
 *      const coba = ['satu', 'dua', 'tiga']  ||    const mhs = {
 *                                            ||      nama : 'Tom'
 *      const [a, b, c] = coba                ||      umur : 21
 *      console.log(a) // 'satu'              ||    }
 *      console.log(b) // 'dua'               ||    const [nama, umur] = mhs
 *      console.log(c) // 'tiga'              ||    console.log(nama) // 'Tom'
 *   
 */


/**
 *  _____________________________
 * |                             |
 * |     Destructuring Array     |
 * |_____________________________|
 * 
 */

const perkenalan = ['halo', 'nama', 'saya', 'Regi']
// const [salam, satu, dua, nama] = perkenalan
const [salam, , , nama] = perkenalan // --> skipping items
console.log(nama) // 'Regi'


// Swap Items (menukar isi array)
let a = 1
let b = 2
console.log(`a=${a}, b=${b}`);

[a, b] = [b, a]
console.log(`a=${a}, b=${b}`)


// return value pada function
function coba() {
  return [5,10]
}
// const c = coba()
// console.log(c[0]) // 5
const [c,d] = coba()
console.log(c) // 5


// banyak nilai array dan tidak tahu jumlahnya
// rest parameter
const [i, ...j] = [10,20,30,40,50,60,70]
console.log(i)    // 10
console.log(j[0]) // 20
console.log(j[1]) // 30
console.log(j[2]); // 40



/**
 *  ______________________________
 * |                              |
 * |     Destructuring Object     |
 * |______________________________|
 * 
 */

// Contoh 1
// const mhs = {
//   nrp     : 865202204,
//   jurusan : 'Teknik Informatika'
// }
// // nama variable harus sesuai property dari object-nya
// const {nrp, jurusan} = mhs
// console.log(jurusan)


// Assignment tanpa deklarasi object
// ({nrp, jurusan} = {
//   nrp     : 865202204,
//   jurusan : 'Teknik Informatika'
// });
// console.log(nrp)


// Assignment ke variable baru
// const mhs = {
//   nrp     : 865202204,
//   jurusan : 'Teknik Informatika'
// }
// const {nrp:x, jurusan:y} = mhs
// console.log(y)


// Memberikan default value
// const mhs = {
//   nrp     : 865202204,
//   jurusan : 'Teknik Informatika'
// }
// const {nrp, jurusan, ipk = 2.75} = mhs
// console.log(ipk)


// // Memberi nilai default + assign ke variable baru
// const mhs = {
//   nrp     : 865202204,
//   jurusan : 'Teknik Informatika'
// }
// const {nrp:nr, jurusan:jn, ipk:ip = 2.75} = mhs
// console.log(`${nr} - ${jn} - ${ip}`)


// Rest Parameter
// const mhs = {
//   nrp     : 865202204,
//   ipk     : 2.75,
//   jurusan : 'Teknik Informatika'
// }
// const {nrp, ...mhsDetail} = mhs
// console.log(mhsDetail.jurusan)


// Mengambil field pada object, setelah dikirim
// sebagai parameter untuk function
const mhs = {
  nrp     : 865202204,
  ipk     : 2.75,
  jurusan : 'Teknik Informatika'
}

// function getNrp(mhs) {
//   return mhs.nrp
// }
// menjadi : 
function getNrp({nrp, jurusan}) {
  return nrp
}

console.log(getNrp(mhs))