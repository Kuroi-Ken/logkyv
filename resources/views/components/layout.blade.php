@props(['hideheader' => false])
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
      top: 100%;
      left: 0;
      width: 100vh;
      height: 100vw;
      transform-origin: left top;
      transform: rotate(-90deg);
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

<body class="">
    <x-landscape>
        
    </x-landscape>

    @if ($hideheader ?? true)    
    <x-header></x-header>
    @endif

    {{ $slot }}

    <script>
        feather.replace();
    </script>

</body>

</html>
