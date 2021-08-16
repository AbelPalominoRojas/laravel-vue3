const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .copyDirectory([
        'node_modules/@fortawesome/fontawesome-free/webfonts',
        // 'resources/fonts'
    ], 'public/fonts')
    .sass('resources/scss/app.scss',
        'public/css')
    .options({
        // postCss: [
        //     require('postcss-css-variables')()
        // ],
        processCssUrls: false,
        // quietDeps: true
    });
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);

mix.disableNotifications();
