// Javascript Lanjutan (Advanced Javascript)
// Higher Order Function (penerapan)

/**
 * 
 * Definisi 
 *    - Function yang beroperasi pada function yang lain. Baik itu digunakan
 *      dalam argument, maupun sebagai return value. (https://eloquentjavascript.net)
 *        
 *        > dalam javascript function disebut First Class Function, artinya inti dari
 *          javascript adalah function. Dan Javascript memperlakukan function sebagai object.
 * 
 * 
 * > function yang disimpan sebagai argumen disebut callback.
 * > function yang memiliki callback sebagai argumen-nya disebut higher order function
 * 
 * 
 * Kenapa menggunakan Higher Order Function
 *    > Abstraksi
 *      membuat kode yang dibuat lebih sederhana. Karena dengan menggunakan function kita bisa
 *      menyembunyikan kerumitan. 
 *    > dengan terbiasa membuat segala sesuatunya kedalam function, kita masuk ke 
 *      sebuah pendekatan yang namanya Functional Programming
 * 
 * 
 * Contoh Higher Order Function yang sering digunakan, terutama  
 * untuk pengelolaan array : 
 *    > Array.prototype.map()
 *    > Array.prototype.filter()
 *    > Array.prototype.reduce()
 * 
 */

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
console.log(angka)

/**
 * 
 *  __________________________
 * |    Filter                |
 * |    mencari angka >= 3    |
 * |__________________________|
 * 
 */

// menggunakan for 
// const newAngka = [];
// for (let i=0; i<angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i])
//   }
// }

// const newAngka = angka.filter(function(i){
//   return i >= 3
// })
const newAngka = angka.filter(i => i >= 3)
console.log(newAngka)



/**
 * 
 *  ________________________________________________________________________________
 * |    Map                                                                         |
 * |    memetakan tiap-tiap elemen didalam arraynya menggunakan fungsi yang baru    |
 * |    * kalikan semua elemen dalam array angka dengan 2(dua)                      |
 * |________________________________________________________________________________|
 * 
 */

const mapAngka = angka.map(a => a * 2)
console.log(mapAngka)



/**
 * 
 *  ___________________________________________________________
 * |    Reduce                                                 |
 * |    melakukan sesuatu terhadap seluruh elemen array-nya    |
 * |    * jumlahkan semua isi array-nya                        |
 * |___________________________________________________________|
 * 
 *    > memerlukan 2 argumen : 
 *      1) accumulator
 *         hasil dari prosesnya (dijumlahkan, dikalikan, dll)
 *      2) currentValue
 *         elemen array yang sedang di looping (sekarang sedang looping di elemen yang mana)
 * 
 *    > contoh dijumlahkan : 
 *      0 + (-1) = -1 => (-1) -> currentValue
 *                        -1  -> accumulator
 * 
 *      -1 + 8   = 7  => 8 -> currentValue
 *                       7 -> accumulator
 * 
 *    > secara default ditambahkan 1 argumen diakhir return yang nilainya 0 
 *      -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
 *      0 +-1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
 *    
 *    > nilai default bisa kita ganti
 *      default 0    = 0 +-1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 26
 *      nilai baru 4 = 4 +-1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 = 30
 * 
 */

const reduceAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue)
const reduceAngkaNonDefault = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 4) 
console.log(reduceAngka) // 26
console.log(reduceAngkaNonDefault) // 30



/**
 * 
 *  ________________________________________________________________________________
 * |    Method Chaining                                                             |
 * |    menggabungkan fungsi-fungsi pada higher order function dalam 1x eksekusi    |
 * |________________________________________________________________________________|
 *    
 *    > cari angka > 5
 *    > kalikan 3
 *    > jumlahkan
 * 
 */

const angkaChaining = angka
                        .filter(i => i > 5)   // 8, 9, 9
                        .map(i => i * 3)      // 24, 27, 27
                        .reduce((i,j) => i+j) // 78
console.log(angkaChaining)