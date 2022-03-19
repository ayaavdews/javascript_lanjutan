// Javascript Lanjutan (Advanced Javascript)
// Asynchronous Javascript

/**
 * 
 * - Javascript
 *   Bahasa pemrograman tingkat tinggi dan dinamis => - Javascript is single-threaded, non-blocking,
 *   yang secara umum dapat berjalan pada browser.      asychronous, and concurrent language.
 *  
 *    > Single Threaded
 *      thread : urutan eksekusi kode yang dapat dilakukan secara bebas/independen satu sama lain.
 *      hanya bisa melalukan 1 hal dalam 1 waktu, menyelesaikan sesuai urutan, baris per baris.
 *    > Non-Blocking
 *      jika suatu task memerlukan waktu pemrosesan yang lama, kita bisa lanjut ke task berikutnya.
 *      tidak perlu menunggu.
 *    > Asynchronous (single threaded)
 *      thread bisa berpindah ke task lain, meskipun proses task sebelumnya belum selesai. sampai
 *      semua thread selesai
 *    
 * - Asynchronous + Single-threaded = Concurrency
 *   Asynchronous + Multi-threaded  = Parallelism
 * 
 * - Kesimpulan 
 *    > Single vs Multi Thread      : Lingkungan eksekusi 'task'
 *    > Blocking vs Non-Blocking    : Teknik 'ngoding' (IO related)
 *    > Synchronous vs Asynchronous : Teknik 'ngoding' (HTTP Request related)
 *    > Concurrent vs Parallel      : Lingkungan eksekusi 'task'
 * 
 * - Ilustrasi dan penjelesan tentang V8 Engine (Heap & Stack), Web API, Callback Queue dan Event Loop
 *   http://latenflip.com/loupe/ by Philip Roberts
 * 
 * - don't block the event loop
 * 
 */