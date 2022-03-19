// Javascript Lanjutan (Advanced Javascript)
// Rest Parameter

/**
 * definisi : merepresentasikan argumen pada function dengan jumlah
 *            yang tidak terbatas menjadi sebuah array
 */


// contoh 1 :
// // rest parameter hanya bisa digunakan diakhir argumen.
// function myFunc(...myArgs) {
//   // return myArgs
//   // jika menggunakan arguments, harus diubah dulu object -> array
//   // return Array.from(arguments)
//   // menggunakan spread operator
//   return [...arguments]
// }
// console.log(myFunc(1,2,3,4,5))


// contoh 2 :
// function jumlahkan(...angka) {
//   // let total = 0
//   // for(const a of angka) {
//   //   total += a
//   // }
//   // return total
//   return angka.reduce((i,j)=> i+j)
// }
// console.log(jumlahkan(1,2,3,4,5))


// contoh 3 
// Array Destructuring
// const shp = ['luffy', 'zoro', 'nami', 'usop', 'sanji']
// const [captain, vice_captain, ...crew] = shp
// console.log(captain)


// contoh 4
// object destructuring
// const NavyHQ = {
//   fleetAdmiral : 'Sakazuki',
//   admiral1     : 'Borsalino',
//   admiral2     : 'Issho',
//   admiral3     : 'Ryokugyu'
// }
// const {fleetAdmiral, ...admiral} = NavyHQ
// console.log(admiral)


// contoh 5
// filtering
function filterBy(type, ...values) {
  return values.filter(v => typeof v === type)
}
console.log(filterBy('number', 1,2,'abc',4,5,6,'def',true,7,8,false,9,true))