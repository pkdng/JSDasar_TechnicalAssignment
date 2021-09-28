/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error merupakan error yang muncul ketika nilai yang digunakan diluar atau tidak sesuai dengan tipe data 
/// - Reference Error merupakan error yang muncul ketika kita menggunakan variabel yang belum dideklarasikan
/// - Range Error merupakan error yang muncul ketika menggunakan variabel numeric atau parameter diluar dari rentang nilai yang telah ditentukan
/// - Syntax Error merupakan error yang muncul ketika kita menulis kode dengan syntax yang salah atau tidak sesuai

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

/// - ketika code di atas dijalankan maka akan terjadi error
/// - errornya termasuk ke dalam kategori reference error
/// - karena variabel salaryWithConst memiliki tipe const yang merupakan tipe data konstan/tidak bisa diubah nilainya sehingga harus dideklarasikan terlebih dahulu sebelum dipanggil,
///   berbeda dengan tipe var dimana sebelum dieksekusi, JavaScript akan mencari variabel bertipe var kemudian menginisialisasinya dengan nilai undefined,
///   baru setelah itu program akan mengeksekusi console.log kemudian menginisialisasikannya lagi dengan nilai dari variabel yang kita tentukan 
