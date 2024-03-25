let mix = require('laravel-mix');
let fs = require('fs');

mix.options({ processCssUrls: false })

// Compile assets with source maps
mix.js('assets/js/main.js', 'public/js')
    .sass('assets/sass/main.scss', 'public/css/')
    .sourceMaps(true, 'source-map')

mix.copy('assets/images', 'public/images');
