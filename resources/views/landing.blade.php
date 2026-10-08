<x-layout :hideheader="true" :hidefooter="true">

    <div id="orientation-lock" class="mx-auto flex h-[70vh] lg:h-[88vh] overflow-hidden lg:gap-30 max-w-6xl items-center px-8">

        <main class="flex w-3/5 flex-col items-center text-center">

            <h1 class="text-3xl font-medium leading-tight">
                Selamat Datang di Website
                <br>
                Belajar Akuntansi LogKyv
            </h1>

            <p class="mt-5 max-w-xl text-sm leading-relaxed text-gray-600">
                Jelajahi materi Praktikum Akuntansi Lembaga/Instansi
                Pemerintah melalui pembelajaran interaktif yang mudah
                dipahami, menarik, dan menyenangkan.
            </p>

            <a
                href="/menu"
                class="mt-8 rounded-lg bg-red-200 px-6 py-3 font-medium transition hover:bg-red-300">
                Mulai Menjelajah
            </a>

        </main>

        <aside class="flex w-2/5 justify-center">
            <div>
                <img
                    class="h-auto w-64 object-contain"
                    src="{{ asset('assets/no-image.jpg') }}"
                    alt="Ilustrasi Akuntansi"
                >
            </div>
        </aside>

    </div>
</x-layout>