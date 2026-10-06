<header id="orientation-header" class="flex h-15 lg:h-20 items-center justify-between px-8 lg:px-20 bg-white sticky top-0 ">

    <a href="/" class="flex items-center gap-3">
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