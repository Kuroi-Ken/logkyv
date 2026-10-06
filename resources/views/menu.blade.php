<x-layout class="bg-[#F8F5ED]" :hideheader="true">

    <main id="orientation-lock" class="lg:max-h-screen px-4 sm:px-7 lg:px-20 py-6 pt-20 lg:pt-6 sm:py-10">

        <div class="mb-6 sm:mb-8">
            <h1 class="text-2xl sm:text-4xl lg:text-5xl font-medium text-[#172554]">
                Halo!
            </h1>
            <h2 class="text-sm sm:text-xl lg:text-2xl font-light text-[#475569] mt-1">
                Mau belajar materi atau mau main game?
            </h2>
        </div>

        <div class="flex flex-row gap-3 sm:gap-6 lg:gap-28 items-stretch">

            <a href="" class="group w-1/2 border border-[#172554]/10 rounded-2xl sm:rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg flex flex-col justify-center">
                <div class="flex flex-col md:flex-row h-full items-center">

                    <div class="px-2 sm:px-6 py-2 sm:py-5 text-left">
                        <h2 class="text-base sm:text-2xl lg:text-3xl font-medium text-[#172554]">
                            Tentang Logkyv
                        </h2>

                        <p class="text-xs sm:text-sm lg:text-base font-light leading-snug sm:leading-relaxed text-[#475569] mt-1 sm:mt-3 line-clamp-3 md:line-clamp-none">
                            Platform pembelajaran akuntansi yang membantu kamu memahami materi melalui pembelajaran interaktif, latihan soal, dan permainan.
                        </p>

                        <div class="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-5 text-xs sm:text-sm font-medium text-[#172554]">
                            Pelajari lebih lanjut
                            <span class="text-[#C77F0F]">→</span>
                        </div>
                    </div>

                </div>
            </a>

            <div class="w-1/2 lg:w-1/3 flex flex-col justify-center">
                <p class="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C77F0F] mb-2 sm:mb-3">
                    Pilih aktivitas
                </p>

                <div class="flex flex-col gap-2 sm:gap-3">

                    <a href="/materi" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4">
                        <div class="flex items-center gap-2 sm:gap-4">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                                <i data-feather="book" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                            </div>

                            <div>
                                <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                                    Masuk Materi
                                </h3>
                            </div>
                        </div>

                        <span class="text-sm sm:text-lg text-[#C77F0F] group-hover:text-[#F5B942]">
                            →
                        </span>
                    </a>

                    <a href="" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                        <div class="flex items-center gap-2 sm:gap-4">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                                <i data-feather="help-circle" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                            </div>

                            <div>
                                <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                                    Soal & Kuis
                                </h3>
                            </div>
                        </div>

                        <span class="text-sm sm:text-lg text-[#C77F0F] group-hover:text-[#F5B942]">
                            →
                        </span>
                    </a>

                    <a href="" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                        <div class="flex items-center gap-2 sm:gap-4">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                                <i data-feather="monitor" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                            </div>

                            <div>
                                <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                                    Game
                                </h3>
                            </div>
                        </div>

                        <span class="text-sm sm:text-lg text-[#C77F0F] group-hover:text-[#F5B942]">
                            →
                        </span>
                    </a>

                </div>
            </div>

        </div>

    </main>

</x-layout>