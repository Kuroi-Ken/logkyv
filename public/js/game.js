const nodes = [
  {type:'dialog', board:'', name:'', text:'(Hari ini adalah hari pertamamu masuk kek kelas AKL sebagai siswa pindahan)'},
  {type:'dialog', board:'', name:'', text:'(Materi Praktik Akuntansi Lembaga Pemerintah hari ini terasa sulit bagimu untuk dipahami, tetapi kamu takut untuk bertanya dengan guru)'},
  {type:'dialog', board:'', name:'', text:'. . . . .'},
  {type:'dialog', board:'', name:'', text:'(Kamu melihat teman didepan mejamu saat ini sedang mencatat sesuatu. Sepertinya dia bisa sedikit membantu)'},
  {type:'dialog', board:'', name:'', text:'(Tidak ada salahnya mencoba bukan?)'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'???', text:'Hmmm?'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'???', text:'Oh hai ada yang bisa kubantu?'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Oh ya sebelumnya namaku Raka, kamu pasti murid pindahan baru kan?'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Biar kutebak kamu pasti mau bertanya tentang materi tadi? Yah nggak masalah'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Materi ini sebenarnya gampang dipahami jadi aku coba membantumu memahami materinya'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Nah jadi ayo kita masuk ke konsep awalnya terlebih dahulu!'},
  {type:'game',  avatar:'/assets/male.png', name:'Raka',
    text:'Aku mau tanya nih, tahukah kamu pencatatan yang digunakan oleh jurnal menggunakan sistem apa?',
    options:[
      {label:'Double entry', correct:true},
      {label:'Single Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'},
      {label:'Triple Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'},
      {label:'Level Entry', correct:false, fb:'Hmm sepertinya jawabanmu masih kurang tepat, tapi tidak apa apa mari kita coba lagi.'}
    ]},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Ya benar sekali, pencatatan jurnal menggunakan sistem double entry dimana terdapat Debit disisi kiri dan Kredit disisi kanannya'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Sistem double entry ini nantinya sangat diperlukan dalam mencatat perubahan nominal akun yang akan kita bahas setelah ini'},
  {type:'dialog', id:'confuse', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Nah, mari kita lihat tabel ini.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Aku yakin kamu pasti bingung ini buat apasih?'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Hehe santai saja biar aku jelasin.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Pertama - tama jangan hafalkan semuanya karena sudah jelas kamu pasti pusing sendiri.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Kita perlu tau kenapa mereka diletakkan di Debit atau Kredit.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Kamu masih ingat sama rumus Aset = Kewajiban/utang + Ekuitas?'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Sekarang inget itu baik-baik atau catat dibuku kalau kamu gampang lupa, terus perhatikan pola persamaannya dengan pertanyaan nanti.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Aku punya pertanyaan nih, pemerintah punya kas 20.000.000'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Lalu menerima kas lagi sebesar 10.000.000'},
  {type:'game',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka',
    text:'Sehingga total kas sekarang menjadi 30.000.000, menurutmu kas itu apa?',
    options:[
      {label:'Kewajiban', correct:false, fb:'No no no. kewajiban itu sama saja hutang dimana hutang adalah tanggungan yang harus dibayar ke pihak lain. Masa pemerintah disuruh bayar hutang pakai hutang? Kapan lunasnya?'},
      {label:'Ekuitas', correct:false, fb:'Ekuitas itu kekayaan bersih pemerintah dimana sudah diselisih sama aset & utang jadi buka kas ya.'},
      {label:'Aset', correct:true, fb:''},
      {label:'Pendapatan', correct:false, fb:'Bukan... Pendapatan itu hak pemerintah buat nambah ekuitas. Bisa dari pajak atau retribusi.'}
    ]},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Betul sekali! kas termasuk aset karena merupakan sumber daya yang dimiliki atau dikuasai pemerintah dan memiliki manfaat ekonomi di masa yang akan datang. Contohnya kaya uang tunai dan saldo rekening kas pemerintah.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Lalu ada Ekuitas yaitu kekayaan bersih pemerintah dimana sudah diselisih sama aset & utang. Pendapatan itu hak pemerintah buat nambah ekuitas bisa dari pajak atau retribus, dan Kewajiban/Hutang adalah tanggungan yang harus dibayar ke pihak lain.'},
  {type:'game',board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka',
    text:'Nah sekarang kita mau nulis kas di jurnal. Kira - kira bakal ditulis di Debit atau Kredit?',
    options:[
      {label:'Debit', correct:true, fb:''},
      {label:'Kredit', correct:false, fb:'Salah.... coba liat pola persamaan Aset hehehe'},
    ]},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Betul banget nah coba sekarang kamu perhatiin lagi persamaannya.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Kalau kamu perhatiin Aset berada disisi kiri persamaan yang dimana diawal kita tahu kalau jika disebelah kiri itu Debit.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Nah kalau kamu liat lagi di tabel jadi jelas kenapa Aset saldo normal & penambahannya Debit kan? Ya karena jika kita liat dari persamaannya dia ada di sebelah kiri. Lalu untuk pengurangan tentu di Kredit.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Sekarang coba kamu liat ditabel lagi buat yang Kewajiban & Ekuitas. Mereka ada dimana dipersamaan Aset?'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Tentunya ada dikanan persamaan sehingga jika menuliskan saldo normal & penambahan mereka dijurnal adalah di bagian Kredit.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Nah... 3 hal itu bisa buat jadi patokan untuk mengetahui dimana saldo normal akun diletakkan.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Jika kamu liat bawahnya ada Pendapatan LO (Laporan Operasional) & LRA (Laporan Realisasi Anggaran). Pendapatan itu adalah hak pemerintah untuk menambahkan Ekuitas. Ingat ini baik - baik!.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Karena Pendapatan itu sifatnya "Menambahkan" Ekuitas, jadi kamu tinggal liat kolom penambahan Ekuitas itu ditulis dimana.'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Penambahan Ekuitas ditulis di Kredit, jadi saldo normal Pendapatan itu ada Kredit!'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Terus kalau kaya Belanja & Pengeluaran jelas kan ngurangin Ekuitas. jadi gampang tinggal liat tabel kalau pengeluaran Ekuitas itu masuknya di Debit atau Kredit?'},
  {type:'dialog', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Raka', text:'Sisanya buat pengurangan itu oposisinya penambahan. Jadi kalau penambahannya ada di Kredit ya pengurangannya Debit.'},
  {type:'confuse',board:'', avatar:'/assets/male.png', name:'Raka',
    text:'Gimana? Kamu masih bingung nggak?',
    options:[
      {label:'Iya, masih ada yang masih belum masuk diakal', correct:false, fb:''},
      {label:'Nggak ada sih, penjelasanmu cukup detail jadi gampang diikuti', correct:true, fb:''},
    ]},
  // {type:'maze', board:'/assets/saldo-normal.png', avatar:'/assets/male.png', name:'Rakat Data',
  //   text:'Sinyal sempat putus pas server restart! Bantu paket data ini cari jalur ke tujuan 🏁 pakai tombol panah.'}
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'WOOW Kamu tipe orang yang mudah memahami materi ya? Hahaha hebat banget!'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'OK untuk selanjutnya ini adalah Materi Jenis Transaksi. Dan untuk yang 1 ini lebih ke hafalan memang.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Yang pertama ada Pendapatan Daerah'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Pendapatan Daerah adalah hak daerah dalam 1 tahun anggaran yang bersifat menambah Ekuitas.'},
  {type:'game',board:'', avatar:'/assets/male.png', name:'Raka',
    text:'Haa kamu masih inget ga Pendapatan Daerah itu meliputi apa aja?',
    options:[
      {label:'Pajak & Retribusi', correct:true, fb:''},
      {label:'Belanja Daerah', correct:false, fb:'No no... Belanja Daerah itu termasuk jenis transaksi ya!'},
      {label:'Aset, Kewajiban, & Ekuitas', correct:false, fb:'Hei itukan persamaan akuntansi bukan Pendapatan Daerah.'},
    ]},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Yup Pajak & Retribusi adalah Pendapatan Daerah. Bersamaan dengan pendapatan lain seperti Pendapatan LO (Laporan Operasional) & Pendapatan LRA (Laporan Realiasasi Anggaran).'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Lalu ada Belanja Daerah yaitu realisasi pengeluaran anggaran untuk memperoleh barang/jasa atau memenuhi kebutuhan pemerintahan.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Ketiga ada Pembiayaan Daerah yang digunakan untuk menutup defisit atau memanfaatkan surplus anggaran.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Terdiri dari Penerimaan pembiayaan, pengeluaran pembiayaan, dan transaksi terkait SiLPA/SiKPA.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Keempat Transaksi selain Kas, yaitu serangkaian pencatatan hingga pelaporan keuangan semua transaksi atau selain dari kas.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Kelima Koreksi Kesalahan adalah perbaikan dalam membuat jurnal yang telah dibuat di buku besar. Lalu Penyesuaian adalah transaksi penyesuaian pada akhir periode untuk mengakui persediaan, utang, piutang, pendapatan, dll.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Keenam ada Pengakuan Aset Tetap. Menurut PP no 71 tahun 2010 aset tetap adalah asset berwujud yang memiliki masa manfaat lebih 12 bulan untuk kegiatan pemerintah/ dimanfaatkan masyarakat umum.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Ketujuh Depresiasi untuk menyusutkan nilai asset satker.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Terakhir ada Transaksi accrual & prepayment yg muncul karena transaksi sudah dilakukan tetapi pengeluaran kas belum dilakukan/ terjadi pengeluaran kas di masa datang.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Hahaha itu tadi 8 jenis transaki. Yah itu aku rangkum seringkas mungkin biar kamu bisa paham.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Yang satu ini sebenarnya tidak perlu dihafal penuh secara teori. Kamu cukup paham sama inti sarinya aja.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Kita masuk ke bagian akhir, Jurnal yang Diperlukan.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Jurnal adalah catatan kronologis yang sistematis atas keseluruhan transaksi entitas.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Jurnal dibuat dengan sistem Double Entry dimana terdapat debit dan kredit. Dalam pembuatan jurnal terdapat 2 jenis yaitu jurnal finansial & jurnal pelaksanaan anggaran.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Pertama ada Jurnal Finansial, yaitu pencatatan berdasarkan basis krusial laporan & neraca. Jurnal finansial digunakan untuk mencatat seluruh proses transaksi keuangan seperti asset, kewajiban, ekuitas, LO, dll.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Singkatnya jurnal ini digunakan untuk merecord semua transaksi baik itu belum terealisasi ataupun sudah.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Lalu kedua ada Jurnal Pelaksanaan Anggaran, yaitu pencatatan berdasarkan basis kas pada laporan realisasi. Mudahnya jurnal ini mencatat apabila terjadi transaksi yang sudah terealisasi yang ditujukan untuk digunakan dalam suatu kepentingan.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Apabila dalam transaksi tidak melibatkan kas seperti dalam akun/uraian hanya terjadi perpindahan alokasi uang kas daerah ke rekening yang lain, atau rencana lain yang belum benar-benar terealisasi maka jurnal ini tidak perlu diisi.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Naah saatnya masuk ke bagian serunya! kita akan membahas pembuatan Jurnal Finansial & Jurnal Pelaksanaan Anggaran.'},
  {type:'game',board:'assets/sk1.png', avatar:'/assets/male.png', name:'Raka',
    text:'Pertama kita perthatikan soalnya. Pada soal pemkot menerbitkan SKPD pajak hotel sebesar 14.000.000, perlukah kita membuat jurnal finansialnya?',
    options:[
      {label:'Ya, karena jurnal finansial dibuat setiap ada transaksi', correct:true, fb:''},
      {label:'Nggak, karena bukan termasuk transaksi berbasis akrusial', correct:false, fb:'Salah, ayo coba baca soalnya lagi.'},
    ]},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Ya... Bener karena Jurnal Finansial itu dibuat berdasarkan basis krusial. Atau mudahnya setiap ada transaksi.'},
  {type:'dialog', board:'assets/sk1.2.png', avatar:'/assets/male.png', name:'Raka', text:'Sehingga di Jurnal Finansial dibuat seperti ini.'},
  {type:'game',board:'assets/sk1.png', avatar:'/assets/male.png', name:'Raka',
    text:'Lalu 14.000.000 tadi apakah termasuk dalam Laporan Realisasi Anggaran? Jawabannya tidak. Kok bisa?',
    options:[
      {label:'Karena pajak sudah diterbitkan dan sudah dibayar', correct:false, fb:'Bukan.... kalau pajak sudah dibayar jelas anggaran sudah terealisasi jadi pasti masuk ke dalam Jurnal Pelaksanaan Anggaran.'},
      {label:'Karena belum ada kas masuk. SKPD masih berupa rencana sehingga belum ada kas yang diterima', correct:true, fb:''},
    ]},
  {type:'dialog', board:'assets/sk1.png', avatar:'/assets/male.png', name:'Raka', text:'Betul lagi. Karena Pemkot hanya menerbitkan SKPD dan belum ada kas masuk pada saat itu maupun anggaran yang terealisasikan. Sehingga bisa kita kosongkan.'},
  {type:'dialog', board:'assets/sk2.png', avatar:'/assets/male.png', name:'Raka', text:'Selanjutnya bendahara penerima SKPD menerima pendapatan retribusi parkir. Dari sini jelas bahwa bendahara sudah menerima secara langsung bukan angan-angan atau rencana.'},
  {type:'dialog', board:'assets/sk2.2.png', avatar:'/assets/male.png', name:'Raka', text:'Jadi Jurnal Finansialnya bisa kita buat seperti ini.'},
  {type:'dialog', board:'assets/sk2.3.png', avatar:'/assets/male.png', name:'Raka', text:'dan Jurnal Pelaksanaan Anggarannya seperti ini.'},
  {type:'game',board:'assets/sk3.png', avatar:'/assets/male.png', name:'Raka',
    text:'Lalu pada soal ini jurnal apa yang perlu kamu buat?',
    options:[
      {label:'Jurnal Finansial saja', correct:true, fb:''},
      {label:'Jurnal Pelaksanaan Anggaran saja', correct:false, fb:'Salah. Ayo baca lagi apakah disoal terjadi perubahan kas?'},
      {label:'Dua-duanya', correct:false, fb:'Yaaa bener setengah. Tapi coba kamu baca lagi soalnya apakah terjadi perubahan kas?'},
    ]},
  {type:'dialog', board:'assets/sk3.1.png', avatar:'/assets/male.png', name:'Raka', text:'Yaa.. Kita cukup membuat Jurnal Finansial saja karena perpindahan rekening kas jelas tidak mengubah nominal kas.'},
  {type:'game',board:'assets/sk4.png', avatar:'/assets/male.png', name:'Raka',
    text:'Kita lanjut ke soal yang cukup menjebak. Menurutmu bendahara pengeluaran menerima SP2D-UP sebesar 1.400.000 apakah langsung dibelanjakan?.',
    options:[
      {label:'Ya, karena sudah menerima uang persediaannya.', correct:false, fb:'Belum tentu. uang persediaan hanya diterima belum tentu langsung dibelanjakan saat itu.'},
      {label:'Nggak, karena meskipun sudah menerima uang persediaannya belum tentu langsung dibelanjakan.', correct:true, fb:''},
    ]},
  {type:'dialog', board:'assets/sk4.png', avatar:'/assets/male.png', name:'Raka', text:'Benar sekali. Karena uang persediaan hanya diterima bukan berarti dibelanjakan saat itu. Disoal hanya diberikan surat SP2D saja jadi bendahara bisa saja tidak langsung membelanjakan uang tersebut.'},
  {type:'game',board:'assets/sk4.png', avatar:'/assets/male.png', name:'Raka',
    text:'Jadi jurnal apa yang perlu dibuat?.',
    options:[
      {label:'Jurnal Pelaksanaan Anggaran saja', correct:false, fb:'No no... coba pahami lagi pernyataan sebelumnya.'},
      {label:'Dua-duanya', correct:false, fb:'Kayanya pilihan ini selalu jadi pilihan kamu biar cari aman? Sayangnya bukan ini jawabannya hahaha.'},
      {label:'Jurnal Finansial saja', correct:true, fb:''},
    ]},
  {type:'dialog', board:'assets/sk4.1.png', avatar:'/assets/male.png', name:'Raka', text:'Benar sekali. Karena uang persediaan hanya diterima bukan berarti dibelanjakan saat itu. Disoal hanya diberikan surat SP2D saja jadi bendahara bisa saja tidak langsung membelanjakan uang tersebut.'},
  {type:'dialog', board:'assets/sk5.png', avatar:'/assets/male.png', name:'Raka', text:'Nah disini baru kita tahu kalau uang persediaan itu dipakai untuk apa jadi kita bisa membuat Jurnal Pelaksanaan Anggarannya.'},
  {type:'dialog', board:'assets/sk5.1.png', avatar:'/assets/male.png', name:'Raka', text:'Ini untuk Jurnal Finansialnya.'},
  {type:'dialog', board:'assets/sk5.2.png', avatar:'/assets/male.png', name:'Raka', text:'Ini untuk Jurnal Pelaksanaan Anggarannya.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Haaaa Akhirnya selesai. Jadi gimana? apa kamu sekarang sudah cukup paham sama materinya?'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Aku juga sudah memberikan video penjelasan untuk materi pembuatan Jurnal Finansial & Jurnal Realisasi Anggaran jika kamu merasa penjelasanku tadi agak membingngkan.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Kalau kamu masih merasa belum memahami materi itu wajar karena selama belajar pasti sulit untuk memahami materi dalam sekali lihat.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Kuncinya adalah kamu ngulangin terus materinya sampai kamu paham.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Karena kalau kamu mau belajar pasti hal seperti ini akan menjadi hal yang biasa bagimu.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Ingat selalu bahwa hasil tidak akan mengkhianati usaha.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Mungkin cuma itu sih kalau dari aku. Ah iya kalau kamu perlu latihan soal kamu bisa minta Renalla.'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Semua orang tau kalau dia itu bandar soal latihan & ujian hahaha'},
  {type:'dialog', board:'', avatar:'/assets/male.png', name:'Raka', text:'Kalau begitu aku duluan ya aku mau ke kantin dulu. Dadah!'},
  {type:'dialog', board:'', avatar:'', name:'', text:'(Raka melambaikan tangannya dan mempersiapkan langkahnya untuk pergi ke kantin)'},   
  {type:'end'}
];

