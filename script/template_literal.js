// Javascript Lanjutan (Advanced Javascript)
// Template Literal / Template String (Latihan)

/**
 * 
 * Definisi
 *    > String literal yang memungkinkan adanya expression di dalamnya
 *      ~ MDB Web Docs
 * 
 *      - String Literal :
 *        String yang biasa dibuat. Baik menggunakan petik satu (''), petik dua (""), dan back tick (``)
 *        dengan membuat string literal menggunakan backtick, memungkinkan kita membuat template literal
 * 
 *        Template Literal : 
 *          * hanya bisa dibuat menggunakan `` back tick
 *          * Multi-line String
 *          * Embedded Expression
 *          * HTML Fragments
 *          * Expression Interpolation
 *          * Tagged Template
 * 
 * 
 * Contoh : 
 * - `string  text`                               --> string biasa
 * 
 * - `string text baris 1                         --> multi-line string
 *    string text baris 2
 *    string text baris 3`
 * 
 * - `string text ${expression} string text`      --> embedded expression
 * 
 * - tag `string text ${expression} string text`  --> tagged template
 * 
 * 
 * Tips :
 *    karena emmet tidak bisa digunakan di javascript, kita harus menulis tag html secara manual di back tick (``).
 *    untuk mengatasinya kita bisa ke setting(ctrl + ,) -> search include lang -> edit in settings json ->
 *    diakhir tambahkan "emmet.includeLanguages": {"javascript": "html"} -> save & close.
 * 
 */

// HTML Fragments

// 1. Bentuk Umum : 
// const mhs = {
//   nama : 'Sandhika Galih',
//   umur : 33,
//   nrp  : '043040023',
//   email: 'sandhikagalih@unpas.ac.id'
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`



// 2. Looping
// const mhs = [
//   {
//     nama : 'oogway',
//     email: 'oogway@gmail.com'
//   },
//   {
//     nama : 'shifuu',
//     email: 'shifuu@gmail.com'
//   },
//   {
//     nama : 'tailung',
//     email: 'tailung@gmail.com'
//   }
// ]

// const el = `
//   <div class="mhs">
//     ${mhs.map(m => `
//       <ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//       </ul>
//     `).join('')}
//   </div>
// `



// 3. conditional
// const song = {
//   title  : 'enemy', 
//   singer : 'imagine dragon',
//   feat   : 'jid'
// }
// const el = `
//   <div class="song">
//     <ul>
//       <li>${song.title}</li>
//       <li>${song.singer} ${song.feat ? `x ${song.feat}` : ''}</li>
//     </ul>
//   </div>
// `



// 4. nested
// HTML Fragments Bersarang
const mhs = {
  nama       : 'Sandhika Galih' ,
  semester   : 5,
  mataKuliah : [
    'Rekayasa Web',
    'Analisis dan Perancangan Sistem Informasi',
    'Pemrograman Sistem Interaktif',
    'Perancangan Sistem Berorientasi Object'
  ]
}

// function cetakMataKuliah(mataKuliah) {
//   return `
//     <ol>
//       ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>
//   `
// }

// const el = `
//   <div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester : ${mhs.semester}</span>
//     <h4>Mata Kuliah</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
//   </div>
// `

const el = `
  <div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    <ol>
      ${mhs.mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
  </div>
`



document.body.innerHTML = el