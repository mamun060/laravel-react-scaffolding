
<?php 
$local = app()->getLocale();
?>
<html lang="{{$local}}">
<head>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <link rel="stylesheet" href="{{asset('css/responsive.css')}}">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css">
    <title>{{ __('title') }}</title>
</head>

<body dir="ltr">

<div id="root"></div>

<script type="text/javascript" src="{{asset('js/Main.js')}}"></script>
</body>
</html>
