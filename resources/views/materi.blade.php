<x-layout :hideheader="true">
    <div id="orientation-lock" class="allow-scroll px-10 lg:flex-row lg:min-h-[88vh] min-h-screen overflow-hidden gap-5 flex flex-col lg:gap-20 max-w-6xl lg:max-w-full pt-20 lg:py-10">
        <div class="lg:max-w-xl w-full">
            <h1 class="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C77F0F] mb-2 sm:mb-3">Jurnal, Buku Besar, & Neraca Saldo</h1>
            <a href="/game" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                <div class="flex items-center gap-2 sm:gap-4">
                    <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                        <i data-feather="play" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                    </div>

                    <div>
                        <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                            Mulai Materi
                        </h3>
                    </div>
                </div>

                <span class="text-sm sm:text-lg text-[#C77F0F] group-hover:text-[#F5B942]">
                    →
                </span>
            </a>
        </div>
        <div class="lg:w-full">
            <h1 class="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C77F0F] mb-2 sm:mb-3">
                Video pembelajaran
            </h1>
            <div class="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#172554]/10 bg-black">
                <iframe 
                    class="w-full aspect-video" 
                    src="https://www.youtube.com/embed/nzoWajdbhe0" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</x-layout>