// Javascript Lanjutan (Advanced Javascript)
// Promise


// Jquery
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=e41f0c9b&s=avengers',
//   success: movies => console.log(movies)
// })


// Vanilla Javascript
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//   if(xhr.status === 200) {
//     if(xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response))
//     }
//   } else {
//     console.log(xhr.responseText)
//   }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=e41f0c9b&s=avengers')
// xhr.send()


// ES6 Fetch
// fetch mereturn promise
// fetch('http://www.omdbapi.com/?apikey=e41f0c9b&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response))


/**
 * 
 * Promise
 * 
 *    - Definisi : sebuah object yang merepresentasikan keberhasilan / kegagalan sebuah
 *                 event yang asynchronous di masa yang akan datang.
 *    
 *    - janji    (terpenuhi / ingkar)
 *      state    (fulfilled / rejected / pending)
 *      callback (resolve   / reject   / finally)
 *      aksi     (then      / catch)
 * 
 */


// contoh 1 :
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     resolve('Janji telah ditepati!')
//   } else {
//     reject('Ingkar janji...')
//   }
// })

// janji1
//   .then(response => console.log(`OK! : ${response}`))
//   .catch(response => console.log(`NOT OK! : ${response}`))


// contoh 2 : 
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!')
//     }, 2000)
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa waktu!')
//     }, 2000)
//   }
// })
// console.log('mulai')
// // console.log(janji2.then(() => console.log(janji2)))
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then(response => console.log(`OK! : ${response}`))
//   .catch(response => console.log(`NOT OK! : ${response}`))
// console.log('selesai')
/**
 * method finally dijalankan ketika salah satu dari then/catch sudah siap dijalankan
 * setelah promise sudah tidak pending yang dijalankan dulu finally
 */


// contoh 3
// promise.all
// ketika ingin menjalankan banyak promise sekaligus
const manga =  new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      title: 'Shingeki no Kyojin',
      author: 'Hajime Isayama'
    }])
  }, 1000)
})

const anime = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      title : 'Attack on Titan',
      studio : 'Mappa',
      season : 4
    }])
  }, 500);
})

// manga.then(response => console.log(response))
// anime.then(response => console.log(response))

Promise.all([manga, anime])
  // .then(response => console.log(response)) // array dalam array
  .then(response => {
    const [manga, anime] = response
    console.log(manga)
    console.log(anime)
  })
