// Javascript Lanjutan (Advanced Javascript)
// Higher Order Function (teori, definisi, dan contoh)

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


// Contoh 1 :
// function kerjakanTugas(mataKuliah, selesai) {  // --> Higher Order Function, selesai --> callback
//   console.log(`Mulai mengerjakan tugas ${mataKuliah} ...`);
//   selesai();
// }
// function selesai() {
//   alert('Selesai mengerjakan tugas')
// }
// kerjakanTugas('Pemrograman Web', selesai)


// Contoh 2 : 
// setTimeout(function() {
//   console.log('Hello World!')
// }, 1000)


// Contoh 3 : 
// const tombol = document.querySelector('.submit')
// tombol.addEventListener('click', function() {
//   console.log('tombol ditekan!')
// })


// Contoh 4 : 
/**
 * 
 * -->  for (let i=0; i<10; i++) {
 *          console.log(i);
 *      }
 * 
 * 
 * -->  function repeatLog(n) {
 *          for(let i=0; i<n; i++) {
 *              console.log(i);
 *          } 
 *      }
 *      repeatLog(10);
 * 
 * 
 * -->  function repeat(n, action) {
 *          for(let i=0; i<n; i++) {
 *              action(i);
 *          }
 *      }
 *      repeat(10, console.log);
 *      repeat(3, aleret);
 * 
 */

