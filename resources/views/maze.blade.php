<x-layout>
    <style>
        /* Elemen di bawah dibuat lewat JS (public/js), jadi memakai CSS biasa, bukan Tailwind */
        .sel-akun { font-weight: 600; color: #1f2a24; font-size: .9rem; }
        .slot {
            width: 100%; min-height: 2.4rem; padding: .3rem .4rem; font: inherit; font-size: .9rem; cursor: pointer;
            border: 2px dashed #b9b4a3; border-radius: 8px; background: rgba(255,255,255,.55);
            color: #8a8573; text-align: center;
        }
        .slot.terisi { border-style: solid; border-color: #2f5d50; background: #fff; color: #1f2a24; font-weight: 600; }
        .slot.benar { border-style: solid; border-color: #8fb996; background: #dcebd9; color: #1f2a24; font-weight: 600; cursor: default; }
        .slot.salah { border-style: solid; border-color: #d58a82; background: #f8dcd8; color: #1f2a24; font-weight: 600; }
        .slot:focus-visible, .chip:focus-visible { outline: 3px solid #d99a1e; outline-offset: 2px; }
        .chip {
            width: 100%; padding: .7rem .6rem; font: inherit; font-weight: 600; cursor: pointer; text-align: center;
            border: 2px solid #2f5d50; border-radius: 8px; background: #2f5d50; color: #fff;
        }
        .chip.dipilih { background: #f3c15a; border-color: #d99a1e; color: #1f2a24; }
    </style>

    

    <div id="orientation-lock" class="allow-scroll pt-16 lg:pt-4">
        <div class="pt-4 flex sticky top-0 justify-between px-4 bg-[#F8F5ED] shrink-0">
            <a href="/menu" id="prevBtn"
                class="rounded-full w-7 h-7 bg-white flex justify-center disabled:opacity-50">
                <i class="pt-1" data-feather="chevron-left"></i>
            </a>

            <div class="flex gap-4">

                <button
                    class="rounded-full w-7 h-7 bg-white flex justify-center">
                    <i data-feather="volume-2"></i>
                </button>


            </div>
        </div>
        <main class="mx-auto w-full max-w-3xl lg:max-w-6xl px-4 pb-6 pt-3">
            <h1 class="text-3xl font-semibold text-stone-800">Game</h1>
            <p class="mb-4 text-stone-600">
                Pilih Debit atau Kredit di sebelah kanan, lalu klik kotak kosong di tabel.
                Pilihan tetap aktif, jadi Anda bisa mengisi beberapa kotak berturut-turut.
                Klik kotak yang sudah terisi tanpa pilihan aktif untuk mengosongkannya.
            </p>

            <div class="mb-4 grid grid-cols-3 gap-2">
                <div class="rounded-lg border border-stone-300 bg-white/70 px-2 py-2 text-center">
                    <b id="terisi" class="block text-xl text-stone-800">0/0</b>
                    <span class="text-xs text-stone-500">Terisi</span>
                </div>
                <div class="rounded-lg border border-stone-300 bg-white/70 px-2 py-2 text-center">
                    <b id="benar" class="block text-xl text-stone-800">0</b>
                    <span class="text-xs text-stone-500">Benar</span>
                </div>
                <div class="rounded-lg border border-stone-300 bg-white/70 px-2 py-2 text-center">
                    <b id="percobaan" class="block text-xl text-stone-800">0</b>
                    <span class="text-xs text-stone-500">Percobaan</span>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div class="min-w-0 flex-1 overflow-x-auto rounded-lg border border-stone-300 bg-white/60">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-stone-200/70 text-sm text-stone-700">
                                <th class="px-2 py-2 text-left font-semibold">Jenis Akun</th>
                                <th class="px-2 py-2 text-center font-semibold">Saldo Normal</th>
                                <th class="px-2 py-2 text-center font-semibold">Jika Bertambah</th>
                                <th class="px-2 py-2 text-center font-semibold">Jika Berkurang</th>
                            </tr>
                        </thead>
                        <tbody id="isi-tabel" class="[&>tr]:border-t [&>tr]:border-stone-200 [&>tr>td]:p-1.5"></tbody>
                    </table>
                </div>

                <div class="sticky top-15 w-28 shrink-0">
                    <p class="mb-2 text-sm font-semibold text-stone-700">Pilihan jawaban</p>
                    <div id="bank" class="flex flex-col gap-2" role="group" aria-label="Pilihan jawaban"></div>
                </div>
            </div>

            <div class="mt-4 flex flex-wrap items-center gap-3">
                <button type="button" id="cek" disabled
                    class="rounded-lg bg-emerald-800 px-4 py-2 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    Cek jawaban
                </button>
                <button type="button" id="ulang"
                    class="rounded-lg border border-stone-400 bg-white/70 px-4 py-2 text-stone-800 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2">
                    Main lagi
                </button>
                <span id="pesan" role="status" aria-live="polite" class="font-semibold text-stone-800"></span>
            </div>
        </main>
    </div>

    <script src="{{ asset('js/maze.js') }}"></script>
</x-layout>