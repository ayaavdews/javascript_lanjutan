// Javascript Lanjutan (Advanced Javascript)
// Arrow Function (this)

/**
 * 
 * saat kita menggunakan function (expression/declaration) didalamnya memiliki conteks this.
 * jika kita mengubah function expression menjadi arrow function, maka konteks this-nya menjadi
 * berbeda.
 * 
 */

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
// let cadets = ['Armin Arlert', 'Eren Jaeger', 'Mikasa Ackerman'];

// menggunakan function biasa :
// let lettersCount = cadets.map(function(name) {
//   return name.length
// })

// menggunakan arrow function
// let lettersCount = cadets.map(name => name.length)
// console.log(lettersCount)

// return as object
// let lettersCountObj = cadets.map(name => ({name : name, letterCount : name.length}))
// di javascript baru, jika ingin membuat object yang key sama dengan valuenya, cukup ditulis 1x
// let lettersCountObj = cadets.map(name => ({name, letterCount : name.length}))
// console.log(lettersCountObj)
// console.table(lettersCountObj) // tampilan dalam bentuk tabel yang lebih rapi.


/**
 * 
 *  _________________________________________
 * |                                         |
 * |     Konsep this pada arrow function     |
 * |_________________________________________|
 * 
 */

// Contructor Function
// const Students = function() {
//   this.name = 'Jean';
//   this.age  = 21;
//   this.sayHello = function() {
//     console.log(`Hello, im ${this.name}, and im ${this.age}`);
//   }
// }
// const jean = new Students();

//  Arrow Function
// const Students = function() {
//   this.name = 'Jean';
//   this.age  = 21;
//   this.sayHello = () => {
//     console.log(`Hello, im ${this.name}, and im ${this.age}`);
//   }
// }
// const jean = new Students();



// Object Literal
// const mhs1 = {
//   nama : 'Via',
//   umur : 21,
//   sayHello : () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`); // undefined
//   }
// }
// *arrow function tidak memiliki konsep this.



const Students = function() {
  this.name = 'Jean';
  this.age  = 21;
  // Function Expression
  // disimpan dahulu dalam variable, sehingga tidak terkena hoisting.
  this.sayHello = function() {
    console.log(`Hello, im ${this.name}, and im ${this.age}`);
  }

  // Function Declaration
  // terkena hoisting, sehingga this tidak mengacu ke leksikal scope tapi ke global
  // setInterval(function() {
  //   console.log(this.age++) // output : NaN (Not a Number)
  // }, 500)
  // untuk mengatasinya kita gunakan arrow function :

  // setInterval(() => {
  //   console.log(this.age++) 
  // }, 500)
  /**
   * karena arrow function tidak memiliki konsep this
   * sehingga this akan dicari ke leksikal scope
   */

}
// const jean = new Students();



// Contoh Kasus : 
const box = document.querySelector('.box')
box.addEventListener('click', function() {
  let satu = 'size';
  let dua  = 'caption';


  if(this.classList.contains(satu)) {
    [satu, dua] = [dua, satu]
  }

  this.classList.toggle(satu)
  setTimeout(() => {
    this.classList.toggle(dua)
  }, 600)
})
/**
 * 
 * - this : mengarah ke element itu sendiri, jika menggunakan arrow function, akan mengarah ke window
 * 
 */
