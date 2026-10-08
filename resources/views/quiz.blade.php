<x-layout>
    <div id="orientation-lock" class="relative w-screen h-screen overflow-hidden flex flex-col">
        <img
            src="{{ asset('assets/classroom.jpg') }}"
            class="absolute inset-0 -z-10 w-full h-[70%] object-cover"
            alt="">

        <div id="progress" class="shrink-0"></div>

        <div class="relative mt-4 flex justify-between px-4 shrink-0">
            <button id="prevBtn"
                class="rounded-full w-7 h-7 bg-white flex justify-center disabled:opacity-50">
                <i class="pt-1" data-feather="chevron-left"></i>
            </button>

            <div id="timer"
                class="absolute left-1/2 -translate-x-1/2 h-7 px-3 rounded-full bg-white
                    flex items-center text-[13px] font-bold tabular-nums">
                15:00
            </div>

            <div class="flex gap-4">
                <button id="restart"
                    class="rounded-full w-7 h-7 bg-white flex justify-center">
                    <i class="pt-1" data-feather="refresh-cw"></i>
                </button>

                <button
                    class="rounded-full w-7 h-7 bg-white flex justify-center">
                    <i data-feather="volume-2"></i>
                </button>

                <a href="/"
                    class="w-7 h-7 rounded-full bg-white flex justify-center">
                    <i data-feather="home" class="w-5 pt-1 h-5"></i>
                </a>
            </div>
        </div>

        <div id="quizMenu"
            class="absolute right-3 top-14 z-40 flex flex-col flex-wrap-reverse gap-1.5"
            style="max-height: calc(60% - 4.5rem);"></div>

        <div id="stage" class="pt-5 shrink-0">
            <div id="badge"></div>
        </div>

        <div class="relative flex-1 min-h-0">

            <div
                class="absolute inset-0 z-10 flex justify-center pointer-events-none">
                <img
                    id="board"
                    class="object-contain"
                    src=""
                    alt="">
            </div>

            <div
                class="absolute bottom-0 left-0 z-20 w-full pointer-events-none">
                <img
                    id="avatar"
                    class="w-40 h-40 lg:w-60 lg:h-60 object-contain drop-shadow-lg"
                    src=""
                    alt="">
            </div>

        </div>

        <div
            id="panel"
            class="relative z-30 shrink-0
                bg-[#f2f4fb]
                w-full
                h-[40%]
                min-h-0
                pb-5
                rounded-t-2xl
                overflow-y-auto">

            <div
                id="name"
                class="text-[#0e8f81]
                    w-full
                    items-center
                    flex
                    pt-3
                    pl-5
                    text-left
                    h-10
                    sticky top-0
                    dark:text-[#4fd3c4]
                    font-bold
                    text-[15px]
                    bg-[#f2f4fb]"></div>

            <div class="px-5">
                <div
                    id="text"
                    class="text-[14.5px] flex items-center leading-relaxed min-h-10"></div>

                <div
                    id="options"
                    class="flex flex-col"></div>


                <button
                    id="nextBtn"
                    class="mb-3 absolute bottom-0 right-5
                        bg-[#c77f0f]
                        dark:bg-[#f5b942]
                        text-[#241a04]
                        font-bold
                        px-4 py-2
                        rounded-[10px]
                        text-[13px]">
                    Lanjut
                </button>
            </div>

        </div>

    </div>
    
    <script src="{{ asset('js/quiz.js') }}">
    </script>
</x-layout>