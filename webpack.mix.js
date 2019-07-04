const mix = require('laravel-mix')

require('laravel-mix-wp-blocks')

const tailwindConfig = './../../themes/sage/tailwind.config.js'

const postCssPlugins = [
  require('postcss-import'),
  require('postcss-nested'),
  require('postcss-preset-env'),
  require('tailwindcss')(tailwindConfig),
  require('postcss-preset-env')({ stage: 0 }),
  require('postcss-hexrgba'),
]

mix.block(
  './resources/assets/scripts/blocks.js',
  './dist/blocks.js',
)

.postCss(
  './resources/assets/styles/blocks.css',
  './dist/blocks.css',
  postCssPlugins,
)

.browserSync({
  proxy: 'http://ndncollective.valet',
})

.setPublicPath(
  './dist',
)
