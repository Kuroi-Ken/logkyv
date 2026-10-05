<header id="orientation-header" class="flex h-20 items-center justify-between px-8">

    <a href="/" class="flex items-center gap-3">
        <img
            class="h-12 w-20 object-cover"
            src="{{ asset('assets/no-image.jpg') }}"
            alt="Logo LogKyv"
        >

        <span class="text-xl font-semibold">
            LogKyv
        </span>
    </a>

    <button
        id="soundButton"
        type="button"
        class="flex items-center justify-center pr-2"
        aria-label="Matikan suara"
    >
        <i data-feather="volume-2"></i>
    </button>

</header>


<script>

    let soundOn = true;

    document.getElementById('soundButton').onclick = function () {
        soundOn = !soundOn;

        this.innerHTML = `<i data-feather="${soundOn ? 'volume-2' : 'volume-x'}"></i>`;

        feather.replace();
    };
</script>