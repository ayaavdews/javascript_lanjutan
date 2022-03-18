// Javascript Lanjutan (Advanced Javascript)
// Spread Operator
// keduanya direpresentasikan dengan : ...


// Spread Operator
// memecah (expand/unpack) iterables menjadi single element


// contoh 1 :
// const pillars = ['Himejima', 'Sanemi', 'Tomioka']
// console.log(...pillars)       // Himejima Sanemi Tomioka
// console.log(...pillars[0]) // H i m e j i m a   G y o u m e i


// contoh 2 :
// Menggabungkan dua atau lebih array
// const pillars2 = ['Tokitou', 'Rengoku', 'Tengen'] 
// const pillars3 = [...pillars, ...pillars2] // spread operator
// const pillars3 = pillars.concat(pillars2)  // method array (concat)
// menggunakan spread operator lebih fleksibel menambahkan elemen di tengah2
// const pillars3 = [...pillars, 'Shinobu' ...pillars2]
// console.log(pillars3)


// contoh 3 : 
// men-copy array
// const pillars  = ['Himejima', 'Sanemi', 'Tomioka']
// const pillars2 = pillars
/**
 * contoh diatas sebenarnya tidak benar-benar men-copy, jika kita timpa
 * indeks-1 di 'pillars2' maka indeks-1 di 'pillars' juga akan tertimpa.
 * jika melakukan seperti diatas, artinya kita membuat refrensinya.
 */
// copy yang benar : 
// pillars2 = [...pillars]


// contoh 4 : 
const listPillar = document.querySelectorAll('li')
// cara lama : 
// const pillars = []
// for (let i=0; i<listPillar.length; i++) {
//   pillars.push(listPillar[i].textContent)
// }

// menggunakan spread operator
/**
 * karena 'listPillar' berbentuk nodelist maka tidak ada method map,
 * sehingga, kita ubah ke array dulu menggunakan spread operator.
 */
const pillars    = [...listPillar].map(p => p.textContent)
console.log(pillars)


// contoh 5 :
const judul = document.querySelector('.title')
const huruf = [...judul.textContent].map(h => `<span>${h}</span>`).join('')
console.log(huruf)
judul.innerHTML = huruf