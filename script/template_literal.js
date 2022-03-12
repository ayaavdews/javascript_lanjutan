// Javascript Lanjutan (Advanced Javascript)
// Template Literal / Template String

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