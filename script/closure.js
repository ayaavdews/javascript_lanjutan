// Javascript Lanjutan (Advanced Javascript)
// Closure


/**
 * 
 *  - Definisi
 *    
 *      1. Closure merupakan kombinasi antara function dan lingkungan leksikal(lexical scope) di dalam function tersebut. -MDN
 *      2. Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai 
 *         dieksekusi. -w3school
 *      3. Closure adalah sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan 
 *         saat ia diciptakan. -Code Fellow
 *      4. Closure adalah sebuah function yang sebelumnya sudah memiliki data,  hasil dari function yang lain. -Techsith
 * 
 * 
 *  - Lexical Scope
 *    contoh : 
 *    function init() {
 *      let nama  = "Tom";        ---> local variable
 *      function tampilNama() {   ---> inner function (closure*)
 *          console.log(nama);    ---> akses ke parent variable
 *      }
 *      tampilNama();
 *    }
 *    init();
 * 
 *    * untuk cek masukkan perintal console.dir(tampilNama) -> di console akan muncul objek baru -> buka detail -> Scopes -> Closure
 * 
 * 
 *  - Alasan Menggunakan Closure
 * 
 *      > untuk membuat Function Factories
 *      > untuk membuat 'private method'
 * 
 */


// contoh 1 :
function init() {
  // let nama = "Jozu"

  // function tampilNama(nama) {
  //   console.log(nama);
  // }
  // return tampilNama;

  return function(nama) {
    console.log(nama);
  }
}
 
let panggilNama = init();
panggilNama('Marco');
panggilNama('Izou');


// contoh 2 (Function Factories) : 
function ucapkanSalam(waktu) {
  return function(nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan.`)
  }
}

let selamatPagi  = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

console.dir(selamatMalam);
/**
 * [[Scopes]] -> Closure -> waktu : malam
 * function sudah berjalan setengahnya, tinggal menunggu data dari nama-nya
 */

selamatPagi('Ace')
selamatMalam('Teach')


// contoh 3 :
/**
 * let counter = 0;                       let counter = 0;                let add = function() {
 * let add = function() {         =>      let add = function() {    =>      let counter = 0;  
 *    return ++counter;                     return ++counter;               return ++counter;             
 * }                                      }                               }
 *                                        counter = 10;                   counter = 100;
 * 
 * 
 * console.log(add());  // output : 1  |  output : 11                  |  output : 1
 * console.log(add());  // output : 2  |  output : 12                  |  output : 1
 * console.log(add());  // output : 3  |  output : 13                  |  output : 1
 * 
 */


// solusi :
/**
 * 
 * let add = function() {
 *   let counter = 0;
 *   return function() {
 *     return ++counter;
 *   }
 * }
 * let a = add();
 * console.log(a());
 * console.log(a());
 * console.log(a());
*/


/**
 * Immediately-Invoked Function Expressions (IIFE), pronounced "iffy", 
 * are a common JavaScript pattern that executes a function instantly after it's defined. 
 * Developers primarily use this pattern to ensure variables are only accessible within the scope of the defined function.
 */

let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
})()

counter = 100; // tidak akan mengganggu function lagi

console.log(add());
console.log(add());
console.log(add());