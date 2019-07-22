const mix = require('laravel-mix')

require('laravel-mix-wp-blocks')

const postCssPlugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-preset-env'),
]

mix.block('resources/assets/scripts/blocks.js', './dist')
mix.postCss('resources/assets/styles/blocks.css', './dist', postCssPlugins)

.browserSync({proxy: 'https://example.valet'})

.setPublicPath('./dist')
.setResourceRoot('./resources')