const STORAGE_KEY = 'logkyv-novel-state';
function save(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify({ i })); }
  catch(e){ /* storage penuh/diblokir browser, aman diabaikan */ }
}
let i = 0;
let typingTimer = null;
let optionTimer = null;
let isTyping = false;
// const quizAnswers = {};
const el = id => document.getElementById(id);
const OPT_BASE = "w-full text-left border rounded-[10px] px-3 py-2.5 text-[13.5px] flex justify-between gap-2 border-black/20 dark:border-white/25 bg-transparent";
const OPT_GOOD = "border-[#12a15a] text-[#12a15a] dark:border-[#5fd383] dark:text-[#5fd383]";
const OPT_BAD  = "border-[#d5333c] text-[#d5333c] dark:border-[#e8636b] dark:text-[#e8636b]";


function renderProgress(){
  const wrap = el('progress'); wrap.innerHTML='';
  nodes.forEach((_,idx)=>{
    const s=document.createElement('span'); s.className='h-[3px] flex-1 bg-black/10 dark:bg-white/15 rounded overflow-hidden';
    const b=document.createElement('i'); b.className='block h-full bg-[#c77f0f] dark:bg-[#f5b942] transition-all';
    b.style.width = idx<=i ? '100%':'0%'; s.appendChild(b); wrap.appendChild(s);
  });
}

