// Javascript Lanjutan (Advanced Javascript)
// Fetch

/**
 * 
 * Definisi
 *    - API pada javascript modern yang tugasnya mengambil data secara asynchronous.
 *    - Sebuah method pada API Javascript untuk mengambil resources dari jaringan, 
 *      dan mengembalikan promise yang selesai (fullfilled) ketika ada response 
 *      yang tersedia. 
 * 
 * 
 * Bentuk umum 
 *    - fetch(resources, init)
 *      > resources 
 *        1. url, alamat dari sumber yang kita ambil.
 *        2. request object, representasi permintaan sumber.
 *      > init
 *        konfigurasi tambahan pada sebuah request berbentuk object.
 *        seperti : method, headers, body, mode, cache, referrer, dll.
 * 
 *    - response
 *      hasil dari fetch berupa promise. didalamnya terdapat :
 *      > property : headers, ok, redirected, status, statusText, type, url, body
 *      > method   : clone(), error(), redirected(), blob(), formData(), json(), text()
 * 
 */