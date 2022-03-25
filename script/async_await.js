// Javascript Lanjutan (Advanced Javascript)
// Async Await

/**
 * 
 * Async (Asynchronous Function)
 *    - sebuah function yang bekerja secara asynchronous (melalui event loop),
 *      yang menghasilkan (implisit) promise sebagai return value-nya,
 *      tapi cara penulisan code-nya menggunakan penulisan yang syncronous (standard)
 *    
 *    - > fugsi yang berjalan secara asynchronous
 *      > menghasilkan (implisit) promise
 *      > cara penulisannya sama seperti synchronous function (function biasa)
 * 
 *    - Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan
 *      sementara eksekusi fungsinya sambil menunggu promise-nya selesai.
 * 
 */


// contoh 1

// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000)
// })
// console.log(coba)
// coba.then(() => console.log(coba))

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 3000
    if(waktu < 5000) {
      setTimeout(() => {
        resolve('selesai')
      }, waktu)
    } else {
      reject('kelamaan!')
    }
  })
}

// menggunakan then & catch
// const coba = cobaPromise()
// coba
//   .then(coba => console.log(coba))
//   .catch(coba => console.log(coba))

// menggunakan async & await
async function cobaAsync() {
  try {
    const coba = await cobaPromise()
    console.log(coba)
  } catch(e) {
    // console.log(e)
    console.error(e)
  }
  
}
cobaAsync()

/**
 * resolve bisa ditangkap menggunakan method then().
 * reject ditangkap menggunakan method catch()
 */