function typeText(element, text, speed = 25, callback) {
    // Hentikan ketikan sebelumnya
    clearInterval(typingTimer);

    element.textContent = '';
    isTyping = true;

    let i = 0;

    typingTimer = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typingTimer);
            typingTimer = null;
            isTyping = false;

            if (callback) {
                callback();
            }
        }
    }, speed);
}

function showExplain(n, opt){

    clearInterval(typingTimer);
    clearTimeout(optionTimer);

    typingTimer = null;
    optionTimer = null;
    isTyping = false;

    el('options').innerHTML = '';

    el('name').textContent = n.name;
    el('text').textContent = opt.fb;

    el('nextBtn').style.display = 'inline-block';
    el('nextBtn').textContent = 'Coba lagi';

    el('nextBtn').onclick = () => {
        render();
    };
}

el('restart').onclick = () => {
  i = 0;
  document.onkeydown = null;   
  render();                    
};

function render(){
  const n = nodes[i];
  save();
  renderProgress();
  el('options').innerHTML=''; el('nextBtn').style.display='inline-block';
  el('avatar').style.display='';
  el('stage').style.backgroundImage = n.bg;

  if (n.board) {
      el('board').style.display = 'block';
      el('board').src = n.board;
      el('board').className = 'w-[70%] h-auto max-h-[80%] lg:w-[55%] lg:max-h-[90%] object-contain mx-auto';
  } else {
      el('board').style.display = 'none';
      el('board').removeAttribute('src');
  }
  if (n.avatar) {
      el('avatar').style.display = 'block';
      el('avatar').src = n.avatar;
      el('avatar').className = 'w-40 h-40 lg:w-60 lg:h-60 float-left object-contain drop-shadow-lg';
  } else {
      el('avatar').style.display = 'none';
      el('avatar').removeAttribute('src');
  }
  el('prevBtn').disabled = (i === 0);
  el('nextBtn').textContent = 'Lanjut';

  clearInterval(typingTimer);
    clearTimeout(optionTimer);

    typingTimer = null;
    optionTimer = null;
    isTyping = false;

  if(n.type==='dialog'){
    el('name').textContent = n.name; typeText(el('text'), n.text, 25);
    el('nextBtn').onclick = ()=>{ i++; render(); };
    el('prevBtn').onclick = ()=>{ i--; render(); };
  }

  if(n.type==='game'){
    el('name').textContent = n.name; typeText(el('text'), n.text, 25);
    el('nextBtn').style.display='none';
    el('prevBtn').onclick = ()=>{ i--; render(); };
    n.options.forEach(opt=>{
      const b=document.createElement('button'); b.className=OPT_BASE; b.textContent=opt.label;
      b.onclick=()=>{
        if(opt.correct){
          i++; render();            
        } else {
          showExplain(n, opt);     
        }
      };
      el('options').appendChild(b);
    });
  }

  if(n.type ==='confuse'){
    el('name').textContent = n.name; typeText(el('text'), n.text, 25);
    el('nextBtn').style.display='none';
    el('prevBtn').onclick = ()=>{ i--; render(); };
    n.options.forEach(opt=>{
      const b=document.createElement('button'); b.className=OPT_BASE; b.textContent=opt.label;
      b.onclick=()=>{
        if(opt.correct){
          i++; render();            
        } else {
          i = 14; render();     
        }
      };
      el('options').appendChild(b);
    });
  }

  if(n.type==='end'){
    el('name').textContent='Selesai';

    el('nextBtn').textContent = 'Main lagi ↺';
    el('nextBtn').onclick = () => { i = 0; render(); };
  }
}

try{
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if(saved && typeof saved.i === 'number' && saved.i < nodes.length){
    i = saved.i;
  }
}catch(e){}
render();