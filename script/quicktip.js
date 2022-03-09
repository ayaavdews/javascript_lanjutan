// Javascript Lanjutan (Advanced Javascript)
// Quick tip (var, let, dan const)


/**
 * 
 *  - var :                   let : 
 *    console.log(i);         console.log(i);
 *    var i = 10;             let i = 10;
 *    //output : undefined    //output : Uncaught ReferenceError : 
 *                                       i is not defined
 */


// Kasus 1 : 
for (var i=0; i<10; i++) {
  console.log(i) // output : 0 1 2 3 4 5 6 7 8 9
}
console.log(i) // output : 10

/**
 * 
 * javascript memungkinkan kita untuk mengakses variable yang ada di dalam looping.
 * di bahasa pemrograman lain tidak bisa, karena menerapkan block scope. sedangkan
 * javascript menerapkan function scope.
 * 
 * agar variable i didalam block tidak bisa diakses, kita harus ubah scope-nya menjadi
 * function scope.
 * 
 */

function tes() {
  for (var i=0; i<10; i++) {
    console.log(i)
  }
}
tes();         // output : 0 1 2 3 4 5 6 7 8 9
console.log(i); // output : Uncaught ReferenceError : i is not defined


// Kasus 2 : 
/**
 * 
 * untuk membuat variable berperilaku sama seperti bahasa pemrograman lain
 * tapi menggunakan function scope, kita menggunakan IIFE atau SIAF.
 *    * IIFE (Immediately Invoked Function Express)
 *      function expression yang dipanggil langsung ketika dibuat
 *    * SIAF (Self Invoking Anonymous Function)
 *      dibuat supaya menjaga agar variable yang ada di dalam function
 *      tidak bisa diakses dari luar.
 * 
 */

(function() {
  for(var j=2; j<10; j++) {
    console.log(j); // output : 0 1 2 3 4 5 6 7 8 9
  }
}());
console.log(j); // output : Uncaught ReferenceError : i is not defined
// function otomatis dijalankan

/**
 * 
 * dengan javascript yang baru (EcmaScript6) kita cukup gunakan let saja,
 * dan kita sudah bisa melakukan perilaku yang sama seperti diatas
 * 
 */

for (let k=0; k<10; k++) {
  console.log(k);
}
consoole.log(k);
// hasilnya sama seperti diatas


/**
 * 
 *  ______________________________
 * |                |             |
 * | Function Scope | Block Scope |
 * |________________|_____________|
 * |       var      |     let     |
 * |                |    const    |
 * |________________|_____________|
 * 
 */


/**
 * 
 * Perbedaan let dan const
 * 
 *  - jika value-nya dirasa tidak akan pernah berubah gunakan const
 *  - const digunakan untuk meminimalisir perubahan state
 *  - const tetap bisa diubah, seperti pada saat menggunakan objek dan array,
 *    kita bisa menggubah value-nya.
 * 
 */