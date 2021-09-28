/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - jumlah variabel scope pada javascript ada dua, yaitu local scope dan global scope
/// - local scope merupakan variabel yang dideklarasikan di dalam suatu fungsi dan hanya bisa diakses atau digunakan oleh fungsi tersebut
///   global scope merupakan variabel yang dideklarasikan secara global/ di luar fungsi maupun blocks sehingga bisa diakses dimana saja
/// - contoh global scope
const global = "ini global" // variabel ini bisa diakses dimana saja
/// - contoh local scope
function contohLocal(){
  const local = "isi local" //variabel ini tidak bisa diakses di luar fungsi
  console.log(global) //ketika variabel global diakses di dalam fungsi, program akan menambilkan isi dari variabel tersebut
}
contohLocal();
console.log(global); 
// console.log(local) //jika mengakses variabel local di luar fungsi maka akan tertulis bahwa variabel local belum dideklarasikan

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - yang akan tampil pada console.log adalah Mariah
/// - karena parameter name pada fungsi printFirstName() itu berbeda dengan variabel name yang sudah dideklarasikan di awal
/// - ketika fungsi printFirstName() dipanggil disertai dengan penulisan value dari parameter fungsi tersebut maka,
///   name pada fungsi printFirstName() akan menangkap value tadi dan disimpan di dalam variabel name milik function tersebut

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
