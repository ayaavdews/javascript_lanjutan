// Javascript Lanjutan (Advanced Javascript)
// Callback

/**
 * 
 * Definisi
 *    > "Function yang dikirimkan sebagai parameter pada function yang lain." ~MDN Web Docs 
 *    > "Function yang dieksekusi setelah function lain selesai dijalankan"
 * 
 */


// contoh 1
// Synchronous Callback
// function sayHello(name) {
//   alert(`Hello, ${name} !`)
// }

// function showMessage(callback) {
//   const name = prompt('insert name : ')
//   callback(name)
// }

// showMessage(sayHello)


// contoh 2
// Asychronous Callback (with Vanilla Javascript)
// function getDataPirates(url, success, error) {
//   let xhr = new XMLHttpRequest()

//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         success(xhr.response)
//       } else if(xhr.status === 404) {
//         error()
//       }
//     }
//   }

//   xhr.open('get', url)
//   xhr.send()
// }

// getDataPirates('../pirates.json', results => {
//   const pirates = JSON.parse(results)
//   pirates.forEach(p => console.log(p.name))
// }, () => {

// })


// contoh 3 
// Asynchronous Callback (with Jquery)
console.log('mulai')
$.ajax({
  url : '../pirates.json',
  success : (pirates) => {
    pirates.forEach(p => console.log(p.name))
  },
  error : () => {

  }
})
console.log('selesai')
