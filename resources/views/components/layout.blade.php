@props(['hideheader' => false])
@props(['hideheader' => false, 'hidefooter' => false])
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<style>
  @media screen and (max-width: 900px) and (orientation: portrait) {
    html, body {
      width: 100vw;
      height: 100vh;
      margin: 0;
      overflow: hidden;
    }
    #orientation-lock {
    position: absolute;
    top: 0;
    left: 100%;
    width: 90vh;
    height: 100vw;
    transform-origin: left top;
    transform: rotate(90deg);
    }

    #orientation-lock.allow-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
    padding-bottom: 2rem;
    touch-action: none;

    }

    #orientation-header {
    position: absolute;
    top: 0;
    left: 100%;
    width: 93vh;
    height: 15vw;
    transform-origin: left top;
    transform: rotate(90deg);
    z-index: 50;  
    }

    #orientation-footer {
      position: absolute;
      top: 0;
      left: 15%;
      width: 93vh;
      height: 15vw;
      transform-origin: left top;
      transform: rotate(90deg);
      z-index: 50;  
      }


  }
</style>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @vite('resources/css/app.css')

    <title>LogKyv</title>

    <script src="https://unpkg.com/feather-icons"></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link
        href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap"
        rel="stylesheet"
    >
</head>

<body class="max-h-screen bg-[#F8F5ED]">

    @if ($hideheader ?? true)    
    <x-header ></x-header>
    @endif

    {{ $slot }}

    @if ($hidefooter ?? true)    
    <x-footer ></x-footer>
    @endif

    <script>
        feather.replace();
    </script>

</body>

</html>
