// Javascript Lanjutan (Advanced Javascript)
// Arrow Function

/**
 * 
 * Arrow Function
 * 
 *  - Definisi
 *    Bentuk lain yang lebih ringkas dari Function Expression. -MDN (Mozilla Developer Network)
 * 
 * 
 *  - Contoh 
 *    let sayHello = function(name) {       let sayHello = (name) => {
 *      alert('Hello ' + name);         =>      alert('Hello ' + name);  
 *    }                                     }
 *    sayHello('Nami');                     sayHello('Nami');
 * 
 * 
 *  - jika hanya 1(satu) paremeter tidak perlu memakai tanda kurung ().
 *  - jika isi function hanya return, kita tidak perlu menuliskan 'return', bahkan tidak perlu kurung kurawal {}
 *    contoh :
 *    const sayHello = name => `Hello ${name}`;                 ---> implisit return
 *    console.log(sayHello('Robin')); // output : Hello Robin  
 * 
 * 
 *  - jika tidak ada parameter, harus menambahkan tanda kurung buka tutup ().
 *    contoh : 
 *    const tes = () => 'Hello World!';
 *    console.log(tes()); // output : Hello World! 
 * 
 */


// Contoh 1
// Penggunaan arrow function pada function map : 
let cadets = ['Armin Arlert', 'Eren Jaeger', 'Mikasa Ackerman'];

// menggunakan function biasa :
// let lettersCount = cadets.map(function(name) {
//   return name.length
// })

// menggunakan arrow function
let lettersCount = cadets.map(name => name.length)
console.log(lettersCount)

// return as object
// let lettersCountObj = cadets.map(name => ({name : name, letterCount : name.length}))
// di javascript baru, jika ingin membuat object yang key sama dengan valuenya, cukup ditulis 1x
let lettersCountObj = cadets.map(name => ({name, letterCount : name.length}))
// console.log(lettersCountObj)
console.table(lettersCountObj) // tampilan dalam bentuk tabel yang lebih rapi.
