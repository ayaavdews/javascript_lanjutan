// Javascript Lanjutan (Advanced Javascript)
// Template Literal / Template String (Tagged Templates)

/**
 * 
 * Definisi : 
 *    - bentuk yang lebih kompleks dari Template Literals, 
 *      memungkinkan kita untuk membaca template literals
 *      melalui sebuah function. ~ MDN Web Docs
 * 
 */

// Tagged Template
// const name = 'Erwin Smith';
// const age  = 33
// const str  = `Hi, i'm ${age} and my name ${name}`
// console.log(str)

/**
 * untuk menjadikan string literal diatas (str) menjadi tagged template : 
 *    - tulis nama function di depan string
 *      string template literal (`...`) akan masuk seolah-olah sebagai
 *      paramenter dari fungsi yang dibuat diatas. 
 *    - secara default tagged template bisa menerima parameter/argumen
 *    - ketika kita jalankan template literal ini, tagged template akan memecah
 *      tiap-tiap string yang ada di dalamnya (dipisahkan oleh expression)
 *    - expression masuk ke parameter berikutnya.
 * 
 *    - urutan parameternya berdasarkan posisinya dalam string literal.
 *    - jika jumlah parameter melebihi jumlah expression, maka akan bernilai undefined
 *    - ada saat dimana kita tidak tahu ada berapa expression didalam template literal-nya
 *      javascript punya sebuah argumen bernana rest parameter yang bisa menampung seluruh
 *      expression dalam tempate literal.
 *        > cara menulisnya ...nama_variable
 *        > akan menjadi array yang isinya semua expression yang ada di dalam
 *          template literal
 */

// Contoh 1 : 
// function coba(strings, umur, nama) {
//   return strings
//   // return umur     // 33
//   // return nama     // Erwin Smith
// }

function coba(strings, ...values) {
  // return values // [33, "Erwin Smith"]

  // menampilkan string yang persis sama 
  // let result = ''
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ''}`
  // });
  // return result
  return strings.reduce((result,str,i) => `${result} ${str}${values[i] || ''}`, '')
}

const name = 'Erwin Smith';
const age  = 33
const str  = coba `Hi, i'm ${age} and my name ${name}`
console.log(str)



// Contoh 2 : 
// Highlight

function highlight(strings, ...values) {
  return strings.reduce((result,str,i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const name2 = 'Levi Ackerman'
const age2  = 28
const squad = 'Scouting Legion'
const str2  = highlight `Hi, i'm ${age2} and my name ${name2} i'm from ${squad}`
console.log(str2)

document.body.innerHTML = str2



/**
 * 
 * Penggunaan lain Tagged Template
 *    > Escaping HTML Tags 
 *      (Sanitasi HTML Tag) menghindari script/karakter yang tidak diinginkan pada halaman web
 *    > Translation & Internationalization
 *      alih bahasa dari halaman web
 *    > Styled Components
 *      front-end framework (vue, react)
 * 
 */