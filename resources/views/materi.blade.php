<x-layout :hideheader="true" :hidefooter="true">
    <div id="orientation-lock" class="allow-scroll px-10 lg:min-h-[88vh] min-h-screen overflow-hidden gap-5 flex flex-col max-w-6xl lg:max-w-full pt-20 lg:py-10">
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