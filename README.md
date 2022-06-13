## Laravel & React Scaffolding
--------------------------------

Follow Up these below steps:

1. Install Laravel App
```php 
    composer create-project laravel/laravel:^8.0 your_app_name
```

2. Install react ui in your laravel
```php 
    php artisan ui react
```

3. Then open laravel app resource folder and click js folder
4. After completing the setup then open resources/view folder. Make a file index.blade.php 
```html 
    <body>

    <div id="root">

    </div>

    <script type="text/javascript" src="{{asset('js/Main.js')}}"></script>
    </body>
```

5. Then paste the code in webpack.mix.js 
```javascript 
    const mix = require('laravel-mix');

    mix.js('resources/js/Main.js', 'public/js')
        .react()
        .sass('resources/sass/app.scss', 'public/css');
```

6. Finally run these commands followed by sequence 
```javascript 
    npm install
    npm run dev
```

7. Your Laravel React scaffolding is ready
8. For Development mode run 
```php
    npm run watch
```





