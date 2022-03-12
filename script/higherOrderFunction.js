// Javascript Lanjutan (Advanced Javascript)
// // Latihan map, filter, radius


/**
 * const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
 *
 * filter
 * const newAngka = angka.filter(i => i >= 3)
 *
 * map
 * const mapAngka = angka.map(a => a * 2)
 *
 * reduce
 * const reduceAngka1 = angka.reduce((i, j) => i + j)
 * const reduceAngka2 = angka.reduce((i, j) => i + j, 4) 
 *
 * method chaining
 * const angkaChaining = angka.filter(i => i > 5).map(i => i * 3).reduce((i,j) => i+j) 
 */



// ambil semua elemen video
const videos   = Array.from(document.querySelectorAll('[data-duration]')) 
// pilih JAVASCRIPT LANJUTAN
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
                  // ambil durasi masing-masing video 
                  .map(item => item.dataset.duration) 
                  // ubah durasi menjadi float, ubah menit menjadi detik
                  .map(waktu => {
                    const parts = waktu.split(':').map(part => parseFloat(part))
                    return parts[0]*60 + parts[1]
                  }) 
                  // jumlahkan semua detik
                  .reduce((total, detik) => total + detik) 

// ubah formatnya menjadi hh:mm:ss
const hh = Math.floor(jsLanjutan / 3600)
const mm = Math.floor((jsLanjutan - hh * 3600) / 60)
const ss = jsLanjutan - hh * 3600 - mm * 60


// simpan di DOM
const total    = document.querySelector('.jumlah-video')
const duration = document.querySelector('.total-durasi')

total.textContent    = `${videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length} Video.`
duration.textContent = `${hh} Jam, ${mm} Menit, ${ss} Detik.`