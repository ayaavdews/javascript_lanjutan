// Javascript Lanjutan (Advanced Javascript)
// Execution Context, Hoisting, dan Scope

/**
 * 
 * Execution Context (saat program dijalankan)
 * terdapat 2(dua) fase :
 *    1. Creation
 *    2. Execution
 * 
 */

 console.log(nama)
 var nama = 'Yumi'
 // output : undefined
 
 /**
  * 
  * Execution Context
  * terbagi menjadi 2(dua) fase : 
  *   1. Creation Phase
  *        - terjadi di konteks global 
  *          (pada kasus diatas, karena langsung dibuat di dalam file javascript bukan pada function)
  *        - pada fase ini, javascript akan mengecek apakah ada variable/function di dalam script(file-nya)
  * 
  *        - kalau ada, value-nya akan diisi dengan undefined
  *        - lalu, jika ada function akan diisi kode function itu sendiri (fn())
  *        - kedua hal yang dilakukan diatas disebut hoisting (mengangkat / dinaikkan keatas)
  *        - javascript mendefinisikan object window sebagai global object, dan
  *        - javascript mendefinisikan this sebagai window
  * 
  * 
  *   2. Execution Phase
  *        - mengeksekusi program baris per baris dari atas ke bawah
  * 
  */
 
 
 
 var nama2 = "tom";
 var umur  = 21; 
 
 function sayHello() {
   return `Halo, nama saya ${nama2}, saya berusia ${umur} tahun`;
 }
 
 /**
  * 
  * - function membuat local execution context,
  *   yang didalamnya terdapat creation dan execution phase.
  * - selain dapat mengakses window, kita juga dapat mengakses arguments
  * - terdapat juga hoisting
  * 
  * - website untuk melihat visualisasi dari cara javascript mengeksekusi kode program, 
  *   goggling javascript visualizer (pythontutor.com)
  * 
  */
 
 
 var nama3    = "Doddy Soedarso";
 var username = "DoddyS";
 
 function printURL() {
   var instagramURL = 'https://instagram.com/';
   return instagramURL + username;
 }
 
 console.log(cetakURL('AhmadZ', 'Norman', 'golD'));
 // output : https://instagram.com/DoddyS
 
 /**
  * 
  * scope : mencari (username) ke definisi variable terdekat. jika tidak ada
  *         maka akan naik keatas.
  * 
  * argument yang dikirim ke function tidak hilang, bisa dipanggil dengan : 
  *   - arguments[0] --> output : 'AhmadZ'
  *   - arguments[1] --> output : 'Norman'
  *   - arguments[2] --> output : 'golD'
  * 
  */