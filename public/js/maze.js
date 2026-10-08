(function () {
    'use strict';

    var KOLOM = ['Saldo Normal', 'Jika Bertambah', 'Jika Berkurang'];
    var PILIHAN = ['Debit', 'Kredit'];

    // Jawaban benar per baris, urutannya sama dengan KOLOM
    var DATA = [
        { akun: 'Aset',                   nilai: ['Debit',  'Debit',  'Kredit'] },
        { akun: 'Kewajiban/Utang',        nilai: ['Kredit', 'Kredit', 'Debit']  },
        { akun: 'Ekuitas',                nilai: ['Kredit', 'Kredit', 'Debit']  },
        { akun: 'Pendapatan-LO',          nilai: ['Kredit', 'Kredit', 'Debit']  },
        { akun: 'Pendapatan-LRA',         nilai: ['Kredit', 'Kredit', 'Debit']  },
        { akun: 'Belanja',                nilai: ['Debit',  'Debit',  'Kredit'] },
        { akun: 'Penerimaan Pembiayaan',  nilai: ['Kredit', 'Kredit', 'Debit']  },
        { akun: 'Pengeluaran Pembiayaan', nilai: ['Debit',  'Debit',  'Kredit'] }
    ];
    var TOTAL = DATA.length * KOLOM.length;

    var elTabel = document.getElementById('isi-tabel');
    var elBank = document.getElementById('bank');
    var elTerisi = document.getElementById('terisi');
    var elBenar = document.getElementById('benar');
    var elPercobaan = document.getElementById('percobaan');
    var elPesan = document.getElementById('pesan');
    var tombolCek = document.getElementById('cek');
    var tombolUlang = document.getElementById('ulang');

    var isi;        // isi[r][c] = 'Debit' | 'Kredit' | null
    var hasil;      // hasil[r][c] = null | 'benar' | 'salah'
    var dipilih;    // pilihan yang sedang aktif (atau null)
    var percobaan;
    var selesai;

    function matriks() {
        return DATA.map(function () { return KOLOM.map(function () { return null; }); });
    }

    function hitung(fn) {
        var n = 0;
        DATA.forEach(function (_, r) {
            KOLOM.forEach(function (__, c) { if (fn(r, c)) n++; });
        });
        return n;
    }

    function render() {
        elTabel.innerHTML = '';
        DATA.forEach(function (d, r) {
            var tr = document.createElement('tr');
            var th = document.createElement('td');
            th.className = 'sel-akun';
            th.textContent = d.akun;
            tr.appendChild(th);

            KOLOM.forEach(function (namaKolom, c) {
                var td = document.createElement('td');
                var b = document.createElement('button');
                b.type = 'button';
                b.dataset.r = r;
                b.dataset.c = c;

                var kelas = 'slot';
                if (isi[r][c] !== null) kelas += ' terisi';
                if (hasil[r][c]) kelas += ' ' + hasil[r][c];
                b.className = kelas;
                b.textContent = isi[r][c] !== null ? isi[r][c] : '';
                b.setAttribute('aria-label', d.akun + ', ' + namaKolom + ': ' +
                    (isi[r][c] !== null ? isi[r][c] : 'kosong'));

                td.appendChild(b);
                tr.appendChild(td);
            });
            elTabel.appendChild(tr);
        });

        elBank.innerHTML = '';
        PILIHAN.forEach(function (p) {
            var c = document.createElement('button');
            c.type = 'button';
            c.className = 'chip' + (dipilih === p ? ' dipilih' : '');
            c.dataset.nilai = p;
            c.textContent = p;
            c.setAttribute('aria-pressed', dipilih === p ? 'true' : 'false');
            elBank.appendChild(c);
        });

        var terisi = hitung(function (r, c) { return isi[r][c] !== null; });
        elTerisi.textContent = terisi + '/' + TOTAL;
        elBenar.textContent = hitung(function (r, c) { return hasil[r][c] === 'benar'; });
        elPercobaan.textContent = percobaan;
        tombolCek.disabled = selesai || terisi !== TOTAL;
    }

    elBank.addEventListener('click', function (e) {
        var c = e.target.closest('.chip');
        if (!c || selesai) return;
        dipilih = dipilih === c.dataset.nilai ? null : c.dataset.nilai;
        render();
    });

    elTabel.addEventListener('click', function (e) {
        var s = e.target.closest('.slot');
        if (!s || selesai) return;
        var r = parseInt(s.dataset.r, 10);
        var c = parseInt(s.dataset.c, 10);
        if (hasil[r][c] === 'benar') return;

        if (dipilih !== null) {
            isi[r][c] = dipilih;
        } else if (isi[r][c] !== null) {
            isi[r][c] = null;
        } else {
            return;
        }
        hasil[r][c] = null;
        elPesan.textContent = '';
        render();
    });

    tombolCek.addEventListener('click', function () {
        percobaan++;
        DATA.forEach(function (d, r) {
            KOLOM.forEach(function (_, c) {
                hasil[r][c] = isi[r][c] === d.nilai[c] ? 'benar' : 'salah';
            });
        });
        var benar = hitung(function (r, c) { return hasil[r][c] === 'benar'; });

        if (benar === TOTAL) {
            selesai = true;
            elPesan.textContent = 'Semua benar dalam ' + percobaan + ' percobaan.';
        } else {
            elPesan.textContent = benar + ' dari ' + TOTAL + ' benar. Perbaiki kotak yang berwarna merah.';
        }
        render();
    });

    function mulai() {
        isi = matriks();
        hasil = matriks();
        dipilih = null;
        percobaan = 0;
        selesai = false;
        elPesan.textContent = '';
        render();
    }

    tombolUlang.addEventListener('click', mulai);
    mulai();
})();