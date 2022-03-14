// Javascript Lanjutan (Advanced Javascript)
// Destructuring Function


// Contoh 1
function penjumlahanPerkalian(a,b) {
  return [a+b, a*b]
}
// console.log(penjumlahanPerkalian(2,3)[0])
// console.log(penjumlahanPerkalian(2,3)[1])
// mengugunakan destructuring : 
const [jumlah, kali] = penjumlahanPerkalian(2,3)
console.log(jumlah)
console.log(kali)


// Contoh 2
// return value bertambah
// function kalkulasi(a,b) {
//   // return [a+b, a-b, a*b, a/b]
//   return [a+b, a-b, a*b]
// }
// const [tambah, kurang, kali2, bagi='tidak ada'] = kalkulasi(2,3) // nilai default
// console.log(kurang)
// console.log(bagi)


// Contoh 3
/**
 * jika me-return array, ketika distructuring urutannya harus benar (urutan berpengaruh sesuai index-nya)
 * misal urutan 'kali' berada diawal, maka akan diisi nilai dari 2+3 bukan 2*3 karena urutan return function-nya.
 * untuk mengatasinya, kita bisa mengubah return valuenya menjadi object.
 */
function kalkulasi(a,b) {
  return {
    tambah : a + b,
    kurang : a - b,
    kali2  : a * b,
    bagi   : a / b,
  }
}
const {kali2, tambah, bagi, kurang} = kalkulasi(2,3)
console.log(kali2)


// Contoh 4 
const crew7 = {
  name   : 'franky',
  age    : 33,
  detail : {
    role   : 'shipwright',
    bounty : 94000000
  }
}

// function helloCrew(name, age) {
function helloCrew7(crew) {
  // return `I'm cyborg ${name}, i'm ${age} superrr`
  return `I'm cyborg ${crew.name}, i'm ${crew.age} superrr (${crew.detail.role})`
}
// console.log(helloCrew(crew7.name, crew7.age))
console.log(helloCrew7(crew7))


// Contoh 5 
// Destructuring function argumen
const crew8 = {
  name   : 'Brook',
  age    : 89,
  detail : {
    role   : 'musician',
    bounty : 83000000
  }
}

function helloCrew8({name, age, detail: {role,bounty}}) {
  return `I'm soulking ${name}, i'm ${age} yohohoho (${role})`
}
console.log(helloCrew8(crew8))