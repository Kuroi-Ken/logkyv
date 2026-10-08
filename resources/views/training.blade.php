<x-layout :hideheader="true">
    <div id="orientation-lock" class="allow-scroll px-10 lg:min-h-[88vh] min-h-screen overflow-hidden gap-5 flex flex-col max-w-7xl  pt-20 lg:py-10">
        <div class="lg:max-w-xl w-full">
            <a href="/menu" class="group flex items-center justify-between border w-fit border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                <div class="flex items-center gap-2 sm:gap-4">
                    <div class="w-5 h-5 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                        <i data-feather="chevron-left" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                    </div>
                </div>
            </a>
        </div>
        <div class="lg:flex-row min-h-[70vh] overflow-hidden gap-5 flex flex-col lg:gap-20 max-w-6xl lg:max-w-full">
            <div class="w-full gap-5 flex flex-col">
                <div class="lg:max-w-xl w-full">
                    <h1 class="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C77F0F] mb-2 sm:mb-3">Jurnal, Buku Besar, & Neraca Saldo</h1>
                    <a href="/quiz" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                        <div class="flex items-center gap-2 sm:gap-4">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                                <i data-feather="play" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                            </div>

                            <div>
                                <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                                    Mulai Quiz
                                </h3>
                            </div>
                        </div>

                        <span class="text-sm sm:text-lg text-[#C77F0F] group-hover:text-[#F5B942]">
                            →
                        </span>
                    </a>
                </div>
                <div class="lg:max-w-xl w-full">
                    <h1 class="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#C77F0F] mb-2 sm:mb-3">Jurnal, Buku Besar, & Neraca Saldo</h1>
                    <a href="{{ asset('assets/soal-jurnal-AKL.pdf') }}" target="_blank" class="group flex items-center justify-between border border-[#172554]/10 bg-white rounded-2xl p-2.5 sm:p-4">
                        <div class="flex items-center gap-2 sm:gap-4">
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8F5ED] flex items-center justify-center shrink-0">
                                <i data-feather="download" class="w-4 h-4 sm:w-5 sm:h-5 text-[#172554]"></i>
                            </div>

                            <div>
                                <h3 class="text-xs sm:text-base font-medium text-[#172554]">
                                    Unduh Soal Jurnal
                                </h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="group w-full lg:max-3/4 mx-auto mt-7 border lg:h-1/2 border-[#172554]/10 rounded-2xl sm:rounded-[28px] bg-white p-2.5 sm:p-3 shadow-lg flex flex-col justify-center">
                <div class="flex flex-col md:flex-row h-full items-center">

                    <div class="px-2 sm:px-6 py-2 sm:py-5 text-left">
                        <h2 class="text-base sm:text-2xl lg:text-3xl font-medium text-[#172554]">
                            Quotes
                        </h2>

                        <p class="text-xs sm:text-sm lg:text-base font-light leading-snug sm:leading-relaxed text-[#475569] mt-1 sm:mt-3 line-clamp-3 md:line-clamp-none">
                            “Apa yang melewatkanku tidak akan pernah menjadi takdirku, dan apa yang ditakdirkan untukku tidak akan pernah melewatkanku.”
                        </p>

                        <div class="flex items-center gap-1 sm:gap-2 mt-2 sm:mt-5 text-xs sm:text-sm font-medium text-[#172554]">
                            Umar bin Khatab
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <script>
        (function () {
            var el = document.getElementById('orientation-lock');
            var mq = window.matchMedia('(max-width: 900px) and (orientation: portrait)');
            var lastX, lastY;

            el.addEventListener('touchstart', function (e) {
                lastX = e.touches[0].clientX;
                lastY = e.touches[0].clientY;
            }, { passive: true });

            el.addEventListener('touchmove', function (e) {
                if (!mq.matches) return;
                var dx = e.touches[0].clientX - lastX;
                var dy = e.touches[0].clientY - lastY;
                lastX = e.touches[0].clientX;
                lastY = e.touches[0].clientY;
                el.scrollTop += Math.abs(dx) >= Math.abs(dy) ? dx : -dy;
                e.preventDefault();
            }, { passive: false });
        })();
    </script>
</x-layout>